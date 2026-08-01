#!/usr/bin/env node
/**
 * locus.mjs — índice capítulo → localização nos cinco livros-fonte.
 *
 *   node scripts/locus.mjs XI          onde o Cap. XI está em cada livro
 *   node scripts/locus.mjs --build     reconstrói .material/index/chapters.json
 *   node scripts/locus.mjs --list      resumo de todos os capítulos resolvidos
 *
 * Sem isto, cada capítulo novo recomeça a busca do zero nos cinco livros —
 * era o custo repetido que mais pesava na autoria. Ver
 * .claude/skills/fontes/references/materia.md para o protocolo completo.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TXT_DIR = join(ROOT, '.material/txt');
const INDEX_DIR = join(ROOT, '.material/index');
const INDEX = join(INDEX_DIR, 'chapters.json');

const NUMERALS = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV',
  'XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX',
  'XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV'];
const ORDER = new Map(NUMERALS.map((n, i) => [n, i + 1]));

// ---------------------------------------------------------------------------
// A. Ørberg (Lingva Latina 1-146) — só vai até o Cap. XVIII (CAP. XIX: 0
// ocorrências). Cabeçalho "CAPITVLVM {ORDINAL}", verificado por grep — mais
// confiável que gerar o ordinal latino em código, que é irregular.
// ---------------------------------------------------------------------------
const ORBERG_ORDINALS = {
  I: 'PRIMVM', II: 'SECVNDVM', III: 'TERTIVM', IV: 'QVARTVM', V: 'QVINTVM',
  VI: 'SEXTVM', VII: 'SEPTIMVM', VIII: 'OCTAWM', IX: 'NONVM', X: 'DECIMVM',
  XI: 'VNDECIMVM', XII: 'DVODECIMVM', XIII: 'TERTIVM DECIMVM', XIV: 'QVARTVM DECIMVM',
  XV: 'QVINTVM DECIMVM', XVI: 'SEXTVM DECIMVM', XVII: 'SEPTIMVM DECIMVM',
  XVIII: 'DVODEVICESIMVM',
};

// ---------------------------------------------------------------------------
// D. Exercitia latina — sem camada de texto (scan). Índice Lectiōnum
// verificado nas páginas 5-6 do PDF (Read visual, npm run: page.mjs Exercitia
// 5-6): página impressa em que cada CAPITVLVM começa. Confirmado contra a
// própria página (Cap. XI → PDF p.42 = "CAP. XI" no cabeçalho, rodapé "34").
// offset PDF = página impressa + 8 (a impressa 1 é a PDF 9).
// ---------------------------------------------------------------------------
const EXERCITIA_OFFSET = 8;
const EXERCITIA_START_PRINTED = {
  I: 1, II: 4, III: 7, IV: 10, V: 13, VI: 16, VII: 19, VIII: 22, IX: 27, X: 30,
  XI: 34, XII: 38, XIII: 44, XIV: 48, XV: 52, XVI: 56, XVII: 59, XVIII: 64,
  XIX: 68, XX: 73, XXI: 76, XXII: 82, XXIII: 85, XXIV: 89, XXV: 93, XXVI: 96,
  XXVII: 100, XXVIII: 104, XXIX: 109, XXX: 113, XXXI: 117, XXXII: 121,
  XXXIII: 125, XXXIV: 130, XXXV: 134,
};

/** Livro→página impressa da linha, dado o mapa de páginas do cache. */
function pageMapFor(book) {
  const p = join(TXT_DIR, `${book}.pages.json`);
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, 'utf8'));
}
function toPage(map, line) {
  let p = 0;
  for (let k = 0; k < map.pageStarts.length; k++) {
    if (map.pageStarts[k] <= line) p = k + 1; else break;
  }
  return p;
}
function linesOf(book) {
  const p = join(TXT_DIR, `${book}.txt`);
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf8').split('\n').map(l => l.replace(/[\f\r]/g, ''));
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

function orberg(numeral) {
  const ord = ORBERG_ORDINALS[numeral];
  if (!ord) return { note: `fora do teto do Ørberg (só até Cap. XVIII)` };
  const lines = linesOf('Lingva_latina_per_se_Illustrata_1-146');
  const map = pageMapFor('Lingva_latina_per_se_Illustrata_1-146');
  if (!lines || !map) return { note: 'sem cache — rode npm run materia' };

  const i = lines.findIndex(l => l.trim() === `CAPITVLVM ${ord}` || l.trim().startsWith(`CAPITVLVM ${ord} `));
  if (i < 0) return { note: `cabeçalho "CAPITVLVM ${ord}" não encontrado` };
  const from = toPage(map, i + 1);

  // fim = início do próximo capítulo (ordem em NUMERALS), menos 1 página.
  const idx = NUMERALS.indexOf(numeral);
  const nextOrd = ORBERG_ORDINALS[NUMERALS[idx + 1]];
  let to = map.pages;
  if (nextOrd) {
    const j = lines.findIndex(l => l.trim() === `CAPITVLVM ${nextOrd}` || l.trim().startsWith(`CAPITVLVM ${nextOrd} `));
    if (j > i) to = toPage(map, j + 1) - 1;
  }
  return { pages: from === to ? `p. ${from}` : `pp. ${from}–${to}` };
}

function companion(numeral) {
  const lines = linesOf('A_Companion_to_Familia_Romana');
  const map = pageMapFor('A_Companion_to_Familia_Romana');
  if (!lines || !map) return { note: 'sem cache — rode npm run materia' };

  let found = null;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([IVX]+)\.\s{1,3}(\S.*?)\s*$/);
    if (!m || m[1] !== numeral || !ORDER.has(m[1])) continue;
    let j = i + 1;
    while (j < lines.length && j < i + 6 && !lines[j].trim()) j++;
    if (!(lines[j] || '').startsWith('Rēs Grammaticae Novae')) continue;
    found = { line: i + 1, title: m[2] };
    break;
  }
  if (!found) return { note: 'cabeçalho não encontrado (ver lexicon.mjs --build)' };
  return { line: found.line, title: found.title, page: toPage(map, found.line) };
}

/**
 * Teacher's Materials: "CAPITVLVM{NUMERAL}" (OCR cola sem espaço) ocorre 3x
 * por capítulo. A PÁGINA distingue a seção — não o texto ao redor:
 *   < 90        PENSA em branco (exercícios para o aluno)
 *   90–132      gabarito dos PENSA
 *   >= 133      Exercitia Latina Solūta (gabarito dos Exercitia)
 * Faixas medidas contra o Cap. XI (20 / 96 / 142) e os cabeçalhos de seção
 * "Exercitia Latina Solvta Pars I" (p.133) / "... Pars II" (p.157).
 *
 * Limite conhecido: o OCR corrompe o numeral romano em alguns capítulos —
 * pior justo na seção Solūta ("CAPITVLVM II" sai como "CAPITVLVM H",
 * "CAPITVLVM III" como "CAPITVLVMin"). Quando `soluta`/`gabarito`/`blank`
 * vier `null`, isso pode ser ausência real OU numeral ilegível para o grep;
 * não assuma o segundo sem checar a imagem em `page.mjs --find`.
 */
function teachers(numeral) {
  const lines = linesOf('Teachers_Materials');
  const map = pageMapFor('Teachers_Materials');
  if (!lines || !map) return { note: 'sem cache — rode npm run materia' };

  const re = new RegExp(`^CAPITVLVM\\s*${numeral}\\b`);
  const pages = [];
  lines.forEach((l, i) => { if (re.test(l.trim())) pages.push(toPage(map, i + 1)); });

  const blank = pages.find(p => p < 90);
  const gabarito = pages.find(p => p >= 90 && p < 133);
  const soluta = pages.find(p => p >= 133);
  return {
    blank: blank ?? null,
    gabarito: gabarito ?? null,
    soluta: soluta ?? null,
  };
}

/**
 * O Índice Lectiōnum só dá o INÍCIO de cada capítulo; o fim é inferido como
 * "início do próximo". Mas exercícios podem transbordar para a página onde o
 * cabeçalho do próximo capítulo já apareceu — medido no Cap. XI, cujo
 * Exercitium 13 continua na mesma página PDF em que "CAPITVLVM DVODECIMVM"
 * já está impresso. Por isso o intervalo inclui a página inicial do próximo
 * capítulo (nextFrom, não nextFrom-1): melhor renderizar uma página a mais
 * do que perder o fim do capítulo.
 */
function exercitia(numeral) {
  const from = EXERCITIA_START_PRINTED[numeral];
  if (!from) return { note: 'fora do índice (verificar Índice Lectiōnum, PDF pp. 5–6)' };
  const idx = NUMERALS.indexOf(numeral);
  const nextFrom = EXERCITIA_START_PRINTED[NUMERALS[idx + 1]];
  const to = nextFrom ?? from;
  const fromPdf = from + EXERCITIA_OFFSET;
  const toPdf = to + EXERCITIA_OFFSET;
  return { pages: fromPdf === toPdf ? `p. ${fromPdf}` : `pp. ${fromPdf}–${toPdf}` };
}

function resolve(numeral) {
  return {
    numeral,
    orberg: orberg(numeral),
    companion: companion(numeral),
    teachers: teachers(numeral),
    exercitia: exercitia(numeral),
  };
}

function build() {
  const chapters = NUMERALS.map(resolve);
  mkdirSync(INDEX_DIR, { recursive: true });
  writeFileSync(INDEX, JSON.stringify({ built: new Date().toISOString(), chapters }), 'utf8');
  console.log(`✔  ${chapters.length} capítulos → .material/index/chapters.json`);
  return chapters;
}

function load() {
  if (!existsSync(INDEX)) return build();
  return JSON.parse(readFileSync(INDEX, 'utf8')).chapters;
}

function print(r) {
  console.log(`\nCap. ${r.numeral}${r.companion.title ? ` — ${r.companion.title}` : ''}\n`);
  console.log(`  Ørberg .................... ${r.orberg.pages || `⚠ ${r.orberg.note}`}`);
  const NOT_FOUND = '⚠ não encontrado (ausência real OU numeral corrompido pelo OCR — confira antes de assumir)';
  console.log(`  Exercitia Solūta (gabarito)  ${r.teachers.soluta ? `p. ${r.teachers.soluta}` : NOT_FOUND}`);
  console.log(`  PENSA — gabarito ..........  ${r.teachers.gabarito ? `p. ${r.teachers.gabarito}` : NOT_FOUND}`);
  console.log(`  PENSA — em branco .........  ${r.teachers.blank ? `p. ${r.teachers.blank}` : NOT_FOUND}`);
  console.log(`  Companion .................  ${r.companion.line ? `linha ${r.companion.line}` : `⚠ ${r.companion.note}`}`);
  console.log(`  Exercitia latina ..........  ${r.exercitia.pages || `⚠ ${r.exercitia.note}`}`);
  console.log('\n  Companion e Ørberg dão página/linha exatas (grep). Teacher\'s usa faixas de\n' +
              '  página medidas — confira a que importa na imagem. Exercitia latina vem do\n' +
              "  Índice Lectiōnum do próprio livro (verificado, não estimado).\n");
}

// ---------------------------------------------------------------------------

const [, , ...argv] = process.argv;
const arg = argv[0];

if (!arg || arg === '--help' || arg === '-h') {
  console.log(`
locus.mjs — onde um capítulo está em cada um dos cinco livros

  node scripts/locus.mjs <NUMERAL>   ex.: node scripts/locus.mjs XI
  node scripts/locus.mjs --build     reconstrói .material/index/chapters.json
  node scripts/locus.mjs --list      resumo de todos os capítulos
`);
} else if (arg === '--build') {
  build();
} else if (arg === '--list') {
  for (const r of load()) {
    console.log(`${r.numeral.padEnd(6)} Ørberg ${(r.orberg.pages || '—').padEnd(14)} Solūta ${(r.teachers.soluta ? 'p.' + r.teachers.soluta : '—').padEnd(8)} Exercitia ${r.exercitia.pages || '—'}`);
  }
} else {
  const numeral = arg.toUpperCase();
  if (!ORDER.has(numeral)) { console.error(`✖  numeral desconhecido: "${arg}" (use algarismo romano, ex.: XI)`); process.exit(1); }
  print(resolve(numeral));
}
