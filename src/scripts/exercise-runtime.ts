/**
 * Browser-side wiring for exercises rendered server-side by Astro.
 * Attaches: input behavior (Enter to advance, auto-grow width),
 *           reveal/clear button handlers,
 *           sticky section-bar offset sync.
 */

import { gradeExercise, ungradeExercise, clearExercise, exerciseInputs } from './grader';

function wireInputs(article: HTMLElement): void {
  const inputs = exerciseInputs(article);
  inputs.forEach(inp => {
    inp.addEventListener('input', () => {
      inp.classList.remove('correct', 'wrong');
      const next = inp.nextElementSibling;
      if (next && next.classList && next.classList.contains('corrected')) next.remove();
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const here = inputs.indexOf(inp);
        if (here >= 0 && here < inputs.length - 1) {
          inputs[here + 1].focus();
        } else {
          gradeExercise(article);
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

function wireControls(article: HTMLElement): void {
  const reveal = article.querySelector<HTMLButtonElement>('.reveal-btn');
  const clear = article.querySelector<HTMLButtonElement>('.clear-btn');
  const ans = article.querySelector<HTMLElement>('.answer');

  if (reveal && ans) {
    reveal.addEventListener('click', () => {
      const shown = ans.classList.toggle('show');
      reveal.textContent = shown ? 'Occulta responsa' : 'Aperī responsa';
      if (shown) gradeExercise(article);
      else ungradeExercise(article);
    });
  }

  if (clear) {
    clear.addEventListener('click', () => clearExercise(article));
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

function wireSectionBar(): void {
  const bar = document.querySelector<HTMLElement>('.section-bar');
  if (!bar) return;

  // Open the <details> matching a clicked section-bar anchor before scroll.
  bar.addEventListener('click', e => {
    const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a.section-bar-link');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('#')) return;
    const target = document.getElementById(href.slice(1));
    if (target && target instanceof HTMLDetailsElement && !target.open) {
      target.open = true;
    }
  });

  // Sticky offset matches the site nav height.
  function syncTop(): void {
    const nav = document.querySelector<HTMLElement>('.site-nav');
    const h = nav ? nav.getBoundingClientRect().height : 0;
    bar!.style.top = h + 'px';
    document.documentElement.style.setProperty(
      '--section-bar-offset', (h + bar!.getBoundingClientRect().height + 8) + 'px'
    );
  }
  syncTop();
  window.addEventListener('resize', syncTop);
  setTimeout(syncTop, 100);
}

function init(): void {
  document.querySelectorAll<HTMLElement>('article.exercise').forEach(art => {
    wireInputs(art);
    wireControls(art);
  });
  wireReferenceButtons();
  wireSectionBar();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
