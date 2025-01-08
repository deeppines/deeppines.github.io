import styles from './project.module.scss';

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  links?: string;
}

const project = ({ title, description, image, links }: ProjectProps) => {
  return `
    <div class="${styles.root}">
      <div class="${styles.image}">
        ${image ? `<img src="${image}" size="50" width="50" height="50" alt="${title}" />` : ''}
      </div>
      <div class="${styles.description}">
        <h5>${title}</h5>
        <p>${description}</p>
        ${links ? `<div>${links}</div>` : ''}
      </div>
    </div>
  `;
};

export default project;
