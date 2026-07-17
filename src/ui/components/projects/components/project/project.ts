import IconPhotoScan from '@tabler/icons/outline/photo-scan.svg?raw';

import type { ProjectData } from '@/types/content';

import { appendHtml } from '@/ui/utils/appendHtml/appendHtml';
import { sanitizeUrl } from '@/ui/utils/html/html';

import styles from './project.module.scss';

export type ProjectProps = ProjectData;

const project = ({ title, description, image, link, badge }: ProjectProps): HTMLElement => {
  const safeLink = link ? sanitizeUrl(link) : undefined;
  const safeImage = image ? sanitizeUrl(image.src) : undefined;
  const imageWidth = image?.width ?? 50;
  const imageHeight = image?.height ?? 50;
  const imageAlt = image?.alt ?? title;
  const safeBadge = badge ? sanitizeUrl(badge.src) : undefined;
  const badgeWidth = badge?.width ?? 50;
  const badgeHeight = badge?.height ?? 50;
  const badgeAlt = badge?.alt ?? title;
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
    imageElement.width = imageWidth;
    imageElement.height = imageHeight;
    imageElement.alt = imageAlt;
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
    badgeImage.width = badgeWidth;
    badgeImage.height = badgeHeight;
    badgeImage.alt = badgeAlt;
    badgeRoot.append(badgeImage);
    descriptionRoot.append(badgeRoot);
  }

  root.append(imageRoot, descriptionRoot);
  return root;
};

export default project;
