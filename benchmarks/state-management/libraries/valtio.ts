/**
 * Valtio (Proxy-based) Implementation
 * Uses Valtio's proxy-based reactive state management
 */

import { proxy, snapshot, subscribe } from 'valtio';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'valtio',
  displayName: 'Valtio',
  packageName: 'valtio',
  githubUrl: 'https://github.com/pmndrs/valtio',
  description: 'Proxy-based reactive state management',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// State Setup
// ============================================================================

// Basic counter proxy
const counterState = proxy({ value: 0 });

// Nested object structure
const nestedObjectState = proxy({
  level1: {
    level2: {
      level3: {
        value: 0,
      },
    },
  },
});

// Array for operations
const arrayState = proxy<{ items: Array<{ id: number; name: string; value: number }> }>({
  items: [],
});

// Computed value (Valtio doesn't have built-in computed, we'll use a getter proxy)
const computedState = proxy({
  get doubled() {
    return snapshot(counterState).value * 2;
  },
});

// Form state
const formState = proxy({
  username: '',
  email: '',
  age: 0,
  profile: {
    bio: '',
    interests: [] as string[],
  },
});

// ============================================================================
// BASIC READ TESTS
// ============================================================================

library.implement(tests.singleRead, {
  fn: () => {
    return snapshot(counterState).value;
  },
});

library.implement(tests.moderateRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += snapshot(counterState).value;
    }
    return sum;
  },
});

library.implement(tests.highFrequencyRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += snapshot(counterState).value;
    }
    return sum;
  },
});

// ============================================================================
// BASIC WRITE TESTS
// ============================================================================

library.implement(tests.singleWrite, {
  beforeEach: () => {
    counterState.value = 0;
  },
  fn: () => {
    counterState.value++;
  },
});

library.implement(tests.batchWrite, {
  beforeEach: () => {
    counterState.value = 0;
  },
  fn: () => {
    for (let i = 0; i < 10; i++) {
      counterState.value++;
    }
  },
});

library.implement(tests.burstWrite, {
  beforeEach: () => {
    counterState.value = 0;
  },
  fn: () => {
    for (let i = 0; i < 100; i++) {
      counterState.value++;
    }
  },
});

library.implement(tests.heavyWrite, {
  beforeEach: () => {
    counterState.value = 0;
  },
  fn: () => {
    for (let i = 0; i < 1000; i++) {
      counterState.value++;
    }
  },
});

// ============================================================================
// ADVANCED OPERATIONS
// ============================================================================

library.implement(tests.nestedUpdate, {
  beforeEach: () => {
    nestedObjectState.level1.level2.level3.value = 0;
  },
  fn: () => {
    nestedObjectState.level1.level2.level3.value++;
  },
});

library.implement(tests.arrayPush, {
  beforeEach: () => {
    arrayState.items = [];
  },
  fn: () => {
    arrayState.items.push({
      id: arrayState.items.length,
      name: `item-${arrayState.items.length}`,
      value: Math.random(),
    });
  },
});

library.implement(tests.arrayUpdate, {
  beforeEach: () => {
    arrayState.items = [{ id: 0, name: 'item-0', value: 0 }];
  },
  fn: () => {
    if (arrayState.items.length > 0) {
      const index = Math.floor(arrayState.items.length / 2);
      arrayState.items[index].value++;
    }
  },
});

library.implement(tests.computedValue, {
  fn: () => {
    return computedState.doubled;
  },
});

// ============================================================================
// ASYNC OPERATIONS
// ============================================================================

library.implement(tests.concurrentUpdates, {
  beforeEach: () => {
    counterState.value = 0;
  },
  fn: async () => {
    const promises = Array.from({ length: 50 }, (_, i) =>
      Promise.resolve().then(() => {
        counterState.value = i;
      })
    );
    await Promise.all(promises);
  },
});

// ============================================================================
// REAL-WORLD SCENARIOS
// ============================================================================

library.implement(tests.simpleForm, {
  beforeEach: () => {
    formState.username = '';
    formState.email = '';
    formState.age = 0;
    formState.profile.bio = '';
    formState.profile.interests = [];
  },
  fn: () => {
    formState.username = 'user123';
    formState.email = 'user@example.com';
    formState.age = 25;
  },
});

library.implement(tests.complexForm, {
  beforeEach: () => {
    formState.username = '';
    formState.email = '';
    formState.age = 0;
    formState.profile.bio = '';
    formState.profile.interests = [];
  },
  fn: () => {
    formState.username = 'complexUser';
    formState.email = 'complex@example.com';
    formState.age = 30;
    formState.profile.bio = 'A detailed bio text';
    formState.profile.interests = ['coding', 'music', 'gaming'];
  },
});

library.implement(tests.cacheInvalidation, {
  beforeEach: () => {
    counterState.value = 0;
  },
  fn: () => {
    // Update base value which should invalidate computed cache
    counterState.value++;
    // Access computed to trigger recomputation
    return computedState.doubled;
  },
});

library.implement(tests.memoryUsage, {
  fn: () => {
    const subscriptions: Array<() => void> = [];

    // Create 100 subscribers
    for (let i = 0; i < 100; i++) {
      const unsubscribe = subscribe(counterState, () => {
        // Subscriber callback
      });
      subscriptions.push(unsubscribe);
    }

    // Cleanup all subscribers
    subscriptions.forEach((unsub) => unsub());
  },
});

// ============================================================================
// PERFORMANCE STRESS TESTS
// ============================================================================

library.implement(tests.extremeRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += snapshot(counterState).value;
    }
    return sum;
  },
});

library.implement(tests.extremeWrite, {
  beforeEach: () => {
    counterState.value = 0;
  },
  fn: () => {
    for (let i = 0; i < 10000; i++) {
      counterState.value++;
    }
  },
});

library.implement(tests.largeArray, {
  beforeEach: () => {
    arrayState.items = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `item-${i}`,
      value: i,
    }));
  },
  fn: () => {
    // Perform operation on large array
    const middleIndex = 500;
    arrayState.items[middleIndex].value++;
  },
});

// ============================================================================
// REACTIVITY PATTERNS
// ============================================================================

// Diamond pattern: A -> B, C -> D
const diamondState = proxy({
  a: 1,
  get b() {
    return this.a * 2;
  },
  get c() {
    return this.a * 3;
  },
  get d() {
    return this.b + this.c;
  },
});

library.implement(tests.diamondPattern, {
  beforeEach: () => {
    diamondState.a = 1;
  },
  fn: () => {
    diamondState.a++;
    return diamondState.d;
  },
});

// Deep diamond pattern (5 layers)
const deepDiamondState = proxy({
  a: 1,
  get b1() {
    return this.a * 2;
  },
  get b2() {
    return this.a * 3;
  },
  get c1() {
    return this.b1 + this.b2;
  },
  get c2() {
    return this.b1 - this.b2;
  },
  get d1() {
    return this.c1 * this.c2;
  },
  get d2() {
    return this.c1 + this.c2;
  },
  get e() {
    return this.d1 + this.d2;
  },
});

library.implement(tests.deepDiamondPattern, {
  beforeEach: () => {
    deepDiamondState.a = 1;
  },
  fn: () => {
    deepDiamondState.a++;
    return deepDiamondState.e;
  },
});

// Deep chain (10 layers)
const chainState = proxy({
  value: 1,
  get layer0() {
    return this.value + 1;
  },
  get layer1() {
    return this.layer0 + 1;
  },
  get layer2() {
    return this.layer1 + 1;
  },
  get layer3() {
    return this.layer2 + 1;
  },
  get layer4() {
    return this.layer3 + 1;
  },
  get layer5() {
    return this.layer4 + 1;
  },
  get layer6() {
    return this.layer5 + 1;
  },
  get layer7() {
    return this.layer6 + 1;
  },
  get layer8() {
    return this.layer7 + 1;
  },
  get layer9() {
    return this.layer8 + 1;
  },
});

library.implement(tests.deepChain, {
  beforeEach: () => {
    chainState.value = 1;
  },
  fn: () => {
    chainState.value++;
    return chainState.layer9;
  },
});

// Very deep chain (100 layers) - Create dynamically
const veryDeepChainState: any = proxy({ value: 1 });
for (let i = 0; i < 100; i++) {
  Object.defineProperty(veryDeepChainState, `layer${i}`, {
    get: function () {
      if (i === 0) {
        return this.value + 1;
      } else {
        return this[`layer${i - 1}`] + 1;
      }
    },
    enumerable: true,
    configurable: true,
  });
}

library.implement(tests.veryDeepChain, {
  beforeEach: () => {
    veryDeepChainState.value = 1;
  },
  fn: () => {
    veryDeepChainState.value++;
    return veryDeepChainState.layer99;
  },
});

// Wide fanout (1 -> 100)
const fanoutState: any = proxy({ source: 1 });
for (let i = 0; i < 100; i++) {
  Object.defineProperty(fanoutState, `computed${i}`, {
    get: function () {
      return this.source * (i + 1);
    },
    enumerable: true,
    configurable: true,
  });
}

library.implement(tests.wideFanout, {
  beforeEach: () => {
    fanoutState.source = 1;
  },
  fn: () => {
    fanoutState.source++;
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += fanoutState[`computed${i}`];
    }
    return sum;
  },
});

// Massive fanout (1 -> 1000)
const massiveFanoutState: any = proxy({ source: 1 });
for (let i = 0; i < 1000; i++) {
  Object.defineProperty(massiveFanoutState, `computed${i}`, {
    get: function () {
      return this.source * (i + 1);
    },
    enumerable: true,
    configurable: true,
  });
}

library.implement(tests.massiveFanout, {
  beforeEach: () => {
    massiveFanoutState.source = 1;
  },
  fn: () => {
    massiveFanoutState.source++;
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += massiveFanoutState[`computed${i}`];
    }
    return sum;
  },
});

// Dynamic dependencies
const dynamicState = proxy({
  condition: true,
  a: 1,
  b: 2,
  get computed() {
    if (this.condition) {
      return this.a * 2;
    } else {
      return this.b * 3;
    }
  },
});

library.implement(tests.dynamicDependencies, {
  beforeEach: () => {
    dynamicState.condition = true;
    dynamicState.a = 1;
    dynamicState.b = 2;
  },
  fn: () => {
    dynamicState.condition = !dynamicState.condition;
    dynamicState.a++;
    dynamicState.b++;
    return dynamicState.computed;
  },
});

// Repeated diamonds (5 sequential diamond patterns)
const repeatedDiamonds: any[] = [];
for (let i = 0; i < 5; i++) {
  const diamond = proxy({
    source: 1,
    get b() {
      return this.source * 2;
    },
    get c() {
      return this.source * 3;
    },
    get d() {
      return this.b + this.c;
    },
  });
  repeatedDiamonds.push(diamond);
}

library.implement(tests.repeatedDiamonds, {
  beforeEach: () => {
    repeatedDiamonds[0].source = 1;
  },
  fn: () => {
    repeatedDiamonds[0].source++;
    // Propagate through all diamonds
    for (let i = 1; i < 5; i++) {
      repeatedDiamonds[i].source = repeatedDiamonds[i - 1].d;
    }
    return repeatedDiamonds[4].d;
  },
});