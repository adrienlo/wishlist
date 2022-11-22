module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['typescript-sort-keys', 'sort-destructure-keys'],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      { caseSensitive: false },
    ],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: false, minKeys: 2, natural: false },
    ],
    'typescript-sort-keys/interface': [
      'error',
      'asc',
      { caseSensitive: false, natural: true, requiredFirst: true },
    ],
    'typescript-sort-keys/string-enum': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
  },
};
