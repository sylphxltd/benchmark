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

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 99.8/100 score
- **⚖️ Best Balance**: Craft - Great performance (39.3/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 99.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 39.3/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Mutative** (Score: 14.9/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immutability Helper** (Score: 14.8/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Immer** (Score: 14.5/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 99.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 39.3/100 | 39% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 14.9/100 | 15% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 14.8/100 | 15% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 14.5/100 | 15% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 6.1/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **99.8** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **39.3** | **2.84 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **14.9** | **12.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **14.8** | **2.40 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **14.5** | **9.21 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **6.1** | **36.25 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **2.7** | **5.99 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.3M ops/sec
🥈 Craft              ████████                                   427K ops/sec
🥉 Immutability Helper ███████                                    391K ops/sec
 Immer              ████                                       206K ops/sec
 Immutable.js       ████                                       199K ops/sec
 Mutative           ███                                        194K ops/sec
 Seamless Immutable ███                                        148K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.3M | 0.000ms | 0.002ms | 1000 |
| Craft | 427K | 0.002ms | 0.008ms | 1000 |
| Immutability Helper | 391K | 0.002ms | 0.012ms | 1000 |
| Immer | 206K | 0.005ms | 0.018ms | 1000 |
| Immutable.js | 199K | 0.005ms | 0.019ms | 1000 |
| Mutative | 194K | 0.005ms | 0.016ms | 1000 |
| Seamless Immutable | 148K | 0.007ms | 0.026ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   1.9M ops/sec
🥈 Immutability Helper ████                                       207K ops/sec
🥉 Craft              ████                                       195K ops/sec
 Immer              ██                                         112K ops/sec
 Mutative           ██                                         110K ops/sec
 Immutable.js       ██                                         92K ops/sec
 Seamless Immutable ██                                         74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 207K | 0.005ms | 0.014ms | 1000 |
| Craft | 195K | 0.005ms | 0.020ms | 1000 |
| Immer | 112K | 0.009ms | 0.025ms | 1000 |
| Mutative | 110K | 0.009ms | 0.031ms | 1000 |
| Immutable.js | 92K | 0.011ms | 0.032ms | 1000 |
| Seamless Immutable | 74K | 0.013ms | 0.029ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   3.0M ops/sec
🥈 Immutability Helper ████████                                   633K ops/sec
🥉 Immutable.js       █████                                      392K ops/sec
 Craft              ███                                        260K ops/sec
 Immer              ██                                         140K ops/sec
 Mutative           ██                                         118K ops/sec
 Seamless Immutable █                                          60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.0M | 0.000ms | 0.002ms | 1000 |
| Immutability Helper | 633K | 0.002ms | 0.009ms | 1000 |
| Immutable.js | 392K | 0.002ms | 0.014ms | 1000 |
| Craft | 260K | 0.004ms | 0.016ms | 1000 |
| Immer | 140K | 0.007ms | 0.023ms | 1000 |
| Mutative | 118K | 0.008ms | 0.028ms | 1000 |
| Seamless Immutable | 60K | 0.017ms | 0.035ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   1.5M ops/sec
🥈 Immutability Helper ███████████                                418K ops/sec
🥉 Craft              ██████                                     221K ops/sec
 Immutable.js       ████                                       168K ops/sec
 Mutative           ███                                        102K ops/sec
 Immer              ██                                         90K ops/sec
 Seamless Immutable ██                                         65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.5M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 418K | 0.002ms | 0.013ms | 1000 |
| Craft | 221K | 0.004ms | 0.013ms | 1000 |
| Immutable.js | 168K | 0.006ms | 0.020ms | 1000 |
| Mutative | 102K | 0.010ms | 0.026ms | 1000 |
| Immer | 90K | 0.011ms | 0.026ms | 1000 |
| Seamless Immutable | 65K | 0.015ms | 0.029ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   2.0M ops/sec
🥈 Immutability Helper █████                                      230K ops/sec
🥉 Craft              ████                                       208K ops/sec
 Immer              ███                                        157K ops/sec
 Mutative           ███                                        153K ops/sec
 Immutable.js       █                                          70K ops/sec
 Seamless Immutable █                                          35K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.0M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 230K | 0.004ms | 0.015ms | 1000 |
| Craft | 208K | 0.005ms | 0.019ms | 1000 |
| Immer | 157K | 0.006ms | 0.020ms | 1000 |
| Mutative | 153K | 0.006ms | 0.020ms | 1000 |
| Immutable.js | 70K | 0.014ms | 0.038ms | 1000 |
| Seamless Immutable | 35K | 0.028ms | 0.062ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   1.5M ops/sec
🥈 Craft              ██████                                     230K ops/sec
🥉 Immutability Helper ██████                                     223K ops/sec
 Immutable.js       ███                                        94K ops/sec
 Immer              ██                                         77K ops/sec
 Mutative           ██                                         66K ops/sec
 Seamless Immutable █                                          41K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.5M | 0.001ms | 0.001ms | 1000 |
| Craft | 230K | 0.004ms | 0.015ms | 1000 |
| Immutability Helper | 223K | 0.004ms | 0.013ms | 1000 |
| Immutable.js | 94K | 0.011ms | 0.028ms | 1000 |
| Immer | 77K | 0.013ms | 0.029ms | 1000 |
| Mutative | 66K | 0.015ms | 0.036ms | 1000 |
| Seamless Immutable | 41K | 0.024ms | 0.052ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   1.9M ops/sec
🥈 Craft              █████                                      229K ops/sec
🥉 Immutability Helper ██                                         108K ops/sec
 Immutable.js       ██                                         99K ops/sec
 Immer              ██                                         90K ops/sec
 Mutative           ██                                         90K ops/sec
 Seamless Immutable █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.9M | 0.000ms | 0.001ms | 1000 |
| Craft | 229K | 0.004ms | 0.013ms | 1000 |
| Immutability Helper | 108K | 0.009ms | 0.020ms | 1000 |
| Immutable.js | 99K | 0.010ms | 0.024ms | 1000 |
| Immer | 90K | 0.011ms | 0.029ms | 1000 |
| Mutative | 90K | 0.011ms | 0.028ms | 1000 |
| Seamless Immutable | 36K | 0.027ms | 0.057ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   39K ops/sec
🥈 Native Spread      ███████████████████████████████████████    38K ops/sec
🥉 Immutability Helper ████████                                   8K ops/sec
 Craft              ████                                       4K ops/sec
 Immer              ██                                         2K ops/sec
 Immutable.js       █                                          972 ops/sec
 Seamless Immutable                                            454 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 39K | 0.026ms | 0.056ms | 1000 |
| Native Spread | 38K | 0.026ms | 0.066ms | 1000 |
| Immutability Helper | 8K | 0.124ms | 0.194ms | 1000 |
| Craft | 4K | 0.254ms | 0.449ms | 1000 |
| Immer | 2K | 0.667ms | 1.333ms | 1000 |
| Immutable.js | 972 | 1.029ms | 2.252ms | 1000 |
| Seamless Immutable | 454 | 2.201ms | 4.052ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   495K ops/sec
🥈 Immer              ███████                                    83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 495K | 0.002ms | 0.010ms | 1000 |
| Immer | 83K | 0.012ms | 0.029ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   118K ops/sec
🥈 Immer              ████████████████████████████               82K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 118K | 0.008ms | 0.025ms | 1000 |
| Immer | 82K | 0.012ms | 0.035ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   148K ops/sec
🥈 Immer              ████████████████                           59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 148K | 0.007ms | 0.018ms | 1000 |
| Immer | 59K | 0.017ms | 0.037ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   161K ops/sec
🥈 Immer              ██████████████                             57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 161K | 0.006ms | 0.021ms | 1000 |
| Immer | 57K | 0.017ms | 0.037ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   55K ops/sec
🥈 Mutative           ████████████████████████████               39K ops/sec
🥉 Immer              ████████                                   11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 55K | 0.018ms | 0.030ms | 1000 |
| Mutative | 39K | 0.026ms | 0.049ms | 1000 |
| Immer | 11K | 0.095ms | 0.190ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   332K ops/sec
🥈 Immer              ███████████████                            121K ops/sec
🥉 Mutative           ██████████████                             118K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 332K | 0.003ms | 0.016ms | 1000 |
| Immer | 121K | 0.008ms | 0.027ms | 1000 |
| Mutative | 118K | 0.008ms | 0.030ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   558K ops/sec
🥈 Immer              ████████                                   111K ops/sec
🥉 Mutative           ████████                                   109K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 558K | 0.002ms | 0.008ms | 1000 |
| Immer | 111K | 0.009ms | 0.029ms | 1000 |
| Mutative | 109K | 0.009ms | 0.028ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   368K ops/sec
🥈 Immer              ████████████████                           152K ops/sec
🥉 Mutative           ███████████████                            138K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 368K | 0.003ms | 0.013ms | 1000 |
| Immer | 152K | 0.007ms | 0.023ms | 1000 |
| Mutative | 138K | 0.007ms | 0.024ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   445K ops/sec
🥈 Immer              ████████████████                           180K ops/sec
🥉 Mutative           ██████████                                 108K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 445K | 0.002ms | 0.006ms | 1000 |
| Immer | 180K | 0.006ms | 0.019ms | 1000 |
| Mutative | 108K | 0.009ms | 0.027ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   115K ops/sec
🥈 Mutative           ███████████                                30K ops/sec
🥉 Immer              ████████                                   22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 115K | 0.009ms | 0.018ms | 1000 |
| Mutative | 30K | 0.033ms | 0.055ms | 1000 |
| Immer | 22K | 0.045ms | 0.080ms | 1000 |


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
- **[Craft](https://github.com/SylphxAI/craft)** (`@sylphx/craft`) v1.2.1 • 2.84 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Mutative](https://github.com/unadlib/mutative)** (`mutative`) v1.3.0 • 12.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 2.40 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 9.21 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 36.25 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`seamless-immutable`) v7.1.4 • 5.99 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

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

*Generated on 2025-11-13T15:44:29.537Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
