"use client";

import { useHamburgerMenu } from "../../../hooks/useHamburgerMenu";
import Footer from "../../../components/Footer";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageSelector from "../../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";
import HreflangLinks from "../../../components/HreflangLinks";

export default function ContentPolicyRuPage() {
  useHamburgerMenu();
  return (
    <>
      <Head>
        <title>Политика контента и 18+ — AI-PEOPLE.IO</title>
        <meta name="description" content="Правила контента на AI-PEOPLE.IO, включая AI‑генерацию и разделы 18+. Этичность, законность, модерация и доступ 18+." />
        <link rel="canonical" href="https://ai-people.io/ru/legal/content-policy" />
        <link rel="alternate" href="https://ai-people.io/legal/content-policy" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/content-policy" hrefLang="ru" />
        <meta property="og:title" content="Политика контента и 18+ — AI-PEOPLE.IO" />
        <meta property="og:description" content="Стандарты контента, маркировка AI‑контента, модерация и возрастной доступ." />
        <meta property="og:url" content="https://ai-people.io/ru/legal/content-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-04.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HreflangLinks currentPath="/ru/legal/content-policy" locale="ru" />

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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="menuPanel"><span className="bar"></span><span className="bar"></span><span className="bar"></span></button>
          </div>
        </header>

        <div className="menu-panel" id="menuPanel" role="menu" aria-hidden="true">
          <a href="/ru" role="menuitem">Главная</a>
          <a href="/ru/about" role="menuitem">О нас</a>
          <a href="/ru/faq" role="menuitem">FAQ</a>
          <a href="/ru/blog" role="menuitem">Блог</a>
          <div className="menu-legal-section">
            <a href="/ru/legal/terms">Условия обслуживания</a> · <a href="/ru/legal/privacy">Политика конфиденциальности</a> · <a href="/ru/legal/cookies">Политика cookie</a> · <a href="/ru/legal/content-policy">Политика контента и 18+</a>
          </div>
        </div>

        <main className="legal-main">
          <div className="legal-container">
            <h1 className="legal-title"><span className="gradient-text">Политика контента и возрастных ограничений — AI-PEOPLE.IO</span></h1>
            <p className="legal-subtitle">Дата вступления в силу: Октябрь 2025 • Локация: Нью‑Йорк, США • Контакт: support@ai-people.io</p>

            <div className="legal-content">
              <section>
                <h2>1. Цель политики</h2>
                <p>Политика определяет стандарты контента на AI‑PEOPLE.IO для обеспечения этичного, законного и безопасного использования AI‑созданных и пользовательских материалов.</p>
              </section>

              <section>
                <h2>2. Общие принципы контента</h2>
                <ul>
                  <li>Соблюдение законов США и международных норм.</li>
                  <li>Соблюдение прав интеллектуальной собственности.</li>
                  <li>Запрещены насилие, ненависть, дискриминация, преследование.</li>
                  <li>Deepfake/имперсонация допустимы только при явной маркировке «AI-generated».</li>
                  <li>Использование образа реальных людей — только при явном согласии.</li>
                </ul>
              </section>

              <section>
                <h2>3. Контент, созданный с помощью ИИ</h2>
                <ul>
                  <li>Маркировать как AI‑generated/виртуальный/синтетический.</li>
                  <li>Избегать вводящего в заблуждение или вредного контента.</li>
                  <li>Соблюдать этические стандарты и ценности сообщества.</li>
                </ul>
              </section>

              <section>
                <h2>4. Чувствительный и 18+ контент</h2>
                <ul>
                  <li>Откровный взрослый контент не размещается на основной части сайта.</li>
                  <li>Раздел 18+ (если будет) — только для подтверждённых 18+ пользователей, с отдельным согласием.</li>
                  <li>Недопустимо включение/подобие реальных людей без согласия.</li>
                  <li>AI‑18+ визуалы — в рамках художественного вымысла и цифрового творчества.</li>
                </ul>
              </section>

              <section>
                <h2>5. Права собственности</h2>
                <p>Авторские права сохраняются за создателями; платформа получает ограниченную неисключительную лицензию на демонстрацию и продвижение внутри экосистемы.</p>
              </section>

              <section>
                <h2>6. Модерация и жалобы</h2>
                <p>Мы можем удалять материалы‑нарушители, блокировать повторных нарушителей и сообщать о противоправных действиях компетентным органам.</p>
                <p>Жалобы: report@ai-people.io</p>
              </section>

              <section>
                <h2>7. Возрастные ограничения и доступ</h2>
                <p>Взрослые разделы будут чётко помечены, отделены и доступны только верифицированным 18+ пользователям.</p>
              </section>

              <section>
                <h2>8. Обновления политики</h2>
                <p>Политика может обновляться. Изменения вступают в силу после публикации на этой странице.</p>
              </section>

              <section>
                <h2>9. Контакты</h2>
                <p>Вопросы по контент‑правилам и возрастным ограничениям: support@ai-people.io<br/>Нью‑Йорк, США</p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}


