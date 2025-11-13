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
- **⚖️ Best Balance**: Craft - Great performance (28.7/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 28.7/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 12.5/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 10.3/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 8.1/100)
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
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 28.7/100 | 29% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 12.5/100 | 12% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 10.3/100 | 10% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 8.1/100 | 8% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 6.3/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 0.7/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **100.0** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **28.7** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **12.5** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **10.3** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **8.1** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **6.3** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **0.7** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

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
 Mutative           ████                                       1.2M ops/sec
 Immer              ██                                         664K ops/sec
 Seamless Immutable █                                          288K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.3M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.7M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immer | 664K | 0.002ms | 0.004ms | 1000 |
| Seamless Immutable | 288K | 0.004ms | 0.006ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   7.6M ops/sec
🥈 Immutability Helper ██████                                     1.1M ops/sec
🥉 Craft              ████                                       673K ops/sec
 Mutative           ███                                        495K ops/sec
 Immutable.js       ██                                         438K ops/sec
 Immer              ██                                         330K ops/sec
 Seamless Immutable                                            82K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.6M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.002ms | 1000 |
| Craft | 673K | 0.002ms | 0.003ms | 1000 |
| Mutative | 495K | 0.002ms | 0.006ms | 1000 |
| Immutable.js | 438K | 0.002ms | 0.004ms | 1000 |
| Immer | 330K | 0.003ms | 0.005ms | 1000 |
| Seamless Immutable | 82K | 0.012ms | 0.021ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   21.3M ops/sec
🥈 Immutability Helper █████████                                  4.8M ops/sec
🥉 Immutable.js       ███████                                    3.9M ops/sec
 Craft              █                                          499K ops/sec
 Mutative           █                                          328K ops/sec
 Immer              █                                          281K ops/sec
 Seamless Immutable                                            74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 21.3M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 4.8M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 3.9M | 0.000ms | 0.001ms | 1000 |
| Craft | 499K | 0.002ms | 0.003ms | 1000 |
| Mutative | 328K | 0.003ms | 0.006ms | 1000 |
| Immer | 281K | 0.004ms | 0.008ms | 1000 |
| Seamless Immutable | 74K | 0.014ms | 0.024ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   6.6M ops/sec
🥈 Immutability Helper ███████                                    1.1M ops/sec
🥉 Immutable.js       ██████                                     1.0M ops/sec
 Craft              ██                                         320K ops/sec
 Mutative           █                                          183K ops/sec
 Immer              █                                          167K ops/sec
 Seamless Immutable                                            78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.6M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutable.js | 1.0M | 0.001ms | 0.003ms | 1000 |
| Craft | 320K | 0.003ms | 0.004ms | 1000 |
| Mutative | 183K | 0.006ms | 0.010ms | 1000 |
| Immer | 167K | 0.006ms | 0.010ms | 1000 |
| Seamless Immutable | 78K | 0.013ms | 0.023ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   10.2M ops/sec
🥈 Immutability Helper ███                                        716K ops/sec
🥉 Craft              ██                                         548K ops/sec
 Immutable.js       █                                          303K ops/sec
 Mutative           █                                          282K ops/sec
 Immer              █                                          225K ops/sec
 Seamless Immutable                                            44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.2M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 716K | 0.001ms | 0.002ms | 1000 |
| Craft | 548K | 0.002ms | 0.004ms | 1000 |
| Immutable.js | 303K | 0.003ms | 0.007ms | 1000 |
| Mutative | 282K | 0.004ms | 0.007ms | 1000 |
| Immer | 225K | 0.005ms | 0.008ms | 1000 |
| Seamless Immutable | 44K | 0.025ms | 0.053ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   4.8M ops/sec
🥈 Immutability Helper ████                                       461K ops/sec
🥉 Craft              ███                                        360K ops/sec
 Immutable.js       ██                                         295K ops/sec
 Mutative           █                                          168K ops/sec
 Immer              █                                          137K ops/sec
 Seamless Immutable                                            45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.8M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 461K | 0.002ms | 0.005ms | 1000 |
| Craft | 360K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 295K | 0.004ms | 0.006ms | 1000 |
| Mutative | 168K | 0.006ms | 0.009ms | 1000 |
| Immer | 137K | 0.007ms | 0.012ms | 1000 |
| Seamless Immutable | 45K | 0.023ms | 0.065ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   6.4M ops/sec
🥈 Immutability Helper ███                                        521K ops/sec
🥉 Craft              ██                                         369K ops/sec
 Immutable.js       ██                                         245K ops/sec
 Immer              █                                          157K ops/sec
 Mutative           █                                          136K ops/sec
 Seamless Immutable                                            37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 521K | 0.003ms | 0.003ms | 1000 |
| Craft | 369K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 245K | 0.004ms | 0.007ms | 1000 |
| Immer | 157K | 0.006ms | 0.009ms | 1000 |
| Mutative | 136K | 0.008ms | 0.020ms | 1000 |
| Seamless Immutable | 37K | 0.028ms | 0.039ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   109K ops/sec
🥈 Mutative           █████████████████████████████              80K ops/sec
🥉 Immutability Helper █████                                      13K ops/sec
 Craft              ██                                         6K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            465 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 109K | 0.011ms | 0.029ms | 1000 |
| Mutative | 80K | 0.013ms | 0.027ms | 1000 |
| Immutability Helper | 13K | 0.076ms | 0.103ms | 1000 |
| Craft | 6K | 0.165ms | 0.229ms | 1000 |
| Immer | 2K | 0.617ms | 1.371ms | 1000 |
| Immutable.js | 1K | 0.957ms | 1.876ms | 1000 |
| Seamless Immutable | 465 | 2.176ms | 3.427ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         162K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.002ms | 1000 |
| Immer | 162K | 0.006ms | 0.009ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Immer              ██████████████████████                     166K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.007ms | 1000 |
| Immer | 166K | 0.006ms | 0.009ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   274K ops/sec
🥈 Immer              ████████████                               84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 274K | 0.004ms | 0.007ms | 1000 |
| Immer | 84K | 0.012ms | 0.023ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   264K ops/sec
🥈 Immer              ████████████                               82K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 264K | 0.004ms | 0.007ms | 1000 |
| Immer | 82K | 0.012ms | 0.024ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   68K ops/sec
🥈 Mutative           ███████████████████████████████            52K ops/sec
🥉 Immer              ████████                                   14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 68K | 0.016ms | 0.027ms | 1000 |
| Mutative | 52K | 0.023ms | 0.055ms | 1000 |
| Immer | 14K | 0.077ms | 0.125ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Mutative           ██████████                                 267K ops/sec
🥉 Immer              ███████                                    201K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Mutative | 267K | 0.004ms | 0.012ms | 1000 |
| Immer | 201K | 0.006ms | 0.009ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.3M ops/sec
🥈 Mutative           ████████                                   266K ops/sec
🥉 Immer              █████                                      151K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.3M | 0.001ms | 0.002ms | 1000 |
| Mutative | 266K | 0.004ms | 0.007ms | 1000 |
| Immer | 151K | 0.007ms | 0.016ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              █████████                                  243K ops/sec
🥉 Mutative           ████████                                   219K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 243K | 0.004ms | 0.007ms | 1000 |
| Mutative | 219K | 0.005ms | 0.012ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              █████████                                  252K ops/sec
🥉 Mutative           █████████                                  248K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 252K | 0.004ms | 0.006ms | 1000 |
| Mutative | 248K | 0.004ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   121K ops/sec
🥈 Mutative           █████████                                  28K ops/sec
🥉 Immer              █████████                                  26K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 121K | 0.011ms | 0.028ms | 1000 |
| Mutative | 28K | 0.044ms | 0.109ms | 1000 |
| Immer | 26K | 0.040ms | 0.054ms | 1000 |


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

*Generated on 2025-11-13T20:05:34.538Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
