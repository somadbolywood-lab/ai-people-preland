"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
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
  // Initialize theme based on localStorage immediately
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'dark';
    }
    return 'dark';
  });
  const [isClient, setIsClient] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
      
      // Apply theme immediately
      const body = document.body;
      const html = document.documentElement;
      
      if (savedTheme === 'light') {
        body.classList.add('light');
        html.classList.add('light');
      } else {
        body.classList.remove('light');
        html.classList.remove('light');
      }
      
      body.setAttribute('data-theme', savedTheme);
      html.setAttribute('data-theme', savedTheme);
      
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      
      const body = document.body;
      const html = document.documentElement;
      
      if (newTheme === 'light') {
        body.classList.add('light');
        html.classList.add('light');
      } else {
        body.classList.remove('light');
        html.classList.remove('light');
      }
      
      body.setAttribute('data-theme', newTheme);
      html.setAttribute('data-theme', newTheme);
    }
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}