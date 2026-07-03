import IconPhotoScan from '@tabler/icons/outline/photo-scan.svg?raw';

import styles from './project.module.scss';

import { escapeHtml, sanitizeUrl } from '@/ui/utils/html';

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  badge?: string;
}

const project = ({ title, description, image, link, badge }: ProjectProps) => {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const safeLink = link ? sanitizeUrl(link) : undefined;
  const safeImage = image ? sanitizeUrl(image) : undefined;
  const safeBadge = badge ? sanitizeUrl(badge) : undefined;

  return `
    <${safeLink ? `a href="${safeLink}" target="_blank" rel="noopener noreferrer"` : 'div'} class="${styles.root}">
      <div class="${styles.image}">
        ${safeImage ? `<img src="${safeImage}" size="50" width="50" height="50" alt="${safeTitle}" />` : `${IconPhotoScan}`}
      </div>
      <div class="${styles.description}">
        <h3 class="h5">${safeTitle}</h3>
        <p>${safeDescription}</p>
        ${safeBadge ? `<div class="${styles.badge}"><img src="${safeBadge}" alt="${safeTitle}" /></div>` : ''}
      </div>
    </${safeLink ? 'a' : 'div'}>
  `;
};

export default project;
