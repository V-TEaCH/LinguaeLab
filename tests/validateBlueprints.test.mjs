import test from 'node:test';
import assert from 'node:assert/strict';

import { curriculumBlueprint } from '../assets/js/data/curriculumBlueprint.js';
import { module1LessonBlueprints } from '../assets/js/data/6e/module1.js';
import { module2LessonBlueprints } from '../assets/js/data/6e/module2.js';
import { module3LessonBlueprints } from '../assets/js/data/6e/module3.js';
import { module4LessonBlueprints } from '../assets/js/data/6e/module4.js';
import { modules5e } from '../assets/js/data/5e/blueprint.js';
import { module1LessonBlueprints5e } from '../assets/js/data/5e/module1.js';
import { module2LessonBlueprints5e } from '../assets/js/data/5e/module2.js';
import { module3LessonBlueprints5e } from '../assets/js/data/5e/module3.js';
import { module4LessonBlueprints5e } from '../assets/js/data/5e/module4.js';
import { module1LessonBlueprints4e } from '../assets/js/data/4e/module1.js';
import { module2LessonBlueprints4e } from '../assets/js/data/4e/module2.js';
import { module3LessonBlueprints4e } from '../assets/js/data/4e/module3.js';
import { module4LessonBlueprints4e } from '../assets/js/data/4e/module4.js';
import { module1LessonBlueprints3e } from '../assets/js/data/3e/module1.js';
import { module2LessonBlueprints3e } from '../assets/js/data/3e/module2.js';
import { module3LessonBlueprints3e } from '../assets/js/data/3e/module3.js';
import { module4LessonBlueprints3e } from '../assets/js/data/3e/module4.js';
import { module5LessonBlueprints3e } from '../assets/js/data/3e/module5.js';
import {
  getCurriculumStats,
  getLesson,
  getLevels,
  getModule,
  getModulesByLevel,
} from '../assets/js/lessonRegistry.js';
import { buildRuntimeExercise } from '../assets/js/engines/exerciseRenderer.js';

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
const ALLOWED_ENGINE_TYPES = new Set(['singleChoice', 'multipleChoice', 'textInput', 'ordering']);
const ALLOWED_ADAPTIVE_PHASES = new Set([
  'standardPath',
  'reinforcementPath',
  'masteryPath',
  'deferredSpiralPath',
]);

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
      assert.ok(exercise.instruction.length <= 150, `Instruction too long: ${exercise.instruction}`);
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
      assert.ok(exercise.instruction.length <= 150, `Instruction too long: ${exercise.instruction}`);
      assert.ok(ALLOWED_6E_EXERCISE_TYPES.has(exercise.type), `Unexpected exercise type: ${exercise.type}`);
    });

    EXERCISE_10_11_12_PATTERN.forEach((pattern, index) => {
      assert.match(lessonBlueprint.exercises[index + 9].type, pattern);
    });
  });
});

test('5e module 1 is tested with engine-compatible exercise types', () => {
  assert.equal(modules5e.length, 4);
  const module1 = modules5e.find((module) => module.id === '5e-m1');
  assert.ok(module1);
  assert.equal(module1?.contentStatus, 'tested');
  assert.equal(module1?.lessons.length, 15);

  assert.equal(module1LessonBlueprints5e.length, 15);
  module1LessonBlueprints5e.forEach((lessonBlueprint) => {
    assert.equal(lessonBlueprint.exercises.length, 12);
    assert.ok(Array.isArray(lessonBlueprint.officialRefs));
    assert.ok(lessonBlueprint.officialRefs.includes('bo-cycle4-2026'));
    lessonBlueprint.exercises.forEach((exercise) => {
      assert.ok(ALLOWED_ENGINE_TYPES.has(exercise.type));
      assert.match(exercise.instruction, /\S/);
      assert.equal(/^Complète un exercice de type /.test(exercise.instruction), false);
    });
  });
});

test('5e modules 2, 3 and 4 are authored with 15 lessons and 12 engine-compatible exercises', () => {
  const authoredModules = [
    module2LessonBlueprints5e,
    module3LessonBlueprints5e,
    module4LessonBlueprints5e,
  ];

  authoredModules.forEach((moduleLessonBlueprints) => {
    assert.equal(moduleLessonBlueprints.length, 15);
    moduleLessonBlueprints.forEach((lessonBlueprint) => {
      assert.equal(lessonBlueprint.exercises.length, 12);
      assert.ok(Array.isArray(lessonBlueprint.spiralReview));
      assert.ok(lessonBlueprint.spiralReview.length >= 1);
      assert.ok(Array.isArray(lessonBlueprint.officialRefs));
      assert.ok(lessonBlueprint.officialRefs.includes('bo-cycle4-2026'));

      lessonBlueprint.exercises.forEach((exercise) => {
        assert.ok(ALLOWED_ENGINE_TYPES.has(exercise.type));
        assert.match(exercise.instruction, /\S/);
      });
    });
  });
});

test('4e module 1 is authored with engine-compatible exercise types', () => {
  assert.equal(module1LessonBlueprints4e.length, 15);
  module1LessonBlueprints4e.forEach((lessonBlueprint) => {
    assert.equal(lessonBlueprint.exercises.length, 12);
    assert.ok(Array.isArray(lessonBlueprint.spiralReview));
    assert.ok(lessonBlueprint.spiralReview.length >= 1);
    assert.ok(Array.isArray(lessonBlueprint.officialRefs));
    assert.ok(lessonBlueprint.officialRefs.includes('bo-cycle4-2026'));
    lessonBlueprint.exercises.forEach((exercise) => {
      assert.ok(ALLOWED_ENGINE_TYPES.has(exercise.type));
      assert.match(exercise.instruction, /\S/);
      assert.ok(exercise.instruction.length <= 150, `Instruction too long: ${exercise.instruction}`);
      assert.ok(ALLOWED_6E_EXERCISE_TYPES.has(exercise.type), `Unexpected exercise type: ${exercise.type}`);
    });
  });
});

test('4e modules 2, 3 and 4 are authored with 15 lessons and 12 engine-compatible exercises', () => {
  const authoredModules = [
    module2LessonBlueprints4e,
    module3LessonBlueprints4e,
    module4LessonBlueprints4e,
  ];

  authoredModules.forEach((moduleLessonBlueprints) => {
    assert.equal(moduleLessonBlueprints.length, 15);
    moduleLessonBlueprints.forEach((lessonBlueprint) => {
      assert.equal(lessonBlueprint.exercises.length, 12);
      assert.ok(Array.isArray(lessonBlueprint.spiralReview));
      assert.ok(lessonBlueprint.spiralReview.length >= 1);
      assert.ok(Array.isArray(lessonBlueprint.officialRefs));
      assert.ok(lessonBlueprint.officialRefs.includes('bo-cycle4-2026'));
      lessonBlueprint.exercises.forEach((exercise) => {
        assert.ok(ALLOWED_ENGINE_TYPES.has(exercise.type));
        assert.match(exercise.instruction, /\S/);
      });
    });
  });
});

test('4e modules 2, 3 and 4 are authored with 15 lessons and 12 engine-compatible exercises', () => {
  const authoredModules = [
    module2LessonBlueprints4e,
    module3LessonBlueprints4e,
    module4LessonBlueprints4e,
  ];

  authoredModules.forEach((moduleLessonBlueprints) => {
    assert.equal(moduleLessonBlueprints.length, 15);
    moduleLessonBlueprints.forEach((lessonBlueprint) => {
      assert.equal(lessonBlueprint.exercises.length, 12);
      assert.ok(Array.isArray(lessonBlueprint.spiralReview));
      assert.ok(lessonBlueprint.spiralReview.length >= 1);
      assert.ok(Array.isArray(lessonBlueprint.officialRefs));
      assert.ok(lessonBlueprint.officialRefs.includes('bo-cycle4-2026'));
      lessonBlueprint.exercises.forEach((exercise) => {
        assert.ok(ALLOWED_ENGINE_TYPES.has(exercise.type));
        assert.match(exercise.instruction, /\S/);
      });
    });
  });
});



test('3e modules 1, 2, 3, 4 and DNB module 5 are authored with 15 lessons and 12 engine-compatible exercises', () => {
  const authoredModules = [
    module1LessonBlueprints3e,
    module2LessonBlueprints3e,
    module3LessonBlueprints3e,
    module4LessonBlueprints3e,
    module5LessonBlueprints3e,
  ];

  authoredModules.forEach((moduleLessonBlueprints) => {
    assert.equal(moduleLessonBlueprints.length, 15);
    moduleLessonBlueprints.forEach((lessonBlueprint) => {
      assert.equal(lessonBlueprint.exercises.length, 12);
      assert.ok(Array.isArray(lessonBlueprint.spiralReview));
      assert.ok(lessonBlueprint.spiralReview.length >= 1);
      assert.ok(Array.isArray(lessonBlueprint.officialRefs));
      assert.ok(lessonBlueprint.officialRefs.includes('bo-cycle4-2026'));

      lessonBlueprint.exercises.forEach((exercise) => {
        assert.ok(ALLOWED_ENGINE_TYPES.has(exercise.type));
        assert.match(exercise.instruction, /\S/);
      });
    });
  });
});


test('authored and tested modules no longer rely on unsupported fallback exercise types', () => {
  const authoredOrTestedModules = curriculumBlueprint.levels
    .flatMap((level) => level.modules)
    .filter((module) => module.contentStatus === 'authored' || module.contentStatus === 'tested');

  const fallbackTypes = new Map();

  authoredOrTestedModules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      lesson.exerciseSlots.forEach((exercise, index) => {
        const runtimeExercise = buildRuntimeExercise(exercise, index);
        if (runtimeExercise.fallbackFromUnsupported) {
          fallbackTypes.set(
            runtimeExercise.declaredType,
            (fallbackTypes.get(runtimeExercise.declaredType) ?? 0) + 1
          );
        }
      });
    });
  });

  assert.deepEqual(Array.from(fallbackTypes.entries()), []);
});

test('adaptive lesson contract is available on 6e, 5e and 3e pilot lessons', () => {
  const pilotLessons = [
    getLesson('6e-m1-l01'),
    getLesson('5e-m1-l06'),
    getLesson('3e-m4-l09'),
  ];

  pilotLessons.forEach((lesson) => {
    assert.ok(lesson);
    assert.equal(lesson.exerciseSlots.length, 12);

    const runtimeExercises = lesson.exerciseSlots.map((exercise, index) =>
      buildRuntimeExercise(exercise, index)
    );

    const standardCount = runtimeExercises.filter((exercise) => exercise.phase === 'standardPath').length;
    const reinforcementCount = runtimeExercises.filter((exercise) => exercise.phase === 'reinforcementPath').length;
    const masteryCount = runtimeExercises.filter((exercise) => exercise.phase === 'masteryPath').length;
    const deferredCount = runtimeExercises.filter((exercise) => exercise.phase === 'deferredSpiralPath').length;

    assert.equal(standardCount, 6);
    assert.equal(reinforcementCount, 3);
    assert.equal(masteryCount, 2);
    assert.equal(deferredCount, 1);

    runtimeExercises.forEach((runtimeExercise) => {
      assert.ok(ALLOWED_ADAPTIVE_PHASES.has(runtimeExercise.phase));
      assert.match(runtimeExercise.pedagogicalRole, /\S/);
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
  assert.equal(moduleStatuses.get('5e-m1'), 'tested');
  assert.equal(moduleStatuses.get('5e-m2'), 'authored');
  assert.equal(moduleStatuses.get('5e-m3'), 'authored');
  assert.equal(moduleStatuses.get('5e-m4'), 'authored');
  assert.equal(moduleStatuses.get('4e-m1'), 'authored');
  assert.equal(moduleStatuses.get('4e-m2'), 'authored');
  assert.equal(moduleStatuses.get('4e-m3'), 'authored');
  assert.equal(moduleStatuses.get('4e-m4'), 'authored');
  assert.equal(moduleStatuses.get('3e-m1'), 'authored');
  assert.equal(moduleStatuses.get('3e-m2'), 'authored');
  assert.equal(moduleStatuses.get('3e-m3'), 'authored');
  assert.equal(moduleStatuses.get('3e-m4'), 'authored');
  assert.equal(moduleStatuses.get('3e-m5'), 'authored');

});
