import { reduxActionsV2, zustandActionsV2 } from './src/stores/index.ts';

console.log('=== Testing Simple Methods ===');

try {
  // Test Redux increment
  const reduxResult = reduxActionsV2.increment();
  console.log('Redux increment:', reduxResult, typeof reduxResult, isNaN(reduxResult));
} catch (error) {
  console.error('Redux error:', error.message);
}

try {
  // Test Zustand increment
  const zustandResult = zustandActionsV2.increment();
  console.log('Zustand increment:', zustandResult, typeof zustandResult, isNaN(zustandResult));
} catch (error) {
  console.error('Zustand error:', error.message);
}