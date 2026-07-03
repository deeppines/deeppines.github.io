import type { ContactsItemProps } from './components/contactsItem/contactsItem';
import contactsItem from './components/contactsItem/contactsItem';

import styles from './contacts.module.scss';

const contacts = (items: ContactsItemProps[]): string => {
  return `
    <ul class="${styles.contacts}">
      ${items.map((item) => contactsItem(item)).join('')}
    </ul>
  `;
};

export default contacts;
