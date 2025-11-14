/**
 * Panda CSS Library Implementation
 *
 * Uses build tests to measure actual build time and CSS output size
 */

import { category, tests } from '../index';
import { measureFrameworkBuild, frameworkConfigs } from '../build-utils';

// ============================================================================
// Register Library
// ============================================================================

const panda = category.registerLibrary<any>({
  id: 'panda',
  displayName: 'Panda CSS',
  packageName: '@pandacss/dev',
  githubUrl: 'https://github.com/chakra-ui/panda',
  description: 'Universal styling solution with build-time CSS generation and runtime type safety',

  setup: {
    createStore: () => ({}),
  },

  features: ['Build-Time', 'Type-Safe', 'Recipes', 'Variants'],
});

// ============================================================================
// Implement Build Tests
// ============================================================================

panda.implement(tests.smallAppBuild, {
  type: 'build',
  config: {
    build: async () => {
      return await measureFrameworkBuild(frameworkConfigs.panda);
    },
  },
});
