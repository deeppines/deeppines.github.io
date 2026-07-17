import IconMoon from '@tabler/icons/outline/moon.svg?raw';
import IconSun from '@tabler/icons/outline/sun.svg?raw';

import style from './header.module.scss';

import { DOM_HOOKS } from '@/shared/domHooks';
import lang from '@/ui/components/lang/lang';
import switcher from '@/ui/components/switcher/switcher';

const header = (): HTMLElement => {
  const element = document.createElement('header');
  const title = document.createElement('h1');
  const buttons = document.createElement('div');

  element.className = style.root;
  buttons.className = style.buttons;

  buttons.append(switcher(IconMoon, IconSun, DOM_HOOKS.themeToggle, 'Toggle theme'));
  buttons.append(lang());

  element.append(title, buttons);
  return element;
};

export default header;
