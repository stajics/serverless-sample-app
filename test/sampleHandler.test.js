const sampleHandler = require('../handlers/sampleHandler');

test('adds 1 + 2 to equal 3', () => {
  expect(sampleHandler(1, 2)).toBe(3);
});
