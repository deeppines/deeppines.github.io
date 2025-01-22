import iconMoon from '@tabler/icons/outline/moon.svg?raw';
import IconSun from '@tabler/icons/outline/sun.svg?raw';

import styles from './switcher.module.scss';

const switcher = () => {
  const theme = document.documentElement.getAttribute('data-theme');

  return `
    <label class="${styles.switcher}" title="Toggle theme">
      <input class="${styles.switcherInput} js-theme-toggle"
        type="checkbox" ${theme === 'dark' ? 'checked="checked"' : ''}/>
      <span class="${styles.switcherSlider}">
        <span>${iconMoon}</span>
        <span>${IconSun}</span>
      </span>
    </label>
  `;
};

export default switcher;
