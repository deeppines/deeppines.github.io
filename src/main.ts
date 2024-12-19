import footer from '@layouts/footer/footer';
import header from '@layouts/header/header';

import desk from '@components/desk/desk';

import '@assets/styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      ${desk()}
    </section>
  </main>
  ${footer()}
`;
