/**
 * Build utilities for CSS frameworks
 *
 * Provides helper functions for measuring build time and CSS output size
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { readFileSync, statSync, readdirSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { gzipSync } from 'zlib';
import { fileURLToPath } from 'url';
import type { BuildResult } from '../../src/core/types';

const execAsync = promisify(exec);

// Get the directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Configuration for a CSS framework build test
 */
export interface FrameworkBuildConfig {
  name: string;
  fixtureDir: string;      // Relative path from build-tests/fixtures/
  buildCommand: string;
  cssPath: string;          // Path to CSS output relative to fixture dir
  prepareBuild?: string;    // Optional command to run before build
}

/**
 * Find CSS file in directory (supports wildcards)
 */
function findCSSFile(baseDir: string, pattern: string): string | null {
  // Check if pattern is a direct file path (e.g., styles.css for Panda)
  if (!pattern.includes('*')) {
    const directPath = join(baseDir, pattern);
    try {
      statSync(directPath);
      return directPath;
    } catch {
      return null;
    }
  }

  // Otherwise check in dist/assets directory for Vite builds
  const assetsDir = join(baseDir, 'dist', 'assets');
  try {
    const files = readdirSync(assetsDir);
    const cssFile = files.find(f => f.endsWith('.css'));
    return cssFile ? join(assetsDir, cssFile) : null;
  } catch {
    return null;
  }
}

/**
 * Measure build time and CSS output size for a framework
 *
 * @param config - Framework build configuration
 * @param runs - Number of times to run build (default: 3 for averaging)
 * @returns Build result with build time and output size
 */
export async function measureFrameworkBuild(
  config: FrameworkBuildConfig,
  runs: number = 3
): Promise<BuildResult> {
  const buildTimes: number[] = [];
  let cssSize = 0;
  let cssMinified = 0;
  let cssGzipped = 0;

  const fixtureDir = resolve(__dirname, 'build-tests/fixtures', config.fixtureDir);

  console.log(`\n📦 Building ${config.name}...`);

  for (let i = 0; i < runs; i++) {
    // Clean previous build
    try {
      await execAsync(`rm -rf ${fixtureDir}/dist`, { cwd: process.cwd() });
    } catch {}

    // Prepare build if needed (e.g., Panda codegen)
    if (config.prepareBuild) {
      await execAsync(config.prepareBuild, { cwd: fixtureDir });
    }

    // Measure build time
    const startTime = performance.now();
    try {
      await execAsync(config.buildCommand, { cwd: fixtureDir });
    } catch (error: any) {
      console.error(`❌ Build failed for ${config.name}:`, error.message);
      throw error;
    }
    const buildTime = performance.now() - startTime;
    buildTimes.push(buildTime);

    // Measure CSS size on last run
    if (i === runs - 1) {
      const cssFile = findCSSFile(fixtureDir, config.cssPath);

      if (cssFile) {
        const cssContent = readFileSync(cssFile);
        const gzipped = gzipSync(cssContent);

        cssSize = cssContent.length;
        cssMinified = cssContent.length; // Vite already minifies
        cssGzipped = gzipped.length;

        console.log(`  ✓ Build ${i + 1}/${runs}: ${buildTime.toFixed(0)}ms`);
        console.log(`  📊 CSS size: ${(cssGzipped / 1024).toFixed(2)} KB (gzipped)`);
      } else {
        console.log(`  ✓ Build ${i + 1}/${runs}: ${buildTime.toFixed(0)}ms`);
        console.log(`  ℹ️  No separate CSS file found`);
      }
    } else {
      console.log(`  ✓ Build ${i + 1}/${runs}: ${buildTime.toFixed(0)}ms`);
    }
  }

  // Calculate average build time
  const avgBuildTime = buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length;

  return {
    buildTime: avgBuildTime,
    outputSize: {
      total: cssGzipped,
      breakdown: {
        raw: cssSize,
        minified: cssMinified,
        gzipped: cssGzipped,
      },
    },
  };
}

/**
 * Framework configurations for all CSS frameworks
 */
export const frameworkConfigs: Record<string, FrameworkBuildConfig> = {
  silk: {
    name: 'Silk',
    fixtureDir: 'silk',
    buildCommand: 'npx vite build',
    cssPath: 'assets/*.css',
  },
  tailwind: {
    name: 'Tailwind CSS',
    fixtureDir: 'tailwind',
    buildCommand: 'npx vite build',
    cssPath: 'assets/*.css',
  },
  panda: {
    name: 'Panda CSS',
    fixtureDir: 'panda',
    buildCommand: 'npx vite build',
    cssPath: 'styles.css',
    prepareBuild: 'npx panda codegen && npx panda cssgen --outfile styles.css',
  },
  unocss: {
    name: 'UnoCSS',
    fixtureDir: 'unocss',
    buildCommand: 'npx vite build',
    cssPath: 'assets/*.css',
  },
};
