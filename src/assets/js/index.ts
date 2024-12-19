/* eslint-disable @typescript-eslint/no-unused-vars */
function initTheme() {
  const theme = localStorage.getItem('theme');

  document.documentElement.setAttribute('data-theme', theme || 'light');
}

function changeTheme() {
  const theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

initTheme();
