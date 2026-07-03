import project, { ProjectProps } from './components/project/project';

import styles from './projects.module.scss';

import type { Lang } from '@/types/common';

const projects = (items: ProjectProps[], lang: Lang): string => {
  return `
    <h2 class="${styles.title}">${lang === 'en' ? 'Projects' : 'Проекты'}</h2>
    <div class="${styles.root}">
      ${items.map((item) => project(item)).join('')}
    </div>
  `;
};

export default projects;
