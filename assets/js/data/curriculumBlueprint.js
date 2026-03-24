import { modules6e } from './6e/blueprint.js';
import { modules5e } from './5e/blueprint.js';
import { modules4e } from './4e/blueprint.js';
import { modules3e } from './3e/blueprint.js';
import { OFFICIAL_REFS } from './refs/officialRefs.js';

export const curriculumBlueprint = {
  levels: [
    {
      id: '6e',
      title: '6e',
      modules: modules6e,
      officialRefs: OFFICIAL_REFS['6e'],
    },

    {
      id: '5e',
      title: '5e',
      modules: modules5e,
      officialRefs: OFFICIAL_REFS['5e'],
    },

    {
      id: '4e',
      title: '4e',
      modules: modules4e,
      officialRefs: OFFICIAL_REFS['4e'],
    },

    {
      id: '3e',
      title: '3e',
      modules: modules3e,
      officialRefs: OFFICIAL_REFS['3e'],
    },
  ],
};
