import styles from './deskButton.module.scss';

export interface DeskButtonProps {
  type: 'a' | 'button';
  icon: string;
  label: string;
  url?: string;
}
const deskButton = ({ type, icon, label, url }: DeskButtonProps): string => {
  const htmlElement = type;

  return `
    <${htmlElement} ${type === 'a' ? `href="${url}"` : 'type="button"'} class="${styles.root}">
      <span class="${styles.icon}">${icon}</span>
      <span class="${styles.label}">${label}</span>
    </${htmlElement}>
  `;
};

export default deskButton;
