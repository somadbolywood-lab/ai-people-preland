"use client";

import { useEffect } from 'react';
import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Image from "next/image";
import Script from "next/script";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import Head from "next/head";

export default function RoleSelectionPage() {
  useHamburgerMenu();
  
  useEffect(() => {
    // Get action parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action') || 'signup'; // default to signup

    // Add click handlers for role selection buttons
    const handleRoleSelection = (role: string) => {
      console.log('Role selected:', role, 'Action:', action);
      if (role === 'buyer') {
        console.log(`Navigating to /auth/buyer?action=${action}`);
        window.location.href = `/auth/buyer?action=${action}`;
      } else if (role === 'creator') {
        console.log(`Navigating to /auth/creator?action=${action}`);
        window.location.href = `/auth/creator?action=${action}`;
      }
    };

    // Use event delegation for more reliable event handling
    const handleDocumentClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button[data-role]');
      
      if (button) {
        const role = button.getAttribute('data-role');
        console.log('Button clicked with role:', role);
        if (role === 'buyer' || role === 'creator') {
          e.preventDefault();
          e.stopPropagation();
          handleRoleSelection(role);
        }
      }
    };

    // Add event listener with delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleDocumentClick);
      console.log('Event listener added for role selection');
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Join AI-People Waiting List | Buyer or Creator Pre-Launch Registration 2025</title>
        <meta name="description" content="Join AI-People pre-launch waiting list! Choose Buyer (access 18+ AI models, OnlyFans content) or Creator (earn 75%, no KYC under $10K). Launching November 1, 2025. Get VIP early access!" />
        <meta name="keywords" content="AI-People registration, join waiting list, AI creator signup, buyer registration, 75% commission, no KYC, pre-launch access" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.com/auth/role" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AI-People Registration - Choose Your Role",
              "description": "Pre-launch registration page for buyers and creators on AI-People marketplace",
              "url": "https://ai-people.com/auth/role",
              "inLanguage": ["en", "ru"],
              "isPartOf": {
                "@type": "WebSite",
                "name": "AI-People",
                "url": "https://ai-people.com"
              },
              "potentialAction": [
                {
                  "@type": "RegisterAction",
                  "name": "Join as Buyer",
                  "target": "https://ai-people.com/auth/buyer"
                },
                {
                  "@type": "RegisterAction",
                  "name": "Join as Creator",
                  "target": "https://ai-people.com/auth/creator"
                }
              ]
            })
          }}
        />
      </Head>
      <div className="container auth-page role-selection-page">
      <header className="topbar">
        <div className="brand">
          <a href="/" className="brand-link">
              <Image src="/faq/AI-people Logo.png" alt="AI-People" className="logo-img" width={75} height={75} priority quality={100} unoptimized={true} />
          </a>
        </div>
        <div className="actions">
          <LanguageSelector />
          <ThemeToggle />
          <a href="/" className="btn ghost" data-lang-en="Back to Home" data-lang-ru="На главную">Back to Home</a>
        </div>
      </header>

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 01.11.2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.11.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 01.11.2025
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
          {Array.from({length:8}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`AI Model 0${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
          {Array.from({length:8}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`AI Model 0${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
        </div>
      </section>

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="title">
              <span className="gradient-text" data-lang-en="Join AI-People" data-lang-ru="Присоединяйтесь к AI-People">Join AI-People</span>
            </h1>
            <h2 className="hero-subtitle" data-lang-en="Choose your role and start your journey in the world of hyperrealistic AI models" data-lang-ru="Выберите свою роль и начните свой путь в мире гиперреалистичных AI-моделей">Choose your role and start your journey in the world of hyperrealistic AI models</h2>
            <h3 className="hero-description" data-lang-en="Professional AI marketplace connecting creators and buyers. Curated quality, secure transactions, and fair creator commissions. Join the future of digital content." data-lang-ru="Профессиональный AI маркетплейс, соединяющий креаторов и покупателей. Курируемое качество, безопасные транзакции и справедливые комиссии креаторов. Присоединяйтесь к будущему цифрового контента.">Professional AI marketplace connecting creators and buyers. Curated quality, secure transactions, and fair creator commissions. Join the future of digital content.</h3>
          </div>

          <div className="role-selection">
            <div className="role-card" data-role="buyer">
              <h3 className="role-title">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="title-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span data-lang-en="Buyer" data-lang-ru="Покупатель">Buyer</span>
              </h3>
              <p className="role-description" data-lang-en="🔥 The Future of Earning and Content — Here! 🔥 Imagine having a whole team of dozens of AI models at your fingertips, ready to work 24/7 without days off. You get access not just to photos and videos — you unlock new revenue streams, promotion tools, and limitless creative possibilities." data-lang-ru="🔥 Будущее заработка и контента — здесь! 🔥 Представьте, что у вас под рукой целая команда из десятков ИИ-моделей, готовых работать круглосуточно без выходных. Вы получаете доступ не просто к фото и видео — вы открываете новые источники дохода, инструменты для продвижения и безграничные возможности для креатива.">🔥 The Future of Earning and Content — Here! 🔥 Imagine having a whole team of dozens of AI models at your fingertips, ready to work 24/7 without days off. You get access not just to photos and videos — you unlock new revenue streams, promotion tools, and limitless creative possibilities.</p>
            
            <div className="role-benefits">
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Access to 18+ premium AI models with unique styles and looks — create content that will stand out on OnlyFans, Patreon, TikTok or in your own projects." data-lang-ru="Доступ к 18+ премиум ИИ-моделям с уникальными стилями и образами — создавайте контент, который будет выделяться на ОнлиФанс, Патреон, ТикТок или в собственных проектах.">Access to 18+ premium AI models with unique styles and looks — create content that will stand out on OnlyFans, Patreon, TikTok or in your own projects.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="500+ ready-made photos in the most in-demand niches: lifestyle, fitness, business, fashion, gaming and romantic scenarios — use them for ads, social media, websites or resale." data-lang-ru="500+ готовых фото в самых востребованных нишах: образ жизни, фитнес, бизнес, мода, геймерские и романтические сценарии — используйте их для рекламы, соцсетей, сайтов или перепродажи.">500+ ready-made photos in the most in-demand niches: lifestyle, fitness, business, fashion, gaming and romantic scenarios — use them for ads, social media, websites or resale.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="100+ exclusive premium-quality videos — the perfect tool for promoting brands, personal pages and monetizing on subscription services." data-lang-ru="100+ эксклюзивных видео премиум-качества — идеальный инструмент для продвижения брендов, личных страниц и монетизации в подписочных сервисах.">100+ exclusive premium-quality videos — the perfect tool for promoting brands, personal pages and monetizing on subscription services.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Ability to order custom content for your needs: marketing, promotion, personal use or commercial projects." data-lang-ru="Возможность заказать индивидуальный контент под ваши задачи: маркетинг, продвижение, личное использование или коммерческие проекты.">Ability to order custom content for your needs: marketing, promotion, personal use or commercial projects.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Priority support and secure communication within the platform." data-lang-ru="Приоритетная поддержка и безопасная связь внутри платформы.">Priority support and secure communication within the platform.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Regular updates with new models and content — you'll always be one step ahead of the competition." data-lang-ru="Регулярные обновления с новыми моделями и контентом — всегда будете на шаг впереди конкурентов.">Regular updates with new models and content — you'll always be one step ahead of the competition.</span>
              </div>
            </div>

            <div className="role-responsibilities">
              <h4 data-lang-en="💡 How this will help you earn and save time?" data-lang-ru="💡 Как это поможет вам зарабатывать и экономить время?">💡 How this will help you earn and save time?</h4>
              <ul>
                <li data-lang-en="Create subscription services (OnlyFans, Patreon, Boosty) without real models. AI content already sells and gathers subscribers." data-lang-ru="Создавайте подписочные сервисы (ОнлиФанс, Патреон, Бусти) без участия реальных моделей. ИИ-контент уже продаётся и собирает подписчиков.">Create subscription services (OnlyFans, Patreon, Boosty) without real models. AI content already sells and gathers subscribers.</li>
                <li data-lang-en="Promote your business — use unique images and videos for advertising products, building a brand or increasing sales." data-lang-ru="Продвигайте бизнес — используйте уникальные изображения и видео для рекламы продуктов, построения бренда или увеличения продаж.">Promote your business — use unique images and videos for advertising products, building a brand or increasing sales.</li>
                <li data-lang-en="Become a reseller — resell ready-made photo and video packages on digital content platforms." data-lang-ru="Станьте реселлером — перепродавайте готовые пакеты фото и видео на платформах с цифровым контентом.">Become a reseller — resell ready-made photo and video packages on digital content platforms.</li>
                <li data-lang-en="Save time and money — no need to hire models, photographers, videographers. Everything is ready." data-lang-ru="Экономьте время и деньги — не нужно нанимать моделей, фотографов, видеографов. Всё уже готово.">Save time and money — no need to hire models, photographers, videographers. Everything is ready.</li>
                <li data-lang-en="Get custom content — which means you'll always have materials that no one else has." data-lang-ru="Получайте контент под заказ — а значит, всегда будете иметь материалы, которых нет ни у кого.">Get custom content — which means you'll always have materials that no one else has.</li>
              </ul>
              <p className="role-cta-text" data-lang-en="⚡ This is not just a collection — it's your tool for monetizing ideas and reaching a new level in the digital space. Subscribe to the waiting list now and get access to premium content and first releases before everyone else!" data-lang-ru="⚡ Это не просто коллекция — это ваш инструмент для монетизации идей и выхода на новый уровень в цифровом пространстве. Подпишитесь на лист ожидания сейчас и получите доступ к премиум-контенту и первым релизам раньше всех!">⚡ This is not just a collection — it's your tool for monetizing ideas and reaching a new level in the digital space. Subscribe to the waiting list now and get access to premium content and first releases before everyone else!</p>
            </div>

            <div className="role-responsibilities">
              <h4 data-lang-en="Your Responsibilities:" data-lang-ru="Ваши обязанности:">Your Responsibilities:</h4>
              <ul>
                <li data-lang-en="Use all purchased content exclusively for legal and legitimate purposes" data-lang-ru="Используйте весь приобретенный контент исключительно в законных и легитимных целях">Use all purchased content exclusively for legal and legitimate purposes</li>
                <li data-lang-en="Respect creator rights, copyrights, and intellectual property" data-lang-ru="Уважайте права креаторов, авторские права и интеллектуальную собственность">Respect creator rights, copyrights, and intellectual property</li>
                <li data-lang-en="Follow platform terms of service and community guidelines" data-lang-ru="Соблюдайте условия использования платформы и правила сообщества">Follow platform terms of service and community guidelines</li>
                <li data-lang-en="Maintain respectful and professional communication through the platform" data-lang-ru="Поддерживайте уважительное и профессиональное общение через платформу">Maintain respectful and professional communication through the platform</li>
                <li data-lang-en="Provide clear requirements and feedback for custom orders" data-lang-ru="Предоставляйте четкие требования и обратную связь для индивидуальных заказов">Provide clear requirements and feedback for custom orders</li>
                <li data-lang-en="Pay for services promptly and according to agreed terms" data-lang-ru="Оплачивайте услуги своевременно и согласно согласованным условиям">Pay for services promptly and according to agreed terms</li>
                <li data-lang-en="Report any inappropriate content or behavior to platform moderators" data-lang-ru="Сообщайте о любом неподходящем контенте или поведении модераторам платформы">Report any inappropriate content or behavior to platform moderators</li>
              </ul>
            </div>

            <button className="btn primary role-select-btn" data-role="buyer"><span data-lang-en="Choose as Buyer" data-lang-ru="Выбрать как Покупатель">Choose as Buyer</span></button>
            </div>

            <div className="role-card" data-role="creator">
              <h3 className="role-title">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="title-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27 8.91 8.26z"/></svg>
                <span data-lang-en="Creator" data-lang-ru="Креатор">Creator</span>
              </h3>
              <p className="role-description" data-lang-en="🚀 Earn from your AI creations with us! Our platform is designed for professionals who know how to work with artificial intelligence and want to monetize their talent on a global level. It's simple: you regularly upload base packages of hyperrealistic AI models (photos and videos) according to platform standards. We fully handle client acquisition, marketing, and transaction guarantees. You receive stable income from each sale and maintain focus on creating quality content." data-lang-ru="🚀 Зарабатывай на своих ИИ-творениях вместе с нами! Наша платформа создана для профессионалов, которые умеют работать с искусственным интеллектом и хотят монетизировать свой талант на глобальном уровне. Всё просто: вы регулярно выкладываете базовые пакеты гиперреалистичных ИИ-моделей (фото и видео) по стандартам платформы. Мы полностью берём на себя привлечение клиентов, маркетинг и гарантии сделки. Вы получаете стабильный доход с каждой продажи и сохраняете фокус на создании качественного контента.">🚀 Earn from your AI creations with us! Our platform is designed for professionals who know how to work with artificial intelligence and want to monetize their talent on a global level. It's simple: you regularly upload base packages of hyperrealistic AI models (photos and videos) according to platform standards. We fully handle client acquisition, marketing, and transaction guarantees. You receive stable income from each sale and maintain focus on creating quality content.</p>
            
            <div className="role-benefits">
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Platform commission only 25% — the rest is yours." data-lang-ru="Комиссия платформы всего 25% — остальное ваше.">Platform commission only 25% — the rest is yours.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="No KYC up to 10,000 USDT: fast and convenient withdrawal." data-lang-ru="Без КИК до 10 000 ЮЗДТ: быстрый и удобный вывод средств.">No KYC up to 10,000 USDT: fast and convenient withdrawal.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="The platform acts as a transaction guarantor, protecting both parties." data-lang-ru="Платформа выступает гарантом сделки, страхуя обе стороны.">The platform acts as a transaction guarantor, protecting both parties.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Guaranteed payments — no risk of non-payment or fraud." data-lang-ru="Гарантированные выплаты — никакого риска неоплаты или мошенничества.">Guaranteed payments — no risk of non-payment or fraud.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Anonymity and security: no direct contact between creator and buyer. All orders go through the platform." data-lang-ru="Анонимность и безопасность: у нас нет прямого контакта креатора с покупателем. Все заказы и коммуникации идут через платформу.">Anonymity and security: no direct contact between creator and buyer. All orders go through the platform.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Marketing support: we promote your materials, you get more reach and sales." data-lang-ru="Маркетинговая поддержка: мы продвигаем ваши материалы, а вы получаете больше охватов и продаж.">Marketing support: we promote your materials, you get more reach and sales.</span>
              </div>
            </div>

            <div className="role-responsibilities">
              <h4 data-lang-en="🔥 Why is this beneficial for you?" data-lang-ru="🔥 Почему это выгодно именно вам?">🔥 Why is this beneficial for you?</h4>
              <ul>
                <li data-lang-en="Monetization without risk: you focus on creativity, we bring the buyers." data-lang-ru="Монетизация без риска: вы занимаетесь творчеством, мы приводим покупателей.">Monetization without risk: you focus on creativity, we bring the buyers.</li>
                <li data-lang-en="Priority for professionals: we're looking for creators who know how to work with AI, understand trends, and are ready to deliver premium-quality content." data-lang-ru="Приоритет профессионалов: мы ищем креаторов, которые умеют работать с ИИ, понимают тренды и готовы выдавать контент премиум-качества.">Priority for professionals: we're looking for creators who know how to work with AI, understand trends, and are ready to deliver premium-quality content.</li>
                <li data-lang-en="Special focus on NSFW (18+) segment — one of the most profitable niches where AI opens huge opportunities." data-lang-ru="Особый фокус на НСФВ (18+) сегменте — это одна из самых прибыльных ниш, и именно тут ИИ открывает огромные возможности.">Special focus on NSFW (18+) segment — one of the most profitable niches where AI opens huge opportunities.</li>
                <li data-lang-en="Long-term partnership: we're building an ecosystem where it's profitable to work continuously, not just once." data-lang-ru="Долгосрочное сотрудничество: мы строим экосистему, в которой выгодно работать не разово, а постоянно.">Long-term partnership: we're building an ecosystem where it's profitable to work continuously, not just once.</li>
              </ul>
            </div>

            <div className="role-responsibilities">
              <h4 data-lang-en="🎨 Your role as a creator:" data-lang-ru="🎨 Ваша роль как креатора:">🎨 Your role as a creator:</h4>
              <ul>
                <li data-lang-en="Create original and high-quality AI content (models, photos, videos)." data-lang-ru="Создавать оригинальный и качественный ИИ-контент (модели, фото, видео).">Create original and high-quality AI content (models, photos, videos).</li>
                <li data-lang-en="Maintain high compliance with platform standards." data-lang-ru="Поддерживать высокий уровень соответствия стандартам платформы.">Maintain high compliance with platform standards.</li>
                <li data-lang-en="Complete custom orders on time." data-lang-ru="Выполнять индивидуальные заказы в срок.">Complete custom orders on time.</li>
                <li data-lang-en="Develop your skills and portfolio to be in demand with a global audience." data-lang-ru="Развивать свои навыки и портфолио, чтобы быть востребованным у глобальной аудитории.">Develop your skills and portfolio to be in demand with a global audience.</li>
              </ul>
              <p className="role-cta-text" data-lang-en="⚡ If you're a professional who wants to really earn from AI content, become part of a new digital market, and get access to a paying audience — join the waiting list now!" data-lang-ru="⚡ Если вы профессионал, который хочет реально зарабатывать на ИИ-контенте, стать частью нового цифрового рынка и получить доступ к платежеспособной аудитории — присоединяйтесь к списку ожидания открытия!">⚡ If you're a professional who wants to really earn from AI content, become part of a new digital market, and get access to a paying audience — join the waiting list now!</p>
            </div>

            <div className="role-responsibilities">
              <h4 data-lang-en="Your Responsibilities:" data-lang-ru="Ваши обязанности:">Your Responsibilities:</h4>
              <ul>
                <li data-lang-en="Create original, high-quality AI-generated content that meets platform standards" data-lang-ru="Создавайте оригинальный, высококачественный ИИ-контент, соответствующий стандартам платформы">Create original, high-quality AI-generated content that meets platform standards</li>
                <li data-lang-en="Ensure all content is legally compliant and follows platform guidelines" data-lang-ru="Убедитесь, что весь контент соответствует правовым требованиям и следует правилам платформы">Ensure all content is legally compliant and follows platform guidelines</li>
                <li data-lang-en="Respect intellectual property rights and avoid copyright infringement" data-lang-ru="Уважайте права интеллектуальной собственности и избегайте нарушения авторских прав">Respect intellectual property rights and avoid copyright infringement</li>
                <li data-lang-en="Maintain professional communication through the platform with buyers and staff" data-lang-ru="Поддерживайте профессиональное общение через платформу с покупателями и персоналом">Maintain professional communication through the platform with buyers and staff</li>
                <li data-lang-en="Deliver custom orders within agreed timeframes and specifications" data-lang-ru="Выполняйте индивидуальные заказы в согласованные сроки и по требованиям">Deliver custom orders within agreed timeframes and specifications</li>
                <li data-lang-en="Provide accurate descriptions and previews of your content" data-lang-ru="Предоставляйте точные описания и предварительные просмотры контента">Provide accurate descriptions and previews of your content</li>
                <li data-lang-en="Respond promptly to buyer inquiries and support requests" data-lang-ru="Быстро отвечайте на запросы покупателей и обращения в поддержку">Respond promptly to buyer inquiries and support requests</li>
                <li data-lang-en="Continuously improve your skills and stay updated with AI technology trends" data-lang-ru="Постоянно совершенствуйте свои навыки и следите за трендами ИИ-технологий">Continuously improve your skills and stay updated with AI technology trends</li>
              </ul>
            </div>

            <button className="btn primary role-select-btn" data-role="creator"><span data-lang-en="Choose as Creator" data-lang-ru="Выбрать как Креатор">Choose as Creator</span></button>
            </div>
          </div>

          <div className="legal-notice" itemScope itemType="https://schema.org/LegalValueSpecification">
            <meta itemProp="name" content="AI-People Legal Compliance Notice" />
            <div className="notice-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div className="notice-content">
              <h4 data-lang-en="Legal Compliance Notice" data-lang-ru="Правовое уведомление">Legal Compliance Notice</h4>
              <p data-lang-en="All AI-generated content on the AI-People marketplace must be used exclusively for legal and legitimate purposes. AI content creators and buyers bear full responsibility for ensuring that the use or creation of hyperrealistic AI models complies with all applicable laws, regulations, and ethical standards in their jurisdiction." data-lang-ru="Весь AI-сгенерированный контент на маркетплейсе AI-People должен использоваться исключительно в законных и легитимных целях. AI-креаторы контента и покупатели несут полную ответственность за то, чтобы использование или создание гиперреалистичных AI-моделей соответствовало всем применимым законам, нормам и этическим стандартам их юрисдикции.">
                <strong>All AI-generated content on the AI-People marketplace</strong> must be used exclusively for legal and legitimate purposes. AI content creators and buyers bear full responsibility for ensuring that the use or creation of hyperrealistic AI models complies with all applicable laws, regulations, and ethical standards in their jurisdiction.
              </p>
              
              <div className="legal-list">
                <h5 data-lang-en="Required Compliance Areas:" data-lang-ru="Обязательные области соблюдения:"><strong>Required Compliance Areas:</strong></h5>
                <ul>
                  <li data-lang-en="Copyright & intellectual property rights for AI-generated models" data-lang-ru="Авторские и интеллектуальные права на AI-сгенерированные модели"><strong>Copyright & intellectual property rights</strong> for AI-generated models</li>
                  <li data-lang-en="Data protection standards (GDPR, CCPA) and privacy requirements" data-lang-ru="Стандарты защиты данных (GDPR, CCPA) и требования конфиденциальности"><strong>Data protection standards</strong> (GDPR, CCPA) and privacy requirements</li>
                  <li data-lang-en="Advertising regulations for commercial use of AI content" data-lang-ru="Рекламные нормы для коммерческого использования AI-контента"><strong>Advertising regulations</strong> for commercial use of AI content</li>
                  <li data-lang-en="Age restrictions for 18+ and NSFW virtual influencer content" data-lang-ru="Возрастные ограничения для 18+ и NSFW контента виртуальных инфлюенсеров"><strong>Age restrictions</strong> for 18+ and NSFW virtual influencer content</li>
                  <li data-lang-en="National and international regulations for AI marketplace operations" data-lang-ru="Национальные и международные нормы для операций AI-маркетплейса"><strong>National and international regulations</strong> for AI marketplace operations</li>
                </ul>
              </div>

              <h5 data-lang-en="AI-People Marketplace Platform Role:" data-lang-ru="Роль маркетплейс-платформы AI-People:"><strong>AI-People Marketplace Platform Role:</strong></h5>
              <p data-lang-en="AI-People acts exclusively as an intermediary marketplace platform and transaction guarantor between AI content creators and buyers." data-lang-ru="AI-People выступает исключительно как посредническая маркетплейс-платформа и гарант сделок между AI-креаторами контента и покупателями.">
                <strong>AI-People acts exclusively as an intermediary marketplace platform</strong> and transaction guarantor between AI content creators and buyers.
              </p>
              
              <div className="legal-list">
                <h5 data-lang-en="Platform Limitations:" data-lang-ru="Ограничения платформы:"><strong>Platform Limitations:</strong></h5>
                <ul>
                  <li data-lang-en="Does not bear responsibility for legal compliance or consequences of AI content use" data-lang-ru="Не несёт ответственности за юридическое соответствие или последствия использования AI-контента">Does not bear responsibility for legal compliance or consequences of AI content use</li>
                  <li data-lang-en="Does not control further use of purchased AI models outside the marketplace" data-lang-ru="Не контролирует дальнейшее использование купленных AI-моделей за пределами маркетплейса">Does not control further use of purchased AI models outside the marketplace</li>
                  <li data-lang-en="Reserves right to monitor activity and suspend access for violations of platform rules" data-lang-ru="Оставляет за собой право мониторить активность и приостанавливать доступ за нарушения правил платформы">Reserves right to monitor activity and suspend access for violations of platform rules</li>
                </ul>
              </div>

              <p data-lang-en="By joining the AI-People pre-launch waiting list, each user and creator confirms agreement to comply with these legal terms and fully accepts responsibility for the use or distribution of AI-generated content." data-lang-ru="Присоединяясь к списку ожидания предзапуска AI-People, каждый пользователь и креатор подтверждает согласие соблюдать эти юридические условия и полностью принимает ответственность за использование или распространение AI-сгенерированного контента." style={{fontStyle: 'italic', marginTop: '1rem'}}>
                <em>By joining the AI-People pre-launch waiting list, each user and creator confirms agreement to comply with these legal terms and fully accepts responsibility for the use or distribution of AI-generated content.</em>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Schema.org Service Structured Data */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-People Marketplace Registration",
            "description": "Join the world's first curated AI models marketplace. Register as a creator to sell AI models or as a buyer to purchase hyperrealistic virtual influencers.",
            "provider": {
              "@type": "Organization",
              "name": "AI-People",
              "url": "https://ai-people.com"
            },
            "serviceType": "AI Marketplace Registration",
            "url": "https://ai-people.com/auth/role",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free registration for creators and buyers"
            },
            "areaServed": {
              "@type": "Country",
              "name": ["United States", "Russia", "United Kingdom", "Canada", "Australia"]
            }
          })
        }}
      />
    </div>
    </>
  );
}
