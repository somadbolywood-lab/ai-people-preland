"use client";

import React from 'react';

export default function ThemeToggle() {
  const toggleTheme = () => {
    const body = document.body;
    const isLight = body.classList.contains('light');
    
    if (isLight) {
      body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {/* Moon icon for dark mode */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  );
}
