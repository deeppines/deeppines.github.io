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

const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  target.append(template.content.cloneNode(true));
};

const modal = ({ id, title, content, footer }: ModalProps): HTMLElement => {
  const safeId = escapeHtml(id);
  const titleId = `${safeId}-title`;
  const safeContent = content ? sanitizeRichHtml(content) : '';
  const safeFooter = footer ? sanitizeRichHtml(footer) : '';
  const root = document.createElement('div');
  const contentRoot = document.createElement('div');
  const header = document.createElement('div');
  const heading = document.createElement('h3');
  const closeButton = document.createElement('button');
  const body = document.createElement('div');
  const footerRoot = document.createElement('div');

  root.id = safeId;
  root.className = styles.root;
  root.setAttribute('aria-hidden', 'true');

  contentRoot.className = styles.content;
  contentRoot.setAttribute('role', 'dialog');
  contentRoot.setAttribute('aria-modal', 'true');
  contentRoot.setAttribute('aria-labelledby', titleId);
  contentRoot.tabIndex = -1;

  header.className = styles.header;
  heading.id = titleId;
  heading.textContent = title;

  closeButton.type = 'button';
  closeButton.className = `${styles.close} ${DOM_HOOKS.modalClose}`;
  closeButton.title = 'Close';
  appendHtml(closeButton, iconX);

  header.append(heading, closeButton);
  contentRoot.append(header);

  if (safeContent) {
    body.className = styles.body;
    body.innerHTML = safeContent;
    contentRoot.append(body);
  }

  if (safeFooter) {
    footerRoot.className = styles.footer;
    footerRoot.innerHTML = safeFooter;
    contentRoot.append(footerRoot);
  }

  root.append(contentRoot);
  return root;
};

export default modal;
