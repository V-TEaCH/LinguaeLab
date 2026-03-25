import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';
import { module1LessonBlueprints4e } from './module1.js';
import { module2LessonBlueprints4e } from './module2.js';
import { module3LessonBlueprints4e } from './module3.js';
import { module4LessonBlueprints4e } from './module4.js';

const refs4e = OFFICIAL_REFS['4e'].map((ref) => ref.id);
const module1Ready = module1LessonBlueprints4e.length === 15;
const module2Ready = module2LessonBlueprints4e.length === 15;
const module3Ready = module3LessonBlueprints4e.length === 15;
const module4Ready = module4LessonBlueprints4e.length === 15;

if (!module1Ready) {
  throw new Error('4e module 1 must define 15 lesson blueprints.');
}
if (!module2Ready) {
  throw new Error('4e module 2 must define 15 lesson blueprints.');
}
if (!module3Ready) {
  throw new Error('4e module 3 must define 15 lesson blueprints.');
}
if (!module4Ready) {
  throw new Error('4e module 4 must define 15 lesson blueprints.');
}

export const modules4e = [
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 1,
    title: 'Structurer des phrases complexes',
    focus: 'articuler propositions et dépendances',
    contentStatus: 'tested',
    officialRefs: refs4e,
    lessonBlueprints: module1LessonBlueprints4e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 2,
    title: 'Orthographier les accords complexes',
    focus: 'sécuriser cas fréquents et cas pièges',
    contentStatus: 'tested',
    officialRefs: refs4e,
    lessonBlueprints: module2LessonBlueprints4e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 3,
    title: 'Conjuguer pour expliquer et raconter',
    focus: 'stabiliser valeurs des temps',
    contentStatus: 'tested',
    officialRefs: refs4e,
    lessonBlueprints: module3LessonBlueprints4e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
  createModuleBlueprint({
    levelId: '4e',
    moduleNumber: 4,
    title: 'Réviser la cohésion du texte',
    focus: 'améliorer enchaînements et reprises',
    contentStatus: 'tested',
    officialRefs: refs4e,
    lessonBlueprints: module4LessonBlueprints4e,
    sourceSpec: 'docs/specs/rulebook.md',
  }),
];
