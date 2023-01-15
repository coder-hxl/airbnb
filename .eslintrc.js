module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ['react-app', 'react-app/jest'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'react-hooks/exhaustive-deps': 'off'
  }
}
