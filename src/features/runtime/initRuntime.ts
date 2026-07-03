import { initHiddenButton } from './hiddenButton';
import { initLang } from './lang';
import { initModals } from './modal';
import { initSnowflakes } from './snowflakes';
import { initTheme } from './theme';

export const initRuntime = (): void => {
  initTheme();
  initLang();
  initModals();
  initSnowflakes({ toggleClass: 'js-snowflakes-toggle' });
  initHiddenButton();
};
