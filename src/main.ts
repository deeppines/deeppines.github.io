import footer from '@layouts/footer/footer';
import header from '@layouts/header/header';

import backdrop from '@components/backdrop/backdrop';
import modal from '@components/modal/modal';
import profile from '@components/profile/profile';
import projects from '@components/projects/projects';

import { MAIN } from './main.data';

import '@assets/styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      ${profile(MAIN.profile)}
    </section>
    <section>
      ${projects(MAIN.projects)}
    </section>
  </main>
  ${footer()}

  ${modal(MAIN.modals.about)}
  ${backdrop()}
`;
