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
        <title>AI-People Privacy Policy | GDPR & CCPA Compliant Data Protection 2025</title>
        <meta name="description" content="AI-People Privacy Policy: GDPR/CCPA compliant data protection, pre-launch lead collection, email privacy, no data selling. Learn how we protect your information." />
        <meta name="keywords" content="AI-People privacy, GDPR compliance, CCPA privacy policy, data protection AI marketplace, email privacy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/legal/privacy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AI-People Privacy Policy",
              "description": "Official privacy policy detailing data collection, usage, and protection practices",
              "url": "https://ai-people.com/legal/privacy",
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
            <span className="gradient-text" data-lang-en="Privacy Policy" data-lang-ru="Политика конфиденциальности">Privacy Policy</span>
          </h1>
          <p className="legal-subtitle">
            <span data-lang-en="Last updated: October 1, 2025" data-lang-ru="Последнее обновление: 1 октября 2025 года">Last updated: October 1, 2025</span>
          </p>

          <div className="legal-content">
            <section>
              <h2 data-lang-en="1. Information We Collect" data-lang-ru="1. Информация, которую мы собираем">1. Information We Collect</h2>
              <p data-lang-en="During our pre-launch phase, we collect information you provide when joining our waiting list or contacting us for support:" data-lang-ru="Во время фазы предзапуска мы собираем информацию, которую вы предоставляете при присоединении к списку ожидания или обращении к нам за поддержкой:">
                During our pre-launch phase, we collect information you provide when joining our waiting list or contacting us for support:
              </p>
              <ul>
                <li data-lang-en="Contact information (name, email address)" data-lang-ru="Контактная информация (имя, адрес электронной почты)">Contact information (name, email address)</li>
                <li data-lang-en="Professional details (role, company, team size, use case)" data-lang-ru="Профессиональные детали (роль, компания, размер команды, вариант использования)">Professional details (role, company, team size, use case)</li>
                <li data-lang-en="Creator profile information (experience level, specialization, platforms used)" data-lang-ru="Информация профиля креатора (уровень опыта, специализация, используемые платформы)">Creator profile information (experience level, specialization, platforms used)</li>
                <li data-lang-en="Marketing attribution data (referrer, UTM parameters, source)" data-lang-ru="Данные маркетинговой атрибуции (реферер, UTM параметры, источник)">Marketing attribution data (referrer, UTM parameters, source)</li>
                <li data-lang-en="Technical data (IP address, user agent, browser type)" data-lang-ru="Технические данные (IP адрес, user agent, тип браузера)">Technical data (IP address, user agent, browser type)</li>
                <li data-lang-en="Communications with us" data-lang-ru="Переписка с нами">Communications with us</li>
              </ul>
              <p data-lang-en="Upon marketplace launch (November 1, 2025), we will additionally collect account credentials, payment information (USDT wallet addresses), and transaction history as outlined in our updated Privacy Policy." data-lang-ru="При запуске маркетплейса (1 ноября 2025 года) мы дополнительно будем собирать учетные данные аккаунта, платежную информацию (адреса USDT кошельков) и историю транзакций, как указано в нашей обновленной Политике конфиденциальности.">
                Upon marketplace launch (November 1, 2025), we will additionally collect account credentials, payment information (USDT wallet addresses), and transaction history as outlined in our updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 data-lang-en="2. How We Use Your Information" data-lang-ru="2. Как мы используем вашу информацию">2. How We Use Your Information</h2>
              <p data-lang-en="We use the information we collect to:" data-lang-ru="Мы используем собранную информацию для:">
                We use the information we collect to:
              </p>
              <ul>
                <li data-lang-en="Manage pre-launch waiting list and early registrations" data-lang-ru="Управления списком ожидания предзапуска и ранними регистрациями">Manage pre-launch waiting list and early registrations</li>
                <li data-lang-en="Send launch notifications and platform updates" data-lang-ru="Отправки уведомлений о запуске и обновлениях платформы">Send launch notifications and platform updates</li>
                <li data-lang-en="Analyze user segments for targeted marketing" data-lang-ru="Анализа сегментов пользователей для таргетированного маркетинга">Analyze user segments for targeted marketing</li>
                <li data-lang-en="Provide customer support and respond to inquiries" data-lang-ru="Предоставления клиентской поддержки и ответов на запросы">Provide customer support and respond to inquiries</li>
                <li data-lang-en="Track marketing campaign effectiveness (UTM, referrers)" data-lang-ru="Отслеживания эффективности маркетинговых кампаний (UTM, реферы)">Track marketing campaign effectiveness (UTM, referrers)</li>
                <li data-lang-en="Comply with legal obligations (GDPR, CCPA, data protection laws)" data-lang-ru="Соблюдения правовых обязательств (GDPR, CCPA, законы о защите данных)">Comply with legal obligations (GDPR, CCPA, data protection laws)</li>
              </ul>
              <p data-lang-en="After launch (November 1, 2025), we will additionally use information to process transactions, deliver purchased content, manage creator payouts, and provide full marketplace services." data-lang-ru="После запуска (1 ноября 2025 года) мы дополнительно будем использовать информацию для обработки транзакций, доставки купленного контента, управления выплатами креаторам и предоставления полных услуг маркетплейса.">
                After launch (November 1, 2025), we will additionally use information to process transactions, deliver purchased content, manage creator payouts, and provide full marketplace services.
              </p>
            </section>

            <section>
              <h2 data-lang-en="3. Information Sharing" data-lang-ru="3. Обмен информацией">3. Information Sharing</h2>
              <p data-lang-en="We do not sell, trade, or otherwise transfer your personal information to third parties except:" data-lang-ru="Мы не продаем, не обмениваем и не передаем вашу персональную информацию третьим лицам, за исключением:">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul>
                <li data-lang-en="With your explicit consent" data-lang-ru="С вашего явного согласия">With your explicit consent</li>
                <li data-lang-en="To comply with legal requirements" data-lang-ru="Для соблюдения правовых требований">To comply with legal requirements</li>
                <li data-lang-en="To protect our rights and prevent fraud" data-lang-ru="Для защиты наших прав и предотвращения мошенничества">To protect our rights and prevent fraud</li>
                <li data-lang-en="With service providers who assist our operations" data-lang-ru="С поставщиками услуг, которые помогают нашей деятельности">With service providers who assist our operations</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="4. Data Security" data-lang-ru="4. Безопасность данных">4. Data Security</h2>
              <p data-lang-en="We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure." data-lang-ru="Мы применяем соответствующие технические и организационные меры для защиты вашей персональной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи через интернет не является на 100% безопасным.">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 data-lang-en="5. Your Rights (GDPR/CCPA)" data-lang-ru="5. Ваши права (GDPR/CCPA)">5. Your Rights (GDPR/CCPA)</h2>
              <p data-lang-en="Depending on your location, you may have the following rights regarding your personal information:" data-lang-ru="В зависимости от вашего местоположения, вы можете иметь следующие права в отношении вашей персональной информации:">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul>
                <li data-lang-en="Access and portability of your data" data-lang-ru="Доступ и портируемость ваших данных">Access and portability of your data</li>
                <li data-lang-en="Correction of inaccurate information" data-lang-ru="Исправление неточной информации">Correction of inaccurate information</li>
                <li data-lang-en="Deletion of your personal data" data-lang-ru="Удаление ваших личных данных">Deletion of your personal data</li>
                <li data-lang-en="Restriction of processing" data-lang-ru="Ограничение обработки">Restriction of processing</li>
                <li data-lang-en="Objection to processing" data-lang-ru="Возражение против обработки">Objection to processing</li>
                <li data-lang-en="Withdrawal of consent" data-lang-ru="Отзыв согласия">Withdrawal of consent</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="6. Data Retention" data-lang-ru="6. Хранение данных">6. Data Retention</h2>
              <p data-lang-en="We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law." data-lang-ru="Мы храним вашу персональную информацию столько времени, сколько необходимо для предоставления наших услуг и выполнения целей, изложенных в настоящей Политике конфиденциальности, если более длительный период хранения не требуется по закону.">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 data-lang-en="7. International Transfers" data-lang-ru="7. Международные переводы">7. International Transfers</h2>
              <p data-lang-en="Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws." data-lang-ru="Ваша информация может быть передана и обработана в странах, отличных от вашей собственной. Мы обеспечиваем наличие соответствующих гарантий для защиты вашей личной информации в соответствии с применимыми законами о защите данных.">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 data-lang-en="8. Children's Privacy" data-lang-ru="8. Конфиденциальность детей">8. Children's Privacy</h2>
              <p data-lang-en="Our Service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately." data-lang-ru="Наш Сервис не предназначен для детей младше 18 лет. Мы сознательно не собираем персональную информацию от детей младше 18 лет. Если вы являетесь родителем или опекуном и считаете, что ваш ребенок предоставил нам персональную информацию, немедленно свяжитесь с нами.">
                Our Service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 data-lang-en="9. Changes to This Policy" data-lang-ru="9. Изменения в настоящей Политике">9. Changes to This Policy</h2>
              <p data-lang-en="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date." data-lang-ru="Мы можем время от времени обновлять настоящую Политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на этой странице и обновив дату «Последнего обновления».">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 data-lang-en="10. Contact Us" data-lang-ru="10. Свяжитесь с нами">10. Contact Us</h2>
              <p data-lang-en="If you have any questions about this Privacy Policy, please contact us at privacy@ai-people.com" data-lang-ru="Если у вас есть вопросы по настоящей Политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу privacy@ai-people.com">
                If you have any questions about this Privacy Policy, please contact us at privacy@ai-people.com
              </p>
              <p data-lang-en="For general terms and conditions, see our Terms of Service. For cookie information, see our Cookie Policy." data-lang-ru="Для общих условий и положений смотрите наши Условия обслуживания. Для информации о файлах cookie смотрите нашу Политику файлов cookie.">
                For general terms and conditions, see our <a href="/legal/terms" style={{color: 'var(--accent)', textDecoration: 'underline'}}>Terms of Service</a>. For cookie information, see our <a href="/legal/cookies" style={{color: 'var(--accent)', textDecoration: 'underline'}}>Cookie Policy</a>.
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
