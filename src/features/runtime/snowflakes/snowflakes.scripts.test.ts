/**
 * @jest-environment jsdom
 */

import { DOM_HOOKS } from '@/shared/domHooks';

import { isWinter } from '@/ui/utils/isWinter/isWinter';
import { prefersReducedMotion } from '@/ui/utils/prefersReducedMotion/prefersReducedMotion';

import { initSnowflakes } from './snowflakes.scripts';

jest.mock('@/ui/utils/isWinter/isWinter', () => ({
  isWinter: jest.fn(),
}));

jest.mock('@/ui/utils/prefersReducedMotion/prefersReducedMotion', () => ({
  prefersReducedMotion: jest.fn(),
}));

describe('snowflakes runtime', () => {
  const isWinterMock = isWinter as jest.MockedFunction<typeof isWinter>;
  const prefersReducedMotionMock = prefersReducedMotion as jest.MockedFunction<
    typeof prefersReducedMotion
  >;
  const requestAnimationFrameMock = jest.fn<number, [FrameRequestCallback]>(() => 1);
  const cancelAnimationFrameMock = jest.fn<void, [number]>();
  const setTimeoutMock = jest.fn<number, [TimerHandler, number?]>(() => 1);
  const clearTimeoutMock = jest.fn<void, [number]>();

  beforeEach(() => {
    document.body.innerHTML = '';
    isWinterMock.mockReturnValue(true);
    prefersReducedMotionMock.mockReturnValue(false);

    requestAnimationFrameMock.mockClear();
    cancelAnimationFrameMock.mockClear();
    setTimeoutMock.mockClear();
    clearTimeoutMock.mockClear();

    window.requestAnimationFrame = requestAnimationFrameMock;
    window.cancelAnimationFrame = cancelAnimationFrameMock;
    window.setTimeout = setTimeoutMock as unknown as typeof window.setTimeout;
    window.clearTimeout = clearTimeoutMock as unknown as typeof window.clearTimeout;
  });

  test('does not init when season is not winter', () => {
    isWinterMock.mockReturnValue(false);

    const cleanup = initSnowflakes({ toggleClass: DOM_HOOKS.snowflakesToggle });

    expect(document.querySelector('.snowflakesContainer')).toBeNull();
    expect(requestAnimationFrameMock).not.toHaveBeenCalled();
    cleanup();
  });

  test('does not init when reduced motion is enabled', () => {
    prefersReducedMotionMock.mockReturnValue(true);

    const cleanup = initSnowflakes({ toggleClass: DOM_HOOKS.snowflakesToggle });

    expect(document.querySelector('.snowflakesContainer')).toBeNull();
    expect(requestAnimationFrameMock).not.toHaveBeenCalled();
    cleanup();
  });

  test('initializes, toggles animation and cleans listeners', () => {
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.className = DOM_HOOKS.snowflakesToggle;
    document.body.append(toggle);

    const cleanup = initSnowflakes({ toggleClass: DOM_HOOKS.snowflakesToggle });

    expect(document.querySelector('.snowflakesContainer')).not.toBeNull();
    expect(requestAnimationFrameMock).toHaveBeenCalledTimes(1);

    toggle.dispatchEvent(new Event('change', { bubbles: true }));
    expect(cancelAnimationFrameMock).toHaveBeenCalledTimes(1);

    toggle.dispatchEvent(new Event('change', { bubbles: true }));
    expect(requestAnimationFrameMock).toHaveBeenCalledTimes(2);

    cleanup();

    const rafCallsBefore = requestAnimationFrameMock.mock.calls.length;
    const cancelCallsBefore = cancelAnimationFrameMock.mock.calls.length;
    toggle.dispatchEvent(new Event('change', { bubbles: true }));

    expect(requestAnimationFrameMock).toHaveBeenCalledTimes(rafCallsBefore);
    expect(cancelAnimationFrameMock).toHaveBeenCalledTimes(cancelCallsBefore);
  });
});
