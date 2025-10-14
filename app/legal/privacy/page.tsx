"use client";

import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";

export default function PrivacyPolicyPage() {
  useHamburgerMenu();

  return (
    <>
      <Head>
        <title>Privacy Policy — AI-PEOPLE.IO</title>
        <meta name="description" content="AI-PEOPLE.IO Privacy Policy. Effective October 2025. How we collect, use, store and protect data. Contact: support@ai-people.io." />
        <meta name="keywords" content="AI-People privacy, GDPR compliance, CCPA privacy policy, data protection AI marketplace, email privacy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/legal/privacy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy — AI-PEOPLE.IO",
              "description": "Privacy Policy for AI-PEOPLE.IO: collection, usage, storage and protection of personal data.",
              "url": "https://ai-people.io/legal/privacy",
              "datePublished": "2025-10-01",
              "dateModified": "2025-10-14",
              "inLanguage": ["en", "ru"],
              "isPartOf": {
                "@type": "WebSite",
                "name": "AI-People",
                "url": "https://ai-people.com"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ai-people.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Legal",
                    "item": "https://ai-people.com/legal"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Privacy Policy"
                  }
                ]
              }
            })
          }}
        />
      </Head>
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
                <span className="gradient-text" data-lang-en="Privacy Policy — AI-PEOPLE.IO" data-lang-ru="Политика конфиденциальности — AI-PEOPLE.IO">Privacy Policy — AI-PEOPLE.IO</span>
              </h1>
              <p className="legal-subtitle">
                <span data-lang-en="Effective Date: October 2025 • Location: New York, USA • Contact: support@ai-people.io" data-lang-ru="Дата вступления в силу: Октябрь 2025 • Локация: Нью‑Йорк, США • Контакт: support@ai-people.io">Effective Date: October 2025 • Location: New York, USA • Contact: support@ai-people.io</span>
              </p>

          <div className="legal-content">
              <section>
                <h2 data-lang-en="1. Information We Collect" data-lang-ru="1. Какие данные мы собираем">1. Information We Collect</h2>
                <p data-lang-en="We collect information in order to provide better services to our users, including:" data-lang-ru="Мы собираем только ту информацию, которая необходима для предоставления качественных услуг:">We collect information in order to provide better services to our users, including:</p>
              <ul>
                  <li data-lang-en="Personal Data: Name, email address, account credentials, and payment details (if applicable)." data-lang-ru="Персональные данные: имя, адрес электронной почты, данные для входа в аккаунт, а также платёжная информация (при её использовании).">Personal Data: Name, email address, account credentials, and payment details (if applicable).</li>
                  <li data-lang-en="Usage Data: IP address, browser type, operating system, referring URLs, pages viewed, and actions taken on our site." data-lang-ru="Технические данные: IP-адрес, тип браузера, операционная система, источник перехода, просмотренные страницы и действия на сайте.">Usage Data: IP address, browser type, operating system, referring URLs, pages viewed, and actions taken on our site.</li>
                  <li data-lang-en="Cookies and Tracking: We use cookies and similar technologies to improve user experience, analyze traffic, and remember preferences." data-lang-ru="Cookies и трекинг: мы используем cookies и аналогичные технологии для улучшения пользовательского опыта, анализа трафика и запоминания предпочтений.">Cookies and Tracking: We use cookies and similar technologies to improve user experience, analyze traffic, and remember preferences.</li>
              </ul>
            </section>

              <section>
                <h2 data-lang-en="2. How We Use Your Information" data-lang-ru="2. Как мы используем полученные данные">2. How We Use Your Information</h2>
              <ul>
                  <li data-lang-en="Operate and improve our platform and services." data-lang-ru="Обеспечение работы и улучшение платформы.">Operate and improve our platform and services.</li>
                  <li data-lang-en="Manage user accounts and provide membership access." data-lang-ru="Управление аккаунтами и предоставление доступа по подписке.">Manage user accounts and provide membership access.</li>
                  <li data-lang-en="Send updates, news, and promotional information (only if you opt in)." data-lang-ru="Отправка обновлений, новостей и предложений (только при согласии пользователя).">Send updates, news, and promotional information (only if you opt in).</li>
                  <li data-lang-en="Analyze platform usage to enhance performance and personalization." data-lang-ru="Анализ поведения пользователей для повышения качества сервиса.">Analyze platform usage to enhance performance and personalization.</li>
                  <li data-lang-en="Ensure compliance with legal and regulatory obligations." data-lang-ru="Соблюдение требований законодательства и регуляторов.">Ensure compliance with legal and regulatory obligations.</li>
              </ul>
            </section>

              <section>
                <h2 data-lang-en="3. Membership Access" data-lang-ru="3. Членский доступ (Membership Access)">3. Membership Access</h2>
                <p data-lang-en="Registration on AI-PEOPLE.IO is free. Access to AI model catalogs and premium content is available through a membership plan, which provides exclusive features, advanced tools, and early access to new creators. Membership pricing is transparent, with no hidden fees." data-lang-ru="Регистрация на AI-PEOPLE.IO бесплатна. Доступ к каталогам AI-моделей и премиум-контенту предоставляется через членскую подписку, которая открывает эксклюзивные возможности, расширенные инструменты и ранний доступ к новым креаторам. Стоимость подписки прозрачна, скрытые комиссии отсутствуют.">Registration on AI-PEOPLE.IO is free. Access to AI model catalogs and premium content is available through a membership plan, which provides exclusive features, advanced tools, and early access to new creators. Membership pricing is transparent, with no hidden fees.</p>
            </section>

              <section>
                <h2 data-lang-en="4. Data Protection and Storage" data-lang-ru="4. Защита и хранение данных">4. Data Protection and Storage</h2>
                <p data-lang-en="We implement security measures designed to protect your personal data from unauthorized access, disclosure, alteration, or destruction. Data may be stored on secure servers in the United States or other locations that comply with international privacy standards." data-lang-ru="Мы применяем современные меры безопасности для защиты персональных данных от несанкционированного доступа, изменения или удаления. Данные могут храниться на защищённых серверах в США или других странах, соблюдающих международные стандарты защиты информации.">We implement security measures designed to protect your personal data from unauthorized access, disclosure, alteration, or destruction. Data may be stored on secure servers in the United States or other locations that comply with international privacy standards.</p>
            </section>

              <section>
                <h2 data-lang-en="5. Data Sharing and Third Parties" data-lang-ru="5. Передача данных третьим лицам">5. Data Sharing and Third Parties</h2>
                <p data-lang-en="We do not sell your personal data. We may share data only with:" data-lang-ru="Мы не продаём персональные данные пользователей. Передача возможна только в следующих случаях:">We do not sell your personal data. We may share data only with:</p>
              <ul>
                  <li data-lang-en="Service providers assisting in website operations (hosting, analytics, payment processing)." data-lang-ru="Партнёрам, обеспечивающим работу сайта (хостинг, аналитика, платежи).">Service providers assisting in website operations (hosting, analytics, payment processing).</li>
                  <li data-lang-en="Legal authorities when required by law." data-lang-ru="Государственным органам — в случаях, предусмотренных законом.">Legal authorities when required by law.</li>
                  <li data-lang-en="Business partners, only with your explicit consent." data-lang-ru="Бизнес-партнёрам — только с вашего согласия.">Business partners, only with your explicit consent.</li>
              </ul>
            </section>

              <section>
                <h2 data-lang-en="6. Cookies and Analytics" data-lang-ru="6. Cookies и аналитика">6. Cookies and Analytics</h2>
                <p data-lang-en="We use cookies to personalize content, analyze traffic, and track marketing effectiveness. You can manage or disable cookies through your browser settings." data-lang-ru="Мы используем cookies для персонализации контента, анализа трафика и оценки эффективности рекламы. Вы можете самостоятельно управлять настройками cookies в параметрах браузера.">We use cookies to personalize content, analyze traffic, and track marketing effectiveness. You can manage or disable cookies through your browser settings.</p>
            </section>

              <section>
                <h2 data-lang-en="7. Your Rights" data-lang-ru="7. Ваши права">7. Your Rights</h2>
                <p data-lang-en="Depending on your location, you may have the right to:" data-lang-ru="Вы имеете право:">Depending on your location, you may have the right to:</p>
              <ul>
                  <li data-lang-en="Access, update, or delete your personal data." data-lang-ru="Получить доступ к своим данным, изменить или удалить их.">Access, update, or delete your personal data.</li>
                  <li data-lang-en="Withdraw consent to marketing communications." data-lang-ru="Отозвать согласие на получение рассылок.">Withdraw consent to marketing communications.</li>
                  <li data-lang-en="Request a copy of your stored data." data-lang-ru="Запросить копию данных, хранящихся о вас.">Request a copy of your stored data.</li>
              </ul>
                <p data-lang-en="To exercise these rights, contact us at support@ai-people.io." data-lang-ru="Для реализации прав напишите на support@ai-people.io.">To exercise these rights, contact us at support@ai-people.io.</p>
            </section>

              <section>
                <h2 data-lang-en="8. Children’s Privacy" data-lang-ru="8. Конфиденциальность несовершеннолетних">8. Children’s Privacy</h2>
                <p data-lang-en="AI-PEOPLE.IO is not intended for individuals under 18 years of age. We do not knowingly collect data from minors." data-lang-ru="AI-PEOPLE.IO не предназначен для лиц младше 18 лет. Мы сознательно не собираем и не обрабатываем данные несовершеннолетних пользователей.">AI-PEOPLE.IO is not intended for individuals under 18 years of age. We do not knowingly collect data from minors.</p>
            </section>

              <section>
                <h2 data-lang-en="9. Changes to This Policy" data-lang-ru="9. Изменения политики">9. Changes to This Policy</h2>
                <p data-lang-en="We may update this Privacy Policy from time to time. The latest version will always be available on this page, with the updated ‘Effective Date’." data-lang-ru="Мы можем периодически обновлять данную Политику конфиденциальности. Актуальная версия всегда доступна на этой странице, дата обновления указывается вверху документа.">We may update this Privacy Policy from time to time. The latest version will always be available on this page, with the updated ‘Effective Date’.</p>
            </section>

              <section>
                <h2 data-lang-en="10. Contact Us" data-lang-ru="10. Контакты">10. Contact Us</h2>
                <p data-lang-en="For questions, concerns, or privacy requests, please contact: support@ai-people.io" data-lang-ru="По всем вопросам, связанным с конфиденциальностью, обращайтесь: support@ai-people.io">For questions, concerns, or privacy requests, please contact: support@ai-people.io</p>
                <p data-lang-en="New York, USA" data-lang-ru="Нью-Йорк, США">New York, USA</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
