/**
 * Tailwind CSS Library Implementation
 *
 * Uses build tests to measure actual build time and CSS output size
 */

import { category, tests } from '../index';
import { measureFrameworkBuild, frameworkConfigs } from '../build-utils';

// ============================================================================
// Register Library
// ============================================================================

const tailwind = category.registerLibrary<any>({
  id: 'tailwind',
  displayName: 'Tailwind CSS',
  packageName: 'tailwindcss',
  githubUrl: 'https://github.com/tailwindlabs/tailwindcss',
  description: 'A utility-first CSS framework packed with classes that can be composed to build any design',

  setup: {
    createStore: () => ({}),
  },

  features: ['Utility-First', 'JIT Compiler', 'Tree-Shaking'],
});

// ============================================================================
// Implement Build Tests
// ============================================================================

tailwind.implement(tests.smallAppBuild, {
  type: 'build',
  config: {
    build: async () => {
      return await measureFrameworkBuild(frameworkConfigs.tailwind);
    },
  },
});
