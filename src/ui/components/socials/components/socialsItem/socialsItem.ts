import { sanitizeUrl } from '@/ui/utils/html/html';

import styles from './socialsItem.module.scss';

export interface SocialsItemProps {
  title: string;
  url: string;
  icon: string;
}

const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  target.append(template.content.cloneNode(true));
};

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
