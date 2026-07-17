import pluginJs from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const tsconfigRootDir = dirname(fileURLToPath(import.meta.url));

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['public/**/*.js', 'babel.config.js'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir,
      },
    },
    rules: {
      '@typescript-eslint/await-thenable': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // 1) External dependencies, libraries, third-party scripts.
            ['^@?\\w'],
            // 2) Type imports.
            ['\\u0000$'],
            // 3) Shared.
            ['^@/shared(?:/.*)?$'],
            // 4) Utils.
            ['^@/ui/utils(?:/.*)?$', '^@/utils(?:/.*)?$'],
            // 5) Features.
            ['^@/features(?:/.*)?$'],
            // 6) Layouts.
            ['^@layouts', '^@/ui/layouts(?:/.*)?$'],
            // 7) Components.
            ['^@components', '^@/ui/components(?:/.*)?$'],
            // 8) Elements.
            ['^@elements', '^@/ui/elements(?:/.*)?$'],
            // 9) Assets.
            ['^@assets', '^@/assets(?:/.*)?$'],
            // 10) Parent relative imports (../).
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // 11) Relative imports (./).
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Other side effect imports.
            ['^\\u0000'],
            // 12) Style imports (always at bottom, including side effects).
            ['^\\u0000.*\\.s?css$', '^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
];
