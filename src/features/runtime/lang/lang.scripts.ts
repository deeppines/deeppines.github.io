import type { Lang } from '@/types/common';

import { DATA_ATTRIBUTES, DOM_HOOKS, STORAGE_KEYS } from '@/shared/domHooks';

const DEFAULT_LANG: Lang = 'ru';

const isLang = (value: string | null): value is Lang => value === 'ru' || value === 'en';

const setDocumentLang = (lang: Lang): void => {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute(DATA_ATTRIBUTES.lang, lang);
};

const getStoredLang = (): Lang => {
  const langFromStorage = localStorage.getItem(STORAGE_KEYS.lang);
  const langFromDocument = document.documentElement.getAttribute(DATA_ATTRIBUTES.lang);

  if (isLang(langFromStorage)) {
    return langFromStorage;
  }

  if (isLang(langFromDocument)) {
    return langFromDocument;
  }

  return DEFAULT_LANG;
};

const setLang = (lang: Lang): void => {
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  setDocumentLang(lang);
};

interface InitLangOptions {
  toggleClass?: string;
  onChange?: (lang: Lang) => void;
}

type RuntimeCleanup = () => void;

export const initLang = (options: InitLangOptions = {}): RuntimeCleanup => {
  const toggleClass = options.toggleClass ?? DOM_HOOKS.langToggle;
  const toggles = document.querySelectorAll<HTMLSelectElement>(`.${toggleClass}`);
  const initialLang = getStoredLang();
  const cleanupHandlers: RuntimeCleanup[] = [];

  setLang(initialLang);

  toggles.forEach((toggle) => {
    toggle.value = initialLang;
    const handleChange = (event: Event): void => {
      const nextLang = (event.currentTarget as HTMLSelectElement).value;

      if (!isLang(nextLang)) {
        return;
      }

      if (nextLang === getStoredLang()) {
        return;
      }

      setLang(nextLang);
      options.onChange?.(nextLang);
    };

    toggle.addEventListener('change', handleChange);
    cleanupHandlers.push(() => {
      toggle.removeEventListener('change', handleChange);
    });
  });

  return () => {
    cleanupHandlers.forEach((cleanup) => cleanup());
  };
};
