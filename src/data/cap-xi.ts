import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "xi",
  "numeral": "XI",
  "title": "Corpus Hūmānum",
  "blurb": "Foco: <strong>acusativo com infinitivo</strong> no discurso indireto (<em>dīcere, putāre, iubēre, gaudēre, sentīre</em>); <strong>neutros da 3ª declinação</strong> (<em>corpus, ōs, crūs, caput, cor</em>); infinitivo <em>posse</em>; preposição <em>dē</em> + ablativo; ablativo de respeito; possessivo <em>noster</em>; conjunções <em>atque/ac</em> e <em>neque/nec</em>.",
  "grammarIntro": "O capítulo tem duas grandes novidades. A primeira é morfológica: os <strong>neutros da 3ª declinação</strong> — <em>corpus, pectus, ōs, crūs, iecur, caput, cor, viscera</em> — todos consonantais, com o radical revelado pelo genitivo. A segunda é sintática e é a mais importante do livro até aqui: o <strong>acusativo com infinitivo</strong> (<em>accūsātīvus cum īnfīnītīvō</em>), a forma latina do discurso indireto. Somam-se a isso o infinitivo <em>posse</em>, a preposição <em>dē</em> + ablativo, o ablativo de respeito (<em>pede aeger</em>), o possessivo <em>noster</em> e as conjunções <em>atque/ac</em>, <em>neque/nec</em>.",
  "vocabularyIntro": "Vocabulário quase todo anatômico: os membros (<em>bracchium, crūs, manus, pēs</em>), a cabeça (<em>caput, ōs, auris, frōns, gena, capillus, lingua, labrum, cerebrum</em>) e as vísceras (<em>pectus, cor, iecur, venter, sanguis, vēna</em>). Com o médico chegam também <em>medicus, culter, pōculum</em> e os verbos do atendimento: <em>aegrōtāre, sānāre, spectāre, tangere, sentīre, dolēre, appōnere, dētergēre</em>.",
  "exercises": [
    {
      "number": 1,
      "title": "Exercitium 1",
      "tag": "neutros da 3ª — <em>corpus, crūs, caput, ōs</em>",
      "tip": {
        "text": "Quatro neutros consonantais: <em>corpus, corpor-is</em>; <em>crūs, crūr-is</em>; <em>caput, capit-is</em>; <em>ōs, ōr-is</em>. Regra dos neutros: <strong>nom. = acc.</strong>, e o <strong>plural nom./acc. termina em -a</strong>. O <em>-s</em> final entre vogais vira <em>-r-</em> no radical (<em>corpus → corpor-</em>, <em>crūs → crūr-</em>, <em>ōs → ōr-</em>).",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "In corp{ore:md} hūmānō nōn ūn{um:md} crūs, sed duo crūr{a:md} sunt.",
        "Corp{us:md} hūmān{um:md} duo bracchia et duo crūr{a:md} habet.",
        "In crūr{ibus:md} pedēs sunt.",
        "In corp{ore:md} hūmānō ūn{um:md} caput est, nōn duo capit{a:md}.",
        "In capit{e:md} est ūn{um:md} ōs, nōn duo ōr{a:md}.",
        "Quot capit{a:md} et quot ōr{a:md} habent duo corp{ora:md}?"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "radicais",
          "type": "list",
          "items": [
            "<i>corpus, corpor·is</i> — corpo",
            "<i>crūs, crūr·is</i> — perna",
            "<i>caput, capit·is</i> — cabeça",
            "<i>ōs, ōr·is</i> — boca"
          ]
        },
        {
          "label": "neutro da 3ª (consonantal)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm./acc.", "corpus", "corpora"],
            ["gen.", "corporis", "corporum"],
            ["dat.", "corporī", "corporibus"],
            ["abl.", "corpore", "corporibus"]
          ]
        }
      ],
      "references": ["terceira-neutra-xi"]
    },
    {
      "number": 2,
      "title": "Exercitium 2",
      "tag": "léxico do corpo humano",
      "tip": {
        "text": "Vocabulário central: <em>membrum, bracchium, crūs, manus, caput, auris, ōs, labrum, lingua, frōns, gena, capillus, pectus, cor, sanguis, vēna, color, venter, iecur, viscera</em>. Atenção às preposições de posição: <em>super</em> e <em>suprā</em> (+ acus., 'acima'), <em>īnfrā</em> (+ acus., 'abaixo').",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "In {corpore:md} hūmānō sunt quattuor {membra:md}: duo {bracchia:md} et duo {crūra:md}.",
        "In bracchiō {manus:md} est, in crūre pēs.",
        "In {capite:md} sunt duo oculī, duae {aurēs:md}, ūnus nāsus, ūnum {ōs:md}.",
        "Ōs est inter duo {labra:md}; in ōre sunt dentēs et {lingua:md}.",
        "Lingua et labra {rubra:md} sunt ut rosae.",
        "Suprā oculōs {frōns:md} est, {īnfrā:md} oculōs sunt {genae:md}.",
        "{Super:md} caput capillus est.",
        "{Capillus:md} virōrum nōn tam longus est quam fēminārum.",
        "Quī oculōs bonōs habet {bene:md} videt.",
        "Quī oculōs malōs habet {male:md} videt.",
        "Īnfrā collum est {pectus:md}, in quō {cor:md} et pulmōnēs sunt.",
        "In corde est {sanguis:md}, cuius {color:md} ruber est.",
        "Sanguis per {vēnās:md} ad cor {fluit:md}.",
        "Īnfrā pulmōnēs est {venter:md}, in quō cibus est.",
        "Cor, pulmōnēs, {iecur:md}, venter sunt {viscera:md} hūmāna.",
        "Quī ventrem malum habet nōn est {sānus:md}, sed {aeger:md}.",
        "{Medicus:md} est vir quī hominēs aegrōs {sānat:md}. // = sānōs facit",
        "Aemilia apud lectum Quīntī {sedet:md}.",
        "Syra quoque adest, neque ea sedet, sed {stat:md}.",
        "Māter fīliō suō aquam in {pōculō:md} dat {atque:md} fīlius aquam bibit. // atque = et"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "membra et viscera",
          "type": "words",
          "inline": false,
          "words": [
            "<i>membrum, bracchium, crūs, manus, pēs</i>",
            "<i>caput, auris, ōs, labrum, lingua, frōns, gena</i>",
            "<i>pectus, cor, iecur, venter, viscera</i>",
            "<i>sanguis, vēna, color, capillus, cerebrum</i>"
          ]
        },
        {
          "label": "posição",
          "type": "list",
          "items": [
            "<i>super</i> / <i>suprā</i> + acus. — acima de",
            "<i>īnfrā</i> + acus. — abaixo de",
            "<i>sub</i> + abl. — sob"
          ]
        }
      ],
      "references": ["terceira-neutra-xi"]
    },
    {
      "number": 4,
      "title": "Exercitium 4",
      "tag": "adjetivos em <em>-er</em>: <em>pulcher, aeger, niger, ruber</em>",
      "tip": {
        "text": "Estes adjetivos são da 1ª/2ª declinação, mas o nominativo masculino termina em <strong>-er</strong> em vez de <em>-us</em>. Em <em>pulcher, aeger, niger, ruber</em> o <em>e</em> some nas demais formas: <em>pulchra, pulchrum; aegra, aegrum; nigra, nigrum; rubra, rubrum</em>.",
        "qualifier": null
      },
      "exemplum": "<em>niger</em> (m.) — <em>nigra</em> (f.) — <em>nigrum</em> (n.)",
      "questions": [
        "Syra pulch{ra:md} nōn est neque nāsus eius pulch{er:md} est.",
        "Ūna ovis nig{ra:md} est, cēterae sunt albae.",
        "Canis pāstōris nōn est albus, sed nig{er:md}.",
        "Quīntus aeg{er:md} est, Iūlia aeg{ra:md} nōn est.",
        "Māter fīliō aeg{rō:md} mālum rub{rum:md} dat.",
        "Quīntus dentem nig{rum:md} habet.",
        "Dēns nig{er:md} nōn est sānus, sed aeg{er:md}.",
        "Capillus Mēdī nōn rub{er:md}, sed nig{er:md} est."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "tipo <em>-er, -ra, -rum</em>",
          "type": "table",
          "headers": ["m.", "f.", "n."],
          "rows": [
            ["pulcher", "pulchra", "pulchrum"],
            ["aeger", "aegra", "aegrum"],
            ["niger", "nigra", "nigrum"],
            ["ruber", "rubra", "rubrum"]
          ]
        }
      ],
      "references": ["adjetivos-er"]
    },
    {
      "number": 5,
      "title": "Exercitium 5",
      "tag": "imperativo → <em>iubēre</em> + acusativo com infinitivo",
      "tip": {
        "text": "Uma ordem direta (imperativo) vira discurso indireto com <em>iubēre</em>: quem recebe a ordem passa ao <strong>acusativo</strong> e o verbo ao <strong>infinitivo</strong>. Imperativos: 1ª <em>-ā/-āte</em>, 2ª <em>-ē/-ēte</em>, 3ª <em>-e/-ite</em>, 4ª <em>-ī/-īte</em>.",
        "qualifier": null
      },
      "exemplum": "Dominus: “Tacē, serve!” → <em>Dominus servum tacēre iubet.</em> — Dominus: “Tacēte, servī!” → <em>Dominus servōs tacēre iubet.</em>",
      "questions": [
        "Medicus: “Ōs aper{ī:md}, puer, et linguam ostend{e:md}!” Medicus puer{um:md} ōs aper{īre:md} et linguam ostend{ere:md} iubet.",
        "Lȳdia: “Cōnsist{e:md}, Mēde! Aspic{e:md} tabernam!” Lȳdia Mēd{um:md} cōnsist{ere:md} et tabernam aspic{ere:md} iubet.",
        "Iūlius: “Curr{ite:md} in hortum, puerī!” Iūlius puer{ōs:md} in hortum curr{ere:md} iubet.",
        "Iūlius: “Curr{e:md}, Mārce!” Iūlius Mārc{um:md} curr{ere:md} iubet.",
        "Domina: “Aper{īte:md} fenestrās, ancillae!” Domina ancill{ās:md} fenestrās aper{īre:md} iubet.",
        "Aemilia: “Claud{e:md} oculōs atque dorm{ī:md}, Quīnte!” Aemilia Quīnt{um:md} oculōs claud{ere:md} atque dorm{īre:md} iubet.",
        "Syra: “Terg{ē:md} oculōs, Iūlia! Es laeta!” Syra Iūli{am:md} oculōs terg{ēre:md} et laetam {esse:md} iubet."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "imperativo sg./pl.",
          "type": "table",
          "headers": ["conj.", "sg.", "pl."],
          "rows": [
            ["1ª", "-ā", "-āte"],
            ["2ª", "-ē", "-ēte"],
            ["3ª", "-e", "-ite"],
            ["4ª", "-ī", "-īte"]
          ]
        },
        {
          "label": "acusativo do nome",
          "type": "words",
          "inline": true,
          "words": [
            "<i>puer → puerum</i>",
            "<i>puerī → puerōs</i>",
            "<i>ancillae → ancillās</i>",
            "<i>Iūlia → Iūliam</i>"
          ]
        }
      ],
      "references": ["acusativo-cum-infinitivo"]
    },
    {
      "number": 6,
      "title": "Exercitium 6",
      "tag": "discurso direto → indireto com <em>vidēre</em> e <em>dīcere</em>",
      "tip": {
        "text": "A oração independente <em>Puer dormit</em> torna-se, dentro de outra oração, <em>puerum dormīre</em>: o sujeito passa ao <strong>acusativo</strong> e o verbo ao <strong>infinitivo</strong>. Se a frase tem predicativo (<em>lingua rubra est</em>), tanto o sujeito quanto o predicativo vão ao acusativo e <em>est</em> vira <em>esse</em>.",
        "qualifier": null
      },
      "exemplum": "Iūlia canit. → <em>Mārcus Iūliam canere audit.</em> — Mārcus: “Iūlia canit.” → <em>Mārcus ‘Iūliam canere’ dīcit.</em>",
      "questions": [
        "Puer dorm{it:md}. Medicus puer{um:md} dorm{īre:md} videt.",
        "Medicus: “Puer dorm{it:md}.” Medicus ‘puer{um:md} dorm{īre:md}’ dīcit.",
        "Lingu{a:md} puerī rubr{a:md} est. Medicus lingu{am:md} eius rubr{am:md} {esse:md} videt.",
        "Medicus: “Lingu{a:md} eius rubr{a:md} est.” Medicus ‘lingu{am:md} eius rubr{am:md} {esse:md}’ dīcit.",
        "Pēs dol{et:md}. Quīntus ped{em:md} dol{ēre:md} sentit.",
        "Quīntus: “Pēs dol{et:md}!” Quīntus ‘ped{em:md} dol{ēre:md}’ dīcit.",
        "Servī clām{ant:md} et rīd{ent:md}. Aemilia serv{ōs:md} clām{āre:md} et rīd{ēre:md} audit.",
        "Aemilia: “Servī clām{ant:md} et rīd{ent:md}!” Aemilia ‘serv{ōs:md} clām{āre:md} et rīd{ēre:md}’ dīcit.",
        "Saccul{us:md} Dāvī vacu{us:md} est. Iūlius saccul{um:md} vacu{um:md} {esse:md} videt.",
        "Iūlius: “Saccul{us:md} Dāvī vacu{us:md} est.” Iūlius dīcit ‘saccul{um:md} Dāvī vacu{um:md} {esse:md}’."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "a transformação",
          "type": "table",
          "headers": ["direto", "indireto"],
          "rows": [
            ["Puer dormit.", "puerum dormīre"],
            ["Pēs dolet.", "pedem dolēre"],
            ["Servī rīdent.", "servōs rīdēre"],
            ["Lingua rubra est.", "linguam rubram esse"]
          ]
        }
      ],
      "references": ["acusativo-cum-infinitivo"]
    },
    {
      "number": 8,
      "title": "Exercitium 8",
      "tag": "<em>putāre</em> + acusativo com infinitivo",
      "tip": {
        "text": "<em>Putāre</em> ('achar, julgar') rege acusativo com infinitivo, como <em>dīcere</em> e <em>vidēre</em>. Quando o conteúdo é 'X é Y', o infinitivo é <em>esse</em> e <strong>tanto o sujeito quanto o predicativo ficam no acusativo</strong>: <em>Syra Quīntum mortuum esse putat.</em>",
        "qualifier": null
      },
      "exemplum": "Mārcus male canit (na opinião de Iūlia) → <em>Iūlia Mārcum male canere putat.</em>",
      "questions": [
        "Iūlia bene can{it:md}, sed Mārcus e{am:md} male can{ere:md} putat.",
        "Quīnt{us:md} mortu{us:md} nōn est, sed Syra putat Quīnt{um:md} mortu{um:md} esse.",
        "Iūlius et Aemilia medic{um:md} stult{um:md} {esse:md} putant.",
        "Quīnt{us:md} oculōs claud{it:md} neque dorm{it:md}; Aemilia Quīnt{um:md} oculōs claud{ere:md} videt et e{um:md} dorm{īre:md} putat.",
        "Dāvus Mēd{um:md} putat nummōs Iūliī hab{ēre:md}.",
        "Mēdus preti{um:md} ānulī nimis magn{um:md} {esse:md} putat.",
        "Lȳdia putat ānul{um:md} gemmāt{um:md} pulchr{um:md} {esse:md}.",
        "Puerī nās{um:md} Iūliae foed{um:md} {esse:md} putant atque dīcunt!",
        "Vi{a:md} long{a:md} nōn est, sed servī quī lectīcam portant vi{am:md} long{am:md} {esse:md} putant.",
        "Rōmānī de{um:md} Neptūn{um:md} in marī vīv{ere:md} putant; Mercuri{um:md} autem putant inter caelum et terram vol{āre:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "com <em>esse</em>",
          "type": "list",
          "items": [
            "<i>Ānulus pulcher est.</i> → <i>ānulum pulchrum esse</i>",
            "<i>Via longa est.</i> → <i>viam longam esse</i>",
            "<i>Pretium magnum est.</i> → <i>pretium magnum esse</i>"
          ]
        }
      ],
      "references": ["acusativo-cum-infinitivo"]
    },
    {
      "number": 9,
      "title": "Exercitium 9",
      "tag": "léxico do médico; <em>dē</em> + abl., <em>nec</em>, <em>noster</em>",
      "tip": {
        "text": "Verbos do atendimento: <em>arcessere, revenīre, aegrōtāre, spectāre, tangere, sentīre, dolēre, appōnere, dētergēre, horrēre, palpitāre, gaudēre</em>. <em>Dētergēre</em> é da 2ª: 3ª pess. sg. <em>dēterget</em>. Note <em>dē</em> + ablativo ('de cima de'), <em>nec</em> = <em>neque</em>, <em>noster</em> = 'nosso' e <em>modo</em> = 'só, apenas'.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Servus Iūliī Tūsculum it atque medicum {arcessit:md}.",
        "Servus cum medicō ad vīllam {revenit:md}. // = rūrsus venit",
        "Medicus interrogat: “Quis {aegrōtat:md}?” // = aeger est",
        "Medicus linguam Quīntī {spectat:md}. // = aspicit",
        "Medicus digitum in pedem puerī impōnit: medicus pedem eius {tangit:md}.",
        "Quīntus digitum medicī in pede suō {sentit:md}.",
        "Quīntus: “Ei! Pēs {dolet:md}!” Quīntus ‘pedem dolēre’ {dīcit:md}.",
        "Medicus puerum oculōs claudere iubet, et {cultrum:md} sūmit.",
        "Medicus cultrum ad bracchium Quīntī {appōnit:md}.",
        "Puer sanguinem {dē:md} bracchiō fluere sentit; capillī {horrent:md}, cor {palpitat:md}.",
        "Quīntus {quiētus:md} iacet {nec:md} oculōs aperit; itaque Syra eum mortuum esse {putat:md}. // nec = neque",
        "Māter {gaudet:md} quod fīlius vīvit. // = laeta est",
        "Aemilia sanguinem dē bracchiō Quīntī {dēterget:md}.",
        "Iūlius: “Iam fīlius {noster:md} nōn {modo:md} pede, sed etiam bracchiō aeger est.” // noster = meus et tuus; modo = sōlum"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "verba nova",
          "type": "words",
          "inline": false,
          "words": [
            "<i>arcessere, appōnere, tangere, dīcere, fluere</i>",
            "<i>dētergēre (dēterget), dolēre, gaudēre, horrēre, iubēre</i>",
            "<i>aegrōtāre, palpitāre, putāre, sānāre, spectāre</i>",
            "<i>revenīre, sentīre</i>"
          ]
        },
        {
          "label": "palavras pequenas",
          "type": "list",
          "items": [
            "<i>dē</i> + abl. — de (cima de)",
            "<i>nec</i> = <i>neque</i>; <i>ac</i> = <i>atque</i>",
            "<i>noster, -tra, -trum</i> — nosso",
            "<i>modo</i> = <i>sōlum, tantum</i>",
            "<i>quiētus, -a, -um</i> — quieto"
          ]
        }
      ],
      "references": ["de-ablativo", "atque-neque", "possessivos-noster", "ablativo-respeito"]
    },
    {
      "number": 10,
      "title": "Exercitium 10",
      "tag": "<em>quod</em> → acusativo com infinitivo depois de <em>gaudēre</em>",
      "tip": {
        "text": "A oração causal com <em>quod</em> pode ser reescrita como acusativo com infinitivo depois de <em>gaudēre</em>: <em>gaudet quod fīlius vīvit</em> = <em>fīlium vīvere gaudet</em>. Lembre que <em>abesse</em> e <em>adesse</em> são compostos de <em>esse</em>.",
        "qualifier": null
      },
      "exemplum": "Māter gaudet quod fīlius vīvit = <em>Māter fīlium vīvere gaudet.</em>",
      "questions": [
        "Quīntus gaudet quod medicus abest = Quīntus medic{um:md} {abesse:md} gaudet.",
        "Lȳdia gaudet quod Mēdus Rōmam venit = Lȳdia Mēd{um:md} Rōmam ven{īre:md} gaudet.",
        "Iūlius gaudet quod Dāvus servus probus est = Iūlius Dāv{um:md} serv{um:md} prob{um:md} {esse:md} gaudet.",
        "Lȳdia gaudet quod Mēdus pecūniam habet = Lȳdia Mēd{um:md} pecūniam hab{ēre:md} gaudet.",
        "Aemilia gaudet quod Iūlius adest = Aemilia Iūli{um:md} {adesse:md} gaudet.",
        "Pāstor gaudet quod ovis nigra vīvit = Pāstor ov{em:md} nigr{am:md} vīv{ere:md} gaudet."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "compostos de <em>esse</em>",
          "type": "list",
          "items": [
            "<i>adest</i> — inf. <i>adesse</i>",
            "<i>abest</i> — inf. <i>abesse</i>",
            "<i>potest</i> — inf. <i>posse</i>"
          ]
        }
      ],
      "references": ["acusativo-cum-infinitivo", "posse-xi"]
    },
    {
      "number": 12,
      "title": "Exercitium 12 — paradigma neutro da 3ª",
      "tag": "<em>corpus</em> (consonantal) × <em>mare</em> (i-stem)",
      "tip": {
        "text": "Compare os dois tipos de neutro: <em>corpus</em> é consonantal (pl. <em>-a</em>, gen. pl. <em>-um</em>, abl. sg. <em>-e</em>); <em>mare</em> é <em>i-stem</em> (pl. <em>-ia</em>, gen. pl. <em>-ium</em>, abl. sg. <em>-ī</em>). Nas questões finais, nomeie o caso em latim: <em>nōminātīvus, accūsātīvus, genitīvus, datīvus, ablātīvus</em>; <em>singulāris/plūrālis</em>.",
        "qualifier": null
      },
      "exemplum": "<em>corpus, corpor|is</em> — <em>mar|e, mar|is</em>",
      "questions": [
        "Nōm.: sg. corpus, pl. corpor{a:md}; sg. mar{e:md}, pl. mar{ia:md}.",
        "Acc.: sg. corpus, pl. corpor{a:md}; sg. mar{e:md}, pl. mar{ia:md}.",
        "Gen.: sg. corpor{is:md}, pl. corpor{um:md}; sg. mar{is:md}, pl. mar{ium:md}.",
        "Dat.: sg. corpor{ī:md}, pl. corpor{ibus:md}; sg. mar{ī:md}, pl. mar{ibus:md}.",
        "Abl.: sg. corpor{e:md}, pl. corpor{ibus:md}; sg. mar{ī:md}, pl. mar{ibus:md}.",
        "<em>Corpora</em> et <em>maria</em> {nōminātīvus:lg} aut {accūsātīvus:lg} plūrālis est.",
        "<em>Corpore</em> est {ablātīvus:lg} {singulāris:lg}.",
        "<em>Corporī</em> est {datīvus:lg} {singulāris:lg}.",
        "<em>Corporibus</em> et <em>maribus</em> est {datīvus:lg} aut {ablātīvus:lg} plūrālis.",
        "<em>Corporis</em> et <em>maris</em> {genitīvus:lg} {singulāris:lg} est.",
        "<em>Corporum</em> et <em>marium</em> est {genitīvus:lg} {plūrālis:lg}.",
        "<em>Corpus</em> et <em>mare</em> {nōminātīvus:lg} aut {accūsātīvus:lg} singulāris est.",
        "<em>Marī</em> est {datīvus:lg} aut {ablātīvus:lg} singulāris."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "desinências neutras da 3ª",
          "type": "table",
          "headers": ["", "cons. sg.", "cons. pl.", "i-stem sg.", "i-stem pl."],
          "rows": [
            ["nōm./acc.", "—", "-a", "-e", "-ia"],
            ["gen.", "-is", "-um", "-is", "-ium"],
            ["dat.", "-ī", "-ibus", "-ī", "-ibus"],
            ["abl.", "-e", "-ibus", "-ī", "-ibus"]
          ]
        },
        {
          "label": "nomes dos casos",
          "type": "words",
          "inline": true,
          "words": [
            "<i>nōminātīvus</i>",
            "<i>accūsātīvus</i>",
            "<i>genitīvus</i>",
            "<i>datīvus</i>",
            "<i>ablātīvus</i>",
            "<i>singulāris</i>",
            "<i>plūrālis</i>"
          ]
        }
      ],
      "references": ["terceira-neutra-xi"]
    },
    {
      "number": 13,
      "title": "Exercitium 13 — <em>accūsātīvus cum īnfīnītīvō</em>",
      "tag": "a construção e os verbos que a regem",
      "tip": {
        "text": "Na frase <em>Medicus ‘Quīntum dormīre’ dīcit</em>, <em>Quīntum</em> é acusativo (não nominativo) e <em>dormīre</em> é infinitivo (não indicativo). A construção aparece depois de <em>iubēre, vidēre, audīre, sentīre, dīcere, putāre, gaudēre</em> e de <em>necesse est</em>.",
        "qualifier": null
      },
      "exemplum": "Medicus ‘Quīntum dormīre’ dīcit: “Quīntus dormit.”",
      "questions": [
        "<em>Quīntum</em> nōn nōminātīvus, sed {accūsātīvus:lg} est; <em>dormīre</em> nōn indicātīvus, sed {īnfīnītīvus:lg} est.",
        "‘Quīntum dormīre’ est {accūsātīvus:lg} cum {īnfīnītīvō:lg}.",
        "Accūsātīvus cum īnfīnītīvō pōnitur apud haec verba: <em>iubēre</em>, {vidēre:lg}, {audīre:lg}, {sentīre:lg}, {dīcere:lg}, {putāre:lg}, {gaudēre:lg}, {necesse:md} est, cētera. // na ordem do Exercitium",
        "Mārcus Quīntum in arborem ascendere {iubet:md}: “In arborem ascende, Quīnte!”",
        "Quīntus in terrā iacet nec sē movet; itaque Mārcus eum mortuum esse {putat:md}.",
        "Mārcus clāmat. Iūlius Mārcum clāmāre {audit:md} et accurrere {videt:md}.",
        "Mārcus: “Quīntus mortuus est.” Mārcus {dīcit:md} ‘Quīntum mortuum esse.’",
        "Pater manum in pectus fīliī impōnit et cor eius palpitāre {sentit:md}.",
        "Iūlius laetus est: pater fīlium vīvere {gaudet:md}.",
        "Quīntus ambulāre nōn potest, ergō {necesse:md} est eum ā Iūliō portārī."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "verbos que regem acc. + inf.",
          "type": "table",
          "headers": ["verbo", "exemplo"],
          "rows": [
            ["vidēre, audīre, sentīre", "Medicus puerum dormīre videt."],
            ["iubēre", "Dominus servum venīre iubet."],
            ["dīcere", "Quīntus ‘pedem dolēre’ dīcit."],
            ["putāre", "Syra Quīntum mortuum esse putat."],
            ["gaudēre", "Aemilia fīlium vīvere gaudet."],
            ["necesse est", "Puerum dormīre necesse est."]
          ]
        }
      ],
      "references": ["acusativo-cum-infinitivo", "posse-xi"]
    }
  ]
};

export default chapter;
