import copyright from '@components/copyright/copyright';
import socials from '@components/socials/socials';

import IconSnowflake from '@tabler/icons/outline/snowflake.svg?raw';
import IconSnowflakeOff from '@tabler/icons/outline/snowflake-off.svg?raw';

import style from './footer.module.scss';

import aboutButton from '@/ui/components/aboutButton/aboutButton';
import switcher from '@/ui/components/switcher/switcher';
import { isWinter } from '@/ui/utils/isWinter/isWinter';

const footer = () => {
  return `
    <footer class=${style.root}>
      <div class="${style.left}">
        ${socials()}
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
