"use client";

import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguageContext } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { currentLanguage, switchLanguage } = useLanguageContext();

  const handleLanguageSwitch = (lang: 'en' | 'ru') => {
    // Use the unified language switching function
    switchLanguage(lang);
    
    // Close menu
    if (menuRef.current) {
      menuRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    // Update button text and active state based on current language
    if (buttonRef.current) {
      const textSpan = buttonRef.current.querySelector('.language-text');
      if (textSpan) {
        textSpan.textContent = currentLanguage.toUpperCase();
      }
    }
    
    // Update active state
    const menuItems = menuRef.current?.querySelectorAll('.language-item');
    menuItems?.forEach(item => {
      item.classList.remove('active');
      if (item.textContent === currentLanguage.toUpperCase()) {
        item.classList.add('active');
      }
    });
  }, [currentLanguage]);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show');
    }
  };

  return (
    <div className="language-selector">
      <button 
        ref={buttonRef}
        className="language-btn" 
        onClick={toggleMenu}
        aria-label="Select language"
      >
        <span className="language-text">EN</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div ref={menuRef} className="language-menu">
        <button 
          className="language-item active"
          onClick={() => handleLanguageSwitch('en')}
        >
          EN
        </button>
        <button 
          className="language-item"
          onClick={() => handleLanguageSwitch('ru')}
        >
          RU
        </button>
      </div>
    </div>
  );
}
