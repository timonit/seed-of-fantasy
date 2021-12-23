module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'max-classes-per-file': ['off'],
  },
};
