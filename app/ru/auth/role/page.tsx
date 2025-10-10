"use client";

import { useHamburgerMenu } from "../../../hooks/useHamburgerMenu";
import Image from "next/image";
import Script from "next/script";
import Footer from "../../../components/Footer";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageSelector from "../../../components/LanguageSelector";
import Head from "next/head";

export default function RoleSelectionPage() {
  useHamburgerMenu();

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
      <div className="container auth-page role-selection-page ru-optimized">
      <header className="topbar">
        <div className="brand">
          <a href="/ru" className="brand-link">
              <Image src="/faq/AI-people Logo.png" alt="AI-People" className="logo-img" width={75} height={75} priority quality={100} unoptimized={true} />
          </a>
        </div>
        <div className="actions">
          <LanguageSelector />
          <ThemeToggle />
          <a href="/ru" className="btn ghost" data-lang-en="Back to Home" data-lang-ru="На главную">На главную</a>
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
              <span className="gradient-text" data-lang-en="Join AI-People" data-lang-ru="Присоединяйтесь к AI-People">Присоединяйтесь к AI-People</span>
            </h1>
            <h2 className="hero-subtitle" data-lang-en="Choose your role and start your journey in the world of hyperrealistic AI models" data-lang-ru="Выберите свою роль и начните свой путь в мире гиперреалистичных AI-моделей">Выберите свою роль и начните свой путь в мире гиперреалистичных AI-моделей</h2>
            <h3 className="hero-description" data-lang-en="Professional AI marketplace connecting creators and buyers. Curated quality, secure transactions, and fair creator commissions. Join the future of digital content." data-lang-ru="Профессиональный AI маркетплейс, соединяющий креаторов и покупателей. Курируемое качество, безопасные транзакции и справедливые комиссии креаторов. Присоединяйтесь к будущему цифрового контента.">Профессиональный AI маркетплейс, соединяющий креаторов и покупателей. Курируемое качество, безопасные транзакции и справедливые комиссии креаторов. Присоединяйтесь к будущему цифрового контента.</h3>
          </div>

          <div className="role-selection-buttons">
            <a href="/ru/auth/buyer-info" className="role-choice-btn" data-role="buyer">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="role-icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              <span data-lang-en="I'm a Buyer" data-lang-ru="Я Покупатель">Я Покупатель</span>
            </a>
            
            <a href="/ru/auth/creator-info" className="role-choice-btn" data-role="creator">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="role-icon">
                <circle cx="13.5" cy="6.5" r="1.8"/>
                <circle cx="17.5" cy="10.5" r="1.8"/>
                <circle cx="8.5" cy="7.5" r="1.8"/>
                <circle cx="6.5" cy="12.5" r="1.8"/>
                <circle cx="12.5" cy="8.5" r="1.8"/>
                <path d="M7 14c-3.5 0-6-2.5-6-6s2.5-6 6-6 6 2.5 6 6-2.5 6-6 6z"/>
                </svg>
              <span data-lang-en="I'm a Creator" data-lang-ru="Я Креатор">Я Креатор</span>
            </a>
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
      
      {/* Schema.org Service Structured Data - Russian */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Регистрация в маркетплейсе AI-People",
            "description": "Присоединяйтесь к первому в мире курируемому маркетплейсу AI-моделей. Зарегистрируйтесь как креатор для продажи AI-моделей или как покупатель для приобретения гиперреалистичных виртуальных инфлюенсеров.",
            "provider": {
              "@type": "Organization",
              "name": "AI-People",
              "url": "https://ai-people.com"
            },
            "serviceType": "Регистрация в AI маркетплейсе",
            "url": "https://ai-people.com/ru/auth/role",
            "inLanguage": "ru-RU",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Бесплатная регистрация для креаторов и покупателей"
            },
            "areaServed": {
              "@type": "Country",
              "name": ["Россия", "США", "Великобритания", "Канада", "Австралия"]
            }
          })
        }}
      />
    </div>
    </>
  );
}
