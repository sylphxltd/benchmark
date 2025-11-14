/**
 * React Router v6 Benchmark
 *
 * Testing pure route matching performance using React Router's
 * matchRoutes API without component overhead
 */

import { category, tests } from '../index';
import { matchRoutes, createMemoryRouter, RouteObject } from 'react-router-dom';

// ============================================================================
// Test Data - Consistent across all libraries
// ============================================================================

// Define comprehensive route sets for testing
const routes: RouteObject[] = [
  // Static routes
  { path: '/', element: null },
  { path: '/about', element: null },
  { path: '/contact', element: null },
  { path: '/products', element: null },
  { path: '/services', element: null },
  { path: '/dashboard', element: null },
  { path: '/settings', element: null },
  { path: '/profile', element: null },
  { path: '/help', element: null },
  { path: '/faq', element: null },

  // Dynamic routes with parameters
  { path: '/user/:id', element: null },
  { path: '/post/:slug', element: null },
  { path: '/category/:cat', element: null },
  { path: '/category/:cat/item/:id', element: null },
  { path: '/blog/:year/:month/:day/:slug', element: null },
  { path: '/api/v:version/endpoint', element: null },

  // Advanced patterns
  { path: '/files/*', element: null },
  { path: '/docs/:section/:page?', element: null },
  { path: '/search/*', element: null },
  { path: '/admin/*', element: null },

  // Complex nested routes
  { path: '/org/:org/repo/:repo', element: null },
  { path: '/org/:org/repo/:repo/issues/:issue', element: null },
  { path: '/org/:org/repo/:repo/pull/:pr', element: null },
  { path: '/workspace/:ws/project/:proj/task/:task', element: null },

  // Additional routes for realistic route table size
  { path: '/login', element: null },
  { path: '/logout', element: null },
  { path: '/register', element: null },
  { path: '/forgot-password', element: null },
  { path: '/reset-password', element: null },
  { path: '/verify-email', element: null },
  { path: '/terms', element: null },
  { path: '/privacy', element: null },
  { path: '/cookies', element: null },
  { path: '/sitemap', element: null },
];

// Create memory router for navigation tests
const router = createMemoryRouter(routes);

// ============================================================================
// Register Library
// ============================================================================

const library = category.registerLibrary({
  id: 'react-router-dom',
  displayName: 'React Router',
  packageName: 'react-router-dom',
  githubUrl: 'https://github.com/remix-run/react-router',
  description: 'Declarative routing for React',

  setup: {
    createStore: () => ({ routes }),
  },
});

// ============================================================================
// Basic Routes Tests
// ============================================================================

library.implement(tests.staticRoute, () => {
  const matches = matchRoutes(routes, '/');
  return matches;
});

library.implement(tests.simpleRoute, () => {
  const matches = matchRoutes(routes, '/about');
  return matches;
});

// ============================================================================
// Dynamic Routes Tests
// ============================================================================

library.implement(tests.dynamicOneParam, () => {
  const matches = matchRoutes(routes, '/user/123');
  return matches;
});

library.implement(tests.dynamicTwoParams, () => {
  const matches = matchRoutes(routes, '/category/electronics/item/456');
  return matches;
});

// ============================================================================
// Advanced Routes Tests
// ============================================================================

library.implement(tests.wildcardRoute, () => {
  const matches = matchRoutes(routes, '/files/documents/report.pdf');
  return matches;
});

library.implement(tests.optionalWithParam, () => {
  const matches = matchRoutes(routes, '/docs/api/authentication');
  return matches;
});

library.implement(tests.optionalWithoutParam, () => {
  const matches = matchRoutes(routes, '/docs/api');
  return matches;
});

// ============================================================================
// Real-World Pattern Tests
// ============================================================================

library.implement(tests.mixedRoutes, () => {
  const testPaths = [
    '/',
    '/about',
    '/user/789',
    '/category/books/item/101',
    '/files/images/photo.jpg',
    '/docs/guides',
    '/workspace/main/project/app/task/42',
  ];
  const results = [];
  for (const path of testPaths) {
    const matches = matchRoutes(routes, path);
    results.push(matches);
  }
  return results;
});

library.implement(tests.sequentialWorstCase, () => {
  // Match the very last route (worst-case for linear search)
  const matches = matchRoutes(routes, '/sitemap');
  return matches;
});