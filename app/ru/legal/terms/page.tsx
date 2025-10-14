"use client";

import Footer from "../../../components/Footer";
import Head from "next/head";
import HreflangLinks from "../../../components/HreflangLinks";
import HeaderWithMenu from "../../../components/HeaderWithMenu";

export default function TermsRuPage() {
  return (
    <>
      <Head>
        <title>Пользовательское соглашение — AI-PEOPLE.IO</title>
        <meta name="description" content="Пользовательское соглашение AI-PEOPLE.IO: условия использования, возраст, аккаунты, ИС, поведение, подписка, ответственность." />
        <link rel="canonical" href="https://ai-people.io/ru/legal/terms" />
        <link rel="alternate" href="https://ai-people.io/legal/terms" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/terms" hrefLang="ru" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:title" content="Пользовательское соглашение — AI-PEOPLE.IO" />
        <meta property="og:description" content="Основные условия использования маркетплейса AI-PEOPLE.IO." />
        <meta property="og:url" content="https://ai-people.io/ru/legal/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-02.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Пользовательское соглашение AI-PEOPLE.IO",
            "url": "https://ai-people.io/ru/legal/terms",
            "inLanguage": "ru",
            "version": "2025-10",
            "publisher": {
              "@type": "Organization",
              "name": "AI-PEOPLE.IO",
              "url": "https://ai-people.io"
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "AI-PEOPLE.IO",
              "url": "https://ai-people.io"
            }
          })
        }}
      />
      <HreflangLinks currentPath="/ru/legal/terms" locale="ru" />

      <div className="container">
        <HeaderWithMenu homeHref="/ru" />

        <main className="legal-main">
          <div className="legal-container">
            <h1 className="legal-title"><span className="gradient-text">Пользовательское соглашение — AI-PEOPLE.IO</span></h1>
            <p className="legal-subtitle">Дата вступления в силу: Октябрь 2025 • Локация: Нью‑Йорк, США • Контакт: support@ai-people.io</p>

            <div className="legal-content">
              <section>
                <h2>1. Принятие условий</h2>
                <p>Посещая AI-PEOPLE.IO или создавая аккаунт, вы подтверждаете, что прочли, поняли и согласны с настоящими условиями и Политикой конфиденциальности. Если вы не согласны, пожалуйста, прекратите использование сервиса.</p>
              </section>

              <section>
                <h2>2. Описание сервиса</h2>
                <p>AI-PEOPLE.IO — маркетплейс AI‑моделей: креаторы размещают и продают AI‑контент (изображения, видео, голос и т. д.), а заказчики покупают или заказывают модели для личного и коммерческого использования. Доступ к части функционала и каталогов может предоставляться по подписке. Регистрация бесплатна; платный доступ будет введён позже с прозрачными тарифами.</p>
              </section>

              <section>
                <h2>3. Возрастные ограничения</h2>
                <p>Платформа доступна пользователям 18+. Регистрируясь, вы подтверждаете достоверность данных и дееспособность заключать соглашения.</p>
              </section>

              <section>
                <h2>4. Аккаунты пользователей</h2>
                <p>Для доступа к отдельным функциям требуется аккаунт. Вы отвечаете за конфиденциальность учётных данных и действия в аккаунте. Мы можем блокировать аккаунты, нарушающие правила.</p>
              </section>

              <section>
                <h2>5. Интеллектуальная собственность</h2>
                <p>Все AI‑модели, визуальные и текстовые материалы на AI‑PEOPLE.IO защищены авторским правом. Запрещено копирование и распространение без разрешения. Креаторы сохраняют права на контент и предоставляют Платформе ограниченную лицензию на демонстрацию и продвижение в рамках маркетплейса.</p>
              </section>

              <section>
                <h2>6. Подписки и оплата</h2>
                <p>Регистрация бесплатна. Доступ к премиум‑функциям и каталогам — по подписке. При запуске платных опций будут опубликованы условия оплаты и возврата.</p>
              </section>

              <section>
                <h2>7. Поведение пользователей</h2>
                <p>Запрещено размещать незаконный/вредоносный контент, выдавать себя за других, совершать мошенничество, нарушать законы и права третьих лиц. Нарушения ведут к блокировке.</p>
              </section>

              <section>
                <h2>8. Ограничение гарантий</h2>
                <p>Сервис предоставляется «как есть» и «по мере доступности». Не гарантируем бесперебойную работу или отсутствие ошибок. Платформа не несёт ответственность за контент, созданный пользователями или ИИ.</p>
              </section>

              <section>
                <h2>9. Ограничение ответственности</h2>
                <p>AI‑PEOPLE.IO не несёт ответственности за косвенные, случайные или последующие убытки, возникшие при использовании платформы.</p>
              </section>

              <section>
                <h2>10. Изменения условий</h2>
                <p>Мы можем обновлять Соглашение. Актуальная версия всегда доступна на этой странице с указанием даты изменения.</p>
              </section>

              <section>
                <h2>11. Контакты</h2>
                <p>По вопросам условий использования: support@ai-people.io<br/>Нью‑Йорк, США</p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}


