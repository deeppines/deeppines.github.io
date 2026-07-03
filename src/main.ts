import '@/assets/styles/style.scss';

import { initRuntime } from '@/features/runtime/initRuntime';
import { MAIN } from '@/main.data';
import backdrop from '@/ui/components/backdrop/backdrop';
import modal from '@/ui/components/modal/modal';
import profile from '@/ui/components/profile/profile';
import projects from '@/ui/components/projects/projects';
import footer from '@/ui/layouts/footer/footer';
import header from '@/ui/layouts/header/header';
import { getLang } from '@/ui/utils/getLang';
import { setTitle } from '@/ui/utils/setTitle';

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
  ${modal(currentLang === 'en' ? MAIN.modals.me.en : MAIN.modals.me.ru)}
  ${backdrop()}
`;

initRuntime();
