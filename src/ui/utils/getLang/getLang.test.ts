/**
 * @jest-environment jsdom
 */

import { DATA_ATTRIBUTES, STORAGE_KEYS } from '@/shared/domHooks';

import { getLang } from './getLang';

describe('getLang', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute(DATA_ATTRIBUTES.lang);
  });

  test('returns language from localStorage first', () => {
    localStorage.setItem(STORAGE_KEYS.lang, 'en');
    document.documentElement.setAttribute(DATA_ATTRIBUTES.lang, 'ru');

    expect(getLang()).toBe('en');
  });

  test('returns language from document attribute when storage is empty', () => {
    document.documentElement.setAttribute(DATA_ATTRIBUTES.lang, 'en');

    expect(getLang()).toBe('en');
  });

  test('returns default language when both sources are invalid', () => {
    localStorage.setItem(STORAGE_KEYS.lang, 'de');
    document.documentElement.setAttribute(DATA_ATTRIBUTES.lang, 'de');

    expect(getLang()).toBe('ru');
  });
});
