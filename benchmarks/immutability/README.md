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

- **⚡ Maximum Performance**: Craft - Fastest overall with 91.7/100 score
- **⚖️ Best Balance**: Immer - Great performance (25.0/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 91.7/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immer** (Score: 25.0/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 5.4/100)
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

Based on **weighted geometric mean** of normalized scores across all 18 tests.

*Scores use variance-based weighting to prevent unstable tests from dominating results. See [Methodology](#-methodology) for details.*

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 91.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Immer](https://github.com/immerjs/immer)** | 25.0/100 | 27% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 5.4/100 | 6% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Native Spread](#)** | 1.2/100 | 1% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.0/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **91.7** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **25.0** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **5.4** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
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
🥇 Native Spread      ████████████████████████████████████████   13.1M ops/sec
🥈 Immutable.js       █████████                                  2.9M ops/sec
🥉 Immutability Helper ███████                                    2.3M ops/sec
 Craft              █████                                      1.8M ops/sec
 Mutative           ████                                       1.3M ops/sec
 Immer              ███                                        845K ops/sec
 Seamless Immutable █                                          292K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.1M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.8M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.3M | 0.001ms | 0.002ms | 1000 |
| Immer | 845K | 0.001ms | 0.003ms | 1000 |
| Seamless Immutable | 292K | 0.003ms | 0.005ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   6.9M ops/sec
🥈 Immutability Helper ██████                                     1.1M ops/sec
🥉 Craft              ████                                       686K ops/sec
 Mutative           ███                                        547K ops/sec
 Immutable.js       ██                                         423K ops/sec
 Immer              ██                                         323K ops/sec
 Seamless Immutable                                            84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.9M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.001ms | 1000 |
| Craft | 686K | 0.002ms | 0.003ms | 1000 |
| Mutative | 547K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 423K | 0.003ms | 0.006ms | 1000 |
| Immer | 323K | 0.003ms | 0.005ms | 1000 |
| Seamless Immutable | 84K | 0.012ms | 0.021ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   21.0M ops/sec
🥈 Immutability Helper █████████                                  4.6M ops/sec
🥉 Immutable.js       ████████                                   4.1M ops/sec
 Craft              █                                          487K ops/sec
 Mutative           █                                          337K ops/sec
 Immer              █                                          280K ops/sec
 Seamless Immutable                                            77K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 21.0M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 4.6M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.1M | 0.000ms | 0.002ms | 1000 |
| Craft | 487K | 0.002ms | 0.005ms | 1000 |
| Mutative | 337K | 0.004ms | 0.007ms | 1000 |
| Immer | 280K | 0.004ms | 0.009ms | 1000 |
| Seamless Immutable | 77K | 0.013ms | 0.023ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   7.0M ops/sec
🥈 Immutability Helper ████████                                   1.4M ops/sec
🥉 Immutable.js       ███████                                    1.1M ops/sec
 Craft              ██                                         331K ops/sec
 Mutative           █                                          175K ops/sec
 Immer              █                                          172K ops/sec
 Seamless Immutable                                            79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.0M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 1.4M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Craft | 331K | 0.003ms | 0.004ms | 1000 |
| Mutative | 175K | 0.006ms | 0.016ms | 1000 |
| Immer | 172K | 0.006ms | 0.010ms | 1000 |
| Seamless Immutable | 79K | 0.013ms | 0.023ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   10.2M ops/sec
🥈 Immutability Helper ███                                        718K ops/sec
🥉 Craft              ██                                         558K ops/sec
 Immutable.js       █                                          343K ops/sec
 Mutative           █                                          291K ops/sec
 Immer              █                                          219K ops/sec
 Seamless Immutable                                            41K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.2M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 718K | 0.001ms | 0.002ms | 1000 |
| Craft | 558K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 343K | 0.003ms | 0.005ms | 1000 |
| Mutative | 291K | 0.004ms | 0.007ms | 1000 |
| Immer | 219K | 0.005ms | 0.008ms | 1000 |
| Seamless Immutable | 41K | 0.028ms | 0.057ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   4.4M ops/sec
🥈 Immutability Helper █████                                      536K ops/sec
🥉 Craft              ███                                        378K ops/sec
 Immutable.js       ███                                        340K ops/sec
 Mutative           ██                                         174K ops/sec
 Immer              █                                          136K ops/sec
 Seamless Immutable                                            49K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 536K | 0.002ms | 0.003ms | 1000 |
| Craft | 378K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 340K | 0.003ms | 0.005ms | 1000 |
| Mutative | 174K | 0.006ms | 0.009ms | 1000 |
| Immer | 136K | 0.007ms | 0.015ms | 1000 |
| Seamless Immutable | 49K | 0.022ms | 0.047ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   6.3M ops/sec
🥈 Immutability Helper ███                                        524K ops/sec
🥉 Craft              ██                                         383K ops/sec
 Immutable.js       ██                                         257K ops/sec
 Immer              █                                          164K ops/sec
 Mutative           █                                          137K ops/sec
 Seamless Immutable                                            38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.3M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 524K | 0.002ms | 0.003ms | 1000 |
| Craft | 383K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 257K | 0.004ms | 0.005ms | 1000 |
| Immer | 164K | 0.006ms | 0.009ms | 1000 |
| Mutative | 137K | 0.007ms | 0.013ms | 1000 |
| Seamless Immutable | 38K | 0.027ms | 0.052ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   127K ops/sec
🥈 Mutative           ██████████████████████████████             94K ops/sec
🥉 Immutability Helper ████                                       13K ops/sec
 Craft              ██                                         7K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            482 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 127K | 0.009ms | 0.015ms | 1000 |
| Mutative | 94K | 0.012ms | 0.025ms | 1000 |
| Immutability Helper | 13K | 0.076ms | 0.102ms | 1000 |
| Craft | 7K | 0.153ms | 0.214ms | 1000 |
| Immer | 2K | 0.606ms | 1.269ms | 1000 |
| Immutable.js | 1K | 0.906ms | 1.690ms | 1000 |
| Seamless Immutable | 482 | 2.099ms | 3.271ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ███                                        173K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 173K | 0.006ms | 0.009ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   336K ops/sec
🥈 Immer              █████████████████████                      177K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 336K | 0.003ms | 0.006ms | 1000 |
| Immer | 177K | 0.006ms | 0.017ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   298K ops/sec
🥈 Immer              ████████████                               86K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 298K | 0.003ms | 0.006ms | 1000 |
| Immer | 86K | 0.012ms | 0.028ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   294K ops/sec
🥈 Immer              ████████████                               90K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 294K | 0.003ms | 0.006ms | 1000 |
| Immer | 90K | 0.011ms | 0.021ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Mutative           ████████████████████████████████████████   65K ops/sec
🥈 Craft              █████████████████████████████████████      60K ops/sec
🥉 Immer              █████████                                  15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 65K | 0.016ms | 0.032ms | 1000 |
| Craft | 60K | 0.022ms | 0.048ms | 1000 |
| Immer | 15K | 0.072ms | 0.096ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.2M ops/sec
🥈 Mutative           ████████████                               356K ops/sec
🥉 Immer              ███████                                    212K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.2M | 0.001ms | 0.001ms | 1000 |
| Mutative | 356K | 0.003ms | 0.005ms | 1000 |
| Immer | 212K | 0.005ms | 0.008ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.4M ops/sec
🥈 Mutative           ██████                                     211K ops/sec
🥉 Immer              ████                                       161K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.4M | 0.001ms | 0.001ms | 1000 |
| Mutative | 211K | 0.005ms | 0.010ms | 1000 |
| Immer | 161K | 0.006ms | 0.015ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Mutative           █████████                                  262K ops/sec
🥉 Immer              █████████                                  252K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Mutative | 262K | 0.004ms | 0.008ms | 1000 |
| Immer | 252K | 0.004ms | 0.007ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              ██████████                                 281K ops/sec
🥉 Mutative           █████████                                  267K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 281K | 0.004ms | 0.005ms | 1000 |
| Mutative | 267K | 0.004ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   155K ops/sec
🥈 Mutative           █████████                                  35K ops/sec
🥉 Immer              ███████                                    27K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 155K | 0.007ms | 0.011ms | 1000 |
| Mutative | 35K | 0.031ms | 0.062ms | 1000 |
| Immer | 27K | 0.038ms | 0.051ms | 1000 |


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

*Generated on 2025-11-13T23:01:16.441Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
