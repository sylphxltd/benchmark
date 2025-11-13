<div align="center">

# Router Benchmarks

Comprehensive performance benchmarks for React router libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-3-green?style=flat-square)](#-libraries-tested)
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

- **⚡ Maximum Performance**: Zen Router - Fastest overall with 100.0/100 score
- **⚖️ Best Balance**: Wouter - Great performance (22.5/100) with good ecosystem
- **🎯 Popular Choice**: React Router - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen Router** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-router)


**Wouter** (Score: 22.5/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 4.1/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/react-router)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](#)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/zen-router) [📊](https://bundlephobia.com/package/zen-router) |
| 🥈 2 | **[Wouter](#)** | 22.5/100 | 22% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
| 🥉 3 | **[React Router](#)** | 4.1/100 | 4% of fastest | [📦](https://www.npmjs.com/package/react-router) [📊](https://bundlephobia.com/package/react-router) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen Router](#)** | **100.0** | **1.57 KB** | State management solution... | General purpose... |
| **[Wouter](#)** | **22.5** | **2.37 KB** | State management solution... | General purpose... |
| **[React Router](#)** | **4.1** | **26.34 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   741K ops/sec
🥈 Wouter             ███████████████████                        353K ops/sec
🥉 React Router       ██                                         35K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 741K | 0.001ms | 0.003ms | 1000 |
| Wouter | 353K | 0.003ms | 0.011ms | 1000 |
| React Router | 35K | 0.028ms | 0.064ms | 1000 |

#### Static Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   793K ops/sec
🥈 Wouter             ████████████                               246K ops/sec
🥉 React Router       █                                          22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 793K | 0.001ms | 0.007ms | 1000 |
| Wouter | 246K | 0.004ms | 0.020ms | 1000 |
| React Router | 22K | 0.046ms | 0.120ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 Zen Router         ████████████████████████████████████████   449K ops/sec
🥈 Wouter             ████████████                               135K ops/sec
🥉 React Router       ███                                        32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 449K | 0.002ms | 0.008ms | 1000 |
| Wouter | 135K | 0.007ms | 0.029ms | 1000 |
| React Router | 32K | 0.031ms | 0.071ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   714K ops/sec
🥈 Wouter             ███████████                                195K ops/sec
🥉 React Router       ██                                         44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 714K | 0.001ms | 0.009ms | 1000 |
| Wouter | 195K | 0.005ms | 0.014ms | 1000 |
| React Router | 44K | 0.023ms | 0.066ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 Zen Router         ████████████████████████████████████████   866K ops/sec
🥈 Wouter             ███████                                    152K ops/sec
🥉 React Router       ██                                         37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 866K | 0.001ms | 0.005ms | 1000 |
| Wouter | 152K | 0.007ms | 0.015ms | 1000 |
| React Router | 37K | 0.027ms | 0.063ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 Zen Router         ████████████████████████████████████████   963K ops/sec
🥈 Wouter             ███████                                    163K ops/sec
🥉 React Router       ██                                         42K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 963K | 0.001ms | 0.002ms | 1000 |
| Wouter | 163K | 0.006ms | 0.017ms | 1000 |
| React Router | 42K | 0.024ms | 0.044ms | 1000 |

#### Wildcard Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   1.0M ops/sec
🥈 Wouter             ██████                                     158K ops/sec
🥉 React Router       █                                          23K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.0M | 0.001ms | 0.004ms | 1000 |
| Wouter | 158K | 0.006ms | 0.023ms | 1000 |
| React Router | 23K | 0.044ms | 0.102ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 Zen Router         ████████████████████████████████████████   300K ops/sec
🥈 Wouter             █████                                      40K ops/sec
🥉 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 300K | 0.003ms | 0.016ms | 1000 |
| Wouter | 40K | 0.025ms | 0.058ms | 1000 |
| React Router | 7K | 0.144ms | 0.197ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 Zen Router         ████████████████████████████████████████   863K ops/sec
🥈 Wouter             ████████                                   169K ops/sec
🥉 React Router       ██                                         48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 863K | 0.001ms | 0.004ms | 1000 |
| Wouter | 169K | 0.006ms | 0.013ms | 1000 |
| React Router | 48K | 0.021ms | 0.047ms | 1000 |


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

**Total**: 9 tests × 3 libraries = 27 benchmark runs

---

## 🚀 Libraries Tested

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

*Generated on 2025-11-13T11:47:03.257Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
