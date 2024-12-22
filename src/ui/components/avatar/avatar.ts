import styles from './avatar.module.scss';

const avatar = () => {
  return `
    <div class="${styles.root}">
      <img src="https://github.com/deeppines.png" alt="avatar" />
    </div>
  `;
};

export default avatar;
