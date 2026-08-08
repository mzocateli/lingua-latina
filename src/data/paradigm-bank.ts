/**
 * Banco curado de lemas com paradigma completo, usado pelo motor de prática
 * dinâmica (src/lib/paradigm-generator.ts). Cada forma foi verificada contra
 * A_Companion_to_Familia_Romana.pdf (via `node scripts/lexicon.mjs <lema>`)
 * ou contra tabelas de paradigma já revisadas no próprio site (cap-vi.ts,
 * cap-vii.ts, src/content/grammar/ix,x/*.md) — nunca contra os PDFs OCR.
 *
 * `chapterIntroduced` usa o slug do livro tal como aparece em
 * src/data/chapters.ts ('ii'…'xii'). Lemas do Companion introduzidos antes do
 * Cap. II (ex. oppidum, Cap. I) são grafados como 'ii' aqui — o site não
 * cobre o Cap. I, então esse vocabulário já está disponível desde o início.
 */

import type { CaseName, Declension, Conjugation } from '~/lib/grammar-progression';

export type Gender = 'm' | 'f' | 'n';

interface CaseForms {
  sg: string;
  pl: string;
}

export interface NounEntry {
  pos: 'noun';
  lemma: string;
  declension: Declension;
  gender: Gender;
  chapterIntroduced: string;
  forms: Record<CaseName, CaseForms>;
}

interface PersonForms {
  /** [1ª, 2ª, 3ª pessoa] */
  sg: [string, string, string];
  pl: [string, string, string];
}

export interface VerbEntry {
  pos: 'verb';
  lemma: string;
  conjugation: Conjugation;
  /** Verbo com paradigma irregular (ex. ferre) — o gerador troca a legenda
   *  "Nª conj." por "verbo irregular" para não sugerir que segue o padrão. */
  irregular?: boolean;
  chapterIntroduced: string;
  forms: {
    active: PersonForms;
    passive: PersonForms;
  };
}

export type ParadigmBankEntry = NounEntry | VerbEntry;

export const paradigmBank: ParadigmBankEntry[] = [
  // --- 1ª declinação (f.) ---
  {
    pos: 'noun', lemma: 'puella', declension: 1, gender: 'f', chapterIntroduced: 'ii',
    forms: {
      nom: { sg: 'puella', pl: 'puellae' },
      gen: { sg: 'puellae', pl: 'puellārum' },
      dat: { sg: 'puellae', pl: 'puellīs' },
      acc: { sg: 'puellam', pl: 'puellās' },
      abl: { sg: 'puellā', pl: 'puellīs' },
      voc: { sg: 'puella', pl: 'puellae' },
    },
  },
  {
    pos: 'noun', lemma: 'ancilla', declension: 1, gender: 'f', chapterIntroduced: 'ii',
    forms: {
      nom: { sg: 'ancilla', pl: 'ancillae' },
      gen: { sg: 'ancillae', pl: 'ancillārum' },
      dat: { sg: 'ancillae', pl: 'ancillīs' },
      acc: { sg: 'ancillam', pl: 'ancillās' },
      abl: { sg: 'ancillā', pl: 'ancillīs' },
      voc: { sg: 'ancilla', pl: 'ancillae' },
    },
  },
  {
    pos: 'noun', lemma: 'via', declension: 1, gender: 'f', chapterIntroduced: 'vi',
    forms: {
      nom: { sg: 'via', pl: 'viae' },
      gen: { sg: 'viae', pl: 'viārum' },
      dat: { sg: 'viae', pl: 'viīs' },
      acc: { sg: 'viam', pl: 'viās' },
      abl: { sg: 'viā', pl: 'viīs' },
      voc: { sg: 'via', pl: 'viae' },
    },
  },

  // --- 2ª declinação (m./n.) ---
  {
    pos: 'noun', lemma: 'servus', declension: 2, gender: 'm', chapterIntroduced: 'ii',
    forms: {
      nom: { sg: 'servus', pl: 'servī' },
      gen: { sg: 'servī', pl: 'servōrum' },
      dat: { sg: 'servō', pl: 'servīs' },
      acc: { sg: 'servum', pl: 'servōs' },
      abl: { sg: 'servō', pl: 'servīs' },
      voc: { sg: 'serve', pl: 'servī' },
    },
  },
  {
    pos: 'noun', lemma: 'dominus', declension: 2, gender: 'm', chapterIntroduced: 'ii',
    forms: {
      nom: { sg: 'dominus', pl: 'dominī' },
      gen: { sg: 'dominī', pl: 'dominōrum' },
      dat: { sg: 'dominō', pl: 'dominīs' },
      acc: { sg: 'dominum', pl: 'dominōs' },
      abl: { sg: 'dominō', pl: 'dominīs' },
      voc: { sg: 'domine', pl: 'dominī' },
    },
  },
  {
    pos: 'noun', lemma: 'vir', declension: 2, gender: 'm', chapterIntroduced: 'ii',
    forms: {
      nom: { sg: 'vir', pl: 'virī' },
      gen: { sg: 'virī', pl: 'virōrum' },
      dat: { sg: 'virō', pl: 'virīs' },
      acc: { sg: 'virum', pl: 'virōs' },
      abl: { sg: 'virō', pl: 'virīs' },
      voc: { sg: 'vir', pl: 'virī' },
    },
  },
  {
    pos: 'noun', lemma: 'oppidum', declension: 2, gender: 'n', chapterIntroduced: 'ii',
    forms: {
      nom: { sg: 'oppidum', pl: 'oppida' },
      gen: { sg: 'oppidī', pl: 'oppidōrum' },
      dat: { sg: 'oppidō', pl: 'oppidīs' },
      acc: { sg: 'oppidum', pl: 'oppida' },
      abl: { sg: 'oppidō', pl: 'oppidīs' },
      voc: { sg: 'oppidum', pl: 'oppida' },
    },
  },

  // --- 3ª declinação (m./f./n.) ---
  {
    pos: 'noun', lemma: 'pāstor', declension: 3, gender: 'm', chapterIntroduced: 'ix',
    forms: {
      nom: { sg: 'pāstor', pl: 'pāstōrēs' },
      gen: { sg: 'pāstōris', pl: 'pāstōrum' },
      dat: { sg: 'pāstōrī', pl: 'pāstōribus' },
      acc: { sg: 'pāstōrem', pl: 'pāstōrēs' },
      abl: { sg: 'pāstōre', pl: 'pāstōribus' },
      voc: { sg: 'pāstor', pl: 'pāstōrēs' },
    },
  },
  {
    pos: 'noun', lemma: 'ovis', declension: 3, gender: 'f', chapterIntroduced: 'ix',
    forms: {
      nom: { sg: 'ovis', pl: 'ovēs' },
      gen: { sg: 'ovis', pl: 'ovium' },
      dat: { sg: 'ovī', pl: 'ovibus' },
      acc: { sg: 'ovem', pl: 'ovēs' },
      abl: { sg: 'ove', pl: 'ovibus' },
      voc: { sg: 'ovis', pl: 'ovēs' },
    },
  },
  {
    pos: 'noun', lemma: 'homō', declension: 3, gender: 'm', chapterIntroduced: 'x',
    forms: {
      nom: { sg: 'homō', pl: 'hominēs' },
      gen: { sg: 'hominis', pl: 'hominum' },
      dat: { sg: 'hominī', pl: 'hominibus' },
      acc: { sg: 'hominem', pl: 'hominēs' },
      abl: { sg: 'homine', pl: 'hominibus' },
      voc: { sg: 'homō', pl: 'hominēs' },
    },
  },
  {
    pos: 'noun', lemma: 'flūmen', declension: 3, gender: 'n', chapterIntroduced: 'x',
    forms: {
      nom: { sg: 'flūmen', pl: 'flūmina' },
      gen: { sg: 'flūminis', pl: 'flūminum' },
      dat: { sg: 'flūminī', pl: 'flūminibus' },
      acc: { sg: 'flūmen', pl: 'flūmina' },
      abl: { sg: 'flūmine', pl: 'flūminibus' },
      voc: { sg: 'flūmen', pl: 'flūmina' },
    },
  },
  {
    pos: 'noun', lemma: 'mare', declension: 3, gender: 'n', chapterIntroduced: 'x',
    forms: {
      nom: { sg: 'mare', pl: 'maria' },
      gen: { sg: 'maris', pl: 'marium' },
      dat: { sg: 'marī', pl: 'maribus' },
      acc: { sg: 'mare', pl: 'maria' },
      abl: { sg: 'marī', pl: 'maribus' },
      voc: { sg: 'mare', pl: 'maria' },
    },
  },

  // --- 4ª declinação (m./f.) ---
  // Formas conferidas em src/content/grammar/xii/02-declinatio-quarta.md.
  {
    pos: 'noun', lemma: 'manus', declension: 4, gender: 'f', chapterIntroduced: 'xii',
    forms: {
      nom: { sg: 'manus', pl: 'manūs' },
      gen: { sg: 'manūs', pl: 'manuum' },
      dat: { sg: 'manuī', pl: 'manibus' },
      acc: { sg: 'manum', pl: 'manūs' },
      abl: { sg: 'manū', pl: 'manibus' },
      voc: { sg: 'manus', pl: 'manūs' },
    },
  },
  {
    pos: 'noun', lemma: 'exercitus', declension: 4, gender: 'm', chapterIntroduced: 'xii',
    forms: {
      nom: { sg: 'exercitus', pl: 'exercitūs' },
      gen: { sg: 'exercitūs', pl: 'exercituum' },
      dat: { sg: 'exercituī', pl: 'exercitibus' },
      acc: { sg: 'exercitum', pl: 'exercitūs' },
      abl: { sg: 'exercitū', pl: 'exercitibus' },
      voc: { sg: 'exercitus', pl: 'exercitūs' },
    },
  },

  // --- verbos, presente do indicativo (ativo/passivo) ---
  // 3ª pessoa verificada em cap-vi.ts (Tabula P2); 1ª/2ª pessoa e plural
  // seguem as desinências regulares de cada conjugação sobre o mesmo radical.
  {
    pos: 'verb', lemma: 'vocāre', conjugation: 1, chapterIntroduced: 'iii',
    forms: {
      active: { sg: ['vocō', 'vocās', 'vocat'], pl: ['vocāmus', 'vocātis', 'vocant'] },
      passive: { sg: ['vocor', 'vocāris', 'vocātur'], pl: ['vocāmur', 'vocāminī', 'vocantur'] },
    },
  },
  {
    pos: 'verb', lemma: 'vidēre', conjugation: 2, chapterIntroduced: 'iii',
    forms: {
      active: { sg: ['videō', 'vidēs', 'videt'], pl: ['vidēmus', 'vidētis', 'vident'] },
      passive: { sg: ['videor', 'vidēris', 'vidētur'], pl: ['vidēmur', 'vidēminī', 'videntur'] },
    },
  },
  {
    pos: 'verb', lemma: 'pōnere', conjugation: 3, chapterIntroduced: 'iv',
    forms: {
      active: { sg: ['pōnō', 'pōnis', 'pōnit'], pl: ['pōnimus', 'pōnitis', 'pōnunt'] },
      passive: { sg: ['pōnor', 'pōneris', 'pōnitur'], pl: ['pōnimur', 'pōniminī', 'pōnuntur'] },
    },
  },
  {
    pos: 'verb', lemma: 'audīre', conjugation: 4, chapterIntroduced: 'iii',
    forms: {
      active: { sg: ['audiō', 'audīs', 'audit'], pl: ['audīmus', 'audītis', 'audiunt'] },
      passive: { sg: ['audior', 'audīris', 'audītur'], pl: ['audīmur', 'audīminī', 'audiuntur'] },
    },
  },

  // --- verbo irregular ---
  // 3ª pessoa (fert/ferunt/fertur/feruntur) e o imperativo fer!/ferte! estão
  // em src/content/grammar/xii/05-ferre-et-imperativi.md; 1ª/2ª pessoa seguem
  // o mesmo radical consonantal fer- sem vogal de ligação (gramática padrão).
  {
    pos: 'verb', lemma: 'ferre', conjugation: 3, irregular: true, chapterIntroduced: 'xii',
    forms: {
      active: { sg: ['ferō', 'fers', 'fert'], pl: ['ferimus', 'fertis', 'ferunt'] },
      passive: { sg: ['feror', 'ferris', 'fertur'], pl: ['ferimur', 'feriminī', 'feruntur'] },
    },
  },
];
