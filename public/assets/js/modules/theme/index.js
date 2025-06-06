class Theme {
  /**
   * @param {string} toggleClass - The class name used to select theme toggle elements.
   */
  constructor(toggleClass = 'js-theme-toggle') {
    this.toggleClass = toggleClass;

    // Attribute used to store the current theme on the HTML element
    this.dataTheme = 'data-theme';

    // Available themes
    this.themes = {
      light: 'light',
      dark: 'dark',
    };

    // Elements with the toggle class
    this.elements = {
      toggles: document.querySelectorAll(`.${toggleClass}`),
    };

    if (!this.elements.toggles || !this.elements.toggles.length) {
      throw new Error(`No elements found with class: ${toggleClass}`);
    }

    this.init();
  }

  /**
   * Initializes the theme by setting the default theme and event listeners.
   */
  init() {
    try {
      this.initDefault();
      this.setListeners();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Initializes the default theme by retrieving it from local storage or using the default value.
   */
  initDefault() {
    const theme = Theme.get();

    this.set(theme);
  }

  /**
   * Sets event listeners on the toggle elements.
   */
  setListeners() {
    this.elements.toggles.forEach((toggle) => {
      try {
        toggle.addEventListener('change', () => this.toggle());
      } catch (error) {
        console.error(error);
      }
    });
  }

  /**
   * Toggles the theme between light and dark.
   */
  toggle() {
    try {
      const theme = Theme.get();

      if (theme === 'dark') {
        this.set(this.themes.light);
      } else {
        this.set(this.themes.dark);
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Sets the specified theme and stores it in local storage.
   * @param {string} theme - The theme to set (light or dark).
   * @param {string} name - The name under which the theme is stored in local storage.
   */
  set(theme, name = 'theme') {
    try {
      document.documentElement.setAttribute(this.dataTheme, theme);
      localStorage.setItem(name, theme);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Retrieves the current theme from local storage or returns the default theme.
   * @param {string} defaultTheme - The theme to return if no theme is stored in local storage.
   * @returns {string} - The current theme.
   */
  static get(defaultTheme = 'dark') {
    try {
      return localStorage.getItem('theme') || defaultTheme;
    } catch (error) {
      console.error(error);
      return defaultTheme;
    }
  }
}
