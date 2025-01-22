import style from './header.module.scss';

import lang from '@/ui/components/lang/lang';
import switcher from '@/ui/components/switcher/switcher';

const header = () => {
  return `
    <header class=${style.root}>
      <h1></h1>
      <div class="${style.buttons}">
        ${switcher()}
        ${lang()}
      </div>
    </header>
  `;
};

export default header;
