"use client";

import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";
import HreflangLinks from "../../components/HreflangLinks";

export default function CookiePolicyPage() {
  useHamburgerMenu();

  return (
    <>
      <Head>
        <title>Cookie Policy — AI-PEOPLE.IO</title>
        <meta name="description" content="Cookie Policy for AI-PEOPLE.IO: what cookies are, types we use (essential, analytics, functional, marketing), how to manage them, and contacts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/legal/cookies" />
        <link rel="alternate" href="https://ai-people.io/legal/cookies" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/cookies" hrefLang="ru" />
        <meta property="og:title" content="Cookie Policy — AI-PEOPLE.IO" />
        <meta property="og:description" content="How AI-PEOPLE.IO uses cookies and how you can manage them." />
        <meta property="og:url" content="https://ai-people.io/legal/cookies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-03.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy — AI-PEOPLE.IO" />
        <meta name="twitter:description" content="Cookie types we use and management options." />
        <meta name="twitter:image" content="https://ai-people.io/assets/models/model-03.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cookie Policy — AI-PEOPLE.IO",
              "description": "Cookie types and management for AI-PEOPLE.IO.",
              "url": "https://ai-people.io/legal/cookies",
              "datePublished": "2025-10-01",
              "dateModified": "2025-10-14",
              "inLanguage": "en"
            })
          }}
        />
      </Head>
      <HreflangLinks currentPath="/legal/cookies" locale="en" />
    <div className="container">
      <header className="topbar">
        <div className="brand">
          <a href="/" className="brand-link">
            <Image 
              src="/faq/AI-people Logo.png" 
              alt="AI-People" 
              className="logo-img" 
              width={75} 
              height={75}
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
          <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="menuPanel">
            <span className="bar"></span><span className="bar"></span><span className="bar"></span>
          </button>
        </div>
      </header>

      <div className="menu-panel" id="menuPanel" role="menu" aria-hidden="true">
        <a href="/" role="menuitem" data-lang-en="Home" data-lang-ru="Главная">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>Home</span>
        </a>
        <a href="/about" role="menuitem" data-lang-en="About" data-lang-ru="О нас">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="1"/>
          </svg>
          <span>About</span>
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
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
          <span>Blog</span>
        </a>
        <a href="/auth/role" role="menuitem" data-lang-en="Get Started" data-lang-ru="Начать">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
          <span>Get Started</span>
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

      <main className="legal-main">
        <div className="legal-container">
          <h1 className="legal-title">
            <span className="gradient-text">Cookie Policy — AI-PEOPLE.IO</span>
          </h1>
          <p className="legal-subtitle">Effective Date: October 2025 • Location: New York, USA • Contact: support@ai-people.io</p>

          <div className="legal-content">
            <section>
              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help us recognize your browser, remember preferences, and improve your experience.</p>
            </section>

            <section>
              <h2>2. Types of Cookies We Use</h2>
              <h3>a) Essential Cookies</h3>
              <p>Necessary for core functionality: login sessions, security, language settings.</p>
              <h3>b) Analytics Cookies</h3>
              <p>Used to analyze behavior and traffic to improve usability and performance.</p>
              <h3>c) Functional Cookies</h3>
              <p>Enable personalization such as remembering preferences and content filters.</p>
              <h3>d) Marketing Cookies</h3>
              <p>Deliver relevant content and measure marketing effectiveness.</p>
            </section>

            <section>
              <h2>3. How We Use Cookies</h2>
              <ul>
                <li>Provide secure and seamless access to AI-PEOPLE.IO</li>
                <li>Remember session preferences</li>
                <li>Analyze performance and optimize content</li>
                <li>Support advertising and membership marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h2>4. Managing Cookies</h2>
              <p>You can manage or disable cookies via your browser settings. Disabling some cookies may affect website functionality.</p>
              <ul>
                <li>Block third‑party cookies</li>
                <li>Delete existing cookies</li>
                <li>Notify when cookies are being set</li>
              </ul>
            </section>

            <section>
              <h2>5. Third-Party Cookies</h2>
              <ul>
                <li>Google Analytics — traffic analytics</li>
                <li>Meta / Twitter pixels — marketing performance</li>
              </ul>
              <p>These services may collect data under their own privacy policies.</p>
            </section>

            <section>
              <h2>6. Updates to This Policy</h2>
              <p>We may update this Cookie Policy periodically. Changes take effect once posted here. The “Effective Date” above indicates the last revision.</p>
            </section>

            <section>
              <h2>7. Contact</h2>
              <p>If you have questions about this Cookie Policy, contact: support@ai-people.io<br/>New York, USA</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
