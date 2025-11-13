<div align="center">

# Router Benchmarks

Comprehensive performance benchmarks for React router libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-9-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Zen Router - Fastest overall with 99.7/100 score
- **⚖️ Best Balance**: SolidJS Router - Great performance (94.6/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen Router** (Score: 99.7/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-router)


**SolidJS Router** (Score: 94.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/solidjs-router)


**Wouter** (Score: 22.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 4.5/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/react-router)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](#)** | 99.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/zen-router) [📊](https://bundlephobia.com/package/zen-router) |
| 🥈 2 | **[SolidJS Router](#)** | 94.6/100 | 95% of fastest | [📦](https://www.npmjs.com/package/solidjs-router) [📊](https://bundlephobia.com/package/solidjs-router) |
| 🥉 3 | **[Wouter](#)** | 22.8/100 | 23% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](#)** | 4.5/100 | 5% of fastest | [📦](https://www.npmjs.com/package/react-router) [📊](https://bundlephobia.com/package/react-router) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen Router](#)** | **99.7** | **1.57 KB** | State management solution... | General purpose... |
| **[SolidJS Router](#)** | **94.6** | N/A | State management solution... | General purpose... |
| **[Wouter](#)** | **22.8** | **2.37 KB** | State management solution... | General purpose... |
| **[React Router](#)** | **4.5** | **26.34 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   3.1M ops/sec
🥈 SolidJS Router     ████████████████████████████████           2.5M ops/sec
🥉 Wouter             ██████████████                             1.1M ops/sec
 React Router       █                                          102K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 3.1M | 0.000ms | 0.001ms | 1000 |
| SolidJS Router | 2.5M | 0.000ms | 0.002ms | 1000 |
| Wouter | 1.1M | 0.001ms | 0.004ms | 1000 |
| React Router | 102K | 0.010ms | 0.021ms | 1000 |

#### Static Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   2.5M ops/sec
🥈 SolidJS Router     ████████████████████████████████████       2.3M ops/sec
🥉 Wouter             ███████████████████                        1.2M ops/sec
 React Router       ██                                         94K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 2.5M | 0.000ms | 0.002ms | 1000 |
| SolidJS Router | 2.3M | 0.000ms | 0.002ms | 1000 |
| Wouter | 1.2M | 0.001ms | 0.003ms | 1000 |
| React Router | 94K | 0.011ms | 0.022ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 Zen Router         ████████████████████████████████████████   2.5M ops/sec
🥈 SolidJS Router     ██████████████████████████████████████     2.4M ops/sec
🥉 Wouter             ███████████                                663K ops/sec
 React Router       ██                                         118K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 2.5M | 0.000ms | 0.001ms | 1000 |
| SolidJS Router | 2.4M | 0.000ms | 0.002ms | 1000 |
| Wouter | 663K | 0.002ms | 0.005ms | 1000 |
| React Router | 118K | 0.008ms | 0.016ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   1.9M ops/sec
🥈 SolidJS Router     ████████████████████████████████████       1.7M ops/sec
🥉 Wouter             ████████████                               557K ops/sec
 React Router       ████                                       167K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.9M | 0.001ms | 0.002ms | 1000 |
| SolidJS Router | 1.7M | 0.001ms | 0.003ms | 1000 |
| Wouter | 557K | 0.002ms | 0.004ms | 1000 |
| React Router | 167K | 0.006ms | 0.014ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   2.2M ops/sec
🥈 Zen Router         ████████████████████████████████████████   2.2M ops/sec
🥉 Wouter             ████████                                   427K ops/sec
 React Router       ██                                         137K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zen Router | 2.2M | 0.000ms | 0.001ms | 1000 |
| Wouter | 427K | 0.002ms | 0.005ms | 1000 |
| React Router | 137K | 0.007ms | 0.017ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 SolidJS Router     ████████████████████████████████████████   2.6M ops/sec
🥈 Zen Router         ████████████████████████████████████████   2.6M ops/sec
🥉 Wouter             ██████                                     404K ops/sec
 React Router       ██                                         126K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zen Router | 2.6M | 0.000ms | 0.001ms | 1000 |
| Wouter | 404K | 0.002ms | 0.006ms | 1000 |
| React Router | 126K | 0.008ms | 0.016ms | 1000 |

#### Wildcard Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   2.8M ops/sec
🥈 Zen Router         ████████████████████████████████████████   2.7M ops/sec
🥉 Wouter             ██████                                     440K ops/sec
 React Router       █                                          90K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 2.8M | 0.000ms | 0.001ms | 1000 |
| Zen Router | 2.7M | 0.000ms | 0.001ms | 1000 |
| Wouter | 440K | 0.002ms | 0.007ms | 1000 |
| React Router | 90K | 0.011ms | 0.019ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 SolidJS Router     ████████████████████████████████████████   858K ops/sec
🥈 Zen Router         ████████████████████████████████████████   852K ops/sec
🥉 Wouter             █████                                      110K ops/sec
 React Router       █                                          20K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 858K | 0.001ms | 0.003ms | 1000 |
| Zen Router | 852K | 0.001ms | 0.003ms | 1000 |
| Wouter | 110K | 0.009ms | 0.017ms | 1000 |
| React Router | 20K | 0.051ms | 0.065ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 Zen Router         ████████████████████████████████████████   2.2M ops/sec
🥈 SolidJS Router     ████████████████████████████████████████   2.2M ops/sec
🥉 Wouter             ████████                                   442K ops/sec
 React Router       ███                                        148K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 2.2M | 0.000ms | 0.001ms | 1000 |
| SolidJS Router | 2.2M | 0.000ms | 0.002ms | 1000 |
| Wouter | 442K | 0.002ms | 0.004ms | 1000 |
| React Router | 148K | 0.007ms | 0.014ms | 1000 |


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
cd benchmarks/router

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

**Total**: 9 tests × 4 libraries = 36 benchmark runs

---

## 🚀 Libraries Tested

- **[Zen Router](#)** (`@sylphx/zen-router`) v1.0.2 • 1.57 KB gzip - [📦 npm](https://www.npmjs.com/package/zen-router) • [📊 bundle size](https://bundlephobia.com/package/zen-router)
- **[SolidJS Router](#)** (`@solidjs/router`) v0.15.9 - [📦 npm](https://www.npmjs.com/package/solidjs-router) • [📊 bundle size](https://bundlephobia.com/package/solidjs-router)
- **[Wouter](#)** (`wouter`) v3.7.1 • 2.37 KB gzip - [📦 npm](https://www.npmjs.com/package/wouter) • [📊 bundle size](https://bundlephobia.com/package/wouter)
- **[React Router](#)** (`react-router-dom`) v6.30.1 • 26.34 KB gzip - [📦 npm](https://www.npmjs.com/package/react-router) • [📊 bundle size](https://bundlephobia.com/package/react-router)

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

*Generated on 2025-11-13T11:51:51.941Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
