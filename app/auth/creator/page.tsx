"use client";

import { useState, useEffect } from "react";
import ThankYouModal from "../../components/ThankYouModal";
import LanguageSelector from "../../components/LanguageSelector";
import CustomDropdown from "../../components/CustomDropdown";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import Script from "next/script";
import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import { useDropdownOptions } from "../../hooks/useDropdownOptions";
import { useLanguage } from "../../hooks/useLanguage";

export default function CreatorLeadPage() {
  useHamburgerMenu();
  useLanguage(); // Language determined by URL prefix and global state
  const { getTranslatedOptions } = useDropdownOptions();
  
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<number>(0);
  const steps = [
    { key: 'basic', titleEn: 'Basic info', titleRu: 'Базовая информация' },
    { key: 'expertise', titleEn: 'Expertise', titleRu: 'Опыт' },
    { key: 'goals', titleEn: 'Goals', titleRu: 'Цели' },
    { key: 'consent', titleEn: 'Consents', titleRu: 'Согласия' },
    { key: 'submit', titleEn: 'Submit', titleRu: 'Отправка' }
  ];

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    country: "",
    username: "",
    aiExperience: "",
    specialization: "",
    platforms: [] as string[],
    expectedMonthlyIncome: "",
    readyContentCount: "",
    monthlyProductionCapacity: "",
    source: "",
    emailConsent: false,
    termsAccepted: false,
    contentRightsConfirmed: false
  });

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
    { value: "ZA", label: "South Africa", labelRu: "ЮАР" },
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

  const aiExperienceOptions = [
    { value: "beginner", label: "Beginner (0-6 months)", labelRu: "Начинающий (0-6 месяцев)" },
    { value: "intermediate", label: "Intermediate (6 months - 1 year)", labelRu: "Средний уровень (6 месяцев - 1 год)" },
    { value: "1-2years", label: "1-2 years experience", labelRu: "1-2 года опыта" },
    { value: "3plus_years", label: "3+ years experience", labelRu: "3+ года опыта" }
  ];

  const specializationOptions = [
    { value: "photo", label: "AI Photography", labelRu: "AI Фотография" },
    { value: "video", label: "AI Video", labelRu: "AI Видео" },
    { value: "3d", label: "3D / CGI", labelRu: "3D / CGI" },
    { value: "mixed", label: "Mixed media", labelRu: "Смешанные медиа" },
    { value: "other", label: "Other", labelRu: "Другое" }
  ];

  const incomeOptions = [
    { value: "0-500", label: "$0 - $500", labelRu: "$0 - $500" },
    { value: "500-1000", label: "$500 - $1,000", labelRu: "$500 - $1,000" },
    { value: "1000-3000", label: "$1,000 - $3,000", labelRu: "$1,000 - $3,000" },
    { value: "3000-5000", label: "$3,000 - $5,000", labelRu: "$3,000 - $5,000" },
    { value: "5000+", label: "$5,000+", labelRu: "$5,000+" }
  ];

  const readyContentOptions = [
    { value: "0-1", label: "0-1 set", labelRu: "0-1 набор" },
    { value: "2-5", label: "2-5 sets", labelRu: "2-5 наборов" },
    { value: "6-10", label: "6-10 sets", labelRu: "6-10 наборов" },
    { value: "11+", label: "11+ sets", labelRu: "11+ наборов" }
  ];

  const productionOptions = [
    { value: "0-1", label: "0-1 set/month", labelRu: "0-1 набор/месяц" },
    { value: "2-3", label: "2-3 sets/month", labelRu: "2-3 набора/месяц" },
    { value: "4-6", label: "4-6 sets/month", labelRu: "4-6 наборов/месяц" },
    { value: "7+", label: "7+ sets/month", labelRu: "7+ наборов/месяц" }
  ];

  const sourceOptions = [
    { value: "google", label: "Google search", labelRu: "Поиск в Google" },
    { value: "social_media", label: "Social media", labelRu: "Социальные сети" },
    { value: "friend", label: "Friend / Colleague", labelRu: "Друг / Коллега" },
    { value: "ai_community", label: "AI community / Forum", labelRu: "AI сообщество / Форум" },
    { value: "other", label: "Other", labelRu: "Другое" }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).initializeAll) {
      (window as any).initializeAll();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'platforms') {
        const platformValue = checkbox.value;
        setFormData(prev => ({
          ...prev,
          platforms: checkbox.checked
            ? [...prev.platforms, platformValue]
            : prev.platforms.filter(p => p !== platformValue)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checkbox.checked
        }));
      }
    } else {
    setFormData(prev => ({
      ...prev,
        [name]: value
    }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.email || !formData.name || !formData.username) {
      alert('Please fill in all required fields (Email, Name, and Username)');
      setStep(0); // Go back to first step
      return;
    }
    
    if (!formData.termsAccepted) {
      alert('Please accept the Terms & Conditions');
      setStep(3); // Go back to consents step
      return;
    }
    
    if (!formData.contentRightsConfirmed) {
      alert('Please confirm content rights ownership');
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

      const response = await fetch('/api/leads/creator', {
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
            event_label: 'Creator Lead',
            value: 1
          });
        }
        
        // Reset form
        setFormData({
          email: "",
          name: "",
          country: "",
          username: "",
          aiExperience: "",
          specialization: "",
          platforms: [],
          expectedMonthlyIncome: "",
          readyContentCount: "",
          monthlyProductionCapacity: "",
          source: "",
          emailConsent: false,
          termsAccepted: false,
          contentRightsConfirmed: false
        });
      } else {
        alert(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container auth-page">
      <HeaderWithMenu homeHref="/" />

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025
          </span>
        </div>
      </div>

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="auth-title">
              <span className="gradient-text" data-lang-en="Join as " data-lang-ru="Присоединиться как ">Join as </span>
              <span className="role-em" data-lang-en=" Creator" data-lang-ru=" креатор"> Creator</span>
            </h1>
            <p className="auth-subtitle" data-lang-en="Sell without limits! Activate unlimited content uploads until 12/01/2025 and earn more." data-lang-ru="Продавайте без границ! Активируйте безлимитную загрузку контента до 01.12.2025 и зарабатывайте больше.">
              Sell without limits! Activate unlimited content uploads until 12/01/2025 and earn more.
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
                <h3 className="form-section-title" data-lang-en="Basic Information" data-lang-ru="Базовая информация">Basic Information</h3>
                
                <div className="form-group">
                  <label htmlFor="creatorEmail" data-lang-en="Email Address *" data-lang-ru="Email адрес *">Email Address *</label>
                  <input 
                    type="email" 
                    id="creatorEmail" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="creatorName" data-lang-en="Full Name / Alias *" data-lang-ru="Полное имя / Псевдоним *">Full Name / Alias *</label>
                  <input 
                    type="text" 
                    id="creatorName" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="creatorCountry" data-lang-en="Country *" data-lang-ru="Страна *">Country *</label>
                  <CustomDropdown
                    options={getTranslatedOptions(countryOptions)}
                    value={formData.country}
                    onChange={(value) => setFormData(prev => ({ ...prev, country: value as string }))}
                    placeholder="Select your country"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="creatorUsername" data-lang-en="Preferred Username (optional)" data-lang-ru="Желаемое имя пользователя (опционально)">Preferred Username (optional)</label>
                  <input 
                    type="text" 
                    id="creatorUsername" 
                    name="username" 
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="@yourname"
                  />
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn primary" onClick={() => setStep(1)} data-lang-en="Continue" data-lang-ru="Продолжить">Continue</button>
                </div>
              </div>

              {/* Professional Experience */}
              <div className={`form-section wizard-panel ${step===1 ? 'show' : ''}`}>
                <h3 className="form-section-title" data-lang-en="Your Expertise" data-lang-ru="Ваш опыт">Your Expertise</h3>
                
                <div className="form-group">
                  <label htmlFor="creatorExperience" data-lang-en="AI Generation Experience" data-lang-ru="Опыт работы с AI-генерацией">AI Generation Experience</label>
                  <CustomDropdown
                    options={getTranslatedOptions(aiExperienceOptions)}
                    value={formData.aiExperience}
                    onChange={(value) => setFormData(prev => ({ ...prev, aiExperience: value as string }))}
                    placeholder="Select your experience level"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="creatorSpecialization" data-lang-en="Primary Specialization" data-lang-ru="Основная специализация">Primary Specialization</label>
                  <CustomDropdown
                    options={getTranslatedOptions(specializationOptions)}
                    value={formData.specialization}
                    onChange={(value) => setFormData(prev => ({ ...prev, specialization: value as string }))}
                    placeholder="What do you create?"
                  />
                </div>
                
                <div className="form-group">
                  <label data-lang-en="Platforms You Currently Use (select all that apply)" data-lang-ru="Платформы, которые вы используете (выберите все подходящие)">
                    Platforms You Currently Use (select all that apply)
                  </label>
                  <div className="checkbox-group platforms-grid" style={{marginTop: '0.5rem'}}>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="midjourney"
                        checked={formData.platforms.includes('midjourney')}
                        onChange={handleInputChange}
                      />
                      <span>Midjourney</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="stable_diffusion"
                        checked={formData.platforms.includes('stable_diffusion')}
                        onChange={handleInputChange}
                      />
                      <span>Stable Diffusion</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="dall_e"
                        checked={formData.platforms.includes('dall_e')}
                        onChange={handleInputChange}
                      />
                      <span>DALL-E</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="leonardo"
                        checked={formData.platforms.includes('leonardo')}
                        onChange={handleInputChange}
                      />
                      <span>Leonardo.AI</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="seaart"
                        checked={formData.platforms.includes('seaart')}
                        onChange={handleInputChange}
                      />
                      <span>SeaArt</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="nanabanana"
                        checked={formData.platforms.includes('nanabanana')}
                        onChange={handleInputChange}
                      />
                      <span>Nanabanana</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="ideogram"
                        checked={formData.platforms.includes('ideogram')}
                        onChange={handleInputChange}
                      />
                      <span>Ideogram</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="krea"
                        checked={formData.platforms.includes('krea')}
                        onChange={handleInputChange}
                      />
                      <span>Krea AI</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        name="platforms" 
                        value="magnific"
                        checked={formData.platforms.includes('magnific')}
                        onChange={handleInputChange}
                      />
                      <span>Magnific AI</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                  <input 
                        type="checkbox" 
                        name="platforms" 
                        value="other"
                        checked={formData.platforms.includes('other')}
                    onChange={handleInputChange}
                      />
                      <span data-lang-en="Other tools" data-lang-ru="Другие инструменты">Other tools</span>
                    </label>
                  </div>
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn outline" onClick={() => setStep(0)} data-lang-en="Back" data-lang-ru="Назад">Back</button>
                  <button type="button" className="btn primary" onClick={() => setStep(2)} data-lang-en="Continue" data-lang-ru="Продолжить">Continue</button>
                </div>
              </div>

              {/* Business Expectations */}
              <div className={`form-section wizard-panel ${step===2 ? 'show' : ''}`}>
                <h3 className="form-section-title" data-lang-en="Your Goals" data-lang-ru="Ваши цели">Your Goals</h3>
                
                <div className="form-group">
                  <label htmlFor="creatorIncome" data-lang-en="Expected Monthly Income (USD)" data-lang-ru="Ожидаемый ежемесячный доход (USD)">Expected Monthly Income (USD)</label>
                  <CustomDropdown
                    options={getTranslatedOptions(incomeOptions)}
                    value={formData.expectedMonthlyIncome}
                    onChange={(value) => setFormData(prev => ({ ...prev, expectedMonthlyIncome: value as string }))}
                    placeholder="What are your income goals?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="creatorReadyContent" data-lang-en="Ready Content You Can Publish" data-lang-ru="Готовый контент для публикации">Ready Content You Can Publish</label>
                  <CustomDropdown
                    options={getTranslatedOptions(readyContentOptions)}
                    value={formData.readyContentCount}
                    onChange={(value) => setFormData(prev => ({ ...prev, readyContentCount: value as string }))}
                    placeholder="How many sets ready to upload?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="creatorProduction" data-lang-en="Monthly Production Capacity" data-lang-ru="Ежемесячный объём производства">Monthly Production Capacity</label>
                  <CustomDropdown
                    options={getTranslatedOptions(productionOptions)}
                    value={formData.monthlyProductionCapacity}
                    onChange={(value) => setFormData(prev => ({ ...prev, monthlyProductionCapacity: value as string }))}
                    placeholder="How many new sets can you create per month?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="creatorSource" data-lang-en="How did you hear about us?" data-lang-ru="Как вы узнали о нас?">How did you hear about us?</label>
                  <CustomDropdown
                    options={getTranslatedOptions(sourceOptions)}
                    value={formData.source}
                    onChange={(value) => setFormData(prev => ({ ...prev, source: value as string }))}
                    placeholder="Select source"
                  />
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn outline" onClick={() => setStep(1)}>Back</button>
                  <button type="button" className="btn primary" onClick={() => setStep(3)}>Continue</button>
                </div>
              </div>

              {/* Consent */}
              <div className={`form-section wizard-panel ${step===3 ? 'show' : ''}`}>
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="creatorEmailConsent" 
                    name="emailConsent" 
                    checked={formData.emailConsent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="creatorEmailConsent">
                    <span data-lang-en="I agree to receive email updates about platform launch and monetization tips" data-lang-ru="Я согласен получать email-обновления о запуске платформы и советах по монетизации">
                      I agree to receive email updates about platform launch and monetization tips
                    </span>
                  </label>
                </div>
                
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="creatorTerms" 
                    name="termsAccepted" 
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="creatorTerms">
                    <span data-lang-en="I agree to the ">I agree to the </span>
                    <a href="/legal/terms" className="link" data-lang-en="Terms of Service">Terms of Service</a>
                    <span data-lang-en=" and "> and </span>
                    <a href="/legal/privacy" className="link" data-lang-en="Privacy Policy">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="creatorRights" 
                    name="contentRightsConfirmed" 
                    checked={formData.contentRightsConfirmed}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="creatorRights">
                    <span data-lang-en="I confirm that I own or have rights to the AI content I'll upload" data-lang-ru="Я подтверждаю, что владею или имею права на AI-контент, который буду загружать">
                      I confirm that I own or have rights to the AI content I'll upload
                    </span>
                  </label>
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn outline" onClick={() => setStep(2)}>Back</button>
                  <button type="button" className="btn primary" onClick={() => setStep(4)}>Continue</button>
                </div>
              </div>
              
              <div className={`form-section wizard-panel ${step===4 ? 'show' : ''}`}>
                <button 
                  type="submit" 
                  className="btn primary full-width" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span data-lang-en="Submitting..." data-lang-ru="Отправка...">Submitting...</span>
                  ) : (
                    <span data-lang-en="Join as Creator" data-lang-ru="Присоединиться как креатор">Join as Creator</span>
                  )}
              </button>
            </div>
              </form>
              
              {/* Test Modal Button - Development only */}
              {process.env.NODE_ENV === 'development' && (
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
              )}
            </div>
        </div>
      </main>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        userType="creator"
        userName={formData.name}
      />
      {/* FAQ Schema.org for Creator Registration (SEO only) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type": "Question", "name": "How much can creators earn?", "acceptedAnswer": {"@type": "Answer", "text": "Creators keep 75% commission on sales. Top creators earn $5K–$25K per month with premium AI content."}},
              {"@type": "Question", "name": "What content can I sell?", "acceptedAnswer": {"@type": "Answer", "text": "You can sell hyperrealistic AI models, virtual influencers, photo/video sets and custom commercial packages."}},
              {"@type": "Question", "name": "Do I need KYC?", "acceptedAnswer": {"@type": "Answer", "text": "No KYC is required under $10K monthly payouts. Standard verification applies beyond that."}}
            ]
          })
        }}
      />
    </div>
  );
}
