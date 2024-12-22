import iconMail from '@tabler/icons/outline/mail.svg?raw';

import styles from './contacts.module.scss';

const contacts = () => {
  return `
    <ul class="${styles.contacts}">
      <li>
        <div class="${styles.contact}">
          <div class="${styles.contactIcon}">
            ${iconMail}
          </div>
          <a class="${styles.contactLink}" href="mailto:egorkir41@gmail.com" title="Email">
            Email
          </a>
        </div>
      </li>
    </ul>
  `;
};

export default contacts;
