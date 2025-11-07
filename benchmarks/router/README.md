# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 4:57:44 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 7, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 7, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 7, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **react** | 2.52KB | 6.44KB | 1.60x |
| 4 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 26.64x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-dom is 26.64x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 12.7/100 | 12.7% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.6/100 | 1.6% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.38M
🥈 Wouter               █████████ 1.74M
🥉 React Router          32.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.38M | ±0.57% | 0.1356ms | 0.3200ms | 3.69M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.74M | ±0.69% | 0.5752ms | 1.0780ms | 869.30K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 32.58K | ±0.88% | 30.6942ms | 54.7290ms | 16.29K |

**Key Insight:** Zen Router is **226.39x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.88M
🥈 Wouter               ██████ 870.92K
🥉 React Router          35.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.88M | ±0.64% | 0.1700ms | 0.3560ms | 2.94M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 870.92K | ±0.54% | 1.1482ms | 1.9930ms | 435.46K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.73K | ±0.80% | 27.9862ms | 46.7200ms | 17.87K |

**Key Insight:** Zen Router is **164.58x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.50M
🥈 Wouter               █████ 307.12K
🥉 React Router         █ 40.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.50M | ±1.08% | 0.4006ms | 0.6760ms | 1.25M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 307.12K | ±0.80% | 3.2560ms | 4.1610ms | 153.56K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.85K | ±0.99% | 24.4823ms | 37.8830ms | 20.42K |

**Key Insight:** Zen Router is **61.11x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.66M
🥈 Wouter               █████ 191.83K
🥉 React Router         █ 56.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.66M | ±0.09% | 0.6035ms | 1.1450ms | 828.50K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 191.83K | ±0.92% | 5.2130ms | 6.4310ms | 95.91K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 56.31K | ±1.18% | 17.7589ms | 26.8230ms | 28.16K |

**Key Insight:** Zen Router is **29.43x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.88M
🥈 Wouter               ████ 192.67K
🥉 React Router         █ 27.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.88M | ±0.08% | 0.5333ms | 0.8540ms | 937.53K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 192.67K | ±0.46% | 5.1903ms | 6.4670ms | 96.33K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 27.04K | ±1.07% | 36.9873ms | 70.3150ms | 13.52K |

**Key Insight:** Zen Router is **69.35x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.35M
🥈 Wouter               █████ 155.08K
🥉 React Router         █ 42.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.35M | ±0.20% | 0.7415ms | 1.1460ms | 674.33K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 155.08K | ±0.28% | 6.4483ms | 9.6070ms | 77.54K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 42.94K | ±0.82% | 23.2890ms | 36.4910ms | 21.47K |

**Key Insight:** Zen Router is **31.41x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.69M
🥈 Wouter               ████ 153.91K
🥉 React Router         █ 36.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.69M | ±0.22% | 0.5907ms | 0.9510ms | 846.40K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 153.91K | ±0.59% | 6.4972ms | 8.2270ms | 76.96K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 36.81K | ±0.81% | 27.1653ms | 37.3020ms | 18.41K |

**Key Insight:** Zen Router is **45.99x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 340.10K
🥈 Wouter               █████ 39.98K
🥉 React Router         █ 5.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 340.10K | ±0.44% | 2.9403ms | 3.8840ms | 170.05K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 39.98K | ±0.61% | 25.0146ms | 33.6300ms | 19.99K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.36K | ±0.99% | 186.6731ms | 468.7200ms | 2.68K |

**Key Insight:** Zen Router is **63.49x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.16M
🥈 Wouter               █████ 154.31K
🥉 React Router         █ 42.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.16M | ±0.19% | 0.8644ms | 1.2600ms | 578.46K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 154.31K | ±0.35% | 6.4804ms | 8.3540ms | 77.16K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 42.69K | ±0.94% | 23.4223ms | 35.9860ms | 21.35K |

**Key Insight:** Zen Router is **27.10x faster** than React Router in this category.

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

*Last generated: 2025-11-07T08:59:41.441Z*
