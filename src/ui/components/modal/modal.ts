import iconX from '@tabler/icons/outline/x.svg?raw';

import styles from './modal.module.scss';

import { escapeHtml, sanitizeRichHtml } from '@/ui/utils/html';

export interface ModalProps {
  id: string;
  title: string;
  content?: string;
  footer?: string;
}

const modal = ({ id, title, content, footer }: ModalProps) => {
  const safeId = escapeHtml(id);
  const safeTitle = escapeHtml(title);
  const safeContent = content ? sanitizeRichHtml(content) : '';
  const safeFooter = footer ? sanitizeRichHtml(footer) : '';

  return `
    <div id="${safeId}" class="${styles.root}">
      <div class="${styles.content}">
        <div class="${styles.header}">
          <h3>${safeTitle}</h3>
          <button type="button" class="${styles.close} js-modal-close" title="Close">
            ${iconX}
          </button>
        </div>
        ${safeContent ? `<div class="${styles.body}">${safeContent}</div>` : ''}
        ${safeFooter ? `<div class="${styles.footer}">${safeFooter}</div>` : ''}
      </div>
    </div>
  `;
};

export default modal;
