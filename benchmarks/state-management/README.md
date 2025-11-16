<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2016,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-28-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 60.9/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (47.9/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 60.9/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 47.9/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 44.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 42.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 21.6/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

> **🆕 Dual Ranking System**
>
> This category uses **hybrid weighting** that balances functional importance with data-driven stability.
> Both ranking systems are shown below for comparison.
>
> - **Hybrid Weighted** (primary): Balances category importance × test stability
> - **Variance-Based** (reference): Pure data-driven weighting
>
> See [Hybrid Weighting Analysis](../../HYBRID_WEIGHTING_ANALYSIS.md) for methodology.

### 🎯 Hybrid Weighted Rankings

Based on **two-tier weighted geometric mean** combining category importance with variance-based test weights.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 45.5/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 44.1/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 43.9/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.4/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.2/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.3/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.0/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 60.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 47.9/100 | 79% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.5/100 | 73% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 42.8/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.6/100 | 35% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 16.5/100 | 27% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.8/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.6/100 | 11% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **60.9** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **47.9** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **44.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **42.8** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **21.6** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **16.5** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.6** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.1M ops/sec
 Zen                ███████████████████████████████████████    22.1M ops/sec
 Redux Toolkit      ███████████████████████████████████████    21.9M ops/sec
 MobX               ██████████████████████████████             16.8M ops/sec
 Valtio             ███████████████████████████                14.9M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 21.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   12.4M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████       11.1M ops/sec
🥉 Solid.js           ██████████████████████████████             9.2M ops/sec
 Preact Signals     ███████████████████████                    7.3M ops/sec
 Zen                ██████████████                             4.4M ops/sec
 MobX               ███                                        820K ops/sec
 Valtio             ██                                         507K ops/sec
 Jotai                                                         27K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 12.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 820K | 0.001ms | 0.001ms | 1000 |
| Valtio | 507K | 0.002ms | 0.003ms | 1000 |
| Jotai | 27K | 0.042ms | 0.079ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ██████████████████████                     1.5M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                █████████                                  612K ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 612K | 0.002ms | 0.004ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 53K | 0.020ms | 0.029ms | 1000 |
| Jotai | 3K | 0.330ms | 0.846ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Zen                ████████████████████████                   13.0M ops/sec
🥉 Preact Signals     █████████████████                          9.0M ops/sec
 Zustand            █████████                                  5.0M ops/sec
 Valtio             ██████                                     3.3M ops/sec
 MobX               ██████                                     3.3M ops/sec
 Jotai              █                                          352K ops/sec
 Redux Toolkit                                                 158K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 352K | 0.006ms | 0.008ms | 1000 |
| Redux Toolkit | 158K | 0.007ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.8M ops/sec
🥈 Solid.js           ████████████████████████████               8.9M ops/sec
🥉 Zen                ███████████████                            4.8M ops/sec
 Zustand            ██                                         729K ops/sec
 MobX               ██                                         570K ops/sec
 Valtio             █                                          401K ops/sec
 Jotai                                                         32K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 8.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 729K | 0.001ms | 0.002ms | 1000 |
| MobX | 570K | 0.002ms | 0.003ms | 1000 |
| Valtio | 401K | 0.003ms | 0.004ms | 1000 |
| Jotai | 32K | 0.034ms | 0.065ms | 1000 |
| Redux Toolkit | 16K | 0.065ms | 0.093ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.4M ops/sec
🥈 Preact Signals     ████████████████████████████████           2.7M ops/sec
🥉 Zen                █████████████████████                      1.8M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          68K ops/sec
 Valtio                                                        39K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.8M | 0.001ms | 0.001ms | 1000 |
| Zustand | 76K | 0.013ms | 0.023ms | 1000 |
| MobX | 68K | 0.015ms | 0.024ms | 1000 |
| Valtio | 39K | 0.026ms | 0.038ms | 1000 |
| Jotai | 3K | 0.300ms | 0.587ms | 1000 |
| Redux Toolkit | 2K | 0.635ms | 0.852ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   363K ops/sec
🥈 Zen                ███████████████████████                    208K ops/sec
🥉 Preact Signals     ████████████                               109K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         350 ops/sec
 Redux Toolkit                                                 158 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 363K | 0.003ms | 0.005ms | 1000 |
| Zen | 208K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 109K | 0.009ms | 0.017ms | 1000 |
| Zustand | 8K | 0.133ms | 0.148ms | 1000 |
| MobX | 7K | 0.149ms | 0.169ms | 1000 |
| Valtio | 4K | 0.251ms | 0.305ms | 1000 |
| Jotai | 350 | 2.900ms | 5.122ms | 1000 |
| Redux Toolkit | 158 | 6.353ms | 7.398ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   9.1M ops/sec
🥈 Zen                ████████████████████████████████████       8.1M ops/sec
🥉 Solid.js           ███████████████████                        4.3M ops/sec
 Zustand            ███████████████                            3.3M ops/sec
 Valtio             ██                                         406K ops/sec
 Jotai              █                                          322K ops/sec
 MobX               █                                          233K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 406K | 0.003ms | 0.004ms | 1000 |
| Jotai | 322K | 0.003ms | 0.005ms | 1000 |
| MobX | 233K | 0.004ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.035ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.0M ops/sec
🥈 Zen                ████████████████████████████████████       7.3M ops/sec
🥉 Zustand            ████████████████                           3.3M ops/sec
 Solid.js           ██████████████                             2.9M ops/sec
 Valtio             ███████████                                2.2M ops/sec
 MobX               █████                                      959K ops/sec
 Jotai              ██                                         328K ops/sec
 Redux Toolkit                                                 60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 959K | 0.001ms | 0.002ms | 1000 |
| Jotai | 328K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 60K | 0.017ms | 0.030ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   19.4M ops/sec
🥈 Zustand            ███████████████████████████████████████    19.1M ops/sec
🥉 Preact Signals     ████████████████████████████████████       17.6M ops/sec
 Zen                ██████████████████████████████             14.7M ops/sec
 Redux Toolkit      █████████████████████████████              14.3M ops/sec
 Valtio             ████████████████████████                   11.9M ops/sec
 MobX               ███████████                                5.4M ops/sec
 Jotai              ███                                        1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 19.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 14.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 11.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   6.2M ops/sec
🥈 Zen                █████████████████████████████████          5.2M ops/sec
🥉 Zustand            ████████████████████                       3.2M ops/sec
 Valtio             █████████████████                          2.6M ops/sec
 Solid.js           ██████████████                             2.2M ops/sec
 MobX               ████████                                   1.2M ops/sec
 Jotai              ██                                         302K ops/sec
 Redux Toolkit      █                                          78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 302K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 78K | 0.014ms | 0.027ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   17K ops/sec
🥈 Solid.js           ██                                         1K ops/sec
🥉 Valtio             ██                                         935 ops/sec
 Preact Signals     ██                                         924 ops/sec
 Zen                ██                                         920 ops/sec
 Zustand            ██                                         915 ops/sec
 MobX               ██                                         900 ops/sec
 Redux Toolkit      ██                                         788 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 17K | 0.061ms | 0.121ms | 1000 |
| Solid.js | 1K | 1.096ms | 1.879ms | 1000 |
| Valtio | 935 | 1.111ms | 2.160ms | 1000 |
| Preact Signals | 924 | 1.098ms | 1.902ms | 1000 |
| Zen | 920 | 1.125ms | 2.143ms | 1000 |
| Zustand | 915 | 1.105ms | 1.904ms | 1000 |
| MobX | 900 | 1.124ms | 2.159ms | 1000 |
| Redux Toolkit | 788 | 1.278ms | 2.021ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   107K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   107K ops/sec
🥉 Zen                ████████████████████████████████████████   106K ops/sec
 Zustand            ██████████████████████                     58K ops/sec
 Valtio             ████████████████                           43K ops/sec
 MobX               ██████████████                             36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 107K | 0.009ms | 0.018ms | 1000 |
| Preact Signals | 107K | 0.009ms | 0.016ms | 1000 |
| Zen | 106K | 0.010ms | 0.014ms | 1000 |
| Zustand | 58K | 0.018ms | 0.030ms | 1000 |
| Valtio | 43K | 0.023ms | 0.033ms | 1000 |
| MobX | 36K | 0.028ms | 0.040ms | 1000 |
| Jotai | 6K | 0.184ms | 0.341ms | 1000 |
| Redux Toolkit | 3K | 0.362ms | 0.845ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   18.5M ops/sec
🥈 Preact Signals     █████████████████████                      9.8M ops/sec
🥉 Zen                ███████████                                5.1M ops/sec
 Zustand            ██████████                                 4.6M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         967K ops/sec
 Jotai                                                         188K ops/sec
 Redux Toolkit                                                 129K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 967K | 0.001ms | 0.002ms | 1000 |
| Jotai | 188K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 129K | 0.008ms | 0.020ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   17.0M ops/sec
🥈 Zen                ████████████████████████████████           13.5M ops/sec
🥉 Zustand            ████████                                   3.2M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          454K ops/sec
 Valtio             █                                          264K ops/sec
 Jotai                                                         164K ops/sec
 Redux Toolkit                                                 66K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 17.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 454K | 0.002ms | 0.003ms | 1000 |
| Valtio | 264K | 0.004ms | 0.005ms | 1000 |
| Jotai | 164K | 0.006ms | 0.011ms | 1000 |
| Redux Toolkit | 66K | 0.015ms | 0.030ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.3M ops/sec
🥈 Preact Signals     █                                          121K ops/sec
🥉 Zen                █                                          114K ops/sec
 Zustand            █                                          99K ops/sec
 Valtio                                                        45K ops/sec
 Redux Toolkit                                                 38K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 121K | 0.009ms | 0.014ms | 1000 |
| Zen | 114K | 0.009ms | 0.015ms | 1000 |
| Zustand | 99K | 0.011ms | 0.020ms | 1000 |
| Valtio | 45K | 0.029ms | 0.050ms | 1000 |
| Redux Toolkit | 38K | 0.056ms | 0.068ms | 1000 |
| MobX | 11K | 0.109ms | 0.295ms | 1000 |
| Jotai | 7K | 0.152ms | 0.376ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   12.0M ops/sec
🥈 Zen                ████████████████████████████████████       10.8M ops/sec
🥉 Zustand            ███████████                                3.4M ops/sec
 Solid.js           █████████                                  2.6M ops/sec
 MobX               ███████                                    2.0M ops/sec
 Valtio             ████                                       1.1M ops/sec
 Redux Toolkit                                                 113K ops/sec
 Jotai                                                         103K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 113K | 0.009ms | 0.018ms | 1000 |
| Jotai | 103K | 0.010ms | 0.015ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.1M ops/sec
🥈 Valtio             ███████████████                            779K ops/sec
🥉 MobX               █████                                      261K ops/sec
 Jotai              ███                                        155K ops/sec
 Zen                ██                                         98K ops/sec
 Preact Signals     ██                                         98K ops/sec
 Zustand            ██                                         90K ops/sec
 Redux Toolkit                                                 807 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 779K | 0.002ms | 0.005ms | 1000 |
| MobX | 261K | 0.004ms | 0.014ms | 1000 |
| Jotai | 155K | 0.008ms | 0.010ms | 1000 |
| Zen | 98K | 0.010ms | 0.019ms | 1000 |
| Preact Signals | 98K | 0.010ms | 0.012ms | 1000 |
| Zustand | 90K | 0.011ms | 0.021ms | 1000 |
| Redux Toolkit | 807 | 1.250ms | 1.540ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   317K ops/sec
🥈 Zustand            ████████████████████████████████████████   317K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        21K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         289 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Zustand | 317K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 80K | 0.012ms | 0.019ms | 1000 |
| Preact Signals | 21K | 0.047ms | 0.055ms | 1000 |
| Valtio | 5K | 0.210ms | 0.739ms | 1000 |
| MobX | 4K | 0.262ms | 0.282ms | 1000 |
| Jotai | 289 | 3.468ms | 4.106ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   31K ops/sec
🥈 Zen                █████████████                              10K ops/sec
🥉 Preact Signals     ███████████                                9K ops/sec
 Zustand            █                                          732 ops/sec
 MobX               █                                          511 ops/sec
 Valtio             █                                          406 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 31K | 0.035ms | 0.046ms | 1000 |
| Zen | 10K | 0.097ms | 0.117ms | 1000 |
| Preact Signals | 9K | 0.116ms | 0.137ms | 1000 |
| Zustand | 732 | 1.374ms | 1.974ms | 1000 |
| MobX | 511 | 1.964ms | 2.607ms | 1000 |
| Valtio | 406 | 2.469ms | 3.154ms | 1000 |
| Jotai | 33 | 30.171ms | 33.934ms | 1000 |
| Redux Toolkit | 14 | 71.688ms | 75.104ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   17.9M ops/sec
🥈 Zen                ████████████████████████████               12.4M ops/sec
🥉 Preact Signals     ███████████                                4.9M ops/sec
 Valtio             ████                                       1.9M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          269K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 17.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 269K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.9M ops/sec
🥈 Zen                ███████████████████████████                14.1M ops/sec
🥉 Preact Signals     █████████                                  4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          318K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 318K | 0.003ms | 0.006ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.7M ops/sec
🥈 Zen                ███████████████████████████                13.8M ops/sec
🥉 Preact Signals     ████████████                               6.3M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             █████                                      2.4M ops/sec
 MobX               ██                                         795K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 795K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   16.6M ops/sec
🥈 Preact Signals     ████████████████                           6.6M ops/sec
🥉 Zustand            █████████████                              5.2M ops/sec
 Zen                ████████                                   3.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 MobX               ██                                         771K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 16.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 771K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ████████████████                           403K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 403K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.060ms | 1000 |
| Valtio | 8K | 0.124ms | 0.145ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.179ms | 0.207ms | 1000 |
| Zen | 4K | 0.249ms | 0.273ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   17.7M ops/sec
🥈 Zen                ███████████████████████████                12.2M ops/sec
🥉 Preact Signals     ██                                         725K ops/sec
 MobX                                                          118K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        88K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 17.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 725K | 0.001ms | 0.001ms | 1000 |
| MobX | 118K | 0.009ms | 0.012ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 88K | 0.012ms | 0.020ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.4M ops/sec
🥈 Zustand            ██████████████████████████████████         2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        278K ops/sec
 Valtio             █                                          107K ops/sec
 Zen                █                                          81K ops/sec
 MobX               █                                          77K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 278K | 0.004ms | 0.004ms | 1000 |
| Valtio | 107K | 0.009ms | 0.016ms | 1000 |
| Zen | 81K | 0.012ms | 0.022ms | 1000 |
| MobX | 77K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   13.1M ops/sec
🥈 Zen                ██████████████████████████████████████     12.4M ops/sec
🥉 Preact Signals     █████████                                  2.8M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          114K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 13.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 114K | 0.009ms | 0.014ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |



</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Platform**: GitHub Actions (Ubuntu latest)
- **CPU**: 2-core (Intel Xeon or AMD EPYC equivalent)
- **RAM**: ~7GB available
- **Node.js**: 20.x
- **Warmup**: 100ms + 5 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **weighted geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Test weights calculated based on 90th percentile of performance variance
- Stable tests (low variance) receive higher weight
- Unstable tests (high variance) receive lower weight
- This prevents outlier tests from dominating the overall score

**Example** (from current results):
- High-Frequency Read (stable, factor 7.3): **weight 17.7%**
- Complex Form (unstable, factor 600): **weight 0.2%**

This methodology follows [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)'s weighted geometric mean approach.

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
cd benchmarks/state-management

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

- **Basic Operations**: 7 tests
- **Advanced Operations**: 4 tests
- **Async Operations**: 2 tests
- **Real-World Scenarios**: 4 tests
- **Stress Tests**: 3 tests

**Total**: 28 tests × 8 libraries = 224 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid.js](https://github.com/solidjs/solid)** (`1.9.10`)  • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.16.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Valtio](https://github.com/pmndrs/valtio)** (`2.2.0`)  • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`6.15.0`)  • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`2.10.1`)  • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)
- **[Jotai](https://github.com/pmndrs/jotai)** (`2.15.1`)  • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)

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

*Generated on 2025-11-16T01:49:38.263Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
