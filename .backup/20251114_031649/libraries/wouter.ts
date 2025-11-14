/**
 * Wouter Library Implementation
 */

import { matchWouterRoute } from '../groups/shared/routers/wouter';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const wouter = category.registerLibrary<any>({
  id: 'wouter',
  displayName: 'Wouter',
  packageName: 'wouter',
  githubUrl: 'https://github.com/molefrog/wouter',
  description: 'A minimalist-friendly routing library',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Basic Routes
wouter.implement(tests.staticRoute, () => {
  matchWouterRoute('/');
});

wouter.implement(tests.simpleRoute, () => {
  matchWouterRoute('/about');
});

// Dynamic Routes
wouter.implement(tests.dynamicOneParam, () => {
  matchWouterRoute('/users/123');
});

wouter.implement(tests.dynamicTwoParams, () => {
  matchWouterRoute('/users/123/posts/456');
});

// Advanced Routes
wouter.implement(tests.wildcardRoute, () => {
  matchWouterRoute('/blog/2024/01/my-post');
});

wouter.implement(tests.optionalWithParam, () => {
  matchWouterRoute('/products/electronics/phones');
});

wouter.implement(tests.optionalWithoutParam, () => {
  matchWouterRoute('/products/electronics');
});

// Real-World
wouter.implement(tests.mixedRoutes, () => {
  matchWouterRoute('/');
  matchWouterRoute('/about');
  matchWouterRoute('/users/123');
  matchWouterRoute('/users/456/posts');
  matchWouterRoute('/users/789/posts/101');
  matchWouterRoute('/blog/some/deep/path');
  matchWouterRoute('/products/electronics/phones');
});

wouter.implement(tests.sequentialWorstCase, () => {
  matchWouterRoute('/products/electronics/phones');
});
