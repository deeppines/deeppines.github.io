import styles from './funblock.module.scss';

const funblock = () => `
  <div class="${styles.root}">
    <span class="${styles.text}">Some fun text</span>
    <span class="${styles.text}"></span>
  </div>
`;

export default funblock;
