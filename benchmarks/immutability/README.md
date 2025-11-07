# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 4:58:34 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 7, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.2/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.7/100 | 77.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.6/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.8/100 | 44.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.3/100 | 33.2% |
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

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |
| 2025-11-04 | [View Results](./results/2025-11-04.json) |
| 2025-11-03 | [View Results](./results/2025-11-03.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 216.12K
🥈 Immer                █████████████████████ 111.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.12K | ±1.90% | 4.6270ms | 9.2680ms | 108.06K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.17K | ±1.93% | 8.9952ms | 24.8560ms | 55.59K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 969.75K
🥈 Immer                █████ 130.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 969.75K | ±0.43% | 1.0312ms | 1.2830ms | 484.88K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.88K | ±1.35% | 7.6407ms | 15.5790ms | 65.44K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.25K
🥈 Immer                █████████████ 59.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.25K | ±1.67% | 5.6417ms | 10.9410ms | 88.63K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.07K | ±1.58% | 16.9296ms | 32.5810ms | 29.54K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 756.34K
🥈 Mutative             █████████████████████████ 468.89K
🥉 Immer                ██████████ 180.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 756.34K | ±1.50% | 1.3222ms | 2.8350ms | 378.17K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 468.89K | ±0.66% | 2.1327ms | 2.9660ms | 234.45K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.56K | ±0.89% | 5.5383ms | 8.8070ms | 90.28K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             ██████████████ 431.86K
🥉 Immer                █████ 157.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.42% | 0.7856ms | 1.1820ms | 636.44K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 431.86K | ±0.41% | 2.3156ms | 2.8450ms | 215.93K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.05K | ±0.63% | 6.3674ms | 14.0460ms | 78.53K |

**Key Insight:** Craft is **8.10x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 882.11K
🥈 Mutative             █████████████████████ 461.99K
🥉 Immer                ████████ 166.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 882.11K | ±0.43% | 1.1336ms | 1.5330ms | 441.06K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 461.99K | ±0.41% | 2.1645ms | 2.7350ms | 231.00K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.88K | ±0.33% | 5.9925ms | 12.0020ms | 83.44K |

**Key Insight:** Craft is **5.29x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 857.22K
🥈 Mutative             █████████████████████ 456.19K
🥉 Immer                ████████ 181.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 857.22K | ±0.42% | 1.1666ms | 1.5130ms | 428.61K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 456.19K | ±0.43% | 2.1921ms | 2.5950ms | 228.10K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.40K | ±0.44% | 5.5127ms | 7.0430ms | 90.70K |

**Key Insight:** Craft is **4.73x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.91K
🥈 Mutative             ████████████████████████████████ 149.98K
🥉 Immer                █████████████████ 79.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.91K | ±0.45% | 5.3789ms | 8.4560ms | 92.96K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.98K | ±0.49% | 6.6677ms | 11.6120ms | 74.99K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.21K | ±0.65% | 12.6248ms | 23.8250ms | 39.60K |

**Key Insight:** Craft is **2.35x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.95K
🥈 Mutative             █████████████ 76.79K
🥉 Immer                ██ 13.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.95K | ±0.41% | 4.3869ms | 5.4100ms | 113.98K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.79K | ±0.42% | 13.0227ms | 22.2920ms | 38.40K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.75K | ±0.62% | 72.7478ms | 100.0160ms | 6.87K |

**Key Insight:** Craft is **16.58x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.81K
🥈 Immer                ████████████ 69.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.81K | ±0.37% | 4.4091ms | 5.3200ms | 113.40K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.92K | ±0.37% | 14.3014ms | 25.0170ms | 34.96K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.10M
🥈 Immutability Helper  ████████████████████████████████████ 994.56K
🥉 Mutative             ███████████████████████████████████ 972.14K
   Craft                ███████████████████████████████████ 961.50K
   Immer                ██████████████████████████ 707.88K
   Seamless Immutable   █████ 129.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.64M | ±0.10% | 0.0683ms | 0.0910ms | 7.32M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.10M | ±0.31% | 0.9064ms | 1.1530ms | 551.61K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 994.56K | ±0.36% | 1.0055ms | 1.3920ms | 497.28K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 972.14K | ±0.41% | 1.0287ms | 1.7540ms | 486.07K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 961.50K | ±2.38% | 1.0400ms | 2.6750ms | 480.75K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 707.88K | ±1.75% | 1.4127ms | 3.1860ms | 353.94K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.18K | ±0.29% | 7.7411ms | 14.0560ms | 64.59K |

**Key Insight:** Native Spread is **113.30x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 474.86K
🥈 Mutative             ██████████████████████████████████ 401.72K
🥉 Craft                ████████████████████████████ 332.22K
   Immutable.js         ████████████████████ 232.51K
   Immer                ████████████ 146.99K
   Seamless Immutable   ███ 36.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.71M | ±0.10% | 0.0854ms | 0.1400ms | 5.85M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 474.86K | ±0.71% | 2.1059ms | 3.5370ms | 237.43K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 401.72K | ±0.56% | 2.4893ms | 2.8950ms | 200.86K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 332.22K | ±3.04% | 3.0100ms | 5.5100ms | 166.11K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 232.51K | ±0.86% | 4.3009ms | 7.5940ms | 116.25K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 146.99K | ±2.11% | 6.8033ms | 16.3100ms | 73.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.70K | ±0.75% | 27.2484ms | 40.2550ms | 18.35K |

**Key Insight:** Native Spread is **319.01x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.71M
🥈 Immutability Helper  █████████████████████████████████ 1.41M
🥉 Craft                ████████████ 499.56K
   Mutative             █████████ 400.78K
   Immer                ██████ 276.55K
   Seamless Immutable   █ 61.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.84M | ±21.86% | 0.1016ms | 0.1310ms | 4.92M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.71M | ±0.93% | 0.5857ms | 0.8120ms | 853.68K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±1.44% | 0.7068ms | 0.7510ms | 707.44K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 499.56K | ±1.45% | 2.0017ms | 2.4340ms | 249.78K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 400.78K | ±1.56% | 2.4951ms | 4.6490ms | 200.39K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 276.55K | ±0.97% | 3.6159ms | 7.3940ms | 138.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.42K | ±1.02% | 16.2814ms | 25.5070ms | 30.71K |

**Key Insight:** Native Spread is **160.22x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 798.80K
🥈 Immutability Helper  █████████████████████████████ 581.36K
🥉 Craft                ████████████████ 318.51K
   Mutative             ███████████ 218.89K
   Immer                ███████ 141.09K
   Seamless Immutable   ███ 61.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.31M | ±1.09% | 0.0812ms | 0.1100ms | 6.16M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 798.80K | ±0.67% | 1.2519ms | 1.5940ms | 399.40K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 581.36K | ±0.25% | 1.7201ms | 1.9140ms | 290.68K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 318.51K | ±0.50% | 3.1396ms | 3.8770ms | 159.25K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.89K | ±0.36% | 4.5686ms | 5.3390ms | 109.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.09K | ±0.44% | 7.0877ms | 13.5850ms | 70.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.15K | ±0.57% | 16.3520ms | 25.5970ms | 30.58K |

**Key Insight:** Native Filter is **201.32x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 491.73K
🥈 Mutative             █████████████████████████████████████ 456.56K
🥉 Immutability Helper  █████████████████████████████████ 399.80K
   Immer                ███████████████████████ 283.44K
   Immutable.js         ████████████████ 191.41K
   Seamless Immutable   ██ 30.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.65M | ±0.64% | 0.0858ms | 0.1210ms | 5.82M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 491.73K | ±0.92% | 2.0336ms | 3.2660ms | 245.86K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 456.56K | ±0.81% | 2.1903ms | 2.6050ms | 228.28K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.80K | ±0.27% | 2.5012ms | 2.9760ms | 199.90K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.44K | ±0.49% | 3.5280ms | 4.1980ms | 141.72K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.41K | ±0.82% | 5.2245ms | 5.9810ms | 95.70K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.18K | ±0.86% | 33.1360ms | 66.6840ms | 15.09K |

**Key Insight:** Native Map is **385.98x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 309.88K
🥈 Craft                ██████████████████████████████████ 266.08K
🥉 Mutative             ████████████████████████████ 218.21K
   Immutable.js         ███████████████████████ 178.32K
   Immer                █████████████ 98.39K
   Seamless Immutable   ███ 22.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.85M | ±0.79% | 0.1130ms | 0.1410ms | 4.42M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 309.88K | ±0.48% | 3.2271ms | 3.7270ms | 154.94K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 266.08K | ±0.46% | 3.7583ms | 4.8590ms | 133.04K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.21K | ±0.52% | 4.5827ms | 5.6910ms | 109.11K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 178.32K | ±0.49% | 5.6079ms | 7.4740ms | 89.16K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.39K | ±0.60% | 10.1633ms | 19.3960ms | 49.20K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.00K | ±0.56% | 45.4563ms | 80.5100ms | 11.00K |

**Key Insight:** Native Spread is **402.18x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 357.66K
🥈 Immer                ███ 29.65K
🥉 Craft                ██ 22.05K
   Immutability Helper  █ 6.40K
   Immutable.js          747.62
   Seamless Immutable    251.10
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 357.66K | ±0.84% | 2.7959ms | 5.0390ms | 178.83K |
| 🥈 | **Native Map** | 345.52K | ±0.83% | 2.8942ms | 5.2090ms | 172.76K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.65K | ±0.70% | 33.7263ms | 47.7590ms | 14.83K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.05K | ±0.51% | 45.3571ms | 53.6500ms | 11.02K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.40K | ±0.71% | 156.2212ms | 190.7340ms | 3.20K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 747.62 | ±1.24% | 1337.5834ms | 1941.2150ms | 374.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 251.10 | ±0.93% | 3982.4004ms | 4737.0020ms | 126.00 |

**Key Insight:** Mutative is **1424.35x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.53K
🥈 Craft                ███████████████████████████████████████ 269.11K
🥉 Mutative             ████████████████████████████ 195.37K
   Immutable.js         ███████████████████████ 161.66K
   Immer                ██████████████████ 125.95K
   Seamless Immutable   ███ 18.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.40M | ±1.13% | 0.1562ms | 0.1810ms | 3.20M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.53K | ±0.48% | 3.6032ms | 4.0980ms | 138.77K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 269.11K | ±0.71% | 3.7159ms | 4.3880ms | 134.56K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.37K | ±1.35% | 5.1185ms | 6.1520ms | 97.69K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.66K | ±0.76% | 6.1857ms | 7.9150ms | 80.83K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.95K | ±0.88% | 7.9394ms | 14.9480ms | 62.98K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.83K | ±0.73% | 53.1018ms | 64.6410ms | 9.42K |

**Key Insight:** Native Spread is **339.87x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-07T09:00:27.159Z*
