import styles from './contactsItem.module.scss';

export interface ContactsItemProps {
  icon: string;
  text: string;
  title: string;
  url: string;
}

const contactsItem = ({ icon, text, title, url }: ContactsItemProps): string => {
  return `
    <div class="${styles.root}">
      <div class="${styles.icon}">
        ${icon}
      </div>
      <a class="${styles.link}" href="${url}" title="${title}">
        ${text}
      </a>
    </div>
  `;
};

export default contactsItem;
