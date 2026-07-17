import type { Theme } from '@/types/common';

import { DATA_ATTRIBUTES, STORAGE_KEYS } from '@/shared/domHooks';

const isTheme = (value: string | null): value is Theme => value === 'dark' || value === 'light';

const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getTheme = (): Theme => {
  const themeFromDocument = document.documentElement.getAttribute(DATA_ATTRIBUTES.theme);
  const themeFromStorage = localStorage.getItem(STORAGE_KEYS.theme);

  if (isTheme(themeFromDocument)) {
    return themeFromDocument;
  }

  if (isTheme(themeFromStorage)) {
    return themeFromStorage;
  }

  return getSystemTheme();
};
