import project, { ProjectProps } from './components/project/project';

import styles from './projects.module.scss';

import { WithLang } from '@/types/common';
import { getLang } from '@/ui/utils/getLang';

const projects = (projects: WithLang<ProjectProps>[]) => {
  const currentLang = getLang();

  return `
    <h2 class="${styles.title}">${currentLang === 'en' ? 'Projects' : 'Проекты'}</h2>
    <div class="${styles.root}">
      ${projects.map((item) => project(currentLang === 'en' ? item.en : item.ru)).join('')}
    </div>
  `;
};

export default projects;
