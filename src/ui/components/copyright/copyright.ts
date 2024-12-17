import styles from './copyright.module.scss';

const copyright = () => {
  const since = '2017';
  const current = new Date().getFullYear();

  return `
    <p class="${styles.copyright}">©${since}-${current}</p>
  `;
};

export default copyright;
