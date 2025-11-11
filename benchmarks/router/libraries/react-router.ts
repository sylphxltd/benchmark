/**
 * React Router Library Implementation
 */

import { matchReactRoutes } from '../groups/shared/routers/react-router';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const reactRouter = category.registerLibrary<any>({
  id: 'react-router',
  displayName: 'React Router',
  packageName: 'react-router-dom',
  githubUrl: 'https://github.com/remix-run/react-router',
  description: 'Declarative routing for React',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Basic Routes
reactRouter.implement(tests.staticRoute, () => {
  matchReactRoutes('/');
});

reactRouter.implement(tests.simpleRoute, () => {
  matchReactRoutes('/about');
});

// Dynamic Routes
reactRouter.implement(tests.dynamicOneParam, () => {
  matchReactRoutes('/users/123');
});

reactRouter.implement(tests.dynamicTwoParams, () => {
  matchReactRoutes('/users/123/posts/456');
});

// Advanced Routes
reactRouter.implement(tests.wildcardRoute, () => {
  matchReactRoutes('/blog/2024/01/my-post');
});

reactRouter.implement(tests.optionalWithParam, () => {
  matchReactRoutes('/products/electronics/phones');
});

reactRouter.implement(tests.optionalWithoutParam, () => {
  matchReactRoutes('/products/electronics');
});

// Real-World
reactRouter.implement(tests.mixedRoutes, () => {
  matchReactRoutes('/');
  matchReactRoutes('/about');
  matchReactRoutes('/users/123');
  matchReactRoutes('/users/456/posts');
  matchReactRoutes('/users/789/posts/101');
  matchReactRoutes('/blog/some/deep/path');
  matchReactRoutes('/products/electronics/phones');
});

reactRouter.implement(tests.sequentialWorstCase, () => {
  matchReactRoutes('/products/electronics/phones');
});
