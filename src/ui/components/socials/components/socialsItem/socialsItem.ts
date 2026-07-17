import type { SocialItemData } from '@/types/content';

import { appendHtml } from '@/ui/utils/appendHtml/appendHtml';
import { sanitizeUrl } from '@/ui/utils/html/html';

import styles from './socialsItem.module.scss';

export type SocialsItemProps = SocialItemData;

const socialsItem = ({ icon, title, url }: SocialsItemProps): HTMLElement => {
  const safeUrl = sanitizeUrl(url);
  const link = document.createElement('a');

  link.className = styles.root;
  link.href = safeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.title = title;
  appendHtml(link, icon);

  return link;
};

export default socialsItem;
