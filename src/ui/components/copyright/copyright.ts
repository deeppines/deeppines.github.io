import styles from './copyright.module.scss';

const copyright = (since = '2017'): HTMLElement => {
  const current = new Date().getFullYear();
  const paragraph = document.createElement('p');

  paragraph.className = styles.copyright;
  paragraph.textContent = `©${since}-${current}`;

  return paragraph;
};

export default copyright;
