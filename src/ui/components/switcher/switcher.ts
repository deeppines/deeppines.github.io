import iconMoon from '@tabler/icons/outline/moon.svg?raw';
import IconSun from '@tabler/icons/outline/sun.svg?raw';

import styles from './switcher.module.scss';

const switcher = () => {
  return `
    <label class="${styles.switcher}">
      <input class="${styles.switcherInput}" type="checkbox" title="theme" />
      <span class="${styles.switcherSlider}">
        <span>${iconMoon}</span>
        <span>${IconSun}</span>
      </span>
    </label>
  `;
};

export default switcher;
