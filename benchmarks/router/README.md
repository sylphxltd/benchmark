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

- **⚡ Maximum Performance**: SolidJS Router - Fastest overall with 98.9/100 score
- **⚖️ Best Balance**: Zen Router - Great performance (88.9/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**SolidJS Router** (Score: 98.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/solidjs-router)


**Zen Router** (Score: 88.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-router)


**Wouter** (Score: 22.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 4.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/react-router)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[SolidJS Router](#)** | 98.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solidjs-router) [📊](https://bundlephobia.com/package/solidjs-router) |
| 🥈 2 | **[Zen Router](#)** | 88.9/100 | 90% of fastest | [📦](https://www.npmjs.com/package/zen-router) [📊](https://bundlephobia.com/package/zen-router) |
| 🥉 3 | **[Wouter](#)** | 22.6/100 | 23% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](#)** | 4.4/100 | 4% of fastest | [📦](https://www.npmjs.com/package/react-router) [📊](https://bundlephobia.com/package/react-router) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[SolidJS Router](#)** | **98.9** | N/A | State management solution... | General purpose... |
| **[Zen Router](#)** | **88.9** | **1.57 KB** | State management solution... | General purpose... |
| **[Wouter](#)** | **22.6** | **2.37 KB** | State management solution... | General purpose... |
| **[React Router](#)** | **4.4** | **26.34 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   492K ops/sec
🥈 Wouter             ████████████████████████                   291K ops/sec
🥉 Zen Router         █████████████████                          213K ops/sec
 React Router       ███                                        34K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 492K | 0.002ms | 0.005ms | 1000 |
| Wouter | 291K | 0.003ms | 0.013ms | 1000 |
| Zen Router | 213K | 0.005ms | 0.004ms | 1000 |
| React Router | 34K | 0.030ms | 0.086ms | 1000 |

#### Static Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   523K ops/sec
🥈 Zen Router         █████████████████████████████████████      488K ops/sec
🥉 Wouter             ██████████████                             190K ops/sec
 React Router       █                                          18K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 523K | 0.002ms | 0.011ms | 1000 |
| Zen Router | 488K | 0.002ms | 0.019ms | 1000 |
| Wouter | 190K | 0.005ms | 0.026ms | 1000 |
| React Router | 18K | 0.057ms | 0.106ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 Zen Router         ████████████████████████████████████████   955K ops/sec
🥈 SolidJS Router     █████████████████████████████████████      882K ops/sec
🥉 Wouter             ███████                                    165K ops/sec
 React Router       █                                          33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 955K | 0.001ms | 0.005ms | 1000 |
| SolidJS Router | 882K | 0.001ms | 0.005ms | 1000 |
| Wouter | 165K | 0.006ms | 0.025ms | 1000 |
| React Router | 33K | 0.030ms | 0.073ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   386K ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    377K ops/sec
🥉 Wouter             ██████████████████                         172K ops/sec
 React Router       █████                                      45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 386K | 0.003ms | 0.014ms | 1000 |
| SolidJS Router | 377K | 0.003ms | 0.012ms | 1000 |
| Wouter | 172K | 0.006ms | 0.020ms | 1000 |
| React Router | 45K | 0.022ms | 0.059ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   880K ops/sec
🥈 Zen Router         ████████████████████████████████████████   878K ops/sec
🥉 Wouter             ███████                                    159K ops/sec
 React Router       ██                                         38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 880K | 0.001ms | 0.002ms | 1000 |
| Zen Router | 878K | 0.001ms | 0.002ms | 1000 |
| Wouter | 159K | 0.006ms | 0.013ms | 1000 |
| React Router | 38K | 0.026ms | 0.062ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 SolidJS Router     ████████████████████████████████████████   995K ops/sec
🥈 Zen Router         ███████████████████████████████████████    970K ops/sec
🥉 Wouter             ███████                                    168K ops/sec
 React Router       ██                                         43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 995K | 0.001ms | 0.002ms | 1000 |
| Zen Router | 970K | 0.001ms | 0.003ms | 1000 |
| Wouter | 168K | 0.006ms | 0.015ms | 1000 |
| React Router | 43K | 0.023ms | 0.049ms | 1000 |

#### Wildcard Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   1.1M ops/sec
🥈 Zen Router         ███████████████████████████████████████    1.0M ops/sec
🥉 Wouter             ██████                                     148K ops/sec
 React Router       █                                          28K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.1M | 0.001ms | 0.003ms | 1000 |
| Zen Router | 1.0M | 0.001ms | 0.003ms | 1000 |
| Wouter | 148K | 0.007ms | 0.022ms | 1000 |
| React Router | 28K | 0.036ms | 0.083ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 SolidJS Router     ████████████████████████████████████████   356K ops/sec
🥈 Zen Router         █████████████████████████████████████      331K ops/sec
🥉 Wouter             ████                                       40K ops/sec
 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 356K | 0.003ms | 0.010ms | 1000 |
| Zen Router | 331K | 0.003ms | 0.015ms | 1000 |
| Wouter | 40K | 0.025ms | 0.050ms | 1000 |
| React Router | 7K | 0.141ms | 0.186ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 SolidJS Router     ████████████████████████████████████████   877K ops/sec
🥈 Zen Router         ███████████████████████████████████████    850K ops/sec
🥉 Wouter             ████████                                   170K ops/sec
 React Router       ██                                         53K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 877K | 0.001ms | 0.004ms | 1000 |
| Zen Router | 850K | 0.001ms | 0.005ms | 1000 |
| Wouter | 170K | 0.006ms | 0.014ms | 1000 |
| React Router | 53K | 0.019ms | 0.034ms | 1000 |


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

- **[SolidJS Router](#)** (`@solidjs/router`) v0.15.9 - [📦 npm](https://www.npmjs.com/package/solidjs-router) • [📊 bundle size](https://bundlephobia.com/package/solidjs-router)
- **[Zen Router](#)** (`@sylphx/zen-router`) v1.0.2 • 1.57 KB gzip - [📦 npm](https://www.npmjs.com/package/zen-router) • [📊 bundle size](https://bundlephobia.com/package/zen-router)
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

*Generated on 2025-11-13T12:09:19.358Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
