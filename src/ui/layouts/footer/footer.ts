import IconSnowflake from '@tabler/icons/outline/snowflake.svg?raw';
import IconSnowflakeOff from '@tabler/icons/outline/snowflake-off.svg?raw';

import style from './footer.module.scss';

import aboutButton from '@/ui/components/aboutButton/aboutButton';
import copyright from '@/ui/components/copyright/copyright';
import type { SocialsItemProps } from '@/ui/components/socials/components/socialsItem/socialsItem';
import socials from '@/ui/components/socials/socials';
import switcher from '@/ui/components/switcher/switcher';
import { isWinter } from '@/ui/utils/isWinter/isWinter';

const footer = (socialItems: SocialsItemProps[]): string => {
  return `
    <footer class=${style.root}>
      <div class="${style.left}">
        ${socials(socialItems)}
        ${
          isWinter()
            ? switcher(IconSnowflakeOff, IconSnowflake, 'js-snowflakes-toggle', 'Toggle snowflakes')
            : ''
        }
      </div>
      <div class="${style.right}">
        ${copyright()}
        ${aboutButton()}
      </div>
    </footer>
  `;
};

export default footer;
