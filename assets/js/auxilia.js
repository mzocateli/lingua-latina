/* ============================================================
   Lingua Latina — auxilia.js
   Renders the side panel ("Auxilia") for an exercise.

   Input shape: array of groups, each group is one of:
     { label, type:'table',  headers:[...], rows:[[...]] }
     { label, type:'list',   items:[htmlString] }
     { label, type:'words',  words:[htmlString], inline:bool, gloss?:string }

   Exports: window.LL.renderAuxilia(groups) -> HTMLElement
   ============================================================ */

(function () {
  'use strict';
  const NS = (window.LL = window.LL || {});

  function el(tag, props, children) {
    const e = document.createElement(tag);
    if (props) {
      for (const k in props) {
        if (k === 'className') e.className = props[k];
        else if (k === 'html')   e.innerHTML = props[k];
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

  function renderTable(g) {
    const tbl = el('table', { className: 'paradigm' });
    if (g.headers) {
      const tr = el('tr');
      g.headers.forEach(function (h) {
        tr.appendChild(el('th', { html: h || '&nbsp;' }));
      });
      tbl.appendChild(tr);
    }
    (g.rows || []).forEach(function (row) {
      const tr = el('tr');
      row.forEach(function (cell, i) {
        // First cell is the label; remaining cells are forms.
        if (i === 0) {
          tr.appendChild(el('td', { html: cell }));
        } else {
          tr.appendChild(el('td', null, [el('i', { html: cell })]));
        }
      });
      tbl.appendChild(tr);
    });
    return tbl;
  }

  function renderList(g) {
    const ul = el('ul');
    (g.items || []).forEach(function (item) {
      ul.appendChild(el('li', { html: item }));
    });
    return ul;
  }

  function renderWords(g) {
    const ul = el('ul', {
      className: 'aux-words' + (g.inline ? ' inline' : '')
    });
    (g.words || []).forEach(function (w) {
      ul.appendChild(el('li', { html: w }));
    });
    return ul;
  }

  function renderGroup(g) {
    const wrap = el('div', { className: 'aux-group' });
    wrap.appendChild(el('div', { className: 'aux-label', html: g.label }));
    let body;
    if (g.type === 'table') body = renderTable(g);
    else if (g.type === 'words') body = renderWords(g);
    else body = renderList(g); // default
    wrap.appendChild(body);
    if (g.gloss) {
      wrap.appendChild(el('div', { className: 'aux-gloss', html: g.gloss }));
    }
    return wrap;
  }

  function renderAuxilia(groups) {
    const aside = el('aside', {
      className: 'auxilia',
      'aria-label': 'Auxilia'
    });
    aside.appendChild(el('div', { className: 'auxilia-title', html: 'Auxilia' }));
    (groups || []).forEach(function (g) {
      aside.appendChild(renderGroup(g));
    });
    return aside;
  }

  NS.renderAuxilia = renderAuxilia;
})();
