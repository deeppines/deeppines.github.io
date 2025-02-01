/**
 * Returns the language of the user's browser or the language that was set using
 * the {@link setLang} function.
 *
 * @returns The language of the user's browser or the language that was set using
 * the {@link setLang} function.
 */
export function getLang(): string {
  const defaultLanguage = 'ru';

  // First, try to get the language from local storage.
  const langFromLocalStorage = localStorage.getItem('lang');

  // If the language is not in local storage, try to get it from the document's
  // lang attribute.
  const langFromDocument = document.documentElement.getAttribute('data-lang');

  // If the language is not in local storage or the document's lang attribute,
  // use the default language.
  return langFromLocalStorage || langFromDocument || defaultLanguage;
}
