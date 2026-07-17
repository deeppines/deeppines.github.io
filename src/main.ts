import type { Lang } from '@/types/common';

import { DATA_ATTRIBUTES } from '@/shared/domHooks';

import { getLang } from '@/ui/utils/getLang/getLang';
import { setTitle } from '@/ui/utils/setTitle/setTitle';

import { initRuntime } from '@/features/runtime/initRuntime';

import footer from '@/ui/layouts/footer/footer';
import header from '@/ui/layouts/header/header';

import modal from '@/ui/components/modal/modal';
import profile from '@/ui/components/profile/profile';
import projects from '@/ui/components/projects/projects';

import backdrop from '@/ui/elements/backdrop/backdrop';

import '@/assets/styles/style.scss';

import { MAIN } from '@/main.data';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('App root "#app" not found');
}

interface LocalizedContent {
  lang: Lang;
  title: string;
  profileData: (typeof MAIN.profile)[Lang];
  aboutModalData: (typeof MAIN.modals.about)[Lang];
  meModalData: (typeof MAIN.modals.me)[Lang];
  contactItems: (typeof MAIN.contacts)[number][Lang][];
  projectItems: (typeof MAIN.projects)[number][Lang][];
}

interface AppShell {
  headerContainer: HTMLElement;
  profileSection: HTMLElement;
  projectsSection: HTMLElement;
  footerContainer: HTMLElement;
  aboutModalContainer: HTMLElement;
  meModalContainer: HTMLElement;
}

const getLocalizedContent = (lang: Lang): LocalizedContent => {
  const title =
    lang === 'en'
      ? `${MAIN.profile.en.name} - ${MAIN.profile.en.who}`
      : `${MAIN.profile.ru.name} - ${MAIN.profile.ru.who}`;
  return {
    lang,
    title,
    profileData: lang === 'en' ? MAIN.profile.en : MAIN.profile.ru,
    aboutModalData: lang === 'en' ? MAIN.modals.about.en : MAIN.modals.about.ru,
    meModalData: lang === 'en' ? MAIN.modals.me.en : MAIN.modals.me.ru,
    contactItems: MAIN.contacts.map((item) => (lang === 'en' ? item.en : item.ru)),
    projectItems: MAIN.projects.map((item) => (lang === 'en' ? item.en : item.ru)),
  };
};

const createAppShell = (): AppShell => {
  const fragment = document.createDocumentFragment();
  const headerContainer = document.createElement('div');
  const mainElement = document.createElement('main');
  const profileSection = document.createElement('section');
  const projectsSection = document.createElement('section');
  const footerContainer = document.createElement('div');
  const aboutModalContainer = document.createElement('div');
  const meModalContainer = document.createElement('div');

  mainElement.append(profileSection, projectsSection);
  fragment.append(
    headerContainer,
    mainElement,
    footerContainer,
    aboutModalContainer,
    meModalContainer,
    backdrop()
  );
  root.replaceChildren(fragment);

  return {
    headerContainer,
    profileSection,
    projectsSection,
    footerContainer,
    aboutModalContainer,
    meModalContainer,
  };
};

const appShell = createAppShell();

const renderApp = (lang: Lang = getLang()): void => {
  const content = getLocalizedContent(lang);

  setTitle(content.title);
  document.body.dataset[DATA_ATTRIBUTES.backdrop] = 'false';

  appShell.headerContainer.replaceChildren(header(content.title));
  appShell.profileSection.replaceChildren(
    profile({
      ...content.profileData,
      lang: content.lang,
      contacts: content.contactItems,
    })
  );
  appShell.projectsSection.replaceChildren(projects(content.projectItems, content.lang));
  appShell.footerContainer.replaceChildren(footer(MAIN.socials));
  appShell.aboutModalContainer.replaceChildren(modal(content.aboutModalData));
  appShell.meModalContainer.replaceChildren(modal(content.meModalData));

  initRuntime({ onLangChange: renderApp });
};

renderApp();
