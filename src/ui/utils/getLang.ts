import { DATA_ATTRIBUTES, STORAGE_KEYS } from '@/shared/domHooks';
import type { Lang } from '@/types/common';

const DEFAULT_LANGUAGE: Lang = 'ru';

const isLang = (value: string | null): value is Lang => value === 'ru' || value === 'en';

/**
 * Returns the language of the user's browser or the language that was set using
 * the {@link setLang} function.
 *
 * @returns The language of the user's browser or the language that was set using
 * the {@link setLang} function.
 */
export function getLang(): Lang {
  // First, try to get the language from local storage.
  const langFromLocalStorage = localStorage.getItem(STORAGE_KEYS.lang);
  if (isLang(langFromLocalStorage)) {
    return langFromLocalStorage;
  }

  // If the language is not in local storage, try to get it from the document's
  // lang attribute.
  const langFromDocument = document.documentElement.getAttribute(DATA_ATTRIBUTES.lang);
  if (isLang(langFromDocument)) {
    return langFromDocument;
  }

  // If the language is not in local storage or the document's lang attribute,
  // use the default language.
  return DEFAULT_LANGUAGE;
}
