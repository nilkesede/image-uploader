import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global';
import { lightTheme, darkTheme } from '../src/styles/theme';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: 'light',
    Provider:  ThemeProvider,
    GlobalStyles
  })
]
