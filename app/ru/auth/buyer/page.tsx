"use client";

import { useState, useEffect } from "react";
import { useHamburgerMenu } from "../../../hooks/useHamburgerMenu";
import ThankYouModal from "../../../components/ThankYouModal";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageSelector from "../../../components/LanguageSelector";
import { useDropdownOptions } from "../../../hooks/useDropdownOptions";
import CustomDropdown from "../../../components/CustomDropdown";
import Script from "next/script";

export default function BuyerLeadPage() {
  useHamburgerMenu();
  const { getTranslatedOptions } = useDropdownOptions('ru');
  
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<number>(0);
  const steps = [
    { key: 'basic', titleEn: 'Basic', titleRu: 'Базовое' },
    { key: 'business', titleEn: 'Business', titleRu: 'Бизнес' },
    { key: 'needs', titleEn: 'Needs', titleRu: 'Потребности' },
    { key: 'consent', titleEn: 'Consent', titleRu: 'Согласия' },
    { key: 'submit', titleEn: 'Submit', titleRu: 'Отправка' }
  ];

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    country: "",
    role: "",
    company: "",
    teamSize: "",
    useCase: "",
    monthlyBudget: "",
    aiExperience: "",
    source: "",
    emailConsent: false,
    termsAccepted: false
  });
  
  // Apply Russian language on mount (without affecting global localStorage)
  useEffect(() => {
    
    // Apply Russian language immediately
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru]');
    elements.forEach(element => {
      const ruText = element.getAttribute('data-lang-ru');
      if (!ruText) return;
      
      const spanElement = element.querySelector('span');
      if (spanElement) {
        spanElement.textContent = ruText;
      } else {
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        element.appendChild(document.createTextNode(ruText));
      }
    });
    
    // Update language selector button
    const langButton = document.querySelector('.language-text');
    if (langButton) {
      langButton.textContent = 'RU';
    }
    
    // Update active state in language menu
    const menuItems = document.querySelectorAll('.language-item');
    menuItems?.forEach(item => {
      item.classList.remove('active');
      if (item.textContent === 'RU') {
        item.classList.add('active');
      }
    });
  }, []);

  // Dropdown options
  const countryOptions = [
    { value: "US", label: "United States", labelRu: "Соединенные Штаты" },
    { value: "CA", label: "Canada", labelRu: "Канада" },
    { value: "GB", label: "United Kingdom", labelRu: "Великобритания" },
    { value: "DE", label: "Germany", labelRu: "Германия" },
    { value: "FR", label: "France", labelRu: "Франция" },
    { value: "IT", label: "Italy", labelRu: "Италия" },
    { value: "ES", label: "Spain", labelRu: "Испания" },
    { value: "NL", label: "Netherlands", labelRu: "Нидерланды" },
    { value: "SE", label: "Sweden", labelRu: "Швеция" },
    { value: "NO", label: "Norway", labelRu: "Норвегия" },
    { value: "DK", label: "Denmark", labelRu: "Дания" },
    { value: "FI", label: "Finland", labelRu: "Финляндия" },
    { value: "CH", label: "Switzerland", labelRu: "Швейцария" },
    { value: "AT", label: "Austria", labelRu: "Австрия" },
    { value: "BE", label: "Belgium", labelRu: "Бельгия" },
    { value: "PL", label: "Poland", labelRu: "Польша" },
    { value: "CZ", label: "Czech Republic", labelRu: "Чехия" },
    { value: "HU", label: "Hungary", labelRu: "Венгрия" },
    { value: "RO", label: "Romania", labelRu: "Румыния" },
    { value: "BG", label: "Bulgaria", labelRu: "Болгария" },
    { value: "HR", label: "Croatia", labelRu: "Хорватия" },
    { value: "SI", label: "Slovenia", labelRu: "Словения" },
    { value: "SK", label: "Slovakia", labelRu: "Словакия" },
    { value: "LT", label: "Lithuania", labelRu: "Литва" },
    { value: "LV", label: "Latvia", labelRu: "Латвия" },
    { value: "EE", label: "Estonia", labelRu: "Эстония" },
    { value: "IE", label: "Ireland", labelRu: "Ирландия" },
    { value: "PT", label: "Portugal", labelRu: "Португалия" },
    { value: "GR", label: "Greece", labelRu: "Греция" },
    { value: "CY", label: "Cyprus", labelRu: "Кипр" },
    { value: "MT", label: "Malta", labelRu: "Мальта" },
    { value: "LU", label: "Luxembourg", labelRu: "Люксембург" },
    { value: "JP", label: "Japan", labelRu: "Япония" },
    { value: "KR", label: "South Korea", labelRu: "Южная Корея" },
    { value: "CN", label: "China", labelRu: "Китай" },
    { value: "IN", label: "India", labelRu: "Индия" },
    { value: "AU", label: "Australia", labelRu: "Австралия" },
    { value: "NZ", label: "New Zealand", labelRu: "Новая Зеландия" },
    { value: "BR", label: "Brazil", labelRu: "Бразилия" },
    { value: "AR", label: "Argentina", labelRu: "Аргентина" },
    { value: "MX", label: "Mexico", labelRu: "Мексика" },
    { value: "CL", label: "Chile", labelRu: "Чили" },
    { value: "CO", label: "Colombia", labelRu: "Колумбия" },
    { value: "PE", label: "Peru", labelRu: "Перу" },
    { value: "ZA", label: "South Africa", labelRu: "Южная Африка" },
    { value: "NG", label: "Nigeria", labelRu: "Нигерия" },
    { value: "KE", label: "Kenya", labelRu: "Кения" },
    { value: "EG", label: "Egypt", labelRu: "Египет" },
    { value: "MA", label: "Morocco", labelRu: "Марокко" },
    { value: "TN", label: "Tunisia", labelRu: "Тунис" },
    { value: "DZ", label: "Algeria", labelRu: "Алжир" },
    { value: "RU", label: "Russia", labelRu: "Россия" },
    { value: "UA", label: "Ukraine", labelRu: "Украина" },
    { value: "BY", label: "Belarus", labelRu: "Беларусь" },
    { value: "KZ", label: "Kazakhstan", labelRu: "Казахстан" },
    { value: "UZ", label: "Uzbekistan", labelRu: "Узбекистан" },
    { value: "OTHER", label: "Other", labelRu: "Другое" }
  ];

  const roleOptions = [
    { value: "business_owner", label: "Business Owner / CEO", labelRu: "Владелец бизнеса / CEO" },
    { value: "marketer", label: "Marketing Professional", labelRu: "Маркетолог" },
    { value: "freelancer", label: "Freelancer / Individual", labelRu: "Фрилансер / Частное лицо" },
    { value: "agency", label: "Agency", labelRu: "Агентство" },
    { value: "startup", label: "Startup", labelRu: "Стартап" },
    { value: "other", label: "Other", labelRu: "Другое" }
  ];

  const teamSizeOptions = [
    { value: "1-10", label: "1-10 people", labelRu: "1-10 человек" },
    { value: "11-50", label: "11-50 people", labelRu: "11-50 человек" },
    { value: "51-200", label: "51-200 people", labelRu: "51-200 человек" },
    { value: "200+", label: "200+ people", labelRu: "200+ человек" }
  ];

  const useCaseOptions = [
    { value: "advertising", label: "Advertising campaigns", labelRu: "Рекламные кампании" },
    { value: "social_media", label: "Social media content", labelRu: "Контент для соцсетей" },
    { value: "branding", label: "Branding & design", labelRu: "Брендинг и дизайн" },
    { value: "ecommerce", label: "E-commerce", labelRu: "Электронная коммерция" },
    { value: "other", label: "Other", labelRu: "Другое" }
  ];

  const budgetOptions = [
    { value: "0-100", label: "$0 - $100", labelRu: "$0 - $100" },
    { value: "100-500", label: "$100 - $500", labelRu: "$100 - $500" },
    { value: "500-1000", label: "$500 - $1,000", labelRu: "$500 - $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000", labelRu: "$1,000 - $5,000" },
    { value: "5000+", label: "$5,000+", labelRu: "$5,000+" }
  ];

  const experienceOptions = [
    { value: "never_used", label: "Never used AI tools", labelRu: "Никогда не использовал AI инструменты" },
    { value: "beginner", label: "Beginner", labelRu: "Начинающий" },
    { value: "intermediate", label: "Intermediate", labelRu: "Средний" },
    { value: "advanced", label: "Advanced user", labelRu: "Продвинутый пользователь" }
  ];

  const sourceOptions = [
    { value: "google", label: "Google search", labelRu: "Поиск Google" },
    { value: "social_media", label: "Social media", labelRu: "Социальные сети" },
    { value: "friend", label: "Friend / Colleague", labelRu: "Друг / Коллега" },
    { value: "blog", label: "Blog / Article", labelRu: "Блог / Статья" },
    { value: "other", label: "Other", labelRu: "Другое" }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).initializeAll) {
      (window as any).initializeAll();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.email || !formData.name) {
      alert('Пожалуйста, заполните все обязательные поля (Email и Имя)');
      setStep(0); // Go back to first step
      return;
    }
    
    if (!formData.termsAccepted) {
      alert('Пожалуйста, примите Условия использования');
      setStep(3); // Go back to consents step
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Get UTM parameters if present
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utmSource: urlParams.get('utm_source'),
        utmMedium: urlParams.get('utm_medium'),
        utmCampaign: urlParams.get('utm_campaign'),
      };

      const response = await fetch('/api/leads/buyer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...utmData
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show thank you modal
        setShowModal(true);
        
        // Track analytics event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lead_form_submit', {
            event_category: 'Lead Generation',
            event_label: 'Buyer Lead',
            value: 1
          });
        }
        
        // Reset form
        setFormData({
          email: "",
          name: "",
          country: "",
          role: "",
          company: "",
          teamSize: "",
          useCase: "",
          monthlyBudget: "",
          aiExperience: "",
          source: "",
          emailConsent: false,
          termsAccepted: false
        });
      } else {
        alert(data.error || 'Произошла ошибка. Пожалуйста, попробуйте снова.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка. Пожалуйста, попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container auth-page ru-optimized">
      <header className="topbar">
        <div className="brand">
          <a href="/ru" className="brand-link">
            <img src="/faq/AI-people Logo.png" alt="AI-People" className="logo-img" width="75" height="75" />
          </a>
        </div>
        
        <div className="actions">
          <LanguageSelector />
          <ThemeToggle />
          <a href="/ru/auth/role" className="topbar-nav-btn" data-lang-en="Back to Role Selection" data-lang-ru="Назад">Назад</a>
        </div>
      </header>

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025
          </span>
        </div>
      </div>

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="auth-title">
              <span className="gradient-text" data-lang-en="Join as " data-lang-ru="Присоединиться как ">Присоединиться как </span>
              <span className="role-em" data-lang-en=" Buyer" data-lang-ru=" покупатель"> покупатель</span>
            </h1>
            <p className="auth-subtitle" data-lang-en="Get exclusive early access to AI-People marketplace as a buyer" data-lang-ru="Получите эксклюзивный ранний доступ к маркетплейсу AI-People как покупатель">
              Get exclusive early access to AI-People marketplace as a buyer
            </p>
            <div className="wizard-stepper" role="progressbar" aria-valuemin={0} aria-valuemax={steps.length - 1} aria-valuenow={step}>
              <div className="wizard-track"><div className="wizard-progress" style={{ width: `${(step)/(steps.length-1)*100}%` }} /></div>
              <div className="wizard-steps">
                {steps.map((s, idx) => (
                  <button key={s.key} type="button" className={`wizard-step ${idx <= step ? 'active' : ''}`} onClick={() => setStep(idx)} aria-label={s.titleEn}>
                    <span>{idx + 1}</span>
                  </button>
                ))}
              </div>
          </div>
          </div>

            <div className="auth-form active">
              <form className="form wizard" onSubmit={handleSubmit}>
              {/* Basic Information */}
              <div className={`form-section wizard-panel ${step===0 ? 'show' : ''}`}>
                <h3 className="form-section-title" data-lang-en="Basic Information" data-lang-ru="Базовая информация">Базовая информация</h3>
                
                <div className="form-group">
                  <label htmlFor="buyerEmail" data-lang-en="Email Address *" data-lang-ru="Email адрес *">Email адрес *</label>
                  <input 
                    type="email" 
                    id="buyerEmail" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="buyerName" data-lang-en="Full Name *" data-lang-ru="Полное имя *">Полное имя *</label>
                  <input 
                    type="text" 
                    id="buyerName" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="buyerCountry" data-lang-en="Country *" data-lang-ru="Страна *">Страна *</label>
                  <CustomDropdown
                    options={getTranslatedOptions(countryOptions)}
                    value={formData.country}
                    onChange={(value) => setFormData(prev => ({ ...prev, country: value as string }))}
                    placeholder="Выберите вашу страну"
                  />
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn primary" onClick={() => setStep(1)} data-lang-en="Continue" data-lang-ru="Продолжить">Продолжить</button>
                </div>
              </div>

              {/* Professional Information */}
              <div className={`form-section wizard-panel ${step===1 ? 'show' : ''}`}>
                <h3 className="form-section-title" data-lang-en="Tell Us About Your Business" data-lang-ru="Расскажите о вашем бизнесе">Расскажите о вашем бизнесе</h3>
                
                <div className="form-group">
                  <label htmlFor="buyerRole" data-lang-en="Your Role" data-lang-ru="Ваша роль">Ваша роль</label>
                  <CustomDropdown
                    options={getTranslatedOptions(roleOptions)}
                    value={formData.role}
                    onChange={(value) => setFormData(prev => ({ ...prev, role: value as string }))}
                    placeholder="Выберите вашу роль"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="buyerCompany" data-lang-en="Company Name (optional)" data-lang-ru="Название компании (опционально)">Название компании (опционально)</label>
                  <input 
                    type="text" 
                    id="buyerCompany" 
                    name="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Inc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerTeamSize" data-lang-en="Team Size" data-lang-ru="Размер команды">Размер команды</label>
                  <CustomDropdown
                    options={getTranslatedOptions(teamSizeOptions)}
                    value={formData.teamSize}
                    onChange={(value) => setFormData(prev => ({ ...prev, teamSize: value as string }))}
                    placeholder="Выберите размер команды"
                  />
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn outline" onClick={() => setStep(0)} data-lang-en="Back" data-lang-ru="Назад">Назад</button>
                  <button type="button" className="btn primary" onClick={() => setStep(2)} data-lang-en="Continue" data-lang-ru="Продолжить">Продолжить</button>
                </div>
              </div>

              {/* Use Case & Budget */}
              <div className={`form-section wizard-panel ${step===2 ? 'show' : ''}`}>
                <h3 className="form-section-title" data-lang-en="Your Needs" data-lang-ru="Ваши потребности">Ваши потребности</h3>
                
                <div className="form-group">
                  <label htmlFor="buyerUseCase" data-lang-en="Primary Use Case" data-lang-ru="Основное использование">Основное использование</label>
                  <CustomDropdown
                    options={getTranslatedOptions(useCaseOptions)}
                    value={formData.useCase}
                    onChange={(value) => setFormData(prev => ({ ...prev, useCase: value as string }))}
                    placeholder="Для чего вы будете использовать AI модели?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerBudget" data-lang-en="Monthly Content Budget (USD)" data-lang-ru="Месячный бюджет на контент (USD)">Месячный бюджет на контент (USD)</label>
                  <CustomDropdown
                    options={getTranslatedOptions(budgetOptions)}
                    value={formData.monthlyBudget}
                    onChange={(value) => setFormData(prev => ({ ...prev, monthlyBudget: value as string }))}
                    placeholder="Выберите диапазон бюджета"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerExperience" data-lang-en="AI Tools Experience" data-lang-ru="Опыт с AI инструментами">Опыт с AI инструментами</label>
                  <CustomDropdown
                    options={getTranslatedOptions(experienceOptions)}
                    value={formData.aiExperience}
                    onChange={(value) => setFormData(prev => ({ ...prev, aiExperience: value as string }))}
                    placeholder="Ваш уровень опыта с AI"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerSource" data-lang-en="How did you hear about us?" data-lang-ru="Как вы узнали о нас?">Как вы узнали о нас?</label>
                  <CustomDropdown
                    options={getTranslatedOptions(sourceOptions)}
                    value={formData.source}
                    onChange={(value) => setFormData(prev => ({ ...prev, source: value as string }))}
                    placeholder="Выберите источник"
                  />
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn outline" onClick={() => setStep(1)} data-lang-en="Back" data-lang-ru="Назад">Назад</button>
                  <button type="button" className="btn primary" onClick={() => setStep(3)} data-lang-en="Continue" data-lang-ru="Продолжить">Продолжить</button>
                </div>
              </div>

              {/* Consent */}
              <div className={`form-section wizard-panel ${step===3 ? 'show' : ''}`}>
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="buyerEmailConsent" 
                    name="emailConsent"
                    checked={formData.emailConsent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="buyerEmailConsent">
                    <span data-lang-en="I agree to receive email updates about AI-People launch and exclusive offers" data-lang-ru="Я согласен получать email-обновления о запуске AI-People и эксклюзивных предложениях">
                      I agree to receive email updates about AI-People launch and exclusive offers
                    </span>
                  </label>
                </div>
                
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="buyerTerms" 
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="buyerTerms">
                    <span data-lang-en="I agree to the " data-lang-ru="Я согласен с ">Я согласен с </span>
                    <a href="/legal/terms" className="link" data-lang-en="Terms of Service" data-lang-ru="Условиями использования">Условиями использования</a>
                    <span data-lang-en=" and " data-lang-ru=" и "> и </span>
                    <a href="/legal/privacy" className="link" data-lang-en="Privacy Policy" data-lang-ru="Политикой конфиденциальности">Политикой конфиденциальности</a>
                  </label>
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn outline" onClick={() => setStep(2)} data-lang-en="Back" data-lang-ru="Назад">Назад</button>
                  <button type="button" className="btn primary" onClick={() => setStep(4)} data-lang-en="Continue" data-lang-ru="Продолжить">Продолжить</button>
                </div>
              </div>
              
              <div className={`form-section wizard-panel ${step===4 ? 'show' : ''}`}>
                <button 
                  type="submit" 
                  className="btn primary full-width" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span data-lang-en="Submitting..." data-lang-ru="Отправка...">Отправка...</span>
                  ) : (
                    <span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Присоединиться к списку ожидания</span>
                  )}
              </button>
            </div>
              </form>
              
              {/* TEMPORARY: Test Modal Button - Remove before production */}
              <button 
                type="button" 
                onClick={() => setShowModal(true)}
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  padding: '12px 20px',
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
                  zIndex: '9999'
                }}
              >
                🎭 Test Modal
              </button>
            </div>
        </div>
      </main>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        userType="buyer"
        userName={formData.name}
      />
      {/* FAQ Schema.org (RU) for Buyer Registration */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "inLanguage": "ru-RU",
            "mainEntity": [
              {"@type": "Question", "name": "Что я могу купить как покупатель?", "acceptedAnswer": {"@type": "Answer", "text": "Вы можете покупать гиперреалистичные AI‑модели, виртуальных инфлюенсеров и AI‑пакеты контента для рекламы, соцсетей и e‑commerce."}},
              {"@type": "Question", "name": "Как устроены платежи и лицензии?", "acceptedAnswer": {"@type": "Answer", "text": "Платежи защищены, каждая покупка содержит коммерческие условия лицензирования для маркетингового использования."}},
              {"@type": "Question", "name": "Когда запуск платформы?", "acceptedAnswer": {"@type": "Answer", "text": "Публичный запуск — 01.12.2025. Предрегистрация даёт ранние привилегии."}}
            ]
          })
        }}
      />
    </div>
  );
}
