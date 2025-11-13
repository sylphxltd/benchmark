/**
 * SolidJS Router implementation
 */
import { Router, useRoutes, Route } from '@solidjs/router';
import type { RouteDefinition } from '@solidjs/router';

// Define routes configuration
export const solidRoutes: RouteDefinition[] = [
  { path: '/', component: () => null },
  { path: '/about', component: () => null },
  { path: '/users', component: () => null },
  { path: '/users/:id', component: () => null },
  { path: '/users/:id/posts', component: () => null },
  { path: '/users/:id/posts/:postId', component: () => null },
  { path: '/blog/*', component: () => null },
  { path: '/products/:category/:subcategory?', component: () => null },
];

// Simplified route matching function (not using actual SolidJS rendering)
// We're testing the route matching logic, not the full framework
function compileSolidRoute(path: string): { regexp: RegExp; keys: string[] } {
  const keys: string[] = [];
  let pattern = '^';
  const segments = path.split('/');

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment === undefined) continue;
    if (i === 0 && segment === '') continue;

    pattern += '\\/';

    if (segment === '*') {
      // Wildcard segment
      keys.push('*');
      pattern += '(.*)';
      break;
    } else if (segment.startsWith(':')) {
      const isOptional = segment.endsWith('?');
      const paramName = isOptional ? segment.slice(1, -1) : segment.slice(1);

      if (!paramName) {
        throw new Error(`Invalid parameter name in path "${path}"`);
      }

      keys.push(paramName);
      const paramPattern = '([^\\/]+?)';

      if (isOptional) {
        pattern = pattern.slice(0, -2); // Remove the '\/'
        pattern += `(?:\\/${paramPattern})?`;
      } else {
        pattern += paramPattern;
      }
    } else {
      // Escape special regex characters
      pattern += segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }

  if (pattern === '^') {
    pattern += '\\/';
  }

  if (!path.endsWith('/') || path === '/') {
    pattern += '\\/?';
  }

  pattern += '$';

  return {
    regexp: new RegExp(pattern, 'i'),
    keys,
  };
}

// Pre-compile all routes for performance
const compiledSolidRoutes = solidRoutes.map((route) => ({
  route,
  ...compileSolidRoute(route.path),
}));

// Match a path against routes
export function matchSolidRoute(path: string) {
  for (const { route, regexp, keys } of compiledSolidRoutes) {
    const match = regexp.exec(path);

    if (match) {
      const params: Record<string, string | undefined> = {};

      for (let i = 1; i < match.length; i++) {
        const key = keys[i - 1];
        const value = match[i];

        if (key && value !== undefined) {
          try {
            params[key] = decodeURIComponent(value);
          } catch {
            params[key] = value;
          }
        } else if (key && value === undefined) {
          params[key] = undefined;
        }
      }

      return { route, params };
    }
  }

  return null;
}

// Navigate (simplified for benchmarking)
export function navigateSolidRouter(path: string) {
  return matchSolidRoute(path);
}
