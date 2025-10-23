"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LanguageSelector() {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  
  // Local state for language management - avoid hydration mismatch
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ru'>('en');
  const [isClient, setIsClient] = useState(false);

  // applyLanguageToDOM function removed - useLanguage handles DOM updates

  const switchLanguage = (lang: 'en' | 'ru') => {
    if (typeof window === 'undefined') return;
    if (lang === currentLanguage) return;

    setCurrentLanguage(lang);
    try { 
      localStorage.setItem('selectedLanguage', lang); 
    } catch {}

    // Don't apply language to DOM here - useLanguage will handle it
    // Just dispatch the event for useLanguage to handle
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
  };

  const showLanguageSpinner = () => {
    console.log('🔄 showLanguageSpinner called');
    const overlay = document.getElementById('languageSwitchingOverlay');
    console.log('🔍 Overlay element found:', overlay);
    if (overlay) {
      overlay.classList.add('show');
      console.log('✅ Added "show" class to overlay');
      console.log('🎯 Overlay classes:', overlay.className);
    } else {
      console.error('❌ Overlay element not found!');
    }
  };

  const hideLanguageSpinner = () => {
    console.log('🔄 hideLanguageSpinner called');
    const overlay = document.getElementById('languageSwitchingOverlay');
    if (overlay) {
      overlay.classList.remove('show');
      console.log('✅ Removed "show" class from overlay');
    }
  };

  const handleLanguageSwitch = (lang: 'en' | 'ru') => {
    console.log('🚀 handleLanguageSwitch called with lang:', lang);
    
    // Close menu first
    if (menuRef.current) {
      menuRef.current.classList.remove('show');
    }

    // Show global spinner
    console.log('📱 About to show spinner...');
    showLanguageSpinner();

    // Switch language globally (this will also persist to localStorage)
    switchLanguage(lang);

    // Route to locale-specific path if needed (with small delay to allow DOM update)
    const pathname = window.location?.pathname || '/';
    console.log('🛣️ Current pathname:', pathname);
    
    setTimeout(() => {
      if (lang === 'ru' && !pathname.startsWith('/ru')) {
        const target = pathname === '/' ? '/ru' : `/ru${pathname}`;
        console.log('🔄 Navigating to RU:', target);
        router.push(target);
      } else if (lang === 'en' && pathname.startsWith('/ru')) {
        const target = pathname.replace(/^\/ru/, '') || '/';
        console.log('🔄 Navigating to EN:', target);
        router.push(target);
      }
      
      // Hide spinner after navigation
      setTimeout(() => {
        console.log('⏰ Hiding spinner after delay...');
        hideLanguageSpinner();
      }, 1500); // Increased delay to make spinner more visible
    }, 150); // Small delay to allow DOM to update
  };

  useEffect(() => {
    console.log('🔧 LanguageSelector useEffect - initializing...');
    
    // Set client flag to avoid hydration mismatch
    setIsClient(true);
    
    // Only hide spinner on initial page load, not during language switching
    const isInitialLoad = !document.getElementById('languageSwitchingOverlay')?.classList.contains('show');
    if (isInitialLoad) {
      console.log('🧹 Hiding spinner on initial page load...');
      hideLanguageSpinner();
    } else {
      console.log('⏸️ Skipping spinner hide - language switching in progress');
    }
    
    // Listen for language change events from useLanguage hook
    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail?.language;
      if (newLang && newLang !== currentLanguage) {
        setCurrentLanguage(newLang);
        // Don't apply to DOM here - useLanguage already does it
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('languageChange', handleLanguageChange as EventListener);
      
      // Initialize language on mount - only update state, don't apply to DOM
      const timer = setTimeout(() => {
        // Determine initial language from URL
        let initialLang: 'en' | 'ru' = 'en';
        try {
          const pathname = window.location?.pathname || '/';
          if (pathname.startsWith('/ru')) initialLang = 'ru';
        } catch {}

        // Only update state - useLanguage will handle DOM updates
        setCurrentLanguage(initialLang);
      }, 100);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('languageChange', handleLanguageChange as EventListener);
      };
    }
  }, [currentLanguage]);

  useEffect(() => {
    // Update button text and active state based on current language
    if (isClient && buttonRef.current) {
      const textSpan = buttonRef.current.querySelector('.language-text');
      if (textSpan) {
        textSpan.textContent = currentLanguage.toUpperCase();
      }
    }
    
    // Update active state
    if (isClient) {
      const menuItems = menuRef.current?.querySelectorAll('.language-item');
      menuItems?.forEach(item => {
        item.classList.remove('active');
        if (item.textContent === currentLanguage.toUpperCase()) {
          item.classList.add('active');
        }
      });
    }
  }, [currentLanguage, isClient]);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show');
    }
  };

      return (
        <>
          <div className="language-selector" suppressHydrationWarning>
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

          {/* Глобальный спиннер переключения языка */}
          <div className="language-switching-overlay" id="languageSwitchingOverlay">
            <div className="language-switching-spinner">
              <div className="gradient-spinner">
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
              </div>
              <p className="language-switching-text" data-lang-en="Switching language..." data-lang-ru="Переключение языка...">
                Switching language...
              </p>
            </div>
          </div>
        </>
      );
}
