import { DOM_HOOKS } from '@/shared/domHooks';

interface HiddenButtonConfig {
  visibleTimer?: number;
  hoverTimer?: number;
}

type RuntimeCleanup = () => void;

export const initHiddenButton = (config?: HiddenButtonConfig): RuntimeCleanup => {
  const visibleTimer = config?.visibleTimer ?? 3000;
  const hoverTimer = config?.hoverTimer ?? 5000;
  const roots = Array.from(document.querySelectorAll(`.${DOM_HOOKS.hiddenRoot}`)) as HTMLElement[];
  const cleanupHandlers: RuntimeCleanup[] = [];

  roots.forEach((root) => {
    let timerId: number | null = null;
    let hideTimerId: number | null = null;

    const handleMouseEnter = (): void => {
      timerId = window.setTimeout(() => {
        const button = root.querySelector(`.${DOM_HOOKS.hiddenButton}`) as HTMLElement | null;

        if (!button) {
          return;
        }

        button.style.display = 'block';

        hideTimerId = window.setTimeout(() => {
          button.style.display = 'none';
        }, visibleTimer);
      }, hoverTimer);
    };

    const handleMouseLeave = (): void => {
      const button = root.querySelector(`.${DOM_HOOKS.hiddenButton}`) as HTMLElement | null;

      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
      if (hideTimerId !== null) {
        window.clearTimeout(hideTimerId);
        hideTimerId = null;
      }

      if (button) {
        button.style.display = 'none';
      }
    };

    root.addEventListener('mouseenter', handleMouseEnter);
    root.addEventListener('mouseleave', handleMouseLeave);
    cleanupHandlers.push(() => {
      if (timerId !== null) {
        window.clearTimeout(timerId);
      }
      if (hideTimerId !== null) {
        window.clearTimeout(hideTimerId);
      }
      root.removeEventListener('mouseenter', handleMouseEnter);
      root.removeEventListener('mouseleave', handleMouseLeave);
    });
  });

  return () => {
    cleanupHandlers.forEach((cleanup) => cleanup());
  };
};
