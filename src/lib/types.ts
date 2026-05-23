/**
 * Domain types for Lingua Latina chapter data.
 * Kept intentionally permissive — many fields are optional because the
 * legacy data files use varying shapes per chapter.
 */

export interface ChapterIndexEntry {
  slug: string;
  numeral: string;
  title: string;
}

export interface Chapter {
  slug: string;
  numeral: string;
  title: string;
  blurb?: string;
  exercises: Exercise[];
  content?: ChapterContent;
}

export interface ChapterContent {
  grammar?: Grammar;
  vocabulary?: Vocabulary;
  topics?: Topic[];
}

export interface Grammar {
  intro?: string;
  sections: GrammarSection[];
}

export interface GrammarSection {
  heading?: string;
  bookRef?: string;
  body?: string;
}

export interface Vocabulary {
  intro?: string;
  groups: VocabGroup[];
}

export interface VocabGroup {
  label: string;
  tag?: string;
  entries: VocabEntry[];
}

export interface VocabEntry {
  lemma: string;
  gloss: string;
  note?: string;
}

export interface Topic {
  id: string;
  title: string;
  bookRef?: string;
  body: string;
}

export type Exercise = StandardExercise | ParadigmExercise;

interface ExerciseBase {
  index?: number;
  number: number | string;
  title?: string;
  tag?: string;
  tip?: ExerciseTip | null;
  exemplum?: string | null;
  phraseMode?: boolean;
  auxilia?: AuxiliaGroup[];
  references?: string[];
}

export interface ExerciseTip {
  text: string;
  qualifier?: string | null;
}

export interface StandardExercise extends ExerciseBase {
  kind?: undefined;
  /** Question templates with inline-answer placeholders: `{ō}`, `{ō:md}`, `{eīs|iīs}`.
   *  See [parse-question.ts](../lib/parse-question.ts) for the grammar. */
  questions: string[];
  /** Legacy positional answer array. Removed by the inline-answer migration
   *  (PR 2). Field retained for type compatibility only. */
  answers?: string[];
}

export interface ParadigmExercise extends ExerciseBase {
  kind: 'paradigm';
  tables: ParadigmTable[];
  /** Answers for `null` cells (in reading order). Inline `{answer:…}` cells
   *  carry their own answer and are not listed here. */
  answers?: string[];
}

export interface ParadigmTable {
  caption?: string;
  note?: string;
  cornerLabel?: string;
  columns?: string[];
  rows: ParadigmRow[];
}

export interface ParadigmRow {
  label?: string;
  cells: ParadigmCell[];
}

export type ParadigmCell =
  | null                              // blank, answer comes from answers[]
  | string                            // given (anchor) text
  | { answer?: string; given?: false; text?: string };

export type AuxiliaGroup =
  | AuxiliaTable
  | AuxiliaList
  | AuxiliaWords;

export interface AuxiliaTable {
  label: string;
  type: 'table';
  headers?: string[];
  rows: string[][];
  gloss?: string;
}

export interface AuxiliaList {
  label: string;
  type: 'list';
  items: string[];
  gloss?: string;
}

export interface AuxiliaWords {
  label: string;
  type: 'words';
  words: string[];
  inline?: boolean;
  gloss?: string;
}

export function isParadigm(ex: Exercise): ex is ParadigmExercise {
  return (ex as ParadigmExercise).kind === 'paradigm';
}
