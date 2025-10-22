"use client";

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface UseThemeReturn {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');

  // Получить эффективную тему (учитывая системную)
  const getEffectiveTheme = useCallback((): ResolvedTheme => {
    if (typeof window === 'undefined') return 'dark';
    
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }, [theme]);

  // Применить тему к DOM
  const applyTheme = useCallback((newTheme: ResolvedTheme) => {
    if (typeof window === 'undefined') return;
    
    const body = document.body;
    const html = document.documentElement;
    
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
    
    setResolvedTheme(newTheme);
  }, []);

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
    
    // Применить тему
    const effectiveTheme = initialTheme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : initialTheme;
    
    applyTheme(effectiveTheme);
  }, [applyTheme]);

  // Отслеживание изменений системной темы
  useEffect(() => {
    if (typeof window === 'undefined' || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const newResolvedTheme = e.matches ? 'dark' : 'light';
      applyTheme(newResolvedTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme,
    cycleTheme
  };
}


