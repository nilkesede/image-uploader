import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
`
