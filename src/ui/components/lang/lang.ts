import styles from './lang.module.scss';

import { DOM_HOOKS } from '@/shared/domHooks';
import { getLang } from '@/ui/utils/getLang';

const lang = () => {
  const initLang = getLang();

  return `
    <select class="${styles.root} ${DOM_HOOKS.langToggle}"
      ${initLang === 'ru' ? 'title="Язык"' : 'title="Language"'}
      value="${initLang}"
    >
      <option title="Russian" value="ru" ${initLang === 'ru' ? 'selected="selected"' : ''}>
        RU
      </option>
      <option title="English" value="en" ${initLang === 'en' ? 'selected="selected"' : ''}>
        EN
      </option>
    </select>
  `;
};

export default lang;
