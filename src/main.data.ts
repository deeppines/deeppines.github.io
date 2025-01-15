import iconGithub from '@tabler/icons/outline/brand-github.svg?raw';
import iconBrandLinkedin from '@tabler/icons/outline/brand-linkedin.svg?raw';
import iconMail from '@tabler/icons/outline/mail.svg?raw';

import { ContactsItemProps } from './ui/components/contacts/components/contactsItem/contactsItem';
import { ModalProps } from './ui/components/modal/modal';
import { ProfileProps } from './ui/components/profile/profile';
import { ProjectProps } from './ui/components/projects/components/project/project';
import { SocialsItemProps } from './ui/components/socials/components/socialsItem/socialsItem';

interface MainPageProps {
  contacts: ContactsItemProps[];
  profile: ProfileProps;
  projects: ProjectProps[];
  socials: SocialsItemProps[];
  modals: {
    about: ModalProps;
  };
}

export const MAIN: MainPageProps = {
  contacts: [
    {
      icon: iconMail,
      text: 'Email',
      title: 'Email',
      url: 'mailto:egorkir41@gmailcom',
    },
  ],
  profile: {
    name: 'Кирдяшкин Егор',
    who: 'Frontend developer',
    description:
      '<p>Занимаюсь разработкой UI сайтов и не только. Верстаю и пишу логику компонентов на React и Typescript.</p>',
  },
  projects: [
    {
      title: 'Pines',
      description: 'Темная тема для VS Code',
      image: '/assets/img/projects/pines.png',
      badge: 'https://vsmarketplacebadges.dev/version-short/deeppines.pines-visual-studio-code.svg',
      link: 'https://marketplace.visualstudio.com/items?itemName=deeppines.pines-visual-studio-code',
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
      id: 'modal-about',
      title: 'О странице',
      content:
        '<p>Что использовал:</p><ul><li>Vite</li><li>Typescript</li><li>CSS modules</li></ul>',
    },
  },
};
