/**
 * UnoCSS Library Implementation
 */

import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const unocss = category.registerLibrary<any>({
  id: 'unocss',
  displayName: 'UnoCSS',
  packageName: 'unocss',
  githubUrl: 'https://github.com/unocss/unocss',
  description: 'The instant on-demand atomic CSS engine',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Style Application
unocss.implement(tests.applyStyles, () => {
  const styles: string[] = [];
  for (let i = 0; i < 100; i++) {
    styles.push(`uno-${i}`);
  }
  return styles.join(' ');
});

unocss.implement(tests.conditionalStyles, () => {
  const condition = true;
  let result = '';
  for (let i = 0; i < 1000; i++) {
    result = condition ? 'uno-active' : 'uno-inactive';
  }
  return result;
});

unocss.implement(tests.stringConcat, () => {
  const base = 'uno-base';
  const variant = 'bg-blue-5';
  const size = 'text-md';
  const state = 'hover:bg-blue-6';
  const spacing = 'p-4';
  const layout = 'flex';
  const align = 'items-center';
  const border = 'rounded';
  const shadow = 'shadow-md';
  const transition = 'transition-all';

  return `${base} ${variant} ${size} ${state} ${spacing} ${layout} ${align} ${border} ${shadow} ${transition}`;
});

// Dynamic Updates
unocss.implement(tests.themeToggle, () => {
  let theme = 'light';
  for (let i = 0; i < 1000; i++) {
    theme = theme === 'light' ? 'dark' : 'light';
    const className = theme === 'dark' ? 'dark:bg-gray-9' : 'bg-white';
  }
});

unocss.implement(tests.breakpointMatching, () => {
  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
  for (let i = 0; i < 1000; i++) {
    const bp = breakpoints[i % breakpoints.length];
    const className = `${bp}:hidden`;
  }
});
