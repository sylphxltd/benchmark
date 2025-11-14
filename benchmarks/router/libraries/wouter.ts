/**
 * Wouter Benchmark
 *
 * Testing pure route matching performance using Wouter's
 * minimalist matching API without React overhead
 */

import { category, tests } from '../index';
import { parse } from 'regexparam';

// ============================================================================
// Test Data - Consistent across all libraries
// ============================================================================

// Route definitions with their matchers
interface RouteDefinition {
  path: string;
  pattern: RegExp;
  keys: string[];
}

// Create route definitions with pre-compiled patterns
const createRoutes = (): RouteDefinition[] => [
  // Static routes
  { path: '/', ...parse('/') },
  { path: '/about', ...parse('/about') },
  { path: '/contact', ...parse('/contact') },
  { path: '/products', ...parse('/products') },
  { path: '/services', ...parse('/services') },
  { path: '/dashboard', ...parse('/dashboard') },
  { path: '/settings', ...parse('/settings') },
  { path: '/profile', ...parse('/profile') },
  { path: '/help', ...parse('/help') },
  { path: '/faq', ...parse('/faq') },

  // Dynamic routes with parameters
  { path: '/user/:id', ...parse('/user/:id') },
  { path: '/post/:slug', ...parse('/post/:slug') },
  { path: '/category/:cat', ...parse('/category/:cat') },
  { path: '/category/:cat/item/:id', ...parse('/category/:cat/item/:id') },
  { path: '/blog/:year/:month/:day/:slug', ...parse('/blog/:year/:month/:day/:slug') },
  { path: '/api/v:version/endpoint', ...parse('/api/v:version/endpoint') },

  // Advanced patterns (regexparam syntax)
  { path: '/files/*', ...parse('/files/*') },
  { path: '/docs/:section/:page?', ...parse('/docs/:section/:page?') },
  { path: '/search/*', ...parse('/search/*') },
  { path: '/admin/*', ...parse('/admin/*') },

  // Complex nested routes
  { path: '/org/:org/repo/:repo', ...parse('/org/:org/repo/:repo') },
  { path: '/org/:org/repo/:repo/issues/:issue', ...parse('/org/:org/repo/:repo/issues/:issue') },
  { path: '/org/:org/repo/:repo/pull/:pr', ...parse('/org/:org/repo/:repo/pull/:pr') },
  { path: '/workspace/:ws/project/:proj/task/:task', ...parse('/workspace/:ws/project/:proj/task/:task') },

  // Additional routes for realistic route table size
  { path: '/login', ...parse('/login') },
  { path: '/logout', ...parse('/logout') },
  { path: '/register', ...parse('/register') },
  { path: '/forgot-password', ...parse('/forgot-password') },
  { path: '/reset-password', ...parse('/reset-password') },
  { path: '/verify-email', ...parse('/verify-email') },
  { path: '/terms', ...parse('/terms') },
  { path: '/privacy', ...parse('/privacy') },
  { path: '/cookies', ...parse('/cookies') },
  { path: '/sitemap', ...parse('/sitemap') },
];

// Pre-create routes for all tests
const routes = createRoutes();

// Helper function to match a path against all routes (simulating router behavior)
function matchPath(routes: RouteDefinition[], path: string) {
  for (const route of routes) {
    const match = route.pattern.exec(path);
    if (match) {
      const params: Record<string, string> = {};
      route.keys.forEach((key, i) => {
        params[key] = match[i + 1];
      });
      return { route: route.path, params };
    }
  }
  return null;
}

// ============================================================================
// Register Library
// ============================================================================

const library = category.registerLibrary({
  id: 'wouter',
  displayName: 'Wouter',
  packageName: 'wouter',
  githubUrl: 'https://github.com/molefrog/wouter',
  description: 'Minimalist-friendly routing for React and Preact',

  setup: {
    createStore: () => ({ routes }),
  },
});

// ============================================================================
// Basic Routes Tests
// ============================================================================

library.implement(tests.staticRoute, () => {
  return matchPath(routes, '/');
});

library.implement(tests.simpleRoute, () => {
  return matchPath(routes, '/about');
});

// ============================================================================
// Dynamic Routes Tests
// ============================================================================

library.implement(tests.dynamicOneParam, () => {
  return matchPath(routes, '/user/123');
});

library.implement(tests.dynamicTwoParams, () => {
  return matchPath(routes, '/category/electronics/item/456');
});

// ============================================================================
// Advanced Routes Tests
// ============================================================================

library.implement(tests.wildcardRoute, () => {
  return matchPath(routes, '/files/documents/report.pdf');
});

library.implement(tests.optionalWithParam, () => {
  return matchPath(routes, '/docs/api/authentication');
});

library.implement(tests.optionalWithoutParam, () => {
  return matchPath(routes, '/docs/api');
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
    results.push(matchPath(routes, path));
  }
  return results;
});

library.implement(tests.sequentialWorstCase, () => {
  // Match the very last route (worst-case for linear search)
  return matchPath(routes, '/sitemap');
});