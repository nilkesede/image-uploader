// ./src/theme.js

import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    backgroundMuted: '#F6F8FB',
    primary: '#2F80ED',
    inverse: '#FFFFFF',
    text: '#4F4F4F',
    muted: '#828282'
  }
}

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#333333',
    backgroundMuted: '#4F4F4F',
    text: '#FFFFFF'
  }
}

export const defaultTheme = lightTheme
