// pages/_app.tsx
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import { defaultTheme } from '../styles/theme'
import GlobalStyle from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
