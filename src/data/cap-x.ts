import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "x",
  "numeral": "X",
  "title": "Bēstiae et hominēs",
  "blurb": "Foco: <strong>infinitivo</strong> ativo (<em>-re</em>) e passivo (<em>-rī/-ī</em>); verbos modais <em>posse</em> e <em>velle</em>; <em>necesse est</em> + dativo; <em>cum</em> ('quando') e <em>quod</em> ('porque') como conjunções; 3ª declinação com nominativos irregulares e neutros (<em>flūmen, mare, animal</em>).",
  "grammarIntro": "O capítulo apresenta o <strong>infinitivo</strong> em todas as quatro conjugações, ativo e passivo. Junto vêm os verbos modais <em>posse</em> e <em>velle</em> (que pedem infinitivo), a construção impessoal <em>necesse est</em>, e o <strong>acusativo com infinitivo</strong> após verbos de percepção. Mais novidades na 3ª declinação: nominativos peculiares (<em>leō, homō, vōx</em>) e os primeiros neutros (<em>flūmen, mare, animal</em>).",
  "vocabularyIntro": "Vocabulário do mundo animal (<em>aquila, leō, piscis, asinus, ovis</em>) e da anatomia (<em>āla, cauda, pēs, pulmō, vōx</em>). Verbos novos abundam, pois o capítulo serve de plataforma para o infinitivo.",
  "exercises": [
    {
      "number": 1,
      "title": "Exercitium 1",
      "tag": "léxico do capítulo (bēstiae, partes do corpo, ações)",
      "tip": {
        "text": "Vocabulário central: <em>bēstia, homō, fera, piscis, avis, aquila, ālae, pedēs, cauda, volāre, natāre, capere, movere</em>. <em>Cum</em> aqui é conjunção temporal ('quando'); <em>quod</em>, conjunção causal ('porque').",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Lupus et canis et ovis {bēstiae:md} sunt.",
        "Virī et fēminae {hominēs:md} sunt.",
        "Lupus est bēstia {fera:md}; etiam leō bēstia {fera:md} est.",
        "In Āfricā sunt multī leōnēs et aliae {bēstiae:md} ferae.",
        "{Piscēs:md} sunt bēstiae quae in aquā {natant:md}.",
        "{Avēs:md} sunt bēstiae quae in āere {volant:md}.",
        "Aquila est magna avis fera quae parvās avēs {capit:md} et ēst.",
        "Avis quae volat ālās {movet:md}; piscis quī natat caudam {movet:md}.",
        "Homo duōs {pedēs:md} habet.",
        "{Cum:md} avis volat, ālae moventur. // conj. temporal",
        "Avis in {āere:md} volat, {ālae:md} moventur.",
        "Canis volāre nōn {potest:md}, quia ālās nōn habet.",
        "Hominēs ambulāre possunt, {quod:md} pedēs habent. // conj. causal",
        "Piscēs natāre {possunt:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "partes do corpo",
          "type": "list",
          "items": [
            "<i>āla, -ae</i> — asa",
            "<i>cauda, -ae</i> — cauda",
            "<i>pēs, pedis</i> — pé",
            "<i>vōx, vōcis</i> — voz"
          ]
        },
        {
          "label": "verbos",
          "type": "words",
          "inline": false,
          "words": [
            "<i>volāre, natāre, ambulāre</i>",
            "<i>movēre, capere</i>",
            "<i>posse</i> (potest/possunt)"
          ]
        }
      ],
      "references": ["cum-quod-conjuncoes", "posse-velle"]
    },
    {
      "number": 3,
      "title": "Exercitium 3",
      "tag": "<em>leō</em> e <em>homō</em> — nominativos irregulares na 3ª",
      "tip": {
        "text": "Atenção ao radical: <em>leō → leōn-</em>; <em>homō → homin-</em>. O nominativo singular esconde o radical, que aparece no genitivo (<em>leōnis, hominis</em>) e em todos os demais casos. Use as desinências gerais da 3ª: acus. <em>-em</em>, gen. <em>-is</em>, dat. <em>-ī</em>, abl. <em>-e</em>; pl. <em>-ēs / -um / -ibus</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "In Āfricā sunt multī leō{nēs:md}.",
        "In Āfricā magnus numerus leō{num:md}. // gen. pl.",
        "Multī homō{nēs|hominēs:md} Rōmae habitant.",
        "Rōmae habitat magnus numerus homō{num|hominum:md}.",
        "Leō nōn est amīcus homō{nis|hominis:md}, neque homō amīcus leō{nis:md}.",
        "Homō leō{nem:md} timet, et homō{nem|hominem:md} timet leō.",
        "Leō ab homō{ne|homine:md} timētur, et homō timētur ā leō{ne:md}.",
        "Leō{nēs:md} ab homō{nibus|hominibus:md} timentur, et homō{nēs|hominēs:md} timentur ā leō{nibus:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "<em>leō</em> (m.)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "leō", "leōnēs"],
            ["acc.", "leōnem", "leōnēs"],
            ["gen.", "leōnis", "leōnum"],
            ["dat.", "leōnī", "leōnibus"],
            ["abl.", "leōne", "leōnibus"]
          ]
        },
        {
          "label": "<em>homō</em> (m.)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "homō", "hominēs"],
            ["acc.", "hominem", "hominēs"],
            ["gen.", "hominis", "hominum"],
            ["dat.", "hominī", "hominibus"],
            ["abl.", "homine", "hominibus"]
          ]
        }
      ],
      "references": ["terceira-declinacao"]
    },
    {
      "number": 4,
      "title": "Exercitium 4",
      "tag": "infinitivo ativo (4 conjugações)",
      "tip": {
        "text": "Cada verbo tem seu infinitivo ditado pela conjugação: 1ª <em>-āre</em>, 2ª <em>-ēre</em>, 3ª (cons. e -iō) <em>-ere</em>, 4ª <em>-īre</em>. O presente da 3ª pessoa singular (<em>vol-at</em>, <em>nat-at</em>, <em>ambul-at</em>, <em>cad-it</em>) revela a conjugação.",
        "qualifier": null
      },
      "exemplum": "<em>volat → volāre</em> (1ª); <em>movet → movēre</em> (2ª); <em>cadit → cadere</em> (3ª); <em>venit → venīre</em> (4ª).",
      "questions": [
        "Avēs {volāre:lg} possunt; piscēs {natāre:lg} possunt.",
        "Equus {ambulāre:lg} et {currere:lg} potest.",
        "Ovēs lupum {audīre:lg} possunt, neque eum {vidēre:lg} possunt.",
        "Iūlia centum {numerāre:lg} nōn potest.",
        "Homo mortuus sē {movēre:lg} nōn potest.",
        "Sub aquā homō nōn potest {spīrāre:lg}.",
        "Sine animā nēmō potest {vīvere:lg}.",
        "Animam {dūcere:lg} necesse est hominī.",
        "Necesse nōn est gemmās {habēre:lg}.",
        "Quī gemmās vēndit pecūniam {facere:lg} potest."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "conjugações",
          "type": "table",
          "headers": ["", "pres. 3sg", "infinitivo"],
          "rows": [
            ["1ª (-ā)", "-at", "-āre"],
            ["2ª (-ē)", "-et", "-ēre"],
            ["3ª (cons.)", "-it", "-ere"],
            ["3ª (-iō)", "-it", "-ere"],
            ["4ª (-ī)", "-it", "-īre"]
          ]
        }
      ],
      "references": ["infinitivo"]
    },
    {
      "number": 5,
      "title": "Exercitium 5",
      "tag": "infinitivo ativo × passivo",
      "tip": {
        "text": "Mesmo infinitivo aparece em par ativo/passivo: 1ª <em>-āre/-ārī</em>, 2ª <em>-ēre/-ērī</em>, 3ª <em>-ere/-ī</em> (só <em>-ī</em> no passivo!), 4ª <em>-īre/-īrī</em>. Distinção sintática: quem age vai no nominativo (ativo), o agente vai em <em>ā/ab</em> + ablativo (passivo).",
        "qualifier": null
      },
      "exemplum": "<em>Iūlius Iūliam portāre potest</em> ↔ <em>Iūlia ā Iūliō portārī potest.</em>",
      "questions": [
        "Iūlia magnum saccum {portāre:lg} nōn potest.",
        "Magnus saccus ā parvā puellā {portārī:lg} nōn potest.",
        "Hominēs deōs neque {vidēre:lg} neque {audīre:lg} possunt.",
        "Deī neque {vidērī:lg} neque {audīrī:lg} possunt ab hominibus.",
        "Nēmō piscēs {numerāre:lg} potest: piscēs {numerārī:lg} nōn possunt.",
        "Quī pecūniam habet cibum {emere:lg} potest.",
        "Sine pecūniā cibus {emī:md} nōn potest. // 3ª: só -ī",
        "Mārcus et Quīntus nōn possunt lectīcam {vehere:lg}.",
        "Ā parvīs puerīs lectīca {vehī:md} nōn potest. // 3ª: só -ī",
        "Canis ōstium neque {aperīre:lg} neque {claudere:lg} potest.",
        "Ōstium ā cane neque {aperīrī:lg} neque {claudī:md} potest."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "inf. ativo × passivo",
          "type": "table",
          "headers": ["conj.", "ativo", "passivo"],
          "rows": [
            ["1ª", "-āre", "-ārī"],
            ["2ª", "-ēre", "-ērī"],
            ["3ª", "-ere", "<b>-ī</b>"],
            ["4ª", "-īre", "-īrī"]
          ]
        }
      ],
      "references": ["infinitivo", "posse-velle"]
    },
    {
      "number": 6,
      "title": "Exercitium 6",
      "tag": "léxico do capítulo (vivo/morto, anima, ninhos, ovos)",
      "tip": {
        "text": "Vocabulário central: <em>flūmen, mare, vīvere, spīrāre, anima, vīvus/mortuus, animal, nīdus, rāmus, folium, ōvum, parere, pullus, velle</em>. Para parir/pôr ovos, <em>parere</em> (3ª, -iō): sg. <em>parit</em>, pl. <em>pariunt</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Magnum {flūmen:md} est Nīlus.",
        "Ōceanus Atlanticus magnum {mare:md} est.",
        "Piscēs nōn in terrā, sed in aquā {vīvunt:md}.",
        "Cum homō spīrat, anima in {pulmōnēs:md} intrat et rūrsus exit.",
        "{Anima:md} est āer quī in pulmōnēs dūcitur.",
        "Quī spīrat {vīvus:md} est, quī nōn spīrat {mortuus:md} est.",
        "Sine animā et cibō {nēmō:md} potest vīvere.",
        "Spīrāre et ēsse hominibus {necesse:md} est.",
        "Hominēs et bēstiae {animālia:md} sunt.",
        "Avēs in arboribus {nīdōs:md} faciunt.",
        "Nīdī sunt inter {rāmōs:md} et folia arborum.",
        "In nīdīs sunt {ōva:md} aut pullī.",
        "Avēs ōva {pariunt:md}, ex quibus {pullī:md} exeunt.",
        "Ovis nōn ōva, sed pullōs vīvōs {parit:md}.",
        "Fēminae quae pecūniam facere {volunt:md} ōrnāmenta sua vēndunt."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "verbo <em>parere</em> (3ª, -iō)",
          "type": "list",
          "items": [
            "sg. <i>parit</i> — pl. <i>pariunt</i>",
            "inf. <i>parere</i>",
            "imp. <i>pare!</i>"
          ]
        },
        {
          "label": "morte/vida",
          "type": "words",
          "inline": true,
          "words": [
            "<i>vīvus / mortuus</i>",
            "<i>anima</i>",
            "<i>spīrāre</i>",
            "<i>vīvere</i>"
          ]
        }
      ],
      "references": ["necesse-est-dativo"]
    },
    {
      "number": 7,
      "title": "Exercitium 7",
      "tag": "3ª neutra: <em>flūmen, mare, animal</em>",
      "tip": {
        "text": "Regra dos neutros: <strong>nom. = acc.</strong>; <strong>pl. nom./acc. termina em -a</strong>. <em>Mare</em> e <em>animal</em> são <em>i-stems</em> (gen. pl. <em>-ium</em>, pl. <em>-ia</em>, abl. sg. <em>-ī</em>). <em>Flūmen</em> é consonantal (gen. pl. <em>-um</em>, abl. sg. <em>-e</em>).",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Nīlus magn{um:md} flūm{en:md} est.",
        "Nīlus et Rhēnus magn{a:md} flūm{ina:md} sunt.",
        "Mārcus et Quīntus in parvō flūm{ine:md} natant.",
        "Puerī in aquā flūm{inis:md} natant.",
        "Parva flūm{ina:md} magnō flūm{inī:md} aquam dant.",
        "Ōceanus magn{um:md} mar{e:md} est.",
        "Inter Eurōpam et Āfricam mult{a:md} mar{ia:md} sunt.",
        "In Ōceanō et in cēterīs mar{ibus:md} multī sunt piscēs.",
        "In flūm{ine:md} quoque magnus numerus piscium est.",
        "Nēmō piscēs mar{ium:md} et flūm{inum:md} numerāre potest.",
        "Piscēs sunt animāl{ia:md} quae vīvunt in mar{ī:md}.",
        "Leō est animal qu{od:md} in terrā vīvit. // relativo neutro",
        "Magnus numerus animāl{ium:md} in terrā vīvunt.",
        "Parva animāl{ia:md} ā magnīs animāl{ibus:md} eduntur."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "neutros da 3ª",
          "type": "table",
          "headers": ["", "flūmen sg.", "flūmen pl.", "mare sg.", "mare pl."],
          "rows": [
            ["nōm./acc.", "flūmen", "flūmina", "mare", "maria"],
            ["gen.", "flūminis", "flūminum", "maris", "marium"],
            ["dat.", "flūminī", "flūminibus", "marī", "maribus"],
            ["abl.", "flūmine", "flūminibus", "marī", "maribus"]
          ]
        }
      ],
      "references": ["terceira-neutra"]
    },
    {
      "number": 11,
      "title": "Exercitium 11 — transformações de infinitivo",
      "tag": "passivo ↔ ativo do infinitivo",
      "tip": {
        "text": "Dado o presente de 3ª pessoa, derive o infinitivo ativo (-āre/-ēre/-ere/-īre). Dado o infinitivo ativo, derive o passivo (-ārī/-ērī/-ī/-īrī). Atenção: 3ª faz passivo só com <em>-ī</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "<em>intrat</em> → inf. ativo {intrāre:lg}",
        "<em>tacet</em> → inf. ativo {tacēre:lg}",
        "<em>discēdit</em> → inf. ativo {discēdere:lg}",
        "<em>venit</em> → inf. ativo {venīre:lg}",
        "<em>vocāre</em> → inf. passivo {vocārī:lg}",
        "<em>vidēre</em> → inf. passivo {vidērī:lg}",
        "<em>pōnere</em> → inf. passivo {pōnī:md}",
        "<em>audīre</em> → inf. passivo {audīrī:lg}"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "regra rápida",
          "type": "list",
          "items": [
            "1ª/2ª/4ª: ativo <em>-re</em> → passivo <em>-rī</em>",
            "3ª: ativo <em>-ere</em> → passivo <em>-ī</em> (só!)"
          ]
        }
      ],
      "references": ["infinitivo"]
    },
    {
      "number": 12,
      "title": "Exercitium 12 — paradigma neutro da 3ª",
      "tag": "<em>mare</em> (i-stem) × <em>animal</em> (i-stem)",
      "tip": {
        "text": "Os dois são i-stems neutros: gen. pl. <em>-ium</em>, pl. nom./acc. <em>-ia</em>, abl. sg. <em>-ī</em>. <em>Mare</em> mantém o radical <em>mar-</em>; <em>animal</em> usa <em>animāl-</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Nōm./acc. sg.: mar{e:md}; animal.",
        "Nōm./acc. pl.: mar{ia:md}; animāl{ia:md}.",
        "Gen. sg.: mar{is:md}; animāl{is:md}.",
        "Gen. pl.: mar{ium:md}; animāl{ium:md}.",
        "Dat./abl. sg.: mar{ī:md}; animāl{ī:md}. // i-stem: abl. sg. em -ī",
        "Dat./abl. pl.: mar{ibus:md}; animāl{ibus:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "neutro i-stem",
          "type": "list",
          "items": [
            "pl. n./a. em <b>-ia</b> (não -a)",
            "gen. pl. <b>-ium</b>",
            "abl. sg. <b>-ī</b> (não -e)"
          ]
        }
      ],
      "references": ["terceira-neutra"]
    }
  ]
};

export default chapter;
