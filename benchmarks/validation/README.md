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
- **⚖️ Best Balance**: Yup - Great performance (13.5/100) with good ecosystem
- **🎯 Popular Choice**: Joi - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Superstruct** (Score: 100.0/100)
- A simple and composable way to validate data in JavaScript (and TypeScript).
- **Best for**: General purpose state management
- [GitHub](git://github.com/ianstormtaylor/superstruct) • [npm](https://www.npmjs.com/package/superstruct)


**Yup** (Score: 13.5/100)
- Dead simple Object schema validation
- **Best for**: General purpose state management
- [GitHub](https://github.com/jquense/yup) • [npm](https://www.npmjs.com/package/yup)


**Joi** (Score: 12.7/100)
- Object schema validation
- **Best for**: General purpose state management
- [GitHub](git://github.com/hapijs/joi) • [npm](https://www.npmjs.com/package/joi)


**Zod** (Score: 8.7/100)
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
| 🥈 2 | **[Yup](https://github.com/jquense/yup)** | 13.5/100 | 13% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
| 🥉 3 | **[Joi](git://github.com/hapijs/joi)** | 12.7/100 | 13% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 8.7/100 | 9% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | **100.0** | **3.44 KB** | A simple and composable way to validate data in Ja... | General purpose... |
| **[Yup](https://github.com/jquense/yup)** | **13.5** | **13.33 KB** | Dead simple Object schema validation... | General purpose... |
| **[Joi](git://github.com/hapijs/joi)** | **12.7** | **52.64 KB** | Object schema validation... | General purpose... |
| **[Zod](https://github.com/colinhacks/zod)** | **8.7** | **52.88 KB** | TypeScript-first schema declaration and validation... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-schema-creation

#### Create Complex Schema

```
🥇 Superstruct        ████████████████████████████████████████   747K ops/sec
🥈 Yup                █                                          20K ops/sec
🥉 Zod                █                                          15K ops/sec
 Joi                █                                          11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 747K | 0.001ms | 0.003ms | 1000 |
| Yup | 20K | 0.057ms | 0.101ms | 1000 |
| Zod | 15K | 0.074ms | 0.138ms | 1000 |
| Joi | 11K | 0.091ms | 0.169ms | 1000 |

#### Create Simple Schema

```
🥇 Superstruct        ████████████████████████████████████████   2.0M ops/sec
🥈 Zod                ██                                         97K ops/sec
🥉 Yup                ██                                         92K ops/sec
 Joi                █                                          53K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zod | 97K | 0.011ms | 0.024ms | 1000 |
| Yup | 92K | 0.012ms | 0.024ms | 1000 |
| Joi | 53K | 0.020ms | 0.047ms | 1000 |

### 02-primitive-validation

#### Validate Email

```
🥇 Superstruct        ████████████████████████████████████████   839K ops/sec
🥈 Yup                ██████████                                 213K ops/sec
🥉 Joi                ████████                                   161K ops/sec
 Zod                ██                                         46K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 839K | 0.001ms | 0.003ms | 1000 |
| Yup | 213K | 0.005ms | 0.008ms | 1000 |
| Joi | 161K | 0.007ms | 0.019ms | 1000 |
| Zod | 46K | 0.023ms | 0.038ms | 1000 |

#### Validate Number

```
🥇 Superstruct        ████████████████████████████████████████   806K ops/sec
🥈 Yup                ███████                                    147K ops/sec
🥉 Joi                ███████                                    146K ops/sec
 Zod                ████                                       84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 806K | 0.001ms | 0.004ms | 1000 |
| Yup | 147K | 0.007ms | 0.012ms | 1000 |
| Joi | 146K | 0.007ms | 0.010ms | 1000 |
| Zod | 84K | 0.012ms | 0.032ms | 1000 |

#### Validate String

```
🥇 Superstruct        ████████████████████████████████████████   863K ops/sec
🥈 Yup                ███████                                    157K ops/sec
🥉 Joi                ██████                                     140K ops/sec
 Zod                ██                                         46K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 863K | 0.001ms | 0.003ms | 1000 |
| Yup | 157K | 0.006ms | 0.009ms | 1000 |
| Joi | 140K | 0.007ms | 0.015ms | 1000 |
| Zod | 46K | 0.023ms | 0.039ms | 1000 |

### 03-object-validation

#### Validate Array

```
🥇 Superstruct        ████████████████████████████████████████   29K ops/sec
🥈 Zod                ████████████████████████████               20K ops/sec
🥉 Joi                ████████████████████████                   17K ops/sec
 Yup                ███████████████████                        14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 29K | 0.038ms | 0.066ms | 1000 |
| Zod | 20K | 0.052ms | 0.081ms | 1000 |
| Joi | 17K | 0.061ms | 0.085ms | 1000 |
| Yup | 14K | 0.076ms | 0.128ms | 1000 |

#### Validate Flat Object

```
🥇 Superstruct        ████████████████████████████████████████   106K ops/sec
🥈 Yup                ███████                                    18K ops/sec
🥉 Joi                ██████                                     17K ops/sec
 Zod                ████                                       11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 106K | 0.010ms | 0.015ms | 1000 |
| Yup | 18K | 0.067ms | 0.124ms | 1000 |
| Joi | 17K | 0.062ms | 0.097ms | 1000 |
| Zod | 11K | 0.095ms | 0.129ms | 1000 |

#### Validate Nested Object

```
🥇 Superstruct        ████████████████████████████████████████   53K ops/sec
🥈 Yup                ██████████                                 14K ops/sec
🥉 Joi                █████████                                  12K ops/sec
 Zod                ████                                       5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 53K | 0.020ms | 0.031ms | 1000 |
| Yup | 14K | 0.080ms | 0.153ms | 1000 |
| Joi | 12K | 0.084ms | 0.130ms | 1000 |
| Zod | 5K | 0.190ms | 0.312ms | 1000 |

### 04-error-handling

#### Catch Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   117K ops/sec
🥈 Joi                ███████████                                33K ops/sec
🥉 Zod                ████████                                   24K ops/sec
 Yup                ███████                                    19K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 117K | 0.009ms | 0.021ms | 1000 |
| Joi | 33K | 0.033ms | 0.065ms | 1000 |
| Zod | 24K | 0.044ms | 0.074ms | 1000 |
| Yup | 19K | 0.060ms | 0.100ms | 1000 |

#### Multiple Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   151K ops/sec
🥈 Joi                ███                                        13K ops/sec
🥉 Zod                ██                                         9K ops/sec
 Yup                ██                                         9K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 151K | 0.007ms | 0.019ms | 1000 |
| Joi | 13K | 0.085ms | 0.159ms | 1000 |
| Zod | 9K | 0.117ms | 0.216ms | 1000 |
| Yup | 9K | 0.125ms | 0.199ms | 1000 |


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

*Generated on 2025-11-13T17:07:08.334Z*

[⬆️ Back to Top](#validation-benchmarks) • [⬅️ Main README](../../README.md)

</div>
