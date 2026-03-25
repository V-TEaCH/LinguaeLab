const SOURCE_SPEC = 'docs/specs/6e-blueprint-complet.md#module-2';

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

export const module2LessonBlueprints = [
  createLesson(
    'Sécuriser l’accord déterminant-nom',
    'Accorder correctement déterminant et nom en genre et en nombre.',
    ['groupes nominaux', 'marques du pluriel', 'lecture précise'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser l’accord déterminant-nom.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir l’accord déterminant-nom.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle du jour.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases après changement de nombre ou de genre sans créer d’erreur d’accord.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en appliquant strictement la règle du jour.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formes correctes et écarte les pièges d’accord.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec une justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : règle utilisée + indice retenu.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les accords essentiels.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en corrigeant prioritairement les accords étudiés.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion du début de module dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Accorder l’adjectif qualificatif épithète',
    'Accorder l’adjectif épithète avec le nom noyau du groupe nominal.',
    ['déterminant-nom', 'repérage du noyau', 'genre et nombre'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items centrés sur l’accord de l’adjectif épithète.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les mots-clés qui guident l’accord de l’adjectif épithète.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples en deux groupes puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant genre ou nombre, puis réajuste les accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement chaque choix d’accord.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour valider chaque correction.`
      ),
      createExercise(
        'vigilance',
        `Vérifie les accords dans 4 phrases dictées sans changer le vocabulaire.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour renforcer la correction orthographique ciblée.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent la règle du jour.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Repérer le noyau pour éviter les erreurs d’accord',
    'Identifier le nom noyau pour éviter les accords de proximité.',
    ['groupe nominal', 'adjectif épithète', 'nature/fonction'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider le repérage du nom noyau.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments qui commandent le repérage du nom noyau.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : conforme / non conforme à la règle étudiée.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases (singulier/pluriel ou masculin/féminin) en conservant la cohérence des accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier le sens ni la structure attendue.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement celles qui respectent la règle étudiée.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives en ciblant l’erreur principale.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la correction en une phrase claire.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie tous les accords avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la précision orthographique et les accords.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la règle étudiée est indispensable.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice d’une leçon antérieure et compare les erreurs évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Accorder sujet et verbe au présent',
    'Automatiser l’accord sujet-verbe dans des phrases simples au présent.',
    ['repérage du sujet', 'terminaisons du présent', 'ponctuation'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser l’accord sujet-verbe au présent.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir l’accord sujet-verbe au présent.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle du jour.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases après changement de nombre ou de genre sans créer d’erreur d’accord.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en appliquant strictement la règle du jour.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formes correctes et écarte les pièges d’accord.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec une justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : règle utilisée + indice retenu.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les accords essentiels.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en corrigeant prioritairement les accords étudiés.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion du début de module dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Accorder avec sujets inversés ou éloignés',
    'Maintenir l’accord sujet-verbe quand le sujet est inversé ou séparé du verbe.',
    ['sujet-verbe', 'compléments intercalés', 'lecture syntaxique'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items centrés sur l’accord avec sujet inversé ou éloigné.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les mots-clés qui guident l’accord avec sujet inversé ou éloigné.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples en deux groupes puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant genre ou nombre, puis réajuste les accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement chaque choix d’accord.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour valider chaque correction.`
      ),
      createExercise(
        'vigilance',
        `Vérifie les accords dans 4 phrases dictées sans changer le vocabulaire.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour renforcer la correction orthographique ciblée.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent la règle du jour.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Distinguer a/à et et/est',
    'Choisir correctement entre homophones grammaticaux a/à et et/est.',
    ['verbe avoir', 'préposition', 'phrase simple'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider les homophones a/à et et/est.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments qui commandent les homophones a/à et et/est.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : conforme / non conforme à la règle étudiée.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases (singulier/pluriel ou masculin/féminin) en conservant la cohérence des accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier le sens ni la structure attendue.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement celles qui respectent la règle étudiée.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives en ciblant l’erreur principale.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la correction en une phrase claire.`,
        { acceptedAnswers: ['a/à ; et/est', 'a/à et et/est', 'a/à - et/est'] }
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie tous les accords avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la précision orthographique et les accords.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la règle étudiée est indispensable.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice d’une leçon antérieure et compare les erreurs évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Distinguer son/sont et on/ont',
    'Employer correctement son/sont et on/ont en contexte.',
    ['homophones grammaticaux', 'accord sujet-verbe', 'sens'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser les homophones son/sont et on/ont.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir les homophones son/sont et on/ont.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle du jour.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases après changement de nombre ou de genre sans créer d’erreur d’accord.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en appliquant strictement la règle du jour.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formes correctes et écarte les pièges d’accord.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec une justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : règle utilisée + indice retenu.`,
        { acceptedAnswers: ['son/sont ; on/ont', 'son/sont et on/ont'] }
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les accords essentiels.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en corrigeant prioritairement les accords étudiés.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion du début de module dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Distinguer ce/se et ces/ses',
    'Différencier ce/se et ces/ses selon la fonction dans la phrase.',
    ['déterminants', 'pronoms', 'homophones'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items centrés sur les homophones ce/se et ces/ses.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les mots-clés qui guident les homophones ce/se et ces/ses.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples en deux groupes puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant genre ou nombre, puis réajuste les accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement chaque choix d’accord.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour valider chaque correction.`,
        { acceptedAnswers: ['ce/se ; ces/ses', 'ce/se et ces/ses'] }
      ),
      createExercise(
        'vigilance',
        `Vérifie les accords dans 4 phrases dictées sans changer le vocabulaire.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour renforcer la correction orthographique ciblée.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent la règle du jour.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Former le pluriel des noms usuels',
    'Maîtriser les marques de pluriel des noms fréquents en 6e.',
    ['déterminant-nom', 'orthographe lexicale utile', 'lecture'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la formation du pluriel des noms.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments qui commandent la formation du pluriel des noms.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : conforme / non conforme à la règle étudiée.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases (singulier/pluriel ou masculin/féminin) en conservant la cohérence des accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier le sens ni la structure attendue.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement celles qui respectent la règle étudiée.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives en ciblant l’erreur principale.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la correction en une phrase claire.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie tous les accords avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la précision orthographique et les accords.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la règle étudiée est indispensable.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice d’une leçon antérieure et compare les erreurs évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Former le féminin des adjectifs courants',
    'Appliquer les transformations usuelles du féminin des adjectifs.',
    ['accord adjectif', 'genre', 'lexique'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser la formation du féminin des adjectifs.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir la formation du féminin des adjectifs.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle du jour.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases après changement de nombre ou de genre sans créer d’erreur d’accord.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en appliquant strictement la règle du jour.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formes correctes et écarte les pièges d’accord.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec une justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : règle utilisée + indice retenu.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les accords essentiels.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en corrigeant prioritairement les accords étudiés.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion du début de module dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Accorder dans le groupe nominal enrichi',
    'Accorder correctement dans un groupe nominal avec expansion.',
    ['noyau', 'adjectif', 'complément du nom'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items centrés sur les accords du groupe nominal enrichi.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les mots-clés qui guident les accords du groupe nominal enrichi.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples en deux groupes puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant genre ou nombre, puis réajuste les accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement chaque choix d’accord.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour valider chaque correction.`
      ),
      createExercise(
        'vigilance',
        `Vérifie les accords dans 4 phrases dictées sans changer le vocabulaire.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour renforcer la correction orthographique ciblée.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent la règle du jour.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Accorder avec sujets coordonnés',
    'Gérer l’accord du verbe avec deux sujets coordonnés.',
    ['sujet-verbe', 'coordination', 'nombre'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider l’accord avec sujets coordonnés.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments qui commandent l’accord avec sujets coordonnés.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : conforme / non conforme à la règle étudiée.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases (singulier/pluriel ou masculin/féminin) en conservant la cohérence des accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier le sens ni la structure attendue.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement celles qui respectent la règle étudiée.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives en ciblant l’erreur principale.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la correction en une phrase claire.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie tous les accords avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la précision orthographique et les accords.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la règle étudiée est indispensable.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice d’une leçon antérieure et compare les erreurs évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Accorder dans des phrases complexes courtes',
    'Conserver les accords essentiels dans une phrase complexe courte.',
    ['propositions', 'sujet-verbe', 'GN'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser les accords dans une phrase complexe courte.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir les accords dans une phrase complexe courte.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle du jour.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases après changement de nombre ou de genre sans créer d’erreur d’accord.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en appliquant strictement la règle du jour.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formes correctes et écarte les pièges d’accord.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec une justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : règle utilisée + indice retenu.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les accords essentiels.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en corrigeant prioritairement les accords étudiés.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion du début de module dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Réviser par dictée raisonnée',
    'Mobiliser les accords étudiés dans une dictée raisonnée courte.',
    ['homophones', 'accords GN', 'accord sujet-verbe'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items centrés sur la relecture orthographique raisonnée.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les mots-clés qui guident la relecture orthographique raisonnée.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples en deux groupes puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant genre ou nombre, puis réajuste les accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement chaque choix d’accord.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour valider chaque correction.`
      ),
      createExercise(
        'vigilance',
        `Vérifie les accords dans 4 phrases dictées sans changer le vocabulaire.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour renforcer la correction orthographique ciblée.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent la règle du jour.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Bilan module 2 : accorder et orthographier',
    'Réinvestir l’ensemble des accords et homophones du module 2.',
    ['toutes les leçons du module 2', 'réécriture', 'auto-correction'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la synthèse des accords et homophones.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments qui commandent la synthèse des accords et homophones.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : conforme / non conforme à la règle étudiée.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases (singulier/pluriel ou masculin/féminin) en conservant la cohérence des accords.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier le sens ni la structure attendue.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement celles qui respectent la règle étudiée.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives en ciblant l’erreur principale.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la correction en une phrase claire.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie tous les accords avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la précision orthographique et les accords.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la règle étudiée est indispensable.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice d’une leçon antérieure et compare les erreurs évitées aujourd’hui.`
      ),
    ]
  ),
];
