"use client";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";

export default function Page() {
  useHamburgerMenu();
  // Независимая статичная страница: без динамической зависимости от FAQ

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
        {/* Статичный независимый контент для About */}
        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <h1 className="title"><span className="gradient-text" data-lang-en="About" data-lang-ru="О нас">О нас</span></h1>
          <p data-lang-en="This is an independent static page. FAQ updates won't affect this content." data-lang-ru="Это независимая статичная страница. Обновления FAQ не повлияют на этот контент.">Это независимая статичная страница. Обновления FAQ не повлияют на этот контент.</p>
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

      <Footer />
    </div>
  );
}


