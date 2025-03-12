// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
  new Theme();
  new Lang();
  new Modal('modal-about', 'js-modal-open');
  new Modal('modal-me', 'js-modal-me-open');
  new Snowflakes({ toggleClass: 'js-snowflakes-toggle' });
  new HiddenButton();
});
