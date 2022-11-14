module.exports = {
  extends: [
    // '../../.eslintrc.json',
    'next',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@next/next/no-html-link-for-pages': [2, path.join(__dirname, 'pages')],
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@next/next/no-img-element': 'off',
      },
    },
  ]
};