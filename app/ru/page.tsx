"use client";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useScrollBorder } from "../hooks/useScrollBorder";
import FooterRU from "../components/FooterRU";
import VideoModal from "../components/VideoModal";
import HeaderWithMenu from "../components/HeaderWithMenu";
import { useLanguage } from "../hooks/useLanguage";

export default function Page() {
  const { buyerRef, creatorRef } = useScrollBorder();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Use unified language hook with forced Russian language
  useLanguage({ forceLanguage: 'ru' });

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
      <HeaderWithMenu homeHref="/ru" />

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. Стартуем 01.12.2025">
            🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. Стартуем 01.12.2025
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
                 {Array.from({length:19}).map((_,i)=> (
                   <div className="marquee-item" key={`m-a-${i}`}>
                     <picture>
                       <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                       <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`Гиперреалистичная AI Модель ${i+1} - Премиум виртуальный инфлюенсер для цифровых маркетинговых кампаний`} width={320} height={180} quality={100} loading="eager" />
                     </picture>
                   </div>
                 ))}
                 {Array.from({length:19}).map((_,i)=> (
                   <div className="marquee-item" key={`m-b-${i}`}>
                     <picture>
                       <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                       <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`Профессиональная AI Сгенерированная Модель ${i+1} - Виртуальный инфлюенсер для бренд-маркетинга`} width={320} height={180} quality={100} loading="eager" />
                     </picture>
                   </div>
                 ))}
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1 className="unified-h1"><span className="gradient-text" data-lang-en="AI-PEOPLE.IO" data-lang-ru="AI-PEOPLE.IO">AI-PEOPLE.IO</span></h1>
          <h2 className="hero-subtitle" data-lang-en="World's First AI Influencer Marketplace: Buy and Sell Hyperrealistic AI Models for Marketing and Branding" data-lang-ru="Первый маркетплейс виртуальных AI-инфлюенсеров: покупайте и продавайте гиперреалистичные AI-модели для маркетинга и брендинга">Первый маркетплейс виртуальных AI-инфлюенсеров: покупайте и продавайте гиперреалистичные AI-модели для маркетинга и брендинга</h2>
          <h3 className="hero-description" data-lang-en="The world's first curated platform for premium AI content. Join today to the community of creators revolutionizing digital marketing." data-lang-ru="Первая в мире курируемая платформа для премиального AI-контента. Присоединяйтесь уже сегодня к сообществу креаторов революционизирующих цифровой маркетинг.">Первая в мире курируемая платформа для премиального AI-контента. Присоединяйтесь уже сегодня к сообществу креаторов революционизирующих цифровой маркетинг.</h3>
          
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
            <h2 data-lang-en="AI People — the world's first AI models marketplace" data-lang-ru="AI People — первый в мире маркетплейс AI-моделей">AI People — первый в мире маркетплейс AI-моделей</h2>
            <p data-lang-en="AI People — the world's first AI models marketplace and virtual influencers platform. We connect AI creators and brands in a new ecosystem where artificial intelligence transforms ideas into hyperrealistic visual content. Discover, buy and collaborate with creators of AI models, photos and videos of ultra-high quality, created for marketing, social media, e-commerce and fan platforms (Fanvue, Fansly, Patreon, OnlyFans and others). AI People — where realism and creativity meet technology." data-lang-ru="AI People — первый в мире маркетплейс AI-моделей и платформа виртуальных инфлюенсеров. Мы соединяем AI-креаторов и бренды в новой экосистеме, где искусственный интеллект превращает идеи в гиперреалистичный визуальный контент. Открывайте, покупайте и сотрудничайте с создателями AI-моделей, фото и видео сверхвысокого качества, созданных для маркетинга, соцсетей, e-commerce и фан-платформ (Fanvue, Fansly, Patreon, OnlyFans и др.). AI People — там, где реализм и креативность встречаются с технологией.">AI People — первый в мире маркетплейс AI-моделей и платформа виртуальных инфлюенсеров. Мы соединяем AI-креаторов и бренды в новой экосистеме, где искусственный интеллект превращает идеи в гиперреалистичный визуальный контент. Открывайте, покупайте и сотрудничайте с создателями AI-моделей, фото и видео сверхвысокого качества, созданных для маркетинга, соцсетей, e-commerce и фан-платформ (Fanvue, Fansly, Patreon, OnlyFans и др.). AI People — там, где реализм и креативность встречаются с технологией.</p>
          </div>

          {/* For Buyers */}
          <div ref={buyerRef} className="content-block for-buyers">
            <h2 data-lang-en="Buy AI Models — Premium Hyper-Realistic Virtual Influencers for Marketing & Branding" data-lang-ru="Покупайте AI-модели — Премиум гиперреалистичные виртуальные инфлюенсеры для маркетинга и брендинга">Покупайте AI-модели — Премиум гиперреалистичные виртуальные инфлюенсеры для маркетинга и брендинга</h2>
            <p data-lang-en="Get instant access to a curated catalog of professional AI models and ready-made photo & video content packs. Perfect for advertising campaigns, social media marketing, branding, e-commerce, and fan platforms (Fanvue, Fansly, Patreon, OnlyFans, and more). Create agency-level visuals without hiring photographers, models, or studios — all powered by advanced artificial intelligence." data-lang-ru="Получите мгновенный доступ к курированному каталогу профессиональных AI-моделей и готовых пакетов фото и видео контента. Идеально для рекламных кампаний, маркетинга в соцсетях, брендинга, e-commerce и фан-платформ (Fanvue, Fansly, Patreon, OnlyFans и др.). Создавайте визуалы агентского уровня без найма фотографов, моделей или студий — всё на основе передового искусственного интеллекта.">Получите мгновенный доступ к курированному каталогу профессиональных AI-моделей и готовых пакетов фото и видео контента. Идеально для рекламных кампаний, маркетинга в соцсетях, брендинга, e-commerce и фан-платформ (Fanvue, Fansly, Patreon, OnlyFans и др.). Создавайте визуалы агентского уровня без найма фотографов, моделей или студий — всё на основе передового искусственного интеллекта.</p>
            
            <h3 className="gradient-text" data-lang-en="Key Benefits" data-lang-ru="Ключевые преимущества">Ключевые преимущества</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem', listStyle: 'none', paddingLeft: '0'}}>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="No photographers, models, or studios needed — everything is AI-generated" data-lang-ru="Не нужны фотографы, модели или студии — всё генерируется AI">Не нужны фотографы, модели или студии — всё генерируется AI</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Instant access & download — start using content right away" data-lang-ru="Мгновенный доступ и загрузка — начните использовать контент сразу">Мгновенный доступ и загрузка — начните использовать контент сразу</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Custom content on demand — order exclusive photos or videos from top AI creators" data-lang-ru="Кастомный контент по запросу — заказывайте эксклюзивные фото или видео у топовых AI-креаторов">Кастомный контент по запросу — заказывайте эксклюзивные фото или видео у топовых AI-креаторов</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Save up to 90% compared to traditional photo shoots" data-lang-ru="Экономьте до 90% по сравнению с традиционными фотосессиями">Экономьте до 90% по сравнению с традиционными фотосессиями</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Full commercial license included with every purchase" data-lang-ru="Полная коммерческая лицензия включена в каждую покупку">Полная коммерческая лицензия включена в каждую покупку</span></li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Learn more in our " data-lang-ru="Узнайте больше в нашем ">Узнайте больше в нашем </span>
              <a href="/ru/blog/1" className="visible-link" data-lang-en="AI Content Marketing Guide" data-lang-ru="гайде по AI-контент маркетингу">гайде по AI-контент маркетингу</a>
              <span data-lang-en="." data-lang-ru=".">.</span>
            </p>
            </div>

          {/* For Creators */}
          <div ref={creatorRef} className="content-block for-creators">
            <h2 data-lang-en="Sell AI Models — Monetize AI Art & Earn from Your Talent" data-lang-ru="Продавайте AI-модели — монетизируйте AI-искусство и зарабатывайте на своём таланте">Продавайте AI-модели — монетизируйте AI-искусство и зарабатывайте на своём таланте</h2>
            <p data-lang-en="Turn your AI generation skills into a sustainable source of income. Upload hyperrealistic AI models, set your own prices, and profit from every sale. Join a community of professional creators who build virtual influencers and exclusive AI content for brands, businesses, and fan platforms worldwide." data-lang-ru="Превратите свои навыки AI-генерации в устойчивый источник дохода. Загружайте гиперреалистичные AI-модели, устанавливайте собственные цены и получайте прибыль с каждой продажи. Присоединяйтесь к сообществу профессиональных креаторов, которые создают виртуальных инфлюенсеров и эксклюзивный AI-контент для брендов, бизнеса и фан-платформ по всему миру.">Превратите свои навыки AI-генерации в устойчивый источник дохода. Загружайте гиперреалистичные AI-модели, устанавливайте собственные цены и получайте прибыль с каждой продажи. Присоединяйтесь к сообществу профессиональных креаторов, которые создают виртуальных инфлюенсеров и эксклюзивный AI-контент для брендов, бизнеса и фан-платформ по всему миру.</p>
            
            <h3 className="gradient-text" data-lang-en="What We Do For You" data-lang-ru="Что мы делаем за вас">Что мы делаем за вас</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem', listStyle: 'none', paddingLeft: '0'}}>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Secure and fast payouts — including cryptocurrency" data-lang-ru="Безопасные и быстрые выплаты — включая криптовалюту">Безопасные и быстрые выплаты — включая криптовалюту</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Marketing and global promotion — your content will be seen by thousands of buyers" data-lang-ru="Маркетинг и глобальное продвижение — ваш контент увидят тысячи покупателей">Маркетинг и глобальное продвижение — ваш контент увидят тысячи покупателей</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Customer support and license management — we handle all administration" data-lang-ru="Поддержка клиентов и управление лицензиями — мы берём всё администрирование на себя">Поддержка клиентов и управление лицензиями — мы берём всё администрирование на себя</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Portfolio showcase tools — stand out among other creators" data-lang-ru="Инструменты для демонстрации портфолио — выделяйтесь среди других креаторов">Инструменты для демонстрации портфолио — выделяйтесь среди других креаторов</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Analytics dashboard — track views, orders, and income growth in real-time" data-lang-ru="Панель аналитики — отслеживайте просмотры, заказы и рост дохода в реальном времени">Панель аналитики — отслеживайте просмотры, заказы и рост дохода в реальном времени</span></li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Ready to start earning from AI creativity?" data-lang-ru="Готовы начать зарабатывать на AI-креативе?">Готовы начать зарабатывать на AI-креативе?</span>
            </p>
            <p style={{marginTop: '0.5rem'}}>
              <span data-lang-en="Explore our " data-lang-ru="Изучите наш ">Изучите наш </span>
              <a href="/ru/blog/2" className="visible-link" data-lang-en="AI People Creator Success Guide" data-lang-ru="Гайд по успеху креатора AI People">Гайд по успеху креатора AI People</a>
              <span data-lang-en=" and learn how to turn creativity into stable income." data-lang-ru=" и узнайте, как превратить творчество в стабильный доход."> и узнайте, как превратить творчество в стабильный доход.</span>
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

      <FooterRU />
      
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
