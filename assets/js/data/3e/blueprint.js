import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';

export const modules3e = [
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 1,
    title: 'Consolider la phrase et ses effets',
    focus: 'piloter syntaxe et hiérarchie de l’information',
    officialRefs: OFFICIAL_REFS['3e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 2,
    title: 'Sécuriser l’orthographe grammaticale',
    focus: 'fiabiliser accords complexes et chaînes d’accords',
    officialRefs: OFFICIAL_REFS['3e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 3,
    title: 'Choisir les temps et les modes',
    focus: 'mobiliser les formes verbales selon l’intention',
    officialRefs: OFFICIAL_REFS['3e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 4,
    title: 'Réécrire avec efficacité',
    focus: 'améliorer style, cohésion et précision',
    officialRefs: OFFICIAL_REFS['3e'].map((ref) => ref.id),
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 5,
    title: 'Révisions DNB',
    focus: 'entraîner les automatismes utiles à l’épreuve',
    officialRefs: OFFICIAL_REFS['3e'].map((ref) => ref.id),
  }),
];
