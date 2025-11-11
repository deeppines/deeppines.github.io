class Snowflakes {
  constructor(options) {
    this.options = options;
    this.snowflakeSymbols = ['❅', '❆', '❉', '❋']; // Символы снежинок
    this.snowflakesCounter = 0;
    this.maxSnowflakes = this.options?.maxSnowflakes || 100;
    this.snowflakes = []; // Массив для хранения снежинок
    this.animationFrameId = null; // ID текущего кадра анимации
    this.delay = options?.delay || 100; // Задержка между созданием снежинок (в миллисекундах)
    this.lastSnowflakeTime = 0; // Время создания последней снежинки
    this.isRunning = false; // Флаг для проверки, работает ли анимация
    this.toggleClass = options.toggleClass;

    this.classes = {
      root: 'snowflakesContainer',
      snowflake: 'snowflake',
    };

    this.elements = {
      toggles: document.querySelectorAll(`.${this.toggleClass}`),
    };

    if (this.isWinter()) {
      this.init();
    }
  }

  init() {
    this.setSnowflakesContainer();
    this.setListeners();
    this.start();
  }

  setListeners() {
    this.elements.toggles.forEach((toggle) => {
      toggle.addEventListener('change', () => this.toggle());
    });
  }

  toggle() {
    if (this.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  setSnowflakesContainer() {
    const snowflakesContainer = document.createElement('div');

    snowflakesContainer.classList.add(this.classes.root);
    document.body.appendChild(snowflakesContainer);
  }

  createSnowflake() {
    const snowflakesContainer = document.querySelector(`.${this.classes.root}`);
    const snowflake = document.createElement('div');
    const snowflakeSymbol =
      this.snowflakeSymbols[Math.floor(Math.random() * this.snowflakeSymbols.length)];

    snowflake.classList.add('snowflake');
    snowflake.textContent = snowflakeSymbol;

    this.animateSettings(snowflake);

    if (snowflakesContainer) {
      snowflakesContainer.appendChild(snowflake);
      this.snowflakes.push(snowflake);
    }

    // Удаление снежинки после завершения анимации
    setTimeout(() => {
      snowflake.remove();
      this.snowflakes = this.snowflakes.filter((s) => s !== snowflake);
    }, 11000); // Время жизни снежинки
  }

  animate(currentTime) {
    if (!this.lastSnowflakeTime) {
      this.lastSnowflakeTime = currentTime; // Инициализация времени
    }

    // Проверяем, прошла ли задержка с момента создания последней снежинки
    if (
      currentTime - this.lastSnowflakeTime >= this.delay &&
      this.snowflakes.length < this.maxSnowflakes
    ) {
      this.createSnowflake();
      this.lastSnowflakeTime = currentTime; // Обновляем время создания последней снежинки
    }

    // Запуск следующего кадра анимации
    this.animationFrameId = requestAnimationFrame((time) => this.animate(time));
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.lastSnowflakeTime = 0; // Сброс времени
      requestAnimationFrame((time) => this.animate(time));
    }
  }

  stop() {
    if (this.isRunning && this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.isRunning = false;
    }
  }

  clear() {
    this.snowflakes.forEach((snowflake) => snowflake.remove());
    this.snowflakes = [];
  }

  animateSettings(snowflake, position = 100, speed = 10, size = 5) {
    // Начальная позиция снежинки
    snowflake.style.left = Math.random() * position + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + speed + 's'; // Скорость падения
    snowflake.style.opacity = `${Math.random()};`; // Прозрачность
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + size + 'px'; // Размер
    snowflake.style.setProperty('--wind', String((Math.random() - 0.5) * 2)); // Ветер (случайное смещение по горизонтали)
  }

  isWinter() {
    const winterMonths = [11, 0, 1]; // Декабрь, Январь, Февраль
    const currentMonth = new Date().getMonth();

    return winterMonths.includes(currentMonth);
  }
}
