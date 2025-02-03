import helpIcon from '@tabler/icons/outline/help.svg?raw';

import styles from './aboutButton.module.scss';

const aboutButton = () => {
  return `
    <button type="button" class="${styles.root} js-modal-open" title="About">
      <div class="${styles.icon}">${helpIcon}</div>
    </button>
  `;
};

export default aboutButton;
