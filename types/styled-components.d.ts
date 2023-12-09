import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      backgroundMuted: string
      primary: string
      inverse: string
      text: string
      muted: string
    }
  }
}
