import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "ii",
  "numeral": "II",
  "title": "Familia Romana",
  "blurb": "Foco: <em>gênero gramatical</em> (masc. <em>-us</em>, fem. <em>-a</em>, neutro <em>-um</em>); o caso <em>genitivo</em> singular e plural; os interrogativos <em>quis? quae? quid? quī? cuius? quot?</em>; possessivos <em>meus, tuus</em>.",
  "grammarIntro": "Os pontos formais do capítulo: o conceito de <em>gênero</em> (masculino, feminino, neutro) e o <em>genitivo</em>, caso que indica posse e pertencimento — singular e plural — em todos os três gêneros.",
  "vocabularyIntro": "As palavras novas introduzidas em <em>Cap. II</em>. Aqui aparecem os termos básicos da família romana e as primeiras marcas gramaticais — gênero (masculino, feminino, neutro) e genitivo (caso de posse). Atenção ao par <em>liber</em> (livro) × <em>līberī</em> (filhos): duas palavras distintas que diferem só pelo macron no <em>ī</em>.",
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
        "Iūlia est {puella:md} Rōmāna. // menina",
        "Aemilia est {fēmina:md} Rōmāna. // mulher",
        "Mārcus est {puer:md} Rōmānus. // menino",
        "Mārcus et Quīntus sunt {puerī:md} Rōmānī. // pl.",
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
        "Aemilia est {māter:md} Mārcī. // mãe",
        "Mārcus et Quīntus sunt {fīliī:md} Iūliī. // filhos",
        "Mārcus, Quīntus et Iūlia sunt {līberī:md} Iūliī et Aemiliae. // crianças",
        "Iūlia est {fīlia:md} Iūliī. // filha",
        "Mārcus est {fīlius:md} Iūliī. // filho",
        "Iūlius est pater {Mārcī:md}. // de Mārcus",
        "Iūlius est pater {Quīntī:md}. // de Quīntus",
        "Aemilia est māter {Iūliae:md}. // de Iūlia",
        "Iūlius est pater {Mārcī:md} et {Quīntī:md}. // de M. e Q.",
        "Aemilia est māter {Iūliae:md}. // de Iūlia",
        "Mārcus est fīlius {Iūliī:md} et {Aemiliae:md}. // de I. e A.",
        "Aemilia est māter {Mārcī:md}, {Quīntī:md} et {Iūliae:md}. // três crianças",
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
        "{quis:md} est Mārcus? — Mārcus puer Rōmānus est. // quem? m. sg.",
        "{quis:md} est pater Mārcī? — Iūlius est pater Mārcī.",
        "{quae:md} est māter Mārcī? — Aemilia est māter Mārcī. // quem? f. sg.",
        "{quae:md} est Iūlia? — Iūlia est puella Rōmāna.",
        "{quī:md} sunt fīliī Iūliī? — Mārcus et Quīntus sunt fīliī Iūliī. // quem? m. pl.",
        "{quid:md} est m? — m littera est. // o quê? n.",
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
        "Litterae et numerī → {litterae numerīque:xl}. // usando -que",
        "Mārcus et Quīntus → {Mārcus Quīntusque:xl}.",
        "Puerī et puellae → {puerī puellaeque:xl}.",
        "Fēminae et puerī → {fēminae et puerī:xl}. // forma com et",
        "Servī et ancillae → {servī et ancillae:xl}. // com et",
        "Ūna fīlia et duo fīliī → {ūna fīlia et duo fīliī:xxl}. // natural com et"
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
        "Mēdus nōn fīlius Iūliī est, sed {servus:md} Iūliī. // escravo",
        "Dēlia est {ancilla:md} Aemiliae. // escrava",
        "Iūlius est {dominus:md} Mēdī; Aemilia est {domina:md} Dēliae. // senhor; senhora",
        "Mēdus et Dāvus sunt duo {servī:md}. // pl. masc.",
        "Dēlia et Syra sunt duae {ancillae:md}. // pl. fem.",
        "In familiā Iūliī sunt multī {servī:md}. // escravos",
        "Iūlius est dominus {servōrum:md}. // gen. pl.: dos escravos",
        "Aemilia est domina {ancillae:md}. // gen. sg. fem.: da escrava",
        "Aemilia est domina {ancillārum:md}. // gen. pl.: das escravas",
        "Mārcus, Quīntus, Iūlia sunt {līberī:md} Iūliī et Aemiliae. // crianças",
        "Iūlius est dominus {servōrum:md} et pater {līberōrum:md}. // gen. pl. m.: servōrum; gen. pl. m.: līberōrum"
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
        "Iūlius est dominus {multōrum servōrum:xl}. // de muitos escravos",
        "Numerus {servōrum:md} magnus est. // dos escravos",
        "Aemilia est domina {multārum ancillārum:xl}. // de muitas escravas",
        "In familiā Iūliī magnus est numerus {servōrum:md} et {ancillārum:md}. // escravos, escravas",
        "Iūlius pater est, sed nōn pater {servōrum:md} et {ancillārum:md}. // escravos/escravas — gen. pl.",
        "Iūlius pater est {līberōrum:md}. // das crianças",
        "Aemilia māter est {līberōrum:md}.",
        "In Graeciā magnus numerus {īnsulārum:md}. // de ilhas",
        "In Galliā magnus numerus {fluviōrum:md}. // de rios",
        "In Italiā magnus numerus {oppidōrum:md}. // de cidades"
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
        "In Graeciā sunt multae īnsulae → {magnus numerus īnsulārum:xxl}. // magnus numerus + gen.",
        "In Africā sunt paucī fluviī → {parvus numerus fluviōrum:xxl}.",
        "In Italiā sunt multa oppida → {magnus numerus oppidōrum:xxl}.",
        "In familiā Iūliī sunt paucī līberī → {parvus numerus līberōrum:xxl}.",
        "{multa:md} {vocābula:md} in capitulō II sunt. // multa vocabula nova",
        "{multae:md} {litterae:md} Latīnae sunt. // multae litterae",
        "{pauca:md} {exempla:md} in pāginā prīmā sunt. // pauca exempla"
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
        "Iūlius habet {duo:md} fīliōs: Mārcum et Quīntum. // numeral m. pl.",
        "Iūlius habet {duae:md} ancillās: Dēliam et Syram. // numeral f. pl.",
        "In Italiā sunt {duo:md} oppida — Tūsculum, Brundisium, Ostia. // numeral n. pl. = 2",
        "{Quot:md} līberī sunt in familiā? — {trēs:md} (III) līberī.",
        "Sunt {duae:md} fīliae et {ūna:md} fīlia? Immo, ūna fīlia tantum.",
        "{ūnus:md} vir est Mēdus, sed {duo:md} virī sunt Mēdus et Dāvus. // numeral m.: 1, 2",
        "{tria:md} oppida: Sparta, Delphī, Tūsculum. // numeral n. pl. = 3",
        "{trēs:md} fīliī Iūliī, {duo:md} ancillae Aemiliae, sed {ūnus:md} fīlia tantum. // 3 m., 2 f., 1 f.",
        "{tria:md} oppida, {duo:md} fluviī... immo {ūnum:md} oppidum tantum. // 3 n., 2 m., 1 n.",
        "Iūliō sunt {trēs:md} līberī: duo fīliī et {duae:md} fīlia. — itaque {ūna:md} fīlia tantum.",
        "{Quot:md} servī Iūliō? — {mīlle:md} (M) servī. // numeral indeclinável"
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
        "Cornēlius interrogat: 'Quot servī sunt in familiā {tuā:md}?' // possessivo m. sg.: tua",
        "Iūlius respondet: 'In familiā {meā:md} centum servī sunt.'",
        "Cornēlius: 'Familia {tua:md} magna est!' // tua = f. sg.",
        "Iūlius: 'Familia {mea:md} nōn parva est.'",
        "Iūlius: 'Litterae {tuae:md} clārae sunt.' // tuas — f. pl.",
        "Cornēlius: 'Litterae {meae:md} obscūrae sunt.' // meas — f. pl.",
        "Cornēlius: 'Liber {tuus:md} antīquus est, Iūlī.' // masc.: tuus",
        "Iūlius: 'Liber {meus:md} novus est.'",
        "Cornēlius: 'Vocābula {tua:md} pulchra sunt.' // tuas n. pl.",
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
        "{Ecce:md}, duo {librī:md}! Ūnus liber {antīquus:md} est, alter liber {novus:md} est. // ecce; livros; antigo; novo",
        "Numerus {librōrum:md} parvus est, sed magnus est numerus pāginārum.",
        "{Titulus:md} {librī:md} est «Lingua Latīna».",
        "In librō sunt multae {pāginae:md} et multa {capitula:md} et cētera.",
        "Numerus {capitulōrum:md} magnus est. // gen. pl.: dos capítulos",
        "{Capitulum:md} secundum est dē familiā Rōmānā.",
        "In paginā prīmā {capitulī:md} secundī multa vocābula nova sunt.",
        "In librō sunt {multa:md} {vocābula:md}.",
        "Numerus {vocābulōrum:md} magnus est. // gen. pl.: dos vocábulos",
        "ECCE, {multa:md} {vocābula:md} sunt in pāginā prīmā {capitulī:md} {prīmī:md}.",
        "<em>familia</em> est exemplum {vocābulī:md}. // gen. sg.: do vocábulo"
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
  ]
};

export default chapter;
