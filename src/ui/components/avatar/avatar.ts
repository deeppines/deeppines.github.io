import type { Lang } from '@/types/common';

import { DOM_HOOKS } from '@/shared/domHooks';

import { sanitizeUrl } from '@/ui/utils/html/html';

import styles from './avatar.module.scss';

import { UI_TEXT } from '@/ui/content/uiText';

const avatar = (lang: Lang, src?: string): HTMLElement => {
  const text = UI_TEXT[lang];
  const safeSrc = src ? sanitizeUrl(src) : '';
  const root = document.createElement('div');
  const image = document.createElement('img');
  const button = document.createElement('button');

  root.className = `${styles.root} ${DOM_HOOKS.hiddenRoot}`;

  image.src = safeSrc;
  image.width = 108;
  image.height = 108;
  image.alt = text.avatarImageAlt;

  button.type = 'button';
  button.className = `${styles.button} ${DOM_HOOKS.hiddenButton} ${DOM_HOOKS.modalMeOpen}`;
  button.textContent = text.avatarButtonText;

  root.append(image, button);
  return root;
};

export default avatar;
