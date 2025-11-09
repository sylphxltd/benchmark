/**
 * Category definitions for all benchmark categories
 * Central configuration for test types, scales, and metadata
 */

export interface CategoryConfig {
  name: string;
  description: string;
  testTypes: string[];
  scales: string[];
  defaultScale: string;
}

export const CATEGORIES: Record<string, CategoryConfig> = {
  'state-management': {
    name: 'State Management Libraries',
    description: 'Client-side state management solutions',
    testTypes: ['read', 'write', 'form', 'cache', 'async', 'memory'],
    scales: ['x1', 'x10', 'x100', 'x1000', 'x10000'],
    defaultScale: 'x1'
  },
  'router': {
    name: 'Client-side Routers',
    description: 'Navigation and routing libraries',
    testTypes: ['navigation', 'route-matching', 'guards', 'lazy-loading'],
    scales: ['x1', 'x10', 'x100'],
    defaultScale: 'x1'
  },
  'css-frameworks': {
    name: 'CSS Frameworks',
    description: 'Styling and UI component libraries',
    testTypes: ['render', 'update', 'animation', 'responsive'],
    scales: ['x1', 'x10', 'x100'],
    defaultScale: 'x1'
  },
  'immutability': {
    name: 'Immutability Libraries',
    description: 'Immutable data structure libraries',
    testTypes: ['create', 'update', 'clone', 'compare', 'merge'],
    scales: ['x1', 'x10', 'x100', 'x1000'],
    defaultScale: 'x1'
  }
};