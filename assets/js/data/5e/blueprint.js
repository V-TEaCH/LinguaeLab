import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';
import { module1LessonBlueprints5e } from './module1.js';
import { module2LessonBlueprints5e } from './module2.js';
import { module3LessonBlueprints5e } from './module3.js';
import { module4LessonBlueprints5e } from './module4.js';

const refs5e = OFFICIAL_REFS['5e'].map((ref) => ref.id);
const module1Ready = module1LessonBlueprints5e.length === 15;
const module2Ready = module2LessonBlueprints5e.length === 15;
const module3Ready = module3LessonBlueprints5e.length === 15;
const module4Ready = module4LessonBlueprints5e.length === 15;

if (!module1Ready) {
  throw new Error('5e module 1 must define 15 lesson blueprints.');
}
if (!module2Ready) {
  throw new Error('5e module 2 must define 15 lesson blueprints.');
}
if (!module3Ready) {
  throw new Error('5e module 3 must define 15 lesson blueprints.');
}
if (!module4Ready) {
  throw new Error('5e module 4 must define 15 lesson blueprints.');
}

export const modules5e = [
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 1,
    title: 'Étendre la phrase',
    focus: 'maîtriser expansions et compléments',
    contentStatus: 'tested',
    officialRefs: refs5e,
    lessonBlueprints: module1LessonBlueprints5e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 2,
    title: 'Accorder avec plus de précision',
    focus: 'sécuriser accords sujet-verbe et GN étendus',
    contentStatus: 'tested',
    officialRefs: refs5e,
    lessonBlueprints: module2LessonBlueprints5e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 3,
    title: 'Conjuguer dans le récit',
    focus: 'choisir les temps utiles au récit',
    contentStatus: 'authored',
    officialRefs: refs5e,
    lessonBlueprints: module3LessonBlueprints5e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '5e',
    moduleNumber: 4,
    title: 'Nuancer et reformuler',
    focus: 'travailler précision lexicale et cohésion',
    contentStatus: 'authored',
    officialRefs: refs5e,
    lessonBlueprints: module4LessonBlueprints5e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
];
