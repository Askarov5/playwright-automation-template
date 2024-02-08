module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  ignorePatterns: [
    './node_modules',
    './dist',
    './playwright-report',
    './testresults',
  ],
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
};
