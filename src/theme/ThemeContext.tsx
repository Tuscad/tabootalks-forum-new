import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'neutral' | 'blue' | 'green' | 'safe';

const ThemeContext = createContext({
  theme: 'neutral' as Theme,
  setTheme: (_: Theme) => {}
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'neutral';
  });

  useEffect(() => {
    document.body.classList.remove('theme-neutral', 'theme-blue', 'theme-green', 'theme-safe');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}