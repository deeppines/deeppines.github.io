import styles from './socialsItem.module.scss';

export interface SocialsItemProps {
  title: string;
  url: string;
  icon: string;
}

const socialsItem = ({ icon, title, url }: SocialsItemProps) => {
  return `
    <a class="${styles.root}" href="${url}" target="_blank" title="${title}">
      ${icon}
    </a>
  `;
};

export default socialsItem;
