import styles from './button.module.scss';

export interface ButtonProps {
  text: string;
  icon?: string;
  className?: string;
}

const button = (): string => {
  return `
    <button type="button" class="${styles.root} js-modal-open">
    `;
};

export default button;
