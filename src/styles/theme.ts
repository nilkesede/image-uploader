// ./src/theme.js

import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    primary: '#2F80ED',
    inverse: '#FFFFFF',
    text: '#4F4F4F'
  }
}

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#333333',
    text: '#FFFFFF'
  }
}