import avatar from '../avatar/avatar';
import contacts from '../contacts/contacts';

import styles from './profile.module.scss';

const profile = () => {
  return `
    <div class="${styles.profile}">
      <div class="${styles.header}">
        <div class="${styles.headerLeft}">
          <div>
            <h1>Кирдяшкин Егор</h1>
            <p>Frontend developer</p>
          </div>

          ${contacts()}
        </div>
        <div class="${styles.headerRight}">
          ${avatar()}
        </div>
      </div>

      <div class="${styles.description}">
        <p></p>
      </div>
    </div>
  `;
};

export default profile;
