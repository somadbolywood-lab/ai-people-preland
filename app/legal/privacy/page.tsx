"use client";

import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";
import HreflangLinks from "../../components/HreflangLinks";
import HeaderWithMenu from "../../components/HeaderWithMenu";

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
        <link rel="alternate" href="https://ai-people.io/legal/privacy" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/privacy" hrefLang="ru" />
        <meta property="og:title" content="Privacy Policy — AI-PEOPLE.IO" />
        <meta property="og:description" content="How AI-PEOPLE.IO collects, uses and protects your data. Effective October 2025." />
        <meta property="og:url" content="https://ai-people.io/legal/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-01.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy — AI-PEOPLE.IO" />
        <meta name="twitter:description" content="How AI-PEOPLE.IO collects, uses and protects your data." />
        <meta name="twitter:image" content="https://ai-people.io/assets/models/model-01.png" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Политика конфиденциальности — AI-PEOPLE.IO",
              "inLanguage": "ru",
              "url": "https://ai-people.io/ru/legal/privacy"
            })
          }}
        />
      </Head>
      <HreflangLinks currentPath="/legal/privacy" locale="en" />
    <div className="container">
      <HeaderWithMenu homeHref="/" />

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
