import { useEffect, useRef, useState } from 'react';

interface SwipeNavigationOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  preventDefaultTouchmoveEvent?: boolean;
}

interface SwipeState {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  deltaX: number;
  deltaY: number;
  direction: 'left' | 'right' | 'up' | 'down' | null;
  isSwiping: boolean;
}

export function useSwipeNavigation(options: SwipeNavigationOptions = {}) {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    threshold = 50,
    preventDefaultTouchmoveEvent = false
  } = options;

  const [swipeState, setSwipeState] = useState<SwipeState>({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    deltaX: 0,
    deltaY: 0,
    direction: null,
    isSwiping: false
  });

  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isSwiping = true;

      setSwipeState(prev => ({
        ...prev,
        startX,
        startY,
        isSwiping: true
      }));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;

      if (preventDefaultTouchmoveEvent) {
        e.preventDefault();
      }

      const touch = e.touches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      setSwipeState(prev => ({
        ...prev,
        endX: touch.clientX,
        endY: touch.clientY,
        deltaX,
        deltaY
      }));
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isSwiping) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      let direction: 'left' | 'right' | 'up' | 'down' | null = null;

      // Определяем направление свайпа
      if (absDeltaX > threshold || absDeltaY > threshold) {
        if (absDeltaX > absDeltaY) {
          direction = deltaX > 0 ? 'right' : 'left';
        } else {
          direction = deltaY > 0 ? 'down' : 'up';
        }
      }

      setSwipeState(prev => ({
        ...prev,
        endX: touch.clientX,
        endY: touch.clientY,
        deltaX,
        deltaY,
        direction,
        isSwiping: false
      }));

      // Вызываем соответствующий callback
      if (direction) {
        switch (direction) {
          case 'left':
            onSwipeLeft?.();
            break;
          case 'right':
            onSwipeRight?.();
            break;
          case 'up':
            onSwipeUp?.();
            break;
          case 'down':
            onSwipeDown?.();
            break;
        }
      }

      isSwiping = false;
    };

    // Добавляем обработчики событий
    element.addEventListener('touchstart', handleTouchStart, { passive: !preventDefaultTouchmoveEvent });
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventDefaultTouchmoveEvent });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold, preventDefaultTouchmoveEvent]);

  return {
    elementRef,
    swipeState,
    isSwiping: swipeState.isSwiping
  };
}

// Хук для навигации между страницами
export function useSwipePageNavigation() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const pages = [
    { path: '/', title: 'Home' },
    { path: '/blog', title: 'Blog' },
    { path: '/faq', title: 'FAQ' },
    { path: '/about', title: 'About' }
  ];

  const { elementRef, swipeState } = useSwipeNavigation({
    onSwipeLeft: () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentPage(prev => {
        const nextPage = Math.min(prev + 1, pages.length - 1);
        if (nextPage !== prev) {
          setTimeout(() => {
            window.location.href = pages[nextPage].path;
          }, 300);
        }
        return nextPage;
      });
      setTimeout(() => setIsAnimating(false), 300);
    },
    onSwipeRight: () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentPage(prev => {
        const prevPage = Math.max(prev - 1, 0);
        if (prevPage !== prev) {
          setTimeout(() => {
            window.location.href = pages[prevPage].path;
          }, 300);
        }
        return prevPage;
      });
      setTimeout(() => setIsAnimating(false), 300);
    },
    threshold: 80 // Увеличиваем порог для более точного определения
  });

  return {
    elementRef,
    swipeState,
    currentPage,
    isAnimating,
    pages
  };
}

// Хук для свайпа в меню
export function useSwipeMenuNavigation() {
  const { elementRef, swipeState } = useSwipeNavigation({
    onSwipeLeft: () => {
      // Закрыть меню при свайпе влево
      const menuPanel = document.getElementById('menuPanel');
      const hamburger = document.getElementById('hamburger');
      
      if (menuPanel && hamburger && menuPanel.classList.contains('open')) {
        menuPanel.classList.remove('open');
        menuPanel.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    },
    onSwipeRight: () => {
      // Открыть меню при свайпе вправо
      const menuPanel = document.getElementById('menuPanel');
      const hamburger = document.getElementById('hamburger');
      
      if (menuPanel && hamburger && !menuPanel.classList.contains('open')) {
        menuPanel.classList.add('open');
        menuPanel.setAttribute('aria-hidden', 'false');
        hamburger.setAttribute('aria-expanded', 'true');
      }
    },
    threshold: 60
  });

  return {
    elementRef,
    swipeState
  };
}
