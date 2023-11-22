module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'react-app',
    'plugin:storybook/recommended',
    'plugin:@next/next/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
