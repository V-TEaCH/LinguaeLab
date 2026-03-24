const SOURCE_SPEC = 'docs/specs/rulebook.md';

function createLessonSeed(title, objective, spiralReview) {
  return {
    title,
    objective,
    spiralReview,
    officialRefs: ['bo-cycle4-2026'],
    sourceSpec: SOURCE_SPEC,
  };
}

export const module1AuthoringPreparation5e = [
  createLessonSeed(
    'Étendre le groupe nominal sans le déséquilibrer',
    'Enrichir le groupe nominal avec une expansion utile et lisible.',
    ['noyau du GN', 'accord déterminant-nom']
  ),
  createLessonSeed(
    'Distinguer compléments essentiels et compléments mobiles',
    'Identifier les compléments qui structurent le verbe et ceux qui déplacent l’information.',
    ['sujet-verbe', 'complément circonstanciel']
  ),
  createLessonSeed(
    'Ajouter un complément du nom précis',
    'Préciser un nom avec un complément du nom pertinent.',
    ['groupe prépositionnel', 'accords dans le GN']
  ),
  createLessonSeed(
    'Utiliser l’adjectif épithète avec précision',
    'Choisir et accorder un adjectif épithète qui affine le sens.',
    ['genre et nombre', 'place de l’adjectif']
  ),
  createLessonSeed(
    'Employer l’attribut du sujet dans la description',
    'Construire des phrases avec verbe d’état et attribut du sujet.',
    ['verbes d’état', 'accord de l’adjectif']
  ),
  createLessonSeed(
    'Étendre la phrase avec des compléments circonstanciels',
    'Ajouter lieu, temps et manière sans nuire à la clarté.',
    ['ponctuation', 'déplacement des groupes']
  ),
  createLessonSeed(
    'Gérer l’ordre des groupes dans la phrase',
    'Réorganiser une phrase en conservant correction et lisibilité.',
    ['sujet', 'groupe verbal']
  ),
  createLessonSeed(
    'Éviter les phrases surchargées',
    'Alléger une phrase trop longue en gardant l’information essentielle.',
    ['phrase simple et complexe', 'ponctuation']
  ),
  createLessonSeed(
    'Construire une phrase complexe par coordination',
    'Relier deux propositions par coordination avec cohérence logique.',
    ['proposition', 'conjonctions de coordination']
  ),
  createLessonSeed(
    'Construire une phrase complexe par subordination',
    'Introduire une proposition subordonnée simple au bon endroit.',
    ['proposition principale', 'subordonnant']
  ),
  createLessonSeed(
    'Choisir le bon connecteur logique',
    'Sélectionner un connecteur adapté au lien de sens visé.',
    ['coordination', 'subordination']
  ),
  createLessonSeed(
    'Renforcer la cohésion avec les reprises',
    'Éviter les répétitions en assurant des reprises claires.',
    ['pronoms', 'antécédents']
  ),
  createLessonSeed(
    'Intégrer des expansions dans un paragraphe',
    'Rédiger un paragraphe court avec des expansions variées et contrôlées.',
    ['groupe nominal enrichi', 'ponctuation de phrase']
  ),
  createLessonSeed(
    'Réviser l’extension de phrase en contexte narratif',
    'Réinvestir l’extension de phrase dans un mini-récit cohérent.',
    ['temps du récit', 'connecteurs']
  ),
  createLessonSeed(
    'Bilan module 1 : étendre, organiser, clarifier',
    'Mobiliser les acquis du module dans une réécriture structurée.',
    ['expansions', 'coordination/subordination', 'cohésion']
  ),
];
