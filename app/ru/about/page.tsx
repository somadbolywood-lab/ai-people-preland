"use client";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";

export default function Page() {
  useHamburgerMenu();
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
        <title>О нас | AI-People — Первый курируемый маркетплейс AI-моделей</title>
        <meta name="description" content="Узнайте об AI-People — первом курируемом маркетплейсе гиперреалистичных AI-моделей и виртуальных инфлюенсеров. Миссия, видение и то, что мы создаем." />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href="https://ai-people.io/ru/about" />
        <meta property="og:title" content="О нас — AI-People" />
        <meta property="og:description" content="Первый курируемый маркетплейс гиперреалистичных AI-моделей и виртуальных инфлюенсеров." />
        <meta property="og:url" content="https://ai-people.io/ru/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="О нас — AI-People" />
        <meta name="twitter:description" content="Первый курируемый маркетплейс гиперреалистичных AI-моделей и виртуальных инфлюенсеров." />
      </Head>
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
        <div className="menu-legal-section">
          <a href="/legal/terms" data-lang-en="Terms of Service" data-lang-ru="Условия обслуживания">Условия обслуживания</a> · 
          <a href="/legal/privacy" data-lang-en="Privacy Policy" data-lang-ru="Политика конфиденциальности">Политика конфиденциальности</a> · 
          <a href="/legal/cookies" data-lang-en="Cookie Policy" data-lang-ru="Политика файлов cookie">Политика файлов cookie</a>
        </div>
      </div>

      <main>
        {/* Hero (RU FAQ clone) */}
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="FAQ" data-lang-ru="FAQ">FAQ</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Everything about the marketplace of already ready virtual AI models" data-lang-ru="Всё о маркетплейсе уже готовых виртуальных AI-моделей">Всё о маркетплейсе уже готовых виртуальных AI-моделей</h2>
          <h3 className="hero-description" data-lang-en="How technology, creativity and monetization unite in one AI space. Create, own and earn from digital personas of the future using the power of AI." data-lang-ru="Как технологии, креатив и монетизация объединяются в одном AI-пространстве. Создавай, владей и зарабатывай на цифровых образах будущего, используя потенциал AI.">Как технологии, креатив и монетизация объединяются в одном AI-пространстве. Создавай, владей и зарабатывай на цифровых образах будущего, используя потенциал AI.</h3>
        </section>

        {/* Вставка первых блоков RU FAQ (образец). При необходимости можно расширить до полного 1:1 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-1" data-lang-en="What is AI-People and who is it for?" data-lang-ru="Что такое AI-People и для кого он предназначен?"></h2>
          <div className="collapsible-content" id="faq-1">
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

        {/* CTA RU */}
        <section style={{padding: '2rem 0'}}>
          <div className="call-to-action" style={{textAlign: 'center'}}>
            <h2 data-lang-en="Join the AI Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Присоединяйтесь к революции AI-контента</h2>
            <p data-lang-en="Whether you're a business looking for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery, AI-People is your launchpad. Subscribe now for early access, exclusive features, and special perks reserved for our founding community." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически эффективные высококачественные визуалы, или креатором, готовым продемонстрировать мастерство в AI, AI-People — ваша стартовая площадка. Подпишитесь сейчас для раннего доступа, эксклюзивных функций и специальных привилегий нашего сообщества основателей.">Независимо от того, являетесь ли вы бизнесом, ищущим экономически эффективные высококачественные визуалы, или креатором, готовым продемонстрировать мастерство в AI, AI-People — ваша стартовая площадка. Подпишитесь сейчас для раннего доступа, эксклюзивных функций и специальных привилегий нашего сообщества основателей.</p>
            <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Посетите наш ">Есть вопросы? Посетите наш <a href="/ru/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ page" data-lang-ru="раздел FAQ">раздел FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наш "> или изучите наш </span><a href="/ru/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights on AI models and virtual influencers" data-lang-ru="экспертные инсайты по AI-моделям и виртуальным инфлюенсерам">экспертные инсайты по AI-моделям и виртуальным инфлюенсерам</a>.</p>
            <a href="/ru/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Присоединиться к списку ожидания</span></a>
          </div>
        </section>

        {/* Schema.org - About Page RU */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "О нас — AI-People",
              "url": "https://ai-people.io/ru/about",
              "inLanguage": ["ru", "en"],
              "isPartOf": {
                "@type": "WebSite",
                "name": "AI-People",
                "url": "https://ai-people.io"
              }
            })
          }}
        />
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

      <Footer />
    </div>
  );
}


