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
- **⚖️ Best Balance**: Yup - Great performance (17.0/100) with good ecosystem
- **🎯 Popular Choice**: Joi - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Superstruct** (Score: 100.0/100)
- A simple and composable way to validate data in JavaScript (and TypeScript).
- **Best for**: General purpose state management
- [GitHub](git://github.com/ianstormtaylor/superstruct) • [npm](https://www.npmjs.com/package/superstruct)


**Yup** (Score: 17.0/100)
- Dead simple Object schema validation
- **Best for**: General purpose state management
- [GitHub](https://github.com/jquense/yup) • [npm](https://www.npmjs.com/package/yup)


**Joi** (Score: 12.7/100)
- Object schema validation
- **Best for**: General purpose state management
- [GitHub](git://github.com/hapijs/joi) • [npm](https://www.npmjs.com/package/joi)


**Zod** (Score: 10.5/100)
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
| 🥈 2 | **[Yup](https://github.com/jquense/yup)** | 17.0/100 | 17% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
| 🥉 3 | **[Joi](git://github.com/hapijs/joi)** | 12.7/100 | 13% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 10.5/100 | 11% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | **100.0** | **3.44 KB** | A simple and composable way to validate data in Ja... | General purpose... |
| **[Yup](https://github.com/jquense/yup)** | **17.0** | **13.33 KB** | Dead simple Object schema validation... | General purpose... |
| **[Joi](git://github.com/hapijs/joi)** | **12.7** | **52.64 KB** | Object schema validation... | General purpose... |
| **[Zod](https://github.com/colinhacks/zod)** | **10.5** | **52.88 KB** | TypeScript-first schema declaration and validation... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-schema-creation

#### Create Complex Schema

```
🥇 Superstruct        ████████████████████████████████████████   266K ops/sec
🥈 Yup                ██                                         15K ops/sec
🥉 Zod                ██                                         12K ops/sec
 Joi                █                                          8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 266K | 0.004ms | 0.013ms | 1000 |
| Yup | 15K | 0.065ms | 0.114ms | 1000 |
| Zod | 12K | 0.082ms | 0.214ms | 1000 |
| Joi | 8K | 0.118ms | 0.299ms | 1000 |

#### Create Simple Schema

```
🥇 Superstruct        ████████████████████████████████████████   907K ops/sec
🥈 Zod                ██                                         37K ops/sec
🥉 Yup                ██                                         36K ops/sec
 Joi                █                                          28K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 907K | 0.001ms | 0.005ms | 1000 |
| Zod | 37K | 0.027ms | 0.080ms | 1000 |
| Yup | 36K | 0.028ms | 0.085ms | 1000 |
| Joi | 28K | 0.036ms | 0.098ms | 1000 |

### 02-primitive-validation

#### Validate Email

```
🥇 Superstruct        ████████████████████████████████████████   525K ops/sec
🥈 Yup                ███████████                                139K ops/sec
🥉 Joi                ██████                                     76K ops/sec
 Zod                ██                                         28K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 525K | 0.002ms | 0.008ms | 1000 |
| Yup | 139K | 0.007ms | 0.026ms | 1000 |
| Joi | 76K | 0.013ms | 0.038ms | 1000 |
| Zod | 28K | 0.036ms | 0.072ms | 1000 |

#### Validate Number

```
🥇 Superstruct        ████████████████████████████████████████   322K ops/sec
🥈 Yup                ███████████                                89K ops/sec
🥉 Zod                ████████                                   64K ops/sec
 Joi                ████████                                   63K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 322K | 0.003ms | 0.011ms | 1000 |
| Yup | 89K | 0.011ms | 0.037ms | 1000 |
| Zod | 64K | 0.016ms | 0.038ms | 1000 |
| Joi | 63K | 0.016ms | 0.043ms | 1000 |

#### Validate String

```
🥇 Superstruct        ████████████████████████████████████████   306K ops/sec
🥈 Yup                █████████                                  65K ops/sec
🥉 Joi                █████                                      41K ops/sec
 Zod                █████                                      37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 306K | 0.003ms | 0.018ms | 1000 |
| Yup | 65K | 0.015ms | 0.039ms | 1000 |
| Joi | 41K | 0.024ms | 0.054ms | 1000 |
| Zod | 37K | 0.027ms | 0.064ms | 1000 |

### 03-object-validation

#### Validate Array

```
🥇 Superstruct        ████████████████████████████████████████   37K ops/sec
🥈 Zod                █████████████████                          15K ops/sec
🥉 Yup                █████████████                              12K ops/sec
 Joi                █████████████                              12K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 37K | 0.027ms | 0.064ms | 1000 |
| Zod | 15K | 0.065ms | 0.131ms | 1000 |
| Yup | 12K | 0.081ms | 0.161ms | 1000 |
| Joi | 12K | 0.082ms | 0.191ms | 1000 |

#### Validate Flat Object

```
🥇 Superstruct        ████████████████████████████████████████   56K ops/sec
🥈 Yup                ████████████                               16K ops/sec
🥉 Joi                █████████                                  13K ops/sec
 Zod                ██████                                     8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 56K | 0.018ms | 0.050ms | 1000 |
| Yup | 16K | 0.061ms | 0.132ms | 1000 |
| Joi | 13K | 0.077ms | 0.153ms | 1000 |
| Zod | 8K | 0.123ms | 0.257ms | 1000 |

#### Validate Nested Object

```
🥇 Superstruct        ████████████████████████████████████████   37K ops/sec
🥈 Yup                ██████████████                             13K ops/sec
🥉 Joi                ██████████                                 9K ops/sec
 Zod                ██████                                     5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 37K | 0.027ms | 0.057ms | 1000 |
| Yup | 13K | 0.076ms | 0.180ms | 1000 |
| Joi | 9K | 0.114ms | 0.227ms | 1000 |
| Zod | 5K | 0.185ms | 0.304ms | 1000 |

### 04-error-handling

#### Catch Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   91K ops/sec
🥈 Yup                ██████████                                 22K ops/sec
🥉 Joi                █████████                                  20K ops/sec
 Zod                ███████                                    16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 91K | 0.011ms | 0.033ms | 1000 |
| Yup | 22K | 0.045ms | 0.107ms | 1000 |
| Joi | 20K | 0.051ms | 0.112ms | 1000 |
| Zod | 16K | 0.064ms | 0.133ms | 1000 |

#### Multiple Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   162K ops/sec
🥈 Joi                ███                                        12K ops/sec
🥉 Yup                ███                                        11K ops/sec
 Zod                ██                                         8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 162K | 0.006ms | 0.024ms | 1000 |
| Joi | 12K | 0.083ms | 0.176ms | 1000 |
| Yup | 11K | 0.092ms | 0.191ms | 1000 |
| Zod | 8K | 0.131ms | 0.264ms | 1000 |


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

*Generated on 2025-11-13T15:44:29.738Z*

[⬆️ Back to Top](#validation-benchmarks) • [⬅️ Main README](../../README.md)

</div>
