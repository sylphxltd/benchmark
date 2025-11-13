/**
 * Core type definitions for the benchmark framework
 * Uses object references instead of strings for type safety
 */

// ============================================================================
// Metric System (NEW - Multi-metric support)
// ============================================================================

/**
 * Base metric result - all measurements extend this
 */
export interface BaseMetric {
  type: MetricType;
  value: number;
  unit: string;
  name?: string;
}

export type MetricType =
  | 'speed'       // ops/sec, time
  | 'size'        // bytes (bundle, memory, output)
  | 'quality'     // % (structural sharing, tree shaking)
  | 'custom';     // User-defined

/**
 * Speed metric (performance benchmarks)
 */
export interface SpeedMetric extends BaseMetric {
  type: 'speed';
  opsPerSecond: number;
  meanTime: number;     // ms
  variance: number;
  p99: number;          // ms
  samples: number;
}

/**
 * Size metric (bundle size, memory, CSS output)
 */
export interface SizeMetric extends BaseMetric {
  type: 'size';
  bytes: number;
  minified?: number;    // For bundle size
  gzipped?: number;     // For bundle size
  breakdown?: {         // Optional breakdown
    [key: string]: number;
  };
}

/**
 * Quality metric (efficiency, correctness)
 */
export interface QualityMetric extends BaseMetric {
  type: 'quality';
  percentage: number;   // 0-100
  description?: string;
}

/**
 * Custom metric (user-defined)
 */
export interface CustomMetric extends BaseMetric {
  type: 'custom';
  data: Record<string, any>;
}

export type Metric = SpeedMetric | SizeMetric | QualityMetric | CustomMetric;

// ============================================================================
// Benchmark Result Types (LEGACY - Backward Compatibility)
// ============================================================================

/**
 * @deprecated Use TestResult with Metric instead
 * Kept for backward compatibility
 */
export interface BenchmarkResult {
  name: string;
  opsPerSecond: number;
  meanTime: number; // ms
  variance: number;
  p99: number; // ms
  samples: number;
}

// ============================================================================
// Performance Tier
// ============================================================================

export interface PerformanceTier {
  name: string;
  threshold: number;
  description: string;
}

// ============================================================================
// Configuration Types
// ============================================================================

export interface GroupConfig {
  id: string;
  title: string;
  description: string;
  type: 'universal' | 'feature-specific';
}

export type TestType =
  | 'performance'  // Standard ops/sec measurement
  | 'size'         // Bundle/output size measurement
  | 'memory'       // Memory usage measurement
  | 'build'        // Build time + output measurement
  | 'custom';      // User-defined measurement

export interface TestConfig {
  name: string;
  description?: string;

  // NEW: Test type determines measurement strategy
  testType?: TestType;  // Default: 'performance'
}

export interface MetricConfig {
  type: MetricType;
  name: string;
  unit: string;
  lowerIsBetter?: boolean; // Default: true for speed/size, false for quality
}

export interface CategoryConfig {
  id: string;
  name: string;
  description: string;
  emoji?: string;

  // NEW: Define metrics this category tracks
  metrics?: {
    primary: MetricConfig;    // Main ranking metric
    secondary?: MetricConfig[]; // Additional metrics
  };

  performanceTiers?: PerformanceTier[];
}

export interface LibraryConfig<TStore = any> {
  id: string;
  displayName: string;
  packageName: string;
  githubUrl: string;
  description?: string;
  setup: LibrarySetup<TStore>;
  features?: string[];
}

// ============================================================================
// Setup Types
// ============================================================================

export interface LibrarySetup<TStore = any> {
  createStore: () => TStore | Promise<TStore>;
  cleanup?: (store: TStore) => void | Promise<void>;
  init?: () => void | Promise<void>;
}

export interface TestContext<TStore = any> {
  library: {
    id: string;
    displayName: string;
    packageName: string;
    githubUrl: string;
  };
  store: TStore;
  cleanup?: () => void | Promise<void>;
}

// ============================================================================
// Test Function Type
// ============================================================================

/**
 * @deprecated Use TestImplementation instead
 * Kept for backward compatibility
 */
export type TestFunction<TStore = any> = (
  ctx: TestContext<TStore>
) => void | Promise<void>;

// ============================================================================
// Test Implementation Types (NEW - Multi-metric support)
// ============================================================================

/**
 * Performance test function (standard benchmark)
 */
export type PerformanceTestFunction<TStore = any> = (
  ctx: TestContext<TStore>
) => void | Promise<void>;

/**
 * Measurement function for size/memory/custom metrics
 */
export type MeasurementFunction<TStore = any> = (
  ctx: TestContext<TStore>
) => Promise<Metric> | Metric;

/**
 * Build test configuration
 */
export interface BuildTestConfig {
  prepareBuild?: () => Promise<void>;
  build: () => Promise<BuildResult>;
}

export interface BuildResult {
  buildTime: number;
  outputSize?: {
    total: number;
    breakdown?: Record<string, number>;
  };
}

/**
 * Test implementation - supports multiple test types
 */
export type TestImplementation<TStore = any> =
  // Legacy: Plain function = performance test
  | PerformanceTestFunction<TStore>
  // Explicit type with function
  | {
      type: 'performance';
      run: PerformanceTestFunction<TStore>;
    }
  | {
      type: 'size';
      measure: () => Promise<SizeMetric> | SizeMetric;
    }
  | {
      type: 'memory';
      measure: () => Promise<SizeMetric> | SizeMetric;
    }
  | {
      type: 'build';
      config: BuildTestConfig;
    }
  | {
      type: 'custom';
      measure: MeasurementFunction<TStore>;
    };

// ============================================================================
// Execution Options
// ============================================================================

export interface BenchmarkOptions {
  warmup?: boolean;
  iterations?: number;
  filter?: {
    groups?: string[];
    tests?: string[];
    libraries?: string[];
  };
}

export interface RunOptions {
  outputPath?: string;
  filter?: {
    groups?: string[];
    tests?: string[];
    libraries?: string[];
  };
}

// ============================================================================
// Results Types (NEW)
// ============================================================================

/**
 * Single test execution result
 */
export interface TestResult {
  testName: string;
  testDescription?: string;
  groupId: string;

  // NEW: Support multiple metrics per test
  metrics: {
    primary: Metric;      // Main ranking metric
    secondary?: Metric[]; // Additional context
  };

  timestamp: string;

  // DEPRECATED (keep for backward compat)
  opsPerSecond?: number;
  meanTime?: number;
}

/**
 * Library test result (one library × one test)
 */
export interface LibraryTestResult {
  library: string;
  libraryId: string;
  packageName: string;
  test: string;
  group: string;
  timestamp: string;

  // NEW: Multi-metric support
  result: BenchmarkResult | TestResult;

  // DEPRECATED (keep for backward compat)
  opsPerSecond?: number;
  meanTime?: number;
}

export interface CategoryResults {
  category: string;
  timestamp: string;
  results: LibraryTestResult[];
  rankings?: LibraryRanking[];
}

export interface LibraryRanking {
  library: string;
  score: number;
  tier?: string;
}
