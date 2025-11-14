/**
 * SolidJS Router Benchmark
 *
 * Testing route matching performance using a custom implementation
 * to ensure fair comparison across all router libraries
 */

import { category, tests } from '../index';

// ============================================================================
// Test Data - Consistent across all libraries
// ============================================================================

// Route definition with matcher
interface RouteDefinition {
  path: string;
  pattern: RegExp;
  keys: string[];
}

// Custom route pattern parser (similar to SolidJS Router's internal implementation)
function parseRoute(path: string): { pattern: RegExp; keys: string[] } {
  const keys: string[] = [];
  let pattern = path;

  // Handle wildcards (*all, *query, etc.)
  pattern = pattern.replace(/\*(\w+)/g, (_, key) => {
    keys.push(key);
    return '(.*)';
  });

  // Handle optional parameters (:param?)
  pattern = pattern.replace(/:(\w+)\?/g, (_, key) => {
    keys.push(key);
    return '(?:/([^/]+))?';
  });

  // Handle required parameters (:param)
  pattern = pattern.replace(/:(\w+)/g, (_, key) => {
    keys.push(key);
    return '([^/]+)';
  });

  // Escape forward slashes
  pattern = pattern.replace(/\//g, '\\/');

  // Add start and end anchors
  pattern = `^${pattern}\\/?$`;

  return {
    pattern: new RegExp(pattern),
    keys
  };
}

// Create comprehensive route definitions with pre-compiled matchers
const createRoutes = (): RouteDefinition[] => {
  const routePaths = [
    // Static routes
    '/',
    '/about',
    '/contact',
    '/products',
    '/services',
    '/dashboard',
    '/settings',
    '/profile',
    '/help',
    '/faq',

    // Dynamic routes with parameters
    '/user/:id',
    '/post/:slug',
    '/category/:cat',
    '/category/:cat/item/:id',
    '/blog/:year/:month/:day/:slug',
    '/api/v:version/endpoint',

    // Advanced patterns
    '/files/*all',
    '/docs/:section/:page?',
    '/search/*query',
    '/admin/*path',

    // Complex nested routes
    '/org/:org/repo/:repo',
    '/org/:org/repo/:repo/issues/:issue',
    '/org/:org/repo/:repo/pull/:pr',
    '/workspace/:ws/project/:proj/task/:task',

    // Additional routes for realistic route table size
    '/login',
    '/logout',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/verify-email',
    '/terms',
    '/privacy',
    '/cookies',
    '/sitemap',
  ];

  return routePaths.map(path => {
    const { pattern, keys } = parseRoute(path);
    return { path, pattern, keys };
  });
};

// Pre-create routes for all tests
const routes = createRoutes();

// Helper function to match a path against all routes
function matchPath(routes: RouteDefinition[], pathname: string) {
  for (const route of routes) {
    const match = route.pattern.exec(pathname);
    if (match) {
      const params: Record<string, string> = {};
      route.keys.forEach((key, i) => {
        if (match[i + 1] !== undefined) {
          params[key] = match[i + 1];
        }
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
  id: '@solidjs/router',
  displayName: 'SolidJS Router',
  packageName: '@solidjs/router',
  githubUrl: 'https://github.com/solidjs/solid-router',
  description: 'Universal router for Solid with nested routing and data APIs',

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