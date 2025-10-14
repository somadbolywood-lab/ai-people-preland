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
    if (forceLanguage) return forceLanguage;
    if (typeof window === 'undefined') return defaultLanguage;
    return (localStorage.getItem('selectedLanguage') as 'en' | 'ru') || defaultLanguage;
  });

  const switchLanguage = (lang: 'en' | 'ru') => {
    if (typeof window === 'undefined') return;
    if (lang === currentLanguage) return;

    // Update localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update state
    setCurrentLanguage(lang);

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

    // Set forced language if provided
    if (forceLanguage) {
      localStorage.setItem('selectedLanguage', forceLanguage);
    }

    // Apply language with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      switchLanguage(currentLanguage);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentLanguage, forceLanguage]);

  // Listen for language change events from other components
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail?.language;
      if (newLang && newLang !== currentLanguage) {
        // Language was changed by another component, update our state
        localStorage.setItem('selectedLanguage', newLang);
        setCurrentLanguage(newLang);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    switchLanguage,
    isRussian: currentLanguage === 'ru',
    isEnglish: currentLanguage === 'en'
  };

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
