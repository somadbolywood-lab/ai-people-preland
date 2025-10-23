"use client";

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    // Theme initialization is now handled by ThemeProvider
    // This component is kept for compatibility but does nothing
    console.log('[ThemeInitializer] Theme initialization handled by ThemeProvider');
  }, []);

  // Never render anything to avoid hydration issues
  return null;
}