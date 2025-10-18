"use client";

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    // Initialize theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      // Check localStorage first (user preference)
      let savedTheme = localStorage.getItem('theme');
      
      // If no saved preference, detect system theme
      if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        savedTheme = prefersDark ? 'dark' : 'light';
      }
      
      // Apply theme
      if (savedTheme === 'light') {
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
      }

      // Handle storage changes from other tabs
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'theme' && e.newValue) {
          if (e.newValue === 'light') {
            document.body.classList.add('light');
          } else {
            document.body.classList.remove('light');
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
