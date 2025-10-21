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
    // Always use languageState for dynamic switching, forceLanguage only for initial load
    return languageState;
  }, [languageState]);

  // Memoized language switching function
  const switchLanguage = useCallback((lang: 'en' | 'ru') => {
    if (typeof window === 'undefined') return;

    // Update state to trigger re-render (don't update localStorage to avoid global conflicts)
    setLanguageState(lang);

    // Apply language to DOM elements
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru]');
    elements.forEach(element => {
      const enText = element.getAttribute('data-lang-en');
      const ruText = element.getAttribute('data-lang-ru');
      if (!enText || !ruText) return;

      const textToSet = lang === 'ru' ? ruText : enText;

      // Prefer updating only desktop labels to avoid overwriting mobile-short labels
      const desktopLabels = element.querySelectorAll('span.label-desktop');
      if (desktopLabels.length > 0) {
        desktopLabels.forEach(span => {
          if (span.getAttribute('data-lang-skip') === 'true') return;
          span.textContent = textToSet;
        });
        return;
      }

      // Fallback: update spans that are not marked to skip
      const spanElements = element.querySelectorAll('span:not([data-lang-skip])');
      if (spanElements.length > 0) {
        spanElements.forEach(span => {
          if (span.querySelector('svg')) return;
          span.textContent = textToSet;
        });
      } else {
        if (textToSet) {
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
  }, []); // Remove currentLanguage dependency to avoid circular dependency

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

    // Apply language with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Use forceLanguage for initial load, then allow dynamic switching
      const initialLanguage = forceLanguage || languageState;
      switchLanguage(initialLanguage);
      // Mark as initialized
      document.body.setAttribute(initKey, 'true');
    }, 100);

    return () => clearTimeout(timer);
  }, [forceLanguage, skipInitialization, switchLanguage, languageState]);

  // Listen for language change events from other components
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail?.language;
      if (newLang && newLang !== languageState) {
        // Language was changed by another component, update our state
        setLanguageState(newLang);
        // Apply the language change to DOM
        switchLanguage(newLang);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, [languageState, switchLanguage]);

  return {
    currentLanguage,
    switchLanguage,
    isRussian: currentLanguage === 'ru',
    isEnglish: currentLanguage === 'en'
  };
}
