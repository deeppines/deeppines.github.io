import project, { ProjectProps } from './components/project/project';

import styles from './projects.module.scss';

const projects = (projects: ProjectProps[]) => {
  return `
    <h2 class="${styles.title}">Проекты</h2>
    <div class="${styles.root}">
      ${projects.map((item) => project(item)).join('')}
    </div>
  `;
};

export default projects;
