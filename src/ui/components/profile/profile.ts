import styles from './profile.module.scss';

import type { Lang } from '@/types/common';
import avatar from '@/ui/components/avatar/avatar';
import type { ContactsItemProps } from '@/ui/components/contacts/components/contactsItem/contactsItem';
import contacts from '@/ui/components/contacts/contacts';
import { escapeHtml, sanitizeRichHtml } from '@/ui/utils/html';

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
}: ProfileViewProps) => {
  return `
    <div class="${styles.profile}">
      <div class="${styles.header}">
        <div class="${styles.headerLeft}">
          <div class="${styles.headerInfo}">
            <h1>${escapeHtml(name)}</h1>
            <p>${escapeHtml(who)}</p>
          </div>

          ${contacts(contactItems)}
        </div>
        <div class="${styles.headerRight}">
          ${avatar(lang, imgSrc)}
        </div>
      </div>

      <div class="${styles.description}">
        ${sanitizeRichHtml(description)}
      </div>
    </div>
  `;
};

export default profile;
