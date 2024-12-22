import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import ogPlugin from 'vite-plugin-open-graph';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/ui/components', import.meta.url)),
      },
      {
        find: '@layouts',
        replacement: fileURLToPath(new URL('./src/ui/layouts', import.meta.url)),
      },
    ],
  },
  assetsInclude: ['**/*.ttf'],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    ogPlugin({
      basic: {
        title: 'Кирдяшкин Егор',
        type: 'website',
        description: 'Frontend developer',
        image: {
          url: 'https://github.com/deeppines.png',
          secureUrl: 'https://github.com/deeppines.png',
          width: 200,
          height: 200,
          alt: 'Кирдяшкин Егор',
          type: 'image/png',
        },
        url: 'https://deeppines.github.io',
        locale: 'ru-RU',
        siteName: 'deeppines.github.io',
      },
    }),
  ],
});
