import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "v",
  "numeral": "V",
  "title": "Villa et hortus",
  "blurb": "Foco: acusativo e ablativo singular/plural; imperativos; concordância dos adjetivos.",
  "grammarIntro": "Os pontos formais do capítulo: o <em>ablativo</em> (sg. e pl.), o <em>acusativo plural</em>, a tabela completa da concordância dos adjetivos da 1ª/2ª classe, o pronome <em>is, ea, id</em> em todos os gêneros, e o <em>imperativo plural</em>.",
  "exercises": [
    {
      "index": 0,
      "number": 1,
      "title": "Exercitium 1",
      "tag": "terminações nominais e verbais",
      "tip": {
        "text": "Pergunte sempre: o substantivo é <em>sujeito</em> (nom.) ou <em>objeto</em> (acus.)?\n      O verbo concorda com <em>quem</em> faz a ação? Um sujeito → <em>-t</em>; vários → <em>-nt</em>.\n      A coluna lateral do livro mostra os pares <em>-us/-ī, -um/-ōs, -a/-ae, -am/-ās, -um/-a</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Serv{us} abest; dominus serv{um} vocat.",
        "Serv{ī} absunt; dominus serv{ōs} vocat.",
        "Ancill{a} abest; domina ancill{am} vocat.",
        "Ancill{ae} absunt; domina ancill{ās} vocat.",
        "Mārc{us} et Quīnt{us} fīli{ī} Iūliī sunt.",
        "Iūlius nōn ūn{um} fīli{um}, sed duōs fīli{ōs} habet.",
        "Iūlia fīli{a} Iūliī est.",
        "In hortō sunt mult{ae} ros{ae} et mult{a} līli{a}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "terminationes",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m. nōm.",
              "-us",
              "-ī"
            ],
            [
              "m. acc.",
              "-um",
              "-ōs"
            ],
            [
              "f. nōm.",
              "-a",
              "-ae"
            ],
            [
              "f. acc.",
              "-am",
              "-ās"
            ],
            [
              "n. nōm/acc",
              "-um",
              "-a"
            ]
          ]
        },
        {
          "label": "verbum",
          "type": "list",
          "items": [
            "sg. <i>-t</i> · pl. <i>-nt</i>",
            "<i>est / sunt</i> · <i>habet / habent</i>"
          ]
        }
      ],
      "references": [
        "acusativo",
        "concordancia"
      ]
    },
    {
      "index": 200,
      "number": 2,
      "title": "Exercitium 2",
      "tag": "concordância de adjetivos: multus, unus, ūllus, nūllus",
      "tip": {
        "text": "Adjetivos da 1ª–2ª declinação seguem <em>-us, -a, -um</em>: <em>multus / multa / multum</em>. Eles concordam com o substantivo em gênero, número <em>e caso</em> — pista de gênero pela própria terminação do substantivo (<em>-us, -er</em> → m, <em>-a</em> → f, <em>-um</em> → n).",
        "qualifier": null
      },
      "exemplum": "Iūlius nōn ūn{us} fīli{um}, sed du{ōs} fīli{ōs} habet.",
      "questions": [
        "In familiā Iūliī sunt Mārcus et Quīntus, duo fīli{ī} eius.",
        "Iūlius nōn ūn{um:md} fīli{um:md} habet, sed du{ōs:md} fīli{ōs:md}.",
        "Iūlia est ūna fīli{a} Iūliī.",
        "Iūlius nōn duās fīli{ās:md} habet, sed ūn{am:md} fīli{am:md}.",
        "Mēdus est servus quī nummōs su{ōs:md} habet; in sacculō eius decem numm{ī} sunt.",
        "Mēdus ūn{um:md} numm{um:md} nōn habet, sed multōs nummōs habet.",
        "In sacculō Iūliī ūn{us:md} numm{us:md} est? Immo centum numm{ī} sunt.",
        "Iūlius nōn ūn{um:md} numm{um:md} habet, sed mult{ōs:md} numm{ōs:md} habet.",
        "Dāvus bacul{um} habet; in manū eius bacul{um} est.",
        "Mēdus nūll{um:md} verb{um:md} dīcit — tacet.",
        "In hortō sunt mult{ae:md} ros{ae:md} et mult{a:md} līli{a:md}.",
        "Iūlia mult{ās:md} ros{ās:md} et mult{a:md} līli{a:md} videt."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "1ª/2ª decl.",
          "type": "table",
          "headers": [
            "",
            "m. (-us)",
            "f. (-a)",
            "n. (-um)"
          ],
          "rows": [
            [
              "nōm. sg.",
              "-us",
              "-a",
              "-um"
            ],
            [
              "acc. sg.",
              "-um",
              "-am",
              "-um"
            ],
            [
              "nōm. pl.",
              "-ī",
              "-ae",
              "-a"
            ],
            [
              "acc. pl.",
              "-ōs",
              "-ās",
              "-a"
            ]
          ]
        },
        {
          "label": "exempla",
          "type": "words",
          "inline": true,
          "words": [
            "<i>multus, -a, -um</i>",
            "<i>ūnus, -a, -um</i>",
            "<i>nūllus, -a, -um</i>"
          ]
        }
      ],
      "references": [
        "acusativo",
        "concordancia"
      ]
    },
    {
      "index": 201,
      "number": 3,
      "title": "Exercitium 3",
      "tag": "verbo: 3ª pessoa singular vs. plural",
      "tip": {
        "text": "Um sujeito → verbo em <em>-t</em>; vários sujeitos → verbo em <em>-nt</em>. Algumas formas notáveis: <em>est / sunt</em>, <em>habet / habent</em>, <em>amat / amant</em>, <em>dormit / dormiunt</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Iūlius in vīllā habi{tat}.",
        "Pater et māter et tres līberī in vīllā habi{tant}.",
        "Iūlius multōs servōs ha{bet}.",
        "Iūlius et Aemilia tres līberōs ha{bent}.",
        "Iūlius Aemiliam a{mat}; Aemilia quoque virum suum a{mat}.",
        "Pater et māter līberōs suōs a{mant}.",
        "Servī dominum salū{tant}; ancilla quoque dominum salū{tat}.",
        "Aemilia imper{at}; puerī pā{ent}.",
        "Iūlia can{tat}; puerī can{tant} et rī{dent}.",
        "Quīntus dor{mit}.",
        "Servī in cubiculīs dor{miunt}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "indicātīvus",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "3ª p.",
              "-t",
              "-nt"
            ],
            [
              "[1]",
              "-at",
              "-ant"
            ],
            [
              "[2]",
              "-et",
              "-ent"
            ],
            [
              "[3]",
              "-it",
              "-unt"
            ],
            [
              "[4]",
              "-it",
              "-iunt"
            ]
          ]
        },
        {
          "label": "exempla",
          "type": "words",
          "inline": true,
          "words": [
            "<i>est / sunt</i>",
            "<i>habet / habent</i>",
            "<i>amat / amant</i>",
            "<i>dormit / dormiunt</i>"
          ]
        }
      ],
      "references": [
        "concordancia"
      ]
    },
    {
      "index": 1,
      "number": 4,
      "title": "Exercitium 4",
      "tag": "ablativo singular e plural",
      "tip": {
        "text": "Depois de <em>cum, in, ex, ab, sine</em> o substantivo está no <strong>ablativo</strong>.\n      Sg: m/n <span class=\"given\">-ō</span>, f <span class=\"given\">-ā</span>. Pl: <span class=\"given\">-īs</span> (qualquer gênero).\n      Adjetivos concordam: <em>cum magnō hortō, in magnā vīllā</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Iūlius in magn{ā} vīll{ā} habitat cum Aemili{ā} et cum līber{īs} et serv{īs}.",
        "Iūlius et Aemilia cum Mārc{ō} et Quīnt{ō} et Iūli{ā} in vīll{ā} habitant.",
        "Iūlius vīllam cum magn{ō} hort{ō} habet.",
        "In Itali{ā} multae vīllae cum magn{īs} hort{īs} sunt.",
        "In hort{īs} vīllārum sunt rosae.",
        "Iūlius vīllam cum magn{ō} ātri{ō} habet.",
        "In ātri{ō} impluvium est; in impluvi{ō} est aqua.",
        "Mārcus et Quīntus in parv{ō} cubicul{ō} dormiunt."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "ablātīvus",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m / n",
              "-ō",
              "-īs"
            ],
            [
              "f",
              "-ā",
              "-īs"
            ]
          ]
        },
        {
          "label": "cum praep.",
          "type": "list",
          "items": [
            "<i>cum, in, ex, ab, sine</i> + abl."
          ]
        }
      ],
      "references": [
        "ablativo",
        "concordancia"
      ]
    },
    {
      "index": 202,
      "number": 5,
      "title": "Exercitium 5",
      "tag": "ablativo: m/n -ō, f -ā, pl -īs",
      "tip": {
        "text": "Depois de <em>cum, in, ex, ab, sine</em> use ablativo. Pista de gênero: <em>-us/-er</em> → m → abl. <em>-ō</em>; <em>-a</em> → f → abl. <em>-ā</em>; <em>-um</em> → n → abl. <em>-ō</em>. Plural: <em>-īs</em> sempre.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Iūlius habitat in magn{ā} vill{ā} cum Aemili{ā}, cum līber{īs} et cum serv{īs}.",
        "Aemilia in peristyl{ō} est cum Mārc{ō} et Quīnt{ō} et Iūli{ā}, sed sine vir{ō} suō.",
        "Aemilia cum magn{ā} famili{ā} in vīll{ā} est.",
        "In hort{ō} sunt rosae et līlia.",
        "In vīllā Iūliī magnum ātrium est cum impluvi{ō}.",
        "In impluvi{ō} aqua est; ex impluvi{ō} aqua sūmitur.",
        "Mārcus et Quīntus in parv{ō} cubicul{ō} dormiunt.",
        "Aemilia in magn{ō} cubicul{ō} cum vir{ō} dormit.",
        "Servī in cubicul{īs} parv{īs} dormiunt.",
        "Aemilia in peristyl{ō} cum līber{īs} adest, sed sine vir{ō} suō."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "ablātīvus",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m / n",
              "-ō",
              "-īs"
            ],
            [
              "f",
              "-ā",
              "-īs"
            ]
          ]
        },
        {
          "label": "praep. + abl.",
          "type": "words",
          "inline": true,
          "words": [
            "<i>in</i>",
            "<i>cum</i>",
            "<i>ex</i>",
            "<i>ab</i>",
            "<i>sine</i>"
          ]
        }
      ],
      "references": [
        "ablativo"
      ]
    },
    {
      "index": 203,
      "number": 6,
      "title": "Exercitium 6",
      "tag": "pronome <em>is, ea, id</em>",
      "tip": {
        "text": "O pronome <em>is, ea, id</em> retoma um nome já mencionado. Sg: <em>is / ea / id</em> (nōm.), <em>eum / eam / id</em> (acc.), <em>eius</em> (gen.), <em>eō / eā / eō</em> (abl.). Pl: <em>iī / eae / ea</em> (nōm.), <em>eōs / eās / ea</em> (acc.), <em>eōrum / eārum / eōrum</em> (gen.).",
        "qualifier": null
      },
      "exemplum": "Mārcus puer Iūliī est. Pater {eius} (= Mārcī) Iūlius est.",
      "questions": [
        "Aemilia est fēmina; nāsus {eius} est foedus? Nōn — pulcher est.",
        "Iūlius multōs servōs habet. Dominus {eōrum:md} est Iūlius.",
        "Iūlius servum vocat; servus {eum:md} audit dominum.",
        "Iūlius servōs vocat; servī {eōs:md} audiunt dominum.",
        "Iūlia rosam tenet; flōs {eius:md} pulcher est.",
        "Aemilia ancillās habet. Domina {eārum:md} est Aemilia.",
        "Iūlia rosam carpit; māter {eam:md} videt.",
        "Iūlia rosās pulchrās videt et {eās:md} carpit.",
        "In hortō multa līlia sunt; {ea:md} pulchra sunt; Iūlia {ea:md} videt.",
        "Iūlius pater est; vīlla {is|eius:md} (= Iūliī) magna est, et in {eō:md} multī servī habitant."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "is, ea, id",
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
              "is",
              "ea",
              "id"
            ],
            [
              "acc. sg.",
              "eum",
              "eam",
              "id"
            ],
            [
              "gen. sg.",
              "eius",
              "eius",
              "eius"
            ],
            [
              "abl. sg.",
              "eō",
              "eā",
              "eō"
            ]
          ]
        },
        {
          "label": "plural",
          "type": "table",
          "headers": [
            "",
            "m.",
            "f.",
            "n."
          ],
          "rows": [
            [
              "nōm.",
              "iī",
              "eae",
              "ea"
            ],
            [
              "acc.",
              "eōs",
              "eās",
              "ea"
            ],
            [
              "gen.",
              "eōrum",
              "eārum",
              "eōrum"
            ]
          ]
        }
      ],
      "references": []
    },
    {
      "index": 2,
      "number": 7,
      "title": "Exercitium 7",
      "tag": "imperativo singular e plural",
      "tip": {
        "text": "Imperativo singular = tema do verbo (1ª <em>-ā</em>, 2ª <em>-ē</em>, 3ª <em>-e</em>, 4ª <em>-ī</em>);\n      plural acrescenta <em>-te</em> (com vogal ligante <em>-i-</em> na 3ª): <em>vocāte, vidēte, discēdite, audīte</em>.\n      Se o falante dirige-se a <em>uma</em> pessoa, sing.; a <em>várias</em>, plural.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Iūlia ab Aemiliā discēd{it}; puerī nōn discēd{unt}.",
        "Aemilia imperat: “Iūlium voc{āte}, puerī!”",
        "Puerī Iūliam voc{ant}: “Iūlia! Ven{ī}!”",
        "Iūlia eōs nōn aud{it} neque ven{it}.",
        "Iūlia puerōs voc{at}: “Mārce et Quīnte! Ven{īte}!”",
        "Quīntus: “Carp{e} rosās meās, mamma! Vid{ēte}, puerī!”",
        "Iūlia: “Aud{īte}, Mārce et Quīnte!”",
        "Aemilia: “Tac{ēte}, puerī improbī!” Puerī tac{ent}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "imperātīvus",
          "type": "table",
          "headers": [
            "cōn.",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "[1]",
              "-ā",
              "-āte"
            ],
            [
              "[2]",
              "-ē",
              "-ēte"
            ],
            [
              "[3]",
              "-e",
              "-ite"
            ],
            [
              "[4]",
              "-ī",
              "-īte"
            ]
          ]
        },
        {
          "label": "indicātīvus",
          "type": "table",
          "headers": [
            "cōn.",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "[1]",
              "-at",
              "-ant"
            ],
            [
              "[2]",
              "-et",
              "-ent"
            ],
            [
              "[3]",
              "-it",
              "-unt"
            ],
            [
              "[4]",
              "-it",
              "-iunt"
            ]
          ]
        }
      ],
      "references": [
        "imperativo"
      ]
    },
    {
      "index": 204,
      "number": 8,
      "title": "Exercitium 8",
      "tag": "preposições com ablativo: <em>in, cum, ex, ab, sine</em>",
      "tip": {
        "text": "<em>in</em> + abl. = onde (sem movimento); <em>cum</em> = com; <em>ex</em> = de dentro de; <em>ab</em> = de (afastamento, agente); <em>sine</em> = sem. Identifique o substantivo e dê a forma ablativa.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Aemilia est in {peristȳlō:lg} cum {līberīs:md} sine {virō suō:lg}. // peristȳlum, līberī, vir suus",
        "Iūlia in {hortō:lg} est; ab {Aemiliā:md} discēdit. // hortus, Aemilia",
        "Iūlia cum {Aemiliā:md} discēdit; ab {eā:md} videtur. // Aemilia, ea",
        "Iūlia ex {hortō:lg} venit cum {rosīs:md}. // hortus, rosa",
        "Iūlia cum {ūnā rosā:md} ab {iīs|eīs:md} discēdit. // ūna rosa, iī = puerī",
        "Iūlius habitat in {vīllā:lg} cum {impluviō:lg}. // vīlla, impluvium ← n!",
        "Aqua est in {ātriō:md}; ex {impluviō:md} sūmitur et in {aquā:md} pōnitur. // ātrium, impluvium, aqua",
        "Iūlius est in {oppidō:md} cum {servīs:md} sine {Aemiliā:md}. // oppidum, servī, Aemilia"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "abl.",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m/n",
              "-ō",
              "-īs"
            ],
            [
              "f",
              "-ā",
              "-īs"
            ]
          ]
        },
        {
          "label": "praep.",
          "type": "words",
          "inline": true,
          "words": [
            "<i>in</i>",
            "<i>cum</i>",
            "<i>ex</i>",
            "<i>ab</i>",
            "<i>sine</i>"
          ]
        }
      ],
      "references": [
        "ablativo"
      ]
    },
    {
      "index": 3,
      "number": 9,
      "title": "Exercitium 9",
      "tag": "análise gramatical — acusativo sg./pl.",
      "tip": {
        "text": "Sublinhe o final do substantivo, depois decida número (sg/pl) e caso. Pares úteis:\n      <em>servus / servum / servī / servōs</em>; <em>ancilla / ancillam / ancillae / ancillās</em>;\n      <em>cubiculum / cubicula</em> (neutros: nom = acus).",
        "qualifier": null
      },
      "exemplum": "Iūlius nōn ūnum serv<u>um</u>, sed multōs serv<u>ōs</u> habet.",
      "questions": [
        "<em>Servum</em> nōn nōminātīvus, sed {accūsātīvus singulāris:lg} est. <em>Servōs</em> quoque {accūsātīvus plūrālis|accūsātīvus:lg} est.",
        "<em>Servōs</em> nōn accūsātīvus singulāris, sed {accūsātīvus plūrālis:lg} est.",
        "<em>Servum</em> est accūsātīvus {singulāris:md}.",
        "<em>Ancillam</em> accūsātīvus est. <em>Ancillās</em> quoque {accūsātīvus plūrālis|accūsātīvus:lg} est.",
        "<em>Ancillam</em> {accūsātīvus singulāris:lg} est; <em>ancillās</em> est {accūsātīvus plūrālis:lg}.",
        "<em>Cubiculum</em> nōminātīvus et {accūsātīvus singulāris:lg} est. <em>Cubicula</em> quoque {nōminātīvus|nōminātīvus plūrālis:md} et {accūsātīvus plūrālis|accūsātīvus:md} est.",
        "Singulāris: nōminātīvus <em>servus</em>, accūsātīvus serv{um}.",
        "Plūrālis: nōminātīvus <em>servī</em>, accūsātīvus serv{ōs}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "vocābula",
          "type": "words",
          "inline": false,
          "words": [
            "<i>nōminātīvus</i>",
            "<i>accūsātīvus</i>",
            "<i>singulāris</i> (sg.)",
            "<i>plūrālis</i> (pl.)"
          ]
        },
        {
          "label": "paradigma",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m. nōm.",
              "-us",
              "-ī"
            ],
            [
              "m. acc.",
              "-um",
              "-ōs"
            ]
          ]
        }
      ],
      "references": [
        "acusativo"
      ]
    },
    {
      "index": 205,
      "number": 10,
      "title": "Exercitium 10 — léctiō grammatica",
      "tag": "ablativo: nomes/análise",
      "tip": {
        "text": "Aqui você identifica que caso e número uma forma representa. Lembre: o ablativo sg. termina em <em>-ō / -ā / -ō</em>; o pl. em <em>-īs</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "<em>Servō</em> nōn nōminātīvus, sed {ablātīvus singulāris|ablātīvus:lg} est. <em>Servīs</em> quoque {ablātīvus plūrālis|ablātīvus:lg} est.",
        "<em>Servīs</em> nōn ablātīvus singulāris, sed {ablātīvus plūrālis:lg} est.",
        "<em>Servō</em> est ablātīvus {singulāris:md}.",
        "<em>Ancillā</em> ablātīvus est; <em>ancillīs</em> quoque {ablātīvus plūrālis|ablātīvus:lg} est.",
        "<em>Ancillā</em> {ablātīvus singulāris:lg} est; <em>ancillīs</em> est {ablātīvus plūrālis:lg}.",
        "Singulāris: nōminātīvus <em>servus</em>, ablātīvus serv{ō}.",
        "Plūrālis: nōminātīvus <em>servī</em>, ablātīvus serv{īs}.",
        "Singulāris: nōminātīvus <em>ancilla</em>, ablātīvus ancill{ā}.",
        "Plūrālis: nōminātīvus <em>ancillae</em>, ablātīvus ancill{īs}.",
        "Singulāris: nōminātīvus <em>cubiculum</em>, ablātīvus cubicul{ō}.",
        "Plūrālis: nōminātīvus <em>cubicula</em>, ablātīvus cubicul{īs}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "ablātīvus",
          "type": "table",
          "headers": [
            "",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "m. (-us)",
              "-ō",
              "-īs"
            ],
            [
              "f. (-a)",
              "-ā",
              "-īs"
            ],
            [
              "n. (-um)",
              "-ō",
              "-īs"
            ]
          ]
        },
        {
          "label": "vocābula",
          "type": "words",
          "inline": false,
          "words": [
            "<i>ablātīvus</i>",
            "<i>singulāris</i> (sg.)",
            "<i>plūrālis</i> (pl.)"
          ]
        }
      ],
      "references": [
        "ablativo"
      ]
    },
    {
      "index": 206,
      "number": 11,
      "title": "Exercitium 11 — léctiō grammatica",
      "tag": "imperativo plural; indicativo sg./pl.",
      "tip": {
        "text": "Imperativo: sg. termina no tema (<em>-ā/-ē/-e/-ī</em>); pl. acrescenta <em>-te</em> (com vogal ligante na 3ª: <em>-ite</em>). Indicativo 3ª pessoa: sg. <em>-t</em>, pl. <em>-nt</em> (ou <em>-iunt</em>).",
        "qualifier": null
      },
      "exemplum": "<em>tacēte!</em> = imperātīvus plūrālis. <em>tacent</em> = indicātīvus plūrālis.",
      "questions": [
        "<em>Cantāte!</em> nōn imperātīvus singulāris, sed {imperātīvus plūrālis:xl} est.",
        "<em>Tace!</em> nōn imperātīvus plūrālis, sed imperātīvus {singulāris|imperātīvus singulāris:lg} est.",
        "<em>Audī!</em> est {imperātīvus singulāris:xl}. <em>Audīte!</em> est {imperātīvus plūrālis:xl}.",
        "<em>Cantat</em> est {indicātīvus singulāris:xl}. <em>Cantant</em> est {indicātīvus plūrālis:xl}.",
        "Imperātīvus sg. de <em>tacēre</em>: ta{cē}. De <em>agere</em>: a{e}. De <em>audīre</em>: aud{ī}.",
        "Imperātīvus pl. de <em>cantāre</em>: cant{āte:md}. De <em>tacēre</em>: tac{ēte:md}. De <em>agere</em>: ag{ite:md}. De <em>audīre</em>: aud{īte:md}.",
        "Indicātīvus sg. de <em>tacēre</em>: tac{et}. De <em>agere</em>: ag{it}. De <em>audīre</em>: aud{it}.",
        "Indicātīvus pl. de <em>cantāre</em>: cant{ant:md}. De <em>tacēre</em>: tac{ent:md}. De <em>agere</em>: ag{unt:md}. De <em>audīre</em>: aud{iunt:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "imperātīvus",
          "type": "table",
          "headers": [
            "cōn.",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "[1] vocā-",
              "-ā",
              "-āte"
            ],
            [
              "[2] vidē-",
              "-ē",
              "-ēte"
            ],
            [
              "[3] discēd-",
              "-e",
              "-ite"
            ],
            [
              "[4] audī-",
              "-ī",
              "-īte"
            ]
          ]
        },
        {
          "label": "indicātīvus",
          "type": "table",
          "headers": [
            "cōn.",
            "sg.",
            "pl."
          ],
          "rows": [
            [
              "[1]",
              "-at",
              "-ant"
            ],
            [
              "[2]",
              "-et",
              "-ent"
            ],
            [
              "[3]",
              "-it",
              "-unt"
            ],
            [
              "[4]",
              "-it",
              "-iunt"
            ]
          ]
        }
      ],
      "references": [
        "imperativo"
      ]
    }
  ]
};

export default chapter;
