module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'require-jsdoc': 'off',
    'max-len': 'off',
    'semi': 'off',
    'camelcase': 'off',
    'guard-for-in': 'off',
  },
}
