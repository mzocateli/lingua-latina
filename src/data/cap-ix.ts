import type { Chapter } from '~/lib/types';

const chapter: Chapter = {
  "slug": "ix",
  "numeral": "IX",
  "title": "Pāstor et ovēs",
  "blurb": "Foco: <em>terceira declinação</em> (consonantal e em -i); pronome <em>ipse, ipsa, ipsum</em>; conjunção <em>dum</em> ('enquanto' / 'até que'); verbo irregular <em>edere</em> (<em>ēst</em>/<em>edunt</em>); preposições <em>suprā</em> e <em>sub</em>.",
  "grammarIntro": "O capítulo apresenta a <strong>3ª declinação</strong> depois de revisar a 1ª e a 2ª. Inclui também o pronome enfático <em>ipse</em>, a conjunção <em>dum</em>, o verbo irregular <em>edere</em>, o imperativo curto <em>dūc!</em>, e regras sobre <em>suprā</em>/<em>sub</em>.",
  "vocabularyIntro": "Vocabulário rico em substantivos da 3ª declinação (<em>pāstor, ovis, mōns, arbor, nūbēs, dēns</em>) e em verbos do mundo rural (<em>bālāre, lātrāre, ululāre, errāre, iacēre, accurrere, dūcere, relinquere</em>).",
  "exercises": [
    {
      "number": 1,
      "title": "Exercitium 1",
      "tag": "terminações da 3ª (<em>canis</em>, <em>ovis</em>, <em>pāstor</em>)",
      "tip": {
        "text": "Olhe o <strong>caso</strong> exigido pelo contexto e a função sintática (sujeito? objeto? complemento de preposição? possuidor?). Lembre: <em>canis</em> e <em>ovis</em> têm acus. sg. <em>-em</em> e gen. pl. respectivamente <em>canum</em> e <em>ovium</em>. <em>Pāstor</em> tem gen. pl. <em>-um</em> (consonantal).",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Ecce pāstor cum can{e:md} et centum ov{ibus:md}. // companhia",
        "Pāstor ūnum can{em:md} et centum ov{ēs:md} habet. // objeto direto",
        "Pāstor est dominus can{is:md} et ov{ium:md}. // possuidor",
        "Pāstor can{ī:md} et ov{ibus:md} cibum dat. // destinatário",
        "Can{is:md} et ov{ēs:md} ā pāstōr{e:md} cibum accipiunt. // sujeito; agente",
        "Dominus huius pāstōr{is:md} est Iūlius. // possuidor",
        "Iūlius pāstōr{ī:md} suō pānem dat. // destinatário",
        "Iūlius nōn ūnum pāstōr{em:md}, sed multōs pāstōr{ēs:md} habet. // sg. e pl.",
        "Iūlius est dominus multōrum pāstōr{um:md}. // gen. pl. — consonantal",
        "Iūlius pāstōr{ibus:md} suīs pānem dat. // dat. pl.",
        "Pāstōr{ēs:md} pānem accipiunt ā dominō suō. // sujeito pl.",
        "Ovēs ā pāstōr{ibus:md} suīs nōn abeunt. // abl. pl."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "<em>canis</em> (m./f.)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "canis", "canēs"],
            ["acc.", "canem", "canēs"],
            ["gen.", "canis", "canum"],
            ["dat.", "canī", "canibus"],
            ["abl.", "cane", "canibus"]
          ]
        },
        {
          "label": "<em>ovis</em> (f., i-stem)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "ovis", "ovēs"],
            ["acc.", "ovem", "ovēs"],
            ["gen.", "ovis", "ovium"],
            ["dat.", "ovī", "ovibus"],
            ["abl.", "ove", "ovibus"]
          ]
        },
        {
          "label": "<em>pāstor</em> (m.)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "pāstor", "pāstōrēs"],
            ["acc.", "pāstōrem", "pāstōrēs"],
            ["gen.", "pāstōris", "pāstōrum"],
            ["dat.", "pāstōrī", "pāstōribus"],
            ["abl.", "pāstōre", "pāstōribus"]
          ]
        }
      ],
      "references": ["terceira-declinacao", "genitivo-plural-3a"]
    },
    {
      "number": 2,
      "title": "Exercitium 2",
      "tag": "léxico do capítulo (vocabulário)",
      "tip": {
        "text": "Vocabulário central: <em>campus, ovis, canis, cibus, herba, rīvus, pānis, mōns, vallis, collis, arbor, silva, lupus, sōl, caelum, nūbēs, terra, umbra, sub, suprā, niger/albus</em>. Atenção à concordância gramatical (pl., gênero).",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Pāstor in {campō:md} est cum {cane:md} et centum {ovibus:md}.",
        "Ūna ovis {nigra:md} est, cēterae sunt {albae:md}.",
        "{Pāstor:md} ovibus suīs aquam et {cibum:md} dat.",
        "Cibus ovium est {herba:md}; ovēs herbam {edunt:md}, et aquam {bibunt:md} ē {rīvō:md}.",
        "Cibus pāstōris est {pānis:md}; pāstor pānem {ēst:md}. // verbo irregular",
        "Post campum {montēs:md} sunt; inter montēs sunt {vallēs:md}.",
        "In campō est parvus {collis:md}, in quō ūna {arbor:md} est.",
        "In {silvā:md} multae arborēs sunt.",
        "In silvīs et in montibus sunt {lupī:md}, quī ovēs edunt.",
        "{Sōl:md} lūcet; nūlla nūbēs in {caelō:md} est.",
        "Caelum est {suprā:md} terram.",
        "In {terrā:md} sunt campī et silvae, montēs et vallēs.",
        "Sōl {lūcet:md}; nūlla {nūbēs:md} ante sōlem est.",
        "{Sub:md} arbore nōn sōl, sed {umbra:md} est.",
        "Pāstor ad arborem it: pāstor umbram {petit:md}.",
        "Pāstor ovēs suās ad arborem {dūcit:md}.",
        "Iam pāstor et ovēs sub arbore {iacent:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "geografia",
          "type": "words",
          "inline": false,
          "words": [
            "<i>campus, -ī</i> — campo",
            "<i>silva, -ae</i> — floresta",
            "<i>mōns, montis</i> — monte",
            "<i>vallis, vallis</i> — vale",
            "<i>collis, collis</i> — colina",
            "<i>rīvus, -ī</i> — riacho"
          ]
        },
        {
          "label": "animais",
          "type": "words",
          "inline": false,
          "words": [
            "<i>ovis, ovis</i> (f.)",
            "<i>canis, canis</i> (m./f.)",
            "<i>lupus, -ī</i> (m.)",
            "<i>pāstor, -ōris</i> (m.)"
          ]
        },
        {
          "label": "céu/sol",
          "type": "words",
          "inline": true,
          "words": [
            "<i>sōl</i>",
            "<i>caelum</i>",
            "<i>nūbēs</i>",
            "<i>umbra</i>"
          ]
        }
      ],
      "references": ["est-edere"]
    },
    {
      "number": 4,
      "title": "Exercitium 4",
      "tag": "concordância adjetival (<em>bonus, multus, ūnus, niger, albus</em>)",
      "tip": {
        "text": "O adjetivo concorda com seu substantivo em <em>gênero</em>, <em>número</em> e <em>caso</em>. Adjetivos da 1ª/2ª (<em>-us, -a, -um</em>) se declinam exatamente como <em>servus, fēmina, verbum</em>. Quando o substantivo é da 3ª, o adjetivo (da 1ª/2ª) usa a desinência apropriada ao seu próprio gênero/caso, não ao do substantivo.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Pāstor bon{us:md} ab ovibus nōn abit.",
        "Ovēs pāstōrem bon{um:md} amant.",
        "Iūlius est dominus pāstōris bon{ī:md}.",
        "Iūlius pāstōrī bon{ō:md} pānem dat.",
        "Ovēs ā pāstōre bon{ō:md} nōn abeunt.",
        "Pāstōrēs bon{ī:md} ab ovibus su{īs:md} nōn abeunt.",
        "Iūlius mult{ōs:md} pāstōrēs habet.",
        "Iūlius est dominus mult{ōrum:md} pāstōrum.",
        "Iūlius pāstōribus su{īs:md} pānem dat.",
        "Ovēs ā pāstōribus su{īs:md} nōn abeunt.",
        "In campō sunt mult{ae:md} ovēs alb{ae:md} et ūn{a:md} ovis nigr{a:md}.",
        "Pāstor mult{ās:md} ovēs alb{ās:md} et ūn{am:md} ovem nigr{am:md} habet.",
        "Pāstor est dominus ovium alb{ārum:md} et ovis nigr{ae:md}.",
        "Pāstor ovibus alb{īs:md} et ovī nigr{ae:md} cibum dat.",
        "Pāstor in campō est cum mult{īs:md} ovibus alb{īs:md} et ūn{ā:md} ove nigr{ā:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "<em>bonus, -a, -um</em>",
          "type": "table",
          "headers": ["", "m.", "f.", "n."],
          "rows": [
            ["nōm. sg.", "-us", "-a", "-um"],
            ["acc. sg.", "-um", "-am", "-um"],
            ["gen. sg.", "-ī", "-ae", "-ī"],
            ["dat. sg.", "-ō", "-ae", "-ō"],
            ["abl. sg.", "-ō", "-ā", "-ō"]
          ]
        }
      ],
      "references": ["terceira-declinacao"]
    },
    {
      "number": 5,
      "title": "Exercitium 5",
      "tag": "concordância com substantivos da 3ª (<em>nūbēs, collis, arbor, mōns</em>)",
      "tip": {
        "text": "Quando o substantivo é da 3ª declinação, o gênero não é óbvio pela desinência. Memorize: <em>nūbēs</em> (f.), <em>collis</em> (m.), <em>arbor</em> (f.), <em>mōns</em> (m.). O adjetivo segue o gênero correto e usa as desinências da 1ª/2ª.",
        "qualifier": null
      },
      "exemplum": "Pāstor fessus in umbrā magnae arboris iacet. (<em>fessus</em> concorda com <em>pāstor</em>, m. sg.; <em>magnae arboris</em> com <em>arbor</em>, f. sg. gen.)",
      "questions": [
        "In caelō nūllae nūb{ēs:md} sunt.",
        "Nūll{a:md} nūb{ēs:md} ante sōlem est.",
        "Pāstor nūll{am:md} nūbem in caelō videt.",
        "In campō est coll{is:md} parv{us:md} cum magn{ā:md} arbor{e:md}.",
        "Coll{is:md} est mōns parv{us:md}.",
        "Post campum sunt magn{ī:md} mont{ēs:md}.",
        "In parv{ō:md} coll{e:md} ūn{a:md} arbor est.",
        "In magnā silvā mult{ae:md} arbor{ēs:md} sunt.",
        "Pāstor ov{ēs:md} su{ās:md} ad parv{um:md} coll{em:md} dūcit.",
        "Pāstor fess{us:md} cum ov{ibus:md} su{īs:md} in umbrā magn{ae:md} arbor{is:md} iacet.",
        "Arbor pāstōr{ī:md} fess{ō:md} et ov{ibus:md} fess{īs:md} umbram dat."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "gêneros da 3ª (Cap. IX)",
          "type": "list",
          "items": [
            "<b>m.</b>: <i>pāstor, sōl, timor, clāmor, mōns, dēns, collis, pānis, canis</i>",
            "<b>f.</b>: <i>arbor, nūbēs, ovis, vallis</i>"
          ]
        }
      ],
      "references": ["terceira-declinacao"]
    },
    {
      "number": 6,
      "title": "Exercitium 6",
      "tag": "transformação: <em>abīre</em> ↔ <em>relinquere</em>",
      "tip": {
        "text": "<em>X ā Y abit</em> equivale a <em>X Y relinquit</em>: <em>abīre</em> exige <em>ab + ablativo</em>; <em>relinquere</em> exige <em>acusativo</em>. Vão e voltam um no outro. O modo <em>phrase</em> aceita ordem livre das palavras e <em>ab</em> ≡ <em>ā</em>.",
        "qualifier": null
      },
      "exemplum": "<em>Mēdus ā Iūliō abit</em> → <em>Mēdus Iūlium relinquit.</em>",
      "questions": [
        "Servus improbus ā dominō suō abit → {Servus improbus dominum suum relinquit:xxl}",
        "Servī probī dominōs suōs nōn relinquunt → {Servī probī ā dominīs suīs nōn abeunt:xxl}",
        "Mēdus et Lȳdia ā tabernā abeunt → {Mēdus et Lȳdia tabernam relinquunt:xxl}",
        "Iūlia ab Aemiliā et puerīs abit → {Iūlia Aemiliam et puerōs relinquit:xxl}",
        "Ovis nigra pāstōrem suum relinquit → {Ovis nigra ā pāstōre suō abit:xxl}",
        "Canis ā pāstōre nōn abit → {Canis pāstōrem nōn relinquit:xxl}",
        "Pāstor ovēs albās relinquit → {Pāstor ab ovibus albīs abit:xxl}",
        "Lupus ab ove et cane abit → {Lupus ovem et canem relinquit:xxl}"
      ],
      "phraseMode": true,
      "auxilia": [
        {
          "label": "verbos",
          "type": "list",
          "items": [
            "<i>abīre ab</i> + <b>abl.</b> — ir embora de",
            "<i>relinquere</i> + <b>acus.</b> — deixar, abandonar"
          ]
        },
        {
          "label": "<em>ab/ā</em>",
          "type": "list",
          "items": [
            "<i>ab</i> antes de vogal: <i>ab ove</i>",
            "<i>ā</i> antes de consoante: <i>ā pāstōre</i>"
          ]
        }
      ],
      "references": []
    },
    {
      "number": 7,
      "title": "Exercitium 7",
      "tag": "vocabulário narrativo (<em>dum, ipse, dentēs, accurrit, ut</em>)",
      "tip": {
        "text": "Vocabulário do drama do capítulo: ovelha negra, lobo, perseguição, salvamento. Atenção: <em>dum</em> = 'enquanto' (na narrativa) ou 'até que' (após <em>exspectāre</em>); <em>ipse</em> = 'em pessoa, o próprio'; <em>ut</em> = 'como' (comparação).",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "{Dum:md} pāstor dormit, ovis nigra abit. // enquanto",
        "Canis ovem videt et {lātrat:md}: 'Baubau!'",
        "Pāstor ovēs {relinquit:md} et silvam petit.",
        "Ovis nigra in magnā silvā {errat:md}. // vaga",
        "In terrā sunt {vestīgia:md} lupī; lupus {ipse:md} nōn procul abest. // pegadas; em pessoa",
        "Lupus in silvā cibum {quaerit:md}.",
        "Pāstor ovem quaerit, neque eam {reperit:md}. // acha",
        "Lupus {ululat:md}: 'Uhū!'; ovis {bālat:md}: 'Bābā!'",
        "Ovis cōnsistit et exspectat {dum:md} lupus venit. // até que",
        "Oculī lupī in umbrā lūcent {ut:md} gemmae. // como",
        "Lupus {dentēs:md} suōs albōs ostendit.",
        "Sed ecce canis {accurrit:md} et sine {timōre:md} lupum petit.",
        "Pāstor clāmat; canis {clāmōrem:md} eius audit.",
        "Pāstor parvam ovem in umerōs {impōnit:md}. // põe sobre"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "narrativa",
          "type": "words",
          "inline": false,
          "words": [
            "<i>errāre</i> — vagar",
            "<i>quaerere</i> — procurar",
            "<i>reperīre</i> — achar",
            "<i>relinquere</i> — abandonar",
            "<i>accurrere</i> — vir correndo",
            "<i>impōnere</i> — pôr sobre"
          ]
        },
        {
          "label": "sons",
          "type": "list",
          "items": [
            "<i>lātrāre</i> — latir",
            "<i>ululāre</i> — uivar",
            "<i>bālāre</i> — balir"
          ]
        }
      ],
      "references": ["dum-conjuncao", "ipse-pronome"]
    },
    {
      "number": 9,
      "title": "Exercitium 9 — paradigma (1ª)",
      "tag": "<em>vīlla</em>, gen. sg. <em>-ae</em>, f.",
      "tip": {
        "text": "Complete cada linha do paradigma. Lembrar: o <em>gen. sg.</em>, <em>dat. sg.</em> e <em>nōm. pl.</em> da 1ª declinação são <em>idênticos</em> (todos <em>-ae</em>) — só o contexto distingue.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Nōm.: sg. vīll{a:md}, pl. vīll{ae:md}.",
        "Acc.: sg. vīll{am:md}, pl. vīll{ās:md}.",
        "Gen.: sg. vīll{ae:md}, pl. vīll{ārum:md}.",
        "Dat.: sg. vīll{ae:md}, pl. vīll{īs:md}.",
        "Abl.: sg. vīll{ā:md}, pl. vīll{īs:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "1ª (-a)",
          "type": "table",
          "headers": ["", "sg.", "pl."],
          "rows": [
            ["nōm.", "-a", "-ae"],
            ["acc.", "-am", "-ās"],
            ["gen.", "-ae", "-ārum"],
            ["dat.", "-ae", "-īs"],
            ["abl.", "-ā", "-īs"]
          ]
        }
      ],
      "references": []
    },
    {
      "number": 10,
      "title": "Exercitium 10 — paradigma (2ª)",
      "tag": "<em>dominus</em> (m.) e <em>verbum</em> (n.)",
      "tip": {
        "text": "A 2ª distingue masculino (em <em>-us</em>) e neutro (em <em>-um</em>) apenas no nōm. e acus.; do gen. em diante as desinências são iguais. O neutro tem a regra fundamental: <em>nōm. sg. = acc. sg.</em>, e o <em>nōm./acc. pl.</em> é <em>-a</em>.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Nōm.: m. sg. domin{us:md}, m. pl. domin{ī:md}; n. sg. verb{um:md}, n. pl. verb{a:md}.",
        "Acc.: m. sg. domin{um:md}, m. pl. domin{ōs:md}; n. sg. verb{um:md}, n. pl. verb{a:md}.",
        "Gen.: m. sg. domin{ī:md}, m. pl. domin{ōrum:md}; n. sg. verb{ī:md}, n. pl. verb{ōrum:md}.",
        "Dat.: m. sg. domin{ō:md}, m. pl. domin{īs:md}; n. sg. verb{ō:md}, n. pl. verb{īs:md}.",
        "Abl.: m. sg. domin{ō:md}, m. pl. domin{īs:md}; n. sg. verb{ō:md}, n. pl. verb{īs:md}.",
        "Vōc. sg.: domin{e:md}. // chamamento"
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "2ª (-us / -um)",
          "type": "table",
          "headers": ["", "m. sg.", "m. pl.", "n. sg.", "n. pl."],
          "rows": [
            ["nōm.", "-us", "-ī", "-um", "-a"],
            ["acc.", "-um", "-ōs", "-um", "-a"],
            ["gen.", "-ī", "-ōrum", "-ī", "-ōrum"],
            ["dat.", "-ō", "-īs", "-ō", "-īs"],
            ["abl.", "-ō", "-īs", "-ō", "-īs"]
          ]
        }
      ],
      "references": []
    },
    {
      "number": 11,
      "title": "Exercitium 11 — paradigma (3ª)",
      "tag": "<em>pāstor</em> (m., consonantal) e <em>ovis</em> (f., i-stem)",
      "tip": {
        "text": "A diferença crítica entre as duas: <em>pāstor</em> tem <em>gen. pl. -um</em> (<em>pāstōrum</em>) e <em>ovis</em> tem <em>gen. pl. -ium</em> (<em>ovium</em>). Em todo o resto, as desinências são as mesmas.",
        "qualifier": null
      },
      "exemplum": null,
      "questions": [
        "Nōm.: m. sg. pāstor, m. pl. pāstōr{ēs:md}; f. sg. ov{is:md}, f. pl. ov{ēs:md}.",
        "Acc.: m. sg. pāstōr{em:md}, m. pl. pāstōr{ēs:md}; f. sg. ov{em:md}, f. pl. ov{ēs:md}.",
        "Gen.: m. sg. pāstōr{is:md}, m. pl. pāstōr{um:md}; f. sg. ov{is:md}, f. pl. ov{ium:md}.",
        "Dat.: m. sg. pāstōr{ī:md}, m. pl. pāstōr{ibus:md}; f. sg. ov{ī:md}, f. pl. ov{ibus:md}.",
        "Abl.: m. sg. pāstōr{e:md}, m. pl. pāstōr{ibus:md}; f. sg. ov{e:md}, f. pl. ov{ibus:md}."
      ],
      "phraseMode": false,
      "auxilia": [
        {
          "label": "3ª (consonantal × i)",
          "type": "table",
          "headers": ["", "cons. sg.", "cons. pl.", "i-stem sg.", "i-stem pl."],
          "rows": [
            ["nōm.", "—", "-ēs", "-is/-ēs", "-ēs"],
            ["acc.", "-em", "-ēs", "-em", "-ēs"],
            ["gen.", "-is", "<b>-um</b>", "-is", "<b>-ium</b>"],
            ["dat.", "-ī", "-ibus", "-ī", "-ibus"],
            ["abl.", "-e", "-ibus", "-e", "-ibus"]
          ]
        }
      ],
      "references": ["genitivo-plural-3a"]
    }
  ]
};

export default chapter;
