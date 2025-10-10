import { useEffect, useRef } from 'react';

export function useScrollBorder() {
  const buyerRef = useRef<HTMLDivElement>(null);
  const creatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Активация за 100px до входа в viewport
      threshold: 0.1 // Активация при 10% видимости элемента
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Добавляем класс активации градиентной обводки
          entry.target.classList.add('border-active');
        }
      });
    }, observerOptions);

    // Наблюдаем за блоками покупателя и креатора
    if (buyerRef.current) {
      observer.observe(buyerRef.current);
    }
    
    if (creatorRef.current) {
      observer.observe(creatorRef.current);
    }

    // Очистка при размонтировании
    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    buyerRef,
    creatorRef
  };
}
