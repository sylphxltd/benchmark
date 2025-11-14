/**
 * UnoCSS Library Implementation
 *
 * Uses build tests to measure actual build time and CSS output size
 */

import { category, tests } from '../index';
import { measureFrameworkBuild, frameworkConfigs } from '../build-utils';

// ============================================================================
// Register Library
// ============================================================================

const unocss = category.registerLibrary<any>({
  id: 'unocss',
  displayName: 'UnoCSS',
  packageName: 'unocss',
  githubUrl: 'https://github.com/unocss/unocss',
  description: 'The instant on-demand atomic CSS engine',

  setup: {
    createStore: () => ({}),
  },

  features: ['On-Demand', 'Atomic CSS', 'Instant', 'Presets'],
});

// ============================================================================
// Implement Build Tests
// ============================================================================

unocss.implement(tests.smallAppBuild, {
  type: 'build',
  config: {
    build: async () => {
      return await measureFrameworkBuild(frameworkConfigs.unocss);
    },
  },
});
