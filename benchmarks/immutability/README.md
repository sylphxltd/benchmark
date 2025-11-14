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

- **⚡ Maximum Performance**: Craft - Fastest overall with 92.4/100 score
- **⚖️ Best Balance**: Immer - Great performance (25.0/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 92.4/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immer** (Score: 25.0/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 6.0/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Native Spread** (Score: 1.2/100)
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
| 🥈 2 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 13.3/100 | 17% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
| 🥉 3 | **[Craft](https://github.com/SylphxAI/craft)** | 9.2/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8.1/100 | 10% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.0/100 | 9% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 4.4/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 92.4/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Immer](https://github.com/immerjs/immer)** | 25.0/100 | 27% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 6.0/100 | 7% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Native Spread](#)** | 1.2/100 | 1% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.0/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **92.4** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **25.0** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **6.0** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Native Spread](#)** | **1.2** | N/A | State management solution... | General purpose... |
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
🥇 Native Spread      ████████████████████████████████████████   13.2M ops/sec
🥈 Immutable.js       █████████                                  2.9M ops/sec
🥉 Immutability Helper ███████                                    2.3M ops/sec
 Craft              █████                                      1.8M ops/sec
 Mutative           ████                                       1.2M ops/sec
 Immer              ███                                        1.2M ops/sec
 Seamless Immutable █                                          291K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.2M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.8M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immer | 1.2M | 0.001ms | 0.002ms | 1000 |
| Seamless Immutable | 291K | 0.003ms | 0.006ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   7.4M ops/sec
🥈 Immutability Helper ██████                                     1.1M ops/sec
🥉 Craft              ████                                       704K ops/sec
 Mutative           ███                                        549K ops/sec
 Immutable.js       ██                                         452K ops/sec
 Immer              ██                                         338K ops/sec
 Seamless Immutable                                            85K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.002ms | 1000 |
| Craft | 704K | 0.001ms | 0.003ms | 1000 |
| Mutative | 549K | 0.002ms | 0.005ms | 1000 |
| Immutable.js | 452K | 0.002ms | 0.004ms | 1000 |
| Immer | 338K | 0.003ms | 0.005ms | 1000 |
| Seamless Immutable | 85K | 0.012ms | 0.021ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   21.1M ops/sec
🥈 Immutability Helper █████████                                  4.7M ops/sec
🥉 Immutable.js       ███████                                    3.9M ops/sec
 Craft              █                                          502K ops/sec
 Mutative           █                                          341K ops/sec
 Immer              █                                          307K ops/sec
 Seamless Immutable                                            75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 21.1M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 4.7M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 3.9M | 0.000ms | 0.001ms | 1000 |
| Craft | 502K | 0.002ms | 0.005ms | 1000 |
| Mutative | 341K | 0.003ms | 0.006ms | 1000 |
| Immer | 307K | 0.003ms | 0.005ms | 1000 |
| Seamless Immutable | 75K | 0.014ms | 0.027ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   7.0M ops/sec
🥈 Immutability Helper ████████                                   1.5M ops/sec
🥉 Immutable.js       ██████                                     1.1M ops/sec
 Craft              ██                                         314K ops/sec
 Immer              █                                          178K ops/sec
 Mutative           █                                          177K ops/sec
 Seamless Immutable                                            74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.0M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.5M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Craft | 314K | 0.003ms | 0.007ms | 1000 |
| Immer | 178K | 0.006ms | 0.009ms | 1000 |
| Mutative | 177K | 0.006ms | 0.009ms | 1000 |
| Seamless Immutable | 74K | 0.014ms | 0.033ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   10.4M ops/sec
🥈 Immutability Helper ███                                        714K ops/sec
🥉 Craft              ██                                         549K ops/sec
 Immutable.js       █                                          333K ops/sec
 Mutative           █                                          298K ops/sec
 Immer              █                                          238K ops/sec
 Seamless Immutable                                            45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 714K | 0.001ms | 0.002ms | 1000 |
| Craft | 549K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 333K | 0.003ms | 0.005ms | 1000 |
| Mutative | 298K | 0.003ms | 0.006ms | 1000 |
| Immer | 238K | 0.004ms | 0.010ms | 1000 |
| Seamless Immutable | 45K | 0.023ms | 0.046ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   2.9M ops/sec
🥈 Immutability Helper ███████                                    479K ops/sec
🥉 Craft              █████                                      378K ops/sec
 Immutable.js       █████                                      342K ops/sec
 Mutative           ██                                         174K ops/sec
 Immer              ██                                         139K ops/sec
 Seamless Immutable █                                          49K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 479K | 0.002ms | 0.005ms | 1000 |
| Craft | 378K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 342K | 0.003ms | 0.005ms | 1000 |
| Mutative | 174K | 0.006ms | 0.012ms | 1000 |
| Immer | 139K | 0.007ms | 0.011ms | 1000 |
| Seamless Immutable | 49K | 0.021ms | 0.039ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   6.2M ops/sec
🥈 Immutability Helper ███                                        533K ops/sec
🥉 Craft              ███                                        438K ops/sec
 Immutable.js       ██                                         257K ops/sec
 Immer              █                                          165K ops/sec
 Mutative           █                                          145K ops/sec
 Seamless Immutable                                            38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.2M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 533K | 0.002ms | 0.003ms | 1000 |
| Craft | 438K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 257K | 0.004ms | 0.006ms | 1000 |
| Immer | 165K | 0.006ms | 0.009ms | 1000 |
| Mutative | 145K | 0.008ms | 0.018ms | 1000 |
| Seamless Immutable | 38K | 0.027ms | 0.037ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   127K ops/sec
🥈 Mutative           █████████████████████████████              91K ops/sec
🥉 Immutability Helper ████                                       14K ops/sec
 Craft              ██                                         6K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            478 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 127K | 0.009ms | 0.012ms | 1000 |
| Mutative | 91K | 0.013ms | 0.032ms | 1000 |
| Immutability Helper | 14K | 0.074ms | 0.093ms | 1000 |
| Craft | 6K | 0.160ms | 0.248ms | 1000 |
| Immer | 2K | 0.590ms | 1.258ms | 1000 |
| Immutable.js | 1K | 0.906ms | 1.701ms | 1000 |
| Seamless Immutable | 478 | 2.116ms | 3.304ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         165K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 165K | 0.006ms | 0.009ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   338K ops/sec
🥈 Immer              ███████████████████                        164K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 338K | 0.003ms | 0.006ms | 1000 |
| Immer | 164K | 0.006ms | 0.013ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Immer              ███████████                                84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.006ms | 1000 |
| Immer | 84K | 0.012ms | 0.023ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   299K ops/sec
🥈 Immer              ███████████                                86K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 299K | 0.003ms | 0.007ms | 1000 |
| Immer | 86K | 0.012ms | 0.023ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   78K ops/sec
🥈 Mutative           ███████████████████████████████            61K ops/sec
🥉 Immer              ███████                                    14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 78K | 0.014ms | 0.023ms | 1000 |
| Mutative | 61K | 0.019ms | 0.044ms | 1000 |
| Immer | 14K | 0.074ms | 0.114ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.2M ops/sec
🥈 Mutative           ████████████                               368K ops/sec
🥉 Immer              ███████                                    217K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 368K | 0.003ms | 0.005ms | 1000 |
| Immer | 217K | 0.005ms | 0.008ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.5M ops/sec
🥈 Mutative           ███████                                    251K ops/sec
🥉 Immer              █████                                      182K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 251K | 0.004ms | 0.007ms | 1000 |
| Immer | 182K | 0.006ms | 0.014ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              ██████████                                 275K ops/sec
🥉 Mutative           ████████                                   240K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.001ms | 1000 |
| Immer | 275K | 0.004ms | 0.006ms | 1000 |
| Mutative | 240K | 0.004ms | 0.008ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              ██████████                                 286K ops/sec
🥉 Mutative           ██████████                                 265K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 286K | 0.004ms | 0.005ms | 1000 |
| Mutative | 265K | 0.004ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   91K ops/sec
🥈 Mutative           ██████████████                             33K ops/sec
🥉 Immer              ████████████                               26K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 91K | 0.017ms | 0.045ms | 1000 |
| Mutative | 33K | 0.035ms | 0.079ms | 1000 |
| Immer | 26K | 0.041ms | 0.068ms | 1000 |


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

*Generated on 2025-11-14T05:47:06.012Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
