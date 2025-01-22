import styles from './lang.module.scss';

const lang = () => {
  return `
    <select class="${styles.root}" title="Language">
      <option title="Russian" value="ru" selected>RU</option>
      <option title="English" value="en">EN</option>
    </select>
  `;
};

export default lang;
