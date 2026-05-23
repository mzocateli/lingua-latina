# Conteúdo do site

Este diretório usa [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/).
Os schemas estão em [`config.ts`](./config.ts) e são validados em build (Zod) — frontmatter inválido faz `npm run build` falhar imediatamente.

## Estrutura

```
src/content/
├── config.ts                          # schemas Zod
├── topics/{slug}/{id}.md              # Explicātiōnēs — body = HTML
├── grammar/{slug}/{NN}-{name}.md      # Grammatica — body = HTML
└── vocabulary/{slug}.yaml             # Vocābula — dados estruturados
```

Onde `{slug}` é o slug do capítulo (`ii`, `iii`, …, `viii`).

---

## `topics/{slug}/{id}.md`

Pequenas explicações em prosa de conceitos gramaticais, mostradas na seção *Explicātiōnēs* do capítulo. Cada exercício pode referenciar uma ou mais via `exercise.references: ['id']` no arquivo `src/data/cap-*.ts` — o `id` casa com o nome do arquivo (sem `.md`).

**Frontmatter:**
```yaml
title: "Dativo: o caso do destinatário"    # obrigatório (HTML permitido)
bookRef: "Cap. VII, ll. 95–120"            # opcional
order: 0                                    # opcional (ordem de exibição)
```

**Body:** HTML inline. Astro processa como Markdown mas o HTML passa through. Não usar indentação ≥ 4 espaços (o parser interpreta como bloco de código).

---

## `grammar/{slug}/{NN}-{name}.md`

Seções da *Grammatica Latīna* (paradigmas, explicação formal). Ordenadas por nome de arquivo — use prefixo `01-`, `02-`, etc.

**Frontmatter:**
```yaml
heading: "Datīvus"                          # opcional (HTML permitido)
bookRef: "Cap. VII, ll. 95–120"            # opcional
```

**Body:** mesmo formato que `topics`.

O *intro* da seção (parágrafo de abertura antes das subseções) NÃO fica aqui — é o campo `grammarIntro` no `src/data/cap-*.ts`.

---

## `vocabulary/{slug}.yaml`

*Vocābula nova* — listas estruturadas de lema/glosa, sem prosa.

**Schema:**
```yaml
groups:
  - label: "Nōmina · 1ª (-a)"               # cabeçalho do grupo (HTML permitido)
    tag: "f."                               # opcional (mini-rótulo)
    entries:
      - lemma: "lacrima, -ae"
        gloss: "lágrima"
        note: "f."                          # opcional
      - lemma: "ōstium, -ī"
        gloss: "porta"
```

O *intro* do vocabulário é `vocabularyIntro` no `src/data/cap-*.ts`.

---

## DSL de exercícios (`src/data/cap-*.ts`)

### Placeholders em `questions`

Cada lacuna do exercício carrega sua resposta inline:

| Sintaxe | Significado |
|---|---|
| `{ō}` | input default, resposta `ō` |
| `{ō:md}` | input tamanho `md` (`md`, `lg`, `xl`, `xxl`) |
| `{eīs\|iīs}` | alternativas separadas por `\|` |
| `{eīs\|iīs:lg}` | alternativas + tamanho |
| `{}` | placeholder vazio (sem resposta — desencorajado) |

### Hint inline

Dicas curtas após a sentença ficam após ` // `:

```ts
"Iūlia est {puella:md} Rōmāna. // menina"
```

O renderer transforma em `<em>(menina)</em>` ao final da questão. Para ênfase real (não dica), use `<em>` HTML diretamente no texto — o parser só interpreta `//` no nível superior da string.

### Exercícios paradigm (`kind: 'paradigm'`)

Em vez de `questions`/`answers`, usa tabelas:

```ts
{
  kind: 'paradigm',
  tables: [{
    caption: "servus, -ī (m.)",
    columns: ["sg.", "pl."],
    rows: [
      { label: "nōm.", cells: ["servus", { answer: "servī" }] },
      { label: "acus.", cells: [{ answer: "servum" }, { answer: "servōs" }] }
    ]
  }]
}
```

Tipos de célula:
- **string** — texto ancorado (dado, não preenchido)
- **`{ answer: "..." }`** — input com resposta inline
- **`null`** — legado (input com resposta vindo de `answers[]` posicional) — não usar em novos exercícios

### Auxilia (painel lateral)

Três tipos, definidos em [`src/lib/types.ts`](../lib/types.ts):

```ts
// 1. Tabela
{ label: "datīvus", type: 'table', headers: ["", "sg.", "pl."],
  rows: [["m/n", "-ō", "-īs"], ["f", "-ae", "-īs"]] }

// 2. Lista
{ label: "pronomes", type: 'list',
  items: ["<b>sē</b> = reflexivo", "<b>eum</b> = outro"] }

// 3. Palavras (compacta)
{ label: "verba", type: 'words', inline: true,
  words: ["<i>amāre</i>", "<i>vidēre</i>"] }
```

`label` aceita HTML. `inline: true` em `words` mostra a lista horizontal.
