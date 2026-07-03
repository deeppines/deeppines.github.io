import styles from './contactsItem.module.scss';

import { escapeHtml, sanitizeTarget, sanitizeUrl } from '@/ui/utils/html';

export interface ContactsItemProps {
  icon: string;
  text: string;
  title: string;
  url: string;
  target?: string;
}

const contactsItem = ({ icon, text, title, url, target }: ContactsItemProps): string => {
  const safeUrl = sanitizeUrl(url);
  const safeTarget = sanitizeTarget(target);
  const safeRel = safeTarget === '_blank' ? ' rel="noopener noreferrer"' : '';

  return `
    <li class="${styles.root}">
      <div class="${styles.icon}">
        ${icon}
      </div>
      <a class="${styles.link}" href="${safeUrl}" title="${escapeHtml(title)}"${safeTarget ? ` target="${safeTarget}"` : ''}${safeRel}>
        ${escapeHtml(text)}
      </a>
    </li>
  `;
};

export default contactsItem;
