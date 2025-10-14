"use client";

import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";

export default function TermsOfServicePage() {
  useHamburgerMenu();

  return (
    <>
      <Head>
        <title>AI-People Terms of Service | AI Models Marketplace Legal Agreement 2025</title>
        <meta name="description" content="AI-People Terms of Service: marketplace rules, 75% creator commission, USDT payments, 72-hour verification, refund policy. Launching November 1, 2025." />
        <meta name="keywords" content="AI-People terms, AI marketplace legal, virtual influencer agreement, creator commission 75%, USDT payment terms" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/legal/terms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AI-People Terms of Service",
              "description": "Official terms and conditions for AI-People marketplace platform",
              "url": "https://ai-people.com/legal/terms",
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
                    "name": "Terms of Service"
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
            <span className="gradient-text" data-lang-en="Terms of Service" data-lang-ru="Условия обслуживания">Terms of Service</span>
          </h1>
          <p className="legal-subtitle">
            <span data-lang-en="Last updated: October 1, 2025" data-lang-ru="Последнее обновление: 1 октября 2025 года">Last updated: October 1, 2025</span>
          </p>

          <div className="legal-content">
            <section>
              <h2 data-lang-en="1. Acceptance of Terms" data-lang-ru="1. Принятие условий">1. Acceptance of Terms</h2>
              <p data-lang-en="By accessing and using AI-People (the 'Service'), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service." data-lang-ru="Получая доступ и используя AI-People (далее «Сервис»), вы принимаете и соглашаетесь соблюдать условия и положения настоящего соглашения. Если вы не согласны соблюдать вышеизложенное, пожалуйста, не используйте данный сервис.">
                By accessing and using AI-People (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p data-lang-en="These Terms should be read in conjunction with our Privacy Policy and Cookie Policy." data-lang-ru="Настоящие Условия должны читаться совместно с нашей Политикой конфиденциальности и Политикой файлов cookie.">
                These Terms should be read in conjunction with our <a href="/legal/privacy" style={{color: 'var(--accent)', textDecoration: 'underline'}}>Privacy Policy</a> and <a href="/legal/cookies" style={{color: 'var(--accent)', textDecoration: 'underline'}}>Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 data-lang-en="2. Description of Service" data-lang-ru="2. Описание сервиса">2. Description of Service</h2>
              <p data-lang-en="AI-People is a marketplace platform launching November 1, 2025, that will facilitate the creation, distribution, and monetization of hyperrealistic AI-generated digital personalities and content packages. Currently in pre-launch phase, we collect early registrations from content creators and buyers. Full marketplace functionality will be available upon official launch." data-lang-ru="AI-People — это маркетплейс-платформа, запускающаяся 1 ноября 2025 года, которая будет способствовать созданию, распространению и монетизации гиперреалистичных цифровых личностей и контент-пакетов, созданных с помощью ИИ. В настоящее время на этапе предзапуска мы собираем ранние регистрации от создателей контента и покупателей. Полный функционал маркетплейса будет доступен при официальном запуске.">
                AI-People is a marketplace platform launching November 1, 2025, that will facilitate the creation, distribution, and monetization of hyperrealistic AI-generated digital personalities and content packages. Currently in pre-launch phase, we collect early registrations from content creators and buyers. Full marketplace functionality will be available upon official launch.
              </p>
            </section>

            <section>
              <h2 data-lang-en="3. User Eligibility" data-lang-ru="3. Право пользователей">3. User Eligibility</h2>
              <p data-lang-en="You must be at least 18 years old to use this Service. By using AI-People, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into this agreement." data-lang-ru="Вам должно быть не менее 18 лет для использования данного Сервиса. Используя AI-People, вы заявляете и гарантируете, что вам не менее 18 лет и у вас есть правоспособность для заключения настоящего соглашения.">
                You must be at least 18 years old to use this Service. By using AI-People, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into this agreement.
              </p>
            </section>

            <section>
              <h2 data-lang-en="4. Prohibited Uses" data-lang-ru="4. Запрещенное использование">4. Prohibited Uses</h2>
              <p data-lang-en="You may not use our Service:" data-lang-ru="Вы не можете использовать наш Сервис:">
                You may not use our Service:
              </p>
              <ul>
                <li data-lang-en="For any unlawful purpose or to solicit others to perform unlawful acts" data-lang-ru="В любых незаконных целях или для склонения других к совершению незаконных действий">For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li data-lang-en="To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances" data-lang-ru="Для нарушения любых международных, федеральных, провинциальных или государственных правил, законов или местных постановлений">To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li data-lang-en="To infringe upon or violate our intellectual property rights or the intellectual property rights of others" data-lang-ru="Для нарушения наших прав интеллектуальной собственности или прав интеллектуальной собственности других лиц">To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li data-lang-en="To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate" data-lang-ru="Для преследования, оскорбления, причинения вреда, клеветы, унижения, запугивания или дискриминации">To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li data-lang-en="To submit false or misleading information" data-lang-ru="Для предоставления ложной или вводящей в заблуждение информации">To submit false or misleading information</li>
                <li data-lang-en="To upload or transmit viruses or any other type of malicious code" data-lang-ru="Для загрузки или передачи вирусов или любого другого типа вредоносного кода">To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="5. AI-Generated Content Policy" data-lang-ru="5. Политика контента, созданного ИИ">5. AI-Generated Content Policy</h2>
              <p data-lang-en="All content available through our Service is AI-generated and does not depict real individuals. Users acknowledge and agree that:" data-lang-ru="Весь контент, доступный через наш Сервис, создан с помощью ИИ и не изображает реальных людей. Пользователи признают и соглашаются с тем, что:">
                All content available through our Service is AI-generated and does not depict real individuals. Users acknowledge and agree that:
              </p>
              <ul>
                <li data-lang-en="All models and personalities are synthetic and computer-generated" data-lang-ru="Все модели и личности являются синтетическими и созданными компьютером">All models and personalities are synthetic and computer-generated</li>
                <li data-lang-en="No real person's likeness, identity, or personal information is used without explicit consent" data-lang-ru="Никакое сходство, личность или личная информация реального человека не используется без явного согласия">No real person's likeness, identity, or personal information is used without explicit consent</li>
                <li data-lang-en="Users are responsible for ethical use of AI-generated content" data-lang-ru="Пользователи несут ответственность за этичное использование контента, созданного ИИ">Users are responsible for ethical use of AI-generated content</li>
              </ul>
            </section>

            <section>
              <h2 data-lang-en="6. Intellectual Property Rights" data-lang-ru="6. Права интеллектуальной собственности">6. Intellectual Property Rights</h2>
              <p data-lang-en="The Service and its original content, features, and functionality are and will remain the exclusive property of AI-People and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent." data-lang-ru="Сервис и его оригинальный контент, функции и функциональность являются и будут оставаться исключительной собственностью AI-People и его лицензиаров. Сервис защищен авторским правом, товарными знаками и другими законами. Наши товарные знаки и торговый стиль не могут использоваться в связи с любым продуктом или услугой без нашего предварительного письменного согласия.">
                The Service and its original content, features, and functionality are and will remain the exclusive property of AI-People and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            <section>
              <h2 data-lang-en="7. Payment Terms (Effective Upon Launch)" data-lang-ru="7. Условия платежей (вступают в силу при запуске)">7. Payment Terms (Effective Upon Launch)</h2>
              <p data-lang-en="Upon marketplace launch on November 1, 2025, payments for content purchases will be processed through USDT cryptocurrency transactions on Tron and BSC networks. All sales will be final with a 72-hour verification period. Creators receive 75% of sales (platform fee 25%). Minimum withdrawal: 100 USDT. These terms become effective upon platform launch." data-lang-ru="При запуске маркетплейса 1 ноября 2025 года платежи за покупки контента будут обрабатываться через криптовалютные транзакции USDT в сетях Tron и BSC. Все продажи будут окончательными с периодом проверки 72 часа. Креаторы получают 75% от продаж (платформенная комиссия 25%). Минимальный вывод: 100 USDT. Эти условия вступают в силу при запуске платформы.">
                Upon marketplace launch on November 1, 2025, payments for content purchases will be processed through USDT cryptocurrency transactions on Tron and BSC networks. All sales will be final with a 72-hour verification period. Creators receive 75% of sales (platform fee 25%). Minimum withdrawal: 100 USDT. These terms become effective upon platform launch.
              </p>
            </section>

            <section>
              <h2 data-lang-en="8. Disclaimers" data-lang-ru="8. Отказ от ответственности">8. Disclaimers</h2>
              <p data-lang-en="The information on this Service is provided on an 'as is' basis. To the fullest extent permitted by law, AI-People excludes all representations, warranties, conditions and terms relating to our Service and the use of this Service." data-lang-ru="Информация в данном Сервисе предоставляется на условиях «как есть». В максимальной степени, разрешенной законом, AI-People исключает все заявления, гарантии, условия и положения, относящиеся к нашему Сервису и использованию данного Сервиса.">
                The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, AI-People excludes all representations, warranties, conditions and terms relating to our Service and the use of this Service.
              </p>
            </section>

            <section>
              <h2 data-lang-en="9. Limitation of Liability" data-lang-ru="9. Ограничение ответственности">9. Limitation of Liability</h2>
              <p data-lang-en="In no event shall AI-People, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service." data-lang-ru="Ни при каких обстоятельствах AI-People, а также его директора, сотрудники, партнеры, агенты, поставщики или филиалы не несут ответственности за любые косвенные, случайные, специальные, последующие или штрафные убытки, включая, помимо прочего, потерю прибыли, данных, использования, деловой репутации или других нематериальных потерь, возникающих в результате использования вами Сервиса.">
                In no event shall AI-People, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 data-lang-en="10. Governing Law" data-lang-ru="10. Применимое право">10. Governing Law</h2>
              <p data-lang-en="These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Delaware." data-lang-ru="Настоящие Условия должны толковаться и регулироваться законами штата Делавэр, Соединенные Штаты Америки, без учета положений о коллизии законов. Любые споры, возникающие из настоящих Условий, подлежат исключительной юрисдикции судов штата Делавэр.">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Delaware.
              </p>
            </section>

            <section>
              <h2 data-lang-en="11. Changes to Terms" data-lang-ru="11. Изменения условий">11. Changes to Terms</h2>
              <p data-lang-en="We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect." data-lang-ru="Мы оставляем за собой право по нашему собственному усмотрению изменять или заменять настоящие Условия в любое время. Если пересмотр является существенным, мы постараемся предоставить уведомление как минимум за 30 дней до вступления в силу любых новых условий.">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 data-lang-en="12. Contact Information" data-lang-ru="12. Контактная информация">12. Contact Information</h2>
              <p data-lang-en="If you have any questions about these Terms of Service, please contact us at legal@ai-people.com" data-lang-ru="Если у вас есть вопросы по настоящим Условиям обслуживания, пожалуйста, свяжитесь с нами по адресу legal@ai-people.com">
                If you have any questions about these Terms of Service, please contact us at legal@ai-people.com
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
