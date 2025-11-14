/**
 * SolidJS Router Library Implementation
 */

import { matchSolidRoute } from '../groups/shared/routers/solidjs-router';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const solidjsRouter = category.registerLibrary<any>({
  id: 'solidjs-router',
  displayName: 'SolidJS Router',
  packageName: '@solidjs/router',
  githubUrl: 'https://github.com/solidjs/solid-router',
  description: 'Router for SolidJS framework',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Basic Routes
solidjsRouter.implement(tests.staticRoute, () => {
  matchSolidRoute('/');
});

solidjsRouter.implement(tests.simpleRoute, () => {
  matchSolidRoute('/about');
});

// Dynamic Routes
solidjsRouter.implement(tests.dynamicOneParam, () => {
  matchSolidRoute('/users/123');
});

solidjsRouter.implement(tests.dynamicTwoParams, () => {
  matchSolidRoute('/users/123/posts/456');
});

// Advanced Routes
solidjsRouter.implement(tests.wildcardRoute, () => {
  matchSolidRoute('/blog/2024/01/my-post');
});

solidjsRouter.implement(tests.optionalWithParam, () => {
  matchSolidRoute('/products/electronics/phones');
});

solidjsRouter.implement(tests.optionalWithoutParam, () => {
  matchSolidRoute('/products/electronics');
});

// Real-World
solidjsRouter.implement(tests.mixedRoutes, () => {
  matchSolidRoute('/');
  matchSolidRoute('/about');
  matchSolidRoute('/users/123');
  matchSolidRoute('/users/456/posts');
  matchSolidRoute('/users/789/posts/101');
  matchSolidRoute('/blog/some/deep/path');
  matchSolidRoute('/products/electronics/phones');
});

solidjsRouter.implement(tests.sequentialWorstCase, () => {
  matchSolidRoute('/products/electronics/phones');
});
