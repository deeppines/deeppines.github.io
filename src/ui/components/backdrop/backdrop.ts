import styles from './backdrop.module.scss';

const backdrop = (): HTMLElement => {
  const element = document.createElement('div');
  element.className = styles.root;
  return element;
};

export default backdrop;
