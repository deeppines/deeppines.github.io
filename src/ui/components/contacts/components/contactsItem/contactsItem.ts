import styles from './contactsItem.module.scss';

export interface ContactsItemProps {
  icon: string;
  text: string;
  title: string;
  url: string;
  target?: string;
}

const contactsItem = ({ icon, text, title, url, target }: ContactsItemProps): string => {
  return `
    <li class="${styles.root}">
      <div class="${styles.icon}">
        ${icon}
      </div>
      <a class="${styles.link}" href="${url}" title="${title}" target="${target}">
        ${text}
      </a>
    </li>
  `;
};

export default contactsItem;
