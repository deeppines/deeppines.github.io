import styles from './avatar.module.scss';

const avatar = () => {
  return `
    <div class="${styles.root}">
      <img src="https://github.com/deeppines.png" size="108" width="108" height="108" alt />
    </div>
  `;
};

export default avatar;
