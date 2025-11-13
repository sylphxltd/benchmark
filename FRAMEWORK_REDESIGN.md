# 🏗️ Multi-Metric Framework Redesign

**Goal**: Support Speed + Size + Memory + Custom metrics in unified framework

---

## 🎯 Design Principles

### 1. **Backward Compatible**
- Existing tests continue working
- Gradual migration path
- No breaking changes

### 2. **Flexible Metrics**
- Each category defines needed metrics
- Tests can measure different things
- Support custom metrics

### 3. **Type Safe**
- Strong TypeScript typing
- Compile-time validation
- Clear metric definitions

### 4. **Extensible**
- Easy to add new metric types
- Categories can define custom metrics
- Plugin-like architecture

---

## 📊 Core Design

### **Current Architecture** (Speed Only)
```typescript
Test -> Run code -> Measure ops/sec -> Result
```

### **New Architecture** (Multi-Metric)
```typescript
Test -> Define test type -> Select measurement strategy -> Results
  │
  ├─> Performance Test -> Run + measure ops/sec
  ├─> Size Test -> Analyze bundle -> measure bytes
  ├─> Memory Test -> Run + measure heap
  ├─> Build Test -> Build + measure time + output
  └─> Custom Test -> User-defined measurement
```

---

## 🔧 Framework Changes

### **Phase 1: Core Types** (New `src/core/types.ts`)

```typescript
// ============================================================================
// Metric System
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
// Test Results (Updated)
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
  result: TestResult;

  // DEPRECATED (keep for backward compat)
  opsPerSecond?: number;
  meanTime?: number;
}

// ============================================================================
// Test Configuration (Updated)
// ============================================================================

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

  // NEW: Custom measurement function
  measure?: MeasurementFunction;
}

/**
 * Custom measurement function
 */
export type MeasurementFunction<TStore = any> = (
  ctx: TestContext<TStore>
) => Promise<Metric> | Metric;

// ============================================================================
// Category Configuration (Updated)
// ============================================================================

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

// ============================================================================
// Library Implementation (Updated)
// ============================================================================

/**
 * Standard performance test implementation
 */
export type PerformanceTestFunction<TStore = any> = (
  ctx: TestContext<TStore>
) => void | Promise<void>;

/**
 * Build test implementation
 */
export interface BuildTestConfig {
  prepareBuild?: () => Promise<void>;
  build: () => Promise<BuildResult>;
}

export interface BuildResult {
  buildTime: number;  // ms
  outputSize?: {
    total: number;
    breakdown?: Record<string, number>;
  };
}

/**
 * Multi-metric test implementation
 */
export type TestImplementation<TStore = any> =
  | PerformanceTestFunction<TStore>                    // Simple function (backward compat)
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
```

---

### **Phase 2: Measurement Utilities** (New `src/core/metrics.ts`)

```typescript
/**
 * Measurement utilities for different metric types
 */

import type {
  Metric,
  SpeedMetric,
  SizeMetric,
  QualityMetric,
  TestContext
} from './types';

// ============================================================================
// Speed Measurement
// ============================================================================

export interface PerformanceOptions {
  warmupIterations?: number;
  benchmarkIterations?: number;
}

/**
 * Measure performance (ops/sec) of a function
 */
export async function measurePerformance<TStore>(
  fn: (ctx: TestContext<TStore>) => void | Promise<void>,
  ctx: TestContext<TStore>,
  options?: PerformanceOptions
): Promise<SpeedMetric> {
  const warmup = options?.warmupIterations ?? 100;
  const iterations = options?.benchmarkIterations ?? 1000;

  // Warmup
  for (let i = 0; i < warmup; i++) {
    await fn(ctx);
  }

  // Measure
  const times: number[] = [];
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    const iterStart = performance.now();
    await fn(ctx);
    const iterEnd = performance.now();
    times.push(iterEnd - iterStart);
  }

  const end = performance.now();
  const totalTime = end - start;

  // Calculate statistics
  times.sort((a, b) => a - b);
  const mean = times.reduce((a, b) => a + b, 0) / times.length;
  const variance = times.reduce((sum, t) => sum + Math.pow(t - mean, 2), 0) / times.length;
  const p99Index = Math.floor(times.length * 0.99);
  const p99 = times[p99Index] || times[times.length - 1] || 0;

  const opsPerSecond = (iterations / totalTime) * 1000;

  return {
    type: 'speed',
    value: opsPerSecond,
    unit: 'ops/sec',
    opsPerSecond,
    meanTime: mean,
    variance,
    p99,
    samples: iterations,
  };
}

// ============================================================================
// Size Measurement
// ============================================================================

/**
 * Measure bundle size of a package
 */
export async function measureBundleSize(
  packageName: string,
  packagePath?: string
): Promise<SizeMetric> {
  // This would integrate with bundler or read package.json size
  // For now, placeholder implementation

  const { statSync } = await import('fs');
  const { gzipSync } = await import('zlib');
  const { readFileSync } = await import('fs');
  const { resolve } = await import('path');

  try {
    const pkgPath = packagePath || resolve('node_modules', packageName);
    // Read package dist files and measure

    // Placeholder - would need actual implementation
    return {
      type: 'size',
      value: 0,
      unit: 'bytes',
      bytes: 0,
      minified: 0,
      gzipped: 0,
    };
  } catch (error) {
    throw new Error(`Failed to measure bundle size for ${packageName}`);
  }
}

/**
 * Measure memory usage
 */
export async function measureMemory<TStore>(
  fn: (ctx: TestContext<TStore>) => void | Promise<void>,
  ctx: TestContext<TStore>
): Promise<SizeMetric> {
  // Force GC if available
  if (global.gc) {
    global.gc();
  }

  const before = process.memoryUsage();

  await fn(ctx);

  if (global.gc) {
    global.gc();
  }

  const after = process.memoryUsage();

  const heapUsed = after.heapUsed - before.heapUsed;

  return {
    type: 'size',
    value: heapUsed,
    unit: 'bytes',
    bytes: heapUsed,
    breakdown: {
      heapTotal: after.heapTotal - before.heapTotal,
      heapUsed,
      external: after.external - before.external,
      rss: after.rss - before.rss,
    },
  };
}

// ============================================================================
// Quality Measurement
// ============================================================================

/**
 * Measure quality metric (0-100%)
 */
export function measureQuality(
  metric: number,
  maxValue: number,
  name: string,
  description?: string
): QualityMetric {
  const percentage = Math.min(100, (metric / maxValue) * 100);

  return {
    type: 'quality',
    value: percentage,
    unit: '%',
    percentage,
    name,
    description,
  };
}

// ============================================================================
// Build Measurement
// ============================================================================

export interface BuildOptions {
  cwd?: string;
  command: string;
  prepareBuild?: string;
  outputPath?: string;
}

/**
 * Measure build time and output size
 */
export async function measureBuild(
  options: BuildOptions
): Promise<{ time: SpeedMetric; size?: SizeMetric }> {
  const { exec } = await import('child_process');
  const { promisify } = await import('util');
  const execAsync = promisify(exec);

  // Prepare build
  if (options.prepareBuild) {
    await execAsync(options.prepareBuild, { cwd: options.cwd });
  }

  // Measure build time
  const start = performance.now();
  await execAsync(options.command, { cwd: options.cwd });
  const end = performance.now();
  const buildTime = end - start;

  const timeMetric: SpeedMetric = {
    type: 'speed',
    value: buildTime,
    unit: 'ms',
    opsPerSecond: 1000 / buildTime, // Builds per second
    meanTime: buildTime,
    variance: 0,
    p99: buildTime,
    samples: 1,
  };

  // Measure output size if path provided
  let sizeMetric: SizeMetric | undefined;
  if (options.outputPath) {
    // Would read and measure output files
    // Placeholder implementation
  }

  return { time: timeMetric, size: sizeMetric };
}
```

---

### **Phase 3: Updated Runner** (`src/core/runner.ts` updates)

```typescript
/**
 * Enhanced runner supporting multi-metric tests
 */

export class BenchmarkRunner {
  // ... existing code ...

  /**
   * Run a single test for a library
   */
  private async runTest(
    library: Library,
    test: Test,
    implementation: TestImplementation
  ): Promise<LibraryTestResult> {
    const ctx = await this.createContext(library);

    try {
      let result: TestResult;

      // Determine test type and run appropriate measurement
      if (typeof implementation === 'function') {
        // Backward compat: Simple function = performance test
        const metric = await measurePerformance(implementation, ctx);
        result = {
          testName: test.name,
          testDescription: test.description,
          groupId: test.group.id,
          metrics: { primary: metric },
          timestamp: new Date().toISOString(),
        };
      } else {
        // New: Multi-metric implementation
        switch (implementation.type) {
          case 'performance': {
            const metric = await measurePerformance(implementation.run, ctx);
            result = {
              testName: test.name,
              groupId: test.group.id,
              metrics: { primary: metric },
              timestamp: new Date().toISOString(),
            };
            break;
          }

          case 'size': {
            const metric = await implementation.measure();
            result = {
              testName: test.name,
              groupId: test.group.id,
              metrics: { primary: metric },
              timestamp: new Date().toISOString(),
            };
            break;
          }

          case 'memory': {
            const metric = await implementation.measure();
            result = {
              testName: test.name,
              groupId: test.group.id,
              metrics: { primary: metric },
              timestamp: new Date().toISOString(),
            };
            break;
          }

          case 'build': {
            // Run build and collect metrics
            const { time, size } = await this.runBuildTest(implementation.config);
            result = {
              testName: test.name,
              groupId: test.group.id,
              metrics: {
                primary: time,
                secondary: size ? [size] : undefined,
              },
              timestamp: new Date().toISOString(),
            };
            break;
          }

          case 'custom': {
            const metric = await implementation.measure(ctx);
            result = {
              testName: test.name,
              groupId: test.group.id,
              metrics: { primary: metric },
              timestamp: new Date().toISOString(),
            };
            break;
          }
        }
      }

      return {
        library: library.displayName,
        libraryId: library.id,
        packageName: library.packageName,
        test: test.name,
        group: test.group.title,
        timestamp: result.timestamp,
        result,
      };
    } finally {
      await this.cleanupContext(ctx);
    }
  }

  /**
   * Run build test
   */
  private async runBuildTest(config: BuildTestConfig): Promise<{
    time: SpeedMetric;
    size?: SizeMetric;
  }> {
    if (config.prepareBuild) {
      await config.prepareBuild();
    }

    const start = performance.now();
    const buildResult = await config.build();
    const end = performance.now();

    const time: SpeedMetric = {
      type: 'speed',
      value: buildResult.buildTime,
      unit: 'ms',
      opsPerSecond: 1000 / buildResult.buildTime,
      meanTime: buildResult.buildTime,
      variance: 0,
      p99: buildResult.buildTime,
      samples: 1,
    };

    let size: SizeMetric | undefined;
    if (buildResult.outputSize) {
      size = {
        type: 'size',
        value: buildResult.outputSize.total,
        unit: 'bytes',
        bytes: buildResult.outputSize.total,
        breakdown: buildResult.outputSize.breakdown,
      };
    }

    return { time, size };
  }
}
```

---

### **Phase 4: Library Implementation Updates** (`src/core/library.ts`)

```typescript
export class Library<TStore = any> {
  // ... existing code ...

  /**
   * Implement a test (supports both old and new style)
   */
  implement(test: Test, implementation: TestImplementation<TStore>): void {
    if (this.implementations.has(test)) {
      throw new Error(
        `Test '${test.name}' already implemented for library '${this.id}'`
      );
    }

    this.implementations.set(test, implementation);

    console.log(
      `  ✓ Implemented: ${test.name} for ${this.displayName}`
    );
  }

  /**
   * Implement with explicit metrics (new style)
   */
  implementWithMetrics(
    test: Test,
    config: {
      primary: TestImplementation<TStore>;
      secondary?: Array<{
        name: string;
        measure: () => Promise<Metric> | Metric;
      }>;
    }
  ): void {
    // Implementation that supports multiple metrics per test
    this.implement(test, config.primary);

    // Store secondary metrics for later retrieval
    // (Implementation details)
  }
}
```

---

## 📋 Migration Plan

### **Step 1: Framework Core** (Week 1)
1. ✅ Update `types.ts` with new metric types
2. ✅ Create `metrics.ts` with measurement utilities
3. ✅ Update `runner.ts` to support multi-metric
4. ✅ Update `library.ts` to accept new implementations
5. ✅ Ensure backward compatibility

### **Step 2: CSS Frameworks Migration** (Week 1-2)
- ✅ Remove invalid runtime tests
- ✅ Convert build tests to new format
- ✅ Integrate into main framework
- ✅ Test and verify

### **Step 3: Add Bundle Size** (Week 2)
- ✅ Add size collection to all categories
- ✅ Update README generator to show size
- ✅ Add size to rankings

### **Step 4: Category-Specific Enhancements** (Week 3-4)
- ✅ State Management: Memory profiling
- ✅ Immutability: Structural sharing
- ✅ Router: Route definition overhead
- ✅ CSS: Tree-shaking efficiency

---

## 🎯 Expected Results

### **After Migration**:

#### **State Management**
```typescript
export const category = createCategory({
  id: 'state-management',
  metrics: {
    primary: { type: 'speed', name: 'Performance', unit: 'ops/sec' },
    secondary: [
      { type: 'size', name: 'Bundle Size', unit: 'KB' },
      { type: 'size', name: 'Memory per Store', unit: 'bytes' },
    ],
  },
});

// Test with multiple metrics
zustand.implement(tests.createStore, {
  type: 'performance',
  run: (ctx) => ctx.store.getState(),
});

zustand.implementWithMetrics(tests.createStore, {
  primary: { type: 'performance', run: ... },
  secondary: [
    { name: 'memory', measure: async () => measureMemory(...) },
  ],
});
```

#### **CSS Frameworks**
```typescript
export const category = createCategory({
  id: 'css-frameworks',
  metrics: {
    primary: { type: 'speed', name: 'Build Time', unit: 'ms' },
    secondary: [
      { type: 'size', name: 'CSS Output', unit: 'KB' },
      { type: 'quality', name: 'Tree Shaking', unit: '%' },
    ],
  },
});

// Build test
tailwind.implement(tests.buildSmallApp, {
  type: 'build',
  config: {
    prepareBuild: async () => { /* setup */ },
    build: async () => ({
      buildTime: 750,
      outputSize: { total: 2048, breakdown: { css: 2048 } },
    }),
  },
});
```

#### **README Output**
```markdown
| Library | Performance | Bundle Size | Memory | Score |
|---------|------------|-------------|--------|-------|
| Zustand | 2.5M ops/s | 1.2 KB | 145 bytes | 98/100 |
| Jotai | 2.1M ops/s | 2.4 KB | 312 bytes | 95/100 |
| Redux | 1.8M ops/s | 20 KB | 1.2 KB | 78/100 |
```

---

## ✅ Success Criteria

1. **Backward Compatible**: Existing tests work without changes
2. **Multi-Metric**: Can measure speed, size, memory, custom
3. **Type Safe**: Full TypeScript support
4. **Extensible**: Easy to add new metric types
5. **Clear Results**: README shows all relevant metrics

---

## 🚀 Next Steps

1. Get approval on design
2. Implement Phase 1 (Core types + utilities)
3. Test with CSS Frameworks
4. Roll out to other categories
5. Update documentation
