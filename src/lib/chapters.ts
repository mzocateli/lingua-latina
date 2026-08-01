import type { Chapter } from './types';
import { chapterIndex } from '~/data/chapters';

import capII from '~/data/cap-ii';
import capIII from '~/data/cap-iii';
import capIV from '~/data/cap-iv';
import capV from '~/data/cap-v';
import capVI from '~/data/cap-vi';
import capVII from '~/data/cap-vii';
import capVIII from '~/data/cap-viii';
import capIX from '~/data/cap-ix';
import capX from '~/data/cap-x';
import capXI from '~/data/cap-xi';

const chapters: Record<string, Chapter> = {
  ii: capII,
  iii: capIII,
  iv: capIV,
  v: capV,
  vi: capVI,
  vii: capVII,
  viii: capVIII,
  ix: capIX,
  x: capX,
  xi: capXI,
};

export { chapterIndex };
export { chapters };

export function getChapter(slug: string): Chapter | undefined {
  return chapters[slug];
}
