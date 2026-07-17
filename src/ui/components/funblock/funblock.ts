import IconBrandLastfm from '@tabler/icons/outline/brand-lastfm.svg?raw';
import IconBrandSteam from '@tabler/icons/outline/brand-steam.svg?raw';
import IconDeviceTv from '@tabler/icons/outline/device-tv.svg?raw';

import styles from './funblock.module.scss';

const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  target.append(template.content.cloneNode(true));
};

const createIconLink = (href: string, title: string, iconSvg: string): HTMLAnchorElement => {
  const link = document.createElement('a');
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = styles.iconLink;
  link.title = title;
  appendHtml(link, iconSvg);
  return link;
};

const createFunblockElement = (): HTMLElement => {
  const root = document.createElement('div');
  root.className = styles.root;

  root.append(
    createIconLink('https://www.last.fm/user/deeppines', 'Lastfm', IconBrandLastfm),
    createIconLink('https://myshows.me/deeppines', 'MyShows', IconDeviceTv),
    createIconLink('https://steamcommunity.com/id/deeppines/', 'Steam', IconBrandSteam)
  );

  return root;
};

const funblock = (): string => createFunblockElement().outerHTML;

export default funblock;
