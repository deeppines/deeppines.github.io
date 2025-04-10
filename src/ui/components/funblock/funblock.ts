import IconBrandLastfm from '@tabler/icons/outline/brand-lastfm.svg?raw';
import IconBrandSteam from '@tabler/icons/outline/brand-steam.svg?raw';
import IconDeviceTv from '@tabler/icons/outline/device-tv.svg?raw';

import styles from './funblock.module.scss';

const funblock = () => `
  <div class="${styles.root}">
    <a href="https://www.last.fm/user/deeppines" target="_blank" class="${styles.iconLink}" title="Lastfm">
      ${IconBrandLastfm}
    </a>
    <a href="https://myshows.me/deeppines" target="_blank" class="${styles.iconLink}" title="MyShows">
      ${IconDeviceTv}
    </a>
    <a href="https://steamcommunity.com/id/deeppines/" target="_blank" class="${styles.iconLink}" title="Steam">
      ${IconBrandSteam}
    </a>
  </div>
`;

export default funblock;
