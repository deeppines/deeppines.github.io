import iconX from '@tabler/icons/outline/x.svg?raw';

import styles from './modal.module.scss';

export interface ModalProps {
  id: string;
  title: string;
  content?: string;
  footer?: string;
}

const modal = ({ id, title, content, footer }: ModalProps) => {
  return `
    <div id="${id}" class="${styles.root}">
      <div class="${styles.content}">
        <div class="${styles.header}">
          <h3>${title}</h3>
          <button type="button" class="${styles.close} js-modal-close" title="Close">
            ${iconX}
          </button>
        </div>
        ${content ? `<div class="${styles.body}">${content}</div>` : ''}
        ${footer ? `<div class="${styles.footer}">${footer}</div>` : ''}
      </div>
    </div>
  `;
};

export default modal;
