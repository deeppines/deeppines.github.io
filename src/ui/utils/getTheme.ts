export const getTheme = (): string => {
  return (
    document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark'
  );
};
