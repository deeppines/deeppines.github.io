import styles from './avatar.module.scss';

const avatar = (src?: string) => {
  return `
    <div class="${styles.root}">
      <img
        src="${src}"
        width="108"
        height="108"
        alt="Avatar"
      />
    </div>
  `;
};

export default avatar;
