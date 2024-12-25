import about from '@components/about/about';
import copyright from '@components/copyright/copyright';
import socials from '@components/socials/socials';

import style from './footer.module.scss';

const footer = () => {
  return `
    <footer class=${style.root}>
      <div class="${style.left}">
        ${socials()}
      </div>
      <div class="${style.right}">
        ${copyright()}
        ${about()}
      </div>
    </footer>
  `;
};

export default footer;
