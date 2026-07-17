import IconSnowflake from '@tabler/icons/outline/snowflake.svg?raw';
import IconSnowflakeOff from '@tabler/icons/outline/snowflake-off.svg?raw';

import { DOM_HOOKS } from '@/shared/domHooks';

import { getLang } from '@/ui/utils/getLang/getLang';
import { isWinter } from '@/ui/utils/isWinter/isWinter';
import { prefersReducedMotion } from '@/ui/utils/prefersReducedMotion/prefersReducedMotion';

import aboutButton from '@/ui/components/aboutButton/aboutButton';
import copyright from '@/ui/components/copyright/copyright';
import type { SocialsItemProps } from '@/ui/components/socials/components/socialsItem/socialsItem';
import socials from '@/ui/components/socials/socials';
import switcher from '@/ui/components/switcher/switcher';

import style from './footer.module.scss';

import { UI_TEXT } from '@/ui/content/uiText';

const footer = (socialItems: SocialsItemProps[]): HTMLElement => {
  const lang = getLang();
  const element = document.createElement('footer');
  const left = document.createElement('div');
  const right = document.createElement('div');

  element.className = style.root;
  left.className = style.left;
  right.className = style.right;

  left.append(socials(socialItems));

  if (isWinter() && !prefersReducedMotion()) {
    left.append(
      switcher(
        IconSnowflakeOff,
        IconSnowflake,
        DOM_HOOKS.snowflakesToggle,
        UI_TEXT[lang].snowflakesToggleTitle
      )
    );
  }

  right.append(copyright(), aboutButton());

  element.append(left, right);
  return element;
};

export default footer;
