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

  // ----- Whole chapter content section -----
  function mountChapterContent(slug, selector) {
    const chapter = NS.chapters && NS.chapters[slug];
    const target = document.querySelector(selector || '[data-chapter-content]');
    if (!target) return;
    if (!chapter || !chapter.content || !chapter.content.topics) {
      target.hidden = true;
      return;
    }
    target.hidden = false;
    target.innerHTML = '';
    target.classList.add('content-section');

    target.appendChild(el('h2', {
      className: 'section-title',
      html: 'Explicātiōnēs <span class="roman">· referentiae · cap. ' +
            String(chapter.numeral || '').toLowerCase() + '</span>'
    }));
    target.appendChild(el('p', {
      className: 'content-intro',
      html: 'Resumo breve para acompanhar o livro. Para a explicação completa, ' +
            'consulta as linhas indicadas em <em>Familia Romana</em>. Clica num tópico para expandir.'
    }));

    chapter.content.topics.forEach(function (t) {
      target.appendChild(renderTopic(t));
    });
  }
  NS.mountChapterContent = mountChapterContent;

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
      // On click, force <details> open before the browser scrolls.
      a.addEventListener('click', function () {
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
