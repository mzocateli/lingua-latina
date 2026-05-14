/* ============================================================
   Lingua Latina — nav.js
   Renders the site-wide navigation menu and the per-chapter
   prev/next pager. Depends on window.LL.chapterIndex.
   ============================================================ */

(function () {
  'use strict';

  const NS = (window.LL = window.LL || {});

  // ----- Resolve the page's base path (so the menu works on /, /lingua-latina/, etc.)
  function basePath() {
    // location.pathname might be: /, /lingua-latina/, /lingua-latina/cap-v.html
    const p = window.location.pathname;
    // Strip trailing filename, keep directory
    const idx = p.lastIndexOf('/');
    return idx >= 0 ? p.substring(0, idx + 1) : '/';
  }
  NS.basePath = basePath;

  function chapterHref(slug) {
    return basePath() + 'cap-' + slug + '.html';
  }
  function indexHref() {
    return basePath() + 'index.html';
  }
  NS.chapterHref = chapterHref;
  NS.indexHref = indexHref;

  // ----- Build the top navigation
  function renderSiteNav(activeSlug) {
    const idx = NS.chapterIndex || [];
    const nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Capitula');

    const inner = document.createElement('div');
    inner.className = 'site-nav-inner';

    // Brand → home
    const brand = document.createElement('a');
    brand.className = 'site-brand';
    brand.href = indexHref();
    brand.textContent = 'Lingua Latīna';
    inner.appendChild(brand);

    const spacer = document.createElement('div');
    spacer.className = 'site-nav-spacer';
    inner.appendChild(spacer);

    // Chapter list
    const ul = document.createElement('ul');
    ul.className = 'site-nav-list';
    idx.forEach(function (ch) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = chapterHref(ch.slug);
      if (ch.slug === activeSlug) a.classList.add('active');
      a.innerHTML = '<span class="num">' + ch.numeral + '</span>Cap.';
      a.setAttribute('title', 'Capitulum ' + ch.numeral + ' — ' + ch.title);
      li.appendChild(a);
      ul.appendChild(li);
    });
    inner.appendChild(ul);
    nav.appendChild(inner);
    return nav;
  }
  NS.renderSiteNav = renderSiteNav;

  // ----- Mount the nav into a placeholder (or at the top of <body>)
  function mountSiteNav(activeSlug) {
    const placeholder = document.querySelector('[data-site-nav]');
    const nav = renderSiteNav(activeSlug);
    if (placeholder) {
      placeholder.replaceWith(nav);
    } else {
      document.body.insertBefore(nav, document.body.firstChild);
    }
  }
  NS.mountSiteNav = mountSiteNav;

  // ----- Prev/Next chapter pager
  function renderPager(activeSlug) {
    const idx = NS.chapterIndex || [];
    const here = idx.findIndex(function (c) { return c.slug === activeSlug; });
    if (here === -1) return null;

    const prev = here > 0 ? idx[here - 1] : null;
    const next = here < idx.length - 1 ? idx[here + 1] : null;

    const pager = document.createElement('nav');
    pager.className = 'pager';
    pager.setAttribute('aria-label', 'Navigatio capitulorum');

    function side(direction, ch) {
      if (!ch) {
        const span = document.createElement('span');
        span.className = 'pager-' + direction + ' pager-empty';
        span.textContent = direction === 'prev' ? '⸻ (initium) ⸻' : '⸻ (fīnis) ⸻';
        return span;
      }
      const a = document.createElement('a');
      a.className = 'pager-' + direction;
      a.href = chapterHref(ch.slug);
      const dir = document.createElement('span');
      dir.className = 'pager-direction';
      dir.textContent = direction === 'prev' ? 'Capitulum anterius' : 'Capitulum sequēns';
      const title = document.createElement('span');
      title.className = 'pager-title';
      title.textContent = 'Cap. ' + ch.numeral + ' — ' + ch.title;
      a.appendChild(dir);
      a.appendChild(title);
      return a;
    }

    pager.appendChild(side('prev', prev));
    pager.appendChild(side('next', next));
    return pager;
  }
  NS.renderPager = renderPager;

  function mountPager(activeSlug) {
    const placeholder = document.querySelector('[data-pager]');
    if (!placeholder) return;
    const pager = renderPager(activeSlug);
    if (pager) placeholder.replaceWith(pager);
  }
  NS.mountPager = mountPager;
})();
