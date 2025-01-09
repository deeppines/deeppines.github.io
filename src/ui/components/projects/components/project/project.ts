import IconPhotoScan from '@tabler/icons/outline/photo-scan.svg?raw';

import styles from './project.module.scss';

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  badge?: string;
}

const project = ({ title, description, image, link, badge }: ProjectProps) => {
  return `
    <${link ? `a href="${link}" target="_blank"` : 'div'} class="${styles.root}">
      <div class="${styles.image}">
        ${image ? `<img src="${image}" size="50" width="50" height="50" alt="${title}" />` : `${IconPhotoScan}`}
      </div>
      <div class="${styles.description}">
        <h5>${title}</h5>
        <p>${description}</p>
        ${badge ? `<div class="${styles.badge}"><img src="${badge}" alt="${title}" /></div>` : ''}
      </div>
    </${link ? 'a' : 'div'}>
  `;
};

export default project;
