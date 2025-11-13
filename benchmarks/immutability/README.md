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

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 96.2/100 score
- **⚖️ Best Balance**: Craft - Great performance (45.7/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 96.2/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 45.7/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/craft)


**Immutability Helper** (Score: 22.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 17.3/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 17.2/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 96.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](#)** | 45.7/100 | 48% of fastest | [📦](https://www.npmjs.com/package/craft) [📊](https://bundlephobia.com/package/craft) |
| 🥉 3 | **[Immutability Helper](#)** | 22.9/100 | 24% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](#)** | 17.3/100 | 18% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](#)** | 17.2/100 | 18% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](#)** | 8.4/100 | 9% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](#)** | 3.6/100 | 4% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **96.2** | N/A | State management solution... | General purpose... |
| **[Craft](#)** | **45.7** | **2.76 KB** | State management solution... | General purpose... |
| **[Immutability Helper](#)** | **22.9** | **1.65 KB** | State management solution... | General purpose... |
| **[Mutative](#)** | **17.3** | **7.16 KB** | State management solution... | General purpose... |
| **[Immer](#)** | **17.2** | **4.70 KB** | State management solution... | General purpose... |
| **[Immutable.js](#)** | **8.4** | **17.74 KB** | State management solution... | General purpose... |
| **[Seamless Immutable](#)** | **3.6** | **2.71 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   683K ops/sec
🥈 Immutability Helper █████████████                              220K ops/sec
🥉 Craft              ████████████                               197K ops/sec
 Immutable.js       █████████                                  156K ops/sec
 Seamless Immutable ███████                                    115K ops/sec
 Immer              ███████                                    114K ops/sec
 Mutative           █████                                      93K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 683K | 0.001ms | 0.009ms | 1000 |
| Immutability Helper | 220K | 0.005ms | 0.019ms | 1000 |
| Craft | 197K | 0.005ms | 0.022ms | 1000 |
| Immutable.js | 156K | 0.006ms | 0.025ms | 1000 |
| Seamless Immutable | 115K | 0.009ms | 0.029ms | 1000 |
| Immer | 114K | 0.009ms | 0.030ms | 1000 |
| Mutative | 93K | 0.011ms | 0.035ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   1.5M ops/sec
🥈 Immutability Helper ███████                                    257K ops/sec
🥉 Craft              █████                                      178K ops/sec
 Mutative           ██                                         87K ops/sec
 Immer              ██                                         83K ops/sec
 Immutable.js       ██                                         82K ops/sec
 Seamless Immutable █                                          54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.5M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 257K | 0.004ms | 0.015ms | 1000 |
| Craft | 178K | 0.006ms | 0.023ms | 1000 |
| Mutative | 87K | 0.011ms | 0.039ms | 1000 |
| Immer | 83K | 0.012ms | 0.037ms | 1000 |
| Immutable.js | 82K | 0.012ms | 0.031ms | 1000 |
| Seamless Immutable | 54K | 0.018ms | 0.046ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   1.9M ops/sec
🥈 Immutability Helper ████████                                   383K ops/sec
🥉 Immutable.js       █████                                      253K ops/sec
 Craft              ████                                       209K ops/sec
 Immer              ██                                         107K ops/sec
 Mutative           ██                                         92K ops/sec
 Seamless Immutable █                                          39K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.9M | 0.001ms | 0.003ms | 1000 |
| Immutability Helper | 383K | 0.003ms | 0.018ms | 1000 |
| Immutable.js | 253K | 0.004ms | 0.019ms | 1000 |
| Craft | 209K | 0.005ms | 0.021ms | 1000 |
| Immer | 107K | 0.009ms | 0.032ms | 1000 |
| Mutative | 92K | 0.011ms | 0.033ms | 1000 |
| Seamless Immutable | 39K | 0.026ms | 0.053ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   944K ops/sec
🥈 Immutability Helper ████████████████████                       467K ops/sec
🥉 Craft              █████████                                  216K ops/sec
 Immutable.js       ██████                                     135K ops/sec
 Immer              ████                                       93K ops/sec
 Mutative           ████                                       86K ops/sec
 Seamless Immutable ██                                         57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 944K | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 467K | 0.002ms | 0.010ms | 1000 |
| Craft | 216K | 0.005ms | 0.019ms | 1000 |
| Immutable.js | 135K | 0.007ms | 0.030ms | 1000 |
| Immer | 93K | 0.011ms | 0.033ms | 1000 |
| Mutative | 86K | 0.012ms | 0.041ms | 1000 |
| Seamless Immutable | 57K | 0.017ms | 0.038ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   1.5M ops/sec
🥈 Immutability Helper ██████████                                 363K ops/sec
🥉 Craft              ██████                                     233K ops/sec
 Immer              ████                                       135K ops/sec
 Mutative           ███                                        113K ops/sec
 Immutable.js       ██                                         82K ops/sec
 Seamless Immutable █                                          37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.5M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 363K | 0.003ms | 0.008ms | 1000 |
| Craft | 233K | 0.004ms | 0.015ms | 1000 |
| Immer | 135K | 0.007ms | 0.027ms | 1000 |
| Mutative | 113K | 0.009ms | 0.032ms | 1000 |
| Immutable.js | 82K | 0.012ms | 0.045ms | 1000 |
| Seamless Immutable | 37K | 0.027ms | 0.065ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   741K ops/sec
🥈 Craft              ████████████                               217K ops/sec
🥉 Immutability Helper █████████                                  174K ops/sec
 Immer              ██████                                     104K ops/sec
 Immutable.js       █████                                      98K ops/sec
 Mutative           ████                                       71K ops/sec
 Seamless Immutable ██                                         40K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 741K | 0.001ms | 0.002ms | 1000 |
| Craft | 217K | 0.005ms | 0.014ms | 1000 |
| Immutability Helper | 174K | 0.006ms | 0.016ms | 1000 |
| Immer | 104K | 0.010ms | 0.020ms | 1000 |
| Immutable.js | 98K | 0.010ms | 0.029ms | 1000 |
| Mutative | 71K | 0.014ms | 0.046ms | 1000 |
| Seamless Immutable | 40K | 0.025ms | 0.058ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   1.6M ops/sec
🥈 Craft              █████                                      210K ops/sec
🥉 Immutability Helper ███                                        133K ops/sec
 Immer              ███                                        117K ops/sec
 Mutative           ██                                         82K ops/sec
 Immutable.js       ██                                         76K ops/sec
 Seamless Immutable █                                          33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.6M | 0.001ms | 0.002ms | 1000 |
| Craft | 210K | 0.005ms | 0.013ms | 1000 |
| Immutability Helper | 133K | 0.008ms | 0.027ms | 1000 |
| Immer | 117K | 0.009ms | 0.022ms | 1000 |
| Mutative | 82K | 0.012ms | 0.037ms | 1000 |
| Immutable.js | 76K | 0.013ms | 0.036ms | 1000 |
| Seamless Immutable | 33K | 0.030ms | 0.069ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   37K ops/sec
🥈 Native Spread      █████████████████████████████              27K ops/sec
🥉 Immutability Helper ████████████                               11K ops/sec
 Craft              ██████                                     5K ops/sec
 Immer              ██                                         2K ops/sec
 Immutable.js       █                                          1K ops/sec
 Seamless Immutable █                                          464 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 37K | 0.027ms | 0.094ms | 1000 |
| Native Spread | 27K | 0.037ms | 0.077ms | 1000 |
| Immutability Helper | 11K | 0.093ms | 0.178ms | 1000 |
| Craft | 5K | 0.183ms | 0.359ms | 1000 |
| Immer | 2K | 0.579ms | 1.251ms | 1000 |
| Immutable.js | 1K | 0.883ms | 1.689ms | 1000 |
| Seamless Immutable | 464 | 2.154ms | 3.579ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   359K ops/sec
🥈 Immer              ████████                                   72K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 359K | 0.003ms | 0.011ms | 1000 |
| Immer | 72K | 0.014ms | 0.041ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   120K ops/sec
🥈 Immer              ███████████████████████                    69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 120K | 0.008ms | 0.029ms | 1000 |
| Immer | 69K | 0.015ms | 0.050ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   143K ops/sec
🥈 Immer              █████████████████                          61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 143K | 0.007ms | 0.020ms | 1000 |
| Immer | 61K | 0.017ms | 0.043ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   144K ops/sec
🥈 Immer              █████████████                              48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 144K | 0.007ms | 0.029ms | 1000 |
| Immer | 48K | 0.021ms | 0.039ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   54K ops/sec
🥈 Mutative           █████████████████████████                  34K ops/sec
🥉 Immer              ████████                                   10K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 54K | 0.018ms | 0.037ms | 1000 |
| Mutative | 34K | 0.029ms | 0.058ms | 1000 |
| Immer | 10K | 0.096ms | 0.188ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   272K ops/sec
🥈 Mutative           █████████████                              90K ops/sec
🥉 Immer              ████████████                               81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 272K | 0.004ms | 0.016ms | 1000 |
| Mutative | 90K | 0.011ms | 0.034ms | 1000 |
| Immer | 81K | 0.012ms | 0.042ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   370K ops/sec
🥈 Immer              █████████                                  86K ops/sec
🥉 Mutative           █████████                                  80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 370K | 0.003ms | 0.014ms | 1000 |
| Immer | 86K | 0.012ms | 0.039ms | 1000 |
| Mutative | 80K | 0.012ms | 0.037ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   246K ops/sec
🥈 Immer              ███████████████████                        115K ops/sec
🥉 Mutative           ███████████████                            92K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 246K | 0.004ms | 0.019ms | 1000 |
| Immer | 115K | 0.009ms | 0.035ms | 1000 |
| Mutative | 92K | 0.011ms | 0.035ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   442K ops/sec
🥈 Immer              █████████████                              140K ops/sec
🥉 Mutative           ███████████                                118K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 442K | 0.002ms | 0.007ms | 1000 |
| Immer | 140K | 0.007ms | 0.020ms | 1000 |
| Mutative | 118K | 0.008ms | 0.024ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   79K ops/sec
🥈 Mutative           ███████████████                            30K ops/sec
🥉 Immer              ██████████                                 19K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 79K | 0.013ms | 0.040ms | 1000 |
| Mutative | 30K | 0.034ms | 0.070ms | 1000 |
| Immer | 19K | 0.053ms | 0.129ms | 1000 |


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
- **[Craft](#)** (`@sylphx/craft`) v1.2.1 • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/craft) • [📊 bundle size](https://bundlephobia.com/package/craft)
- **[Immutability Helper](#)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Mutative](#)** (`mutative`) v1.3.0 • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](#)** (`immer`) v10.2.0 • 4.70 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Immutable.js](#)** (`immutable`) v5.1.4 • 17.74 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](#)** (`seamless-immutable`) v7.1.4 • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

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

*Generated on 2025-11-13T11:47:02.408Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
