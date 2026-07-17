/**
 * @jest-environment jsdom
 */

import { DOM_HOOKS } from '@/shared/domHooks';

import { initRuntime } from './initRuntime';

describe('initRuntime lifecycle', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });

  test('re-init cleans previous listeners before binding new ones', () => {
    const langToggle = document.createElement('select');
    langToggle.className = DOM_HOOKS.langToggle;

    const ruOption = document.createElement('option');
    ruOption.value = 'ru';
    ruOption.textContent = 'RU';

    const enOption = document.createElement('option');
    enOption.value = 'en';
    enOption.textContent = 'EN';

    langToggle.append(ruOption, enOption);
    document.body.append(langToggle);

    const firstOnChange = jest.fn();
    const secondOnChange = jest.fn();

    initRuntime({ onLangChange: firstOnChange });
    initRuntime({ onLangChange: secondOnChange });

    langToggle.value = 'en';
    langToggle.dispatchEvent(new Event('change', { bubbles: true }));

    expect(firstOnChange).not.toHaveBeenCalled();
    expect(secondOnChange).toHaveBeenCalledWith('en');
  });
});
