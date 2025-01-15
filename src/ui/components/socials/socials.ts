import socialsItem from './components/socialsItem/socialsItem';

import styles from './socials.module.scss';

import { MAIN } from '@/main.data';

const socials = () => {
  return `
    <div class="${styles.socials}">
      ${MAIN.socials.map((social) => socialsItem(social)).join('')}
    </div>
  `;
};

export default socials;
