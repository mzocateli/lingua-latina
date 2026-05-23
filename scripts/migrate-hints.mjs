// One-shot migration: convert trailing `<em>(hint)</em>` in questions to
// the inline `// hint` syntax recognized by parse-question.ts.
//
// Before: "Iūlia est {puella:md} Rōmāna. <em>(menina)</em>"
// After:  "Iūlia est {puella:md} Rōmāna. // menina"
//
// Run:
//   node scripts/migrate-hints.mjs --dry-run
//   node scripts/migrate-hints.mjs

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DATA_DIR = 'src/data';
const dryRun = process.argv.includes('--dry-run');

// Match a trailing `<em>(...)</em>` at the END of the question string.
// The `(...)` content cannot contain `<` or `>` or unbalanced parens — every
// hint in the data set fits this constraint.
const TRAILING_HINT_RE = /\s*<em>\(([^<>()]+)\)<\/em>\s*$/;

function rewriteQuestion(q) {
  const m = q.match(TRAILING_HINT_RE);
  if (!m) return { q, hint: null };
  const hint = m[1].trim();
  return { q: q.slice(0, m.index).trimEnd() + ` // ${hint}`, hint };
}

function processFile(filename) {
  const path = join(DATA_DIR, filename);
  const raw = readFileSync(path, 'utf8');
  const m = raw.match(/^(import[\s\S]*?const chapter: Chapter = )([\s\S]*?)(;\s*export default chapter;\s*)$/);
  if (!m) {
    console.error(`✗ ${filename}: parse failed`);
    return 0;
  }
  const [, prefix, jsonText, suffix] = m;
  const chapter = JSON.parse(jsonText);

  let changedQuestions = 0;
  for (const ex of chapter.exercises || []) {
    if (!ex.questions) continue;
    ex.questions = ex.questions.map(q => {
      const { q: newQ, hint } = rewriteQuestion(q);
      if (hint !== null) changedQuestions++;
      return newQ;
    });
  }

  if (dryRun) {
    console.log(`  [dry-run] ${filename}: ${changedQuestions} hints would move to inline`);
    return changedQuestions;
  }

  writeFileSync(path, prefix + JSON.stringify(chapter, null, 2) + suffix);
  console.log(`✓ ${filename}: ${changedQuestions} hints moved to inline`);
  return changedQuestions;
}

const files = readdirSync(DATA_DIR).filter(f => f.startsWith('cap-') && f.endsWith('.ts'));
let total = 0;
for (const f of files) total += processFile(f);
console.log(`\n${dryRun ? '[dry-run] ' : ''}Done. ${total} hints converted across ${files.length} files.`);
