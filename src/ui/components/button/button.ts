import styles from './button.module.scss';

export interface ButtonProps {
  text: string;
  icon?: string;
  tag?: HTMLElementTagNameMap[keyof HTMLElementTagNameMap];
  title?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
}

const button = (): string => {
  return `
    <button type="button" class="${styles.root} js-modal-open">
    `;
};

export default button;
