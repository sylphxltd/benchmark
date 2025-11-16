<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2016,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-27-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 85.0/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (65.0/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 85.0/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 65.0/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 60.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 45.9/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 25.3/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 89.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 49.1/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.1/100 | 53% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 39.1/100 | 44% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 18.0/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 15.8/100 | 18% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.8/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 85.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 65.0/100 | 76% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 60.5/100 | 71% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 45.9/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.3/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 19.9/100 | 23% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.9/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.3/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **85.0** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **65.0** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **60.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **45.9** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.3** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **19.9** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.9** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   22.5M ops/sec
🥈 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.2M ops/sec
 Preact Signals     ███████████████████████████████████████    22.1M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 MobX               ███████████████████████████████            17.4M ops/sec
 Valtio             ███████████████████████████                15.0M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.8M ops/sec
🥈 Redux Toolkit      ███████████████████████████████████████    11.6M ops/sec
🥉 Zustand            ██████████████████████████████████████     11.4M ops/sec
 Zen                ██████████████████████████████             9.0M ops/sec
 Preact Signals     ███████████████████████████                7.9M ops/sec
 MobX               ███                                        813K ops/sec
 Valtio             ██                                         452K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 813K | 0.001ms | 0.001ms | 1000 |
| Valtio | 452K | 0.002ms | 0.004ms | 1000 |
| Jotai | 31K | 0.033ms | 0.049ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.7M ops/sec
🥈 Zen                ███████████████████████████                1.8M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 MobX               █                                          84K ops/sec
 Valtio             █                                          46K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.8M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 84K | 0.012ms | 0.019ms | 1000 |
| Valtio | 46K | 0.022ms | 0.031ms | 1000 |
| Jotai | 3K | 0.323ms | 0.781ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Preact Signals     ████████████████████████████               14.7M ops/sec
🥉 Zen                ███████████                                6.0M ops/sec
 Zustand            █████████                                  4.6M ops/sec
 MobX               ███████                                    3.6M ops/sec
 Valtio             ██████                                     3.1M ops/sec
 Jotai              █                                          312K ops/sec
 Redux Toolkit                                                 157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 312K | 0.004ms | 0.009ms | 1000 |
| Redux Toolkit | 157K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   12.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████       11.0M ops/sec
🥉 Zen                ██████████████                             4.3M ops/sec
 Zustand            ██                                         697K ops/sec
 MobX               ██                                         508K ops/sec
 Valtio             █                                          402K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 697K | 0.001ms | 0.002ms | 1000 |
| MobX | 508K | 0.002ms | 0.004ms | 1000 |
| Valtio | 402K | 0.003ms | 0.004ms | 1000 |
| Jotai | 35K | 0.029ms | 0.047ms | 1000 |
| Redux Toolkit | 16K | 0.065ms | 0.095ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.4M ops/sec
🥈 Preact Signals     ████████████████████████                   2.0M ops/sec
🥉 Zen                ████████████████████                       1.7M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          72K ops/sec
 Valtio             █                                          44K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.7M | 0.001ms | 0.001ms | 1000 |
| Zustand | 76K | 0.013ms | 0.022ms | 1000 |
| MobX | 72K | 0.014ms | 0.025ms | 1000 |
| Valtio | 44K | 0.023ms | 0.032ms | 1000 |
| Jotai | 3K | 0.320ms | 0.656ms | 1000 |
| Redux Toolkit | 2K | 0.648ms | 0.862ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   345K ops/sec
🥈 Preact Signals     █████████████████████████████████████      317K ops/sec
🥉 Zen                ████████████████████████                   208K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          8K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         339 ops/sec
 Redux Toolkit                                                 152 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 345K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 208K | 0.005ms | 0.005ms | 1000 |
| Zustand | 8K | 0.131ms | 0.160ms | 1000 |
| MobX | 8K | 0.133ms | 0.157ms | 1000 |
| Valtio | 4K | 0.245ms | 0.273ms | 1000 |
| Jotai | 339 | 2.992ms | 5.150ms | 1000 |
| Redux Toolkit | 152 | 6.592ms | 7.580ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.3M ops/sec
🥈 Zen                ██████████████████                         4.8M ops/sec
🥉 Solid.js           ██████████████████                         4.7M ops/sec
 Zustand            █████████████                              3.4M ops/sec
 Valtio             ██                                         431K ops/sec
 Jotai              █                                          297K ops/sec
 MobX               █                                          200K ops/sec
 Redux Toolkit                                                 60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 431K | 0.003ms | 0.004ms | 1000 |
| Jotai | 297K | 0.004ms | 0.008ms | 1000 |
| MobX | 200K | 0.005ms | 0.012ms | 1000 |
| Redux Toolkit | 60K | 0.017ms | 0.043ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   9.3M ops/sec
🥈 Zen                ██████████████████                         4.2M ops/sec
🥉 Zustand            ███████████████                            3.4M ops/sec
 Solid.js           █████████████                              2.9M ops/sec
 Valtio             ██████████                                 2.3M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              █                                          306K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.3M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 306K | 0.005ms | 0.007ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.031ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.8M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.8M ops/sec
🥉 Zen                ██████████████████████████████████████     21.7M ops/sec
 Preact Signals     ██████████████████████████████████████     21.4M ops/sec
 Redux Toolkit      ██████████████████████████████             17.1M ops/sec
 Valtio             ███████████████████████                    13.3M ops/sec
 MobX               █████████████                              7.4M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   6.6M ops/sec
🥈 Zen                █████████████████████████                  4.1M ops/sec
🥉 Zustand            ████████████████████                       3.4M ops/sec
 Valtio             ████████████████                           2.6M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 MobX               ██████                                     965K ops/sec
 Jotai              ██                                         321K ops/sec
 Redux Toolkit                                                 77K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 965K | 0.001ms | 0.002ms | 1000 |
| Jotai | 321K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 77K | 0.013ms | 0.025ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   102K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   102K ops/sec
🥉 Zen                ██████████████████████████                 68K ops/sec
 Zustand            ███████████████████████                    60K ops/sec
 Valtio             ████████████████                           42K ops/sec
 MobX               █████████████                              34K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 102K | 0.010ms | 0.018ms | 1000 |
| Preact Signals | 102K | 0.010ms | 0.018ms | 1000 |
| Zen | 68K | 0.016ms | 0.025ms | 1000 |
| Zustand | 60K | 0.018ms | 0.027ms | 1000 |
| Valtio | 42K | 0.024ms | 0.037ms | 1000 |
| MobX | 34K | 0.030ms | 0.064ms | 1000 |
| Jotai | 6K | 0.180ms | 0.253ms | 1000 |
| Redux Toolkit | 3K | 0.370ms | 0.546ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Preact Signals     ███████████████████████                    12.0M ops/sec
🥉 Zustand            ██████████                                 5.1M ops/sec
 Zen                ██████                                     3.3M ops/sec
 MobX               ████                                       2.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         195K ops/sec
 Redux Toolkit                                                 136K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 195K | 0.005ms | 0.008ms | 1000 |
| Redux Toolkit | 136K | 0.007ms | 0.011ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   18.6M ops/sec
🥈 Zen                ████████████                               5.7M ops/sec
🥉 Zustand            ███████                                    3.4M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          445K ops/sec
 Valtio             █                                          266K ops/sec
 Jotai                                                         149K ops/sec
 Redux Toolkit                                                 68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 445K | 0.002ms | 0.003ms | 1000 |
| Valtio | 266K | 0.004ms | 0.007ms | 1000 |
| Jotai | 149K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 68K | 0.015ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.4M ops/sec
🥈 Preact Signals     █                                          112K ops/sec
🥉 Zustand            █                                          101K ops/sec
 Valtio                                                        58K ops/sec
 Zen                                                           43K ops/sec
 Redux Toolkit                                                 41K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 112K | 0.009ms | 0.018ms | 1000 |
| Zustand | 101K | 0.010ms | 0.020ms | 1000 |
| Valtio | 58K | 0.093ms | 0.038ms | 1000 |
| Zen | 43K | 0.024ms | 0.035ms | 1000 |
| Redux Toolkit | 41K | 0.032ms | 0.068ms | 1000 |
| MobX | 12K | 0.113ms | 0.197ms | 1000 |
| Jotai | 7K | 0.151ms | 0.349ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.2M ops/sec
🥈 Zen                █████████████                              4.4M ops/sec
🥉 Zustand            ███████████                                3.5M ops/sec
 Solid.js           ███████                                    2.5M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 117K ops/sec
 Jotai                                                         105K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 117K | 0.009ms | 0.015ms | 1000 |
| Jotai | 105K | 0.010ms | 0.019ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Valtio             █████████████████                          853K ops/sec
🥉 MobX               █████                                      258K ops/sec
 Jotai              ███                                        134K ops/sec
 Preact Signals     ██                                         102K ops/sec
 Zen                ██                                         99K ops/sec
 Zustand            ██                                         88K ops/sec
 Redux Toolkit                                                 810 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 853K | 0.001ms | 0.005ms | 1000 |
| MobX | 258K | 0.004ms | 0.013ms | 1000 |
| Jotai | 134K | 0.008ms | 0.025ms | 1000 |
| Preact Signals | 102K | 0.010ms | 0.019ms | 1000 |
| Zen | 99K | 0.010ms | 0.019ms | 1000 |
| Zustand | 88K | 0.011ms | 0.021ms | 1000 |
| Redux Toolkit | 810 | 1.244ms | 1.605ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥈 Solid.js           ████████████████████████████████████████   318K ops/sec
🥉 Zustand            ████████████████████████████████████████   317K ops/sec
 Zen                ███████                                    54K ops/sec
 Preact Signals     ██                                         19K ops/sec
 MobX               █                                          6K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         291 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 54K | 0.019ms | 0.026ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.060ms | 1000 |
| MobX | 6K | 0.168ms | 0.178ms | 1000 |
| Valtio | 5K | 0.206ms | 0.729ms | 1000 |
| Jotai | 291 | 3.449ms | 4.312ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   34K ops/sec
🥈 Zen                ████████████                               10K ops/sec
🥉 Preact Signals     ██████████                                 8K ops/sec
 Zustand            █                                          753 ops/sec
 MobX               █                                          556 ops/sec
 Valtio                                                        406 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 34K | 0.033ms | 0.076ms | 1000 |
| Zen | 10K | 0.100ms | 0.124ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.139ms | 1000 |
| Zustand | 753 | 1.335ms | 1.973ms | 1000 |
| MobX | 556 | 1.804ms | 2.434ms | 1000 |
| Valtio | 406 | 2.471ms | 3.108ms | 1000 |
| Jotai | 33 | 30.634ms | 36.664ms | 1000 |
| Redux Toolkit | 14 | 69.423ms | 71.135ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.6M ops/sec
🥈 Preact Signals     ██████████                                 5.2M ops/sec
🥉 Zen                ██████████                                 5.1M ops/sec
 Valtio             ████                                       2.1M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          300K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 300K | 0.003ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Zen                ██████████                                 5.5M ops/sec
🥉 Preact Signals     █████████                                  5.1M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          344K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 344K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Preact Signals     ██████████████                             7.9M ops/sec
🥉 Zen                ██████████                                 5.6M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             █████                                      2.6M ops/sec
 MobX               ██                                         914K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 914K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.7M ops/sec
🥈 Preact Signals     █████████████                              6.2M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ████                                       1.7M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         769K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.7M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 769K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         436K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Zen                                                           7K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 436K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.035ms | 0.046ms | 1000 |
| Valtio | 8K | 0.122ms | 0.137ms | 1000 |
| Zen | 7K | 0.146ms | 0.165ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.172ms | 0.205ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.7M ops/sec
🥈 Zen                ██████████                                 5.1M ops/sec
🥉 Preact Signals     ██                                         828K ops/sec
 MobX                                                          154K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        70K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 828K | 0.001ms | 0.001ms | 1000 |
| MobX | 154K | 0.007ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 70K | 0.016ms | 0.027ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.3M ops/sec
🥈 Zustand            ██████████████████████████████████         2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        276K ops/sec
 Valtio             █                                          90K ops/sec
 MobX               █                                          79K ops/sec
 Zen                █                                          73K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 276K | 0.004ms | 0.004ms | 1000 |
| Valtio | 90K | 0.011ms | 0.019ms | 1000 |
| MobX | 79K | 0.013ms | 0.024ms | 1000 |
| Zen | 73K | 0.014ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   12.7M ops/sec
🥈 Zen                ██████████████████                         5.6M ops/sec
🥉 Preact Signals     █████████                                  3.0M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          123K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 123K | 0.008ms | 0.015ms | 1000 |
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
- **Async Operations**: 1 tests
- **Real-World Scenarios**: 4 tests
- **Stress Tests**: 3 tests

**Total**: 27 tests × 8 libraries = 216 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid.js](https://github.com/solidjs/solid)** (`1.9.10`)  • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.20.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T06:02:32.952Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
