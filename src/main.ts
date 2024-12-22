import footer from '@layouts/footer/footer';
import header from '@layouts/header/header';

import profile from '@components/profile/profile';

import '@assets/styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      ${profile()}
    </section>
  </main>
  ${footer()}
`;
