// One-shot migration: extract chapter.content.{topics,grammar,vocabulary} from
// src/data/cap-*.ts into Astro Content Collections under src/content/.
//
//   topics      → src/content/topics/{slug}/{id}.md (body = HTML)
//   grammar     → src/content/grammar/{slug}/{NN}-{name}.md (body = HTML)
//   vocabulary  → src/content/vocabulary/{slug}.yaml (full structure)
//
// Intros (grammar.intro / vocabulary.intro) move to top-level chapter fields
// (grammarIntro / vocabularyIntro). The `content` key is removed from each
// chapter.
//
// Run: node scripts/extract-content-to-collections.mjs

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

const DATA_DIR = 'src/data';
const TOPICS_DIR = 'src/content/topics';
const GRAMMAR_DIR = 'src/content/grammar';
const VOCAB_DIR = 'src/content/vocabulary';

mkdirSync(TOPICS_DIR, { recursive: true });
mkdirSync(GRAMMAR_DIR, { recursive: true });
mkdirSync(VOCAB_DIR, { recursive: true });

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Strip the common leading-whitespace indent from every line. Markdown
 *  treats 4+ leading spaces as a code block, so HTML bodies need to start
 *  at column 0. */
function dedent(s) {
  if (!s) return s;
  const lines = s.split('\n');
  const nonBlank = lines.filter(l => l.trim());
  if (!nonBlank.length) return s;
  const indents = nonBlank.map(l => l.match(/^(\s*)/)[1].length);
  const minIndent = Math.min(...indents);
  if (!minIndent) return s;
  return lines.map(l => l.slice(minIndent)).join('\n');
}

function writeMd(path, frontmatter, body) {
  const fm = yaml.dump(frontmatter, { lineWidth: 1000, quotingType: '"' }).trim();
  const out = `---\n${fm}\n---\n${dedent(body || '').trim()}\n`;
  writeFileSync(path, out);
}

function extractChapter(filename) {
  const path = join(DATA_DIR, filename);
  const raw = readFileSync(path, 'utf8');
  const m = raw.match(/^(import[\s\S]*?const chapter: Chapter = )([\s\S]*?)(;\s*export default chapter;\s*)$/);
  if (!m) {
    console.error(`✗ ${filename}: parse failed`);
    return { topics: 0, grammar: 0, vocab: 0 };
  }
  const [, prefix, jsonText, suffix] = m;
  const chapter = JSON.parse(jsonText);

  const slug = chapter.slug;
  const content = chapter.content || {};
  let topicCount = 0, grammarCount = 0, vocabWritten = 0;

  // ----- TOPICS -----
  if (content.topics && content.topics.length) {
    mkdirSync(join(TOPICS_DIR, slug), { recursive: true });
    content.topics.forEach((t, i) => {
      const fm = { title: t.title, order: i };
      if (t.bookRef) fm.bookRef = t.bookRef;
      writeMd(join(TOPICS_DIR, slug, `${t.id}.md`), fm, t.body);
      topicCount++;
    });
  }

  // ----- GRAMMAR -----
  if (content.grammar) {
    if (content.grammar.intro) {
      chapter.grammarIntro = content.grammar.intro;
    }
    if (content.grammar.sections && content.grammar.sections.length) {
      mkdirSync(join(GRAMMAR_DIR, slug), { recursive: true });
      content.grammar.sections.forEach((s, i) => {
        const num = String(i + 1).padStart(2, '0');
        const name = slugify(s.heading || `section-${num}`);
        const fm = {};
        if (s.heading) fm.heading = s.heading;
        if (s.bookRef) fm.bookRef = s.bookRef;
        writeMd(join(GRAMMAR_DIR, slug, `${num}-${name}.md`), fm, s.body);
        grammarCount++;
      });
    }
  }

  // ----- VOCABULARY -----
  if (content.vocabulary) {
    const vocabData = {};
    if (content.vocabulary.intro) {
      chapter.vocabularyIntro = content.vocabulary.intro;
    }
    if (content.vocabulary.groups && content.vocabulary.groups.length) {
      vocabData.groups = content.vocabulary.groups;
      writeFileSync(
        join(VOCAB_DIR, `${slug}.yaml`),
        yaml.dump(vocabData, { lineWidth: 1000, quotingType: '"' })
      );
      vocabWritten = 1;
    }
  }

  // ----- Remove content from chapter -----
  delete chapter.content;

  // Reorder keys for clean output: keep slug/numeral/title/blurb at top,
  // grammarIntro/vocabularyIntro next, exercises last.
  const ordered = {};
  for (const k of ['slug', 'numeral', 'title', 'blurb', 'grammarIntro', 'vocabularyIntro']) {
    if (chapter[k] !== undefined) ordered[k] = chapter[k];
  }
  ordered.exercises = chapter.exercises;

  const newJson = JSON.stringify(ordered, null, 2);
  writeFileSync(path, prefix + newJson + suffix);

  console.log(`✓ ${filename}: ${topicCount} topics, ${grammarCount} grammar, ${vocabWritten} vocabulary`);
  return { topics: topicCount, grammar: grammarCount, vocab: vocabWritten };
}

const files = readdirSync(DATA_DIR).filter(f => f.startsWith('cap-') && f.endsWith('.ts'));
let totals = { topics: 0, grammar: 0, vocab: 0 };
for (const f of files) {
  const r = extractChapter(f);
  totals.topics += r.topics;
  totals.grammar += r.grammar;
  totals.vocab += r.vocab;
}
console.log(`\nDone. Extracted ${totals.topics} topics, ${totals.grammar} grammar sections, ${totals.vocab} vocabulary files.`);
