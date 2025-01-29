import footer from '@layouts/footer/footer';
import header from '@layouts/header/header';

import backdrop from '@components/backdrop/backdrop';
import modal from '@components/modal/modal';
import profile from '@components/profile/profile';
import projects from '@components/projects/projects';

import { getLang } from './ui/utils/getLang';
import { setTitle } from './ui/utils/setTitle';
import { MAIN } from './main.data';

import '@assets/styles/style.scss';

const currentLang = getLang();

const title =
  currentLang === 'en'
    ? `${MAIN.profile.en.name} - ${MAIN.profile.en.who}`
    : `${MAIN.profile.ru.name} - ${MAIN.profile.ru.who}`;

setTitle(title);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      ${profile(currentLang === 'en' ? MAIN.profile.en : MAIN.profile.ru)}
    </section>
    <section>
      ${projects(MAIN.projects)}
    </section>
  </main>
  ${footer()}

  ${modal(currentLang === 'en' ? MAIN.modals.about.en : MAIN.modals.about.ru)}
  ${backdrop()}
`;
