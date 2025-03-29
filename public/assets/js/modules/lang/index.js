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
      toggles: document.querySelectorAll(`.${toggleClass}`),
    };

    this.init();
  }

  init() {
    this.initDefault();
    this.setListeners();
  }

  initDefault() {
    const lang = Lang.get(this.defaultLang);

    this.setAttributes(lang);
  }

  setListeners() {
    this.elements.toggles.forEach((toggle) => {
      toggle.addEventListener('change', (e) => this.toggle(e));
    });
  }

  toggle(e) {
    const lang = e.target.value;

    this.set(this.langs[lang]);
  }

  setAttributes(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute(this.dataLang, lang);
  }

  set(lang) {
    localStorage.setItem('lang', lang);
    this.setAttributes(lang);

    window.location.reload();
  }

  static get(defaultLang = 'ru') {
    return localStorage.getItem('lang') || defaultLang;
  }
}
