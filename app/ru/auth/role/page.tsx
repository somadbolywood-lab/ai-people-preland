"use client";

import { useState, useEffect } from "react";
import { useHamburgerMenu } from "../../../hooks/useHamburgerMenu";
import Image from "next/image";
import Script from "next/script";
import FooterRU from "../../../components/FooterRU";
import LanguageSelector from "../../../components/LanguageSelector";
import HeaderWithMenu from "../../../components/HeaderWithMenu";
import Head from "next/head";

export default function RoleSelectionPage() {
  useHamburgerMenu();

  return (
    <>
      <Head>
        <title>Присоединяйтесь к AI-People | Регистрация покупателя или креатора 2025</title>
        <meta name="description" content="Присоединяйтесь к списку ожидания AI-People! Выберите Покупателя (доступ к 18+ AI-моделям, OnlyFans контенту) или Креатора (зарабатывайте 75%, без KYC до $10K). Запуск 1 декабря 2025. Получите VIP ранний доступ" />
        <meta name="keywords" content="регистрация AI-People, присоединиться к списку ожидания, регистрация AI-креатора, регистрация покупателя, 75% комиссия, без KYC, предзапуск доступ" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/ru/auth/role" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Регистрация AI-People - Выберите свою роль",
              "description": "Страница предзапусковой регистрации для покупателей и креаторов на маркетплейсе AI-People",
              "url": "https://ai-people.io/ru/auth/role",
              "inLanguage": ["en", "ru"],
              "isPartOf": {
                "@type": "WebSite",
                "name": "AI-People",
                "url": "https://ai-people.io"
              },
              "potentialAction": [
                {
                  "@type": "RegisterAction",
                  "name": "Присоединиться как покупатель",
                  "target": "https://ai-people.io/ru/auth/buyer"
                },
                {
                  "@type": "RegisterAction",
                  "name": "Присоединиться как креатор",
                  "target": "https://ai-people.io/ru/auth/creator"
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
            "inLanguage": "ru-RU",
            "mainEntity": [
              {"@type": "Question", "name": "Кому выбрать роль покупателя, а кому — креатора?", "acceptedAnswer": {"@type": "Answer", "text": "Выбирайте Покупателя, если вам нужны готовые AI‑модели и контент для маркетинга. Выбирайте Креатора, если хотите продавать свой AI‑контент и виртуальных инфлюенсеров брендам."}},
              {"@type": "Question", "name": "Какая комиссия у креаторов?", "acceptedAnswer": {"@type": "Answer", "text": "Креаторы получают 75% вознаграждения от продаж. Обеспечены безопасные выплаты и маркетинговая поддержка."}},
              {"@type": "Question", "name": "Когда запуск?", "acceptedAnswer": {"@type": "Answer", "text": "Запуск маркетплейса — 01.12.2025. Предрегистрация даёт ранние привилегии."}}
              ]
            })
          }}
        />
      </Head>
      <div className="container auth-page role-selection-page ru-optimized">
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
            <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
        </div>
      </section>

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="unified-h1">
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
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="role-icon">
                <path d="M17 12l-1.5-7.5L2 2l3.5 14.5L12 17l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="10" cy="10" r="3"/>
                </svg>
              <span data-lang-en="I'm a Creator" data-lang-ru="Я Креатор">Я Креатор</span>
            </a>
          </div>

          <div className="legal-notice" itemScope itemType="https://schema.org/LegalValueSpecification">
            <meta itemProp="name" content="AI-People Legal Compliance Notice" />
            <div className="notice-content">
              <h3 className="gradient-text" data-lang-en="Legal Compliance Notice" data-lang-ru="Правовое уведомление">Правовое уведомление</h3>
              <p data-lang-en="All AI-generated content on the AI-People marketplace must be used exclusively for legal and legitimate purposes. AI content creators and buyers bear full responsibility for ensuring that the use or creation of hyperrealistic AI models complies with all applicable laws, regulations, and ethical standards in their jurisdiction." data-lang-ru="Весь AI-сгенерированный контент на маркетплейсе AI-People должен использоваться исключительно в законных и легитимных целях. AI-креаторы контента и покупатели несут полную ответственность за то, чтобы использование или создание гиперреалистичных AI-моделей соответствовало всем применимым законам, нормам и этическим стандартам их юрисдикции.">
                <strong>Весь AI-сгенерированный контент на маркетплейсе AI-People</strong> должен использоваться исключительно в законных и легитимных целях. AI-креаторы контента и покупатели несут полную ответственность за то, чтобы использование или создание гиперреалистичных AI-моделей соответствовало всем применимым законам, нормам и этическим стандартам их юрисдикции.
              </p>
              
              <div className="legal-list">
                <h4 className="gradient-text" data-lang-en="Required Compliance Areas:" data-lang-ru="Обязательные области соблюдения:">Обязательные области соблюдения:</h4>
                <ul>
                  <li data-lang-en="Copyright & intellectual property rights for AI-generated models" data-lang-ru="Авторские и интеллектуальные права на AI-сгенерированные модели"><strong>Авторские и интеллектуальные права</strong> на AI-сгенерированные модели</li>
                  <li data-lang-en="Data protection standards (GDPR, CCPA) and privacy requirements" data-lang-ru="Стандарты защиты данных (GDPR, CCPA) и требования конфиденциальности"><strong>Стандарты защиты данных</strong> (GDPR, CCPA) и требования конфиденциальности</li>
                  <li data-lang-en="Advertising regulations for commercial use of AI content" data-lang-ru="Рекламные нормы для коммерческого использования AI-контента"><strong>Рекламные нормы</strong> для коммерческого использования AI-контента</li>
                  <li data-lang-en="Age restrictions for 18+ and NSFW virtual influencer content" data-lang-ru="Возрастные ограничения для 18+ и NSFW контента виртуальных инфлюенсеров"><strong>Возрастные ограничения</strong> для 18+ и NSFW контента виртуальных инфлюенсеров</li>
                  <li data-lang-en="National and international regulations for AI marketplace operations" data-lang-ru="Национальные и международные нормы для операций AI-маркетплейса"><strong>Национальные и международные нормы</strong> для операций AI-маркетплейса</li>
                </ul>
              </div>

              <h4 className="gradient-text" data-lang-en="AI-People Marketplace Platform Role:" data-lang-ru="Роль маркетплейс-платформы AI-People:">Роль маркетплейс-платформы AI-People:</h4>
              <p data-lang-en="AI-People acts exclusively as an intermediary marketplace platform and transaction guarantor between AI content creators and buyers." data-lang-ru="AI-People выступает исключительно как посредническая маркетплейс-платформа и гарант сделок между AI-креаторами контента и покупателями.">
                <strong>AI-People выступает исключительно как посредническая маркетплейс-платформа</strong> и гарант сделок между AI-креаторами контента и покупателями.
              </p>
              
              <div className="legal-list">
                <h4 className="gradient-text" data-lang-en="Platform Limitations:" data-lang-ru="Ограничения платформы:">Ограничения платформы:</h4>
                <ul>
                  <li data-lang-en="Does not bear responsibility for legal compliance or consequences of AI content use" data-lang-ru="Не несёт ответственности за юридическое соответствие или последствия использования AI-контента">Не несёт ответственности за юридическое соответствие или последствия использования AI-контента</li>
                  <li data-lang-en="Does not control further use of purchased AI models outside the marketplace" data-lang-ru="Не контролирует дальнейшее использование купленных AI-моделей за пределами маркетплейса">Не контролирует дальнейшее использование купленных AI-моделей за пределами маркетплейса</li>
                  <li data-lang-en="Reserves right to monitor activity and suspend access for violations of platform rules" data-lang-ru="Оставляет за собой право мониторить активность и приостанавливать доступ за нарушения правил платформы">Оставляет за собой право мониторить активность и приостанавливать доступ за нарушения правил платформы</li>
                </ul>
              </div>

              <p data-lang-en="By joining the AI-People pre-launch waiting list, each user and creator confirms agreement to comply with these legal terms and fully accepts responsibility for the use or distribution of AI-generated content." data-lang-ru="Присоединяясь к списку ожидания предзапуска AI-People, каждый пользователь и креатор подтверждает согласие соблюдать эти юридические условия и полностью принимает ответственность за использование или распространение AI-сгенерированного контента." style={{fontStyle: 'italic', marginTop: '1rem'}}>
                <em>Присоединяясь к списку ожидания предзапуска AI-People, каждый пользователь и креатор подтверждает согласие соблюдать эти юридические условия и полностью принимает ответственность за использование или распространение AI-сгенерированного контента.</em>
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterRU />
      
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
              "url": "https://ai-people.io"
            },
            "serviceType": "Регистрация в AI маркетплейсе",
            "url": "https://ai-people.io/ru/auth/role",
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
