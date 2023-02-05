import input from './__mock__/close-case.json';
import { handler } from './close-case';

test('Close Case Function Handler', async () => {
  const result = await handler(input);
  expect(result).toEqual({
    Case: '001',
    Message: 'Case 001: opened...assigned...resolved...closed.',
    Status: 1,
  });
});
