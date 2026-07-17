/**
 * @jest-environment jsdom
 */

import { setTitle } from './setTitle';

describe('setTitle', () => {
  test('updates document title', () => {
    setTitle('Deep Pines');

    expect(document.title).toBe('Deep Pines');
  });
});
