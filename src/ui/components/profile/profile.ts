import avatar from '../avatar/avatar';
import contacts from '../contacts/contacts';

import styles from './profile.module.scss';

export interface ProfileProps {
  name: string;
  who: string;
  description: string;
}

const profile = ({ name, who, description }: ProfileProps) => {
  return `
    <div class="${styles.profile}">
      <div class="${styles.header}">
        <div class="${styles.headerLeft}">
          <div class="${styles.headerInfo}">
            <h1>${name}</h1>
            <p>${who}</p>
          </div>

          ${contacts()}
        </div>
        <div class="${styles.headerRight}">
          ${avatar()}
        </div>
      </div>

      <div class="${styles.description}">
        ${description}
      </div>
    </div>
  `;
};

export default profile;
