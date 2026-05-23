# Lingua Latīna — Quaestiōnēs Selectae

Exercícios interativos baseados em *Lingua Latina per se Illustrata · Pars I: Familia Romana* (Hans H. Ørberg).

## Conteúdo atual

| Capitulum | Tópico                                              | Exercícios |
|-----------|-----------------------------------------------------|------------|
| II        | Gênero (m/f/n); genitivo; interrogativos            | 10         |
| III       | Nominativo/acusativo; pronomes <i>mē/tē</i>; relativo | 9          |
| IV        | Numerais I–X; vocativo; imperativo; <i>suus / eius</i> | 9          |
| V         | Acusativo, ablativo, imperativo                     | 11         |
| VI        | Movimento, locativo, voz passiva                    | 13         |
| VII       | Dativo, demonstrativo, relativo                     | 15 (12 do livro + 3 drills originais) |
| VIII      | Genitivo, preço, *quī/is*                           | 11         |

Todos os *Exercitia* não-dissertativos dos capítulos II–VIII estão presentes, com respostas verificadas contra o gabarito oficial (*Teacher's Materials*). Os PENSVM C e exercícios de redação livre foram excluídos por não terem gabarito determinístico.

Cada capítulo tem três seções:
1. **Grammatica Latīna** — apresentação formal sistemática, espelhando a seção GRAMMATICA LATINA do final de cada capítulo no livro de Ørberg.
2. **Explicātiōnēs** — tópicos colapsáveis com explicações curtas e ponteiros para as linhas do livro.
3. **Exercitia** — exercícios interativos com correção tolerante (macrons opcionais, alternativas com `|`, modo *phrase* para ordem livre).

Cap. VII inclui três *drills* extras (A, B, C) compostos especialmente para o site, marcados com `qualifier: "drill original — não está no livro"`. Usam o mesmo léxico e personagens de Ørberg mas com sentenças próprias.

---

## Desenvolvimento

```bash
npm install
npm run dev        # → http://localhost:4321/lingua-latina/
npm run build      # → dist/
npm run preview    # serve dist/ localmente
```

Deploy é automático via `.github/workflows/deploy.yml` em todo push para `main`.

---

## Estrutura

```
.
├── src/
│   ├── pages/
│   │   ├── index.astro             # Cartões de capítulos + compêndio
│   │   └── cap/[slug].astro        # Rota dinâmica → 7 páginas em build
│   ├── layouts/
│   │   └── Layout.astro            # <head> + <SiteNav>
│   ├── components/
│   │   ├── SiteNav.astro           # Barra superior
│   │   ├── Pager.astro             # Prev/next no fim do capítulo
│   │   ├── SectionBar.astro        # Sticky jump-bar com âncoras
│   │   ├── ChapterTOC.astro        # Lista de exercícios no topo
│   │   ├── ChapterContent.astro    # Grammar + Vocab + Topics
│   │   ├── Exercise.astro          # Um exercício (questions ou paradigm)
│   │   ├── ParadigmTables.astro    # Tabelas para kind:'paradigm'
│   │   ├── ExerciseTip.astro       # Bloco "Auxilium"
│   │   ├── Auxilia.astro           # Painel lateral
│   │   └── ReferenceButton.astro   # Botão "Vide explicātionem"
│   ├── scripts/
│   │   ├── grader.ts               # Correção (browser)
│   │   └── exercise-runtime.ts     # Wiring de inputs + reveal/clear
│   ├── lib/
│   │   ├── types.ts                # Chapter, Exercise, AuxiliaGroup, …
│   │   ├── chapters.ts             # Importa todos os src/data/cap-*.ts
│   │   ├── parse-question.ts       # DSL dos placeholders inline
│   │   └── paths.ts                # chapterHref/indexHref (base path)
│   ├── data/
│   │   ├── chapters.ts             # Índice de capítulos
│   │   └── cap-{slug}.ts           # Slug, numeral, title, exercises[]
│   ├── content/                    # Astro Content Collections
│   │   ├── config.ts               # Schemas Zod
│   │   ├── README.md               # → DOCUMENTAÇÃO de schemas e DSL
│   │   ├── topics/{slug}/{id}.md   # Explicātiōnēs (body = HTML)
│   │   ├── grammar/{slug}/*.md     # Grammatica (ordem por filename)
│   │   └── vocabulary/{slug}.yaml  # Vocābula (estruturado)
│   ├── styles/                     # CSS (importado por Layout)
│   └── pages/cap/[slug].astro
├── scripts/                        # Migrações one-shot (Node)
│   ├── migrate-data-to-ts.mjs
│   ├── migrate-inline-answers.mjs
│   ├── migrate-hints.mjs
│   └── extract-content-to-collections.mjs
├── astro.config.mjs                # base: '/lingua-latina'
├── tsconfig.json
└── .github/workflows/deploy.yml    # GitHub Pages via withastro/action
```

### Como funciona

- **Tudo é estático**: `npm run build` gera `dist/` com 8 HTMLs (1 index + 7 capítulos). Cada `<input>`, `<details>`, e `data-answers` é renderizado em build pelo Astro — o cliente recebe ~5KB de JS só para grading.
- **Adicionar exercício**: edite `src/data/cap-{slug}.ts`. Apenas isso.
- **Adicionar capítulo**: registre em `src/data/chapters.ts`, importe em `src/lib/chapters.ts`, e crie `src/data/cap-{slug}.ts`. Opcionalmente popule `src/content/{topics,grammar,vocabulary}/{slug}/`.

### Schemas e DSL

Toda a sintaxe (placeholders inline `{ō:md}`, hints `// menina`, schemas Zod das collections, tipos de `auxilia`) está documentada em **[src/content/README.md](src/content/README.md)**.

Mini-cheatsheet:

```ts
// src/data/cap-vii.ts (resumido)
{
  number: 1,
  title: "Exercitium 1",
  tag: "léxico do capítulo VII",
  tip: { text: "Vocabulário central…", qualifier: null },
  questions: [
    "Aemilia in peristȳlō Iūlium {exspectat:md}. // espera",
    "Iūlia rosam ante nāsum {tenet:md}. // segura",
  ],
  // sem `answers` — vem dos placeholders inline
  phraseMode: false,
  auxilia: [
    { label: "verba", type: "words", words: ["<i>exspectāre</i>", "<i>tenēre</i>"] }
  ],
  references: ["dativo"]   // → src/content/topics/vii/dativo.md
}
```

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
