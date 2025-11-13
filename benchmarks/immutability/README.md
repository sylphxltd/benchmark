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
- **⚖️ Best Balance**: Craft - Great performance (43.5/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 43.5/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 29.1/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 20.0/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immutable.js** (Score: 15.3/100)
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
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 43.5/100 | 43% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 29.1/100 | 29% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 20.0/100 | 20% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 15.3/100 | 15% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 14.3/100 | 14% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.3/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **100.0** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **43.5** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **29.1** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **20.0** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **15.3** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **14.3** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **2.3** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   3.0M ops/sec
🥈 Immutable.js       ████████████████████                       1.5M ops/sec
🥉 Immutability Helper ██████████████████                         1.3M ops/sec
 Craft              ████████████████                           1.2M ops/sec
 Mutative           ███████████                                831K ops/sec
 Immer              ███████                                    541K ops/sec
 Seamless Immutable ████                                       267K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.0M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.5M | 0.001ms | 0.001ms | 1000 |
| Immutability Helper | 1.3M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.001ms | 1000 |
| Mutative | 831K | 0.001ms | 0.003ms | 1000 |
| Immer | 541K | 0.002ms | 0.004ms | 1000 |
| Seamless Immutable | 267K | 0.004ms | 0.006ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.5M ops/sec
🥈 Immutability Helper ████████████                               719K ops/sec
🥉 Craft              █████████                                  575K ops/sec
 Mutative           ███████                                    452K ops/sec
 Immutable.js       ██████                                     379K ops/sec
 Immer              █████                                      297K ops/sec
 Seamless Immutable █                                          80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.5M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 719K | 0.002ms | 0.003ms | 1000 |
| Craft | 575K | 0.002ms | 0.004ms | 1000 |
| Mutative | 452K | 0.002ms | 0.006ms | 1000 |
| Immutable.js | 379K | 0.003ms | 0.006ms | 1000 |
| Immer | 297K | 0.003ms | 0.006ms | 1000 |
| Seamless Immutable | 80K | 0.013ms | 0.023ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   3.4M ops/sec
🥈 Immutability Helper ████████████████████████                   2.0M ops/sec
🥉 Immutable.js       ██████████████████████                     1.9M ops/sec
 Craft              █████                                      431K ops/sec
 Mutative           ████                                       302K ops/sec
 Immer              ███                                        260K ops/sec
 Seamless Immutable █                                          72K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.0M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.9M | 0.001ms | 0.001ms | 1000 |
| Craft | 431K | 0.002ms | 0.005ms | 1000 |
| Mutative | 302K | 0.003ms | 0.008ms | 1000 |
| Immer | 260K | 0.004ms | 0.006ms | 1000 |
| Seamless Immutable | 72K | 0.014ms | 0.025ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   2.4M ops/sec
🥈 Immutability Helper █████████████████                          1.0M ops/sec
🥉 Immutable.js       ██████████████                             833K ops/sec
 Craft              █████                                      294K ops/sec
 Immer              ███                                        161K ops/sec
 Mutative           ███                                        158K ops/sec
 Seamless Immutable █                                          74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.0M | 0.001ms | 0.002ms | 1000 |
| Immutable.js | 833K | 0.001ms | 0.002ms | 1000 |
| Craft | 294K | 0.003ms | 0.007ms | 1000 |
| Immer | 161K | 0.006ms | 0.010ms | 1000 |
| Mutative | 158K | 0.007ms | 0.011ms | 1000 |
| Seamless Immutable | 74K | 0.014ms | 0.024ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   2.7M ops/sec
🥈 Immutability Helper █████████                                  594K ops/sec
🥉 Immutable.js       ████                                       285K ops/sec
 Mutative           ████                                       256K ops/sec
 Craft              ███                                        231K ops/sec
 Immer              ███                                        218K ops/sec
 Seamless Immutable █                                          47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 594K | 0.002ms | 0.002ms | 1000 |
| Immutable.js | 285K | 0.004ms | 0.007ms | 1000 |
| Mutative | 256K | 0.004ms | 0.007ms | 1000 |
| Craft | 231K | 0.004ms | 0.007ms | 1000 |
| Immer | 218K | 0.005ms | 0.008ms | 1000 |
| Seamless Immutable | 47K | 0.021ms | 0.041ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   1.2M ops/sec
🥈 Immutability Helper █████████████                              396K ops/sec
🥉 Craft              ███████████                                325K ops/sec
 Immutable.js       █████████                                  277K ops/sec
 Mutative           █████                                      162K ops/sec
 Immer              ████                                       128K ops/sec
 Seamless Immutable ██                                         47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 396K | 0.003ms | 0.005ms | 1000 |
| Craft | 325K | 0.003ms | 0.006ms | 1000 |
| Immutable.js | 277K | 0.004ms | 0.007ms | 1000 |
| Mutative | 162K | 0.006ms | 0.010ms | 1000 |
| Immer | 128K | 0.008ms | 0.014ms | 1000 |
| Seamless Immutable | 47K | 0.022ms | 0.039ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   2.3M ops/sec
🥈 Immutability Helper ████████                                   447K ops/sec
🥉 Craft              ██████                                     371K ops/sec
 Immutable.js       ████                                       210K ops/sec
 Immer              ███                                        146K ops/sec
 Mutative           ██                                         128K ops/sec
 Seamless Immutable █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.3M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 447K | 0.003ms | 0.004ms | 1000 |
| Craft | 371K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 210K | 0.006ms | 0.008ms | 1000 |
| Immer | 146K | 0.007ms | 0.010ms | 1000 |
| Mutative | 128K | 0.008ms | 0.022ms | 1000 |
| Seamless Immutable | 36K | 0.028ms | 0.045ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   120K ops/sec
🥈 Mutative           ████████████████████████████               85K ops/sec
🥉 Immutability Helper ████                                       13K ops/sec
 Craft              ██                                         7K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            473 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 120K | 0.009ms | 0.018ms | 1000 |
| Mutative | 85K | 0.013ms | 0.031ms | 1000 |
| Immutability Helper | 13K | 0.076ms | 0.101ms | 1000 |
| Craft | 7K | 0.151ms | 0.215ms | 1000 |
| Immer | 2K | 0.626ms | 1.347ms | 1000 |
| Immutable.js | 1K | 0.942ms | 1.881ms | 1000 |
| Seamless Immutable | 473 | 2.141ms | 3.237ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   1.5M ops/sec
🥈 Immer              ████                                       160K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.5M | 0.001ms | 0.002ms | 1000 |
| Immer | 160K | 0.006ms | 0.008ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   312K ops/sec
🥈 Immer              ████████████████████                       159K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 312K | 0.003ms | 0.006ms | 1000 |
| Immer | 159K | 0.006ms | 0.014ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   263K ops/sec
🥈 Immer              █████████████                              84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 263K | 0.004ms | 0.012ms | 1000 |
| Immer | 84K | 0.012ms | 0.022ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   266K ops/sec
🥈 Immer              ████████████                               83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 266K | 0.004ms | 0.008ms | 1000 |
| Immer | 83K | 0.013ms | 0.024ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   72K ops/sec
🥈 Mutative           ██████████████████████████████████         61K ops/sec
🥉 Immer              ████████                                   14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 72K | 0.015ms | 0.029ms | 1000 |
| Mutative | 61K | 0.018ms | 0.029ms | 1000 |
| Immer | 14K | 0.076ms | 0.128ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   818K ops/sec
🥈 Mutative           ██████████                                 209K ops/sec
🥉 Immer              ██████████                                 195K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 818K | 0.001ms | 0.002ms | 1000 |
| Mutative | 209K | 0.005ms | 0.010ms | 1000 |
| Immer | 195K | 0.005ms | 0.008ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   986K ops/sec
🥈 Mutative           ██████████                                 241K ops/sec
🥉 Immer              ███████                                    174K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 986K | 0.001ms | 0.002ms | 1000 |
| Mutative | 241K | 0.004ms | 0.007ms | 1000 |
| Immer | 174K | 0.006ms | 0.009ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   813K ops/sec
🥈 Immer              ████████████                               249K ops/sec
🥉 Mutative           ███████████                                224K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 813K | 0.002ms | 0.003ms | 1000 |
| Immer | 249K | 0.004ms | 0.006ms | 1000 |
| Mutative | 224K | 0.005ms | 0.008ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   761K ops/sec
🥈 Immer              █████████████                              238K ops/sec
🥉 Mutative           ████████████                               230K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 761K | 0.001ms | 0.002ms | 1000 |
| Immer | 238K | 0.004ms | 0.009ms | 1000 |
| Mutative | 230K | 0.004ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   144K ops/sec
🥈 Mutative           ██████████                                 35K ops/sec
🥉 Immer              ███████                                    24K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 144K | 0.008ms | 0.010ms | 1000 |
| Mutative | 35K | 0.033ms | 0.093ms | 1000 |
| Immer | 24K | 0.045ms | 0.088ms | 1000 |


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

*Generated on 2025-11-13T16:56:57.435Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
