"use client";

import { useHamburgerMenu } from "../../../hooks/useHamburgerMenu";
import Footer from "../../../components/Footer";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageSelector from "../../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";
import HreflangLinks from "../../../components/HreflangLinks";
import HeaderWithMenu from "../../../components/HeaderWithMenu";

export default function PrivacyPolicyRuPage() {
  useHamburgerMenu();

  return (
    <>
      <Head>
        <title>Политика конфиденциальности — AI-PEOPLE.IO</title>
        <meta name="description" content="Политика конфиденциальности AI-PEOPLE.IO. Какие данные собираем, как используем и защищаем. Контакт: support@ai-people.io." />
        <link rel="canonical" href="https://ai-people.io/ru/legal/privacy" />
        <link rel="alternate" href="https://ai-people.io/legal/privacy" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/privacy" hrefLang="ru" />
        <meta property="og:title" content="Политика конфиденциальности — AI-PEOPLE.IO" />
        <meta property="og:description" content="Какие данные собираем, как используем и защищаем. Обновлено: Октябрь 2025." />
        <meta property="og:url" content="https://ai-people.io/ru/legal/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-01.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Политика конфиденциальности — AI-PEOPLE.IO" />
        <meta name="twitter:description" content="Политика конфиденциальности AI-PEOPLE.IO." />
        <meta name="twitter:image" content="https://ai-people.io/assets/models/model-01.png" />
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
      <HreflangLinks currentPath="/ru/legal/privacy" locale="ru" />
      <div className="container">
        <HeaderWithMenu homeHref="/ru" />

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


