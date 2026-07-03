import '@/assets/styles/style.scss';

import { initRuntime } from '@/features/runtime/initRuntime';
import { MAIN } from '@/main.data';
import type { Lang } from '@/types/common';
import backdrop from '@/ui/components/backdrop/backdrop';
import modal from '@/ui/components/modal/modal';
import profile from '@/ui/components/profile/profile';
import projects from '@/ui/components/projects/projects';
import footer from '@/ui/layouts/footer/footer';
import header from '@/ui/layouts/header/header';
import { getLang } from '@/ui/utils/getLang';
import { setTitle } from '@/ui/utils/setTitle';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('App root "#app" not found');
}

const renderApp = (lang: Lang = getLang()): void => {
  const title =
    lang === 'en'
      ? `${MAIN.profile.en.name} - ${MAIN.profile.en.who}`
      : `${MAIN.profile.ru.name} - ${MAIN.profile.ru.who}`;

  setTitle(title);
  document.body.dataset.backdrop = 'false';

  root.innerHTML = `
    ${header()}
    <main>
      <section>
        ${profile(lang === 'en' ? MAIN.profile.en : MAIN.profile.ru)}
      </section>
      <section>
        ${projects(MAIN.projects)}
      </section>
    </main>
    ${footer()}

    ${modal(lang === 'en' ? MAIN.modals.about.en : MAIN.modals.about.ru)}
    ${modal(lang === 'en' ? MAIN.modals.me.en : MAIN.modals.me.ru)}
    ${backdrop()}
  `;

  initRuntime({ onLangChange: renderApp });
};

renderApp();
