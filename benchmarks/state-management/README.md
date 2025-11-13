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

<<<<<<< HEAD
- **⚡ Maximum Performance**: Zen - Fastest overall with 81.5/100 score
- **⚖️ Best Balance**: Solid Signals - Great performance (78.1/100) with good ecosystem
=======
- **⚡ Maximum Performance**: Zen - Fastest overall with 79.1/100 score
- **⚖️ Best Balance**: Solid Signals - Great performance (76.0/100) with good ecosystem
>>>>>>> 8448058 (feat: implement per-test atomic result files)
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


<<<<<<< HEAD
**Zen** (Score: 81.5/100)
=======
**Zen** (Score: 79.1/100)
>>>>>>> 8448058 (feat: implement per-test atomic result files)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


<<<<<<< HEAD
**Solid Signals** (Score: 78.1/100)
=======
**Solid Signals** (Score: 76.0/100)
>>>>>>> 8448058 (feat: implement per-test atomic result files)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


<<<<<<< HEAD
**Preact Signals** (Score: 37.7/100)
=======
**Preact Signals** (Score: 70.2/100)
>>>>>>> 8448058 (feat: implement per-test atomic result files)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


<<<<<<< HEAD
**Zustand** (Score: 35.7/100)
=======
**Zustand** (Score: 40.6/100)
>>>>>>> 8448058 (feat: implement per-test atomic result files)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


<<<<<<< HEAD
**Valtio** (Score: 5.6/100)
=======
**Valtio** (Score: 6.3/100)
>>>>>>> 8448058 (feat: implement per-test atomic result files)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
<<<<<<< HEAD
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 81.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Solid Signals](https://github.com/solidjs/solid)** | 78.1/100 | 96% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 37.7/100 | 46% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 35.7/100 | 44% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.6/100 | 7% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 3.3/100 | 4% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.4/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.3/100 | 2% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
=======
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 79.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Solid Signals](https://github.com/solidjs/solid)** | 76.0/100 | 96% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 70.2/100 | 89% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 40.6/100 | 51% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.3/100 | 8% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.6/100 | 6% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.2/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.7/100 | 2% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
>>>>>>> 8448058 (feat: implement per-test atomic result files)


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
<<<<<<< HEAD
| **[Zen](https://github.com/SylphxAI/zen)** | **81.5** | **1.19 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Solid Signals](https://github.com/solidjs/solid)** | **78.1** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **37.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **35.7** | **1.17 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **5.6** | **3.07 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **3.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **2.4** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **1.3** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
=======
| **[Zen](https://github.com/SylphxAI/zen)** | **79.1** | **1.19 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Solid Signals](https://github.com/solidjs/solid)** | **76.0** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **70.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **40.6** | **1.17 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **6.3** | **3.07 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **4.6** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **1.7** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
<<<<<<< HEAD
🥇 Zen                ████████████████████████████████████████   639K ops/sec
🥈 Zustand            █████████████████████████████              458K ops/sec
🥉 Solid Signals      ███████████████████████                    368K ops/sec
 Preact Signals     ████████████████                           255K ops/sec
 Jotai              █████                                      83K ops/sec
 Valtio             ███                                        43K ops/sec
 Redux Toolkit      ██                                         24K ops/sec
 MobX               █                                          15K ops/sec
=======
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                ███████████████████████████████████████    1.1M ops/sec
🥉 Zustand            █████████████████████████████████          973K ops/sec
 Preact Signals     ████████████████████████████               813K ops/sec
 Valtio             █████                                      142K ops/sec
 Redux Toolkit      ███                                        96K ops/sec
 MobX               ██                                         58K ops/sec
 Jotai                                                         6K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zen | 639K | 0.002ms | 0.008ms | 1000 |
| Zustand | 458K | 0.002ms | 0.010ms | 1000 |
| Solid Signals | 368K | 0.003ms | 0.011ms | 1000 |
| Preact Signals | 255K | 0.004ms | 0.020ms | 1000 |
| Jotai | 83K | 0.012ms | 0.033ms | 1000 |
| Valtio | 43K | 0.023ms | 0.071ms | 1000 |
| Redux Toolkit | 24K | 0.041ms | 0.091ms | 1000 |
| MobX | 15K | 0.066ms | 0.134ms | 1000 |
=======
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.003ms | 1000 |
| Zustand | 973K | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 813K | 0.001ms | 0.004ms | 1000 |
| Valtio | 142K | 0.007ms | 0.014ms | 1000 |
| Redux Toolkit | 96K | 0.010ms | 0.023ms | 1000 |
| MobX | 58K | 0.017ms | 0.029ms | 1000 |
| Jotai | 6K | 0.155ms | 0.457ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Moderate Read (100x)

```
<<<<<<< HEAD
🥇 Zustand            ████████████████████████████████████████   847K ops/sec
🥈 Zen                ████████████████████████████████████       765K ops/sec
🥉 Solid Signals      ███████████████████████                    478K ops/sec
 Preact Signals     ███████████████                            317K ops/sec
 Valtio             ██                                         50K ops/sec
 Redux Toolkit      ██                                         32K ops/sec
 MobX               █                                          23K ops/sec
 Jotai              █                                          18K ops/sec
=======
🥇 Zustand            ████████████████████████████████████████   2.0M ops/sec
🥈 Zen                █████████████████████████████              1.5M ops/sec
🥉 Preact Signals     █████████████████████████████              1.5M ops/sec
 Solid Signals      ██████████████████████                     1.1M ops/sec
 Valtio             ███                                        161K ops/sec
 Redux Toolkit      ██                                         105K ops/sec
 MobX               ██                                         101K ops/sec
 Jotai              █                                          47K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zustand | 847K | 0.001ms | 0.003ms | 1000 |
| Zen | 765K | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 478K | 0.002ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.014ms | 1000 |
| Valtio | 50K | 0.020ms | 0.049ms | 1000 |
| Redux Toolkit | 32K | 0.031ms | 0.068ms | 1000 |
| MobX | 23K | 0.044ms | 0.079ms | 1000 |
| Jotai | 18K | 0.057ms | 0.121ms | 1000 |
=======
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.002ms | 1000 |
| Valtio | 161K | 0.006ms | 0.012ms | 1000 |
| Redux Toolkit | 105K | 0.010ms | 0.018ms | 1000 |
| MobX | 101K | 0.010ms | 0.021ms | 1000 |
| Jotai | 47K | 0.021ms | 0.056ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Single Read

```
<<<<<<< HEAD
🥇 Zustand            ████████████████████████████████████████   544K ops/sec
🥈 Solid Signals      ███████████████████████████████████████    534K ops/sec
🥉 Zen                ██████████████████████████████████████     514K ops/sec
 Preact Signals     ███████████████████████                    316K ops/sec
 Valtio             █████                                      69K ops/sec
 Redux Toolkit      ███                                        39K ops/sec
 MobX               ██                                         27K ops/sec
 Jotai                                                         3K ops/sec
=======
🥇 Zustand            ████████████████████████████████████████   1.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      1.7M ops/sec
🥉 Zen                ██████████████████████████████             1.4M ops/sec
 Solid Signals      ███████████████████████████                1.2M ops/sec
 Jotai              ██████                                     261K ops/sec
 Valtio             ███                                        123K ops/sec
 MobX               ██                                         99K ops/sec
 Redux Toolkit      █                                          63K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zustand | 544K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 534K | 0.002ms | 0.007ms | 1000 |
| Zen | 514K | 0.002ms | 0.011ms | 1000 |
| Preact Signals | 316K | 0.003ms | 0.011ms | 1000 |
| Valtio | 69K | 0.014ms | 0.033ms | 1000 |
| Redux Toolkit | 39K | 0.026ms | 0.056ms | 1000 |
| MobX | 27K | 0.037ms | 0.062ms | 1000 |
| Jotai | 3K | 0.322ms | 0.785ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   1.3M ops/sec
🥈 Solid Signals      ████████████████████████████████           1.1M ops/sec
🥉 Zustand            ████████████████████████                   806K ops/sec
 Preact Signals     ████████████                               405K ops/sec
 Valtio             ██                                         73K ops/sec
 Jotai              ██                                         60K ops/sec
 MobX               █                                          27K ops/sec
 Redux Toolkit                                                 15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 1.3M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.003ms | 1000 |
| Zustand | 806K | 0.001ms | 0.004ms | 1000 |
| Preact Signals | 405K | 0.002ms | 0.012ms | 1000 |
| Valtio | 73K | 0.014ms | 0.042ms | 1000 |
| Jotai | 60K | 0.017ms | 0.046ms | 1000 |
| MobX | 27K | 0.036ms | 0.082ms | 1000 |
| Redux Toolkit | 15K | 0.068ms | 0.136ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   1.3M ops/sec
🥈 Solid Signals      █████████████████████████████              962K ops/sec
🥉 Preact Signals     ██████████████                             453K ops/sec
 Zustand            ███████████                                361K ops/sec
 Valtio             ██                                         62K ops/sec
 MobX               █                                          29K ops/sec
 Jotai              █                                          18K ops/sec
 Redux Toolkit                                                 6K ops/sec
=======
| Zustand | 1.8M | 0.001ms | 0.004ms | 1000 |
| Preact Signals | 1.7M | 0.001ms | 0.003ms | 1000 |
| Zen | 1.4M | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.003ms | 1000 |
| Jotai | 261K | 0.004ms | 0.009ms | 1000 |
| Valtio | 123K | 0.008ms | 0.017ms | 1000 |
| MobX | 99K | 0.010ms | 0.020ms | 1000 |
| Redux Toolkit | 63K | 0.016ms | 0.062ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   2.4M ops/sec
🥈 Solid Signals      ███████████████████████████████            1.8M ops/sec
🥉 Preact Signals     ████████████████████                       1.2M ops/sec
 Zustand            ████████████                               732K ops/sec
 Valtio             ██                                         129K ops/sec
 MobX               ██                                         93K ops/sec
 Jotai              █                                          61K ops/sec
 Redux Toolkit                                                 22K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zen | 1.3M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 962K | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 453K | 0.002ms | 0.008ms | 1000 |
| Zustand | 361K | 0.003ms | 0.008ms | 1000 |
| Valtio | 62K | 0.016ms | 0.041ms | 1000 |
| MobX | 29K | 0.034ms | 0.073ms | 1000 |
| Jotai | 18K | 0.057ms | 0.104ms | 1000 |
| Redux Toolkit | 6K | 0.164ms | 0.286ms | 1000 |
=======
| Zen | 2.4M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 1.8M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zustand | 732K | 0.001ms | 0.002ms | 1000 |
| Valtio | 129K | 0.008ms | 0.029ms | 1000 |
| MobX | 93K | 0.011ms | 0.020ms | 1000 |
| Jotai | 61K | 0.016ms | 0.027ms | 1000 |
| Redux Toolkit | 22K | 0.046ms | 0.075ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Burst Write (100x)

```
<<<<<<< HEAD
🥇 Solid Signals      ████████████████████████████████████████   561K ops/sec
🥈 Zen                ███████████████████████████████████████    542K ops/sec
🥉 Preact Signals     ███████████████████                        273K ops/sec
 Zustand            ███                                        48K ops/sec
 MobX               ██                                         25K ops/sec
 Valtio             █                                          19K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 1K ops/sec
=======
🥇 Preact Signals     ████████████████████████████████████████   890K ops/sec
🥈 Solid Signals      ████████████████████████████████           716K ops/sec
🥉 Zen                ███████████                                235K ops/sec
 Zustand            █████                                      108K ops/sec
 MobX               ███                                        61K ops/sec
 Valtio             ██                                         54K ops/sec
 Jotai                                                         10K ops/sec
 Redux Toolkit                                                 3K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Solid Signals | 561K | 0.002ms | 0.005ms | 1000 |
| Zen | 542K | 0.002ms | 0.004ms | 1000 |
| Preact Signals | 273K | 0.004ms | 0.012ms | 1000 |
| Zustand | 48K | 0.021ms | 0.038ms | 1000 |
| MobX | 25K | 0.040ms | 0.071ms | 1000 |
| Valtio | 19K | 0.052ms | 0.116ms | 1000 |
| Jotai | 3K | 0.289ms | 0.632ms | 1000 |
| Redux Toolkit | 1K | 0.808ms | 1.483ms | 1000 |
=======
| Preact Signals | 890K | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 716K | 0.001ms | 0.003ms | 1000 |
| Zen | 235K | 0.004ms | 0.010ms | 1000 |
| Zustand | 108K | 0.009ms | 0.014ms | 1000 |
| MobX | 61K | 0.016ms | 0.026ms | 1000 |
| Valtio | 54K | 0.018ms | 0.026ms | 1000 |
| Jotai | 10K | 0.101ms | 0.150ms | 1000 |
| Redux Toolkit | 3K | 0.334ms | 0.741ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Heavy Write (1000x)

```
<<<<<<< HEAD
🥇 Zen                ████████████████████████████████████████   332K ops/sec
🥈 Preact Signals     ████████████                               100K ops/sec
🥉 Solid Signals      █████████                                  74K ops/sec
 MobX               █                                          6K ops/sec
 Zustand            █                                          5K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         388 ops/sec
 Redux Toolkit                                                 130 ops/sec
=======
🥇 Zen                ████████████████████████████████████████   416K ops/sec
🥈 Preact Signals     █████████████████████████                  256K ops/sec
🥉 Solid Signals      ██████████████████████                     233K ops/sec
 MobX               █                                          13K ops/sec
 Zustand            █                                          12K ops/sec
 Valtio             █                                          9K ops/sec
 Jotai                                                         1K ops/sec
 Redux Toolkit                                                 324 ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zen | 332K | 0.003ms | 0.018ms | 1000 |
| Preact Signals | 100K | 0.010ms | 0.036ms | 1000 |
| Solid Signals | 74K | 0.014ms | 0.039ms | 1000 |
| MobX | 6K | 0.166ms | 0.375ms | 1000 |
| Zustand | 5K | 0.184ms | 0.261ms | 1000 |
| Valtio | 4K | 0.270ms | 0.587ms | 1000 |
| Jotai | 388 | 2.575ms | 3.434ms | 1000 |
| Redux Toolkit | 130 | 7.683ms | 11.399ms | 1000 |

### Advanced Operations

#### Nested Object Update

```
🥇 Zustand            ████████████████████████████████████████   863K ops/sec
🥈 Zen                ██████████████████████████████████         742K ops/sec
🥉 Solid Signals      █████████████████████████████              631K ops/sec
 Preact Signals     ██████████████████                         380K ops/sec
 Jotai              ███                                        70K ops/sec
 Valtio             ███                                        64K ops/sec
 MobX               ██                                         36K ops/sec
 Redux Toolkit      █                                          21K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 863K | 0.001ms | 0.004ms | 1000 |
| Zen | 742K | 0.001ms | 0.004ms | 1000 |
| Solid Signals | 631K | 0.002ms | 0.003ms | 1000 |
| Preact Signals | 380K | 0.003ms | 0.014ms | 1000 |
| Jotai | 70K | 0.014ms | 0.039ms | 1000 |
| Valtio | 64K | 0.016ms | 0.040ms | 1000 |
| MobX | 36K | 0.028ms | 0.066ms | 1000 |
| Redux Toolkit | 21K | 0.048ms | 0.115ms | 1000 |

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   1.1M ops/sec
🥈 Solid Signals      ████████████████████████████████████       997K ops/sec
🥉 Zustand            █████████████████████████████              811K ops/sec
 Preact Signals     ███████████                                295K ops/sec
 Jotai              ███                                        75K ops/sec
 Valtio             ██                                         57K ops/sec
 MobX               █                                          27K ops/sec
 Redux Toolkit      █                                          17K ops/sec
=======
| Zen | 416K | 0.002ms | 0.005ms | 1000 |
| Preact Signals | 256K | 0.004ms | 0.008ms | 1000 |
| Solid Signals | 233K | 0.004ms | 0.013ms | 1000 |
| MobX | 13K | 0.075ms | 0.110ms | 1000 |
| Zustand | 12K | 0.084ms | 0.190ms | 1000 |
| Valtio | 9K | 0.110ms | 0.165ms | 1000 |
| Jotai | 1K | 0.918ms | 1.339ms | 1000 |
| Redux Toolkit | 324 | 3.089ms | 3.939ms | 1000 |

#### Single Write

```
🥇 Solid Signals      ████████████████████████████████████████   2.2M ops/sec
🥈 Zen                ████████████████████████████████████████   2.2M ops/sec
🥉 Zustand            ████████████████████████████████████████   2.2M ops/sec
 Preact Signals     ██████████████████████████████             1.7M ops/sec
 Jotai              ████                                       199K ops/sec
 Valtio             ███                                        161K ops/sec
 MobX               ██                                         105K ops/sec
 Redux Toolkit      █                                          53K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 1.7M | 0.001ms | 0.003ms | 1000 |
| Jotai | 199K | 0.005ms | 0.010ms | 1000 |
| Valtio | 161K | 0.006ms | 0.014ms | 1000 |
| MobX | 105K | 0.010ms | 0.019ms | 1000 |
| Redux Toolkit | 53K | 0.019ms | 0.033ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   3.0M ops/sec
🥈 Preact Signals     █████████████████████████████████████      2.7M ops/sec
🥉 Solid Signals      ██████████████████████████████████         2.5M ops/sec
 Zustand            █████████████████████████████              2.2M ops/sec
 Jotai              ███                                        224K ops/sec
 Valtio             ██                                         140K ops/sec
 MobX               █                                          84K ops/sec
 Redux Toolkit      █                                          56K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zen | 1.1M | 0.001ms | 0.004ms | 1000 |
| Solid Signals | 997K | 0.001ms | 0.003ms | 1000 |
| Zustand | 811K | 0.001ms | 0.004ms | 1000 |
| Preact Signals | 295K | 0.003ms | 0.011ms | 1000 |
| Jotai | 75K | 0.013ms | 0.039ms | 1000 |
| Valtio | 57K | 0.018ms | 0.044ms | 1000 |
| MobX | 27K | 0.037ms | 0.087ms | 1000 |
| Redux Toolkit | 17K | 0.057ms | 0.131ms | 1000 |
=======
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 224K | 0.004ms | 0.009ms | 1000 |
| Valtio | 140K | 0.007ms | 0.013ms | 1000 |
| MobX | 84K | 0.012ms | 0.020ms | 1000 |
| Redux Toolkit | 56K | 0.018ms | 0.027ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Array Update

```
<<<<<<< HEAD
🥇 Solid Signals      ████████████████████████████████████████   876K ops/sec
🥈 Zustand            ██████████████████████████                 559K ops/sec
🥉 Zen                █████████████████                          372K ops/sec
 Preact Signals     ██████████                                 225K ops/sec
 Valtio             ███                                        64K ops/sec
 Jotai              ███                                        60K ops/sec
 MobX               █                                          27K ops/sec
 Redux Toolkit      █                                          13K ops/sec
=======
🥇 Zen                ████████████████████████████████████████   2.6M ops/sec
🥈 Preact Signals     █████████████████████████████████████      2.4M ops/sec
🥉 Solid Signals      ███████████████████████████████████        2.2M ops/sec
 Zustand            ██████████████████████████                 1.6M ops/sec
 Jotai              ███                                        173K ops/sec
 Valtio             ██                                         125K ops/sec
 MobX               █                                          82K ops/sec
 Redux Toolkit      █                                          41K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Solid Signals | 876K | 0.001ms | 0.004ms | 1000 |
| Zustand | 559K | 0.002ms | 0.006ms | 1000 |
| Zen | 372K | 0.003ms | 0.003ms | 1000 |
| Preact Signals | 225K | 0.004ms | 0.012ms | 1000 |
| Valtio | 64K | 0.016ms | 0.030ms | 1000 |
| Jotai | 60K | 0.017ms | 0.042ms | 1000 |
| MobX | 27K | 0.037ms | 0.090ms | 1000 |
| Redux Toolkit | 13K | 0.080ms | 0.154ms | 1000 |
=======
| Zen | 2.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.6M | 0.001ms | 0.002ms | 1000 |
| Jotai | 173K | 0.006ms | 0.010ms | 1000 |
| Valtio | 125K | 0.008ms | 0.017ms | 1000 |
| MobX | 82K | 0.012ms | 0.018ms | 1000 |
| Redux Toolkit | 41K | 0.025ms | 0.046ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Computed Value Access

```
<<<<<<< HEAD
🥇 Zen                ████████████████████████████████████████   1.6M ops/sec
🥈 Solid Signals      ████████████████████████████████           1.3M ops/sec
🥉 Zustand            ██████████████████████████████             1.2M ops/sec
 Preact Signals     ████████                                   332K ops/sec
 Jotai              ██                                         100K ops/sec
 Valtio             ██                                         68K ops/sec
 Redux Toolkit      █                                          44K ops/sec
 MobX               █                                          35K ops/sec
=======
🥇 Zen                ████████████████████████████████████████   2.7M ops/sec
🥈 Zustand            ███████████████████████████████████████    2.6M ops/sec
🥉 Preact Signals     ██████████████████████████████████         2.4M ops/sec
 Solid Signals      █████████████                              885K ops/sec
 Jotai              ███                                        212K ops/sec
 Valtio             ██                                         165K ops/sec
 Redux Toolkit      ██                                         123K ops/sec
 MobX               █                                          91K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zen | 1.6M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.3M | 0.001ms | 0.002ms | 1000 |
| Zustand | 1.2M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 332K | 0.003ms | 0.012ms | 1000 |
| Jotai | 100K | 0.010ms | 0.028ms | 1000 |
| Valtio | 68K | 0.015ms | 0.036ms | 1000 |
| Redux Toolkit | 44K | 0.023ms | 0.051ms | 1000 |
| MobX | 35K | 0.029ms | 0.078ms | 1000 |
=======
| Zen | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 885K | 0.001ms | 0.002ms | 1000 |
| Jotai | 212K | 0.005ms | 0.013ms | 1000 |
| Valtio | 165K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 123K | 0.008ms | 0.013ms | 1000 |
| MobX | 91K | 0.011ms | 0.020ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   2.8M ops/sec
🥈 Zen                ███████████████████████████████████████    2.7M ops/sec
🥉 Solid Signals      ████████████████████████████████████       2.5M ops/sec
 Zustand            ███████████████████████████████            2.2M ops/sec
 Jotai              ███                                        225K ops/sec
 Valtio             ██                                         174K ops/sec
 MobX               ██                                         121K ops/sec
 Redux Toolkit      █                                          67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 225K | 0.004ms | 0.010ms | 1000 |
| Valtio | 174K | 0.006ms | 0.008ms | 1000 |
| MobX | 121K | 0.008ms | 0.015ms | 1000 |
| Redux Toolkit | 67K | 0.015ms | 0.023ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

### Async Operations

#### Async Throughput (20 ops)

```
<<<<<<< HEAD
🥇 Solid Signals      ████████████████████████████████████████   318K ops/sec
🥈 Zen                █████████████████████████████████          264K ops/sec
🥉 Zustand            ████████████████                           125K ops/sec
 Preact Signals     ████████████████                           124K ops/sec
 Valtio             █████                                      43K ops/sec
 MobX               ████                                       29K ops/sec
 Jotai              ██                                         15K ops/sec
 Redux Toolkit      █                                          4K ops/sec
=======
🥇 Preact Signals     ████████████████████████████████████████   681K ops/sec
🥈 Zen                █████████████████████████████████          569K ops/sec
🥉 Solid Signals      ████████████████████████████████           542K ops/sec
 Zustand            █████████████████                          289K ops/sec
 Valtio             ██████                                     97K ops/sec
 MobX               █████                                      78K ops/sec
 Jotai              ██                                         42K ops/sec
 Redux Toolkit      █                                          11K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Solid Signals | 318K | 0.003ms | 0.009ms | 1000 |
| Zen | 264K | 0.004ms | 0.015ms | 1000 |
| Zustand | 125K | 0.008ms | 0.020ms | 1000 |
| Preact Signals | 124K | 0.008ms | 0.024ms | 1000 |
| Valtio | 43K | 0.023ms | 0.046ms | 1000 |
| MobX | 29K | 0.034ms | 0.080ms | 1000 |
| Jotai | 15K | 0.069ms | 0.137ms | 1000 |
| Redux Toolkit | 4K | 0.241ms | 0.759ms | 1000 |
=======
| Preact Signals | 681K | 0.001ms | 0.002ms | 1000 |
| Zen | 569K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 542K | 0.002ms | 0.004ms | 1000 |
| Zustand | 289K | 0.003ms | 0.005ms | 1000 |
| Valtio | 97K | 0.010ms | 0.018ms | 1000 |
| MobX | 78K | 0.013ms | 0.020ms | 1000 |
| Jotai | 42K | 0.024ms | 0.041ms | 1000 |
| Redux Toolkit | 11K | 0.090ms | 0.136ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Concurrent Updates (50x)

```
<<<<<<< HEAD
🥇 Solid Signals      ████████████████████████████████████████   94K ops/sec
🥈 Zen                █████████████████████████████████          78K ops/sec
🥉 Zustand            █████████████████                          41K ops/sec
 Preact Signals     ███████████████                            35K ops/sec
 Valtio             ██████████                                 24K ops/sec
 MobX               █████████                                  21K ops/sec
 Jotai              ██                                         5K ops/sec
 Redux Toolkit      █                                          2K ops/sec
=======
🥇 Preact Signals     ████████████████████████████████████████   180K ops/sec
🥈 Solid Signals      ███████████████████████████████            142K ops/sec
🥉 Zen                █████████████████████████                  113K ops/sec
 Zustand            ████████████████████                       91K ops/sec
 Valtio             ███████████                                50K ops/sec
 MobX               ███████████                                49K ops/sec
 Jotai              ███                                        15K ops/sec
 Redux Toolkit      █                                          5K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Solid Signals | 94K | 0.011ms | 0.022ms | 1000 |
| Zen | 78K | 0.013ms | 0.028ms | 1000 |
| Zustand | 41K | 0.025ms | 0.056ms | 1000 |
| Preact Signals | 35K | 0.029ms | 0.055ms | 1000 |
| Valtio | 24K | 0.042ms | 0.095ms | 1000 |
| MobX | 21K | 0.049ms | 0.108ms | 1000 |
| Jotai | 5K | 0.189ms | 0.394ms | 1000 |
| Redux Toolkit | 2K | 0.457ms | 1.185ms | 1000 |

### Real-World Scenarios

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                ███████████████████████████████████        1.1M ops/sec
🥉 Solid Signals      ███████████████████████████████            921K ops/sec
 Zustand            █████████████████                          518K ops/sec
 Valtio             ██                                         72K ops/sec
 Jotai              ██                                         52K ops/sec
 MobX               █                                          38K ops/sec
 Redux Toolkit      █                                          17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 921K | 0.001ms | 0.006ms | 1000 |
| Zustand | 518K | 0.002ms | 0.006ms | 1000 |
| Valtio | 72K | 0.014ms | 0.031ms | 1000 |
| Jotai | 52K | 0.019ms | 0.042ms | 1000 |
| MobX | 38K | 0.026ms | 0.057ms | 1000 |
| Redux Toolkit | 17K | 0.057ms | 0.117ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   1.1M ops/sec
🥈 Solid Signals      ██████████████████████████████████████     1.1M ops/sec
🥉 Preact Signals     ████████████████████████████████           921K ops/sec
 Zustand            █████████████████████                      598K ops/sec
 Valtio             ███                                        71K ops/sec
 Jotai              ██                                         53K ops/sec
 MobX               █                                          36K ops/sec
 Redux Toolkit                                                 13K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 1.1M | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 921K | 0.001ms | 0.003ms | 1000 |
| Zustand | 598K | 0.002ms | 0.007ms | 1000 |
| Valtio | 71K | 0.014ms | 0.026ms | 1000 |
| Jotai | 53K | 0.019ms | 0.044ms | 1000 |
| MobX | 36K | 0.028ms | 0.052ms | 1000 |
| Redux Toolkit | 13K | 0.075ms | 0.153ms | 1000 |

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   1.6M ops/sec
🥈 Solid Signals      ██████████████████████████████████         1.4M ops/sec
🥉 Preact Signals     █████████████████████████████              1.2M ops/sec
 Zustand            ███████████████████                        778K ops/sec
 Valtio             ██                                         79K ops/sec
 Jotai              ██                                         66K ops/sec
 MobX               █                                          39K ops/sec
 Redux Toolkit      █                                          25K ops/sec
=======
| Preact Signals | 180K | 0.006ms | 0.010ms | 1000 |
| Solid Signals | 142K | 0.007ms | 0.020ms | 1000 |
| Zen | 113K | 0.009ms | 0.022ms | 1000 |
| Zustand | 91K | 0.011ms | 0.016ms | 1000 |
| Valtio | 50K | 0.020ms | 0.027ms | 1000 |
| MobX | 49K | 0.020ms | 0.032ms | 1000 |
| Jotai | 15K | 0.067ms | 0.100ms | 1000 |
| Redux Toolkit | 5K | 0.190ms | 0.635ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   3.0M ops/sec
🥈 Solid Signals      ████████████████████████████████████       2.7M ops/sec
🥉 Preact Signals     █████████████████████████████████          2.5M ops/sec
 Zustand            █████████████████████                      1.5M ops/sec
 Jotai              ██                                         183K ops/sec
 Valtio             ██                                         155K ops/sec
 MobX               █                                          91K ops/sec
 Redux Toolkit      █                                          64K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zen | 1.6M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.4M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.2M | 0.001ms | 0.004ms | 1000 |
| Zustand | 778K | 0.001ms | 0.003ms | 1000 |
| Valtio | 79K | 0.013ms | 0.030ms | 1000 |
| Jotai | 66K | 0.015ms | 0.030ms | 1000 |
| MobX | 39K | 0.026ms | 0.049ms | 1000 |
| Redux Toolkit | 25K | 0.040ms | 0.066ms | 1000 |
=======
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.002ms | 1000 |
| Jotai | 183K | 0.005ms | 0.011ms | 1000 |
| Valtio | 155K | 0.006ms | 0.011ms | 1000 |
| MobX | 91K | 0.011ms | 0.019ms | 1000 |
| Redux Toolkit | 64K | 0.016ms | 0.024ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   2.3M ops/sec
🥈 Zen                ███████████████████████████████████████    2.2M ops/sec
🥉 Zustand            ██████████████████████████████             1.7M ops/sec
 Solid Signals      ████████████████████                       1.1M ops/sec
 Jotai              ███                                        149K ops/sec
 Valtio             ██                                         130K ops/sec
 MobX               ██                                         103K ops/sec
 Redux Toolkit      █                                          42K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.3M | 0.000ms | 0.002ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.7M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 149K | 0.007ms | 0.013ms | 1000 |
| Valtio | 130K | 0.008ms | 0.010ms | 1000 |
| MobX | 103K | 0.010ms | 0.018ms | 1000 |
| Redux Toolkit | 42K | 0.024ms | 0.033ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Memory Management

```
<<<<<<< HEAD
🥇 Solid Signals      ████████████████████████████████████████   466K ops/sec
🥈 Zen                ████████                                   94K ops/sec
🥉 Zustand            ██████                                     68K ops/sec
 Preact Signals     ███                                        38K ops/sec
 Valtio             ██                                         26K ops/sec
 Redux Toolkit      ██                                         18K ops/sec
 Jotai              █                                          6K ops/sec
 MobX               █                                          6K ops/sec
=======
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                █████                                      162K ops/sec
🥉 Zustand            █████                                      150K ops/sec
 Preact Signals     ████                                       117K ops/sec
 Valtio             ██                                         60K ops/sec
 Redux Toolkit      █                                          43K ops/sec
 MobX               █                                          16K ops/sec
 Jotai                                                         14K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Solid Signals | 466K | 0.002ms | 0.005ms | 1000 |
| Zen | 94K | 0.011ms | 0.025ms | 1000 |
| Zustand | 68K | 0.015ms | 0.037ms | 1000 |
| Preact Signals | 38K | 0.026ms | 0.067ms | 1000 |
| Valtio | 26K | 0.039ms | 0.096ms | 1000 |
| Redux Toolkit | 18K | 0.055ms | 0.139ms | 1000 |
| Jotai | 6K | 0.159ms | 0.442ms | 1000 |
| MobX | 6K | 0.163ms | 0.557ms | 1000 |
=======
| Solid Signals | 1.2M | 0.001ms | 0.004ms | 1000 |
| Zen | 162K | 0.006ms | 0.010ms | 1000 |
| Zustand | 150K | 0.007ms | 0.013ms | 1000 |
| Preact Signals | 117K | 0.009ms | 0.015ms | 1000 |
| Valtio | 60K | 0.017ms | 0.034ms | 1000 |
| Redux Toolkit | 43K | 0.023ms | 0.038ms | 1000 |
| MobX | 16K | 0.063ms | 0.113ms | 1000 |
| Jotai | 14K | 0.072ms | 0.096ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   2.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      2.6M ops/sec
🥉 Solid Signals      ██████████████████████████████████         2.3M ops/sec
 Zustand            ███████████                                781K ops/sec
 Valtio             ██                                         165K ops/sec
 Jotai              ██                                         146K ops/sec
 MobX               █                                          93K ops/sec
 Redux Toolkit      █                                          45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.3M | 0.000ms | 0.002ms | 1000 |
| Zustand | 781K | 0.001ms | 0.002ms | 1000 |
| Valtio | 165K | 0.006ms | 0.011ms | 1000 |
| Jotai | 146K | 0.007ms | 0.012ms | 1000 |
| MobX | 93K | 0.011ms | 0.016ms | 1000 |
| Redux Toolkit | 45K | 0.022ms | 0.031ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

### Performance Stress Tests

#### Extreme Read (10000x)

```
<<<<<<< HEAD
🥇 Solid Signals      ████████████████████████████████████████   259K ops/sec
🥈 Zen                ██████████████████████                     145K ops/sec
🥉 Zustand            ██████████████████████                     141K ops/sec
 Preact Signals     ██████                                     37K ops/sec
 Redux Toolkit      ████                                       28K ops/sec
 Valtio             ███                                        21K ops/sec
 MobX               █                                          5K ops/sec
 Jotai                                                         277 ops/sec
=======
🥇 Zen                ████████████████████████████████████████   325K ops/sec
🥈 Solid Signals      ████████████████████████████████████████   322K ops/sec
🥉 Zustand            ██████████████████████                     177K ops/sec
 Preact Signals     ████████                                   64K ops/sec
 Redux Toolkit      ██████                                     47K ops/sec
 Valtio             ████                                       29K ops/sec
 MobX               █                                          10K ops/sec
 Jotai                                                         557 ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Solid Signals | 259K | 0.004ms | 0.006ms | 1000 |
| Zen | 145K | 0.007ms | 0.010ms | 1000 |
| Zustand | 141K | 0.007ms | 0.010ms | 1000 |
| Preact Signals | 37K | 0.027ms | 0.056ms | 1000 |
| Redux Toolkit | 28K | 0.036ms | 0.075ms | 1000 |
| Valtio | 21K | 0.048ms | 0.069ms | 1000 |
| MobX | 5K | 0.184ms | 0.309ms | 1000 |
| Jotai | 277 | 3.606ms | 4.374ms | 1000 |
=======
| Zen | 325K | 0.003ms | 0.004ms | 1000 |
| Solid Signals | 322K | 0.003ms | 0.004ms | 1000 |
| Zustand | 177K | 0.006ms | 0.007ms | 1000 |
| Preact Signals | 64K | 0.016ms | 0.027ms | 1000 |
| Redux Toolkit | 47K | 0.021ms | 0.028ms | 1000 |
| Valtio | 29K | 0.034ms | 0.045ms | 1000 |
| MobX | 10K | 0.100ms | 0.120ms | 1000 |
| Jotai | 557 | 1.794ms | 2.702ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Extreme Write (10000x)

```
<<<<<<< HEAD
🥇 Solid Signals      ████████████████████████████████████████   23K ops/sec
🥈 Zen                █████████████████████████████████          19K ops/sec
🥉 Preact Signals     █████████████████████████                  14K ops/sec
 MobX               █                                          662 ops/sec
 Zustand            █                                          515 ops/sec
 Valtio             █                                          413 ops/sec
 Jotai                                                         36 ops/sec
 Redux Toolkit                                                 13 ops/sec
=======
🥇 Zen                ████████████████████████████████████████   32K ops/sec
🥈 Preact Signals     ████████████████████████████████           26K ops/sec
🥉 Solid Signals      ███████████████████████████████            25K ops/sec
 MobX               ██                                         2K ops/sec
 Zustand            ██                                         1K ops/sec
 Valtio             █                                          1K ops/sec
 Jotai                                                         102 ops/sec
 Redux Toolkit                                                 32 ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Solid Signals | 23K | 0.044ms | 0.469ms | 1000 |
| Zen | 19K | 0.054ms | 0.070ms | 1000 |
| Preact Signals | 14K | 0.071ms | 0.124ms | 1000 |
| MobX | 662 | 1.510ms | 2.059ms | 1000 |
| Zustand | 515 | 1.943ms | 2.477ms | 1000 |
| Valtio | 413 | 2.420ms | 3.672ms | 1000 |
| Jotai | 36 | 27.591ms | 30.874ms | 1000 |
| Redux Toolkit | 13 | 79.974ms | 85.834ms | 1000 |
=======
| Zen | 32K | 0.031ms | 0.041ms | 1000 |
| Preact Signals | 26K | 0.039ms | 0.047ms | 1000 |
| Solid Signals | 25K | 0.040ms | 0.291ms | 1000 |
| MobX | 2K | 0.632ms | 0.912ms | 1000 |
| Zustand | 1K | 0.728ms | 0.933ms | 1000 |
| Valtio | 1K | 0.997ms | 1.321ms | 1000 |
| Jotai | 102 | 9.831ms | 12.859ms | 1000 |
| Redux Toolkit | 32 | 31.139ms | 37.904ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)

#### Large Array (1000 items)

```
<<<<<<< HEAD
🥇 Zen                ████████████████████████████████████████   85K ops/sec
🥈 Preact Signals     ████████████████████████████               59K ops/sec
🥉 Zustand            ████████████████████████                   50K ops/sec
 Solid Signals      █████████████████████                      45K ops/sec
 Jotai              ███████████████                            32K ops/sec
 MobX               ███                                        7K ops/sec
 Valtio             █                                          2K ops/sec
 Redux Toolkit                                                 696 ops/sec
=======
🥇 Zen                ████████████████████████████████████████   163K ops/sec
🥈 Preact Signals     █████████████████████████████████████      151K ops/sec
🥉 Solid Signals      ██████████████████████████████████         136K ops/sec
 Zustand            █████████████████████████████              119K ops/sec
 Jotai              ██████████████████                         72K ops/sec
 MobX               ████                                       15K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
>>>>>>> 8448058 (feat: implement per-test atomic result files)
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
<<<<<<< HEAD
| Zen | 85K | 0.012ms | 0.028ms | 1000 |
| Preact Signals | 59K | 0.017ms | 0.041ms | 1000 |
| Zustand | 50K | 0.020ms | 0.046ms | 1000 |
| Solid Signals | 45K | 0.022ms | 0.037ms | 1000 |
| Jotai | 32K | 0.031ms | 0.077ms | 1000 |
| MobX | 7K | 0.138ms | 0.293ms | 1000 |
| Valtio | 2K | 0.415ms | 0.805ms | 1000 |
| Redux Toolkit | 696 | 1.436ms | 2.399ms | 1000 |
=======
| Zen | 163K | 0.006ms | 0.013ms | 1000 |
| Preact Signals | 151K | 0.007ms | 0.010ms | 1000 |
| Solid Signals | 136K | 0.007ms | 0.011ms | 1000 |
| Zustand | 119K | 0.008ms | 0.011ms | 1000 |
| Jotai | 72K | 0.014ms | 0.019ms | 1000 |
| MobX | 15K | 0.065ms | 0.092ms | 1000 |
| Valtio | 6K | 0.176ms | 0.617ms | 1000 |
| Redux Toolkit | 1K | 0.703ms | 1.126ms | 1000 |
>>>>>>> 8448058 (feat: implement per-test atomic result files)


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

<<<<<<< HEAD
*Generated on 2025-11-13T02:58:18.848Z*
=======
*Generated on 2025-11-13T03:10:19.304Z*
>>>>>>> 8448058 (feat: implement per-test atomic result files)

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
