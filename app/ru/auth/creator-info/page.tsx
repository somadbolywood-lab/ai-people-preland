"use client";

import Image from "next/image";
import FooterRU from "../../../components/FooterRU";
import HeaderWithMenu from "../../../components/HeaderWithMenu";
import { useLanguage } from "../../../hooks/useLanguage";

export default function CreatorInfoPage() {
  // Use unified language hook - language determined by URL prefix and global state
  useLanguage();

  return (
    <div className="container home-page">
      <HeaderWithMenu homeHref="/ru" />

      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
            🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025
          </span>
        </div>
      </div>

      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
        </div>
      </section>

      <main>
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="Join as Creator" data-lang-ru="Присоединяйтесь как Креатор">Присоединяйтесь как Креатор</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Monetize your AI art and build your brand on the world's first curated AI marketplace" data-lang-ru="Монетизируйте ваше AI-искусство и развивайте бренд на первом в мире курируемом AI маркетплейсе">Монетизируйте ваше AI-искусство и развивайте бренд на первом в мире курируемом AI маркетплейсе</h2>
          <h3 className="hero-description" data-lang-en="Earn from your hyperrealistic AI models with 75% commission, secure payments, and full marketing support." data-lang-ru="Зарабатывайте на гиперреалистичных AI-моделях с комиссией 75%, безопасными платежами и полной маркетинговой поддержкой.">Зарабатывайте на гиперреалистичных AI-моделях с комиссией 75%, безопасными платежами и полной маркетинговой поддержкой.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <p data-lang-en="🚀 Earn from your AI creations with us! Our platform is designed for professionals who know how to work with artificial intelligence and want to monetize their talent on a global level. It's simple: you regularly upload base packages of hyperrealistic AI models (photos and videos) according to platform standards. We fully handle client acquisition, marketing, and transaction guarantees. You receive stable income from each sale and maintain focus on creating quality content." data-lang-ru="🚀 Зарабатывай на своих ИИ-творениях вместе с нами! Наша платформа создана для профессионалов, которые умеют работать с искусственным интеллектом и хотят монетизировать свой талант на глобальном уровне. Всё просто: вы регулярно выкладываете базовые пакеты гиперреалистичных ИИ-моделей (фото и видео) по стандартам платформы. Мы полностью берём на себя привлечение клиентов, маркетинг и гарантии сделки. Вы получаете стабильный доход с каждой продажи и сохраняете фокус на создании качественного контента.">
              🚀 Зарабатывай на своих ИИ-творениях вместе с нами! Наша платформа создана для профессионалов, которые умеют работать с искусственным интеллектом и хотят монетизировать свой талант на глобальном уровне. Всё просто: вы регулярно выкладываете базовые пакеты гиперреалистичных ИИ-моделей (фото и видео) по стандартам платформы. Мы полностью берём на себя привлечение клиентов, маркетинг и гарантии сделки. Вы получаете стабильный доход с каждой продажи и сохраняете фокус на создании качественного контента.
            </p>
            
            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="What We Offer:" data-lang-ru="Что мы предлагаем:">Что мы предлагаем:</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Platform commission only 25% — the rest is yours." data-lang-ru="Комиссия платформы всего 25% — остальное ваше.">Комиссия платформы всего 25% — остальное ваше.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="No KYC up to 10,000 USDT: fast and convenient withdrawal." data-lang-ru="Без КИК до 10 000 ЮЗДТ: быстрый и удобный вывод средств.">Без КИК до 10 000 ЮЗДТ: быстрый и удобный вывод средств.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="The platform acts as a transaction guarantor, protecting both parties." data-lang-ru="Платформа выступает гарантом сделки, страхуя обе стороны.">Платформа выступает гарантом сделки, страхуя обе стороны.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Guaranteed payments — no risk of non-payment or fraud." data-lang-ru="Гарантированные выплаты — никакого риска неоплаты или мошенничества.">Гарантированные выплаты — никакого риска неоплаты или мошенничества.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Anonymity and security: no direct contact between creator and buyer. All orders go through the platform." data-lang-ru="Анонимность и безопасность: у нас нет прямого контакта креатора с покупателем. Все заказы и коммуникации идут через платформу.">Анонимность и безопасность: у нас нет прямого контакта креатора с покупателем. Все заказы и коммуникации идут через платформу.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Marketing support: we promote your materials, you get more reach and sales." data-lang-ru="Маркетинговая поддержка: мы продвигаем ваши материалы, а вы получаете больше охватов и продаж.">Маркетинговая поддержка: мы продвигаем ваши материалы, а вы получаете больше охватов и продаж.</span>
              </div>
            </div>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="🔥 Why is this beneficial for you?" data-lang-ru="🔥 Почему это выгодно именно вам?">🔥 Почему это выгодно именно вам?</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Monetization without risk: you focus on creativity, we bring the buyers." data-lang-ru="Монетизация без риска: вы занимаетесь творчеством, мы приводим покупателей.">Монетизация без риска: вы занимаетесь творчеством, мы приводим покупателей.</li>
              <li data-lang-en="Priority for professionals: we're looking for creators who know how to work with AI, understand trends, and are ready to deliver premium-quality content." data-lang-ru="Приоритет профессионалов: мы ищем креаторов, которые умеют работать с ИИ, понимают тренды и готовы выдавать контент премиум-качества.">Приоритет профессионалов: мы ищем креаторов, которые умеют работать с ИИ, понимают тренды и готовы выдавать контент премиум-качества.</li>
              <li data-lang-en="Special focus on NSFW (18+) segment — one of the most profitable niches where AI opens huge opportunities." data-lang-ru="Особый фокус на НСФВ (18+) сегменте — это одна из самых прибыльных ниш, и именно тут ИИ открывает огромные возможности.">Особый фокус на НСФВ (18+) сегменте — это одна из самых прибыльных ниш, и именно тут ИИ открывает огромные возможности.</li>
              <li data-lang-en="Long-term partnership: we're building an ecosystem where it's profitable to work continuously, not just once." data-lang-ru="Долгосрочное сотрудничество: мы строим экосистему, в которой выгодно работать не разово, а постоянно.">Долгосрочное сотрудничество: мы строим экосистему, в которой выгодно работать не разово, а постоянно.</li>
            </ul>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="🎨 Your role as a creator:" data-lang-ru="🎨 Ваша роль как креатора:">🎨 Ваша роль как креатора:</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Create original and high-quality AI content (models, photos, videos)." data-lang-ru="Создавать оригинальный и качественный ИИ-контент (модели, фото, видео).">Создавать оригинальный и качественный ИИ-контент (модели, фото, видео).</li>
              <li data-lang-en="Maintain high compliance with platform standards." data-lang-ru="Поддерживать высокий уровень соответствия стандартам платформы.">Поддерживать высокий уровень соответствия стандартам платформы.</li>
              <li data-lang-en="Complete custom orders on time." data-lang-ru="Выполнять индивидуальные заказы в срок.">Выполнять индивидуальные заказы в срок.</li>
              <li data-lang-en="Develop your skills and portfolio to be in demand with a global audience." data-lang-ru="Развивать свои навыки и портфолио, чтобы быть востребованным у глобальной аудитории.">Развивать свои навыки и портфолио, чтобы быть востребованным у глобальной аудитории.</li>
            </ul>
            
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="⚡ If you're a professional who wants to really earn from AI content, become part of a new digital market, and get access to a paying audience — join the waiting list now!" data-lang-ru="⚡ Если вы профессионал, который хочет реально зарабатывать на ИИ-контенте, стать частью нового цифрового рынка и получить доступ к платежеспособной аудитории — присоединяйтесь к списку ожидания открытия!">⚡ Если вы профессионал, который хочет реально зарабатывать на ИИ-контенте, стать частью нового цифрового рынка и получить доступ к платежеспособной аудитории — присоединяйтесь к списку ожидания открытия!</p>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Your Responsibilities:" data-lang-ru="Ваши обязанности:">Ваши обязанности:</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Create original, high-quality AI-generated content that meets platform standards" data-lang-ru="Создавайте оригинальный, высококачественный ИИ-контент, соответствующий стандартам платформы">Создавайте оригинальный, высококачественный ИИ-контент, соответствующий стандартам платформы</li>
              <li data-lang-en="Ensure all content is legally compliant and follows platform guidelines" data-lang-ru="Убедитесь, что весь контент соответствует правовым требованиям и следует правилам платформы">Убедитесь, что весь контент соответствует правовым требованиям и следует правилам платформы</li>
              <li data-lang-en="Respect intellectual property rights and avoid copyright infringement" data-lang-ru="Уважайте права интеллектуальной собственности и избегайте нарушения авторских прав">Уважайте права интеллектуальной собственности и избегайте нарушения авторских прав</li>
              <li data-lang-en="Maintain professional communication through the platform with buyers and staff" data-lang-ru="Поддерживайте профессиональное общение через платформу с покупателями и персоналом">Поддерживайте профессиональное общение через платформу с покупателями и персоналом</li>
              <li data-lang-en="Deliver custom orders within agreed timeframes and specifications" data-lang-ru="Выполняйте индивидуальные заказы в согласованные сроки и по требованиям">Выполняйте индивидуальные заказы в согласованные сроки и по требованиям</li>
              <li data-lang-en="Provide accurate descriptions and previews of your content" data-lang-ru="Предоставляйте точные описания и предварительные просмотры контента">Предоставляйте точные описания и предварительные просмотры контента</li>
              <li data-lang-en="Respond promptly to buyer inquiries and support requests" data-lang-ru="Быстро отвечайте на запросы покупателей и обращения в поддержку">Быстро отвечайте на запросы покупателей и обращения в поддержку</li>
              <li data-lang-en="Continuously improve your skills and stay updated with AI technology trends" data-lang-ru="Постоянно совершенствуйте свои навыки и следите за трендами ИИ-технологий">Постоянно совершенствуйте свои навыки и следите за трендами ИИ-технологий</li>
            </ul>

            <div className="call-to-action" style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/ru/auth/creator" className="btn primary" data-lang-en="Continue to Registration" data-lang-ru="Продолжить регистрацию">Продолжить регистрацию</a>
            </div>
          </div>
        </section>
      </main>

      <FooterRU />
    </div>
  );
}

