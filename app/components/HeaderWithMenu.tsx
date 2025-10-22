"use client";

import Image from "next/image";
// ThemeToggle removed - only dark theme now
import LanguageSelector from "./LanguageSelector";
import { useHamburgerMenu } from "../hooks/useHamburgerMenu";

interface HeaderWithMenuProps {
  homeHref: string;
}

export default function HeaderWithMenu({ homeHref }: HeaderWithMenuProps) {
  useHamburgerMenu();
  
  return (
    <>
      <header className="topbar">
        <div className="brand">
          <a href={homeHref} className="brand-link">
            <Image 
              src="/faq/AI-people Logo.png" 
              alt="AI-People" 
              className="logo-img animated" 
              width={180} 
              height={75} 
              priority
            />
          </a>
        </div>
        <div className="actions">
          <LanguageSelector />
          {/* ThemeToggle removed - only dark theme now */}
          <a href="mailto:feedback@ai-people.com" className="feedback-btn" aria-label="Feedback">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="menuPanel"><span className="bar"></span><span className="bar"></span><span className="bar"></span></button>
        </div>
      </header>

      <div 
        className="menu-panel" 
        id="menuPanel" 
        role="menu" 
        aria-hidden="true"
      >
        <a href={homeHref} role="menuitem" data-lang-en="Home" data-lang-ru="Главная">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>{homeHref === "/ru" ? "Главная" : "Home"}</span>
        </a>
        <a href={homeHref === "/ru" ? "/ru/about" : "/about"} role="menuitem" data-lang-en="About" data-lang-ru="О нас">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="1"/>
          </svg>
          <span>{homeHref === "/ru" ? "О нас" : "About"}</span>
        </a>
        <a href={homeHref === "/ru" ? "/ru/faq" : "/faq"} role="menuitem" data-lang-en="FAQ" data-lang-ru="FAQ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <span>{homeHref === "/ru" ? "FAQ" : "FAQ"}</span>
        </a>
        <a href={homeHref === "/ru" ? "/ru/blog" : "/blog"} role="menuitem" data-lang-en="Blog" data-lang-ru="Блог">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
          <span>{homeHref === "/ru" ? "Блог" : "Blog"}</span>
        </a>

        <a href={homeHref === "/ru" ? "/ru/auth/role" : "/auth/role"} role="menuitem" data-lang-en="Get Started" data-lang-ru="Начать">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
          <span>{homeHref === "/ru" ? "Начать" : "Get Started"}</span>
        </a>

        {/* Coming Soon Section */}
        <div style={{marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)'}}></div>

        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Creator Admin Panel" data-lang-ru="Админ. панель Креатора">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
            <path d="m15 14 3 3 3-3"/>
          </svg>
          <span data-lang-en="Creator Admin Panel" data-lang-ru="Админ. панель Креатора">{homeHref === "/ru" ? "Админ. панель Креатора" : "Creator Admin Panel"}</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">{homeHref === "/ru" ? "Скоро" : "Soon"}</span>
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
          <span data-lang-en="Buyer Admin Panel" data-lang-ru="Админ. панель Покупателя">{homeHref === "/ru" ? "Админ. панель Покупателя" : "Buyer Admin Panel"}</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">{homeHref === "/ru" ? "Скоро" : "Soon"}</span>
        </a>

        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Catalog" data-lang-ru="Каталог">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            <path d="M8 7h8"/>
            <path d="M8 11h8"/>
            <path d="M8 15h4"/>
          </svg>
          <span data-lang-en="Catalog" data-lang-ru="Каталог">{homeHref === "/ru" ? "Каталог" : "Catalog"}</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">{homeHref === "/ru" ? "Скоро" : "Soon"}</span>
        </a>

        <a href="#" role="menuitem" aria-disabled="true" data-lang-en="Prices" data-lang-ru="Цены">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span data-lang-en="Prices" data-lang-ru="Цены">{homeHref === "/ru" ? "Цены" : "Prices"}</span>
          <span className="soon-label" data-lang-en="Soon" data-lang-ru="Скоро">{homeHref === "/ru" ? "Скоро" : "Soon"}</span>
        </a>

        {/* Legal Policies Section */}
        <div className="menu-legal-section">
          <div className="policies-grid">
            <a href={homeHref === "/ru" ? "/ru/legal/terms" : "/legal/terms"} data-lang-en="Terms of Service" data-lang-ru="Условия обслуживания">
              <span className="label-desktop">{homeHref === "/ru" ? "Условия обслуживания" : "Terms of Service"}</span>
              <span className="label-mobile" data-lang-skip="true">{homeHref === "/ru" ? "Полит. обслуж." : "Terms of Service"}</span>
            </a>
            <a href={homeHref === "/ru" ? "/ru/legal/privacy" : "/legal/privacy"} data-lang-en="Privacy Policy" data-lang-ru="Политика конфиденциальности">
              <span className="label-desktop">{homeHref === "/ru" ? "Политика конфиденциальности" : "Privacy Policy"}</span>
              <span className="label-mobile" data-lang-skip="true">{homeHref === "/ru" ? "Полит. конфиденц." : "Privacy Policy"}</span>
            </a>
            <a href={homeHref === "/ru" ? "/ru/legal/cookies" : "/legal/cookies"} data-lang-en="Cookie Policy" data-lang-ru="Политика файлов cookie">
              <span className="label-desktop">{homeHref === "/ru" ? "Политика файлов cookie" : "Cookie Policy"}</span>
              <span className="label-mobile" data-lang-skip="true">{homeHref === "/ru" ? "Полит. cookie" : "Cookie Policy"}</span>
            </a>
            <a href={homeHref === "/ru" ? "/ru/legal/content-policy" : "/legal/content-policy"} data-lang-en="Content & 18+ Policy" data-lang-ru="Политика контента и 18+">
              <span className="label-desktop">{homeHref === "/ru" ? "Политика контента и 18+" : "Content & 18+ Policy"}</span>
              <span className="label-mobile" data-lang-skip="true">{homeHref === "/ru" ? "Полит. контента" : "Content Policy"}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


