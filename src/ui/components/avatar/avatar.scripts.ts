import { DOM_HOOKS } from '@/shared/domHooks';

interface HiddenButtonConfig {
  visibleTimer?: number;
  hoverTimer?: number;
}

export const initHiddenButton = (config?: HiddenButtonConfig): void => {
  const visibleTimer = config?.visibleTimer ?? 3000;
  const hoverTimer = config?.hoverTimer ?? 5000;
  const roots = document.querySelectorAll<HTMLElement>(`.${DOM_HOOKS.hiddenRoot}`);

  roots.forEach((root) => {
    let timerId: number | null = null;

    root.addEventListener('mouseenter', () => {
      timerId = window.setTimeout(() => {
        const button = root.querySelector<HTMLElement>(`.${DOM_HOOKS.hiddenButton}`);

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
