import styles from './profile.module.scss';

import type { Lang } from '@/types/common';
import avatar from '@/ui/components/avatar/avatar';
import type { ContactsItemProps } from '@/ui/components/contacts/components/contactsItem/contactsItem';
import contacts from '@/ui/components/contacts/contacts';
import { sanitizeRichHtml } from '@/ui/utils/html';

export interface ProfileProps {
  name: string;
  who: string;
  description: string;
  imgSrc?: string;
}

interface ProfileViewProps extends ProfileProps {
  lang: Lang;
  contacts: ContactsItemProps[];
}

const profile = ({
  name,
  who,
  description,
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

  descriptionRoot.innerHTML = sanitizeRichHtml(description);
  root.append(header, descriptionRoot);

  return root;
};

export default profile;
