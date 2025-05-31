class HiddenButton {
  constructor(options) {
    this.options = options;

    this.classNames = {
      root: 'js-hidden-root',
      button: 'js-hidden-btn',
    };

    this.domElements = {
      root: document.querySelectorAll(`.${this.classNames.root}`),
    };

    this.config = {
      visibleTimer: this.options?.visibleTimer || 3000,
      hoverTimer: this.options?.hoverTimer || 5000,
    };

    if (this.domElements.root.length > 0) {
      this.initialize();
    } else {
      console.warn(`No elements found with class: ${this.classNames.root}`);
    }
  }

  initialize() {
    this.setListeners();
  }

  setListeners() {
    const { root } = this.domElements;

    root.forEach((el) => {
      let timer;

      el.addEventListener('mouseenter', () => {
        timer = setTimeout(() => this.showMessage(el), this.config.hoverTimer);
      });

      el.addEventListener('mouseleave', () => {
        clearTimeout(timer);
      });
    });
  }

  showMessage(el) {
    const button = el.querySelector(`.${this.classNames.button}`);

    if (button) {
      button.style.display = 'block';

      setTimeout(() => {
        button.style.display = 'none';
      }, this.config.visibleTimer);
    } else {
      console.warn(`Button element not found within root element: ${el}`);
    }
  }
}
