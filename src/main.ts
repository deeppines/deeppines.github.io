import footer from './ui/components/footer/footer';
import header from './ui/components/header/header';

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
