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

- **⚡ Maximum Performance**: Zen - Fastest overall with 81.8/100 score
- **⚖️ Best Balance**: Solid Signals - Great performance (71.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen** (Score: 81.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Solid Signals** (Score: 71.4/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 67.9/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 38.8/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 6.4/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 81.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Solid Signals](https://github.com/solidjs/solid)** | 71.4/100 | 87% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 67.9/100 | 83% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 38.8/100 | 47% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.4/100 | 8% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.4/100 | 5% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.0/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.6/100 | 2% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen](https://github.com/SylphxAI/zen)** | **81.8** | **1.19 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Solid Signals](https://github.com/solidjs/solid)** | **71.4** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **67.9** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **38.8** | **1.17 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **6.4** | **3.07 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **4.4** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.0** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **1.6** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   2.1M ops/sec
🥈 Zen                ██████████████████████████████████         1.8M ops/sec
🥉 Solid Signals      ███████████████████████████████            1.6M ops/sec
 Preact Signals     ████████████████████████                   1.2M ops/sec
 Jotai              █████                                      259K ops/sec
 Valtio             ██                                         113K ops/sec
 Redux Toolkit      ██                                         89K ops/sec
 MobX               ██                                         85K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Zen | 1.8M | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 1.6M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.2M | 0.001ms | 0.003ms | 1000 |
| Jotai | 259K | 0.004ms | 0.008ms | 1000 |
| Valtio | 113K | 0.009ms | 0.025ms | 1000 |
| Redux Toolkit | 89K | 0.011ms | 0.032ms | 1000 |
| MobX | 85K | 0.012ms | 0.043ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   2.1M ops/sec
🥈 Zen                ██████████████████████████████████         1.8M ops/sec
🥉 Preact Signals     █████████████████████████████████          1.7M ops/sec
 Solid Signals      █████████████████████████                  1.3M ops/sec
 Valtio             ███                                        174K ops/sec
 Redux Toolkit      ██                                         113K ops/sec
 MobX               ██                                         108K ops/sec
 Jotai              █                                          48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.8M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.7M | 0.001ms | 0.001ms | 1000 |
| Solid Signals | 1.3M | 0.001ms | 0.002ms | 1000 |
| Valtio | 174K | 0.006ms | 0.015ms | 1000 |
| Redux Toolkit | 113K | 0.009ms | 0.016ms | 1000 |
| MobX | 108K | 0.009ms | 0.018ms | 1000 |
| Jotai | 48K | 0.021ms | 0.030ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Preact Signals     ███████████████████████████████████        1.0M ops/sec
🥉 Zustand            ████████████████████████████████           934K ops/sec
 Zen                ███████████████████████                    661K ops/sec
 Valtio             ██████                                     164K ops/sec
 Redux Toolkit      ████                                       119K ops/sec
 MobX               ██                                         67K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.003ms | 1000 |
| Zustand | 934K | 0.001ms | 0.002ms | 1000 |
| Zen | 661K | 0.002ms | 0.003ms | 1000 |
| Valtio | 164K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 119K | 0.008ms | 0.015ms | 1000 |
| MobX | 67K | 0.015ms | 0.023ms | 1000 |
| Jotai | 7K | 0.146ms | 0.359ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   3.2M ops/sec
🥈 Preact Signals     ████████████████████████████████████       2.9M ops/sec
🥉 Solid Signals      █████████████████████████████████          2.7M ops/sec
 Zustand            ███████████████████████████████            2.5M ops/sec
 Jotai              ███                                        207K ops/sec
 Valtio             ███                                        205K ops/sec
 MobX               █                                          117K ops/sec
 Redux Toolkit      █                                          63K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.5M | 0.000ms | 0.001ms | 1000 |
| Jotai | 207K | 0.005ms | 0.009ms | 1000 |
| Valtio | 205K | 0.005ms | 0.013ms | 1000 |
| MobX | 117K | 0.009ms | 0.015ms | 1000 |
| Redux Toolkit | 63K | 0.016ms | 0.027ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   2.9M ops/sec
🥈 Solid Signals      ██████████████████████████████████         2.5M ops/sec
🥉 Preact Signals     ██████████████████████████████████         2.5M ops/sec
 Zustand            █████████                                  684K ops/sec
 Valtio             ██                                         172K ops/sec
 MobX               █                                          107K ops/sec
 Jotai              █                                          65K ops/sec
 Redux Toolkit                                                 23K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 684K | 0.001ms | 0.003ms | 1000 |
| Valtio | 172K | 0.006ms | 0.011ms | 1000 |
| MobX | 107K | 0.009ms | 0.018ms | 1000 |
| Jotai | 65K | 0.015ms | 0.026ms | 1000 |
| Redux Toolkit | 23K | 0.044ms | 0.065ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   1.4M ops/sec
🥈 Solid Signals      █████████████████████████████████          1.2M ops/sec
🥉 Preact Signals     █████████████████████████████              1.1M ops/sec
 Zustand            ███                                        122K ops/sec
 MobX               ██                                         69K ops/sec
 Valtio             ██                                         61K ops/sec
 Jotai                                                         11K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 1.4M | 0.001ms | 0.001ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.1M | 0.001ms | 0.001ms | 1000 |
| Zustand | 122K | 0.008ms | 0.013ms | 1000 |
| MobX | 69K | 0.015ms | 0.021ms | 1000 |
| Valtio | 61K | 0.016ms | 0.023ms | 1000 |
| Jotai | 11K | 0.090ms | 0.130ms | 1000 |
| Redux Toolkit | 3K | 0.290ms | 0.601ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   427K ops/sec
🥈 Preact Signals     ███████████████████████████                285K ops/sec
🥉 Solid Signals      ██████████████████████                     235K ops/sec
 MobX               █                                          14K ops/sec
 Zustand            █                                          14K ops/sec
 Valtio             █                                          9K ops/sec
 Jotai                                                         1K ops/sec
 Redux Toolkit                                                 350 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 427K | 0.002ms | 0.005ms | 1000 |
| Preact Signals | 285K | 0.004ms | 0.007ms | 1000 |
| Solid Signals | 235K | 0.004ms | 0.012ms | 1000 |
| MobX | 14K | 0.072ms | 0.093ms | 1000 |
| Zustand | 14K | 0.073ms | 0.083ms | 1000 |
| Valtio | 9K | 0.107ms | 0.152ms | 1000 |
| Jotai | 1K | 0.844ms | 1.208ms | 1000 |
| Redux Toolkit | 350 | 2.861ms | 3.411ms | 1000 |

### Advanced Operations

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   2.8M ops/sec
🥈 Solid Signals      ███████████████████████████████████        2.5M ops/sec
🥉 Zustand            █████████████████████████████              2.0M ops/sec
 Zen                ████████████████████████████               2.0M ops/sec
 Jotai              ███                                        215K ops/sec
 Valtio             ██                                         176K ops/sec
 MobX               ██                                         126K ops/sec
 Redux Toolkit      █                                          71K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Zen | 2.0M | 0.000ms | 0.005ms | 1000 |
| Jotai | 215K | 0.005ms | 0.010ms | 1000 |
| Valtio | 176K | 0.006ms | 0.009ms | 1000 |
| MobX | 126K | 0.008ms | 0.015ms | 1000 |
| Redux Toolkit | 71K | 0.014ms | 0.023ms | 1000 |

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   3.0M ops/sec
🥈 Solid Signals      ██████████████████████████████             2.2M ops/sec
🥉 Zustand            ████████████████████████████               2.1M ops/sec
 Zen                ███████████████████████████                2.0M ops/sec
 Jotai              ███                                        230K ops/sec
 Valtio             ██                                         139K ops/sec
 MobX               █                                          93K ops/sec
 Redux Toolkit      █                                          60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.2M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.0M | 0.000ms | 0.003ms | 1000 |
| Jotai | 230K | 0.004ms | 0.009ms | 1000 |
| Valtio | 139K | 0.007ms | 0.017ms | 1000 |
| MobX | 93K | 0.011ms | 0.019ms | 1000 |
| Redux Toolkit | 60K | 0.017ms | 0.031ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   2.6M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    2.5M ops/sec
🥉 Zustand            ███████████████████████                    1.5M ops/sec
 Solid Signals      ██████████                                 639K ops/sec
 Jotai              ███                                        170K ops/sec
 Valtio             ██                                         155K ops/sec
 MobX               █                                          92K ops/sec
 Redux Toolkit      █                                          45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.6M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 2.5M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 639K | 0.002ms | 0.001ms | 1000 |
| Jotai | 170K | 0.006ms | 0.011ms | 1000 |
| Valtio | 155K | 0.006ms | 0.011ms | 1000 |
| MobX | 92K | 0.011ms | 0.018ms | 1000 |
| Redux Toolkit | 45K | 0.022ms | 0.036ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Solid Signals      ██████████████████████████████             2.7M ops/sec
 Preact Signals     ███████████████████████████                2.4M ops/sec
 Jotai              ███                                        262K ops/sec
 Valtio             ██                                         168K ops/sec
 Redux Toolkit      █                                          123K ops/sec
 MobX               █                                          120K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.003ms | 1000 |
| Jotai | 262K | 0.004ms | 0.009ms | 1000 |
| Valtio | 168K | 0.006ms | 0.014ms | 1000 |
| Redux Toolkit | 123K | 0.008ms | 0.013ms | 1000 |
| MobX | 120K | 0.008ms | 0.016ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Preact Signals     ████████████████████████████████████████   671K ops/sec
🥈 Zen                █████████████████████████████████          557K ops/sec
🥉 Solid Signals      ███████████████████████████                451K ops/sec
 Zustand            ███████████████████                        326K ops/sec
 Valtio             ███████                                    112K ops/sec
 MobX               ████                                       74K ops/sec
 Jotai              ███                                        44K ops/sec
 Redux Toolkit      █                                          13K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 671K | 0.001ms | 0.003ms | 1000 |
| Zen | 557K | 0.002ms | 0.008ms | 1000 |
| Solid Signals | 451K | 0.002ms | 0.011ms | 1000 |
| Zustand | 326K | 0.003ms | 0.004ms | 1000 |
| Valtio | 112K | 0.009ms | 0.014ms | 1000 |
| MobX | 74K | 0.014ms | 0.040ms | 1000 |
| Jotai | 44K | 0.023ms | 0.035ms | 1000 |
| Redux Toolkit | 13K | 0.077ms | 0.103ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   197K ops/sec
🥈 Preact Signals     ████████████████████████████████           157K ops/sec
🥉 Zen                ███████████████████████████████            153K ops/sec
 Zustand            █████████████████                          84K ops/sec
 Valtio             ████████████                               58K ops/sec
 MobX               ███████████                                55K ops/sec
 Jotai              ███                                        15K ops/sec
 Redux Toolkit      █                                          4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 197K | 0.005ms | 0.008ms | 1000 |
| Preact Signals | 157K | 0.006ms | 0.015ms | 1000 |
| Zen | 153K | 0.007ms | 0.009ms | 1000 |
| Zustand | 84K | 0.012ms | 0.033ms | 1000 |
| Valtio | 58K | 0.017ms | 0.034ms | 1000 |
| MobX | 55K | 0.018ms | 0.035ms | 1000 |
| Jotai | 15K | 0.065ms | 0.199ms | 1000 |
| Redux Toolkit | 4K | 0.222ms | 0.907ms | 1000 |

### Real-World Scenarios

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   2.9M ops/sec
🥈 Preact Signals     █████████████████████████████████          2.4M ops/sec
🥉 Solid Signals      ███████████████████████████████            2.3M ops/sec
 Zustand            ███████████████████                        1.4M ops/sec
 Valtio             ███                                        193K ops/sec
 Jotai              ██                                         131K ops/sec
 MobX               █                                          101K ops/sec
 Redux Toolkit      █                                          44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.3M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.4M | 0.001ms | 0.002ms | 1000 |
| Valtio | 193K | 0.005ms | 0.008ms | 1000 |
| Jotai | 131K | 0.008ms | 0.028ms | 1000 |
| MobX | 101K | 0.010ms | 0.039ms | 1000 |
| Redux Toolkit | 44K | 0.023ms | 0.065ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   2.1M ops/sec
🥈 Zen                ███████████████████████████████████████    2.1M ops/sec
🥉 Zustand            ████████████████████████████████           1.7M ops/sec
 Solid Signals      ████████████                               651K ops/sec
 Valtio             ███                                        176K ops/sec
 Jotai              ███                                        143K ops/sec
 MobX               ██                                         98K ops/sec
 Redux Toolkit      █                                          42K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.1M | 0.000ms | 0.002ms | 1000 |
| Zen | 2.1M | 0.000ms | 0.005ms | 1000 |
| Zustand | 1.7M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 651K | 0.002ms | 0.002ms | 1000 |
| Valtio | 176K | 0.006ms | 0.018ms | 1000 |
| Jotai | 143K | 0.007ms | 0.011ms | 1000 |
| MobX | 98K | 0.010ms | 0.025ms | 1000 |
| Redux Toolkit | 42K | 0.024ms | 0.084ms | 1000 |

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   3.4M ops/sec
🥈 Solid Signals      ████████████████████████████████████       3.0M ops/sec
🥉 Preact Signals     ████████████████████████████████           2.7M ops/sec
 Zustand            ██████████████████████                     1.9M ops/sec
 Jotai              ██                                         195K ops/sec
 Valtio             ██                                         180K ops/sec
 MobX               █                                          107K ops/sec
 Redux Toolkit      █                                          70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 3.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.9M | 0.001ms | 0.001ms | 1000 |
| Jotai | 195K | 0.005ms | 0.010ms | 1000 |
| Valtio | 180K | 0.006ms | 0.016ms | 1000 |
| MobX | 107K | 0.009ms | 0.018ms | 1000 |
| Redux Toolkit | 70K | 0.014ms | 0.022ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                ██████                                     178K ops/sec
🥉 Zustand            ████                                       140K ops/sec
 Preact Signals     ████                                       114K ops/sec
 Valtio             ██                                         55K ops/sec
 Redux Toolkit      █                                          43K ops/sec
 MobX                                                          15K ops/sec
 Jotai                                                         15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zen | 178K | 0.006ms | 0.010ms | 1000 |
| Zustand | 140K | 0.007ms | 0.025ms | 1000 |
| Preact Signals | 114K | 0.009ms | 0.024ms | 1000 |
| Valtio | 55K | 0.018ms | 0.052ms | 1000 |
| Redux Toolkit | 43K | 0.023ms | 0.056ms | 1000 |
| MobX | 15K | 0.066ms | 0.481ms | 1000 |
| Jotai | 15K | 0.069ms | 0.225ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   346K ops/sec
🥈 Zen                ████████████████████████████████████████   343K ops/sec
🥉 Zustand            █████████████████████                      184K ops/sec
 Preact Signals     █████████                                  74K ops/sec
 Redux Toolkit      ██████                                     54K ops/sec
 Valtio             █████                                      43K ops/sec
 MobX               █                                          12K ops/sec
 Jotai                                                         626 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 346K | 0.003ms | 0.004ms | 1000 |
| Zen | 343K | 0.003ms | 0.004ms | 1000 |
| Zustand | 184K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 74K | 0.014ms | 0.027ms | 1000 |
| Redux Toolkit | 54K | 0.018ms | 0.024ms | 1000 |
| Valtio | 43K | 0.023ms | 0.029ms | 1000 |
| MobX | 12K | 0.086ms | 0.099ms | 1000 |
| Jotai | 626 | 1.596ms | 2.321ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   36K ops/sec
🥈 Solid Signals      ██████████████████████████████             27K ops/sec
🥉 Preact Signals     █████████████████████████████              26K ops/sec
 MobX               ██                                         2K ops/sec
 Zustand            █                                          1K ops/sec
 Valtio             █                                          1K ops/sec
 Jotai                                                         110 ops/sec
 Redux Toolkit                                                 32 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 36K | 0.028ms | 0.034ms | 1000 |
| Solid Signals | 27K | 0.037ms | 0.314ms | 1000 |
| Preact Signals | 26K | 0.038ms | 0.043ms | 1000 |
| MobX | 2K | 0.649ms | 1.059ms | 1000 |
| Zustand | 1K | 0.748ms | 0.958ms | 1000 |
| Valtio | 1K | 0.961ms | 1.489ms | 1000 |
| Jotai | 110 | 9.064ms | 9.955ms | 1000 |
| Redux Toolkit | 32 | 31.065ms | 35.283ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   206K ops/sec
🥈 Zustand            ███████████████████████████                137K ops/sec
🥉 Solid Signals      ███████████████████████                    118K ops/sec
 Preact Signals     █████████████████████                      110K ops/sec
 Jotai              ███████████████                            79K ops/sec
 MobX               ███                                        16K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 206K | 0.005ms | 0.009ms | 1000 |
| Zustand | 137K | 0.007ms | 0.010ms | 1000 |
| Solid Signals | 118K | 0.008ms | 0.011ms | 1000 |
| Preact Signals | 110K | 0.009ms | 0.013ms | 1000 |
| Jotai | 79K | 0.013ms | 0.023ms | 1000 |
| MobX | 16K | 0.062ms | 0.098ms | 1000 |
| Valtio | 6K | 0.162ms | 0.240ms | 1000 |
| Redux Toolkit | 1K | 0.698ms | 1.292ms | 1000 |


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

- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) (1.19 KB gzip) - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) (3.96 KB gzip) - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) (3.04 KB gzip) - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) (1.17 KB gzip) - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) (3.07 KB gzip) - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) (17.56 KB gzip) - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) (4.29 KB gzip) - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) (13.83 KB gzip) - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)

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

*Generated on 2025-11-13T02:21:27.339Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
