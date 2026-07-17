import helpIcon from '@tabler/icons/outline/help.svg?raw';

import { DOM_HOOKS } from '@/shared/domHooks';

import styles from './aboutButton.module.scss';

const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  target.append(template.content.cloneNode(true));
};

const aboutButton = (): HTMLElement => {
  const button = document.createElement('button');
  const icon = document.createElement('div');

  button.type = 'button';
  button.className = `${styles.root} ${DOM_HOOKS.modalOpen}`;
  button.title = 'About';

  icon.className = styles.icon;
  appendHtml(icon, helpIcon);

  button.append(icon);
  return button;
};

export default aboutButton;
