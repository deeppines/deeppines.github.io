import footer from './ui/layouts/footer/footer';
import header from './ui/layouts/header/header';

import './assets/styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main>
    <section>
      <h2>Projects</h2>
    </section>
  </main>
  ${footer()}
`;
