import type { Lang } from '@/types/common';

const LANG_STORAGE_KEY = 'lang';
const DATA_LANG_ATTRIBUTE = 'data-lang';
const DEFAULT_LANG: Lang = 'ru';

const isLang = (value: string | null): value is Lang => value === 'ru' || value === 'en';

const setDocumentLang = (lang: Lang): void => {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute(DATA_LANG_ATTRIBUTE, lang);
};

const getStoredLang = (): Lang => {
  const langFromStorage = localStorage.getItem(LANG_STORAGE_KEY);
  const langFromDocument = document.documentElement.getAttribute(DATA_LANG_ATTRIBUTE);

  if (isLang(langFromStorage)) {
    return langFromStorage;
  }

  if (isLang(langFromDocument)) {
    return langFromDocument;
  }

  return DEFAULT_LANG;
};

const setLang = (lang: Lang): void => {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  setDocumentLang(lang);
};

interface InitLangOptions {
  toggleClass?: string;
  onChange?: (lang: Lang) => void;
}

export const initLang = (options: InitLangOptions = {}): void => {
  const toggleClass = options.toggleClass ?? 'js-lang-toggle';
  const toggles = document.querySelectorAll<HTMLSelectElement>(`.${toggleClass}`);
  const initialLang = getStoredLang();

  setLang(initialLang);

  toggles.forEach((toggle) => {
    toggle.value = initialLang;
    toggle.addEventListener('change', (event) => {
      const nextLang = (event.currentTarget as HTMLSelectElement).value;

      if (!isLang(nextLang)) {
        return;
      }

      if (nextLang === getStoredLang()) {
        return;
      }

      setLang(nextLang);
      options.onChange?.(nextLang);
    });
  });
};
