class Lang {
  constructor(toggleClass = 'js-lang-toggle', defaultLang = 'ru') {
    this.toggleClass = toggleClass;
    this.defaultLang = defaultLang;

    // Attribute used to store the current lang on the HTML element
    this.dataLang = 'data-lang';

    // Available langs
    this.langs = {
      ru: 'ru',
      en: 'en',
    };

    // Elements with the toggle class
    this.elements = {
      toggles: document.querySelectorAll(`.${toggleClass}`) || [],
    };

    this.init();
  }

  init() {
    try {
      this.initDefault();
      this.setListeners();
    } catch (error) {
      console.error(error);
    }
  }

  initDefault() {
    const lang = Lang.get(this.defaultLang);

    this.setAttributes(lang);
  }

  setListeners() {
    try {
      this.elements.toggles.forEach((toggle) => {
        toggle.addEventListener('change', (e) => this.toggle(e));
      });
    } catch (error) {
      console.error(error);
    }
  }

  toggle(e) {
    try {
      const lang = e.target.value;

      this.set(this.langs[lang]);
    } catch (error) {
      console.error(error);
    }
  }

  setAttributes(lang) {
    try {
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute(this.dataLang, lang);
    } catch (error) {
      console.error(error);
    }
  }

  set(lang) {
    try {
      localStorage.setItem('lang', lang);
      this.setAttributes(lang);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  static get(defaultLang = 'ru') {
    try {
      return localStorage.getItem('lang') || defaultLang;
    } catch (error) {
      console.error(error);
      return defaultLang;
    }
  }
}
