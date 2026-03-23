import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';

export const modules4e = [
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 1,
    title: 'Structurer des phrases complexes',
    focus: 'articuler propositions et dépendances',
    officialRefs: OFFICIAL_REFS['4e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 2,
    title: 'Orthographier les accords complexes',
    focus: 'sécuriser cas fréquents et cas pièges',
    officialRefs: OFFICIAL_REFS['4e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 3,
    title: 'Conjuguer pour expliquer et raconter',
    focus: 'stabiliser valeurs des temps',
    officialRefs: OFFICIAL_REFS['4e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 4,
    title: 'Réviser la cohésion du texte',
    focus: 'améliorer enchaînements et reprises',
    officialRefs: OFFICIAL_REFS['4e'].map((ref) => ref.id),
  }),
];
