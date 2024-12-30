import footer from '@layouts/footer/footer';
import header from '@layouts/header/header';

import backdrop from '@components/backdrop/backdrop';
import modal from '@components/modal/modal';
import profile from '@components/profile/profile';
import { PROFILE } from '@components/profile/profile.data';

import { MAIN } from './main.data';

import '@assets/styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      ${profile(PROFILE)}
    </section>
  </main>
  ${footer()}

  ${modal(MAIN.modals.about)}
  ${backdrop()}
`;
