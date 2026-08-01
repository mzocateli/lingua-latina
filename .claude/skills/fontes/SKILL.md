---
name: fontes
description: Ler e pesquisar os materiais-fonte do projeto (os cinco PDFs de Ørberg em .material/pdf) — texto do livro, gabarito, vocabulário, números de linha para bookRef. Use sempre que precisar consultar o livro, conferir uma resposta, checar a grafia de uma palavra latina ou descobrir onde um assunto é apresentado.
---

# Consultar os materiais-fonte

Cinco livros em `.material/pdf/`. **Eles não são equivalentes** — um é digital e confiável, três são OCR que destrói a ortografia, e um é imagem pura. Usar o errado produz erro silencioso.

## A regra que governa tudo

> **Texto de OCR serve para LOCALIZAR. Nunca para verificar ortografia.**

Medido neste projeto: o Ørberg extrai `Cum avis volat, alae moventur.` — mas a página impressa diz `ālae`. O OCR **apaga macrons sem deixar rastro**; o texto sai limpo, plausível e errado. Um agent que confira macrons contra esse texto conclui que o site está errado e "corrige" `ālae` (certo) para `alae` (errado). São **zero** macrons em 216 mil caracteres de latim.

Portanto: achou a passagem no OCR → **renderize a página e leia a imagem**.

## Preparo (uma vez)

```bash
npm run materia          # extrai .material/txt/*.txt + mapa linha→página
```

## Primeiro passo em qualquer capítulo novo: `locus.mjs`

Antes de procurar manualmente, pergunte onde o capítulo está nos cinco livros:

```bash
node scripts/locus.mjs XI
#  Ørberg .................. pp. 79–86
#  Exercitia Solūta (gabarito) p. 142
#  PENSA — gabarito ........ p. 97
#  PENSA — em branco ....... p. 20
#  Companion ............... linha 3406 (XI. Corpus Hūmānum)
#  Exercitia latina ........ pp. 42–45
```

Evita repetir, a cada capítulo, a mesma busca do zero nos cinco livros. Detalhes de como cada âncora foi medida: `references/materia.md`.

## As três camadas

### 1. Companion — confie no texto

`A_Companion_to_Familia_Romana.pdf` (Neumann, 432 pp.) é **born-digital**: macrons perfeitos (`leōnis`, `peristȳlō`, `Lȳdia`). É a **autoridade de grafia e vocabulário**.

```bash
node scripts/lexicon.mjs bestia     # → bēstia, Cap. X  ⚠ grafia correta: bēstia
node scripts/lexicon.mjs --check x  # pistas de progressão lexical do cap-x.ts
grep -n "ablātīvus modī" .material/txt/A_Companion_to_Familia_Romana.txt
```

O índice de `lexicon.mjs` sai daqui. Para qualquer dúvida de macron, **comece por ele** — é uma consulta instantânea e resolve a maioria dos casos sem abrir PDF.

### 2. Ørberg, Teacher's, Latine Disco — só localizar

OCR corrompido. Um comando faz o ciclo inteiro:

```bash
node scripts/page.mjs --find Lingva "Cum avis volat"
```

Ele procura no cache, converte a linha em página pelo mapa e renderiza o PNG. **Abra o PNG com o Read e leia a ortografia ali.**

Nunca converta número de página de cabeça: o número impresso no rodapé não é o número da página do PDF (no Ørberg a diferença é de 2). O `--find` e o `.pages.json` já cuidam disso.

### 3. Exercitia latina — só imagem

`Exercitia_latina.pdf` não tem camada de texto nenhuma (148 caracteres no livro inteiro). Não há o que grepar:

```bash
node scripts/page.mjs Exercitia 34-36
```

Depois abra os PNGs com o Read.

## Escolher o livro

| Preciso de… | Livro | Como |
|---|---|---|
| grafia com macron, vocabulário | **Companion** | `lexicon.mjs` ou grep no cache |
| explicação gramatical em inglês | **Companion** | grep no cache |
| texto corrido do capítulo, nº de linha para `bookRef` | Ørberg | `page.mjs --find` |
| gabarito dos PENSA | Teacher's | `page.mjs --find`, âncoras `CAPITVLVM {N}` / `PENSVM A\|B\|C` |
| **gabarito dos Exercitia (o principal — é a fonte dos exercícios do site)** | **Teacher's**, seção "Exercitia Latina Solūta" pp. 133–156 | `locus.mjs` → campo Solūta |
| enunciados dos Exercitia | Exercitia | `page.mjs <páginas>` (só imagem) — ou `locus.mjs` para achar as páginas |
| notas do aluno | Latine Disco | `page.mjs --find` |

Detalhes de navegação e caminhos: `references/materia.md`.
Evidência da corrupção de OCR, caso precise justificar a regra: `references/ocr.md`.

## Ao relatar

Todo trecho latino citado leva a marca da sua procedência, porque o leitor não tem como distinguir depois:

- `[Companion]` — texto digital, grafia confiável.
- `[imagem p.71]` — lido da página renderizada, grafia confiável.
- `[OCR — grafia não confiável]` — só para localizar; **nunca** cite como forma correta.

Se não conseguiu chegar à imagem, diga "não confirmado" em vez de reportar a forma do OCR.
