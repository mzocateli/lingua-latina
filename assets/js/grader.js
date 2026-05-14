/* ============================================================
   Lingua Latina — grader.js
   Input normalization + correctness check.

   Exports (under window.LL):
     normalize(s)        : strip macrons, lowercase, trim punctuation
     stripMacrons(s)     : just remove macrons
     isCorrect(user, expected, opts) : compare answers
     gradeExercise(article) : scan inputs in an article and apply
                              correct/wrong classes + corrected hints
     clearExercise(article)  : reset visual state
   ============================================================ */

(function () {
  'use strict';

  const NS = (window.LL = window.LL || {});

  const MACRON_MAP = {
    'ā':'a','ē':'e','ī':'i','ō':'o','ū':'u','ȳ':'y',
    'Ā':'A','Ē':'E','Ī':'I','Ō':'O','Ū':'U','Ȳ':'Y'
  };

  function stripMacrons(s) {
    return (s || '').replace(/[āēīōūȳĀĒĪŌŪȲ]/g, function (ch) {
      return MACRON_MAP[ch] || ch;
    });
  }

  function normalize(s) {
    return stripMacrons((s || '').toLowerCase())
      .replace(/[.,;:!?"'"""''`´]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Compare a single user input against an expected answer.
  // expected may contain '|' to allow alternatives.
  // opts.phraseMode: looser matching for multi-word answers.
  function isCorrect(userInput, expected, opts) {
    if (!userInput) return false;
    const u = normalize(userInput);
    const alts = String(expected).split('|').map(normalize);
    const phrase = opts && opts.phraseMode;
    if (phrase) {
      return alts.some(function (a) {
        if (!a) return false;
        if (u === a) return true;
        if (u.includes(a)) return true;
        if (a.includes(u) && u.length >= Math.max(3, a.length * 0.6)) return true;
        return false;
      });
    }
    return alts.includes(u);
  }

  // Find inputs that belong to the exercise (excluding any inside the .answer reveal).
  function exerciseInputs(article) {
    const out = [];
    const all = article.querySelectorAll('input.blank');
    for (let i = 0; i < all.length; i++) {
      const inp = all[i];
      if (inp.closest('.answer')) continue;
      out.push(inp);
    }
    return out;
  }
  NS.exerciseInputs = exerciseInputs;

  // Get answer key for an exercise from the article's data-* attributes.
  // We expect data-answers (JSON array) and data-phrase ("1" if phraseMode).
  function exerciseKey(article) {
    const raw = article.getAttribute('data-answers');
    if (!raw) return null;
    try { return JSON.parse(raw); }
    catch (e) { console.error('Bad data-answers JSON:', e); return null; }
  }

  function isPhraseMode(article) {
    return article.getAttribute('data-phrase') === '1';
  }

  function setScore(article, correct, total) {
    let badge = article.querySelector('.score');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'score';
      const head = article.querySelector('.exercise-head');
      if (head) head.appendChild(badge);
    }
    badge.textContent = correct + ' / ' + total;
    badge.classList.toggle('perfect', correct === total && total > 0);
  }

  function gradeExercise(article) {
    const key = exerciseKey(article);
    if (!key) return;
    const phrase = isPhraseMode(article);
    const inputs = exerciseInputs(article);
    let correct = 0;
    inputs.forEach(function (inp, i) {
      // Remove any prior correction hint
      const next = inp.nextElementSibling;
      if (next && next.classList && next.classList.contains('corrected')) next.remove();
      inp.classList.remove('correct', 'wrong');
      const expected = key[i] || '';
      if (!expected) return;
      if (isCorrect(inp.value, expected, { phraseMode: phrase })) {
        inp.classList.add('correct');
        correct++;
      } else {
        inp.classList.add('wrong');
        const canonical = expected.split('|')[0];
        const span = document.createElement('span');
        span.className = 'corrected';
        span.textContent = canonical;
        inp.insertAdjacentElement('afterend', span);
      }
    });
    setScore(article, correct, inputs.length);
  }
  NS.gradeExercise = gradeExercise;

  function clearExercise(article) {
    exerciseInputs(article).forEach(function (inp) {
      inp.value = '';
      inp.classList.remove('correct', 'wrong');
      const next = inp.nextElementSibling;
      if (next && next.classList && next.classList.contains('corrected')) next.remove();
      // also reset auto-width
      inp.style.width = '';
    });
    const badge = article.querySelector('.score');
    if (badge) badge.remove();
    const ans = article.querySelector('.answer');
    if (ans && ans.classList.contains('show')) {
      ans.classList.remove('show');
      const btn = article.querySelector('.reveal-btn');
      if (btn) btn.textContent = 'Aperī responsa';
    }
  }
  NS.clearExercise = clearExercise;

  // Public utilities
  NS.normalize = normalize;
  NS.stripMacrons = stripMacrons;
  NS.isCorrect = isCorrect;
})();
