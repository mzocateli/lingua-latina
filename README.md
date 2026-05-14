# Lingua Latīna — Quaestiōnēs Selectae



\---



## Conteúdo atual

|Capitulum|Tópico|Exercícios|
|-|-|-|
|V|Acusativo, ablativo, imperativo|4|
|VI|Movimento, locativo, voz passiva|4|
|VII|Dativo, demonstrativo, relativo|4|
|VIII|Genitivo, preço, *quī/is*|7|

\---

## Estrutura

```
.
├── index.html              # Página inicial: cartões de capítulos + compêndio
├── cap-v.html              # Páginas dos capítulos (estrutura idêntica,
├── cap-vi.html             # mudam apenas o slug e o arquivo de dados)
├── cap-vii.html
├── cap-viii.html
├── assets/
│   ├── css/
│   │   ├── theme.css       # Variáveis, fontes, cores, textura de pergaminho
│   │   ├── layout.css      # Nav, cabeçalho, pager, footer
│   │   ├── exercise.css    # Componente de exercício (dica, inputs, auxilia)
│   │   └── components.css  # Cartões de capítulo, TOC, summary cards
│   └── js/
│       ├── nav.js          # Renderiza menu superior e pager prev/next
│       ├── grader.js       # Normalização e correção de inputs
│       ├── auxilia.js      # Renderiza painel lateral a partir de dados
│       └── exercise.js     # Renderiza exercício completo e monta capítulo
├── data/
│   ├── chapters.js         # Índice de capítulos (slug, numeral, título)
│   ├── cap-v.js            # Dados do Capítulo V
│   ├── cap-vi.js           # …
│   ├── cap-vii.js
│   └── cap-viii.js
├── scripts/
│   ├── build\_data.py       # Gera os data/cap-\*.js do quiz monolítico antigo
│   └── build\_pages.py      # Gera cap-\*.html a partir de um template comum
└── .nojekyll               # Desabilita Jekyll no GitHub Pages
```

### Componentes / serviços reutilizáveis (todos em `window.LL`)

* **`renderSiteNav(activeSlug)` / `mountSiteNav(activeSlug)`** — barra de navegação superior com cartões de capítulos. `activeSlug` destaca o capítulo corrente.
* **`renderPager(activeSlug)` / `mountPager(activeSlug)`** — botões prev/next entre capítulos, no fim de cada página.
* **`renderAuxilia(groups)`** — painel lateral a partir de uma lista de grupos (`{type:'table' | 'list' | 'words', …}`).
* **`renderExercise(data)`** — exercício completo (cabeçalho, dica, lacunas, controles, gabarito, auxilia).
* **`mountChapter(slug)`** — monta todos os exercícios de um capítulo no `\[data-exercises]`.
* **`mountChapterHeader(slug)`** / **`mountChapterTOC(slug)`** — populam título e sumário a partir dos dados.
* **`gradeExercise(article)`** / **`clearExercise(article)`** — correção e limpeza de um exercício.
* **`isCorrect(user, expected, opts)`** / **`normalize(s)`** / **`stripMacrons(s)`** — utilidades de comparação tolerantes a macrons, maiúsculas e pontuação.

### Forma dos dados de um exercício

```js
{
  number: 1,                               // número no livro
  title:  "Exercitium 1",                  // título exibido
  tag:    "terminações nominais e verbais",
  tip: {
    text:      "Pergunte sempre…",         // HTML permitido (<em>, <strong>)
    qualifier: null                        // ou "o mais importante deste capítulo"
  },
  exemplum: null,                          // opcional, HTML
  questions: \[                             // {} marca lacuna; {md}/{lg}/{xl}/{xxl} para campos maiores
    "Serv{} abest; dominus serv{} vocat.",
    …
  ],
  answers: \["us", "um", …],                // ordem segue as {} das questions
  phraseMode: false,                       // true permite matching mais frouxo (frases)
  auxilia: \[                               // lista de grupos no painel lateral
    {
      label: "terminationes",
      type:  "table",
      headers: \["", "sg.", "pl."],
      rows: \[\["m. nōm.", "-us", "-ī"], …]
    },
    {
      label: "verbum",
      type:  "list",
      items: \["sg. <i>-t</i> · pl. <i>-nt</i>", …]
    },
    {
      label: "vocābula",
      type:  "words",
      inline: true,                        // exibe inline (chips), senão como lista
      words: \["<i>ambulat</i>", …],
      gloss: "(opcional, texto pequeno abaixo)"
    }
  ]
}
```

Respostas com alternativas equivalentes usam `|`: `"eīs|iīs"` aceita ambas.

\---

## Crédito

Exercícios baseados em *Lingua Latina per se Illustrata · Pars I: Familia Romana* (Hans H. Ørberg, Domus Latina / Focus Publishing). Esta página é um recurso de estudo pessoal, não substitui o livro nem é endossado pelo editor.

