"use client";

import { useEffect } from 'react';

export function ThemeInitializer() {
  useEffect(() => {
    // Этот компонент только для SSR/гидратации
    // Основная логика темы теперь в ThemeProvider
    console.log('[ThemeInitializer] Theme system initialized via ThemeProvider');
  }, []);

  return null;
}
