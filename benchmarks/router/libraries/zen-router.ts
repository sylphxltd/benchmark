/**
 * Zen Router Benchmark
 *
 * Testing route matching performance using a custom implementation
 * since Zen Router doesn't export pure matching functions
 */

import { category, tests } from '../index';

// ============================================================================
// Test Data - Consistent across all libraries
// ============================================================================

// Route config for testing
interface TestRoute {
  path: string;
  name: string;
  pattern?: RegExp;
  keys?: string[];
}

// Simple route pattern parser (similar to what Zen Router does internally)
function parseRoute(path: string): { pattern: RegExp; keys: string[] } {
  const keys: string[] = [];
  let pattern = path
    .replace(/\//g, '\\/')
    .replace(/\*/g, '(.*)')
    .replace(/:(\w+)\?/g, (_, key) => {
      keys.push(key);
      return '(?:\\/([^\\/]+))?';
    })
    .replace(/:(\w+)/g, (_, key) => {
      keys.push(key);
      return '([^\\/]+)';
    });

  // Handle wildcards
  if (path.includes('*')) {
    keys.push('wildcard');
  }

  return {
    pattern: new RegExp(`^${pattern}\\/?$`),
    keys
  };
}

// Create comprehensive route definitions
const createRoutes = (): TestRoute[] => {
  const routeConfigs: Array<{ path: string; name: string }> = [
    // Static routes
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/contact', name: 'contact' },
    { path: '/products', name: 'products' },
    { path: '/services', name: 'services' },
    { path: '/dashboard', name: 'dashboard' },
    { path: '/settings', name: 'settings' },
    { path: '/profile', name: 'profile' },
    { path: '/help', name: 'help' },
    { path: '/faq', name: 'faq' },

    // Dynamic routes with parameters
    { path: '/user/:id', name: 'user' },
    { path: '/post/:slug', name: 'post' },
    { path: '/category/:cat', name: 'category' },
    { path: '/category/:cat/item/:id', name: 'categoryItem' },
    { path: '/blog/:year/:month/:day/:slug', name: 'blogPost' },
    { path: '/api/v:version/endpoint', name: 'apiEndpoint' },

    // Advanced patterns
    { path: '/files/*', name: 'files' },
    { path: '/docs/:section/:page?', name: 'docs' },
    { path: '/search/*', name: 'search' },
    { path: '/admin/*', name: 'admin' },

    // Complex nested routes
    { path: '/org/:org/repo/:repo', name: 'orgRepo' },
    { path: '/org/:org/repo/:repo/issues/:issue', name: 'orgRepoIssue' },
    { path: '/org/:org/repo/:repo/pull/:pr', name: 'orgRepoPR' },
    { path: '/workspace/:ws/project/:proj/task/:task', name: 'workspaceTask' },

    // Additional routes for realistic route table size
    { path: '/login', name: 'login' },
    { path: '/logout', name: 'logout' },
    { path: '/register', name: 'register' },
    { path: '/forgot-password', name: 'forgotPassword' },
    { path: '/reset-password', name: 'resetPassword' },
    { path: '/verify-email', name: 'verifyEmail' },
    { path: '/terms', name: 'terms' },
    { path: '/privacy', name: 'privacy' },
    { path: '/cookies', name: 'cookies' },
    { path: '/sitemap', name: 'sitemap' },
  ];

  // Parse all routes
  return routeConfigs.map(config => {
    const { pattern, keys } = parseRoute(config.path);
    return {
      ...config,
      pattern,
      keys
    };
  });
};

// Pre-create routes for all tests
const routes = createRoutes();

// Custom match function that simulates Zen Router's behavior
function matchRoute(pathname: string, routes: TestRoute[]) {
  for (const route of routes) {
    if (!route.pattern || !route.keys) continue;

    const match = route.pattern.exec(pathname);
    if (match) {
      const params: Record<string, string> = {};
      route.keys.forEach((key, i) => {
        if (match[i + 1]) {
          params[key] = match[i + 1];
        }
      });
      return { route: route.path, params, name: route.name };
    }
  }
  return null;
}

// ============================================================================
// Register Library
// ============================================================================

const library = category.registerLibrary({
  id: '@sylphx/zen-router',
  displayName: 'Zen Router',
  packageName: '@sylphx/zen-router',
  githubUrl: 'https://github.com/SylphxAI/zen-router',
  description: 'Tiny and fast router with regex-based matching',

  setup: {
    createStore: () => ({ routes }),
  },
});

// ============================================================================
// Basic Routes Tests
// ============================================================================

library.implement(tests.staticRoute, () => {
  return matchRoute('/', routes);
});

library.implement(tests.simpleRoute, () => {
  return matchRoute('/about', routes);
});

// ============================================================================
// Dynamic Routes Tests
// ============================================================================

library.implement(tests.dynamicOneParam, () => {
  return matchRoute('/user/123', routes);
});

library.implement(tests.dynamicTwoParams, () => {
  return matchRoute('/category/electronics/item/456', routes);
});

// ============================================================================
// Advanced Routes Tests
// ============================================================================

library.implement(tests.wildcardRoute, () => {
  return matchRoute('/files/documents/report.pdf', routes);
});

library.implement(tests.optionalWithParam, () => {
  return matchRoute('/docs/api/authentication', routes);
});

library.implement(tests.optionalWithoutParam, () => {
  return matchRoute('/docs/api', routes);
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
    results.push(matchRoute(path, routes));
  }
  return results;
});

library.implement(tests.sequentialWorstCase, () => {
  // Match the very last route (worst-case for linear search)
  return matchRoute('/sitemap', routes);
});