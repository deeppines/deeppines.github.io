import type { Lang } from '@/types/common';

import project, { ProjectProps } from './components/project/project';

import styles from './projects.module.scss';

const projects = (items: ProjectProps[], lang: Lang): DocumentFragment => {
  const fragment = document.createDocumentFragment();
  const title = document.createElement('h2');
  const root = document.createElement('div');

  title.className = styles.title;
  title.textContent = lang === 'en' ? 'Projects' : 'Проекты';

  root.className = styles.root;
  items.forEach((item) => {
    root.append(project(item));
  });

  fragment.append(title, root);
  return fragment;
};

export default projects;
