/**
 * Convert a question template containing {} / {md} / {lg} / {xl} / {xxl}
 * placeholders into HTML with <input> elements.
 *
 * Mirrors the legacy assets/js/exercise.js:expandQuestion exactly, so the
 * server-rendered HTML is byte-equivalent to the previous client-rendered
 * output.
 */
const PLACEHOLDER_RE = /\{(md|lg|xl|xxl)?\}/g;

export function expandQuestion(template: string): string {
  return template.replace(PLACEHOLDER_RE, (_m, size) => {
    const cls = 'blank' + (size ? ' blank-' + size : '');
    return (
      `<input type="text" class="${cls}" autocomplete="off" ` +
      `autocorrect="off" autocapitalize="off" spellcheck="false" />`
    );
  });
}

/**
 * Resolve the answers for a paradigm exercise:
 *   - cells given as `null`           → answer pulled from explicitAnswers[]
 *   - cells given as { answer: "…" }  → answer is inline
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

/**
 * Replace each {…} placeholder with the canonical answer wrapped in a <span class="key">.
 * Used by the answer-reveal panel.
 */
export function fillAnswers(template: string, answers: string[]): string {
  let i = 0;
  return template.replace(PLACEHOLDER_RE, () => {
    const exp = answers[i++] || '';
    const canonical = String(exp).split('|')[0];
    return `<span class="key">${canonical}</span>`;
  });
}
