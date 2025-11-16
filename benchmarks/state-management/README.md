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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 64.2/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (50.6/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 64.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 50.6/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 45.9/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 38.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 44.1/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 41.0/100 | 50% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 39.8/100 | 49% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.8/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 15.1/100 | 19% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.0/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.9/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 64.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 50.6/100 | 79% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 45.9/100 | 71% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 38.8/100 | 60% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.2/100 | 33% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 17.7/100 | 28% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.1/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.6/100 | 9% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **64.2** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **50.6** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **45.9** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **38.8** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **21.2** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.7** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.1** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **5.6** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    22.1M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 Zustand            ███████████████████████████████████████    22.0M ops/sec
 Zen                █████████████████████████████████          18.4M ops/sec
 MobX               ███████████████████████████████            17.4M ops/sec
 Valtio             ██████████████████████████                 14.8M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.8M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   9.6M ops/sec
🥈 Redux Toolkit      ███████████████████████████████████████    9.5M ops/sec
🥉 Preact Signals     ██████████████████████████████████████     9.2M ops/sec
 Solid.js           ██████████████████████████████████████     9.1M ops/sec
 Zen                ██████████████████                         4.4M ops/sec
 MobX               ███                                        822K ops/sec
 Valtio             ██                                         520K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 9.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 822K | 0.001ms | 0.001ms | 1000 |
| Valtio | 520K | 0.002ms | 0.003ms | 1000 |
| Jotai | 31K | 0.033ms | 0.055ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            ███████████████████████████████████████    2.7M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                █████████                                  629K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 629K | 0.002ms | 0.002ms | 1000 |
| MobX | 87K | 0.012ms | 0.019ms | 1000 |
| Valtio | 52K | 0.020ms | 0.030ms | 1000 |
| Jotai | 3K | 0.333ms | 0.838ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Zen                █████████████████████████████              15.8M ops/sec
🥉 Preact Signals     ████████████████████                       10.6M ops/sec
 Zustand            █████████                                  5.0M ops/sec
 MobX               ██████                                     3.2M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          345K ops/sec
 Redux Toolkit                                                 161K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 345K | 0.004ms | 0.008ms | 1000 |
| Redux Toolkit | 161K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   9.4M ops/sec
🥈 Preact Signals     ████████████████████████                   5.5M ops/sec
🥉 Zen                ████████████████████                       4.6M ops/sec
 Zustand            ███                                        716K ops/sec
 MobX               ██                                         491K ops/sec
 Valtio             ██                                         382K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 9.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 716K | 0.001ms | 0.002ms | 1000 |
| MobX | 491K | 0.002ms | 0.004ms | 1000 |
| Valtio | 382K | 0.003ms | 0.004ms | 1000 |
| Jotai | 35K | 0.029ms | 0.039ms | 1000 |
| Redux Toolkit | 16K | 0.063ms | 0.080ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.7M ops/sec
🥉 Zen                ████████████                               1.1M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          60K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.001ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 60K | 0.017ms | 0.026ms | 1000 |
| Valtio | 41K | 0.024ms | 0.034ms | 1000 |
| Jotai | 3K | 0.305ms | 0.631ms | 1000 |
| Redux Toolkit | 2K | 0.633ms | 1.325ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   392K ops/sec
🥈 Preact Signals     ████████████████████████████████           317K ops/sec
🥉 Zen                █████████████                              131K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         348 ops/sec
 Redux Toolkit                                                 162 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 392K | 0.003ms | 0.004ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 131K | 0.008ms | 0.015ms | 1000 |
| Zustand | 8K | 0.132ms | 0.150ms | 1000 |
| MobX | 6K | 0.175ms | 0.295ms | 1000 |
| Valtio | 4K | 0.245ms | 0.265ms | 1000 |
| Jotai | 348 | 2.908ms | 4.822ms | 1000 |
| Redux Toolkit | 162 | 6.185ms | 7.650ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   11.4M ops/sec
🥈 Zen                ███████████████████████████████████        10.1M ops/sec
🥉 Solid.js           ████████████████                           4.7M ops/sec
 Zustand            █████████████                              3.6M ops/sec
 Valtio             ██                                         431K ops/sec
 Jotai              █                                          324K ops/sec
 MobX               █                                          206K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 431K | 0.009ms | 0.004ms | 1000 |
| Jotai | 324K | 0.003ms | 0.007ms | 1000 |
| MobX | 206K | 0.005ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.019ms | 0.047ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.1M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   9.0M ops/sec
🥉 Solid.js           ██████████████                             3.1M ops/sec
 Zustand            █████████████                              3.0M ops/sec
 Valtio             ████████                                   1.9M ops/sec
 MobX               ████                                       982K ops/sec
 Jotai              █                                          330K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 9.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| MobX | 982K | 0.001ms | 0.002ms | 1000 |
| Jotai | 330K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 58K | 0.018ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   23.3M ops/sec
🥈 Zustand            ███████████████████████████████████████    22.6M ops/sec
🥉 Preact Signals     █████████████████████████████████████      21.2M ops/sec
 Redux Toolkit      ████████████████████████████               16.2M ops/sec
 Valtio             ███████████████████████                    13.4M ops/sec
 Zen                ██████████████████████                     12.6M ops/sec
 MobX               ██████████████                             7.9M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   7.3M ops/sec
🥈 Zen                ███████████████████████████████████████    7.1M ops/sec
🥉 Zustand            ██████████████████                         3.3M ops/sec
 Valtio             ████████████████                           2.8M ops/sec
 Solid.js           ██████████████                             2.5M ops/sec
 MobX               ███████                                    1.4M ops/sec
 Jotai              ██                                         341K ops/sec
 Redux Toolkit                                                 81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.4M | 0.001ms | 0.002ms | 1000 |
| Jotai | 341K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 81K | 0.013ms | 0.025ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   18K ops/sec
🥈 Redux Toolkit      █                                          503 ops/sec
🥉 Valtio             █                                          502 ops/sec
 MobX               █                                          502 ops/sec
 Zustand            █                                          502 ops/sec
 Preact Signals     █                                          501 ops/sec
 Solid.js           █                                          501 ops/sec
 Zen                █                                          500 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 18K | 0.057ms | 0.080ms | 1000 |
| Redux Toolkit | 503 | 1.989ms | 2.124ms | 1000 |
| Valtio | 502 | 1.998ms | 2.342ms | 1000 |
| MobX | 502 | 1.996ms | 2.275ms | 1000 |
| Zustand | 502 | 1.997ms | 2.397ms | 1000 |
| Preact Signals | 501 | 1.997ms | 2.254ms | 1000 |
| Solid.js | 501 | 1.998ms | 2.078ms | 1000 |
| Zen | 500 | 2.008ms | 2.318ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   111K ops/sec
🥈 Solid.js           ████████████████████████████████████████   110K ops/sec
🥉 Zen                ██████████████████████████████████████     105K ops/sec
 Zustand            ██████████████████████                     60K ops/sec
 Valtio             ███████████████                            41K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         5K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 111K | 0.009ms | 0.013ms | 1000 |
| Solid.js | 110K | 0.009ms | 0.013ms | 1000 |
| Zen | 105K | 0.010ms | 0.014ms | 1000 |
| Zustand | 60K | 0.017ms | 0.026ms | 1000 |
| Valtio | 41K | 0.025ms | 0.037ms | 1000 |
| MobX | 36K | 0.029ms | 0.046ms | 1000 |
| Jotai | 5K | 0.192ms | 0.299ms | 1000 |
| Redux Toolkit | 3K | 0.358ms | 0.555ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Preact Signals     ██████████████████████                     11.6M ops/sec
🥉 Zen                ██████████                                 5.3M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.3M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         178K ops/sec
 Redux Toolkit                                                 129K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.003ms | 1000 |
| Jotai | 178K | 0.006ms | 0.012ms | 1000 |
| Redux Toolkit | 129K | 0.008ms | 0.015ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.8M ops/sec
🥈 Zen                █████████████████████████                  12.4M ops/sec
🥉 Zustand            ███████                                    3.2M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          452K ops/sec
 Valtio             █                                          265K ops/sec
 Jotai                                                         142K ops/sec
 Redux Toolkit                                                 71K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 452K | 0.002ms | 0.003ms | 1000 |
| Valtio | 265K | 0.004ms | 0.006ms | 1000 |
| Jotai | 142K | 0.007ms | 0.013ms | 1000 |
| Redux Toolkit | 71K | 0.014ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.9M ops/sec
🥈 Zen                █                                          125K ops/sec
🥉 Preact Signals     █                                          109K ops/sec
 Zustand            █                                          100K ops/sec
 Valtio                                                        56K ops/sec
 Redux Toolkit                                                 47K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.9M | 0.000ms | 0.001ms | 1000 |
| Zen | 125K | 0.008ms | 0.012ms | 1000 |
| Preact Signals | 109K | 0.009ms | 0.018ms | 1000 |
| Zustand | 100K | 0.010ms | 0.021ms | 1000 |
| Valtio | 56K | 0.021ms | 0.052ms | 1000 |
| Redux Toolkit | 47K | 0.027ms | 0.052ms | 1000 |
| MobX | 11K | 0.121ms | 0.258ms | 1000 |
| Jotai | 7K | 0.152ms | 0.369ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   10.0M ops/sec
🥈 Zen                ██████████████████████████████████         8.4M ops/sec
🥉 Zustand            █████████████                              3.2M ops/sec
 Solid.js           ██████████                                 2.4M ops/sec
 MobX               ███████                                    1.8M ops/sec
 Valtio             ████                                       999K ops/sec
 Redux Toolkit                                                 117K ops/sec
 Jotai                                                         88K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.8M | 0.001ms | 0.001ms | 1000 |
| Valtio | 999K | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 117K | 0.009ms | 0.018ms | 1000 |
| Jotai | 88K | 0.013ms | 0.030ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Valtio             █████████████████                          809K ops/sec
🥉 MobX               █████                                      259K ops/sec
 Jotai              ███                                        146K ops/sec
 Zustand            ██                                         106K ops/sec
 Preact Signals     ██                                         102K ops/sec
 Zen                ██                                         102K ops/sec
 Redux Toolkit                                                 819 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.002ms | 1000 |
| Valtio | 809K | 0.001ms | 0.004ms | 1000 |
| MobX | 259K | 0.004ms | 0.014ms | 1000 |
| Jotai | 146K | 0.007ms | 0.016ms | 1000 |
| Zustand | 106K | 0.010ms | 0.023ms | 1000 |
| Preact Signals | 102K | 0.010ms | 0.019ms | 1000 |
| Zen | 102K | 0.010ms | 0.021ms | 1000 |
| Redux Toolkit | 819 | 1.229ms | 1.437ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   313K ops/sec
🥈 Redux Toolkit      ████████████████████                       160K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 MobX               █                                          8K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         285 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 313K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.007ms | 1000 |
| Zustand | 160K | 0.006ms | 0.007ms | 1000 |
| Zen | 80K | 0.012ms | 0.019ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.059ms | 1000 |
| MobX | 8K | 0.128ms | 0.136ms | 1000 |
| Valtio | 5K | 0.206ms | 0.676ms | 1000 |
| Jotai | 285 | 3.523ms | 4.369ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   33K ops/sec
🥈 Preact Signals     ██████████                                 8K ops/sec
🥉 Zen                ██████████                                 8K ops/sec
 Zustand            █                                          755 ops/sec
 MobX               █                                          482 ops/sec
 Valtio                                                        401 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 33K | 0.033ms | 0.109ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.136ms | 1000 |
| Zen | 8K | 0.128ms | 0.137ms | 1000 |
| Zustand | 755 | 1.331ms | 1.927ms | 1000 |
| MobX | 482 | 2.079ms | 2.687ms | 1000 |
| Valtio | 401 | 2.502ms | 3.214ms | 1000 |
| Jotai | 34 | 29.832ms | 33.964ms | 1000 |
| Redux Toolkit | 15 | 68.477ms | 71.052ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.3M ops/sec
🥈 Zen                █████████████                              6.8M ops/sec
🥉 Preact Signals     ██████████                                 5.1M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          280K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 280K | 0.004ms | 0.008ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Preact Signals     █████████                                  5.0M ops/sec
🥉 Zen                █████████                                  4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          340K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 340K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Zen                ████████████████████                       10.5M ops/sec
🥉 Preact Signals     ██████████████                             7.5M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             █████                                      2.5M ops/sec
 MobX               █                                          791K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 791K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.8M ops/sec
🥈 Preact Signals     ██████████████                             6.4M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ███████                                    3.1M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         778K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 778K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         437K ops/sec
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
| Solid.js | 437K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.045ms | 1000 |
| Valtio | 8K | 0.128ms | 0.151ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.172ms | 0.209ms | 1000 |
| Zen | 4K | 0.250ms | 0.281ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Zen                ██                                         1.0M ops/sec
🥉 Preact Signals     █                                          788K ops/sec
 MobX                                                          119K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        74K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 788K | 0.001ms | 0.001ms | 1000 |
| MobX | 119K | 0.008ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 74K | 0.014ms | 0.024ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        279K ops/sec
 Valtio             █                                          90K ops/sec
 MobX               █                                          79K ops/sec
 Zen                █                                          78K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 279K | 0.004ms | 0.004ms | 1000 |
| Valtio | 90K | 0.011ms | 0.019ms | 1000 |
| MobX | 79K | 0.013ms | 0.021ms | 1000 |
| Zen | 78K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   15.0M ops/sec
🥈 Zen                ███████████████████████████                10.0M ops/sec
🥉 Preact Signals     ████████                                   3.0M ops/sec
 Zustand            █████                                      2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          116K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 116K | 0.009ms | 0.013ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.15.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T00:45:12.874Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
