import styles from './switcher.module.scss';

const switcher = (IconOn: string, IconOff: string, classes?: string, title?: string) => {
  const theme = document.documentElement.getAttribute('data-theme');

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
