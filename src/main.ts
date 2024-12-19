import footer from '@layouts/footer/footer';
import header from '@layouts/header/header';

import '@assets/styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      
    </section>
  </main>
  ${footer()}
`;
