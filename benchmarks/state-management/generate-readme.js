// Generate standard-compliant README from benchmark results
import fs from 'fs';
import path from 'path';

// Read metadata
const libraryMetadata = JSON.parse(fs.readFileSync('library-metadata.json', 'utf8'));
const features = JSON.parse(fs.readFileSync('features.json', 'utf8'));
const versions = JSON.parse(fs.readFileSync('versions.json', 'utf8'));
const overallScores = JSON.parse(fs.readFileSync('overall-scores.json', 'utf8'));

// Read result files
const results = {
  read: JSON.parse(fs.readFileSync('groups/01-read/results.json', 'utf8')),
  write: JSON.parse(fs.readFileSync('groups/02-write/results.json', 'utf8')),
  creation: JSON.parse(fs.readFileSync('groups/03-creation/results.json', 'utf8')),
  memory: JSON.parse(fs.readFileSync('groups/06-memory/results.json', 'utf8')),
  asyncReactive: JSON.parse(fs.readFileSync('groups/08-async-reactive/results.json', 'utf8')),
  computedNative: JSON.parse(fs.readFileSync('groups/09-computed-native/results.json', 'utf8')),
  selectors: JSON.parse(fs.readFileSync('groups/10-selectors/results.json', 'utf8')),
  batchingNative: JSON.parse(fs.readFileSync('groups/11-batching-native/results.json', 'utf8'))
};

// Helper: Format number
function formatNumber(num, decimals = 0) {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toFixed(decimals);
}

// Helper: Extract benchmark by name pattern
function extractBenchmark(resultGroup, pattern) {
  const benchmarks = resultGroup.files[0].groups[0].benchmarks;
  return benchmarks.filter(b => b.name.includes(pattern));
}

// Generate README
let readme = `# State Management Benchmarks

Comprehensive performance benchmarks for JavaScript/TypeScript state management libraries.

## Overall Performance Score

**Based on Universal Tests**: Read, Write, Creation, Memory
**Methodology**: Geometric mean of operations per second across all universal tests

| Rank | Library | Score (ops/sec) | vs Leader |
|------|---------|-----------------|-----------|
`;

// Overall Performance Score table
overallScores.forEach((entry, index) => {
  const rank = index + 1;
  const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
  const vsLeader = index === 0 ? 'Baseline' : `${(entry.overall / overallScores[0].overall).toFixed(2)}x`;

  readme += `| ${medal} ${rank} | **${entry.library}** | **${formatNumber(entry.overall)}** | ${vsLeader} |\n`;
});

readme += `
> **Note**: Groups 04 (Complexity), 05 (Cache), and 07 (Form) currently have incomplete implementations and are excluded from the Overall Performance Score. These tests require refactoring to use real store implementations rather than placeholder logic.

---

## Library Comparison

| Library | Version | Bundle Size (gzip) | Overall Score | Read | Write | Creation | Memory |
|---------|---------|-------------------|---------------|------|-------|----------|--------|
`;

// Library comparison table with crown for winner
overallScores.forEach((entry, index) => {
  const libKey = Object.keys(libraryMetadata.libraries).find(key =>
    libraryMetadata.libraries[key].displayName === entry.library
  );
  const version = versions.libraries[libKey]?.current || 'N/A';
  const size = versions.libraries[libKey]?.size?.gzip || 0;
  const sizeKB = (size / 1024).toFixed(1);
  const crown = index === 0 ? '👑 ' : '';

  readme += `| ${crown}${entry.library} | ${version} | ${sizeKB} KB | ${formatNumber(entry.overall)} | ${formatNumber(entry.read)} | ${formatNumber(entry.write)} | ${formatNumber(entry.creation)} | ${formatNumber(entry.memory)} |\n`;
});

readme += `
---

## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
`;

// Feature support matrix
Object.entries(features.features).forEach(([key, feature]) => {
  const libs = feature.supported.map(libKey => libraryMetadata.libraries[libKey]?.displayName || libKey).join(', ');
  readme += `| **${feature.name}** | ${feature.description} | ${libs} |\n`;
});

readme += `
---

## Test Categories

### Universal Tests (01-06)

All 8 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Read Operations**: Simple read and high-frequency read patterns
- **02 - Write Operations**: Simple increments and burst updates
- **03 - Store Creation**: Instance creation overhead
- **04 - Complexity**: Deep nested state *(Implementation incomplete)*
- **05 - Cache Performance**: Repeated access patterns *(Implementation incomplete)*
- **06 - Memory Allocation**: Large state allocation performance
- **07 - Form State**: Multi-field updates *(Implementation incomplete)*

### Feature Tests (08-11)

Libraries participate only if they have native support for the tested capability.

- **08 - Reactive Async**: Async atoms/computations (Jotai only)
- **09 - Computed Native**: Native computed values (5 libraries)
- **10 - Selectors**: Manual selector pattern (3 libraries)
- **11 - Batching Native**: Built-in batching (3 libraries)

---

## Detailed Results

### 01 - Read Operations

**Simple Read** (single value access)

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

// Read operations results
const readBenchmarks = extractBenchmark(results.read, 'Simple Read -');
const maxRead = Math.max(...readBenchmarks.map(b => b.hz || 0));
readBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Simple Read - ', '');
  const relative = ((bench.hz || 0) / maxRead).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
---

### 02 - Write Operations

**Simple Increment** (single value update)

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

// Write operations results
const writeBenchmarks = extractBenchmark(results.write, 'Simple Increment -');
const maxWrite = Math.max(...writeBenchmarks.map(b => b.hz || 0));
writeBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Simple Increment - ', '');
  const relative = ((bench.hz || 0) / maxWrite).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
---

### 03 - Store Creation

**Store/Instance Creation Overhead**

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

// Creation results
const creationBenchmarks = extractBenchmark(results.creation, 'Store Creation -');
const maxCreation = Math.max(...creationBenchmarks.map(b => b.hz || 0));
creationBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Store Creation - ', '');
  const relative = ((bench.hz || 0) / maxCreation).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
> **Note**: MobX's low creation performance is expected due to makeAutoObservable overhead.

---

### 06 - Memory Allocation

**Large State Allocation** (1000-field objects)

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

// Memory results
const memoryBenchmarks = extractBenchmark(results.memory, 'Large State Allocation -');
const maxMemory = Math.max(...memoryBenchmarks.map(b => b.hz || 0));
memoryBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Large State Allocation - ', '');
  const relative = ((bench.hz || 0) / maxMemory).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
> **Note**: All libraries perform similarly for large state allocation, indicating minimal per-field overhead.

---

### 08 - Reactive Async (Feature Test)

**Participating Libraries**: Jotai only

| Benchmark | ops/sec |
|-----------|---------|
`;

// Async reactive results
const asyncBenchmarks = results.asyncReactive.files[0].groups;
asyncBenchmarks.forEach(group => {
  group.benchmarks.forEach(bench => {
    const testName = bench.name.replace(' - Jotai', '');
    readme += `| ${testName} | ${formatNumber(bench.hz)} |\n`;
  });
});

readme += `
---

### 09 - Computed Native (Feature Test)

**Participating Libraries**: Jotai, MobX, Solid Signals, Preact Signals, Zen

**Simple Computed** (value * 2)

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

// Computed native results
const computedBenchmarks = extractBenchmark(results.computedNative, 'Simple Computed -');
const maxComputed = Math.max(...computedBenchmarks.map(b => b.hz || 0));
computedBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Simple Computed - ', '');
  const relative = ((bench.hz || 0) / maxComputed).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
---

### 10 - Selectors (Feature Test)

**Participating Libraries**: Redux Toolkit, Zustand, Valtio

**Simple Selector**

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

// Selectors results
const selectorBenchmarks = extractBenchmark(results.selectors, 'Selector - ').filter(b => !b.name.includes('Chained') && !b.name.includes('Repeated') && !b.name.includes('Updates'));
const maxSelector = Math.max(...selectorBenchmarks.map(b => b.hz || 0));
selectorBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Selector - ', '');
  const relative = ((bench.hz || 0) / maxSelector).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
---

### 11 - Batching Native (Feature Test)

**Participating Libraries**: Solid Signals, MobX, Valtio

**Batched Updates** (3 fields)

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

// Batching results
const batchingBenchmarks = extractBenchmark(results.batchingNative, 'Batched Updates -');
const maxBatching = Math.max(...batchingBenchmarks.map(b => b.hz || 0));
batchingBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Batched Updates - ', '');
  const relative = ((bench.hz || 0) / maxBatching).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
**Large Batch** (100 updates)

| Library | ops/sec | Relative |
|---------|---------|----------|
`;

const largeBatchBenchmarks = extractBenchmark(results.batchingNative, 'Large Batch -');
const maxLargeBatch = Math.max(...largeBatchBenchmarks.map(b => b.hz || 0));
largeBatchBenchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0)).forEach((bench, index) => {
  const libName = bench.name.replace('Large Batch - ', '');
  const relative = ((bench.hz || 0) / maxLargeBatch).toFixed(2) + 'x';
  const note = index === 0 ? ' (fastest)' : '';
  readme += `| ${libName} | ${formatNumber(bench.hz)} | ${relative}${note} |\n`;
});

readme += `
---

## Methodology

### Universal Test Standards

- **All libraries participate** in tests 01-07 (excluding incomplete tests)
- Results are **normalized** and combined using **geometric mean**
- Tests use **actual library APIs**, not synthetic constructs
- Each benchmark runs for sufficient iterations to achieve statistical significance

### Feature Test Standards

- **Only libraries with native support** participate
- Tests measure **real-world usage patterns** of the feature
- No placeholder or workaround implementations
- Separate rankings for each feature

### Benchmark Environment

- **Runtime**: Node.js v25.0.0
- **Framework**: Vitest Bench
- **Hardware**: [System-dependent]
- **Iterations**: Automatically determined by Vitest for statistical significance

---

## Key Insights

### Performance Tiers

1. **Signal-based (Tier S)**: Solid Signals, Preact Signals, Zen - Exceptional performance across all operations
2. **Atom-based (Tier A)**: Jotai - Very fast but creation overhead impacts overall score
3. **Proxy-based (Tier B)**: Valtio - Moderate performance with good ergonomics
4. **Store-based (Tier C)**: Zustand, Redux Toolkit - Lower raw performance but predictable
5. **Observable-based (Tier D)**: MobX - High creation cost, moderate runtime performance

### Trade-offs

- **Solid Signals**: Fastest overall, but requires Solid.js ecosystem
- **Preact Signals**: Excellent balance of speed and bundle size (3.1 KB)
- **Zen**: Similar performance to Preact, slightly larger bundle (5.5 KB)
- **Jotai**: Very fast read/write, slower creation, unique async capabilities
- **Valtio**: Simple API, moderate performance, good for nested mutations
- **Zustand**: Minimal bundle (1.2 KB), simple API, moderate performance
- **Redux Toolkit**: Feature-rich, DevTools support, larger bundle (14.2 KB)
- **MobX**: Automatic tracking, slow creation, largest bundle (18.0 KB)

---

## Running Benchmarks

\`\`\`bash
# Run all benchmarks
npm run benchmark

# Run specific groups
npm run benchmark:read
npm run benchmark:write
npm run benchmark:creation
\`\`\`

---

## Compliance

This benchmark category follows [BENCHMARK_STANDARD.md](../../BENCHMARK_STANDARD.md) v1.0.0:

- ✅ Universal tests (01-03, 06) use real APIs for all libraries
- ✅ Feature tests (08-11) only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ⚠️ Groups 04, 05, 07 require implementation updates
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
`;

// Write README
fs.writeFileSync('README.md', readme);
console.log('✓ README.md generated successfully');
