export const appendHtml = (target: HTMLElement, html: string): void => {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  target.append(template.content.cloneNode(true));
};
