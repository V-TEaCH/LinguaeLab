import test from 'node:test';
import assert from 'node:assert/strict';

import { curriculumBlueprint } from '../assets/js/data/curriculumBlueprint.js';
import { module1LessonBlueprints } from '../assets/js/data/6e/module1.js';
import { module2LessonBlueprints } from '../assets/js/data/6e/module2.js';
import { module3LessonBlueprints } from '../assets/js/data/6e/module3.js';
import { module4LessonBlueprints } from '../assets/js/data/6e/module4.js';
import {
  getCurriculumStats,
  getLesson,
  getLevels,
  getModule,
  getModulesByLevel,
} from '../assets/js/lessonRegistry.js';

const EXPECTED_MODULES = { '6e': 4, '5e': 4, '4e': 4, '3e': 5 };
const ALLOWED_CONTENT_STATUSES = new Set(['scaffold', 'authored', 'tested', 'released']);
const ALLOWED_6E_EXERCISE_TYPES = new Set([
  'rappel-flash',
  'rappel-global',
  'repérage',
  'repérage-en-contexte',
  'segmentation',
  'tri',
  'ponctuation-finale',
  'analyse',
  'manipulation',
  'discrimination',
  'correction',
  'justification',
  'vigilance',
  'réécriture',
  'réécriture-guidée',
  'transfert',
  'spirale',
  'spirale-finale',
]);
const EXERCISE_10_11_12_PATTERN = [
  /(réécriture|réécriture-guidée)/i,
  /transfert/i,
  /(spirale|spirale-finale)/i,
];

function assert6eModuleBlueprint(moduleLessonBlueprints) {
  assert.equal(moduleLessonBlueprints.length, 15);

  const lessonTitles = new Set();

  moduleLessonBlueprints.forEach((lessonBlueprint) => {
    assert.ok(!lessonTitles.has(lessonBlueprint.title));
    lessonTitles.add(lessonBlueprint.title);

    assert.equal(lessonBlueprint.exercises.length, 12);
    assert.ok(Array.isArray(lessonBlueprint.spiralReview));
    assert.ok(lessonBlueprint.spiralReview.length >= 1);
    assert.ok(Array.isArray(lessonBlueprint.officialRefs));
    assert.ok(lessonBlueprint.officialRefs.length >= 1);
    assert.ok(lessonBlueprint.officialRefs.includes('bo-cycle3-2025'));
    assert.match(String(lessonBlueprint.sourceSpec ?? ''), /docs\/specs\/6e-blueprint-complet\.md#module-[1-4]/);

    lessonBlueprint.exercises.forEach((exercise) => {
      assert.match(exercise.instruction, /\S/);
      assert.ok(ALLOWED_6E_EXERCISE_TYPES.has(exercise.type), `Unexpected exercise type: ${exercise.type}`);
    });

    EXERCISE_10_11_12_PATTERN.forEach((pattern, index) => {
      assert.match(lessonBlueprint.exercises[index + 9].type, pattern);
    });
  });
}

test('curriculum blueprint matches expected college scaffold', () => {
  assert.equal(curriculumBlueprint.levels.length, 4);

  const moduleIds = new Set();
  const lessonIds = new Set();

  curriculumBlueprint.levels.forEach((level) => {
    assert.equal(level.modules.length, EXPECTED_MODULES[level.id]);
    assert.ok(level.officialRefs.length >= 1);

    level.modules.forEach((module) => {
      assert.equal(module.levelId, level.id);
      assert.equal(module.lessons.length, 15);
      assert.ok(module.officialRefs.length >= 1);
      assert.ok(ALLOWED_CONTENT_STATUSES.has(module.contentStatus));
      assert.ok(!moduleIds.has(module.id));
      moduleIds.add(module.id);

      if (module.contentStatus === 'released') {
        const hasPlaceholderExercises = module.lessons.some((lesson) =>
          lesson.exerciseSlots.some(
            (exercise) =>
              exercise.status === 'placeholder' ||
              exercise.instruction.startsWith('Complète un exercice de type ')
          )
        );
        assert.equal(hasPlaceholderExercises, false);
      }

      module.lessons.forEach((lesson) => {
        assert.equal(lesson.exerciseSlots.length, 12);
        assert.ok(lesson.officialRefs.length >= 1);
        assert.ok(!lessonIds.has(lesson.id));
        lessonIds.add(lesson.id);

        lesson.exerciseSlots.forEach((exercise) => {
          assert.match(exercise.instruction, /\S/);
        });
      });
    });
  });

  assert.equal(moduleIds.size, 17);
  assert.equal(lessonIds.size, 255);
});

test('6e module 1 is fully authored from the blueprint with 15 lessons and 12 exercises each', () => {
  assert6eModuleBlueprint(module1LessonBlueprints);
});

test('6e module 2 is fully authored from the blueprint with 15 lessons and 12 exercises each', () => {
  assert6eModuleBlueprint(module2LessonBlueprints);
});

test('6e module 3 is fully authored from the blueprint with 15 lessons and 12 exercises each', () => {
  assert6eModuleBlueprint(module3LessonBlueprints);
});

test('6e module 4 is fully authored from the blueprint with 15 lessons and 12 exercises each', () => {
  assert6eModuleBlueprint(module4LessonBlueprints);
});

test('6e full non-regression blueprint checks (cardinality, refs, and rulebook sequencing)', () => {
  const allLessons6e = [
    ...module1LessonBlueprints,
    ...module2LessonBlueprints,
    ...module3LessonBlueprints,
    ...module4LessonBlueprints,
  ];

  assert.equal(allLessons6e.length, 60);

  allLessons6e.forEach((lessonBlueprint) => {
    assert.equal(lessonBlueprint.exercises.length, 12);
    assert.ok(Array.isArray(lessonBlueprint.officialRefs));
    assert.ok(lessonBlueprint.officialRefs.length >= 1);

    lessonBlueprint.exercises.forEach((exercise) => {
      assert.match(exercise.instruction, /\S/);
      assert.ok(ALLOWED_6E_EXERCISE_TYPES.has(exercise.type), `Unexpected exercise type: ${exercise.type}`);
    });

    EXERCISE_10_11_12_PATTERN.forEach((pattern, index) => {
      assert.match(lessonBlueprint.exercises[index + 9].type, pattern);
    });
  });
});

test('lesson registry exposes consistent cross-level indexes', () => {
  assert.equal(getLevels().length, 4);
  assert.equal(getModulesByLevel('3e').length, 5);
  assert.equal(getModule('6e-m1')?.title, 'Construire la phrase');
  assert.equal(getLesson('3e-m5-l15')?.moduleId, '3e-m5');
  assert.equal(getLesson('6e-m1-l15')?.title, 'Bilan de syntaxe : analyser une phrase puis un court texte');

  const stats = getCurriculumStats();
  assert.deepEqual(stats, { levelCount: 4, moduleCount: 17, lessonCount: 255 });
});

test('module contentStatus values reflect current scaffold reality', () => {
  const moduleStatuses = new Map(
    curriculumBlueprint.levels.flatMap((level) =>
      level.modules.map((module) => [module.id, module.contentStatus])
    )
  );

  assert.equal(moduleStatuses.get('6e-m1'), 'tested');
  assert.equal(moduleStatuses.get('6e-m2'), 'tested');
  assert.equal(moduleStatuses.get('6e-m3'), 'tested');
  assert.equal(moduleStatuses.get('6e-m4'), 'tested');

  moduleStatuses.forEach((status, moduleId) => {
    if (!moduleId.startsWith('6e-')) {
      assert.equal(status, 'scaffold');
    }
  });
});
