/**
 * Measure bundle sizes for all libraries across all categories
 *
 * This script:
 * 1. Fetches actual bundle sizes from Bundlephobia API
 * 2. Falls back to local file measurement if API fails
 * 3. Updates library-metadata.json files with bundle size data
 */

import { readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { gzipSync } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

interface BundleSizeData {
  minified: number;
  gzipped: number;
  measuredAt: string;
  source?: 'bundlephobia' | 'local';
}

interface LibraryMetadata {
  libraries: Record<string, {
    name: string;
    npm: string;
    bundleSize?: BundleSizeData;
    [key: string]: any;
  }>;
}

/**
 * Fetch bundle size from Bundlephobia API
 */
async function fetchFromBundlephobia(packageName: string, version?: string): Promise<BundleSizeData | null> {
  try {
    const packageSpec = version ? `${packageName}@${version}` : packageName;
    const response = await fetch(`https://bundlephobia.com/api/size?package=${encodeURIComponent(packageSpec)}`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return {
      minified: data.size,
      gzipped: data.gzip,
      measuredAt: new Date().toISOString(),
      source: 'bundlephobia',
    };
  } catch (error) {
    return null;
  }
}

/**
 * Find the main entry point for a package
 */
function findPackageEntry(packageName: string, categoryPath: string): string | null {
  const nodeModulesPath = join(categoryPath, 'node_modules', packageName);

  if (!existsSync(nodeModulesPath)) {
    return null;
  }

  try {
    const packageJson = JSON.parse(
      readFileSync(join(nodeModulesPath, 'package.json'), 'utf-8')
    );

    // Try different entry points in order of preference
    const entryPoints = [
      packageJson.module,    // ES module build (usually minified)
      packageJson.main,      // CommonJS build
      'dist/index.js',       // Common convention
      'index.js',            // Fallback
    ];

    for (const entry of entryPoints) {
      if (!entry) continue;

      const entryPath = join(nodeModulesPath, entry);
      if (existsSync(entryPath) && statSync(entryPath).isFile()) {
        return entryPath;
      }
    }
  } catch (error) {
    console.error(`  ⚠️  Error reading package.json for ${packageName}:`, error);
  }

  return null;
}

/**
 * Measure bundle size locally from file
 */
function measureBundleSizeLocal(packageName: string, categoryPath: string): BundleSizeData | null {
  const entryPath = findPackageEntry(packageName, categoryPath);

  if (!entryPath) {
    console.log(`  ⚠️  Could not find entry point for ${packageName}`);
    return null;
  }

  try {
    const content = readFileSync(entryPath);
    const minified = content.length;
    const gzipped = gzipSync(content).length;

    return {
      minified,
      gzipped,
      measuredAt: new Date().toISOString(),
      source: 'local',
    };
  } catch (error) {
    console.error(`  ❌ Error measuring ${packageName}:`, error);
    return null;
  }
}

/**
 * Get package version from node_modules
 */
function getPackageVersion(packageName: string, categoryPath: string): string | undefined {
  try {
    const packageJsonPath = join(categoryPath, 'node_modules', packageName, 'package.json');
    if (existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
      return packageJson.version;
    }
  } catch (error) {
    // Ignore
  }
  return undefined;
}

/**
 * Measure bundle size with Bundlephobia API first, fallback to local
 */
async function measureBundleSize(packageName: string, categoryPath: string): Promise<BundleSizeData | null> {
  // Try Bundlephobia API first
  const version = getPackageVersion(packageName, categoryPath);
  const bundlephobiaData = await fetchFromBundlephobia(packageName, version);

  if (bundlephobiaData) {
    console.log(`  ✓ ${packageName}: ${(bundlephobiaData.gzipped / 1024).toFixed(2)} KB (gzipped) [bundlephobia]`);
    return bundlephobiaData;
  }

  // Fallback to local measurement
  console.log(`  ⚠️  Bundlephobia failed for ${packageName}, using local measurement`);
  const localData = measureBundleSizeLocal(packageName, categoryPath);

  if (localData) {
    console.log(`  ✓ ${packageName}: ${(localData.gzipped / 1024).toFixed(2)} KB (gzipped) [local]`);
  }

  return localData;
}

/**
 * Update library metadata with bundle sizes
 */
async function updateCategoryBundleSizes(categoryName: string, categoryPath: string) {
  console.log(`\n📦 ${categoryName}`);

  const metadataPath = join(categoryPath, 'library-metadata.json');

  if (!existsSync(metadataPath)) {
    console.log(`  ⚠️  No library-metadata.json found`);
    return;
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  let updatedCount = 0;

  for (const [key, library] of Object.entries(metadata.libraries)) {
    // Use library.npm if available, otherwise use the key (e.g., "tailwindcss", "@sylphx/silk")
    const packageName = library.npm || key;
    const bundleSize = await measureBundleSize(packageName, categoryPath);

    if (bundleSize) {
      library.bundleSize = bundleSize;
      updatedCount++;
    }
  }

  // Write updated metadata
  writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + '\n');

  console.log(`  ✅ Updated ${updatedCount} libraries`);
}

/**
 * Main execution
 */
async function main() {
  console.log('📊 Measuring bundle sizes for all categories\n');
  console.log('Using Bundlephobia API for accurate bundle sizes...\n');

  const categories = [
    { name: 'State Management', path: join(rootDir, 'benchmarks/state-management') },
    { name: 'Immutability', path: join(rootDir, 'benchmarks/immutability') },
    { name: 'Router', path: join(rootDir, 'benchmarks/router') },
    { name: 'CSS Frameworks', path: join(rootDir, 'benchmarks/css-frameworks') },
    { name: 'Validation', path: join(rootDir, 'benchmarks/validation') },
  ];

  for (const category of categories) {
    if (existsSync(category.path)) {
      await updateCategoryBundleSizes(category.name, category.path);
    } else {
      console.log(`\n⚠️  Category not found: ${category.name}`);
    }
  }

  console.log('\n✅ Bundle size measurement complete');
  console.log('\n💡 Tip: Run benchmarks to see bundle sizes in results');
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}

export { measureBundleSize, updateCategoryBundleSizes };
