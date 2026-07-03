import { DATA_ATTRIBUTES, DOM_HOOKS, STORAGE_KEYS } from '@/shared/domHooks';
import type { Theme } from '@/types/common';

const isTheme = (value: string | null): value is Theme => value === 'dark' || value === 'light';
const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getStoredTheme = (): Theme => {
  const themeFromStorage = localStorage.getItem(STORAGE_KEYS.theme);
  const themeFromDocument = document.documentElement.getAttribute(DATA_ATTRIBUTES.theme);

  if (isTheme(themeFromStorage)) {
    return themeFromStorage;
  }

  if (isTheme(themeFromDocument)) {
    return themeFromDocument;
  }

  return getSystemTheme();
};

const setTheme = (theme: Theme): void => {
  document.documentElement.setAttribute(DATA_ATTRIBUTES.theme, theme);
  localStorage.setItem(STORAGE_KEYS.theme, theme);
};

export const initTheme = (toggleClass = DOM_HOOKS.themeToggle): void => {
  const toggles = document.querySelectorAll<HTMLInputElement>(`.${toggleClass}`);
  const initialTheme = getStoredTheme();

  setTheme(initialTheme);

  toggles.forEach((toggle) => {
    toggle.checked = initialTheme === 'dark';
    toggle.addEventListener('change', () => {
      const nextTheme: Theme = getStoredTheme() === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      toggle.checked = nextTheme === 'dark';
    });
  });
};
