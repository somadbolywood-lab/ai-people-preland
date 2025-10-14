"use client";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useHamburgerMenu } from "../hooks/useHamburgerMenu";
import { useScrollBorder } from "../hooks/useScrollBorder";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import LanguageSelector from "../components/LanguageSelector";
import VideoModal from "../components/VideoModal";

export default function Page() {
  useHamburgerMenu();
  const { buyerRef, creatorRef } = useScrollBorder();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Set Russian language by default on mount
  useEffect(() => {
    localStorage.setItem('selectedLanguage', 'ru');
    
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

    // Ensure hamburger menu works after language change
    setTimeout(() => {
      const hamburger = document.getElementById('hamburger');
      const menuPanel = document.getElementById('menuPanel');
      if (hamburger && menuPanel) {
        // Re-initialize if needed
        if (!hamburger.hasAttribute('data-menu-initialized')) {
          console.log('[RU Page] Re-initializing hamburger menu');
        }
      }
    }, 200);
  }, []);

  // Schema.org structured data for homepage (Russian version)
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI-People",
    "alternateName": "AI-People Маркетплейс AI-моделей",
    "url": "https://ai-people.com/ru",
    "description": "Первый в мире курируемый маркетплейс для гиперреалистичных AI-моделей и виртуальных инфлюенсеров",
    "inLanguage": ["ru", "en"],
    "publisher": {
      "@type": "Organization",
      "name": "AI-People",
      "url": "https://ai-people.com/ru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ai-people.com/faq/AI-people Logo.png",
        "width": 512,
        "height": 512
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ai-people.com/ru/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI-People",
    "url": "https://ai-people.com/ru",
    "logo": "https://ai-people.com/faq/AI-people Logo.png",
    "description": "Ведущий маркетплейс AI-моделей с гиперреалистичными виртуальными инфлюенсерами и AI-контентом",
    "foundingDate": "2025",
    "sameAs": [
      "https://twitter.com/aipeople",
      "https://instagram.com/aipeople",
      "https://tiktok.com/@aipeople"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@ai-people.com",
      "availableLanguage": ["Russian", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Маркетплейс AI-моделей",
    "description": "Гиперреалистичные AI-модели и виртуальные инфлюенсеры для цифрового маркетинга",
    "brand": {
      "@type": "Brand",
      "name": "AI-People"
    },
    "category": "AI Технологии",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "USD",
      "validFrom": "2025-11-01"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://ai-people.com/ru"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
    <div className="container ru-optimized home-page">
      <header className="topbar">
        <div className="brand">
          <a href="/ru" className="brand-link">
            <Image 
              src="/faq/AI-people Logo.png" 
              alt="AI-People" 
              className="logo-img" 
              width={75} 
              height={75} 
              priority 
              quality={100}
              unoptimized={true}
            />
          </a>
        </div>
        
        <div className="actions">
          <LanguageSelector />
          <ThemeToggle />
          <a href="mailto:feedback@ai-people.com" className="feedback-btn" aria-label="Feedback">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="menuPanel"><span className="bar"></span><span className="bar"></span><span className="bar"></span></button>
        </div>
      </header>

      <div className="menu-panel" id="menuPanel" role="menu" aria-hidden="true">
        <a href="/ru" role="menuitem" data-lang-en="Home" data-lang-ru="Главная">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>Главная</span>
        </a>
        <a href="/ru/about" role="menuitem" data-lang-en="About" data-lang-ru="О нас">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="1"/>
          </svg>
          <span>О нас</span>
        </a>
        <a href="/ru/faq" role="menuitem" data-lang-en="FAQ" data-lang-ru="FAQ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <span>FAQ</span>
        </a>
        <a href="/ru/blog" role="menuitem" data-lang-en="Blog" data-lang-ru="Блог">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
          <span>Блог</span>
        </a>
        
        {/* Coming Soon Section */}
        <div style={{marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)'}}></div>
        
        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Creator Admin Panel" data-lang-ru="Админ. панель Креатора">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
            <path d="m15 14 3 3 3-3"/>
          </svg>
          <span data-lang-en="Creator Admin Panel" data-lang-ru="Админ. панель Креатора">Админ. панель Креатора</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Скоро</span>
        </a>
        
        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Buyer Admin Panel" data-lang-ru="Админ. панель Покупателя">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18"/>
            <path d="M5 21V7l8-4v18"/>
            <path d="M19 21V11l-6-4"/>
            <path d="M9 9v.01"/>
            <path d="M9 12v.01"/>
            <path d="M9 15v.01"/>
            <path d="M9 18v.01"/>
          </svg>
          <span data-lang-en="Buyer Admin Panel" data-lang-ru="Админ. панель Покупателя">Админ. панель Покупателя</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Скоро</span>
        </a>
        
        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Catalog" data-lang-ru="Каталог">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            <path d="M8 7h8"/>
            <path d="M8 11h8"/>
            <path d="M8 15h4"/>
          </svg>
          <span data-lang-en="Catalog" data-lang-ru="Каталог">Каталог</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Скоро</span>
        </a>
        
        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Prices" data-lang-ru="Цены">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span data-lang-en="Prices" data-lang-ru="Цены">Цены</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Скоро</span>
        </a>
        
        {/* Legal Policies Section */}
        <div className="menu-legal-section">
          <a href="/legal/terms" data-lang-en="Terms of Service" data-lang-ru="Условия обслуживания">Условия обслуживания</a> · 
          <a href="/legal/privacy" data-lang-en="Privacy Policy" data-lang-ru="Политика конфиденциальности">Политика конфиденциальности</a> · 
          <a href="/legal/cookies" data-lang-en="Cookie Policy" data-lang-ru="Политика файлов cookie">Политика файлов cookie</a>
        </div>
      </div>

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
            🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
                 {Array.from({length:19}).map((_,i)=> (
                   <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`Гиперреалистичная AI Модель ${i+1} - Премиум виртуальный инфлюенсер для цифровых маркетинговых кампаний`} width={160} height={100} loading="lazy" /></div>
                 ))}
                 {Array.from({length:19}).map((_,i)=> (
                   <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`Профессиональная AI Сгенерированная Модель ${i+1} - Виртуальный инфлюенсер для бренд-маркетинга`} width={160} height={100} loading="lazy" /></div>
                 ))}
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="AI-PEOPLE.IO" data-lang-ru="AI-PEOPLE.IO">AI-PEOPLE.IO</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Buy and sell superrealistic virtual influencers" data-lang-ru="Покупайте и продавайте сеперреалистичных виртуальных инфлюэнсеров">Покупайте и продавайте сеперреалистичных виртуальных инфлюэнсеров</h2>
          <h3 className="hero-description" data-lang-en="The world's first curated platform for premium AI content. Join today to the community of creators revolutionizing digital marketing." data-lang-ru="Первая в мире курируемая платфлорма для премиального AI-контента. Присоединяйтесь уже сегодня к сообществу креаторов революционизирующих цифровой маркетинг.">Первая в мире курируемая платфлорма для премиального AI-контента. Присоединяйтесь уже сегодня к сообществу креаторов революционизирующих цифровой маркетинг.</h3>
          
          {/* Presentation Button */}
          <div className="presentation-btn-container">
            <button 
              className="presentation-btn"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span data-lang-en="Presentation" data-lang-ru="Презентация">Презентация</span>
            </button>
          </div>
        </section>

        {/* Video Modal */}
        <VideoModal 
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoSrc="/video/presentation.mp4"
          youtubeChannel="https://youtube.com/@ai_people_io"
        />

        {/* Main Content */}
        <section className="content-section">
          {/* Why AI-People */}
          <div className="content-block">
            <h2 data-lang-en="Why Choose AI-People: World's First AI Models Marketplace" data-lang-ru="Почему AI-People: Первый в мире маркетплейс AI-моделей">Почему AI-People: Первый в мире маркетплейс AI-моделей</h2>
            <p data-lang-en="We're not just a marketplace — we're an ecosystem where cutting-edge AI technology meets creative freedom and business opportunities. Connect with thousands of AI creators producing hyperrealistic virtual influencers, AI models, and digital humans for advertising, social media, branding, and e-commerce. Our platform bridges the gap between businesses seeking cost-effective, high-quality AI-generated content and talented creators monetizing their AI art skills." data-lang-ru="Мы не просто маркетплейс — мы экосистема, где передовые AI-технологии встречаются с творческой свободой и бизнес-возможностями. Связывайтесь с тысячами AI-креаторов, создающих гиперреалистичных виртуальных инфлюенсеров, AI-модели и цифровых людей для рекламы, соцсетей, брендинга и e-commerce. Наша платформа соединяет бизнесы, ищущие экономически эффективный высококачественный AI-контент, и талантливых креаторов, монетизирующих свои навыки AI-искусства.">Мы не просто маркетплейс — мы экосистема, где передовые AI-технологии встречаются с творческой свободой и бизнес-возможностями. Связывайтесь с тысячами AI-креаторов, создающих гиперреалистичных виртуальных инфлюенсеров, AI-модели и цифровых людей для рекламы, соцсетей, брендинга и e-commerce. Наша платформа соединяет бизнесы, ищущие экономически эффективный высококачественный AI-контент, и талантливых креаторов, монетизирующих свои навыки AI-искусства.</p>
          </div>

          {/* For Buyers */}
          <div ref={buyerRef} className="content-block for-buyers">
            <h2 data-lang-en="Buy AI Models: Premium Hyperrealistic Virtual Influencers for Marketing" data-lang-ru="Покупайте AI-модели: Премиум гиперреалистичные виртуальные инфлюенсеры для маркетинга">Покупайте AI-модели: Премиум гиперреалистичные виртуальные инфлюенсеры для маркетинга</h2>
            <p data-lang-en="Gain instant access to a curated catalog of premium AI models and ready-made photo/video content packages. Perfect for advertising campaigns, social media marketing, branding projects, or any creative initiative requiring professional visuals." data-lang-ru="Получите мгновенный доступ к курированному каталогу премиум AI-моделей и готовых пакетов фото/видео контента. Идеально для рекламных кампаний, маркетинга в соцсетях, брендинговых проектов или любых креативных инициатив, требующих профессиональных визуалов.">Получите мгновенный доступ к курированному каталогу премиум AI-моделей и готовых пакетов фото/видео контента. Идеально для рекламных кампаний, маркетинга в соцсетях, брендинговых проектов или любых креативных инициатив, требующих профессиональных визуалов.</p>
            
            <h3 data-lang-en="Key Benefits:" data-lang-ru="Ключевые преимущества:">Ключевые преимущества:</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem'}}>
              <li data-lang-en="No photographers, models, or studios needed" data-lang-ru="Не нужны фотографы, модели или студии">Не нужны фотографы, модели или студии</li>
              <li data-lang-en="Instant download and deployment" data-lang-ru="Мгновенная загрузка и использование">Мгновенная загрузка и использование</li>
              <li data-lang-en="Custom content orders from talented AI creators" data-lang-ru="Заказ кастомного контента у талантливых AI-креаторов">Заказ кастомного контента у талантливых AI-креаторов</li>
              <li data-lang-en="Save 90% compared to traditional photoshoots" data-lang-ru="Экономия 90% по сравнению с традиционными фотосессиями">Экономия 90% по сравнению с традиционными фотосессиями</li>
              <li data-lang-en="Full commercial licensing included" data-lang-ru="Полная коммерческая лицензия включена">Полная коммерческая лицензия включена</li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Learn more in our " data-lang-ru="Узнайте больше в нашем ">Узнайте больше в нашем </span>
              <a href="/ru/blog/1" className="visible-link" data-lang-en="AI-Generated Content Marketing Guide" data-lang-ru="гайде по AI-контент маркетингу">гайде по AI-контент маркетингу</a>
              <span data-lang-en="." data-lang-ru=".">.</span>
            </p>
            </div>

          {/* For Creators */}
          <div ref={creatorRef} className="content-block for-creators">
            <h2 data-lang-en="Sell AI Models: Monetize AI Art & Earn $5K-$25K Monthly" data-lang-ru="Продавайте AI-модели: Монетизируйте AI-искусство и зарабатывайте $5K-$25K в месяц">Продавайте AI-модели: Монетизируйте AI-искусство и зарабатывайте $5K-$25K в месяц</h2>
            <p data-lang-en="Turn your AI generation skills into a thriving business. Upload your hyperrealistic AI models, set your own prices, and earn from every sale. Join creators already making $5,000-$25,000 per month selling virtual influencers and AI-generated content on our platform." data-lang-ru="Превратите свои навыки AI-генерации в процветающий бизнес. Загружайте гиперреалистичные AI-модели, устанавливайте свои цены и зарабатывайте с каждой продажи. Присоединяйтесь к креаторам, уже зарабатывающим $5,000-$25,000 в месяц, продавая виртуальных инфлюенсеров и AI-контент на нашей платформе.">Превратите свои навыки AI-генерации в процветающий бизнес. Загружайте гиперреалистичные AI-модели, устанавливайте свои цены и зарабатывайте с каждой продажи. Присоединяйтесь к креаторам, уже зарабатывающим $5,000-$25,000 в месяц, продавая виртуальных инфлюенсеров и AI-контент на нашей платформе.</p>
            
            <h3 data-lang-en="What We Handle For You:" data-lang-ru="Что мы делаем за вас:">Что мы делаем за вас:</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem'}}>
              <li data-lang-en="Secure payments (including cryptocurrency)" data-lang-ru="Безопасные платежи (включая криптовалюту)">Безопасные платежи (включая криптовалюту)</li>
              <li data-lang-en="Marketing and promotion to thousands of buyers" data-lang-ru="Маркетинг и продвижение тысячам покупателей">Маркетинг и продвижение тысячам покупателей</li>
              <li data-lang-en="Customer support and licensing management" data-lang-ru="Поддержка клиентов и управление лицензиями">Поддержка клиентов и управление лицензиями</li>
              <li data-lang-en="Portfolio showcase tools" data-lang-ru="Инструменты демонстрации портфолио">Инструменты демонстрации портфолио</li>
              <li data-lang-en="Analytics dashboard to track earnings" data-lang-ru="Панель аналитики для отслеживания заработка">Панель аналитики для отслеживания заработка</li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Ready to start earning? Check out our " data-lang-ru="Готовы начать зарабатывать? Изучите наш ">Готовы начать зарабатывать? Изучите наш </span>
              <a href="/ru/blog/2" className="visible-link" data-lang-en="$5K-$25K/Month Creator Success Guide" data-lang-ru="гайд успеха креатора на $5K-$25K/месяц">гайд успеха креатора на $5K-$25K/месяц</a>
              <span data-lang-en="." data-lang-ru=".">.</span>
            </p>
            </div>

          {/* Call to Action */}
          <section style={{padding: '2rem 0'}}>
            <div className="call-to-action" style={{textAlign: 'center'}}>
              <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Присоединяйтесь к революции AI-контента</h2>
              <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.</p>
              <p>
                <span data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Посетите наш ">Есть вопросы? Посетите наш </span>
                <a href="/ru/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ page" data-lang-ru="раздел FAQ">раздел FAQ</a>
                <span data-lang-en=" or explore our " data-lang-ru=" или изучите наш "> или изучите наш </span>
                <a href="/ru/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights on AI models and virtual influencers" data-lang-ru="экспертные инсайты по AI-моделям и виртуальным инфлюенсерам">экспертные инсайты по AI-моделям и виртуальным инфлюенсерам</a>
                <span data-lang-en="." data-lang-ru=".">.</span>
              </p>
              <a href="/ru/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Присоединиться к списку ожидания</span></a>
            </div>
          </section>
        </section>
      </main>

      <Footer />
      
      {/* Schema.org Structured Data - Russian Version */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI-People",
            "alternateName": "Маркетплейс AI-моделей AI-People",
            "url": "https://ai-people.com/ru",
            "description": "Первый в мире курируемый маркетплейс AI-моделей. Покупайте и продавайте гиперреалистичных виртуальных инфлюенсеров, AI-арт и AI-модели для рекламы, соцсетей, брендинга и e-commerce.",
            "inLanguage": "ru-RU",
            "publisher": {
              "@type": "Organization",
              "name": "AI-People",
              "url": "https://ai-people.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ai-people.com/faq/AI-people%20Logo.png",
                "width": 200,
                "height": 200
              },
              "sameAs": [
                "https://twitter.com/aipeople",
                "https://linkedin.com/company/ai-people",
                "https://instagram.com/aipeople"
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ai-people.com/ru/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AI-People",
            "url": "https://ai-people.com",
            "logo": "https://ai-people.com/faq/AI-people%20Logo.png",
            "description": "Ведущий маркетплейс AI-моделей, объединяющий креаторов и бизнес по всему миру. Запуск 1 ноября 2025 года.",
            "foundingDate": "2025",
            "founders": [{
              "@type": "Person",
              "name": "Команда AI-People"
            }],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "RU"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["Russian", "English"]
            },
            "sameAs": [
              "https://twitter.com/aipeople",
              "https://linkedin.com/company/ai-people",
              "https://instagram.com/aipeople"
            ]
          })
        }}
      />
      
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Маркетплейс AI-моделей",
            "description": "Первый в мире курируемый маркетплейс гиперреалистичных AI-моделей и виртуальных инфлюенсеров",
            "brand": {
              "@type": "Brand",
              "name": "AI-People"
            },
            "category": "Программное приложение",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/PreOrder",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Бесплатное участие, заработок с продаж"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            },
            "releaseDate": "2025-11-01"
          })
        }}
      />
      
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Создание и лицензирование AI-моделей",
            "description": "Профессиональное создание AI-моделей, разработка виртуальных инфлюенсеров и услуги коммерческого лицензирования",
            "provider": {
              "@type": "Organization",
              "name": "AI-People"
            },
            "serviceType": "AI технологические услуги",
            "areaServed": {
              "@type": "Country",
              "name": ["Россия", "США", "Великобритания", "Канада", "Австралия"]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI-модели и виртуальные инфлюенсеры",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Гиперреалистичные AI-модели"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Создание виртуальных инфлюенсеров"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Лицензирование AI-искусства"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
    </>
  );
}
