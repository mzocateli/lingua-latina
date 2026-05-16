# Lingua Latīna — Quaestiōnēs Selectae

## Conteúdo atual

| Capitulum | Tópico                                              | Exercícios |
|-----------|-----------------------------------------------------|------------|
| III       | Nominativo/acusativo; pronomes <i>mē/tē</i>; relativo | 9          |
| IV        | Numerais I–X; vocativo; imperativo; <i>suus / eius</i> | 9          |
| V         | Acusativo, ablativo, imperativo                     | 11         |
| VI        | Movimento, locativo, voz passiva                    | 10         |
| VII       | Dativo, demonstrativo, relativo                     | 11 (8 do livro + 3 drills originais) |
| VIII      | Genitivo, preço, *quī/is*                           | 11         |

Todos os *Exercitia* não-dissertativos dos capítulos III–VIII do livro estão presentes, com respostas verificadas contra o gabarito oficial (*Teacher's Materials*). Os PENSVM C e exercícios de redação livre foram excluídos por não terem gabarito determinístico.

Cap. VII inclui três *drills* extras (A, B, C) compostos especialmente para o site, marcados como `drill original — não está no livro`. Usam o mesmo léxico e personagens de Ørberg mas com sentenças próprias.

---

## Estrutura

```
.
├── index.html               # Cartões de capítulos + compêndio
├── cap-v.html               # Páginas dos capítulos (template comum,
├── cap-vi.html              # muda apenas o slug e o arquivo de dados)
├── cap-vii.html
├── cap-viii.html
├── assets/
│   ├── css/
│   │   ├── theme.css        # Variáveis, fontes, textura de pergaminho
│   │   ├── layout.css       # Nav, header, pager, footer
│   │   ├── exercise.css     # Componente de exercício
│   │   ├── components.css   # Cartões, TOC, summary cards
│   │   └── content.css      # Explicātiōnēs e botão "Vide explicātiōnem"
│   └── js/
│       ├── nav.js           # Menu superior + pager prev/next
│       ├── grader.js        # Normalização e correção
│       ├── auxilia.js       # Painel lateral
│       ├── exercise.js      # Renderiza exercício e monta capítulo
│       └── content.js       # Explicātiōnēs + botão de referência
├── data/
│   ├── chapters.js          # Índice de capítulos
│   ├── cap-v.js             # Dados do Capítulo V (exercícios + content)
│   ├── cap-vi.js
│   ├── cap-vii.js
│   └── cap-viii.js
└── .nojekyll                # Desabilita Jekyll no GitHub Pages
```

### Componentes/serviços (todos em `window.LL`)

- **`renderSiteNav(activeSlug)` / `mountSiteNav(activeSlug)`** — barra superior com capítulo ativo destacado.
- **`renderPager(activeSlug)` / `mountPager(activeSlug)`** — botões prev/next no fim de cada página.
- **`mountChapter(slug)`** / **`mountChapterHeader(slug)`** / **`mountChapterTOC(slug)`** — montagem do capítulo.
- **`mountChapterContent(slug)`** — seção *Explicātiōnēs* (tópicos colapsáveis).
- **`renderReferenceButton(refs, chapter)`** — botão *Vide explicātiōnem* num exercício.
- **`renderExercise(data, chapter)`** — exercício completo.
- **`renderAuxilia(groups)`** — painel lateral.
- **`gradeExercise(article)`** / **`ungradeExercise(article)`** / **`clearExercise(article)`** — correção, des-correção, limpar.
- **`isCorrect(user, expected, opts)`** / **`normalize(s)`** / **`stripMacrons(s)`** — utilidades.

### Forma dos dados de um exercício

```js
{
  number: 1,                               // número (ou "A"/"B"/… para drills)
  title:  "Exercitium 1",
  tag:    "terminações nominais e verbais",
  tip: {
    text:      "Pergunte sempre…",         // HTML permitido
    qualifier: null                        // ou "o mais importante deste capítulo"
  },
  exemplum: null,                          // opcional, HTML
  questions: [                             // {} marca lacuna; {md}/{lg}/{xl}/{xxl} para campos maiores
    "Serv{} abest; dominus serv{} vocat.",
    …
  ],
  answers: ["us", "um", …],                // ordem segue as {} das questions
  phraseMode: false,                       // true: matching tolera ordem livre e ab≡ā
  auxilia: [ … ],                          // grupos do painel lateral
  references: ['acusativo']                // ids de tópicos da seção Explicātiōnēs
}
```

Alternativas equivalentes usam `|`: `"eīs|iīs"` aceita ambas.

### Forma do conteúdo/explicações

```js
chapter.content = {
  topics: [
    {
      id:      'acusativo',
      title:   'Acusativo: o caso do objeto direto',
      bookRef: 'Cap. V, ll. 1–46',         // citação ao livro Familia Romana
      body:    `<p>HTML completo da explicação…</p>`
    },
    …
  ]
}
```

As explicações estão em pt-BR. Citações ao livro usam o formato `Cap. X, ll. M–N` (versūs dentro do capítulo) ou `Cap. X, gramm. ll. M–N` (seção *Grammatica Latīna*). O texto da explicação é original.

---

## Detalhes da correção

- **Macrons opcionais**: `servō` ≡ `servo`.
- **Maiúsculas/pontuação**: ignoradas.
- **Frases (phraseMode)**: a ordem das palavras é livre e `ab ≡ ā` (mesma preposição em ambientes diferentes). Usado nos exercícios de transformação (Cap. VI Ex. 8; Cap. VIII Ex. 3).
- **Enter**: salta para a próxima lacuna; o último Enter corrige.
- **Aperī responsa**: corrige; **Occulta responsa**: remove a correção sem apagar o input; **Mundā**: limpa tudo.

---

## Crédito

Exercícios baseados em *Lingua Latina per se Illustrata · Pars I: Familia Romana* (Hans H. Ørberg). Recurso de estudo pessoal; não substitui o livro. As explicações da seção *Explicātiōnēs* são originais — não reproduzem o conteúdo do livro, apenas remetem a ele por capítulo e versūs.
