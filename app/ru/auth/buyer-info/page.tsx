"use client";

import { useHamburgerMenu } from "../../../hooks/useHamburgerMenu";
import Image from "next/image";
import Footer from "../../../components/Footer";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageSelector from "../../../components/LanguageSelector";

export default function BuyerInfoPage() {
  useHamburgerMenu();

  return (
    <div className="container home-page">
      <header className="topbar">
        <div className="brand">
          <a href="/ru" className="brand-link">
            <Image src="/faq/AI-people Logo.png" alt="AI-People" className="logo-img" width={75} height={75} priority quality={100} unoptimized={true} />
          </a>
        </div>
        <div className="actions">
          <LanguageSelector />
          <ThemeToggle />
          <a href="mailto:feedback@ai-people.io" className="feedback-btn" aria-label="Feedback">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <button className="hamburger" id="hamburger" aria-label="Open menu"><span className="bar"></span><span className="bar"></span><span className="bar"></span></button>
        </div>
      </header>

      <div className="menu-panel" id="menuPanel" role="menu">
        <a href="/" role="menuitem" data-lang-en="Home" data-lang-ru="Главная">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>Home</span>
        </a>
        <a href="/ru/about" role="menuitem" data-lang-en="About" data-lang-ru="О нас">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="1"/>
          </svg>
          <span>О нас</span>
        </a>
        <a href="/faq" role="menuitem" data-lang-en="FAQ" data-lang-ru="FAQ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <span>FAQ</span>
        </a>
        <a href="/blog" role="menuitem" data-lang-en="Blog" data-lang-ru="Блог">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14,2 14,8 20,8"/>
          </svg>
          <span>Blog</span>
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

      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025
          </span>
        </div>
      </div>

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

      <main>
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="Join as Buyer" data-lang-ru="Присоединяйтесь как Покупатель">Join as Buyer</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Access premium AI models and hyperrealistic virtual influencers for your business" data-lang-ru="Доступ к премиум AI-моделям и гиперреалистичным виртуальным инфлюенсерам для вашего бизнеса">Access premium AI models and hyperrealistic virtual influencers for your business</h2>
          <h3 className="hero-description" data-lang-en="Discover the world's first curated marketplace for professional AI content. Get ready-made packages or order custom content for your marketing campaigns." data-lang-ru="Откройте для себя первый в мире курируемый маркетплейс профессионального AI-контента. Получайте готовые пакеты или заказывайте индивидуальный контент для ваших маркетинговых кампаний.">Discover the world's first curated marketplace for professional AI content. Get ready-made packages or order custom content for your marketing campaigns.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <p data-lang-en="🔥 The Future of Earning and Content — Here! 🔥 Imagine having a whole team of dozens of AI models at your fingertips, ready to work 24/7 without days off. You get access not just to photos and videos — you unlock new revenue streams, promotion tools, and limitless creative possibilities." data-lang-ru="🔥 Будущее заработка и контента — здесь! 🔥 Представьте, что у вас под рукой целая команда из десятков ИИ-моделей, готовых работать круглосуточно без выходных. Вы получаете доступ не просто к фото и видео — вы открываете новые источники дохода, инструменты для продвижения и безграничные возможности для креатива.">
              🔥 The Future of Earning and Content — Here! 🔥 Imagine having a whole team of dozens of AI models at your fingertips, ready to work 24/7 without days off. You get access not just to photos and videos — you unlock new revenue streams, promotion tools, and limitless creative possibilities.
            </p>
            
            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="What You Get:" data-lang-ru="Что вы получаете:">What You Get:</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
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

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="💡 How this will help you earn and save time?" data-lang-ru="💡 Как это поможет вам зарабатывать и экономить время?">💡 How this will help you earn and save time?</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Create subscription services (OnlyFans, Patreon, Boosty) without real models. AI content already sells and gathers subscribers." data-lang-ru="Создавайте подписочные сервисы (ОнлиФанс, Патреон, Бусти) без участия реальных моделей. ИИ-контент уже продаётся и собирает подписчиков.">Create subscription services (OnlyFans, Patreon, Boosty) without real models. AI content already sells and gathers subscribers.</li>
              <li data-lang-en="Promote your business — use unique images and videos for advertising products, building a brand or increasing sales." data-lang-ru="Продвигайте бизнес — используйте уникальные изображения и видео для рекламы продуктов, построения бренда или увеличения продаж.">Promote your business — use unique images and videos for advertising products, building a brand or increasing sales.</li>
              <li data-lang-en="Become a reseller — resell ready-made photo and video packages on digital content platforms." data-lang-ru="Станьте реселлером — перепродавайте готовые пакеты фото и видео на платформах с цифровым контентом.">Become a reseller — resell ready-made photo and video packages on digital content platforms.</li>
              <li data-lang-en="Save time and money — no need to hire models, photographers, videographers. Everything is ready." data-lang-ru="Экономьте время и деньги — не нужно нанимать моделей, фотографов, видеографов. Всё уже готово.">Save time and money — no need to hire models, photographers, videographers. Everything is ready.</li>
              <li data-lang-en="Get custom content — which means you'll always have materials that no one else has." data-lang-ru="Получайте контент под заказ — а значит, всегда будете иметь материалы, которых нет ни у кого.">Get custom content — which means you'll always have materials that no one else has.</li>
            </ul>
            
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="⚡ This is not just a collection — it's your tool for monetizing ideas and reaching a new level in the digital space. Subscribe to the waiting list now and get access to premium content and first releases before everyone else!" data-lang-ru="⚡ Это не просто коллекция — это ваш инструмент для монетизации идей и выхода на новый уровень в цифровом пространстве. Подпишитесь на лист ожидания сейчас и получите доступ к премиум-контенту и первым релизам раньше всех!">⚡ This is not just a collection — it's your tool for monetizing ideas and reaching a new level in the digital space. Subscribe to the waiting list now and get access to premium content and first releases before everyone else!</p>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Your Responsibilities:" data-lang-ru="Ваши обязанности:">Your Responsibilities:</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Use all purchased content exclusively for legal and legitimate purposes" data-lang-ru="Используйте весь приобретенный контент исключительно в законных и легитимных целях">Use all purchased content exclusively for legal and legitimate purposes</li>
              <li data-lang-en="Respect creator rights, copyrights, and intellectual property" data-lang-ru="Уважайте права креаторов, авторские права и интеллектуальную собственность">Respect creator rights, copyrights, and intellectual property</li>
              <li data-lang-en="Follow platform terms of service and community guidelines" data-lang-ru="Соблюдайте условия использования платформы и правила сообщества">Follow platform terms of service and community guidelines</li>
              <li data-lang-en="Maintain respectful and professional communication through the platform" data-lang-ru="Поддерживайте уважительное и профессиональное общение через платформу">Maintain respectful and professional communication through the platform</li>
              <li data-lang-en="Provide clear requirements and feedback for custom orders" data-lang-ru="Предоставляйте четкие требования и обратную связь для индивидуальных заказов">Provide clear requirements and feedback for custom orders</li>
              <li data-lang-en="Pay for services promptly and according to agreed terms" data-lang-ru="Оплачивайте услуги своевременно и согласно согласованным условиям">Pay for services promptly and according to agreed terms</li>
              <li data-lang-en="Report any inappropriate content or behavior to platform moderators" data-lang-ru="Сообщайте о любом неподходящем контенте или поведении модераторам платформы">Report any inappropriate content or behavior to platform moderators</li>
            </ul>

            <div className="call-to-action" style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/ru/auth/buyer" className="btn primary" data-lang-en="Continue to Registration" data-lang-ru="Продолжить регистрацию">Продолжить регистрацию</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

