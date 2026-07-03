import styles from './avatar.module.scss';

import { DOM_HOOKS } from '@/shared/domHooks';
import type { Lang } from '@/types/common';
import { escapeHtml, sanitizeUrl } from '@/ui/utils/html';

const avatar = (lang: Lang, src?: string): string => {
  const buttonText = lang === 'en' ? 'Whaaat?' : 'Что тут?';
  const safeSrc = src ? sanitizeUrl(src) : '';

  return `
    <div class="${styles.root} ${DOM_HOOKS.hiddenRoot}">
      <img
        src="${safeSrc}"
        width="108"
        height="108"
        alt="Avatar"
      />

      <button type="button" class="${styles.button} ${DOM_HOOKS.hiddenButton} ${DOM_HOOKS.modalMeOpen}">
        ${escapeHtml(buttonText)}
      </button>
    </div>
  `;
};

export default avatar;
