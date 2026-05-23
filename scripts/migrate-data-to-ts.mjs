// One-shot migration: convert data/cap-*.js (window.LL.chapters['xx'] = {…})
// to src/data/cap-*.ts (typed ES module).
// Also converts data/chapters.js to src/data/chapters.ts.
//
// Run: node scripts/migrate-data-to-ts.mjs

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const SRC_DIR = 'data';
const DST_DIR = 'src/data';

mkdirSync(DST_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter(f => f.endsWith('.js'));

for (const file of files) {
  const raw = readFileSync(join(SRC_DIR, file), 'utf8');
  const slug = basename(file, '.js');

  let out;
  if (slug === 'chapters') {
    // chapters.js: window.LL.chapterIndex = [ ... ];
    const match = raw.match(/window\.LL\.chapterIndex\s*=\s*([\s\S]*?);\s*$/m);
    if (!match) {
      console.error(`Cannot parse ${file}`);
      continue;
    }
    out =
      `import type { ChapterIndexEntry } from '~/lib/types';\n\n` +
      `export const chapterIndex: ChapterIndexEntry[] = ${match[1]};\n`;
  } else {
    // cap-xx.js: window.LL.chapters['xx'] = { ... };
    const match = raw.match(/window\.LL\.chapters\[[^\]]+\]\s*=\s*([\s\S]*?);\s*$/m);
    if (!match) {
      console.error(`Cannot parse ${file}`);
      continue;
    }
    out =
      `import type { Chapter } from '~/lib/types';\n\n` +
      `const chapter: Chapter = ${match[1]};\n\n` +
      `export default chapter;\n`;
  }

  const dstName = slug + '.ts';
  writeFileSync(join(DST_DIR, dstName), out);
  console.log(`✓ ${file} → ${DST_DIR}/${dstName}`);
}

console.log('\nDone. Review src/data/ then delete data/ when ready.');
