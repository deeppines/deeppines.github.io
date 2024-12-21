/* eslint-disable @typescript-eslint/no-unused-vars */
initTheme();

function getTheme(defaultTheme = 'dark') {
  return localStorage.getItem('theme') || defaultTheme;
}
function initTheme() {
  const theme = getTheme();

  document.documentElement.setAttribute('data-theme', theme);
}

function changeTheme() {
  const theme = getTheme();

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}
