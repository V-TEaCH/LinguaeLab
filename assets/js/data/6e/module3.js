const SOURCE_SPEC = 'docs/specs/6e-blueprint-complet.md#module-3';

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

export const module3LessonBlueprints = [
  createLesson(
    'Identifier infinitif et verbe conjugué',
    'Distinguer infinitif et forme conjuguée dans des phrases simples.',
    ['verbe conjugué', 'sujet', 'phrase simple'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser la distinction infinitif / verbe conjugué.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir la distinction infinitif / verbe conjugué.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle verbale étudiée.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases avec un nouveau sujet et réaccorde le verbe.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous avec la forme verbale attendue.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les choix verbaux justes et écarte les pièges.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : temps choisi + indice du contexte.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les verbes conjugués.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en renforçant la précision des temps verbaux.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle verbale dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 ou 2 dans un mini-exercice de conjugaison.`
      ),
    ]
  ),
  createLesson(
    'Conjuguer au présent les verbes du 1er groupe',
    'Maîtriser les terminaisons du présent des verbes du 1er groupe.',
    ['sujet-verbe', 'accord', 'terminaisons'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant le présent des verbes du 1er groupe.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui commandent le présent des verbes du 1er groupe.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant la personne du sujet puis ajuste la forme verbale.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement le temps choisi.`
      ),
      createExercise(
        'discrimination',
        `Choisis les formes verbales correctes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève en ciblant la conjugaison fautive.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour expliquer le choix verbal.`
      ),
      createExercise(
        'vigilance',
        `Vérifie les formes verbales dans 4 phrases dictées sans changer le sens.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) en corrigeant les choix de temps.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent le temps travaillé.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Conjuguer être, avoir, aller, faire au présent',
    'Automatiser le présent des verbes fréquents être, avoir, aller, faire.',
    ['présent', 'sujet-verbe', 'mémorisation active'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider le présent des verbes fréquents.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les formes verbales liées au présent des verbes fréquents.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : forme correcte / forme incorrecte.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases en passant du singulier au pluriel (ou inversement) sans casser la conjugaison.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier les repères temporels.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les formes verbales correctes.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la forme verbale retenue en une phrase.`,
        { acceptedAnswers: ['être, avoir, aller, faire', 'être/avoir/aller/faire'] }
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie les terminaisons verbales avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la cohérence verbale.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où le choix verbal est déterminant.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les erreurs verbales évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Conjuguer des verbes fréquents du 3e groupe',
    'Employer correctement au présent des verbes usuels du 3e groupe.',
    ['présent', 'terminaisons', 'accord sujet-verbe'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser le présent des verbes usuels du 3e groupe.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir le présent des verbes usuels du 3e groupe.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle verbale étudiée.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases avec un nouveau sujet et réaccorde le verbe.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous avec la forme verbale attendue.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les choix verbaux justes et écarte les pièges.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : temps choisi + indice du contexte.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les verbes conjugués.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en renforçant la précision des temps verbaux.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle verbale dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 ou 2 dans un mini-exercice de conjugaison.`
      ),
    ]
  ),
  createLesson(
    'Former l’imparfait',
    'Construire correctement l’imparfait à partir de la base verbale.',
    ['présent de nous', 'terminaisons', 'valeur d’habitude'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant la formation de l’imparfait.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui commandent la formation de l’imparfait.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant la personne du sujet puis ajuste la forme verbale.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement le temps choisi.`
      ),
      createExercise(
        'discrimination',
        `Choisis les formes verbales correctes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève en ciblant la conjugaison fautive.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour expliquer le choix verbal.`,
        { acceptedAnswers: ['imparfait', 'l’imparfait'] }
      ),
      createExercise(
        'vigilance',
        `Vérifie les formes verbales dans 4 phrases dictées sans changer le sens.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) en corrigeant les choix de temps.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent le temps travaillé.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Former le futur simple',
    'Former le futur simple des verbes réguliers et fréquents.',
    ['infinitif', 'terminaisons futures', 'repères temporels'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la formation du futur simple.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les formes verbales liées à la formation du futur simple.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : forme correcte / forme incorrecte.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases en passant du singulier au pluriel (ou inversement) sans casser la conjugaison.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier les repères temporels.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les formes verbales correctes.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la forme verbale retenue en une phrase.`,
        { acceptedAnswers: ['futur simple', 'le futur simple'] }
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie les terminaisons verbales avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la cohérence verbale.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où le choix verbal est déterminant.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les erreurs verbales évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Former le passé composé avec avoir',
    'Conjuguer au passé composé avec l’auxiliaire avoir.',
    ['participe passé', 'auxiliaire', 'sujet'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser le passé composé avec avoir.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir le passé composé avec avoir.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle verbale étudiée.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases avec un nouveau sujet et réaccorde le verbe.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous avec la forme verbale attendue.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les choix verbaux justes et écarte les pièges.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : temps choisi + indice du contexte.`,
        { acceptedAnswers: ['passé composé avec avoir', 'avoir + participe passé'] }
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les verbes conjugués.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en renforçant la précision des temps verbaux.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle verbale dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 ou 2 dans un mini-exercice de conjugaison.`
      ),
    ]
  ),
  createLesson(
    'Former le passé composé avec être',
    'Conjuguer au passé composé avec l’auxiliaire être et l’accord attendu.',
    ['auxiliaire être', 'accord', 'sujet'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant le passé composé avec être.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui commandent le passé composé avec être.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant la personne du sujet puis ajuste la forme verbale.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement le temps choisi.`
      ),
      createExercise(
        'discrimination',
        `Choisis les formes verbales correctes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève en ciblant la conjugaison fautive.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour expliquer le choix verbal.`,
        { acceptedAnswers: ['passé composé avec être', 'être + participe passé'] }
      ),
      createExercise(
        'vigilance',
        `Vérifie les formes verbales dans 4 phrases dictées sans changer le sens.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) en corrigeant les choix de temps.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent le temps travaillé.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Choisir entre présent et imparfait',
    'Choisir le temps verbal pertinent entre présent et imparfait selon le contexte.',
    ['valeurs des temps', 'cohérence temporelle', 'lecture'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider le choix présent / imparfait.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les formes verbales liées au choix présent / imparfait.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : forme correcte / forme incorrecte.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases en passant du singulier au pluriel (ou inversement) sans casser la conjugaison.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier les repères temporels.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les formes verbales correctes.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la forme verbale retenue en une phrase.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie les terminaisons verbales avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la cohérence verbale.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où le choix verbal est déterminant.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les erreurs verbales évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Choisir entre imparfait et passé composé',
    'Différencier imparfait et passé composé dans le récit court.',
    ['temps du récit', 'aspect', 'chronologie'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser le choix imparfait / passé composé.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir le choix imparfait / passé composé.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle verbale étudiée.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases avec un nouveau sujet et réaccorde le verbe.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous avec la forme verbale attendue.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les choix verbaux justes et écarte les pièges.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : temps choisi + indice du contexte.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les verbes conjugués.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en renforçant la précision des temps verbaux.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle verbale dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 ou 2 dans un mini-exercice de conjugaison.`
      ),
    ]
  ),
  createLesson(
    'Choisir entre présent et futur',
    'Distinguer emploi du présent et du futur selon l’intention.',
    ['repères temporels', 'modalité', 'cohérence'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant le choix présent / futur.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui commandent le choix présent / futur.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant la personne du sujet puis ajuste la forme verbale.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement le temps choisi.`
      ),
      createExercise(
        'discrimination',
        `Choisis les formes verbales correctes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève en ciblant la conjugaison fautive.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour expliquer le choix verbal.`
      ),
      createExercise(
        'vigilance',
        `Vérifie les formes verbales dans 4 phrases dictées sans changer le sens.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) en corrigeant les choix de temps.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent le temps travaillé.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Employer l’impératif présent',
    'Utiliser correctement l’impératif présent pour donner une consigne claire.',
    ['présent', 'formes verbales', 'ponctuation'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider l’emploi de l’impératif.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les formes verbales liées à l’emploi de l’impératif.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : forme correcte / forme incorrecte.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases en passant du singulier au pluriel (ou inversement) sans casser la conjugaison.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier les repères temporels.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les formes verbales correctes.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la forme verbale retenue en une phrase.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie les terminaisons verbales avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la cohérence verbale.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où le choix verbal est déterminant.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les erreurs verbales évitées aujourd’hui.`
      ),
    ]
  ),
  createLesson(
    'Maintenir la cohérence des temps dans un paragraphe',
    'Vérifier et corriger la cohérence des temps dans un court paragraphe.',
    ['temps verbaux', 'enchaînement des actions', 'relecture'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser la cohérence des temps.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir la cohérence des temps.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils respectent ou non la règle verbale étudiée.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases avec un nouveau sujet et réaccorde le verbe.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous avec la forme verbale attendue.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les choix verbaux justes et écarte les pièges.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève avec justification courte.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications brèves : temps choisi + indice du contexte.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle les verbes conjugués.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en renforçant la précision des temps verbaux.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases personnelles en réutilisant la règle verbale dans un contexte nouveau.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 ou 2 dans un mini-exercice de conjugaison.`
      ),
    ]
  ),
  createLesson(
    'Sécuriser les terminaisons verbales fréquentes',
    'Éviter les confusions de terminaisons verbales fréquentes en 6e.',
    ['é/er', 'ait/é', 'accord sujet-verbe'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant les terminaisons verbales fréquentes.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui commandent les terminaisons verbales fréquentes.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en changeant la personne du sujet puis ajuste la forme verbale.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en justifiant mentalement le temps choisi.`
      ),
      createExercise(
        'discrimination',
        `Choisis les formes verbales correctes dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 erreurs d’élève en ciblant la conjugaison fautive.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications courtes pour expliquer le choix verbal.`
      ),
      createExercise(
        'vigilance',
        `Vérifie les formes verbales dans 4 phrases dictées sans changer le sens.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) en corrigeant les choix de temps.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui mobilisent le temps travaillé.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Bilan module 3 : conjuguer et choisir',
    'Réinvestir l’ensemble des temps et choix verbaux étudiés dans le module 3.',
    ['toutes les leçons du module 3', 'réécriture', 'auto-correction'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la synthèse des temps verbaux.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les formes verbales liées à la synthèse des temps verbaux.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : forme correcte / forme incorrecte.`
      ),
      createExercise(
        'manipulation',
        `Modifie 6 phrases en passant du singulier au pluriel (ou inversement) sans casser la conjugaison.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans modifier les repères temporels.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les formes verbales correctes.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie la forme verbale retenue en une phrase.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie les terminaisons verbales avant validation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en améliorant la cohérence verbale.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où le choix verbal est déterminant.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les erreurs verbales évitées aujourd’hui.`
      ),
    ]
  ),
];
