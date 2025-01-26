import iconGithub from '@tabler/icons/outline/brand-github.svg?raw';
import iconBrandLinkedin from '@tabler/icons/outline/brand-linkedin.svg?raw';
import IconFileTypePdf from '@tabler/icons/outline/file-type-pdf.svg?raw';
import iconMail from '@tabler/icons/outline/mail.svg?raw';

import { WithLang } from './types/common';
import { ContactsItemProps } from './ui/components/contacts/components/contactsItem/contactsItem';
import { ModalProps } from './ui/components/modal/modal';
import { ProfileProps } from './ui/components/profile/profile';
import { ProjectProps } from './ui/components/projects/components/project/project';
import { SocialsItemProps } from './ui/components/socials/components/socialsItem/socialsItem';

interface MainPageProps {
  contacts: WithLang<ContactsItemProps>[];
  profile: WithLang<ProfileProps>;
  projects: WithLang<ProjectProps>[];
  socials: SocialsItemProps[];
  modals: {
    about: WithLang<ModalProps>;
  };
}

export const MAIN: MainPageProps = {
  contacts: [
    {
      ru: {
        icon: iconMail,
        text: 'Email',
        title: 'Email',
        url: 'mailto:egorkir41@gmailcom',
      },
      en: {
        icon: iconMail,
        text: 'Email',
        title: 'Email',
        url: 'mailto:egorkir41@gmailcom',
      },
    },
    {
      ru: {
        icon: IconFileTypePdf,
        text: 'Резюме',
        title: 'CV',
        url: '/assets/docs/cv.pdf',
        target: '_blank',
      },
      en: {
        icon: IconFileTypePdf,
        text: 'Resume',
        title: 'CV',
        url: '/assets/docs/cv.pdf',
        target: '_blank',
      },
    },
  ],
  profile: {
    ru: {
      name: 'Кирдяшкин Егор',
      who: 'Frontend developer',
      description:
        '<p>Занимаюсь разработкой UI сайтов и не только. Верстаю и пишу логику компонентов на React и Typescript.</p>',
    },
    en: {
      name: 'Kirdiashkin Egor',
      who: 'Frontend developer',
      description:
        '<p>I specialize in developing website user interfaces and more. I handle layout design and write component logic using React and TypeScript.</p>',
    },
  },
  projects: [
    {
      ru: {
        title: 'Pines',
        description: 'Темная тема для VS Code',
        image: '/assets/img/projects/pines.png',
        badge:
          'https://vsmarketplacebadges.dev/version-short/deeppines.pines-visual-studio-code.svg',
        link: 'https://marketplace.visualstudio.com/items?itemName=deeppines.pines-visual-studio-code',
      },
      en: {
        title: 'Pines',
        description: 'Dark theme for VS Code',
        image: '/assets/img/projects/pines.png',
        badge:
          'https://vsmarketplacebadges.dev/version-short/deeppines.pines-visual-studio-code.svg',
        link: 'https://marketplace.visualstudio.com/items?itemName=deeppines.pines-visual-studio-code',
      },
    },
  ],
  socials: [
    {
      title: 'GitHub',
      url: 'https://github.com/deeppines',
      icon: iconGithub,
    },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/egorkir/',
      icon: iconBrandLinkedin,
    },
  ],
  modals: {
    about: {
      ru: {
        id: 'modal-about',
        title: 'О странице',
        content:
          '<p>Что использовал:</p><ul><li>Vite</li><li>Typescript</li><li>CSS modules</li></ul>',
      },
      en: {
        id: 'modal-about',
        title: 'About page',
        content:
          '<p>What was used:</p><ul><li>Vite</li><li>Typescript</li><li>CSS modules</li></ul>',
      },
    },
  },
};
