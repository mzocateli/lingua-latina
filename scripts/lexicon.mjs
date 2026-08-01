#!/usr/bin/env node
/**
 * lexicon.mjs — índice léxico consultável, extraído do Companion.
 *
 *   node scripts/lexicon.mjs āla        consulta um lema
 *   node scripts/lexicon.mjs ala        idem — a busca ignora macrons
 *   node scripts/lexicon.mjs --check x  progressão lexical do cap-x.ts
 *   node scripts/lexicon.mjs --build    reconstrói o índice
 *   node scripts/lexicon.mjs --stats    resumo por capítulo
 *
 * Por que só o Companion: é o único dos cinco livros que é born-digital e
 * preserva macrons. Os outros são OCR e saem com ZERO macrons em centenas de
 * milhares de caracteres — `ālae` vira `alae` silenciosamente. Ver
 * .claude/skills/fontes/references/ocr.md.
 *
 * O índice é gravado em .material/index/ (gitignored) e consultado por
 * processo, nunca carregado inteiro no contexto de um agent.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, '.material/txt/A_Companion_to_Familia_Romana.txt');
const INDEX_DIR = join(ROOT, '.material/index');
const INDEX = join(INDEX_DIR, 'vocabula.json');

/** Hífen não-separável (U+2011) usado pelo Companion vs. hífen comum do site. */
const NBHYPHEN = '‑';

const MACRONS = { 'ā':'a','ē':'e','ī':'i','ō':'o','ū':'u','ȳ':'y','ă':'a','ĕ':'e','ĭ':'i','ŏ':'o','ŭ':'u',
                  'Ā':'A','Ē':'E','Ī':'I','Ō':'O','Ū':'U','Ȳ':'Y' };
const fold = s => (s || '').replace(/[āēīōūȳăĕĭŏŭĀĒĪŌŪȲ]/g, c => MACRONS[c] || c).toLowerCase();

/** Numerais romanos dos capítulos de Familia Romana, em ordem. */
const NUMERALS = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV',
  'XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX',
  'XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV'];
const ORDER = new Map(NUMERALS.map((n, i) => [n, i + 1]));

const CATEGORIES = ['Nōmina', 'Verba', 'Adiectīva', 'Prōnōmina', 'Adverbia', 'Praepositiōnēs', 'Coniūnctiōnēs'];

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

function build() {
  if (!existsSync(SRC)) {
    console.error('✖  cache não encontrado. Rode primeiro: npm run materia');
    process.exit(1);
  }
  // O cache vem com CRLF e com form feed colado no início da linha que abre
  // cada página — e os inícios de capítulo caem justamente em quebra de
  // página, então sem limpar isso nenhum cabeçalho casa.
  const lines = readFileSync(SRC, 'utf8').split('\n').map(l => l.replace(/[\f\r]/g, ''));

  // Início de capítulo = cabeçalho seguido (tolerando linhas em branco no
  // meio — alguns capítulos trazem uma quebra ali) de "Rēs Grammaticae
  // Novae". O cabeçalho sozinho se repete no topo de cada página (running
  // header), então só ele não serve para delimitar.
  const starts = [];
  lines.forEach((line, i) => {
    const m = line.match(/^([IVX]+)\.\s{1,3}(\S.*?)\s*$/);
    if (!m || !ORDER.has(m[1])) return;
    let j = i + 1;
    while (j < lines.length && j < i + 6 && !lines[j].trim()) j++;
    if (!(lines[j] || '').startsWith('Rēs Grammaticae Novae')) return;
    starts.push({ numeral: m[1], title: m[2], line: i });
  });
  if (!starts.length) {
    console.error('✖  não localizei nenhum início de capítulo no Companion — o layout do PDF mudou?');
    process.exit(1);
  }

  const chapters = [];
  for (let i = 0; i < starts.length; i++) {
    const from = starts[i].line;
    const to = i + 1 < starts.length ? starts[i + 1].line : lines.length;
    chapters.push({ ...starts[i], from, to });
  }

  const entries = [];
  for (const ch of chapters) {
    const vi = lines.slice(ch.from, ch.to).findIndex(l => l.startsWith('Vocābula Disposita'));
    if (vi < 0) continue;                       // capítulos iniciais podem não ter a seção
    const block = lines.slice(ch.from + vi + 1, ch.to);

    let category = null;
    for (const raw of block) {
      const line = raw.trim();
      if (!line) continue;

      // Linha de categoria — pode trazer as próprias entradas em seguida
      // ("Coniūnctiōnēs dum ut", "Prōnōmina ipse, ipsa, ipsum").
      const cat = CATEGORIES.find(c => line === c || line.startsWith(c + ' '));
      if (cat) {
        category = cat;
        const rest = line.slice(cat.length).trim();
        if (rest) {
          // Lista curta de palavras-função ("Coniūnctiōnēs dum ut") — só
          // quando a linha não é na verdade um bloco de lemas com marcadores
          // de conjugação/declinação ("Verba ‑āre (1) pugnat, pugnāre …"),
          // que bareWords quebraria em desinências soltas (āre, ere, ium).
          for (const w of bareWords(rest)) push(entries, w, ch, category, rest);
          for (const l of lemmasIn(rest)) push(entries, l.head, ch, category, l.full);
        }
        continue;
      }
      if (!category) continue;

      for (const lemma of lemmasIn(line)) push(entries, lemma.head, ch, category, lemma.full);
    }
  }

  // Dedup: fica a PRIMEIRA aparição (o capítulo que introduz a palavra).
  const byKey = new Map();
  for (const e of entries) {
    const k = fold(e.head);
    const prev = byKey.get(k);
    if (!prev || e.order < prev.order) byKey.set(k, e);
  }
  const index = [...byKey.values()].sort((a, b) => a.order - b.order || a.head.localeCompare(b.head));

  mkdirSync(INDEX_DIR, { recursive: true });
  writeFileSync(INDEX, JSON.stringify({
    source: 'A_Companion_to_Familia_Romana.pdf (Neumann) — born-digital, macrons íntegros',
    built: new Date().toISOString(),
    chapters: chapters.map(c => ({ numeral: c.numeral, title: c.title })),
    entries: index,
  }), 'utf8');

  const perCh = new Map();
  for (const e of index) perCh.set(e.numeral, (perCh.get(e.numeral) || 0) + 1);
  console.log(`✔  ${index.length} lemas de ${chapters.length} capítulos → .material/index/vocabula.json`);
  console.log('   ' + NUMERALS.filter(n => perCh.has(n)).map(n => `${n}:${perCh.get(n)}`).join('  '));
  return index;
}

function push(out, head, ch, category, full) {
  head = head.trim();
  if (!head || head.length < 2) return;
  out.push({
    head,
    full: full.trim(),
    category,
    numeral: ch.numeral,
    title: ch.title,
    order: ORDER.get(ch.numeral),
  });
}

/**
 * Palavras-função soltas numa linha de categoria ("Coniūnctiōnēs dum ut").
 *
 * Conservador de propósito: recusa a linha inteira se ela parecer um bloco de
 * lemas com marcadores de conjugação/declinação, e descarta qualquer token
 * prefixado por hífen — esses são DESINÊNCIAS (‑āre, ‑ere, ‑ium), não lemas,
 * e foram a principal fonte de lixo no índice.
 */
function bareWords(s) {
  const stripped = s.replace(/\([^)]*\)/g, ' ');
  if (/\d/.test(stripped)) return [];                       // "‑āre (1)" → bloco de verbos
  const tokens = stripped.split(/[\s,]+/).filter(Boolean);
  if (tokens.length > 8) return [];                          // lista longa = bloco de lemas
  return tokens
    .filter(w => !w.startsWith(NBHYPHEN) && !w.startsWith('-'))
    .map(w => w.replace(new RegExp(`[${NBHYPHEN}\\-…:;.]+$`, 'g'), ''))
    .filter(w => /^[a-zāēīōūȳăĕĭŏŭ]+$/i.test(w) && w.length >= 2);
}

/**
 * Lemas numa linha do bloco de vocabulário.
 *
 * Só aceitamos linhas com marcador estrutural inequívoco — genitivo com hífen
 * não-separável (`herba, ‑ae`), gênero (`arbor, arboris ( f.)`) ou genitivo
 * por extenso (`collis, collis`). As GLOSAS em inglês nunca têm esses
 * marcadores, e é isso que as separa do latim de forma confiável, já que os
 * dois vêm em blocos distintos do PDF e não dá para parear por posição.
 */
function lemmasIn(line) {
  if (!new RegExp(`,\\s*${NBHYPHEN}|\\(\\s*[mfn]\\.|\\bgen\\b`).test(line)) return [];

  const out = [];
  // `palavra, ‑ending` | `palavra, palavra(is)` | `palavra, ‑a, ‑um`
  const re = new RegExp(
    `([a-zāēīōūȳăĕĭŏŭ]{2,})\\s*,\\s*(?:${NBHYPHEN}[a-zāēīōūȳăĕĭŏŭ]+|[a-zāēīōūȳăĕĭŏŭ]{2,})`,
    'gi'
  );
  for (const m of line.matchAll(re)) {
    const [full, head] = m;
    const second = full.slice(head.length).replace(/^\s*,\s*/, '');

    // Regra decisiva: ou a 2ª parte é uma desinência (`herba, ‑ae`), ou é um
    // genitivo por extenso, que em latim COMPARTILHA O RADICAL com o
    // nominativo (`leō, leōnis`; `arbor, arboris`; `pedes, peditis`).
    // Pares de glosa em inglês que caem na mesma linha ("stems, too";
    // "ium, will") falham nos dois testes — era daí que vinha o lixo.
    if (!second.startsWith(NBHYPHEN)) {
      const a = fold(head), b = fold(second);
      const stem = a.slice(0, Math.min(3, a.length));
      if (!b.startsWith(stem)) continue;
    }
    out.push({ head, full });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Query
// ---------------------------------------------------------------------------

function load() {
  if (!existsSync(INDEX)) {
    console.error('✖  índice não encontrado. Rode: node scripts/lexicon.mjs --build');
    process.exit(1);
  }
  return JSON.parse(readFileSync(INDEX, 'utf8'));
}

function query(term) {
  const { entries } = load();
  const t = fold(term);
  const exact = entries.filter(e => fold(e.head) === t);
  const partial = exact.length ? [] : entries.filter(e => fold(e.head).startsWith(t) || t.startsWith(fold(e.head)));

  const hits = exact.length ? exact : partial;
  if (!hits.length) {
    console.log(`—  "${term}" não está no índice do Companion.`);
    console.log('   Pode ser forma flexionada, nome próprio, ou palavra fora do Familia Romana.');
    console.log('   Ausência aqui NÃO prova que a palavra esteja errada.');
    return;
  }
  for (const e of hits.slice(0, 12)) {
    const flag = fold(term) === fold(e.head) && term !== e.head && /[āēīōūȳ]/.test(e.head)
      ? `   ⚠  grafia correta com macron: ${e.head}` : '';
    console.log(`${e.head}${e.full !== e.head ? ` (${e.full})` : ''}`);
    console.log(`   ${e.category} · introduzido no Cap. ${e.numeral} — ${e.title}`);
    if (flag) console.log(flag);
  }
  if (exact.length === 0) console.log(`\n(nenhuma correspondência exata; ${hits.length} aproximada(s))`);
}

/** [slug, posição] de cada capítulo do site, lido de src/data/chapters.ts. */
function chapterOrders() {
  const raw = readFileSync(join(ROOT, 'src/data/chapters.ts'), 'utf8');
  const out = [];
  for (const m of raw.matchAll(/["']slug["']\s*:\s*["']([a-z]+)["']\s*,\s*["']numeral["']\s*:\s*["']([IVX]+)["']/g)) {
    if (ORDER.has(m[2])) out.push([m[1], ORDER.get(m[2])]);
  }
  return out;
}

/** Palavras latinas (normalizadas) dos campos de latim puro de um capítulo. */
function latinWords(slug) {
  const path = join(ROOT, `src/data/cap-${slug}.ts`);
  if (!existsSync(path)) return [];
  const m = readFileSync(path, 'utf8')
    .match(/^(import[\s\S]*?const chapter: Chapter = )([\s\S]*?)(;\s*export default chapter;\s*)$/);
  if (!m) return [];
  const out = [];
  for (const ex of JSON.parse(m[2]).exercises || []) {
    const texts = [...(ex.questions || [])];
    if (ex.exemplum) texts.push(ex.exemplum);
    for (const t of ex.tables || []) {
      for (const r of t.rows || []) {
        for (const c of r.cells || []) {
          if (typeof c === 'string') texts.push(c);
          else if (c && typeof c === 'object' && c.answer) texts.push(c.answer);
        }
      }
    }
    for (const raw of texts) {
      const text = raw.replace(/\/\/.*$/, ' ').replace(/<[^>]+>/g, ' ')
        .replace(/\{([^}]*)\}/g, ' $1 ').replace(/\|/g, ' ');
      for (const w of text.split(/[^A-Za-zāēīōūȳĀĒĪŌŪȲăĕĭŏŭ]+/)) {
        if (w.length >= 3) out.push(fold(w));
      }
    }
  }
  return out;
}

/** Progressão lexical: palavras usadas num capítulo antes de serem ensinadas. */
function check(slug) {
  const { entries } = load();
  const path = join(ROOT, `src/data/cap-${slug}.ts`);
  if (!existsSync(path)) {
    console.error(`✖  não existe src/data/cap-${slug}.ts`);
    process.exit(1);
  }
  const m = readFileSync(path, 'utf8')
    .match(/^(import[\s\S]*?const chapter: Chapter = )([\s\S]*?)(;\s*export default chapter;\s*)$/);
  if (!m) { console.error('✖  envelope inesperado'); process.exit(1); }
  const chapter = JSON.parse(m[2]);

  const order = ORDER.get(chapter.numeral);
  if (!order) { console.error(`✖  numeral desconhecido: ${chapter.numeral}`); process.exit(1); }

  const byHead = new Map();
  for (const e of entries) byHead.set(fold(e.head), e);

  // Só os campos que são latim puro. `tag`, `tip.text` e as glosas de
  // `auxilia` são prosa em português e contaminariam a checagem — "seu",
  // "par", "campo" existem nas duas línguas.
  const chunks = [];
  for (const ex of chapter.exercises || []) {
    for (const q of ex.questions || []) chunks.push(q);
    if (ex.exemplum) chunks.push(ex.exemplum);
    for (const t of ex.tables || []) {
      for (const r of t.rows || []) {
        for (const c of r.cells || []) {
          if (typeof c === 'string') chunks.push(c);
          else if (c && typeof c === 'object' && c.answer) chunks.push(c.answer);
        }
      }
    }
  }

  // Corpus do que o SITE já ensinou até aqui. O índice do Companion diz em que
  // capítulo a palavra ganha VERBETE, não quando aparece pela primeira vez —
  // `nōn` e `quis` só são verbete em VII e XXII, mas já circulam desde o
  // início. Sem este contraste a checagem acusa vocabulário perfeitamente
  // correto, que é justamente o erro que ela deveria evitar.
  const taught = new Set();
  for (const [sl, ord] of chapterOrders()) {
    if (ord > order) continue;
    // Vocabulário curado do próprio site (inclui o capítulo atual).
    const yaml = join(ROOT, `src/content/vocabulary/${sl}.yaml`);
    if (existsSync(yaml)) {
      for (const mm of readFileSync(yaml, 'utf8').matchAll(/lemma:\s*"([^",]+)/g)) {
        taught.add(fold(mm[1].trim()));
      }
    }
    // Exercícios de capítulos ANTERIORES: se o texto de Ørberg já usou a
    // palavra, ela está ensinada.
    if (ord < order) for (const w of latinWords(sl)) taught.add(w);
  }

  const late = new Map();
  for (const raw of chunks) {
    const text = raw
      .replace(/\/\/.*$/, ' ')          // dica em português
      .replace(/<[^>]+>/g, ' ')         // HTML
      .replace(/\{([^}]*)\}/g, ' $1 ')  // placeholder → conteúdo
      .replace(/\|/g, ' ');
    for (const w of text.split(/[^A-Za-zāēīōūȳĀĒĪŌŪȲăĕĭŏŭ]+/)) {
      if (w.length < 3) continue;
      if (taught.has(fold(w))) continue;
      const e = byHead.get(fold(w));
      if (e && e.order > order) {
        if (!late.has(e.head)) late.set(e.head, { e, sample: w });
      }
    }
  }

  console.log(`\nCap. ${chapter.numeral} — ${chapter.title} (posição ${order})\n`);
  if (!late.size) {
    console.log('✔  nada a investigar.');
  } else {
    console.log(`${late.size} palavra(s) para investigar — o Companion só dá VERBETE a elas`);
    console.log('em capítulos posteriores, e o site ainda não as ensinou:\n');
    for (const { e, sample } of late.values()) {
      console.log(`   ${sample}  →  verbete "${e.head}" no Cap. ${e.numeral}`);
    }
  }
  console.log(`
   Isto é uma lista de PISTAS, não um veredito. Duas fontes de alarme falso:
   · homógrafo — "pedēs" (pé, pl.) vs. o verbete "pedes, peditis" (soldado);
     "Quīntus" (personagem) vs. "quīntus" (quinto).
   · verbete tardio — Ørberg usa a palavra muito antes de o Companion lhe dar
     entrada própria: "nōn" circula desde o Cap. I e só vira verbete no VII.

   Cobertura: avalia só lemas presentes no índice; ausência não é aprovação.
   O uso confiável do índice é a CONSULTA de grafia (macrons), não esta lista.
`);
}

function stats() {
  const { entries, chapters } = load();
  const per = new Map();
  for (const e of entries) per.set(e.numeral, (per.get(e.numeral) || 0) + 1);
  console.log(`\n${entries.length} lemas\n`);
  for (const c of chapters) {
    if (per.has(c.numeral)) console.log(`  ${c.numeral.padEnd(6)} ${String(per.get(c.numeral)).padStart(4)}  ${c.title}`);
  }
  console.log('');
}

// ---------------------------------------------------------------------------

const [, , ...argv] = process.argv;
const arg = argv[0];

if (!arg || arg === '--help' || arg === '-h') {
  console.log(`
lexicon.mjs — índice léxico do Companion (macrons íntegros)

  node scripts/lexicon.mjs <lema>       consulta (ignora macrons na busca)
  node scripts/lexicon.mjs --check <slug>  progressão lexical de um capítulo
  node scripts/lexicon.mjs --build      reconstrói o índice
  node scripts/lexicon.mjs --stats      lemas por capítulo
`);
} else if (arg === '--build') {
  build();
} else if (arg === '--stats') {
  stats();
} else if (arg === '--check') {
  if (!argv[1]) { console.error('✖  informe o slug: --check x'); process.exit(1); }
  check(argv[1]);
} else {
  if (!existsSync(INDEX)) build();
  query(argv.join(' '));
}
