import footer from '@layouts/footer/footer';
import header from '@layouts/header/header';

import profile from '@components/profile/profile';

import { PROFILE } from './ui/components/profile/profile.data';

import '@assets/styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      ${profile(PROFILE)}
    </section>
  </main>
  ${footer()}
`;
