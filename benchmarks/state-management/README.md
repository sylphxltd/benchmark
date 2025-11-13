<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-20-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 77.5/100 score
- **⚖️ Best Balance**: Zen - Great performance (59.3/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 77.5/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 59.3/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 55.7/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 38.8/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 32.2/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 77.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 59.3/100 | 77% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 55.7/100 | 72% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 38.8/100 | 50% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 32.2/100 | 42% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 26.8/100 | 35% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.1/100 | 9% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.0/100 | 4% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **77.5** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **59.3** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **55.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **38.8** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **32.2** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **26.8** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **7.1** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **3.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Valtio             ████████████████████████████████████████   30.7M ops/sec
🥈 Solid Signals      ██████████████████████████████             22.7M ops/sec
🥉 Preact Signals     ████████████████████████████               21.4M ops/sec
 Zen                ██████████████████████████                 19.7M ops/sec
 Redux Toolkit      ███████████████████████                    17.4M ops/sec
 MobX               ████████████████████                       15.7M ops/sec
 Zustand            ███████████████████                        14.9M ops/sec
 Jotai              █████                                      4.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 30.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 22.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 14.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.1M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   22.2M ops/sec
🥈 Valtio             ██████████████████                         10.2M ops/sec
🥉 Zen                ███████████████                            8.2M ops/sec
 Redux Toolkit      ██████████████                             7.7M ops/sec
 Zustand            █████████████                              7.0M ops/sec
 Preact Signals     ████████████                               6.8M ops/sec
 MobX               ████████████                               6.6M ops/sec
 Jotai              █████                                      2.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 10.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 7.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 7.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.6M | 0.000ms | 0.001ms | 1000 |
| Jotai | 2.6M | 0.000ms | 0.002ms | 1000 |

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   22.6M ops/sec
🥈 Solid Signals      ████████████████████████████████████████   22.5M ops/sec
🥉 Redux Toolkit      ███████████████████████████                15.2M ops/sec
 Zen                ██████████████████████████                 14.6M ops/sec
 Preact Signals     ███████████████████                        10.5M ops/sec
 Valtio             █████████████████                          9.7M ops/sec
 MobX               ███████████                                6.3M ops/sec
 Jotai              ██                                         1.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 22.5M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 15.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 14.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 10.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 9.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 6.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.4M | 0.001ms | 0.003ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   15.5M ops/sec
🥈 Preact Signals     ██████████████████████████████████         13.2M ops/sec
🥉 Solid Signals      ████████████████                           6.4M ops/sec
 Zustand            █████████████                              5.2M ops/sec
 MobX               ████████████                               4.8M ops/sec
 Valtio             █████████                                  3.4M ops/sec
 Jotai              ██                                         650K ops/sec
 Redux Toolkit      █                                          213K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 15.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.8M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 650K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 213K | 0.005ms | 0.009ms | 1000 |

#### Burst Write (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   20.2M ops/sec
🥈 Solid Signals      ████████████████████████████████           16.3M ops/sec
🥉 Zen                ████████████████████████                   12.3M ops/sec
 MobX               ███████████████                            7.5M ops/sec
 Zustand            ████████████                               6.2M ops/sec
 Valtio             ██████████                                 5.1M ops/sec
 Jotai              █                                          675K ops/sec
 Redux Toolkit      █                                          286K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 20.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 6.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 675K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 286K | 0.003ms | 0.006ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Preact Signals     ████████████████████████████████████████   14.5M ops/sec
🥈 Zen                █████████████████                          6.3M ops/sec
🥉 Solid Signals      ████████████████                           5.8M ops/sec
 Zustand            ██████████████                             5.1M ops/sec
 MobX               ███████████                                4.0M ops/sec
 Valtio             ███████████                                3.9M ops/sec
 Jotai              ██                                         603K ops/sec
 Redux Toolkit      █                                          232K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 603K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 232K | 0.004ms | 0.007ms | 1000 |

#### Single Write

```
🥇 Solid Signals      ████████████████████████████████████████   17.7M ops/sec
🥈 Zen                ████████████████████████████               12.6M ops/sec
🥉 Zustand            ████████████                               5.4M ops/sec
 Preact Signals     ███████████                                5.1M ops/sec
 Valtio             ██████                                     2.6M ops/sec
 MobX               ████                                       1.7M ops/sec
 Jotai              █                                          448K ops/sec
 Redux Toolkit                                                 134K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 17.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.7M | 0.001ms | 0.003ms | 1000 |
| Jotai | 448K | 0.002ms | 0.008ms | 1000 |
| Redux Toolkit | 134K | 0.007ms | 0.030ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zustand            ███████████████████████████████            910K ops/sec
🥉 Valtio             ██████████████████████████████             894K ops/sec
 Preact Signals     ██████████████████████                     661K ops/sec
 Zen                █████████████████████                      617K ops/sec
 Jotai              ████████████████                           464K ops/sec
 MobX               ████████████                               346K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zustand | 910K | 0.001ms | 0.003ms | 1000 |
| Valtio | 894K | 0.001ms | 0.006ms | 1000 |
| Preact Signals | 661K | 0.002ms | 0.003ms | 1000 |
| Zen | 617K | 0.002ms | 0.004ms | 1000 |
| Jotai | 464K | 0.002ms | 0.004ms | 1000 |
| MobX | 346K | 0.003ms | 0.010ms | 1000 |
| Redux Toolkit | 4K | 0.265ms | 0.523ms | 1000 |

#### Array Update

```
🥇 Solid Signals      ████████████████████████████████████████   7.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      7.1M ops/sec
🥉 Zen                █████████████████████████████████████      7.1M ops/sec
 Valtio             ██████████████████████████████             5.9M ops/sec
 Zustand            █████████████████████████                  4.9M ops/sec
 MobX               ██████████████                             2.7M ops/sec
 Jotai              ████                                       685K ops/sec
 Redux Toolkit      █                                          164K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 7.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 7.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.001ms | 1000 |
| Jotai | 685K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 164K | 0.006ms | 0.012ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   27.2M ops/sec
🥈 Solid Signals      █████████████████████████████████████      24.9M ops/sec
🥉 Preact Signals     █████████                                  6.2M ops/sec
 Zustand            ████████                                   5.3M ops/sec
 Valtio             ███████                                    4.6M ops/sec
 Redux Toolkit      █████                                      3.2M ops/sec
 MobX               ████                                       2.4M ops/sec
 Jotai              ███                                        1.9M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 27.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 24.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.003ms | 1000 |
| Jotai | 1.9M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   6.4M ops/sec
🥈 Zustand            ███████████████████████████                4.2M ops/sec
🥉 Solid Signals      ██████████████████████████                 4.1M ops/sec
 Zen                █████████████████████████                  4.0M ops/sec
 MobX               ████████████                               1.9M ops/sec
 Valtio             █████████                                  1.5M ops/sec
 Jotai              ████                                       681K ops/sec
 Redux Toolkit      █                                          207K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.2M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 4.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 1.9M | 0.001ms | 0.004ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.006ms | 1000 |
| Jotai | 681K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 207K | 0.005ms | 0.014ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Preact Signals     ████████████████████████████████████████   751K ops/sec
🥈 Zen                ██████████████████████████████████         640K ops/sec
🥉 Solid Signals      ██████████████████████████████             568K ops/sec
 Zustand            ██████████████████                         340K ops/sec
 MobX               █████████████████                          320K ops/sec
 Valtio             ██████████████                             264K ops/sec
 Jotai              ███                                        48K ops/sec
 Redux Toolkit      █                                          15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 751K | 0.001ms | 0.003ms | 1000 |
| Zen | 640K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 568K | 0.002ms | 0.005ms | 1000 |
| Zustand | 340K | 0.003ms | 0.007ms | 1000 |
| MobX | 320K | 0.003ms | 0.007ms | 1000 |
| Valtio | 264K | 0.004ms | 0.007ms | 1000 |
| Jotai | 48K | 0.021ms | 0.032ms | 1000 |
| Redux Toolkit | 15K | 0.067ms | 0.101ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   180K ops/sec
🥈 Zen                ██████████████████████████████████         154K ops/sec
🥉 Solid Signals      ███████████████████████████████            138K ops/sec
 MobX               ████████████████████████                   109K ops/sec
 Zustand            ███████████████████████                    104K ops/sec
 Valtio             █████████████████████                      95K ops/sec
 Jotai              ████                                       18K ops/sec
 Redux Toolkit      █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 180K | 0.006ms | 0.010ms | 1000 |
| Zen | 154K | 0.006ms | 0.015ms | 1000 |
| Solid Signals | 138K | 0.007ms | 0.019ms | 1000 |
| MobX | 109K | 0.009ms | 0.015ms | 1000 |
| Zustand | 104K | 0.010ms | 0.013ms | 1000 |
| Valtio | 95K | 0.011ms | 0.015ms | 1000 |
| Jotai | 18K | 0.055ms | 0.078ms | 1000 |
| Redux Toolkit | 7K | 0.151ms | 0.448ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   15.4M ops/sec
🥈 Zen                ██████████████████████████████             11.5M ops/sec
🥉 Valtio             ██████████████                             5.3M ops/sec
 MobX               ██████████████                             5.3M ops/sec
 Preact Signals     ██████████                                 3.8M ops/sec
 Zustand            █████████                                  3.4M ops/sec
 Jotai              █                                          441K ops/sec
 Redux Toolkit      █                                          266K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 15.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 5.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.8M | 0.000ms | 0.002ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 441K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 266K | 0.004ms | 0.007ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.7M ops/sec
🥈 Valtio             ██████████████████████████████████████     1.6M ops/sec
🥉 Zustand            ███████████████                            615K ops/sec
 Solid Signals      █████████████                              534K ops/sec
 Preact Signals     ███████████                                462K ops/sec
 Zen                █████████                                  380K ops/sec
 Jotai              █████                                      228K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.7M | 0.001ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.002ms | 1000 |
| Zustand | 615K | 0.002ms | 0.003ms | 1000 |
| Solid Signals | 534K | 0.002ms | 0.004ms | 1000 |
| Preact Signals | 462K | 0.002ms | 0.003ms | 1000 |
| Zen | 380K | 0.003ms | 0.009ms | 1000 |
| Jotai | 228K | 0.004ms | 0.006ms | 1000 |
| Redux Toolkit | 3K | 0.366ms | 0.837ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   2.0M ops/sec
🥈 Zen                ████                                       194K ops/sec
🥉 Zustand            ███                                        137K ops/sec
 Preact Signals     ██                                         119K ops/sec
 Valtio             █                                          51K ops/sec
 Redux Toolkit      █                                          50K ops/sec
 Jotai                                                         17K ops/sec
 MobX                                                          14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.0M | 0.000ms | 0.003ms | 1000 |
| Zen | 194K | 0.005ms | 0.013ms | 1000 |
| Zustand | 137K | 0.007ms | 0.054ms | 1000 |
| Preact Signals | 119K | 0.008ms | 0.035ms | 1000 |
| Valtio | 51K | 0.020ms | 0.122ms | 1000 |
| Redux Toolkit | 50K | 0.020ms | 0.087ms | 1000 |
| Jotai | 17K | 0.060ms | 0.088ms | 1000 |
| MobX | 14K | 0.070ms | 0.634ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   7.7M ops/sec
🥈 Valtio             ████████████████████████████████████████   7.7M ops/sec
🥉 Solid Signals      ███████████████████████████████████        6.8M ops/sec
 Zen                █████████████████████████████              5.6M ops/sec
 MobX               ██████████████                             2.7M ops/sec
 Zustand            ███████████                                2.1M ops/sec
 Jotai              ██                                         312K ops/sec
 Redux Toolkit      █                                          117K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 7.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 5.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 312K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 117K | 0.009ms | 0.014ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 MobX               ████████████████████████████████████████   27.0M ops/sec
🥈 Solid Signals      ██████████████████████████████████████     25.7M ops/sec
🥉 Valtio             ████████████████████████████████████       24.5M ops/sec
 Preact Signals     ███████████████████████████████████        23.5M ops/sec
 Zen                ██████████████████████                     14.6M ops/sec
 Zustand            ████████████████████                       13.8M ops/sec
 Redux Toolkit      ████████████████████                       13.5M ops/sec
 Jotai              ██████                                     4.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 27.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 25.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 24.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 23.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 13.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.1M | 0.000ms | 0.001ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Preact Signals     ████████████████████████████████████████   22.0M ops/sec
🥈 Solid Signals      █████████████████████████████              16.0M ops/sec
🥉 Zen                █████████████████████████████              15.9M ops/sec
 MobX               ██████████████████                         10.0M ops/sec
 Zustand            █████████████                              6.9M ops/sec
 Valtio             ███████████                                5.9M ops/sec
 Jotai              ██                                         876K ops/sec
 Redux Toolkit      █                                          315K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 22.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 15.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 10.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 6.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 876K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 315K | 0.003ms | 0.006ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   157K ops/sec
🥈 Solid Signals      █████████████████████████████████████      145K ops/sec
🥉 Zustand            ████████████████████████████████████       140K ops/sec
 Preact Signals     █████████████████████████████████          131K ops/sec
 Jotai              ██████████████████████████                 104K ops/sec
 MobX               ████                                       17K ops/sec
 Valtio             ██                                         6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 157K | 0.006ms | 0.010ms | 1000 |
| Solid Signals | 145K | 0.007ms | 0.011ms | 1000 |
| Zustand | 140K | 0.007ms | 0.011ms | 1000 |
| Preact Signals | 131K | 0.008ms | 0.010ms | 1000 |
| Jotai | 104K | 0.010ms | 0.014ms | 1000 |
| MobX | 17K | 0.057ms | 0.073ms | 1000 |
| Valtio | 6K | 0.155ms | 0.366ms | 1000 |
| Redux Toolkit | 1K | 0.792ms | 1.188ms | 1000 |


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

**Total**: 20 tests × 8 libraries = 160 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) v3.0.0 • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)

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

*Generated on 2025-11-13T20:05:34.689Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
