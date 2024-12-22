import avatar from '../avatar/avatar';

import styles from './profile.module.scss';

const profile = () => {
  return `
    <div class="${styles.profile}">
      <div class="${styles.header}">
        <div class="${styles.headerLeft}">
          <h1>Кирдяшкин Егор</h1>
          <p>Frontend developer</p>

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
