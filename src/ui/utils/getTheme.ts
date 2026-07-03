import { DATA_ATTRIBUTES, STORAGE_KEYS } from '@/shared/domHooks';

export const getTheme = (): string => {
  return (
    document.documentElement.getAttribute(DATA_ATTRIBUTES.theme) ||
    localStorage.getItem(STORAGE_KEYS.theme) ||
    'dark'
  );
};
