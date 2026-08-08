/**
 * Build-time path helpers. Astro injects `import.meta.env.BASE_URL` based on
 * the `base` config (here: '/lingua-latina'). All public URLs go through here.
 */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function chapterHref(slug: string): string {
  return `${BASE}/cap/${slug}/`;
}

export function indexHref(): string {
  return `${BASE}/`;
}

export function practiceHref(params?: Record<string, string>): string {
  const qs = params ? new URLSearchParams(params).toString() : '';
  return `${BASE}/pratica/${qs ? `?${qs}` : ''}`;
}

export function grammarHref(): string {
  return `${BASE}/grammatica/`;
}
