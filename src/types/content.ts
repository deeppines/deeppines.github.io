import type { WithLang } from './common';

export interface ContactsItemData {
  icon: string;
  text: string;
  title: string;
  url: string;
  target?: string;
}

export interface ProfileData {
  name: string;
  who: string;
  descriptionParagraphs: string[];
  imgSrc?: string;
}

export interface ProjectData {
  title: string;
  description: string;
  image?: string;
  link?: string;
  badge?: string;
}

export interface SocialItemData {
  title: string;
  url: string;
  icon: string;
}

export interface ModalParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface ModalListBlock {
  type: 'list';
  title?: string;
  items: string[];
}

export interface ModalLinksBlock {
  type: 'links';
  items: {
    icon: string;
    title: string;
    url: string;
  }[];
}

export type ModalContentBlock = ModalParagraphBlock | ModalListBlock | ModalLinksBlock;

export interface ModalData {
  id: string;
  title: string;
  content?: ModalContentBlock[];
  footer?: ModalContentBlock[];
}

export interface MainPageData {
  contacts: WithLang<ContactsItemData>[];
  profile: WithLang<ProfileData>;
  projects: WithLang<ProjectData>[];
  socials: SocialItemData[];
  modals: {
    about: WithLang<ModalData>;
    me: WithLang<ModalData>;
  };
}
