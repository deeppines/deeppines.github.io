import style from './footer.module.scss';

const footer = () => {
  const since = '2020';
  const current = new Date().getFullYear();

  return `
    <footer class=${style.root}>
      <p>©${since}-${current}</p>
    </footer>
  `;
};

export default footer;
