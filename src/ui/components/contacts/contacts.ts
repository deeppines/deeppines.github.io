import type { ContactsItemProps } from '@/ui/elements/contactsItem/contactsItem';
import contactsItem from '@/ui/elements/contactsItem/contactsItem';

import styles from './contacts.module.scss';

const contacts = (items: ContactsItemProps[]): HTMLElement => {
  const root = document.createElement('ul');
  root.className = styles.contacts;

  items.forEach((item) => {
    root.append(contactsItem(item));
  });

  return root;
};

export default contacts;
