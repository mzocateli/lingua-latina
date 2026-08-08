/**
 * Client script for /pratica/ — the dynamic paradigm-drill page.
 * Reads the config panel, filters the curated bank via the grammar-progression
 * unlock map, generates a table with paradigm-generator.ts, and mounts it as
 * a DOM tree that mimics ParadigmTables.astro/Exercise.astro exactly — so
 * grader.ts and exercise-runtime.ts's wireExercise() work unmodified.
 */

import type { ParadigmTable, ParadigmCell } from '~/lib/types';
import {
  generateParadigm, availableCases, availableDeclensions, availableVoices,
  type PracticeConfig,
} from '~/lib/paradigm-generator';
import type { CaseName, Declension, Conjugation, Voice } from '~/lib/grammar-progression';
import { chapterIndex } from '~/data/chapters';
import { wireExercise } from './exercise-runtime';

function checkedValues(form: HTMLFormElement, name: string): string[] {
  return Array.from(form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked:not(:disabled)`))
    .map(i => i.value);
}

/** Disables checkboxes outside `allowed`, unchecking them; re-enables and
 *  re-checks ones that come back into range, so the panel always shows what
 *  will actually be drilled. */
function setDisabled(form: HTMLFormElement, name: string, allowed: Set<string>): void {
  form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`).forEach(inp => {
    const ok = allowed.has(inp.value);
    if (ok && inp.disabled) inp.checked = true;
    if (!ok) inp.checked = false;
    inp.disabled = !ok;
  });
}

function readConfig(form: HTMLFormElement): PracticeConfig {
  const maxChapter = (form.querySelector<HTMLSelectElement>('#cfg-max'))!.value;
  const minChapter = (form.querySelector<HTMLSelectElement>('#cfg-min'))!.value;
  return {
    maxChapter,
    minChapter,
    pos: checkedValues(form, 'pos') as Array<'noun' | 'verb'>,
    declensions: checkedValues(form, 'declension').map(Number) as Declension[],
    conjugations: checkedValues(form, 'conjugation').map(Number) as Conjugation[],
    cases: checkedValues(form, 'case') as CaseName[],
    voices: checkedValues(form, 'voice') as Voice[],
  };
}

/* ----- Config ⇄ query string -----------------------------------------
 * The panel's state lives in the URL and nowhere else: reload keeps it, the
 * link is shareable, and the site stores nothing. `PARAM_OF` maps each control
 * group's `name` attribute to its short query key.
 */

const PARAM_OF: Record<string, string> = {
  pos: 'pos',
  declension: 'decl',
  conjugation: 'coni',
  case: 'casus',
  voice: 'vox',
};

/** Applies `?…` to the form controls. Chapter range first, then availability,
 *  so an explicit selection can never turn on something still locked. */
function applyQuery(form: HTMLFormElement, params: URLSearchParams): void {
  const min = form.querySelector<HTMLSelectElement>('#cfg-min')!;
  const max = form.querySelector<HTMLSelectElement>('#cfg-max')!;
  const de = params.get('de');
  const ate = params.get('ate');
  if (de && Array.from(min.options).some(o => o.value === de)) min.value = de;
  if (ate && Array.from(max.options).some(o => o.value === ate)) max.value = ate;

  syncAvailability(form);

  for (const [name, key] of Object.entries(PARAM_OF)) {
    const raw = params.get(key);
    if (raw === null) continue;
    const wanted = new Set(raw.split(',').filter(Boolean));
    form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`).forEach(inp => {
      if (inp.disabled) return;
      inp.checked = wanted.has(inp.value);
    });
  }
}

/** Serializes the form into the query string, replacing the current entry so
 *  the back button still leaves the page instead of walking config history. */
function writeQuery(form: HTMLFormElement, cfg: PracticeConfig): void {
  const params = new URLSearchParams();
  params.set('de', cfg.minChapter);
  params.set('ate', cfg.maxChapter);
  for (const [name, key] of Object.entries(PARAM_OF)) {
    params.set(key, checkedValues(form, name).join(','));
  }
  history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
}

const NUMERAL_OF: Record<string, string> = Object.fromEntries(
  chapterIndex.map(ch => [ch.slug, ch.numeral])
);

/** One-line description of the active config, shown on the collapsed panel. */
function describeConfig(form: HTMLFormElement, cfg: PracticeConfig): string {
  const range = cfg.minChapter === cfg.maxChapter
    ? `cap. ${NUMERAL_OF[cfg.maxChapter]}`
    : `cap. ${NUMERAL_OF[cfg.minChapter]}–${NUMERAL_OF[cfg.maxChapter]}`;

  const parts = [range];
  if (cfg.pos.includes('noun')) {
    parts.push(`substantivos ${cfg.declensions.join('/')}ª`);
  }
  if (cfg.pos.includes('verb')) {
    const voices = cfg.voices.length === 2 ? 'ativa e passiva' : cfg.voices[0] === 'passive' ? 'passiva' : 'ativa';
    parts.push(`verbos ${cfg.conjugations.join('/')}ª (${voices})`);
  }
  const allCases = form.querySelectorAll('input[name="case"]:not(:disabled)').length;
  parts.push(cfg.cases.length === allCases ? 'todos os casos' : `${cfg.cases.length} casos`);
  return parts.join(' · ');
}

/** Re-derives which checkboxes are selectable from the current chapter range. */
function syncAvailability(form: HTMLFormElement): void {
  const maxChapter = (form.querySelector<HTMLSelectElement>('#cfg-max'))!.value;
  const minChapter = (form.querySelector<HTMLSelectElement>('#cfg-min'))!.value;
  const range = { maxChapter, minChapter };
  setDisabled(form, 'case', new Set(availableCases(range)));
  setDisabled(form, 'declension', new Set(availableDeclensions(range).map(String)));
  setDisabled(form, 'voice', new Set(availableVoices(range)));
  // Conjugações não têm capítulo próprio de desbloqueio (ver paradigm-generator.ts).
}

function isBlank(cell: ParadigmCell): boolean {
  return cell === null || cell === undefined;
}
function isInlineAnswer(cell: ParadigmCell): cell is { answer?: string; given?: false; text?: string } {
  return typeof cell === 'object' && cell !== null &&
    ((cell as any).given === false || (cell as any).answer !== undefined);
}
function canonical(s: string): string {
  return String(s || '').split('|')[0];
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function buildInput(): HTMLTableCellElement {
  const td = el('td', 'paradigm-cell');
  const input = el('input', 'blank blank-md paradigm-input');
  input.type = 'text';
  input.autocomplete = 'off';
  input.setAttribute('autocorrect', 'off');
  input.setAttribute('autocapitalize', 'off');
  input.spellcheck = false;
  td.appendChild(input);
  return td;
}

function buildTablesDom(tables: ParadigmTable[], opts: { reveal?: boolean; answers?: string[] } = {}): HTMLDivElement {
  const { reveal = false, answers = [] } = opts;
  let cursor = 0;
  const root = el('div', 'paradigm-tables' + (reveal ? ' paradigm-tables-reveal' : ''));

  for (const tbl of tables) {
    const figure = el('figure', 'paradigm-figure' + (reveal ? ' paradigm-answer' : ''));
    if (tbl.caption) {
      const cap = el('figcaption', 'paradigm-caption');
      const text = el('span', 'paradigm-caption-text');
      text.innerHTML = tbl.caption;
      cap.appendChild(text);
      figure.appendChild(cap);
    }
    const table = el('table', 'paradigm-grid');
    const thead = el('thead');
    const headRow = el('tr');
    const corner = el('th', 'paradigm-corner');
    corner.innerHTML = tbl.cornerLabel || '';
    headRow.appendChild(corner);
    for (const col of tbl.columns || []) {
      const th = el('th', 'paradigm-colhead');
      th.innerHTML = col;
      headRow.appendChild(th);
    }
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = el('tbody');
    for (const row of tbl.rows || []) {
      const tr = el('tr');
      const rowHead = el('th', 'paradigm-rowhead');
      rowHead.innerHTML = row.label || '';
      tr.appendChild(rowHead);
      for (const cell of row.cells || []) {
        if (isBlank(cell) || isInlineAnswer(cell)) {
          if (reveal) {
            const td = el('td', 'paradigm-cell paradigm-was-blank');
            const key = el('span', 'key');
            key.textContent = canonical(answers[cursor++]);
            td.appendChild(key);
            tr.appendChild(td);
          } else {
            cursor++;
            tr.appendChild(buildInput());
          }
          continue;
        }
        const text = typeof cell === 'object' ? ((cell as { text?: string } | null)?.text || '') : String(cell);
        const td = el('td', 'paradigm-cell paradigm-given');
        td.innerHTML = text;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    figure.appendChild(table);
    root.appendChild(figure);
  }
  return root;
}

let counter = 0;

function mountExercise(root: HTMLElement, tables: ParadigmTable[], answers: string[]): void {
  counter++;
  root.innerHTML = '';

  const article = el('article', 'exercise exercise-paradigm');
  article.id = `pratica-ex-${counter}`;
  article.setAttribute('data-answers', JSON.stringify(answers));
  article.setAttribute('data-phrase', '0');

  const head = el('div', 'exercise-head');
  const num = el('div', 'ex-num');
  num.textContent = `Exercitium ${counter}`;
  head.appendChild(num);
  article.appendChild(head);

  const body = el('div', 'exercise-body');
  const main = el('div', 'exercise-main');
  main.appendChild(buildTablesDom(tables));

  // Same two-step control layout as Exercise.astro: check first, reveal after.
  const controls = el('div', 'controls');
  const gradeBtn = el('button', 'grade-btn');
  gradeBtn.type = 'button';
  gradeBtn.title = 'Marcar certo e errado sem mostrar as respostas';
  gradeBtn.textContent = 'Corrige';
  const retryBtn = el('button', 'retry-btn');
  retryBtn.type = 'button';
  retryBtn.title = 'Apagar só as lacunas erradas e tentar de novo';
  retryBtn.textContent = 'Iterum tentā';
  retryBtn.hidden = true;
  const clearBtn = el('button', 'clear-btn');
  clearBtn.type = 'button';
  clearBtn.title = 'Limpar respostas deste exercício';
  clearBtn.textContent = 'Mundā';
  controls.appendChild(gradeBtn);
  controls.appendChild(retryBtn);
  controls.appendChild(clearBtn);
  main.appendChild(controls);

  const revealControls = el('div', 'controls controls-reveal');
  const revealBtn = el('button', 'reveal-btn');
  revealBtn.type = 'button';
  revealBtn.textContent = 'Aperī responsa';
  const revealNote = el('span', 'controls-reveal-note');
  revealNote.textContent = 'só depois de tentar';
  revealControls.appendChild(revealBtn);
  revealControls.appendChild(revealNote);
  main.appendChild(revealControls);

  const answerBox = el('div', 'answer');
  const answerHeader = el('span', 'answer-header');
  answerHeader.textContent = 'Responsa';
  answerBox.appendChild(answerHeader);
  answerBox.appendChild(buildTablesDom(tables, { reveal: true, answers }));
  main.appendChild(answerBox);

  body.appendChild(main);
  article.appendChild(body);
  root.appendChild(article);

  // reveal/clear/input wiring (incl. .reveal-btn and .clear-btn) comes from
  // wireExercise — do not also register listeners here (double-toggles .show).
  wireExercise(article);
}

function init(): void {
  const form = document.querySelector<HTMLFormElement>('#practice-config');
  const root = document.querySelector<HTMLElement>('#paradigm-practice-root');
  const generateBtn = document.querySelector<HTMLButtonElement>('#cfg-generate');
  const emptyMsg = document.querySelector<HTMLElement>('#cfg-empty-msg');
  if (!form || !root || !generateBtn) return;

  const summaryText = document.querySelector<HTMLElement>('#cfg-summary');
  const maxSelect = form.querySelector<HTMLSelectElement>('#cfg-max')!;
  const minSelect = form.querySelector<HTMLSelectElement>('#cfg-min')!;
  const noRepeatBox = form.querySelector<HTMLInputElement>('#cfg-no-repeat')!;
  maxSelect.addEventListener('change', () => syncAvailability(form));
  minSelect.addEventListener('change', () => syncAvailability(form));

  applyQuery(form, new URLSearchParams(location.search));

  let lastLemma: string | undefined;
  let usedLemmas: string[] = [];
  // Qualquer mudança na config muda o banco elegível — o histórico de
  // "já sorteados" perde sentido e deve recomeçar.
  form.addEventListener('change', (ev) => {
    if (ev.target === noRepeatBox) return;
    usedLemmas = [];
  });

  function generate(): void {
    const cfg = readConfig(form!);
    if (summaryText) summaryText.textContent = describeConfig(form!, cfg);
    writeQuery(form!, cfg);

    const exclude = noRepeatBox.checked ? usedLemmas : (lastLemma ? [lastLemma] : []);
    const result = generateParadigm(cfg, exclude);
    if (emptyMsg) emptyMsg.hidden = !!result;
    if (!result) {
      root!.innerHTML = '';
      return;
    }
    lastLemma = result.lemma;
    if (noRepeatBox.checked) {
      usedLemmas = result.cycleReset ? [result.lemma] : [...usedLemmas, result.lemma];
    } else {
      usedLemmas = [];
    }
    mountExercise(root!, result.tables, result.answers);
  }

  generateBtn.addEventListener('click', generate);
  // No cold start: the page opens with something to fill in.
  generate();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
