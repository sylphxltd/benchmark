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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 61.7/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (50.1/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 61.7/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 50.1/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 46.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 42.6/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 21.0/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 79.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.1/100 | 57% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 43.7/100 | 55% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 42.2/100 | 53% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.7/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.7/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.2/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 61.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 50.1/100 | 81% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 46.5/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 42.6/100 | 69% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.0/100 | 34% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 16.1/100 | 26% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.4/100 | 18% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.5/100 | 9% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **61.7** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **50.1** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **46.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **42.6** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **21.0** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **16.1** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.4** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **5.5** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 Zustand            ███████████████████████████████████████    22.0M ops/sec
 Zen                ████████████████████████████████           18.1M ops/sec
 MobX               ███████████████████████████████            17.3M ops/sec
 Valtio             ███████████████████████████                15.2M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   13.2M ops/sec
🥈 Solid.js           ██████████████████████████████████████     12.5M ops/sec
🥉 Zustand            █████████████████████████████              9.5M ops/sec
 Preact Signals     ███████████████████████████                9.0M ops/sec
 Zen                ██████████████████                         6.1M ops/sec
 MobX               ██                                         822K ops/sec
 Valtio             ██                                         518K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 13.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 822K | 0.001ms | 0.001ms | 1000 |
| Valtio | 518K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.032ms | 0.070ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Zustand            ████████████████████████████████████████   2.8M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████                                778K ops/sec
 Zen                ████████                                   526K ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 778K | 0.001ms | 0.001ms | 1000 |
| Zen | 526K | 0.002ms | 0.002ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 51K | 0.021ms | 0.029ms | 1000 |
| Jotai | 3K | 0.324ms | 0.797ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Zen                ████████████████████████████████████       19.4M ops/sec
🥉 Preact Signals     ████████████████████████████               14.9M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          346K ops/sec
 Redux Toolkit                                                 151K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 346K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 151K | 0.007ms | 0.012ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   12.3M ops/sec
🥈 Preact Signals     █████████████████████████████████████      11.4M ops/sec
🥉 Zen                ██████████████                             4.2M ops/sec
 Zustand            ██                                         688K ops/sec
 MobX               ██                                         544K ops/sec
 Valtio             █                                          383K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 688K | 0.002ms | 0.002ms | 1000 |
| MobX | 544K | 0.002ms | 0.003ms | 1000 |
| Valtio | 383K | 0.003ms | 0.007ms | 1000 |
| Jotai | 37K | 0.027ms | 0.043ms | 1000 |
| Redux Toolkit | 16K | 0.065ms | 0.094ms | 1000 |

#### Burst Write (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   2.5M ops/sec
🥈 Solid.js           █████████████████████████                  1.6M ops/sec
🥉 Zen                ████████████████                           976K ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          72K ops/sec
 Valtio             █                                          38K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Zen | 976K | 0.001ms | 0.001ms | 1000 |
| Zustand | 76K | 0.013ms | 0.022ms | 1000 |
| MobX | 72K | 0.014ms | 0.024ms | 1000 |
| Valtio | 38K | 0.027ms | 0.041ms | 1000 |
| Jotai | 3K | 0.308ms | 0.629ms | 1000 |
| Redux Toolkit | 2K | 0.644ms | 0.863ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Preact Signals     ████████████████████████████████████████   311K ops/sec
🥈 Solid.js           ████████████████████████████████████████   309K ops/sec
🥉 Zen                ███████████████                            117K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         342 ops/sec
 Redux Toolkit                                                 154 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 311K | 0.003ms | 0.007ms | 1000 |
| Solid.js | 309K | 0.003ms | 0.006ms | 1000 |
| Zen | 117K | 0.009ms | 0.016ms | 1000 |
| Zustand | 8K | 0.131ms | 0.151ms | 1000 |
| MobX | 7K | 0.140ms | 0.164ms | 1000 |
| Valtio | 4K | 0.260ms | 0.336ms | 1000 |
| Jotai | 342 | 2.970ms | 5.197ms | 1000 |
| Redux Toolkit | 154 | 6.527ms | 7.902ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   7.2M ops/sec
🥈 Zen                ███████████████████████████████████████    7.0M ops/sec
🥉 Solid.js           █████████████████████                      3.7M ops/sec
 Zustand            ████████████████████                       3.6M ops/sec
 Valtio             ██                                         408K ops/sec
 Jotai              ██                                         311K ops/sec
 MobX               █                                          192K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 7.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 408K | 0.003ms | 0.004ms | 1000 |
| Jotai | 311K | 0.003ms | 0.007ms | 1000 |
| MobX | 192K | 0.005ms | 0.012ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.032ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   9.5M ops/sec
🥈 Zen                ███████████████████████████████████        8.3M ops/sec
🥉 Zustand            ███████████████                            3.5M ops/sec
 Solid.js           █████████████                              3.0M ops/sec
 Valtio             █████████                                  2.0M ops/sec
 MobX               ███                                        828K ops/sec
 Jotai              █                                          319K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.5M | 0.000ms | 0.001ms | 1000 |
| Zen | 8.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 828K | 0.001ms | 0.002ms | 1000 |
| Jotai | 319K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    22.0M ops/sec
🥉 Solid.js           ███████████████████████████████            17.3M ops/sec
 Zen                █████████████████████████████              16.1M ops/sec
 Valtio             █████████████████████████                  14.0M ops/sec
 Redux Toolkit      █████████████████████████                  13.8M ops/sec
 MobX               ██████████                                 5.7M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 17.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.7M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   6.8M ops/sec
🥈 Preact Signals     ██████████████████████████████████         5.8M ops/sec
🥉 Zustand            ███████████████████                        3.2M ops/sec
 Solid.js           ███████████████                            2.5M ops/sec
 Valtio             ███████████████                            2.5M ops/sec
 MobX               ████████                                   1.3M ops/sec
 Jotai              ██                                         348K ops/sec
 Redux Toolkit                                                 79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 348K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 79K | 0.013ms | 0.018ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   18K ops/sec
🥈 Redux Toolkit      █                                          503 ops/sec
🥉 MobX               █                                          502 ops/sec
 Zustand            █                                          501 ops/sec
 Solid.js           █                                          501 ops/sec
 Preact Signals     █                                          501 ops/sec
 Valtio             █                                          501 ops/sec
 Zen                █                                          501 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 18K | 0.055ms | 0.078ms | 1000 |
| Redux Toolkit | 503 | 1.989ms | 2.116ms | 1000 |
| MobX | 502 | 1.996ms | 2.280ms | 1000 |
| Zustand | 501 | 1.998ms | 2.226ms | 1000 |
| Solid.js | 501 | 1.998ms | 2.258ms | 1000 |
| Preact Signals | 501 | 1.998ms | 2.252ms | 1000 |
| Valtio | 501 | 2.005ms | 2.258ms | 1000 |
| Zen | 501 | 2.008ms | 2.299ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   104K ops/sec
🥈 Solid.js           ███████████████████████████████████████    101K ops/sec
🥉 Zen                ███████████████████████████████████████    101K ops/sec
 Zustand            ███████████████████████                    59K ops/sec
 Valtio             █████████████████                          43K ops/sec
 MobX               ██████████████                             35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 104K | 0.010ms | 0.012ms | 1000 |
| Solid.js | 101K | 0.010ms | 0.019ms | 1000 |
| Zen | 101K | 0.010ms | 0.014ms | 1000 |
| Zustand | 59K | 0.017ms | 0.027ms | 1000 |
| Valtio | 43K | 0.024ms | 0.033ms | 1000 |
| MobX | 35K | 0.029ms | 0.039ms | 1000 |
| Jotai | 6K | 0.188ms | 0.356ms | 1000 |
| Redux Toolkit | 3K | 0.348ms | 0.487ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Preact Signals     █████████████████████                      11.1M ops/sec
🥉 Zen                ████████████                               6.4M ops/sec
 Zustand            ██████████                                 5.1M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         189K ops/sec
 Redux Toolkit                                                 138K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 189K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 138K | 0.007ms | 0.018ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.8M ops/sec
🥈 Zen                ████████████████████████████████           16.0M ops/sec
🥉 Zustand            ███████                                    3.2M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          430K ops/sec
 Valtio             █                                          266K ops/sec
 Jotai                                                         135K ops/sec
 Redux Toolkit                                                 65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.002ms | 1000 |
| MobX | 430K | 0.002ms | 0.003ms | 1000 |
| Valtio | 266K | 0.004ms | 0.005ms | 1000 |
| Jotai | 135K | 0.009ms | 0.017ms | 1000 |
| Redux Toolkit | 65K | 0.016ms | 0.030ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.8M ops/sec
🥈 Zen                █                                          128K ops/sec
🥉 Preact Signals     █                                          111K ops/sec
 Zustand            █                                          101K ops/sec
 Valtio             █                                          71K ops/sec
 Redux Toolkit                                                 46K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 128K | 0.008ms | 0.010ms | 1000 |
| Preact Signals | 111K | 0.010ms | 0.018ms | 1000 |
| Zustand | 101K | 0.010ms | 0.023ms | 1000 |
| Valtio | 71K | 0.016ms | 0.038ms | 1000 |
| Redux Toolkit | 46K | 0.027ms | 0.047ms | 1000 |
| MobX | 11K | 0.116ms | 0.197ms | 1000 |
| Jotai | 7K | 0.148ms | 0.347ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.7M ops/sec
🥈 Zen                ████████████████████████████████           11.0M ops/sec
🥉 Zustand            ██████████                                 3.5M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 122K ops/sec
 Jotai                                                         104K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 122K | 0.008ms | 0.012ms | 1000 |
| Jotai | 104K | 0.010ms | 0.021ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Valtio             █████████████████                          821K ops/sec
🥉 MobX               █████                                      235K ops/sec
 Jotai              ███                                        138K ops/sec
 Zustand            ███                                        124K ops/sec
 Preact Signals     ██                                         103K ops/sec
 Zen                ██                                         101K ops/sec
 Redux Toolkit                                                 804 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.002ms | 1000 |
| Valtio | 821K | 0.001ms | 0.006ms | 1000 |
| MobX | 235K | 0.005ms | 0.016ms | 1000 |
| Jotai | 138K | 0.008ms | 0.022ms | 1000 |
| Zustand | 124K | 0.008ms | 0.017ms | 1000 |
| Preact Signals | 103K | 0.010ms | 0.019ms | 1000 |
| Zen | 101K | 0.011ms | 0.014ms | 1000 |
| Redux Toolkit | 804 | 1.254ms | 1.505ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   318K ops/sec
🥉 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         292 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zen | 64K | 0.016ms | 0.022ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.069ms | 1000 |
| Valtio | 5K | 0.201ms | 0.649ms | 1000 |
| MobX | 4K | 0.262ms | 0.282ms | 1000 |
| Jotai | 292 | 3.438ms | 4.250ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   31K ops/sec
🥈 Preact Signals     ███████████                                8K ops/sec
🥉 Zen                ████████                                   6K ops/sec
 Zustand            █                                          760 ops/sec
 MobX               █                                          496 ops/sec
 Valtio             █                                          415 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 31K | 0.035ms | 0.118ms | 1000 |
| Preact Signals | 8K | 0.118ms | 0.127ms | 1000 |
| Zen | 6K | 0.166ms | 0.187ms | 1000 |
| Zustand | 760 | 1.321ms | 1.857ms | 1000 |
| MobX | 496 | 2.021ms | 2.590ms | 1000 |
| Valtio | 415 | 2.415ms | 3.042ms | 1000 |
| Jotai | 34 | 29.539ms | 34.458ms | 1000 |
| Redux Toolkit | 14 | 69.678ms | 73.904ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.1M ops/sec
🥈 Zen                ██████████████                             6.8M ops/sec
🥉 Preact Signals     ██████████                                 5.0M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          292K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 292K | 0.003ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Zen                █████████                                  5.0M ops/sec
🥉 Preact Signals     █████████                                  4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          339K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 339K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zen                ███████████████████                        10.7M ops/sec
🥉 Preact Signals     █████████████                              7.4M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               █                                          834K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 834K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Preact Signals     ██████████████                             6.5M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ██████████                                 4.5M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         773K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 773K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         430K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Zen                █                                          13K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 430K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.049ms | 1000 |
| Zen | 13K | 0.076ms | 0.091ms | 1000 |
| Valtio | 8K | 0.126ms | 0.159ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.173ms | 0.216ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   19.7M ops/sec
🥈 Zen                ██                                         968K ops/sec
🥉 Preact Signals     ██                                         748K ops/sec
 MobX                                                          117K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        78K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 968K | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 748K | 0.001ms | 0.001ms | 1000 |
| MobX | 117K | 0.009ms | 0.012ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 78K | 0.013ms | 0.023ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            █████████████████████████████████          2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        270K ops/sec
 Zen                ██                                         143K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 270K | 0.004ms | 0.004ms | 1000 |
| Zen | 143K | 0.007ms | 0.010ms | 1000 |
| Valtio | 92K | 0.011ms | 0.019ms | 1000 |
| MobX | 80K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   14.8M ops/sec
🥈 Zen                ████████████████████████████               10.2M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          112K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 14.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 112K | 0.009ms | 0.024ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.13.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-15T23:29:19.270Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
