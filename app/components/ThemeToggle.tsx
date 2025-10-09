"use client";

import React, { useEffect } from 'react';

export default function ThemeToggle() {
  useEffect(() => {
    // Initialize theme from localStorage on component mount
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    
    if (savedTheme === 'light') {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }
  }, []);

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
      className="btn theme-toggle" 
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
