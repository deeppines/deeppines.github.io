import type { Theme } from '@/types/common';

const THEME_STORAGE_KEY = 'theme';
const THEME_ATTRIBUTE = 'data-theme';
const isTheme = (value: string | null): value is Theme => value === 'dark' || value === 'light';
const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getStoredTheme = (): Theme => {
  const themeFromStorage = localStorage.getItem(THEME_STORAGE_KEY);
  const themeFromDocument = document.documentElement.getAttribute(THEME_ATTRIBUTE);

  if (isTheme(themeFromStorage)) {
    return themeFromStorage;
  }

  if (isTheme(themeFromDocument)) {
    return themeFromDocument;
  }

  return getSystemTheme();
};

const setTheme = (theme: Theme): void => {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const initTheme = (toggleClass = 'js-theme-toggle'): void => {
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
