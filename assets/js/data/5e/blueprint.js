import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';

export const modules5e = [
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 1,
    title: 'Étendre la phrase',
    focus: 'maîtriser expansions et compléments',
    officialRefs: OFFICIAL_REFS['5e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 2,
    title: 'Accorder avec plus de précision',
    focus: 'sécuriser accords sujet-verbe et GN étendus',
    officialRefs: OFFICIAL_REFS['5e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 3,
    title: 'Conjuguer dans le récit',
    focus: 'choisir les temps utiles au récit',
    officialRefs: OFFICIAL_REFS['5e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 4,
    title: 'Nuancer et reformuler',
    focus: 'travailler précision lexicale et cohésion',
    officialRefs: OFFICIAL_REFS['5e'].map((ref) => ref.id),
  }),
];
