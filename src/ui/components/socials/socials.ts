import iconGithub from '@tabler/icons/outline/brand-github.svg?raw';

import styles from './socials.module.scss';

const socials = () => {
  return `
    <div class="${styles.socials}">
      <a class="${styles.socialItem}" href="https://github.com/deeppines" target="_blank" title="GitHub">
        ${iconGithub}
      </a>
    </div>
  `;
};

export default socials;
