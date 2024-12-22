import contactsItem from './components/contactsItem/contactsItem';

import { CONTACTS } from './contacts.data';

import styles from './contacts.module.scss';

const contacts = () => {
  return `
    <ul class="${styles.contacts}">
      ${CONTACTS.map((contact) => contactsItem(contact)).join('')}
    </ul>
  `;
};

export default contacts;
