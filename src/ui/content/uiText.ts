import type { Lang } from '@/types/common';

interface UiText {
  aboutButtonTitle: string;
  modalCloseTitle: string;
  themeToggleTitle: string;
  snowflakesToggleTitle: string;
  langSelectTitle: string;
  langOptionRuTitle: string;
  langOptionEnTitle: string;
  projectsTitle: string;
  avatarButtonText: string;
  avatarImageAlt: string;
}

export const UI_TEXT: Record<Lang, UiText> = {
  ru: {
    aboutButtonTitle: 'О странице',
    modalCloseTitle: 'Закрыть',
    themeToggleTitle: 'Переключить тему',
    snowflakesToggleTitle: 'Переключить снежинки',
    langSelectTitle: 'Язык',
    langOptionRuTitle: 'Русский',
    langOptionEnTitle: 'Английский',
    projectsTitle: 'Проекты',
    avatarButtonText: 'Что тут?',
    avatarImageAlt: 'Аватар',
  },
  en: {
    aboutButtonTitle: 'About',
    modalCloseTitle: 'Close',
    themeToggleTitle: 'Toggle theme',
    snowflakesToggleTitle: 'Toggle snowflakes',
    langSelectTitle: 'Language',
    langOptionRuTitle: 'Russian',
    langOptionEnTitle: 'English',
    projectsTitle: 'Projects',
    avatarButtonText: 'Whaaat?',
    avatarImageAlt: 'Avatar',
  },
};
