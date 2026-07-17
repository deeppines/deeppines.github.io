/**
 * @jest-environment jsdom
 */

import { DATA_ATTRIBUTES, DOM_HOOKS, MODAL_IDS, STATE_CLASSES } from '@/shared/domHooks';

import { initModals } from './modal.scripts';

describe('modal runtime', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('closes by Escape and returns focus to trigger', () => {
    const openTrigger = document.createElement('button');
    openTrigger.type = 'button';
    openTrigger.className = DOM_HOOKS.modalOpen;
    openTrigger.textContent = 'Open modal';

    const modal = document.createElement('div');
    modal.id = MODAL_IDS.about;
    modal.setAttribute('aria-hidden', 'true');

    const dialog = document.createElement('div');
    dialog.setAttribute('role', 'dialog');
    dialog.tabIndex = -1;

    const closeTrigger = document.createElement('button');
    closeTrigger.type = 'button';
    closeTrigger.className = DOM_HOOKS.modalClose;
    closeTrigger.textContent = 'Close';

    dialog.append(closeTrigger);
    modal.append(dialog);
    document.body.append(openTrigger, modal);

    initModals();

    openTrigger.focus();
    openTrigger.click();

    expect(modal.classList.contains(STATE_CLASSES.open)).toBe(true);
    expect(document.body.dataset[DATA_ATTRIBUTES.backdrop]).toBe('true');

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(modal.classList.contains(STATE_CLASSES.open)).toBe(false);
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(document.body.dataset[DATA_ATTRIBUTES.backdrop]).toBe('false');
    expect(document.activeElement).toBe(openTrigger);
  });

  test('cleanup removes listeners and resets open modal state', () => {
    const openTrigger = document.createElement('button');
    openTrigger.type = 'button';
    openTrigger.className = DOM_HOOKS.modalOpen;
    openTrigger.textContent = 'Open modal';

    const modal = document.createElement('div');
    modal.id = MODAL_IDS.about;
    modal.setAttribute('aria-hidden', 'true');

    const dialog = document.createElement('div');
    dialog.setAttribute('role', 'dialog');
    dialog.tabIndex = -1;

    const closeTrigger = document.createElement('button');
    closeTrigger.type = 'button';
    closeTrigger.className = DOM_HOOKS.modalClose;
    closeTrigger.textContent = 'Close';

    dialog.append(closeTrigger);
    modal.append(dialog);
    document.body.append(openTrigger, modal);

    const cleanup = initModals();
    openTrigger.click();
    expect(modal.classList.contains(STATE_CLASSES.open)).toBe(true);

    cleanup();

    expect(modal.classList.contains(STATE_CLASSES.open)).toBe(false);
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(document.body.dataset[DATA_ATTRIBUTES.backdrop]).toBe('false');
  });
});
