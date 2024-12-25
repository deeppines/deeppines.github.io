import iconHelp from '@tabler/icons/outline/help.svg?raw';

import styles from './about.module.scss';

const about = () => {
  return `
    <button type="button" class="${styles.root}">
      <div class="${styles.icon}">${iconHelp}</div>
    </button>
  `;
};

export default about;
