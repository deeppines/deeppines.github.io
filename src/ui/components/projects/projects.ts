import project from './components/project/project';

import { PROJECTS } from './projects.data';

import styles from './projects.module.scss';

const projects = () => {
  return `
    <h2 class="${styles.title}">Проекты</h2>
    <div class="${styles.root}">
      ${PROJECTS.map((item) => project(item)).join('')}
    </div>
  `;
};

export default projects;
