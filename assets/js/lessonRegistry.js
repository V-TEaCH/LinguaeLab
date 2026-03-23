import { curriculumBlueprint } from './data/curriculumBlueprint.js';

function indexCurriculum() {
  const levelMap = new Map();
  const moduleMap = new Map();
  const lessonMap = new Map();

  curriculumBlueprint.levels.forEach((level) => {
    levelMap.set(level.id, level);

    level.modules.forEach((module) => {
      moduleMap.set(module.id, module);

      module.lessons.forEach((lesson) => {
        lessonMap.set(lesson.id, {
          ...lesson,
          levelId: level.id,
          moduleId: module.id,
          moduleTitle: module.title,
          levelTitle: level.title,
        });
      });
    });
  });

  return { levelMap, moduleMap, lessonMap };
}

const indexes = indexCurriculum();

export function getLevels() {
  return curriculumBlueprint.levels;
}

export function getLevel(levelId) {
  return indexes.levelMap.get(levelId) ?? null;
}

export function getModule(moduleId) {
  return indexes.moduleMap.get(moduleId) ?? null;
}

export function getLesson(lessonId) {
  return indexes.lessonMap.get(lessonId) ?? null;
}

export function getModulesByLevel(levelId) {
  return getLevel(levelId)?.modules ?? [];
}

export function getLessonsByModule(moduleId) {
  return getModule(moduleId)?.lessons ?? [];
}

export function getCurriculumStats() {
  const levels = getLevels();
  const moduleCount = levels.reduce((sum, level) => sum + level.modules.length, 0);
  const lessonCount = levels.reduce(
    (sum, level) => sum + level.modules.reduce((inner, module) => inner + module.lessons.length, 0),
    0
  );

  return {
    levelCount: levels.length,
    moduleCount,
    lessonCount,
  };
}
