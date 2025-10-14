"use client";

import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";

export default function CookiePolicyPage() {
  useHamburgerMenu();

  return (
    <>
      <Head>
        <title>AI-People Cookie Policy | EU Cookie Law Compliance & Privacy Settings 2025</title>
        <meta name="description" content="AI-People Cookie Policy: learn about essential, functional, and analytics cookies. Manage your preferences. EU Cookie Law compliant. No tracking without consent." />
        <meta name="keywords" content="AI-People cookies, cookie policy, EU cookie law, privacy settings, tracking preferences" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/legal/cookies" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AI-People Cookie Policy",
              "description": "Official cookie policy explaining cookie usage, types, and user controls",
              "url": "https://ai-people.com/legal/cookies",
              "datePublished": "2025-10-01",
              "dateModified": "2025-10-07",
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
                    "name": "Cookie Policy"
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
            <span className="gradient-text" data-lang-en="Cookie Policy" data-lang-ru="Политика файлов cookie">Cookie Policy</span>
          </h1>
          <p className="legal-subtitle">
            <span data-lang-en="Last updated: October 1, 2025" data-lang-ru="Последнее обновление: 1 октября 2025 года">Last updated: October 1, 2025</span>
          </p>

          <div className="legal-content">
            <section>
              <h2 data-lang-en="1. What Are Cookies" data-lang-ru="1. Что такое файлы cookie">1. What Are Cookies</h2>
              <p data-lang-en="Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain website functions." data-lang-ru="Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем компьютере или мобильном устройстве при посещении нашего веб-сайта. Они помогают нам предоставить вам лучший опыт, запоминая ваши предпочтения и обеспечивая определенные функции веб-сайта.">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain website functions.
              </p>
            </section>

            <section>
              <h2 data-lang-en="2. Types of Cookies We Use" data-lang-ru="2. Типы файлов cookie, которые мы используем">2. Types of Cookies We Use</h2>
              
              <h3 data-lang-en="Essential Cookies" data-lang-ru="Необходимые файлы cookie">Essential Cookies</h3>
              <p data-lang-en="These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and language preferences. The website cannot function properly without these cookies." data-lang-ru="Эти файлы cookie необходимы для правильной работы веб-сайта. Они обеспечивают основные функции, такие как навигация по страницам, доступ к защищенным областям и языковые предпочтения. Веб-сайт не может правильно функционировать без этих файлов cookie.">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and language preferences. The website cannot function properly without these cookies.
              </p>

              <h3 data-lang-en="Functional Cookies" data-lang-ru="Функциональные файлы cookie">Functional Cookies</h3>
              <p data-lang-en="These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages." data-lang-ru="Эти файлы cookie позволяют веб-сайту предоставлять расширенную функциональность и персонализацию. Они могут быть установлены нами или сторонними поставщиками, чьи услуги мы добавили на наши страницы.">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>

              <h3 data-lang-en="Analytics Cookies" data-lang-ru="Аналитические файлы cookie">Analytics Cookies</h3>
              <p data-lang-en="These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience." data-lang-ru="Эти файлы cookie помогают нам понять, как посетители взаимодействуют с нашим веб-сайтом, собирая и сообщая информацию анонимно. Это помогает нам улучшить производительность нашего веб-сайта и пользовательский опыт.">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.
              </p>

              <h3 data-lang-en="Marketing Cookies" data-lang-ru="Маркетинговые файлы cookie">Marketing Cookies</h3>
              <p data-lang-en="These cookies are used to track visitors across websites to display relevant and engaging advertisements. They are also used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns." data-lang-ru="Эти файлы cookie используются для отслеживания посетителей на веб-сайтах для отображения релевантной и привлекательной рекламы. Они также используются для ограничения количества раз, когда вы видите рекламу, и измерения эффективности рекламных кампаний.">
                These cookies are used to track visitors across websites to display relevant and engaging advertisements. They are also used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section>
              <h2 data-lang-en="3. Specific Cookies We Use" data-lang-ru="3. Конкретные файлы cookie, которые мы используем">3. Specific Cookies We Use</h2>
              <ul>
                <li data-lang-en="ai-people-language: Stores your language preference (English/Russian)" data-lang-ru="ai-people-language: Сохраняет ваше языковое предпочтение (английский/русский)">ai-people-language: Stores your language preference (English/Russian)</li>
                <li data-lang-en="ai-people-theme: Remembers your theme preference (light/dark)" data-lang-ru="ai-people-theme: Запоминает ваше предпочтение темы (светлая/темная)">ai-people-theme: Remembers your theme preference (light/dark)</li>
                <li data-lang-en="session-id: Maintains your session while browsing" data-lang-ru="session-id: Поддерживает вашу сессию при просмотре">session-id: Maintains your session while browsing</li>
                <li data-lang-en="consent-preferences: Remembers your cookie consent choices" data-lang-ru="consent-preferences: Запоминает ваши выборы согласия на файлы cookie">consent-preferences: Remembers your cookie consent choices</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="4. Third-Party Cookies" data-lang-ru="4. Файлы cookie третьих сторон">4. Third-Party Cookies</h2>
              <p data-lang-en="Some cookies on our website are set by third-party services that appear on our pages. We may use services such as:" data-lang-ru="Некоторые файлы cookie на нашем веб-сайте устанавливаются сторонними сервисами, которые появляются на наших страницах. Мы можем использовать такие сервисы, как:">
                Some cookies on our website are set by third-party services that appear on our pages. We may use services such as:
              </p>
              <ul>
                <li data-lang-en="Payment processors for cryptocurrency transactions" data-lang-ru="Платежные процессоры для криптовалютных транзакций">Payment processors for cryptocurrency transactions</li>
                <li data-lang-en="Analytics services to understand website usage" data-lang-ru="Аналитические сервисы для понимания использования веб-сайта">Analytics services to understand website usage</li>
                <li data-lang-en="Content delivery networks for faster loading" data-lang-ru="Сети доставки контента для более быстрой загрузки">Content delivery networks for faster loading</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="5. Managing Cookies" data-lang-ru="5. Управление файлами cookie">5. Managing Cookies</h2>
              <p data-lang-en="You can control and manage cookies in several ways:" data-lang-ru="Вы можете контролировать и управлять файлами cookie несколькими способами:">
                You can control and manage cookies in several ways:
              </p>
              
              <h3 data-lang-en="Browser Settings" data-lang-ru="Настройки браузера">Browser Settings</h3>
              <p data-lang-en="Most browsers allow you to refuse cookies or delete them. You can usually find these settings in the 'Options' or 'Preferences' menu of your browser." data-lang-ru="Большинство браузеров позволяют вам отклонять файлы cookie или удалять их. Обычно эти настройки можно найти в меню 'Параметры' или 'Предпочтения' вашего браузера.">
                Most browsers allow you to refuse cookies or delete them. You can usually find these settings in the "Options" or "Preferences" menu of your browser.
              </p>

              <h3 data-lang-en="Cookie Consent Banner" data-lang-ru="Баннер согласия на файлы cookie">Cookie Consent Banner</h3>
              <p data-lang-en="When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept or reject." data-lang-ru="При первом посещении нашего веб-сайта вы увидите баннер согласия на файлы cookie, где можете выбрать, какие типы файлов cookie принимать или отклонять.">
                When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept or reject.
              </p>

              <h3 data-lang-en="Opt-Out Links" data-lang-ru="Ссылки отказа">Opt-Out Links</h3>
              <p data-lang-en="For third-party analytics and advertising cookies, you can often opt out directly through the service provider's website." data-lang-ru="Для аналитических и рекламных файлов cookie третьих сторон вы часто можете отказаться напрямую через веб-сайт поставщика услуг.">
                For third-party analytics and advertising cookies, you can often opt out directly through the service provider's website.
              </p>
            </section>

            <section>
              <h2 data-lang-en="6. Impact of Disabling Cookies" data-lang-ru="6. Влияние отключения файлов cookie">6. Impact of Disabling Cookies</h2>
              <p data-lang-en="If you disable cookies, some features of our website may not function properly:" data-lang-ru="Если вы отключите файлы cookie, некоторые функции нашего веб-сайта могут функционировать неправильно:">
                If you disable cookies, some features of our website may not function properly:
              </p>
              <ul>
                <li data-lang-en="Language preferences may not be saved" data-lang-ru="Языковые предпочтения могут не сохраняться">Language preferences may not be saved</li>
                <li data-lang-en="Theme settings (light/dark mode) may reset on each visit" data-lang-ru="Настройки темы (светлый/темный режим) могут сбрасываться при каждом посещении">Theme settings (light/dark mode) may reset on each visit</li>
                <li data-lang-en="Your waiting list registration preferences may not be remembered" data-lang-ru="Ваши предпочтения регистрации в списке ожидания могут не запоминаться">Your waiting list registration preferences may not be remembered</li>
                <li data-lang-en="Website functionality may be limited" data-lang-ru="Функциональность веб-сайта может быть ограничена">Website functionality may be limited</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="7. Cookie Retention Periods" data-lang-ru="7. Периоды хранения файлов cookie">7. Cookie Retention Periods</h2>
              <ul>
                <li data-lang-en="Session cookies: Deleted when you close your browser" data-lang-ru="Сессионные файлы cookie: Удаляются при закрытии браузера">Session cookies: Deleted when you close your browser</li>
                <li data-lang-en="Persistent cookies: Remain for a set period (usually 30 days to 2 years)" data-lang-ru="Постоянные файлы cookie: Остаются на установленный период (обычно от 30 дней до 2 лет)">Persistent cookies: Remain for a set period (usually 30 days to 2 years)</li>
                <li data-lang-en="Essential cookies: Last for the duration of your session" data-lang-ru="Необходимые файлы cookie: Действуют в течение вашей сессии">Essential cookies: Last for the duration of your session</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="8. Updates to This Policy" data-lang-ru="8. Обновления настоящей Политики">8. Updates to This Policy</h2>
              <p data-lang-en="We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the 'Last updated' date at the top of this policy." data-lang-ru="Мы можем время от времени обновлять настоящую Политику файлов cookie, чтобы отразить изменения в нашей практике или по другим операционным, правовым или нормативным причинам. Мы уведомим вас о любых существенных изменениях, обновив дату 'Последнего обновления' в верхней части настоящей политики.">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section>
              <h2 data-lang-en="9. Contact Us" data-lang-ru="9. Свяжитесь с нами">9. Contact Us</h2>
              <p data-lang-en="If you have any questions about our use of cookies or this Cookie Policy, please contact us at cookies@ai-people.com" data-lang-ru="Если у вас есть вопросы об использовании нами файлов cookie или настоящей Политике файлов cookie, пожалуйста, свяжитесь с нами по адресу cookies@ai-people.com">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at cookies@ai-people.com
              </p>
              <p data-lang-en="This Cookie Policy is part of our Privacy Policy framework. See also our Terms of Service." data-lang-ru="Настоящая Политика файлов cookie является частью нашей структуры Политики конфиденциальности. Смотрите также наши Условия обслуживания.">
                This Cookie Policy is part of our <a href="/legal/privacy" style={{color: 'var(--accent)', textDecoration: 'underline'}}>Privacy Policy</a> framework. See also our <a href="/legal/terms" style={{color: 'var(--accent)', textDecoration: 'underline'}}>Terms of Service</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
