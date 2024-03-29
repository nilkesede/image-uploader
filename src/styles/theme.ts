// ./src/theme.js

import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    backgroundMuted: '#F2F2F2',
    primary: '#2F80ED',
    inverse: '#FFFFFF',
    text: '#4F4F4F',
    muted: '#828282',
    border: '#E0E0E0'
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
