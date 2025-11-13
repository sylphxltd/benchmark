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
- **⚖️ Best Balance**: Craft - Great performance (41.7/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 41.7/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 27.6/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 21.9/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immutable.js** (Score: 15.4/100)
- Immutable persistent data collections for Javascript
- **Best for**: General purpose state management
- [GitHub](https://github.com/immutable-js/immutable-js) • [npm](https://www.npmjs.com/package/immutable)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 41.7/100 | 42% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 27.6/100 | 28% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 21.9/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 15.4/100 | 15% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 14.4/100 | 14% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.3/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **100.0** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **41.7** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **27.6** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **21.9** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **15.4** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **14.4** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **2.3** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.9M ops/sec
🥈 Immutable.js       █████████████████████                      1.6M ops/sec
🥉 Immutability Helper ████████████████████                       1.4M ops/sec
 Craft              ████████████████                           1.2M ops/sec
 Mutative           █████████████                              925K ops/sec
 Immer              ███████                                    540K ops/sec
 Seamless Immutable ███                                        250K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.9M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Immutability Helper | 1.4M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 925K | 0.001ms | 0.004ms | 1000 |
| Immer | 540K | 0.003ms | 0.004ms | 1000 |
| Seamless Immutable | 250K | 0.004ms | 0.007ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.5M ops/sec
🥈 Immutability Helper ████████████                               754K ops/sec
🥉 Craft              █████████                                  534K ops/sec
 Mutative           ███████                                    454K ops/sec
 Immutable.js       █████                                      325K ops/sec
 Immer              ████                                       276K ops/sec
 Seamless Immutable █                                          82K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.5M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 754K | 0.001ms | 0.003ms | 1000 |
| Craft | 534K | 0.002ms | 0.003ms | 1000 |
| Mutative | 454K | 0.002ms | 0.006ms | 1000 |
| Immutable.js | 325K | 0.003ms | 0.006ms | 1000 |
| Immer | 276K | 0.004ms | 0.007ms | 1000 |
| Seamless Immutable | 82K | 0.012ms | 0.020ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   3.3M ops/sec
🥈 Immutability Helper █████████████████████████                  2.1M ops/sec
🥉 Immutable.js       ███████████████████████                    1.9M ops/sec
 Mutative           ████                                       313K ops/sec
 Immer              ███                                        240K ops/sec
 Craft              ███                                        218K ops/sec
 Seamless Immutable █                                          69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.3M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.1M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.9M | 0.001ms | 0.001ms | 1000 |
| Mutative | 313K | 0.003ms | 0.007ms | 1000 |
| Immer | 240K | 0.004ms | 0.009ms | 1000 |
| Craft | 218K | 0.005ms | 0.014ms | 1000 |
| Seamless Immutable | 69K | 0.015ms | 0.022ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   2.4M ops/sec
🥈 Immutability Helper ██████████████                             811K ops/sec
🥉 Immutable.js       █████████████                              759K ops/sec
 Craft              ████                                       254K ops/sec
 Mutative           ███                                        159K ops/sec
 Immer              ███                                        156K ops/sec
 Seamless Immutable █                                          70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 811K | 0.001ms | 0.002ms | 1000 |
| Immutable.js | 759K | 0.001ms | 0.003ms | 1000 |
| Craft | 254K | 0.004ms | 0.006ms | 1000 |
| Mutative | 159K | 0.007ms | 0.012ms | 1000 |
| Immer | 156K | 0.006ms | 0.013ms | 1000 |
| Seamless Immutable | 70K | 0.014ms | 0.021ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   2.7M ops/sec
🥈 Immutability Helper ████████                                   523K ops/sec
🥉 Craft              ██████                                     426K ops/sec
 Mutative           ████                                       288K ops/sec
 Immutable.js       ████                                       277K ops/sec
 Immer              ███                                        217K ops/sec
 Seamless Immutable █                                          43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 523K | 0.002ms | 0.003ms | 1000 |
| Craft | 426K | 0.002ms | 0.005ms | 1000 |
| Mutative | 288K | 0.004ms | 0.007ms | 1000 |
| Immutable.js | 277K | 0.004ms | 0.005ms | 1000 |
| Immer | 217K | 0.005ms | 0.008ms | 1000 |
| Seamless Immutable | 43K | 0.026ms | 0.055ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   2.1M ops/sec
🥈 Immutability Helper ████████                                   402K ops/sec
🥉 Craft              ██████                                     294K ops/sec
 Immutable.js       █████                                      271K ops/sec
 Mutative           ███                                        171K ops/sec
 Immer              ██                                         122K ops/sec
 Seamless Immutable █                                          47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.1M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 402K | 0.003ms | 0.004ms | 1000 |
| Craft | 294K | 0.004ms | 0.006ms | 1000 |
| Immutable.js | 271K | 0.004ms | 0.006ms | 1000 |
| Mutative | 171K | 0.007ms | 0.012ms | 1000 |
| Immer | 122K | 0.009ms | 0.017ms | 1000 |
| Seamless Immutable | 47K | 0.021ms | 0.030ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   1.3M ops/sec
🥈 Immutability Helper ████████████                               409K ops/sec
🥉 Craft              █████████                                  315K ops/sec
 Immutable.js       ███████                                    218K ops/sec
 Mutative           █████                                      155K ops/sec
 Immer              ████                                       141K ops/sec
 Seamless Immutable █                                          38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.3M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 409K | 0.002ms | 0.004ms | 1000 |
| Craft | 315K | 0.004ms | 0.006ms | 1000 |
| Immutable.js | 218K | 0.005ms | 0.007ms | 1000 |
| Mutative | 155K | 0.007ms | 0.010ms | 1000 |
| Immer | 141K | 0.007ms | 0.016ms | 1000 |
| Seamless Immutable | 38K | 0.027ms | 0.040ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   99K ops/sec
🥈 Mutative           ███████████████████████████████            77K ops/sec
🥉 Immutability Helper ████                                       9K ops/sec
 Craft              ██                                         4K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            459 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 99K | 0.011ms | 0.020ms | 1000 |
| Mutative | 77K | 0.014ms | 0.025ms | 1000 |
| Immutability Helper | 9K | 0.113ms | 0.132ms | 1000 |
| Craft | 4K | 0.228ms | 0.270ms | 1000 |
| Immer | 2K | 0.669ms | 1.444ms | 1000 |
| Immutable.js | 1K | 0.967ms | 2.204ms | 1000 |
| Seamless Immutable | 459 | 2.201ms | 3.435ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   1.5M ops/sec
🥈 Immer              ████                                       149K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.5M | 0.001ms | 0.003ms | 1000 |
| Immer | 149K | 0.007ms | 0.012ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   263K ops/sec
🥈 Immer              ████████████████████████                   156K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 263K | 0.004ms | 0.007ms | 1000 |
| Immer | 156K | 0.007ms | 0.010ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   241K ops/sec
🥈 Immer              ██████████████                             85K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 241K | 0.004ms | 0.009ms | 1000 |
| Immer | 85K | 0.012ms | 0.020ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   234K ops/sec
🥈 Immer              ███████████████                            85K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 234K | 0.004ms | 0.008ms | 1000 |
| Immer | 85K | 0.012ms | 0.017ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   57K ops/sec
🥈 Mutative           █████████████████████████████████████      53K ops/sec
🥉 Immer              ██████████                                 14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 57K | 0.021ms | 0.045ms | 1000 |
| Mutative | 53K | 0.022ms | 0.042ms | 1000 |
| Immer | 14K | 0.077ms | 0.129ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   865K ops/sec
🥈 Mutative           ████████████████                           335K ops/sec
🥉 Immer              ███████                                    157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 865K | 0.001ms | 0.002ms | 1000 |
| Mutative | 335K | 0.003ms | 0.006ms | 1000 |
| Immer | 157K | 0.007ms | 0.014ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   946K ops/sec
🥈 Mutative           █████████                                  212K ops/sec
🥉 Immer              ███████                                    170K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 946K | 0.001ms | 0.003ms | 1000 |
| Mutative | 212K | 0.005ms | 0.009ms | 1000 |
| Immer | 170K | 0.006ms | 0.011ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   865K ops/sec
🥈 Mutative           ████████████                               262K ops/sec
🥉 Immer              ███████████                                228K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 865K | 0.001ms | 0.002ms | 1000 |
| Mutative | 262K | 0.004ms | 0.008ms | 1000 |
| Immer | 228K | 0.005ms | 0.008ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   809K ops/sec
🥈 Mutative           █████████████                              253K ops/sec
🥉 Immer              ████████████                               233K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 809K | 0.001ms | 0.003ms | 1000 |
| Mutative | 253K | 0.004ms | 0.008ms | 1000 |
| Immer | 233K | 0.004ms | 0.011ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   127K ops/sec
🥈 Mutative           ██████████                                 33K ops/sec
🥉 Immer              ████████                                   25K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 127K | 0.009ms | 0.016ms | 1000 |
| Mutative | 33K | 0.033ms | 0.050ms | 1000 |
| Immer | 25K | 0.042ms | 0.073ms | 1000 |


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
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 17.58 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
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

*Generated on 2025-11-13T17:07:08.116Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
