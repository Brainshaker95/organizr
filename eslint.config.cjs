module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  ignorePatterns: [
    '*.cjs',
  ],
  overrides: [
    {
      files: [
        '*.svelte',
      ],
      rules: {
        'import/extensions': 'off',
        'import/first': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'no-multiple-empty-lines': 'off',
      },
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/ignore-styles': () => true,
    'svelte3/typescript': () => require('typescript'),
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'svelte.config.js',
        ]
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    project: './tsconfig.eslint.json',
    extraFileExtensions: [
      '.svelte',
    ],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
