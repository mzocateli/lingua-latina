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

  const controls = el('div', 'controls');
  const revealBtn = el('button', 'reveal-btn');
  revealBtn.type = 'button';
  revealBtn.textContent = 'Aperī responsa';
  const clearBtn = el('button', 'clear-btn');
  clearBtn.type = 'button';
  clearBtn.title = 'Limpar respostas deste exercício';
  clearBtn.textContent = 'Mundā';
  controls.appendChild(revealBtn);
  controls.appendChild(clearBtn);
  main.appendChild(controls);

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

  const maxSelect = form.querySelector<HTMLSelectElement>('#cfg-max')!;
  const minSelect = form.querySelector<HTMLSelectElement>('#cfg-min')!;
  const noRepeatBox = form.querySelector<HTMLInputElement>('#cfg-no-repeat')!;
  maxSelect.addEventListener('change', () => syncAvailability(form));
  minSelect.addEventListener('change', () => syncAvailability(form));
  syncAvailability(form);

  let lastLemma: string | undefined;
  let usedLemmas: string[] = [];
  // Qualquer mudança na config muda o banco elegível — o histórico de
  // "já sorteados" perde sentido e deve recomeçar.
  form.addEventListener('change', (ev) => {
    if (ev.target === noRepeatBox) return;
    usedLemmas = [];
  });

  generateBtn.addEventListener('click', () => {
    const cfg = readConfig(form);
    const exclude = noRepeatBox.checked ? usedLemmas : (lastLemma ? [lastLemma] : []);
    const result = generateParadigm(cfg, exclude);
    if (emptyMsg) emptyMsg.hidden = !!result;
    if (!result) {
      root.innerHTML = '';
      return;
    }
    lastLemma = result.lemma;
    if (noRepeatBox.checked) {
      usedLemmas = result.cycleReset ? [result.lemma] : [...usedLemmas, result.lemma];
    } else {
      usedLemmas = [];
    }
    mountExercise(root, result.tables, result.answers);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
