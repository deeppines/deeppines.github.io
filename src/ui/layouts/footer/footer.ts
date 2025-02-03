import copyright from '@components/copyright/copyright';
import socials from '@components/socials/socials';

import style from './footer.module.scss';

import aboutButton from '@/ui/components/aboutButton/aboutButton';

const footer = () => {
  return `
    <footer class=${style.root}>
      <div class="${style.left}">
        ${socials()}
      </div>
      <div class="${style.right}">
        ${copyright()}
        ${aboutButton()}
      </div>
    </footer>
  `;
};

export default footer;
