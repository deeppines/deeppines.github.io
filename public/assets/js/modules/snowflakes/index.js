class Snowflakes {
  constructor() {
    this.snowflakeSymbols = ['❅', '❆', '❉', '❋']; // Символы снежинок

    this.classes = {
      root: 'snowflakesContainer',
      snowflake: 'snowflake',
    };

    this.init();
  }

  init() {
    this.setSnowflakesContainer();

    setInterval(() => {
      this.createSnowflake();
    }, 100);
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

    // Начальная позиция снежинки
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 10 + 's'; // Скорость падения
    snowflake.style.opacity = `${Math.random()};`; // Прозрачность
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px'; // Размер
    snowflake.style.setProperty('--wind', String((Math.random() - 0.5) * 2)); // Ветер (случайное смещение по горизонтали)

    if (snowflakesContainer) {
      snowflakesContainer.appendChild(snowflake);
    }

    // Удаление снежинки после завершения анимации
    setTimeout(() => {
      snowflake.remove();
    }, 11000); // Время жизни снежинки
  }
}
