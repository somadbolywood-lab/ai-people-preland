"use client";
import Image from "next/image";
import { useState } from "react";
import { useScrollBorder } from "./hooks/useScrollBorder";
import { useLanguage } from "./hooks/useLanguage";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import HeaderWithMenu from "./components/HeaderWithMenu";

export default function Page() {
  useLanguage({ forceLanguage: 'en' });
  const { buyerRef, creatorRef } = useScrollBorder();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="container home-page">
      <HeaderWithMenu homeHref="/" />

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}>
              <picture>
                <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                <Image 
                  src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} 
                  alt={`Professional hyperrealistic AI model ${i+1} - Premium virtual influencer for commercial marketing campaigns and brand advertising`} 
                  title={`AI Model ${i+1} - Hyperrealistic Virtual Influencer`}
                  width={320} 
                  height={180} 
                  quality={100}
                  loading="eager" 
                />
              </picture>
            </div>
          ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}>
              <picture>
                <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                <Image 
                  src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} 
                  alt={`AI-generated virtual model ${i+1} - High-quality digital influencer for social media marketing and e-commerce`} 
                  title={`Premium AI Model ${i+1} for Marketing`}
                  width={320} 
                  height={180} 
                  quality={100}
                  loading="eager" 
                />
              </picture>
            </div>
          ))}
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="AI-PEOPLE.IO" data-lang-ru="AI-PEOPLE.IO">AI-PEOPLE.IO</span></h1>
          <h2 className="hero-subtitle" data-lang-en="World's First AI Influencer Marketplace: Buy and Sell Hyperrealistic AI Models for Marketing and Branding" data-lang-ru="Первый маркетплейс виртуальных AI-инфлюенсеров: покупайте и продавайте гиперреалистичные AI-модели для маркетинга и брендинга">World's First AI Influencer Marketplace: Buy and Sell Hyperrealistic AI Models for Marketing and Branding</h2>
          <h3 className="hero-description" data-lang-en="The world's first curated platform for premium AI content. Join today to the community of creators revolutionizing digital marketing." data-lang-ru="Первая в мире курируемая платформа для премиального AI-контента. Присоединяйтесь уже сегодня к сообществу креаторов революционизирующих цифровой маркетинг.">The world's first curated platform for premium AI content. Join today to the community of creators revolutionizing digital marketing.</h3>
          
          {/* Presentation Button */}
          <div className="presentation-btn-container">
            <button 
              className="presentation-btn"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span data-lang-en="Presentation" data-lang-ru="Презентация">Presentation</span>
            </button>
          </div>
        </section>

        {/* Video Modal */}
        <VideoModal 
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoSrc="/video/presentation.mp4"
          youtubeChannel="https://youtube.com/@ai_people_io"
        />

        {/* Main Content */}
        <section className="content-section">
          {/* Why AI-People */}
          <div className="content-block">
            <h2 data-lang-en="AI People — the world's first AI models marketplace" data-lang-ru="AI People — первый в мире маркетплейс AI-моделей">AI People — the world's first AI models marketplace</h2>
            <p data-lang-en="AI People — the world's first AI models marketplace and virtual influencers platform. We connect AI creators and brands in a new ecosystem where artificial intelligence transforms ideas into hyperrealistic visual content. Discover, buy and collaborate with creators of AI models, photos and videos of ultra-high quality, created for marketing, social media, e-commerce and fan platforms (Fanvue, Fansly, Patreon, OnlyFans and others). AI People — where realism and creativity meet technology." data-lang-ru="AI People — первый в мире маркетплейс AI-моделей и платформа виртуальных инфлюенсеров. Мы соединяем AI-креаторов и бренды в новой экосистеме, где искусственный интеллект превращает идеи в гиперреалистичный визуальный контент. Открывайте, покупайте и сотрудничайте с создателями AI-моделей, фото и видео сверхвысокого качества, созданных для маркетинга, соцсетей, e-commerce и фан-платформ (Fanvue, Fansly, Patreon, OnlyFans и др.). AI People — там, где реализм и креативность встречаются с технологией.">AI People — the world's first AI models marketplace and virtual influencers platform. We connect AI creators and brands in a new ecosystem where artificial intelligence transforms ideas into hyperrealistic visual content. Discover, buy and collaborate with creators of AI models, photos and videos of ultra-high quality, created for marketing, social media, e-commerce and fan platforms (Fanvue, Fansly, Patreon, OnlyFans and others). AI People — where realism and creativity meet technology.</p>
          </div>

          {/* For Buyers */}
          <div ref={buyerRef} className="content-block for-buyers">
            <h2 data-lang-en="Buy AI Models — Premium Hyper-Realistic Virtual Influencers for Marketing & Branding" data-lang-ru="Покупайте AI-модели — Премиум гиперреалистичные виртуальные инфлюенсеры для маркетинга и брендинга">Buy AI Models — Premium Hyper-Realistic Virtual Influencers for Marketing & Branding</h2>
            <p data-lang-en="Get instant access to a curated catalog of professional AI models and ready-made photo & video content packs. Perfect for advertising campaigns, social media marketing, branding, e-commerce, and fan platforms (Fanvue, Fansly, Patreon, OnlyFans, and more). Create agency-level visuals without hiring photographers, models, or studios — all powered by advanced artificial intelligence." data-lang-ru="Получите мгновенный доступ к курированному каталогу профессиональных AI-моделей и готовых пакетов фото и видео контента. Идеально для рекламных кампаний, маркетинга в соцсетях, брендинга, e-commerce и фан-платформ (Fanvue, Fansly, Patreon, OnlyFans и др.). Создавайте визуалы агентского уровня без найма фотографов, моделей или студий — всё на основе передового искусственного интеллекта.">Get instant access to a curated catalog of professional AI models and ready-made photo & video content packs. Perfect for advertising campaigns, social media marketing, branding, e-commerce, and fan platforms (Fanvue, Fansly, Patreon, OnlyFans, and more). Create agency-level visuals without hiring photographers, models, or studios — all powered by advanced artificial intelligence.</p>
            
            <h3 className="gradient-text" data-lang-en="Key Benefits" data-lang-ru="Ключевые преимущества">Key Benefits</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem', listStyle: 'none', paddingLeft: '0'}}>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="No photographers, models, or studios needed — everything is AI-generated" data-lang-ru="Не нужны фотографы, модели или студии — всё генерируется AI">No photographers, models, or studios needed — everything is AI-generated</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Instant access & download — start using content right away" data-lang-ru="Мгновенный доступ и загрузка — начните использовать контент сразу">Instant access & download — start using content right away</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Custom content on demand — order exclusive photos or videos from top AI creators" data-lang-ru="Кастомный контент по запросу — заказывайте эксклюзивные фото или видео у топовых AI-креаторов">Custom content on demand — order exclusive photos or videos from top AI creators</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Save up to 90% compared to traditional photo shoots" data-lang-ru="Экономьте до 90% по сравнению с традиционными фотосессиями">Save up to 90% compared to traditional photo shoots</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Full commercial license included with every purchase" data-lang-ru="Полная коммерческая лицензия включена в каждую покупку">Full commercial license included with every purchase</span></li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Learn more in our " data-lang-ru="Узнайте больше в нашем ">Learn more in our </span>
              <a href="/blog/1" className="visible-link" data-lang-en="AI Content Marketing Guide" data-lang-ru="гайде по AI-контент маркетингу">AI Content Marketing Guide</a>
              <span data-lang-en="." data-lang-ru=".">.</span>
            </p>
            </div>

          {/* For Creators */}
          <div ref={creatorRef} className="content-block for-creators">
            <h2 data-lang-en="Sell AI Models — Monetize AI Art & Earn from Your Talent" data-lang-ru="Продавайте AI-модели — монетизируйте AI-искусство и зарабатывайте на своём таланте">Sell AI Models — Monetize AI Art & Earn from Your Talent</h2>
            <p data-lang-en="Turn your AI generation skills into a sustainable source of income. Upload hyperrealistic AI models, set your own prices, and profit from every sale. Join a community of professional creators who build virtual influencers and exclusive AI content for brands, businesses, and fan platforms worldwide." data-lang-ru="Превратите свои навыки AI-генерации в устойчивый источник дохода. Загружайте гиперреалистичные AI-модели, устанавливайте собственные цены и получайте прибыль с каждой продажи. Присоединяйтесь к сообществу профессиональных креаторов, которые создают виртуальных инфлюенсеров и эксклюзивный AI-контент для брендов, бизнеса и фан-платформ по всему миру.">Turn your AI generation skills into a sustainable source of income. Upload hyperrealistic AI models, set your own prices, and profit from every sale. Join a community of professional creators who build virtual influencers and exclusive AI content for brands, businesses, and fan platforms worldwide.</p>
            
            <h3 className="gradient-text" data-lang-en="What We Do For You" data-lang-ru="Что мы делаем за вас">What We Do For You</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem', listStyle: 'none', paddingLeft: '0'}}>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Secure and fast payouts — including cryptocurrency" data-lang-ru="Безопасные и быстрые выплаты — включая криптовалюту">Secure and fast payouts — including cryptocurrency</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Marketing and global promotion — your content will be seen by thousands of buyers" data-lang-ru="Маркетинг и глобальное продвижение — ваш контент увидят тысячи покупателей">Marketing and global promotion — your content will be seen by thousands of buyers</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Customer support and license management — we handle all administration" data-lang-ru="Поддержка клиентов и управление лицензиями — мы берём всё администрирование на себя">Customer support and license management — we handle all administration</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Portfolio showcase tools — stand out among other creators" data-lang-ru="Инструменты для демонстрации портфолио — выделяйтесь среди других креаторов">Portfolio showcase tools — stand out among other creators</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}><span className="gradient-text" style={{marginRight: '0.5rem', fontSize: '1.2em'}}>•</span><span data-lang-en="Analytics dashboard — track views, orders, and income growth in real-time" data-lang-ru="Панель аналитики — отслеживайте просмотры, заказы и рост дохода в реальном времени">Analytics dashboard — track views, orders, and income growth in real-time</span></li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Ready to start earning from AI creativity?" data-lang-ru="Готовы начать зарабатывать на AI-креативе?">Ready to start earning from AI creativity?</span>
            </p>
            <p style={{marginTop: '0.5rem'}}>
              <span data-lang-en="Explore our " data-lang-ru="Изучите наш ">Explore our </span>
              <a href="/blog/2" className="visible-link" data-lang-en="AI People Creator Success Guide" data-lang-ru="Гайд по успеху креатора AI People">AI People Creator Success Guide</a>
              <span data-lang-en=" and learn how to turn creativity into stable income." data-lang-ru=" и узнайте, как превратить творчество в стабильный доход."> and learn how to turn creativity into stable income.</span>
            </p>
            </div>

          {/* Call to Action */}
          <div className="call-to-action" style={{marginTop: '3rem', marginBottom: '4rem', textAlign: 'center'}}>
            <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Join the AI-Content Revolution</h2>
            <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits.</p>
            <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Перейдите в ">Have questions? Visit our <a href="/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ" data-lang-ru="раздел FAQ">FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наши "> or explore our </span><a href="/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights about AI models and virtual influencers" data-lang-ru="инсайты о виртуальных инфлюенсерах и AI-моделях">expert insights about AI models and virtual influencers</a>.</p>
            <a href="/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Join the Waiting List</span></a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}