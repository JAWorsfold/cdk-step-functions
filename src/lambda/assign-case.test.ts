import input from './__mock__/assign-case.json';
import { handler } from './assign-case';

test('Assign Case Function Handler', async () => {
  const result = await handler(input);
  expect(result).toEqual({
    Case: '001',
    Message: 'Case 001: opened...assigned...',
  });
});
