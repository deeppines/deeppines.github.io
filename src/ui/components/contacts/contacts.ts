import contactsItem from './components/contactsItem/contactsItem';

import styles from './contacts.module.scss';

import { MAIN } from '@/main.data';

const contacts = () => {
  return `
    <ul class="${styles.contacts}">
      ${MAIN.contacts.map((contact) => contactsItem(contact)).join('')}
    </ul>
  `;
};

export default contacts;
