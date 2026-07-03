import styles from './avatar.module.scss';

import type { Lang } from '@/types/common';

const avatar = (lang: Lang, src?: string): string => {
  const buttonText = lang === 'en' ? 'Whaaat?' : 'Что тут?';

  return `
    <div class="${styles.root} js-hidden-root">
      <img
        src="${src}"
        width="108"
        height="108"
        alt="Avatar"
      />

      <button type="button" class="${styles.button} js-hidden-btn js-modal-me-open">
        ${buttonText}
      </button>
    </div>
  `;
};

export default avatar;
