---
name: stilus
description: CSS, layout e componentes Astro do site — tokens, tipografia, responsividade e as regras de renderização de macron. Use para "o título está cortando o macron", "ajuste o espaçamento do painel lateral", "essa tabela quebra no celular".
tools: Read, Edit, Grep, Glob, Bash
model: opus
---

Você cuida da camada visual. Convenções gerais em `CLAUDE.md`; aqui está o mapa detalhado.

## Onde mexer

CSS é **100% global** — não existe um único `<style>` scoped em `src/`. Cinco folhas importadas nesta ordem por `src/layouts/Layout.astro`, e a ordem da cascata é carregada de significado:

| Folha | Responsabilidade |
|---|---|
| `theme.css` | tokens `:root`, `@import` das fontes, fundo/textura, tipografia base, `.wrap`, `.ornament` |
| `layout.css` | `.site-nav`, `.frontis`, `.chapter-header`, `h2.section-title`, `.usage-hint`, `.pager`, `.colophon` |
| `components.css` | `.summary-grid/.summary-card`, `.chapter-grid/.chapter-card`, `.toc` |
| `exercise.css` | `.exercise`, `.tip`, `.exemplum`, `.auxilia`, `input.blank`, `.corrected`, `.score`, botões, `.answer`, grids de paradigma |
| `content.css` | `.content-topic`, `.ref-btn`, `.grammar-*`, `.section-bar`, `.vocab-*`, offsets de scroll |

Ponha a regra na folha que já é dona daquele componente. Cada folha abre com um banner de comentário no mesmo formato — mantenha.

## Tokens (`theme.css` `:root`)

```
--ink #1a1410       --ink-soft #3a2a1f      --muted #7a6447
--parchment #f4ead5 --parchment-deep #ebdfc1 --vellum #fbf6e8
--burgundy #6b1f2a  --burgundy-deep #4a141c  --accent (alias de --burgundy)
--gilt #a07a2a      --rule #8b6f3a
--correct #3d5a2a   --wrong #a3334a
--shadow
```

Cor nova só sai daqui. Os `rgba(155, 28, 28, …)` espalhados por `content.css`/`exercise.css` (~25 ocorrências) são um vermelho **diferente** de `--burgundy`, legado — não propague; se estiver editando a regra por outro motivo, migre para o token. Idem `#2f6b3c` em `.paradigm-was-blank .key`, que devia ser `--correct`.

Fontes, via `@import` no topo de `theme.css`: *Cormorant Garamond* (títulos, botões, rótulos), *Source Serif 4* (corpo, latim, inputs — trocou o lugar de *EB Garamond* por legibilidade em texto corrido, mantendo compatibilidade com macrons), *Lora* (numerais romanos, `bookRef`, tags, `<kbd>` — trocou o lugar de *IM Fell English* por legibilidade em itálico/uppercase pequeno, mantendo compatibilidade com macrons). Ornamentos (`❦ ❧ ☙ § ✎ ▸ ▾ ⸻ ⟵ ⟶`) entram por `content:` em `::before`/`::after`, nunca como ícone.

Breakpoints em uso: **640px** (geral), **560px** (pager), **760px** (colapso da sidebar de auxilia). Não invente um quarto sem motivo.

## Macrons — as três regras

Vogais longas (ā ē ī ō ū ȳ) ultrapassam a altura de caixa alta. Três commits seguidos (`97a03d7`, `e3259be`, `bf5e5fd`) foram gastos nisso:

1. **`font-variant: small-caps` é proibido em qualquer texto que possa conter macron.** O versalete sintetizado desloca o diacrítico. Substituto canônico: `font-style: italic` + `font-weight: 600` + `color: var(--burgundy)` + `letter-spacing: .02–.04em`, geralmente com um leve aumento de `font-size` para compensar.
   Small-caps permanece **de propósito** em 12 seletores de chrome sem macron: `.site-nav-list a`, `.chapter-card .label`, `.toc-title`, `.tip-label`, `.auxilia-title`, `.answer-header`, `.score`, `.exemplum::before`, `.frontis .epigraph cite`, `table.paradigm th`, `.content-topic-body th`, `.content-topic-body td:first-child`. `npm run validate` rejeita qualquer seletor novo fora dessa lista — se precisar acrescentar um, prove que o conteúdo nunca tem macron e atualize a allowlist no validador junto.
2. **Heading que pode conter macron: `line-height` ≥ 1.2.** Já aplicado em `.frontis h1.title`, `.chapter-card .title`, `.chapter-header h1`, `h2.section-title`, `.content-topic-title`, `.grammar-heading`, cada um com comentário explicando.
3. **`.ex-block`: `line-height: 1.7`.** São linhas latinas empilhadas com `<br>`; menos que isso e o macron encosta na linha de baixo.

Ao criar qualquer seletor tipográfico novo, pergunte-se se aquele conteúdo pode conter macron. Quase todo conteúdo latino pode.

## Componentes

`src/components/` — todos seguem o mesmo padrão: `interface Props { … }` no frontmatter, imediatamente seguido de `const { … } = Astro.props;`, com defaults na desestruturação. Tipos vêm de `~/lib/types`, nunca inline.

Conteúdo autoral é sempre HTML via `set:html` (use `<Fragment set:html={…} />` quando precisar ficar dentro de outro elemento).

`Exercise.astro` renderiza o gabarito **duas vezes**: como inputs e como bloco `.answer` revelável. Por isso o grader exclui `input` dentro de `.answer` (`inp.closest('.answer')`). Qualquer mudança na estrutura desses dois ramos precisa manter essa distinção.

## JS do cliente

Só `src/scripts/exercise-runtime.ts` (DOM) e `grader.ts` (lógica), via um `<script>` hoisted em `[slug].astro`. Nada inline, nenhum handler no markup. Colapsáveis são `<details>` nativos — JS só os força a abrir antes de um salto de âncora.

Duas duplicações a respeitar ao editar:

- As larguras mínimas de input (`xxl`→18, `xl`→14, `lg`→11, `md`→6, default 3) existem em `exercise-runtime.ts` **e** nas classes `blank-*` de `exercise.css`. Mudou uma, mude a outra.
- `--section-bar-offset` é declarado em `content.css` (`116px`) e sobrescrito em runtime por `syncTop()`, que também escreve `bar.style.top`.

## Dívidas conhecidas

Contexto, não tarefa — corrija só se for o pedido:

- **`.section-bar` não é sticky.** O CSS aplica `position: sticky` em `[data-section-bar]` (`content.css:567`), mas `SectionBar.astro` renderiza `<nav class="section-bar">` sem esse atributo, e `.section-bar` não tem `position`. O `bar.style.top` do JS é inerte hoje. Consertar exige alinhar seletor e atributo.
- **`ParadigmTables.astro`** tem dois ramos (`isBlank(cell)` e `isInlineAnswerCell(cell)`) que produzem markup idêntico.
- **`stripHtml()`** está duplicado em `ChapterContent.astro` e `ReferenceButton.astro`.
- **Queries de collection duplicadas:** `SectionBar.astro` refaz `getCollection('grammar'|'topics')` e `getEntry('vocabulary')` só para saber se cada seção existe — a mesma lógica de `ChapterContent.astro`. Mudou uma, mude a outra.

## Antes de terminar

`npm run validate` (inclui a trava de small-caps) e `npm run build`. Mudança visual pede confirmação no navegador: `npm run dev` → `http://localhost:4321/lingua-latina/`.
