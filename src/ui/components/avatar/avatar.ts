import type { Lang } from '@/types/common';

import { DOM_HOOKS } from '@/shared/domHooks';

import { sanitizeUrl } from '@/ui/utils/html/html';

import styles from './avatar.module.scss';

const avatar = (lang: Lang, src?: string): HTMLElement => {
  const buttonText = lang === 'en' ? 'Whaaat?' : 'Что тут?';
  const safeSrc = src ? sanitizeUrl(src) : '';
  const root = document.createElement('div');
  const image = document.createElement('img');
  const button = document.createElement('button');

  root.className = `${styles.root} ${DOM_HOOKS.hiddenRoot}`;

  image.src = safeSrc;
  image.width = 108;
  image.height = 108;
  image.alt = 'Avatar';

  button.type = 'button';
  button.className = `${styles.button} ${DOM_HOOKS.hiddenButton} ${DOM_HOOKS.modalMeOpen}`;
  button.textContent = buttonText;

  root.append(image, button);
  return root;
};

export default avatar;
