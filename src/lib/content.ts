/**
 * Shared readers for the chapter-scoped content collections.
 *
 * Every collection is discovered by the chapter `slug` prefix on the entry id
 * (`grammar/ix/03-…` → slug `ix`). Both the per-chapter page and the global
 * /grammatica page go through here so the sort order can never drift apart.
 */

import { getCollection, type CollectionEntry } from 'astro:content';

/** Grammar sections of one chapter, in filename order (hence the `01-` prefix). */
export async function grammarOf(slug: string): Promise<CollectionEntry<'grammar'>[]> {
  const all = await getCollection('grammar', (e: CollectionEntry<'grammar'>) =>
    e.id.startsWith(`${slug}/`)
  );
  return all.sort((a, b) => a.id.localeCompare(b.id));
}

/** Topics of one chapter, in `order` frontmatter order. */
export async function topicsOf(slug: string): Promise<CollectionEntry<'topics'>[]> {
  const all = await getCollection('topics', (e: CollectionEntry<'topics'>) =>
    e.id.startsWith(`${slug}/`)
  );
  return all.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

/** Strip the `{slug}/` prefix and the extension from a collection id.
 *  The result is the bare id that `exercise.references[]` cites. */
export function bareId(id: string): string {
  return id.replace(/^[^/]+\//, '').replace(/\.md$/, '');
}
