#!/usr/bin/env node
/**
 * page.mjs — renderiza páginas de PDF em PNG para leitura visual.
 *
 *   node scripts/page.mjs <livro> <página>[-<página>]
 *   node scripts/page.mjs Lingva 71
 *   node scripts/page.mjs Teachers 88-90
 *   node scripts/page.mjs --list
 *
 * <livro> é qualquer prefixo do nome do arquivo (Lingva, Teachers, Companion…).
 *
 * Por que existe: esta máquina não tem `pdftoppm`, então o Read não consegue
 * abrir página de PDF diretamente. Aqui a página vira PNG e o agent lê o PNG.
 * É o único jeito de conferir a ORTOGRAFIA dos livros escaneados/OCR, cujo
 * texto extraído perde todos os macrons (`ālae` → `alae`).
 *
 * Os PNGs vão para o scratchpad da sessão (ou .material/pages/), nunca para o
 * repo — são imagens de livro sob copyright.
 */

import { execFileSync } from 'node:child_process';
import { readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PDF_DIR = join(ROOT, '.material/pdf');
const OUT_DIR = process.env.CLAUDE_SCRATCHPAD || join(ROOT, '.material/pages');

/** Resolução: 150 dpi basta para ler macron sem gerar arquivo gigante. */
const DPI = 150;

const books = existsSync(PDF_DIR)
  ? readdirSync(PDF_DIR).filter(f => f.toLowerCase().endsWith('.pdf')).sort()
  : [];

let [, , bookArg, pageArg, ...restArgs] = process.argv;

if (!bookArg || bookArg === '--list' || (!pageArg && bookArg !== '--find')) {
  console.log('\nLivros disponíveis:\n');
  for (const b of books) console.log('  ' + basename(b, '.pdf'));
  console.log(`
Uso:
  node scripts/page.mjs <livro> <página>[-<página>]   renderiza páginas
  node scripts/page.mjs --find <livro> "<trecho>"     acha e renderiza
`);
  process.exit(bookArg === '--list' ? 0 : 1);
}

// --find faz o protocolo inteiro numa tacada: procura o trecho no cache de
// texto, converte a linha em página pelo mapa e renderiza. Evita que o agent
// faça a aritmética à mão — o número impresso no rodapé NÃO bate com o número
// da página do PDF (no Ørberg a diferença é de 2, por causa do miolo inicial),
// então converter "de cabeça" erra.
if (bookArg === '--find') {
  const target = pageArg;
  const needle = restArgs.join(' ');
  if (!target || !needle) { console.error('✖  uso: --find <livro> "<trecho>"'); process.exit(1); }

  const hit = books.filter(b => b.toLowerCase().startsWith(target.toLowerCase()));
  if (hit.length !== 1) { console.error(`✖  "${target}" não identifica um livro único. Use --list.`); process.exit(1); }
  const bname = basename(hit[0], '.pdf');
  const txt = join(ROOT, '.material/txt', `${bname}.txt`);
  const mapf = join(ROOT, '.material/txt', `${bname}.pages.json`);
  if (!existsSync(txt)) { console.error(`✖  sem cache para ${bname}. Rode: npm run materia`); process.exit(1); }

  const { readFileSync } = await import('node:fs');
  const lines = readFileSync(txt, 'utf8').split('\n').map(l => l.replace(/[\f\r]/g, ''));
  const map = JSON.parse(readFileSync(mapf, 'utf8'));
  const nd = needle.toLowerCase();
  const found = [];
  lines.forEach((l, i) => { if (l.toLowerCase().includes(nd)) found.push(i + 1); });

  if (!found.length) {
    console.error(`—  "${needle}" não aparece no texto de ${bname}.`);
    console.error('   Lembre que o OCR corrompe a grafia: procure um trecho curto e sem macron.');
    process.exit(1);
  }
  const toPage = L => { let p = 0; for (let k = 0; k < map.pageStarts.length; k++) { if (map.pageStarts[k] <= L) p = k + 1; else break; } return p; };
  const pages = [...new Set(found.map(toPage))];
  console.log(`${found.length} ocorrência(s) em ${bname} → página(s) ${pages.join(', ')}\n`);
  for (const L of found.slice(0, 5)) console.log(`  p.${toPage(L)} (linha ${L}): ${lines[L - 1].trim().slice(0, 90)}`);
  console.log('\n⚠  o texto acima é OCR — NÃO copie a grafia dele. Renderizando a página:\n');
  bookArg = target;
  pageArg = String(pages[0]);
}

const match = books.filter(b => b.toLowerCase().startsWith(bookArg.toLowerCase()));
if (match.length !== 1) {
  console.error(match.length
    ? `✖  "${bookArg}" é ambíguo: ${match.join(', ')}`
    : `✖  nenhum livro começa com "${bookArg}". Use --list.`);
  process.exit(1);
}
const pdf = join(PDF_DIR, match[0]);
const name = basename(match[0], '.pdf');

const m = String(pageArg).match(/^(\d+)(?:-(\d+))?$/);
if (!m) { console.error(`✖  página inválida: "${pageArg}" (use 71 ou 71-73)`); process.exit(1); }
const first = Number(m[1]);
const last = Number(m[2] || m[1]);
if (last < first) { console.error('✖  intervalo invertido'); process.exit(1); }
if (last - first > 9) { console.error('✖  no máximo 10 páginas por vez'); process.exit(1); }

mkdirSync(OUT_DIR, { recursive: true });

// PyMuPDF é 0-indexado; os números aqui são 1-indexados como no .pages.json.
const py = `
import fitz, sys
doc = fitz.open(r"""${pdf}""")
n = doc.page_count
for p in range(${first}, ${last} + 1):
    if p < 1 or p > n:
        print("SKIP %d (documento tem %d páginas)" % (p, n)); continue
    pix = doc.load_page(p - 1).get_pixmap(dpi=${DPI})
    out = r"""${OUT_DIR.replace(/\\/g, '\\\\')}""" + "\\\\${name}-p%d.png" % p
    pix.save(out)
    print(out)
`;

let out;
try {
  out = execFileSync('python', ['-c', py], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
} catch (e) {
  console.error('✖  falha ao renderizar. PyMuPDF instalado? `python -m pip install pymupdf`');
  console.error(String(e.stderr || e.message).split('\n').slice(-4).join('\n'));
  process.exit(1);
}

const files = out.trim().split('\n').filter(Boolean);
console.log(files.join('\n'));
console.log(`\n${files.filter(f => !f.startsWith('SKIP')).length} página(s) de ${name}. Abra com o Read.`);
console.log('Lembre: a imagem é a fonte confiável de ortografia; o texto OCR não é.\n');
