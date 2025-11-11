# Immutability Benchmark 🔄

Comprehensive performance testing of JavaScript immutability libraries and patterns.

## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)
- [✨ Feature Comparison](#-feature-comparison)
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 11, 2025
- **Last Run:** 1:35:03 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/SylphxAI/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
| **[immer](https://github.com/immerjs/immer)** | `v10.2.0` | 4.70KB | Nov 6, 2025 | ✅ Latest |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 | ✅ Latest |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v5.1.4` | 17.74KB | Nov 6, 2025 | ✅ Latest |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.3.0` | 7.16KB | Nov 6, 2025 | ✅ Latest |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[@sylphx/craft](https://github.com/SylphxAI/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.7/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.9/100 | 77.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.2% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 43.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.1% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/SylphxAI/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/SylphxAI/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/SylphxAI/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/SylphxAI/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [JSON Patches - Generate](#json-patches-generate)
- [JSON Patches - Apply](#json-patches-apply)
- [JSON Patches - Roundtrip](#json-patches-roundtrip)
- [Map - Set Operation](#map-set-operation)
- [Map - Update Nested Value](#map-update-nested-value)
- [Set - Add Operation](#set-add-operation)
- [Set - Delete Operation](#set-delete-operation)
- [Map - Large (100 items)](#map-large-100-items)
- [Set - Large (100 items)](#set-large-100-items)
- [Undo/Redo - Inverse Patches](#undoredo-inverse-patches)
- [Simple Object Update](#simple-object-update)
- [Nested Object Update](#nested-object-update)
- [Array Push](#array-push)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels)
- [Large Array Update (1000 items)](#large-array-update-1000-items)
- [Multiple Updates (3 changes)](#multiple-updates-3-changes)

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 212.24K
🥈 Immer                █████████████████████ 112.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 212.24K | ±2.31% | 4.7117ms | 9.3370ms | 106.12K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.68K | ±1.85% | 8.8747ms | 18.8250ms | 56.34K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 997.31K
🥈 Immer                █████ 131.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 997.31K | ±0.18% | 1.0027ms | 1.3730ms | 498.66K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.77K | ±1.49% | 7.5891ms | 14.8680ms | 65.88K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 170.58K
🥈 Immer                ██████████████ 60.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 170.58K | ±1.96% | 5.8624ms | 11.4610ms | 85.29K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.27K | ±1.92% | 16.5929ms | 31.3980ms | 30.13K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 737.39K
🥈 Mutative             █████████████████████████ 462.65K
🥉 Immer                █████████ 174.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 737.39K | ±1.78% | 1.3561ms | 3.0560ms | 368.69K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 462.65K | ±0.71% | 2.1615ms | 3.0260ms | 231.33K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 174.82K | ±1.14% | 5.7203ms | 9.7980ms | 87.41K |

**Key Insight:** Craft is **4.22x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 428.67K
🥉 Immer                █████ 155.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.26M | ±0.49% | 0.7945ms | 1.1630ms | 629.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 428.67K | ±0.44% | 2.3328ms | 2.8060ms | 214.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 155.86K | ±0.70% | 6.4160ms | 11.8820ms | 77.93K |

**Key Insight:** Craft is **8.08x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 858.44K
🥈 Mutative             █████████████████████ 449.39K
🥉 Immer                ████████ 167.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 858.44K | ±0.49% | 1.1649ms | 1.6030ms | 429.22K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.39K | ±0.52% | 2.2252ms | 2.7760ms | 224.70K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.32K | ±0.51% | 5.9764ms | 10.2590ms | 83.66K |

**Key Insight:** Craft is **5.13x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 831.85K
🥈 Mutative             █████████████████████ 442.96K
🥉 Immer                █████████ 183.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 831.85K | ±0.54% | 1.2021ms | 1.5930ms | 416.01K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 442.96K | ±0.51% | 2.2575ms | 2.8450ms | 221.48K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.01K | ±0.50% | 5.4641ms | 6.8920ms | 91.51K |

**Key Insight:** Craft is **4.55x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 180.85K
🥈 Mutative             ████████████████████████████████ 145.86K
🥉 Immer                █████████████████ 78.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 180.85K | ±0.50% | 5.5295ms | 8.6260ms | 90.42K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 145.86K | ±0.51% | 6.8557ms | 11.7420ms | 72.93K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.25K | ±0.77% | 12.7803ms | 24.2850ms | 39.12K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.22K
🥈 Mutative             █████████████ 75.48K
🥉 Immer                ██ 13.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 225.22K | ±0.48% | 4.4402ms | 5.9310ms | 112.61K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.48K | ±0.49% | 13.2480ms | 22.9230ms | 37.74K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.49K | ±0.44% | 74.1117ms | 90.9190ms | 6.75K |

**Key Insight:** Craft is **16.69x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 219.95K
🥈 Immer                █████████████ 71.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 219.95K | ±0.46% | 4.5465ms | 6.1110ms | 109.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.86K | ±0.39% | 13.9165ms | 24.5450ms | 35.93K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Mutative             ████████████████████████████████████ 969.84K
🥉 Immutability Helper  ████████████████████████████████████ 960.31K
   Craft                ████████████████████████████████████ 947.34K
   Immer                ██████████████████████████ 684.13K
   Seamless Immutable   █████ 126.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.56M | ±0.09% | 0.0687ms | 0.1000ms | 7.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.18% | 0.9403ms | 1.3120ms | 531.72K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 969.84K | ±0.44% | 1.0311ms | 1.3530ms | 484.92K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 960.31K | ±0.42% | 1.0413ms | 1.8730ms | 480.15K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 947.34K | ±2.81% | 1.0556ms | 2.6850ms | 473.67K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 684.13K | ±2.22% | 1.4617ms | 3.2560ms | 342.06K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.73K | ±0.46% | 7.8906ms | 16.3200ms | 63.37K |

**Key Insight:** Native Spread is **114.89x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 495.87K
🥈 Mutative             ████████████████████████████████ 390.80K
🥉 Craft                ███████████████████████████ 337.88K
   Immutable.js         ██████████████████ 226.24K
   Immer                ████████████ 150.24K
   Seamless Immutable   ███ 37.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.75M | ±0.17% | 0.0851ms | 0.1300ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 495.87K | ±0.32% | 2.0167ms | 2.6350ms | 247.94K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 390.80K | ±4.15% | 2.5589ms | 4.4480ms | 195.40K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 337.88K | ±2.79% | 2.9596ms | 5.3100ms | 168.94K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 226.24K | ±1.69% | 4.4200ms | 7.4540ms | 113.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 150.24K | ±2.25% | 6.6560ms | 15.8090ms | 75.12K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.90K | ±0.40% | 26.3843ms | 35.8560ms | 18.95K |

**Key Insight:** Native Spread is **310.07x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.65M
🥈 Immutability Helper  ██████████████████████████████████ 1.39M
🥉 Craft                ████████████ 512.43K
   Mutative             ██████████ 424.01K
   Immer                ██████ 266.79K
   Seamless Immutable   █ 61.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.00M | ±0.59% | 0.0833ms | 0.1200ms | 6.00M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.65M | ±0.69% | 0.6072ms | 0.9720ms | 823.49K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.39M | ±0.37% | 0.7176ms | 0.9320ms | 696.81K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 512.43K | ±0.70% | 1.9515ms | 2.2940ms | 256.21K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 424.01K | ±0.63% | 2.3585ms | 2.8650ms | 212.00K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 266.79K | ±0.75% | 3.7483ms | 7.2040ms | 133.39K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.16K | ±0.39% | 16.3497ms | 25.5270ms | 30.58K |

**Key Insight:** Native Spread is **196.23x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 804.87K
🥈 Immutability Helper  ████████████████████████████ 571.64K
🥉 Craft                ████████████████ 319.82K
   Mutative             ███████████ 216.83K
   Immer                ███████ 139.70K
   Seamless Immutable   ███ 59.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.03M | ±1.34% | 0.0831ms | 0.1200ms | 6.02M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 804.87K | ±0.66% | 1.2424ms | 1.7140ms | 402.43K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 571.64K | ±0.30% | 1.7493ms | 1.9130ms | 285.82K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 319.82K | ±0.55% | 3.1268ms | 3.7970ms | 159.91K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 216.83K | ±0.55% | 4.6120ms | 5.4700ms | 108.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 139.70K | ±0.50% | 7.1584ms | 14.5970ms | 69.85K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.94K | ±0.71% | 16.6820ms | 30.0060ms | 29.97K |

**Key Insight:** Native Filter is **200.75x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 491.70K
🥈 Mutative             ████████████████████████████████████ 448.39K
🥉 Immutability Helper  ████████████████████████████████ 392.52K
   Immer                ██████████████████████ 275.05K
   Immutable.js         ███████████████ 181.79K
   Seamless Immutable   ███ 31.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.09M | ±1.43% | 0.0901ms | 0.1300ms | 5.55M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 491.70K | ±1.11% | 2.0338ms | 2.5650ms | 245.85K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 448.39K | ±1.00% | 2.2302ms | 2.7560ms | 224.20K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 392.52K | ±0.52% | 2.5477ms | 3.3560ms | 196.26K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 275.05K | ±0.40% | 3.6358ms | 4.2780ms | 137.52K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 181.79K | ±1.04% | 5.5008ms | 9.7480ms | 90.90K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.30K | ±1.04% | 31.9522ms | 42.6400ms | 15.65K |

**Key Insight:** Native Map is **354.49x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.17K
🥈 Craft                ███████████████████████████████████ 267.76K
🥉 Mutative             ████████████████████████████ 216.07K
   Immutable.js         ██████████████████████ 169.21K
   Immer                █████████████ 96.17K
   Seamless Immutable   ███ 22.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.01M | ±0.88% | 0.1110ms | 0.1800ms | 4.51M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.17K | ±0.78% | 3.2555ms | 3.8670ms | 153.59K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 267.76K | ±0.59% | 3.7347ms | 4.4390ms | 133.88K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.07K | ±0.69% | 4.6280ms | 5.3500ms | 108.04K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 169.21K | ±0.71% | 5.9099ms | 8.7960ms | 84.60K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.17K | ±0.69% | 10.3988ms | 20.2880ms | 48.08K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.27K | ±0.64% | 44.9102ms | 56.9860ms | 11.13K |

**Key Insight:** Native Spread is **404.69x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 341.19K
🥈 Immer                ███ 27.81K
🥉 Craft                ███ 21.84K
   Immutability Helper  █ 6.32K
   Immutable.js         █ 707.00
   Seamless Immutable   █ 252.99
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 346.31K | ±0.81% | 2.8876ms | 3.4060ms | 173.15K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 341.19K | ±0.91% | 2.9309ms | 4.3680ms | 170.59K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 27.81K | ±0.77% | 35.9643ms | 46.3160ms | 13.90K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.84K | ±0.70% | 45.7789ms | 55.3540ms | 10.92K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.32K | ±0.82% | 158.2359ms | 184.7040ms | 3.16K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 707.00 | ±1.84% | 1414.4217ms | 2563.1020ms | 354.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.99 | ±1.02% | 3952.8006ms | 4754.6620ms | 127.00 |

**Key Insight:** Native Map is **1368.89x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 273.59K
🥈 Craft                ███████████████████████████████████████ 269.37K
🥉 Mutative             █████████████████████████████ 196.74K
   Immutable.js         ███████████████████████ 156.20K
   Immer                ██████████████████ 125.09K
   Seamless Immutable   ███ 18.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.27M | ±1.46% | 0.1595ms | 0.1900ms | 3.14M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 273.59K | ±0.93% | 3.6551ms | 4.2880ms | 136.79K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 269.37K | ±1.03% | 3.7124ms | 4.3790ms | 134.68K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 196.74K | ±0.92% | 5.0828ms | 5.8410ms | 98.37K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 156.20K | ±1.04% | 6.4019ms | 11.1710ms | 78.10K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.09K | ±1.02% | 7.9941ms | 15.9200ms | 62.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.69K | ±0.91% | 53.5065ms | 64.3900ms | 9.35K |

**Key Insight:** Native Spread is **335.51x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T01:38:34.447Z*
