import React, { useCallback, createContext, useEffect } from 'react'

import { DefaultTheme, ThemeProvider } from 'styled-components'

import usePersistedState from '../hooks/usePersistedState'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface ThemeContextType {
  theme: DefaultTheme
  onToggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>(null)

interface Props {
  children?: React.ReactNode
}

export const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', dark)

  const onToggleTheme = useCallback(() => {
    setTheme(state => (state.title === 'Light Mode' ? dark : light))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
