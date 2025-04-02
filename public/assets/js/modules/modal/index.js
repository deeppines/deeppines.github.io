class Modal {
  constructor(id, openTrigger) {
    this.modal = document.getElementById(id);

    this.classes = {
      closeTrigger: 'js-modal-close',
    };

    this.statuses = {
      open: 'open',
    };

    this.elements = {
      openTriggers: document.querySelectorAll(`.${openTrigger}`),
      closeTriggers: this.modal ? this.modal.querySelectorAll(`.${this.classes.closeTrigger}`) : [],
    };

    if (!this.modal) {
      console.error(`Modal with id ${id} not found`);
      return;
    }

    this.init();
  }

  init() {
    try {
      this.setListeners();
      this.clickOutsideListener();
    } catch (error) {
      console.error(error);
    }
  }

  setListeners() {
    const { openTriggers, closeTriggers } = this.elements;

    if (openTriggers && openTriggers.length) {
      openTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => this.open());
      });
    }

    if (closeTriggers && closeTriggers.length) {
      closeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => this.close());
      });
    }
  }

  open() {
    const { open } = this.statuses;

    if (this.modal) {
      Modal.toggleBackdrop();

      this.modal.classList.add(open);
    }
  }

  close() {
    const { open } = this.statuses;

    if (this.modal) {
      Modal.toggleBackdrop();

      this.modal.classList.remove(open);
    }
  }

  clickOutsideListener() {
    if (document) {
      document.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });
    }
  }

  static toggleBackdrop() {
    const body = document.querySelector('body');

    if (body && body.dataset) {
      if (body.dataset.backdrop === 'true') {
        body.dataset.backdrop = 'false';
      } else {
        body.dataset.backdrop = 'true';
      }
    }
  }
}
