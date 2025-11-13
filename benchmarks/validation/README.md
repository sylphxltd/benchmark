<div align="center">

# Validation Benchmarks

Comprehensive performance benchmarks for React validation libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-10-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Superstruct - Fastest overall with 100.0/100 score
- **⚖️ Best Balance**: Yup - Great performance (17.9/100) with good ecosystem
- **🎯 Popular Choice**: Joi - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Superstruct** (Score: 100.0/100)
- A simple and composable way to validate data in JavaScript (and TypeScript).
- **Best for**: General purpose state management
- [GitHub](git://github.com/ianstormtaylor/superstruct) • [npm](https://www.npmjs.com/package/superstruct)


**Yup** (Score: 17.9/100)
- Dead simple Object schema validation
- **Best for**: General purpose state management
- [GitHub](https://github.com/jquense/yup) • [npm](https://www.npmjs.com/package/yup)


**Joi** (Score: 14.6/100)
- Object schema validation
- **Best for**: General purpose state management
- [GitHub](git://github.com/hapijs/joi) • [npm](https://www.npmjs.com/package/joi)


**Zod** (Score: 11.7/100)
- TypeScript-first schema declaration and validation library with static type inference
- **Best for**: General purpose state management
- [GitHub](https://github.com/colinhacks/zod) • [npm](https://www.npmjs.com/package/zod)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 10 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/superstruct) [📊](https://bundlephobia.com/package/superstruct) |
| 🥈 2 | **[Yup](https://github.com/jquense/yup)** | 17.9/100 | 18% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
| 🥉 3 | **[Joi](git://github.com/hapijs/joi)** | 14.6/100 | 15% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 11.7/100 | 12% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | **100.0** | **3.44 KB** | A simple and composable way to validate data in Ja... | General purpose... |
| **[Yup](https://github.com/jquense/yup)** | **17.9** | **13.33 KB** | Dead simple Object schema validation... | General purpose... |
| **[Joi](git://github.com/hapijs/joi)** | **14.6** | **52.64 KB** | Object schema validation... | General purpose... |
| **[Zod](https://github.com/colinhacks/zod)** | **11.7** | **52.88 KB** | TypeScript-first schema declaration and validation... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-schema-creation

#### Create Complex Schema

```
🥇 Superstruct        ████████████████████████████████████████   231K ops/sec
🥈 Yup                ███                                        15K ops/sec
🥉 Zod                ██                                         12K ops/sec
 Joi                █                                          9K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 231K | 0.004ms | 0.016ms | 1000 |
| Yup | 15K | 0.066ms | 0.125ms | 1000 |
| Zod | 12K | 0.081ms | 0.214ms | 1000 |
| Joi | 9K | 0.116ms | 0.256ms | 1000 |

#### Create Simple Schema

```
🥇 Superstruct        ████████████████████████████████████████   632K ops/sec
🥈 Zod                ██                                         38K ops/sec
🥉 Yup                ██                                         35K ops/sec
 Joi                ██                                         24K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 632K | 0.001ms | 0.010ms | 1000 |
| Zod | 38K | 0.026ms | 0.084ms | 1000 |
| Yup | 35K | 0.029ms | 0.083ms | 1000 |
| Joi | 24K | 0.041ms | 0.106ms | 1000 |

### 02-primitive-validation

#### Validate Email

```
🥇 Superstruct        ████████████████████████████████████████   455K ops/sec
🥈 Yup                ███████████                                126K ops/sec
🥉 Joi                ███████                                    77K ops/sec
 Zod                ███                                        31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 455K | 0.002ms | 0.007ms | 1000 |
| Yup | 126K | 0.008ms | 0.022ms | 1000 |
| Joi | 77K | 0.013ms | 0.040ms | 1000 |
| Zod | 31K | 0.032ms | 0.073ms | 1000 |

#### Validate Number

```
🥇 Superstruct        ████████████████████████████████████████   312K ops/sec
🥈 Joi                ██████████                                 75K ops/sec
🥉 Yup                █████████                                  71K ops/sec
 Zod                ███████                                    54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 312K | 0.003ms | 0.011ms | 1000 |
| Joi | 75K | 0.013ms | 0.045ms | 1000 |
| Yup | 71K | 0.014ms | 0.049ms | 1000 |
| Zod | 54K | 0.018ms | 0.053ms | 1000 |

#### Validate String

```
🥇 Superstruct        ████████████████████████████████████████   308K ops/sec
🥈 Yup                ██████████                                 77K ops/sec
🥉 Joi                ████████                                   64K ops/sec
 Zod                ████                                       34K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 308K | 0.003ms | 0.017ms | 1000 |
| Yup | 77K | 0.013ms | 0.042ms | 1000 |
| Joi | 64K | 0.016ms | 0.052ms | 1000 |
| Zod | 34K | 0.029ms | 0.079ms | 1000 |

### 03-object-validation

#### Validate Array

```
🥇 Superstruct        ████████████████████████████████████████   34K ops/sec
🥈 Zod                ███████████████████                        16K ops/sec
🥉 Joi                ██████████████                             12K ops/sec
 Yup                ██████████████                             12K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 34K | 0.029ms | 0.069ms | 1000 |
| Zod | 16K | 0.061ms | 0.110ms | 1000 |
| Joi | 12K | 0.081ms | 0.200ms | 1000 |
| Yup | 12K | 0.085ms | 0.172ms | 1000 |

#### Validate Flat Object

```
🥇 Superstruct        ████████████████████████████████████████   47K ops/sec
🥈 Yup                ████████████                               15K ops/sec
🥉 Joi                ██████████                                 12K ops/sec
 Zod                ████████                                   9K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 47K | 0.021ms | 0.049ms | 1000 |
| Yup | 15K | 0.068ms | 0.156ms | 1000 |
| Joi | 12K | 0.082ms | 0.157ms | 1000 |
| Zod | 9K | 0.106ms | 0.221ms | 1000 |

#### Validate Nested Object

```
🥇 Superstruct        ████████████████████████████████████████   42K ops/sec
🥈 Yup                ████████████                               13K ops/sec
🥉 Joi                ██████████                                 10K ops/sec
 Zod                █████                                      5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 42K | 0.024ms | 0.050ms | 1000 |
| Yup | 13K | 0.078ms | 0.163ms | 1000 |
| Joi | 10K | 0.098ms | 0.198ms | 1000 |
| Zod | 5K | 0.188ms | 0.296ms | 1000 |

### 04-error-handling

#### Catch Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   97K ops/sec
🥈 Yup                ██████████                                 25K ops/sec
🥉 Joi                █████████                                  21K ops/sec
 Zod                ███████                                    17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 97K | 0.010ms | 0.026ms | 1000 |
| Yup | 25K | 0.039ms | 0.074ms | 1000 |
| Joi | 21K | 0.046ms | 0.097ms | 1000 |
| Zod | 17K | 0.058ms | 0.123ms | 1000 |

#### Multiple Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   152K ops/sec
🥈 Joi                ███                                        11K ops/sec
🥉 Yup                ███                                        11K ops/sec
 Zod                ██                                         9K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 152K | 0.007ms | 0.024ms | 1000 |
| Joi | 11K | 0.087ms | 0.183ms | 1000 |
| Yup | 11K | 0.091ms | 0.187ms | 1000 |
| Zod | 9K | 0.117ms | 0.181ms | 1000 |


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
cd benchmarks/validation

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

**Total**: 10 tests × 4 libraries = 40 benchmark runs

---

## 🚀 Libraries Tested

- **[Superstruct](git://github.com/ianstormtaylor/superstruct)** (`superstruct`) v2.0.2 • 3.44 KB gzip - [📦 npm](https://www.npmjs.com/package/superstruct) • [📊 bundle size](https://bundlephobia.com/package/superstruct)
- **[Yup](https://github.com/jquense/yup)** (`yup`) v1.7.1 • 13.33 KB gzip - [📦 npm](https://www.npmjs.com/package/yup) • [📊 bundle size](https://bundlephobia.com/package/yup)
- **[Joi](git://github.com/hapijs/joi)** (`joi`) v18.0.1 • 52.64 KB gzip - [📦 npm](https://www.npmjs.com/package/joi) • [📊 bundle size](https://bundlephobia.com/package/joi)
- **[Zod](https://github.com/colinhacks/zod)** (`zod`) v4.1.12 • 52.88 KB gzip - [📦 npm](https://www.npmjs.com/package/zod) • [📊 bundle size](https://bundlephobia.com/package/zod)

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

*Generated on 2025-11-13T16:13:41.835Z*

[⬆️ Back to Top](#validation-benchmarks) • [⬅️ Main README](../../README.md)

</div>
