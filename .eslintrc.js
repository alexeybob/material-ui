module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'import', 'testing-library', 'jest-dom'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': 'typescript'
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // these we want to change to error after we merge some outstanding work
    'react/prop-types': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    'array-callback-return': 'error',
    'no-unexpected-multiline': 'error',
    'no-console': 'warn',
    // these we probably do not care about
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/semi': ['error'],
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/media-has-caption': 'off',
    // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external']
      }
    ],
    'jsx-a11y/aria-role': [
      'error',
      {
        ignoreNonDOM: true
      }
    ]
  }
};
