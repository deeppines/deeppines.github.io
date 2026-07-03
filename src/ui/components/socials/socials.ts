import type { SocialsItemProps } from './components/socialsItem/socialsItem';
import socialsItem from './components/socialsItem/socialsItem';

import styles from './socials.module.scss';

const socials = (items: SocialsItemProps[]): string => {
  return `
    <div class="${styles.socials}">
      ${items.map((item) => socialsItem(item)).join('')}
    </div>
  `;
};

export default socials;
