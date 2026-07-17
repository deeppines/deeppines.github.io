import type { ContactsItemData } from '@/types/content';

import { appendHtml } from '@/ui/utils/appendHtml/appendHtml';
import { sanitizeTarget, sanitizeUrl } from '@/ui/utils/html/html';

import styles from './contactsItem.module.scss';

export type ContactsItemProps = ContactsItemData;

const contactsItem = ({ icon, text, title, url, target }: ContactsItemProps): HTMLElement => {
  const safeUrl = sanitizeUrl(url);
  const safeTarget = sanitizeTarget(target);
  const root = document.createElement('li');
  const iconContainer = document.createElement('div');
  const link = document.createElement('a');

  root.className = styles.root;
  iconContainer.className = styles.icon;
  appendHtml(iconContainer, icon);

  link.className = styles.link;
  link.href = safeUrl;
  link.title = title;
  link.textContent = text;
  if (safeTarget) {
    link.target = safeTarget;
    if (safeTarget === '_blank') {
      link.rel = 'noopener noreferrer';
    }
  }

  root.append(iconContainer, link);
  return root;
};

export default contactsItem;
