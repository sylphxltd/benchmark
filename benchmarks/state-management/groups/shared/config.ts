/**
 * Benchmark configuration and definitions
 */

export interface LibraryConfig {
  id: string;
  name: string;
  displayName: string;
  category: 'traditional' | 'signal' | 'experimental';
  description?: string;
  website?: string;
}

export interface TestScale {
  name: string;
  multiplier: number;
  iterations: number;
  description: string;
}

export interface TestGroup {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  scales: TestScale[];
  defaultScale?: string;
}

// Library definitions - easy to extend
export const LIBRARIES: LibraryConfig[] = [
  // Traditional state management
  {
    id: 'redux-toolkit',
    name: 'Redux Toolkit',
    displayName: 'Redux Toolkit',
    category: 'traditional',
    description: 'Predictable state container for JavaScript apps',
    website: 'https://redux-toolkit.js.org/'
  },
  {
    id: 'zustand',
    name: 'Zustand',
    displayName: 'Zustand',
    category: 'traditional',
    description: 'Small, fast and scalable state management',
    website: 'https://github.com/pmndrs/zustand'
  },
  {
    id: 'jotai',
    name: 'Jotai',
    displayName: 'Jotai',
    category: 'traditional',
    description: 'Primitive and flexible state management',
    website: 'https://jotai.org/'
  },
  {
    id: 'mobx',
    name: 'MobX',
    displayName: 'MobX',
    category: 'traditional',
    description: 'Simple, scalable state management',
    website: 'https://mobx.js.org/'
  },
  {
    id: 'valtio',
    name: 'Valtio',
    displayName: 'Valtio',
    category: 'traditional',
    description: 'Proxy-based state management library',
    website: 'https://github.com/pmndrs/valtio'
  },
  {
    id: 'recoil',
    name: 'Recoil',
    displayName: 'Recoil',
    category: 'traditional',
    description: 'Experimental state management library by Facebook',
    website: 'https://recoiljs.org/',
    enabled: false // Mark as disabled for now
  },
  {
    id: 'effector',
    name: 'Effector',
    displayName: 'Effector',
    category: 'experimental',
    description: 'TypeScript-first state manager',
    website: 'https://effector.dev/',
    enabled: false // Mark as disabled for now
  },

  // Signal libraries
  {
    id: 'preact-signals',
    name: 'Preact Signals',
    displayName: 'Preact Signals',
    category: 'signal',
    description: 'Signal-based state management for Preact',
    website: 'https://github.com/preactjs/signals'
  },
  {
    id: 'solid-signals',
    name: 'Solid Signals',
    displayName: 'Solid Signals',
    category: 'signal',
    description: 'Solid.js signal library',
    website: 'https://www.solidjs.com/'
  },
  {
    id: 'zen',
    name: 'Zen',
    displayName: 'Zen',
    category: 'signal',
    description: 'Minimal state management library',
    website: 'https://github.com/sylphxltd/zen'
  },
];

// Get enabled libraries only
export const ENABLED_LIBRARIES = LIBRARIES.filter(lib => !('enabled' in lib) || lib.enabled);

// Test scale definitions - easy to extend
export const READ_SCALES: TestScale[] = [
  { name: 'x1', multiplier: 1, iterations: 1000, description: 'Single operation' },
  { name: 'x10', multiplier: 10, iterations: 100, description: '10x operations' },
  { name: 'x50', multiplier: 50, iterations: 20, description: '50x operations' },
  { name: 'x100', multiplier: 100, iterations: 10, description: '100x operations' },
  { name: 'x1000', multiplier: 1000, iterations: 1, description: '1000x operations (experimental)' },
  { name: 'x10000', multiplier: 10000, iterations: 1, description: '10000x operations (experimental)' },
];

export const WRITE_SCALES: TestScale[] = [
  { name: 'x1', multiplier: 1, iterations: 1000, description: 'Single operation' },
  { name: 'x10', multiplier: 10, iterations: 100, description: '10x operations' },
  { name: 'x50', multiplier: 50, iterations: 20, description: '50x operations' },
  { name: 'x100', multiplier: 100, iterations: 10, description: '100x operations' },
  { name: 'x1000', multiplier: 1000, iterations: 1, description: '1000x operations (experimental)' },
  { name: 'x10000', multiplier: 10000, iterations: 1, description: '10000x operations (experimental)' },
];

export const COMPLEXITY_SCALES: TestScale[] = [
  { name: 'small', multiplier: 1, iterations: 1000, description: 'Small dataset' },
  { name: 'medium', multiplier: 10, iterations: 100, description: 'Medium dataset' },
  { name: 'large', multiplier: 100, iterations: 10, description: 'Large dataset' },
  { name: 'xlarge', multiplier: 1000, iterations: 1, description: 'Extra large dataset (experimental)' },
];

export const MEMORY_SCALES: TestScale[] = [
  { name: 'small', multiplier: 1, iterations: 1000, description: 'Small memory allocation' },
  { name: 'medium', multiplier: 10, iterations: 100, description: 'Medium memory allocation' },
  { name: 'large', multiplier: 100, iterations: 10, description: 'Large memory allocation' },
  { name: 'xlarge', multiplier: 1000, iterations: 1, description: 'Extra large memory allocation (experimental)' },
];

// Test group definitions
export const TEST_GROUPS: TestGroup[] = [
  {
    id: 'read',
    name: 'Read Operations',
    description: 'Performance of state reading operations across different scales',
    icon: '📖',
    color: '#3b82f6',
    scales: READ_SCALES,
    defaultScale: 'x1'
  },
  {
    id: 'write',
    name: 'Write Operations',
    description: 'Performance of state writing and update operations',
    icon: '✏️',
    color: '#ef4444',
    scales: WRITE_SCALES,
    defaultScale: 'x1'
  },
  {
    id: 'creation',
    name: 'Store Creation',
    description: 'Performance of creating new stores and instances',
    icon: '🏗️',
    color: '#10b981',
    scales: [{ name: 'single', multiplier: 1, iterations: 1000, description: 'Single store creation' }],
    defaultScale: 'single'
  },
  {
    id: 'async',
    name: 'Async Operations',
    description: 'Performance of asynchronous state operations',
    icon: '⚡',
    color: '#f59e0b',
    scales: [{ name: 'single', multiplier: 1, iterations: 100, description: 'Single async operation' }],
    defaultScale: 'single'
  },
  {
    id: 'complexity',
    name: 'Complex Operations',
    description: 'Performance with complex nested state structures',
    icon: '🔧',
    color: '#8b5cf6',
    scales: COMPLEXITY_SCALES,
    defaultScale: 'small'
  },
  {
    id: 'memory',
    name: 'Memory Operations',
    description: 'Memory efficiency and large state operations',
    icon: '💾',
    color: '#06b6d4',
    scales: MEMORY_SCALES,
    defaultScale: 'small'
  },
  {
    id: 'form',
    name: 'Form State',
    description: 'Performance with form state management patterns',
    icon: '📝',
    color: '#84cc16',
    scales: [{ name: 'simple', multiplier: 1, iterations: 1000, description: 'Simple form state' }],
    defaultScale: 'simple'
  },
  {
    id: 'cache',
    name: 'Cache Performance',
    description: 'Performance with caching patterns and memoization',
    icon: '🚀',
    color: '#ec4899',
    scales: [{ name: 'single', multiplier: 1, iterations: 1000, description: 'Single cache operation' }],
    defaultScale: 'single'
  },
];

// Helper functions
export function getLibraryById(id: string): LibraryConfig | undefined {
  return ENABLED_LIBRARIES.find(lib => lib.id === id);
}

export function getGroupById(id: string): TestGroup | undefined {
  return TEST_GROUPS.find(group => group.id === id);
}

export function getScalesByGroup(groupId: string): TestScale[] {
  const group = getGroupById(groupId);
  return group?.scales || [];
}