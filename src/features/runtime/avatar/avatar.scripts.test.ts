/**
 * @jest-environment jsdom
 */

import { DOM_HOOKS } from '@/shared/domHooks';

import { initHiddenButton } from './avatar.scripts';

describe('avatar hidden button runtime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    document.body.innerHTML = '';
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  const createAvatarRoot = (): { root: HTMLElement; button: HTMLElement } => {
    const root = document.createElement('div');
    const button = document.createElement('button');

    root.className = DOM_HOOKS.hiddenRoot;
    button.className = DOM_HOOKS.hiddenButton;
    button.style.display = 'none';
    root.append(button);
    document.body.append(root);

    return { root, button };
  };

  test('shows button on hover and hides it after visible timer', () => {
    const { root, button } = createAvatarRoot();
    initHiddenButton({ hoverTimer: 100, visibleTimer: 200 });

    root.dispatchEvent(new Event('mouseenter'));
    jest.advanceTimersByTime(100);
    expect(button.style.display).toBe('block');

    jest.advanceTimersByTime(200);
    expect(button.style.display).toBe('none');
  });

  test('hides button on mouseleave even after it was shown', () => {
    const { root, button } = createAvatarRoot();
    initHiddenButton({ hoverTimer: 100, visibleTimer: 200 });

    root.dispatchEvent(new Event('mouseenter'));
    jest.advanceTimersByTime(100);
    expect(button.style.display).toBe('block');

    root.dispatchEvent(new Event('mouseleave'));
    expect(button.style.display).toBe('none');

    jest.advanceTimersByTime(500);
    expect(button.style.display).toBe('none');
  });
});
