import iconHelp from '@tabler/icons/outline/help.svg?raw';

import styles from './about.module.scss';

const about = () => {
  return `
    <button type="button" class="${styles.root}" title="About" onclick="showAbout()">
      <div class="${styles.icon}">${iconHelp}</div>
    </button>
  `;
};

export default about;
