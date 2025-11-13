/**
 * Silk Library Implementation
 *
 * Uses build tests to measure actual build time and CSS output size
 */

import { category, tests } from '../index';
import { measureFrameworkBuild, frameworkConfigs } from '../build-utils';

// ============================================================================
// Register Library
// ============================================================================

const silk = category.registerLibrary<any>({
  id: 'silk',
  displayName: 'Silk',
  packageName: '@sylphx/silk',
  githubUrl: 'https://github.com/sylphxlai/silk',
  description: 'Zero-runtime CSS-in-JS framework with atomic CSS generation',

  setup: {
    createStore: () => ({}),
  },

  features: ['Zero-Runtime', 'Atomic CSS', 'Type-Safe'],
});

// ============================================================================
// Implement Build Tests
// ============================================================================

silk.implement(tests.smallAppBuild, {
  type: 'build',
  config: {
    build: async () => {
      return await measureFrameworkBuild(frameworkConfigs.silk);
    },
  },
});
