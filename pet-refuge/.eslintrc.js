module.exports = {
  env: {
    browser: true,
    es2021: true,
    jasmine: true,
  },
  extends: [
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-useless-constructor': 'off',
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'eslintimport/prefer-default-export' : 'off'
  },
};
