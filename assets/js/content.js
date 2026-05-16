/* ============================================================
   Lingua Latina — content.js
   Renders the per-chapter "Explicātiōnēs" section (collapsible
   topics with short explanations + book references) and a
   "Vide explicātionem" button on exercises that links to the
   relevant topic.

   Depends on `chapter.content.topics` shape:
     { id, title, bookRef, body }
   And on `exercise.references: ['topic-id', …]`.

   Exports:
     window.LL.mountChapterContent(slug, selector?)
     window.LL.renderReferenceButton(refs, chapter)
   ============================================================ */

(function () {
  'use strict';
  const NS = (window.LL = window.LL || {});

  function el(tag, props, children) {
    const e = document.createElement(tag);
    if (props) {
      for (const k in props) {
        if (k === 'className') e.className = props[k];
        else if (k === 'html') e.innerHTML = props[k];
        else if (k === 'text') e.textContent = props[k];
        else e.setAttribute(k, props[k]);
      }
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c == null) return;
        e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return e;
  }

  // ----- One topic block -----
  function renderTopic(topic) {
    const det = el('details', {
      className: 'content-topic',
      id: 'content-' + topic.id
    });
    const sum = el('summary', { className: 'content-topic-summary' });
    sum.appendChild(el('span', {
      className: 'content-topic-marker',
      text: '❦'
    }));
    sum.appendChild(el('span', {
      className: 'content-topic-title',
      html: topic.title
    }));
    if (topic.bookRef) {
      sum.appendChild(el('span', {
        className: 'content-topic-ref',
        html: topic.bookRef
      }));
    }
    det.appendChild(sum);
    det.appendChild(el('div', {
      className: 'content-topic-body',
      html: topic.body
    }));
    return det;
  }

  // ----- Grammatica section (paradigms, formal grammar) -----
  // Now wrapped in a <details> that's collapsed by default. The summary
  // shows the section title and a small index of subsection headings,
  // so the reader can decide whether to expand. Each subsection inside
  // is also a <details> (open by default once parent is open) — letting
  // someone collapse just the parts they don't need.
  function renderGrammar(grammar, numeral) {
    if (!grammar) return null;
    const wrap = el('details', {
      className: 'grammar-section',
      id: 'grammatica'
    });
    const sum = el('summary', { className: 'grammar-summary' });
    sum.appendChild(el('span', {
      className: 'section-marker',
      text: '§'
    }));
    sum.appendChild(el('span', {
      className: 'section-title-inline',
      html: 'Grammatica Latīna <span class="roman">· cap. ' +
            String(numeral || '').toLowerCase() + '</span>'
    }));
    // Compact list of headings inside the summary, comma-separated.
    const headingNames = (grammar.sections || [])
      .map(function (s) { return s.heading; })
      .filter(Boolean);
    if (headingNames.length) {
      sum.appendChild(el('span', {
        className: 'section-summary-list',
        html: headingNames.join(' · ')
      }));
    }
    wrap.appendChild(sum);

    if (grammar.intro) {
      wrap.appendChild(el('p', { className: 'grammar-intro', html: grammar.intro }));
    }
    (grammar.sections || []).forEach(function (s, idx) {
      const block = el('details', {
        className: 'grammar-block',
        open: ''   // each subsection open by default once parent is open
      });
      const blockSum = el('summary', { className: 'grammar-block-summary' });
      if (s.heading) {
        blockSum.appendChild(el('span', {
          className: 'grammar-heading',
          html: s.heading
        }));
      }
      if (s.bookRef) {
        blockSum.appendChild(el('span', {
          className: 'grammar-bookref',
          html: s.bookRef
        }));
      }
      block.appendChild(blockSum);
      if (s.body) {
        block.appendChild(el('div', { className: 'grammar-body', html: s.body }));
      }
      wrap.appendChild(block);
    });
    return wrap;
  }

  // ----- Section jump bar (sticky at top of the chapter wrap) -----
  // Adds quick anchors so the reader doesn't have to scroll past one
  // section to reach another.
  function renderSectionBar(hasGrammar, hasTopics) {
    const bar = el('nav', { className: 'section-bar', 'aria-label': 'Saltar para seção' });
    const ul = el('ul', { className: 'section-bar-list' });
    if (hasGrammar) {
      ul.appendChild(el('li', null, [
        el('a', { href: '#grammatica', className: 'section-bar-link', html: '§ Grammatica' })
      ]));
    }
    if (hasTopics) {
      ul.appendChild(el('li', null, [
        el('a', { href: '#explicationes', className: 'section-bar-link', html: '❦ Explicātiōnēs' })
      ]));
    }
    ul.appendChild(el('li', null, [
      el('a', { href: '#exercitia-title', className: 'section-bar-link', html: '✎ Exercitia' })
    ]));
    bar.appendChild(ul);

    // Smooth-jump + force-open behaviour
    bar.addEventListener('click', function (e) {
      const a = e.target.closest('a.section-bar-link');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#')) {
        const id = href.slice(1);
        // For collapsible sections, open them before scrolling.
        const target = document.getElementById(id);
        if (target && target.tagName === 'DETAILS' && !target.open) {
          target.open = true;
        }
      }
    });
    return bar;
  }
  NS.renderSectionBar = renderSectionBar;

  // ----- Whole chapter content section -----
  function mountChapterContent(slug, selector) {
    const chapter = NS.chapters && NS.chapters[slug];
    const target = document.querySelector(selector || '[data-chapter-content]');
    if (!target) return;
    if (!chapter || !chapter.content) {
      target.hidden = true;
      return;
    }
    const content = chapter.content;
    if (!content.grammar && !(content.topics && content.topics.length)) {
      target.hidden = true;
      return;
    }
    target.hidden = false;
    target.innerHTML = '';
    target.classList.add('content-section');

    // Grammatica first (no preamble — it's the formal grammar block)
    const grammar = renderGrammar(content.grammar, chapter.numeral);
    if (grammar) target.appendChild(grammar);

    // Explicātiōnēs as a single collapsible <details> (closed by default).
    // Inside, the individual topics are themselves collapsible.
    if (content.topics && content.topics.length) {
      const exp = el('details', {
        className: 'topics-section',
        id: 'explicationes'
      });
      const expSum = el('summary', { className: 'topics-summary' });
      expSum.appendChild(el('span', {
        className: 'section-marker',
        text: '❦'
      }));
      expSum.appendChild(el('span', {
        className: 'section-title-inline',
        html: 'Explicātiōnēs <span class="roman">· referentiae · cap. ' +
              String(chapter.numeral || '').toLowerCase() + '</span>'
      }));
      const topicNames = content.topics.map(function (t) {
        // Strip HTML tags from the title for the summary list
        const tmp = document.createElement('div');
        tmp.innerHTML = t.title;
        return tmp.textContent;
      });
      expSum.appendChild(el('span', {
        className: 'section-summary-list',
        text: topicNames.join(' · ')
      }));
      exp.appendChild(expSum);

      exp.appendChild(el('p', {
        className: 'content-intro',
        html: 'Resumo breve para acompanhar o livro. Para a explicação completa, ' +
              'consulta as linhas indicadas em <em>Familia Romana</em>. Clica num tópico para expandir.'
      }));
      content.topics.forEach(function (t) {
        exp.appendChild(renderTopic(t));
      });
      target.appendChild(exp);
    }
  }
  NS.mountChapterContent = mountChapterContent;

  // ----- Mount the sticky section jump bar -----
  function mountSectionBar(slug, selector) {
    const chapter = NS.chapters && NS.chapters[slug];
    const target = document.querySelector(selector || '[data-section-bar]');
    if (!target) return;
    const content = (chapter && chapter.content) || {};
    const hasGrammar = !!content.grammar;
    const hasTopics = !!(content.topics && content.topics.length);
    target.innerHTML = '';
    const bar = renderSectionBar(hasGrammar, hasTopics);
    target.appendChild(bar);

    // Sync the bar's `top` with the site-nav's height so it sits flush
    // beneath it. Re-check on resize because the nav wraps on narrow
    // viewports and gains height.
    function syncTop() {
      const nav = document.querySelector('.site-nav');
      const h = nav ? nav.getBoundingClientRect().height : 0;
      target.style.top = h + 'px';
      // Also export to a CSS var so anchors with scroll-margin can use it.
      document.documentElement.style.setProperty(
        '--section-bar-offset', (h + bar.getBoundingClientRect().height + 8) + 'px'
      );
    }
    syncTop();
    window.addEventListener('resize', syncTop);
    // Also sync once after fonts settle, since the nav height depends on it
    setTimeout(syncTop, 100);
  }
  NS.mountSectionBar = mountSectionBar;

  // ----- Reference button for an exercise -----
  // Receives the array of topic ids and the chapter data.
  // Returns a single button (or button group if multiple refs).
  function renderReferenceButton(refs, chapter) {
    if (!refs || !refs.length) return null;
    if (!chapter || !chapter.content || !chapter.content.topics) return null;

    const topics = chapter.content.topics;
    const matched = refs
      .map(function (id) { return topics.find(function (t) { return t.id === id; }); })
      .filter(Boolean);
    if (!matched.length) return null;

    function topicAnchor(topic, label, extraClass) {
      const a = el('a', {
        className: 'ref-btn' + (extraClass ? ' ' + extraClass : ''),
        href: '#content-' + topic.id,
        title: 'Vide: ' + topic.title.replace(/<[^>]+>/g, '')
      });
      a.innerHTML = label;
      // On click, force the parent Explicātiōnēs <details> and the topic
      // <details> open before the browser scrolls.
      a.addEventListener('click', function () {
        const parent = document.getElementById('explicationes');
        if (parent && !parent.open) parent.open = true;
        const det = document.getElementById('content-' + topic.id);
        if (det && !det.open) det.open = true;
      });
      return a;
    }

    if (matched.length === 1) {
      return topicAnchor(matched[0], '❦ Vide explicātionem');
    }

    // Multiple references → small group
    const wrap = el('div', { className: 'ref-btn-group' });
    wrap.appendChild(el('span', {
      className: 'ref-btn-label',
      text: 'Vide:'
    }));
    matched.forEach(function (t) {
      // Strip any HTML in the title for the label
      const tmp = document.createElement('div');
      tmp.innerHTML = t.title;
      wrap.appendChild(topicAnchor(t, tmp.textContent, 'ref-btn-small'));
    });
    return wrap;
  }
  NS.renderReferenceButton = renderReferenceButton;
})();
