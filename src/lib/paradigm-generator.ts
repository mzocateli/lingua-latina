/**
 * Motor puro (sem DOM) de geração de tabelas de paradigma configuráveis.
 * Consome o banco curado (src/data/paradigm-bank.ts) e devolve exatamente o
 * formato ParadigmTable[] de src/lib/types.ts — o mesmo que ParadigmTables.astro
 * e grader.ts já sabem renderizar/corrigir, então nada muda nesses dois.
 */

import type { ParadigmTable, ParadigmRow } from './types';
import { resolveParadigmAnswers } from './parse-question';
import {
  isAtOrBefore, isBelowFloor,
  caseUnlockedAt, declensionUnlockedAt, voiceUnlockedAt,
  type CaseName, type Declension, type Conjugation, type Voice,
} from './grammar-progression';
import { paradigmBank, type ParadigmBankEntry, type NounEntry, type VerbEntry } from '~/data/paradigm-bank';

const CASE_LABELS: Record<CaseName, string> = {
  nom: 'nōminātīvus', gen: 'genetīvus', dat: 'datīvus',
  acc: 'accūsātīvus', abl: 'ablātīvus', voc: 'vocātīvus',
};

const PERSON_LABELS = ['1ª sg.', '2ª sg.', '3ª sg.', '1ª pl.', '2ª pl.', '3ª pl.'];

export interface PracticeConfig {
  maxChapter: string;
  minChapter: string;
  pos: Array<'noun' | 'verb'>;
  declensions: Declension[];
  conjugations: Conjugation[];
  cases: CaseName[];
  voices: Voice[];
}

export interface GeneratedParadigm {
  tables: ParadigmTable[];
  answers: string[];
  lemma: string;
  /** true quando `exclude` esgotou o banco elegível e precisou ser ignorado —
   *  o chamador deve reiniciar seu histórico de "já sorteados" a partir daqui. */
  cycleReset?: boolean;
}

/** Casos disponíveis no intervalo [minChapter, maxChapter] configurado. */
export function availableCases(cfg: Pick<PracticeConfig, 'maxChapter' | 'minChapter'>): CaseName[] {
  return (Object.keys(caseUnlockedAt) as CaseName[]).filter(c =>
    isAtOrBefore(caseUnlockedAt[c], cfg.maxChapter) && !isBelowFloor(caseUnlockedAt[c], cfg.minChapter)
  );
}

export function availableDeclensions(cfg: Pick<PracticeConfig, 'maxChapter' | 'minChapter'>): Declension[] {
  return (Object.keys(declensionUnlockedAt).map(Number) as Declension[]).filter(d =>
    isAtOrBefore(declensionUnlockedAt[d], cfg.maxChapter) && !isBelowFloor(declensionUnlockedAt[d], cfg.minChapter)
  );
}

export function availableVoices(cfg: Pick<PracticeConfig, 'maxChapter' | 'minChapter'>): Voice[] {
  return (Object.keys(voiceUnlockedAt) as Voice[]).filter(v =>
    isAtOrBefore(voiceUnlockedAt[v], cfg.maxChapter) && !isBelowFloor(voiceUnlockedAt[v], cfg.minChapter)
  );
}

/** Conjugações não têm capítulo de desbloqueio próprio (o presente ativo já
 *  está liberado desde o início); ficam disponíveis assim que o verbo em si
 *  foi introduzido — filtradas junto com o lema no sorteio. */
export function availableConjugations(): Conjugation[] {
  return [1, 2, 3, 4];
}

function eligibleEntries(cfg: PracticeConfig): ParadigmBankEntry[] {
  return paradigmBank.filter(e => {
    if (!isAtOrBefore(e.chapterIntroduced, cfg.maxChapter)) return false;
    if (e.pos === 'noun') {
      if (!cfg.pos.includes('noun')) return false;
      return cfg.declensions.includes(e.declension);
    }
    if (!cfg.pos.includes('verb')) return false;
    return cfg.conjugations.includes(e.conjugation);
  });
}

function buildNounTable(entry: NounEntry, cases: CaseName[]): ParadigmTable {
  const rows: ParadigmRow[] = cases.map((c, i) => ({
    label: CASE_LABELS[c],
    cells: i === 0
      ? [entry.forms[c].sg, { answer: entry.forms[c].pl, given: false }]
      : [{ answer: entry.forms[c].sg, given: false }, { answer: entry.forms[c].pl, given: false }],
  }));
  return {
    caption: `${entry.lemma} <span class="paradigm-gender">(${entry.gender}., ${entry.declension}ª decl.)</span>`,
    cornerLabel: 'cāsus',
    columns: ['singulāris', 'plūrālis'],
    rows,
  };
}

function buildVerbTable(entry: VerbEntry, voices: Voice[]): ParadigmTable {
  const cols = voices.map(v => (v === 'active' ? 'āctīvum' : 'passīvum'));
  const flat = (v: Voice) => [...entry.forms[v].sg, ...entry.forms[v].pl];
  const rows: ParadigmRow[] = PERSON_LABELS.map((label, i) => ({
    label,
    cells: voices.map((v, vi) =>
      (i === 0 && vi === 0)
        ? flat(v)[i]
        : { answer: flat(v)[i], given: false }
    ),
  }));
  const classLabel = entry.irregular ? 'verbo irregular' : `${entry.conjugation}ª conj.`;
  return {
    caption: `${entry.lemma} <span class="paradigm-gender">[${classLabel}]</span>`,
    cornerLabel: 'pessoa',
    columns: cols,
    rows,
  };
}

/**
 * Gera uma tabela de paradigma para um lema sorteado dentre os elegíveis.
 * Retorna null quando a configuração não deixa nenhum lema/caso/voz disponível
 * (a UI deve impedir isso, mas a engine também se protege).
 *
 * `exclude`, quando informado, remove esses lemas do sorteio — usado tanto
 * para o "não repetir o imediatamente anterior" (um item) quanto para o modo
 * "evitar repetição" (o histórico inteiro já sorteado). Se excluir tudo,
 * a exclusão é ignorada e `cycleReset` volta `true` para o chamador saber que
 * o ciclo recomeçou.
 */
export function generateParadigm(cfg: PracticeConfig, exclude: string[] = []): GeneratedParadigm | null {
  const cases = cfg.cases.length ? cfg.cases : availableCases(cfg);
  const voices = cfg.voices.length ? cfg.voices : availableVoices(cfg);
  // Como cases/voices acima: seleção vazia = "sem restrição", não "nada elegível".
  const effectiveCfg: PracticeConfig = {
    ...cfg,
    declensions: cfg.declensions.length ? cfg.declensions : availableDeclensions(cfg),
    conjugations: cfg.conjugations.length ? cfg.conjugations : availableConjugations(),
  };
  const pool = eligibleEntries(effectiveCfg);
  if (!pool.length) return null;

  const excludeSet = new Set(exclude);
  let candidates = excludeSet.size ? pool.filter(e => !excludeSet.has(e.lemma)) : pool;
  let cycleReset = false;
  if (!candidates.length) {
    cycleReset = true;
    const last = exclude[exclude.length - 1];
    candidates = last && pool.length > 1 ? pool.filter(e => e.lemma !== last) : pool;
  }
  const entry = candidates[Math.floor(Math.random() * candidates.length)];
  let table: ParadigmTable;
  if (entry.pos === 'noun') {
    if (!cases.length) return null;
    table = buildNounTable(entry, cases);
  } else {
    if (!voices.length) return null;
    table = buildVerbTable(entry, voices);
  }
  const tables = [table];
  return { tables, answers: resolveParadigmAnswers(tables, []), lemma: entry.lemma, cycleReset };
}
