<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2015,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 60.3/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (49.2/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 60.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 49.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 44.3/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 25.9/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 44.2/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 41.1/100 | 50% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 27.7/100 | 34% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.8/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 12.7/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.6/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.9/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 60.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 49.2/100 | 82% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.3/100 | 73% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 25.9/100 | 43% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.6/100 | 36% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 15.8/100 | 26% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.5/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.6/100 | 11% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **60.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **49.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **44.3** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **25.9** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **21.6** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **15.8** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.5** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.6** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥈 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            ████████████████████████████████████████   2.8M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 Zen                █████████                                  628K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 628K | 0.002ms | 0.002ms | 1000 |
| MobX | 87K | 0.012ms | 0.018ms | 1000 |
| Valtio | 52K | 0.020ms | 0.028ms | 1000 |
| Jotai | 3K | 0.314ms | 0.716ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   12.5M ops/sec
🥈 Zustand            ███████████████████████████████            9.5M ops/sec
🥉 Redux Toolkit      ██████████████████████████████             9.4M ops/sec
 Preact Signals     ███████████████████████                    7.1M ops/sec
 Zen                ███████████████████                        6.0M ops/sec
 MobX               ███                                        843K ops/sec
 Valtio             ██                                         505K ops/sec
 Jotai                                                         33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 843K | 0.001ms | 0.001ms | 1000 |
| Valtio | 505K | 0.002ms | 0.004ms | 1000 |
| Jotai | 33K | 0.032ms | 0.041ms | 1000 |

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.1M ops/sec
 Zen                ████████████████████████████████           17.9M ops/sec
 Valtio             ███████████████████████████                15.1M ops/sec
 MobX               ██████████████████████████                 14.6M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 14.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   9.2M ops/sec
🥈 Preact Signals     ████████████████████████                   5.4M ops/sec
🥉 Zen                ███████████████                            3.6M ops/sec
 Zustand            ███                                        708K ops/sec
 MobX               ██                                         500K ops/sec
 Valtio             ██                                         382K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 9.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 708K | 0.002ms | 0.003ms | 1000 |
| MobX | 500K | 0.003ms | 0.003ms | 1000 |
| Valtio | 382K | 0.003ms | 0.004ms | 1000 |
| Jotai | 37K | 0.028ms | 0.040ms | 1000 |
| Redux Toolkit | 17K | 0.060ms | 0.086ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   4.0M ops/sec
🥈 Preact Signals     ███████████████████████████                2.7M ops/sec
🥉 Zen                █████████████                              1.4M ops/sec
 Zustand            █                                          79K ops/sec
 MobX               █                                          60K ops/sec
 Valtio                                                        39K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.0M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.4M | 0.001ms | 0.002ms | 1000 |
| Zustand | 79K | 0.013ms | 0.022ms | 1000 |
| MobX | 60K | 0.017ms | 0.026ms | 1000 |
| Valtio | 39K | 0.026ms | 0.036ms | 1000 |
| Jotai | 4K | 0.274ms | 1.011ms | 1000 |
| Redux Toolkit | 2K | 0.616ms | 1.188ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   464K ops/sec
🥈 Preact Signals     ███████████████████████████                317K ops/sec
🥉 Zen                ████████████████████                       233K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         366 ops/sec
 Redux Toolkit                                                 162 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 464K | 0.003ms | 0.004ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.004ms | 1000 |
| Zen | 233K | 0.004ms | 0.010ms | 1000 |
| Zustand | 8K | 0.132ms | 0.468ms | 1000 |
| MobX | 6K | 0.159ms | 0.322ms | 1000 |
| Valtio | 4K | 0.259ms | 0.637ms | 1000 |
| Jotai | 366 | 2.782ms | 4.824ms | 1000 |
| Redux Toolkit | 162 | 6.222ms | 7.672ms | 1000 |

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     █████████████████████                      11.8M ops/sec
🥉 Zustand            █████████                                  4.9M ops/sec
 Zen                ████████                                   4.5M ops/sec
 MobX               ██████                                     3.2M ops/sec
 Valtio             █████                                      3.0M ops/sec
 Jotai              █                                          347K ops/sec
 Redux Toolkit                                                 173K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 347K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 173K | 0.006ms | 0.010ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.2M ops/sec
🥈 Solid.js           ███████████████                            3.7M ops/sec
🥉 Zustand            ██████████████                             3.6M ops/sec
 Zen                ███████████                                2.9M ops/sec
 Valtio             ██                                         462K ops/sec
 Jotai              █                                          334K ops/sec
 MobX               █                                          234K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.9M | 0.001ms | 0.001ms | 1000 |
| Valtio | 462K | 0.002ms | 0.004ms | 1000 |
| Jotai | 334K | 0.003ms | 0.006ms | 1000 |
| MobX | 234K | 0.004ms | 0.010ms | 1000 |
| Redux Toolkit | 61K | 0.018ms | 0.036ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.4M ops/sec
🥈 Zustand            ████████████████                           3.3M ops/sec
🥉 Zen                ████████████████                           3.3M ops/sec
 Solid.js           ███████████████                            3.1M ops/sec
 Valtio             ███████████                                2.2M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              ██                                         360K ops/sec
 Redux Toolkit                                                 65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 360K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 65K | 0.016ms | 0.030ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zustand            ███████████████████████████████████████    22.0M ops/sec
🥉 Preact Signals     ███████████████████████████████████████    21.6M ops/sec
 Zen                ███████████████████████████████████        19.5M ops/sec
 Redux Toolkit      ████████████████████████                   13.5M ops/sec
 Valtio             ████████████████████████                   13.4M ops/sec
 MobX               ██████████                                 5.4M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   5.4M ops/sec
🥈 Zen                ██████████████████████                     3.0M ops/sec
🥉 Zustand            ██████████████████████                     3.0M ops/sec
 Solid.js           ███████████████████                        2.6M ops/sec
 Valtio             ██████████████████                         2.4M ops/sec
 MobX               ██████████                                 1.3M ops/sec
 Jotai              ███                                        376K ops/sec
 Redux Toolkit      █                                          87K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 376K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 87K | 0.012ms | 0.025ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   18K ops/sec
🥈 Preact Signals     ██                                         942 ops/sec
🥉 Zustand            ██                                         916 ops/sec
 Solid.js           ██                                         915 ops/sec
 Zen                ██                                         908 ops/sec
 Valtio             ██                                         904 ops/sec
 MobX               ██                                         904 ops/sec
 Redux Toolkit      ██                                         799 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 18K | 0.060ms | 0.090ms | 1000 |
| Preact Signals | 942 | 1.112ms | 2.141ms | 1000 |
| Zustand | 916 | 1.107ms | 2.145ms | 1000 |
| Solid.js | 915 | 1.114ms | 2.144ms | 1000 |
| Zen | 908 | 1.126ms | 2.159ms | 1000 |
| Valtio | 904 | 1.123ms | 2.154ms | 1000 |
| MobX | 904 | 1.120ms | 2.156ms | 1000 |
| Redux Toolkit | 799 | 1.265ms | 2.307ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   108K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    106K ops/sec
🥉 Zustand            ██████████████████████                     59K ops/sec
 Valtio             ████████████████                           43K ops/sec
 MobX               █████████████                              36K ops/sec
 Zen                █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 108K | 0.010ms | 0.018ms | 1000 |
| Preact Signals | 106K | 0.010ms | 0.015ms | 1000 |
| Zustand | 59K | 0.018ms | 0.028ms | 1000 |
| Valtio | 43K | 0.024ms | 0.036ms | 1000 |
| MobX | 36K | 0.029ms | 0.043ms | 1000 |
| Zen | 36K | 0.029ms | 0.049ms | 1000 |
| Jotai | 6K | 0.192ms | 0.403ms | 1000 |
| Redux Toolkit | 3K | 0.337ms | 0.987ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Preact Signals     ██████████████████████                     11.4M ops/sec
🥉 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.1M ops/sec
 Zen                ████                                       2.0M ops/sec
 Valtio             ██                                         1.0M ops/sec
 Jotai                                                         160K ops/sec
 Redux Toolkit                                                 143K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 160K | 0.009ms | 0.017ms | 1000 |
| Redux Toolkit | 143K | 0.007ms | 0.019ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.4M ops/sec
🥈 Zen                █████████                                  4.3M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          456K ops/sec
 Valtio             █                                          282K ops/sec
 Jotai                                                         162K ops/sec
 Redux Toolkit                                                 70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 456K | 0.002ms | 0.004ms | 1000 |
| Valtio | 282K | 0.004ms | 0.005ms | 1000 |
| Jotai | 162K | 0.006ms | 0.012ms | 1000 |
| Redux Toolkit | 70K | 0.015ms | 0.030ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.0M ops/sec
🥈 Zen                ██                                         240K ops/sec
🥉 Preact Signals     █                                          115K ops/sec
 Zustand            █                                          111K ops/sec
 Valtio                                                        62K ops/sec
 Redux Toolkit                                                 30K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 240K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 115K | 0.010ms | 0.018ms | 1000 |
| Zustand | 111K | 0.013ms | 0.021ms | 1000 |
| Valtio | 62K | 0.048ms | 0.048ms | 1000 |
| Redux Toolkit | 30K | 0.056ms | 0.103ms | 1000 |
| MobX | 12K | 0.119ms | 0.961ms | 1000 |
| Jotai | 7K | 0.160ms | 0.933ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   14.5M ops/sec
🥈 Zen                ███████████                                3.8M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ███████                                    2.7M ops/sec
 MobX               █████                                      2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 126K ops/sec
 Jotai                                                         111K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 126K | 0.008ms | 0.014ms | 1000 |
| Jotai | 111K | 0.009ms | 0.020ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          3K ops/sec
 Jotai                                                         283 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.007ms | 1000 |
| Zen | 80K | 0.013ms | 0.019ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.057ms | 1000 |
| Valtio | 5K | 0.201ms | 0.622ms | 1000 |
| MobX | 3K | 0.290ms | 0.344ms | 1000 |
| Jotai | 283 | 3.545ms | 4.073ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   39K ops/sec
🥈 Zen                ███████████                                11K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          734 ops/sec
 MobX                                                          470 ops/sec
 Valtio                                                        423 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 39K | 0.031ms | 0.409ms | 1000 |
| Zen | 11K | 0.094ms | 0.109ms | 1000 |
| Preact Signals | 8K | 0.120ms | 0.165ms | 1000 |
| Zustand | 734 | 1.375ms | 1.919ms | 1000 |
| MobX | 470 | 2.133ms | 2.653ms | 1000 |
| Valtio | 423 | 2.374ms | 2.964ms | 1000 |
| Jotai | 34 | 29.576ms | 33.146ms | 1000 |
| Redux Toolkit | 15 | 65.561ms | 68.690ms | 1000 |

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.3M ops/sec
🥈 Valtio             ███████████████                            862K ops/sec
🥉 MobX               ████                                       242K ops/sec
 Preact Signals     ██                                         130K ops/sec
 Jotai              ██                                         126K ops/sec
 Zen                ██                                         107K ops/sec
 Zustand            ██                                         97K ops/sec
 Redux Toolkit                                                 823 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.3M | 0.000ms | 0.002ms | 1000 |
| Valtio | 862K | 0.001ms | 0.005ms | 1000 |
| MobX | 242K | 0.005ms | 0.015ms | 1000 |
| Preact Signals | 130K | 0.008ms | 0.013ms | 1000 |
| Jotai | 126K | 0.010ms | 0.028ms | 1000 |
| Zen | 107K | 0.009ms | 0.018ms | 1000 |
| Zustand | 97K | 0.011ms | 0.021ms | 1000 |
| Redux Toolkit | 823 | 1.238ms | 2.946ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   18.6M ops/sec
🥈 Preact Signals     ███████████                                5.1M ops/sec
🥉 Valtio             ████                                       1.9M ops/sec
 Zustand            ██                                         1.0M ops/sec
 Zen                █                                          419K ops/sec
 MobX               █                                          277K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| Zen | 419K | 0.002ms | 0.004ms | 1000 |
| MobX | 277K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.8M ops/sec
🥈 Preact Signals     █████████                                  4.7M ops/sec
🥉 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 Zen                █                                          484K ops/sec
 MobX               █                                          326K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| Zen | 484K | 0.002ms | 0.003ms | 1000 |
| MobX | 326K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Preact Signals     ██████████████                             7.5M ops/sec
🥉 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 Zen                ██                                         1.0M ops/sec
 MobX               █                                          789K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 789K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.3M ops/sec
🥈 Preact Signals     ██████████████                             6.5M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Zen                ██                                         859K ops/sec
 MobX               ██                                         803K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Zen | 859K | 0.002ms | 0.002ms | 1000 |
| MobX | 803K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         434K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 434K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.052ms | 1000 |
| Valtio | 8K | 0.122ms | 0.141ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.174ms | 0.207ms | 1000 |
| Zen | 5K | 0.200ms | 0.855ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   14.0M ops/sec
🥈 Preact Signals     ████████                                   2.9M ops/sec
🥉 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 Zen                ███                                        1.0M ops/sec
 MobX                                                          114K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 14.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 114K | 0.009ms | 0.019ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Preact Signals     ██                                         856K ops/sec
🥉 MobX                                                          119K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        73K ops/sec
 Zen                                                           51K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 856K | 0.001ms | 0.001ms | 1000 |
| MobX | 119K | 0.008ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 73K | 0.014ms | 0.025ms | 1000 |
| Zen | 51K | 0.022ms | 0.032ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        280K ops/sec
 Valtio             █                                          88K ops/sec
 MobX               █                                          78K ops/sec
 Jotai              █                                          58K ops/sec
 Zen                █                                          52K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 280K | 0.004ms | 0.004ms | 1000 |
| Valtio | 88K | 0.011ms | 0.019ms | 1000 |
| MobX | 78K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |
| Zen | 52K | 0.020ms | 0.029ms | 1000 |



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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.12.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-15T20:52:35.428Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
