import deskButton from './components/deskButton/deskButton';

import { DESK_BUTTONS } from './desk.data';

import styles from './desk.module.scss';

const desk = () => {
  return `
    <div class="${styles.root}">
      ${DESK_BUTTONS.map((button) => deskButton(button)).join('')}
    </div>
  `;
};

export default desk;
