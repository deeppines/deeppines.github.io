import IconMoon from '@tabler/icons/outline/moon.svg?raw';
import IconSun from '@tabler/icons/outline/sun.svg?raw';

import style from './header.module.scss';

import { DOM_HOOKS } from '@/shared/domHooks';
import lang from '@/ui/components/lang/lang';
import switcher from '@/ui/components/switcher/switcher';

const header = () => {
  return `
    <header class=${style.root}>
      <h1></h1>
      <div class="${style.buttons}">
        ${switcher(IconMoon, IconSun, DOM_HOOKS.themeToggle, 'Toggle theme')}
        ${lang()}
      </div>
    </header>
  `;
};

export default header;
