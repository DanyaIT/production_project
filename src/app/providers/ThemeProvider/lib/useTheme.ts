import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface ThemeResultState {
  theme: Theme,
  toggleTheme: () => void
}

export function useTheme(): ThemeResultState  {
  const { theme, setTheme } = useContext<any>(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  };

  return {
    theme,
    toggleTheme
  }
};
