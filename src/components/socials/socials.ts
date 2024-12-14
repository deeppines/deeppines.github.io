import iconGithub from '@tabler/icons/outline/brand-github.svg';
import iconTelegram from '@tabler/icons/outline/brand-telegram.svg';

import styles from './socials.module.scss';

const socials = () => {
  return `
    <div class="${styles.socials}">
      <a class="${styles.socialItem}" href="https://github.com/deeppines" target="_blank">
        <img src=${iconGithub} alt="GitHub" />
      </a>
      <a class="${styles.socialItem}" href="https://t.me/deeppines" target="_blank">
        <img src=${iconTelegram} alt="Telegram" />
      </a>
    </div>
  `;
};

export default socials;
