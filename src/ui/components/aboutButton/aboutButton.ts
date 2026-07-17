import helpIcon from '@tabler/icons/outline/help.svg?raw';

import { DOM_HOOKS } from '@/shared/domHooks';

import { appendHtml } from '@/ui/utils/appendHtml/appendHtml';
import { getLang } from '@/ui/utils/getLang/getLang';

import styles from './aboutButton.module.scss';

import { UI_TEXT } from '@/ui/content/uiText';

const aboutButton = (): HTMLElement => {
  const lang = getLang();
  const button = document.createElement('button');
  const icon = document.createElement('div');

  button.type = 'button';
  button.className = `${styles.root} ${DOM_HOOKS.modalOpen}`;
  button.title = UI_TEXT[lang].aboutButtonTitle;

  icon.className = styles.icon;
  appendHtml(icon, helpIcon);

  button.append(icon);
  return button;
};

export default aboutButton;
