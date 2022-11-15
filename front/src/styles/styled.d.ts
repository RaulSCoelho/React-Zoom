import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secundary: string
      background: string
      text: string
      resumeCard: string

      palette: {
        black: string
        white: string
        red: string
        green: string
        blue: string
        pastel: {
          black: string
          white: string
          red: string
          green: string
          blue: string
          pink: string
          orange: string
          lightBlue: string
          purple: string
        }
      }
    }
  }
}
