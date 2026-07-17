/**
 * @jest-environment jsdom
 */

import { appendHtml } from './appendHtml';

describe('appendHtml', () => {
  test('appends parsed html to target', () => {
    const target = document.createElement('div');

    appendHtml(target, '<span class="icon">X</span>');

    expect(target.querySelector('span')?.textContent).toBe('X');
    expect(target.querySelector('span')?.className).toBe('icon');
  });
});
