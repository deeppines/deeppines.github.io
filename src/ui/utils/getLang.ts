export function getLang() {
  const defaultLang = 'ru';

  return (
    localStorage.getItem('lang') ||
    document.documentElement.getAttribute('data-lang') ||
    defaultLang
  );
}
