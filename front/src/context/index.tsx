import React from 'react'

import { ThemesProvider } from './ThemeContext'
import { ZoomProvider } from './ZoomContext'

interface Props {
  children?: React.ReactNode
}

const AppContext: React.FC<Props> = ({ children }) => {
  return (
    <ThemesProvider>
      <ZoomProvider>{children}</ZoomProvider>
    </ThemesProvider>
  )
}

export default AppContext
