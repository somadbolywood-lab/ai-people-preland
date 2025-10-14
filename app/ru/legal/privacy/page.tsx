"use client";

import { useHamburgerMenu } from "../../../hooks/useHamburgerMenu";
import Footer from "../../../components/Footer";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageSelector from "../../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";

export default function PrivacyPolicyRuPage() {
  useHamburgerMenu();

  return (
    <>
      <Head>
        <title>Политика конфиденциальности — AI-PEOPLE.IO</title>
        <meta name="description" content="Политика конфиденциальности AI-PEOPLE.IO. Какие данные собираем, как используем и защищаем. Контакт: support@ai-people.io." />
        <link rel="canonical" href="https://ai-people.io/ru/legal/privacy" />
      </Head>
      <div className="container">
        <header className="topbar">
          <div className="brand">
            <a href="/ru" className="brand-link">
              <Image src="/faq/AI-people Logo.png" alt="AI-People" className="logo-img" width={75} height={75} />
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
            <span>Главная</span>
          </a>
          <a href="/ru/about" role="menuitem" data-lang-en="About" data-lang-ru="О нас">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1"/></svg>
            <span>О нас</span>
          </a>
          <a href="/ru/faq" role="menuitem" data-lang-en="FAQ" data-lang-ru="FAQ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>FAQ</span>
          </a>
          <a href="/ru/blog" role="menuitem" data-lang-en="Blog" data-lang-ru="Блог">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
            <span>Блог</span>
          </a>
          <div className="menu-legal-section">
            <a href="/legal/terms" data-lang-en="Terms of Service" data-lang-ru="Условия обслуживания">Условия обслуживания</a> · 
            <a href="/legal/cookies" data-lang-en="Cookie Policy" data-lang-ru="Политика файлов cookie">Политика файлов cookie</a>
          </div>
        </div>

        <main className="legal-main">
          <div className="legal-container">
            <h1 className="legal-title">
              <span className="gradient-text">Политика конфиденциальности — AI-PEOPLE.IO</span>
            </h1>
            <p className="legal-subtitle">Дата вступления в силу: Октябрь 2025 • Локация: Нью-Йорк, США • Контакт: support@ai-people.io</p>

            <div className="legal-content">
              <section>
                <h2>1. Какие данные мы собираем</h2>
                <p>Мы собираем только ту информацию, которая необходима для предоставления качественных услуг:</p>
                <ul>
                  <li>Персональные данные: имя, адрес электронной почты, данные для входа в аккаунт, а также платёжная информация (при её использовании).</li>
                  <li>Технические данные: IP-адрес, тип браузера, операционная система, источник перехода, просмотренные страницы и действия на сайте.</li>
                  <li>Cookies и трекинг: мы используем cookies и аналогичные технологии для улучшения пользовательского опыта, анализа трафика и запоминания предпочтений.</li>
                </ul>
              </section>

              <section>
                <h2>2. Как мы используем полученные данные</h2>
                <ul>
                  <li>Обеспечение работы и улучшение платформы.</li>
                  <li>Управление аккаунтами и предоставление доступа по подписке.</li>
                  <li>Отправка обновлений, новостей и предложений (только при согласии пользователя).</li>
                  <li>Анализ поведения пользователей для повышения качества сервиса.</li>
                  <li>Соблюдение требований законодательства и регуляторов.</li>
                </ul>
              </section>

              <section>
                <h2>3. Членский доступ (Membership Access)</h2>
                <p>Регистрация на AI-PEOPLE.IO бесплатна. Доступ к каталогам AI-моделей и премиум-контенту предоставляется через членскую подписку, которая открывает эксклюзивные возможности, расширенные инструменты и ранний доступ к новым креаторам. Стоимость подписки прозрачна, скрытые комиссии отсутствуют.</p>
              </section>

              <section>
                <h2>4. Защита и хранение данных</h2>
                <p>Мы применяем современные меры безопасности для защиты персональных данных от несанкционированного доступа, изменения или удаления. Данные могут храниться на защищённых серверах в США или других странах, соблюдающих международные стандарты защиты информации.</p>
              </section>

              <section>
                <h2>5. Передача данных третьим лицам</h2>
                <p>Мы не продаём персональные данные пользователей. Передача возможна только в следующих случаях:</p>
                <ul>
                  <li>Партнёрам, обеспечивающим работу сайта (хостинг, аналитика, платежи).</li>
                  <li>Государственным органам — в случаях, предусмотренных законом.</li>
                  <li>Бизнес-партнёрам — только с вашего согласия.</li>
                </ul>
              </section>

              <section>
                <h2>6. Cookies и аналитика</h2>
                <p>Мы используем cookies для персонализации контента, анализа трафика и оценки эффективности рекламы. Вы можете самостоятельно управлять настройками cookies в параметрах браузера.</p>
              </section>

              <section>
                <h2>7. Ваши права</h2>
                <p>Вы имеете право:</p>
                <ul>
                  <li>Получить доступ к своим данным, изменить или удалить их.</li>
                  <li>Отозвать согласие на получение рассылок.</li>
                  <li>Запросить копию данных, хранящихся о вас.</li>
                </ul>
                <p>Для реализации прав напишите на support@ai-people.io.</p>
              </section>

              <section>
                <h2>8. Конфиденциальность несовершеннолетних</h2>
                <p>AI-PEOPLE.IO не предназначен для лиц младше 18 лет. Мы сознательно не собираем и не обрабатываем данные несовершеннолетних пользователей.</p>
              </section>

              <section>
                <h2>9. Изменения политики</h2>
                <p>Мы можем периодически обновлять данную Политику конфиденциальности. Актуальная версия всегда доступна на этой странице, дата обновления указывается вверху документа.</p>
              </section>

              <section>
                <h2>10. Контакты</h2>
                <p>По всем вопросам, связанным с конфиденциальностью, обращайтесь: support@ai-people.io</p>
                <p>Нью-Йорк, США</p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}


