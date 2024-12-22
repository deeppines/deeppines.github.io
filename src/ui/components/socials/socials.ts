import iconGithub from '@tabler/icons/outline/brand-github.svg?raw';
import iconBrandLinkedin from '@tabler/icons/outline/brand-linkedin.svg?raw';

import styles from './socials.module.scss';

const socials = () => {
  return `
    <div class="${styles.socials}">
      <a class="${styles.socialItem}" href="https://github.com/deeppines" target="_blank" title="GitHub">
        ${iconGithub}
      </a>
      <a class="${styles.socialItem}" href="https://www.linkedin.com/in/egorkir/" target="_blank" title="Linkedin">
        ${iconBrandLinkedin}
      </a>
    </div>
  `;
};

export default socials;
