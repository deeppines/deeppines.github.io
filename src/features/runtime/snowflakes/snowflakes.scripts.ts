import { DOM_HOOKS } from '@/shared/domHooks';

import { isWinter } from '@/ui/utils/isWinter/isWinter';
import { prefersReducedMotion } from '@/ui/utils/prefersReducedMotion/prefersReducedMotion';

interface SnowflakesConfig {
  toggleClass?: string;
  maxSnowflakes?: number;
  delay?: number;
}

type RuntimeCleanup = () => void;

const SNOWFLAKE_SYMBOLS = ['❅', '❆', '❉', '❋'];
const ROOT_CLASS = 'snowflakesContainer';
const SNOWFLAKE_CLASS = 'snowflake';

class SnowflakesRuntime {
  private readonly maxSnowflakes: number;
  private readonly delay: number;
  private readonly toggleClass: string;
  private readonly snowflakes: HTMLElement[] = [];
  private readonly snowflakeTimeoutIds = new Set<number>();
  private animationFrameId: number | null = null;
  private lastSnowflakeTime = 0;
  private isRunning = false;
  private readonly toggleHandlers = new Map<HTMLInputElement, () => void>();

  constructor(config?: SnowflakesConfig) {
    this.maxSnowflakes = config?.maxSnowflakes ?? 100;
    this.delay = config?.delay ?? 100;
    this.toggleClass = config?.toggleClass ?? DOM_HOOKS.snowflakesToggle;
  }

  init(): void {
    this.ensureContainer();
    this.bindListeners();
    this.start();
  }

  private ensureContainer(): void {
    if (document.querySelector(`.${ROOT_CLASS}`)) {
      return;
    }

    const root = document.createElement('div');
    root.classList.add(ROOT_CLASS);
    document.body.appendChild(root);
  }

  private bindListeners(): void {
    const toggles = document.querySelectorAll<HTMLInputElement>(`.${this.toggleClass}`);

    toggles.forEach((toggle) => {
      if (this.toggleHandlers.has(toggle)) {
        return;
      }

      const handleChange = (): void => {
        if (this.isRunning) {
          this.stop();
          this.clear();
          return;
        }

        this.start();
      };

      this.toggleHandlers.set(toggle, handleChange);
      toggle.addEventListener('change', handleChange);
    });
  }

  private createSnowflake(): void {
    const container = document.querySelector<HTMLElement>(`.${ROOT_CLASS}`);

    if (!container) {
      return;
    }

    const snowflake = document.createElement('div');
    const symbol = SNOWFLAKE_SYMBOLS[Math.floor(Math.random() * SNOWFLAKE_SYMBOLS.length)];

    snowflake.classList.add(SNOWFLAKE_CLASS);
    snowflake.textContent = symbol;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 10}s`;
    snowflake.style.opacity = String(Math.random());
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.setProperty('--wind', String((Math.random() - 0.5) * 2));

    container.appendChild(snowflake);
    this.snowflakes.push(snowflake);

    const timeoutId = window.setTimeout(() => {
      snowflake.remove();
      const index = this.snowflakes.indexOf(snowflake);

      if (index >= 0) {
        this.snowflakes.splice(index, 1);
      }
      this.snowflakeTimeoutIds.delete(timeoutId);
    }, 11000);
    this.snowflakeTimeoutIds.add(timeoutId);
  }

  private animate = (currentTime: number): void => {
    if (!this.lastSnowflakeTime) {
      this.lastSnowflakeTime = currentTime;
    }

    if (
      currentTime - this.lastSnowflakeTime >= this.delay &&
      this.snowflakes.length < this.maxSnowflakes
    ) {
      this.createSnowflake();
      this.lastSnowflakeTime = currentTime;
    }

    this.animationFrameId = window.requestAnimationFrame(this.animate);
  };

  private start(): void {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.lastSnowflakeTime = 0;
    this.animationFrameId = window.requestAnimationFrame(this.animate);
  }

  private stop(): void {
    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.isRunning = false;
  }

  private clear(): void {
    this.snowflakeTimeoutIds.forEach((timeoutId) => {
      window.clearTimeout(timeoutId);
    });
    this.snowflakeTimeoutIds.clear();
    this.snowflakes.forEach((snowflake) => snowflake.remove());
    this.snowflakes.length = 0;
  }

  destroy(): void {
    this.stop();
    this.clear();
    this.toggleHandlers.forEach((handler, toggle) => {
      toggle.removeEventListener('change', handler);
    });
    this.toggleHandlers.clear();
  }
}

let runtime: SnowflakesRuntime | null = null;

export const initSnowflakes = (config?: SnowflakesConfig): RuntimeCleanup => {
  if (!isWinter()) {
    return () => {};
  }

  if (prefersReducedMotion()) {
    return () => {};
  }

  if (!runtime) {
    runtime = new SnowflakesRuntime(config);
  }

  runtime.init();
  return () => {
    runtime?.destroy();
  };
};
