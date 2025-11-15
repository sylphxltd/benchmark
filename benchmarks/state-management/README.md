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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 59.1/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (43.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 59.1/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 43.4/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 40.3/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 37.2/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 17.0/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 44.8/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 43.8/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 41.9/100 | 52% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.1/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 12.0/100 | 15% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.1/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.2/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 59.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 43.4/100 | 73% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 40.3/100 | 68% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 37.2/100 | 63% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.0/100 | 29% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 11.4/100 | 19% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.8/100 | 13% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.3/100 | 7% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **59.1** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **43.4** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **40.3** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **37.2** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **17.0** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **11.4** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **7.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            ███████████████████████████████████████    2.7M ops/sec
 Preact Signals     █████████████████████                      1.5M ops/sec
 Zen                ███████████                                765K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 765K | 0.001ms | 0.003ms | 1000 |
| MobX | 87K | 0.012ms | 0.019ms | 1000 |
| Valtio | 53K | 0.020ms | 0.029ms | 1000 |
| Jotai | 3K | 0.327ms | 0.717ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   12.5M ops/sec
🥈 Zustand            ████████████████████████████████████████   12.4M ops/sec
🥉 Preact Signals     ██████████████████████████████             9.2M ops/sec
 Redux Toolkit      ███████████████████████████                8.6M ops/sec
 Zen                ██████████████                             4.3M ops/sec
 MobX               ███                                        838K ops/sec
 Valtio             ██                                         509K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 838K | 0.001ms | 0.002ms | 1000 |
| Valtio | 509K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.033ms | 0.055ms | 1000 |

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    22.2M ops/sec
🥉 Zustand            ███████████████████████████████████████    22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.1M ops/sec
 Zen                ████████████████████████████████           17.8M ops/sec
 Valtio             ███████████████████████████                15.0M ops/sec
 MobX               ███████████████████████                    12.9M ops/sec
 Jotai              ██                                         1.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 12.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.1M | 0.001ms | 0.002ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.6M ops/sec
🥈 Solid.js           ████████████████████████                   7.6M ops/sec
🥉 Zen                █████████████████                          5.3M ops/sec
 Zustand            ██                                         747K ops/sec
 MobX               ██                                         551K ops/sec
 Valtio             █                                          409K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 7.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 747K | 0.001ms | 0.002ms | 1000 |
| MobX | 551K | 0.002ms | 0.003ms | 1000 |
| Valtio | 409K | 0.002ms | 0.003ms | 1000 |
| Jotai | 35K | 0.029ms | 0.040ms | 1000 |
| Redux Toolkit | 16K | 0.062ms | 0.095ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Preact Signals     ███████████████████████████████            2.7M ops/sec
🥉 Zen                ███████████████████████                    2.0M ops/sec
 Zustand            █                                          78K ops/sec
 MobX               █                                          67K ops/sec
 Valtio                                                        40K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 78K | 0.013ms | 0.022ms | 1000 |
| MobX | 67K | 0.015ms | 0.025ms | 1000 |
| Valtio | 40K | 0.025ms | 0.035ms | 1000 |
| Jotai | 3K | 0.300ms | 0.626ms | 1000 |
| Redux Toolkit | 2K | 0.620ms | 1.172ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   368K ops/sec
🥈 Zen                ████████████████████████████               260K ops/sec
🥉 Preact Signals     ████████████                               109K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         351 ops/sec
 Redux Toolkit                                                 161 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 368K | 0.003ms | 0.005ms | 1000 |
| Zen | 260K | 0.004ms | 0.004ms | 1000 |
| Preact Signals | 109K | 0.009ms | 0.019ms | 1000 |
| Zustand | 8K | 0.129ms | 0.152ms | 1000 |
| MobX | 7K | 0.151ms | 0.170ms | 1000 |
| Valtio | 4K | 0.257ms | 0.287ms | 1000 |
| Jotai | 351 | 2.891ms | 4.984ms | 1000 |
| Redux Toolkit | 161 | 6.239ms | 7.175ms | 1000 |

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Preact Signals     █████████████████████████████████████      19.6M ops/sec
🥉 Zen                ████████████████████████████               14.7M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ██████                                     3.4M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          361K ops/sec
 Redux Toolkit                                                 166K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 361K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 166K | 0.006ms | 0.009ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.6M ops/sec
🥈 Preact Signals     ██████████████████████████                 7.6M ops/sec
🥉 Solid.js           ████████████████                           4.6M ops/sec
 Zustand            ███████████                                3.2M ops/sec
 Valtio             ██                                         436K ops/sec
 Jotai              █                                          301K ops/sec
 MobX               █                                          199K ops/sec
 Redux Toolkit                                                 63K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 436K | 0.002ms | 0.004ms | 1000 |
| Jotai | 301K | 0.004ms | 0.009ms | 1000 |
| MobX | 199K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 63K | 0.016ms | 0.044ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   6.9M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     6.6M ops/sec
🥉 Zustand            ██████████████████                         3.0M ops/sec
 Solid.js           ███████████████                            2.5M ops/sec
 Valtio             ███████████                                1.9M ops/sec
 MobX               █████                                      895K ops/sec
 Jotai              ██                                         309K ops/sec
 Redux Toolkit                                                 62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| MobX | 895K | 0.001ms | 0.002ms | 1000 |
| Jotai | 309K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 62K | 0.017ms | 0.032ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zustand            ███████████████████████████████████████    21.7M ops/sec
🥉 Preact Signals     ████████████████████████████████           17.8M ops/sec
 Redux Toolkit      █████████████████████████████              16.3M ops/sec
 Valtio             ████████████████████████                   13.2M ops/sec
 Zen                ███████████████████████                    12.9M ops/sec
 MobX               ██████████                                 5.5M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   5.8M ops/sec
🥈 Zen                ███████████████████████████████████████    5.8M ops/sec
🥉 Zustand            ████████████████████                       3.0M ops/sec
 Valtio             █████████████████                          2.4M ops/sec
 Solid.js           ███████████████                            2.2M ops/sec
 MobX               ████████                                   1.2M ops/sec
 Jotai              ██                                         323K ops/sec
 Redux Toolkit      █                                          80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 323K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 80K | 0.013ms | 0.024ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   18K ops/sec
🥈 Redux Toolkit      █                                          503 ops/sec
🥉 MobX               █                                          501 ops/sec
 Zustand            █                                          501 ops/sec
 Valtio             █                                          501 ops/sec
 Solid.js           █                                          500 ops/sec
 Preact Signals     █                                          500 ops/sec
 Zen                █                                          500 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 18K | 0.056ms | 0.073ms | 1000 |
| Redux Toolkit | 503 | 1.990ms | 2.078ms | 1000 |
| MobX | 501 | 1.997ms | 2.057ms | 1000 |
| Zustand | 501 | 1.998ms | 2.039ms | 1000 |
| Valtio | 501 | 1.998ms | 2.042ms | 1000 |
| Solid.js | 500 | 1.998ms | 2.053ms | 1000 |
| Preact Signals | 500 | 1.999ms | 2.052ms | 1000 |
| Zen | 500 | 2.020ms | 2.050ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   108K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    105K ops/sec
🥉 Zen                ██████████████████████████████████████     104K ops/sec
 Zustand            ██████████████████████                     60K ops/sec
 Valtio             ███████████████                            41K ops/sec
 MobX               █████████████                              35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 108K | 0.009ms | 0.022ms | 1000 |
| Preact Signals | 105K | 0.010ms | 0.019ms | 1000 |
| Zen | 104K | 0.010ms | 0.018ms | 1000 |
| Zustand | 60K | 0.018ms | 0.033ms | 1000 |
| Valtio | 41K | 0.024ms | 0.037ms | 1000 |
| MobX | 35K | 0.029ms | 0.039ms | 1000 |
| Jotai | 6K | 0.185ms | 0.359ms | 1000 |
| Redux Toolkit | 3K | 0.350ms | 0.526ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   16.0M ops/sec
🥈 Preact Signals     ████████████████████████████               11.2M ops/sec
🥉 Zen                ███████████████                            6.0M ops/sec
 Zustand            ████████████                               4.9M ops/sec
 MobX               █████                                      2.0M ops/sec
 Valtio             ███                                        1.0M ops/sec
 Jotai                                                         176K ops/sec
 Redux Toolkit                                                 139K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 16.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.003ms | 1000 |
| Jotai | 176K | 0.008ms | 0.012ms | 1000 |
| Redux Toolkit | 139K | 0.008ms | 0.019ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.5M ops/sec
🥈 Zen                ████████████████████████████████           15.4M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          443K ops/sec
 Valtio             █                                          288K ops/sec
 Jotai                                                         161K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 443K | 0.002ms | 0.003ms | 1000 |
| Valtio | 288K | 0.004ms | 0.006ms | 1000 |
| Jotai | 161K | 0.006ms | 0.011ms | 1000 |
| Redux Toolkit | 69K | 0.015ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.6M ops/sec
🥈 Zen                ██                                         216K ops/sec
🥉 Preact Signals     █                                          112K ops/sec
 Zustand            █                                          105K ops/sec
 Valtio             █                                          78K ops/sec
 Redux Toolkit                                                 41K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 216K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 112K | 0.010ms | 0.018ms | 1000 |
| Zustand | 105K | 0.010ms | 0.017ms | 1000 |
| Valtio | 78K | 0.013ms | 0.025ms | 1000 |
| Redux Toolkit | 41K | 0.033ms | 0.079ms | 1000 |
| MobX | 11K | 0.120ms | 0.302ms | 1000 |
| Jotai | 7K | 0.150ms | 0.428ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.8M ops/sec
🥈 Zen                ██████████████████████████████████████     13.0M ops/sec
🥉 Zustand            ██████████                                 3.5M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.0M ops/sec
 Redux Toolkit                                                 121K ops/sec
 Jotai                                                         91K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 121K | 0.009ms | 0.021ms | 1000 |
| Jotai | 91K | 0.014ms | 0.026ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   316K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         283 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 316K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.007ms | 1000 |
| Zen | 80K | 0.013ms | 0.019ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.058ms | 1000 |
| Valtio | 5K | 0.197ms | 0.238ms | 1000 |
| MobX | 4K | 0.261ms | 0.284ms | 1000 |
| Jotai | 283 | 3.539ms | 4.175ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   35K ops/sec
🥈 Zen                ██████████                                 9K ops/sec
🥉 Preact Signals     ██████████                                 9K ops/sec
 Zustand            █                                          737 ops/sec
 MobX               █                                          457 ops/sec
 Valtio                                                        429 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 35K | 0.032ms | 0.075ms | 1000 |
| Zen | 9K | 0.110ms | 0.129ms | 1000 |
| Preact Signals | 9K | 0.116ms | 0.136ms | 1000 |
| Zustand | 737 | 1.362ms | 1.967ms | 1000 |
| MobX | 457 | 2.191ms | 2.744ms | 1000 |
| Valtio | 429 | 2.339ms | 2.901ms | 1000 |
| Jotai | 34 | 29.491ms | 33.628ms | 1000 |
| Redux Toolkit | 15 | 65.872ms | 69.568ms | 1000 |

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.2M ops/sec
🥈 Valtio             ████████████                               635K ops/sec
🥉 MobX               ████                                       230K ops/sec
 Jotai              ███                                        166K ops/sec
 Zustand            ██                                         128K ops/sec
 Zen                ██                                         105K ops/sec
 Preact Signals     ██                                         104K ops/sec
 Redux Toolkit                                                 820 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.2M | 0.001ms | 0.002ms | 1000 |
| Valtio | 635K | 0.002ms | 0.003ms | 1000 |
| MobX | 230K | 0.005ms | 0.014ms | 1000 |
| Jotai | 166K | 0.006ms | 0.014ms | 1000 |
| Zustand | 128K | 0.009ms | 0.018ms | 1000 |
| Zen | 105K | 0.010ms | 0.018ms | 1000 |
| Preact Signals | 104K | 0.010ms | 0.019ms | 1000 |
| Redux Toolkit | 820 | 1.230ms | 1.529ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.4M ops/sec
🥈 Zen                ██████████████████████████                 13.4M ops/sec
🥉 Preact Signals     ██████████                                 5.1M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          282K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 282K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                ████████████████████████                   13.5M ops/sec
🥉 Preact Signals     █████████                                  4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          327K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.002ms | 0.001ms | 1000 |
| MobX | 327K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Zen                █████████████████████████                  13.9M ops/sec
🥉 Preact Signals     █████████████                              7.1M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               ██                                         844K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 844K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.8M ops/sec
🥈 Preact Signals     ███████████████                            7.0M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                █████████                                  4.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         775K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 775K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         435K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Zen                █                                          13K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 435K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.043ms | 1000 |
| Zen | 13K | 0.076ms | 0.100ms | 1000 |
| Valtio | 8K | 0.125ms | 0.146ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.173ms | 0.205ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   15.0M ops/sec
🥈 Zen                ████████████████████████████████           12.1M ops/sec
🥉 Preact Signals     ████████                                   3.0M ops/sec
 Zustand            █████                                      2.0M ops/sec
 Valtio             ████                                       1.6M ops/sec
 MobX                                                          115K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 115K | 0.009ms | 0.012ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.4M ops/sec
🥈 Zen                ██████████████████████████                 13.3M ops/sec
🥉 Preact Signals     █                                          732K ops/sec
 MobX                                                          121K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        74K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 732K | 0.001ms | 0.001ms | 1000 |
| MobX | 121K | 0.008ms | 0.013ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 74K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        277K ops/sec
 Zen                █                                          125K ops/sec
 Valtio             █                                          95K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 277K | 0.004ms | 0.004ms | 1000 |
| Zen | 125K | 0.008ms | 0.016ms | 1000 |
| Valtio | 95K | 0.011ms | 0.016ms | 1000 |
| MobX | 80K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |



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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.11.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-15T19:50:13.299Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
