export const DOM_HOOKS = {
  themeToggle: 'js-theme-toggle',
  langToggle: 'js-lang-toggle',
  modalOpen: 'js-modal-open',
  modalMeOpen: 'js-modal-me-open',
  modalClose: 'js-modal-close',
  snowflakesToggle: 'js-snowflakes-toggle',
  hiddenRoot: 'js-hidden-root',
  hiddenButton: 'js-hidden-btn',
} as const;

export const DATA_ATTRIBUTES = {
  theme: 'data-theme',
  lang: 'data-lang',
  backdrop: 'backdrop',
} as const;

export const STORAGE_KEYS = {
  theme: 'theme',
  lang: 'lang',
} as const;

export const MODAL_IDS = {
  about: 'modal-about',
  me: 'modal-me',
} as const;

export const STATE_CLASSES = {
  open: 'open',
} as const;
