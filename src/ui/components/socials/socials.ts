import socialsItem from './components/socialsItem/socialsItem';

import { SOCIALS } from './socials.data';

import styles from './socials.module.scss';

const socials = () => {
  return `
    <div class="${styles.socials}">
      ${SOCIALS.map((social) => socialsItem(social)).join('')}
    </div>
  `;
};

export default socials;
