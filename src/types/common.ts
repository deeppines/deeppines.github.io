export type Theme = 'dark' | 'light';
export type Lang = 'ru' | 'en';

export interface WithLang<T> {
  ru: T;
  en: T;
}
