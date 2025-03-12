class HiddenButton {
  constructor(options) {
    this.options = options;

    this.classes = {
      root: 'js-hidden-root',
      button: 'js-hidden-btn',
    };

    this.elements = {
      root: document.querySelectorAll(`.${this.classes.root}`),
    };

    this.init();
  }

  init() {
    this.setListeners();
  }

  setListeners() {
    const { root } = this.elements;

    root.forEach((el) => {
      let timer;

      el.addEventListener('mouseenter', () => {
        timer = setTimeout(() => this.showMessage(el), 5000);
      });

      el.addEventListener('mouseleave', () => {
        clearTimeout(timer);
      });
    });
  }

  showMessage(el) {
    const button = el.querySelector(`.${this.classes.button}`);

    button.style.display = 'block';

    setTimeout(() => {
      button.style.display = 'none';
    }, 3000);
  }
}
