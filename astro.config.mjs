import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mzocateli.github.io',
  base: '/lingua-latina',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
