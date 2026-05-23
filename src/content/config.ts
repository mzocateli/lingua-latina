import { defineCollection, z } from 'astro:content';

/**
 * `topics` — Explicātiōnēs: short prose explanations of grammar concepts.
 * Path: `src/content/topics/{slug}/{id}.md`
 * Each file's body is HTML (passed through Markdown processor unchanged).
 * The `id` (filename without .md) is what `exercise.references[]` points to.
 */
const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bookRef: z.string().optional(),
    order: z.number().optional(),
  }),
});

/**
 * `grammar` — Grammatica Latīna: formal grammar sections.
 * Path: `src/content/grammar/{slug}/{NN}-{name}.md`
 * Sort key is the filename (so `01-…` comes first). Body is HTML.
 */
const grammar = defineCollection({
  type: 'content',
  schema: z.object({
    heading: z.string().optional(),
    bookRef: z.string().optional(),
  }),
});

/**
 * `vocabulary` — Vocābula nova: structured lemma/gloss data, no prose.
 * Path: `src/content/vocabulary/{slug}.yaml`
 */
const vocabulary = defineCollection({
  type: 'data',
  schema: z.object({
    intro: z.string().optional(),
    groups: z.array(
      z.object({
        label: z.string(),
        tag: z.string().optional(),
        entries: z.array(
          z.object({
            lemma: z.string(),
            gloss: z.string(),
            note: z.string().optional(),
          })
        ),
      })
    ),
  }),
});

export const collections = { topics, grammar, vocabulary };
