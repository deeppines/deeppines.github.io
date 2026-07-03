interface HiddenButtonConfig {
  visibleTimer?: number;
  hoverTimer?: number;
}

const ROOT_CLASS = 'js-hidden-root';
const BUTTON_CLASS = 'js-hidden-btn';

export const initHiddenButton = (config?: HiddenButtonConfig): void => {
  const visibleTimer = config?.visibleTimer ?? 3000;
  const hoverTimer = config?.hoverTimer ?? 5000;
  const roots = document.querySelectorAll<HTMLElement>(`.${ROOT_CLASS}`);

  roots.forEach((root) => {
    let timerId: number | null = null;

    root.addEventListener('mouseenter', () => {
      timerId = window.setTimeout(() => {
        const button = root.querySelector<HTMLElement>(`.${BUTTON_CLASS}`);

        if (!button) {
          return;
        }

        button.style.display = 'block';

        window.setTimeout(() => {
          button.style.display = 'none';
        }, visibleTimer);
      }, hoverTimer);
    });

    root.addEventListener('mouseleave', () => {
      if (timerId !== null) {
        window.clearTimeout(timerId);
      }
    });
  });
};
