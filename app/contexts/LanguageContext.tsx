"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: 'en' | 'ru';
  switchLanguage: (lang: 'en' | 'ru') => void;
  isRussian: boolean;
  isEnglish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: 'en' | 'ru';
  forceLanguage?: 'en' | 'ru';
}

export function LanguageProvider({ 
  children, 
  defaultLanguage = 'en', 
  forceLanguage 
}: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ru'>(() => {
    if (forceLanguage) {
      console.log('[LanguageProvider] Initializing with forceLanguage:', forceLanguage);
      return forceLanguage;
    }
    if (typeof window === 'undefined') {
      console.log('[LanguageProvider] Server-side, using defaultLanguage:', defaultLanguage);
      return defaultLanguage;
    }
    // Prefer URL prefix (/ru) or stored selection; fallback to defaultLanguage
    try {
      const pathname = window.location?.pathname || '/';
      if (pathname.startsWith('/ru')) return 'ru';
      const stored = localStorage.getItem('selectedLanguage') as 'en' | 'ru' | null;
      if (stored === 'en' || stored === 'ru') return stored;
    } catch {}
    console.log('[LanguageProvider] Client-side, using defaultLanguage:', defaultLanguage);
    return defaultLanguage;
  });

  const switchLanguage = (lang: 'en' | 'ru') => {
    if (typeof window === 'undefined') return;
    if (lang === currentLanguage) return;

    // Update state and persist selection
    setCurrentLanguage(lang);
    try { localStorage.setItem('selectedLanguage', lang); } catch {}

    // Apply language to DOM elements
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
    
    // Update language selector button
    const langButton = document.querySelector('.language-text');
    if (langButton) {
      langButton.textContent = lang.toUpperCase();
    }
    
    // Update active state in language menu
    const menuItems = document.querySelectorAll('.language-item');
    menuItems?.forEach(item => {
      item.classList.remove('active');
      if (item.textContent === lang.toUpperCase()) {
        item.classList.add('active');
      }
    });

    // Add/remove Russian optimization class
    if (lang === 'ru') {
      document.body.classList.add('ru-optimized');
    } else {
      document.body.classList.remove('ru-optimized');
    }
    
    // Dispatch language change event
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
  };

  // Initialize language on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Apply language with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Determine initial language from URL or storage
      let currentLang: 'en' | 'ru' = forceLanguage || defaultLanguage;
      try {
        const pathname = window.location?.pathname || '/';
        if (pathname.startsWith('/ru')) currentLang = 'ru';
        const stored = localStorage.getItem('selectedLanguage') as 'en' | 'ru' | null;
        if (stored === 'en' || stored === 'ru') currentLang = stored;
      } catch {}

      // Only apply language if it's different from what's already applied
      if (currentLang !== currentLanguage) {
        switchLanguage(currentLang);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [forceLanguage, defaultLanguage]); // Removed currentLanguage dependency

  // Listen for language change events from other components
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail?.language;
      if (newLang && newLang !== currentLanguage) {
        // Language was changed by another component, update our state
        setCurrentLanguage(newLang);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []); // Remove currentLanguage dependency to prevent infinite loop

  const value = {
    currentLanguage,
    switchLanguage,
    isRussian: currentLanguage === 'ru',
    isEnglish: currentLanguage === 'en'
  };

  console.log('[LanguageProvider] Rendering with value:', value);
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
