import iconX from '@tabler/icons/outline/x.svg?raw';

import { DOM_HOOKS } from '@/shared/domHooks';

import { sanitizeUrl } from '@/ui/utils/html/html';

import styles from './modal.module.scss';

interface ModalParagraphBlock {
  type: 'paragraph';
  text: string;
}

interface ModalListBlock {
  type: 'list';
  title?: string;
  items: string[];
}

interface ModalLinksBlock {
  type: 'links';
  items: {
    title: string;
    url: string;
  }[];
}

export type ModalContentBlock = ModalParagraphBlock | ModalListBlock | ModalLinksBlock;

export interface ModalProps {
  id: string;
  title: string;
  content?: ModalContentBlock[];
  footer?: ModalContentBlock[];
}

const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  target.append(template.content.cloneNode(true));
};

const renderContentBlocks = (target: HTMLElement, blocks: ModalContentBlock[]): void => {
  blocks.forEach((block) => {
    if (block.type === 'paragraph') {
      const paragraph = document.createElement('p');
      paragraph.textContent = block.text;
      target.append(paragraph);
      return;
    }

    if (block.type === 'list') {
      if (block.title) {
        const title = document.createElement('p');
        title.textContent = block.title;
        target.append(title);
      }

      const list = document.createElement('ul');
      block.items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
      });
      target.append(list);
      return;
    }

    const linksList = document.createElement('ul');
    block.items.forEach((item) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = sanitizeUrl(item.url);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = item.title;
      link.textContent = item.title;
      listItem.append(link);
      linksList.append(listItem);
    });
    target.append(linksList);
  });
};

const modal = ({ id, title, content, footer }: ModalProps): HTMLElement => {
  const titleId = `${id}-title`;
  const root = document.createElement('div');
  const contentRoot = document.createElement('div');
  const header = document.createElement('div');
  const heading = document.createElement('h3');
  const closeButton = document.createElement('button');
  const body = document.createElement('div');
  const footerRoot = document.createElement('div');

  root.id = id;
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

  if (content?.length) {
    body.className = styles.body;
    renderContentBlocks(body, content);
    contentRoot.append(body);
  }

  if (footer?.length) {
    footerRoot.className = styles.footer;
    renderContentBlocks(footerRoot, footer);
    contentRoot.append(footerRoot);
  }

  root.append(contentRoot);
  return root;
};

export default modal;
