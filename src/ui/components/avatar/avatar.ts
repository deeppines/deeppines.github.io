import styles from './avatar.module.scss';

import type { Lang } from '@/types/common';
import { escapeHtml, sanitizeUrl } from '@/ui/utils/html';

const avatar = (lang: Lang, src?: string): string => {
  const buttonText = lang === 'en' ? 'Whaaat?' : 'Что тут?';
  const safeSrc = src ? sanitizeUrl(src) : '';

  return `
    <div class="${styles.root} js-hidden-root">
      <img
        src="${safeSrc}"
        width="108"
        height="108"
        alt="Avatar"
      />

      <button type="button" class="${styles.button} js-hidden-btn js-modal-me-open">
        ${escapeHtml(buttonText)}
      </button>
    </div>
  `;
};

export default avatar;
