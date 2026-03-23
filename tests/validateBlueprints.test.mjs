import test from 'node:test';
import assert from 'node:assert/strict';

import { curriculumBlueprint } from '../assets/js/data/curriculumBlueprint.js';
import {
  getCurriculumStats,
  getLesson,
  getLevels,
  getModule,
  getModulesByLevel,
} from '../assets/js/lessonRegistry.js';

const EXPECTED_MODULES = { '6e': 4, '5e': 4, '4e': 4, '3e': 5 };

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
      });
    });
  });

  assert.equal(moduleIds.size, 17);
  assert.equal(lessonIds.size, 255);
});

test('lesson registry exposes consistent cross-level indexes', () => {
  assert.equal(getLevels().length, 4);
  assert.equal(getModulesByLevel('3e').length, 5);
  assert.equal(getModule('6e-m1')?.title, 'Construire la phrase simple');
  assert.equal(getLesson('3e-m5-l15')?.moduleId, '3e-m5');

  const stats = getCurriculumStats();
  assert.deepEqual(stats, { levelCount: 4, moduleCount: 17, lessonCount: 255 });
});
