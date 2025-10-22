"use client";

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    // Initialize theme immediately to prevent flash
    if (typeof window !== 'undefined') {
      const body = document.body;
      
      // 1. Check localStorage first (user preference)
      let savedTheme = localStorage.getItem('theme');
      
      // 2. If no saved preference, detect system theme
      if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        savedTheme = prefersDark ? 'dark' : 'light';
        // Don't save to localStorage yet - let user explicitly choose
      }
      
      // 3. Apply theme immediately
      if (savedTheme === 'light') {
        body.classList.add('light');
      } else {
        body.classList.remove('light');
      }

      // Handle storage changes from other tabs
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'theme' && e.newValue) {
          if (e.newValue === 'light') {
            body.classList.add('light');
          } else {
            body.classList.remove('light');
          }
        }
      };

      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, []);

  // Never render anything to avoid hydration issues
  return null;
}
