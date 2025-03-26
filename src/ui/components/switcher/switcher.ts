import styles from './switcher.module.scss';

import { getTheme } from '@/ui/utils/getTheme';

const switcher = (IconOn: string, IconOff: string, classes?: string, title?: string) => {
  const theme = getTheme();

  return `
    <label class="${styles.switcher}" title="${title}">
      <input class="${styles.switcherInput} ${classes}"
        type="checkbox" ${theme === 'dark' ? 'checked="checked"' : ''}/>
      <span class="${styles.switcherSlider}">
        <span>${IconOn}</span>
        <span>${IconOff}</span>
      </span>
    </label>
  `;
};

export default switcher;
