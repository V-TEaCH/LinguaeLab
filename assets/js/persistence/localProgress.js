const STORAGE_KEY = 'linguaelab.lessonProgress.v1';

let memoryStore = {};

function getLocalStorage() {
  try {
    if (typeof globalThis.localStorage === 'undefined') {
      return null;
    }

    return globalThis.localStorage;
  } catch {
    return null;
  }
}

function readStore() {
  const storage = getLocalStorage();
  if (!storage) {
    return { ...memoryStore };
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(data) {
  const normalized = data && typeof data === 'object' ? data : {};
  memoryStore = { ...normalized };

  const storage = getLocalStorage();
  if (!storage) {
    return;
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  } catch {
    // Dépassement quota ou stockage indisponible : on conserve la mémoire volatile.
  }
}

function normalizeStatus(status) {
  if (status === 'in_progress' || status === 'completed') {
    return status;
  }

  return 'not_started';
}

function normalizeProgressPayload(lessonProgress) {
  return {
    status: normalizeStatus(lessonProgress.status),
    score: Number.isFinite(lessonProgress.score) ? lessonProgress.score : 0,
    maxScore: Number.isFinite(lessonProgress.maxScore) ? lessonProgress.maxScore : 0,
    answeredCount: Number.isFinite(lessonProgress.answeredCount) ? lessonProgress.answeredCount : 0,
    exerciseResults: lessonProgress.exerciseResults && typeof lessonProgress.exerciseResults === 'object'
      ? lessonProgress.exerciseResults
      : {},
    updatedAt: Number.isFinite(lessonProgress.updatedAt) ? lessonProgress.updatedAt : 0,
  };
}

export function getLessonProgress(lessonId) {
  if (!lessonId) {
    return null;
  }

  const store = readStore();
  const lessonProgress = store[lessonId];
  if (!lessonProgress || typeof lessonProgress !== 'object') {
    return null;
  }

  return normalizeProgressPayload(lessonProgress);
}

export function upsertLessonProgress(lessonId, progressPatch) {
  if (!lessonId || !progressPatch || typeof progressPatch !== 'object') {
    return null;
  }

  const store = readStore();
  const existing = getLessonProgress(lessonId) ?? {
    status: 'not_started',
    score: 0,
    maxScore: 0,
    answeredCount: 0,
    exerciseResults: {},
    updatedAt: 0,
  };
  const merged = normalizeProgressPayload({
    ...existing,
    ...progressPatch,
    status: normalizeStatus(progressPatch.status ?? existing.status),
    updatedAt: Date.now(),
  });

  store[lessonId] = merged;
  writeStore(store);
  return merged;
}

export function getProgressSnapshot() {
  return readStore();
}

export function getModuleProgressSummary(module) {
  if (!module?.lessons?.length) {
    return { notStarted: 0, inProgress: 0, completed: 0, completionRate: 0 };
  }

  const counts = module.lessons.reduce(
    (acc, lesson) => {
      const status = getLessonProgress(lesson.id)?.status ?? 'not_started';
      if (status === 'completed') {
        acc.completed += 1;
      } else if (status === 'in_progress') {
        acc.inProgress += 1;
      } else {
        acc.notStarted += 1;
      }

      return acc;
    },
    { notStarted: 0, inProgress: 0, completed: 0 }
  );

  const completionRate = Math.round((counts.completed / module.lessons.length) * 100);
  return {
    ...counts,
    completionRate,
  };
}

export function getMostRecentLessonProgress(lessons = []) {
  const lessonIds = lessons
    .map((lesson) => (typeof lesson === 'string' ? lesson : lesson?.id))
    .filter(Boolean);

  const progressEntries = lessonIds
    .map((lessonId) => ({ lessonId, progress: getLessonProgress(lessonId) }))
    .filter(({ progress }) => progress && progress.status !== 'not_started' && progress.updatedAt > 0)
    .sort((a, b) => b.progress.updatedAt - a.progress.updatedAt);

  return progressEntries[0] ?? null;
}

export function formatProgressStatus(status) {
  if (status === 'completed') {
    return 'terminée';
  }

  if (status === 'in_progress') {
    return 'en cours';
  }

  return 'non commencée';
}

export function formatLocalScore(score, maxScore) {
  if (!Number.isFinite(maxScore) || maxScore <= 0) {
    return 'score non noté';
  }

  const normalizedScore = Number.isFinite(score) ? score : 0;
  return `score ${normalizedScore}/${maxScore}`;
}

export function __resetProgressForTests() {
  memoryStore = {};
  const storage = getLocalStorage();
  try {
    storage?.removeItem(STORAGE_KEY);
  } catch {
    // no-op
  }
}
