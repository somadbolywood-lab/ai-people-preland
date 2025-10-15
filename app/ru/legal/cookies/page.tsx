"use client";

import FooterRU from "../../../components/FooterRU";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Head from "next/head";
import HreflangLinks from "../../../components/HreflangLinks";
import HeaderWithMenu from "../../../components/HeaderWithMenu";
import { useLanguage } from "../../../hooks/useLanguage";

export default function CookiePolicyRuPage() {
  useLanguage({ forceLanguage: 'ru' });

  return (
    <>
      <Head>
        <title>Политика файлов cookie — AI-PEOPLE.IO</title>
        <meta name="description" content="Политика cookie AI-PEOPLE.IO: что такое cookie, виды (необходимые, аналитические, функциональные, маркетинговые), управление и контакты." />
        <link rel="canonical" href="https://ai-people.io/ru/legal/cookies" />
        <link rel="alternate" href="https://ai-people.io/legal/cookies" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/cookies" hrefLang="ru" />
        <meta property="og:title" content="Политика файлов cookie — AI-PEOPLE.IO" />
        <meta property="og:description" content="Как AI-PEOPLE.IO использует cookie и как ими управлять." />
        <meta property="og:url" content="https://ai-people.io/ru/legal/cookies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-03.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HreflangLinks currentPath="/ru/legal/cookies" locale="ru" />

      <div className="container">
        <HeaderWithMenu homeHref="/ru" />

        <main className="legal-main">
          <div className="legal-container">
            <h1 className="unified-h1"><span className="gradient-text">Политика использования файлов cookie</span></h1>
            <p className="legal-subtitle">Дата вступления в силу: Октябрь 2025 • Локация: Нью‑Йорк, США • Контакт: support@ai-people.io</p>

            <div className="legal-content">
              <section>
                <h2>1. Что такое cookie</h2>
                <p>Файлы cookie — это небольшие текстовые файлы, сохраняемые на вашем устройстве при посещении сайта. Они помогают распознавать браузер, запоминать настройки и улучшать работу сайта.</p>
              </section>

              <section>
                <h2>2. Виды используемых cookie</h2>
                <h3>a) Необходимые cookie</h3>
                <p>Обеспечивают базовую работу сайта: вход, безопасность, язык.</p>
                <h3>b) Аналитические cookie</h3>
                <p>Используются для анализа поведения и трафика для улучшения удобства и производительности.</p>
                <h3>c) Функциональные cookie</h3>
                <p>Обеспечивают персонализацию — запоминают предпочтения и фильтры контента.</p>
                <h3>d) Маркетинговые cookie</h3>
                <p>Помогают показывать релевантную рекламу и оценивать эффективность кампаний.</p>
              </section>

              <section>
                <h2>3. Как мы используем cookie</h2>
                <ul>
                  <li>Обеспечение безопасного доступа и персонализации</li>
                  <li>Запоминание пользовательских предпочтений</li>
                  <li>Аналитика производительности и оптимизация контента</li>
                  <li>Поддержка маркетинговых кампаний</li>
                </ul>
              </section>

              <section>
                <h2>4. Управление cookie</h2>
                <p>Вы можете отключить/удалить cookie в настройках браузера. Отключение некоторых cookie может повлиять на корректную работу сайта.</p>
                <ul>
                  <li>Блокировка cookie третьих сторон</li>
                  <li>Удаление существующих cookie</li>
                  <li>Уведомление при установке cookie</li>
                </ul>
              </section>

              <section>
                <h2>5. Cookie третьих сторон</h2>
                <ul>
                  <li>Google Analytics — аналитика трафика</li>
                  <li>Meta / Twitter pixels — эффективность рекламы</li>
                </ul>
                <p>Эти сервисы действуют по своим политикам конфиденциальности.</p>
              </section>

              <section>
                <h2>6. Обновления политики</h2>
                <p>Мы можем периодически обновлять данную Политику cookie. Изменения вступают в силу после публикации на этой странице. Дата «вступления в силу» указана выше.</p>
              </section>

              <section>
                <h2>7. Контакты</h2>
                <p>По вопросам, связанным с cookie: support@ai-people.io<br/>Нью‑Йорк, США</p>
              </section>
            </div>
          </div>
        </main>

        <FooterRU />
      </div>
    </>
  );
}


