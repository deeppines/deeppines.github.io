import iconGithub from '@tabler/icons/outline/brand-github.svg?raw';
import iconTelegram from '@tabler/icons/outline/brand-telegram.svg?raw';

import styles from './socials.module.scss';

const socials = () => {
  return `
    <div class="${styles.socials}">
      <a class="${styles.socialItem}" href="https://github.com/deeppines" target="_blank">
        ${iconGithub}
      </a>
      <a class="${styles.socialItem}" href="https://t.me/deeppines" target="_blank">
        ${iconTelegram}
      </a>
    </div>
  `;
};

export default socials;
