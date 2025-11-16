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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 61.2/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (50.2/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 61.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 50.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 46.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 45.2/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 22.7/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 48.6/100 | 59% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 47.3/100 | 58% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 42.7/100 | 52% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 18.0/100 | 22% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.5/100 | 18% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.2/100 | 14% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.2/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 61.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 50.2/100 | 82% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 46.8/100 | 76% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 45.2/100 | 74% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 22.7/100 | 37% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 17.9/100 | 29% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.9/100 | 21% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.9/100 | 11% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **61.2** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **50.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **46.8** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **45.2** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **22.7** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.9** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.9** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.9** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   21.0M ops/sec
🥈 Zustand            ████████████████████████████████████████   20.9M ops/sec
🥉 Solid.js           ████████████████████████████████████████   20.8M ops/sec
 Redux Toolkit      ███████████████████████████████████████    20.7M ops/sec
 Preact Signals     ███████████████████████████████████████    20.6M ops/sec
 MobX               ███████████████████████████████            16.2M ops/sec
 Valtio             ███████████████████████████                14.2M ops/sec
 Jotai              █████                                      2.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 20.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 20.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 20.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.6M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   12.9M ops/sec
🥈 Solid.js           ███████████████████████████                8.7M ops/sec
🥉 Redux Toolkit      ██████████████████████████                 8.3M ops/sec
 Preact Signals     ██████████████████                         5.9M ops/sec
 Zen                ███████████████                            4.8M ops/sec
 MobX               ███                                        847K ops/sec
 Valtio             ██                                         489K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 12.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 8.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 847K | 0.001ms | 0.002ms | 1000 |
| Valtio | 489K | 0.002ms | 0.003ms | 1000 |
| Jotai | 31K | 0.034ms | 0.052ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.5M ops/sec
🥈 Redux Toolkit      ███████████████████████████████████████    2.5M ops/sec
🥉 Preact Signals     █████████████████████                      1.3M ops/sec
 Zustand            █████████████████████                      1.3M ops/sec
 Zen                █████████                                  547K ops/sec
 MobX               █                                          89K ops/sec
 Valtio             █                                          49K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.3M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.3M | 0.001ms | 0.001ms | 1000 |
| Zen | 547K | 0.002ms | 0.003ms | 1000 |
| MobX | 89K | 0.011ms | 0.019ms | 1000 |
| Valtio | 49K | 0.022ms | 0.041ms | 1000 |
| Jotai | 3K | 0.331ms | 0.776ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Preact Signals     █████████████████████████████████          15.9M ops/sec
🥉 Zen                ██████████████████████████████             14.4M ops/sec
 Zustand            █████████                                  4.5M ops/sec
 MobX               ████████                                   3.6M ops/sec
 Valtio             ███████                                    3.3M ops/sec
 Jotai              █                                          313K ops/sec
 Redux Toolkit                                                 165K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 313K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 165K | 0.006ms | 0.015ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   11.2M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    10.8M ops/sec
🥉 Zen                ██████████████                             4.0M ops/sec
 Zustand            ██                                         666K ops/sec
 MobX               ██                                         582K ops/sec
 Valtio             ██                                         480K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 10.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 666K | 0.002ms | 0.002ms | 1000 |
| MobX | 582K | 0.002ms | 0.003ms | 1000 |
| Valtio | 480K | 0.002ms | 0.003ms | 1000 |
| Jotai | 35K | 0.029ms | 0.041ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.111ms | 1000 |

#### Burst Write (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   2.6M ops/sec
🥈 Zen                ███████████████████████                    1.5M ops/sec
🥉 Solid.js           █████████████████████                      1.4M ops/sec
 MobX               █                                          72K ops/sec
 Zustand            █                                          72K ops/sec
 Valtio             █                                          48K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 72K | 0.014ms | 0.025ms | 1000 |
| Zustand | 72K | 0.014ms | 0.024ms | 1000 |
| Valtio | 48K | 0.021ms | 0.032ms | 1000 |
| Jotai | 3K | 0.314ms | 0.938ms | 1000 |
| Redux Toolkit | 2K | 0.624ms | 1.399ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   347K ops/sec
🥈 Preact Signals     ████████████████████████████████████       310K ops/sec
🥉 Zen                ██████████████████████████                 228K ops/sec
 MobX               █                                          7K ops/sec
 Zustand            █                                          7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         330 ops/sec
 Redux Toolkit                                                 165 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 347K | 0.003ms | 0.006ms | 1000 |
| Preact Signals | 310K | 0.003ms | 0.003ms | 1000 |
| Zen | 228K | 0.004ms | 0.005ms | 1000 |
| MobX | 7K | 0.142ms | 0.239ms | 1000 |
| Zustand | 7K | 0.143ms | 0.166ms | 1000 |
| Valtio | 5K | 0.209ms | 0.249ms | 1000 |
| Jotai | 330 | 3.080ms | 5.500ms | 1000 |
| Redux Toolkit | 165 | 6.092ms | 7.052ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.2M ops/sec
🥈 Preact Signals     ████████████████████████████████           8.9M ops/sec
🥉 Solid.js           ██████████████████                         5.0M ops/sec
 Zustand            ████████████                               3.4M ops/sec
 Valtio             ██                                         426K ops/sec
 Jotai              █                                          308K ops/sec
 MobX               █                                          179K ops/sec
 Redux Toolkit                                                 74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 5.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 426K | 0.002ms | 0.004ms | 1000 |
| Jotai | 308K | 0.003ms | 0.007ms | 1000 |
| MobX | 179K | 0.006ms | 0.014ms | 1000 |
| Redux Toolkit | 74K | 0.014ms | 0.024ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    9.4M ops/sec
🥉 Zustand            ███████████████                            3.5M ops/sec
 Solid.js           ██████████████                             3.3M ops/sec
 Valtio             ██████████                                 2.4M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              █                                          292K ops/sec
 Redux Toolkit                                                 74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 9.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 292K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 74K | 0.014ms | 0.025ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   21.7M ops/sec
🥈 Zustand            ███████████████████████████████████████    21.4M ops/sec
🥉 Preact Signals     █████████████████████████████████████      20.2M ops/sec
 Zen                █████████████████████████████████████      20.2M ops/sec
 Redux Toolkit      ██████████████████████████████████         18.2M ops/sec
 Valtio             ████████████████████████                   12.8M ops/sec
 MobX               ████████████                               6.4M ops/sec
 Jotai              ███                                        1.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 18.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.4M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   8.1M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    7.8M ops/sec
🥉 Zustand            ██████████████████                         3.6M ops/sec
 Valtio             ████████████████                           3.2M ops/sec
 Solid.js           ██████████████                             2.8M ops/sec
 MobX               ███████                                    1.4M ops/sec
 Jotai              ██                                         331K ops/sec
 Redux Toolkit                                                 90K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.4M | 0.001ms | 0.002ms | 1000 |
| Jotai | 331K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 90K | 0.011ms | 0.021ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   17K ops/sec
🥈 Solid.js           ██                                         967 ops/sec
🥉 Zen                ██                                         962 ops/sec
 MobX               ██                                         951 ops/sec
 Preact Signals     ██                                         922 ops/sec
 Zustand            ██                                         916 ops/sec
 Valtio             ██                                         911 ops/sec
 Redux Toolkit      ██                                         821 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 17K | 0.064ms | 0.090ms | 1000 |
| Solid.js | 967 | 1.099ms | 1.883ms | 1000 |
| Zen | 962 | 1.120ms | 2.145ms | 1000 |
| MobX | 951 | 1.112ms | 1.733ms | 1000 |
| Preact Signals | 922 | 1.101ms | 2.143ms | 1000 |
| Zustand | 916 | 1.105ms | 1.871ms | 1000 |
| Valtio | 911 | 1.106ms | 1.708ms | 1000 |
| Redux Toolkit | 821 | 1.247ms | 1.895ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   107K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   106K ops/sec
🥉 Zen                ██████████████████████████████████████     102K ops/sec
 Zustand            ███████████████████████                    61K ops/sec
 Valtio             ██████████████████                         49K ops/sec
 MobX               ██████████████                             36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 107K | 0.009ms | 0.013ms | 1000 |
| Preact Signals | 106K | 0.010ms | 0.015ms | 1000 |
| Zen | 102K | 0.010ms | 0.020ms | 1000 |
| Zustand | 61K | 0.017ms | 0.027ms | 1000 |
| Valtio | 49K | 0.022ms | 0.032ms | 1000 |
| MobX | 36K | 0.029ms | 0.039ms | 1000 |
| Jotai | 6K | 0.186ms | 0.415ms | 1000 |
| Redux Toolkit | 3K | 0.335ms | 0.992ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   17.4M ops/sec
🥈 Preact Signals     ██████████████████████                     9.7M ops/sec
🥉 Zen                ████████████                               5.3M ops/sec
 Zustand            ███████████                                4.6M ops/sec
 MobX               █████                                      2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         195K ops/sec
 Redux Toolkit                                                 151K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 17.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.003ms | 1000 |
| Jotai | 195K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 151K | 0.007ms | 0.017ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   16.2M ops/sec
🥈 Zen                ██████████████████████████████████         13.7M ops/sec
🥉 Zustand            ████████                                   3.2M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          487K ops/sec
 Valtio             █                                          309K ops/sec
 Jotai                                                         164K ops/sec
 Redux Toolkit                                                 80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 16.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 487K | 0.002ms | 0.003ms | 1000 |
| Valtio | 309K | 0.003ms | 0.006ms | 1000 |
| Jotai | 164K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 80K | 0.014ms | 0.024ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.0M ops/sec
🥈 Preact Signals     █                                          119K ops/sec
🥉 Zen                █                                          111K ops/sec
 Zustand            █                                          96K ops/sec
 Valtio             █                                          62K ops/sec
 Redux Toolkit                                                 38K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 119K | 0.009ms | 0.016ms | 1000 |
| Zen | 111K | 0.010ms | 0.014ms | 1000 |
| Zustand | 96K | 0.017ms | 0.032ms | 1000 |
| Valtio | 62K | 0.042ms | 0.044ms | 1000 |
| Redux Toolkit | 38K | 0.058ms | 0.628ms | 1000 |
| MobX | 12K | 0.118ms | 1.134ms | 1000 |
| Jotai | 8K | 0.145ms | 0.850ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   11.7M ops/sec
🥈 Zen                █████████████████████████████████████      10.9M ops/sec
🥉 Zustand            ████████████                               3.4M ops/sec
 Solid.js           ██████████                                 3.0M ops/sec
 MobX               ███████                                    2.0M ops/sec
 Valtio             ████                                       1.3M ops/sec
 Redux Toolkit                                                 135K ops/sec
 Jotai                                                         109K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.3M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 135K | 0.008ms | 0.013ms | 1000 |
| Jotai | 109K | 0.009ms | 0.016ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             ██████████████                             865K ops/sec
🥉 MobX               █████                                      278K ops/sec
 Jotai              ███                                        178K ops/sec
 Preact Signals     ██                                         119K ops/sec
 Zen                ██                                         98K ops/sec
 Zustand            █                                          84K ops/sec
 Redux Toolkit                                                 821 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.002ms | 1000 |
| Valtio | 865K | 0.001ms | 0.008ms | 1000 |
| MobX | 278K | 0.006ms | 0.015ms | 1000 |
| Jotai | 178K | 0.007ms | 0.016ms | 1000 |
| Preact Signals | 119K | 0.009ms | 0.021ms | 1000 |
| Zen | 98K | 0.010ms | 0.021ms | 1000 |
| Zustand | 84K | 0.013ms | 0.023ms | 1000 |
| Redux Toolkit | 821 | 1.251ms | 2.972ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   281K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   281K ops/sec
🥉 Zustand            ████████████████████                       142K ops/sec
 Zen                ██████████                                 71K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          3K ops/sec
 Jotai                                                         304 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 281K | 0.004ms | 0.004ms | 1000 |
| Redux Toolkit | 281K | 0.004ms | 0.004ms | 1000 |
| Zustand | 142K | 0.007ms | 0.009ms | 1000 |
| Zen | 71K | 0.014ms | 0.022ms | 1000 |
| Preact Signals | 20K | 0.049ms | 0.059ms | 1000 |
| Valtio | 5K | 0.225ms | 0.692ms | 1000 |
| MobX | 3K | 0.342ms | 0.363ms | 1000 |
| Jotai | 304 | 3.308ms | 3.872ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   37K ops/sec
🥈 Zen                ███████████                                10K ops/sec
🥉 Preact Signals     █████████                                  9K ops/sec
 Zustand            █                                          694 ops/sec
 MobX               █                                          537 ops/sec
 Valtio             █                                          496 ops/sec
 Jotai                                                         32 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 37K | 0.034ms | 0.401ms | 1000 |
| Zen | 10K | 0.095ms | 0.105ms | 1000 |
| Preact Signals | 9K | 0.116ms | 0.130ms | 1000 |
| Zustand | 694 | 1.457ms | 2.052ms | 1000 |
| MobX | 537 | 1.876ms | 2.505ms | 1000 |
| Valtio | 496 | 2.036ms | 2.818ms | 1000 |
| Jotai | 32 | 31.112ms | 35.827ms | 1000 |
| Redux Toolkit | 15 | 68.744ms | 74.802ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   16.9M ops/sec
🥈 Zen                █████████████████████████████              12.4M ops/sec
🥉 Preact Signals     ████████████                               5.2M ops/sec
 Valtio             █████                                      2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          279K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 16.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 279K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   19.4M ops/sec
🥈 Zen                ████████████████████████████               13.8M ops/sec
🥉 Preact Signals     ██████████                                 4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ████                                       1.9M ops/sec
 MobX               █                                          336K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| MobX | 336K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   19.5M ops/sec
🥈 Zen                ████████████████████████████               13.7M ops/sec
🥉 Preact Signals     ███████████████                            7.1M ops/sec
 Zustand            ██████████                                 4.7M ops/sec
 Valtio             ██████                                     2.9M ops/sec
 MobX               ██                                         779K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 779K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   15.3M ops/sec
🥈 Preact Signals     ███████████████████                        7.2M ops/sec
🥉 Zustand            ██████████████                             5.2M ops/sec
 Zen                █████████                                  3.4M ops/sec
 Valtio             ███                                        1.2M ops/sec
 MobX               ██                                         820K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 15.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.2M | 0.001ms | 0.002ms | 1000 |
| MobX | 820K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ████████████████                           389K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        9K ops/sec
 MobX                                                          7K ops/sec
 Jotai                                                         7K ops/sec
 Zen                                                           5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 389K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.050ms | 1000 |
| Valtio | 9K | 0.117ms | 0.134ms | 1000 |
| MobX | 7K | 0.148ms | 0.184ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| Zen | 5K | 0.226ms | 0.254ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   18.9M ops/sec
🥈 Zen                ████████████████████████████               13.3M ops/sec
🥉 Preact Signals     █                                          586K ops/sec
 MobX                                                          123K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        71K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 586K | 0.002ms | 0.002ms | 1000 |
| MobX | 123K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 71K | 0.015ms | 0.026ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            █████████████████████████████████          2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        273K ops/sec
 Valtio             █                                          88K ops/sec
 MobX               █                                          85K ops/sec
 Zen                █                                          77K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 273K | 0.004ms | 0.004ms | 1000 |
| Valtio | 88K | 0.012ms | 0.020ms | 1000 |
| MobX | 85K | 0.012ms | 0.021ms | 1000 |
| Zen | 77K | 0.014ms | 0.024ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   12.8M ops/sec
🥈 Zen                ████████████████████████████████████       11.4M ops/sec
🥉 Preact Signals     █████████                                  3.0M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.6M ops/sec
 MobX                                                          117K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 117K | 0.009ms | 0.019ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.17.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T03:27:26.148Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
