/* ============================================================
   Lingua Latina — exercise.js
   Renders a single exercise from structured data.

   Data shape (one exercise):
   {
     number, title, tag,
     tip: { text, qualifier? },
     exemplum?,
     questions: [htmlWithPlaceholders],  // {}, {md}, {lg}, {xl}, {xxl}
     answers: [string],                  // ordered to match placeholders
     phraseMode: bool,
     auxilia: [groups…],
   }

   Exports: window.LL.renderExercise(data) -> HTMLElement
   And:     window.LL.mountChapter(slug, containerSelector?)
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

  // Convert a question's HTML template into actual HTML with <input> elements.
  // Placeholders: {} / {md} / {lg} / {xl} / {xxl}
  const PLACEHOLDER_RE = /\{(md|lg|xl|xxl)?\}/g;
  function expandQuestion(template) {
    return template.replace(PLACEHOLDER_RE, function (_match, size) {
      const cls = 'blank' + (size ? ' blank-' + size : '');
      return '<input type="text" class="' + cls + '" autocomplete="off" ' +
             'autocorrect="off" autocapitalize="off" spellcheck="false" />';
    });
  }
  NS.expandQuestion = expandQuestion;

  // ----- Tip block -----
  function renderTip(tip) {
    if (!tip || !tip.text) return null;
    const wrap = el('div', { className: 'tip' });
    const marker = el('div', { className: 'tip-marker' });
    marker.appendChild(el('span', { className: 'tip-ornament', text: '❦' }));
    marker.appendChild(el('span', { className: 'tip-label', text: 'Auxilium' }));
    if (tip.qualifier) {
      marker.appendChild(el('span', {
        className: 'tip-sub',
        html: '— ' + tip.qualifier
      }));
    }
    wrap.appendChild(marker);
    wrap.appendChild(el('div', { className: 'tip-text', html: tip.text }));
    return wrap;
  }

  // ----- Exemplum block -----
  function renderExemplum(html) {
    if (!html) return null;
    return el('p', { className: 'exemplum', html: html });
  }

  // ----- Questions list -----
  function renderQuestions(questions) {
    const ol = el('ol', { className: 'questions' });
    (questions || []).forEach(function (q) {
      const li = el('li');
      li.innerHTML = expandQuestion(q);
      ol.appendChild(li);
    });
    return ol;
  }

  // ----- Reveal / Clear buttons + answer reveal -----
  function renderControls(article) {
    const wrap = el('div', { className: 'controls' });

    const reveal = el('button', {
      className: 'reveal-btn',
      type: 'button',
      text: 'Aperī responsa'
    });

    const clear = el('button', {
      className: 'clear-btn',
      type: 'button',
      text: 'Mundā',
      title: 'Limpar respostas deste exercício'
    });

    const ans = el('div', { className: 'answer' });

    reveal.addEventListener('click', function () {
      const shown = ans.classList.toggle('show');
      reveal.textContent = shown ? 'Occulta responsa' : 'Aperī responsa';
      if (shown) {
        NS.gradeExercise(article);
      } else {
        // Hiding the answers also clears the inline corrections,
        // the correct/wrong borders, and the score badge —
        // but keeps whatever the user has typed.
        NS.ungradeExercise(article);
      }
    });
    clear.addEventListener('click', function () {
      NS.clearExercise(article);
    });

    wrap.appendChild(reveal);
    wrap.appendChild(clear);
    return { controls: wrap, answer: ans };
  }

  // Build the .answer reveal contents from the questions + answer key.
  // For each question we substitute each {} placeholder with the canonical answer.
  function renderAnswerReveal(questions, answers) {
    const wrap = el('div');
    wrap.appendChild(el('span', { className: 'answer-header', text: 'Responsa' }));
    const ol = el('ol');
    let ans = 0;
    (questions || []).forEach(function (q) {
      const html = q.replace(PLACEHOLDER_RE, function () {
        const exp = answers[ans++] || '';
        const canonical = String(exp).split('|')[0];
        return '<span class="key">' + canonical + '</span>';
      });
      ol.appendChild(el('li', { html: html }));
    });
    wrap.appendChild(ol);
    return wrap;
  }

  // ----- Wire keyboard / input behavior -----
  function wireInputs(article) {
    const inputs = NS.exerciseInputs(article);
    inputs.forEach(function (inp) {
      // Visual state cleared on edit
      inp.addEventListener('input', function () {
        inp.classList.remove('correct', 'wrong');
        const next = inp.nextElementSibling;
        if (next && next.classList && next.classList.contains('corrected')) next.remove();
      });
      // Enter goes to next field; last field triggers grading
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          const here = inputs.indexOf(inp);
          if (here >= 0 && here < inputs.length - 1) {
            inputs[here + 1].focus();
          } else {
            NS.gradeExercise(article);
          }
        }
      });
      // Auto-expand width as the user types
      const baseMin = (
        inp.classList.contains('blank-xxl') ? 18 :
        inp.classList.contains('blank-xl')  ? 14 :
        inp.classList.contains('blank-lg')  ? 11 :
        inp.classList.contains('blank-md')  ? 6  : 3
      );
      inp.addEventListener('input', function () {
        const len = Math.max(baseMin, inp.value.length + 1);
        inp.style.width = (len * 0.62) + 'em';
      });
    });
  }

  // ----- Render paradigm tables (declension / conjugation drills) -----
  // For a paradigm-kind exercise, `data.tables` is an array of:
  //   {
  //     caption: "servus, -ī (m.)",   // optional heading above the table
  //     note?: "string",              // optional small note under caption
  //     columns: ["sg.", "pl."],      // column headers
  //     rows: [
  //       { label: "nōm.", cells: ["servus", null] }   // null = blank to fill
  //     ]
  //   }
  // Every `null` cell becomes an <input class="blank">. Filled cells render
  // as given text (the anchor forms the learner reasons from).
  //
  // Returns { node, answers } — answers collected in reading order
  // (table by table, row by row, left to right) so the existing
  // grader (which reads data-answers positionally) works unchanged.
  function renderParadigmTables(tables) {
    const wrap = el('div', { className: 'paradigm-tables' });
    const answers = [];

    (tables || []).forEach(function (tbl) {
      const fig = el('figure', { className: 'paradigm-figure' });

      if (tbl.caption) {
        const cap = el('figcaption', { className: 'paradigm-caption' });
        cap.appendChild(el('span', { className: 'paradigm-caption-text', html: tbl.caption }));
        if (tbl.note) {
          cap.appendChild(el('span', { className: 'paradigm-caption-note', html: tbl.note }));
        }
        fig.appendChild(cap);
      }

      const table = el('table', { className: 'paradigm-grid' });

      // Header row
      const thead = el('thead');
      const htr = el('tr');
      htr.appendChild(el('th', { className: 'paradigm-corner', html: tbl.cornerLabel || '' }));
      (tbl.columns || []).forEach(function (col) {
        htr.appendChild(el('th', { className: 'paradigm-colhead', html: col }));
      });
      thead.appendChild(htr);
      table.appendChild(thead);

      // Body rows
      const tbody = el('tbody');
      (tbl.rows || []).forEach(function (row) {
        const tr = el('tr');
        tr.appendChild(el('th', { className: 'paradigm-rowhead', html: row.label || '' }));
        (row.cells || []).forEach(function (cell) {
          const td = el('td', { className: 'paradigm-cell' });
          if (cell === null || cell === undefined) {
            // A blank to fill. Use a medium input.
            const inp = el('input', {
              type: 'text',
              className: 'blank blank-md paradigm-input',
              autocomplete: 'off',
              autocorrect: 'off',
              autocapitalize: 'off',
              spellcheck: 'false'
            });
            td.appendChild(inp);
            answers.push('');  // placeholder, filled below by the caller
            td.setAttribute('data-blank-index', String(answers.length - 1));
          } else if (typeof cell === 'object') {
            // { answer: "...", given: false } — explicit blank with answer,
            // or { text: "..." } — explicit given cell.
            if (cell.given === false || cell.answer !== undefined) {
              const inp = el('input', {
                type: 'text',
                className: 'blank blank-md paradigm-input',
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                spellcheck: 'false'
              });
              td.appendChild(inp);
              answers.push(cell.answer || '');
              td.setAttribute('data-blank-index', String(answers.length - 1));
            } else {
              td.classList.add('paradigm-given');
              td.innerHTML = cell.text || '';
            }
          } else {
            // A given (anchor) cell — plain text.
            td.classList.add('paradigm-given');
            td.innerHTML = cell;
          }
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

      fig.appendChild(table);
      wrap.appendChild(fig);
    });

    return { node: wrap, answers: answers };
  }
  NS.renderParadigmTables = renderParadigmTables;

  // For a paradigm exercise the answer key comes from two places:
  // - cells given as `null`  -> answer must be supplied in data.answers[]
  // - cells given as object {answer:"..."} -> answer is inline
  // This helper merges them into the final ordered answer array.
  function resolveParadigmAnswers(tables, explicitAnswers) {
    const merged = [];
    let nullCursor = 0;
    (tables || []).forEach(function (tbl) {
      (tbl.rows || []).forEach(function (row) {
        (row.cells || []).forEach(function (cell) {
          if (cell === null || cell === undefined) {
            merged.push((explicitAnswers && explicitAnswers[nullCursor]) || '');
            nullCursor++;
          } else if (typeof cell === 'object' &&
                     (cell.given === false || cell.answer !== undefined)) {
            merged.push(cell.answer || '');
          }
          // given text cells contribute no answer
        });
      });
    });
    return merged;
  }

  // Answer reveal for a paradigm exercise: re-renders each table fully
  // filled in, marking which cells were blanks (the answers).
  function renderParadigmAnswerReveal(tables, resolvedAnswers) {
    const wrap = el('div');
    wrap.appendChild(el('span', { className: 'answer-header', text: 'Responsa' }));
    let ansCursor = 0;
    (tables || []).forEach(function (tbl) {
      const fig = el('figure', { className: 'paradigm-figure paradigm-answer' });
      if (tbl.caption) {
        const cap = el('figcaption', { className: 'paradigm-caption' });
        cap.appendChild(el('span', { className: 'paradigm-caption-text', html: tbl.caption }));
        fig.appendChild(cap);
      }
      const table = el('table', { className: 'paradigm-grid' });
      const thead = el('thead');
      const htr = el('tr');
      htr.appendChild(el('th', { className: 'paradigm-corner', html: tbl.cornerLabel || '' }));
      (tbl.columns || []).forEach(function (col) {
        htr.appendChild(el('th', { className: 'paradigm-colhead', html: col }));
      });
      thead.appendChild(htr);
      table.appendChild(thead);
      const tbody = el('tbody');
      (tbl.rows || []).forEach(function (row) {
        const tr = el('tr');
        tr.appendChild(el('th', { className: 'paradigm-rowhead', html: row.label || '' }));
        (row.cells || []).forEach(function (cell) {
          const td = el('td', { className: 'paradigm-cell' });
          if (cell === null || cell === undefined) {
            const exp = String(resolvedAnswers[ansCursor++] || '').split('|')[0];
            td.classList.add('paradigm-was-blank');
            td.innerHTML = '<span class="key">' + exp + '</span>';
          } else if (typeof cell === 'object' &&
                     (cell.given === false || cell.answer !== undefined)) {
            const exp = String(resolvedAnswers[ansCursor++] || '').split('|')[0];
            td.classList.add('paradigm-was-blank');
            td.innerHTML = '<span class="key">' + exp + '</span>';
          } else {
            td.classList.add('paradigm-given');
            td.innerHTML = (typeof cell === 'object') ? (cell.text || '') : cell;
          }
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      fig.appendChild(table);
      wrap.appendChild(fig);
    });
    return wrap;
  }

  // ----- Render full exercise -----
  // `chapter` is optional context, used to resolve reference topic ids
  // into a "Vide explicātionem" button.
  function renderExercise(data, chapter) {
    // A paradigm-kind exercise resolves its answer key from the tables.
    const isParadigm = data.kind === 'paradigm';
    const resolvedAnswers = isParadigm
      ? resolveParadigmAnswers(data.tables, data.answers)
      : (data.answers || []);

    const art = el('article', {
      className: 'exercise' + (isParadigm ? ' exercise-paradigm' : ''),
      id: 'ex-' + data.number,
      'data-ex-number': String(data.number),
      'data-answers': JSON.stringify(resolvedAnswers),
      'data-phrase': data.phraseMode ? '1' : '0'
    });

    // Head
    const head = el('div', { className: 'exercise-head' });
    head.appendChild(el('div', { className: 'ex-num', html: data.title || ('Exercitium ' + data.number) }));
    if (data.tag) head.appendChild(el('div', { className: 'ex-tag', html: data.tag }));
    art.appendChild(head);

    // Tip (full-width, above the body grid)
    const tip = renderTip(data.tip);
    if (tip) art.appendChild(tip);

    // Body: main + auxilia
    const body = el('div', { className: 'exercise-body' });
    const main = el('div', { className: 'exercise-main' });

    const exemplum = renderExemplum(data.exemplum);
    if (exemplum) main.appendChild(exemplum);

    if (isParadigm) {
      const built = renderParadigmTables(data.tables);
      main.appendChild(built.node);
    } else {
      main.appendChild(renderQuestions(data.questions));
    }

    const ctl = renderControls(art);
    main.appendChild(ctl.controls);

    // Reference button (links to explanation section)
    if (data.references && NS.renderReferenceButton) {
      const refBtn = NS.renderReferenceButton(data.references, chapter);
      if (refBtn) ctl.controls.appendChild(refBtn);
    }

    // Build answer reveal contents
    const ansContents = isParadigm
      ? renderParadigmAnswerReveal(data.tables, resolvedAnswers)
      : renderAnswerReveal(data.questions, data.answers);
    while (ansContents.firstChild) ctl.answer.appendChild(ansContents.firstChild);
    main.appendChild(ctl.answer);

    body.appendChild(main);

    // Auxilia sidebar
    if (data.auxilia && data.auxilia.length) {
      body.appendChild(NS.renderAuxilia(data.auxilia));
    }

    art.appendChild(body);

    // Wire input behavior after the article is built
    setTimeout(function () { wireInputs(art); }, 0);

    return art;
  }
  NS.renderExercise = renderExercise;

  // ----- Mount a whole chapter into a container -----
  function mountChapter(slug, containerSelector) {
    const chapter = NS.chapters && NS.chapters[slug];
    if (!chapter) {
      console.error('Capitulum não encontrado:', slug);
      return;
    }
    const container = document.querySelector(containerSelector || '[data-exercises]');
    if (!container) {
      console.error('Container de exercícios não encontrado');
      return;
    }
    container.innerHTML = '';
    if (!container.id) container.id = 'exercitia';
    (chapter.exercises || []).forEach(function (ex) {
      container.appendChild(renderExercise(ex, chapter));
    });
  }
  NS.mountChapter = mountChapter;

  // ----- Populate <h1> and blurb on a chapter page -----
  function mountChapterHeader(slug) {
    const chapter = NS.chapters && NS.chapters[slug];
    if (!chapter) return;
    const elT = document.querySelector('[data-chapter-title]');
    if (elT) {
      elT.innerHTML =
        '<span class="roman">Capitulum ' + chapter.numeral + '</span>' +
        '<span class="name">' + chapter.title + '</span>';
    }
    const elB = document.querySelector('[data-chapter-blurb]');
    if (elB) elB.innerHTML = chapter.blurb || '';
    // Page title
    document.title = 'Cap. ' + chapter.numeral + ' — ' + chapter.title + ' · Lingua Latīna';
  }
  NS.mountChapterHeader = mountChapterHeader;

  // ----- Render in-page table of contents (anchors to each exercise) -----
  function mountChapterTOC(slug, selector) {
    const chapter = NS.chapters && NS.chapters[slug];
    const container = document.querySelector(selector || '[data-chapter-toc]');
    if (!chapter || !container) return;
    container.classList.add('toc');
    container.innerHTML = '';
    container.appendChild(el('div', { className: 'toc-title', text: 'Exercitia' }));
    const ul = el('ul', { className: 'toc-list' });
    (chapter.exercises || []).forEach(function (ex) {
      const a = el('a', { href: '#ex-' + ex.number, html: 'Ex. ' + ex.number });
      ul.appendChild(el('li', null, [a]));
    });
    container.appendChild(ul);
  }
  NS.mountChapterTOC = mountChapterTOC;
})();
