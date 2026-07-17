import type { SocialsItemProps } from '@/ui/elements/socialsItem/socialsItem';
import socialsItem from '@/ui/elements/socialsItem/socialsItem';

import styles from './socials.module.scss';

const socials = (items: SocialsItemProps[]): HTMLElement => {
  const root = document.createElement('div');
  root.className = styles.socials;

  items.forEach((item) => {
    root.append(socialsItem(item));
  });

  return root;
};

export default socials;
