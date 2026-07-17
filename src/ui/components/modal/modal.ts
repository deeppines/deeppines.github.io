import iconX from '@tabler/icons/outline/x.svg?raw';

import type { ModalContentBlock, ModalData } from '@/types/content';

import { DOM_HOOKS } from '@/shared/domHooks';

import { appendHtml } from '@/ui/utils/appendHtml/appendHtml';
import { getLang } from '@/ui/utils/getLang/getLang';

import socials from '../socials/socials';

import styles from './modal.module.scss';

import { UI_TEXT } from '@/ui/content/uiText';

export type ModalProps = ModalData;

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

    const linksList = socials(block.items);

    target.append(linksList);
  });
};

const modal = ({ id, title, content, footer }: ModalProps): HTMLElement => {
  const lang = getLang();
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
  closeButton.title = UI_TEXT[lang].modalCloseTitle;
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
