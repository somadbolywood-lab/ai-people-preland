"use client";

import { useEffect, useCallback, useMemo, useState } from 'react';

interface UseLanguageOptions {
  defaultLanguage?: 'en' | 'ru';
  forceLanguage?: 'en' | 'ru';
  skipInitialization?: boolean;
}

export function useLanguage(options: UseLanguageOptions = {}) {
  const { 
    defaultLanguage = 'en', 
    forceLanguage, 
    skipInitialization = false 
  } = options;

  // State to track language changes
  const [languageState, setLanguageState] = useState<'en' | 'ru'>(() => {
    if (forceLanguage) return forceLanguage;
    if (typeof window === 'undefined') return defaultLanguage;
    return (localStorage.getItem('selectedLanguage') as 'en' | 'ru') || defaultLanguage;
  });

  // Memoized language value to prevent unnecessary re-renders
  const currentLanguage = useMemo(() => {
    if (forceLanguage) return forceLanguage;
    return languageState;
  }, [forceLanguage, languageState]);

  // Memoized language switching function
  const switchLanguage = useCallback((lang: 'en' | 'ru') => {
    if (typeof window === 'undefined') return;

    // Prevent unnecessary switches
    if (lang === currentLanguage) return;

    // Update localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update state to trigger re-render
    setLanguageState(lang);

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
  }, [currentLanguage]);

  // Initialize language on mount (only if not skipped)
  useEffect(() => {
    if (skipInitialization) return;
    if (typeof window === 'undefined') return;

    // Check if language has already been initialized to prevent double initialization
    const initKey = 'language-initialized';
    if (document.body.hasAttribute(initKey)) {
      console.log('[useLanguage] Language already initialized, skipping...');
      return;
    }

    // Set forced language if provided
    if (forceLanguage) {
      localStorage.setItem('selectedLanguage', forceLanguage);
    }

    // Apply language with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      switchLanguage(currentLanguage);
      // Mark as initialized
      document.body.setAttribute(initKey, 'true');
    }, 100);

    return () => clearTimeout(timer);
  }, [currentLanguage, forceLanguage, skipInitialization, switchLanguage]);

  // Listen for language change events from other components
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail?.language;
      if (newLang && newLang !== currentLanguage) {
        // Language was changed by another component, update our state
        localStorage.setItem('selectedLanguage', newLang);
        setLanguageState(newLang);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, [currentLanguage]);

  return {
    currentLanguage,
    switchLanguage,
    isRussian: currentLanguage === 'ru',
    isEnglish: currentLanguage === 'en'
  };
}
