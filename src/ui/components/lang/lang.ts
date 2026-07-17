import styles from './lang.module.scss';

import { DOM_HOOKS } from '@/shared/domHooks';
import { getLang } from '@/ui/utils/getLang';

const lang = (): HTMLElement => {
  const initLang = getLang();
  const select = document.createElement('select');
  const optionRu = document.createElement('option');
  const optionEn = document.createElement('option');

  select.className = `${styles.root} ${DOM_HOOKS.langToggle}`;
  select.title = initLang === 'ru' ? 'Язык' : 'Language';
  select.value = initLang;

  optionRu.title = 'Russian';
  optionRu.value = 'ru';
  optionRu.textContent = 'RU';
  optionRu.selected = initLang === 'ru';

  optionEn.title = 'English';
  optionEn.value = 'en';
  optionEn.textContent = 'EN';
  optionEn.selected = initLang === 'en';

  select.append(optionRu, optionEn);
  return select;
};

export default lang;
