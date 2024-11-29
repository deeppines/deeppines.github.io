import footer from './components/footer/footer';
import header from './components/header/header';

import './styles/style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header()}
  <main></main>
  ${footer()}
`;
