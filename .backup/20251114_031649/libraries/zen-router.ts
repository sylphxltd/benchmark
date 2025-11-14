/**
 * Zen Router Library Implementation
 */

import { matchZenRoute, initializeZenRoutes } from '../groups/shared/routers/zen-router';
import { category, tests } from '../index';

// Initialize routes once
initializeZenRoutes();

// ============================================================================
// Register Library
// ============================================================================

const zenRouter = category.registerLibrary<any>({
  id: 'zen-router',
  displayName: 'Zen Router',
  packageName: '@sylphx/zen-router',
  githubUrl: 'https://github.com/sylphxlai/zen-router',
  description: 'Fast and minimalist router',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Basic Routes
zenRouter.implement(tests.staticRoute, () => {
  matchZenRoute('/');
});

zenRouter.implement(tests.simpleRoute, () => {
  matchZenRoute('/about');
});

// Dynamic Routes
zenRouter.implement(tests.dynamicOneParam, () => {
  matchZenRoute('/users/123');
});

zenRouter.implement(tests.dynamicTwoParams, () => {
  matchZenRoute('/users/123/posts/456');
});

// Advanced Routes
zenRouter.implement(tests.wildcardRoute, () => {
  matchZenRoute('/blog/2024/01/my-post');
});

zenRouter.implement(tests.optionalWithParam, () => {
  matchZenRoute('/products/electronics/phones');
});

zenRouter.implement(tests.optionalWithoutParam, () => {
  matchZenRoute('/products/electronics');
});

// Real-World
zenRouter.implement(tests.mixedRoutes, () => {
  matchZenRoute('/');
  matchZenRoute('/about');
  matchZenRoute('/users/123');
  matchZenRoute('/users/456/posts');
  matchZenRoute('/users/789/posts/101');
  matchZenRoute('/blog/some/deep/path');
  matchZenRoute('/products/electronics/phones');
});

zenRouter.implement(tests.sequentialWorstCase, () => {
  matchZenRoute('/products/electronics/phones');
});
