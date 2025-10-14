"use client";

import React, { useRef, useEffect } from 'react';

export default function LanguageSelector() {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const switchLanguage = (lang: string) => {
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru]');
    elements.forEach(element => {
      const enText = element.getAttribute('data-lang-en');
      const ruText = element.getAttribute('data-lang-ru');
      
      if (!enText || !ruText) return;
      
      // For menu items with SVG, only update the span text
      const spanElement = element.querySelector('span');
      if (spanElement) {
        if (lang === 'ru' && ruText) {
          spanElement.textContent = ruText;
        } else if (lang === 'en' && enText) {
          spanElement.textContent = enText;
        }
      } else {
        // For elements without spans, set innerHTML to preserve structure
        const textToSet = lang === 'ru' ? ruText : enText;
        if (textToSet) {
          // Clear existing content and set new text
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          element.appendChild(document.createTextNode(textToSet));
        }
      }
    });
    
    // Update button text
    if (buttonRef.current) {
      const textSpan = buttonRef.current.querySelector('.language-text');
      if (textSpan) {
        textSpan.textContent = lang.toUpperCase();
      }
    }
    
    // Update active state
    const menuItems = menuRef.current?.querySelectorAll('.language-item');
    menuItems?.forEach(item => {
      item.classList.remove('active');
      if (item.textContent === lang.toUpperCase()) {
        item.classList.add('active');
      }
    });
    
    localStorage.setItem('selectedLanguage', lang);
    
    // Dispatch language change event
    window.dispatchEvent(new CustomEvent('languageChange'));
    
    // Navigate to locale-specific route if counterpart exists by path convention
    try {
      const currentPath = window.location.pathname;
      const cleanPath = currentPath.replace(/^\/ru/, '') || '/';
      const targetPath = lang === 'ru' ? `/ru${cleanPath === '/' ? '' : cleanPath}` : cleanPath;
      const targetUrl = `${targetPath}${window.location.search}${window.location.hash}`;
      if (targetUrl !== currentPath + window.location.search + window.location.hash) {
        window.location.assign(targetUrl);
        return; // stop further UI tweaks; full navigation will happen
      }
    } catch {}
    
    // Close menu
    if (menuRef.current) {
      menuRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    // Initialize language from localStorage on component mount
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      switchLanguage(savedLanguage);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
          onClick={() => switchLanguage('en')}
        >
          EN
        </button>
        <button 
          className="language-item"
          onClick={() => switchLanguage('ru')}
        >
          RU
        </button>
      </div>
    </div>
  );
}
