import { isWinter } from '@/ui/utils/isWinter/isWinter';
import { prefersReducedMotion } from '@/ui/utils/prefersReducedMotion';

interface SnowflakesConfig {
  toggleClass?: string;
  maxSnowflakes?: number;
  delay?: number;
}

const SNOWFLAKE_SYMBOLS = ['❅', '❆', '❉', '❋'];
const ROOT_CLASS = 'snowflakesContainer';
const SNOWFLAKE_CLASS = 'snowflake';

class SnowflakesRuntime {
  private readonly maxSnowflakes: number;
  private readonly delay: number;
  private readonly toggleClass: string;
  private readonly snowflakes: HTMLElement[] = [];
  private animationFrameId: number | null = null;
  private lastSnowflakeTime = 0;
  private isRunning = false;
  private readonly bindedToggles = new WeakSet<HTMLInputElement>();

  constructor(config?: SnowflakesConfig) {
    this.maxSnowflakes = config?.maxSnowflakes ?? 100;
    this.delay = config?.delay ?? 100;
    this.toggleClass = config?.toggleClass ?? 'js-snowflakes-toggle';
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
      if (this.bindedToggles.has(toggle)) {
        return;
      }

      this.bindedToggles.add(toggle);
      toggle.addEventListener('change', () => {
        if (this.isRunning) {
          this.stop();
          this.clear();
          return;
        }

        this.start();
      });
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

    window.setTimeout(() => {
      snowflake.remove();
      const index = this.snowflakes.indexOf(snowflake);

      if (index >= 0) {
        this.snowflakes.splice(index, 1);
      }
    }, 11000);
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
    this.snowflakes.forEach((snowflake) => snowflake.remove());
    this.snowflakes.length = 0;
  }
}

let runtime: SnowflakesRuntime | null = null;

export const initSnowflakes = (config?: SnowflakesConfig): void => {
  if (!isWinter()) {
    return;
  }

  if (prefersReducedMotion()) {
    return;
  }

  if (!runtime) {
    runtime = new SnowflakesRuntime(config);
  }

  runtime.init();
};
