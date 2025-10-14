"use client";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Footer from "../../components/Footer";
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
        <title>О нас | AI-People — Первый курируемый маркетплейс AI-моделей</title>
        <meta name="description" content="Узнайте об AI-People — первом курируемом маркетплейсе гиперреалистичных AI-моделей и виртуальных инфлюенсеров. Миссия, видение и то, что мы создаем." />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href="https://ai-people.io/ru/about" />
        <meta property="og:title" content="О нас — AI-People" />
        <meta property="og:description" content="Первый курируемый маркетплейс гиперреалистичных AI-моделей и виртуальных инфлюенсеров." />
        <meta property="og:url" content="https://ai-people.io/ru/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/faq/AI-people%20Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О нас — AI-People" />
        <meta name="twitter:description" content="Первый курируемый маркетплейс гиперреалистичных AI-моделей и виртуальных инфлюенсеров." />
        <meta name="twitter:image" content="https://ai-people.io/faq/AI-people%20Logo.png" />
        <HreflangLinks currentPath="/ru/about" locale="ru" />
      </Head>
      <HeaderWithMenu homeHref="/ru" />

      <main>
        {/* Уведомление */}
        <div className="notification-banner">
          <div className="notification-content">
            <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
              🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025
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
          <h1 className="title"><span className="gradient-text" data-lang-en="About" data-lang-ru="О нас">О нас</span></h1>
          <h2 className="hero-subtitle" data-lang-en="About AI-People — mission, vision and product" data-lang-ru="О AI-People — миссия, видение и продукт">О AI-People — миссия, видение и продукт</h2>
          <h3 className="hero-description" data-lang-en="We build the first curated marketplace for hyperrealistic AI models and virtual influencers to help businesses get premium visuals and empower creators to monetize their art." data-lang-ru="Мы создаём первый курируемый маркетплейс гиперреалистичных AI‑моделей и виртуальных инфлюенсеров, чтобы бизнес получал премиальные визуалы, а креаторы монетизировали творчество.">Мы создаём первый курируемый маркетплейс гиперреалистичных AI‑моделей и виртуальных инфлюенсеров, чтобы бизнес получал премиальные визуалы, а креаторы монетизировали творчество.</h3>
        </section>

        {/* Q1 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-1" data-lang-en="What is AI-PEOPLE?" data-lang-ru="Что такое AI-PEOPLE?">Что такое AI-PEOPLE?</h2>
          <div className="collapsible-content" id="faq-1">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🤖</div>
                <h3 className="gradient-text" data-lang-en="Next-Generation Marketplace" data-lang-ru="Инновационный маркетплейс">Инновационный маркетплейс</h3>
                <p data-lang-en="AI-PEOPLE is a next-generation marketplace for AI-generated models and digital humans. It connects creators who make AI models, photos, and videos — with businesses and individuals who want to use them for marketing, content, and branding." data-lang-ru="AI-PEOPLE — это инновационный маркетплейс AI-моделей и цифровых личностей, который объединяет креаторов (создателей AI-контента) и покупателей — компании или частных пользователей, желающих использовать модели в рекламе, контенте или личном продвижении.">AI-PEOPLE — это инновационный маркетплейс AI-моделей и цифровых личностей, который объединяет креаторов (создателей AI-контента) и покупателей — компании или частных пользователей, желающих использовать модели в рекламе, контенте или личном продвижении.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q2 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-2" data-lang-en="Who can use AI-PEOPLE?" data-lang-ru="Кто может использовать AI-PEOPLE?">Кто может использовать AI-PEOPLE?</h2>
          <div className="collapsible-content" id="faq-2">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h3 className="gradient-text" data-lang-en="For Everyone" data-lang-ru="Для всех">Для всех</h3>
                <p data-lang-en="Anyone. AI-PEOPLE is designed for brands, creators, marketers, influencers, and individuals who want ready-to-use visual assets powered by AI. You can buy, sell, or customize AI models for your projects — from digital ads to personal branding." data-lang-ru="Платформа открыта для всех — брендов, фрилансеров, маркетологов, инфлюенсеров и частных пользователей. Вы можете покупать, продавать или заказывать кастомные AI-модели для любых целей: от рекламы до личного бренда.">Платформа открыта для всех — брендов, фрилансеров, маркетологов, инфлюенсеров и частных пользователей. Вы можете покупать, продавать или заказывать кастомные AI-модели для любых целей: от рекламы до личного бренда.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q3 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-3" data-lang-en="Can I sell my own AI models here?" data-lang-ru="Могу ли я продавать свои AI-модели здесь?">Могу ли я продавать свои AI-модели здесь?</h2>
          <div className="collapsible-content" id="faq-3">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <h3 className="gradient-text" data-lang-en="Creator Monetization" data-lang-ru="Монетизация для креаторов">Монетизация для креаторов</h3>
                <p data-lang-en="Yes! Creators can upload and monetize their AI-generated models, image packs, or videos. You keep full creative control and earn from every download or license purchase." data-lang-ru="Да! Креаторы могут загружать свои AI-модели, фото-пакеты и видео, сохраняя полное авторское право и получая доход от каждой покупки или лицензии.">Да! Креаторы могут загружать свои AI-модели, фото-пакеты и видео, сохраняя полное авторское право и получая доход от каждой покупки или лицензии.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q4 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-4" data-lang-en="Is it legal to use AI-generated people in content?" data-lang-ru="Легально ли использовать AI-генерированных людей в контенте?">Легально ли использовать AI-генерированных людей в контенте?</h2>
          <div className="collapsible-content" id="faq-4">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">✅</div>
                <h3 className="gradient-text" data-lang-en="Fully Legal" data-lang-ru="Полностью легально">Полностью легально</h3>
                <p data-lang-en="Absolutely. All AI models on AI-PEOPLE come with a clear usage license. We focus on ethical, copyright-safe, and commercial-ready AI content." data-lang-ru="Да, полностью легально. Все AI-модели на платформе сопровождаются чёткой лицензией использования. Мы обеспечиваем этичный и безопасный для коммерческого применения контент.">Да, полностью легально. Все AI-модели на платформе сопровождаются чёткой лицензией использования. Мы обеспечиваем этичный и безопасный для коммерческого применения контент.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q5 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-5" data-lang-en="Can I order a custom AI model or campaign?" data-lang-ru="Могу ли я заказать индивидуальную AI-модель или кампанию?">Могу ли я заказать индивидуальную AI-модель или кампанию?</h2>
          <div className="collapsible-content" id="faq-5">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3 className="gradient-text" data-lang-en="Custom Solutions" data-lang-ru="Индивидуальные решения">Индивидуальные решения</h3>
                <p data-lang-en="Yes — you can request custom model creation or order a full AI-driven ad campaign with a chosen model. Our platform connects you directly with creators for custom work." data-lang-ru="Да, вы можете заказать создание индивидуальной AI-модели или полноценную рекламную кампанию с выбранной моделью. AI-PEOPLE напрямую связывает заказчиков с креаторами для кастомных проектов.">Да, вы можете заказать создание индивидуальной AI-модели или полноценную рекламную кампанию с выбранной моделью. AI-PEOPLE напрямую связывает заказчиков с креаторами для кастомных проектов.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q6 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-6" data-lang-en="Does AI-PEOPLE include 18+ content?" data-lang-ru="Включает ли AI-PEOPLE контент 18+?">Включает ли AI-PEOPLE контент 18+?</h2>
          <div className="collapsible-content" id="faq-6">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🔞</div>
                <h3 className="gradient-text" data-lang-en="Content Rules" data-lang-ru="Правила контента">Правила контента</h3>
                <p data-lang-en="AI-PEOPLE operates under clear content rules. A separate restricted section (18+) will be available later for licensed and verified users, following all legal and ethical guidelines." data-lang-ru="На платформе действуют строгие правила контента. Отдельный раздел (18+) будет запущен позже и станет доступен только для проверенных и лицензированных пользователей, в соответствии с законодательством и этическими нормами.">На платформе действуют строгие правила контента. Отдельный раздел (18+) будет запущен позже и станет доступен только для проверенных и лицензированных пользователей, в соответствии с законодательством и этическими нормами.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q7 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-7" data-lang-en="Is AI-PEOPLE free to use?" data-lang-ru="Бесплатно ли использовать AI-PEOPLE?">Бесплатно ли использовать AI-PEOPLE?</h2>
          <div className="collapsible-content" id="faq-7">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">💳</div>
                <h3 className="gradient-text" data-lang-en="Free Registration" data-lang-ru="Бесплатная регистрация">Бесплатная регистрация</h3>
                <p data-lang-en="Registration is free. Access to AI model catalogs and premium content will be available through a membership plan, offering exclusive features and early access to new creators. Transparent pricing — no hidden fees." data-lang-ru="Регистрация бесплатна. Доступ к каталогам AI-моделей и премиум-контенту предоставляется через членскую подписку, которая открывает эксклюзивные функции и ранний доступ к новым креаторам. Прозрачная система оплаты — без скрытых комиссий.">Регистрация бесплатна. Доступ к каталогам AI-моделей и премиум-контенту предоставляется через членскую подписку, которая открывает эксклюзивные функции и ранний доступ к новым креаторам. Прозрачная система оплаты — без скрытых комиссий.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q8 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-8" data-lang-en="Where is AI-PEOPLE based?" data-lang-ru="Где базируется AI-PEOPLE?">Где базируется AI-PEOPLE?</h2>
          <div className="collapsible-content" id="faq-8">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <h3 className="gradient-text" data-lang-en="Global Operations" data-lang-ru="Глобальные операции">Глобальные операции</h3>
                <p data-lang-en="AI-PEOPLE operates globally, with headquarters in New York, USA. Our mission is to make AI-powered creativity accessible to everyone, everywhere." data-lang-ru="AI-PEOPLE работает по всему миру, главный офис расположен в Нью-Йорке (США). Наша цель — сделать AI-творчество доступным каждому.">AI-PEOPLE работает по всему миру, главный офис расположен в Нью-Йорке (США). Наша цель — сделать AI-творчество доступным каждому.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q9 RU */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-9" data-lang-en="How can I contact you?" data-lang-ru="Как я могу с вами связаться?">Как я могу с вами связаться?</h2>
          <div className="collapsible-content" id="faq-9">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📧</div>
                <h3 className="gradient-text" data-lang-en="Contact Support" data-lang-ru="Поддержка">Поддержка</h3>
                <p data-lang-en="You can reach us via the Contact form on the website or by email at contact@ai-people.io. We reply to every inquiry — creators, partners, and press are always welcome." data-lang-ru="Связаться с нами можно через форму обратной связи на сайте или по email contact@ai-people.io. Мы открыты для креаторов, партнёров и СМИ.">Связаться с нами можно через форму обратной связи на сайте или по email contact@ai-people.io. Мы открыты для креаторов, партнёров и СМИ.</p>
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


