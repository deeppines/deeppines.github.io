import IconMoon from '@tabler/icons/outline/moon.svg?raw';
import IconSun from '@tabler/icons/outline/sun.svg?raw';

import { DOM_HOOKS } from '@/shared/domHooks';

import { getLang } from '@/ui/utils/getLang/getLang';

import lang from '@/ui/elements/lang/lang';
import switcher from '@/ui/elements/switcher/switcher';

import style from './header.module.scss';

import { UI_TEXT } from '@/ui/content/uiText';

const header = (headingText: string): HTMLElement => {
  const currentLang = getLang();
  const element = document.createElement('header');
  const title = document.createElement('h1');
  const buttons = document.createElement('div');

  element.className = style.root;
  title.className = style.hiddenHeading;
  title.textContent = headingText;
  buttons.className = style.buttons;

  buttons.append(
    switcher(IconMoon, IconSun, DOM_HOOKS.themeToggle, UI_TEXT[currentLang].themeToggleTitle)
  );
  buttons.append(lang());

  element.append(title, buttons);
  return element;
};

export default header;
