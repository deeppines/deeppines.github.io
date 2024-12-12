import style from './footer.module.scss';

const footer = () => {
  const since = '2017';
  const current = new Date().getFullYear();

  return `
    <footer class=${style.root}>
      <div>
        <p>Created by <a href="https://github.com/deeppines">deeppines</a></p>
      </div>
      <div>
        <p>©${since}-${current}</p>
      </div>
    </footer>
  `;
};

export default footer;
