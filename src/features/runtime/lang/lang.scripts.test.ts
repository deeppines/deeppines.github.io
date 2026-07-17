/**
 * @jest-environment jsdom
 */

import { DATA_ATTRIBUTES, DOM_HOOKS, STORAGE_KEYS } from '@/shared/domHooks';

import { initLang } from './lang.scripts';

describe('lang runtime', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.documentElement.removeAttribute('lang');
    document.documentElement.removeAttribute(DATA_ATTRIBUTES.lang);
    localStorage.clear();
  });

  test('toggle updates lang and triggers rerender callback', () => {
    const toggle = document.createElement('select');
    toggle.className = DOM_HOOKS.langToggle;

    const ruOption = document.createElement('option');
    ruOption.value = 'ru';
    ruOption.textContent = 'RU';

    const enOption = document.createElement('option');
    enOption.value = 'en';
    enOption.textContent = 'EN';

    toggle.append(ruOption, enOption);
    document.body.append(toggle);

    const onChange = jest.fn();
    initLang({ onChange });

    expect(document.documentElement.getAttribute('lang')).toBe('ru');
    expect(document.documentElement.getAttribute(DATA_ATTRIBUTES.lang)).toBe('ru');

    toggle.value = 'en';
    toggle.dispatchEvent(new Event('change', { bubbles: true }));

    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(localStorage.getItem(STORAGE_KEYS.lang)).toBe('en');
    expect(onChange).toHaveBeenCalledWith('en');
  });

  test('cleanup removes change listeners', () => {
    const toggle = document.createElement('select');
    toggle.className = DOM_HOOKS.langToggle;

    const ruOption = document.createElement('option');
    ruOption.value = 'ru';
    ruOption.textContent = 'RU';

    const enOption = document.createElement('option');
    enOption.value = 'en';
    enOption.textContent = 'EN';

    toggle.append(ruOption, enOption);
    document.body.append(toggle);

    const onChange = jest.fn();
    const cleanup = initLang({ onChange });
    cleanup();

    toggle.value = 'en';
    toggle.dispatchEvent(new Event('change', { bubbles: true }));

    expect(onChange).not.toHaveBeenCalled();
    expect(localStorage.getItem(STORAGE_KEYS.lang)).toBe('ru');
  });
});
