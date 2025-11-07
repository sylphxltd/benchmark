# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 5:00:00 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@pandacss/dev](https://github.com/chakra-ui/panda)** | `v0.49.1` | 4.88KB | Nov 7, 2025 | ✅ Latest |
| **[@sylphx/silk](https://github.com/sylphxltd/silk)** | `v0.1.0` | 0.22KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 7, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 7, 2025 | 📦 v19.2.0 available |
| **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | `v3.4.15` | 516.69KB | Nov 7, 2025 | ⚠️ v4.1.17 incompatible |
| **[unocss](https://github.com/unocss/unocss)** | `v0.65.3` | 3.42KB | Nov 7, 2025 | ⚠️ v66.5.4 incompatible |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/silk](https://github.com/sylphxltd/silk)** | 0.22KB | 0.49KB | Baseline |
| 🥈 | **react** | 2.52KB | 6.44KB | 11.30x |
| 🥉 | **[unocss](https://github.com/unocss/unocss)** | 3.42KB | 8.79KB | 15.35x |
| 4 | **[@pandacss/dev](https://github.com/chakra-ui/panda)** | 4.88KB | 12.70KB | 21.93x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 188.34x |
| 6 | **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 2085.29KB | 2320.56x |

**Size Insight:** @sylphx/silk is the most lightweight at 0.22KB (gzip), while tailwindcss is 2320.56x larger at 516.69KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 100.0/100 | Baseline |
| 🥇 | **Tailwind - Conditional styles** | 100.0/100 | Baseline |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 100.0/100 | Baseline |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 100.0/100 | Baseline |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 100.0/100 | Baseline |
| 🥇 | **Tailwind - Match breakpoint 1000x** | 100.0/100 | Baseline |
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 100.0/100 | Baseline |
| 8 | **Tailwind - Concat 10 classes** | 99.8/100 | 99.8% |
| 8 | **Tailwind - Toggle theme 1000x** | 99.8/100 | 99.8% |
| 8 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 99.8/100 | 99.8% |
| 11 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 99.7/100 | 99.7% |
| 12 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 99.5/100 | 99.5% |
| 13 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 99.2/100 | 99.2% |
| 14 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 99.0/100 | 99.0% |
| 15 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 97.8/100 | 97.8% |
| 16 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 97.4/100 | 97.4% |
| 16 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 97.4/100 | 97.4% |
| 18 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 96.8/100 | 96.8% |
| 19 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 93.1/100 | 93.1% |
| 20 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 92.3/100 | 92.3% |
| 21 | **Tailwind - Apply styles** | 91.8/100 | 91.8% |
| 22 | **[UnoCSS](https://github.com/unocss/unocss)** | 37.7/100 | 37.7% |
| 23 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 24.2/100 | 24.2% |
| 24 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 22.5/100 | 22.5% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 0.22KB | 100/100 | Excellent |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 3.42KB | 88/100 | Good |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 4.88KB | 81/100 | Good |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 0/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 2/7 | 29% |
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 2/7 | 29% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 2/7 | 29% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 2/7 | 29% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 1/7 | 14% |
| 5 | **Tailwind - Apply styles** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 1/7 | 14% |
| 5 | **Tailwind - Conditional styles** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 1/7 | 14% |
| 5 | **Tailwind - Concat 10 classes** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **Tailwind - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 1/7 | 14% |
| 5 | **Tailwind - Match breakpoint 1000x** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 1/7 | 14% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Apply 100 inline styles

**Performance Comparison:**

```
🥇 Panda CSS - Apply... ████████████████████████████████████████ 314.74K
🥈 Silk - Apply styles  █████████████████████████████████████ 293.05K
🥉 UnoCSS - Apply st... █████████████████████████████████████ 290.51K
   Tailwind - Apply ... █████████████████████████████████████ 289.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 314.74K | ±0.39% | 3.1772ms | 3.7970ms | 157.37K |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 293.05K | ±0.77% | 3.4124ms | 7.7150ms | 146.53K |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 290.51K | ±0.64% | 3.4423ms | 6.5720ms | 145.25K |
| 4 | **Tailwind - Apply styles** | 289.05K | ±0.42% | 3.4597ms | 4.1680ms | 144.52K |

**Key Insight:** Panda CSS - Apply styles is **1.09x faster** than Tailwind - Apply styles in this category.

### Conditional styling (1000 iterations)

**Performance Comparison:**

```
🥇 Panda CSS - Condi... ████████████████████████████████████████ 2.63M
🥈 Tailwind - Condit... ████████████████████████████████████████ 2.63M
🥉 UnoCSS - Conditio... ███████████████████████████████████████ 2.57M
   Silk - Conditiona... ███████████████████████████████████████ 2.56M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 2.63M | ±0.14% | 0.3809ms | 0.3810ms | 1.31M |
| 🥈 | **Tailwind - Conditional styles** | 2.63M | ±0.09% | 0.3809ms | 0.3810ms | 1.31M |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 2.57M | ±0.09% | 0.3894ms | 0.6710ms | 1.28M |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 2.56M | ±0.10% | 0.3909ms | 0.6710ms | 1.28M |

**Key Insight:** Panda CSS - Conditional styles is **1.03x faster** than Silk - Conditional styles in this category.

### String concatenation (complex className)

**Performance Comparison:**

```
🥇 UnoCSS - Concat 1... ████████████████████████████████████████ 18.09M
🥈 Tailwind - Concat... ████████████████████████████████████████ 18.05M
🥉 Silk - Concat 10 ... ████████████████████████████████████████ 17.95M
   Panda CSS - Conca... ████████████████████████████████████████ 17.91M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 18.09M | ±0.09% | 0.0553ms | 0.0610ms | 9.04M |
| 🥈 | **Tailwind - Concat 10 classes** | 18.05M | ±0.09% | 0.0554ms | 0.0610ms | 9.03M |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 17.95M | ±0.09% | 0.0557ms | 0.0900ms | 8.97M |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 17.91M | ±0.09% | 0.0558ms | 0.0800ms | 8.95M |

**Key Insight:** UnoCSS - Concat 10 classes is **1.01x faster** than Panda CSS - Concat 10 classes in this category.

### Theme toggle (dark/light mode)

**Performance Comparison:**

```
🥇 UnoCSS - Toggle t... ████████████████████████████████████████ 517.33K
🥈 Tailwind - Toggle... ████████████████████████████████████████ 516.22K
🥉 Silk - Toggle the... ████████████████████████████████████████ 515.62K
   Panda CSS - Toggl... ████████████████████████████████████████ 514.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 517.33K | ±0.08% | 1.9330ms | 1.9230ms | 258.67K |
| 🥈 | **Tailwind - Toggle theme 1000x** | 516.22K | ±0.09% | 1.9372ms | 2.0640ms | 258.11K |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 515.62K | ±0.10% | 1.9394ms | 2.0640ms | 257.81K |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 514.92K | ±0.17% | 1.9421ms | 1.9330ms | 257.46K |

**Key Insight:** UnoCSS - Toggle theme 1000x is **1.00x faster** than Panda CSS - Toggle theme 1000x in this category.

### Responsive breakpoint matching

**Performance Comparison:**

```
🥇 Tailwind - Match ... ████████████████████████████████████████ 308.18K
🥈 UnoCSS - Match br... ████████████████████████████████████████ 307.72K
🥉 Panda CSS - Match... ███████████████████████████████████████ 300.10K
   Silk - Match brea... ███████████████████████████████████████ 298.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Tailwind - Match breakpoint 1000x** | 308.18K | ±0.16% | 3.2448ms | 3.3460ms | 154.09K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 307.72K | ±0.08% | 3.2497ms | 3.3560ms | 153.86K |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 300.10K | ±0.08% | 3.3323ms | 3.4470ms | 150.05K |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 298.45K | ±0.16% | 3.3506ms | 5.3100ms | 149.23K |

**Key Insight:** Tailwind - Match breakpoint 1000x is **1.03x faster** than Silk - Match breakpoint 1000x in this category.

### Cold Build Time (Small App)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 4.27
🥈 UnoCSS               █████████████████████ 2.19
🥉 Tailwind CSS         ██████████████ 1.47
   Panda CSS            ███████████ 1.12
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 4.27 | ±0.00% | 234.0000ms | 234.0000ms | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 2.19 | ±0.00% | 456.0000ms | 456.0000ms | 0.00 |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 1.47 | ±0.00% | 678.0000ms | 678.0000ms | 0.00 |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 1.12 | ±0.00% | 890.0000ms | 890.0000ms | 0.00 |

**Key Insight:** Silk is **3.80x faster** than Panda CSS in this category.

### CSS Output Size (Small App - 10 components)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 555.56
🥈 UnoCSS               ███████████ 153.85
🥉 Panda CSS            █████████ 123.46
   Tailwind CSS         ██████ 81.30
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 555.56 | ±0.00% | 1.8000ms | 1.8000ms | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 153.85 | ±0.00% | 6.5000ms | 6.5000ms | 0.00 |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 123.46 | ±0.00% | 8.1000ms | 8.1000ms | 0.00 |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 81.30 | ±0.00% | 12.3000ms | 12.3000ms | 0.00 |

**Key Insight:** Silk is **6.83x faster** than Tailwind CSS in this category.

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

*Last generated: 2025-11-07T09:00:07.403Z*
