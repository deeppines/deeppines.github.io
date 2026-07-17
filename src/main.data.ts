import iconGithub from '@tabler/icons/outline/brand-github.svg?raw';
import iconBrandLinkedin from '@tabler/icons/outline/brand-linkedin.svg?raw';
import IconFileTypePdf from '@tabler/icons/outline/file-type-pdf.svg?raw';
import iconMail from '@tabler/icons/outline/mail.svg?raw';

import type { MainPageData } from '@/types/content';

import { MODAL_IDS } from '@/shared/domHooks';

const withLang = <T>(ru: T, en: T) => ({ ru, en });

const PROFILE_IMAGE_URL = 'https://github.com/deeppines.png';
const PINES_IMAGE_URL = '/assets/img/projects/pines.png';
const PINES_BADGE_URL =
  'https://vsmarketplacebadges.dev/version-short/deeppines.pines-visual-studio-code.svg';
const PINES_LINK_URL = 'https://marketplace.visualstudio.com/items?itemName=deeppines.pines-visual-studio-code';

const ABOUT_STACK_ITEMS = ['Vite', 'Typescript', 'CSS modules'];
const ME_SOCIAL_LINKS = [
  {
    title: 'Lastfm',
    url: 'https://www.last.fm/user/deeppines',
  },
  {
    title: 'MyShows',
    url: 'https://myshows.me/deeppines',
  },
  {
    title: 'Steam',
    url: 'https://steamcommunity.com/id/deeppines/',
  },
];

export const MAIN: MainPageData = {
  contacts: [
    withLang(
      {
        icon: iconMail,
        text: 'Email',
        title: 'Email',
        url: 'mailto:egorkir41@gmail.com',
      },
      {
        icon: iconMail,
        text: 'Email',
        title: 'Email',
        url: 'mailto:egorkir41@gmail.com',
      }
    ),
    withLang(
      {
        icon: IconFileTypePdf,
        text: 'Резюме',
        title: 'CV',
        url: '/assets/docs/cv_2025.pdf',
        target: '_blank',
      },
      {
        icon: IconFileTypePdf,
        text: 'Resume',
        title: 'CV',
        url: '/assets/docs/cv.pdf',
        target: '_blank',
      }
    ),
    // {
    //   ru: {
    //     icon: IconPhoto,
    //     text: 'Фото кота',
    //     title: 'cat',
    //     url: '',
    //     target: '_blank',
    //   },
    //   en: {
    //     icon: IconPhoto,
    //     text: 'Cat photo',
    //     title: 'cat',
    //     url: '',
    //     target: '_blank',
    //   },
    // },
  ],
  profile: withLang(
    {
      name: 'Кирдяшкин Егор',
      who: 'Frontend developer',
      descriptionParagraphs: [
        'Занимаюсь разработкой UI сайтов и не только. Верстаю и пишу логику компонентов на React и Typescript.',
      ],
      imgSrc: PROFILE_IMAGE_URL,
    },
    {
      name: 'Kirdiashkin Egor',
      who: 'Frontend developer',
      descriptionParagraphs: [
        'I specialize in developing website user interfaces and more. I handle layout design and write component logic using React and TypeScript.',
      ],
      imgSrc: PROFILE_IMAGE_URL,
    }
  ),
  projects: [
    withLang(
      {
        title: 'Pines',
        description: 'Темная тема для VS Code',
        image: PINES_IMAGE_URL,
        badge: PINES_BADGE_URL,
        link: PINES_LINK_URL,
      },
      {
        title: 'Pines',
        description: 'Dark theme for VS Code',
        image: PINES_IMAGE_URL,
        badge: PINES_BADGE_URL,
        link: PINES_LINK_URL,
      }
    ),
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
    about: withLang(
      {
        id: MODAL_IDS.about,
        title: 'О странице',
        content: [
          {
            type: 'list',
            title: 'Что использовал:',
            items: ABOUT_STACK_ITEMS,
          },
        ],
      },
      {
        id: MODAL_IDS.about,
        title: 'About page',
        content: [
          {
            type: 'list',
            title: 'What was used:',
            items: ABOUT_STACK_ITEMS,
          },
        ],
      }
    ),
    me: withLang(
      {
        id: MODAL_IDS.me,
        title: 'Cоцсети',
        content: [
          {
            type: 'links',
            items: ME_SOCIAL_LINKS,
          },
        ],
      },
      {
        id: MODAL_IDS.me,
        title: 'Socials',
        content: [
          {
            type: 'links',
            items: ME_SOCIAL_LINKS,
          },
        ],
      }
    ),
  },
};
