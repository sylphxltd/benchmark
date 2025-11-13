<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-7-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-18-orange?style=flat-square)](#-test-coverage)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🔬 Methodology](#-methodology) • [🚀 Run Locally](#-run-locally)

</div>

---

## 📑 Table of Contents

- [🎯 Quick Recommendations](#-quick-recommendations)
- [📊 Overall Performance Rankings](#-overall-performance-rankings)
- [📈 Library Comparison](#-library-comparison)
- [📊 Performance by Test Group](#-performance-by-test-group)
- [🔬 Methodology](#-methodology)
- [🚀 Run Locally](#-run-locally)
- [🚀 Libraries Tested](#-libraries-tested)

---

## 🎯 Quick Recommendations

**TL;DR** - Choose based on your needs:

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 97.1/100 score
- **⚖️ Best Balance**: Craft - Great performance (38.9/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 97.1/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 38.9/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 17.0/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 15.0/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 14.9/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 97.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 38.9/100 | 40% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 17.0/100 | 17% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 15.0/100 | 15% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 14.9/100 | 15% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 6.2/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **97.1** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **38.9** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **17.0** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **15.0** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **14.9** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **6.2** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **2.7** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.1M ops/sec
🥈 Immutability Helper ███████                                    353K ops/sec
🥉 Immutable.js       █████                                      281K ops/sec
 Craft              ████                                       221K ops/sec
 Mutative           ███                                        159K ops/sec
 Immer              ███                                        153K ops/sec
 Seamless Immutable ███                                        139K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.1M | 0.000ms | 0.003ms | 1000 |
| Immutability Helper | 353K | 0.003ms | 0.014ms | 1000 |
| Immutable.js | 281K | 0.003ms | 0.013ms | 1000 |
| Craft | 221K | 0.004ms | 0.027ms | 1000 |
| Mutative | 159K | 0.006ms | 0.023ms | 1000 |
| Immer | 153K | 0.006ms | 0.027ms | 1000 |
| Seamless Immutable | 139K | 0.007ms | 0.026ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   1.8M ops/sec
🥈 Immutability Helper ███████                                    306K ops/sec
🥉 Craft              █████                                      203K ops/sec
 Mutative           ███                                        113K ops/sec
 Immer              ███                                        112K ops/sec
 Immutable.js       ██                                         85K ops/sec
 Seamless Immutable █                                          65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.8M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 306K | 0.003ms | 0.014ms | 1000 |
| Craft | 203K | 0.005ms | 0.016ms | 1000 |
| Mutative | 113K | 0.009ms | 0.035ms | 1000 |
| Immer | 112K | 0.009ms | 0.033ms | 1000 |
| Immutable.js | 85K | 0.012ms | 0.034ms | 1000 |
| Seamless Immutable | 65K | 0.015ms | 0.042ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   2.0M ops/sec
🥈 Immutability Helper ███████████                                557K ops/sec
🥉 Immutable.js       ██████                                     317K ops/sec
 Craft              ████                                       209K ops/sec
 Immer              ██                                         104K ops/sec
 Mutative           ██                                         92K ops/sec
 Seamless Immutable █                                          59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.0M | 0.000ms | 0.004ms | 1000 |
| Immutability Helper | 557K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 317K | 0.003ms | 0.016ms | 1000 |
| Craft | 209K | 0.005ms | 0.020ms | 1000 |
| Immer | 104K | 0.010ms | 0.037ms | 1000 |
| Mutative | 92K | 0.011ms | 0.037ms | 1000 |
| Seamless Immutable | 59K | 0.017ms | 0.044ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   1.3M ops/sec
🥈 Immutability Helper ██████████                                 336K ops/sec
🥉 Craft              ██████                                     191K ops/sec
 Immutable.js       ████                                       124K ops/sec
 Mutative           ███                                        84K ops/sec
 Immer              ██                                         80K ops/sec
 Seamless Immutable ██                                         65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.3M | 0.001ms | 0.004ms | 1000 |
| Immutability Helper | 336K | 0.003ms | 0.013ms | 1000 |
| Craft | 191K | 0.005ms | 0.024ms | 1000 |
| Immutable.js | 124K | 0.008ms | 0.028ms | 1000 |
| Mutative | 84K | 0.012ms | 0.038ms | 1000 |
| Immer | 80K | 0.012ms | 0.036ms | 1000 |
| Seamless Immutable | 65K | 0.015ms | 0.037ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   1.4M ops/sec
🥈 Immutability Helper ███████                                    247K ops/sec
🥉 Craft              █████                                      199K ops/sec
 Immer              ████                                       139K ops/sec
 Mutative           ████                                       138K ops/sec
 Immutable.js       ██                                         67K ops/sec
 Seamless Immutable █                                          41K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.4M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 247K | 0.004ms | 0.019ms | 1000 |
| Craft | 199K | 0.005ms | 0.022ms | 1000 |
| Immer | 139K | 0.007ms | 0.027ms | 1000 |
| Mutative | 138K | 0.007ms | 0.024ms | 1000 |
| Immutable.js | 67K | 0.015ms | 0.046ms | 1000 |
| Seamless Immutable | 41K | 0.025ms | 0.057ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   2.2M ops/sec
🥈 Immutability Helper ██████                                     321K ops/sec
🥉 Craft              █████                                      262K ops/sec
 Immutable.js       ██                                         104K ops/sec
 Immer              █                                          75K ops/sec
 Mutative           █                                          69K ops/sec
 Seamless Immutable █                                          42K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.2M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 321K | 0.003ms | 0.008ms | 1000 |
| Craft | 262K | 0.004ms | 0.010ms | 1000 |
| Immutable.js | 104K | 0.010ms | 0.029ms | 1000 |
| Immer | 75K | 0.013ms | 0.034ms | 1000 |
| Mutative | 69K | 0.015ms | 0.039ms | 1000 |
| Seamless Immutable | 42K | 0.024ms | 0.047ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   2.3M ops/sec
🥈 Craft              ████                                       242K ops/sec
🥉 Immutability Helper ██                                         120K ops/sec
 Immer              ██                                         102K ops/sec
 Immutable.js       ██                                         96K ops/sec
 Mutative           █                                          84K ops/sec
 Seamless Immutable █                                          34K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 242K | 0.004ms | 0.012ms | 1000 |
| Immutability Helper | 120K | 0.008ms | 0.025ms | 1000 |
| Immer | 102K | 0.010ms | 0.029ms | 1000 |
| Immutable.js | 96K | 0.010ms | 0.032ms | 1000 |
| Mutative | 84K | 0.012ms | 0.034ms | 1000 |
| Seamless Immutable | 34K | 0.029ms | 0.060ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   45K ops/sec
🥈 Native Spread      ████████████████████████████████           36K ops/sec
🥉 Immutability Helper ██████████                                 11K ops/sec
 Craft              █████                                      6K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js       █                                          1K ops/sec
 Seamless Immutable                                            461 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 45K | 0.022ms | 0.072ms | 1000 |
| Native Spread | 36K | 0.028ms | 0.092ms | 1000 |
| Immutability Helper | 11K | 0.090ms | 0.125ms | 1000 |
| Craft | 6K | 0.171ms | 0.333ms | 1000 |
| Immer | 2K | 0.598ms | 1.353ms | 1000 |
| Immutable.js | 1K | 0.947ms | 2.124ms | 1000 |
| Seamless Immutable | 461 | 2.168ms | 3.410ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   475K ops/sec
🥈 Immer              ███████                                    79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 475K | 0.002ms | 0.012ms | 1000 |
| Immer | 79K | 0.013ms | 0.034ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   115K ops/sec
🥈 Immer              ██████████████████████████                 75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 115K | 0.009ms | 0.027ms | 1000 |
| Immer | 75K | 0.013ms | 0.041ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   119K ops/sec
🥈 Immer              ███████████████████                        56K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 119K | 0.008ms | 0.024ms | 1000 |
| Immer | 56K | 0.018ms | 0.049ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   134K ops/sec
🥈 Immer              ████████████████                           52K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 134K | 0.007ms | 0.025ms | 1000 |
| Immer | 52K | 0.019ms | 0.045ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   39K ops/sec
🥈 Mutative           ███████████████████████████████████████    37K ops/sec
🥉 Immer              ██████████                                 10K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 39K | 0.026ms | 0.060ms | 1000 |
| Mutative | 37K | 0.027ms | 0.060ms | 1000 |
| Immer | 10K | 0.100ms | 0.195ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   358K ops/sec
🥈 Mutative           ████████████                               108K ops/sec
🥉 Immer              ███████████                                96K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 358K | 0.003ms | 0.017ms | 1000 |
| Mutative | 108K | 0.009ms | 0.034ms | 1000 |
| Immer | 96K | 0.010ms | 0.036ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   498K ops/sec
🥈 Mutative           ███████                                    85K ops/sec
🥉 Immer              ███████                                    82K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 498K | 0.002ms | 0.010ms | 1000 |
| Mutative | 85K | 0.012ms | 0.037ms | 1000 |
| Immer | 82K | 0.012ms | 0.042ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   315K ops/sec
🥈 Immer              █████████████████                          135K ops/sec
🥉 Mutative           ██████████████                             110K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 315K | 0.003ms | 0.016ms | 1000 |
| Immer | 135K | 0.007ms | 0.031ms | 1000 |
| Mutative | 110K | 0.009ms | 0.034ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   309K ops/sec
🥈 Immer              █████████████████████                      162K ops/sec
🥉 Mutative           █████████████                              98K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 309K | 0.003ms | 0.013ms | 1000 |
| Immer | 162K | 0.006ms | 0.024ms | 1000 |
| Mutative | 98K | 0.010ms | 0.034ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   68K ops/sec
🥈 Mutative           █████████████                              22K ops/sec
🥉 Immer              █████████████                              22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 68K | 0.015ms | 0.040ms | 1000 |
| Mutative | 22K | 0.045ms | 0.092ms | 1000 |
| Immer | 22K | 0.046ms | 0.098ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Warmup**: 100 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Geometric mean prevents single test from dominating
- Score of 50 = half the speed of the fastest library on average

### Reproducibility
All tests are deterministic and reproducible:
1. Same versions locked in package.json
2. Same test scenarios for all libraries
3. Multiple runs to ensure consistency
4. Automated via GitHub Actions

</details>

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd benchmarks/immutability

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README
npx tsx ../../scripts/generate-simple-readme.ts .
```

**View Test Code**: [./groups/](./groups/) contains all test implementations

---

## 📦 Test Coverage

- **Basic Operations**: 0 tests
- **Advanced Operations**: 0 tests
- **Async Operations**: 0 tests
- **Real-World Scenarios**: 0 tests
- **Stress Tests**: 0 tests

**Total**: 18 tests × 7 libraries = 126 benchmark runs

---

## 🚀 Libraries Tested

- **[Native Spread](#)** (`native`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Craft](https://github.com/SylphxAI/craft)** (`@sylphx/craft`) v1.2.1 • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Mutative](https://github.com/unadlib/mutative)** (`mutative`) v1.3.0 • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 17.58 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`seamless-immutable`) v7.1.4 • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

---

## 🤝 Contributing

Want to add a library or improve tests?

- **Add a Library**: Update `package.json` and `library-metadata.json`, then implement tests
- **Improve Tests**: Edit files in `./groups/` directory
- **Report Issues**: [Open an issue](https://github.com/SylphxAI/benchmark/issues)
- **Suggest Features**: [Start a discussion](https://github.com/SylphxAI/benchmark/discussions)

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

---

## 📚 Related

- [📊 All Benchmark Categories](../../README.md#-benchmark-categories)
- [🏗️ Architecture Documentation](../../ARCHITECTURE.md)
- [⚙️ GitHub Actions Workflow](../../.github/workflows/benchmarks-per-library.yml)
- [🔄 CI/CD Results](https://github.com/SylphxAI/benchmark/actions)

---

<div align="center">

**Found this useful? Give it a ⭐️!**

*Generated on 2025-11-13T16:13:41.606Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
