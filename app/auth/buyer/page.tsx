"use client";

import { useState, useEffect } from "react";
import ThankYouModal from "../../components/ThankYouModal";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import CustomDropdown from "../../components/CustomDropdown";
import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";

export default function BuyerLeadPage() {
  useHamburgerMenu();
  
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

  // Dropdown options
  const roleOptions = [
    { value: "business_owner", label: "Business Owner / CEO" },
    { value: "marketer", label: "Marketing Professional" },
    { value: "freelancer", label: "Freelancer / Individual" },
    { value: "agency", label: "Agency" },
    { value: "startup", label: "Startup" },
    { value: "other", label: "Other" }
  ];

  const teamSizeOptions = [
    { value: "1-10", label: "1-10 people" },
    { value: "11-50", label: "11-50 people" },
    { value: "51-200", label: "51-200 people" },
    { value: "200+", label: "200+ people" }
  ];

  const useCaseOptions = [
    { value: "advertising", label: "Advertising campaigns" },
    { value: "social_media", label: "Social media content" },
    { value: "branding", label: "Branding & design" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "other", label: "Other" }
  ];

  const budgetOptions = [
    { value: "0-100", label: "$0 - $100" },
    { value: "100-500", label: "$100 - $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000" },
    { value: "5000+", label: "$5,000+" }
  ];

  const experienceOptions = [
    { value: "never_used", label: "Never used AI tools" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced user" }
  ];

  const sourceOptions = [
    { value: "google", label: "Google search" },
    { value: "social_media", label: "Social media" },
    { value: "friend", label: "Friend / Colleague" },
    { value: "blog", label: "Blog / Article" },
    { value: "other", label: "Other" }
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
      alert('Please fill in all required fields (Email and Name)');
      setStep(0); // Go back to first step
      return;
    }
    
    if (!formData.termsAccepted) {
      alert('Please accept the Terms & Conditions');
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
      <header className="topbar">
        <div className="brand">
          <a href="/" className="brand-link">
            <img src="/faq/AI-people Logo.png" alt="AI-People" className="logo-img" width="75" height="75" />
          </a>
        </div>
        
        <div className="actions">
          <LanguageSelector />
          <ThemeToggle />
          <a href="/auth/role" className="topbar-nav-btn" data-lang-en="Back" data-lang-ru="Назад">Back</a>
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
              <span className="gradient-text" data-lang-en="Join as " data-lang-ru="Присоединиться как ">Join as </span>
              <span className="role-em" data-lang-en=" Buyer" data-lang-ru=" покупатель"> Buyer</span>
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
                <h3 className="form-section-title" data-lang-en="Basic Information" data-lang-ru="Базовая информация">Basic Information</h3>
                
                <div className="form-group">
                  <label htmlFor="buyerEmail" data-lang-en="Email Address *" data-lang-ru="Email адрес *">Email Address *</label>
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
                  <label htmlFor="buyerName" data-lang-en="Full Name *" data-lang-ru="Полное имя *">Full Name *</label>
                  <input 
                    type="text" 
                    id="buyerName" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                  />
                  </div>
                <div className="wizard-actions">
                  <button type="button" className="btn primary" onClick={() => setStep(1)} data-lang-en="Continue" data-lang-ru="Продолжить">Continue</button>
                </div>
              </div>

              {/* Professional Information */}
              <div className={`form-section wizard-panel ${step===1 ? 'show' : ''}`}>
                <h3 className="form-section-title" data-lang-en="Tell Us About Your Business" data-lang-ru="Расскажите о вашем бизнесе">Tell Us About Your Business</h3>
                
                <div className="form-group">
                  <label htmlFor="buyerRole" data-lang-en="Your Role" data-lang-ru="Ваша роль">Your Role</label>
                  <CustomDropdown
                    options={roleOptions}
                    value={formData.role}
                    onChange={(value) => setFormData(prev => ({ ...prev, role: value as string }))}
                    placeholder="Select your role"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="buyerCompany" data-lang-en="Company Name (optional)" data-lang-ru="Название компании (опционально)">Company Name (optional)</label>
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
                  <label htmlFor="buyerTeamSize" data-lang-en="Team Size" data-lang-ru="Размер команды">Team Size</label>
                  <CustomDropdown
                    options={teamSizeOptions}
                    value={formData.teamSize}
                    onChange={(value) => setFormData(prev => ({ ...prev, teamSize: value as string }))}
                    placeholder="Select team size"
                  />
                </div>
                <div className="wizard-actions">
                  <button type="button" className="btn outline" onClick={() => setStep(0)}>Back</button>
                  <button type="button" className="btn primary" onClick={() => setStep(2)}>Continue</button>
                </div>
              </div>

              {/* Use Case & Budget */}
              <div className={`form-section wizard-panel ${step===2 ? 'show' : ''}`}>
                <h3 className="form-section-title" data-lang-en="Your Needs" data-lang-ru="Ваши потребности">Your Needs</h3>
                
                <div className="form-group">
                  <label htmlFor="buyerUseCase" data-lang-en="Primary Use Case" data-lang-ru="Основное использование">Primary Use Case</label>
                  <CustomDropdown
                    options={useCaseOptions}
                    value={formData.useCase}
                    onChange={(value) => setFormData(prev => ({ ...prev, useCase: value as string }))}
                    placeholder="What will you use AI models for?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerBudget" data-lang-en="Monthly Content Budget (USD)" data-lang-ru="Месячный бюджет на контент (USD)">Monthly Content Budget (USD)</label>
                  <CustomDropdown
                    options={budgetOptions}
                    value={formData.monthlyBudget}
                    onChange={(value) => setFormData(prev => ({ ...prev, monthlyBudget: value as string }))}
                    placeholder="Select budget range"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerExperience" data-lang-en="AI Tools Experience" data-lang-ru="Опыт с AI инструментами">AI Tools Experience</label>
                  <CustomDropdown
                    options={experienceOptions}
                    value={formData.aiExperience}
                    onChange={(value) => setFormData(prev => ({ ...prev, aiExperience: value as string }))}
                    placeholder="Your AI experience level"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerSource" data-lang-en="How did you hear about us?" data-lang-ru="Как вы узнали о нас?">How did you hear about us?</label>
                  <CustomDropdown
                    options={sourceOptions}
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
                    <span data-lang-en="I agree to the ">I agree to the </span>
                    <a href="/legal/terms" className="link" data-lang-en="Terms of Service">Terms of Service</a>
                    <span data-lang-en=" and "> and </span>
                    <a href="/legal/privacy" className="link" data-lang-en="Privacy Policy">Privacy Policy</a>
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
                    <span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Join the Waiting List</span>
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
    </div>
  );
}
