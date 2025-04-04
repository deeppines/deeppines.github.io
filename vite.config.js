import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import ogPlugin from 'vite-plugin-open-graph';

export default defineConfig(({ mode }) => ({
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
    compression(),
    ogPlugin({
      basic: {
        title: 'Кирдяшкин Егор',
        type: 'website',
        description: 'Frontend developer',
        image: 'https://github.com/deeppines.png',
        url: 'https://deeppines.github.io',
        locale: 'ru-RU',
        siteName: 'deeppines.github.io',
      },
    }),
    mode === 'analyze' &&
      visualizer({
        open: true,
        filename: 'analyze.html',
      }),
  ],
}));
