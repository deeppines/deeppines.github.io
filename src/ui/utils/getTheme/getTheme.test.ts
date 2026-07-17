/**
 * @jest-environment jsdom
 */

import { DATA_ATTRIBUTES, STORAGE_KEYS } from '@/shared/domHooks';

import { getTheme } from './getTheme';

describe('getTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute(DATA_ATTRIBUTES.theme);
  });

  test('returns theme from document attribute first', () => {
    document.documentElement.setAttribute(DATA_ATTRIBUTES.theme, 'dark');
    localStorage.setItem(STORAGE_KEYS.theme, 'light');

    expect(getTheme()).toBe('dark');
  });

  test('returns theme from localStorage when document attribute is absent', () => {
    localStorage.setItem(STORAGE_KEYS.theme, 'light');

    expect(getTheme()).toBe('light');
  });

  test('returns system theme when no valid theme is stored', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    expect(getTheme()).toBe('dark');
  });
});
