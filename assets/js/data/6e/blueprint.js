import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';

export const modules6e = [
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 1,
    title: 'Construire la phrase simple',
    focus: 'identifier et organiser les fonctions de base',
    officialRefs: OFFICIAL_REFS['6e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 2,
    title: 'Accorder dans le groupe nominal',
    focus: 'stabiliser accords et marques du nom',
    officialRefs: OFFICIAL_REFS['6e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 3,
    title: 'Conjuguer au présent et au futur',
    focus: 'sécuriser les choix verbaux fréquents',
    officialRefs: OFFICIAL_REFS['6e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 4,
    title: 'Réécrire avec clarté',
    focus: 'améliorer ponctuation et reformulation',
    officialRefs: OFFICIAL_REFS['6e'].map((ref) => ref.id),
  }),
];
