"use client";

import { useEffect } from 'react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'buyer' | 'creator';
  userName?: string;
}

export default function ThankYouModal({ isOpen, onClose, userType, userName }: ThankYouModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Apply current language to modal
      const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
      setTimeout(() => {
        const elements = document.querySelectorAll('.thank-you-modal [data-lang-en], .thank-you-modal [data-lang-ru]');
        elements.forEach(element => {
          const enText = element.getAttribute('data-lang-en');
          const ruText = element.getAttribute('data-lang-ru');
          
          if (savedLanguage === 'ru' && ruText) {
            element.textContent = ruText;
          } else if (savedLanguage === 'en' && enText) {
            element.textContent = enText;
          }
        });
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const buyerContent = {
    en: {
      title: "Thank You for Your Interest!",
      subtitle: `${userName ? `${userName}, welcome` : 'Welcome'} to AI-People`,
      message: "You're now on the waiting list for exclusive early access to the world's first AI models marketplace.",
      benefits: [
        "Priority access when we launch on 01.11.2025",
        "Exclusive discounts for early subscribers",
        "First look at premium AI model catalog",
        "Direct communication about platform updates"
      ],
      nextSteps: "We'll send you an email with:",
      nextStepsList: [
        "Personalized onboarding guide",
        "Pricing and package details",
        "Launch date reminders",
        "Exclusive pre-launch offers"
      ],
      cta: "Got it!",
      footer: "Check your inbox – we've sent you a confirmation email"
    },
    ru: {
      title: "Спасибо за проявленный интерес!",
      subtitle: `${userName ? `${userName}, добро пожаловать` : 'Добро пожаловать'} в AI-People`,
      message: "Вы в списке ожидания для эксклюзивного раннего доступа к первому маркетплейсу AI-моделей в мире.",
      benefits: [
        "Приоритетный доступ при запуске 01.11.2025",
        "Эксклюзивные скидки для ранних подписчиков",
        "Первый взгляд на каталог премиум AI-моделей",
        "Прямая коммуникация об обновлениях платформы"
      ],
      nextSteps: "Мы отправим вам email с:",
      nextStepsList: [
        "Персонализированным руководством по регистрации",
        "Деталями цен и пакетов",
        "Напоминаниями о дате запуска",
        "Эксклюзивными предзапускными предложениями"
      ],
      cta: "Понятно!",
      footer: "Проверьте почту – мы отправили вам письмо подтверждения"
    }
  };

  const creatorContent = {
    en: {
      title: "Welcome to the Creator Community!",
      subtitle: `${userName ? `${userName}, you're in` : "You're in"}!`,
      message: "You've successfully joined the AI-People creator waiting list. Get ready to monetize your AI art like never before.",
      benefits: [
        "Priority creator onboarding before launch",
        "Featured placement in launch catalog",
        "Direct support from our team"
      ],
      nextSteps: "We'll reach out with:",
      nextStepsList: [
        "Creator dashboard preview access",
        "Pricing strategy and commission details",
        "Content guidelines and best practices",
        "Early upload access before public launch"
      ],
      cta: "Let's go!",
      footer: "Confirmation email sent – prepare your portfolio!"
    },
    ru: {
      title: "Добро пожаловать в сообщество креаторов!",
      subtitle: `${userName ? `${userName}, вы в деле` : 'Вы в деле'}!`,
      message: "Вы успешно присоединились к списку ожидания креаторов AI-People. Готовьтесь монетизировать свое AI-искусство как никогда раньше.",
      benefits: [
        "Приоритетный онбординг креаторов до запуска",
        "Размещение в топе стартового каталога",
        "Прямая поддержка от нашей команды"
      ],
      nextSteps: "Мы свяжемся с вами:",
      nextStepsList: [
        "Предварительный доступ к панели креатора",
        "Стратегия ценообразования и размер комиссии",
        "Руководство по контенту и лучшие практики",
        "Ранний доступ к загрузке до публичного запуска"
      ],
      cta: "Поехали!",
      footer: "Письмо подтверждения отправлено – готовьте портфолио!"
    }
  };

  const content = userType === 'buyer' ? buyerContent : creatorContent;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content thank-you-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>

        <h2 className="modal-title gradient-text" data-lang-en={content.en.title} data-lang-ru={content.ru.title}>
          {content.en.title}
        </h2>

        <p className="modal-subtitle" data-lang-en={content.en.subtitle} data-lang-ru={content.ru.subtitle}>
          {content.en.subtitle}
        </p>

        <p className="modal-message" data-lang-en={content.en.message} data-lang-ru={content.ru.message}>
          {content.en.message}
        </p>

        <div className="modal-benefits">
          <h3 data-lang-en="What's next:" data-lang-ru="Что дальше:">What's next:</h3>
          <ul className="benefits-list">
            {content.en.benefits.map((benefit, index) => (
              <li key={index} data-lang-en={benefit} data-lang-ru={content.ru.benefits[index]}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-next-steps">
          <h3 data-lang-en={content.en.nextSteps} data-lang-ru={content.ru.nextSteps}>
            {content.en.nextSteps}
          </h3>
          <ul>
            {content.en.nextStepsList.map((step, index) => (
              <li key={index} data-lang-en={step} data-lang-ru={content.ru.nextStepsList[index]}>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <button className="btn primary full-width modal-cta" onClick={onClose} data-lang-en={content.en.cta} data-lang-ru={content.ru.cta}>
          {content.en.cta}
        </button>

        <p className="modal-footer" data-lang-en={content.en.footer} data-lang-ru={content.ru.footer}>
          {content.en.footer}
        </p>
      </div>
    </div>
  );
}



