<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2014,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Craft - Fastest overall with 92.8/100 score
- **⚖️ Best Balance**: Immer - Great performance (26.3/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 92.8/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immer** (Score: 26.3/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 6.7/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Native Spread** (Score: 1.1/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutability Helper** (Score: 1.1/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


</details>

---

## 📊 Overall Performance Rankings

> **🆕 Dual Ranking System**
>
> This category uses **hybrid weighting** that balances functional importance with data-driven stability.
> Both ranking systems are shown below for comparison.
>
> - **Hybrid Weighted** (primary): Balances category importance × test stability
> - **Variance-Based** (reference): Pure data-driven weighting
>
> See [Hybrid Weighting Analysis](../../HYBRID_WEIGHTING_ANALYSIS.md) for methodology.

### 🎯 Hybrid Weighted Rankings

Based on **two-tier weighted geometric mean** combining category importance with variance-based test weights.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 79.4/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 12.7/100 | 16% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
| 🥉 3 | **[Craft](https://github.com/SylphxAI/craft)** | 8.9/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 7.8/100 | 10% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  5 | **[Mutative](https://github.com/unadlib/mutative)** | 6.8/100 | 9% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 3.8/100 | 5% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 92.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Immer](https://github.com/immerjs/immer)** | 26.3/100 | 28% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 6.7/100 | 7% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Native Spread](#)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.0/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **92.8** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **26.3** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **6.7** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Native Spread](#)** | **1.1** | N/A | State management solution... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.1** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **1.1** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.0** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   13.3M ops/sec
🥈 Immutable.js       █████████                                  2.9M ops/sec
🥉 Immutability Helper ███████                                    2.3M ops/sec
 Craft              █████                                      1.7M ops/sec
 Mutative           ████                                       1.3M ops/sec
 Immer              ███                                        836K ops/sec
 Seamless Immutable █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.3M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.7M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.3M | 0.001ms | 0.002ms | 1000 |
| Immer | 836K | 0.001ms | 0.003ms | 1000 |
| Seamless Immutable | 293K | 0.003ms | 0.007ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   7.4M ops/sec
🥈 Immutability Helper █████                                      973K ops/sec
🥉 Craft              ████                                       714K ops/sec
 Mutative           ███                                        545K ops/sec
 Immutable.js       ██                                         432K ops/sec
 Immer              ██                                         327K ops/sec
 Seamless Immutable                                            84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 973K | 0.001ms | 0.002ms | 1000 |
| Craft | 714K | 0.001ms | 0.003ms | 1000 |
| Mutative | 545K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 432K | 0.002ms | 0.005ms | 1000 |
| Immer | 327K | 0.003ms | 0.005ms | 1000 |
| Seamless Immutable | 84K | 0.012ms | 0.022ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   21.3M ops/sec
🥈 Immutability Helper █████████                                  4.8M ops/sec
🥉 Immutable.js       ████████                                   4.0M ops/sec
 Craft              █                                          508K ops/sec
 Mutative           █                                          342K ops/sec
 Immer              █                                          300K ops/sec
 Seamless Immutable                                            77K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 21.3M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 4.8M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.0M | 0.000ms | 0.001ms | 1000 |
| Craft | 508K | 0.002ms | 0.004ms | 1000 |
| Mutative | 342K | 0.003ms | 0.007ms | 1000 |
| Immer | 300K | 0.003ms | 0.007ms | 1000 |
| Seamless Immutable | 77K | 0.013ms | 0.022ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   7.4M ops/sec
🥈 Immutability Helper ████████                                   1.4M ops/sec
🥉 Immutable.js       ██████                                     1.1M ops/sec
 Craft              ██                                         329K ops/sec
 Mutative           █                                          181K ops/sec
 Immer              █                                          149K ops/sec
 Seamless Immutable                                            79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 1.4M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Craft | 329K | 0.003ms | 0.005ms | 1000 |
| Mutative | 181K | 0.006ms | 0.010ms | 1000 |
| Immer | 149K | 0.007ms | 0.016ms | 1000 |
| Seamless Immutable | 79K | 0.013ms | 0.022ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   10.3M ops/sec
🥈 Immutability Helper ███                                        713K ops/sec
🥉 Craft              ██                                         543K ops/sec
 Immutable.js       █                                          342K ops/sec
 Mutative           █                                          280K ops/sec
 Immer              █                                          224K ops/sec
 Seamless Immutable                                            49K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.3M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 713K | 0.001ms | 0.002ms | 1000 |
| Craft | 543K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 342K | 0.003ms | 0.004ms | 1000 |
| Mutative | 280K | 0.004ms | 0.007ms | 1000 |
| Immer | 224K | 0.005ms | 0.008ms | 1000 |
| Seamless Immutable | 49K | 0.021ms | 0.041ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   4.2M ops/sec
🥈 Immutability Helper █████                                      545K ops/sec
🥉 Craft              ███                                        357K ops/sec
 Immutable.js       ███                                        341K ops/sec
 Mutative           ██                                         170K ops/sec
 Immer              █                                          138K ops/sec
 Seamless Immutable                                            48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.2M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 545K | 0.002ms | 0.003ms | 1000 |
| Craft | 357K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 341K | 0.003ms | 0.005ms | 1000 |
| Mutative | 170K | 0.006ms | 0.009ms | 1000 |
| Immer | 138K | 0.007ms | 0.012ms | 1000 |
| Seamless Immutable | 48K | 0.022ms | 0.033ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   6.4M ops/sec
🥈 Immutability Helper ███                                        534K ops/sec
🥉 Craft              ███                                        428K ops/sec
 Immutable.js       ██                                         270K ops/sec
 Immer              █                                          163K ops/sec
 Mutative           █                                          141K ops/sec
 Seamless Immutable                                            38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 534K | 0.002ms | 0.003ms | 1000 |
| Craft | 428K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 270K | 0.004ms | 0.006ms | 1000 |
| Immer | 163K | 0.006ms | 0.009ms | 1000 |
| Mutative | 141K | 0.007ms | 0.011ms | 1000 |
| Seamless Immutable | 38K | 0.027ms | 0.037ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   118K ops/sec
🥈 Mutative           ███████████████████████████████            91K ops/sec
🥉 Immutability Helper ████                                       13K ops/sec
 Craft              ██                                         6K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            471 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 118K | 0.009ms | 0.019ms | 1000 |
| Mutative | 91K | 0.012ms | 0.025ms | 1000 |
| Immutability Helper | 13K | 0.080ms | 0.158ms | 1000 |
| Craft | 6K | 0.161ms | 0.327ms | 1000 |
| Immer | 2K | 0.607ms | 1.284ms | 1000 |
| Immutable.js | 1K | 0.914ms | 1.665ms | 1000 |
| Seamless Immutable | 471 | 2.147ms | 3.211ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.8M ops/sec
🥈 Immer              ██                                         159K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.8M | 0.000ms | 0.001ms | 1000 |
| Immer | 159K | 0.006ms | 0.011ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   331K ops/sec
🥈 Immer              ████████████████████                       167K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 331K | 0.003ms | 0.006ms | 1000 |
| Immer | 167K | 0.006ms | 0.009ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   297K ops/sec
🥈 Immer              ███████████                                84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 297K | 0.003ms | 0.007ms | 1000 |
| Immer | 84K | 0.012ms | 0.022ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   295K ops/sec
🥈 Immer              ███████████                                79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 295K | 0.003ms | 0.007ms | 1000 |
| Immer | 79K | 0.013ms | 0.025ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   72K ops/sec
🥈 Mutative           ███████████████████████████████████        64K ops/sec
🥉 Immer              ████████                                   14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 72K | 0.015ms | 0.026ms | 1000 |
| Mutative | 64K | 0.017ms | 0.029ms | 1000 |
| Immer | 14K | 0.076ms | 0.148ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.0M ops/sec
🥈 Mutative           ██████████                                 252K ops/sec
🥉 Immer              ████████                                   204K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.0M | 0.001ms | 0.002ms | 1000 |
| Mutative | 252K | 0.005ms | 0.010ms | 1000 |
| Immer | 204K | 0.006ms | 0.008ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.4M ops/sec
🥈 Mutative           █████████                                  299K ops/sec
🥉 Immer              ████                                       134K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.4M | 0.001ms | 0.001ms | 1000 |
| Mutative | 299K | 0.003ms | 0.006ms | 1000 |
| Immer | 134K | 0.008ms | 0.018ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   832K ops/sec
🥈 Immer              █████████████                              274K ops/sec
🥉 Mutative           █████████████                              270K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 832K | 0.001ms | 0.002ms | 1000 |
| Immer | 274K | 0.004ms | 0.005ms | 1000 |
| Mutative | 270K | 0.004ms | 0.007ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   805K ops/sec
🥈 Immer              ██████████████                             275K ops/sec
🥉 Mutative           █████████████                              257K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 805K | 0.001ms | 0.002ms | 1000 |
| Immer | 275K | 0.004ms | 0.006ms | 1000 |
| Mutative | 257K | 0.004ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   140K ops/sec
🥈 Mutative           ██████████                                 35K ops/sec
🥉 Immer              ███████                                    26K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 140K | 0.008ms | 0.010ms | 1000 |
| Mutative | 35K | 0.033ms | 0.088ms | 1000 |
| Immer | 26K | 0.040ms | 0.064ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Platform**: GitHub Actions (Ubuntu latest)
- **CPU**: 2-core (Intel Xeon or AMD EPYC equivalent)
- **RAM**: ~7GB available
- **Node.js**: 20.x
- **Warmup**: 100ms + 5 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **weighted geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Test weights calculated based on 90th percentile of performance variance
- Stable tests (low variance) receive higher weight
- Unstable tests (high variance) receive lower weight
- This prevents outlier tests from dominating the overall score

**Example** (from current results):
- High-Frequency Read (stable, factor 7.3): **weight 17.7%**
- Complex Form (unstable, factor 600): **weight 0.2%**

This methodology follows [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)'s weighted geometric mean approach.

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

- **[Craft](https://github.com/SylphxAI/craft)** (`@sylphx/craft`) v1.2.1 • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Mutative](https://github.com/unadlib/mutative)** (`mutative`) v1.3.0 • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Native Spread](#)** (`native`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
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

*Generated on 2025-11-14T00:01:30.367Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
