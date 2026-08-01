# Por que o texto de OCR não serve para ortografia

Evidência medida neste repositório, para que a regra não passe por excesso de zelo.

## A medida que resolve a questão

`npm run materia` conta os macrons de cada livro depois da extração:

| Livro | caracteres | macrons (ā ē ī ō ū ȳ) |
|---|---|---|
| A_Companion_to_Familia_Romana | 721.449 | milhares |
| Lingva_latina (Ørberg) | 216.118 | **0** |
| Teachers_Materials | 499.337 | **0** |
| Latine_disco | 193.647 | **0** |

Zero macrons em 216 mil caracteres de latim de Ørberg — um texto em que praticamente toda frase tem vogal longa. Não é degradação parcial: a informação **não existe** no texto extraído.

## O caso que prova o risco

Cap. X, linha 15. O texto extraído do Ørberg:

```
15 natat caudam movet. Cum avis volat, alae moventur. Cum homo ambulat, pedes moventur.
```

A página impressa (verificada em imagem, `page.mjs --find Lingva "Cum avis volat"` → p.71):

```
Cum avis volat, ālae moventur. Cum homō ambulat, pedēs moventur.
```

O OCR não *corrompeu* `ālae` num garrancho visível — ele produziu `alae`, que é uma palavra latina perfeitamente formada e plausível. **Nada no texto sinaliza a perda.** Um revisor comparando `src/data/cap-x.ts` (que tem `ālae`, correto) contra esse texto concluiria que o site está errado.

É por isso que a regra é "localizar, nunca verificar": o modo de falha não é ruído perceptível, é uma resposta errada com aparência de certa.

## Outras corrupções, para reconhecer o padrão

Do Teacher's Materials e do Ørberg:

| Impresso | OCR |
|---|---|
| `Iūlia` | `lulia` (I maiúsculo → l minúsculo) |
| `nōn` | `nbn` |
| `Mēdus` | `MCdus` |
| `plōrat` | `plbrat` |
| `CAPITVLVM III` | `CAPITVLVM HI` |
| `hortō` | `hort6` |
| `vīlla` | `vrlla` |
| `dēsunt` | `dBsunt` |
| `singulāris` | `singuHiris` |
| `plūrālis` | `pliiralis` |

Padrão: vogal com macron vira dígito (`6`, `!`), letra próxima (`b`, `B`, `C`, `Q`, `S`) ou desaparece. `I` vira `l`. Nada disso é reversível com confiança.

## Por que não construímos um reparador

Foi considerado e descartado. Um mapa de correções (`6`→`ō`, `!`→`ī`) só cobre os casos vistos e **falha justamente no pior deles** — a perda silenciosa, em que não há caractere estranho para reparar. O resultado seria um texto que parece verificado e não é: falsa confiança, que para checagem de macron é pior do que não ter ferramenta nenhuma.

A alternativa correta é a que está implementada: **a imagem da página** é a fonte de ortografia, e o **Companion** (born-digital) cobre grafia e vocabulário sem precisar abrir imagem.

## O que o OCR faz bem

Vale usá-lo para o que presta:

- **Números de linha** do Ørberg (`15 natat caudam movet`) — sobrevivem intactos e alimentam os `bookRef`.
- **Âncoras estruturais**: `CAPITVLVM`, `PENSVM A/B/C`, títulos de seção.
- **Prosa em inglês** (Latine Disco, notas) — legível, sem macron em jogo.
- **Localizar** qualquer passagem cuja forma sem macron você consiga adivinhar — daí `--find` aceitar trecho sem diacrítico.
