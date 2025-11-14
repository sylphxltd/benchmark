/**
 * MobX (Observable-based) Implementation
 * Uses MobX's observable/computed/action reactive system
 */

import { makeAutoObservable, observable, computed, action, runInAction, autorun } from 'mobx';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'mobx',
  displayName: 'MobX',
  packageName: 'mobx',
  githubUrl: 'https://github.com/mobxjs/mobx',
  description: 'Observable-based reactive state management',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// State Setup
// ============================================================================

// Basic counter store
class CounterStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter++;
  }

  setCounter(value: number) {
    this.counter = value;
  }

  get doubled() {
    return this.counter * 2;
  }
}

const counterStore = new CounterStore();

// Nested object store
class NestedStore {
  nestedObject = {
    level1: {
      level2: {
        level3: {
          value: 0,
        },
      },
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateNested() {
    this.nestedObject.level1.level2.level3.value++;
  }
}

const nestedStore = new NestedStore();

// Array store
class ArrayStore {
  items: Array<{ id: number; name: string; value: number }> = [];

  constructor() {
    makeAutoObservable(this);
  }

  pushItem() {
    this.items.push({
      id: this.items.length,
      name: `item-${this.items.length}`,
      value: Math.random(),
    });
  }

  updateItem() {
    if (this.items.length > 0) {
      const index = Math.floor(this.items.length / 2);
      this.items[index].value++;
    }
  }

  setItems(items: Array<{ id: number; name: string; value: number }>) {
    this.items = items;
  }
}

const arrayStore = new ArrayStore();

// Form store
class FormStore {
  username = '';
  email = '';
  age = 0;
  profile = {
    bio: '',
    interests: [] as string[],
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateSimpleForm() {
    this.username = 'user123';
    this.email = 'user@example.com';
    this.age = 25;
  }

  updateComplexForm() {
    this.username = 'complexUser';
    this.email = 'complex@example.com';
    this.age = 30;
    this.profile.bio = 'A detailed bio text';
    this.profile.interests = ['coding', 'music', 'gaming'];
  }
}

const formStore = new FormStore();

// ============================================================================
// BASIC READ TESTS
// ============================================================================

library.implement(tests.singleRead, {
  fn: () => {
    return counterStore.counter;
  },
});

library.implement(tests.moderateRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += counterStore.counter;
    }
    return sum;
  },
});

library.implement(tests.highFrequencyRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += counterStore.counter;
    }
    return sum;
  },
});

// ============================================================================
// BASIC WRITE TESTS
// ============================================================================

library.implement(tests.singleWrite, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: () => {
    counterStore.increment();
  },
});

library.implement(tests.batchWrite, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: () => {
    runInAction(() => {
      for (let i = 0; i < 10; i++) {
        counterStore.increment();
      }
    });
  },
});
library.implement(tests.burstWrite, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: () => {
    runInAction(() => {
      for (let i = 0; i < 100; i++) {
        counterStore.increment();
      }
    });
  },
});
library.implement(tests.heavyWrite, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: () => {
    runInAction(() => {
      for (let i = 0; i < 1000; i++) {
        counterStore.increment();
      }
    });
  },
});
// ============================================================================
// ADVANCED OPERATIONS
// ============================================================================

library.implement(tests.nestedUpdate, {
  beforeEach: () => {
    runInAction(() => {
      nestedStore.nestedObject = {
        level1: {
          level2: {
            level3: {
              value: 0,
            },
          },
        },
      };
    });
  },
  fn: () => {
    nestedStore.updateNested();
  },
});

library.implement(tests.arrayPush, {
  beforeEach: () => {
    runInAction(() => {
      arrayStore.setItems([]);
    });
  },
  fn: () => {
    arrayStore.pushItem();
  },
});

library.implement(tests.arrayUpdate, {
  beforeEach: () => {
    runInAction(() => {
      arrayStore.setItems([{ id: 0, name: 'item-0', value: 0 }]);
    });
  },
  fn: () => {
    arrayStore.updateItem();
  },
});

library.implement(tests.computedValue, {
  fn: () => {
    return counterStore.doubled;
  },
});

// ============================================================================
// ASYNC OPERATIONS
// ============================================================================

library.implement(tests.asyncThroughput, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: async () => {
    const promises = [];
    for (let i = 0; i < 20; i++) {
      promises.push(
        new Promise<void>((resolve) => {
          setTimeout(() => {
            runInAction(() => {
              counterStore.increment();
            });
            resolve();
          }, 0);
        })
      );
    }
    await Promise.all(promises);
  },
});

library.implement(tests.concurrentUpdates, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: async () => {
    const promises = Array.from({ length: 50 }, (_, i) =>
      Promise.resolve().then(() => {
        runInAction(() => {
          counterStore.setCounter(i);
        });
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
    runInAction(() => {
      formStore.username = '';
      formStore.email = '';
      formStore.age = 0;
      formStore.profile.bio = '';
      formStore.profile.interests = [];
    });
  },
  fn: () => {
    formStore.updateSimpleForm();
  },
});

library.implement(tests.complexForm, {
  beforeEach: () => {
    runInAction(() => {
      formStore.username = '';
      formStore.email = '';
      formStore.age = 0;
      formStore.profile.bio = '';
      formStore.profile.interests = [];
    });
  },
  fn: () => {
    formStore.updateComplexForm();
  },
});

library.implement(tests.cacheInvalidation, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: () => {
    // Update base value which should invalidate computed cache
    counterStore.increment();
    // Access computed to trigger recomputation
    return counterStore.doubled;
  },
});

library.implement(tests.memoryUsage, {
  fn: () => {
    const disposers: Array<() => void> = [];

    // Create 100 observers
    for (let i = 0; i < 100; i++) {
      const dispose = autorun(() => {
        // Observer callback - access the value to create dependency
        const value = counterStore.counter;
      });
      disposers.push(dispose);
    }

    // Cleanup all observers
    disposers.forEach((dispose) => dispose());
  },
});

// ============================================================================
// PERFORMANCE STRESS TESTS
// ============================================================================

library.implement(tests.extremeRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += counterStore.counter;
    }
    return sum;
  },
});

library.implement(tests.extremeWrite, {
  beforeEach: () => {
    runInAction(() => {
      counterStore.setCounter(0);
    });
  },
  fn: () => {
    runInAction(() => {
      for (let i = 0; i < 10000; i++) {
        counterStore.increment();
      }
    });
  },
});
library.implement(tests.largeArray, {
  beforeEach: () => {
    runInAction(() => {
      arrayStore.setItems(Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `item-${i}`,
        value: i,
      })));
    });
  },
  fn: () => {
    // Perform operation on large array
    const middleIndex = 500;
    runInAction(() => {
      arrayStore.items[middleIndex].value++;
    });
  },
});
// ============================================================================
// REACTIVITY PATTERNS
// ============================================================================

// Diamond pattern: A -> B, C -> D
class DiamondStore {
  a = 1;

  constructor() {
    makeAutoObservable(this);
  }

  incrementA() {
    this.a++;
  }

  get b() {
    return this.a * 2;
  }

  get c() {
    return this.a * 3;
  }

  get d() {
    return this.b + this.c;
  }
}

const diamondStore = new DiamondStore();

library.implement(tests.diamondPattern, {
  beforeEach: () => {
    runInAction(() => {
      diamondStore.a = 1;
    });
  },
  fn: () => {
    diamondStore.incrementA();
    return diamondStore.d;
  },
});

// Deep diamond pattern (5 layers)
class DeepDiamondStore {
  a = 1;

  constructor() {
    makeAutoObservable(this);
  }

  incrementA() {
    this.a++;
  }

  get b1() {
    return this.a * 2;
  }

  get b2() {
    return this.a * 3;
  }

  get c1() {
    return this.b1 + this.b2;
  }

  get c2() {
    return this.b1 - this.b2;
  }

  get d1() {
    return this.c1 * this.c2;
  }

  get d2() {
    return this.c1 + this.c2;
  }

  get e() {
    return this.d1 + this.d2;
  }
}

const deepDiamondStore = new DeepDiamondStore();

library.implement(tests.deepDiamondPattern, {
  beforeEach: () => {
    runInAction(() => {
      deepDiamondStore.a = 1;
    });
  },
  fn: () => {
    deepDiamondStore.incrementA();
    return deepDiamondStore.e;
  },
});

// Deep chain (10 layers)
class ChainStore {
  value = 1;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.value++;
  }

  get layer0() {
    return this.value + 1;
  }
  get layer1() {
    return this.layer0 + 1;
  }
  get layer2() {
    return this.layer1 + 1;
  }
  get layer3() {
    return this.layer2 + 1;
  }
  get layer4() {
    return this.layer3 + 1;
  }
  get layer5() {
    return this.layer4 + 1;
  }
  get layer6() {
    return this.layer5 + 1;
  }
  get layer7() {
    return this.layer6 + 1;
  }
  get layer8() {
    return this.layer7 + 1;
  }
  get layer9() {
    return this.layer8 + 1;
  }
}

const chainStore = new ChainStore();

library.implement(tests.deepChain, {
  beforeEach: () => {
    runInAction(() => {
      chainStore.value = 1;
    });
  },
  fn: () => {
    chainStore.increment();
    return chainStore.layer9;
  },
});

// Very deep chain (100 layers) - Create dynamically
class VeryDeepChainStore {
  value = 1;
  private computeds: Map<string, () => number> = new Map();

  constructor() {
    makeAutoObservable(this, {
      computeds: false,
    });

    // Create 100 computed getters dynamically
    for (let i = 0; i < 100; i++) {
      const key = `layer${i}`;
      if (i === 0) {
        Object.defineProperty(this, key, {
          get: () => this.value + 1,
          enumerable: true,
          configurable: true,
        });
      } else {
        const prevKey = `layer${i - 1}`;
        Object.defineProperty(this, key, {
          get: () => (this as any)[prevKey] + 1,
          enumerable: true,
          configurable: true,
        });
      }
    }
  }

  increment() {
    this.value++;
  }
}

const veryDeepChainStore = new VeryDeepChainStore();

library.implement(tests.veryDeepChain, {
  beforeEach: () => {
    runInAction(() => {
      veryDeepChainStore.value = 1;
    });
  },
  fn: () => {
    veryDeepChainStore.increment();
    return (veryDeepChainStore as any).layer99;
  },
});

// Wide fanout (1 -> 100)
class FanoutStore {
  source = 1;

  constructor() {
    makeAutoObservable(this);

    // Create 100 computed values dynamically
    for (let i = 0; i < 100; i++) {
      const key = `computed${i}`;
      Object.defineProperty(this, key, {
        get: () => this.source * (i + 1),
        enumerable: true,
        configurable: true,
      });
    }
  }

  increment() {
    this.source++;
  }
}

const fanoutStore = new FanoutStore();

library.implement(tests.wideFanout, {
  beforeEach: () => {
    runInAction(() => {
      fanoutStore.source = 1;
    });
  },
  fn: () => {
    fanoutStore.increment();
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += (fanoutStore as any)[`computed${i}`];
    }
    return sum;
  },
});

// Massive fanout (1 -> 1000)
class MassiveFanoutStore {
  source = 1;

  constructor() {
    makeAutoObservable(this);

    // Create 1000 computed values dynamically
    for (let i = 0; i < 1000; i++) {
      const key = `computed${i}`;
      Object.defineProperty(this, key, {
        get: () => this.source * (i + 1),
        enumerable: true,
        configurable: true,
      });
    }
  }

  increment() {
    this.source++;
  }
}

const massiveFanoutStore = new MassiveFanoutStore();

library.implement(tests.massiveFanout, {
  beforeEach: () => {
    runInAction(() => {
      massiveFanoutStore.source = 1;
    });
  },
  fn: () => {
    massiveFanoutStore.increment();
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += (massiveFanoutStore as any)[`computed${i}`];
    }
    return sum;
  },
});

// Dynamic dependencies
class DynamicStore {
  condition = true;
  a = 1;
  b = 2;

  constructor() {
    makeAutoObservable(this);
  }

  toggleCondition() {
    this.condition = !this.condition;
  }

  incrementA() {
    this.a++;
  }

  incrementB() {
    this.b++;
  }

  get computed() {
    if (this.condition) {
      return this.a * 2;
    } else {
      return this.b * 3;
    }
  }
}

const dynamicStore = new DynamicStore();

library.implement(tests.dynamicDependencies, {
  beforeEach: () => {
    runInAction(() => {
      dynamicStore.condition = true;
      dynamicStore.a = 1;
      dynamicStore.b = 2;
    });
  },
  fn: () => {
    dynamicStore.toggleCondition();
    dynamicStore.incrementA();
    dynamicStore.incrementB();
    return dynamicStore.computed;
  },
});

// Repeated diamonds (5 sequential diamond patterns)
const repeatedDiamondStores: DiamondStore[] = [];
for (let i = 0; i < 5; i++) {
  repeatedDiamondStores.push(new DiamondStore());
}

library.implement(tests.repeatedDiamonds, {
  beforeEach: () => {
    runInAction(() => {
      repeatedDiamondStores[0].a = 1;
    });
  },
  fn: () => {
    repeatedDiamondStores[0].incrementA();
    // Propagate through all diamonds
    for (let i = 1; i < 5; i++) {
      runInAction(() => {
        repeatedDiamondStores[i].a = repeatedDiamondStores[i - 1].d;
      });
    }
    return repeatedDiamondStores[4].d;
  },
});