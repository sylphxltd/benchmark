/**
 * Zen 2.0 implementation
 * Migration from get/set functions to .value syntax
 */

import { zen, computed, computedAsync } from '@sylphx/zen';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

const countZen = zen(0);
const usersZen = zen(largeArray);
const deepNestedZen = zen(createDeepNested());
const formDataZen = zen(createFormState());

export const zenActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    countZen.value = countZen.value + 1;
  },

  getCount: () => {
    return countZen.value;
  },

  // 03-creation methods
  createEmptyStore: () => {
    return zen(0);
  },

  // 04-complexity methods
  readNestedState: () => {
    const state = deepNestedZen.value;
    return state.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    const current = deepNestedZen.value;
    deepNestedZen.value = {
      ...current,
      level1: {
        ...current.level1,
        level2: {
          ...current.level1.level2,
          level3: {
            ...current.level1.level2.level3,
            level4: {
              ...current.level1.level2.level3.level4,
              level5: {
                ...current.level1.level2.level3.level4.level5,
                level6: {
                  ...current.level1.level2.level3.level4.level5.level6,
                  level7: {
                    ...current.level1.level2.level3.level4.level5.level6.level7,
                    level8: {
                      ...current.level1.level2.level3.level4.level5.level6.level7.level8,
                      level9: {
                        ...current.level1.level2.level3.level4.level5.level6.level7.level8.level9,
                        level10: {
                          value: current.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value + 1
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  },

  spliceArray: () => {
    const users = usersZen.value;
    const newUsers = [...users];
    newUsers.splice(Math.floor(newUsers.length / 2), 1);
    usersZen.value = newUsers;
  },

  mapLargeArray: () => {
    const users = usersZen.value;
    return users.map(user => ({ ...user, mapped: true }));
  },

  updateMultipleFields: () => {
    countZen.value = countZen.value + 1;
    const users = usersZen.value;
    usersZen.value = [...users, { id: users.length, name: 'New User', email: 'new@example.com', value: 0 }];
  },

  // 06-memory methods
  getLargeArray: () => {
    return usersZen.value;
  },

  updateLargeArrayItem: () => {
    const users = usersZen.value;
    const updated = users.map((user, i) =>
      i === 500 ? { ...user, value: user.value + 1 } : user
    );
    usersZen.value = updated;
  },

  cloneLargeState: () => {
    const users = usersZen.value;
    return JSON.parse(JSON.stringify(users));
  },

  filterLargeArray: () => {
    const users = usersZen.value;
    return users.filter(user => user.value > 500);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    const formData = formDataZen.value;
    const [section, fieldName] = field.split('.');

    if (fieldName) {
      formDataZen.value = {
        ...formData,
        [section]: {
          ...(formData as any)[section],
          [fieldName]: value
        }
      };
    } else {
      formDataZen.value = {
        ...formData,
        [field]: value
      };
    }
  },

  updateMultipleFormFields: (fields) => {
    const formData = formDataZen.value;
    formDataZen.value = {
      ...formData,
      personal: {
        ...formData.personal,
        ...fields
      }
    };
  },

  updateNestedFormField: (path, value) => {
    const formData = formDataZen.value;
    const [section, field] = path.split('.');
    formDataZen.value = {
      ...formData,
      [section]: {
        ...(formData as any)[section],
        [field]: value
      }
    };
  },

  resetForm: () => {
    formDataZen.value = createFormState();
  },

  conditionalFieldUpdate: () => {
    const formData = formDataZen.value;
    if (formData.preferences.newsletter) {
      formDataZen.value = {
        ...formData,
        preferences: {
          ...formData.preferences,
          notifications: true
        }
      };
    }
  },

  // 08-async-reactive methods (Zen 2.0 native async reactive support with computeAsync)
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    return countZen.value;
  },

  getChainedAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    const count = countZen.value;
    await new Promise(resolve => setTimeout(resolve, 5));
    return count * 2;
  },

  getComplexAsyncValue: async () => {
    const [count, userCount] = await Promise.all([
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return countZen.value;
      })(),
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return usersZen.value.length;
      })()
    ]);
    return { count, userCount };
  }
};
