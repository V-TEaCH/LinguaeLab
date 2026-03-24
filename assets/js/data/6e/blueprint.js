import { createModuleBlueprint } from '../blueprintFactory.js';
import { OFFICIAL_REFS } from '../refs/officialRefs.js';
import { module1LessonBlueprints } from './module1.js';
import { module2LessonBlueprints } from './module2.js';
import { module3LessonBlueprints } from './module3.js';
import { module4LessonBlueprints } from './module4.js';

const refs6e = OFFICIAL_REFS['6e'].map((ref) => ref.id);

export const modules6e = [
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 1,
    title: 'Construire la phrase',
    focus: 'comprendre l’architecture de la phrase, de la ponctuation initiale jusqu’aux premiers liens entre propositions',
    contentStatus: 'authored',
    officialRefs: refs6e,
    lessonBlueprints: module1LessonBlueprints,
    sourceSpec: 'docs/specs/6e-blueprint-complet.md#module-1',
  }),
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 2,
    title: 'Accorder et orthographier',
    focus: 'sécuriser les chaînes d’accord et l’orthographe grammaticale rentable en 6e',
    contentStatus: 'authored',
    officialRefs: refs6e,
    lessonBlueprints: module2LessonBlueprints,
    sourceSpec: 'docs/specs/6e-blueprint-complet.md#module-2',
  }),
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 3,
    title: 'Conjuguer et choisir',
    focus: 'installer des choix verbaux simples et cohérents dans la phrase puis le texte',
    contentStatus: 'authored',
    officialRefs: refs6e,
    lessonBlueprints: module3LessonBlueprints,
    sourceSpec: 'docs/specs/6e-blueprint-complet.md#module-3',
  }),
  createModuleBlueprint({
    levelId: '6e',
    moduleNumber: 4,
    title: 'Reformuler et styliser',
    focus: 'réinvestir syntaxe, orthographe grammaticale et conjugaison dans la réécriture',
    contentStatus: 'authored',
    officialRefs: refs6e,
    lessonBlueprints: module4LessonBlueprints,
    sourceSpec: 'docs/specs/6e-blueprint-complet.md#module-4',
  }),
];
