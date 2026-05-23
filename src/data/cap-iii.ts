import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "iii",
  "numeral": "III",
  "title": "Puer improbus",
  "blurb": "Foco: distinção entre nominativo e acusativo; verbos em -t/-nt; pronomes pessoais <em>mē / tē / eum / eam</em>; relativo <em>quī, quae, quem, quam</em>; conjunções <em>quia</em> e <em>neque</em>.",
  "exercises": [
    {
      "index": 0,
      "number": 1,
      "title": "Exercitium 1",
      "tag": "léxico: cenas, personagens, ações",
      "tip": {
        "text": "Cada capítulo de Ørberg começa numa <em>scaena</em> (cena) com <em>personae</em> (personagens). Os verbos aqui são todos da família de ações cotidianas: <em>cantāre, plōrāre, rīdēre, vidēre, vocāre, venīre, pulsāre</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Capitulum tertium incipit nova {scaenā:md}, in quā tres {personae:md} agunt: Iūlia, Mārcus, Quīntus.",
        "Iūlia {cantat:md}: 'Lalla'. Iūlia {laeta:md} est.",
        "Mārcus {īrātus:md} est: 'St!'",
        "Mārcus Iūliam {pulsat:md}.",
        "{iam:md} Iūlia nōn cantat, sed {plōrat:md}: 'Uhuhū!'",
        "Mārcus {rīdet:md}: 'Hahahae!'",
        "Quīntus Mārcum {videt:md} et īrātus est.",
        "Iūlia Aemiliam {vocat:md}: 'Mamma!'",
        "Aemilia {venit:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "verba",
          "type": "words",
          "inline": false,
          "words": [
            "<i>cantāre</i> — cantar",
            "<i>pulsāre</i> — bater",
            "<i>plōrāre</i> — chorar",
            "<i>rīdēre</i> — rir",
            "<i>vidēre</i> — ver",
            "<i>vocāre</i> — chamar",
            "<i>venīre</i> — vir"
          ]
        },
        {
          "label": "scaena",
          "type": "words",
          "inline": true,
          "words": [
            "<i>scaena</i>",
            "<i>persona</i>",
            "<i>laetus / īrātus</i>"
          ]
        }
      ],
      "references": []
    },
    {
      "index": 1,
      "number": 2,
      "title": "Exercitium 2",
      "tag": "acusativo de nomes próprios e <em>mē</em>",
      "tip": {
        "text": "Quem <em>recebe</em> a ação do verbo vai no <em>acusativo</em>: <em>-am</em> (feminino: <em>Iūliam, Aemiliam, puellam</em>) e <em>-um</em> (masculino: <em>Mārcum, Quīntum</em>). O pronome <em>ego</em> tem acusativo <em>mē</em>.",
        "qualifier": null
      },
      "exemplum": "Mārcus {Iūliam} pulsat. (Iūlia → objeto → Iūliam)",
      "questions": [
        "Mārcus {Iūliam:md} pulsat.",
        "Iūlia {Quīntum:md} et {Mārcum:md} vocat.",
        "Mārcus parvam {puellam:md} pulsat — fū!",
        "Iūlia {Mārcum:md} et {Quīntum:md} vocat: 'Mārce! Quīnte!'",
        "Aemilia {Aemiliam:md} interrogat: 'Cur Iūlia plōrat?'",
        "Iūlius {Aemiliam:md} interrogat: 'Cur Mārcus plōrat?'",
        "Iūlius {Iūliam:md} videt: 'Ecce fīlia mea probba!'",
        "Iūlia: 'Mārcus {mē:md} pulsat!' <em>(pronome 1ª p.)</em>"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "acusativo",
          "type": "table",
          "headers": [
            "",
            "nōm.",
            "acus."
          ],
          "rows": [
            [
              "fem. (-a)",
              "Iūlia",
              "Iūliam"
            ],
            [
              "masc. (-us)",
              "Mārcus",
              "Mārcum"
            ],
            [
              "1ª pess.",
              "ego",
              "mē"
            ],
            [
              "2ª pess.",
              "tū",
              "tē"
            ]
          ]
        }
      ],
      "references": [
        "nominativo-acusativo"
      ]
    },
    {
      "index": 2,
      "number": 3,
      "title": "Exercitium 3",
      "tag": "verbos no contexto: <em>cantat, pulsat, plōrat, rīdet, videt, vocat, venit</em>",
      "tip": {
        "text": "Identifique o verbo certo pelo sentido da frase: Iūlia <em>cantat</em>; Mārcus <em>pulsat / rīdet</em>; Iūlia <em>plōrat</em>; Aemilia <em>venit / vocat / interrogat / respondet</em>; Iūlius <em>dormit / audit</em>; Mater Mārcum <em>verberat</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Iūlia {cantat:md}: 'Lalla'. Mārcus eam {pulsat:md}.",
        "Iūlia nōn {cantat:md}, sed {plōrat:md}: 'Uhuhū!'",
        "Quīntus Mārcum {videt:md} et Mārcum {vocat:md}: 'Mārce!'",
        "Aemilia {venit:md} et Quīntum {interrogat:md}: 'Cur Iūlia plōrat?'",
        "Quīntus {respondet:md}: 'Iūlia plōrat quia Mārcus eam pulsat.' Iūlius {dormit:md}.",
        "Aemilia Iūlium {vocat:md}: 'Pater!'",
        "Iūlius {dormit:md} et Quīntum nōn {audit:md}.",
        "Mārcus {rīdet:md} et pater {venit:md}.",
        "Iūlius puerum improbum {verberat:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "verba 3ª p. sg.",
          "type": "words",
          "inline": false,
          "words": [
            "<i>cantat</i> · <i>pulsat</i> · <i>plōrat</i>",
            "<i>rīdet</i> · <i>videt</i> · <i>respondet</i>",
            "<i>vocat</i> · <i>interrogat</i> · <i>verberat</i>",
            "<i>venit</i> · <i>dormit</i> · <i>audit</i>"
          ]
        }
      ],
      "references": []
    },
    {
      "index": 3,
      "number": 4,
      "title": "Exercitium 4",
      "tag": "diálogo: pergunta/resposta",
      "tip": {
        "text": "Aemilia <em>interrogat</em> (pergunta); Quīntus <em>respondet</em> (responde). Use o pronome <em>te</em> (=tu) quando alguém pergunta 'quem te chama?' e <em>eam</em> (=ela) para 'porque ele a bate'. Atenção: <em>quia</em> = porque (conjunção causal); <em>cur?</em> = por quê?; <em>neque</em> = e não.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Aemilia {interrogat:md}: 'Quis mē vocat?'",
        "Quīntus {respondet:md}: 'Iūlia {tē:md} vocat.'",
        "Aemilia Quīntum {interrogat:md}: '{cur:md} Iūlia plōrat?'",
        "Quīntus {respondet:md}: 'Iūlia plōrat, {quia:md} Mārcus {eam:md} pulsat.'",
        "Aemilia: 'Mārcus puer probus nōn est; Mārcus est puer {improbus:md}!'",
        "Aemilia: 'Ubi est Iūlius? Cur nōn venit?' — Mārcus: 'Pater nōn {hīc:md} est, sed Mārcus {hīc:md} est.'",
        "Quīntus Iūlium vocat. Cur Iūlius {eum:md} nōn audit? — Iūlius {audit:md} nōn audit, quia dormit.",
        "Iūlius nōn audit, quia {dormit:md}.",
        "Mārcus rīdet, {neque:md} pater dormit. <em>(e-não)</em>",
        "Aemilia īrāta est. Māter fīlium {verberat:md}: tuxtax, tuxtax.",
        "Iūlius eum {audit:md}; iam nōn {dormit:md} pater.",
        "Iūlia nōn rīdet; Iūlia puella {proba:md} est."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "vocab.",
          "type": "words",
          "inline": false,
          "words": [
            "<i>interrogāre</i> ↔ <i>respondēre</i>",
            "<i>cūr?</i> — <i>quia</i>",
            "<i>neque</i> = et nōn",
            "<i>improbus</i> ↔ <i>probus</i>"
          ]
        }
      ],
      "references": []
    },
    {
      "index": 4,
      "number": 5,
      "title": "Exercitium 5",
      "tag": "completar oração causal: <em>… quia …</em>",
      "tip": {
        "text": "Para cada situação, complete com uma oração causal iniciada por <em>quia</em> (porque). A resposta esperada é a frase exata do contexto do capítulo. Atenção à concordância (sing./pl., nom./acc., m./f.).",
        "qualifier": null
      },
      "exemplum": "Mārcus īrātus est, <em>quia Iūlia cantat</em>.",
      "questions": [
        "Mārcus īrātus est, …{quia Iūlia cantat:xxl}",
        "Iūlia plōrat, …{quia Mārcus eam pulsat:xxl}",
        "Aemilia venit, …{quia Iūlia plōrat:xxl}",
        "Mārcus Iūliam pulsat, …{quia parva puella est:xxl}",
        "Aemilia Iūliam audit, …{quia Iūlia eam vocat:xxl}",
        "Iūlius Quīntum nōn audit, …{quia dormit:xxl}",
        "Aemilia Mārcum verberat, …{quia puer improbus est:xxl}",
        "Mārcus plōrat, …{quia māter eum verberat:xxl}",
        "Iūlius venit, …{quia Mārcum audit:xxl}"
      ],
      "phraseMode": true,
      "auxilia": [
        {
          "label": "conjunção",
          "type": "list",
          "items": [
            "<i>quia</i> = porque (causa)",
            "responde a <i>cūr?</i>"
          ]
        }
      ],
      "references": []
    },
    {
      "index": 5,
      "number": 6,
      "title": "Exercitium 6",
      "tag": "analisar sujeito, objeto e atributo",
      "tip": {
        "text": "Em cada frase identifique <em>quem age</em> (nominativo) e <em>quem recebe a ação</em> (acusativo). Para os pronomes pessoais: <em>me / te / eum / eam</em>.",
        "qualifier": null
      },
      "exemplum": "Mārcus Iūliam pulsat. Iūlia plōrat.",
      "questions": [
        "{Mārcus:md} {Iūliam:md} pulsat. {Iūlia:md} plōrat.",
        "{Iūlia:md} cantat. Mārcus {eam:md} pulsat.",
        "Mārcus {Aemiliam:md} vocat. {Aemilia:md} venit.",
        "{Aemilia:md} {Quīntum:md} interrogat: 'Cur Iūlia plōrat?' — Quīntus respondet: 'Mārcus {eum:md} pulsat. Mārcus {mē:md} pulsat.'",
        "{Quīntus:md}: 'Pater dormit.' {Iūlia:md}: 'Mater nōn tē, sed {tē:md} interrogat.'",
        "{Aemilia:md} {Iūlium:md} (= Iūlium) nōn videt.",
        "{Quīntus:md} {Iūlium:md} vocat: 'Pater!'",
        "{Iūlius:md} {Quīntum:md} nōn audit, quia dormit.",
        "{Aemilia:md} {Mārcum:md} verberat.",
        "{Mārcus:md} rīdet, et {Aemilia:md} {eum:md} verberat.",
        "{Iūlius:md} {Mārcum:md} verberat (= o pai açoita o filho).",
        "Iūlius {Aemiliam:md}, {Mārcum:md}, {Quīntum:md} et {Iūliam:md} videt.",
        "{Mārcus:md} puer {improbus:md} est. <em>(Mārcus → improbus)</em>",
        "{Mārcus:md} {parvam puellam:md} pulsat. <em>(Mārcus → parvam puellam)</em>",
        "{Iūlius:md} {īrātus:md} {puerum improbum:md} verberat. <em>(Iūlius → puerum improbum, nom. íratus)</em>",
        "{Iūlia:md} est puella {proba:md}. <em>(Iūlia → proba)</em>"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "pronomes pessoais",
          "type": "table",
          "headers": [
            "pessoa",
            "nōm.",
            "acus."
          ],
          "rows": [
            [
              "1ª",
              "ego",
              "mē"
            ],
            [
              "2ª",
              "tū",
              "tē"
            ],
            [
              "3ª m.",
              "is",
              "eum"
            ],
            [
              "3ª f.",
              "ea",
              "eam"
            ]
          ]
        }
      ],
      "references": [
        "nominativo-acusativo",
        "pronomes-pessoais"
      ]
    },
    {
      "index": 6,
      "number": 7,
      "title": "Exercitium 7",
      "tag": "relativo <em>quī / quae / quem / quam</em>",
      "tip": {
        "text": "O relativo concorda em gênero e número com o antecedente. O <em>caso</em> vem da função dentro da subordinada. Masc.: <em>quī</em> (nōm.) / <em>quem</em> (acus.). Fem.: <em>quae</em> (nōm.) / <em>quam</em> (acus.).",
        "qualifier": null
      },
      "exemplum": "Puer {quī} rīdet est Mārcus. Puella {quam} Mārcus pulsat est Iūlia.",
      "questions": [
        "Puella {quae} plōrat est Iūlia.",
        "Puer {quī} pulsat est Mārcus.",
        "Puella {quae} cantat est Iūlia.",
        "Puer {quī} rīdet est Mārcus.",
        "Puella {quam} Mārcus pulsat est Iūlia.",
        "Puer {quem} Iūlia vocat est Mārcus? — nōn, sed Iūlius!",
        "Puella {quae} Aemiliam vocat est Iūlia.",
        "Puella {quam} māter vocat est Iūlia.",
        "Puella {quae} venit est Aemilia.",
        "Puer {quem} māter verberat est Mārcus.",
        "Puer {quī} venit est Iūlius.",
        "Puer {quem} Aemilia verberat est Mārcus.",
        "Puer {quem} Iūlius verberat est Mārcus.",
        "Puer {quī} parvam puellam pulsat improbus est.",
        "Puer {quem} pater verberat plōrat."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "relativo (sing.)",
          "type": "table",
          "headers": [
            "",
            "m.",
            "f."
          ],
          "rows": [
            [
              "nōm.",
              "quī",
              "quae"
            ],
            [
              "acc.",
              "quem",
              "quam"
            ]
          ]
        },
        {
          "label": "regra",
          "type": "list",
          "items": [
            "gênero+número ← antecedente",
            "caso ← função na relativa"
          ]
        }
      ],
      "references": [
        "relativo-intro-iii"
      ]
    },
    {
      "index": 7,
      "number": 9,
      "title": "Exercitium 9",
      "tag": "interrogativo <em>quis?</em> (nōm.) vs <em>quem?</em> (acus.)",
      "tip": {
        "text": "Para perguntar sobre o <em>sujeito</em>, use <em>quis?</em> (quem [age]?). Para perguntar sobre o <em>objeto</em>, use <em>quem?</em> (quem [recebe a ação]?). Notar que em latim os dois interrogativos só diferem na terminação — não como em português.",
        "qualifier": null
      },
      "exemplum": "<u>Quis</u> Iūliam pulsat? — Mārcus. / <u>Quem</u> pulsat Mārcus? — Iūliam.",
      "questions": [
        "{quis:md} Iūliam pulsat? — Mārcus.",
        "{quis:md} Aemiliam vocat? — Iūlia.",
        "{quem:md} vocat Iūlia? — Aemiliam.",
        "{quis:md} Iūlium vocat? — Quīntus.",
        "{quem:md} vocat Quīntus? — Iūlium.",
        "{quis:md} venit? — Aemilia.",
        "{quem:md} videt Iūlius? — Quīntum.",
        "{quem:md} verberat Aemilia? — Mārcum."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "interrogativos",
          "type": "table",
          "headers": [
            "",
            "m./f."
          ],
          "rows": [
            [
              "nōm.",
              "quis?"
            ],
            [
              "acc.",
              "quem?"
            ]
          ]
        }
      ],
      "references": [
        "nominativo-acusativo"
      ]
    },
    {
      "index": 8,
      "number": 10,
      "title": "Exercitium 10 — léctiō grammatica",
      "tag": "análise: nominativo e acusativo",
      "tip": {
        "text": "Aqui você identifica o caso (nominativo ou acusativo) de cada palavra. Depois, dê a forma correta para preencher.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Em <em>Mārcus Iūliam pulsat</em>: <em>Iūliam</em> é {accūsātīvus:lg}.",
        "Em <em>Mārcus Iūliam pulsat</em>: <em>Mārcus</em> é {nōminātīvus:lg}.",
        "Em <em>Aemilia venit</em>: <em>Aemilia</em> é {nōminātīvus:lg}; em <em>māter Aemiliam vocat</em>: <em>Aemiliam</em> é {accūsātīvus:lg}.",
        "Em <em>Mārcus Iūliam pulsat</em>, <em>Iūliam</em> é {accūsātīvus:md} e <em>Mārcus</em> é {nōminātīvus:md}.",
        "Forma acusativa de <em>Mārcus</em>: {Mārcum:md}.",
        "Forma acusativa de <em>Aemilia</em>: {Aemiliam:md}.",
        "Forma nominativa de <em>Iūlium</em>: {Iūlius:md}.",
        "Forma nominativa de <em>Iūliam</em>: {Iūlia:md}.",
        "Forma acusativa de <em>puer improbus</em>: {puerum improbum:lg}.",
        "Forma acusativa de <em>parva puella</em>: {parvam puellam:lg}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "casos",
          "type": "table",
          "headers": [
            "",
            "nōm.",
            "acus."
          ],
          "rows": [
            [
              "m. (-us)",
              "Mārcus",
              "Mārcum"
            ],
            [
              "f. (-a)",
              "Iūlia",
              "Iūliam"
            ],
            [
              "adj.+subst. m.",
              "puer improbus",
              "puerum improbum"
            ],
            [
              "adj.+subst. f.",
              "parva puella",
              "parvam puellam"
            ]
          ]
        }
      ],
      "references": [
        "nominativo-acusativo"
      ]
    }
  ],
  "content": {
    "topics": [
      {
        "id": "nominativo-acusativo",
        "title": "Nominativo e acusativo: o caso do sujeito e do objeto",
        "bookRef": "Cap. III, ll. 1–95; gramm. ll. 96–120",
        "body": "\n                <p>Em latim, a função de uma palavra na frase não depende da\n                <em>ordem</em>, mas da <em>terminação</em>. As duas funções fundamentais\n                introduzidas aqui são:</p>\n                <ul>\n                  <li><strong>nōminātīvus</strong> — caso do <em>sujeito</em>,\n                  responde a <em>quis?</em> (quem? para masc./fem.) ou\n                  <em>quid?</em> (que? para coisas).</li>\n                  <li><strong>accūsātīvus</strong> — caso do <em>objeto direto</em>,\n                  responde a <em>quem?</em> (acus.) ou <em>quid?</em>.</li>\n                </ul>\n                <table class=\"mini-paradigm\">\n                  <tr><th></th><th>nōm.</th><th>acus.</th></tr>\n                  <tr><td>fem. (-a)</td><td>Iūlia</td><td>Iūliam</td></tr>\n                  <tr><td>masc. (-us)</td><td>Mārcus</td><td>Mārcum</td></tr>\n                  <tr><td>masc. (-er)</td><td>puer</td><td>puerum</td></tr>\n                </table>\n                <p>Como a ordem é flexível, <em>Mārcus Iūliam pulsat</em>,\n                <em>Iūliam Mārcus pulsat</em> e <em>pulsat Mārcus Iūliam</em>\n                significam exatamente a mesma coisa: é a terminação <em>-am</em>\n                que mostra que Iūlia é objeto.</p>\n                <div class=\"ex-block\">\n                  Mārcus (nōm.) Iūliam (acus.) pulsat — <em>Marco bate na Júlia</em>.<br>\n                  Iūlia (nōm.) plōrat — <em>Júlia chora</em>.<br>\n                  Puer quī parvam puellam pulsat improbus est. — <em>O menino que\n                  bate na menininha é mau.</em>\n                </div>\n                "
      },
      {
        "id": "pronomes-pessoais",
        "title": "Pronomes pessoais: mē, tē, eum, eam",
        "bookRef": "Cap. III, ll. 16–80",
        "body": "\n                <p>O capítulo introduz quatro pronomes pessoais — todos no acusativo,\n                pois aparecem como <em>objeto</em>:</p>\n                <table class=\"mini-paradigm\">\n                  <tr><th>pessoa</th><th>nōm.</th><th>acus.</th><th>tradução</th></tr>\n                  <tr><td>1ª sg.</td><td>ego</td><td>mē</td><td>me</td></tr>\n                  <tr><td>2ª sg.</td><td>tū</td><td>tē</td><td>te</td></tr>\n                  <tr><td>3ª sg. m.</td><td>is</td><td>eum</td><td>o (ele)</td></tr>\n                  <tr><td>3ª sg. f.</td><td>ea</td><td>eam</td><td>a (ela)</td></tr>\n                </table>\n                <p>Os pronomes <em>nōminātīvī</em> (ego, tū, is, ea) só aparecem quando\n                há ênfase ou contraste; normalmente o sujeito vem só pelo verbo:\n                <em>cantat</em> = ela canta; <em>cantās</em> = tu cantas.</p>\n                <div class=\"ex-block\">\n                  Iūlia Aemiliam vocat: 'Mārcus <strong>mē</strong> pulsat!'\n                  Aemilia Quīntum interrogat: 'Quis <strong>mē</strong> vocat?'<br>\n                  Quīntus respondet: 'Iūlia <strong>tē</strong> vocat.'<br>\n                  Iūlius dormit: <strong>eum</strong> Quīntus vocat;\n                  Mārcus rīdet quia pater <strong>eum</strong> nōn audit.\n                </div>\n                "
      },
      {
        "id": "relativo-intro-iii",
        "title": "Pronome relativo: quī, quae, quem, quam",
        "bookRef": "Cap. III, ll. 69–95",
        "body": "\n                <p>O <em>relativo</em> introduz uma oração subordinada que descreve\n                um nome anterior (o <strong>antecedente</strong>). Sua forma depende\n                de duas coisas:</p>\n                <ol>\n                  <li><strong>gênero e número</strong> — herdados do antecedente;</li>\n                  <li><strong>caso</strong> — vem da função do relativo\n                  <em>dentro da subordinada</em>.</li>\n                </ol>\n                <table class=\"mini-paradigm\">\n                  <tr><th></th><th>m. sg.</th><th>f. sg.</th></tr>\n                  <tr><td>nōm.</td><td>quī</td><td>quae</td></tr>\n                  <tr><td>acus.</td><td>quem</td><td>quam</td></tr>\n                </table>\n                <div class=\"ex-block\">\n                  Puer <strong>quī</strong> rīdet est Mārcus. — <em>O menino que ri é\n                  Marco.</em> (<em>quī</em>: m. sg., sujeito de <em>rīdet</em>)<br>\n                  Puella <strong>quam</strong> Mārcus pulsat est Iūlia. —\n                  <em>A menina que Marco bate é Júlia.</em> (<em>quam</em>: f. sg.,\n                  objeto de <em>pulsat</em>)<br>\n                  Puer <strong>quem</strong> māter verberat est Mārcus. — <em>O menino\n                  que a mãe açoita é Marco.</em>\n                </div>\n                <p>O paradigma completo (com neutro e plural) virá nos próximos capítulos.</p>\n                "
      },
      {
        "id": "conjuncoes-iii",
        "title": "Conjunções e advérbios: cūr, quia, neque, iam, hīc",
        "bookRef": "Cap. III (transversal)",
        "body": "\n                <p>Cap. III introduz palavras de conexão importantes:</p>\n                <ul>\n                  <li><strong>cūr?</strong> — por quê? (interrogativo de causa)</li>\n                  <li><strong>quia</strong> — porque (conjunção causal, a resposta)</li>\n                  <li><strong>neque</strong> = <em>et nōn</em> — e não / nem</li>\n                  <li><strong>iam</strong> — já, agora</li>\n                  <li><strong>hīc</strong> — aqui (advérbio de lugar)</li>\n                </ul>\n                <div class=\"ex-block\">\n                  <strong>Cūr</strong> Iūlia plōrat? Iūlia plōrat <strong>quia</strong>\n                  Mārcus eam pulsat.<br>\n                  Iūlius <strong>nōn</strong> hīc est, <strong>neque</strong> venit.<br>\n                  <strong>Iam</strong> nōn rīdet Mārcus.\n                </div>\n                <p>O par <em>cūr? / quia</em> é fundamental: é a estrutura básica de\n                pergunta-resposta causal em latim, equivalente ao nosso “por\n                quê? — porque”.</p>\n                "
      }
    ],
    "grammar": {
      "intro": "Este é o primeiro capítulo com gramática formal em <em>Familia Romana</em>. Os conceitos: o que é um <em>verbo</em>, a distinção entre <em>nominativo</em> (sujeito) e <em>accusativo</em> (objeto), e a introdução dos pronomes pessoais.",
      "sections": [
        {
          "heading": "Verbum",
          "bookRef": "Cap. III, ll. 1–47; gramm. ll. 95–108",
          "body": "\n            <p>Um <strong>verbo</strong> (lat. <em>verbum</em>) é a palavra que\n            descreve a ação ou o estado: <em>quem faz o quê</em>. Em latim, o\n            verbo geralmente termina a frase e leva sempre uma terminação que\n            indica <em>quem</em> realiza a ação.</p>\n            <p>Para a 3ª pessoa (ele/ela/eles), as duas terminações fundamentais são:</p>\n            <table class=\"paradigm\">\n              <tr><th>número</th><th>terminação</th><th>exemplo</th></tr>\n              <tr><td class=\"label\">singular (um)</td><td>-t</td><td><em>canta<strong>t</strong>, plōra<strong>t</strong>, rīde<strong>t</strong>, audi<strong>t</strong></em></td></tr>\n              <tr><td class=\"label\">plural (vários)</td><td>-nt</td><td><em>canta<strong>nt</strong>, vide<strong>nt</strong>, veni<strong>unt</strong></em></td></tr>\n            </table>\n            <p>Como o verbo já carrega a informação de quem faz, o sujeito pronominal\n            costuma ser omitido. <em>Cantat</em> sozinho já diz \"ela canta\" ou \"ele canta\".</p>\n            <div class=\"ex-block\">\n              Iūlia canta<strong>t</strong> — Mārcus rīde<strong>t</strong> —<br>\n              Marcus et Quīntus vide<strong>nt</strong> — Aemilia veni<strong>t</strong>.\n            </div>\n            "
        },
        {
          "heading": "Nōminātīvus et Accūsātīvus",
          "bookRef": "Cap. III, gramm. ll. 108–135",
          "body": "\n            <p>O latim não usa, em geral, a <em>ordem das palavras</em> para mostrar\n            o papel de cada substantivo na frase. Em vez disso, muda a\n            <em>terminação</em>. Os dois primeiros casos são:</p>\n            <ul>\n              <li><strong>nōminātīvus</strong> — caso do <em>sujeito</em>, responde a\n              <em>quis?</em> (\"quem?\", para pessoas) ou <em>quid?</em> (\"o quê?\",\n              para coisas).</li>\n              <li><strong>accūsātīvus</strong> — caso do <em>objeto direto</em>,\n              responde a <em>quem?</em> ou <em>o quê?</em></li>\n            </ul>\n            <table class=\"paradigm\">\n              <tr><th></th><th>nōm.</th><th>acus.</th></tr>\n              <tr><td class=\"label\">f. (-a)</td><td>Iūlia</td><td>Iūli<strong>am</strong></td></tr>\n              <tr><td class=\"label\">f. (-a)</td><td>puella</td><td>puell<strong>am</strong></td></tr>\n              <tr><td class=\"label\">m. (-us)</td><td>Mārcus</td><td>Mārc<strong>um</strong></td></tr>\n              <tr><td class=\"label\">m. (-er)</td><td>puer</td><td>puer<strong>um</strong></td></tr>\n            </table>\n            <p>Como a ordem é livre, todas estas frases significam a mesma coisa:</p>\n            <div class=\"ex-block\">\n              Mārcus Iūliam pulsat.<br>\n              Iūliam Mārcus pulsat.<br>\n              Pulsat Mārcus Iūliam.\n            </div>\n            <p>Em todas, é a terminação <em>-am</em> de <em>Iūliam</em> que diz que\n            Iūlia é o objeto, e <em>-us</em> em <em>Mārcus</em> que diz que ele é o\n            sujeito. Pergunte sempre: <em>quem faz?</em> (nōm.) e <em>quem/o que\n            recebe?</em> (acus.).</p>\n            "
        },
        {
          "heading": "Adjectīvum cum substantīvō",
          "bookRef": "Cap. III, ll. 60–95",
          "body": "\n            <p>Os adjetivos (<em>improbus, probus, laetus, parvus</em>…) <em>concordam</em>\n            com o substantivo a que se referem em <em>caso</em>, <em>número</em> e\n            <em>gênero</em>. Quando o substantivo muda de caso, o adjetivo muda junto:</p>\n            <table class=\"paradigm\">\n              <tr><th></th><th>nōm.</th><th>acus.</th></tr>\n              <tr><td class=\"label\">m.</td><td>puer improb<strong>us</strong></td><td>puer<strong>um</strong> improb<strong>um</strong></td></tr>\n              <tr><td class=\"label\">f.</td><td>puell<strong>a</strong> parv<strong>a</strong></td><td>puell<strong>am</strong> parv<strong>am</strong></td></tr>\n            </table>\n            <p>O adjetivo não precisa estar contíguo ao substantivo. Em <em>puer quī\n            parvam puellam pulsat improbus est</em>, <em>improbus</em> concorda com\n            <em>puer</em> (nōm.), e <em>parvam puellam</em> formam o objeto.</p>\n            <div class=\"ex-block\">\n              Mārcus puer improbus est. — Iūlius puerum improbum verberat.<br>\n              Iūlia puella proba est. — Mārcus parvam puellam pulsat.\n            </div>\n            "
        },
        {
          "heading": "Prōnōmina persōnālia: <em>mē, tē, eum, eam</em>",
          "bookRef": "Cap. III, ll. 16–80",
          "body": "\n            <p>Os pronomes pessoais aparecem aqui no acusativo (como objeto). O\n            sujeito (ego, tū, is, ea) só aparece em casos de ênfase.</p>\n            <table class=\"paradigm\">\n              <tr><th>pessoa</th><th>nōm.</th><th>acus.</th></tr>\n              <tr><td class=\"label\">1ª sg.</td><td>(ego)</td><td>mē</td></tr>\n              <tr><td class=\"label\">2ª sg.</td><td>(tū)</td><td>tē</td></tr>\n              <tr><td class=\"label\">3ª sg. m.</td><td>is</td><td>eum</td></tr>\n              <tr><td class=\"label\">3ª sg. f.</td><td>ea</td><td>eam</td></tr>\n            </table>\n            <div class=\"ex-block\">\n              Iūlia clāmat: \"Marcus <strong>mē</strong> pulsat!\"<br>\n              Aemilia: \"Quis <strong>mē</strong> vocat?\" — Quīntus: \"Iūlia <strong>tē</strong> vocat.\"<br>\n              Mārcus rīdet quia pater <strong>eum</strong> nōn audit.\n            </div>\n            "
        },
        {
          "heading": "Coniūnctiōnēs: <em>quia, neque</em>",
          "bookRef": "Cap. III (transversal)",
          "body": "\n            <p>Duas conjunções essenciais aparecem aqui:</p>\n            <ul>\n              <li><strong>quia</strong> — \"porque\", causal. É a resposta a <em>cūr?</em></li>\n              <li><strong>neque</strong> = <em>et nōn</em> — \"e não\". Pode unir\n              frases inteiras (<em>Iūlius dormit neque Quīntum audit</em>) ou\n              elementos paralelos.</li>\n            </ul>\n            <div class=\"ex-block\">\n              <strong>Cūr</strong> Iūlia plōrat? — Iūlia plōrat <strong>quia</strong> Mārcus eam pulsat.<br>\n              Iūlius nōn venit, <strong>neque</strong> respondet, <strong>neque</strong> Quīntum audit.\n            </div>\n            "
        }
      ]
    },
    "vocabulary": {
      "intro": "As palavras novas introduzidas em <em>Cap. III</em>. Quase todas são <em>verbos</em> — pela primeira vez no livro aparecem ações concretas (cantar, chorar, bater, perguntar). Junto, vêm os primeiros pronomes pessoais no acusativo (<em>mē, tē, eum, eam</em>) e os pronomes relativos/interrogativos no caso oblíquo.",
      "groups": [
        {
          "label": "Nōmina · 1ª (-a)",
          "tag": "f.",
          "entries": [
            {
              "lemma": "mamma, -ae",
              "gloss": "mamãe (forma infantil de <i>māter</i>)",
              "note": "diminutivo afetivo"
            },
            {
              "lemma": "persōna, -ae",
              "gloss": "personagem, papel",
              "note": "originalmente: máscara de teatro"
            },
            {
              "lemma": "scaena, -ae",
              "gloss": "cena (de uma peça ou narrativa)"
            }
          ]
        },
        {
          "label": "Adiectīva",
          "tag": "-us, -a, -um",
          "entries": [
            {
              "lemma": "improbus, -a, -um",
              "gloss": "malcomportado, ruim, desonesto",
              "note": "≠ <i>probus</i> (< <i>in-</i> + <i>probus</i>)"
            },
            {
              "lemma": "probus, -a, -um",
              "gloss": "bom (de caráter), honesto"
            },
            {
              "lemma": "īrātus, -a, -um",
              "gloss": "irado, com raiva"
            },
            {
              "lemma": "laetus, -a, -um",
              "gloss": "alegre, contente"
            }
          ]
        },
        {
          "label": "Verba",
          "tag": "1ª, 2ª, 3ª, 4ª conjugações",
          "entries": [
            {
              "lemma": "cantat, cantant",
              "gloss": "canta",
              "note": "[1] <i>cantāre</i>"
            },
            {
              "lemma": "plōrat, plōrant",
              "gloss": "chora",
              "note": "[1] <i>plōrāre</i>"
            },
            {
              "lemma": "pulsat, pulsant",
              "gloss": "bate (em alguém ou em algo)",
              "note": "[1] <i>pulsāre</i> — bater físicamente; bater na porta"
            },
            {
              "lemma": "vocat, vocant",
              "gloss": "chama (alguém pelo nome)",
              "note": "[1] <i>vocāre</i>"
            },
            {
              "lemma": "interrogat, interrogant",
              "gloss": "pergunta, interroga",
              "note": "[1] <i>interrogāre</i>"
            },
            {
              "lemma": "verberat, verberant",
              "gloss": "açoita, bate (para castigar)",
              "note": "[1] <i>verberāre</i> — castigo físico"
            },
            {
              "lemma": "rīdet, rīdent",
              "gloss": "ri",
              "note": "[2] <i>rīdēre</i>"
            },
            {
              "lemma": "videt, vident",
              "gloss": "vê",
              "note": "[2] <i>vidēre</i>"
            },
            {
              "lemma": "respondet, respondent",
              "gloss": "responde",
              "note": "[2] <i>respondēre</i>"
            },
            {
              "lemma": "venit, veniunt",
              "gloss": "vem, chega",
              "note": "[4] <i>venīre</i>"
            },
            {
              "lemma": "audit, audiunt",
              "gloss": "ouve, escuta",
              "note": "[4] <i>audīre</i>"
            },
            {
              "lemma": "dormit, dormiunt",
              "gloss": "dorme",
              "note": "[4] <i>dormīre</i>"
            }
          ]
        },
        {
          "label": "Prōnōmina persōnālia",
          "tag": "acusativo (1ª, 2ª, 3ª p.)",
          "entries": [
            {
              "lemma": "mē",
              "gloss": "me, a mim",
              "note": "acus. de <i>ego</i>"
            },
            {
              "lemma": "tē",
              "gloss": "te, a ti",
              "note": "acus. de <i>tū</i>"
            },
            {
              "lemma": "eum",
              "gloss": "o, a ele",
              "note": "acus. m. sg. de <i>is</i>"
            },
            {
              "lemma": "eam",
              "gloss": "a, a ela",
              "note": "acus. f. sg. de <i>ea</i>"
            }
          ]
        },
        {
          "label": "Prōnōmina relātīva / interrogātīva",
          "tag": "casos oblíquos",
          "entries": [
            {
              "lemma": "quem",
              "gloss": "(a)quele que; quem? (acus. m. sg.)",
              "note": "acus. de <i>quī / quis</i>"
            },
            {
              "lemma": "quam",
              "gloss": "(a)quela que; quem? (acus. f. sg.)",
              "note": "acus. de <i>quae</i>"
            },
            {
              "lemma": "quī",
              "gloss": "(a)quele que (nōm. m. sg.)",
              "note": "= <i>quis</i> em uso relativo"
            },
            {
              "lemma": "quae",
              "gloss": "(a)quela que (nōm. f. sg.)"
            }
          ]
        },
        {
          "label": "Adverbia · interrogātīvum",
          "entries": [
            {
              "lemma": "iam",
              "gloss": "já, agora"
            },
            {
              "lemma": "hīc",
              "gloss": "aqui",
              "note": "advérbio de lugar — não confundir com pronome <i>hic</i> (este)"
            },
            {
              "lemma": "cūr?",
              "gloss": "por quê?",
              "note": "responde-se com <i>quia</i>"
            }
          ]
        },
        {
          "label": "Coniūnctiōnēs",
          "entries": [
            {
              "lemma": "quia",
              "gloss": "porque",
              "note": "introduz oração causal — resposta a <i>cūr?</i>"
            },
            {
              "lemma": "neque",
              "gloss": "e não; nem",
              "note": "= <i>et nōn</i>"
            }
          ]
        },
        {
          "label": "Interiectiō",
          "entries": [
            {
              "lemma": "ō!",
              "gloss": "ó! (vocativo expressivo)",
              "note": "marca emoção — espanto, dor, alegria"
            }
          ]
        },
        {
          "label": "Verba grammatica",
          "tag": "metalinguagem",
          "entries": [
            {
              "lemma": "verbum, -ī",
              "gloss": "verbo; palavra",
              "note": "n., 2ª decl."
            },
            {
              "lemma": "nōminātīvus, -ī",
              "gloss": "nominativo (caso do sujeito)"
            },
            {
              "lemma": "accūsātīvus, -ī",
              "gloss": "acusativo (caso do objeto direto)"
            }
          ]
        }
      ]
    }
  }
};

export default chapter;
