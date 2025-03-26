import styles from './avatar.module.scss';

import { getLang } from '@/ui/utils/getLang';

const avatar = (src?: string) => {
  const lang = getLang();
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
