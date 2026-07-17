import IconPhotoScan from '@tabler/icons/outline/photo-scan.svg?raw';

import { sanitizeUrl } from '@/ui/utils/html/html';

import styles from './project.module.scss';

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  badge?: string;
}

const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  target.append(template.content.cloneNode(true));
};

const project = ({ title, description, image, link, badge }: ProjectProps): HTMLElement => {
  const safeLink = link ? sanitizeUrl(link) : undefined;
  const safeImage = image ? sanitizeUrl(image) : undefined;
  const safeBadge = badge ? sanitizeUrl(badge) : undefined;
  const root: HTMLElement = safeLink ? document.createElement('a') : document.createElement('div');
  const imageRoot = document.createElement('div');
  const descriptionRoot = document.createElement('div');
  const heading = document.createElement('h3');
  const paragraph = document.createElement('p');

  root.className = styles.root;
  if (safeLink) {
    const linkRoot = root as HTMLAnchorElement;
    linkRoot.href = safeLink;
    linkRoot.target = '_blank';
    linkRoot.rel = 'noopener noreferrer';
  }

  imageRoot.className = styles.image;
  if (safeImage) {
    const imageElement = document.createElement('img');
    imageElement.src = safeImage;
    imageElement.width = 50;
    imageElement.height = 50;
    imageElement.alt = title;
    imageRoot.append(imageElement);
  } else {
    appendHtml(imageRoot, IconPhotoScan);
  }

  descriptionRoot.className = styles.description;
  heading.className = 'h5';
  heading.textContent = title;
  paragraph.textContent = description;
  descriptionRoot.append(heading, paragraph);

  if (safeBadge) {
    const badgeRoot = document.createElement('div');
    const badgeImage = document.createElement('img');
    badgeRoot.className = styles.badge;
    badgeImage.src = safeBadge;
    badgeImage.alt = title;
    badgeRoot.append(badgeImage);
    descriptionRoot.append(badgeRoot);
  }

  root.append(imageRoot, descriptionRoot);
  return root;
};

export default project;
