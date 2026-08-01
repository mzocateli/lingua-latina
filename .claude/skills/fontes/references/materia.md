# Os cinco livros — caminhos, qualidade e navegação

Todos em `.material/pdf/`. O diretório `.material` inteiro é gitignored: são livros sob copyright, e o texto/imagem derivado (`txt/`, `index/`, `pages/`) também nunca entra no repo.

| Arquivo | pp. | Camada de texto | Macrons no texto extraído |
|---|---|---|---|
| `A_Companion_to_Familia_Romana.pdf` | 432 | born-digital | **íntegros** |
| `Teachers_Materials.pdf` | 181 | OCR | zero |
| `Lingva_latina_per_se_Illustrata_1-146.pdf` | 147 | OCR | zero |
| `Latine_disco.pdf` | 54 | OCR | zero |
| `Exercitia_latina.pdf` | — | **nenhuma** (148 chars no livro todo) | — |

Cache gerado por `npm run materia` em `.material/txt/`:
- `{livro}.txt` — texto (`pdftotext -enc UTF-8`; sem o `-enc` até o Companion perde diacrítico)
- `{livro}.pages.json` — `pageStarts[i]` = primeira linha da página `i+1`

---

## A. Companion (Neumann) — a fonte confiável

Estrutura por capítulo, com títulos **idênticos** aos de `src/data/chapters.ts`:

```
X.  Bēstiae et Hominēs        ← cabeçalho
Rēs Grammaticae Novae         ← esta linha marca o INÍCIO real do capítulo
1. Verbs a. Infinitive Active …   ← sumário da gramática nova
The Story
Lēctiō Prīma (Section I)
…
Vocābula Disposita/Ōrdināta   ← vocabulário, no fim do capítulo
```

O cabeçalho sozinho se repete no topo de cada página (running header) — só o par **cabeçalho + `Rēs Grammaticae Novae`** delimita o começo do capítulo. É assim que `lexicon.mjs` segmenta.

Categorias do bloco de vocabulário, nesta ordem: `Nōmina` (subdividido `1st`/`2nd`/`3rd`), `Verba` (subdividido `‑ā (1)`, `‑ē (2)`, `Consonant/ĭ (3)`, `‑ī (4)`, `Irregular`), `Adiectīva`, `Prōnōmina`, `Adverbia`, `Praepositiōnēs`, `Coniūnctiōnēs`.

Formato dos lemas: `herba, ‑ae` · `leō, leōnis` · `arbor, arboris ( f.)` · `bālat, ‑ant`. O hífen é **U+2011** (não-separável), diferente do hífen comum usado no `vocabulary/*.yaml` do site — normalize ao comparar.

O Companion cita linhas no mesmo formato dos `bookRef` do site: `(l.15)`, `(ll.8–9)`, `(Cap. V, l.47)`. Serve para preencher `bookRef` sem abrir o Ørberg.

Pareamento lema↔glosa: nos **Verba** vem em pares de duas linhas (confiável); nos **Nōmina** os lemas vêm num bloco e as glosas noutro, e como as glosas têm vírgulas internas (`grass, herb`), parear por posição é chute. Por isso o índice grava `gloss: null` para nomes — ver o comentário em `scripts/lexicon.mjs`.

---

## B. Teacher's Materials — gabarito dos PENSA **e** dos Exercitia

O `CAPITVLVM {NUMERAL}` se repete três vezes por capítulo, e é a **página**
que distingue a seção — não o texto ao redor:

| Faixa de página | Seção |
|---|---|
| < 90 | PENSA em branco (o exercício para o aluno, sem resposta) |
| 90–132 | gabarito dos PENSA |
| 133–156 | **Exercitia Latina Solūta Pars I** — gabarito completo dos *Exercitia latina*, `Exercitium N` na mesma numeração do caderno de exercícios, **macrons íntegros** apesar do OCR (verificado na imagem: `flūminibus`, `crūra`, `Iūliō trēs līberī sunt`). É o gabarito PRIMÁRIO dos exercícios do site, já que os *Exercitia* são a fonte deles. |
| ≥ 157 | Exercitia Latina Solūta Pars II (*Roma Aeterna* — fora do escopo do site) |

```
CAPITVLVM {NUMERAL}     ← mas cuidado: OCR corrompe o numeral às vezes
                           ("III" → "HI", "II" → "H" — pior justo na Solūta)
PENSVM A                ← desinências gramaticais
PENSVM B                ← vocabulário novo
PENSVM C                ← perguntas dissertativas (o site NÃO usa)
```

```bash
node scripts/locus.mjs XI                        # as três páginas, já resolvidas
grep -n "CAPITVLVM X" .material/txt/Teachers_Materials.txt
node scripts/page.mjs --find Teachers "PENSVM B"
```

Por causa dessa corrupção, um `⚠ não encontrado` do `locus.mjs` para Teacher's **não prova ausência** — pode ser numeral ilegível. Confira com `page.mjs --find` antes de concluir que a seção não existe para aquele capítulo.

---

## C. Ørberg, Familia Romana — texto e números de linha

**Teto: só vai até o Cap. XVIII** (`CAP. XIX` tem zero ocorrências no PDF `1-146`). Além disso, o site ainda não tem texto corrido nem números de linha para preencher `bookRef` — é trabalho de extração à parte.

O que o site cita em `bookRef` (`Cap. IX, ll. 1–86`). Os números de linha aparecem na margem a cada 5 linhas e **sobrevivem ao OCR** — é o principal uso deste arquivo:

```bash
node scripts/page.mjs --find Lingva "Cum avis volat"
# → p.71, linha 3078 do cache, e renderiza a página
```

A página do PDF **não** é o número impresso no rodapé (PDF 71 = impressa 69). Sempre use `--find` ou o `.pages.json`; não faça a conta de cabeça.

A seção GRAMMATICA LATINA fica no fim de cada capítulo — é o que o site espelha em `src/content/grammar/{slug}/`.

---

## D. Exercitia latina — só imagem

Sem camada de texto. Não há grep possível — mas as páginas **5–6** do próprio
PDF trazem um `INDEX LECTIONVM` com a página impressa em que cada `Cap. N`
começa. `scripts/locus.mjs` tem essa tabela embutida (extraída e verificada
por imagem, não estimada): página PDF = página impressa + 8. Confirmado
contra o Cap. XI (índice diz p. impressa 34 → PDF p. 42, e a imagem mostra
"CAP. XI" no cabeçalho e "34" no rodapé).

```bash
node scripts/locus.mjs XI              # já devolve o intervalo de páginas
node scripts/page.mjs Exercitia 34-36  # renderizar diretamente, se preferir
```

São os enunciados que o site converte em exercícios. O `README.md` registra que PENSVM C e redação livre ficam de fora por não terem gabarito determinístico.

---

## E. Latine Disco — manual do aluno

Notas em inglês, capítulo a capítulo. Útil para entender *por que* Ørberg introduz algo naquela ordem. OCR ruim; mesmo protocolo.

---

## Receitas

```bash
npm run materia                                   # (re)constrói o cache
node scripts/locus.mjs <NUMERAL>                  # onde o capítulo está nos 5 livros
node scripts/lexicon.mjs <lema>                   # grafia + capítulo
node scripts/lexicon.mjs --check <slug>           # progressão lexical
node scripts/page.mjs --list                      # nomes dos livros
node scripts/page.mjs --find <livro> "<trecho>"   # localizar + renderizar
node scripts/page.mjs <livro> <p>[-<p>]           # renderizar páginas

# grep direto no cache (só Companion é confiável para grafia)
grep -n "termo" .material/txt/A_Companion_to_Familia_Romana.txt
```

`pdftotext` vem com o Git for Windows (`/mingw64/bin`). A renderização usa **PyMuPDF** (`python -m pip install pymupdf`) porque esta máquina não tem `pdftoppm` — sem ela o `Read` não abre página de PDF.
