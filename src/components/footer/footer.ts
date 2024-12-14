import copyright from '../copyright/copyright';
import socials from '../socials/socials';
import style from './footer.module.scss';

const footer = () => {
  return `
    <footer class=${style.root}>
      <div>
        ${socials()}
      </div>
      <div>
        ${copyright()}
      </div>
    </footer>
  `;
};

export default footer;
