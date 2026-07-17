import type { Lang } from '@/types/common';

import { DOM_HOOKS } from '@/shared/domHooks';

import { initHiddenButton } from './avatar/avatar.scripts';
import { initLang } from './lang/lang.scripts';
import { initModals } from './modal/modal.scripts';
import { initSnowflakes } from './snowflakes/snowflakes.scripts';
import { initTheme } from './theme/theme.scripts';

interface InitRuntimeOptions {
  onLangChange?: (lang: Lang) => void;
}

type RuntimeCleanup = () => void;

let runtimeCleanup: RuntimeCleanup | null = null;

export const initRuntime = (options: InitRuntimeOptions = {}): RuntimeCleanup => {
  runtimeCleanup?.();

  const cleanups: RuntimeCleanup[] = [
    initTheme(),
    initLang({ onChange: options.onLangChange }),
    initModals(),
    initSnowflakes({ toggleClass: DOM_HOOKS.snowflakesToggle }),
    initHiddenButton(),
  ];

  runtimeCleanup = () => {
    cleanups.forEach((cleanup) => cleanup());
    runtimeCleanup = null;
  };

  return runtimeCleanup;
};
