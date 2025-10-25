"use client";

import { useState, useEffect } from "react";
import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import { useLanguage } from "../../hooks/useLanguage";
import Image from "next/image";
import Script from "next/script";
import Footer from "../../components/Footer";
import LanguageSelector from "../../components/LanguageSelector";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import Head from "next/head";

export default function RoleSelectionPage() {
  useHamburgerMenu();
  useLanguage({ forceLanguage: 'en' });

  return (
    <>
      <Head>
        <title>Join AI-People Waiting List | Buyer or Creator Pre-Launch Registration 2025</title>
        <meta name="description" content="Join AI-People pre-launch waiting list! Choose Buyer (access 18+ AI models, OnlyFans content) or Creator (earn 75%, no KYC under $10K). Launching November 1, 2025. Get VIP early access" />
        <meta name="keywords" content="AI-People registration, join waiting list, AI creator signup, buyer registration, 75% commission, no KYC, pre-launch access" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/auth/role" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AI-People Registration - Choose Your Role",
              "description": "Pre-launch registration page for buyers and creators on AI-People marketplace",
              "url": "https://ai-people.io/auth/role",
              "inLanguage": ["en", "ru"],
              "isPartOf": {
                "@type": "WebSite",
                "name": "AI-People",
                "url": "https://ai-people.io"
              },
              "potentialAction": [
                {
                  "@type": "RegisterAction",
                  "name": "Join as Buyer",
                  "target": "https://ai-people.io/auth/buyer"
                },
                {
                  "@type": "RegisterAction",
                  "name": "Join as Creator",
                  "target": "https://ai-people.io/auth/creator"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who should choose Buyer vs Creator?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Choose Buyer if you need ready AI models and content for marketing. Choose Creator if you want to sell your AI art and virtual influencers to brands."}
                },
                {
                  "@type": "Question",
                  "name": "What are the fees for creators?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Creators keep 75% commission on sales. Secure payments and full marketing support are provided."}
                },
                {
                  "@type": "Question",
                  "name": "When is the launch?",
                  "acceptedAnswer": {"@type": "Answer", "text": "The marketplace launches on December 1, 2025 (01.12.2025 RU). Pre‑registration grants early access benefits."}
                }
              ]
            })
          }}
        />
      </Head>
      <div className="container auth-page role-selection-page">
      <HeaderWithMenu homeHref="/" />

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe now and be among the first to break into the project. Early subscribers get exclusive perks at launch. Step into 2026 with game-changing opportunities!" data-lang-ru="🔥 Это только разминка! Вы на прелендинговой странице - подпишитесь сейчас и станьте одним из первых, кто освоит проект. Ранние подписчики получат эксклюзивные бонусы при запуске. Шагните в 2026 год с революционными возможностями!">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe now and be among the first to break into the project. Early subscribers get exclusive perks at launch. Step into 2026 with game-changing opportunities!
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
                  <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} quality={100} loading="eager" />
                </picture>
              </div>
            ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}>
              <picture>
                <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} quality={100} loading="eager" />
              </picture>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section - как на главной странице */}
      <section className="hero">
        <h1 className="title">
          <span className="gradient-text" data-lang-en="Join AI-People" data-lang-ru="Присоединяйтесь к AI-People">
            Join AI-People
          </span>
        </h1>
        <h2 className="hero-subtitle" data-lang-en="Choose your role and start your journey in the world of hyperrealistic AI models" data-lang-ru="Выберите свою роль и начните свой путь в мире гиперреалистичных AI-моделей">
          Choose your role and start your journey in the world of hyperrealistic AI models
        </h2>
        <h3 className="hero-description" data-lang-en="Professional AI marketplace connecting creators and buyers. Curated quality, secure transactions, and fair creator commissions. Join the future of digital content." data-lang-ru="Профессиональный AI маркетплейс, соединяющий креаторов и покупателей. Курируемое качество, безопасные транзакции и справедливые комиссии креаторов. Присоединяйтесь к будущему цифрового контента.">
          Professional AI marketplace connecting creators and buyers. Curated quality, secure transactions, and fair creator commissions. Join the future of digital content.
        </h3>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="role-selection-buttons">
          <a href="/auth/buyer-info" className="role-choice-btn" data-role="buyer">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="role-icon">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            <span data-lang-en="I'm a Buyer" data-lang-ru="Я Покупатель">I'm a Buyer</span>
          </a>
          
          <a href="/auth/creator-info" className="role-choice-btn" data-role="creator">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="role-icon">
              <path d="M17 12l-1.5-7.5L2 2l3.5 14.5L12 17l5-5z"/>
              <path d="M2 2l7.586 7.586"/>
              <circle cx="10" cy="10" r="3"/>
              </svg>
            <span data-lang-en="I'm a Creator" data-lang-ru="Я Креатор">I'm a Creator</span>
          </a>
        </div>
      </section>

      {/* Legal Compliance Notice - full width after buttons */}
      <div className="legal-notice" itemScope itemType="https://schema.org/LegalValueSpecification">
        <meta itemProp="name" content="AI-People Legal Compliance Notice" />
        <div className="notice-content">
          <h3 className="gradient-text" data-lang-en="Legal Compliance Notice" data-lang-ru="Правовое уведомление">Legal Compliance Notice</h3>
          <p data-lang-en="All AI-generated content on the AI-People marketplace must be used exclusively for legal and legitimate purposes. AI content creators and buyers bear full responsibility for ensuring that the use or creation of hyperrealistic AI models complies with all applicable laws, regulations, and ethical standards in their jurisdiction." data-lang-ru="Весь AI-сгенерированный контент на маркетплейсе AI-People должен использоваться исключительно в законных и легитимных целях. AI-креаторы контента и покупатели несут полную ответственность за то, чтобы использование или создание гиперреалистичных AI-моделей соответствовало всем применимым законам, нормам и этическим стандартам их юрисдикции.">
            <strong>All AI-generated content on the AI-People marketplace</strong> must be used exclusively for legal and legitimate purposes. AI content creators and buyers bear full responsibility for ensuring that the use or creation of hyperrealistic AI models complies with all applicable laws, regulations, and ethical standards in their jurisdiction.
          </p>
          
          <div className="legal-list">
            <h4 className="gradient-text" data-lang-en="Required Compliance Areas:" data-lang-ru="Обязательные области соблюдения:">Required Compliance Areas:</h4>
            <ul>
              <li data-lang-en="Copyright & intellectual property rights for AI-generated models" data-lang-ru="Авторские и интеллектуальные права на AI-сгенерированные модели"><strong>Copyright & intellectual property rights</strong> for AI-generated models</li>
              <li data-lang-en="Data protection standards (GDPR, CCPA) and privacy requirements" data-lang-ru="Стандарты защиты данных (GDPR, CCPA) и требования конфиденциальности"><strong>Data protection standards</strong> (GDPR, CCPA) and privacy requirements</li>
              <li data-lang-en="Advertising regulations for commercial use of AI content" data-lang-ru="Рекламные нормы для коммерческого использования AI-контента"><strong>Advertising regulations</strong> for commercial use of AI content</li>
              <li data-lang-en="Age restrictions for 18+ and NSFW virtual influencer content" data-lang-ru="Возрастные ограничения для 18+ и NSFW контента виртуальных инфлюенсеров"><strong>Age restrictions</strong> for 18+ and NSFW virtual influencer content</li>
              <li data-lang-en="National and international regulations for AI marketplace operations" data-lang-ru="Национальные и международные нормы для операций AI-маркетплейса"><strong>National and international regulations</strong> for AI marketplace operations</li>
            </ul>
          </div>

          <h4 className="gradient-text" data-lang-en="AI-People Marketplace Platform Role:" data-lang-ru="Роль маркетплейс-платформы AI-People:">AI-People Marketplace Platform Role:</h4>
          <p data-lang-en="AI-People acts exclusively as an intermediary marketplace platform and transaction guarantor between AI content creators and buyers." data-lang-ru="AI-People выступает исключительно как посредническая маркетплейс-платформа и гарант сделок между AI-креаторами контента и покупателями.">
            <strong>AI-People acts exclusively as an intermediary marketplace platform</strong> and transaction guarantor between AI content creators and buyers.
          </p>
          
          <div className="legal-list">
            <h4 className="gradient-text" data-lang-en="Platform Limitations:" data-lang-ru="Ограничения платформы:">Platform Limitations:</h4>
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
