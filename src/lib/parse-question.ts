/**
 * Parse a question template with inline answers into HTML + answer key.
 *
 * Placeholder grammar (between `{` and `}`):
 *   {ō}              answer = "ō",       default size
 *   {ō:md}           answer = "ō",       size = md|lg|xl|xxl
 *   {eīs|iīs}        alternatives separated by |
 *   {eīs|iīs:lg}     alternatives + size
 *   {}               empty placeholder (no answer key set — discouraged)
 *   {:md}            empty placeholder, forced size
 *
 *   Backward-compat (legacy):
 *   {md}|{lg}|{xl}|{xxl}  bare-size placeholders (treated as empty + size)
 *
 *   Edge cases:
 *   - The answer may not contain `}`.
 *   - To use a literal `:md` inside an answer, escape the size match by
 *     putting `:` not as the final separator — i.e. answers don't contain
 *     literal `:md`/`:lg`/etc as a suffix (none in our data do).
 */

const PLACEHOLDER_RE = /\{([^}]*)\}/g;
const SIZE_RE = /^(md|lg|xl|xxl)$/;

const INPUT_ATTRS =
  'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"';

/** Split a placeholder body into (answer, size). */
function splitAnswerAndSize(body: string): { answer: string; size: string } {
  // Bare-size legacy form: {md}, {lg}, {xl}, {xxl}
  if (SIZE_RE.test(body)) {
    return { answer: '', size: body };
  }
  // Modern: split on the LAST ':'. If the trailing token is a valid size, use it.
  const colon = body.lastIndexOf(':');
  if (colon >= 0) {
    const suffix = body.slice(colon + 1);
    if (SIZE_RE.test(suffix)) {
      return { answer: body.slice(0, colon), size: suffix };
    }
  }
  return { answer: body, size: '' };
}

export interface ParsedQuestion {
  html: string;
  answers: string[];
}

/** Convert a question template into HTML (with <input>s) + answer list. */
export function parseQuestion(template: string): ParsedQuestion {
  const answers: string[] = [];
  const html = template.replace(PLACEHOLDER_RE, (_m, body: string) => {
    const { answer, size } = splitAnswerAndSize(body);
    answers.push(answer);
    const cls = 'blank' + (size ? ' blank-' + size : '');
    return `<input type="text" class="${cls}" ${INPUT_ATTRS} />`;
  });
  return { html, answers };
}

/** Reveal-mode rendering: replace each placeholder with its canonical answer. */
export function renderQuestionReveal(template: string): string {
  return template.replace(PLACEHOLDER_RE, (_m, body: string) => {
    const { answer } = splitAnswerAndSize(body);
    const canonical = String(answer).split('|')[0];
    return `<span class="key">${canonical}</span>`;
  });
}

/** Parse a whole exercise's questions, concatenating answers in order. */
export function parseQuestions(questions: string[]): ParsedQuestion {
  const allAnswers: string[] = [];
  const allHtml: string[] = [];
  for (const q of questions) {
    const { html, answers } = parseQuestion(q);
    allHtml.push(html);
    allAnswers.push(...answers);
  }
  return { html: allHtml.join('\n'), answers: allAnswers };
}

/**
 * Walk a paradigm exercise's tables in reading order and return the answers
 * for every blank cell. Inline `{ answer: "…", given: false }` cells supply
 * their own answer; `null`/`undefined` cells fall back to the explicit
 * answers array (legacy support — post-PR-2 data has no null cells).
 */
import type { ParadigmTable } from './types';

export function resolveParadigmAnswers(
  tables: ParadigmTable[] | undefined,
  explicitAnswers: string[] | undefined
): string[] {
  const merged: string[] = [];
  let nullCursor = 0;
  (tables || []).forEach(tbl => {
    (tbl.rows || []).forEach(row => {
      (row.cells || []).forEach(cell => {
        if (cell === null || cell === undefined) {
          merged.push((explicitAnswers && explicitAnswers[nullCursor]) || '');
          nullCursor++;
        } else if (typeof cell === 'object' &&
                   (cell.given === false || cell.answer !== undefined)) {
          merged.push(cell.answer || '');
        }
      });
    });
  });
  return merged;
}
