# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 6, 2025
- **Last Run:** 5:14:06 PM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@preact/signals](https://github.com/preactjs/signals)** | `v2.3.2` | 3.04KB | Dec 6, 2024 | ✅ Latest |
| **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **[@sylphx/zen](https://github.com/sylphxltd/zen)** | `v1.0.0` | 4.10KB | Dec 6, 2024 | ✅ Latest |
| **[jotai](https://github.com/pmndrs/jotai)** | `v2.15.1` | 4.29KB | Dec 6, 2024 | ✅ Latest |
| **[mobx](https://github.com/mobxjs/mobx)** | `v6.15.0` | 17.56KB | Dec 6, 2024 | ✅ Latest |
| **[recoil](https://github.com/facebookexperimental/Recoil)** | `v0.7.7` | 23.48KB | Nov 6, 2025 | ✅ Latest |
| **[solid-js](https://github.com/solidjs/solid)** | `v1.9.10` | 3.96KB | Dec 6, 2024 | ✅ Latest |
| **[valtio](https://github.com/pmndrs/valtio)** | `v2.2.0` | 3.07KB | Nov 6, 2025 | ✅ Latest |
| **[zustand](https://github.com/pmndrs/zustand)** | `v5.0.8` | 1.17KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 3.08KB | Baseline |
| 🥈 | **[@preact/signals](https://github.com/preactjs/signals)** | 3.04KB | 8.97KB | 2.59x |
| 🥉 | **[valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 8.27KB | 2.62x |
| 4 | **[solid-js](https://github.com/solidjs/solid)** | 3.96KB | 11.91KB | 3.38x |
| 5 | **[@sylphx/zen](https://github.com/sylphxltd/zen)** | 4.10KB | 14.49KB | 3.50x |
| 6 | **[jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 11.12KB | 3.66x |
| 7 | **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 40.60KB | 11.79x |
| 8 | **[mobx](https://github.com/mobxjs/mobx)** | 17.56KB | 63.65KB | 14.97x |
| 9 | **[recoil](https://github.com/facebookexperimental/Recoil)** | 23.48KB | 79.39KB | 20.02x |

**Size Insight:** zustand is the most lightweight at 1.17KB (gzip), while recoil is 20.02x larger at 23.48KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 63.7/100 | Baseline |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 51.8/100 | 81.3% |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 33.9/100 | 53.2% |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 13.1/100 | 20.6% |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.1/100 | 11.1% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.6/100 | 7.2% |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.9/100 | 6.1% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.8/100 | 4.4% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 100/100 | Excellent |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.04KB | 91/100 | Excellent |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 91/100 | Excellent |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.96KB | 85/100 | Good |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 4.10KB | 84/100 | Good |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 83/100 | Good |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 58/100 | Average |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 17.56KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 13/13 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 13/13 | 100% |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12/13 | 92% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12/13 | 92% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 12/13 | 92% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 12/13 | 92% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 12/13 | 92% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 12/13 | 92% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### Simple Increment

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 35.32M
🥈 Zen                  ████████████████████████████████████████ 35.02M
🥉 Preact Signals       ███████████████████████████████████████ 34.20M
   Valtio               ██████ 5.64M
   MobX                 ██████ 5.39M
   Jotai                ██ 1.70M
   Redux Toolkit        █ 882.34K
   Zustand               379.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 35.32M | ±0.05% | 0.0283ms | 0.0420ms | 17.66M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 35.02M | ±0.06% | 0.0286ms | 0.0420ms | 17.51M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 34.20M | ±0.04% | 0.0292ms | 0.0420ms | 17.10M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.64M | ±0.17% | 0.1774ms | 0.2090ms | 2.82M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 5.39M | ±0.11% | 0.1856ms | 0.2500ms | 2.69M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.70M | ±0.51% | 0.5894ms | 1.0830ms | 848.38K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 882.34K | ±0.23% | 1.1334ms | 1.4170ms | 441.17K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 379.53K | ±0.35% | 2.6348ms | 3.0840ms | 189.77K |

**Key Insight:** Solid Signals is **93.06x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 36.78M
🥈 Redux Toolkit        ███████████████████████████████████████ 36.11M
🥉 Solid Signals        ███████████████████████████████████████ 35.79M
   Preact Signals       ██████████████████████████████████████ 35.04M
   Zustand              █████████████████████████████████ 29.90M
   Valtio               ████████████████████████████ 25.57M
   MobX                 ██████████ 9.31M
   Jotai                ███ 2.84M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 36.78M | ±0.05% | 0.0272ms | 0.0420ms | 18.39M |
| 🥈 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 36.11M | ±0.05% | 0.0277ms | 0.0420ms | 18.05M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 35.79M | ±0.05% | 0.0279ms | 0.0420ms | 17.89M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 35.04M | ±0.04% | 0.0285ms | 0.0420ms | 17.52M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 29.90M | ±0.06% | 0.0334ms | 0.0420ms | 14.95M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.57M | ±0.03% | 0.0391ms | 0.0420ms | 12.79M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 9.31M | ±0.12% | 0.1074ms | 0.1250ms | 4.66M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.84M | ±0.31% | 0.3527ms | 0.4170ms | 1.42M |

**Key Insight:** Zen is **12.97x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 28.16M
🥈 Zen                  ███████████████████████████████████████ 27.47M
🥉 Preact Signals       ██████████████████████████████████████ 26.91M
   MobX                 ████████ 5.73M
   Valtio               ████████ 5.32M
   Jotai                ███ 2.16M
   Redux Toolkit        █ 656.20K
   Zustand              █ 376.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 28.16M | ±0.92% | 0.0355ms | 0.0830ms | 14.08M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 27.47M | ±3.57% | 0.0364ms | 0.0830ms | 13.74M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 26.91M | ±1.30% | 0.0372ms | 0.0830ms | 13.45M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.73M | ±0.17% | 0.1745ms | 0.2500ms | 2.87M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.32M | ±0.12% | 0.1881ms | 0.2500ms | 2.66M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.16M | ±0.79% | 0.4629ms | 0.6250ms | 1.08M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 656.20K | ±0.37% | 1.5239ms | 1.8750ms | 328.10K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 376.26K | ±0.27% | 2.6577ms | 3.2500ms | 188.13K |

**Key Insight:** Solid Signals is **74.84x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 478.93K
🥈 Valtio               ███████████████████████████████ 368.11K
🥉 Jotai                ██ 18.15K
   Zustand              ██ 18.13K
   Preact Signals       █ 14.82K
   Solid Signals        █ 14.74K
   Zen                  █ 14.51K
   Redux Toolkit        █ 7.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 478.93K | ±7.61% | 2.0880ms | 2.1670ms | 239.47K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 368.11K | ±15.49% | 2.7166ms | 3.0000ms | 185.09K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 18.15K | ±9.67% | 55.0933ms | 83.0410ms | 9.08K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 18.13K | ±9.58% | 55.1460ms | 84.0420ms | 9.07K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.82K | ±12.53% | 67.4768ms | 114.5420ms | 7.41K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 14.74K | ±12.64% | 67.8417ms | 115.7090ms | 7.37K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 14.51K | ±13.16% | 68.9074ms | 122.3750ms | 7.26K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.34K | ±0.97% | 136.2928ms | 238.5000ms | 3.67K |

**Key Insight:** MobX is **65.27x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.21M
🥈 Solid Signals        ███████████████████████████████████ 29.02M
🥉 Preact Signals       ████████████████████████████████ 26.44M
   Valtio               ██████████ 8.05M
   MobX                 ████████ 6.90M
   Jotai                ███ 2.18M
   Redux Toolkit        █ 1.02M
   Zustand               367.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.21M | ±0.04% | 0.0301ms | 0.0830ms | 16.61M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 29.02M | ±0.04% | 0.0345ms | 0.0830ms | 14.51M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 26.44M | ±0.04% | 0.0378ms | 0.0840ms | 13.22M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 8.05M | ±0.60% | 0.1243ms | 0.2090ms | 4.02M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 6.90M | ±0.52% | 0.1450ms | 0.2090ms | 3.45M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.18M | ±0.67% | 0.4590ms | 1.3330ms | 1.09M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.02M | ±0.84% | 0.9776ms | 1.3330ms | 511.46K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 367.50K | ±0.56% | 2.7211ms | 3.2920ms | 183.75K |

**Key Insight:** Zen is **90.37x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 12.81M
🥈 Preact Signals       ██████ 1.81M
🥉 Zen                  ████ 1.44M
   Redux Toolkit        █ 282.93K
   Zustand              █ 230.50K
   MobX                  155.69K
   Jotai                 105.94K
   Valtio                12.61
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 12.81M | ±0.98% | 0.0780ms | 0.1250ms | 6.41M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.81M | ±0.64% | 0.5516ms | 0.7080ms | 906.47K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 1.44M | ±1.32% | 0.6962ms | 0.9170ms | 718.13K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 282.93K | ±9.20% | 3.5344ms | 3.6670ms | 141.47K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 230.50K | ±9.96% | 4.3385ms | 4.7500ms | 115.25K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 155.69K | ±9.59% | 6.4229ms | 6.2080ms | 77.97K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 105.94K | ±19.10% | 9.4389ms | 77.5420ms | 52.97K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 12.61 | ±24.17% | 79296.5124ms | 150424.5830ms | 10.00 |

**Key Insight:** Solid Signals is **1016158.52x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 23.76M
🥈 Preact Signals       ███████████████████████████████████ 20.54M
🥉 Zen                  ███████████████████████████████████ 20.50M
   Valtio               █████ 2.78M
   MobX                 ███ 2.07M
   Jotai                █ 731.18K
   Redux Toolkit        █ 554.59K
   Zustand              █ 371.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 23.76M | ±0.57% | 0.0421ms | 0.0840ms | 11.88M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 20.54M | ±0.04% | 0.0487ms | 0.0840ms | 10.27M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 20.50M | ±0.04% | 0.0488ms | 0.0840ms | 10.25M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.78M | ±0.54% | 0.3601ms | 0.4580ms | 1.39M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.07M | ±12.27% | 0.4830ms | 1.1250ms | 1.04M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 731.18K | ±1.31% | 1.3677ms | 1.6670ms | 365.59K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 554.59K | ±1.18% | 1.8031ms | 2.1670ms | 277.30K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 371.90K | ±0.96% | 2.6889ms | 3.2090ms | 185.95K |

**Key Insight:** Solid Signals is **63.88x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.38K
🥈 Zen                  ██████████████████████████████████████ 4.21K
🥉 Zustand              █████████████████████████████████████ 4.08K
   Jotai                █████████████████████████████████████ 4.06K
   Preact Signals       █████████████████████████████████ 3.63K
   Redux Toolkit        ███ 379.84
   MobX                  12.92
   Valtio                4.74
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.38K | ±6.35% | 228.2388ms | 281.2500ms | 2.19K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 4.21K | ±6.96% | 237.2795ms | 282.3330ms | 2.11K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.08K | ±6.60% | 244.9133ms | 296.8330ms | 2.04K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.06K | ±6.68% | 246.4292ms | 297.6250ms | 2.03K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.63K | ±21.00% | 275.5896ms | 517.6250ms | 1.81K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 379.84 | ±0.90% | 2632.6954ms | 3347.5410ms | 190.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 12.92 | ±2.36% | 77406.1043ms | 83340.7080ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.74 | ±2.40% | 211111.4625ms | 221906.1250ms | 10.00 |

**Key Insight:** Solid Signals is **924.96x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 12.14K
🥈 Jotai                ████████████████████████████████████ 10.90K
🥉 Preact Signals       ██████████████████ 5.53K
   Zustand              █████████████████ 5.01K
   Solid Signals        ████████████████ 4.91K
   Redux Toolkit        ███ 1.04K
   Valtio                39.39
   MobX                  15.93
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 12.14K | ±0.06% | 82.4037ms | 90.5830ms | 6.07K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.90K | ±0.06% | 91.7844ms | 100.0830ms | 5.45K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.53K | ±16.37% | 180.6854ms | 241.9590ms | 2.77K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.01K | ±17.13% | 199.4803ms | 248.0420ms | 2.63K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.91K | ±21.83% | 203.7076ms | 243.0000ms | 2.46K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.04K | ±1.12% | 963.1604ms | 1665.7080ms | 520.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 39.39 | ±0.95% | 25385.1166ms | 27029.0000ms | 20.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.93 | ±1.90% | 62771.6167ms | 65389.5420ms | 10.00 |

**Key Insight:** Zen is **761.76x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.90K
🥈 Solid Signals        █████████████████ 5.05K
🥉 Zustand              █████████████████ 4.99K
   Preact Signals       █████████████████ 4.94K
   Jotai                ████████████████ 4.77K
   Redux Toolkit        ███ 1.04K
   Valtio                38.76
   MobX                  15.26
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.90K | ±0.05% | 84.0447ms | 91.5000ms | 5.95K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.05K | ±16.70% | 197.8651ms | 252.4170ms | 2.53K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.99K | ±14.22% | 200.5735ms | 257.8340ms | 2.49K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.94K | ±17.52% | 202.3857ms | 257.9590ms | 2.47K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.77K | ±15.41% | 209.7812ms | 263.9590ms | 2.38K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.04K | ±1.14% | 965.1252ms | 1626.0840ms | 519.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 38.76 | ±1.32% | 25796.9813ms | 27517.7500ms | 20.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.26 | ±6.52% | 65525.6750ms | 82428.7920ms | 10.00 |

**Key Insight:** Zen is **779.65x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 25.31M
🥈 Zen                  █████████████████████████████████████ 23.63M
🥉 Preact Signals       ████████████████████████████████████ 23.03M
   Valtio               ███████ 4.26M
   MobX                 ████ 2.55M
   Jotai                ███ 1.63M
   Zustand              █ 365.04K
   Redux Toolkit         229.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 25.31M | ±0.68% | 0.0395ms | 0.0830ms | 12.65M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 23.63M | ±0.08% | 0.0423ms | 0.0840ms | 11.81M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 23.03M | ±0.64% | 0.0434ms | 0.0840ms | 11.51M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.26M | ±0.35% | 0.2346ms | 0.2920ms | 2.13M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.55M | ±0.47% | 0.3924ms | 0.5000ms | 1.27M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.63M | ±23.03% | 0.6144ms | 1.4580ms | 855.99K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 365.04K | ±0.74% | 2.7394ms | 3.2920ms | 182.52K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 229.19K | ±0.82% | 4.3632ms | 5.0000ms | 114.59K |

**Key Insight:** Solid Signals is **110.43x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 284.59K
🥈 Preact Signals       ███████████████████████████████████████ 279.04K
🥉 Jotai                █████████████████████████████████ 237.93K
   Zen                  ██████████████████████████████ 210.68K
   Zustand              █████████████████████ 146.81K
   Valtio               ██████████ 70.86K
   MobX                 ████ 28.93K
   Redux Toolkit        █ 3.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 284.59K | ±1.12% | 3.5138ms | 6.2500ms | 142.30K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 279.04K | ±0.94% | 3.5837ms | 6.4170ms | 139.52K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 237.93K | ±0.84% | 4.2030ms | 7.0830ms | 118.96K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 210.68K | ±0.91% | 4.7466ms | 10.5000ms | 105.34K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 146.81K | ±0.85% | 6.8113ms | 9.0830ms | 73.41K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 70.86K | ±0.76% | 14.1132ms | 28.0830ms | 35.43K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 28.93K | ±1.07% | 34.5657ms | 71.1250ms | 14.47K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.98K | ±2.38% | 251.4205ms | 473.3750ms | 1.99K |

**Key Insight:** Solid Signals is **71.55x faster** than Redux Toolkit in this category.

### Reactive Async Operations

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 2.15M
🥈 Zen                   880.35
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.15M | ±0.50% | 0.4648ms | 0.5840ms | 1.08M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 880.35 | ±1.08% | 1135.9162ms | 1190.5000ms | 441.00 |

## 🚀 Running Benchmarks

```bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
```

## ℹ️ About

This benchmark is automatically updated daily by GitHub Actions. Benchmarks run only when:
- A library releases a new version
- Test files are modified

**Methodology:** Each test runs multiple iterations until statistical significance is achieved. Results are averaged over 3 complete runs to ensure accuracy.

---

*Last generated: 2025-11-06T23:02:42.667Z*
