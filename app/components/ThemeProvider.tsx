"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
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
  initialTheme?: Theme;
}

export function ThemeProvider({ children, initialTheme = 'system' }: ThemeProviderProps) {
  // SSR-safe initialization - always start with default values
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');
  const [isInitialized, setIsInitialized] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Получить эффективную тему (учитывая системную)
  const getEffectiveTheme = useCallback((): ResolvedTheme => {
    if (typeof window === 'undefined') return 'dark';
    
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }, [theme]);

  // Применить тему к DOM с оптимизацией
  const applyTheme = useCallback((newTheme: ResolvedTheme, isInitial = false) => {
    if (typeof window === 'undefined') return;
    
    const body = document.body;
    const html = document.documentElement;
    
    // Используем requestAnimationFrame для плавного применения
    const apply = () => {
      if (newTheme === 'light') {
        body.classList.add('light');
        html.classList.add('light');
      } else {
        body.classList.remove('light');
        html.classList.remove('light');
      }
      
      // Установить data-атрибуты
      body.setAttribute('data-theme', newTheme);
      html.setAttribute('data-theme', newTheme);
      
      // Добавляем класс для плавного перехода (только после инициализации)
      if (!isInitial && isInitialized) {
        body.classList.add('theme-transition');
        setTimeout(() => {
          body.classList.remove('theme-transition');
        }, 150);
      }
      
      setResolvedTheme(newTheme);
    };

    if (isInitial) {
      apply();
    } else {
      requestAnimationFrame(apply);
    }
  }, [isInitialized]);

  // Установить тему
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      
      const effectiveTheme = newTheme === 'system' 
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : newTheme;
      
      applyTheme(effectiveTheme);
    }
  }, [applyTheme]);

  // Циклическое переключение: system -> light -> dark -> system
  const cycleTheme = useCallback(() => {
    const nextTheme: Theme = theme === 'system' ? 'light' : 
                            theme === 'light' ? 'dark' : 'system';
    setTheme(nextTheme);
  }, [theme, setTheme]);

  // Client-side initialization
  useEffect(() => {
    setIsClient(true);
    
    // Use initial theme from window if available (set by inline script)
    let currentTheme: Theme = initialTheme;
    if (window.__INITIAL_THEME__) {
      currentTheme = window.__INITIAL_THEME__;
    } else {
      // Fallback to localStorage
      try {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
          currentTheme = savedTheme;
        }
      } catch (e) {
        // localStorage not available
      }
    }
    
    setThemeState(currentTheme);
    
    // Apply theme immediately
    let effectiveTheme: ResolvedTheme = 'dark';
    if (window.__INITIAL_RESOLVED_THEME__) {
      effectiveTheme = window.__INITIAL_RESOLVED_THEME__;
    } else {
      effectiveTheme = currentTheme === 'system' 
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : currentTheme;
    }
    
    applyTheme(effectiveTheme, true);
    setIsInitialized(true);
  }, [applyTheme, initialTheme]);

  // Отслеживание изменений системной темы
  useEffect(() => {
    if (typeof window === 'undefined' || theme !== 'system' || !isInitialized) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const newResolvedTheme = e.matches ? 'dark' : 'light';
      applyTheme(newResolvedTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme, isInitialized]);

  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
    cycleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
