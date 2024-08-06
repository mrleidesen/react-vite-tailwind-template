import prettierPlugin from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tsPlugin from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['*/**/*.{ts,tsx}'],
    ignores: ['node_modules/**/*', '.wxt/**/*', '.output/**/*'],
    languageOptions: {
      parser: tsPlugin.parser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/display-name': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'unknown',
          ],
          pathGroups: [
            {
              pattern: `@/**`,
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'type'],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
];
