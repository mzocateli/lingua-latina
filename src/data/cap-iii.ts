import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "iii",
  "numeral": "III",
  "title": "Puer improbus",
  "blurb": "Foco: distinção entre nominativo e acusativo; verbos em -t/-nt; pronomes pessoais <em>mē / tē / eum / eam</em>; relativo <em>quī, quae, quem, quam</em>; conjunções <em>quia</em> e <em>neque</em>.",
  "grammarIntro": "Este é o primeiro capítulo com gramática formal em <em>Familia Romana</em>. Os conceitos: o que é um <em>verbo</em>, a distinção entre <em>nominativo</em> (sujeito) e <em>accusativo</em> (objeto), e a introdução dos pronomes pessoais.",
  "vocabularyIntro": "As palavras novas introduzidas em <em>Cap. III</em>. Quase todas são <em>verbos</em> — pela primeira vez no livro aparecem ações concretas (cantar, chorar, bater, perguntar). Junto, vêm os primeiros pronomes pessoais no acusativo (<em>mē, tē, eum, eam</em>) e os pronomes relativos/interrogativos no caso oblíquo.",
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
        "Iūlia: 'Mārcus {mē:md} pulsat!' // pronome 1ª p."
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
        "Mārcus rīdet, {neque:md} pater dormit. // e-não",
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
        "{Mārcus:md} puer {improbus:md} est. // Mārcus → improbus",
        "{Mārcus:md} {parvam puellam:md} pulsat. // Mārcus → parvam puellam",
        "{Iūlius:md} {īrātus:md} {puerum improbum:md} verberat. // Iūlius → puerum improbum, nom. íratus",
        "{Iūlia:md} est puella {proba:md}. // Iūlia → proba"
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
  ]
};

export default chapter;
