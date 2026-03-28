const SOURCE_SPEC = 'docs/specs/6e-blueprint-complet.md#module-4';

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

export const module4LessonBlueprints = [
  createLesson(
    'Reformuler une phrase sans changer le sens',
    'Reformuler une phrase simple en conservant l’information essentielle.',
    ['phrase simple', 'sujet-verbe', 'accords'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser la reformulation fidèle d’une phrase.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir la reformulation fidèle d’une phrase.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils sont clairs ou maladroits.`
      ),
      createExercise(
        'manipulation',
        `Reformule 6 phrases en conservant les accords et la ponctuation utiles.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en choisissant la formulation la plus claire.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formulations les plus efficaces.`
      ),
      createExercise(
        'correction',
        `Corrige 5 exemples en justifiant brièvement chaque correction.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications courtes : choix retenu + raison précise.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle la lisibilité de chaque phrase.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en améliorant la formulation sans l’alourdir.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases de transfert dans une situation nouvelle en appliquant la stratégie du jour.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 à 3 dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Éviter les répétitions lourdes',
    'Alléger un texte court en remplaçant les répétitions inutiles.',
    ['pronoms', 'antécédents', 'cohésion'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant l’allègement des répétitions.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui guident l’allègement des répétitions.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en modifiant la formulation tout en gardant l’information de départ.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en respectant le registre demandé.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formulations dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève en ciblant la maladresse principale.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications brèves pour expliquer ta reformulation.`,
        { acceptedAnswers: ['pronoms de reprise', 'reprise pronominale'] }
      ),
      createExercise(
        'vigilance',
        `Vérifie 4 phrases dictées sans changer l’information essentielle.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour améliorer la clarté et le style.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui réinvestissent la notion étudiée.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Préciser avec des groupes nominaux enrichis',
    'Enrichir un groupe nominal pour préciser sans alourdir.',
    ['nom noyau', 'expansions', 'accords GN'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la précision du groupe nominal.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments clés pour la précision du groupe nominal.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : formulation claire / formulation à améliorer.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases en changeant la forme sans perdre le sens principal.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans créer d’ambiguïté de sens.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les reformulations recevables.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie en une phrase le choix de formulation.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie cohérence, accords et ponctuation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en renforçant précision et fluidité.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la reformulation améliore nettement le texte.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les gains obtenus grâce à la reformulation.`
      ),
    ]
  ),
  createLesson(
    'Alléger une phrase trop chargée',
    'Réduire une phrase longue en gardant sa clarté et sa correction.',
    ['phrase complexe', 'ponctuation', 'compléments'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser l’allègement d’une phrase complexe.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir l’allègement d’une phrase complexe.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils sont clairs ou maladroits.`
      ),
      createExercise(
        'manipulation',
        `Reformule 6 phrases en conservant les accords et la ponctuation utiles.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en choisissant la formulation la plus claire.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formulations les plus efficaces.`
      ),
      createExercise(
        'correction',
        `Corrige 5 exemples en justifiant brièvement chaque correction.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications courtes : choix retenu + raison précise.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle la lisibilité de chaque phrase.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en améliorant la formulation sans l’alourdir.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases de transfert dans une situation nouvelle en appliquant la stratégie du jour.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 à 3 dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Varier les types de phrases',
    'Alterner déclarative, interrogative et exclamative de manière pertinente.',
    ['ponctuation', 'intention', 'verbe conjugué'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant la variation des types de phrases.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui guident la variation des types de phrases.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en modifiant la formulation tout en gardant l’information de départ.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en respectant le registre demandé.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formulations dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève en ciblant la maladresse principale.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications brèves pour expliquer ta reformulation.`
      ),
      createExercise(
        'vigilance',
        `Vérifie 4 phrases dictées sans changer l’information essentielle.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour améliorer la clarté et le style.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui réinvestissent la notion étudiée.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Utiliser des connecteurs logiques simples',
    'Choisir des connecteurs pour relier des idées avec clarté.',
    ['propositions', 'enchaînement', 'cohérence'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider l’usage des connecteurs logiques.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments clés pour l’usage des connecteurs logiques.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : formulation claire / formulation à améliorer.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases en changeant la forme sans perdre le sens principal.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans créer d’ambiguïté de sens.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les reformulations recevables.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie en une phrase le choix de formulation.`,
        { acceptedAnswers: ['connecteurs logiques', 'connecteurs'] }
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie cohérence, accords et ponctuation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en renforçant précision et fluidité.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la reformulation améliore nettement le texte.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les gains obtenus grâce à la reformulation.`
      ),
    ]
  ),
  createLesson(
    'Ordonner un paragraphe court',
    'Organiser un paragraphe bref avec un ordre logique lisible.',
    ['ordre des idées', 'connecteurs', 'ponctuation'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser l’organisation d’un paragraphe.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir l’organisation d’un paragraphe.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils sont clairs ou maladroits.`
      ),
      createExercise(
        'manipulation',
        `Reformule 6 phrases en conservant les accords et la ponctuation utiles.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en choisissant la formulation la plus claire.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formulations les plus efficaces.`
      ),
      createExercise(
        'correction',
        `Corrige 5 exemples en justifiant brièvement chaque correction.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications courtes : choix retenu + raison précise.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle la lisibilité de chaque phrase.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en améliorant la formulation sans l’alourdir.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases de transfert dans une situation nouvelle en appliquant la stratégie du jour.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 à 3 dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Passer de l’oral relâché à l’écrit scolaire',
    'Transformer une formulation orale en écrit scolaire correct.',
    ['registre', 'phrase correcte', 'ponctuation'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant le passage de l’oral à l’écrit.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui guident le passage de l’oral à l’écrit.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en modifiant la formulation tout en gardant l’information de départ.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en respectant le registre demandé.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formulations dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève en ciblant la maladresse principale.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications brèves pour expliquer ta reformulation.`
      ),
      createExercise(
        'vigilance',
        `Vérifie 4 phrases dictées sans changer l’information essentielle.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour améliorer la clarté et le style.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui réinvestissent la notion étudiée.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Reformuler une consigne',
    'Reformuler une consigne complexe en étapes claires et exécutables.',
    ['impératif', 'ordre', 'précision lexicale'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la reformulation d’une consigne.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments clés pour la reformulation d’une consigne.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : formulation claire / formulation à améliorer.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases en changeant la forme sans perdre le sens principal.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans créer d’ambiguïté de sens.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les reformulations recevables.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie en une phrase le choix de formulation.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie cohérence, accords et ponctuation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en renforçant précision et fluidité.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la reformulation améliore nettement le texte.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les gains obtenus grâce à la reformulation.`
      ),
    ]
  ),
  createLesson(
    'Décrire avec netteté',
    'Produire une description courte précise et cohérente.',
    ['groupes nominaux', 'accords', 'mot juste'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser la description précise.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir la description précise.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils sont clairs ou maladroits.`
      ),
      createExercise(
        'manipulation',
        `Reformule 6 phrases en conservant les accords et la ponctuation utiles.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en choisissant la formulation la plus claire.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formulations les plus efficaces.`
      ),
      createExercise(
        'correction',
        `Corrige 5 exemples en justifiant brièvement chaque correction.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications courtes : choix retenu + raison précise.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle la lisibilité de chaque phrase.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en améliorant la formulation sans l’alourdir.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases de transfert dans une situation nouvelle en appliquant la stratégie du jour.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 à 3 dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Raconter une action avec cohérence',
    'Rédiger un mini-récit cohérent en temps et en enchaînement.',
    ['temps verbaux', 'connecteurs', 'reprises'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant la narration cohérente.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui guident la narration cohérente.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en modifiant la formulation tout en gardant l’information de départ.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en respectant le registre demandé.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formulations dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève en ciblant la maladresse principale.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications brèves pour expliquer ta reformulation.`
      ),
      createExercise(
        'vigilance',
        `Vérifie 4 phrases dictées sans changer l’information essentielle.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour améliorer la clarté et le style.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui réinvestissent la notion étudiée.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Mettre en forme un dialogue simple',
    'Présenter un dialogue lisible avec ponctuation adaptée.',
    ['verbes de parole', 'ponctuation', 'registre'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la mise en forme du dialogue.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments clés pour la mise en forme du dialogue.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : formulation claire / formulation à améliorer.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases en changeant la forme sans perdre le sens principal.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans créer d’ambiguïté de sens.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les reformulations recevables.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie en une phrase le choix de formulation.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie cohérence, accords et ponctuation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en renforçant précision et fluidité.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la reformulation améliore nettement le texte.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les gains obtenus grâce à la reformulation.`
      ),
    ]
  ),
  createLesson(
    'Justifier un choix en quelques phrases',
    'Rédiger une réponse argumentée courte et structurée.',
    ['connecteurs', 'phrase complexe', 'registre scolaire'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items afin de fiabiliser la justification argumentée.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, souligne les indices utiles pour réussir la justification argumentée.`
      ),
      createExercise(
        'repérage',
        `Trie 10 exemples selon qu’ils sont clairs ou maladroits.`
      ),
      createExercise(
        'manipulation',
        `Reformule 6 phrases en conservant les accords et la ponctuation utiles.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en choisissant la formulation la plus claire.`
      ),
      createExercise(
        'discrimination',
        `Repère dans 8 propositions les formulations les plus efficaces.`
      ),
      createExercise(
        'correction',
        `Corrige 5 exemples en justifiant brièvement chaque correction.`
      ),
      createExercise(
        'justification',
        `Rédige 4 justifications courtes : choix retenu + raison précise.`
      ),
      createExercise(
        'vigilance',
        `Après une mini-dictée de 4 phrases, contrôle la lisibilité de chaque phrase.`
      ),
      createExercise(
        'réécriture',
        `Réécris un texte bref en améliorant la formulation sans l’alourdir.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases de transfert dans une situation nouvelle en appliquant la stratégie du jour.`
      ),
      createExercise(
        'spirale',
        `Réactive une notion des modules 1 à 3 dans un mini-exercice de reprise.`
      ),
    ]
  ),
  createLesson(
    'Résumer un texte bref',
    'Conserver l’essentiel d’un texte court sans recopier.',
    ['reformulation', 'ordre des idées', 'cohérence'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items ciblant le résumé essentiel.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, repère les éléments qui guident le résumé essentiel.`
      ),
      createExercise(
        'repérage',
        `Range 10 exemples puis explique brièvement ton classement.`
      ),
      createExercise(
        'manipulation',
        `Transforme 6 phrases en modifiant la formulation tout en gardant l’information de départ.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous en respectant le registre demandé.`
      ),
      createExercise(
        'discrimination',
        `Choisis les bonnes formulations dans 8 séries quasi identiques.`
      ),
      createExercise(
        'correction',
        `Corrige 5 productions d’élève en ciblant la maladresse principale.`
      ),
      createExercise(
        'justification',
        `Écris 4 justifications brèves pour expliquer ta reformulation.`,
        { acceptedAnswers: ['idée essentielle', 'essentiel'] }
      ),
      createExercise(
        'vigilance',
        `Vérifie 4 phrases dictées sans changer l’information essentielle.`
      ),
      createExercise(
        'réécriture',
        `Réécris un court paragraphe (4 phrases) pour améliorer la clarté et le style.`
      ),
      createExercise(
        'transfert',
        `Rédige 4 phrases inédites qui réinvestissent la notion étudiée.`
      ),
      createExercise(
        'spirale',
        `Effectue une reprise spiralaire en reliant la leçon du jour à une leçon précédente.`
      ),
    ]
  ),
  createLesson(
    'Bilan module 4 : réécrire un texte maladroit',
    'Améliorer un texte court en mobilisant les acquis des modules 1 à 3.',
    ['syntaxe', 'accords', 'temps verbaux'],
    [
      createExercise(
        'rappel-flash',
        `Repère puis corrige 8 items pour consolider la réécriture globale.`
      ),
      createExercise(
        'repérage',
        `Dans 8 phrases, encadre les éléments clés pour la réécriture globale.`
      ),
      createExercise(
        'repérage',
        `Classe 10 exemples en deux colonnes : formulation claire / formulation à améliorer.`
      ),
      createExercise(
        'manipulation',
        `Réécris 6 phrases en changeant la forme sans perdre le sens principal.`
      ),
      createExercise(
        'manipulation',
        `Complète 6 phrases à trous sans créer d’ambiguïté de sens.`
      ),
      createExercise(
        'discrimination',
        `Parmi 8 propositions proches, sélectionne uniquement les reformulations recevables.`
      ),
      createExercise(
        'correction',
        `Corrige 5 phrases fautives et indique la règle mobilisée.`
      ),
      createExercise(
        'justification',
        `Pour 4 cas, justifie en une phrase le choix de formulation.`
      ),
      createExercise(
        'vigilance',
        `Relis 4 phrases dictées et vérifie cohérence, accords et ponctuation.`
      ),
      createExercise(
        'réécriture',
        `Réécris 4 phrases en renforçant précision et fluidité.`
      ),
      createExercise(
        'transfert',
        `Produit 4 phrases de transfert où la reformulation améliore nettement le texte.`
      ),
      createExercise(
        'spirale',
        `Reprends un exercice antérieur et compare les gains obtenus grâce à la reformulation.`
      ),
    ]
  ),
];
