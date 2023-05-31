// ./src/theme.js

import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#F6F9FC',
    text: '#333'
  }
}

export const darkTheme = {
  ...lightTheme,
  colors: {
    background: '#1b1c1d',
    text: '#FFFFFF'
  }
}
