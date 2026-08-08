# Lingua Latīna — guia do projeto

Site Astro estático de exercícios interativos sobre *Lingua Latina per se Illustrata · Pars I* (Ørberg).
Deploy: GitHub Pages em `mzocateli.github.io/lingua-latina/` — daí `base: '/lingua-latina'`.

## Arquitetura

Duas camadas paralelas, unidas pelo **`slug` do capítulo** (numeral romano minúsculo: `ii`, `iii`, … `x`):

| Camada | Onde | Descoberta |
|---|---|---|
| Exercícios | `src/data/cap-{slug}.ts` — módulos TS tipados (`Chapter` de `src/lib/types.ts`) | **Manual** (registro em 2 arquivos) |
| Prosa, gramática, vocabulário | `src/content/{grammar,topics,vocabulary}/` — Astro Content Collections | **Automática** (`id.startsWith(slug + '/')`) |

Renderização: `src/pages/cap/[slug].astro` → `SectionBar` + `ChapterContent` + N × `Exercise` + `Pager`.
JS do cliente, um módulo por responsabilidade, sempre por `<script>` hoisted — nada inline nos componentes:
`exercise-runtime.ts` (wiring de DOM + contador de sessão) · `grader.ts` (correção) · `section-bar.ts` (barra sticky, auto-inicializado, importado por efeito colateral pelo runtime e direto por `/grammatica`) · `site-nav.ts` (Esc/clique-fora no menu) · `paradigm-practice.ts` (só `/pratica/`).

Leitura das content collections passa por `src/lib/content.ts` (`grammarOf`, `topicsOf`, `bareId`) — não chamar `getCollection` direto em componente novo, senão a ordenação diverge.

## Adicionar um capítulo

Obrigatório (esquecer o passo 3 quebra o build com `Capitulum não encontrado`):

1. `src/data/chapters.ts` — acrescentar `{ slug, numeral, title }` a `chapterIndex`.
2. `src/data/cap-{slug}.ts` — novo arquivo, `export default` de um `Chapter`.
3. `src/lib/chapters.ts` — acrescentar **o import e** a entrada no record `chapters`.

Opcional, auto-descoberto (nada a registrar):

- `src/content/grammar/{slug}/{NN}-{nome}.md` — ordenado por nome de arquivo, daí o prefixo `01-`, `02-`…
- `src/content/topics/{slug}/{id}.md` — ordenado por `order`; o `id` é o nome do arquivo sem `.md` e é exatamente o que `exercise.references[]` cita.
- `src/content/vocabulary/{slug}.yaml` — ausência é legítima (cap. IV e V não têm).

Nada mais é hardcoded na home: o subtítulo e os cartões derivam de `chapterIndex`, e o compêndio gramatical virou `src/pages/grammatica.astro`, gerado da collection `grammar`.

Ao terminar: `npm run validate && npm run check && npm run build`.

## Regras invioláveis

**Links.** Todo URL interno passa por `chapterHref`/`indexHref` de `src/lib/paths.ts`. Nunca `/cap/...` cru — o `base` `/lingua-latina` e `trailingSlash: 'always'` fazem qualquer link sem barra final dar 404. Âncoras (`#ex-1`, `#content-dativo`) são a única exceção.

**Imports.** Alias `~/*` em toda parte. Relativos só entre irmãos dentro de `src/components/`.

**Conteúdo é HTML.** Todo texto autoral (blurb, gloss, label, caption, tag, tip) é string HTML renderizada com `set:html`. Não há interpolação de texto puro para conteúdo latino.

**Macrons — a regra mais cara do projeto.** Vogais longas (ā ē ī ō ū ȳ) ficam acima da altura de caixa alta e colidem ou são cortadas:

- **Nunca `font-variant: small-caps` em texto que possa conter macron.** O glifo versalete sintetizado desloca o macron. Substituto: `font-style: italic` + `font-weight: 600` + `color: var(--burgundy)` + `letter-spacing: .02–.04em`.
  Small-caps segue válido em 13 rótulos de *chrome* comprovadamente sem macron: `.site-nav-list a`, `.site-nav-capitula summary`, `.chapter-card .label`, `.toc-title`, `.tip-label`, `.auxilia-title`, `.answer-header`, `.score`, `.exemplum::before`, `.frontis .epigraph cite`, `table.paradigm th`, `.content-topic-body th`, `.content-topic-body td:first-child`. `npm run validate` recusa qualquer seletor novo fora dessa lista.
- Headings que podem conter macron: `line-height` ≥ 1.2.
- `.ex-block` (linhas latinas empilhadas com `<br>`): `line-height: 1.7`.

**CSS.** 100% global, cinco folhas em ordem de cascata fixa importadas por `src/layouts/Layout.astro`: `theme` (tokens, fontes) → `layout` (nav, header, pager) → `components` (cards, TOC) → `exercise` → `content`. Não há um único `<style>` scoped em `src/` — não introduzir sem decisão explícita. Cores saem dos tokens de `theme.css`; os `rgba(155,28,28,…)` espalhados por `content.css`/`exercise.css` são legado e não devem ser propagados. Breakpoints em uso: 640px, 560px, 760px.

**Envelope dos dados.** `src/data/cap-*.ts` mantém exatamente:

```ts
import type { Chapter } from '~/lib/types';
const chapter: Chapter = { /* JSON estrito: chaves entre aspas, 2 espaços */ };
export default chapter;
```

Os scripts em `scripts/*.mjs` extraem esse corpo por regex e fazem `JSON.parse` — quebrar o formato quebra as ferramentas.

**Legado proibido em conteúdo novo:** `answers[]` posicional em `StandardExercise`, células `null` em paradigma, placeholders de tamanho nu (`{md}`), e o campo morto `index`. Tudo isso ainda existe em cap-ii…cap-viii e continua suportado por retrocompatibilidade.

## DSL de exercícios

Spec completa: `src/content/docs/README.md`. Implementação: `src/lib/parse-question.ts`.

| Sintaxe | Significado |
|---|---|
| `{ō}` | input, resposta `ō`, largura default |
| `{ō:md}` | tamanho explícito — `md`, `lg`, `xl`, `xxl` |
| `{eīs\|iīs}` | alternativas aceitas; a **primeira** é a canônica (mostrada no gabarito) |
| `{eīs\|iīs:lg}` | alternativas + tamanho |
| `{}` / `{:md}` | placeholder vazio — conta no denominador da nota mas nunca pontua. Evitar. |
| `… // dica` | sufixo renderizado como `<em>(dica)</em>` no fim da questão |

O placeholder pode ficar **no meio da palavra** — é assim que se monta drill de radical/desinência: `multī leō{nēs:md}`, `homō{nēs|hominēs:md}`.

Paradigmas (`kind: 'paradigm'`) usam `tables` em vez de `questions`. Tipos de célula: `string` = texto dado (âncora); `{ answer: "…" }` = input; `null` = legado.

`auxilia` (painel lateral) tem três tipos: `table` (`headers` + `rows: string[][]`), `list` (`items`), `words` (`words`, com `inline`).

Convenção de `number`: inteiro = exercício do livro; `"P1"`… = tabela de paradigma; `"A"/"B"/"C"` = drill original do site (marcar com `tip.qualifier: "drill original — não está no livro"`).

## Correção

`src/lib/parse-question.ts` (build) e `src/scripts/grader.ts` (browser) implementam o mesmo contrato — **mudar um exige mudar o outro**.

- Macrons **opcionais** (removidos dos dois lados), case-insensitive, pontuação removida, espaços colapsados.
- `|` separa alternativas.
- `phraseMode: true` → contenção de multiset: ordem livre e palavras extras toleradas; só falta de palavra reprova. Nesse modo `ab ≡ ā` e `ex ≡ ē`.

**Corrigir ≠ revelar.** `gradeExercise(article, { reveal })` tem duas faces e a distinção é pedagógica, não cosmética:

| | marca ✓/✗ | escreve a resposta | quem chama |
|---|---|---|---|
| `reveal: false` (default) | sim | **não** | botão `Corrige`, `Enter` na última lacuna |
| `reveal: true` | sim | sim | botão `Aperī responsa` |

Sem revelar, o aluno pode usar `Iterum tentā` (`retryWrong`) — apaga só as lacunas erradas e foca a primeira. Não introduzir nada que mostre a resposta no caminho `reveal: false`; é ele que sustenta a segunda tentativa.

Marcação de acerto **nunca depende só de cor**: `annotate()` insere um `<span class="mark">` com ✓/✗ ao lado da lacuna. O denominador da nota é `inputs.length` — placeholders vazios contam e nunca pontuam, como a DSL documenta.

Nada é persistido: sem `localStorage`. O contador de sessão vive em memória (`exercise-runtime.ts`) e a config da `/pratica/` vive na query string.

## Materiais-fonte

Cinco livros em `.material/pdf/` (gitignored — copyright). **Eles não são equivalentes.**

`A_Companion_to_Familia_Romana.pdf` é born-digital e tem **macrons íntegros**: é a autoridade de grafia e vocabulário. Os outros três com texto (Ørberg, Teacher's, Latine Disco) são OCR e têm **zero macrons** — `ālae` sai como `alae`, limpo e plausível. `Exercitia_latina.pdf` não tem camada de texto nenhuma.

> **Texto de OCR serve para localizar, nunca para verificar ortografia.** Conferir macron contra ele leva a "corrigir" dado certo para errado.

```bash
npm run materia                                  # extrai o cache + constrói o índice
node scripts/lexicon.mjs bestia                  # → bēstia (Cap. X), grafia confiável
node scripts/lexicon.mjs --check x               # pistas de progressão lexical
node scripts/page.mjs --find Lingva "<trecho>"   # localiza e renderiza a página em PNG
```

Protocolo completo na skill **`fontes`** (`.claude/skills/fontes/`). Renderizar página exige PyMuPDF (`python -m pip install pymupdf`) — esta máquina não tem `pdftoppm`, então o `Read` não abre PDF direto.

## Comandos

```bash
npm run dev        # http://localhost:4321/lingua-latina/
npm run validate   # convenções (registro, references, DSL, small-caps)
npm run check      # astro check — tipos
npm run build
npm run materia    # cache dos PDFs + índice léxico (ver acima)
```

O CI (`.github/workflows/deploy.yml`, `withastro/action@v3`) **não** roda `check` nem `validate` — rode local antes de commitar.
