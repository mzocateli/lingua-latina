# Lingua Latīna — Quaestiōnēs Selectae

Exercícios interativos com gabarito baseados em **Lingua Latina per se Illustrata · Familia Romana** (Hans H. Ørberg). Cada capítulo tem sua própria página com:

- lacunas editáveis e correção tolerante (macrons opcionais, `ā ≡ ab`, etc.);
- painel lateral (*auxilia*) com paradigmas e vocabulário;
- seção **Explicātiōnēs** com explicações curtas e referências ao livro;
- botão *Vide explicātiōnem* em cada exercício, que abre o tópico correspondente.

Site estático puro — HTML, CSS, JS, sem build step. Pronto para GitHub Pages.

🔗 [https://mzocateli.github.io/lingua-latina/](https://mzocateli.github.io/lingua-latina/)

---

## Conteúdo atual

| Capitulum | Tópico                                   | Exercícios |
|-----------|------------------------------------------|------------|
| V         | Acusativo, ablativo, imperativo          | 11 (todos do livro) |
| VI        | Movimento, locativo, voz passiva         | 10 (todos os não-dissertativos) |
| VII       | Dativo, demonstrativo, relativo          | 11 (8 do livro + 3 drills originais) |
| VIII      | Genitivo, preço, *quī/is*                | 11 (todos os não-dissertativos) |

Todos os *Exercitia* não-dissertativos dos capítulos V–VIII do livro estão presentes, com respostas verificadas contra o gabarito oficial (*Teacher's Materials*). Os PENSVM C e exercícios de redação livre (Cap. VI Ex. 2 e 11; Cap. VII Ex. 2, 5, 10; Cap. VIII Ex. 2, 7, 11, 15) foram excluídos por não terem gabarito determinístico.

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

## Adicionando um capítulo

1. Crie `data/cap-ix.js` no formato acima.
2. Adicione `{slug:'ix', numeral:'IX', title:'…'}` em `data/chapters.js`.
3. Crie `cap-ix.html` (69 linhas, idêntico aos outros mudando 2 strings).
4. Atualize a contagem em `index.html`.

---

## Publicação no GitHub Pages

1. Commit & push para `main`.
2. **Settings → Pages → Source**: `Deploy from branch` → `main` → `/ (root)`.
3. O site sobe em `https://mzocateli.github.io/lingua-latina/` em poucos minutos.

---

## Crédito

Exercícios baseados em *Lingua Latina per se Illustrata · Pars I: Familia Romana* (Hans H. Ørberg). Recurso de estudo pessoal; não substitui o livro. As explicações da seção *Explicātiōnēs* são originais — não reproduzem o conteúdo do livro, apenas remetem a ele por capítulo e versūs.
