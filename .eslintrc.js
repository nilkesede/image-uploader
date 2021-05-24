module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'react-app'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
