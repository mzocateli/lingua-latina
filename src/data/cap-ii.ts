import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "ii",
  "numeral": "II",
  "title": "Familia Romana",
  "blurb": "Foco: <em>gênero gramatical</em> (masc. <em>-us</em>, fem. <em>-a</em>, neutro <em>-um</em>); o caso <em>genitivo</em> singular e plural; os interrogativos <em>quis? quae? quid? quī? cuius? quot?</em>; possessivos <em>meus, tuus</em>.",
  "exercises": [
    {
      "index": 0,
      "number": 1,
      "title": "Exercitium 1",
      "tag": "léxico: <em>vir, fēmina, puer, puella</em>",
      "tip": {
        "text": "Cap II apresenta as palavras básicas para pessoas: <em>vir</em> (homem adulto, m.), <em>fēmina</em> (mulher, f.), <em>puer</em> (menino, m.), <em>puella</em> (menina, f.). No plural: <em>virī, fēminae, puerī, puellae</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Iūlia est {puella:md} Rōmāna. <em>(menina)</em>",
        "Aemilia est {fēmina:md} Rōmāna. <em>(mulher)</em>",
        "Mārcus est {puer:md} Rōmānus. <em>(menino)</em>",
        "Mārcus et Quīntus sunt {puerī:md} Rōmānī. <em>(pl.)</em>",
        "Iūlius et Mēdus et Dāvus sunt {virī:md}; Iūlius {vir:md} Rōmānus est.",
        "Aemilia, Dēlia, Syra sunt {fēminae:md} Rōmānae; Aemilia {fēmina:md} Rōmāna est."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "personae",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m. adulto",
              "vir",
              "virī"
            ],
            [
              "f. adulta",
              "fēmina",
              "fēminae"
            ],
            [
              "m. criança",
              "puer",
              "puerī"
            ],
            [
              "f. criança",
              "puella",
              "puellae"
            ]
          ]
        },
        {
          "label": "notar",
          "type": "list",
          "items": [
            "<i>vir, puer</i> são m. mas sem <i>-us</i>",
            "<i>fēmina, puella</i> seguem <i>-a</i>"
          ]
        }
      ],
      "references": [
        "personae"
      ]
    },
    {
      "index": 1,
      "number": 2,
      "title": "Exercitium 2",
      "tag": "família e genitivo: <em>pater, māter, fīlius, fīlia; -ī, -ae</em>",
      "tip": {
        "text": "Os papéis familiares: <em>pater</em> (pai, m.), <em>māter</em> (mãe, f.), <em>fīlius</em> (filho, m.), <em>fīlia</em> (filha, f.), <em>līberī</em> (= fīliī et fīliae, sempre pl., m.). O <em>genitivo singular</em>: masc./neutro em <em>-ī</em> (<em>Mārcī, Iūliī</em>), fem. em <em>-ae</em> (<em>Iūliae, Aemiliae</em>).",
        "qualifier": null
      },
      "exemplum": "Iūlius est <u>pater</u> Mārcī. Aemilia est <u>māter</u> Iūliae.",
      "questions": [
        "Aemilia est {māter:md} Mārcī. <em>(mãe)</em>",
        "Mārcus et Quīntus sunt {fīliī:md} Iūliī. <em>(filhos)</em>",
        "Mārcus, Quīntus et Iūlia sunt {līberī:md} Iūliī et Aemiliae. <em>(crianças)</em>",
        "Iūlia est {fīlia:md} Iūliī. <em>(filha)</em>",
        "Mārcus est {fīlius:md} Iūliī. <em>(filho)</em>",
        "Iūlius est pater {Mārcī:md}. <em>(de Mārcus)</em>",
        "Iūlius est pater {Quīntī:md}. <em>(de Quīntus)</em>",
        "Aemilia est māter {Iūliae:md}. <em>(de Iūlia)</em>",
        "Iūlius est pater {Mārcī:md} et {Quīntī:md}. <em>(de M. e Q.)</em>",
        "Aemilia est māter {Iūliae:md}. <em>(de Iūlia)</em>",
        "Mārcus est fīlius {Iūliī:md} et {Aemiliae:md}. <em>(de I. e A.)</em>",
        "Aemilia est māter {Mārcī:md}, {Quīntī:md} et {Iūliae:md}. <em>(três crianças)</em>",
        "Iūlius est pater {Mārcī:md}, {Quīntī:md} et {Iūliae:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "familia",
          "type": "table",
          "headers": [
            "papel",
            "m.",
            "f."
          ],
          "rows": [
            [
              "genitor",
              "pater",
              "māter"
            ],
            [
              "criança",
              "fīlius",
              "fīlia"
            ],
            [
              "pl.",
              "līberī (filhos)",
              "—"
            ]
          ]
        },
        {
          "label": "genitīvus sg.",
          "type": "table",
          "headers": [
            "",
            "ex."
          ],
          "rows": [
            [
              "m. -us → -ī",
              "Iūli<b>ī</b>, Mārc<b>ī</b>, Quīnt<b>ī</b>"
            ],
            [
              "f. -a → -ae",
              "Iūli<b>ae</b>, Aemili<b>ae</b>"
            ]
          ]
        }
      ],
      "references": [
        "genitivo-ii",
        "personae"
      ]
    },
    {
      "index": 2,
      "number": 3,
      "title": "Exercitium 3",
      "tag": "interrogativos: <em>quis? quae? quī? quid?</em>",
      "tip": {
        "text": "Os interrogativos do nominativo: <em>quis?</em> (quem?, m. sg.), <em>quae?</em> (quem?, f. sg. ou pl. de coisas), <em>quī?</em> (quem?, m. pl.), <em>quid?</em> (o quê?, n. — coisa). Olhe o gênero esperado da resposta para escolher.",
        "qualifier": null
      },
      "exemplum": "<u>Quis</u> est Mārcus? — Mārcus puer est. <u>Quid</u> est Sicilia? — Īnsula est.",
      "questions": [
        "{quis:md} est Mārcus? — Mārcus puer Rōmānus est. <em>(quem? m. sg.)</em>",
        "{quis:md} est pater Mārcī? — Iūlius est pater Mārcī.",
        "{quae:md} est māter Mārcī? — Aemilia est māter Mārcī. <em>(quem? f. sg.)</em>",
        "{quae:md} est Iūlia? — Iūlia est puella Rōmāna.",
        "{quī:md} sunt fīliī Iūliī? — Mārcus et Quīntus sunt fīliī Iūliī. <em>(quem? m. pl.)</em>",
        "{quid:md} est m? — m littera est. <em>(o quê? n.)</em>",
        "{quid:md} est familia? — Familia est Iūlius et Aemilia et līberī et servī."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "interrog.",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m.",
              "quis?",
              "quī?"
            ],
            [
              "f.",
              "quae?",
              "quae?"
            ],
            [
              "n. (coisa)",
              "quid?",
              "quae?"
            ]
          ]
        }
      ],
      "references": [
        "interrogativos-ii"
      ]
    },
    {
      "index": 3,
      "number": 4,
      "title": "Exercitium 4",
      "tag": "conjunções: <em>et</em> vs enclítico <em>-que</em>",
      "tip": {
        "text": "<em>et</em> e <em>-que</em> têm a mesma função (= e). <em>-que</em> é <strong>enclítico</strong>: gruda-se ao <em>último</em> elemento da lista, ligando-o aos anteriores. Use <em>-que</em> para a forma sintética (mais antiga, comum em listas curtas).",
        "qualifier": null
      },
      "exemplum": "Mārcus et Quīntus = Mārcus Quīntu<u>sque</u>. Iūlia et Aemilia = Iūlia Aemilia<u>que</u>.",
      "questions": [
        "Litterae et numerī → {litterae numerīque:xl}. <em>(usando -que)</em>",
        "Mārcus et Quīntus → {Mārcus Quīntusque:xl}.",
        "Puerī et puellae → {puerī puellaeque:xl}.",
        "Fēminae et puerī → {fēminae et puerī:xl}. <em>(forma com et)</em>",
        "Servī et ancillae → {servī et ancillae:xl}. <em>(com et)</em>",
        "Ūna fīlia et duo fīliī → {ūna fīlia et duo fīliī:xxl}. <em>(natural com et)</em>"
      ],
      "phraseMode": true,
      "auxilia": [
        {
          "label": "et / -que",
          "type": "list",
          "items": [
            "<i>et</i> entre os elementos: <i>A et B</i>",
            "<i>-que</i> no fim do último: <i>A B-que</i>",
            "ambos significam o mesmo"
          ]
        }
      ],
      "references": []
    },
    {
      "index": 4,
      "number": 5,
      "title": "Exercitium 5",
      "tag": "<em>servus / ancilla, dominus / domina</em> + genitivo",
      "tip": {
        "text": "O capítulo apresenta as relações de propriedade: <em>servus</em> (escravo, m.) e <em>ancilla</em> (escrava, f.); seu <em>dominus</em> (senhor) e <em>domina</em> (senhora). Note como o <em>genitivo plural</em> aparece pela primeira vez: <em>-ōrum</em> (m./n.), <em>-ārum</em> (f.).",
        "qualifier": null
      },
      "exemplum": "Iūlius est <u>dominus</u> Mēdī. Aemilia est <u>domina</u> ancill<u>ārum</u>.",
      "questions": [
        "Mēdus nōn fīlius Iūliī est, sed {servus:md} Iūliī. <em>(escravo)</em>",
        "Dēlia est {ancilla:md} Aemiliae. <em>(escrava)</em>",
        "Iūlius est {dominus:md} Mēdī; Aemilia est {domina:md} Dēliae. <em>(senhor; senhora)</em>",
        "Mēdus et Dāvus sunt duo {servī:md}. <em>(pl. masc.)</em>",
        "Dēlia et Syra sunt duae {ancillae:md}. <em>(pl. fem.)</em>",
        "In familiā Iūliī sunt multī {servī:md}. <em>(escravos)</em>",
        "Iūlius est dominus {servōrum:md}. <em>(gen. pl.: dos escravos)</em>",
        "Aemilia est domina {ancillae:md}. <em>(gen. sg. fem.: da escrava)</em>",
        "Aemilia est domina {ancillārum:md}. <em>(gen. pl.: das escravas)</em>",
        "Mārcus, Quīntus, Iūlia sunt {līberī:md} Iūliī et Aemiliae. <em>(crianças)</em>",
        "Iūlius est dominus {servōrum:md} et pater {līberōrum:md}. <em>(gen. pl. m.: servōrum; gen. pl. m.: līberōrum)</em>"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "domus",
          "type": "table",
          "headers": [
            "",
            "m.",
            "f."
          ],
          "rows": [
            [
              "amo",
              "dominus",
              "domina"
            ],
            [
              "subordinado",
              "servus",
              "ancilla"
            ]
          ]
        },
        {
          "label": "gen. pl.",
          "type": "list",
          "items": [
            "m./n. → <b>-ōrum</b>: <i>servōrum, līberōrum</i>",
            "f. → <b>-ārum</b>: <i>ancillārum, fēminārum</i>"
          ]
        }
      ],
      "references": [
        "genitivo-ii",
        "personae"
      ]
    },
    {
      "index": 5,
      "number": 7,
      "title": "Exercitium 7",
      "tag": "genitivo plural: <em>multōrum, multārum</em> + substantivo",
      "tip": {
        "text": "Os adjetivos concordam em <em>caso, número e gênero</em> com o substantivo. No genitivo plural, todos terminam em <em>-ōrum</em> (m./n.) ou <em>-ārum</em> (f.), exatamente como os substantivos.",
        "qualifier": null
      },
      "exemplum": "Iūlius est dominus <u>multōrum servōrum</u>.",
      "questions": [
        "Iūlius est dominus {multōrum servōrum:xl}. <em>(de muitos escravos)</em>",
        "Numerus {servōrum:md} magnus est. <em>(dos escravos)</em>",
        "Aemilia est domina {multārum ancillārum:xl}. <em>(de muitas escravas)</em>",
        "In familiā Iūliī magnus est numerus {servōrum:md} et {ancillārum:md}. <em>(escravos, escravas)</em>",
        "Iūlius pater est, sed nōn pater {servōrum:md} et {ancillārum:md}. <em>(escravos/escravas — gen. pl.)</em>",
        "Iūlius pater est {līberōrum:md}. <em>(das crianças)</em>",
        "Aemilia māter est {līberōrum:md}.",
        "In Graeciā magnus numerus {īnsulārum:md}. <em>(de ilhas)</em>",
        "In Galliā magnus numerus {fluviōrum:md}. <em>(de rios)</em>",
        "In Italiā magnus numerus {oppidōrum:md}. <em>(de cidades)</em>"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "gen. pl.",
          "type": "table",
          "headers": [
            "",
            "m./n.",
            "f."
          ],
          "rows": [
            [
              "subst.",
              "-ōrum",
              "-ārum"
            ],
            [
              "adj.",
              "-ōrum",
              "-ārum"
            ]
          ]
        },
        {
          "label": "exempla",
          "type": "words",
          "inline": true,
          "words": [
            "<i>multōrum servōrum</i>",
            "<i>multārum ancillārum</i>",
            "<i>multōrum līberōrum</i>",
            "<i>multārum īnsulārum</i>"
          ]
        }
      ],
      "references": [
        "genitivo-ii",
        "concordancia-ii"
      ]
    },
    {
      "index": 6,
      "number": 8,
      "title": "Exercitium 8",
      "tag": "<em>magnus numerus</em> + gen. = <em>multī</em>",
      "tip": {
        "text": "Em latim, <em>magnus numerus + genitivo plural</em> equivale a dizer <em>multī</em> (= muitos). É construção particularmente comum quando se quer destacar a quantidade. Da mesma forma: <em>parvus numerus + gen.</em> ≈ <em>paucī</em>.",
        "qualifier": null
      },
      "exemplum": "<u>magnus numerus servōrum</u> = <u>multī servī</u>.",
      "questions": [
        "In Graeciā sunt multae īnsulae → {magnus numerus īnsulārum:xxl}. <em>(magnus numerus + gen.)</em>",
        "In Africā sunt paucī fluviī → {parvus numerus fluviōrum:xxl}.",
        "In Italiā sunt multa oppida → {magnus numerus oppidōrum:xxl}.",
        "In familiā Iūliī sunt paucī līberī → {parvus numerus līberōrum:xxl}.",
        "{multa:md} {vocābula:md} in capitulō II sunt. <em>(multa vocabula nova)</em>",
        "{multae:md} {litterae:md} Latīnae sunt. <em>(multae litterae)</em>",
        "{pauca:md} {exempla:md} in pāginā prīmā sunt. <em>(pauca exempla)</em>"
      ],
      "phraseMode": true,
      "auxilia": [
        {
          "label": "equivalências",
          "type": "list",
          "items": [
            "<i>multī servī</i> = <i>magnus numerus servōrum</i>",
            "<i>paucī fīliī</i> = <i>parvus numerus fīliōrum</i>"
          ]
        }
      ],
      "references": [
        "genitivo-ii"
      ]
    },
    {
      "index": 7,
      "number": 9,
      "title": "Exercitium 9",
      "tag": "<em>quot?</em> e <em>ūnus / duo / trēs</em> com gênero",
      "tip": {
        "text": "<em>quot?</em> pergunta o número (= quantos?). É invariável. <em>ūnus, duo, trēs</em> são os únicos numerais que se declinam. Atenção: o feminino de <em>duo</em> é <em>duae</em>; o neutro de <em>trēs</em> é <em>tria</em>.",
        "qualifier": null
      },
      "exemplum": "<u>Quot</u> servī? — Centum. <u>Quot</u> fīliae? — <u>Ūna</u>.",
      "questions": [
        "{Quot:md} servī in familiā Iūliī sunt? — {centum:md} (C) servī sunt.",
        "Iūlius habet {duo:md} fīliōs: Mārcum et Quīntum. <em>(numeral m. pl.)</em>",
        "Iūlius habet {duae:md} ancillās: Dēliam et Syram. <em>(numeral f. pl.)</em>",
        "In Italiā sunt {duo:md} oppida — Tūsculum, Brundisium, Ostia. <em>(numeral n. pl. = 2)</em>",
        "{Quot:md} līberī sunt in familiā? — {trēs:md} (III) līberī.",
        "Sunt {duae:md} fīliae et {ūna:md} fīlia? Immo, ūna fīlia tantum.",
        "{ūnus:md} vir est Mēdus, sed {duo:md} virī sunt Mēdus et Dāvus. <em>(numeral m.: 1, 2)</em>",
        "{tria:md} oppida: Sparta, Delphī, Tūsculum. <em>(numeral n. pl. = 3)</em>",
        "{trēs:md} fīliī Iūliī, {duo:md} ancillae Aemiliae, sed {ūnus:md} fīlia tantum. <em>(3 m., 2 f., 1 f.)</em>",
        "{tria:md} oppida, {duo:md} fluviī... immo {ūnum:md} oppidum tantum. <em>(3 n., 2 m., 1 n.)</em>",
        "Iūliō sunt {trēs:md} līberī: duo fīliī et {duae:md} fīlia. — itaque {ūna:md} fīlia tantum.",
        "{Quot:md} servī Iūliō? — {mīlle:md} (M) servī. <em>(numeral indeclinável)</em>"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "1, 2, 3",
          "type": "table",
          "headers": [
            "",
            "m.",
            "f.",
            "n."
          ],
          "rows": [
            [
              "ūnus",
              "ūnus",
              "ūna",
              "ūnum"
            ],
            [
              "duo",
              "duo",
              "duae",
              "duo"
            ],
            [
              "trēs",
              "trēs",
              "trēs",
              "tria"
            ]
          ]
        },
        {
          "label": "quot?",
          "type": "list",
          "items": [
            "invariável: quantos?/quantas?/quantos (n.)?",
            "resposta: número (ūnus / centum / mīlle…)"
          ]
        }
      ],
      "references": [
        "interrogativos-ii"
      ]
    },
    {
      "index": 8,
      "number": 10,
      "title": "Exercitium 10",
      "tag": "possessivos: <em>meus, tuus</em> (1ª/2ª pessoa)",
      "tip": {
        "text": "<em>meus, mea, meum</em> = meu, minha. <em>tuus, tua, tuum</em> = teu, tua. Concordam com o objeto possuído (não com o possuidor). Aparecem aqui pela primeira vez no diálogo final entre Iūlius e Cornēlius.",
        "qualifier": null
      },
      "exemplum": "Cornēlius: «Sacculus <u>tuus</u> magnus est!» — Iūlius: «Sacculus <u>meus</u> nōn parvus est.»",
      "questions": [
        "Cornēlius interrogat: 'Quot servī sunt in familiā {tuā:md}?'  <em>(possessivo m. sg.: tua)</em>",
        "Iūlius respondet: 'In familiā {meā:md} centum servī sunt.'",
        "Cornēlius: 'Familia {tua:md} magna est!' <em>(tua = f. sg.)</em>",
        "Iūlius: 'Familia {mea:md} nōn parva est.'",
        "Iūlius: 'Litterae {tuae:md} clārae sunt.' <em>(tuas — f. pl.)</em>",
        "Cornēlius: 'Litterae {meae:md} obscūrae sunt.' <em>(meas — f. pl.)</em>",
        "Cornēlius: 'Liber {tuus:md} antīquus est, Iūlī.'  <em>(masc.: tuus)</em>",
        "Iūlius: 'Liber {meus:md} novus est.'",
        "Cornēlius: 'Vocābula {tua:md} pulchra sunt.' <em>(tuas n. pl.)</em>",
        "Iūlius: 'Vocābula {mea:md}, exempla {meōrum:md}, capitula {mea:md} multa sunt.'",
        "Iūlius (puerīs): 'Librī {tuōrum:md} antīquī sunt.'"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "meus / tuus",
          "type": "table",
          "headers": [
            "",
            "m.",
            "f.",
            "n."
          ],
          "rows": [
            [
              "nōm. sg.",
              "meus",
              "mea",
              "meum"
            ],
            [
              "abl. sg.",
              "meō",
              "meā",
              "meō"
            ],
            [
              "nōm. pl.",
              "meī",
              "meae",
              "mea"
            ],
            [
              "gen. pl.",
              "meōrum",
              "meārum",
              "meōrum"
            ]
          ]
        },
        {
          "label": "regra",
          "type": "list",
          "items": [
            "concorda com o <em>objeto</em>, não com o possuidor",
            "<i>tu<u>us</u> libe<u>r</u></i>, <i>tu<u>a</u> famili<u>a</u></i>"
          ]
        }
      ],
      "references": [
        "concordancia-ii"
      ]
    },
    {
      "index": 9,
      "number": 11,
      "title": "Exercitium 11",
      "tag": "léxico final: livros e capítulos",
      "tip": {
        "text": "Vocabulário do fechamento do capítulo: <em>ecce!</em> (eis!), <em>liber, librī</em> (livro), <em>antīquus</em> ↔ <em>novus</em>, <em>titulus</em>, <em>pāgina</em>, <em>capitulum</em>, <em>cēterī</em>, <em>vocābulum</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "{Ecce:md}, duo {librī:md}! Ūnus liber {antīquus:md} est, alter liber {novus:md} est. <em>(ecce; livros; antigo; novo)</em>",
        "Numerus {librōrum:md} parvus est, sed magnus est numerus pāginārum.",
        "{Titulus:md} {librī:md} est «Lingua Latīna».",
        "In librō sunt multae {pāginae:md} et multa {capitula:md} et cētera.",
        "Numerus {capitulōrum:md} magnus est. <em>(gen. pl.: dos capítulos)</em>",
        "{Capitulum:md} secundum est dē familiā Rōmānā.",
        "In paginā prīmā {capitulī:md} secundī multa vocābula nova sunt.",
        "In librō sunt {multa:md} {vocābula:md}.",
        "Numerus {vocābulōrum:md} magnus est. <em>(gen. pl.: dos vocábulos)</em>",
        "ECCE, {multa:md} {vocābula:md} sunt in pāginā prīmā {capitulī:md} {prīmī:md}.",
        "<em>familia</em> est exemplum {vocābulī:md}. <em>(gen. sg.: do vocábulo)</em>"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "vocab.",
          "type": "words",
          "inline": false,
          "words": [
            "<i>ecce!</i> — eis aqui!",
            "<i>liber, librī</i> (m.) — livro",
            "<i>titulus</i> — título",
            "<i>pāgina</i> — página",
            "<i>capitulum</i> (n.) — capítulo",
            "<i>vocābulum</i> (n.) — palavra",
            "<i>cēterī</i> — os demais",
            "<i>antīquus</i> ↔ <i>novus</i>"
          ]
        }
      ],
      "references": []
    }
  ],
  "content": {
    "grammar": {
      "intro": "Os pontos formais do capítulo: o conceito de <em>gênero</em> (masculino, feminino, neutro) e o <em>genitivo</em>, caso que indica posse e pertencimento — singular e plural — em todos os três gêneros.",
      "sections": [
        {
          "heading": "Genus: masculīnum, fēminīnum, neutrum",
          "bookRef": "Cap. II, gramm. ll. 95–104",
          "body": "\n                    <p>Em latim, todo substantivo tem um <strong>gênero</strong>\n                    gramatical — masculino, feminino ou neutro. Frequentemente\n                    (mas nem sempre!) o gênero está marcado pela terminação:</p>\n                    <table class=\"paradigm\">\n                      <tr><th>gênero</th><th>terminação típica</th><th>exemplos</th></tr>\n                      <tr><td class=\"label\">masculīnum (m.)</td><td>-us (e -er, -ir)</td><td><em>fīli<strong>us</strong>, domin<strong>us</strong>, fluvi<strong>us</strong></em>; <em>vir, puer, liber</em></td></tr>\n                      <tr><td class=\"label\">fēminīnum (f.)</td><td>-a</td><td><em>fēmin<strong>a</strong>, puell<strong>a</strong>, fīli<strong>a</strong>, īnsul<strong>a</strong></em></td></tr>\n                      <tr><td class=\"label\">neutrum (n.)</td><td>-um</td><td><em>oppid<strong>um</strong>, vocābul<strong>um</strong>, capitul<strong>um</strong></em></td></tr>\n                    </table>\n                    <p>Importante: gênero gramatical <strong>≠</strong> sexo\n                    biológico. <em>Fluvius</em> (rio) é masculino, <em>īnsula</em>\n                    (ilha) é feminino — sem que rios sejam \"masculinos\" no mundo.\n                    O termo grego para isso é <em>genus</em> (gênero) e não\n                    <em>sexus</em>.</p>\n                    <p>Existem várias palavras em <em>-us</em> que não são\n                    masculinas (algumas árvores, por exemplo, em capítulos\n                    avançados). Por enquanto, a regra de bolso funciona:\n                    <em>-us → m, -a → f, -um → n</em>.</p>\n                    "
        },
        {
          "heading": "Genetīvus singulāris",
          "bookRef": "Cap. II, ll. 35–58; gramm. ll. 105–121",
          "body": "\n                    <p>O <strong>genitīvus</strong> é o caso que indica\n                    <em>posse</em>, <em>pertencimento</em>, <em>parte de algo</em>.\n                    Em português corresponde frequentemente a \"<em>de</em>...\":</p>\n                    <table class=\"paradigm\">\n                      <tr><th></th><th>nōm. sg.</th><th>gen. sg.</th></tr>\n                      <tr><td class=\"label\">m. (-us)</td><td>serv<strong>us</strong></td><td>serv<strong>ī</strong></td></tr>\n                      <tr><td class=\"label\">m. (-er)</td><td>liber</td><td>libr<strong>ī</strong></td></tr>\n                      <tr><td class=\"label\">f. (-a)</td><td>ancill<strong>a</strong></td><td>ancill<strong>ae</strong></td></tr>\n                      <tr><td class=\"label\">n. (-um)</td><td>vocābul<strong>um</strong></td><td>vocābul<strong>ī</strong></td></tr>\n                    </table>\n                    <p>Note que <strong>m. e n. compartilham</strong> o genitivo\n                    sg. em <em>-ī</em>; só o feminino é diferente (<em>-ae</em>).\n                    Aprenda os pares: <em>fīlius → fīliī</em>, <em>fīlia → fīliae</em>,\n                    <em>oppidum → oppidī</em>.</p>\n                    <div class=\"ex-block\">\n                      Iūlius est pater <strong>Mārcī</strong>. (m. sg.)<br>\n                      Aemilia est māter <strong>Iūliae</strong>. (f. sg.)<br>\n                      <em>familia</em> est titulus <strong>capitulī</strong> secundī. (n. sg.)\n                    </div>\n                    <p>Pergunta correspondente: <em>cuius?</em> (= de quem?, sg.).\n                    No interrogativo, <em>cuius</em> serve para todos os três\n                    gêneros, sg.</p>\n                    "
        },
        {
          "heading": "Genetīvus plūrālis",
          "bookRef": "Cap. II, gramm. ll. 105–121",
          "body": "\n                    <p>O genitivo plural completa o paradigma:</p>\n                    <table class=\"paradigm\">\n                      <tr><th></th><th>nōm. pl.</th><th>gen. pl.</th></tr>\n                      <tr><td class=\"label\">m. (-us)</td><td>serv<strong>ī</strong></td><td>serv<strong>ōrum</strong></td></tr>\n                      <tr><td class=\"label\">f. (-a)</td><td>ancill<strong>ae</strong></td><td>ancill<strong>ārum</strong></td></tr>\n                      <tr><td class=\"label\">n. (-um)</td><td>oppid<strong>a</strong></td><td>oppid<strong>ōrum</strong></td></tr>\n                    </table>\n                    <p>Aqui aparece pela primeira vez o <em>-ōrum</em> (m./n.) e\n                    o <em>-ārum</em> (f.) — terminações longas e bem reconhecíveis.\n                    Os adjetivos concordam:</p>\n                    <table class=\"paradigm\">\n                      <tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr>\n                      <tr><td class=\"label\">gen. sg.</td><td>magn<strong>ī</strong></td><td>magn<strong>ae</strong></td><td>magn<strong>ī</strong></td></tr>\n                      <tr><td class=\"label\">gen. pl.</td><td>magn<strong>ōrum</strong></td><td>magn<strong>ārum</strong></td><td>magn<strong>ōrum</strong></td></tr>\n                    </table>\n                    <div class=\"ex-block\">\n                      Iūlius est dominus <strong>multōrum servōrum</strong>.<br>\n                      Aemilia est domina <strong>multārum ancillārum</strong>.<br>\n                      In capitulō secundō magnus numerus <strong>vocābulōrum</strong> est.\n                    </div>\n                    <p>Construção idiomática: <em>magnus / parvus numerus + gen. pl.</em>\n                    equivale a <em>multī / paucī</em>:</p>\n                    <ul>\n                      <li><em>magnus numerus servōrum</em> ≈ <em>multī servī</em></li>\n                      <li><em>parvus numerus fluviōrum</em> ≈ <em>paucī fluviī</em></li>\n                    </ul>\n                    "
        },
        {
          "heading": "Interrogātīva: <em>quis? quae? quī? quid? cuius? quot?</em>",
          "bookRef": "Cap. II (transversal)",
          "body": "\n                    <p>O capítulo introduz vários interrogativos. Para \"quem?\" no\n                    nominativo:</p>\n                    <table class=\"paradigm\">\n                      <tr><th></th><th>m.</th><th>f.</th><th>n. (coisa)</th></tr>\n                      <tr><td class=\"label\">sg.</td><td>quis?</td><td>quae?</td><td>quid?</td></tr>\n                      <tr><td class=\"label\">pl.</td><td>quī?</td><td>quae?</td><td>quae?</td></tr>\n                    </table>\n                    <p>Para \"de quem?\" (genitivo), todos os gêneros usam\n                    <strong>cuius?</strong> (invariável no singular).</p>\n                    <p>Para \"quantos/quantas?\" (número), <strong>quot?</strong> —\n                    invariável, vale para qualquer gênero/caso. É respondido por\n                    um numeral (<em>ūnus, duo, trēs… centum, mīlle</em>).</p>\n                    <div class=\"ex-block\">\n                      <strong>Quis</strong> est Mārcus? — Puer Rōmānus. (m. sg.)<br>\n                      <strong>Quae</strong> est Iūlia? — Puella Rōmāna. (f. sg.)<br>\n                      <strong>Quī</strong> sunt fīliī Iūliī? — Mārcus et Quīntus. (m. pl.)<br>\n                      <strong>Quid</strong> est <em>familia</em>? — Vocābulum Latīnum.<br>\n                      <strong>Cuius</strong> servus est Dāvus? — Iūliī.<br>\n                      <strong>Quot</strong> servī? — Centum.\n                    </div>\n                    "
        },
        {
          "heading": "Numerī: <em>ūnus, duo, trēs</em> com gênero",
          "bookRef": "Cap. II, ll. 36–58",
          "body": "\n                    <p>Os primeiros três numerais cardinais são os <em>únicos</em>\n                    que se declinam por gênero e caso:</p>\n                    <table class=\"paradigm\">\n                      <tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr>\n                      <tr><td class=\"label\">1</td><td>ūnus</td><td>ūna</td><td>ūnum</td></tr>\n                      <tr><td class=\"label\">2</td><td>duo</td><td>duae</td><td>duo</td></tr>\n                      <tr><td class=\"label\">3</td><td>trēs</td><td>trēs</td><td>tria</td></tr>\n                    </table>\n                    <p>De 4 em diante (<em>quattuor, quīnque, sex…</em>) os\n                    cardinais são <em>indeclináveis</em> nesta fase. <em>Centum</em>\n                    e <em>mīlle</em> também são indeclináveis no singular.</p>\n                    <div class=\"ex-block\">\n                      In familiā <strong>tria</strong> oppida sunt? Nōn — <strong>duo</strong>\n                      oppida Graeca et <strong>ūnum</strong> Rōmānum.<br>\n                      Iūliō <strong>duo</strong> fīliī et <strong>ūna</strong> fīlia sunt.<br>\n                      <strong>Trēs</strong> līberī, <strong>duae</strong> ancillae.\n                    </div>\n                    "
        },
        {
          "heading": "Coniūnctiō enclītica <em>-que</em>",
          "bookRef": "Cap. II, ll. 8–22",
          "body": "\n                    <p>Além de <em>et</em>, o latim usa um pequeno conectivo\n                    enclítico, <strong>-que</strong>, que se gruda à última palavra\n                    da série e a liga às anteriores:</p>\n                    <ul>\n                      <li><em>Mārcus et Quīntus</em> = <em>Mārcus Quīntus<strong>que</strong></em></li>\n                      <li><em>Iūlia et Aemilia et Syra</em> = <em>Iūlia, Aemilia Syra<strong>que</strong></em></li>\n                      <li><em>fīliī et fīliae</em> = <em>fīliī fīliae<strong>que</strong></em></li>\n                    </ul>\n                    <p>Os dois (et / -que) coexistem livremente; <em>-que</em> é\n                    mais comum em listas curtas e em prosa elevada. Apareceu já em\n                    capitulō I: <em>SPQR</em> = <em>Senātus Populus<strong>que</strong>\n                    Rōmānus</em> (Senado e Povo Romano).</p>\n                    "
        }
      ]
    },
    "topics": [
      {
        "id": "genitivo-ii",
        "title": "Genitivo: o caso de \"de quem?\"",
        "bookRef": "Cap. II, ll. 35–58; gramm. ll. 105–121",
        "body": "\n                <p>O <em>genitivo</em> serve essencialmente para indicar\n                <strong>posse</strong> ou <strong>relação de pertencimento</strong>\n                entre dois substantivos. Em português, normalmente vem com a\n                preposição <em>de</em>:</p>\n                <table class=\"mini-paradigm\">\n                  <tr><th></th><th>sg.</th><th>pl.</th></tr>\n                  <tr><td>m./n.</td><td>-ī</td><td>-ōrum</td></tr>\n                  <tr><td>f.</td><td>-ae</td><td>-ārum</td></tr>\n                </table>\n                <p>Pergunte sempre <em>cuius?</em> (\"de quem?\") para identificar\n                um genitivo. Note as ambiguidades morfológicas:</p>\n                <ul>\n                  <li><em>servī</em> = gen. sg. <em>ou</em> nōm. pl.\n                  (<em>fīliī Iūliī</em> = \"os filhos de Iūlius\")</li>\n                  <li><em>ancillae</em> = gen. sg., dat. sg., nōm./voc. pl.</li>\n                </ul>\n                <p>Só o contexto distingue. Vai amadurecer.</p>\n                "
      },
      {
        "id": "personae",
        "title": "Léxico das pessoas e da família",
        "bookRef": "Cap. II, ll. 1–58",
        "body": "\n                <p>Vocabulário base que volta em todos os capítulos seguintes:</p>\n                <table class=\"mini-paradigm\">\n                  <tr><th>m.</th><th>f.</th><th>relação</th></tr>\n                  <tr><td><em>vir</em></td><td><em>fēmina</em></td><td>adulto</td></tr>\n                  <tr><td><em>puer</em></td><td><em>puella</em></td><td>criança</td></tr>\n                  <tr><td><em>pater</em></td><td><em>māter</em></td><td>genitor</td></tr>\n                  <tr><td><em>fīlius</em></td><td><em>fīlia</em></td><td>descendente</td></tr>\n                  <tr><td><em>dominus</em></td><td><em>domina</em></td><td>amo</td></tr>\n                  <tr><td><em>servus</em></td><td><em>ancilla</em></td><td>subordinado</td></tr>\n                </table>\n                <p><strong>līberī</strong> (sempre plural, masculino) = filhos\n                (fīliī + fīliae) — daí o português \"liberdade\" ter raiz comum: na\n                família romana, os <em>līberī</em> eram os de condição\n                <em>livre</em>, em contraste com os <em>servī</em>.</p>\n                <p>Vale notar a estrutura de classe naturalizada pelo vocabulário:\n                a <em>familia</em> em latim não é só o núcleo (pai/mãe/filhos)\n                mas <em>todo o conjunto sob o pater</em>, incluindo escravizados.\n                Em Cap II o livro diz tranquilamente <em>«in familiā Iūliī sunt\n                centum servī»</em> — o que diz muito sobre o que era a base\n                material da vida no Império.</p>\n                "
      },
      {
        "id": "interrogativos-ii",
        "title": "Interrogativos: quis, quae, quī, quid, cuius, quot",
        "bookRef": "Cap. II (transversal)",
        "body": "\n                <p>Cap II concentra os interrogativos mais usados:</p>\n                <table class=\"mini-paradigm\">\n                  <tr><th>pergunta</th><th>responde</th></tr>\n                  <tr><td><em>quis?</em></td><td>m. sg. nōm. (pessoa)</td></tr>\n                  <tr><td><em>quae?</em></td><td>f. sg. ou pl. (pessoas/coisas)</td></tr>\n                  <tr><td><em>quī?</em></td><td>m. pl. nōm. (pessoas)</td></tr>\n                  <tr><td><em>quid?</em></td><td>n. nōm./acus. (coisa)</td></tr>\n                  <tr><td><em>cuius?</em></td><td>gen. sg. (de quem?)</td></tr>\n                  <tr><td><em>quot?</em></td><td>quantos? (invariável)</td></tr>\n                </table>\n                <p>Atenção: <em>quis</em> também pode ser usado para feminino em\n                certos contextos antigos, mas a regra do livro é <em>quis (m.) /\n                quae (f.)</em>.</p>\n                <p>O pronome interrogativo é a base do pronome relativo\n                (introduzido em III), com pequenas diferenças no nominativo.</p>\n                "
      },
      {
        "id": "concordancia-ii",
        "title": "Concordância de adjetivos e possessivos",
        "bookRef": "Cap. II (transversal)",
        "body": "\n                <p>Os adjetivos da 1ª/2ª classe (<em>magnus -a -um, parvus -a -um,\n                multus -a -um, Rōmānus -a -um, Graecus -a -um</em>) e os\n                possessivos (<em>meus -a -um, tuus -a -um</em>) concordam com o\n                substantivo em <em>caso, número e gênero</em> — exatamente como em\n                Cap I, mas agora com mais flexões:</p>\n                <table class=\"mini-paradigm\">\n                  <tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr>\n                  <tr><td>nōm. sg.</td><td>magnus</td><td>magna</td><td>magnum</td></tr>\n                  <tr><td>gen. sg.</td><td>magnī</td><td>magnae</td><td>magnī</td></tr>\n                  <tr><td>nōm. pl.</td><td>magnī</td><td>magnae</td><td>magna</td></tr>\n                  <tr><td>gen. pl.</td><td>magnōrum</td><td>magnārum</td><td>magnōrum</td></tr>\n                </table>\n                <p>Atenção: <em>meus</em> e <em>tuus</em> concordam com o\n                <em>objeto possuído</em>, não com quem possui. Em \"<em>familia\n                tua magna est</em>\", <em>tua</em> é feminino porque\n                <em>familia</em> é feminino.</p>\n                "
      }
    ],
    "vocabulary": {
      "intro": "As palavras novas introduzidas em <em>Cap. II</em>. Aqui aparecem os termos básicos da família romana e as primeiras marcas gramaticais — gênero (masculino, feminino, neutro) e genitivo (caso de posse). Atenção ao par <em>liber</em> (livro) × <em>līberī</em> (filhos): duas palavras distintas que diferem só pelo macron no <em>ī</em>.",
      "groups": [
        {
          "label": "Nōmina · 1ª (-a)",
          "tag": "f.",
          "entries": [
            {
              "lemma": "ancilla, -ae",
              "gloss": "escrava (doméstica)"
            },
            {
              "lemma": "domina, -ae",
              "gloss": "senhora, dona da casa"
            },
            {
              "lemma": "familia, -ae",
              "gloss": "família (toda a casa, incl. escravos)",
              "note": "abrange <i>līberī</i> + <i>servī</i> + <i>ancillae</i>"
            },
            {
              "lemma": "fēmina, -ae",
              "gloss": "mulher"
            },
            {
              "lemma": "fīlia, -ae",
              "gloss": "filha"
            },
            {
              "lemma": "pāgina, -ae",
              "gloss": "página"
            },
            {
              "lemma": "puella, -ae",
              "gloss": "menina"
            }
          ]
        },
        {
          "label": "Nōmina · 2ª (-us, -er, -um)",
          "tag": "m. / n.",
          "entries": [
            {
              "lemma": "dominus, -ī",
              "gloss": "senhor, dono da casa",
              "note": "m."
            },
            {
              "lemma": "fīlius, -ī",
              "gloss": "filho",
              "note": "m."
            },
            {
              "lemma": "servus, -ī",
              "gloss": "escravo",
              "note": "m."
            },
            {
              "lemma": "titulus, -ī",
              "gloss": "título",
              "note": "m."
            },
            {
              "lemma": "puer, puerī",
              "gloss": "menino",
              "note": "m., 2ª em <i>-er</i> — mantém o <i>e</i> em todos os casos"
            },
            {
              "lemma": "vir, virī",
              "gloss": "homem (adulto, marido)",
              "note": "m., decl. sem <i>-us</i>"
            },
            {
              "lemma": "liber, librī",
              "gloss": "livro (em forma de rolo)",
              "note": "m., 2ª em <i>-er</i> — <em>perde</em> o <i>e</i> fora do nōm. sg."
            },
            {
              "lemma": "līberī, -ōrum",
              "gloss": "filhos, crianças (livres)",
              "note": "m. <em>plūrāle tantum</em> — só existe no plural; não confundir com <i>liber</i>"
            }
          ]
        },
        {
          "label": "Nōmina · parentesco (3ª decl.)",
          "tag": "m. / f.",
          "entries": [
            {
              "lemma": "pater, patris",
              "gloss": "pai",
              "note": "m., 3ª decl."
            },
            {
              "lemma": "māter, mātris",
              "gloss": "mãe",
              "note": "f., 3ª decl."
            }
          ]
        },
        {
          "label": "Adiectīva",
          "tag": "-us, -a, -um",
          "entries": [
            {
              "lemma": "antīquus, -a, -um",
              "gloss": "antigo",
              "note": "≠ <i>novus</i>"
            },
            {
              "lemma": "novus, -a, -um",
              "gloss": "novo"
            },
            {
              "lemma": "cēterī, -ae, -a",
              "gloss": "os demais, os outros",
              "note": "usado quase sempre no pl. — origem do nosso <i>et cētera</i>"
            }
          ]
        },
        {
          "label": "Possessīva (1ª/2ª pessoa)",
          "tag": "-us, -a, -um",
          "entries": [
            {
              "lemma": "meus, -a, -um",
              "gloss": "meu, minha"
            },
            {
              "lemma": "tuus, -a, -um",
              "gloss": "teu, tua"
            }
          ]
        },
        {
          "label": "Numerī",
          "tag": "novos do capítulo",
          "entries": [
            {
              "lemma": "duae",
              "gloss": "duas (f.)",
              "note": "fem. de <i>duo</i>"
            },
            {
              "lemma": "tria",
              "gloss": "três (n.)",
              "note": "n. de <i>trēs</i>"
            },
            {
              "lemma": "centum",
              "gloss": "cem (100)",
              "note": "indecl."
            }
          ]
        },
        {
          "label": "Coniūnctiō enclītica",
          "entries": [
            {
              "lemma": "-que",
              "gloss": "e (= <i>et</i>)",
              "note": "enclítica — gruda no fim do último elemento da série"
            }
          ]
        },
        {
          "label": "Vocābula interrogātīva",
          "tag": "pronomes de pergunta",
          "entries": [
            {
              "lemma": "quis?",
              "gloss": "quem? (m. sg.)"
            },
            {
              "lemma": "quae?",
              "gloss": "quem? (f. sg.) / quais? (f. pl. / n. pl.)"
            },
            {
              "lemma": "quī?",
              "gloss": "quem? quais? (m. pl.)"
            },
            {
              "lemma": "cuius?",
              "gloss": "de quem?",
              "note": "invariável no sg. (m./f./n.)"
            },
            {
              "lemma": "quot?",
              "gloss": "quantos? quantas?",
              "note": "invariável"
            }
          ]
        },
        {
          "label": "Verba grammatica",
          "tag": "metalinguagem",
          "entries": [
            {
              "lemma": "masculīnum, -ī",
              "gloss": "masculino (gênero)",
              "note": "< <i>masculus</i>"
            },
            {
              "lemma": "fēminīnum, -ī",
              "gloss": "feminino (gênero)",
              "note": "< <i>fēmina</i>"
            },
            {
              "lemma": "neutrum, -ī",
              "gloss": "neutro (gênero)",
              "note": "= <em>nem</em> m. <em>nem</em> f."
            },
            {
              "lemma": "genetīvus, -ī",
              "gloss": "genitivo (caso de posse)"
            }
          ]
        }
      ]
    }
  }
};

export default chapter;
