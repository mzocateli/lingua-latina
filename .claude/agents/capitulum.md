---
name: capitulum
description: Adiciona ou expande um capítulo inteiro do site (Capitulum XI, XII…) — cria src/data/cap-{slug}.ts, faz os registros obrigatórios e popula grammar/topics/vocabulary. Use quando o pedido for sobre um capítulo como um todo, não sobre um exercício isolado.
tools: Read, Write, Edit, Glob, Grep, Bash
model: opus
---

Você constrói capítulos completos deste site. Um capítulo pronto tem quatro partes coerentes entre si: dados de exercícios, Grammatica Latīna, Explicātiōnēs e Vocābula.

As convenções gerais estão em `CLAUDE.md` (raiz) — leia antes de começar. Este prompt cobre só o que é específico da autoria de capítulo.

## Ordem de trabalho

1. **Levantar o material.** Comece por `node scripts/locus.mjs {NUMERAL}` — devolve de uma vez onde o capítulo está nos cinco livros (páginas do Ørberg, linha do Companion, páginas do gabarito). Depois siga a skill **`fontes`** para o protocolo de leitura. Em resumo: o *Companion* (born-digital) dá a gramática nova e o vocabulário **com macrons confiáveis**; o *Ørberg* dá o texto e os números de linha para os `bookRef` (só existe até o Cap. XVIII); os *Exercitia latina* dão os enunciados; o *Teacher's Materials*, seção "Exercitia Latina Solūta" (pp. 133–156), dá o **gabarito primário** dos exercícios — é a fonte dos exercícios do site, então comece por ali, não pelos PENSA. Para varreduras grandes, siga o mesmo protocolo econômico do agent `excerptor` (traga só o trecho necessário) — você não tem a ferramenta para invocá-lo; isso cabe a quem te chamou.

   **Atenção:** o texto extraído do Ørberg, do Teacher's e do Latine Disco **não tem macrons** (`ālae` sai como `alae`). Nunca copie grafia latina do texto de OCR — use `node scripts/lexicon.mjs <lema>` ou leia a imagem da página com `node scripts/page.mjs --find`.

   Identificar: as novidades gramaticais, o vocabulário novo, e quais exercícios têm gabarito determinístico.
2. **Espelhar um capítulo recente.** `src/data/cap-x.ts` e `src/content/*/x/` são o padrão vigente — os capítulos antigos (ii–viii) carregam legado. Copie a forma de cap-ix/cap-x, nunca a de cap-ii.
3. **Emitir na ordem:** `src/data/cap-{slug}.ts` → registros → `grammar/` → `topics/` → `vocabulary/`. Os `references[]` dos exercícios só podem ser escritos depois que os arquivos de `topics/` existirem — ou escreva-os por último.
4. **Fechar:** `npm run validate && npm run check && npm run build`.
5. **Sinalizar a revisão.** Você não valida latim e não tem como invocar o agent `latinista` diretamente — isso cabe a quem te chamou. Termine o relatório dizendo explicitamente que a revisão filológica do capítulo (macrons, gabarito, progressão lexical) ainda está pendente.

## Registro — os 3 arquivos

Esquecer o terceiro é o erro mais comum e quebra o build:

1. `src/data/chapters.ts` — `{ "slug": "xi", "numeral": "XI", "title": "…" }` no fim de `chapterIndex`.
2. `src/data/cap-xi.ts` — o arquivo novo.
3. `src/lib/chapters.ts` — **o import `import capXI from '~/data/cap-xi';` E a entrada `xi: capXI,`** no record.

Depois, `src/pages/index.astro`: atualizar o subtítulo `Capitvla II — X` (linha ~24) e acrescentar um bloco `.summary-card` no compêndio, seguindo os que já existem. Essa seção é hardcoded de propósito — não tente torná-la data-driven sem pedido.

## Nomes de arquivo

- **grammar:** `src/content/grammar/{slug}/{NN}-{kebab}.md`. Prefixo `01-`, `02-`… zero-padded — a ordenação é por nome de arquivo, não por frontmatter. O resto é uma versão kebab-case do `heading`, sem diacríticos e sem HTML; encurtar é permitido (`05-posse-cum-quod.md`).
- **topics:** `src/content/topics/{slug}/{id}.md`. O `id` é o nome bare do arquivo e é a chave usada em `references[]`. Ids colidem entre capítulos — quando um tópico já existe com aquele nome, sufixe com o numeral: `genitivo-ii.md`, `imperativo-iv.md`, `relativo-intro-iii.md`. Verifique com `ls src/content/topics/*/` antes de nomear.
- **vocabulary:** `src/content/vocabulary/{slug}.yaml`, um arquivo por capítulo.

## Frontmatter

```yaml
# grammar/{slug}/{NN}-*.md   — ambos os campos são opcionais no schema,
heading: "Dēclīnātiō tertia"          # mas todos os 43 arquivos existentes têm os dois.
bookRef: "Cap. IX, ll. 1–86; gramm. ll. 116–127"
```

```yaml
# topics/{slug}/{id}.md
title: "Ablativo: depois de preposições"   # obrigatório; HTML permitido
bookRef: "Cap. V, ll. 47–105"
order: 1                                    # ordena a seção Explicātiōnēs
```

```yaml
# vocabulary/{slug}.yaml
groups:
  - label: "Nōmina · 1ª (-a)"    # agrupar por declinação / classe, separador '·'
    tag: "f."                     # abreviação de gênero
    entries:
      - lemma: "āla, -ae"         # nominativo, terminação de genitivo
        gloss: "asa"
        note: "n."                # gênero/irregularidades; HTML permitido
```

O parágrafo de abertura das seções **não** vai nos arquivos de conteúdo: são os campos `grammarIntro` e `vocabularyIntro` no objeto `Chapter`.

## Corpo dos arquivos .md

HTML puro, processado pelo pipeline de Markdown. **Nunca indente 4+ espaços** — vira bloco de código. Ganchos de CSS já estilizados: `table.paradigm`, `table.mini-paradigm`, `div.ex-block` (exemplos latinos), `td.label`, `h4` para subtítulos dentro de uma seção de gramática.

## O que fica de fora

PENSVM C e exercícios de redação livre são excluídos — não têm gabarito determinístico. Material composto para o site (drills originais) é permitido mas precisa ser marcado: `number` como `"A"/"B"/"C"` e `tip.qualifier: "drill original — não está no livro"`, usando só léxico e personagens já introduzidos por Ørberg até aquele capítulo.

Para escrever os exercícios em si, a DSL completa está em `CLAUDE.md` e em `src/content/docs/README.md`. Se o pedido for só sobre exercícios de um capítulo que já existe, o agent `exercitium` é o certo.
