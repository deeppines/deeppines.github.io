import iconX from '@tabler/icons/outline/x.svg?raw';

import styles from './modal.module.scss';

import { DOM_HOOKS } from '@/shared/domHooks';
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
  const titleId = `${safeId}-title`;
  const safeContent = content ? sanitizeRichHtml(content) : '';
  const safeFooter = footer ? sanitizeRichHtml(footer) : '';

  return `
    <div id="${safeId}" class="${styles.root}" aria-hidden="true">
      <div class="${styles.content}" role="dialog" aria-modal="true" aria-labelledby="${titleId}" tabindex="-1">
        <div class="${styles.header}">
          <h3 id="${titleId}">${safeTitle}</h3>
          <button type="button" class="${styles.close} ${DOM_HOOKS.modalClose}" title="Close">
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
