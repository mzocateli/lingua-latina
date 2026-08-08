import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "xii",
  "numeral": "XII",
  "title": "Mīles Rōmānus",
  "blurb": "Foco: <strong>4ª declinação</strong> (<em>exercitus, manus, arcus</em>); <strong>adjetivos da 3ª</strong> (<em>brevis, gravis, levis, fortis, trīstis</em>) e o <strong>comparativo</strong> em <em>-ior/-ius</em> com <em>quam</em>; <strong>dativo de posse</strong> e dativo com <em>imperāre/pārēre</em>; genitivo partitivo; acusativo de extensão; <em>plūrāle tantum</em> (<em>castra, arma, līberī</em>); verbo irregular <em>ferre</em> e imperativos monossilábicos.",
  "grammarIntro": "Capítulo denso: quatro frentes novas ao mesmo tempo. Na morfologia nominal entra a <strong>4ª declinação</strong> (<em>exercitus, -ūs</em>; <em>manus, -ūs</em> f.) e a categoria dos <em>plūrāle tantum</em> (<em>castra, arma, līberī, viscera</em>). Na morfologia adjetival entram os <strong>adjetivos da 3ª declinação</strong> (<em>brevis, breve</em>) e o <strong>comparativo</strong> em <em>-ior, -ius</em>, que declina como consonantal. Na sintaxe dos casos, três usos novos: <strong>dativo de posse</strong> (<em>Mārcō ūna soror est</em>), dativo com os intransitivos <em>imperāre</em> e <em>pārēre</em>, <strong>genitivo partitivo</strong> (<em>pars imperiī</em>) e <strong>acusativo de extensão</strong> (<em>duōs pedēs longus</em>). No verbo, o irregular <em>ferre</em>, os imperativos monossilábicos (<em>fer! dūc! dīc! fac! es!</em>) e os temas em vogal da 3ª conjugação (<em>fluere, metuere</em>; <em>capere, iacere, fugere</em>).",
  "vocabularyIntro": "Vocabulário militar e familiar. Do lado da família: <em>frāter, soror, avunculus</em> e os <em>tria nōmina</em> (<em>praenōmen, nōmen, cognōmen</em>). Do lado do exército: quem luta (<em>mīles, pedes, eques, dux, hostis</em>), com que luta (<em>gladius, pīlum, hasta, scūtum, arcus, sagitta, arma, pugnus</em>), onde vive (<em>castra, vāllum, fossa</em>) e o que mede (<em>passus, mīlia, pēs</em>). Com eles vêm os verbos <em>pugnāre, mīlitāre, oppugnāre, expugnāre, dēfendere, incolere, dīvidere, metuere, iacere, fugere, ferre</em> e os adjetivos da 3ª <em>brevis, gravis, levis, fortis, trīstis</em>.",
  "exercises": [
    {
      "number": 1,
      "title": "Exercitium 1",
      "tag": "dativo de posse ↔ <em>habēre</em>",
      "tip": {
        "text": "Duas maneiras de dizer a mesma coisa. Com <em>habēre</em>: o dono é <strong>nominativo</strong> e a coisa é <strong>acusativo</strong> (<em>Mārcus ūnam sorōrem habet</em>). Com <em>esse</em>: o dono passa ao <strong>dativo</strong> e a coisa vira <strong>sujeito no nominativo</strong> (<em>Mārcō ūna soror est</em>) — literalmente ‘a Marco há uma irmã’. O verbo concorda com a coisa possuída, não com o dono.",
        "qualifier": null
      },
      "exemplum": "Mārcus ūnam sorōrem habet = <em>Mārcō (dat.) ūna soror est.</em>",
      "questions": [
        "Iūlius trēs līberōs habet = {Iūliō:md} trēs {līberī:md} {sunt:md}.",
        "Aemiliae ūnus frāter est = {Aemilia:md} ūnum {frātrem:md} {habet:md}.",
        "Dāvus multōs amīcōs habet = {Dāvō:md} multī {amīcī:md} {sunt:md}.",
        "Hominī improbō paucī sunt amīcī = {Homō:md} improbus {paucōs:md} {habet:md} amīcōs.",
        "Homō duōs oculōs et duās aurēs habet = {Hominī:md} duo {oculī:md} et duae {aurēs:md} sunt.",
        "Corporī hūmānō quattuor membra sunt = {Corpus:md} hūmānum quattuor {membra:md} {habet:md}.",
        "Hominēs ālās nōn habent = {Hominibus:md} {ālae:md} nōn sunt.",
        "Mercuriō ālae in pedibus sunt = {Mercurius:md} {ālās:md} in pedibus {habet:md}.",
        "Vir Rōmānus tria nōmina habet = {Virō:md} Rōmānō tria {nōmina:md} {sunt:md}.",
        "Rōmānīs multī deī sunt = {Rōmānī:md} multōs {deōs:md} {habent:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "as duas construções",
          "type": "table",
          "headers": ["com <em>habēre</em>", "com <em>esse</em> + dat."],
          "rows": [
            ["Mārcus sorōrem habet.", "Mārcō soror est."],
            ["Iūlius līberōs habet.", "Iūliō līberī sunt."],
            ["Hominēs ālās nōn habent.", "Hominibus ālae nōn sunt."]
          ]
        },
        {
          "label": "dativo singular / plural",
          "type": "words",
          "inline": true,
          "words": [
            "<i>Iūlius → Iūliō</i>",
            "<i>Aemilia → Aemiliae</i>",
            "<i>homō → hominī</i>",
            "<i>hominēs → hominibus</i>",
            "<i>Rōmānī → Rōmānīs</i>"
          ]
        }
      ],
      "references": ["dativo-posse"]
    },
    {
      "number": 2,
      "title": "Exercitium 2",
      "tag": "<em>pater, māter, frāter</em> — 3ª declinação",
      "tip": {
        "text": "Os três seguem o mesmo padrão: o <em>e</em> do nominativo desaparece no radical — <em>pater, patr·is</em>; <em>māter, mātr·is</em>; <em>frāter, frātr·is</em>. Daí <em>patrem, patrī, patre, patrēs, patrum, patribus</em>. São consonantais: gen. pl. em <strong>-um</strong>, não <em>-ium</em>.",
        "qualifier": null
      },
      "exemplum": "<em>pater, patr|is</em> — <em>māter, mātr|is</em> — <em>frāter, frātr|is</em>",
      "questions": [
        "Mārcō pat{er:md} et māt{er:md}, frāt{er:md} et soror sunt.",
        "Mārcus pat{rem:md} et māt{rem:md}, frāt{rem:md} et sorōrem habet.",
        "Iūliae duo frāt{rēs:md} sunt: Iūlia duōs frāt{rēs:md} habet.",
        "Nōmina frāt{rum:md} sunt Mārcus et Quīntus.",
        "Iūlia māt{rī:md} et frāt{ribus:md} suīs rosās ostendit.",
        "Iūlia ā māt{re:md} et ā frāt{ribus:md} suīs discēdit.",
        "Iūlia rosam dat pat{rī:md}, pat{er:md} fīliae ōsculum dat.",
        "Iūlia pat{rem:md} suum amat et ā pat{re:md} suō amātur.",
        "Avunculus nōn est frāt{er:md} pat{ris:md}, sed māt{ris:md}.",
        "Puerī Rōmānī nōn ā māt{ribus:md}, sed ā pat{ribus:md} suīs nōmina habent."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "pater, patr·is (m.)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "pater", "patrēs"],
            ["acc.", "patrem", "patrēs"],
            ["gen.", "patris", "patrum"],
            ["dat.", "patrī", "patribus"],
            ["abl.", "patre", "patribus"]
          ]
        }
      ],
      "references": ["dativo-posse"]
    },
    {
      "number": 3,
      "title": "Exercitium 3",
      "tag": "família, <em>tria nōmina</em> e as armas",
      "tip": {
        "text": "Duas famílias de palavras novas. A do parentesco: <em>frāter, soror, avunculus</em> (o irmão da <strong>mãe</strong>) e os <em>tria nōmina</em> do romano — <em>praenōmen</em> (o pessoal), <em>nōmen</em> (o da gēns) e <em>cognōmen</em> (o do ramo da família). A militar: <em>mīles</em> é o <em>vir armātus</em>, isto é, <em>quī arma fert</em> — e <em>arma</em> só existe no plural.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Mārcō et Quīntō ūna {soror:md} est: Iūlia.",
        "Iūliae duo {frātrēs:md} sunt: Mārcus et Quīntus.",
        "Frāter Aemiliae, cui {nōmen:md} est Aemilius, {avunculus:md} līberōrum est.",
        "<em>Pūblius</em> {praenōmen:md} est; alia {praenōmina:md} sunt <em>Mārcus, Quīntus, Titus</em>.",
        "<em>Paulus</em> nōn praenōmen, sed {cognōmen:md} est.",
        "Aemilia {trīstis:md} est quod frāter eius procul ab eā abest.",
        "Līberī: “Ubi est avunculus noster?” Iūlius: “Avunculus {vester:md} est in Germāniā.”",
        "{Mīles:md} Rōmānus pīlum et {gladium:md} et scūtum {fert:md}. // = portat",
        "{Scūtum:md} et gladius et {pīlum:md} sunt {arma:md} mīlitis Rōmānī.",
        "Mīles est vir {armātus:md}. // = quī arma fert"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "tria nōmina",
          "type": "table",
          "headers": ["parte", "exemplo"],
          "rows": [
            ["praenōmen", "Mārcus, Quīntus, Pūblius, Titus"],
            ["nōmen", "Iūlius, Cornēlius, Aemilius"],
            ["cognōmen", "Balbus, Paulus, Longus, Pulcher"]
          ]
        },
        {
          "label": "vocābula nova",
          "type": "words",
          "inline": false,
          "words": [
            "<i>frāter, soror, avunculus</i>",
            "<i>praenōmen, nōmen, cognōmen</i>",
            "<i>mīles, arma (n. pl.), armātus</i>",
            "<i>gladius, pīlum, scūtum</i>",
            "<i>fert (ferre) = portat</i>",
            "<i>trīstis, -e</i>; <i>vester, -tra, -trum</i>"
          ]
        }
      ],
      "references": ["plurale-tantum", "ferre-imperativos-irregulares"]
    },
    {
      "number": 5,
      "title": "Exercitium 5",
      "tag": "<em>mīles, pedes, eques</em> — radical em <em>-it-</em>",
      "tip": {
        "text": "Os três têm o mesmo comportamento: o radical só aparece no genitivo e termina em <strong>-it-</strong> — <em>mīles, mīlit·is</em>; <em>pedes, pedit·is</em>; <em>eques, equit·is</em>. São consonantais (gen. pl. <em>-um</em>). O <em>pedes</em> vai a pé, o <em>eques</em> vai a cavalo.",
        "qualifier": null
      },
      "exemplum": "<em>mīles, mīlit|is</em> — <em>pedes, pedit|is</em> — <em>eques, equit|is</em>",
      "questions": [
        "Mīl{es:md} Rōmānus bona arma fert.",
        "Bona arma ā mīl{ite:md} Rōmānō feruntur.",
        "Arma mīl{itis:md} Rōmānī sunt gladius, scūtum, pīlum.",
        "In Germāniā multī mīl{itēs:md} sunt, et ped{itēs:md} et equ{itēs:md}.",
        "In Germāniā magnus numerus mīl{itum:md} est, et ped{itum:md} et equ{itum:md}.",
        "Equ{es:md} est mīl{es:md} quī equō vehitur; quī pedibus it ped{es:md} est.",
        "Pīlum ped{itis:md} Rōmānī nōn tam longum est quam hasta equ{itis:md}.",
        "Pīlum ā ped{ite:md} Rōmānō fertur, hasta ab equ{ite:md} fertur."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "radical em -it-",
          "type": "table",
          "headers": ["nōm.", "gen. sg.", "nōm. pl.", "gen. pl."],
          "rows": [
            ["mīles", "mīlitis", "mīlitēs", "mīlitum"],
            ["pedes", "peditis", "peditēs", "peditum"],
            ["eques", "equitis", "equitēs", "equitum"]
          ]
        }
      ],
      "references": []
    },
    {
      "number": 6,
      "title": "Exercitium 6",
      "tag": "adjetivos da 3ª: <em>-is</em> (m./f.) × <em>-e</em> (n.)",
      "tip": {
        "text": "Compare as duas classes. Da 1ª/2ª: <em>long·us, long·a, long·um</em> — três formas. Da 3ª: <em>brev·is</em> serve para <strong>masculino e feminino</strong> e <em>brev·e</em> para o <strong>neutro</strong> — duas formas. Assim <em>gladius brevis</em>, <em>hasta brevis</em>, mas <em>pīlum breve</em>. São da 3ª: <em>brevis, gravis, levis, fortis, trīstis, tenuis</em>.",
        "qualifier": null
      },
      "exemplum": "Gladius long<em>us</em>. Gladius brev<em>is</em>. — Hasta long<em>a</em>. Hasta brev<em>is</em>.",
      "questions": [
        "Gladius long{us:md} nōn tam lev{is:md} est quam gladius brev{is:md}.",
        "Hasta brev{is:md} nōn tam grav{is:md} est quam hasta long{a:md}.",
        "Saccus Lēandrī magn{us:md} et grav{is:md} est, saccus Syrī est parv{us:md} et lev{is:md}.",
        "Quīntus est puer crass{us:md}, Mārcus puer tenu{is:md} est.",
        "Aemilia nōn laet{a:md}, sed trīst{is:md} est.",
        "Capillus Aemiliae nōn brev{is:md}, sed long{us:md} est.",
        "Haec līnea long{a:md} et tenu{is:md} est.",
        "Haec līnea est brev{is:md} et crass{a:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "as duas classes",
          "type": "table",
          "headers": ["classe", "m.", "f.", "n."],
          "rows": [
            ["1ª/2ª", "longus", "longa", "longum"],
            ["3ª", "brevis", "brevis", "breve"]
          ]
        },
        {
          "label": "adjetivos da 3ª",
          "type": "words",
          "inline": true,
          "words": [
            "<i>brevis, -e</i>",
            "<i>gravis, -e</i>",
            "<i>levis, -e</i>",
            "<i>fortis, -e</i>",
            "<i>trīstis, -e</i>",
            "<i>tenuis, -e</i>"
          ]
        }
      ],
      "references": ["adjetivos-terceira-declinacao"]
    },
    {
      "number": 7,
      "title": "Exercitium 7",
      "tag": "<em>nōn tam… quam</em> → comparativo em <em>-ior</em>",
      "tip": {
        "text": "A frase <em>A nōn tam longa est quam B</em> diz o mesmo que <em>B longior est quam A</em> — mas <strong>invertendo os termos</strong>. No comparativo, <em>quam</em> deixa de ser ‘quanto’ e passa a ser ‘<strong>do que</strong>’. Forma: radical do adjetivo + <strong>-ior</strong> (m./f.) ou <strong>-ius</strong> (n.).",
        "qualifier": null
      },
      "exemplum": "Mārcus nōn tam crassus nec tam gravis est quam Quīntus = <em>Quīntus crassior et gravior est quam Mārcus.</em>",
      "questions": [
        "Via Latīna nōn tam longa est quam via Appia = Via {Appia:md} {longior:md} est quam via {Latīna:md}.",
        "Cornēlius nōn tam pecūniōsus est quam Iūlius = {Iūlius:md} {pecūniōsior:lg} est quam {Cornēlius:md}.",
        "Syra nōn tam fōrmōsa est quam Aemilia = {Aemilia:md} {fōrmōsior:md} est quam {Syra:md}.",
        "Quīntus nōn tam levis est quam Mārcus = {Mārcus:md} {levior:md} est quam {Quīntus:md}.",
        "Saccus Syrī nōn tam gravis est quam Lēandrī = Saccus {Lēandrī:md} {gravior:md} est quam {Syrī:md}.",
        "Capillus Iūliae nōn tam brevis est quam Mārcī = Capillus {Mārcī:md} {brevior:md} est quam {Iūliae:md}.",
        "Mēdus nōn tam probus est quam Dāvus = {Dāvus:md} {probior:md} est quam {Mēdus:md}.",
        "Digitus quārtus nōn tam longus neque tam crassus est quam digitus medius = Digitus {medius:md} {longior:md} et {crassior:md} est quam digitus {quārtus:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "positivo → comparativo",
          "type": "table",
          "headers": ["positivo", "comp. m./f.", "comp. n."],
          "rows": [
            ["longus", "longior", "longius"],
            ["gravis", "gravior", "gravius"],
            ["brevis", "brevior", "brevius"],
            ["fōrmōsus", "fōrmōsior", "fōrmōsius"],
            ["probus", "probior", "probius"]
          ]
        },
        {
          "label": "o esquema",
          "type": "list",
          "items": [
            "<i>A nōn tam X est quam B</i> = <i>B X-ior est quam A</i>",
            "<i>quam</i> depois de <i>tam</i> = ‘quanto’",
            "<i>quam</i> depois do comparativo = ‘do que’"
          ]
        }
      ],
      "references": ["comparativo"]
    },
    {
      "number": 8,
      "title": "Exercitium 8",
      "tag": "genitivo partitivo — <em>pars</em> + genitivo",
      "tip": {
        "text": "Quando se nomeia o <strong>todo</strong> do qual algo é <strong>parte</strong>, o todo vai ao <strong>genitivo</strong>: <em>pars corporis</em>, <em>pars imperiī</em>. É o <em>genitīvus partītīvus</em>. Cuidado com a concordância do adjetivo: ele acompanha o genitivo (<em>partēs corporis hūmānī</em>, <em>pars nōminis Rōmānī</em>).",
        "qualifier": null
      },
      "exemplum": "Prōvincia est pars imperi<em>ī</em> Rōmān<em>ī</em>.",
      "questions": [
        "Littera est pars vocābul{ī:md}.",
        "Umerī et pectus partēs corpor{is:md} hūmān{ī:md} sunt.",
        "Manus pars bracchi{ī:md} est ut pēs pars crūr{is:md} est.",
        "Ātrium et peristȳlum partēs vīll{ae:md} Rōmān{ae:md} sunt.",
        "Praenōmen est pars prīma nōmin{is:md} Rōmān{ī:md}.",
        "Aegyptus pars Āfric{ae:md} est.",
        "Magna pars Eurōp{ae:md} est in imperiō Rōmānō."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "genitivos úteis",
          "type": "words",
          "inline": true,
          "words": [
            "<i>vocābulum → vocābulī</i>",
            "<i>corpus → corporis</i>",
            "<i>crūs → crūris</i>",
            "<i>bracchium → bracchiī</i>",
            "<i>nōmen → nōminis</i>",
            "<i>vīlla → vīllae</i>",
            "<i>Āfrica → Āfricae</i>",
            "<i>Eurōpa → Eurōpae</i>"
          ]
        }
      ],
      "references": ["genitivo-partitivo"]
    },
    {
      "number": 9,
      "title": "Exercitium 9",
      "tag": "<em>imperāre</em> e <em>pārēre</em> + dativo",
      "tip": {
        "text": "Em português mandamos <em>em</em> alguém e obedecemos <em>a</em> alguém; em latim, quem manda e quem obedece regem <strong>dativo</strong>, nunca acusativo: <em>dominus servō imperat</em>, <em>servus dominō pāret</em>. Guarde os dois com o pronome: <em>imperāre eī</em>, <em>pārēre eī</em>. O interrogativo/relativo no dativo é <em>cui</em>.",
        "qualifier": null
      },
      "exemplum": "Pater fīli<em>ō</em> et fīli<em>ae</em> imperat; līberī patr<em>ī</em> suō pārent.",
      "questions": [
        "Dominus serv{ō:md} suō imperat; servus domin{ō:md} su{ō:md} pāret.",
        "Domina ancill{ae:md} suae imperat; ancilla domin{ae:md} su{ae:md} pāret.",
        "Iūlius Mēd{ō:md} imperat: “Venī!” nec Mēdus e{ī:md} pāret.",
        "Mārcus sorōr{ī:md} su{ae:md} imperat: “Tacē, Iūlia!” neque ea frātr{ī:md} su{ō:md} pāret.",
        "Dux mīlit{ibus:md} imperat, mīlitēs duc{ī:md} su{ō:md} pārent.",
        "Rōmānī Gall{īs:md} imperant, Gallī Rōmān{īs:md} pārent.",
        "{Cui:md} dominō Dāvus pāret? Dominus {cui:md} Dāvus pāret est Iūlius."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "os dois verbos",
          "type": "list",
          "items": [
            "<i>imperāre eī</i> — dar ordem a alguém",
            "<i>pārēre eī</i> — obedecer a alguém",
            "<i>Dux exercituī imperat.</i>",
            "<i>Exercitus ducī suō pāret.</i>"
          ]
        },
        {
          "label": "dativos",
          "type": "words",
          "inline": true,
          "words": [
            "<i>servō, dominō, Mēdō, ducī</i>",
            "<i>ancillae, dominae, sorōrī, frātrī</i>",
            "<i>mīlitibus, Gallīs, Rōmānīs</i>",
            "<i>eī</i> · <i>cui</i>",
            "<i>suō, suae</i>"
          ]
        }
      ],
      "references": ["dativo-posse"]
    },
    {
      "number": 10,
      "title": "Exercitium 10",
      "tag": "4ª declinação — <em>exercitus, -ūs</em>",
      "tip": {
        "text": "A 4ª declinação tem <strong>-us</strong> no nominativo, como a 2ª, mas o genitivo é <strong>-ūs</strong>, não <em>-ī</em>. Guarde as cinco desinências do singular (<em>-us, -um, -ūs, -uī, -ū</em>) e as cinco do plural (<em>-ūs, -ūs, -uum, -ibus, -ibus</em>). Cuidado: <em>exercitūs</em> pode ser gen. sg., nom. pl. ou acc. pl. — quem decide é a frase.",
        "qualifier": null
      },
      "exemplum": "<em>exercit|us, exercit|ūs</em> (m.) — dēclīnātiō quārta",
      "questions": [
        "In Germāniā magnus exercit{us:md} Rōmānus est.",
        "In exercit{ū:md} Rōmānō multī mīlitēs sunt.",
        "Dux exercit{ūs:md} est quī exercit{um:md} dūcit.",
        "Dux Rōmānus magnō exercit{uī:md} imperat.",
        "In Germāniā et in Britanniā magnī exercit{ūs:md} Rōmānī sunt, quī contrā magnōs hostium exercit{ūs:md} pugnant.",
        "Graecī et Gallī iam exercit{ibus:md} Rōmānīs pārent.",
        "Multī Graecī et Gallī in exercit{ibus:md} Rōmānīs mīlitant.",
        "Ducēs exercit{uum:md} Rōmānōrum ā mīlitibus suīs nōn discēdunt."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "dēclīnātiō quārta",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "-us", "-ūs"],
            ["acc.", "-um", "-ūs"],
            ["gen.", "-ūs", "-uum"],
            ["dat.", "-uī", "-ibus"],
            ["abl.", "-ū", "-ibus"]
          ]
        },
        {
          "label": "nomes da 4ª",
          "type": "words",
          "inline": true,
          "words": [
            "<i>exercitus</i>",
            "<i>equitātus</i>",
            "<i>impetus</i>",
            "<i>metus</i>",
            "<i>passus</i>",
            "<i>arcus</i>",
            "<i>versus</i>",
            "<i>manus</i> (f.!)"
          ]
        }
      ],
      "references": ["quarta-declinacao"]
    },
    {
      "number": 11,
      "title": "Exercitium 11",
      "tag": "léxico militar: armas, povos e fronteiras",
      "tip": {
        "text": "Vocabulário do capítulo: <em>pugnāre, mīlitāre, pugnus, eques, pedes, dux, hostis, bellum, patria, fīnis, pars, arcus, sagitta, barbarus, contrā</em> + acus., <em>metuere</em> (= <em>timēre</em>), <em>incolere</em>, <em>dīvidere</em>, <em>ferre</em> (= <em>portāre</em>). Note <em>ac</em> = <em>atque</em>, e que o enclítico <em>-que</em> une a palavra anterior (<em>arcūs sagittāsque</em>).",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Mīlitēs pīlīs et gladiīs {pugnant:md}.",
        "Puerī nōn armīs, sed {pugnīs:md} pugnant.",
        "{Eques:md} est mīles quī ex equō pugnat.",
        "Aemilius nōn eques, sed {pedes:md} est.",
        "Gladius quī ā pedite {fertur:md} nōn est longus et {gravis:md}, sed {brevis:md} et levis.",
        "Gladius brevis nōn gravis, sed {levis:md} est.",
        "Pedes hastam longam et gravem {ferre:md} nōn potest. // = portāre",
        "Graecī et Rōmānī nōn sunt hominēs {barbarī:md} ut Germānī {ac:md} Britannī, quī Germāniam et Britanniam {incolunt:md}. // ac = atque",
        "Prōvincia est {pars:md} imperiī Rōmānī.",
        "Dānuvius flūmen Germāniam ab imperiō Rōmānō {dīvidit:md}.",
        "Dānuvius est {fīnis:md} imperiī Rōmānī.",
        "Graecia {patria:md} Graecōrum est.",
        "Rōmānī {contrā:md} Germānōs pugnant; Germānī enim {hostēs:md} Rōmānōrum sunt, ac {bellum:md} est inter Rōmānōs et Germānōs.",
        "Hostēs exercitum Rōmānum {metuunt:md}. // = timent",
        "Quī exercituī imperat {dux:md} exercitūs est.",
        "Hispānī, quī in {exercitū:md} Rōmānō {mīlitant:md}, nōn modo gladiōs et pīla, sed etiam {arcūs:md} {sagittās:md}que ferunt. // mīlitāre = mīlitem esse"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "verba nova",
          "type": "words",
          "inline": false,
          "words": [
            "<i>pugnāre, mīlitāre, oppugnāre, expugnāre</i>",
            "<i>incolere, dīvidere, dēfendere, metuere</i>",
            "<i>iacere, fugere</i> (i-stems)",
            "<i>fert, ferre, fertur, feruntur</i>"
          ]
        },
        {
          "label": "nōmina bellī",
          "type": "table",
          "headers": ["nōm.", "gen.", "sentido"],
          "rows": [
            ["dux", "ducis", "chefe, general"],
            ["hostis", "hostis", "inimigo"],
            ["fīnis", "fīnis", "fronteira, limite"],
            ["pars", "partis", "parte"],
            ["bellum", "bellī", "guerra"],
            ["patria", "patriae", "pátria"],
            ["arcus", "arcūs", "arco"],
            ["sagitta", "sagittae", "flecha"]
          ]
        }
      ],
      "references": ["quarta-declinacao", "genitivo-partitivo", "ferre-imperativos-irregulares"]
    },
    {
      "number": 13,
      "title": "Exercitium 13",
      "tag": "concordância dos adjetivos da 3ª em todos os casos",
      "tip": {
        "text": "Os adjetivos da 3ª são <em>i-stems</em> no masc./fem. (como <em>ovis</em>), com uma exceção: o <strong>ablativo singular é -ī</strong>, não <em>-e</em> (<em>gladiō brevī</em>). No neutro seguem <em>mare</em>: <em>-e</em> no nom./acc. sg., <em>-ia</em> no pl., <em>-ium</em> no gen. pl. Compare sempre com o adjetivo da 1ª/2ª que está ao lado (<em>Rōmānus, magnus, multus</em>).",
        "qualifier": null
      },
      "exemplum": "Gladius grav<em>is</em>. Hasta grav<em>is</em>. Scūtum grav<em>e</em>.",
      "questions": [
        "Aemilius, quī mīles fort{is:md} est, gladium brev{em:md} et lev{em:md} fert.",
        "Mīlitī fort{ī:md} Rōmān{ō:md} est gladius brev{is:md} et lev{is:md}.",
        "Mīles Rōmān{us:md} gladiō brev{ī:md} et lev{ī:md} armātus est.",
        "Rōmānī, mīlitēs fort{ēs:md}, gladiōs brev{ēs:md} et lev{ēs:md} ferunt.",
        "Mīlitibus fort{ibus:md} Rōmān{īs:md} sunt gladiī brev{ēs:md} et lev{ēs:md}.",
        "Mīlitēs Rōmān{ī:md} gladiīs brev{ibus:md} et lev{ibus:md} armātī sunt.",
        "In ānulō Aemiliae est gemma magn{a:md} et grav{is:md}.",
        "Aemilia gemmam habet magn{am:md} et grav{em:md}.",
        "Aemilia gemmā magn{ā:md} et grav{ī:md} ōrnātur.",
        "Pretium gemmae magn{ae:md} et grav{is:md} est sēstertiī centum.",
        "Aemilia mult{ās:md} gemmās grav{ēs:md} habet.",
        "Magnum est pretium gemmārum grav{ium:md}.",
        "<em>Ōs</em> vocābulum nōn long{um:md}, sed brev{e:md} est; in hōc vocābulō brev{ī:md} duae litterae sunt.",
        "<em>Ōs</em> et <em>pēs</em> vocābula nōn long{a:md}, sed brev{ia:md} sunt."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "brevis, breve — m./f.",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "brevis", "brevēs"],
            ["acc.", "brevem", "brevēs"],
            ["gen.", "brevis", "brevium"],
            ["dat.", "brevī", "brevibus"],
            ["abl.", "brevī", "brevibus"]
          ]
        },
        {
          "label": "brevis, breve — n.",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm./acc.", "breve", "brevia"],
            ["gen.", "brevis", "brevium"],
            ["dat.", "brevī", "brevibus"],
            ["abl.", "brevī", "brevibus"]
          ]
        }
      ],
      "references": ["adjetivos-terceira-declinacao"]
    },
    {
      "number": 14,
      "title": "Exercitium 14",
      "tag": "declinação do comparativo",
      "tip": {
        "text": "O comparativo <strong>não</strong> é <em>i-stem</em>: declina como consonantal — abl. sg. <strong>-iōre</strong> (não <em>-iōrī</em>), gen. pl. <strong>-iōrum</strong> (não <em>-iōrium</em>), nom./acc. pl. neutro <strong>-iōra</strong> (não <em>-iōria</em>). O nom./acc. sg. neutro é <strong>-ius</strong>: <em>pīlum longius</em>, <em>vocābulum brevius</em>.",
        "qualifier": null
      },
      "exemplum": "Gladius long<em>ior</em>. Via long<em>ior</em>. Pīlum long<em>ius</em>.",
      "questions": [
        "Via Appia long{ior:md} et lāt{ior:md} est quam via Latīna.",
        "Multae viae long{iōrēs:md} et lāt{iōrēs:md} sunt quam via Latīna.",
        "Saccus Syrī lev{ior:md} est quam saccus Lēandrī.",
        "Syrus saccum lev{iōrem:md} portat quam Lēander.",
        "In saccō lev{iōre:md} sunt pira.",
        "<em>Iūlius</em> nōmen brev{ius:md} est quam <em>Cornēlius</em>.",
        "Litterae Graecae nōmina long{iōra:md} habent quam Latīnae.",
        "Rōmānī pīlīs brev{iōribus:md} et lev{iōribus:md} pugnant quam Germānī.",
        "Mīlitēs Rōmānī fort{iōrēs:md} sunt quam Germānī et ducī fort{iōrī:md} pārent quam illī.",
        "Dux Rōmānus fort{ior:md} est quam dux Germānōrum et mīlitibus fort{iōribus:md} imperat quam ille.",
        "Cornēlius equum fōrmōs{iōrem:md} habet quam Iūlius; Cornēlius dominus equī fōrmōs{iōris:md} est.",
        "Ōrnāmenta fēminam pulchram pulchr{iōrem:md} facere possunt.",
        "Quod ōrnāmentum pulchr{ius:md} est quam ānulus gemmātus?"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "comparātīvus",
          "type": "table",
          "headers": ["", "sg. m./f.", "sg. n.", "pl. m./f.", "pl. n."],
          "rows": [
            ["nōm.", "-ior", "-ius", "-iōrēs", "-iōra"],
            ["acc.", "-iōrem", "-ius", "-iōrēs", "-iōra"],
            ["gen.", "-iōris", "-iōris", "-iōrum", "-iōrum"],
            ["dat.", "-iōrī", "-iōrī", "-iōribus", "-iōribus"],
            ["abl.", "-iōre", "-iōre", "-iōribus", "-iōribus"]
          ]
        }
      ],
      "references": ["comparativo"]
    },
    {
      "number": 15,
      "title": "Exercitium 15",
      "tag": "<em>castra</em>: acampamento, medidas e combate",
      "tip": {
        "text": "<em>Castra, -ōrum</em> é <strong>neutro plural</strong> mesmo quando designa um só acampamento — é <em>plūrāle tantum</em>, e leva verbo no plural (<em>castra sunt</em>). A altura e o comprimento vão em <strong>acusativo sem preposição</strong>: <em>decem pedēs altum</em>, <em>duo mīlia passuum longum</em>. Note <em>mīlia</em> + genitivo partitivo (<em>mīlia passuum</em>).",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Mīlitēs Rōmānī in {castrīs:md} habitant.",
        "Circum castra vāllum et {fossa:md} est.",
        "Vāllum prope <em>x</em> pedēs {altum:md} est et duo {mīlia:md} {passuum:md} longum. // [MM]",
        "Via quae castra in duās partēs {dīvidit:md} centum pedēs {lāta:md} est.",
        "Cum hostēs castra {oppugnant:md}, Rōmānī {vāllum:md} ascendunt.",
        "Hostēs castra {expugnāre:lg} nōn possunt, quia Rōmānī castra {dēfendunt:md}.",
        "Hostēs pīla in castra {iacere:md} nōn possunt.",
        "{Equitātus:lg} in hostēs {impetum:md} facit. // equitātus = equitēs",
        "Hostēs arma ad terram iaciunt ac {fugiunt:md}.",
        "Mīles {fortis:md} nōn fugit et sine {metū:md} hostēs oppugnat. // metus = timor",
        "Rhēnus est flūmen longum et lātum et {altum:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "castra Rōmāna",
          "type": "list",
          "items": [
            "<i>castra, -ōrum</i> (n. pl.) — acampamento",
            "<i>vāllum, -ī</i> — paliçada, muralha",
            "<i>fossa, -ae</i> — fosso",
            "<i>porta, via</i> — as duas vias cruzam o acampamento"
          ]
        },
        {
          "label": "mēnsūrae",
          "type": "list",
          "items": [
            "<i>pēs</i> ≈ 29,6 cm",
            "<i>passus</i> = quīnque pedēs",
            "<i>mīlle passūs</i> = quīnque mīlia pedum",
            "<i>duo mīlia passuum</i> (mīlia + gen. partitivo)"
          ]
        },
        {
          "label": "pugna",
          "type": "words",
          "inline": true,
          "words": [
            "<i>oppugnāre</i> — atacar",
            "<i>expugnāre</i> — tomar",
            "<i>dēfendere</i> — defender",
            "<i>iacere</i> — lançar",
            "<i>fugere</i> — fugir",
            "<i>impetus, -ūs</i> — investida",
            "<i>metus, -ūs</i> — medo"
          ]
        }
      ],
      "references": ["plurale-tantum", "quarta-declinacao", "genitivo-partitivo"]
    },
    {
      "number": "A",
      "title": "Exercitium A — <em>ferre</em>, imperativos e temas em vogal",
      "tag": "<em>fert/ferunt</em>; <em>fer! dūc! dīc! fac! es!</em>; <em>-i-</em> e <em>-u-</em> da 3ª",
      "tip": {
        "text": "<em>Ferre</em> é irregular porque as desinências se colam direto no radical <em>fer-</em>, sem vogal: <em>fer·t, fer·unt, fer·tur, fer·untur, fer·re</em>; imperativo <em>fer! ferte!</em> Outros quatro verbos perderam o <em>-e</em> do imperativo singular: <em>es!/este!</em>, <em>dūc!/dūcite!</em>, <em>dīc!/dīcite!</em>, <em>fac!/facite!</em> Na 3ª conjugação há temas em <em>-u-</em> (<em>flu·it, flu·unt</em>; <em>metu·it, metu·unt</em>) e em <em>-i-</em> (<em>capi·t → capit, capi·unt</em>; <em>iacit/iaciunt</em>, <em>fugit/fugiunt</em>).",
        "qualifier": "drill original — não está no livro"
      },
      "exemplum": "<em>fer|t · fer|unt · fer|tur · fer|untur · fer|re · fer! fer|te!</em>",
      "questions": [
        "Mīles scūtum {fert:md}; mīlitēs scūta {ferunt:md}.",
        "Scūtum ā mīlite {fertur:md}; scūta ā mīlitibus {feruntur:md}.",
        "Dux mīlitī: “{Fer:md} pīlum!” Dux mīlitibus: “{Ferte:md} pīla!”",
        "Iūlius Mēdō: “{Dūc:md} equum ad vīllam!” Iūlius servīs: “{Dūcite:md} equōs ad vīllam!”",
        "Aemilia Syrae: “{Dīc:md} nōmen tuum!” Aemilia ancillīs: “{Dīcite:md} nōmina vestra!”",
        "Dominus servō: “{Fac:md} id!” Dominus servīs: “{Facite:md} id!”",
        "Iūlius fīliō: “{Es:md} bonus!” Iūlius fīliīs: “{Este:md} bonī!”",
        "Hostis pīlum {iacit:md}; hostēs pīla {iaciunt:md}.",
        "Mīles quī metuit {fugit:md}; mīlitēs quī metuunt {fugiunt:md}.",
        "Rōmānus gladium {capit:md}; Rōmānī gladiōs {capiunt:md}.",
        "Sanguis dē bracchiō {fluit:md}; flūmina in mare {fluunt:md}.",
        "Puer canem {metuit:md}; puerī canēs {metuunt:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "imperativos irregulares",
          "type": "table",
          "headers": ["verbo", "sg.", "pl."],
          "rows": [
            ["ferre", "fer!", "ferte!"],
            ["esse", "es!", "este!"],
            ["dūcere", "dūc!", "dūcite!"],
            ["dīcere", "dīc!", "dīcite!"],
            ["facere", "fac!", "facite!"]
          ]
        },
        {
          "label": "3ª conj. — temas em vogal",
          "type": "table",
          "headers": ["inf.", "3ª sg.", "3ª pl."],
          "rows": [
            ["fluere (-u-)", "fluit", "fluunt"],
            ["metuere (-u-)", "metuit", "metuunt"],
            ["capere (-i-)", "capit", "capiunt"],
            ["iacere (-i-)", "iacit", "iaciunt"],
            ["fugere (-i-)", "fugit", "fugiunt"]
          ]
        }
      ],
      "references": ["ferre-imperativos-irregulares"]
    },
    {
      "number": "P1",
      "title": "Tabula P1 — dēclīnātiō quārta",
      "tag": "preencher: <em>manus, -ūs</em> (f.) e <em>exercitus, -ūs</em> (m.)",
      "kind": "paradigm",
      "tip": {
        "text": "Marca da 4ª: o <strong>u</strong> aparece em quase toda desinência. Genitivo sg. <em>-ūs</em> (não <em>-ī</em>), dativo sg. <em>-uī</em>, ablativo sg. <em>-ū</em>; no plural, <em>-ūs</em> (nom./acc.), <em>-uum</em> (gen.) e <em>-ibus</em> (dat./abl.). Quase todos são masculinos — <em>manus</em> é a exceção feminina.",
        "qualifier": null
      },
      "exemplum": null,
      "tables": [
        {
          "caption": "manus, -ūs <span class='paradigm-gender'>(f.)</span>",
          "cornerLabel": "cāsus",
          "columns": ["sg.", "pl."],
          "rows": [
            { "label": "nōm.", "cells": [{ "answer": "manus" }, { "answer": "manūs" }] },
            { "label": "acc.", "cells": [{ "answer": "manum" }, { "answer": "manūs" }] },
            { "label": "gen.", "cells": [{ "answer": "manūs" }, { "answer": "manuum" }] },
            { "label": "dat.", "cells": [{ "answer": "manuī" }, { "answer": "manibus" }] },
            { "label": "abl.", "cells": [{ "answer": "manū" }, { "answer": "manibus" }] }
          ]
        },
        {
          "caption": "exercitus, -ūs <span class='paradigm-gender'>(m.)</span>",
          "cornerLabel": "cāsus",
          "columns": ["sg.", "pl."],
          "rows": [
            { "label": "nōm.", "cells": ["exercitus", { "answer": "exercitūs" }] },
            { "label": "acc.", "cells": [{ "answer": "exercitum" }, { "answer": "exercitūs" }] },
            { "label": "gen.", "cells": [{ "answer": "exercitūs" }, { "answer": "exercituum" }] },
            { "label": "dat.", "cells": [{ "answer": "exercituī" }, { "answer": "exercitibus" }] },
            { "label": "abl.", "cells": [{ "answer": "exercitū" }, { "answer": "exercitibus" }] }
          ]
        }
      ],
      "auxilia": [
        {
          "label": "desinências",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "-us", "-ūs"],
            ["acc.", "-um", "-ūs"],
            ["gen.", "-ūs", "-uum"],
            ["dat.", "-uī", "-ibus"],
            ["abl.", "-ū", "-ibus"]
          ]
        }
      ],
      "references": ["quarta-declinacao"]
    },
    {
      "number": "P2",
      "title": "Tabula P2 — adiectīvum prīmae et secundae dēclīnātiōnis",
      "tag": "preencher: <em>altus, -a, -um</em>",
      "kind": "paradigm",
      "tip": {
        "text": "Revisão antes do contraste. O adjetivo da 1ª/2ª usa a <strong>2ª</strong> no masculino e no neutro (<em>altus, altum</em>) e a <strong>1ª</strong> no feminino (<em>alta</em>). O vocativo masculino singular é <em>alte</em> — a única forma que não coincide com o nominativo.",
        "qualifier": null
      },
      "exemplum": "Mūrus alt<em>us</em>. Porta alt<em>a</em>. Vāllum alt<em>um</em>.",
      "tables": [
        {
          "caption": "altus, -a, -um <span class='paradigm-gender'>(singulāris)</span>",
          "cornerLabel": "cāsus",
          "columns": ["m.", "f.", "n."],
          "rows": [
            { "label": "nōm.", "cells": ["altus", { "answer": "alta" }, { "answer": "altum" }] },
            { "label": "acc.", "cells": [{ "answer": "altum" }, { "answer": "altam" }, { "answer": "altum" }] },
            { "label": "gen.", "cells": [{ "answer": "altī" }, { "answer": "altae" }, { "answer": "altī" }] },
            { "label": "dat.", "cells": [{ "answer": "altō" }, { "answer": "altae" }, { "answer": "altō" }] },
            { "label": "abl.", "cells": [{ "answer": "altō" }, { "answer": "altā" }, { "answer": "altō" }] },
            { "label": "voc.", "cells": [{ "answer": "alte" }, "alta", "altum"] }
          ]
        },
        {
          "caption": "altus, -a, -um <span class='paradigm-gender'>(plūrālis)</span>",
          "cornerLabel": "cāsus",
          "columns": ["m.", "f.", "n."],
          "rows": [
            { "label": "nōm.", "cells": [{ "answer": "altī" }, { "answer": "altae" }, { "answer": "alta" }] },
            { "label": "acc.", "cells": [{ "answer": "altōs" }, { "answer": "altās" }, { "answer": "alta" }] },
            { "label": "gen.", "cells": [{ "answer": "altōrum" }, { "answer": "altārum" }, { "answer": "altōrum" }] },
            { "label": "dat.", "cells": [{ "answer": "altīs" }, { "answer": "altīs" }, { "answer": "altīs" }] },
            { "label": "abl.", "cells": [{ "answer": "altīs" }, { "answer": "altīs" }, { "answer": "altīs" }] }
          ]
        }
      ],
      "auxilia": [
        {
          "label": "desinências 1ª/2ª",
          "type": "table",
          "headers": ["", "m. sg./pl.", "f. sg./pl.", "n. sg./pl."],
          "rows": [
            ["nōm.", "-us / -ī", "-a / -ae", "-um / -a"],
            ["acc.", "-um / -ōs", "-am / -ās", "-um / -a"],
            ["gen.", "-ī / -ōrum", "-ae / -ārum", "-ī / -ōrum"],
            ["dat.", "-ō / -īs", "-ae / -īs", "-ō / -īs"],
            ["abl.", "-ō / -īs", "-ā / -īs", "-ō / -īs"]
          ]
        }
      ],
      "references": []
    },
    {
      "number": "P3",
      "title": "Tabula P3 — adiectīvum tertiae dēclīnātiōnis",
      "tag": "preencher: <em>gravis, grave</em>",
      "kind": "paradigm",
      "tip": {
        "text": "Duas formas no nominativo, não três: <em>gravis</em> para masculino <strong>e</strong> feminino, <em>grave</em> para o neutro. É <em>i-stem</em>: gen. pl. <strong>-ium</strong>, nom./acc. pl. neutro <strong>-ia</strong> — e, contra a regra dos substantivos, <strong>ablativo singular em -ī</strong>.",
        "qualifier": null
      },
      "exemplum": "Saccus grav<em>is</em>. Gemma grav<em>is</em>. Scūtum grav<em>e</em>.",
      "tables": [
        {
          "caption": "gravis, -e <span class='paradigm-gender'>(singulāris)</span>",
          "cornerLabel": "cāsus",
          "columns": ["m./f.", "n."],
          "rows": [
            { "label": "nōm.", "cells": [{ "answer": "gravis" }, { "answer": "grave" }] },
            { "label": "acc.", "cells": [{ "answer": "gravem" }, { "answer": "grave" }] },
            { "label": "gen.", "cells": [{ "answer": "gravis" }, { "answer": "gravis" }] },
            { "label": "dat.", "cells": [{ "answer": "gravī" }, { "answer": "gravī" }] },
            { "label": "abl.", "cells": [{ "answer": "gravī" }, { "answer": "gravī" }] }
          ]
        },
        {
          "caption": "gravis, -e <span class='paradigm-gender'>(plūrālis)</span>",
          "cornerLabel": "cāsus",
          "columns": ["m./f.", "n."],
          "rows": [
            { "label": "nōm.", "cells": [{ "answer": "gravēs" }, { "answer": "gravia" }] },
            { "label": "acc.", "cells": [{ "answer": "gravēs" }, { "answer": "gravia" }] },
            { "label": "gen.", "cells": [{ "answer": "gravium" }, { "answer": "gravium" }] },
            { "label": "dat.", "cells": [{ "answer": "gravibus" }, { "answer": "gravibus" }] },
            { "label": "abl.", "cells": [{ "answer": "gravibus" }, { "answer": "gravibus" }] }
          ]
        }
      ],
      "auxilia": [
        {
          "label": "desinências 3ª",
          "type": "table",
          "headers": ["", "m./f. sg.", "n. sg.", "m./f. pl.", "n. pl."],
          "rows": [
            ["nōm.", "-is", "-e", "-ēs", "-ia"],
            ["acc.", "-em", "-e", "-ēs", "-ia"],
            ["gen.", "-is", "-is", "-ium", "-ium"],
            ["dat.", "-ī", "-ī", "-ibus", "-ibus"],
            ["abl.", "-ī", "-ī", "-ibus", "-ibus"]
          ]
        }
      ],
      "references": ["adjetivos-terceira-declinacao"]
    },
    {
      "number": "P4",
      "title": "Tabula P4 — comparātīvus",
      "tag": "preencher: <em>longior, longius</em>",
      "kind": "paradigm",
      "tip": {
        "text": "O comparativo declina como <strong>consonantal</strong>, não como <em>i-stem</em>: abl. sg. <strong>-iōre</strong>, gen. pl. <strong>-iōrum</strong>, nom./acc. pl. n. <strong>-iōra</strong>. Compare com <em>gravis</em> da tabela anterior — é exatamente onde os dois divergem.",
        "qualifier": null
      },
      "exemplum": "Gladius long<em>ior</em>. Via long<em>ior</em>. Pīlum long<em>ius</em>.",
      "tables": [
        {
          "caption": "longior, longius <span class='paradigm-gender'>(singulāris)</span>",
          "cornerLabel": "cāsus",
          "columns": ["m./f.", "n."],
          "rows": [
            { "label": "nōm.", "cells": ["longior", "longius"] },
            { "label": "acc.", "cells": [{ "answer": "longiōrem" }, "longius"] },
            { "label": "gen.", "cells": [{ "answer": "longiōris" }, { "answer": "longiōris" }] },
            { "label": "dat.", "cells": [{ "answer": "longiōrī" }, { "answer": "longiōrī" }] },
            { "label": "abl.", "cells": [{ "answer": "longiōre" }, { "answer": "longiōre" }] }
          ]
        },
        {
          "caption": "longior, longius <span class='paradigm-gender'>(plūrālis)</span>",
          "cornerLabel": "cāsus",
          "columns": ["m./f.", "n."],
          "rows": [
            { "label": "nōm.", "cells": [{ "answer": "longiōrēs" }, { "answer": "longiōra" }] },
            { "label": "acc.", "cells": [{ "answer": "longiōrēs" }, { "answer": "longiōra" }] },
            { "label": "gen.", "cells": [{ "answer": "longiōrum" }, { "answer": "longiōrum" }] },
            { "label": "dat.", "cells": [{ "answer": "longiōribus" }, { "answer": "longiōribus" }] },
            { "label": "abl.", "cells": [{ "answer": "longiōribus" }, { "answer": "longiōribus" }] }
          ]
        }
      ],
      "auxilia": [
        {
          "label": "comparativo × positivo da 3ª",
          "type": "table",
          "headers": ["", "gravis (i-stem)", "gravior (cons.)"],
          "rows": [
            ["abl. sg.", "gravī", "graviōre"],
            ["gen. pl.", "gravium", "graviōrum"],
            ["nom./acc. pl. n.", "gravia", "graviōra"]
          ]
        }
      ],
      "references": ["comparativo"]
    }
  ]
};

export default chapter;
