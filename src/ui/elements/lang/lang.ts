import { DOM_HOOKS } from '@/shared/domHooks';

import { getLang } from '@/ui/utils/getLang/getLang';

import styles from './lang.module.scss';

import { UI_TEXT } from '@/ui/content/uiText';

const lang = (): HTMLElement => {
  const initLang = getLang();
  const text = UI_TEXT[initLang];
  const select = document.createElement('select');
  const optionRu = document.createElement('option');
  const optionEn = document.createElement('option');

  select.className = `${styles.root} ${DOM_HOOKS.langToggle}`;
  select.title = text.langSelectTitle;
  select.value = initLang;

  optionRu.title = text.langOptionRuTitle;
  optionRu.value = 'ru';
  optionRu.textContent = 'RU';
  optionRu.selected = initLang === 'ru';

  optionEn.title = text.langOptionEnTitle;
  optionEn.value = 'en';
  optionEn.textContent = 'EN';
  optionEn.selected = initLang === 'en';

  select.append(optionRu, optionEn);
  return select;
};

export default lang;
