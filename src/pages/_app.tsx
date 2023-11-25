import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import { Poppins } from 'next/font/google'

import { defaultTheme } from '../styles/theme'
import GlobalStyle from '../styles/global'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

function App({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <main id="main-container" className={poppins.className}>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Drag and drop file upload" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}

export default App
