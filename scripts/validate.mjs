#!/usr/bin/env node
/**
 * validate.mjs — checagem de convenções do repo.
 *
 * Roda sem dependências, lendo os arquivos como texto. Acumula todos os
 * problemas e sai com código 1 se houver algum erro (warnings não reprovam).
 *
 * Cada checagem existe por causa de uma armadilha real deste projeto — veja
 * CLAUDE.md para o porquê de cada regra.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

const err = (file, msg) => errors.push({ file, msg });
const warn = (file, msg) => warnings.push({ file, msg });
const read = p => readFileSync(join(ROOT, p), 'utf8');
const ls = p => (existsSync(join(ROOT, p)) ? readdirSync(join(ROOT, p)) : []);

// ---------------------------------------------------------------------------
// Carrega os capítulos: envelope + JSON estrito (checagem 5)
// ---------------------------------------------------------------------------

/** O mesmo regex de que scripts/migrate-*.mjs dependem. */
const ENVELOPE_RE =
  /^(import[\s\S]*?const chapter: Chapter = )([\s\S]*?)(;\s*export default chapter;\s*)$/;

const dataFiles = ls('src/data')
  .filter(f => /^cap-[a-z]+\.ts$/.test(f))
  .sort();

/** slug -> objeto Chapter parseado */
const chapters = new Map();

for (const f of dataFiles) {
  const path = `src/data/${f}`;
  const slug = f.slice(4, -3);
  const raw = read(path);
  const m = raw.match(ENVELOPE_RE);
  if (!m) {
    err(path, 'não casa com o envelope `const chapter: Chapter = {…}; export default chapter;` — os scripts de migração dependem desse formato');
    continue;
  }
  try {
    chapters.set(slug, JSON.parse(m[2]));
  } catch (e) {
    err(path, `corpo não é JSON estrito (chaves entre aspas duplas, sem vírgula final): ${e.message}`);
  }
}

// ---------------------------------------------------------------------------
// 1. Registro de capítulo em 3 vias
// ---------------------------------------------------------------------------

const indexSlugs = new Set(
  [...read('src/data/chapters.ts').matchAll(/["']slug["']\s*:\s*["']([a-z]+)["']/g)].map(m => m[1])
);

const chaptersTs = read('src/lib/chapters.ts');
// Só as chaves do record `const chapters: Record<string, Chapter> = { … };`
const recordBody = chaptersTs.match(/const chapters:[^=]*=\s*\{([\s\S]*?)\};/);
const recordSlugs = new Set(
  recordBody ? [...recordBody[1].matchAll(/^\s*([a-z]+)\s*:/gm)].map(m => m[1]) : []
);
const importSlugs = new Set(
  [...chaptersTs.matchAll(/^import\s+\w+\s+from\s+['"]~\/data\/cap-([a-z]+)['"]/gm)].map(m => m[1])
);
if (!recordBody) err('src/lib/chapters.ts', 'não consegui localizar o record `const chapters: Record<string, Chapter> = {…}`');

const fileSlugs = new Set(dataFiles.map(f => f.slice(4, -3)));
const allSlugs = new Set([...indexSlugs, ...recordSlugs, ...importSlugs, ...fileSlugs]);

for (const slug of [...allSlugs].sort()) {
  const missing = [];
  if (!fileSlugs.has(slug)) missing.push('o arquivo src/data/cap-' + slug + '.ts');
  if (!indexSlugs.has(slug)) missing.push('a entrada em chapterIndex (src/data/chapters.ts)');
  if (!importSlugs.has(slug)) missing.push('o import em src/lib/chapters.ts');
  if (!recordSlugs.has(slug)) missing.push('a entrada no record `chapters` (src/lib/chapters.ts)');
  if (missing.length) {
    err('registro', `capítulo "${slug}" está incompleto — falta ${missing.join(' e ')}. O build vai falhar com "Capitulum não encontrado".`);
  }
}

// ---------------------------------------------------------------------------
// 2/3/6. Varredura dos exercícios: references, placeholders, legado
// ---------------------------------------------------------------------------

/** ids de tópico existentes, por slug */
const topicIds = new Map();
for (const slug of ls('src/content/topics')) {
  topicIds.set(slug, new Set(ls(`src/content/topics/${slug}`)
    .filter(f => f.endsWith('.md'))
    .map(f => f.slice(0, -3))));
}

const PLACEHOLDER_RE = /\{([^}]*)\}/g;
const SIZE_RE = /^(md|lg|xl|xxl)$/;

/** Espelha splitAnswerAndSize() de src/lib/parse-question.ts. */
function splitAnswerAndSize(body) {
  if (SIZE_RE.test(body)) return { answer: '', size: body, bare: true };
  const colon = body.lastIndexOf(':');
  if (colon >= 0) {
    const suffix = body.slice(colon + 1);
    if (SIZE_RE.test(suffix)) return { answer: body.slice(0, colon), size: suffix };
  }
  return { answer: body, size: '' };
}

/** Retorna quantos placeholders de tamanho nu (legado) foram encontrados. */
function checkQuestion(path, where, q) {
  // Chaves desbalanceadas: o parser trata `{` sem `}` como texto literal,
  // então a lacuna simplesmente some da página sem erro nenhum.
  const opens = (q.match(/\{/g) || []).length;
  const closes = (q.match(/\}/g) || []).length;
  if (opens !== closes) {
    err(path, `${where}: chaves desbalanceadas (${opens} "{" vs ${closes} "}") — "${q}"`);
    return 0;
  }

  let bareSizes = 0;
  let count = 0;
  for (const m of q.matchAll(PLACEHOLDER_RE)) {
    count++;
    const body = m[1];
    const { answer, size, bare } = splitAnswerAndSize(body);

    if (bare) {
      bareSizes++;
      continue;
    }
    if (answer === '') {
      err(path, `${where}: placeholder vazio "{${body}}" — conta no denominador da nota mas nunca pontua`);
      continue;
    }
    if (answer.includes('|')) {
      const alts = answer.split('|');
      if (alts.some(a => a.trim() === '')) {
        err(path, `${where}: alternativa vazia em "{${body}}"`);
      }
      const seen = new Set();
      for (const a of alts) {
        if (seen.has(a)) err(path, `${where}: alternativa duplicada "${a}" em "{${body}}"`);
        seen.add(a);
      }
    }
    // Sufixo de tamanho escrito errado: `{ō:mdd}` vira parte da resposta.
    const tail = answer.lastIndexOf(':');
    if (!size && tail >= 0 && /^[a-z]{1,4}$/.test(answer.slice(tail + 1))) {
      err(path, `${where}: sufixo de tamanho inválido em "{${body}}" — use md, lg, xl ou xxl`);
    }
  }

  if (count === 0 && !/^\s*<|^\s*—/.test(q)) {
    warn(path, `${where}: questão sem nenhuma lacuna — "${q.slice(0, 60)}…"`);
  }
  return bareSizes;
}

for (const [slug, ch] of chapters) {
  const path = `src/data/cap-${slug}.ts`;
  const known = topicIds.get(slug) || new Set();
  // Legado é contado por arquivo — um aviso por ocorrência seria só ruído.
  const legacy = { index: 0, answers: 0, nullCells: 0, bareSize: 0 };

  for (const ex of ch.exercises || []) {
    const where = `ex. ${ex.number}`;

    // 2. references órfãos — falham em silêncio no site publicado
    for (const ref of ex.references || []) {
      if (!known.has(ref)) {
        err(path, `${where}: references "${ref}" não existe em src/content/topics/${slug}/ — o botão "Vide explicātionem" quebra sem aviso`);
      }
    }

    // 3. placeholders
    for (const q of ex.questions || []) legacy.bareSize += checkQuestion(path, where, q);

    // 6. legado (agregado — cap-ii…cap-viii ainda usam)
    if ('index' in ex) legacy.index++;
    if (ex.kind !== 'paradigm' && Array.isArray(ex.answers)) legacy.answers++;
    if (ex.kind === 'paradigm') {
      for (const t of ex.tables || []) {
        for (const r of t.rows || []) {
          for (const c of r.cells || []) if (c === null) legacy.nullCells++;
        }
      }
    }
  }

  if (legacy.index) warn(path, `${legacy.index} exercício(s) com o campo morto "index" — remova ao editar`);
  if (legacy.answers) warn(path, `${legacy.answers} exercício(s) com answers[] posicional (legado) — migre para respostas inline`);
  if (legacy.nullCells) warn(path, `${legacy.nullCells} célula(s) null em paradigma (legado) — use { answer: "…", given: false }`);
  if (legacy.bareSize) warn(path, `${legacy.bareSize} placeholder(s) de tamanho nu como "{md}" (legado) — use "{resposta:md}"`);
}

// ---------------------------------------------------------------------------
// 4. Regressão de small-caps (a regra mais cara do projeto)
// ---------------------------------------------------------------------------

/** Seletores comprovadamente sem macron — ver CLAUDE.md. */
const SMALL_CAPS_ALLOWLIST = new Set([
  '.site-nav-list a',
  '.site-nav-capitula summary',
  '.chapter-card .label',
  '.toc-title',
  '.tip-label',
  '.auxilia-title',
  '.answer-header',
  '.score',
  '.exemplum::before',
  '.frontis .epigraph cite',
  'table.paradigm th',
  '.content-topic-body th',
  '.content-topic-body td:first-child',
]);

for (const f of ls('src/styles').filter(f => f.endsWith('.css'))) {
  const path = `src/styles/${f}`;
  const lines = read(path).split('\n');
  lines.forEach((line, i) => {
    if (!/font-variant\s*:\s*small-caps/.test(line)) return;
    if (/^\s*(\/\*|\*)/.test(line)) return; // dentro de comentário
    // Sobe até a linha que abre o bloco para extrair o seletor.
    let sel = null;
    for (let j = i; j >= 0; j--) {
      const idx = lines[j].indexOf('{');
      if (idx >= 0) {
        const parts = [lines[j].slice(0, idx)];
        for (let k = j - 1; k >= 0 && /,\s*$/.test(lines[k]); k--) parts.unshift(lines[k]);
        sel = parts.join(' ').replace(/\s+/g, ' ').trim();
        break;
      }
    }
    const ok = sel !== null && sel.split(',').every(s => SMALL_CAPS_ALLOWLIST.has(s.trim()));
    if (!ok) {
      err(`${path}:${i + 1}`, `font-variant: small-caps em "${sel ?? '?'}" — versalete sintetizado desloca macrons (ā ē ī ō ū). Use italic + weight 600 + var(--burgundy), ou acrescente o seletor à allowlist em scripts/validate.mjs se o conteúdo nunca tiver macron.`);
    }
  });
}

// ---------------------------------------------------------------------------
// 7. Coerência de vocabulário / grammar / topics
// ---------------------------------------------------------------------------

for (const f of ls('src/content/vocabulary').filter(f => f.endsWith('.yaml'))) {
  const slug = f.slice(0, -5);
  if (!fileSlugs.has(slug)) {
    err(`src/content/vocabulary/${f}`, `não existe capítulo "${slug}" — arquivo órfão`);
  }
}
for (const dir of ['grammar', 'topics']) {
  for (const slug of ls(`src/content/${dir}`)) {
    if (!fileSlugs.has(slug)) {
      err(`src/content/${dir}/${slug}/`, `não existe capítulo "${slug}" — diretório órfão`);
    }
  }
}

// grammar precisa do prefixo NN- (a ordenação é por nome de arquivo)
for (const slug of ls('src/content/grammar')) {
  for (const f of ls(`src/content/grammar/${slug}`).filter(f => f.endsWith('.md'))) {
    if (!/^\d{2}-/.test(f)) {
      err(`src/content/grammar/${slug}/${f}`, 'falta o prefixo NN- — a seção Grammatica é ordenada por nome de arquivo');
    }
  }
}

// ---------------------------------------------------------------------------
// Relatório
// ---------------------------------------------------------------------------

const fmt = list => list.map(e => `  ${e.file}\n    ${e.msg}`).join('\n');

if (warnings.length) {
  console.log(`\n⚠  ${warnings.length} aviso(s) — legado tolerado, não reprova:\n`);
  console.log(fmt(warnings));
}
if (errors.length) {
  console.log(`\n✖  ${errors.length} erro(s):\n`);
  console.log(fmt(errors));
  console.log('');
  process.exit(1);
}

console.log(`\n✔  Convenções OK — ${chapters.size} capítulos, ${[...chapters.values()].reduce((n, c) => n + (c.exercises || []).length, 0)} exercícios.\n`);
