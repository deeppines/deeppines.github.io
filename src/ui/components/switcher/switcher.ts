import styles from './switcher.module.scss';

const switcher = (classes: string, IconOn: string, IconOff: string) => {
  const theme = document.documentElement.getAttribute('data-theme');

  return `
    <label class="${styles.switcher}" title="Toggle theme">
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
