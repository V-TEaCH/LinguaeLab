import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';
import { module1LessonBlueprints3e } from './module1.js';
import { module2LessonBlueprints3e } from './module2.js';
import { module3LessonBlueprints3e } from './module3.js';
import { module4LessonBlueprints3e } from './module4.js';
import { module5LessonBlueprints3e } from './module5.js';

const refs3e = OFFICIAL_REFS['3e'].map((ref) => ref.id);
const module1Ready = module1LessonBlueprints3e.length === 15;
const module2Ready = module2LessonBlueprints3e.length === 15;
const module3Ready = module3LessonBlueprints3e.length === 15;
const module4Ready = module4LessonBlueprints3e.length === 15;
const module5Ready = module5LessonBlueprints3e.length === 15;

if (!module1Ready) {
  throw new Error('3e module 1 must define 15 lesson blueprints.');
}
if (!module2Ready) {
  throw new Error('3e module 2 must define 15 lesson blueprints.');
}
if (!module3Ready) {
  throw new Error('3e module 3 must define 15 lesson blueprints.');
}
if (!module4Ready) {
  throw new Error('3e module 4 must define 15 lesson blueprints.');
}
if (!module5Ready) {
  throw new Error('3e module 5 must define 15 lesson blueprints.');
}

export const modules3e = [
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 1,
    title: 'Consolider la phrase et ses effets',
    focus: 'piloter syntaxe et hiérarchie de l’information',
    contentStatus: 'tested',
    officialRefs: refs3e,
    lessonBlueprints: module1LessonBlueprints3e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 2,
    title: 'Sécuriser l’orthographe grammaticale',
    focus: 'fiabiliser accords complexes et chaînes d’accords',
    contentStatus: 'tested',
    officialRefs: refs3e,
    lessonBlueprints: module2LessonBlueprints3e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 3,
    title: 'Choisir les temps et les modes',
    focus: 'mobiliser les formes verbales selon l’intention',
    contentStatus: 'tested',
    officialRefs: refs3e,
    lessonBlueprints: module3LessonBlueprints3e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 4,
    title: 'Réécrire avec efficacité',
    focus: 'améliorer style, cohésion et précision',
    contentStatus: 'tested',
    officialRefs: refs3e,
    lessonBlueprints: module4LessonBlueprints3e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '3e',
    moduleNumber: 5,
    title: 'Révisions DNB',
    focus: 'entraîner les automatismes utiles à l’épreuve en format guidé',
    contentStatus: 'authored',
    officialRefs: refs3e,
    lessonBlueprints: module5LessonBlueprints3e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
];
