import { initHiddenButton } from './hiddenButton';
import { initLang } from './lang';
import { initModals } from './modal';
import { initSnowflakes } from './snowflakes';
import { initTheme } from './theme';

import type { Lang } from '@/types/common';

interface InitRuntimeOptions {
  onLangChange?: (lang: Lang) => void;
}

export const initRuntime = (options: InitRuntimeOptions = {}): void => {
  initTheme();
  initLang({ onChange: options.onLangChange });
  initModals();
  initSnowflakes({ toggleClass: 'js-snowflakes-toggle' });
  initHiddenButton();
};
