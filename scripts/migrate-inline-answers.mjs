// One-shot migration: convert positional questions+answers to inline-answer
// placeholders.
//
// Before: { questions: ["Iūlia in cubicul{} su{} est."], answers: ["ō","ō"] }
// After:  { questions: ["Iūlia in cubicul{ō} su{ō} est."] }   (answers gone)
//
// For paradigm exercises (kind: 'paradigm'), null cells are converted to
// inline { answer: "...", given: false } cells, and the `answers` array
// is removed.
//
// Run:
//   node scripts/migrate-inline-answers.mjs --dry-run    # preview only
//   node scripts/migrate-inline-answers.mjs              # write files

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const DATA_DIR = 'src/data';
const dryRun = process.argv.includes('--dry-run');

const SIZE_RE = /^(md|lg|xl|xxl)$/;
const LEGACY_PLACEHOLDER_RE = /\{(md|lg|xl|xxl)?\}/g;
const ANY_PLACEHOLDER_RE = /\{[^}]*\}/g;

/** Count placeholders matching the legacy form in a string. */
function countLegacyPlaceholders(s) {
  return (s.match(LEGACY_PLACEHOLDER_RE) || []).length;
}

/** Substitute each legacy placeholder with `{answer}` or `{answer:size}`. */
function rewriteQuestion(template, answers, cursor) {
  return template.replace(LEGACY_PLACEHOLDER_RE, (_m, size) => {
    const ans = answers[cursor.i++];
    if (ans === undefined) {
      throw new Error(`Ran out of answers at cursor ${cursor.i - 1}`);
    }
    // Don't emit `:size` if it's redundant with the default; keep all sizes
    // to preserve visual parity with the previous rendering.
    return size ? `{${ans}:${size}}` : `{${ans}}`;
  });
}

/** Migrate a standard exercise (questions + answers → inline). */
function migrateStandard(ex) {
  const questions = ex.questions || [];
  const answers = ex.answers || [];

  const totalPlaceholders = questions.reduce(
    (n, q) => n + countLegacyPlaceholders(q),
    0
  );
  if (totalPlaceholders !== answers.length) {
    throw new Error(
      `Exercise ${ex.number}: placeholder count (${totalPlaceholders}) ` +
        `does not match answers.length (${answers.length})`
    );
  }

  const cursor = { i: 0 };
  ex.questions = questions.map(q => rewriteQuestion(q, answers, cursor));
  delete ex.answers;
}

/** Migrate a paradigm exercise (null cells → inline-answer cells). */
function migrateParadigm(ex) {
  const answers = ex.answers || [];
  const cursor = { i: 0 };
  for (const tbl of ex.tables || []) {
    for (const row of tbl.rows || []) {
      const cells = row.cells || [];
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (cell === null || cell === undefined) {
          const ans = answers[cursor.i++];
          if (ans === undefined) {
            throw new Error(
              `Paradigm exercise ${ex.number}: ran out of answers at cursor ${cursor.i - 1}`
            );
          }
          cells[i] = { answer: ans, given: false };
        } else if (typeof cell === 'object' && cell !== null) {
          // Already has inline answer — leave it. (Some cells in the data
          // already use the object form.)
        }
        // Strings are anchor (given) cells; leave them.
      }
    }
  }
  if (cursor.i !== answers.length) {
    throw new Error(
      `Paradigm exercise ${ex.number}: consumed ${cursor.i} answers but ` +
        `array had ${answers.length}`
    );
  }
  delete ex.answers;
}

/** Round-trip: parse a migrated question and confirm answers match originals. */
function verify(originalQuestions, originalAnswers, newQuestions) {
  const extracted = [];
  for (const q of newQuestions) {
    let m;
    const re = /\{([^}]*)\}/g;
    while ((m = re.exec(q)) !== null) {
      const body = m[1];
      // Strip :size suffix if present
      const colon = body.lastIndexOf(':');
      if (colon >= 0 && SIZE_RE.test(body.slice(colon + 1))) {
        extracted.push(body.slice(0, colon));
      } else if (SIZE_RE.test(body)) {
        // shouldn't happen post-migration unless answer was empty
        extracted.push('');
      } else {
        extracted.push(body);
      }
    }
  }
  if (extracted.length !== originalAnswers.length) {
    throw new Error(
      `Verify failed: extracted ${extracted.length} answers but original had ${originalAnswers.length}`
    );
  }
  for (let i = 0; i < extracted.length; i++) {
    if (extracted[i] !== originalAnswers[i]) {
      throw new Error(
        `Verify failed at index ${i}: "${extracted[i]}" !== "${originalAnswers[i]}"`
      );
    }
  }
}

function processFile(filename) {
  const path = join(DATA_DIR, filename);
  const raw = readFileSync(path, 'utf8');

  // Extract the JSON-like literal between `= ` and `;\n\nexport default`.
  const m = raw.match(/^(import[\s\S]*?const chapter: Chapter = )([\s\S]*?)(;\s*export default chapter;\s*)$/);
  if (!m) {
    console.error(`✗ ${filename}: could not parse file shape`);
    return { changed: 0, total: 0 };
  }
  const [, prefix, jsonText, suffix] = m;
  let chapter;
  try {
    chapter = JSON.parse(jsonText);
  } catch (e) {
    console.error(`✗ ${filename}: JSON parse failed: ${e.message}`);
    return { changed: 0, total: 0 };
  }

  let changed = 0;
  const total = (chapter.exercises || []).length;

  for (const ex of chapter.exercises || []) {
    const origQuestions = ex.questions ? [...ex.questions] : null;
    const origAnswers = ex.answers ? [...ex.answers] : null;

    try {
      if (ex.kind === 'paradigm') {
        if (origAnswers && origAnswers.length > 0) {
          migrateParadigm(ex);
          changed++;
        }
      } else if (origQuestions && origAnswers) {
        migrateStandard(ex);
        verify(origQuestions, origAnswers, ex.questions);
        changed++;
      }
    } catch (e) {
      console.error(`✗ ${filename} ex ${ex.number}: ${e.message}`);
      throw e;
    }
  }

  const newJson = JSON.stringify(chapter, null, 2);
  const out = prefix + newJson + suffix;

  if (dryRun) {
    console.log(`  [dry-run] ${filename}: ${changed}/${total} exercises would migrate`);
    return { changed, total };
  }

  writeFileSync(path, out);
  console.log(`✓ ${filename}: ${changed}/${total} exercises migrated`);
  return { changed, total };
}

const files = readdirSync(DATA_DIR)
  .filter(f => f.startsWith('cap-') && f.endsWith('.ts'));

let totalChanged = 0;
let totalExercises = 0;
for (const f of files) {
  const { changed, total } = processFile(f);
  totalChanged += changed;
  totalExercises += total;
}

console.log(
  `\n${dryRun ? '[dry-run] ' : ''}Done. ${totalChanged}/${totalExercises} exercises migrated across ${files.length} files.`
);
