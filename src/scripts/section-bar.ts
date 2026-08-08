/**
 * Sticky section bar: keeps its offset in sync with the site nav height and
 * force-opens a <details> target before the browser scrolls to it.
 *
 * Lives apart from exercise-runtime.ts so pages without exercises (/grammatica)
 * can have the bar without shipping the grader.
 */

export function wireSectionBar(): void {
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', wireSectionBar);
} else {
  wireSectionBar();
}
