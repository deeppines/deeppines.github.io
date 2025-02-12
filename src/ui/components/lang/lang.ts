import styles from './lang.module.scss';

import { getLang } from '@/ui/utils/getLang';

const lang = () => {
  const initLang = getLang();

  return `
    <select class="${styles.root} js-lang-toggle"
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
