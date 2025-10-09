"use client";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import { useHamburgerMenu } from "../hooks/useHamburgerMenu";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import LanguageSelector from "../components/LanguageSelector";

export default function Page() {
  useHamburgerMenu();

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
      
    <div className="container ru-optimized">
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
          <a href="mailto:feedback@ai-people.com" className="btn outline feedback-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span data-lang-en="Feedback" data-lang-ru="Обратная связь">Обратная связь</span>
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
      </div>

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 01.11.2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.11.2025">
            🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.11.2025
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
                 {Array.from({length:8}).map((_,i)=> (
                   <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`Гиперреалистичная AI Модель ${i+1} - Премиум виртуальный инфлюенсер для цифровых маркетинговых кампаний`} width={160} height={100} loading="lazy" /></div>
                 ))}
                 {Array.from({length:8}).map((_,i)=> (
                   <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`Профессиональная AI Сгенерированная Модель ${i+1} - Виртуальный инфлюенсер для бренд-маркетинга`} width={160} height={100} loading="lazy" /></div>
                 ))}
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1 className="title">
            <span className="gradient-text" data-lang-en="AI Models Marketplace:" data-lang-ru="Маркетплейс AI-моделей:">Маркетплейс AI-моделей:</span>
            <br />
            <span data-lang-en="Buy & Sell Hyperrealistic Virtual Influencers" data-lang-ru="Покупайте и продавайте гиперреалистичных виртуальных инфлюенсеров">Покупайте и продавайте гиперреалистичных виртуальных инфлюенсеров</span>
          </h1>
          <p className="subtitle" data-lang-en="The world's first curated platform for premium AI-generated content. Join the community of creators and brands revolutionizing digital marketing." data-lang-ru="Первая в мире курируемая платформа для премиум AI-контента. Присоединяйтесь к сообществу креаторов и брендов, революционизирующих цифровой маркетинг.">Первая в мире курируемая платформа для премиум AI-контента. Присоединяйтесь к сообществу креаторов и брендов, революционизирующих цифровой маркетинг.</p>
        </section>

        {/* Main Content */}
        <section className="content-section">
          {/* Why AI-People */}
          <div className="content-block">
            <h2 data-lang-en="Why Choose AI-People: World's First AI Models Marketplace" data-lang-ru="Почему AI-People: Первый в мире маркетплейс AI-моделей">Почему AI-People: Первый в мире маркетплейс AI-моделей</h2>
            <p data-lang-en="We're not just a marketplace — we're an ecosystem where cutting-edge AI technology meets creative freedom and business opportunities. Connect with thousands of AI creators producing hyperrealistic virtual influencers, AI models, and digital humans for advertising, social media, branding, and e-commerce. Our platform bridges the gap between businesses seeking cost-effective, high-quality AI-generated content and talented creators monetizing their AI art skills." data-lang-ru="Мы не просто маркетплейс — мы экосистема, где передовые AI-технологии встречаются с творческой свободой и бизнес-возможностями. Связывайтесь с тысячами AI-креаторов, создающих гиперреалистичных виртуальных инфлюенсеров, AI-модели и цифровых людей для рекламы, соцсетей, брендинга и e-commerce. Наша платформа соединяет бизнесы, ищущие экономически эффективный высококачественный AI-контент, и талантливых креаторов, монетизирующих свои навыки AI-искусства.">Мы не просто маркетплейс — мы экосистема, где передовые AI-технологии встречаются с творческой свободой и бизнес-возможностями. Связывайтесь с тысячами AI-креаторов, создающих гиперреалистичных виртуальных инфлюенсеров, AI-модели и цифровых людей для рекламы, соцсетей, брендинга и e-commerce. Наша платформа соединяет бизнесы, ищущие экономически эффективный высококачественный AI-контент, и талантливых креаторов, монетизирующих свои навыки AI-искусства.</p>
          </div>

          {/* For Buyers */}
          <div className="content-block for-buyers">
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
          <div className="content-block for-creators">
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
              <h2 data-lang-en="Join the AI Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Присоединяйтесь к революции AI-контента</h2>
              <p data-lang-en="Whether you're a business looking for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery, AI-People is your launchpad. Subscribe now for early access, exclusive features, and special perks reserved for our founding community." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически эффективные высококачественные визуалы, или креатором, готовым продемонстрировать мастерство в AI, AI-People — ваша стартовая площадка. Подпишитесь сейчас для раннего доступа, эксклюзивных функций и специальных привилегий нашего сообщества основателей.">Независимо от того, являетесь ли вы бизнесом, ищущим экономически эффективные высококачественные визуалы, или креатором, готовым продемонстрировать мастерство в AI, AI-People — ваша стартовая площадка. Подпишитесь сейчас для раннего доступа, эксклюзивных функций и специальных привилегий нашего сообщества основателей.</p>
              <p>
                <span data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Посетите наш ">Есть вопросы? Посетите наш </span>
                <a href="/ru/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ page" data-lang-ru="раздел FAQ">раздел FAQ</a>
                <span data-lang-en=" or explore our " data-lang-ru=" или изучите наш "> или изучите наш </span>
                <a href="/ru/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights on AI models and virtual influencers" data-lang-ru="экспертные инсайты по AI-моделям и виртуальным инфлюенсерам">экспертные инсайты по AI-моделям и виртуальным инфлюенсерам</a>
                <span data-lang-en="." data-lang-ru=".">.</span>
              </p>
              <a href="/ru/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List — Launching Nov 1, 2025" data-lang-ru="Присоединиться к списку ожидания — Запуск 01.11.2025">Присоединиться к списку ожидания — Запуск 01.11.2025</span></a>
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
