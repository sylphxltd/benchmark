/**
 * Benchmark runner - executes tests and collects results
 * Supports both legacy BenchmarkResult and new multi-metric TestResult
 */

import type {
  BenchmarkResult,
  RunOptions,
  CategoryResults,
  LibraryTestResult,
  TestResult,
  TestImplementation,
  BuildTestConfig,
  SpeedMetric,
  SizeMetric,
  TestContext,
} from './types';
import type { Category } from './category';
import { measurePerformance as measurePerformanceMetric } from './metrics';

export class BenchmarkRunner {
  private category: Category;

  constructor(category: Category) {
    this.category = category;
  }

  /**
   * Run all benchmarks
   */
  async run(options?: RunOptions): Promise<CategoryResults> {
    const results: LibraryTestResult[] = [];
    const timestamp = new Date().toISOString();

    const groups = this.category.getGroups();
    const libraries = this.category.getLibraries();

    // Filter groups if specified
    const groupsToRun = options?.filter?.groups
      ? groups.filter((g) => options.filter!.groups!.includes(g.id))
      : groups;

    // Filter libraries if specified
    const librariesToRun = options?.filter?.libraries
      ? libraries.filter((l) => options.filter!.libraries!.includes(l.id))
      : libraries;

    console.log(`📊 Running ${groupsToRun.length} groups across ${librariesToRun.length} libraries\n`);

    // Run tests for each group
    for (const group of groupsToRun) {
      console.log(`\n📦 Group: ${group.title}`);

      const tests = group.getTests();

      // Filter tests if specified
      const testsToRun = options?.filter?.tests
        ? tests.filter((t) => options.filter!.tests!.includes(t.name))
        : tests;

      // Run each test
      for (const test of testsToRun) {
        console.log(`\n  Testing: ${test.name}`);

        // Run test for each library
        for (const library of librariesToRun) {
          // Skip if library doesn't implement this test
          if (!library.hasImplementation(test)) {
            console.log(`    ${library.displayName}: [not implemented]`);
            continue;
          }

          try {
            // Check if library has new-style implementation
            const implementation = library.getTestImplementation(test);

            if (!implementation) {
              console.log(`    ${library.displayName}: [not implemented]`);
              continue;
            }

            // Determine if this is a new-style test (build, size, memory, custom)
            const isNewStyleTest = typeof implementation !== 'function' &&
              'type' in implementation &&
              implementation.type !== 'performance';

            if (isNewStyleTest) {
              // Use new runner for build/size/memory/custom tests
              const testResult = await this.runTestWithMetrics(library, test, implementation);

              results.push({
                library: library.displayName,
                libraryId: library.id,
                packageName: library.packageName,
                test: test.name,
                group: group.id,
                timestamp,
                result: testResult,
              });

              // Display appropriate metrics based on test type
              if (implementation.type === 'build' && testResult.metrics.primary.type === 'speed') {
                console.log(
                  `    ${library.displayName}: ${testResult.metrics.primary.value.toFixed(0)}ms build time`
                );
                if (testResult.metrics.secondary && testResult.metrics.secondary[0]) {
                  const sizeMetric = testResult.metrics.secondary[0];
                  if (sizeMetric.type === 'size') {
                    console.log(
                      `      CSS output: ${(sizeMetric.value / 1024).toFixed(2)} KB (gzipped)`
                    );
                  }
                }
              } else {
                console.log(`    ${library.displayName}: ${testResult.metrics.primary.value} ${testResult.metrics.primary.unit}`);
              }
            } else {
              // Use old runner for backward compatibility (performance tests)
              const result = await this.measurePerformance(library, test);

              results.push({
                library: library.displayName,
                libraryId: library.id,
                packageName: library.packageName,
                test: test.name,
                group: group.id,
                timestamp,
                result,
                // Backward compat fields
                opsPerSecond: result.opsPerSecond,
                meanTime: result.meanTime,
              });

              console.log(
                `    ${library.displayName}: ${result.opsPerSecond.toLocaleString()} ops/sec` +
                ` (${result.meanTime.toFixed(3)}ms avg)`
              );
            }
          } catch (error) {
            console.error(`    ❌ ${library.displayName} failed:`, error);
          }
        }
      }
    }

    return {
      category: this.category.id,
      timestamp,
      results,
    };
  }

  /**
   * Measure performance of a library on a specific test
   *
   * @deprecated This method uses old architecture. New code should use runTestWithMetrics.
   * Kept for backward compatibility.
   */
  private async measurePerformance(
    library: any,
    test: any
  ): Promise<BenchmarkResult> {
    // Create test context
    const ctx = await this.createContext(library);

    try {
      // Get implementation function
      const fn = library.getImplementation(test);
      if (!fn) {
        throw new Error(`Test '${test.name}' not implemented for library '${library.id}'`);
      }

      // Use new measurement utility
      const metric = await measurePerformanceMetric(fn, ctx, {
        warmupIterations: 100,
        benchmarkIterations: 1000,
      });

      // Convert SpeedMetric to BenchmarkResult for backward compatibility
      return {
        name: test.name,
        opsPerSecond: metric.opsPerSecond,
        meanTime: metric.meanTime,
        variance: metric.variance,
        p99: metric.p99,
        samples: metric.samples,
      };
    } finally {
      await this.cleanupContext(ctx);
    }
  }

  /**
   * Create test context for a library
   */
  private async createContext(library: any): Promise<TestContext<any>> {
    // Initialize if needed
    if (library.setup.init) {
      await library.setup.init();
    }

    // Create store
    const store = await library.setup.createStore();

    // Create context
    return {
      library: {
        id: library.id,
        displayName: library.displayName,
        packageName: library.packageName,
        githubUrl: library.githubUrl,
      },
      store,
      cleanup: library.setup.cleanup ? () => library.setup.cleanup(store) : undefined,
    };
  }

  /**
   * Cleanup test context
   */
  private async cleanupContext(ctx: TestContext<any>): Promise<void> {
    if (ctx.cleanup) {
      await ctx.cleanup();
    }
  }

  /**
   * Run a test with new multi-metric support
   *
   * This method handles TestImplementation types and returns TestResult.
   * Used for build, size, memory, and custom test types.
   */
  private async runTestWithMetrics(
    library: any,
    test: any,
    implementation: TestImplementation
  ): Promise<TestResult> {
    const ctx = await this.createContext(library);

    try {
      let result: TestResult;

      // Determine test type and run appropriate measurement
      if (typeof implementation === 'function') {
        // Backward compat: Simple function = performance test
        const metric = await measurePerformanceMetric(implementation, ctx);
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
            const metric = await measurePerformanceMetric(implementation.run, ctx);
            result = {
              testName: test.name,
              testDescription: test.description,
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
              testDescription: test.description,
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
              testDescription: test.description,
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
              testDescription: test.description,
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
              testDescription: test.description,
              groupId: test.group.id,
              metrics: { primary: metric },
              timestamp: new Date().toISOString(),
            };
            break;
          }

          default:
            throw new Error(`Unknown test type: ${(implementation as any).type}`);
        }
      }

      return result;
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

    const buildResult = await config.build();

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
