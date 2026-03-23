const SOURCE_SPEC = 'docs/specs/6e-blueprint-complet.md#module-1';

function createExercise(type, instruction, options = {}) {
  return {
    type,
    instruction,
    ...options,
  };
}

function createLesson(title, objective, spiralReview, exercises) {
  return {
    title,
    objective,
    spiralReview,
    exercises,
    officialRefs: ['bo-cycle3-2025'],
    sourceSpec: SOURCE_SPEC,
  };
}

export const module1LessonBlueprints = [
  createLesson(
    'Identifier une phrase et la ponctuer',
    'Repérer ce qui fait qu’une suite de mots forme une phrase correcte.',
    ['lecture de consigne', 'majuscule', 'point'],
    [
      createExercise(
        'repérage',
        `Lis 8 suites de mots. Indique pour chacune si elle forme une phrase complète. Coche « oui » seulement si la suite a un sens complet et un verbe conjugué.`
      ),
      createExercise(
        'tri',
        `Classe 10 exemples en deux colonnes : « phrase correcte » / « groupe de mots non phrastique ». Ne modifie aucun mot.`
      ),
      createExercise(
        'ponctuation-finale',
        `Choisis pour 8 phrases la ponctuation finale attendue parmi « . », « ? » et « ! ». Appuie-toi sur l’intention de la phrase.`
      ),
      createExercise(
        'segmentation',
        `Recopie un court texte sans ponctuation en séparant correctement 5 phrases. Ajoute une majuscule à chaque début de phrase.`
      ),
      createExercise(
        'réécriture',
        `Transforme 4 groupes de mots incomplets en phrases correctes en ajoutant seulement les éléments indispensables.`
      ),
      createExercise(
        'discrimination',
        `Parmi 6 phrases, repère celles qui sont grammaticalement correctes mais mal ponctuées. Corrige uniquement la ponctuation.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives : une faute de majuscule, une faute de point, ou une suite de mots qui ne forme pas une phrase.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas limites, explique en une phrase pourquoi l’exemple est ou n’est pas une phrase.`
      ),
      createExercise(
        'vigilance',
        `Effectue une mini-dictée de 3 phrases très courtes en respectant strictement majuscules et ponctuation.`
      ),
      createExercise(
        'réécriture-guidée',
        `Réécris un message oral brut en 4 phrases écrites, correctement délimitées et ponctuées.`
      ),
      createExercise(
        'transfert',
        `Observe une image simple et rédige 3 phrases complètes : une déclarative, une interrogative et une exclamative.`
      ),
      createExercise(
        'spirale',
        `Relis un micro-texte de 5 lignes et surligne en couleurs différentes les débuts et les fins de phrase.`
      ),
    ]
  ),
  createLesson(
    'Repérer le verbe conjugué',
    'Identifier le verbe conjugué comme noyau de la phrase.',
    ['phrase correcte', 'ponctuation', 'sujet implicite simple'],
    [
      createExercise(
        'rappel-flash',
        `Dans 8 phrases, souligne une seule fois le verbe conjugué. Ne souligne ni les infinitifs ni les participes passés seuls.`
      ),
      createExercise(
        'repérage',
        `Classe 10 formes verbales en deux colonnes : « verbe conjugué » / « autre forme du verbe ».`
      ),
      createExercise(
        'repérage-en-contexte',
        `Dans 6 phrases, entoure le verbe conjugué puis recopie uniquement son infinitif.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous avec un verbe conjugué choisi dans une liste. Ne laisse aucun infinitif à la place du verbe noyau.`
      ),
      createExercise(
        'manipulation',
        `Transforme 5 phrases en changeant le verbe conjugué par un autre verbe proposé sans modifier le reste.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 groupes de mots, repère ceux où deux formes verbales sont présentes et indique laquelle est conjuguée.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs où un infinitif a été employé à la place d’un verbe conjugué.`
      ),
      createExercise(
        'justification',
        `Explique pour 4 phrases comment tu as reconnu le verbe conjugué.`
      ),
      createExercise(
        'vigilance',
        `Dans une mini-dictée de 4 phrases, repère après écriture le verbe conjugué de chaque phrase.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court texte en remplaçant chaque verbe conjugué souligné par un verbe nouveau fourni en banque.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases sur une scène de classe ; chaque phrase doit contenir exactement un verbe conjugué.`
      ),
      createExercise(
        'spirale',
        `Reprends un texte ponctué à la leçon 1 et repère maintenant, dans chaque phrase, le verbe conjugué.`
      ),
    ]
  ),
  createLesson(
    'Trouver le sujet du verbe',
    'Relier chaque verbe conjugué à son sujet.',
    ['verbe conjugué', 'bornes de la phrase', 'accord sujet-verbe'],
    [
      createExercise(
        'rappel-flash',
        `Dans 8 phrases, souligne le verbe conjugué puis entoure son sujet. Si le sujet est un groupe de mots, entoure tout le groupe.`
      ),
      createExercise(
        'repérage',
        `Associe 8 verbes soulignés à leur sujet parmi plusieurs propositions.`
      ),
      createExercise(
        'tri',
        `Classe 9 sujets selon leur nature apparente : nom propre, pronom personnel, groupe nominal.`
      ),
      createExercise(
        'manipulation',
        `Remplace le sujet de 6 phrases par un autre sujet proposé et ajuste le verbe si nécessaire.`
      ),
      createExercise(
        'manipulation',
        `Passe 5 phrases du singulier au pluriel ou du pluriel au singulier en modifiant sujet et verbe.`
      ),
      createExercise(
        'discrimination',
        `Dans 6 phrases, distingue le sujet du complément placé avant le verbe.`
      ),
      createExercise(
        'correction',
        `Corrige 5 accords fautifs sujet-verbe après avoir retrouvé le vrai sujet.`
      ),
      createExercise(
        'justification',
        `Pour 4 phrases, explique comment tu as retrouvé le sujet quand il n’était pas collé au verbe.`
      ),
      createExercise(
        'vigilance',
        `Recopie une courte phrase dictée, puis trace une flèche du sujet vers le verbe.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe en remplaçant tous les sujets nominaux par des pronoms personnels adaptés.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases sur des personnages d’un récit ; varie la forme du sujet : nom propre, GN, pronom.`
      ),
      createExercise(
        'spirale',
        `Dans un texte déjà ponctué et analysé, retrouve maintenant le couple sujet/verbe de chaque phrase.`
      ),
    ]
  ),
  createLesson(
    'Reconnaître le groupe verbal et ses compléments',
    'Distinguer le verbe, ce qui dépend de lui, et ce qui n’en dépend pas.',
    ['verbe conjugué', 'sujet', 'ponctuation'],
    [
      createExercise(
        'rappel-flash',
        `Dans 8 phrases, encadre le verbe et souligne ce qui dépend directement de lui.`
      ),
      createExercise(
        'repérage',
        `Pour 8 exemples, sépare sujet / groupe verbal à l’aide d’un trait vertical.`
      ),
      createExercise(
        'repérage',
        `Repère dans 6 phrases les compléments qui appartiennent au groupe verbal et laisse de côté les ajouts de temps ou de lieu facultatifs.`
      ),
      createExercise(
        'manipulation',
        `Supprime dans 6 phrases les compléments circonstanciels et vérifie que la phrase reste correcte.`
      ),
      createExercise(
        'manipulation',
        `Ajoute à 6 phrases un complément de temps ou de lieu sans casser la structure sujet-verbe.`
      ),
      createExercise(
        'discrimination',
        `Choisis, parmi plusieurs groupes proposés, celui qui fait vraiment partie du groupe verbal.`
      ),
      createExercise(
        'correction',
        `Répare 5 phrases où un complément a été mal déplacé au point de créer une ambiguïté.`
      ),
      createExercise(
        'justification',
        `Explique pour 4 phrases pourquoi tel groupe appartient ou non au groupe verbal.`
      ),
      createExercise(
        'vigilance',
        `Ponctue correctement 4 phrases longues où le groupe verbal est suivi d’un complément circonstanciel.`
      ),
      createExercise(
        'réécriture',
        `Réécris 5 phrases en réduisant le groupe verbal à son noyau minimal, puis en le réélargissant.`
      ),
      createExercise(
        'transfert',
        `Décris une action en 4 phrases : pour chacune, construis un sujet clair et un groupe verbal complet.`
      ),
      createExercise(
        'spirale',
        `Reprends des phrases de la leçon 3 et indique désormais, en plus du sujet, le groupe verbal entier.`
      ),
    ]
  ),
  createLesson(
    'Distinguer COD, COI et complément circonstanciel',
    'Classer les compléments essentiels et les compléments de circonstance dans des phrases simples.',
    ['groupe verbal', 'sujet', 'verbe'],
    [
      createExercise(
        'rappel-flash',
        `Dans 8 phrases simples, souligne le verbe puis classe le complément souligné en COD, COI ou complément circonstanciel.`
      ),
      createExercise(
        'repérage',
        `Réponds pour 8 compléments à la question utile : qui ? quoi ? à qui ? à quoi ? où ? quand ? comment ?`
      ),
      createExercise(
        'repérage',
        `Associe 8 verbes à un type de complément attendu : direct, indirect ou circonstanciel.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en remplaçant le complément par un pronom adapté lorsque c’est possible.`
      ),
      createExercise(
        'manipulation',
        `Déplace 6 compléments circonstanciels dans la phrase sans modifier le sens principal.`
      ),
      createExercise(
        'discrimination',
        `Repère les 5 phrases où le complément introduit par une préposition est bien un COI, et non un complément circonstanciel.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs de classement COD/COI/CC dans un tableau d’élève.`
      ),
      createExercise(
        'justification',
        `Justifie, pour 4 cas, le type de complément grâce à une question de repérage et à une manipulation.`
      ),
      createExercise(
        'vigilance',
        `Dans une mini-dictée de 3 phrases, annote après coup le complément principal du verbe.`
      ),
      createExercise(
        'réécriture',
        `Réécris 5 phrases en remplaçant un COD par un COI ou l’inverse à l’aide d’un verbe nouveau fourni.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases d’action : une avec COD, une avec COI, une avec CC, une avec COD + CC.`
      ),
      createExercise(
        'spirale',
        `Dans un court texte, retrouve le verbe, le sujet puis le type de complément principal de chaque phrase.`
      ),
    ]
  ),
  createLesson(
    'Distinguer COD et attribut du sujet',
    'Éviter la confusion entre ce qui complète le verbe et ce qui qualifie le sujet.',
    ['COD', 'verbe d’état', 'sujet'],
    [
      createExercise(
        'rappel-flash',
        `Dans 8 phrases, indique si le groupe souligné est COD ou attribut du sujet.`
      ),
      createExercise(
        'repérage',
        `Classe 10 verbes en deux colonnes : verbes d’action / verbes d’état.`
      ),
      createExercise(
        'repérage',
        `Associe 8 phrases à la bonne étiquette : « le complément désigne ce qu’on subit » ou « le complément dit comment est le sujet ».`
      ),
      createExercise(
        'manipulation',
        `Remplace le verbe de 6 phrases par un verbe d’état ou d’action proposé et observe si le complément change de nature.`
      ),
      createExercise(
        'manipulation',
        `Supprime le groupe souligné dans 6 phrases puis indique si la phrase garde ou perd son sens principal.`
      ),
      createExercise(
        'discrimination',
        `Parmi 6 phrases proches, repère celles où le même groupe nominal n’a pas la même fonction.`
      ),
      createExercise(
        'correction',
        `Corrige 5 analyses fautives où un attribut a été pris pour un COD, ou l’inverse.`
      ),
      createExercise(
        'justification',
        `Pour 4 phrases, justifie le choix COD / attribut en t’appuyant sur le verbe.`
      ),
      createExercise(
        'vigilance',
        `Recopie 4 phrases et vérifie l’accord de l’attribut quand il est adjectif.`
      ),
      createExercise(
        'réécriture',
        `Transforme 5 phrases à COD en phrases à attribut, puis l’inverse, sans changer l’idée générale.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases sur un personnage : deux avec verbe d’état et attribut, deux avec verbe d’action et COD.`
      ),
      createExercise(
        'spirale',
        `Reprends les phrases de la leçon 5 : distingue maintenant plus finement COD, COI, CC et attribut.`
      ),
    ]
  ),
  createLesson(
    'Ne pas confondre nature et fonction',
    'Distinguer ce qu’est un mot ou groupe de mots et le rôle qu’il joue dans la phrase.',
    ['sujet', 'COD', 'attribut'],
    [
      createExercise(
        'rappel-flash',
        `Pour 10 mots ou groupes soulignés, donne d’abord leur nature puis leur fonction.`
      ),
      createExercise(
        'tri',
        `Classe 12 étiquettes mélangées en deux familles : natures / fonctions.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, retrouve un nom, un pronom, un adjectif, puis indique la fonction de chaque élément ciblé.`
      ),
      createExercise(
        'manipulation',
        `Remplace dans 6 phrases un groupe nominal sujet par un pronom sujet et observe : la nature change, la fonction reste.`
      ),
      createExercise(
        'manipulation',
        `Remplace dans 6 phrases un adjectif attribut par un groupe nominal attribut et observe ce qui change.`
      ),
      createExercise(
        'discrimination',
        `Choisis parmi 8 propositions l’analyse qui associe correctement nature et fonction.`
      ),
      createExercise(
        'correction',
        `Corrige 6 erreurs typiques du type « COD = nom » ou « pronom = sujet ».`
      ),
      createExercise(
        'justification',
        `Écris pour 4 cas une phrase de justification : « c’est un… parce que… ; il est… dans la phrase ».`
      ),
      createExercise(
        'vigilance',
        `Dans un mini-texte, annote un élément de chaque nature étudiée et précise sa fonction.`
      ),
      createExercise(
        'réécriture',
        `Réécris 5 phrases en changeant la nature d’un élément tout en conservant sa fonction.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases et donne sous chacune une mini-analyse de deux éléments.`
      ),
      createExercise(
        'spirale',
        `Reprends les notions sujet, COD, attribut et réinvestis-les dans un tableau nature/fonction complet.`
      ),
    ]
  ),
  createLesson(
    'Identifier les pronoms personnels',
    'Reconnaître les pronoms personnels et préciser leur fonction la plus visible.',
    ['nature/fonction', 'sujet', 'COD/COI'],
    [
      createExercise(
        'rappel-flash',
        `Repère dans 10 phrases tous les pronoms personnels et classe-les en sujets ou compléments.`
      ),
      createExercise(
        'repérage',
        `Associe 8 pronoms personnels à la fonction qu’ils occupent dans leur phrase.`
      ),
      createExercise(
        'repérage',
        `Dans 6 phrases, indique à quel groupe nominal chaque pronom pourrait renvoyer.`
      ),
      createExercise(
        'manipulation',
        `Remplace un groupe nominal répété par le pronom personnel adapté dans 8 phrases.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases en remplaçant le pronom par le groupe nominal qu’il reprend.`
      ),
      createExercise(
        'discrimination',
        `Choisis entre plusieurs pronoms celui qui convient en genre, en nombre et en fonction.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases où le pronom choisi crée un contresens ou une faute de fonction.`
      ),
      createExercise(
        'justification',
        `Explique pour 4 phrases pourquoi le pronom retenu est le bon.`
      ),
      createExercise(
        'vigilance',
        `Recopie un court texte en respectant l’orthographe exacte des pronoms personnels donnés à l’oral.`
      ),
      createExercise(
        'réécriture',
        `Allège un paragraphe en supprimant trois répétitions grâce à des pronoms personnels bien choisis.`
      ),
      createExercise(
        'transfert',
        `Rédige un mini-portrait de 4 phrases en alternant groupes nominaux et pronoms personnels.`
      ),
      createExercise(
        'spirale',
        `Dans un texte déjà étudié, retrouve la fonction des pronoms personnels et leur antécédent possible.`
      ),
    ]
  ),
  createLesson(
    'Relier un pronom à son antécédent',
    'Construire la cohésion d’un texte grâce aux reprises pronominales.',
    ['pronoms personnels', 'groupe nominal', 'sujet'],
    [
      createExercise(
        'rappel-flash',
        `Dans 8 phrases, relie chaque pronom souligné à son antécédent.`
      ),
      createExercise(
        'repérage',
        `Repère, dans 6 micro-textes, les ambiguïtés de reprise : qui est désigné par « il », « elle », « ils » ?`
      ),
      createExercise(
        'repérage',
        `Choisis pour 8 phrases l’antécédent le plus probable en t’appuyant sur le sens et les accords.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases en remplaçant le pronom par son antécédent complet.`
      ),
      createExercise(
        'manipulation',
        `Inverse l’opération : remplace 6 répétitions lourdes par une reprise pronominale correcte.`
      ),
      createExercise(
        'discrimination',
        `Repère 5 phrases où la reprise pronominale est floue ou impossible.`
      ),
      createExercise(
        'correction',
        `Corrige 5 micro-textes où l’antécédent est trop loin, trop vague ou absent.`
      ),
      createExercise(
        'justification',
        `Explique pour 4 phrases comment l’accord et le sens t’aident à retrouver l’antécédent.`
      ),
      createExercise(
        'vigilance',
        `Recopie un texte bref puis souligne toutes les reprises qui assurent la cohésion.`
      ),
      createExercise(
        'réécriture',
        `Réécris un paragraphe très répétitif en variant groupe nominal, pronom et reformulation.`
      ),
      createExercise(
        'transfert',
        `Rédige 5 phrases liées entre elles sur une même scène en veillant à la clarté des reprises.`
      ),
      createExercise(
        'spirale',
        `Réactive les leçons 7 et 8 : pour chaque reprise, donne la nature du pronom et sa fonction.`
      ),
    ]
  ),
  createLesson(
    'Repérer le groupe nominal et son noyau',
    'Identifier le groupe nominal et le nom noyau quelle que soit sa place dans la phrase.',
    ['antécédent', 'nature/fonction', 'sujet'],
    [
      createExercise(
        'rappel-flash',
        `Dans 10 exemples, encadre le groupe nominal complet et souligne le nom noyau.`
      ),
      createExercise(
        'repérage',
        `Classe 8 groupes selon leur taille : GN minimal / GN enrichi.`
      ),
      createExercise(
        'repérage',
        `Dans 6 phrases, retrouve tous les groupes nominaux, quelle que soit leur fonction.`
      ),
      createExercise(
        'manipulation',
        `Réduis 6 groupes nominaux à leur forme minimale sans changer le nom noyau.`
      ),
      createExercise(
        'manipulation',
        `Enrichis 6 groupes nominaux minimaux avec un adjectif ou un complément du nom.`
      ),
      createExercise(
        'discrimination',
        `Choisis parmi plusieurs découpages celui qui encadre correctement le groupe nominal.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs où l’élève a confondu groupe nominal et phrase entière.`
      ),
      createExercise(
        'justification',
        `Explique pour 4 exemples comment tu as reconnu le nom noyau.`
      ),
      createExercise(
        'vigilance',
        `Recopie 4 phrases et vérifie l’accord à l’intérieur de chaque groupe nominal.`
      ),
      createExercise(
        'réécriture',
        `Réécris 5 phrases en remplaçant certains noms noyaux par d’autres, en ajustant les accords.`
      ),
      createExercise(
        'transfert',
        `Décris un lieu en 4 phrases contenant chacune au moins un groupe nominal enrichi.`
      ),
      createExercise(
        'spirale',
        `Relis un texte précédent et repère désormais groupe nominal, noyau et pronom de reprise éventuel.`
      ),
    ]
  ),
  createLesson(
    'Identifier les expansions du nom',
    'Distinguer adjectif, complément du nom et proposition relative simple comme expansions du nom.',
    ['groupe nominal', 'nom noyau', 'pronom relatif simple'],
    [
      createExercise(
        'rappel-flash',
        `Dans 8 groupes nominaux, repère l’expansion et précise s’il s’agit d’un adjectif, d’un complément du nom ou d’une relative simple.`
      ),
      createExercise(
        'repérage',
        `Surligne de couleurs différentes le nom noyau et son expansion dans 8 exemples.`
      ),
      createExercise(
        'repérage',
        `Classe 9 expansions selon leur nature et leur place dans le groupe nominal.`
      ),
      createExercise(
        'manipulation',
        `Ajoute à 6 noms nus une expansion demandée : adjectif, groupe prépositionnel ou relative simple.`
      ),
      createExercise(
        'manipulation',
        `Supprime dans 6 groupes nominaux l’expansion indiquée et vérifie que le noyau reste correct.`
      ),
      createExercise(
        'discrimination',
        `Repère 6 cas où un groupe après le nom n’est pas une expansion mais un autre complément de phrase.`
      ),
      createExercise(
        'correction',
        `Corrige 5 analyses fautives d’expansions du nom.`
      ),
      createExercise(
        'justification',
        `Explique pour 4 groupes nominaux en quoi l’expansion enrichit le sens du noyau.`
      ),
      createExercise(
        'vigilance',
        `Vérifie l’accord dans 5 groupes nominaux contenant un adjectif qualificatif.`
      ),
      createExercise(
        'réécriture',
        `Réécris 5 phrases en remplaçant une expansion par une autre de nature différente.`
      ),
      createExercise(
        'transfert',
        `Écris 4 groupes nominaux précis pour décrire un personnage, un objet, un lieu et un animal.`
      ),
      createExercise(
        'spirale',
        `Réactive le nom noyau et le groupe nominal en montrant comment l’expansion s’y accroche.`
      ),
    ]
  ),
  createLesson(
    'Différencier phrase simple et phrase complexe',
    'Compter les verbes conjugués et passer de la phrase à la proposition.',
    ['verbe conjugué', 'ponctuation interne', 'groupe verbal'],
    [
      createExercise(
        'rappel-flash',
        `Dans 10 phrases, compte les verbes conjugués puis classe chaque phrase en simple ou complexe.`
      ),
      createExercise(
        'repérage',
        `Surligne dans 8 phrases complexes chaque verbe conjugué d’une couleur différente.`
      ),
      createExercise(
        'repérage',
        `Associe 8 phrases à la bonne justification : « une proposition » ou « plusieurs propositions ».`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases simples en phrases complexes en ajoutant une seconde proposition.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases complexes en deux phrases simples sans perdre l’information.`
      ),
      createExercise(
        'discrimination',
        `Repère 5 cas où une phrase longue reste pourtant une phrase simple.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs de classement simple/complexe dans un tableau d’élève.`
      ),
      createExercise(
        'justification',
        `Pour 4 phrases, explique ton classement en t’appuyant sur le nombre de verbes conjugués.`
      ),
      createExercise(
        'vigilance',
        `Ponctue correctement 4 phrases complexes courtes après avoir repéré les propositions.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte de 5 lignes en alternant phrases simples et phrases complexes.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases : deux simples et deux complexes, sur un même thème.`
      ),
      createExercise(
        'spirale',
        `Reprends un texte du module 1 et annote désormais sa structure simple/complexe.`
      ),
    ]
  ),
  createLesson(
    'Repérer les propositions',
    'Découper correctement une phrase complexe en propositions.',
    ['phrase simple/complexe', 'verbe conjugué', 'sujet'],
    [
      createExercise(
        'rappel-flash',
        `Découpe 8 phrases complexes en propositions en traçant une barre entre elles.`
      ),
      createExercise(
        'repérage',
        `Associe à 8 phrases le bon nombre de propositions.`
      ),
      createExercise(
        'repérage',
        `Encadre chaque proposition dans 6 phrases puis souligne le verbe de chaque proposition.`
      ),
      createExercise(
        'manipulation',
        `Réordonne les propositions de 6 phrases pour retrouver un ordre logique.`
      ),
      createExercise(
        'manipulation',
        `Ajoute une proposition à 5 phrases simples pour les rendre complexes.`
      ),
      createExercise(
        'discrimination',
        `Choisis le découpage juste parmi 3 propositions d’analyse pour 6 phrases.`
      ),
      createExercise(
        'correction',
        `Corrige 5 découpages fautifs où des groupes non verbaux ont été pris pour des propositions.`
      ),
      createExercise(
        'justification',
        `Explique pour 4 phrases comment tu as repéré la frontière entre deux propositions.`
      ),
      createExercise(
        'vigilance',
        `Recopie 4 phrases en conservant la bonne ponctuation entre les propositions.`
      ),
      createExercise(
        'réécriture',
        `Réécris 5 phrases en remplaçant une proposition par un groupe nominal ou inversement lorsque c’est possible.`
      ),
      createExercise(
        'transfert',
        `Écris 4 phrases complexes contenant chacune exactement deux propositions.`
      ),
      createExercise(
        'spirale',
        `Réactive simple/complexe et verbe conjugué : toute proposition doit être reliée à un verbe identifié.`
      ),
    ]
  ),
  createLesson(
    'Reconnaître juxtaposition, coordination et subordination',
    'Identifier trois manières d’articuler des propositions.',
    ['propositions', 'conjonctions', 'ponctuation'],
    [
      createExercise(
        'rappel-flash',
        `Dans 9 phrases complexes, indique si les propositions sont reliées par juxtaposition, coordination ou subordination.`
      ),
      createExercise(
        'repérage',
        `Repère les mots ou signes qui relient les propositions : virgule, point-virgule, conjonction, subordonnant.`
      ),
      createExercise(
        'repérage',
        `Classe 9 connecteurs en deux colonnes : coordination / subordination.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases juxtaposées en phrases coordonnées ou subordonnées, selon la consigne donnée.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases coordonnées en les juxtaposant ou en les subordonnant sans changer le sens général.`
      ),
      createExercise(
        'discrimination',
        `Repère 5 cas où le mot de liaison n’introduit pas une subordination.`
      ),
      createExercise(
        'correction',
        `Corrige 5 analyses fautives du lien entre propositions.`
      ),
      createExercise(
        'justification',
        `Écris pour 4 phrases une justification courte du type de lien repéré.`
      ),
      createExercise(
        'vigilance',
        `Ponctue correctement 4 phrases contenant plusieurs propositions reliées différemment.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe en variant les procédés d’enchaînement entre propositions.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases complexes : une juxtaposée, une coordonnée, deux subordonnées très simples.`
      ),
      createExercise(
        'spirale',
        `Réactive la notion de proposition et la structure simple/complexe pour consolider l’analyse complète.`
      ),
    ]
  ),
  createLesson(
    'Bilan de syntaxe : analyser une phrase puis un court texte',
    'Mobiliser toutes les notions du module dans une analyse guidée puis semi-autonome.',
    ['toutes les leçons du module 1', 'réécriture', 'justification'],
    [
      createExercise(
        'rappel-global',
        `Dans un tableau récapitulatif, identifie pour 10 phrases le verbe, le sujet et le type de phrase.`
      ),
      createExercise(
        'analyse',
        `Pour 6 phrases, indique nature et fonction d’un élément souligné.`
      ),
      createExercise(
        'analyse',
        `Dans 5 phrases, classe le complément principal en COD, COI, attribut ou complément circonstanciel.`
      ),
      createExercise(
        'analyse',
        `Repère dans 5 phrases les pronoms personnels et leurs antécédents.`
      ),
      createExercise(
        'analyse',
        `Dans 5 groupes nominaux, souligne le nom noyau et l’expansion éventuelle.`
      ),
      createExercise(
        'analyse',
        `Classe 8 phrases en simples ou complexes puis donne le nombre de propositions.`
      ),
      createExercise(
        'analyse',
        `Pour 6 phrases complexes, indique juxtaposition, coordination ou subordination.`
      ),
      createExercise(
        'correction',
        `Corrige un paragraphe de 6 lignes où des analyses grammaticales ont été mal faites.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves sur des cas de confusion fréquents.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases pour simplifier ou complexifier leur structure selon la consigne.`
      ),
      createExercise(
        'transfert',
        `Rédige un court paragraphe de 5 phrases sur une scène observée en respectant des contraintes syntaxiques précises.`
      ),
      createExercise(
        'spirale-finale',
        `Auto-vérifie ton paragraphe final à l’aide d’une grille : verbe, sujet, complément, cohésion, ponctuation.`
      ),
    ]
  ),
];
