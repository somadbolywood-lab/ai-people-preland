"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Always dark theme only
  const [theme] = useState<Theme>('dark');

  // Apply dark theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
      const html = document.documentElement;
      
      // Always apply dark theme
      body.classList.remove('light');
      html.classList.remove('light');
      body.setAttribute('data-theme', 'dark');
      html.setAttribute('data-theme', 'dark');
    }
  }, []);

  const value: ThemeContextType = {
    theme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
