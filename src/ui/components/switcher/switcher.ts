import { getTheme } from '@/ui/utils/getTheme';

import styles from './switcher.module.scss';

const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  target.append(template.content.cloneNode(true));
};

const switcher = (IconOn: string, IconOff: string, classes?: string, title?: string): HTMLElement => {
  const theme = getTheme();
  const label = document.createElement('label');
  const input = document.createElement('input');
  const slider = document.createElement('span');
  const iconOn = document.createElement('span');
  const iconOff = document.createElement('span');

  label.className = styles.switcher;
  if (title) {
    label.title = title;
  }

  input.className = `${styles.switcherInput}${classes ? ` ${classes}` : ''}`;
  input.type = 'checkbox';
  input.checked = theme === 'dark';

  slider.className = styles.switcherSlider;

  appendHtml(iconOn, IconOn);
  appendHtml(iconOff, IconOff);

  slider.append(iconOn, iconOff);
  label.append(input, slider);

  return label;
};

export default switcher;
