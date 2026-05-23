/**
 * Input normalization + correctness check.
 * Runs in the browser. Public API attached to window.LL.
 */

const MACRON_MAP: Record<string, string> = {
  'ā':'a','ē':'e','ī':'i','ō':'o','ū':'u','ȳ':'y',
  'Ā':'A','Ē':'E','Ī':'I','Ō':'O','Ū':'U','Ȳ':'Y'
};

export function stripMacrons(s: string): string {
  return (s || '').replace(/[āēīōūȳĀĒĪŌŪȲ]/g, ch => MACRON_MAP[ch] || ch);
}

export function normalize(s: string): string {
  return stripMacrons((s || '').toLowerCase())
    .replace(/[.,;:!?"'`´“”‘’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(s: string): string[] {
  return normalize(s).split(/\s+/).filter(Boolean);
}

// 'ab' ≡ 'ā' before vowels; 'ex' ≡ 'ē' before vowels.
// After macron stripping these become 'a'/'ab' and 'e'/'ex' — fold them.
const TOKEN_ALIASES: Record<string, string> = { 'ab': 'a', 'ex': 'e' };
function canonToken(t: string): string {
  return TOKEN_ALIASES[t] || t;
}

function multisetContains(haystack: string[], needles: string[]): boolean {
  const counts: Record<string, number> = {};
  for (const h of haystack) {
    const c = canonToken(h);
    counts[c] = (counts[c] || 0) + 1;
  }
  for (const n of needles) {
    const c = canonToken(n);
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
}

export interface IsCorrectOpts {
  phraseMode?: boolean;
}

export function isCorrect(userInput: string, expected: string, opts?: IsCorrectOpts): boolean {
  if (!userInput) return false;
  const u = normalize(userInput);
  const alts = String(expected).split('|').map(normalize);
  const phrase = opts && opts.phraseMode;

  if (phrase) {
    const userTokens = tokenize(userInput);
    return alts.some(a => {
      if (!a) return false;
      const expectedTokens = tokenize(a);
      return multisetContains(userTokens, expectedTokens);
    });
  }
  return alts.includes(u);
}

export function exerciseInputs(article: HTMLElement): HTMLInputElement[] {
  const out: HTMLInputElement[] = [];
  const all = article.querySelectorAll<HTMLInputElement>('input.blank');
  for (const inp of Array.from(all)) {
    if (inp.closest('.answer')) continue;
    out.push(inp);
  }
  return out;
}

function exerciseKey(article: HTMLElement): string[] | null {
  const raw = article.getAttribute('data-answers');
  if (!raw) return null;
  try { return JSON.parse(raw); }
  catch (e) { console.error('Bad data-answers JSON:', e); return null; }
}

function isPhraseMode(article: HTMLElement): boolean {
  return article.getAttribute('data-phrase') === '1';
}

function setScore(article: HTMLElement, correct: number, total: number): void {
  let badge = article.querySelector<HTMLElement>('.score');
  if (!badge) {
    badge = document.createElement('span');
    badge.className = 'score';
    const head = article.querySelector('.exercise-head');
    if (head) head.appendChild(badge);
  }
  badge.textContent = `${correct} / ${total}`;
  badge.classList.toggle('perfect', correct === total && total > 0);
}

export function gradeExercise(article: HTMLElement): void {
  const key = exerciseKey(article);
  if (!key) return;
  const phrase = isPhraseMode(article);
  const inputs = exerciseInputs(article);
  let correct = 0;
  inputs.forEach((inp, i) => {
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

export function ungradeExercise(article: HTMLElement): void {
  exerciseInputs(article).forEach(inp => {
    inp.classList.remove('correct', 'wrong');
    const next = inp.nextElementSibling;
    if (next && next.classList && next.classList.contains('corrected')) next.remove();
  });
  const badge = article.querySelector('.score');
  if (badge) badge.remove();
}

export function clearExercise(article: HTMLElement): void {
  ungradeExercise(article);
  exerciseInputs(article).forEach(inp => {
    inp.value = '';
    inp.style.width = '';
  });
  const ans = article.querySelector('.answer');
  if (ans && ans.classList.contains('show')) {
    ans.classList.remove('show');
    const btn = article.querySelector<HTMLButtonElement>('.reveal-btn');
    if (btn) btn.textContent = 'Aperī responsa';
  }
}
