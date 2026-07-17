import type { Lang } from '@/types/common';

import { DATA_ATTRIBUTES } from '@/shared/domHooks';

import { getLang } from '@/ui/utils/getLang';
import { setTitle } from '@/ui/utils/setTitle';

import { initRuntime } from '@/features/runtime/initRuntime';

import footer from '@/ui/layouts/footer/footer';
import header from '@/ui/layouts/header/header';

import backdrop from '@/ui/components/backdrop/backdrop';
import modal from '@/ui/components/modal/modal';
import profile from '@/ui/components/profile/profile';
import projects from '@/ui/components/projects/projects';

import '@/assets/styles/style.scss';

import { MAIN } from '@/main.data';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('App root "#app" not found');
}

const renderApp = (lang: Lang = getLang()): void => {
  const title =
    lang === 'en'
      ? `${MAIN.profile.en.name} - ${MAIN.profile.en.who}`
      : `${MAIN.profile.ru.name} - ${MAIN.profile.ru.who}`;
  const profileData = lang === 'en' ? MAIN.profile.en : MAIN.profile.ru;
  const aboutModalData = lang === 'en' ? MAIN.modals.about.en : MAIN.modals.about.ru;
  const meModalData = lang === 'en' ? MAIN.modals.me.en : MAIN.modals.me.ru;
  const contactItems = MAIN.contacts.map((item) => (lang === 'en' ? item.en : item.ru));
  const projectItems = MAIN.projects.map((item) => (lang === 'en' ? item.en : item.ru));

  setTitle(title);
  document.body.dataset[DATA_ATTRIBUTES.backdrop] = 'false';

  const fragment = document.createDocumentFragment();
  const mainElement = document.createElement('main');
  const profileSection = document.createElement('section');
  const projectsSection = document.createElement('section');

  fragment.append(header());
  profileSection.append(profile({ ...profileData, lang, contacts: contactItems }));
  projectsSection.append(projects(projectItems, lang));

  mainElement.append(profileSection, projectsSection);
  fragment.append(mainElement);

  fragment.append(footer(MAIN.socials));
  fragment.append(modal(aboutModalData));
  fragment.append(modal(meModalData));
  fragment.append(backdrop());

  root.replaceChildren(fragment);

  initRuntime({ onLangChange: renderApp });
};

renderApp();
