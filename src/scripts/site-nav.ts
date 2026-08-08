/**
 * The chapter menu is a bare <details>, which the browser only closes by
 * clicking the summary again — Esc and click-away, which every other dropdown
 * on the web honours, have to be wired by hand.
 */

function init(): void {
  const menu = document.querySelector<HTMLDetailsElement>('.site-nav-capitula > details');
  if (!menu) return;

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !menu.open) return;
    menu.open = false;
    menu.querySelector<HTMLElement>('summary')?.focus();
  });

  document.addEventListener('click', e => {
    if (!menu.open) return;
    const target = e.target as Node | null;
    if (target && menu.contains(target)) return;
    menu.open = false;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
