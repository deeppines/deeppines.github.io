import styles from './socialsItem.module.scss';

import { escapeHtml, sanitizeUrl } from '@/ui/utils/html';

export interface SocialsItemProps {
  title: string;
  url: string;
  icon: string;
}

const socialsItem = ({ icon, title, url }: SocialsItemProps) => {
  const safeUrl = sanitizeUrl(url);

  return `
    <a class="${styles.root}" href="${safeUrl}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(title)}">
      ${icon}
    </a>
  `;
};

export default socialsItem;
