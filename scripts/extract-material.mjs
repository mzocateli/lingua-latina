#!/usr/bin/env node
/**
 * extract-material.mjs — cache de texto dos materiais-fonte.
 *
 * Extrai `.material/pdf/*.pdf` para `.material/txt/`, produzindo por livro:
 *   {livro}.txt         texto completo (pdftotext -enc UTF-8)
 *   {livro}.pages.json  mapa linha→página
 *
 * O mapa de páginas é o que torna o protocolo utilizável: o agent grepa o
 * .txt, pega o número da linha, converte para página e abre AQUELA página do
 * PDF com o Read visual. Sem ele, "achei na linha 3158" não é acionável num
 * livro de 429 páginas.
 *
 * `-enc UTF-8` é obrigatório — sem ele até o Companion, que é born-digital,
 * perde os diacríticos (Ørberg vira "�rberg").
 *
 * Tudo é gravado dentro de `.material/`, que é gitignored: texto derivado de
 * livro sob copyright nunca entra no repositório.
 *
 * Ver .claude/skills/fontes/ para o protocolo de leitura.
 */

import { execFileSync } from 'node:child_process';
import { readdirSync, writeFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PDF_DIR = join(ROOT, '.material/pdf');
const TXT_DIR = join(ROOT, '.material/txt');

/** Livros sem camada de texto — só leitura visual (Read com `pages`). */
const NO_TEXT_LAYER = new Set(['Exercitia_latina']);

/** Abaixo disto, tratamos como scan puro. */
const MIN_CHARS = 5000;

if (!existsSync(PDF_DIR)) {
  console.error(`✖  ${PDF_DIR} não existe. Os PDFs não estão versionados — copie-os para lá.`);
  process.exit(1);
}

// `pdftotext -v` imprime a versão mas sai com código != 0 (build Xpdf), então
// só ENOENT significa "não instalado".
try {
  execFileSync('pdftotext', ['-v'], { stdio: 'ignore' });
} catch (e) {
  if (e.code === 'ENOENT') {
    console.error('✖  `pdftotext` não encontrado. Vem com o Git for Windows em /mingw64/bin, ou instale o poppler-utils.');
    process.exit(1);
  }
}

mkdirSync(TXT_DIR, { recursive: true });

const pdfs = readdirSync(PDF_DIR).filter(f => f.toLowerCase().endsWith('.pdf')).sort();
if (!pdfs.length) {
  console.error(`✖  nenhum PDF em ${PDF_DIR}`);
  process.exit(1);
}

let built = 0, skipped = 0;

for (const pdf of pdfs) {
  const name = basename(pdf, '.pdf');
  const src = join(PDF_DIR, pdf);
  const txtPath = join(TXT_DIR, `${name}.txt`);
  const mapPath = join(TXT_DIR, `${name}.pages.json`);

  if (NO_TEXT_LAYER.has(name)) {
    console.log(`⊘  ${name} — sem camada de texto (scan). Só leitura visual: Read com \`pages\`.`);
    continue;
  }

  // Idempotente: pula se o cache já é mais novo que o PDF.
  if (existsSync(txtPath) && existsSync(mapPath) &&
      statSync(txtPath).mtimeMs >= statSync(src).mtimeMs) {
    console.log(`·  ${name} — cache atualizado, pulando`);
    skipped++;
    continue;
  }

  // -enc UTF-8 preserva macrons; sem isso o cache é inútil.
  const text = execFileSync('pdftotext', ['-enc', 'UTF-8', src, '-'], {
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
  });

  if (text.length < MIN_CHARS) {
    console.log(`⊘  ${name} — só ${text.length} caracteres extraídos; é scan sem camada de texto. Pulando.`);
    continue;
  }

  // pdftotext separa páginas com form feed (\f). Numeramos as linhas do .txt
  // exatamente como serão gravadas, para que o grep (1-indexado) case.
  const lines = text.split('\n');
  const pageStarts = [];  // pageStarts[i] = primeira linha (1-indexada) da página i+1
  let page = 1;
  pageStarts.push(1);
  lines.forEach((line, i) => {
    const ff = (line.match(/\f/g) || []).length;
    for (let k = 0; k < ff; k++) {
      page++;
      pageStarts.push(i + 1); // o \f fica no fim da linha; a página nova começa aqui
    }
  });

  writeFileSync(txtPath, text, 'utf8');
  writeFileSync(mapPath, JSON.stringify({
    book: name,
    pdf: `.material/pdf/${pdf}`,
    pages: page,
    lines: lines.length,
    // pageStarts[i] = linha inicial da página i+1. Para achar a página de uma
    // linha L: o maior i com pageStarts[i] <= L, mais 1.
    pageStarts,
  }), 'utf8');

  const macrons = (text.match(/[āēīōūȳĀĒĪŌŪȲ]/g) || []).length;
  const quality = macrons > 1000 ? 'macrons presentes' : `só ${macrons} macrons — provável OCR, use apenas para localizar`;
  console.log(`✔  ${name} — ${page} pp., ${text.length.toLocaleString('pt-BR')} chars, ${quality}`);
  built++;
}

console.log(`\n${built} extraído(s), ${skipped} em cache. Texto em .material/txt/ (gitignored).`);
console.log('Regra: texto OCR serve para LOCALIZAR, nunca para verificar ortografia — ver .claude/skills/fontes/.\n');
