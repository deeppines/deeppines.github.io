import { isWinter } from './isWinter';

test('isWinter util test', () => {
  const december = new Date('2023-12-01');
  const january = new Date('2023-01-01');
  const february = new Date('2023-02-01');
  const march = new Date('2023-03-01');

  expect(isWinter(december)).toBe(true);
  expect(isWinter(january)).toBe(true);
  expect(isWinter(february)).toBe(true);
  expect(isWinter(march)).toBe(false);
});
