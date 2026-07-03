interface ModalConfig {
  id: string;
  openTriggerClass: string;
}

const CLOSE_TRIGGER_CLASS = 'js-modal-close';
const OPEN_CLASS = 'open';

const setBackdropState = (): void => {
  const hasOpenedModal = document.querySelector(`.${OPEN_CLASS}`) !== null;
  document.body.dataset.backdrop = String(hasOpenedModal);
};

const initSingleModal = ({ id, openTriggerClass }: ModalConfig): void => {
  const modal = document.getElementById(id);

  if (!modal) {
    return;
  }

  const openTriggers = document.querySelectorAll(`.${openTriggerClass}`);
  const closeTriggers = modal.querySelectorAll(`.${CLOSE_TRIGGER_CLASS}`);

  const open = (): void => {
    modal.classList.add(OPEN_CLASS);
    setBackdropState();
  };

  const close = (): void => {
    modal.classList.remove(OPEN_CLASS);
    setBackdropState();
  };

  openTriggers.forEach((trigger) => {
    trigger.addEventListener('click', open);
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener('click', close);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      close();
    }
  });
};

export const initModals = (): void => {
  initSingleModal({ id: 'modal-about', openTriggerClass: 'js-modal-open' });
  initSingleModal({ id: 'modal-me', openTriggerClass: 'js-modal-me-open' });
};
