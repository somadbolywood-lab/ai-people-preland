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
  // Используем начальное состояние из window для предотвращения гидратации
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined' && window.__INITIAL_THEME__) {
      return window.__INITIAL_THEME__;
    }
    return initialTheme;
  };

  const getInitialResolvedTheme = (): ResolvedTheme => {
    if (typeof window !== 'undefined' && window.__INITIAL_RESOLVED_THEME__) {
      return window.__INITIAL_RESOLVED_THEME__;
    }
    return 'dark';
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(getInitialResolvedTheme);
  const [isInitialized, setIsInitialized] = useState(false);

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

  // Инициализация при монтировании
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Получить сохраненную тему
    const savedTheme = localStorage.getItem('theme') as Theme;
    const initialTheme = (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') 
      ? savedTheme 
      : 'system';
    
    setThemeState(initialTheme);
    
    // Применить тему немедленно
    const effectiveTheme = initialTheme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : initialTheme;
    
    applyTheme(effectiveTheme, true);
    setIsInitialized(true);
  }, [applyTheme]);

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
