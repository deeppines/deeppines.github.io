import style from './header.module.scss';

import switcher from '@/ui/components/switcher/switcher';

const header = () => {
  return `
    <header class=${style.root}>
      <h1></h1>
      <div>${switcher()}</div>
    </header>
  `;
};

export default header;
