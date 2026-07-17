import { DATA_ATTRIBUTES, DOM_HOOKS, MODAL_IDS, STATE_CLASSES } from '@/shared/domHooks';

interface ModalConfig {
  id: string;
  openTriggerClass: string;
}

type RuntimeCleanup = () => void;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const setBackdropState = (): void => {
  const hasOpenedModal = document.querySelector(`.${STATE_CLASSES.open}`) !== null;
  document.body.dataset[DATA_ATTRIBUTES.backdrop] = String(hasOpenedModal);
};

const initSingleModal = ({ id, openTriggerClass }: ModalConfig): RuntimeCleanup => {
  const modal = document.getElementById(id);

  if (!modal) {
    return () => {};
  }

  const openTriggers = document.querySelectorAll(`.${openTriggerClass}`);
  const closeTriggers = modal.querySelectorAll(`.${DOM_HOOKS.modalClose}`);
  const dialog = modal.querySelector<HTMLElement>('[role="dialog"]');
  const modalCleanup: RuntimeCleanup[] = [];
  let lastActiveElement: HTMLElement | null = null;

  const getFocusableElements = (): HTMLElement[] => {
    const root = dialog ?? modal;
    return [...root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)].filter(
      (item) => !item.hasAttribute('disabled') && item.tabIndex !== -1
    );
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (!modal.classList.contains(STATE_CLASSES.open)) {
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
    modal.classList.add(STATE_CLASSES.open);
    modal.setAttribute('aria-hidden', 'false');
    window.addEventListener('keydown', handleKeyDown);
    setBackdropState();

    const focusableElements = getFocusableElements();
    const initialFocusTarget = focusableElements[0] ?? dialog ?? modal;
    initialFocusTarget.focus();
  };

  const close = (): void => {
    modal.classList.remove(STATE_CLASSES.open);
    modal.setAttribute('aria-hidden', 'true');
    window.removeEventListener('keydown', handleKeyDown);
    setBackdropState();
    lastActiveElement?.focus();
  };

  openTriggers.forEach((trigger) => {
    const handleOpen = (): void => open(trigger as HTMLElement);
    trigger.addEventListener('click', handleOpen);
    modalCleanup.push(() => {
      trigger.removeEventListener('click', handleOpen);
    });
  });

  closeTriggers.forEach((trigger) => {
    const handleClose = (): void => close();
    trigger.addEventListener('click', handleClose);
    modalCleanup.push(() => {
      trigger.removeEventListener('click', handleClose);
    });
  });

  const handleBackdropClick = (event: Event): void => {
    if (event.target === modal) {
      close();
    }
  };

  modal.addEventListener('click', handleBackdropClick);
  modalCleanup.push(() => {
    modal.removeEventListener('click', handleBackdropClick);
    window.removeEventListener('keydown', handleKeyDown);
    modal.classList.remove(STATE_CLASSES.open);
    modal.setAttribute('aria-hidden', 'true');
    setBackdropState();
  });

  return () => {
    modalCleanup.forEach((cleanup) => cleanup());
  };
};

export const initModals = (): RuntimeCleanup => {
  const cleanups = [
    initSingleModal({ id: MODAL_IDS.about, openTriggerClass: DOM_HOOKS.modalOpen }),
    initSingleModal({ id: MODAL_IDS.me, openTriggerClass: DOM_HOOKS.modalMeOpen }),
  ];

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};
