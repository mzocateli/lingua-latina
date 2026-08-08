/**
 * Browser-side wiring for exercises rendered server-side by Astro.
 * Attaches: input behavior (Enter to advance, auto-grow width),
 *           reveal/clear button handlers,
 *           sticky section-bar offset sync.
 */

import {
  gradeExercise, ungradeExercise, clearExercise, retryWrong, exerciseInputs,
  clearAnnotations, type GradeResult,
} from './grader';
// Side-effect import: self-wires the sticky section bar. /grammatica imports
// the same module directly, without the grader.
import './section-bar';

/* ----- Session tally (in memory only — nothing is persisted) ----- */

const tally = new Map<string, GradeResult>();

function updateTally(article: HTMLElement, result: GradeResult): void {
  const key = article.getAttribute('data-ex-number') || article.id;
  tally.set(key, result);
  renderTally();
}

function dropFromTally(article: HTMLElement): void {
  const key = article.getAttribute('data-ex-number') || article.id;
  if (tally.delete(key)) renderTally();
}

function renderTally(): void {
  const box = document.querySelector<HTMLElement>('.session-tally');
  if (!box) return;
  const graded = tally.size;
  if (graded === 0) {
    box.hidden = true;
    return;
  }
  let correct = 0;
  let total = 0;
  tally.forEach(r => { correct += r.correct; total += r.total; });
  const all = Number(box.dataset.exerciseCount || '0');
  box.hidden = false;
  box.textContent =
    `corrigidos ${graded} / ${all} · acertos ${correct} / ${total}`;
}

function wireInputs(article: HTMLElement): void {
  const inputs = exerciseInputs(article);
  inputs.forEach((inp, i) => {
    if (!inp.hasAttribute('aria-label')) {
      inp.setAttribute('aria-label', `lacuna ${i + 1} de ${inputs.length}`);
    }
    inp.addEventListener('input', () => {
      inp.classList.remove('correct', 'wrong');
      clearAnnotations(inp);
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const here = inputs.indexOf(inp);
        if (here >= 0 && here < inputs.length - 1) {
          inputs[here + 1].focus();
        } else {
          gradeAndSync(article);
        }
      }
    });
    const baseMin =
      inp.classList.contains('blank-xxl') ? 18 :
      inp.classList.contains('blank-xl')  ? 14 :
      inp.classList.contains('blank-lg')  ? 11 :
      inp.classList.contains('blank-md')  ? 6  : 3;
    inp.addEventListener('input', () => {
      const len = Math.max(baseMin, inp.value.length + 1);
      inp.style.width = (len * 0.62) + 'em';
    });
  });
}

/** Grades, records the result in the session tally and shows the retry
 *  affordance when something is wrong. The single entry point for grading, so
 *  `Enter` on the last blank and the `Corrige` button behave identically. */
function gradeAndSync(article: HTMLElement, opts?: { reveal?: boolean }): GradeResult {
  const result = gradeExercise(article, opts);
  updateTally(article, result);
  const retry = article.querySelector<HTMLButtonElement>('.retry-btn');
  // After a reveal there is nothing left to retrieve — the answers are on screen.
  if (retry) retry.hidden = result.wrong === 0 || !!(opts && opts.reveal);
  return result;
}

function wireControls(article: HTMLElement): void {
  const grade = article.querySelector<HTMLButtonElement>('.grade-btn');
  const retry = article.querySelector<HTMLButtonElement>('.retry-btn');
  const reveal = article.querySelector<HTMLButtonElement>('.reveal-btn');
  const clear = article.querySelector<HTMLButtonElement>('.clear-btn');
  const ans = article.querySelector<HTMLElement>('.answer');

  if (grade) {
    grade.addEventListener('click', () => gradeAndSync(article));
  }

  if (retry) {
    retry.addEventListener('click', () => {
      retryWrong(article);
      retry.hidden = true;
    });
  }

  if (reveal && ans) {
    reveal.addEventListener('click', () => {
      const shown = ans.classList.toggle('show');
      reveal.textContent = shown ? 'Occulta responsa' : 'Aperī responsa';
      if (shown) {
        gradeAndSync(article, { reveal: true });
      } else {
        ungradeExercise(article);
        dropFromTally(article);
        if (retry) retry.hidden = true;
      }
    });
  }

  if (clear) {
    clear.addEventListener('click', () => {
      clearExercise(article);
      dropFromTally(article);
      if (retry) retry.hidden = true;
    });
  }
}

function wireReferenceButtons(): void {
  // Force open the parent <details> sections before scrolling.
  document.addEventListener('click', e => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const a = target.closest<HTMLAnchorElement>('a.ref-btn');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('#')) return;
    const parent = document.getElementById('explicationes');
    if (parent && parent instanceof HTMLDetailsElement && !parent.open) parent.open = true;
    const id = href.slice(1);
    const det = document.getElementById(id);
    if (det && det instanceof HTMLDetailsElement && !det.open) det.open = true;
  });
}

/** Wires a single exercise article: input behavior + reveal/clear controls.
 *  Exported so scripts mounting exercises after page load (e.g. the dynamic
 *  paradigm-practice page) can reuse the exact same wiring. */
export function wireExercise(article: HTMLElement): void {
  wireInputs(article);
  wireControls(article);
}

function init(): void {
  document.querySelectorAll<HTMLElement>('article.exercise').forEach(wireExercise);
  wireReferenceButtons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
