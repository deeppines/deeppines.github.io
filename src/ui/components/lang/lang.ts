import styles from './lang.module.scss';

const lang = () => {
  return `
    <button type="button" class="${styles.root} js-modal-open" title="Language">
      <div class="${styles.icon}"></div>
    </button>
  `;
};

export default lang;
