"use client";

import Image from "next/image";
import Footer from "../../components/Footer";
import HeaderWithMenu from "../../components/HeaderWithMenu";

export default function BuyerInfoPage() {

  return (
    <div className="container home-page">
      <HeaderWithMenu homeHref="/" />

      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025
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
          <h1 className="title"><span className="gradient-text" data-lang-en="Join as Buyer" data-lang-ru="Присоединяйтесь как Покупатель">Join as Buyer</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Access premium AI models and hyperrealistic virtual influencers for your business" data-lang-ru="Доступ к премиум AI-моделям и гиперреалистичным виртуальным инфлюенсерам для вашего бизнеса">Access premium AI models and hyperrealistic virtual influencers for your business</h2>
          <h3 className="hero-description" data-lang-en="Discover the world's first curated marketplace for professional AI content. Get ready-made packages or order custom content for your marketing campaigns." data-lang-ru="Откройте для себя первый в мире курируемый маркетплейс профессионального AI-контента. Получайте готовые пакеты или заказывайте индивидуальный контент для ваших маркетинговых кампаний.">Discover the world's first curated marketplace for professional AI content. Get ready-made packages or order custom content for your marketing campaigns.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <p data-lang-en="🔥 The Future of Earning and Content — Here! 🔥 Imagine having a whole team of dozens of AI models at your fingertips, ready to work 24/7 without days off. You get access not just to photos and videos — you unlock new revenue streams, promotion tools, and limitless creative possibilities." data-lang-ru="🔥 Будущее заработка и контента — здесь! 🔥 Представьте, что у вас под рукой целая команда из десятков ИИ-моделей, готовых работать круглосуточно без выходных. Вы получаете доступ не просто к фото и видео — вы открываете новые источники дохода, инструменты для продвижения и безграничные возможности для креатива.">
              🔥 The Future of Earning and Content — Here! 🔥 Imagine having a whole team of dozens of AI models at your fingertips, ready to work 24/7 without days off. You get access not just to photos and videos — you unlock new revenue streams, promotion tools, and limitless creative possibilities.
            </p>
            
            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="What You Get:" data-lang-ru="Что вы получаете:">What You Get:</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Access to 18+ premium AI models with unique styles and looks — create content that will stand out on OnlyFans, Patreon, TikTok or in your own projects." data-lang-ru="Доступ к 18+ премиум ИИ-моделям с уникальными стилями и образами — создавайте контент, который будет выделяться на ОнлиФанс, Патреон, ТикТок или в собственных проектах.">Access to 18+ premium AI models with unique styles and looks — create content that will stand out on OnlyFans, Patreon, TikTok or in your own projects.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="500+ ready-made photos in the most in-demand niches: lifestyle, fitness, business, fashion, gaming and romantic scenarios — use them for ads, social media, websites or resale." data-lang-ru="500+ готовых фото в самых востребованных нишах: образ жизни, фитнес, бизнес, мода, геймерские и романтические сценарии — используйте их для рекламы, соцсетей, сайтов или перепродажи.">500+ ready-made photos in the most in-demand niches: lifestyle, fitness, business, fashion, gaming and romantic scenarios — use them for ads, social media, websites or resale.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="100+ exclusive premium-quality videos — the perfect tool for promoting brands, personal pages and monetizing on subscription services." data-lang-ru="100+ эксклюзивных видео премиум-качества — идеальный инструмент для продвижения брендов, личных страниц и монетизации в подписочных сервисах.">100+ exclusive premium-quality videos — the perfect tool for promoting brands, personal pages and monetizing on subscription services.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Ability to order custom content for your needs: marketing, promotion, personal use or commercial projects." data-lang-ru="Возможность заказать индивидуальный контент под ваши задачи: маркетинг, продвижение, личное использование или коммерческие проекты.">Ability to order custom content for your needs: marketing, promotion, personal use or commercial projects.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Priority support and secure communication within the platform." data-lang-ru="Приоритетная поддержка и безопасная связь внутри платформы.">Priority support and secure communication within the platform.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Regular updates with new models and content — you'll always be one step ahead of the competition." data-lang-ru="Регулярные обновления с новыми моделями и контентом — всегда будете на шаг впереди конкурентов.">Regular updates with new models and content — you'll always be one step ahead of the competition.</span>
              </div>
            </div>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="💡 How this will help you earn and save time?" data-lang-ru="💡 Как это поможет вам зарабатывать и экономить время?">💡 How this will help you earn and save time?</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Create subscription services (OnlyFans, Patreon, Boosty) without real models. AI content already sells and gathers subscribers." data-lang-ru="Создавайте подписочные сервисы (ОнлиФанс, Патреон, Бусти) без участия реальных моделей. ИИ-контент уже продаётся и собирает подписчиков.">Create subscription services (OnlyFans, Patreon, Boosty) without real models. AI content already sells and gathers subscribers.</li>
              <li data-lang-en="Promote your business — use unique images and videos for advertising products, building a brand or increasing sales." data-lang-ru="Продвигайте бизнес — используйте уникальные изображения и видео для рекламы продуктов, построения бренда или увеличения продаж.">Promote your business — use unique images and videos for advertising products, building a brand or increasing sales.</li>
              <li data-lang-en="Become a reseller — resell ready-made photo and video packages on digital content platforms." data-lang-ru="Станьте реселлером — перепродавайте готовые пакеты фото и видео на платформах с цифровым контентом.">Become a reseller — resell ready-made photo and video packages on digital content platforms.</li>
              <li data-lang-en="Save time and money — no need to hire models, photographers, videographers. Everything is ready." data-lang-ru="Экономьте время и деньги — не нужно нанимать моделей, фотографов, видеографов. Всё уже готово.">Save time and money — no need to hire models, photographers, videographers. Everything is ready.</li>
              <li data-lang-en="Get custom content — which means you'll always have materials that no one else has." data-lang-ru="Получайте контент под заказ — а значит, всегда будете иметь материалы, которых нет ни у кого.">Get custom content — which means you'll always have materials that no one else has.</li>
            </ul>
            
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="⚡ This is not just a collection — it's your tool for monetizing ideas and reaching a new level in the digital space. Subscribe to the waiting list now and get access to premium content and first releases before everyone else!" data-lang-ru="⚡ Это не просто коллекция — это ваш инструмент для монетизации идей и выхода на новый уровень в цифровом пространстве. Подпишитесь на лист ожидания сейчас и получите доступ к премиум-контенту и первым релизам раньше всех!">⚡ This is not just a collection — it's your tool for monetizing ideas and reaching a new level in the digital space. Subscribe to the waiting list now and get access to premium content and first releases before everyone else!</p>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Your Responsibilities:" data-lang-ru="Ваши обязанности:">Your Responsibilities:</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Use all purchased content exclusively for legal and legitimate purposes" data-lang-ru="Используйте весь приобретенный контент исключительно в законных и легитимных целях">Use all purchased content exclusively for legal and legitimate purposes</li>
              <li data-lang-en="Respect creator rights, copyrights, and intellectual property" data-lang-ru="Уважайте права креаторов, авторские права и интеллектуальную собственность">Respect creator rights, copyrights, and intellectual property</li>
              <li data-lang-en="Follow platform terms of service and community guidelines" data-lang-ru="Соблюдайте условия использования платформы и правила сообщества">Follow platform terms of service and community guidelines</li>
              <li data-lang-en="Maintain respectful and professional communication through the platform" data-lang-ru="Поддерживайте уважительное и профессиональное общение через платформу">Maintain respectful and professional communication through the platform</li>
              <li data-lang-en="Provide clear requirements and feedback for custom orders" data-lang-ru="Предоставляйте четкие требования и обратную связь для индивидуальных заказов">Provide clear requirements and feedback for custom orders</li>
              <li data-lang-en="Pay for services promptly and according to agreed terms" data-lang-ru="Оплачивайте услуги своевременно и согласно согласованным условиям">Pay for services promptly and according to agreed terms</li>
              <li data-lang-en="Report any inappropriate content or behavior to platform moderators" data-lang-ru="Сообщайте о любом неподходящем контенте или поведении модераторам платформы">Report any inappropriate content or behavior to platform moderators</li>
            </ul>

            <div className="call-to-action" style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/auth/buyer" className="btn primary" data-lang-en="Continue to Registration" data-lang-ru="Продолжить регистрацию">Continue to Registration</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



