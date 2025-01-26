import contactsItem from './components/contactsItem/contactsItem';

import styles from './contacts.module.scss';

import { MAIN } from '@/main.data';
import { getLang } from '@/ui/utils/getLang';

const contacts = () => {
  const currentLang = getLang();

  return `
    <ul class="${styles.contacts}">
      ${MAIN.contacts.map((contact) => contactsItem(currentLang === 'en' ? contact.en : contact.ru)).join('')}
    </ul>
  `;
};

export default contacts;
