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
      closeTriggers: document.querySelectorAll(`.${this.classes.closeTrigger}`),
    };

    if (!this.modal) {
      console.error(`Modal with id ${id} not found`);
      return;
    } else {
      this.init();
    }
  }

  init() {
    this.setListeners();
    this.clickOutsideListener();
  }

  setListeners() {
    const { openTriggers, closeTriggers } = this.elements;

    openTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => this.open());
    });

    closeTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => this.close());
    });
  }

  open() {
    const { open } = this.statuses;

    Modal.toggleBackdrop();

    if (this.modal) this.modal.classList.add(open);
  }

  close() {
    const { open } = this.statuses;

    Modal.toggleBackdrop();

    if (this.modal) this.modal.classList.remove(open);
  }

  clickOutsideListener() {
    document.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
  }

  static toggleBackdrop() {
    const body = document.querySelector('body');

    if (body && body.dataset.backdrop === 'true') {
      body.dataset.backdrop = 'false';
    } else if (body) {
      body.dataset.backdrop = 'true';
    }
  }
}
