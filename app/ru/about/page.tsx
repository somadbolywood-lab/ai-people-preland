"use client";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import FooterRU from "../../components/FooterRU";
import HreflangLinks from "../../components/HreflangLinks";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import { useLanguage } from "../../hooks/useLanguage";

export default function Page() {
  // Use unified language hook with forced Russian language
  useLanguage({ forceLanguage: 'ru' });
  
  // Независимая статичная страница: без динамической зависимости от FAQ
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const timer = setTimeout(() => {
      const headers = document.querySelectorAll('.collapsible-header');
      headers.forEach(header => {
        if (header.hasAttribute('data-collapsible-initialized')) return;
        header.setAttribute('data-collapsible-initialized', 'true');
        header.addEventListener('click', function (this: Element) {
          const targetId = this.getAttribute('data-collapsible');
          const content = document.getElementById(targetId || '');
          if (content) {
            this.classList.toggle('expanded');
            content.classList.toggle('expanded');
          }
        });
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container home-page">
      <Head>
        <title>О нас | AI-People — Первый маркетплейс AI-моделей запуск дек 2025</title>
        <meta name="description" content="О AI-People — первом маркетплейсе AI-моделей запуск декабрь 2025. Ранний доступ уже доступен с эксклюзивными привилегиями и возможностями для креаторов" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href="https://ai-people.io/ru/about" />
        <meta property="og:title" content="О нас — AI-People" />
        <meta property="og:description" content="Первый курируемый маркетплейс гиперреалистичных AI-моделей и виртуальных инфлюенсеров" />
        <meta property="og:url" content="https://ai-people.io/ru/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/faq/AI-people%20Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О нас — AI-People" />
        <meta name="twitter:description" content="Первый курируемый маркетплейс гиперреалистичных AI-моделей и виртуальных инфлюенсеров" />
        <meta name="twitter:image" content="https://ai-people.io/faq/AI-people%20Logo.png" />
        <HreflangLinks currentPath="/ru/about" locale="ru" />
      </Head>
      <HeaderWithMenu homeHref="/ru" />

      <main>
        {/* Уведомление */}
        <div className="notification-banner">
          <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. Стартуем 01.12.2025">
            🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. Стартуем 01.12.2025
          </span>
          </div>
        </div>

        {/* Marquee (RU) — перед заголовками */}
        <section className="marquee" aria-label="Model previews">
          <div className="marquee-track">
            {Array.from({length:19}).map((_,i)=> (
              <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
            ))}
            {Array.from({length:19}).map((_,i)=> (
              <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
            ))}
          </div>
        </section>

        {/* Hero (About RU) — после маркви */}
        <section className="hero">
          <h1 className="unified-h1"><span className="gradient-text" data-lang-en="About" data-lang-ru="О нас">О нас</span></h1>
          <h2 className="hero-subtitle" data-lang-en="World's First AI Influencer Marketplace: Empowering Creators and Brands with Hyperrealistic Models" data-lang-ru="Первый маркетплейс AI-инфлюенсеров: вдохновляем креаторов и бренды гиперреалистичными моделями">Первый маркетплейс AI-инфлюенсеров: вдохновляем креаторов и бренды гиперреалистичными моделями</h2>
          <h3 className="hero-description" data-lang-en="We build the first curated marketplace for hyperrealistic AI models and virtual influencers to help businesses get premium visuals and empower creators to monetize their art." data-lang-ru="Мы создаём первый курируемый маркетплейс гиперреалистичных AI‑моделей и виртуальных инфлюенсеров, чтобы бизнес получал премиальные визуалы, а креаторы монетизировали творчество.">Мы создаём первый курируемый маркетплейс гиперреалистичных AI‑моделей и виртуальных инфлюенсеров, чтобы бизнес получал премиальные визуалы, а креаторы монетизировали творчество.</h3>
        </section>

        {/* About Content Blocks */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-1" data-lang-en="What is AI-People and who is it for?" data-lang-ru="Что такое AI-People и для кого он предназначен?">Что такое AI-People и для кого он предназначен?</h2>
          <div className="collapsible-content" id="about-1">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🤖</div>
                <h3 className="gradient-text" data-lang-en="AI Content Marketplace" data-lang-ru="AI-маркетплейс контента">AI Content Marketplace</h3>
                <p data-lang-en="Our platform is the world's first marketplace for ready-made AI-generated photo and video packages with virtual models. We connect buyers with premium AI content creators in a seamless, secure environment." data-lang-ru="Наша платформа — первый в мире маркетплейс готовых фото- и видео-пакетов с виртуальными AI-моделями. Мы связываем покупателей с премиум AI-креаторами в безопасной среде.">Наша платформа — первый в мире маркетплейс готовых фото- и видео-пакетов с виртуальными AI-моделями. Мы связываем покупателей с премиум AI-креаторами в безопасной среде.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h3 className="gradient-text" data-lang-en="For Content Buyers" data-lang-ru="Для покупателей контента">Для покупателей контента</h3>
                <p data-lang-en="Perfect for businesses, marketers, and content creators who need high-quality images and videos for advertising, social media, and presentations. Get professional content instantly without expensive photoshoots." data-lang-ru="Идеально для бизнеса, маркетологов и создателей контента, которым нужны качественные изображения и видео для рекламы, соцсетей и презентаций. Получайте профессиональный контент мгновенно без дорогих фотосессий.">Идеально для бизнеса, маркетологов и создателей контента, которым нужны качественные изображения и видео для рекламы, соцсетей и презентаций. Получайте профессиональный контент мгновенно без дорогих фотосессий.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3 className="gradient-text" data-lang-en="For AI Creators" data-lang-ru="Для AI-креаторов">Для AI-креаторов</h3>
                <p data-lang-en="Ideal for designers, photographers, and AI artists who create and sell their AI packages. Monetize your creativity with up to 75% commission and reach a global audience of content buyers." data-lang-ru="Идеально для дизайнеров, фотографов и AI-художников, которые создают и продают свои AI-пакеты. Монетизируйте свое творчество с комиссией до 75% и охватите глобальную аудиторию покупателей контента.">Идеально для дизайнеров, фотографов и AI-художников, которые создают и продают свои AI-пакеты. Монетизируйте свое творчество с комиссией до 75% и охватите глобальную аудиторию покупателей контента.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-2" data-lang-en="Who can become a creator and sell content?" data-lang-ru="Кто может стать креатором и продавать контент?">Кто может стать креатором и продавать контент?</h2>
          <div className="collapsible-content" id="about-2">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3 className="gradient-text" data-lang-en="AI Artists & Designers" data-lang-ru="AI-художники и дизайнеры">AI-художники и дизайнеры</h3>
                <p data-lang-en="Perfect for anyone skilled with AI tools like Stable Diffusion, MidJourney, DALL-E, and other AI art platforms. If you can create high-quality AI content, you can monetize it on our platform." data-lang-ru="Идеально для всех, кто умеет работать с AI-инструментами, такими как Stable Diffusion, MidJourney, DALL-E и другими AI-платформами для искусства. Если вы можете создавать качественный AI-контент, вы можете монетизировать его на нашей платформе.">Идеально для всех, кто умеет работать с AI-инструментами, такими как Stable Diffusion, MidJourney, DALL-E и другими AI-платформами для искусства. Если вы можете создавать качественный AI-контент, вы можете монетизировать его на нашей платформе.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📸</div>
                <h3 className="gradient-text" data-lang-en="Photographers & Creatives" data-lang-ru="Фотографы и креаторы">Фотографы и креаторы</h3>
                <p data-lang-en="Traditional photographers and creative professionals can leverage AI to expand their portfolios and reach new markets. Transform your creative vision into scalable digital content." data-lang-ru="Традиционные фотографы и креативные профессионалы могут использовать AI для расширения своих портфолио и выхода на новые рынки. Превратите свое творческое видение в масштабируемый цифровой контент.">Традиционные фотографы и креативные профессионалы могут использовать AI для расширения своих портфолио и выхода на новые рынки. Превратите свое творческое видение в масштабируемый цифровой контент.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <h3 className="gradient-text" data-lang-en="Global Access" data-lang-ru="Глобальный доступ">Глобальный доступ</h3>
                <p data-lang-en="Registration is open to creators from any country worldwide. Our platform supports multiple languages and currencies, making it accessible to creators everywhere." data-lang-ru="Регистрация открыта для креаторов из любой страны мира. Наша платформа поддерживает несколько языков и валют, делая её доступной для креаторов повсюду.">Регистрация открыта для креаторов из любой страны мира. Наша платформа поддерживает несколько языков и валют, делая её доступной для креаторов повсюду.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-3" data-lang-en="How much do creators earn?" data-lang-ru="Сколько зарабатывают креаторы?">Сколько зарабатывают креаторы?</h2>
          <div className="collapsible-content" id="about-3">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <h3 className="gradient-text" data-lang-en="Up to 75% Commission" data-lang-ru="До 75% комиссии">До 75% комиссии</h3>
                <p data-lang-en="Creators earn up to 75% of each package sale price. The higher the quality of your AI models and content demand, the more you earn. Top creators can generate substantial monthly income." data-lang-ru="Креаторы получают до 75% от цены продажи каждого пакета. Чем выше качество ваших AI-моделей и спрос на контент, тем больше вы зарабатываете. Топовые креаторы могут генерировать существенный месячный доход.">Креаторы получают до 75% от цены продажи каждого пакета. Чем выше качество ваших AI-моделей и спрос на контент, тем больше вы зарабатываете. Топовые креаторы могут генерировать существенный месячный доход.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📈</div>
                <h3 className="gradient-text" data-lang-en="Quality-Based Earnings" data-lang-ru="Доходы на основе качества">Доходы на основе качества</h3>
                <p data-lang-en="Premium content creators with high-quality, in-demand AI models earn significantly more. Focus on creating unique, professional-grade content to maximize your earnings potential." data-lang-ru="Премиум-креаторы с высококачественными, востребованными AI-моделями зарабатывают значительно больше. Сосредоточьтесь на создании уникального, профессионального контента для максимизации вашего потенциала заработка.">Премиум-креаторы с высококачественными, востребованными AI-моделями зарабатывают значительно больше. Сосредоточьтесь на создании уникального, профессионального контента для максимизации вашего потенциала заработка.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <h3 className="gradient-text" data-lang-en="Scalable Income" data-lang-ru="Масштабируемый доход">Масштабируемый доход</h3>
                <p data-lang-en="Once you create and upload content packages, they can generate passive income for months or years. Build a portfolio of popular AI models and watch your earnings grow over time." data-lang-ru="Как только вы создаете и загружаете пакеты контента, они могут генерировать пассивный доход месяцами или годами. Создавайте портфолио популярных AI-моделей и наблюдайте, как растут ваши доходы со временем.">Как только вы создаете и загружаете пакеты контента, они могут генерировать пассивный доход месяцами или годами. Создавайте портфолио популярных AI-моделей и наблюдайте, как растут ваши доходы со временем.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-4" data-lang-en="How is legal compliance ensured?" data-lang-ru="Как обеспечивается правовое соответствие?">Как обеспечивается правовое соответствие?</h2>
          <div className="collapsible-content" id="about-4">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <h3 className="gradient-text" data-lang-en="Content Moderation" data-lang-ru="Модерация контента">Модерация контента</h3>
                <p data-lang-en="All content undergoes strict moderation before publication. We ensure all materials are original AI-generated creations and comply with platform policies and legal requirements." data-lang-ru="Весь контент проходит строгую модерацию перед публикацией. Мы гарантируем, что все материалы являются оригинальными AI-творениями и соответствуют политикам платформы и правовым требованиям.">Весь контент проходит строгую модерацию перед публикацией. Мы гарантируем, что все материалы являются оригинальными AI-творениями и соответствуют политикам платформы и правовым требованиям.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">❌</div>
                <h3 className="gradient-text" data-lang-en="Prohibited Content" data-lang-ru="Запрещенный контент">Запрещенный контент</h3>
                <p data-lang-en="We strictly prohibit: content with real people without consent, copyrighted material copies, illegal or discriminatory content. Only original AI-generated packages created by our creators are accepted." data-lang-ru="Мы строго запрещаем: контент с реальными людьми без согласия, копии защищенных авторским правом материалов, незаконный или дискриминационный контент. Принимаются только оригинальные AI-пакеты, созданные нашими креаторами.">Мы строго запрещаем: контент с реальными людьми без согласия, копии защищенных авторским правом материалов, незаконный или дискриминационный контент. Принимаются только оригинальные AI-пакеты, созданные нашими креаторами.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✅</div>
                <h3 className="gradient-text" data-lang-en="AI-Generated Only" data-lang-ru="Только AI-генерированный">Только AI-генерированный</h3>
                <p data-lang-en="We accept exclusively original AI-generated content packages created by our registered creators. This ensures legal clarity and protects both creators and buyers from copyright issues." data-lang-ru="Мы принимаем исключительно оригинальные AI-пакеты контента, созданные нашими зарегистрированными креаторами. Это обеспечивает правовую ясность и защищает как креаторов, так и покупателей от проблем с авторским правом.">Мы принимаем исключительно оригинальные AI-пакеты контента, созданные нашими зарегистрированными креаторами. Это обеспечивает правовую ясность и защищает как креаторов, так и покупателей от проблем с авторским правом.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-5" data-lang-en="Can I upload or buy 18+ content?" data-lang-ru="Могу ли я загружать или покупать 18+ контент?">Могу ли я загружать или покупать 18+ контент?</h2>
          <div className="collapsible-content" id="about-5">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🔞</div>
                <h3 className="gradient-text" data-lang-en="Separate 18+ Section" data-lang-ru="Отдельная секция 18+">Отдельная секция 18+</h3>
                <p data-lang-en="Yes, we plan to launch a dedicated 18+ section with additional requirements for both creators and buyers, including age verification and content restrictions." data-lang-ru="Да, мы планируем запустить специальную секцию 18+ с дополнительными требованиями как для креаторов, так и для покупателей, включая проверку возраста и ограничения контента.">Да, мы планируем запустить специальную секцию 18+ с дополнительными требованиями как для креаторов, так и для покупателей, включая проверку возраста и ограничения контента.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎭</div>
                <h3 className="gradient-text" data-lang-en="High-Quality Content" data-lang-ru="Высококачественный контент">Высококачественный контент</h3>
                <p data-lang-en="The 18+ section will feature realistic AI-generated content with lifestyle themes, maintaining the same high standards as our main marketplace." data-lang-ru="Секция 18+ будет содержать реалистичный AI-контент с лайфстайл тематикой, поддерживая те же высокие стандарты, что и наш основной маркетплейс.">Секция 18+ будет содержать реалистичный AI-контент с лайфстайл тематикой, поддерживая те же высокие стандарты, что и наш основной маркетплейс.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔐</div>
                <h3 className="gradient-text" data-lang-en="Age Verification" data-lang-ru="Проверка возраста">Проверка возраста</h3>
                <p data-lang-en="Both creators and buyers will need to complete age verification to access the 18+ section, ensuring compliance with legal requirements and platform safety." data-lang-ru="Как креаторы, так и покупатели должны будут пройти проверку возраста для доступа к секции 18+, обеспечивая соответствие правовым требованиям и безопасность платформы.">Как креаторы, так и покупатели должны будут пройти проверку возраста для доступа к секции 18+, обеспечивая соответствие правовым требованиям и безопасность платформы.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-6" data-lang-en="How do payments and withdrawals work?" data-lang-ru="Как работают платежи и вывод средств?">Как работают платежи и вывод средств?</h2>
          <div className="collapsible-content" id="about-6">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">💳</div>
                <h3 className="gradient-text" data-lang-en="Cryptocurrency Payments" data-lang-ru="Криптовалютные платежи">Криптовалютные платежи</h3>
                <p data-lang-en="Buyers pay using USDT on Tron or BSC networks for fast, secure transactions. We're planning to add traditional payment methods like cards and PayPal in the future." data-lang-ru="Покупатели платят с помощью USDT в сетях Tron или BSC для быстрых, безопасных транзакций. Мы планируем добавить традиционные методы оплаты, такие как карты и PayPal в будущем.">Покупатели платят с помощью USDT в сетях Tron или BSC для быстрых, безопасных транзакций. Мы планируем добавить традиционные методы оплаты, такие как карты и PayPal в будущем.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <h3 className="gradient-text" data-lang-en="Creator Payouts" data-lang-ru="Выплаты креаторам">Выплаты креаторам</h3>
                <p data-lang-en="Creators receive payments directly to their USDT wallets. Fast, secure payouts with transparent fee structure and regular payment schedules." data-lang-ru="Креаторы получают платежи напрямую на свои USDT кошельки. Быстрые, безопасные выплаты с прозрачной структурой комиссий и регулярными графиками платежей.">Креаторы получают платежи напрямую на свои USDT кошельки. Быстрые, безопасные выплаты с прозрачной структурой комиссий и регулярными графиками платежей.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔮</div>
                <h3 className="gradient-text" data-lang-en="Future Payment Options" data-lang-ru="Будущие варианты оплаты">Будущие варианты оплаты</h3>
                <p data-lang-en="We're working on adding fiat payment methods including credit cards and PayPal to make the platform accessible to users who prefer traditional payment options." data-lang-ru="Мы работаем над добавлением фиатных методов оплаты, включая кредитные карты и PayPal, чтобы сделать платформу доступной для пользователей, которые предпочитают традиционные варианты оплаты.">Мы работаем над добавлением фиатных методов оплаты, включая кредитные карты и PayPal, чтобы сделать платформу доступной для пользователей, которые предпочитают традиционные варианты оплаты.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-7" data-lang-en="Where can I use purchased content?" data-lang-ru="Где я могу использовать купленный контент?">Где я могу использовать купленный контент?</h2>
          <div className="collapsible-content" id="about-7">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📄</div>
                <h3 className="gradient-text" data-lang-en="Commercial License" data-lang-ru="Коммерческая лицензия">Коммерческая лицензия</h3>
                <p data-lang-en="All content packages come with full commercial licensing. Use purchased photos and videos in advertising, social media, presentations, websites, and print materials without restrictions." data-lang-ru="Все пакеты контента поставляются с полной коммерческой лицензией. Используйте купленные фото и видео в рекламе, соцсетях, презентациях, веб-сайтах и печатных материалах без ограничений.">Все пакеты контента поставляются с полной коммерческой лицензией. Используйте купленные фото и видео в рекламе, соцсетях, презентациях, веб-сайтах и печатных материалах без ограничений.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h3 className="gradient-text" data-lang-en="Resale Rights" data-lang-ru="Права на перепродажу">Права на перепродажу</h3>
                <p data-lang-en="You can resell the content you purchase, giving you additional monetization opportunities. Perfect for agencies and content creators who want to offer services to their clients." data-lang-ru="Вы можете перепродавать купленный контент, предоставляя дополнительные возможности монетизации. Идеально для агентств и создателей контента, которые хотят предлагать услуги своим клиентам.">Вы можете перепродавать купленный контент, предоставляя дополнительные возможности монетизации. Идеально для агентств и создателей контента, которые хотят предлагать услуги своим клиентам.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3 className="gradient-text" data-lang-en="Unlimited Usage" data-lang-ru="Неограниченное использование">Неограниченное использование</h3>
                <p data-lang-en="No usage limits or expiration dates. Once you purchase content, you own the rights to use it indefinitely across all your projects and campaigns." data-lang-ru="Никаких ограничений использования или сроков действия. Как только вы покупаете контент, вы владеете правами на его использование неограниченно во всех ваших проектах и кампаниях.">Никаких ограничений использования или сроков действия. Как только вы покупаете контент, вы владеете правами на его использование неограниченно во всех ваших проектах и кампаниях.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-8" data-lang-en="Can I request custom content?" data-lang-ru="Могу ли я заказать индивидуальный контент?">Могу ли я заказать индивидуальный контент?</h2>
          <div className="collapsible-content" id="about-8">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">✍️</div>
                <h3 className="gradient-text" data-lang-en="Detailed Specifications" data-lang-ru="Детальные спецификации">Детальные спецификации</h3>
                <p data-lang-en="Yes! You can provide detailed text descriptions, specify style preferences, format requirements, and quantity. Our creators will create unique content packages tailored to your exact needs." data-lang-ru="Да! Вы можете предоставить детальные текстовые описания, указать стилевые предпочтения, требования к формату и количество. Наши креаторы создадут уникальные пакеты контента, адаптированные под ваши точные потребности.">Да! Вы можете предоставить детальные текстовые описания, указать стилевые предпочтения, требования к формату и количество. Наши креаторы создадут уникальные пакеты контента, адаптированные под ваши точные потребности.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3 className="gradient-text" data-lang-en="Custom Style & Format" data-lang-ru="Индивидуальный стиль и формат">Индивидуальный стиль и формат</h3>
                <p data-lang-en="Request specific styles, themes, or formats that match your brand identity. Whether you need corporate, lifestyle, artistic, or any other style, our creators can deliver." data-lang-ru="Заказывайте конкретные стили, темы или форматы, которые соответствуют идентичности вашего бренда. Нужен ли вам корпоративный, лайфстайл, художественный или любой другой стиль, наши креаторы могут это обеспечить.">Заказывайте конкретные стили, темы или форматы, которые соответствуют идентичности вашего бренда. Нужен ли вам корпоративный, лайфстайл, художественный или любой другой стиль, наши креаторы могут это обеспечить.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📦</div>
                <h3 className="gradient-text" data-lang-en="Flexible Packages" data-lang-ru="Гибкие пакеты">Гибкие пакеты</h3>
                <p data-lang-en="Order custom photo sets, video packages, or mixed content bundles. Specify the exact number of images and videos you need, along with any special requirements or preferences." data-lang-ru="Заказывайте индивидуальные фото-наборы, видео-пакеты или смешанные контент-бандлы. Указывайте точное количество изображений и видео, которые вам нужны, вместе с любыми особыми требованиями или предпочтениями.">Заказывайте индивидуальные фото-наборы, видео-пакеты или смешанные контент-бандлы. Указывайте точное количество изображений и видео, которые вам нужны, вместе с любыми особыми требованиями или предпочтениями.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="about-9" data-lang-en="When does the platform launch?" data-lang-ru="Когда запускается платформа?">Когда запускается платформа?</h2>
          <div className="collapsible-content" id="about-9">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <h3 className="gradient-text" data-lang-en="Beta Launch Soon" data-lang-ru="Скоро запуск беты">Скоро запуск беты</h3>
                <p data-lang-en="We're launching a closed beta version in the coming days. Early access will be available to users who join our waitlist and get priority invitations to test the platform." data-lang-ru="Мы запускаем закрытую бета-версию в ближайшие дни. Ранний доступ будет доступен пользователям, которые присоединятся к нашему списку ожидания и получат приоритетные приглашения для тестирования платформы.">Мы запускаем закрытую бета-версию в ближайшие дни. Ранний доступ будет доступен пользователям, которые присоединятся к нашему списку ожидания и получат приоритетные приглашения для тестирования платформы.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📋</div>
                <h3 className="gradient-text" data-lang-en="Join Waitlist" data-lang-ru="Присоединиться к списку ожидания">Присоединиться к списку ожидания</h3>
                <p data-lang-en="Sign up now to join our exclusive waitlist. Early subscribers will receive special privileges, priority access, and exclusive benefits when the platform officially launches." data-lang-ru="Зарегистрируйтесь сейчас, чтобы присоединиться к нашему эксклюзивному списку ожидания. Ранние подписчики получат особые привилегии, приоритетный доступ и эксклюзивные преимущества при официальном запуске платформы.">Зарегистрируйтесь сейчас, чтобы присоединиться к нашему эксклюзивному списку ожидания. Ранние подписчики получат особые привилегии, приоритетный доступ и эксклюзивные преимущества при официальном запуске платформы.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎁</div>
                <h3 className="gradient-text" data-lang-en="Early Bird Benefits" data-lang-ru="Преимущества ранних пользователей">Преимущества ранних пользователей</h3>
                <p data-lang-en="Early subscribers get exclusive launch privileges, special pricing, and priority support. Don't miss out on being among the first to experience the future of AI content marketplace." data-lang-ru="Ранние подписчики получают эксклюзивные привилегии запуска, специальные цены и приоритетную поддержку. Не упустите возможность быть среди первых, кто испытает будущее AI-маркетплейса контента.">Ранние подписчики получают эксклюзивные привилегии запуска, специальные цены и приоритетную поддержку. Не упустите возможность быть среди первых, кто испытает будущее AI-маркетплейса контента.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA RU */}
        <section style={{padding: '2rem 0'}}>
          <div className="call-to-action" style={{textAlign: 'center'}}>
            <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Присоединяйтесь к революции AI-контента</h2>
            <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.</p>
            <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Перейдите в ">Есть вопросы? Перейдите в <a href="/ru/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ" data-lang-ru="раздел FAQ">раздел FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наши "> или изучите наши </span><a href="/ru/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights about AI models and virtual influencers" data-lang-ru="инсайты о виртуальных инфлюенсерах и AI-моделях">инсайты о виртуальных инфлюенсерах и AI-моделях</a>.</p>
            <a href="/ru/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Присоединиться к списку ожидания</span></a>
          </div>
        </section>

      </main>

      {/* Schema.org - About (RU) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "О нас — AI-People",
            "url": "https://ai-people.io/ru/about",
            "inLanguage": ["ru", "en"],
            "isPartOf": {
              "@type": "WebSite",
              "name": "AI-People",
              "url": "https://ai-people.io"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AI-People"
            }
          })
        }}
      />

             <FooterRU />
    </div>
  );
}


