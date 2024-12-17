import pluginJs from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Common types
            ['^@?\\/types'],
            // Common constants
            ['^@constants?\\/'],
            // Utils
            ['^@?\\/utils'],
            // Api
            ['^@?\\/api'],
            // Services
            ['^@?\\/services'],
            // UI Pages
            ['^@?\\/ui\\/pages'],
            // UI Layouts
            ['^@?\\/ui\\/layouts'],
            // UI Elements
            ['^@?\\/ui\\/elements'],
            // UI Components
            ['^@?\\/ui\\/components'],
            // UI Other
            ['^@?\\/ui\\/[^ce]', '^@?\\/ui\\/e', '^@?\\/ui\\/c'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Utils relative imports.
            ['^\\./utils'],
            // Components relative imports.
            ['^\\./components'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
];
