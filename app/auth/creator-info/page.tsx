"use client";

import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Image from "next/image";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";

export default function CreatorInfoPage() {
  useHamburgerMenu();

  return (
    <div className="container home-page">
      <header className="topbar">
        <div className="brand">
          <a href="/" className="brand-link">
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
          <span data-lang-en="Creator Admin Panel" data-lang-ru="Админ. панель Креатора">Creator Admin Panel</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Soon</span>
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
          <span data-lang-en="Buyer Admin Panel" data-lang-ru="Админ. панель Покупателя">Buyer Admin Panel</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Soon</span>
        </a>
        
        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Catalog" data-lang-ru="Каталог">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            <path d="M8 7h8"/>
            <path d="M8 11h8"/>
            <path d="M8 15h4"/>
          </svg>
          <span data-lang-en="Catalog" data-lang-ru="Каталог">Catalog</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Soon</span>
        </a>
        
        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Prices" data-lang-ru="Цены">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span data-lang-en="Prices" data-lang-ru="Цены">Prices</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">Soon</span>
        </a>
        
        {/* Legal Policies Section */}
        <div className="menu-legal-section">
          <a href="/legal/terms" data-lang-en="Terms of Service" data-lang-ru="Условия обслуживания">Terms of Service</a> · 
          <a href="/legal/privacy" data-lang-en="Privacy Policy" data-lang-ru="Политика конфиденциальности">Privacy Policy</a> · 
          <a href="/legal/cookies" data-lang-en="Cookie Policy" data-lang-ru="Политика файлов cookie">Cookie Policy</a>
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
          {Array.from({length:8}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`AI Model 0${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
          {Array.from({length:8}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`AI Model 0${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
        </div>
      </section>

      <main>
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="Join as Creator" data-lang-ru="Присоединяйтесь как Креатор">Join as Creator</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Monetize your AI art and build your brand on the world's first curated AI marketplace" data-lang-ru="Монетизируйте ваше AI-искусство и развивайте бренд на первом в мире курируемом AI маркетплейсе">Monetize your AI art and build your brand on the world's first curated AI marketplace</h2>
          <h3 className="hero-description" data-lang-en="Earn from your hyperrealistic AI models with 75% commission, secure payments, and full marketing support." data-lang-ru="Зарабатывайте на гиперреалистичных AI-моделях с комиссией 75%, безопасными платежами и полной маркетинговой поддержкой.">Earn from your hyperrealistic AI models with 75% commission, secure payments, and full marketing support.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <p data-lang-en="🚀 Earn from your AI creations with us! Our platform is designed for professionals who know how to work with artificial intelligence and want to monetize their talent on a global level. It's simple: you regularly upload base packages of hyperrealistic AI models (photos and videos) according to platform standards. We fully handle client acquisition, marketing, and transaction guarantees. You receive stable income from each sale and maintain focus on creating quality content." data-lang-ru="🚀 Зарабатывай на своих ИИ-творениях вместе с нами! Наша платформа создана для профессионалов, которые умеют работать с искусственным интеллектом и хотят монетизировать свой талант на глобальном уровне. Всё просто: вы регулярно выкладываете базовые пакеты гиперреалистичных ИИ-моделей (фото и видео) по стандартам платформы. Мы полностью берём на себя привлечение клиентов, маркетинг и гарантии сделки. Вы получаете стабильный доход с каждой продажи и сохраняете фокус на создании качественного контента.">
              🚀 Earn from your AI creations with us! Our platform is designed for professionals who know how to work with artificial intelligence and want to monetize their talent on a global level. It's simple: you regularly upload base packages of hyperrealistic AI models (photos and videos) according to platform standards. We fully handle client acquisition, marketing, and transaction guarantees. You receive stable income from each sale and maintain focus on creating quality content.
            </p>
            
            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="What We Offer:" data-lang-ru="Что мы предлагаем:">What We Offer:</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
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

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="🔥 Why is this beneficial for you?" data-lang-ru="🔥 Почему это выгодно именно вам?">🔥 Why is this beneficial for you?</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Monetization without risk: you focus on creativity, we bring the buyers." data-lang-ru="Монетизация без риска: вы занимаетесь творчеством, мы приводим покупателей.">Monetization without risk: you focus on creativity, we bring the buyers.</li>
              <li data-lang-en="Priority for professionals: we're looking for creators who know how to work with AI, understand trends, and are ready to deliver premium-quality content." data-lang-ru="Приоритет профессионалов: мы ищем креаторов, которые умеют работать с ИИ, понимают тренды и готовы выдавать контент премиум-качества.">Priority for professionals: we're looking for creators who know how to work with AI, understand trends, and are ready to deliver premium-quality content.</li>
              <li data-lang-en="Special focus on NSFW (18+) segment — one of the most profitable niches where AI opens huge opportunities." data-lang-ru="Особый фокус на НСФВ (18+) сегменте — это одна из самых прибыльных ниш, и именно тут ИИ открывает огромные возможности.">Special focus on NSFW (18+) segment — one of the most profitable niches where AI opens huge opportunities.</li>
              <li data-lang-en="Long-term partnership: we're building an ecosystem where it's profitable to work continuously, not just once." data-lang-ru="Долгосрочное сотрудничество: мы строим экосистему, в которой выгодно работать не разово, а постоянно.">Long-term partnership: we're building an ecosystem where it's profitable to work continuously, not just once.</li>
            </ul>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="🎨 Your role as a creator:" data-lang-ru="🎨 Ваша роль как креатора:">🎨 Your role as a creator:</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Create original and high-quality AI content (models, photos, videos)." data-lang-ru="Создавать оригинальный и качественный ИИ-контент (модели, фото, видео).">Create original and high-quality AI content (models, photos, videos).</li>
              <li data-lang-en="Maintain high compliance with platform standards." data-lang-ru="Поддерживать высокий уровень соответствия стандартам платформы.">Maintain high compliance with platform standards.</li>
              <li data-lang-en="Complete custom orders on time." data-lang-ru="Выполнять индивидуальные заказы в срок.">Complete custom orders on time.</li>
              <li data-lang-en="Develop your skills and portfolio to be in demand with a global audience." data-lang-ru="Развивать свои навыки и портфолио, чтобы быть востребованным у глобальной аудитории.">Develop your skills and portfolio to be in demand with a global audience.</li>
            </ul>
            
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="⚡ If you're a professional who wants to really earn from AI content, become part of a new digital market, and get access to a paying audience — join the waiting list now!" data-lang-ru="⚡ Если вы профессионал, который хочет реально зарабатывать на ИИ-контенте, стать частью нового цифрового рынка и получить доступ к платежеспособной аудитории — присоединяйтесь к списку ожидания открытия!">⚡ If you're a professional who wants to really earn from AI content, become part of a new digital market, and get access to a paying audience — join the waiting list now!</p>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Your Responsibilities:" data-lang-ru="Ваши обязанности:">Your Responsibilities:</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Create original, high-quality AI-generated content that meets platform standards" data-lang-ru="Создавайте оригинальный, высококачественный ИИ-контент, соответствующий стандартам платформы">Create original, high-quality AI-generated content that meets platform standards</li>
              <li data-lang-en="Ensure all content is legally compliant and follows platform guidelines" data-lang-ru="Убедитесь, что весь контент соответствует правовым требованиям и следует правилам платформы">Ensure all content is legally compliant and follows platform guidelines</li>
              <li data-lang-en="Respect intellectual property rights and avoid copyright infringement" data-lang-ru="Уважайте права интеллектуальной собственности и избегайте нарушения авторских прав">Respect intellectual property rights and avoid copyright infringement</li>
              <li data-lang-en="Maintain professional communication through the platform with buyers and staff" data-lang-ru="Поддерживайте профессиональное общение через платформу с покупателями и персоналом">Maintain professional communication through the platform with buyers and staff</li>
              <li data-lang-en="Deliver custom orders within agreed timeframes and specifications" data-lang-ru="Выполняйте индивидуальные заказы в согласованные сроки и по требованиям">Deliver custom orders within agreed timeframes and specifications</li>
              <li data-lang-en="Provide accurate descriptions and previews of your content" data-lang-ru="Предоставляйте точные описания и предварительные просмотры контента">Provide accurate descriptions and previews of your content</li>
              <li data-lang-en="Respond promptly to buyer inquiries and support requests" data-lang-ru="Быстро отвечайте на запросы покупателей и обращения в поддержку">Respond promptly to buyer inquiries and support requests</li>
              <li data-lang-en="Continuously improve your skills and stay updated with AI technology trends" data-lang-ru="Постоянно совершенствуйте свои навыки и следите за трендами ИИ-технологий">Continuously improve your skills and stay updated with AI technology trends</li>
            </ul>

            <div className="call-to-action" style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/auth/creator" className="btn primary" data-lang-en="Continue to Registration" data-lang-ru="Продолжить регистрацию">Continue to Registration</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



