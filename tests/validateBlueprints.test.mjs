import test from 'node:test';
import assert from 'node:assert/strict';

import { curriculumBlueprint } from '../assets/js/data/curriculumBlueprint.js';
import { modules6e } from '../assets/js/data/6e/blueprint.js';
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
const AUTHORED_6E_MODULES = [
  module1LessonBlueprints,
  module2LessonBlueprints,
  module3LessonBlueprints,
  module4LessonBlueprints,
];

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
      assert.ok(!moduleIds.has(module.id));
      moduleIds.add(module.id);

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

test('all 6e modules are fully authored with 15 lessons and 12 exercises each', () => {
  assert.equal(modules6e.length, 4);

  modules6e.forEach((module) => {
    assert.equal(module.status, 'ready');
    assert.equal(module.lessons.length, 15);
  });

  AUTHORED_6E_MODULES.forEach((moduleLessons) => {
    assert.equal(moduleLessons.length, 15);

    const lessonTitles = new Set();

    moduleLessons.forEach((lessonBlueprint) => {
      assert.ok(!lessonTitles.has(lessonBlueprint.title));
      lessonTitles.add(lessonBlueprint.title);
      assert.equal(lessonBlueprint.exercises.length, 12);
      assert.ok(Array.isArray(lessonBlueprint.spiralReview));
      assert.ok(lessonBlueprint.spiralReview.length >= 1);

      lessonBlueprint.exercises.forEach((exercise) => {
        assert.match(exercise.instruction, /\S/);
      });

      assert.match(lessonBlueprint.exercises[9].type, /réécriture/i);
      assert.match(lessonBlueprint.exercises[10].type, /transfert/i);
      assert.match(lessonBlueprint.exercises[11].type, /spirale/i);
    });
  });
});

test('lesson registry exposes consistent cross-level indexes', () => {
  assert.equal(getLevels().length, 4);
  assert.equal(getModulesByLevel('3e').length, 5);
  assert.equal(getModule('6e-m1')?.title, 'Construire la phrase');
  assert.equal(getModule('6e-m4')?.title, 'Reformuler et styliser');
  assert.equal(getLesson('3e-m5-l15')?.moduleId, '3e-m5');
  assert.equal(getLesson('6e-m4-l15')?.title, 'Bilan de réécriture : améliorer un texte maladroit');

  const stats = getCurriculumStats();
  assert.deepEqual(stats, { levelCount: 4, moduleCount: 17, lessonCount: 255 });
});
