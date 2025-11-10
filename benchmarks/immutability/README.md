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

- **Last Updated:** November 10, 2025
- **Last Run:** 7:11:35 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 10, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥉 | **[@sylphx/craft](https://github.com/sylphxltd/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.7/100 | 77.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.5% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.2/100 | 43.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.0% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/sylphxltd/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/sylphxltd/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/sylphxltd/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/sylphxltd/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

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
🥇 Craft                ████████████████████████████████████████ 209.63K
🥈 Immer                █████████████████████ 110.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 209.63K | ±2.17% | 4.7704ms | 9.4370ms | 104.81K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.22K | ±1.75% | 9.0732ms | 25.8390ms | 55.11K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 963.10K
🥈 Immer                █████ 130.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 963.10K | ±0.18% | 1.0383ms | 1.6930ms | 481.55K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.00K | ±1.74% | 7.6925ms | 15.8200ms | 65.00K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.38K
🥈 Immer                ██████████████ 60.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.38K | ±1.90% | 5.7345ms | 11.9620ms | 87.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.34K | ±1.62% | 16.5715ms | 30.6880ms | 30.17K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 735.58K
🥈 Mutative             █████████████████████████ 468.45K
🥉 Immer                █████████ 173.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 735.58K | ±1.91% | 1.3595ms | 3.0360ms | 367.79K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 468.45K | ±0.73% | 2.1347ms | 2.6350ms | 234.22K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 173.98K | ±1.07% | 5.7479ms | 9.4380ms | 86.99K |

**Key Insight:** Craft is **4.23x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 426.50K
🥉 Immer                █████ 156.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.25M | ±0.68% | 0.8028ms | 1.3820ms | 622.86K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 426.50K | ±0.48% | 2.3447ms | 2.9650ms | 213.25K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.01K | ±0.52% | 6.4098ms | 10.5700ms | 78.01K |

**Key Insight:** Craft is **7.98x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 873.80K
🥈 Mutative             █████████████████████ 454.60K
🥉 Immer                ████████ 165.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 873.80K | ±0.44% | 1.1444ms | 1.5430ms | 436.90K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.60K | ±0.45% | 2.1997ms | 2.6850ms | 227.30K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.07K | ±0.72% | 6.0582ms | 11.2610ms | 82.53K |

**Key Insight:** Craft is **5.29x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 862.14K
🥈 Mutative             █████████████████████ 451.50K
🥉 Immer                ████████ 181.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 862.14K | ±0.42% | 1.1599ms | 1.4730ms | 431.07K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.50K | ±0.41% | 2.2148ms | 2.6650ms | 225.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.28K | ±0.35% | 5.5164ms | 9.1380ms | 90.64K |

**Key Insight:** Craft is **4.76x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 180.55K
🥈 Mutative             ████████████████████████████████ 146.22K
🥉 Immer                ██████████████████ 80.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 180.55K | ±0.51% | 5.5387ms | 7.3540ms | 90.27K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 146.22K | ±0.51% | 6.8388ms | 12.7540ms | 73.11K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.04K | ±0.51% | 12.4939ms | 23.1730ms | 40.02K |

**Key Insight:** Craft is **2.26x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.77K
🥈 Mutative             ██████████████ 76.75K
🥉 Immer                ██ 13.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.77K | ±0.48% | 4.4098ms | 5.5710ms | 113.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.75K | ±0.48% | 13.0287ms | 22.5330ms | 38.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.55K | ±0.36% | 73.7795ms | 91.1620ms | 6.78K |

**Key Insight:** Craft is **16.73x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.62K
🥈 Immer                █████████████ 71.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.62K | ±0.62% | 4.4719ms | 7.6650ms | 111.81K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.17K | ±0.28% | 14.0508ms | 24.6360ms | 35.59K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  █████████████████████████████████████ 1.01M
🥉 Mutative             ████████████████████████████████████ 956.85K
   Craft                ███████████████████████████████████ 950.71K
   Immer                ██████████████████████████ 706.00K
   Seamless Immutable   █████ 130.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.73M | ±0.10% | 0.0679ms | 0.0900ms | 7.36M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.15% | 0.9283ms | 1.3430ms | 538.65K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.01M | ±0.33% | 0.9946ms | 1.1820ms | 502.74K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 956.85K | ±0.72% | 1.0451ms | 1.3220ms | 478.42K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 950.71K | ±2.73% | 1.0518ms | 2.6950ms | 476.09K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 706.00K | ±1.88% | 1.4164ms | 3.2090ms | 353.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.08K | ±0.28% | 7.6876ms | 14.7780ms | 65.04K |

**Key Insight:** Native Spread is **113.22x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 501.90K
🥈 Mutative             ███████████████████████████████ 394.45K
🥉 Craft                ███████████████████████████ 344.32K
   Immutable.js         ███████████████████ 233.83K
   Immer                ████████████ 153.34K
   Seamless Immutable   ███ 37.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.81M | ±0.14% | 0.0847ms | 0.1200ms | 5.91M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 501.90K | ±0.31% | 1.9924ms | 2.3340ms | 250.95K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 394.45K | ±0.95% | 2.5352ms | 4.5480ms | 197.22K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 344.32K | ±2.49% | 2.9043ms | 5.2100ms | 172.16K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 233.83K | ±0.67% | 4.2767ms | 6.9630ms | 116.91K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.34K | ±2.16% | 6.5216ms | 12.2730ms | 76.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.34K | ±0.41% | 26.7793ms | 39.1130ms | 18.67K |

**Key Insight:** Native Spread is **316.28x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.78M
🥈 Immutability Helper  █████████████████████████████████ 1.45M
🥉 Craft                ████████████ 515.88K
   Mutative             ██████████ 428.97K
   Immer                ██████ 285.19K
   Seamless Immutable   █ 61.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.50M | ±0.46% | 0.0800ms | 0.1100ms | 6.25M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.78M | ±0.45% | 0.5617ms | 0.8520ms | 890.18K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.45M | ±0.09% | 0.6912ms | 0.7710ms | 723.37K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 515.88K | ±0.42% | 1.9384ms | 2.3140ms | 257.94K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 428.97K | ±0.49% | 2.3312ms | 2.7050ms | 214.49K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.19K | ±0.45% | 3.5065ms | 5.8010ms | 142.59K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.79K | ±0.43% | 16.1837ms | 25.5580ms | 30.90K |

**Key Insight:** Native Spread is **202.23x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 784.09K
🥈 Immutability Helper  ██████████████████████████████ 583.13K
🥉 Craft                ████████████████ 320.21K
   Mutative             ███████████ 217.19K
   Immer                ███████ 141.99K
   Seamless Immutable   ███ 58.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.67M | ±0.82% | 0.0789ms | 0.1100ms | 6.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 784.09K | ±0.84% | 1.2754ms | 1.6430ms | 392.04K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 583.13K | ±0.25% | 1.7149ms | 1.9530ms | 291.56K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 320.21K | ±0.54% | 3.1230ms | 3.6980ms | 160.10K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.19K | ±0.50% | 4.6043ms | 5.2300ms | 108.59K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.99K | ±0.47% | 7.0425ms | 12.5670ms | 71.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 58.32K | ±2.56% | 17.1466ms | 33.8640ms | 29.16K |

**Key Insight:** Native Filter is **217.27x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 502.58K
🥈 Mutative             █████████████████████████████████████ 464.08K
🥉 Immutability Helper  ████████████████████████████████ 405.90K
   Immer                ██████████████████████ 279.29K
   Immutable.js         ███████████████ 192.86K
   Seamless Immutable   ███ 31.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.21M | ±0.63% | 0.0892ms | 0.1200ms | 5.61M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 502.58K | ±0.36% | 1.9897ms | 2.5950ms | 251.29K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 464.08K | ±0.37% | 2.1548ms | 2.5650ms | 232.04K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 405.90K | ±0.19% | 2.4637ms | 2.8550ms | 202.95K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 279.29K | ±0.58% | 3.5805ms | 7.1240ms | 139.65K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 192.86K | ±0.37% | 5.1851ms | 5.9210ms | 96.43K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.46K | ±0.52% | 31.7857ms | 44.8250ms | 15.73K |

**Key Insight:** Native Map is **356.43x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 313.49K
🥈 Craft                ███████████████████████████████████ 275.06K
🥉 Mutative             ████████████████████████████ 218.43K
   Immutable.js         ██████████████████████ 174.93K
   Immer                █████████████ 98.61K
   Seamless Immutable   ███ 22.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.23M | ±0.66% | 0.1084ms | 0.1400ms | 4.61M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 313.49K | ±0.44% | 3.1899ms | 3.5770ms | 156.75K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 275.06K | ±0.48% | 3.6355ms | 4.2380ms | 137.53K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.43K | ±0.45% | 4.5780ms | 5.3500ms | 109.22K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.93K | ±0.28% | 5.7167ms | 6.6830ms | 87.46K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.61K | ±0.47% | 10.1413ms | 19.6970ms | 49.30K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.38K | ±0.37% | 44.6922ms | 55.4840ms | 11.19K |

**Key Insight:** Native Spread is **412.31x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 364.87K
🥈 Immer                ███ 25.59K
🥉 Craft                ██ 21.95K
   Immutability Helper  █ 6.44K
   Immutable.js         █ 727.46
   Seamless Immutable   █ 251.30
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 364.87K | ±0.83% | 2.7407ms | 3.5370ms | 182.44K |
| 🥈 | **Native Map** | 348.05K | ±0.78% | 2.8732ms | 3.6360ms | 174.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 25.59K | ±0.53% | 39.0812ms | 49.0020ms | 12.79K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.95K | ±0.52% | 45.5493ms | 55.5240ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.44K | ±0.62% | 155.3322ms | 191.4300ms | 3.22K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 727.46 | ±1.34% | 1374.6465ms | 2022.6920ms | 364.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 251.30 | ±0.88% | 3979.2510ms | 4735.8360ms | 126.00 |

**Key Insight:** Mutative is **1451.91x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.68K
🥈 Craft                ████████████████████████████████████████ 277.46K
🥉 Mutative             █████████████████████████████ 199.48K
   Immutable.js         ███████████████████████ 160.63K
   Immer                ██████████████████ 126.34K
   Seamless Immutable   ███ 18.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.33M | ±1.17% | 0.1580ms | 0.1800ms | 3.16M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.68K | ±0.72% | 3.6012ms | 4.2580ms | 138.84K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 277.46K | ±0.56% | 3.6041ms | 4.2580ms | 138.73K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.48K | ±0.61% | 5.0130ms | 5.8610ms | 99.74K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.63K | ±0.64% | 6.2257ms | 8.6060ms | 80.31K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.34K | ±0.50% | 7.9152ms | 16.5310ms | 63.17K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.99K | ±0.68% | 52.6485ms | 67.1870ms | 9.50K |

**Key Insight:** Native Spread is **333.25x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T19:18:14.277Z*
