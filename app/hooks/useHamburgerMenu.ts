import { useEffect, useState } from 'react';

export function useHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMobileMenu = () => {
      const hamburger = document.getElementById('hamburger');
      const menuPanel = document.getElementById('menuPanel');
      
      if (!hamburger || !menuPanel) {
        console.log('[useHamburgerMenu] Elements not found');
        return;
      }

      // Check if already initialized
      if (hamburger.hasAttribute('data-menu-initialized')) {
        console.log('[useHamburgerMenu] Already initialized');
        return;
      }

      hamburger.setAttribute('data-menu-initialized', 'true');

      const handleMenuToggle = () => {
        const menuIsOpen = menuPanel.classList.contains('open');
        
        if (menuIsOpen) {
          menuPanel.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          menuPanel.setAttribute('aria-hidden', 'true');
          setIsOpen(false);
        } else {
          menuPanel.classList.add('open');
          hamburger.setAttribute('aria-expanded', 'true');
          menuPanel.setAttribute('aria-hidden', 'false');
          setIsOpen(true);
        }
      };

      hamburger.addEventListener('click', handleMenuToggle);

      // Close menu when clicking outside
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!hamburger.contains(target) && !menuPanel.contains(target)) {
          menuPanel.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          menuPanel.setAttribute('aria-hidden', 'true');
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);

      // Cleanup
      return () => {
        hamburger.removeEventListener('click', handleMenuToggle);
        document.removeEventListener('click', handleClickOutside);
        hamburger.removeAttribute('data-menu-initialized');
      };
    };

    let cleanup: (() => void) | undefined;
    
    const timer = setTimeout(() => {
      cleanup = initMobileMenu();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

  const toggleMenu = () => {
    if (typeof window === 'undefined') return;
    
    const hamburger = document.getElementById('hamburger');
    const menuPanel = document.getElementById('menuPanel');
    
    if (!hamburger || !menuPanel) return;
    
    const menuIsOpen = menuPanel.classList.contains('open');
    
    if (menuIsOpen) {
      menuPanel.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      menuPanel.setAttribute('aria-hidden', 'true');
      setIsOpen(false);
    } else {
      menuPanel.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      menuPanel.setAttribute('aria-hidden', 'false');
      setIsOpen(true);
    }
  };

  return { isOpen, toggleMenu };
}




