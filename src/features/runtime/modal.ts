interface ModalConfig {
  id: string;
  openTriggerClass: string;
}

const CLOSE_TRIGGER_CLASS = 'js-modal-close';
const OPEN_CLASS = 'open';
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
  const dialog = modal.querySelector<HTMLElement>('[role="dialog"]');
  let lastActiveElement: HTMLElement | null = null;

  const getFocusableElements = (): HTMLElement[] => {
    const root = dialog ?? modal;
    return [...root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)].filter(
      (item) => !item.hasAttribute('disabled') && item.tabIndex !== -1
    );
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (!modal.classList.contains(OPEN_CLASS)) {
      return;
    }

    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) {
      event.preventDefault();
      (dialog ?? modal).focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement | null;

    if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    } else if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  };

  const open = (trigger?: HTMLElement): void => {
    lastActiveElement = trigger ?? (document.activeElement as HTMLElement | null);
    modal.classList.add(OPEN_CLASS);
    modal.setAttribute('aria-hidden', 'false');
    window.addEventListener('keydown', handleKeyDown);
    setBackdropState();

    const focusableElements = getFocusableElements();
    const initialFocusTarget = focusableElements[0] ?? dialog ?? modal;
    initialFocusTarget.focus();
  };

  const close = (): void => {
    modal.classList.remove(OPEN_CLASS);
    modal.setAttribute('aria-hidden', 'true');
    window.removeEventListener('keydown', handleKeyDown);
    setBackdropState();
    lastActiveElement?.focus();
  };

  openTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => open(trigger as HTMLElement));
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
