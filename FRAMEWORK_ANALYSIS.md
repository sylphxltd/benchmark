# 框架分析：Tinybench vs Vitest - 需唔需要換？

## TL;DR 結論

❌ **唔需要換 Vitest**  
✅ **Tinybench 已經夠用，只係冇用啱 API**

---

## 核心區別

### 1. **用途唔同**

| | Tinybench | Vitest |
|---|---|---|
| **主要用途** | Performance benchmarking | Unit testing + benchmarking |
| **測量指標** | ops/sec, mean time, p99 | Pass/fail + performance |
| **Mocking** | ❌ 冇 | ✅ 有 (vi.mock, vi.spy) |
| **Setup/Teardown** | ✅ 有 (beforeEach/afterEach) | ✅ 有 (beforeEach/afterEach) |
| **Size** | ~2KB | ~500KB+ |

### 2. **我地需要咩？**

我地做緊 **Performance Benchmarking**，唔係 Unit Testing：

✅ **需要:**
- 測量 ops/sec（真實性能）
- Setup/teardown（reset state）
- 多次 iteration 平均結果

❌ **唔需要:**
- Mock functions（會影響真實性能）
- Spy on calls（唔關測試正確性）
- Assertion library（唔係測 pass/fail）

---

## Mock 係咪必要？

### Performance Testing 通常唔需要 Mock

**原因:**
1. **Mock 會影響真實性能** - 我地要測**真實 library performance**
2. **Mock 係用嚟 isolate units** - 但我地要測 **integration performance**
3. **Mock 適合 unit testing** - 唔適合 performance benchmarking

**例子:**
```typescript
// ❌ 錯：Mock 會讓性能測試失真
const mockZen = vi.fn(() => ({ value: 0 }));
bench('zen create', () => mockZen());  // 測緊 mock 性能，唔係 zen 性能

// ✅ 對：測真實性能
bench('zen create', () => zen(0));  // 測真實 zen 性能
```

### 邊啲情況先需要 Mock？

只有呢啲情況：
- 測試需要**外部依賴**（API calls, database）
- 外部依賴會**影響穩定性**
- 外部依賴**太慢**會影響 benchmark

**我地個 case:**
- State management: 純 JS，唔需要 mock
- Immutability: 純 function，唔需要 mock  
- Validation: 純 validation，唔需要 mock
- Router: 純 matching，唔需要 mock
- CSS Frameworks: Build process，可能需要 mock filesystem（但唔係 performance test）

---

## Tinybench 已經有 Setup/Teardown！

### API 示範

```typescript
import { Bench } from 'tinybench';

const bench = new Bench();

// ✅ Tinybench 支持 beforeEach/afterEach
const counter = { value: 0 };

bench.add('increment', () => {
  counter.value++;
}, {
  beforeEach: () => {
    counter.value = 0;  // ✅ 每次 iteration reset
  },
  afterEach: () => {
    // Cleanup if needed
  }
});

await bench.run();
```

### 我地只係冇用呢個 API

**當前問題:**
```typescript
// ❌ 錯：Global state 累積
const counter = zen(0);
library.implement(tests.singleWrite, () => {
  counter.value++;  // 5000 iterations 後變成 5000
});
```

**正確做法:**
```typescript
// ✅ 對：用 beforeEach reset
const counter = zen(0);
library.implement(tests.singleWrite, {
  beforeEach: () => {
    counter.value = 0;  // 每次 reset
  },
  fn: () => {
    counter.value++;
  }
});
```

---

## Vitest Bench vs Tinybench

### Vitest Bench API

```typescript
import { bench, describe } from 'vitest';

describe('zen benchmarks', () => {
  bench('increment', () => {
    counter.value++;
  }, {
    setup() {
      counter.value = 0;  // 每次 reset
    }
  });
});
```

### Tinybench API

```typescript
import { Bench } from 'tinybench';

const bench = new Bench();
bench.add('increment', () => {
  counter.value++;
}, {
  beforeEach() {
    counter.value = 0;  // 每次 reset
  }
});
```

**差別:**
- Vitest: `setup()` option
- Tinybench: `beforeEach()` option
- **功能完全一樣**

---

## 換 Vitest 既成本

### 需要改動

1. **安裝 Vitest** (~500KB+ dependencies)
2. **改寫框架 runner** (src/core/runner.ts)
3. **改寫 metrics** (用 Vitest bench API)
4. **改寫所有 library implementations** (bench syntax)
5. **改 CLI** (vitest run instead of bun)
6. **測試 compatibility**

### 優點

- ✅ 標準化（Vitest 係主流）
- ✅ UI reporting（Vitest UI mode）
- ✅ 如果之後需要 unit testing，已經有 Vitest

### 缺點

- ❌ 500KB+ dependencies（當前 tinybench 只係 2KB）
- ❌ 大量改動（風險高）
- ❌ 對當前問題冇幫助（Tinybench 已經有 beforeEach）
- ❌ Performance overhead（Vitest 係 testing framework，有額外 overhead）

---

## 建議

### 1. **短期：修復 Tinybench 使用** ✅ 推薦

**做法:**
- 修改框架支持 `beforeEach/afterEach` options
- 更新 State Management libraries 用 `beforeEach` reset state
- 保持 Tinybench（輕量、專注 performance）

**優點:**
- ✅ 快速修復（1-2小時）
- ✅ 零風險（唔改底層）
- ✅ 輕量（2KB vs 500KB）

**工作量:**
1. 修改 `src/core/metrics.ts` - 支持 beforeEach option
2. 修改 `src/core/types.ts` - 添加 setup/teardown types
3. 更新 State Management libraries - 加 beforeEach
4. 測試驗證

### 2. **長期：評估 Vitest** ⏳ 可選

**如果:**
- 需要 Unit Testing（測試 framework 本身）
- 需要 UI reporting
- 團隊習慣 Vitest

**但目前唔需要**，因為：
- 只做 performance benchmarking
- Tinybench 已滿足需求
- 唔需要 mocking

---

## 總結

| 問題 | Tinybench | Vitest | 建議 |
|------|-----------|--------|------|
| **Setup/Teardown** | ✅ 有 | ✅ 有 | 用 Tinybench |
| **Mocking** | ❌ 冇 | ✅ 有 | 唔需要 mock |
| **Performance Focus** | ✅ 專注 | ⚠️ Testing優先 | 用 Tinybench |
| **Bundle Size** | ✅ 2KB | ❌ 500KB+ | 用 Tinybench |
| **Migration Cost** | ✅ 低（改用法） | ❌ 高（換框架） | 用 Tinybench |

### 最終建議

**✅ 保持 Tinybench，只係正確使用 `beforeEach` API**

唔需要換 Vitest，因為：
1. Tinybench 已經有 beforeEach/afterEach
2. Performance benchmarking 唔需要 mocking
3. 輕量、專注、夠用
4. 換框架成本高、風險大、收益低

**下一步:**
1. 修改框架支持 beforeEach option
2. 更新 State Management implementations
3. 測試驗證 state reset 正確
