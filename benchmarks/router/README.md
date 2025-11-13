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

- **⚡ Maximum Performance**: Zen Router - Fastest overall with 98.5/100 score
- **⚖️ Best Balance**: SolidJS Router - Great performance (97.7/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen Router** (Score: 98.5/100)
- Tiny and fast router with regex-based matching
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/zen-router) • [npm](https://www.npmjs.com/package/@sylphx/zen-router)


**SolidJS Router** (Score: 97.7/100)
- Universal router for Solid with nested routing and data APIs
- **Best for**: General purpose state management
- [GitHub](https://github.com/solidjs/solid-router) • [npm](https://www.npmjs.com/package/@solidjs/router)


**Wouter** (Score: 17.0/100)
- Minimalist-friendly ~2.1KB routing for React and Preact
- **Best for**: General purpose state management
- [GitHub](https://github.com/molefrog/wouter) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 2.7/100)
- Declarative routing for React
- **Best for**: General purpose state management
- [GitHub](https://github.com/remix-run/react-router) • [npm](https://www.npmjs.com/package/react-router-dom)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 98.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen-router) [📊](https://bundlephobia.com/package/@sylphx/zen-router) |
| 🥈 2 | **[SolidJS Router](https://github.com/solidjs/solid-router)** | 97.7/100 | 99% of fastest | [📦](https://www.npmjs.com/package/@solidjs/router) [📊](https://bundlephobia.com/package/@solidjs/router) |
| 🥉 3 | **[Wouter](https://github.com/molefrog/wouter)** | 17.0/100 | 17% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](https://github.com/remix-run/react-router)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/react-router-dom) [📊](https://bundlephobia.com/package/react-router-dom) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen Router](https://github.com/SylphxAI/zen-router)** | **98.5** | **0.95 KB** | Tiny and fast router with regex-based matching... | General purpose... |
| **[SolidJS Router](https://github.com/solidjs/solid-router)** | **97.7** | **15.68 KB** | Universal router for Solid with nested routing and... | General purpose... |
| **[Wouter](https://github.com/molefrog/wouter)** | **17.0** | **4.44 KB** | Minimalist-friendly ~2.1KB routing for React and P... | General purpose... |
| **[React Router](https://github.com/remix-run/react-router)** | **2.7** | **14.80 KB** | Declarative routing for React... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   1.2M ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    1.2M ops/sec
🥉 Wouter             █████████                                  278K ops/sec
 React Router       █                                          27K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.2M | 0.001ms | 0.002ms | 1000 |
| SolidJS Router | 1.2M | 0.001ms | 0.002ms | 1000 |
| Wouter | 278K | 0.004ms | 0.016ms | 1000 |
| React Router | 27K | 0.038ms | 0.084ms | 1000 |

#### Static Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   1.3M ops/sec
🥈 Zen Router         ███████████████████████████████████████    1.3M ops/sec
🥉 Wouter             █████████                                  300K ops/sec
 React Router       █                                          17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.3M | 0.001ms | 0.007ms | 1000 |
| Zen Router | 1.3M | 0.001ms | 0.007ms | 1000 |
| Wouter | 300K | 0.003ms | 0.018ms | 1000 |
| React Router | 17K | 0.059ms | 0.102ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 SolidJS Router     ████████████████████████████████████████   1.3M ops/sec
🥈 Zen Router         ███████████████████████████████████████    1.3M ops/sec
🥉 Wouter             ████████                                   252K ops/sec
 React Router       █                                          35K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.3M | 0.001ms | 0.003ms | 1000 |
| Zen Router | 1.3M | 0.001ms | 0.004ms | 1000 |
| Wouter | 252K | 0.004ms | 0.015ms | 1000 |
| React Router | 35K | 0.028ms | 0.067ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   989K ops/sec
🥈 SolidJS Router     █████████████████████████████████████      917K ops/sec
🥉 Wouter             █████████                                  221K ops/sec
 React Router       ██                                         54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 989K | 0.001ms | 0.005ms | 1000 |
| SolidJS Router | 917K | 0.001ms | 0.005ms | 1000 |
| Wouter | 221K | 0.004ms | 0.012ms | 1000 |
| React Router | 54K | 0.018ms | 0.053ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   1.1M ops/sec
🥈 Zen Router         ████████████████████████████████████████   1.1M ops/sec
🥉 Wouter             ██████                                     177K ops/sec
 React Router       █                                          37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.1M | 0.001ms | 0.004ms | 1000 |
| Zen Router | 1.1M | 0.001ms | 0.003ms | 1000 |
| Wouter | 177K | 0.006ms | 0.013ms | 1000 |
| React Router | 37K | 0.027ms | 0.063ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 Zen Router         ████████████████████████████████████████   1.2M ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    1.2M ops/sec
🥉 Wouter             ██████                                     169K ops/sec
 React Router       ██                                         46K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.2M | 0.001ms | 0.005ms | 1000 |
| SolidJS Router | 1.2M | 0.001ms | 0.004ms | 1000 |
| Wouter | 169K | 0.006ms | 0.016ms | 1000 |
| React Router | 46K | 0.021ms | 0.040ms | 1000 |

#### Wildcard Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   1.5M ops/sec
🥈 SolidJS Router     █████████████████████████████████████      1.3M ops/sec
🥉 Wouter             █████                                      182K ops/sec
 React Router       █                                          29K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.5M | 0.001ms | 0.002ms | 1000 |
| SolidJS Router | 1.3M | 0.001ms | 0.002ms | 1000 |
| Wouter | 182K | 0.005ms | 0.014ms | 1000 |
| React Router | 29K | 0.035ms | 0.082ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 SolidJS Router     ████████████████████████████████████████   375K ops/sec
🥈 Zen Router         █████████████████████████████████████      348K ops/sec
🥉 Wouter             █████                                      44K ops/sec
 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 375K | 0.003ms | 0.015ms | 1000 |
| Zen Router | 348K | 0.003ms | 0.015ms | 1000 |
| Wouter | 44K | 0.023ms | 0.045ms | 1000 |
| React Router | 7K | 0.140ms | 0.185ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 SolidJS Router     ████████████████████████████████████████   1.2M ops/sec
🥈 Zen Router         ████████████████████████████████████████   1.2M ops/sec
🥉 Wouter             ██████                                     191K ops/sec
 React Router       ██                                         51K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zen Router | 1.2M | 0.001ms | 0.002ms | 1000 |
| Wouter | 191K | 0.005ms | 0.010ms | 1000 |
| React Router | 51K | 0.020ms | 0.038ms | 1000 |


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

- **[Zen Router](https://github.com/SylphxAI/zen-router)** (`@sylphx/zen-router`) v1.0.2 • 0.95 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen-router) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen-router)
- **[SolidJS Router](https://github.com/solidjs/solid-router)** (`@solidjs/router`) v0.15.9 • 15.68 KB gzip - [📦 npm](https://www.npmjs.com/package/@solidjs/router) • [📊 bundle size](https://bundlephobia.com/package/@solidjs/router)
- **[Wouter](https://github.com/molefrog/wouter)** (`wouter`) v3.7.1 • 4.44 KB gzip - [📦 npm](https://www.npmjs.com/package/wouter) • [📊 bundle size](https://bundlephobia.com/package/wouter)
- **[React Router](https://github.com/remix-run/react-router)** (`react-router-dom`) v6.30.1 • 14.80 KB gzip - [📦 npm](https://www.npmjs.com/package/react-router-dom) • [📊 bundle size](https://bundlephobia.com/package/react-router-dom)

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

*Generated on 2025-11-13T15:44:29.602Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
