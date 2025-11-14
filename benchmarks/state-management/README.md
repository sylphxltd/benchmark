<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2014,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 78.1/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (55.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 78.1/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 55.4/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Valtio** (Score: 55.2/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**Zustand** (Score: 54.8/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 52.4/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


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
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 77.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 56.8/100 | 73% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 54.2/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 51.7/100 | 66% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 47.6/100 | 61% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 38.7/100 | 50% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.0/100 | 15% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.7/100 | 10% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 78.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 55.4/100 | 71% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Valtio](https://github.com/pmndrs/valtio)** | 55.2/100 | 71% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 54.8/100 | 70% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Zen](https://github.com/SylphxAI/zen)** | 52.4/100 | 67% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 36.0/100 | 46% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 16.8/100 | 21% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.6/100 | 12% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **78.1** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **55.4** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **55.2** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **54.8** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **52.4** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[MobX](https://github.com/mobxjs/mobx)** | **36.0** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **16.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **9.6** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Valtio             ████████████████████████████████████████   32.6M ops/sec
🥈 Preact Signals     ████████████████████████████               22.8M ops/sec
🥉 Zen                █████████████████████████                  20.0M ops/sec
 Redux Toolkit      ████████████████████████                   19.9M ops/sec
 Zustand            ████████████████████                       16.1M ops/sec
 MobX               ████████████████                           13.4M ops/sec
 Solid Signals      ████████████                               9.9M ops/sec
 Jotai              ████                                       3.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 32.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 19.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 16.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 13.4M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 9.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 3.4M | 0.000ms | 0.002ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   12.4M ops/sec
🥈 Solid Signals      █████████████████████████████████          10.3M ops/sec
🥉 Zustand            ██████████████████████████                 8.1M ops/sec
 Zen                █████████████████████████                  7.6M ops/sec
 Valtio             ██████████████████████                     6.7M ops/sec
 Preact Signals     █████████████████████                      6.4M ops/sec
 MobX               ███████████████████                        6.0M ops/sec
 Jotai              █████████                                  2.7M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 12.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 10.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 6.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 2.7M | 0.000ms | 0.002ms | 1000 |

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   23.0M ops/sec
🥈 Solid Signals      █████████████████████████████████████      21.1M ops/sec
🥉 Redux Toolkit      ███████████████████████████████            17.6M ops/sec
 Zen                ███████████████████                        10.7M ops/sec
 Preact Signals     █████████████████                          9.9M ops/sec
 Valtio             ██████████████                             8.3M ops/sec
 MobX               ███████████                                6.3M ops/sec
 Jotai              ███                                        1.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 23.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 21.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 10.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 9.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 8.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 6.3M | 0.000ms | 0.002ms | 1000 |
| Jotai | 1.5M | 0.001ms | 0.004ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   9.2M ops/sec
🥈 Zen                ████████████████████████████████████       8.3M ops/sec
🥉 Solid Signals      █████████████████████████████              6.6M ops/sec
 Zustand            █████████████████████████                  5.6M ops/sec
 MobX               ███████████████████                        4.3M ops/sec
 Valtio             ██████████████                             3.2M ops/sec
 Jotai              ███                                        596K ops/sec
 Redux Toolkit      █                                          194K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.002ms | 1000 |
| Jotai | 596K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 194K | 0.005ms | 0.015ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   18.6M ops/sec
🥈 Zen                ██████████████████████████████████████     17.6M ops/sec
🥉 Preact Signals     █████████████████████████████              13.4M ops/sec
 Valtio             ████████████                               5.4M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 MobX               ███████████                                5.1M ops/sec
 Jotai              █                                          675K ops/sec
 Redux Toolkit      █                                          282K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 18.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 5.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 675K | 0.001ms | 0.005ms | 1000 |
| Redux Toolkit | 282K | 0.004ms | 0.007ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   6.0M ops/sec
🥈 Solid Signals      ███████████████████████████████████████    5.8M ops/sec
🥉 Preact Signals     █████████████████████████████████████      5.7M ops/sec
 MobX               █████████████████████████████              4.3M ops/sec
 Zustand            ████████████████████████                   3.7M ops/sec
 Valtio             ███████████████████████                    3.5M ops/sec
 Jotai              ████                                       634K ops/sec
 Redux Toolkit      █                                          200K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.5M | 0.000ms | 0.001ms | 1000 |
| Jotai | 634K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 200K | 0.005ms | 0.017ms | 1000 |

#### Single Write

```
🥇 Solid Signals      ████████████████████████████████████████   14.8M ops/sec
🥈 Zen                █████████████████████████████████          12.0M ops/sec
🥉 Preact Signals     █████████████                              4.7M ops/sec
 Zustand            ████████████                               4.6M ops/sec
 Valtio             ██████                                     2.1M ops/sec
 MobX               ██                                         669K ops/sec
 Jotai              █                                          452K ops/sec
 Redux Toolkit                                                 132K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 14.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.002ms | 1000 |
| MobX | 669K | 0.001ms | 0.014ms | 1000 |
| Jotai | 452K | 0.002ms | 0.009ms | 1000 |
| Redux Toolkit | 132K | 0.008ms | 0.024ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Solid Signals      ████████████████████████████████████████   1.1M ops/sec
🥈 Zustand            ████████████████████████████████████       983K ops/sec
🥉 Valtio             ██████████████████████████████████         918K ops/sec
 Preact Signals     ██████████████████████████████             811K ops/sec
 Zen                ██████████████████████                     602K ops/sec
 Jotai              █████████████████                          466K ops/sec
 MobX               █████████████                              344K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.1M | 0.001ms | 0.002ms | 1000 |
| Zustand | 983K | 0.001ms | 0.002ms | 1000 |
| Valtio | 918K | 0.001ms | 0.005ms | 1000 |
| Preact Signals | 811K | 0.001ms | 0.003ms | 1000 |
| Zen | 602K | 0.002ms | 0.004ms | 1000 |
| Jotai | 466K | 0.002ms | 0.005ms | 1000 |
| MobX | 344K | 0.003ms | 0.009ms | 1000 |
| Redux Toolkit | 4K | 0.275ms | 0.539ms | 1000 |

#### Array Update

```
🥇 Solid Signals      ████████████████████████████████████████   7.3M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    7.1M ops/sec
🥉 Zen                ███████████████████████████████████        6.3M ops/sec
 Valtio             ████████████████████████████████           5.8M ops/sec
 Zustand            ███████████████████████████                4.9M ops/sec
 MobX               ███████████                                2.1M ops/sec
 Jotai              ████                                       660K ops/sec
 Redux Toolkit      █                                          178K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 7.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 6.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.003ms | 1000 |
| Jotai | 660K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 178K | 0.006ms | 0.012ms | 1000 |

#### Computed Value Access

```
🥇 Solid Signals      ████████████████████████████████████████   10.0M ops/sec
🥈 Valtio             ███████████████████████████████████████    9.8M ops/sec
🥉 Zustand            ████████████████████████                   6.0M ops/sec
 Preact Signals     ████████████████                           4.1M ops/sec
 Redux Toolkit      ███████████                                2.9M ops/sec
 MobX               ████████                                   2.1M ops/sec
 Zen                ████████                                   1.9M ops/sec
 Jotai              ██████                                     1.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 10.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 9.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 6.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 4.1M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 2.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.004ms | 1000 |
| Zen | 1.9M | 0.001ms | 0.001ms | 1000 |
| Jotai | 1.6M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.2M ops/sec
🥈 Solid Signals      ██████████████████████████                 5.4M ops/sec
🥉 Zustand            ███████████████████████                    4.8M ops/sec
 Zen                ████████████████████                       4.2M ops/sec
 Valtio             ████████████████                           3.4M ops/sec
 MobX               ██████████                                 2.1M ops/sec
 Jotai              ████                                       733K ops/sec
 Redux Toolkit      █                                          204K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.004ms | 1000 |
| Jotai | 733K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 204K | 0.005ms | 0.014ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Preact Signals     ████████████████████████████████████████   745K ops/sec
🥈 Zen                ██████████████████████████████████         628K ops/sec
🥉 Solid Signals      ███████████████████████████████            584K ops/sec
 Zustand            ██████████████████                         333K ops/sec
 MobX               █████████████████                          320K ops/sec
 Valtio             ██████████████                             258K ops/sec
 Jotai              ███                                        48K ops/sec
 Redux Toolkit      █                                          15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 745K | 0.001ms | 0.004ms | 1000 |
| Zen | 628K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 584K | 0.002ms | 0.005ms | 1000 |
| Zustand | 333K | 0.003ms | 0.007ms | 1000 |
| MobX | 320K | 0.003ms | 0.006ms | 1000 |
| Valtio | 258K | 0.004ms | 0.007ms | 1000 |
| Jotai | 48K | 0.021ms | 0.056ms | 1000 |
| Redux Toolkit | 15K | 0.066ms | 0.124ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   171K ops/sec
🥈 Preact Signals     ██████████████████████████████████████     163K ops/sec
🥉 Zen                ████████████████████████████████████       153K ops/sec
 MobX               █████████████████████████                  106K ops/sec
 Zustand            ████████████████████████                   103K ops/sec
 Valtio             ██████████████████████                     92K ops/sec
 Jotai              ████                                       17K ops/sec
 Redux Toolkit      ██                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 171K | 0.006ms | 0.013ms | 1000 |
| Preact Signals | 163K | 0.006ms | 0.010ms | 1000 |
| Zen | 153K | 0.007ms | 0.019ms | 1000 |
| MobX | 106K | 0.009ms | 0.016ms | 1000 |
| Zustand | 103K | 0.010ms | 0.013ms | 1000 |
| Valtio | 92K | 0.011ms | 0.015ms | 1000 |
| Jotai | 17K | 0.058ms | 0.084ms | 1000 |
| Redux Toolkit | 7K | 0.151ms | 0.446ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   10.7M ops/sec
🥈 Zen                █████████████████████████████              7.6M ops/sec
🥉 Valtio             ███████████████████                        5.1M ops/sec
 MobX               ██████████████████                         4.9M ops/sec
 Zustand            ██████████████                             3.8M ops/sec
 Preact Signals     █████████████                              3.5M ops/sec
 Jotai              ██                                         428K ops/sec
 Redux Toolkit      █                                          282K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 10.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.5M | 0.000ms | 0.002ms | 1000 |
| Jotai | 428K | 0.002ms | 0.006ms | 1000 |
| Redux Toolkit | 282K | 0.004ms | 0.007ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.6M ops/sec
🥈 Valtio             ██████████████████████████████████████     1.5M ops/sec
🥉 Preact Signals     ██████████████                             550K ops/sec
 Solid Signals      ████████████                               465K ops/sec
 Zustand            ███████████                                457K ops/sec
 Zen                ███████████                                427K ops/sec
 Jotai              ██████                                     223K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.6M | 0.001ms | 0.003ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 550K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 465K | 0.002ms | 0.004ms | 1000 |
| Zustand | 457K | 0.002ms | 0.004ms | 1000 |
| Zen | 427K | 0.002ms | 0.005ms | 1000 |
| Jotai | 223K | 0.004ms | 0.008ms | 1000 |
| Redux Toolkit | 3K | 0.371ms | 0.828ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   2.5M ops/sec
🥈 Zustand            ███                                        190K ops/sec
🥉 Zen                ███                                        183K ops/sec
 Preact Signals     ██                                         121K ops/sec
 Valtio             █                                          50K ops/sec
 Redux Toolkit      █                                          47K ops/sec
 Jotai                                                         16K ops/sec
 MobX                                                          14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.5M | 0.000ms | 0.004ms | 1000 |
| Zustand | 190K | 0.005ms | 0.011ms | 1000 |
| Zen | 183K | 0.005ms | 0.012ms | 1000 |
| Preact Signals | 121K | 0.008ms | 0.030ms | 1000 |
| Valtio | 50K | 0.020ms | 0.146ms | 1000 |
| Redux Toolkit | 47K | 0.022ms | 0.099ms | 1000 |
| Jotai | 16K | 0.061ms | 0.104ms | 1000 |
| MobX | 14K | 0.072ms | 0.794ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   7.5M ops/sec
🥈 Valtio             ███████████████████████████████████████    7.3M ops/sec
🥉 Solid Signals      ███████████████████████████████████        6.5M ops/sec
 Zen                █████████████████████████████████          6.3M ops/sec
 MobX               ██████████████                             2.7M ops/sec
 Zustand            ███████████                                2.1M ops/sec
 Jotai              ██                                         320K ops/sec
 Redux Toolkit      █                                          115K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 7.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.5M | 0.000ms | 0.001ms | 1000 |
| Zen | 6.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 320K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 115K | 0.009ms | 0.014ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 MobX               ████████████████████████████████████████   26.7M ops/sec
🥈 Solid Signals      ██████████████████████                     14.8M ops/sec
🥉 Zustand            █████████████████████                      13.8M ops/sec
 Valtio             ████████████████████                       13.3M ops/sec
 Zen                ███████████████                            10.2M ops/sec
 Preact Signals     ███████████████                            9.8M ops/sec
 Redux Toolkit      █████████████                              8.5M ops/sec
 Jotai              █                                          484K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 26.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 14.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 13.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 484K | 0.002ms | 0.001ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   19.7M ops/sec
🥈 Zen                ████████████████████████████████           15.6M ops/sec
🥉 MobX               ████████████████████                       9.8M ops/sec
 Preact Signals     █████████████████                          8.2M ops/sec
 Zustand            ███████████████                            7.3M ops/sec
 Valtio             █████████████                              6.3M ops/sec
 Jotai              ██                                         917K ops/sec
 Redux Toolkit      █                                          321K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 19.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 9.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 7.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 6.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 917K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 321K | 0.003ms | 0.006ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   184K ops/sec
🥈 Solid Signals      ████████████████████████████████           146K ops/sec
🥉 Zustand            █████████████████████████████              134K ops/sec
 Preact Signals     ███████████████████████████                124K ops/sec
 Jotai              ███████████████████████                    105K ops/sec
 MobX               ████                                       17K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 184K | 0.005ms | 0.010ms | 1000 |
| Solid Signals | 146K | 0.007ms | 0.011ms | 1000 |
| Zustand | 134K | 0.007ms | 0.012ms | 1000 |
| Preact Signals | 124K | 0.008ms | 0.011ms | 1000 |
| Jotai | 105K | 0.009ms | 0.015ms | 1000 |
| MobX | 17K | 0.058ms | 0.075ms | 1000 |
| Valtio | 6K | 0.159ms | 0.395ms | 1000 |
| Redux Toolkit | 1K | 0.804ms | 1.182ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid Signals      ████████████████████████████████████████   5.0M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   5.0M ops/sec
🥉 MobX               █████████████████████████████████████      4.6M ops/sec
 Zen                █████████████████████████████████          4.1M ops/sec
 Valtio             █████████████████████████████              3.5M ops/sec
 Zustand            ████████                                   978K ops/sec
 Jotai              █                                          123K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 5.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 978K | 0.001ms | 0.003ms | 1000 |
| Jotai | 123K | 0.008ms | 0.011ms | 1000 |
| Redux Toolkit | 38K | 0.027ms | 0.035ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid Signals      ████████████████████████████████████████   9.1M ops/sec
🥈 Zen                ███████████████████████████████████        8.0M ops/sec
🥉 Preact Signals     ████████████████████████████               6.3M ops/sec
 Zustand            █████████                                  1.9M ops/sec
 Valtio             ███████                                    1.6M ops/sec
 MobX               ██████                                     1.3M ops/sec
 Jotai              █                                          167K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 9.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 8.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.9M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 167K | 0.006ms | 0.008ms | 1000 |
| Redux Toolkit | 57K | 0.017ms | 0.024ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid Signals      ████████████████████████████████████████   17.4M ops/sec
🥈 Zen                █████████████████████                      9.3M ops/sec
🥉 Valtio             ██████████████                             6.0M ops/sec
 Preact Signals     ███████████                                4.6M ops/sec
 Zustand            ██████████                                 4.4M ops/sec
 MobX               ██████                                     2.7M ops/sec
 Jotai              █                                          553K ops/sec
 Redux Toolkit      █                                          288K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 17.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 6.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.002ms | 1000 |
| Jotai | 553K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 288K | 0.003ms | 0.007ms | 1000 |

#### Dynamic Dependencies

```
🥇 MobX               ████████████████████████████████████████   16.0M ops/sec
🥈 Solid Signals      ██████████████████████████                 10.6M ops/sec
🥉 Preact Signals     █████████████████████████                  9.9M ops/sec
 Zen                █████████████████████                      8.4M ops/sec
 Valtio             ██████████████                             5.5M ops/sec
 Zustand            █████████████                              5.4M ops/sec
 Jotai              █                                          576K ops/sec
 Redux Toolkit      █                                          337K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 16.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 10.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 576K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 337K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                ████████████████████████████████████       1.0M ops/sec
🥉 MobX               ██████████████████████████████             884K ops/sec
 Zustand            ████████████████████████████               813K ops/sec
 Preact Signals     ███████████                                327K ops/sec
 Redux Toolkit      ███████                                    216K ops/sec
 Valtio             ███████                                    209K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.004ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.005ms | 1000 |
| MobX | 884K | 0.001ms | 0.003ms | 1000 |
| Zustand | 813K | 0.001ms | 0.005ms | 1000 |
| Preact Signals | 327K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 216K | 0.005ms | 0.018ms | 1000 |
| Valtio | 209K | 0.005ms | 0.012ms | 1000 |
| Jotai | 7K | 0.151ms | 0.354ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   4.6M ops/sec
🥈 Preact Signals     ████████████████████████████               3.2M ops/sec
🥉 Solid Signals      ███████████████████████████                3.2M ops/sec
 Zustand            ██████████████████                         2.0M ops/sec
 Valtio             █████████████                              1.5M ops/sec
 MobX               ████████                                   888K ops/sec
 Jotai              █                                          113K ops/sec
 Redux Toolkit      █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 3.2M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 888K | 0.001ms | 0.003ms | 1000 |
| Jotai | 113K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 58K | 0.017ms | 0.029ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 MobX               ████████████████████████████████████████   1.5M ops/sec
🥈 Solid Signals      █████████████████████████████████████      1.4M ops/sec
🥉 Zen                ████████████████████████████████           1.2M ops/sec
 Preact Signals     ██████████████████████████                 972K ops/sec
 Valtio             █████████████                              484K ops/sec
 Zustand            ███                                        112K ops/sec
 Jotai                                                         13K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.5M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.4M | 0.001ms | 0.003ms | 1000 |
| Zen | 1.2M | 0.001ms | 0.006ms | 1000 |
| Preact Signals | 972K | 0.001ms | 0.002ms | 1000 |
| Valtio | 484K | 0.002ms | 0.006ms | 1000 |
| Zustand | 112K | 0.009ms | 0.015ms | 1000 |
| Jotai | 13K | 0.077ms | 0.089ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.520ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid Signals      ████████████████████████████████████████   3.8M ops/sec
🥈 Zustand            ██████████████████████████████             2.8M ops/sec
🥉 Zen                ███████████████████████████                2.6M ops/sec
 Preact Signals     ███████████████████████                    2.2M ops/sec
 MobX               █████████████████████                      2.0M ops/sec
 Valtio             ███████████████                            1.4M ops/sec
 Redux Toolkit      ███                                        293K ops/sec
 Jotai              █                                          57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 3.8M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.002ms | 1000 |
| Zen | 2.6M | 0.000ms | 0.003ms | 1000 |
| Preact Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.005ms | 1000 |
| Valtio | 1.4M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.007ms | 1000 |
| Jotai | 57K | 0.018ms | 0.024ms | 1000 |


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

- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) v3.0.0 • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)

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

*Generated on 2025-11-14T00:34:49.938Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
