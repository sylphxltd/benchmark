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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 62.4/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (50.2/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 62.4/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 50.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 46.0/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 44.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 21.2/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 79.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 46.6/100 | 58% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 46.4/100 | 58% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 41.7/100 | 52% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.2/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.5/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.7/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 62.4/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 50.2/100 | 80% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 46.0/100 | 74% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.5/100 | 71% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.2/100 | 34% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 16.3/100 | 26% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.8/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.1/100 | 10% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **62.4** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **50.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **46.0** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **44.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **21.2** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **16.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.1** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.5M ops/sec
🥈 Zen                ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.2M ops/sec
 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 MobX               ██████████████████████████████             17.1M ops/sec
 Valtio             ███████████████████████████                15.0M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.1M ops/sec
🥈 Redux Toolkit      █████████████████████████████              9.6M ops/sec
🥉 Solid.js           ████████████████████████████               9.3M ops/sec
 Zen                ███████████████                            5.0M ops/sec
 Preact Signals     ███████████                                3.6M ops/sec
 MobX               ███                                        840K ops/sec
 Valtio             ██                                         502K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 840K | 0.001ms | 0.001ms | 1000 |
| Valtio | 502K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.033ms | 0.053ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥈 Solid.js           ██████████████████████████████████████     2.7M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                █████████                                  628K ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 628K | 0.002ms | 0.002ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 51K | 0.021ms | 0.031ms | 1000 |
| Jotai | 3K | 0.318ms | 0.679ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Zen                ████████████████████████████               14.7M ops/sec
🥉 Preact Signals     ███████████████████████████                14.5M ops/sec
 Zustand            ████████                                   4.4M ops/sec
 MobX               ███████                                    3.6M ops/sec
 Valtio             █████                                      2.9M ops/sec
 Jotai              █                                          347K ops/sec
 Redux Toolkit                                                 157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 347K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 157K | 0.007ms | 0.014ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   12.3M ops/sec
🥈 Preact Signals     █████████████████████████████████████      11.5M ops/sec
🥉 Zen                ██████████████                             4.2M ops/sec
 Zustand            ██                                         684K ops/sec
 MobX               ██                                         536K ops/sec
 Valtio             █                                          400K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 684K | 0.001ms | 0.002ms | 1000 |
| MobX | 536K | 0.002ms | 0.004ms | 1000 |
| Valtio | 400K | 0.003ms | 0.003ms | 1000 |
| Jotai | 37K | 0.029ms | 0.048ms | 1000 |
| Redux Toolkit | 16K | 0.065ms | 0.086ms | 1000 |

#### Burst Write (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   2.5M ops/sec
🥈 Solid.js           ████████████████████████                   1.5M ops/sec
🥉 Zen                ████████████████                           1.0M ops/sec
 MobX               █                                          73K ops/sec
 Zustand            █                                          70K ops/sec
 Valtio             █                                          39K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 73K | 0.014ms | 0.023ms | 1000 |
| Zustand | 70K | 0.014ms | 0.024ms | 1000 |
| Valtio | 39K | 0.026ms | 0.035ms | 1000 |
| Jotai | 4K | 0.295ms | 0.938ms | 1000 |
| Redux Toolkit | 2K | 0.634ms | 1.300ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   377K ops/sec
🥈 Preact Signals     ████████████████████████████████           307K ops/sec
🥉 Zen                █████████████                              126K ops/sec
 MobX               █                                          7K ops/sec
 Zustand            █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         344 ops/sec
 Redux Toolkit                                                 158 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 377K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 307K | 0.003ms | 0.007ms | 1000 |
| Zen | 126K | 0.008ms | 0.009ms | 1000 |
| MobX | 7K | 0.142ms | 0.157ms | 1000 |
| Zustand | 7K | 0.145ms | 0.256ms | 1000 |
| Valtio | 4K | 0.247ms | 0.287ms | 1000 |
| Jotai | 344 | 2.966ms | 5.096ms | 1000 |
| Redux Toolkit | 158 | 6.337ms | 7.203ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.2M ops/sec
🥈 Zen                █████████████████████████████              7.4M ops/sec
🥉 Solid.js           ███████████████                            3.8M ops/sec
 Zustand            ██████████████                             3.5M ops/sec
 Valtio             ██                                         416K ops/sec
 Jotai              █                                          284K ops/sec
 MobX               █                                          146K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 416K | 0.003ms | 0.004ms | 1000 |
| Jotai | 284K | 0.004ms | 0.011ms | 1000 |
| MobX | 146K | 0.007ms | 0.025ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.034ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   8.3M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     7.9M ops/sec
🥉 Zustand            ████████████████                           3.4M ops/sec
 Solid.js           ███████████████                            3.0M ops/sec
 Valtio             ██████████                                 2.1M ops/sec
 MobX               █████                                      1.0M ops/sec
 Jotai              █                                          218K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 218K | 0.005ms | 0.013ms | 1000 |
| Redux Toolkit | 58K | 0.018ms | 0.037ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.6M ops/sec
🥈 Zen                ███████████████████████████████████████    22.1M ops/sec
🥉 Preact Signals     ███████████████████████████████████████    21.9M ops/sec
 Solid.js           █████████████████████████████████████      21.1M ops/sec
 Redux Toolkit      █████████████████████████                  14.2M ops/sec
 Valtio             ███████████████████████                    13.0M ops/sec
 MobX               ██████████                                 5.5M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 14.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.0M ops/sec
🥈 Preact Signals     ████████████████████████████████           5.7M ops/sec
🥉 Zustand            ████████████████                           2.9M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 Valtio             ██████████████                             2.5M ops/sec
 MobX               ████████                                   1.4M ops/sec
 Jotai              ██                                         358K ops/sec
 Redux Toolkit                                                 80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.4M | 0.001ms | 0.002ms | 1000 |
| Jotai | 358K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 80K | 0.013ms | 0.025ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   17K ops/sec
🥈 Zen                ██                                         865 ops/sec
🥉 Solid.js           ██                                         845 ops/sec
 Preact Signals     ██                                         788 ops/sec
 Redux Toolkit      █                                          600 ops/sec
 Valtio             █                                          600 ops/sec
 MobX               █                                          599 ops/sec
 Zustand            █                                          598 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 17K | 0.063ms | 0.092ms | 1000 |
| Zen | 865 | 1.263ms | 2.433ms | 1000 |
| Solid.js | 845 | 1.260ms | 2.430ms | 1000 |
| Preact Signals | 788 | 1.378ms | 2.388ms | 1000 |
| Redux Toolkit | 600 | 1.781ms | 2.519ms | 1000 |
| Valtio | 600 | 1.774ms | 2.057ms | 1000 |
| MobX | 599 | 1.779ms | 2.468ms | 1000 |
| Zustand | 598 | 1.780ms | 2.327ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   105K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   104K ops/sec
🥉 Zen                ██████████████████████████████████████     101K ops/sec
 Zustand            ██████████████████████                     59K ops/sec
 Valtio             █████████████████                          43K ops/sec
 MobX               ██████████████                             36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 105K | 0.010ms | 0.015ms | 1000 |
| Preact Signals | 104K | 0.010ms | 0.018ms | 1000 |
| Zen | 101K | 0.011ms | 0.018ms | 1000 |
| Zustand | 59K | 0.018ms | 0.027ms | 1000 |
| Valtio | 43K | 0.024ms | 0.033ms | 1000 |
| MobX | 36K | 0.029ms | 0.039ms | 1000 |
| Jotai | 6K | 0.188ms | 0.779ms | 1000 |
| Redux Toolkit | 3K | 0.340ms | 1.022ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   20.7M ops/sec
🥈 Preact Signals     ██████████████████████                     11.5M ops/sec
🥉 Zen                ███████████                                5.5M ops/sec
 Zustand            ██████████                                 5.0M ops/sec
 MobX               ████                                       2.1M ops/sec
 Valtio             ██                                         1.0M ops/sec
 Jotai                                                         184K ops/sec
 Redux Toolkit                                                 39K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 184K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 39K | 0.030ms | 0.106ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.6M ops/sec
🥈 Zen                █████████████████████████████████          16.2M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          454K ops/sec
 Valtio             █                                          279K ops/sec
 Jotai                                                         162K ops/sec
 Redux Toolkit                                                 76K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 454K | 0.002ms | 0.004ms | 1000 |
| Valtio | 279K | 0.004ms | 0.005ms | 1000 |
| Jotai | 162K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 76K | 0.013ms | 0.026ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.4M ops/sec
🥈 Zen                █                                          125K ops/sec
🥉 Preact Signals     █                                          107K ops/sec
 Zustand            █                                          88K ops/sec
 Valtio                                                        45K ops/sec
 Redux Toolkit                                                 39K ops/sec
 MobX                                                          9K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.4M | 0.001ms | 0.006ms | 1000 |
| Zen | 125K | 0.009ms | 0.013ms | 1000 |
| Preact Signals | 107K | 0.011ms | 0.020ms | 1000 |
| Zustand | 88K | 0.021ms | 0.029ms | 1000 |
| Valtio | 45K | 0.060ms | 0.076ms | 1000 |
| Redux Toolkit | 39K | 0.062ms | 0.080ms | 1000 |
| MobX | 9K | 0.199ms | 1.684ms | 1000 |
| Jotai | 7K | 0.157ms | 1.003ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   15.0M ops/sec
🥈 Zen                ██████████████████████████████             11.4M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ███████                                    2.8M ops/sec
 MobX               █████                                      2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 129K ops/sec
 Jotai                                                         119K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 129K | 0.008ms | 0.020ms | 1000 |
| Jotai | 119K | 0.009ms | 0.012ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             █████████████                              809K ops/sec
🥉 MobX               ████                                       246K ops/sec
 Jotai              ███                                        166K ops/sec
 Preact Signals     ██                                         128K ops/sec
 Zen                ██                                         111K ops/sec
 Zustand            ██                                         91K ops/sec
 Redux Toolkit                                                 784 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.002ms | 1000 |
| Valtio | 809K | 0.001ms | 0.007ms | 1000 |
| MobX | 246K | 0.005ms | 0.017ms | 1000 |
| Jotai | 166K | 0.008ms | 0.012ms | 1000 |
| Preact Signals | 128K | 0.008ms | 0.020ms | 1000 |
| Zen | 111K | 0.009ms | 0.019ms | 1000 |
| Zustand | 91K | 0.011ms | 0.020ms | 1000 |
| Redux Toolkit | 784 | 1.312ms | 3.210ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   318K ops/sec
🥈 Solid.js           ████████████████████████████████████████   315K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         282 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 315K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 80K | 0.012ms | 0.020ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.060ms | 1000 |
| Valtio | 5K | 0.205ms | 0.612ms | 1000 |
| MobX | 4K | 0.258ms | 0.282ms | 1000 |
| Jotai | 282 | 3.585ms | 5.154ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   25K ops/sec
🥈 Preact Signals     ██████████████                             8K ops/sec
🥉 Zen                ████████████                               8K ops/sec
 Zustand            █                                          733 ops/sec
 MobX               █                                          473 ops/sec
 Valtio             █                                          380 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 25K | 0.047ms | 0.493ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.134ms | 1000 |
| Zen | 8K | 0.131ms | 0.148ms | 1000 |
| Zustand | 733 | 1.376ms | 1.865ms | 1000 |
| MobX | 473 | 2.122ms | 2.639ms | 1000 |
| Valtio | 380 | 2.640ms | 3.312ms | 1000 |
| Jotai | 33 | 30.516ms | 34.525ms | 1000 |
| Redux Toolkit | 15 | 68.304ms | 96.425ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.8M ops/sec
🥈 Zen                █████████████                              6.9M ops/sec
🥉 Preact Signals     ██████████                                 5.1M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          285K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 285K | 0.004ms | 0.007ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                █████████                                  5.0M ops/sec
🥉 Preact Signals     █████████                                  4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          314K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 314K | 0.005ms | 0.007ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Zen                ████████████████████                       11.0M ops/sec
🥉 Preact Signals     ██████████████                             7.6M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             █████                                      2.5M ops/sec
 MobX               █                                          779K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 779K | 0.001ms | 0.003ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.9M ops/sec
🥈 Preact Signals     █████████████                              6.2M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ███████                                    3.1M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         759K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 759K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         429K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 429K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.045ms | 1000 |
| Valtio | 8K | 0.127ms | 0.191ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.168ms | 0.201ms | 1000 |
| Zen | 4K | 0.263ms | 0.356ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Zen                ██                                         1.1M ops/sec
🥉 Preact Signals     █                                          732K ops/sec
 MobX                                                          121K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        70K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 732K | 0.001ms | 0.001ms | 1000 |
| MobX | 121K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 70K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        275K ops/sec
 Valtio             █                                          93K ops/sec
 MobX               █                                          81K ops/sec
 Zen                █                                          79K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 275K | 0.004ms | 0.004ms | 1000 |
| Valtio | 93K | 0.011ms | 0.019ms | 1000 |
| MobX | 81K | 0.013ms | 0.023ms | 1000 |
| Zen | 79K | 0.013ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   14.6M ops/sec
🥈 Zen                ████████████████████████████               10.2M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          114K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 14.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 114K | 0.009ms | 0.019ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.15.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
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

*Generated on 2025-11-16T01:03:56.001Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
