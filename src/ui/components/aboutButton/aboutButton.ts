import helpIcon from '@tabler/icons/outline/help.svg?raw';

import styles from './aboutButton.module.scss';

import { DOM_HOOKS } from '@/shared/domHooks';

const aboutButton = () => {
  return `
    <button type="button" class="${styles.root} ${DOM_HOOKS.modalOpen}" title="About">
      <div class="${styles.icon}">${helpIcon}</div>
    </button>
  `;
};

export default aboutButton;
