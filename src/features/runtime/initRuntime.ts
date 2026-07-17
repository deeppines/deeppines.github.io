import type { Lang } from '@/types/common';

import { DOM_HOOKS } from '@/shared/domHooks';

import { initHiddenButton } from '@/ui/components/avatar/avatar.scripts';

import { initLang } from './lang.scripts';
import { initModals } from './modal.scripts';
import { initSnowflakes } from './snowflakes.scripts';
import { initTheme } from './theme.scripts';

interface InitRuntimeOptions {
  onLangChange?: (lang: Lang) => void;
}

export const initRuntime = (options: InitRuntimeOptions = {}): void => {
  initTheme();
  initLang({ onChange: options.onLangChange });
  initModals();
  initSnowflakes({ toggleClass: DOM_HOOKS.snowflakesToggle });
  initHiddenButton();
};
