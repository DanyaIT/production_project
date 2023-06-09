import React, { useState, useMemo, FC } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

interface ThemeProviderProps {
  initialTheme?: Theme,
  children: React.ReactNode
}


export const ThemeProvider = (props: ThemeProviderProps ) => {
  const {
    children,
    initialTheme,
  } = props

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <div>
      <ThemeContext.Provider value={defaultProps}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
