/* eslint-disable unused-imports/no-unused-vars */
class Theme {
  constructor(toggleClass = 'js-theme-toggle') {
    this.toggleClass = toggleClass;

    this.dataTheme = 'data-theme';

    this.themes = {
      light: 'light',
      dark: 'dark',
    };

    this.elements = {
      toggles: document.querySelectorAll(`.${toggleClass}`),
    };

    this.init();
  }

  init() {
    this.initDefault();
    this.setListeners();
  }

  initDefault() {
    const theme = Theme.get();

    this.set(theme);
  }

  setListeners() {
    console.log(this.elements.toggles);

    this.elements.toggles.forEach((toggle) => {
      toggle.addEventListener('change', () => this.toggle());
    });
  }

  toggle() {
    const theme = Theme.get();

    if (theme === 'dark') {
      this.set(this.themes.light);
    } else {
      this.set(this.themes.dark);
    }
  }

  set(theme, name = 'theme') {
    document.documentElement.setAttribute(this.dataTheme, theme);
    localStorage.setItem(name, theme);
  }

  static get(defaultTheme = 'dark') {
    return localStorage.getItem('theme') || defaultTheme;
  }
}
