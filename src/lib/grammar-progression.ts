/**
 * Mapa de progressão gramatical do livro: em que capítulo (slug) cada caso,
 * declinação ou voz verbal é introduzida pela primeira vez. Fonte: a ordem
 * dos tópicos em src/content/grammar/{slug}/. Constantes explícitas (não um
 * parser do diretório) para não acoplar esta feature à estrutura de arquivos
 * do content collection.
 */

import { chapterIndex } from '~/data/chapters';

export type CaseName = 'nom' | 'gen' | 'dat' | 'acc' | 'abl' | 'voc';
/** 1ª–4ª: as declinações ensinadas nos capítulos II–XII (a 5ª não entrou ainda). */
export type Declension = 1 | 2 | 3 | 4;
export type Conjugation = 1 | 2 | 3 | 4;
export type Voice = 'active' | 'passive';

const CHAPTER_ORDER = chapterIndex.map(c => c.slug);

export function chapterRank(slug: string): number {
  const i = CHAPTER_ORDER.indexOf(slug);
  return i === -1 ? Infinity : i;
}

export function isAtOrBefore(introducedAt: string, maxChapter: string): boolean {
  return chapterRank(introducedAt) <= chapterRank(maxChapter);
}

export const caseUnlockedAt: Record<CaseName, string> = {
  gen: 'ii',
  nom: 'iii',
  acc: 'iii',
  voc: 'iv',
  abl: 'v',
  dat: 'vii',
};

export const declensionUnlockedAt: Record<Declension, string> = {
  1: 'ii',
  2: 'ii',
  3: 'ix',
  4: 'xii',
};

export const voiceUnlockedAt: Record<Voice, string> = {
  active: 'ii',
  passive: 'vi',
};

export function isCaseUnlocked(c: CaseName, maxChapter: string): boolean {
  return isAtOrBefore(caseUnlockedAt[c], maxChapter);
}

export function isDeclensionUnlocked(d: Declension, maxChapter: string): boolean {
  return isAtOrBefore(declensionUnlockedAt[d], maxChapter);
}

export function isVoiceUnlocked(v: Voice, maxChapter: string): boolean {
  return isAtOrBefore(voiceUnlockedAt[v], maxChapter);
}

/**
 * Um item (caso, declinação, voz…) é considerado "já dominado" — e por isso
 * excluído do sorteio de lacunas — quando foi introduzido antes do capítulo
 * mínimo assumido pelo usuário.
 */
export function isBelowFloor(introducedAt: string, minChapter: string): boolean {
  return chapterRank(introducedAt) < chapterRank(minChapter);
}
