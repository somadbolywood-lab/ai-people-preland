"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Проверяем, установлено ли приложение
    const checkIfInstalled = () => {
      // Проверяем, запущено ли приложение в standalone режиме
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      // Или проверяем, есть ли в навигаторе флаг
      const isInStandaloneMode = (window.navigator as any).standalone === true;
      
      setIsInstalled(isStandalone || isInStandaloneMode);
    };

    checkIfInstalled();

    // Слушаем событие beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Показываем промпт через 3 секунды после загрузки
      setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000);
    };

    // Слушаем событие appinstalled
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Показываем промпт установки
    deferredPrompt.prompt();

    // Ждем результат
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Не показываем промпт в течение 7 дней
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // Не показываем, если уже установлено или пользователь отклонил
  if (isInstalled || !showInstallPrompt || !deferredPrompt) {
    return null;
  }

  // Проверяем, не отклонил ли пользователь недавно
  const dismissedTime = localStorage.getItem('pwa-install-dismissed');
  if (dismissedTime) {
    const daysSinceDismissed = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60 * 24);
    if (daysSinceDismissed < 7) {
      return null;
    }
  }

  return (
    <div className="pwa-install-prompt">
      <div className="pwa-install-content">
        <div className="pwa-install-icon">
          <Image 
            src="/faq/AI-people Logo.png" 
            alt="AI-People" 
            width={32} 
            height={32}
            style={{ borderRadius: '8px' }}
          />
        </div>
        
        <div className="pwa-install-text">
          <h3 data-lang-en="Install AI-People" data-lang-ru="Установить AI-People">
            Install AI-People
          </h3>
          <p data-lang-en="Get quick access to AI models marketplace right from your home screen!" data-lang-ru="Получите быстрый доступ к маркетплейсу AI-моделей прямо с главного экрана!">
            Get quick access to AI models marketplace right from your home screen!
          </p>
        </div>

        <div className="pwa-install-actions">
          <button 
            className="pwa-install-btn primary"
            onClick={handleInstallClick}
            data-lang-en="Install" 
            data-lang-ru="Установить"
          >
            Install
          </button>
          <button 
            className="pwa-install-btn secondary"
            onClick={handleDismiss}
            data-lang-en="Not now" 
            data-lang-ru="Не сейчас"
          >
            Not now
          </button>
        </div>

        <button 
          className="pwa-install-close"
          onClick={handleDismiss}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
