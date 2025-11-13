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

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 100.0/100 score
- **⚖️ Best Balance**: Craft - Great performance (28.9/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 28.9/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 14.3/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 10.9/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 8.6/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 28.9/100 | 29% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 14.3/100 | 14% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 10.9/100 | 11% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 8.6/100 | 9% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 7.0/100 | 7% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 0.8/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **100.0** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **28.9** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **14.3** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **10.9** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **8.6** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **7.0** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **0.8** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   13.3M ops/sec
🥈 Immutable.js       ████████                                   2.7M ops/sec
🥉 Immutability Helper ███████                                    2.3M ops/sec
 Craft              █████                                      1.7M ops/sec
 Mutative           ████                                       1.2M ops/sec
 Immer              ██                                         812K ops/sec
 Seamless Immutable █                                          288K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.3M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.7M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immer | 812K | 0.001ms | 0.003ms | 1000 |
| Seamless Immutable | 288K | 0.004ms | 0.006ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   7.6M ops/sec
🥈 Immutability Helper ██████                                     1.1M ops/sec
🥉 Mutative           ███                                        503K ops/sec
 Immutable.js       ██                                         439K ops/sec
 Craft              ██                                         402K ops/sec
 Immer              ██                                         325K ops/sec
 Seamless Immutable                                            80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.6M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.002ms | 1000 |
| Mutative | 503K | 0.002ms | 0.005ms | 1000 |
| Immutable.js | 439K | 0.002ms | 0.004ms | 1000 |
| Craft | 402K | 0.003ms | 0.005ms | 1000 |
| Immer | 325K | 0.003ms | 0.006ms | 1000 |
| Seamless Immutable | 80K | 0.014ms | 0.025ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   21.5M ops/sec
🥈 Immutability Helper █████████                                  4.8M ops/sec
🥉 Immutable.js       ████████                                   4.1M ops/sec
 Craft              █                                          497K ops/sec
 Mutative           █                                          327K ops/sec
 Immer              █                                          293K ops/sec
 Seamless Immutable                                            74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 21.5M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 4.8M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.1M | 0.000ms | 0.001ms | 1000 |
| Craft | 497K | 0.002ms | 0.005ms | 1000 |
| Mutative | 327K | 0.003ms | 0.007ms | 1000 |
| Immer | 293K | 0.004ms | 0.008ms | 1000 |
| Seamless Immutable | 74K | 0.014ms | 0.024ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   6.6M ops/sec
🥈 Immutability Helper █████████                                  1.5M ops/sec
🥉 Immutable.js       ██████                                     1.0M ops/sec
 Craft              ██                                         328K ops/sec
 Mutative           █                                          173K ops/sec
 Immer              █                                          171K ops/sec
 Seamless Immutable                                            75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.6M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.5M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.0M | 0.001ms | 0.003ms | 1000 |
| Craft | 328K | 0.003ms | 0.004ms | 1000 |
| Mutative | 173K | 0.006ms | 0.016ms | 1000 |
| Immer | 171K | 0.006ms | 0.010ms | 1000 |
| Seamless Immutable | 75K | 0.013ms | 0.024ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   10.2M ops/sec
🥈 Immutability Helper ███                                        709K ops/sec
🥉 Craft              ██                                         542K ops/sec
 Immutable.js       █                                          329K ops/sec
 Mutative           █                                          269K ops/sec
 Immer              █                                          220K ops/sec
 Seamless Immutable                                            47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.2M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 709K | 0.001ms | 0.002ms | 1000 |
| Craft | 542K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 329K | 0.003ms | 0.005ms | 1000 |
| Mutative | 269K | 0.004ms | 0.008ms | 1000 |
| Immer | 220K | 0.005ms | 0.008ms | 1000 |
| Seamless Immutable | 47K | 0.022ms | 0.048ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   2.7M ops/sec
🥈 Immutability Helper ████████                                   544K ops/sec
🥉 Craft              █████                                      358K ops/sec
 Immutable.js       █████                                      321K ops/sec
 Mutative           ███                                        167K ops/sec
 Immer              ██                                         139K ops/sec
 Seamless Immutable █                                          48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 544K | 0.002ms | 0.004ms | 1000 |
| Craft | 358K | 0.003ms | 0.006ms | 1000 |
| Immutable.js | 321K | 0.003ms | 0.006ms | 1000 |
| Mutative | 167K | 0.006ms | 0.010ms | 1000 |
| Immer | 139K | 0.007ms | 0.012ms | 1000 |
| Seamless Immutable | 48K | 0.021ms | 0.033ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   6.0M ops/sec
🥈 Immutability Helper ████                                       529K ops/sec
🥉 Craft              ██                                         360K ops/sec
 Immutable.js       ██                                         255K ops/sec
 Immer              █                                          156K ops/sec
 Mutative           █                                          134K ops/sec
 Seamless Immutable                                            37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.0M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 529K | 0.002ms | 0.003ms | 1000 |
| Craft | 360K | 0.004ms | 0.006ms | 1000 |
| Immutable.js | 255K | 0.004ms | 0.007ms | 1000 |
| Immer | 156K | 0.007ms | 0.012ms | 1000 |
| Mutative | 134K | 0.008ms | 0.015ms | 1000 |
| Seamless Immutable | 37K | 0.027ms | 0.039ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   114K ops/sec
🥈 Mutative           █████████████████████████████              83K ops/sec
🥉 Immutability Helper ████                                       13K ops/sec
 Craft              ██                                         7K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            464 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 114K | 0.009ms | 0.015ms | 1000 |
| Mutative | 83K | 0.013ms | 0.025ms | 1000 |
| Immutability Helper | 13K | 0.082ms | 0.162ms | 1000 |
| Craft | 7K | 0.152ms | 0.211ms | 1000 |
| Immer | 2K | 0.597ms | 1.370ms | 1000 |
| Immutable.js | 1K | 0.924ms | 1.854ms | 1000 |
| Seamless Immutable | 464 | 2.180ms | 3.385ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.6M ops/sec
🥈 Immer              ██                                         159K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.6M | 0.000ms | 0.002ms | 1000 |
| Immer | 159K | 0.006ms | 0.011ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   293K ops/sec
🥈 Immer              ██████████████████████                     165K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 293K | 0.004ms | 0.007ms | 1000 |
| Immer | 165K | 0.006ms | 0.011ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   265K ops/sec
🥈 Immer              █████████████                              83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 265K | 0.005ms | 0.008ms | 1000 |
| Immer | 83K | 0.012ms | 0.023ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   259K ops/sec
🥈 Immer              █████████████                              81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 259K | 0.005ms | 0.008ms | 1000 |
| Immer | 81K | 0.013ms | 0.025ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   69K ops/sec
🥈 Mutative           ██████████████████████████████████         58K ops/sec
🥉 Immer              ████████                                   14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 69K | 0.016ms | 0.025ms | 1000 |
| Mutative | 58K | 0.019ms | 0.034ms | 1000 |
| Immer | 14K | 0.077ms | 0.151ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Mutative           ████████████                               323K ops/sec
🥉 Immer              ███████                                    201K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.003ms | 1000 |
| Mutative | 323K | 0.003ms | 0.006ms | 1000 |
| Immer | 201K | 0.005ms | 0.008ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.3M ops/sec
🥈 Mutative           ████████                                   239K ops/sec
🥉 Immer              █████                                      159K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.3M | 0.001ms | 0.002ms | 1000 |
| Mutative | 239K | 0.004ms | 0.010ms | 1000 |
| Immer | 159K | 0.007ms | 0.020ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   1.2M ops/sec
🥈 Mutative           ████████                                   238K ops/sec
🥉 Immer              ████████                                   236K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 238K | 0.004ms | 0.008ms | 1000 |
| Immer | 236K | 0.004ms | 0.009ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              ██████████                                 273K ops/sec
🥉 Mutative           █████████                                  246K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 273K | 0.004ms | 0.006ms | 1000 |
| Mutative | 246K | 0.005ms | 0.009ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   109K ops/sec
🥈 Mutative           ██████████                                 27K ops/sec
🥉 Immer              ████████                                   21K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 109K | 0.013ms | 0.035ms | 1000 |
| Mutative | 27K | 0.048ms | 0.165ms | 1000 |
| Immer | 21K | 0.058ms | 0.120ms | 1000 |


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

*Generated on 2025-11-13T18:07:24.534Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
