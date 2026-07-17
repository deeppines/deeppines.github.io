/**
 * @jest-environment jsdom
 */

import { prefersReducedMotion } from './prefersReducedMotion';

describe('prefersReducedMotion', () => {
  test('returns media query match state', () => {
    const matchMediaMock = jest.fn().mockReturnValue({
      matches: true,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    window.matchMedia = matchMediaMock;

    expect(prefersReducedMotion()).toBe(true);
    expect(matchMediaMock).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)');
  });
});
