import type { Lang } from '@/types/common';
import type { ContactsItemData, ProfileData } from '@/types/content';

import avatar from '@/ui/components/avatar/avatar';
import contacts from '@/ui/components/contacts/contacts';

import styles from './profile.module.scss';

export type ProfileProps = ProfileData;

interface ProfileViewProps extends ProfileProps {
  lang: Lang;
  contacts: ContactsItemData[];
}

const profile = ({
  name,
  who,
  descriptionParagraphs,
  imgSrc,
  lang,
  contacts: contactItems,
}: ProfileViewProps): HTMLElement => {
  const root = document.createElement('div');
  const header = document.createElement('div');
  const headerLeft = document.createElement('div');
  const headerRight = document.createElement('div');
  const headerInfo = document.createElement('div');
  const heading = document.createElement('h1');
  const subtitle = document.createElement('p');
  const descriptionRoot = document.createElement('div');

  root.className = styles.profile;
  header.className = styles.header;
  headerLeft.className = styles.headerLeft;
  headerRight.className = styles.headerRight;
  headerInfo.className = styles.headerInfo;
  descriptionRoot.className = styles.description;

  heading.textContent = name;
  subtitle.textContent = who;

  headerInfo.append(heading, subtitle);
  headerLeft.append(headerInfo, contacts(contactItems));
  headerRight.append(avatar(lang, imgSrc));
  header.append(headerLeft, headerRight);

  descriptionParagraphs.forEach((paragraph) => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = paragraph;
    descriptionRoot.append(paragraphElement);
  });
  root.append(header, descriptionRoot);

  return root;
};

export default profile;
