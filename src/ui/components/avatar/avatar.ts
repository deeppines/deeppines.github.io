import styles from './avatar.module.scss';

const avatar = (src?: string) => {
  return `
    <div class="${styles.root} js-hidden-root">
      <img
        src="${src}"
        width="108"
        height="108"
        alt="Avatar"
      />

      <button type="button" class="${styles.button} js-hidden-btn js-modal-me-open">
        А тут что?
      </button>
    </div>
  `;
};

export default avatar;
