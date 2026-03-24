import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';
import { module1AuthoringPreparation5e } from './module1.js';

const refs5e = OFFICIAL_REFS['5e'].map((ref) => ref.id);
const module1PreparationReady = module1AuthoringPreparation5e.length === 15;

if (!module1PreparationReady) {
  throw new Error('5e module 1 preparation must define 15 lesson seeds.');
}

export const modules5e = [
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 1,
    title: 'Étendre la phrase',
    focus: 'maîtriser expansions et compléments',
    contentStatus: 'scaffold',
    officialRefs: refs5e,
    sourceSpec: 'assets/js/data/5e/module1.js',
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 2,
    title: 'Accorder avec plus de précision',
    focus: 'sécuriser accords sujet-verbe et GN étendus',
    contentStatus: 'scaffold',
    officialRefs: refs5e,
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 3,
    title: 'Conjuguer dans le récit',
    focus: 'choisir les temps utiles au récit',
    contentStatus: 'scaffold',
    officialRefs: refs5e,
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 4,
    title: 'Nuancer et reformuler',
    focus: 'travailler précision lexicale et cohésion',
    contentStatus: 'scaffold',
    officialRefs: refs5e,
  }),
];
