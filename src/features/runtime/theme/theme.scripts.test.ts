/**
 * @jest-environment jsdom
 */

import { DATA_ATTRIBUTES, DOM_HOOKS, STORAGE_KEYS } from '@/shared/domHooks';

import { initTheme } from './theme.scripts';

describe('theme runtime', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.documentElement.removeAttribute(DATA_ATTRIBUTES.theme);
    localStorage.clear();
  });

  test('toggle switches theme and persists value', () => {
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.className = DOM_HOOKS.themeToggle;
    document.body.append(toggle);

    localStorage.setItem(STORAGE_KEYS.theme, 'light');
    initTheme();

    expect(document.documentElement.getAttribute(DATA_ATTRIBUTES.theme)).toBe('light');
    expect(toggle.checked).toBe(false);

    toggle.dispatchEvent(new Event('change', { bubbles: true }));

    expect(document.documentElement.getAttribute(DATA_ATTRIBUTES.theme)).toBe('dark');
    expect(localStorage.getItem(STORAGE_KEYS.theme)).toBe('dark');
    expect(toggle.checked).toBe(true);
  });

  test('cleanup removes change listeners', () => {
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.className = DOM_HOOKS.themeToggle;
    document.body.append(toggle);

    localStorage.setItem(STORAGE_KEYS.theme, 'light');
    const cleanup = initTheme();
    cleanup();

    toggle.dispatchEvent(new Event('change', { bubbles: true }));

    expect(document.documentElement.getAttribute(DATA_ATTRIBUTES.theme)).toBe('light');
  });
});
