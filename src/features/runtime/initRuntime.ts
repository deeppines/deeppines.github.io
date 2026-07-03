import { initHiddenButton } from '../hiddenButton/hiddenButton.scripts';
import { initTheme } from '../theme/theme.scripts';

import type { Lang } from '@/types/common';
import { initLang } from '@/ui/components/lang/lang.scripts';
import { initModals } from '@/ui/components/modal/modal.scripts';
import { initSnowflakes } from '@/ui/components/snowflake/snowflakes.scripts';

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
