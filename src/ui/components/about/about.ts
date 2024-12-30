import iconHelp from '@tabler/icons/outline/help.svg?raw';

import styles from './about.module.scss';

const about = () => {
  return `
    <button type="button" class="${styles.root} js-modal-open" title="About">
      <div class="${styles.icon}">${iconHelp}</div>
    </button>
  `;
};

export default about;
