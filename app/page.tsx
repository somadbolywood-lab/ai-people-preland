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
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}>
              <Image 
                src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} 
                alt={`Professional hyperrealistic AI model ${i+1} - Premium virtual influencer for commercial marketing campaigns and brand advertising`} 
                title={`AI Model ${i+1} - Hyperrealistic Virtual Influencer`}
                width={160} 
                height={100} 
                loading="lazy" 
              />
            </div>
          ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}>
              <Image 
                src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} 
                alt={`AI-generated virtual model ${i+1} - High-quality digital influencer for social media marketing and e-commerce`} 
                title={`Premium AI Model ${i+1} for Marketing`}
                width={160} 
                height={100} 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="AI-PEOPLE.IO" data-lang-ru="AI-PEOPLE.IO">AI-PEOPLE.IO</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Buy and sell superrealistic virtual influencers" data-lang-ru="Покупайте и продавайте сеперреалистичных виртуальных инфлюэнсеров">Buy and sell superrealistic virtual influencers</h2>
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
            <h2 data-lang-en="AI People — the world's first AI models marketplace and virtual influencers platform." data-lang-ru="AI People — первый в мире маркетплейс AI-моделей и виртуальных инфлюенсеров.">AI People — the world's first AI models marketplace and virtual influencers platform.</h2>
            <p data-lang-en="AI People — the world's first AI models marketplace and virtual influencers platform. We connect AI creators and brands in a new ecosystem where artificial intelligence transforms ideas into hyperrealistic visual content. Discover, buy and collaborate with creators of AI models, photos and videos of ultra-high quality, created for marketing, social media, e-commerce and fan platforms (Fanvue, Fansly, Patreon, OnlyFans and others). AI People — where realism and creativity meet technology." data-lang-ru="AI People — первый в мире маркетплейс AI-моделей и платформа виртуальных инфлюенсеров. Мы соединяем AI-креаторов и бренды в новой экосистеме, где искусственный интеллект превращает идеи в гиперреалистичный визуальный контент. Открывайте, покупайте и сотрудничайте с создателями AI-моделей, фото и видео сверхвысокого качества, созданных для маркетинга, соцсетей, e-commerce и фан-платформ (Fanvue, Fansly, Patreon, OnlyFans и др.). AI People — там, где реализм и креативность встречаются с технологией.">AI People — the world's first AI models marketplace and virtual influencers platform. We connect AI creators and brands in a new ecosystem where artificial intelligence transforms ideas into hyperrealistic visual content. Discover, buy and collaborate with creators of AI models, photos and videos of ultra-high quality, created for marketing, social media, e-commerce and fan platforms (Fanvue, Fansly, Patreon, OnlyFans and others). AI People — where realism and creativity meet technology.</p>
          </div>

          {/* For Buyers */}
          <div ref={buyerRef} className="content-block for-buyers">
            <h2 data-lang-en="For Buyers: Access Premium AI Models & Virtual Influencers" data-lang-ru="Для покупателей: Доступ к премиум AI-моделям и виртуальным инфлюенсерам">For Buyers: Access Premium AI Models & Virtual Influencers</h2>
            <p data-lang-en="Gain instant access to a curated catalog of premium AI models and ready-made photo/video content packages. Perfect for advertising campaigns, social media marketing, branding projects, or any creative initiative requiring professional visuals." data-lang-ru="Получите мгновенный доступ к курированному каталогу премиум AI-моделей и готовых пакетов фото/видео контента. Идеально для рекламных кампаний, маркетинга в соцсетях, брендинговых проектов или любых креативных инициатив, требующих профессиональных визуалов.">Gain instant access to a curated catalog of premium AI models and ready-made photo/video content packages. Perfect for advertising campaigns, social media marketing, branding projects, or any creative initiative requiring professional visuals.</p>
            
            <h3 data-lang-en="Key Benefits:" data-lang-ru="Ключевые преимущества:">Key Benefits:</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem'}}>
              <li data-lang-en="No photographers, models, or studios needed" data-lang-ru="Не нужны фотографы, модели или студии">No photographers, models, or studios needed</li>
              <li data-lang-en="Instant download and deployment" data-lang-ru="Мгновенная загрузка и использование">Instant download and deployment</li>
              <li data-lang-en="Custom content orders from talented AI creators" data-lang-ru="Заказ кастомного контента у талантливых AI-креаторов">Custom content orders from talented AI creators</li>
              <li data-lang-en="Save 90% compared to traditional photoshoots" data-lang-ru="Экономия 90% по сравнению с традиционными фотосессиями">Save 90% compared to traditional photoshoots</li>
              <li data-lang-en="Full commercial licensing included" data-lang-ru="Полная коммерческая лицензия включена">Full commercial licensing included</li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Learn more in our " data-lang-ru="Узнайте больше в нашем ">Learn more in our </span>
              <a href="/blog/1" className="visible-link" data-lang-en="AI-Generated Content Marketing Guide" data-lang-ru="гайде по AI-контент маркетингу">AI-Generated Content Marketing Guide</a>
              <span data-lang-en="." data-lang-ru=".">.</span>
            </p>
            </div>

          {/* For Creators */}
          <div ref={creatorRef} className="content-block for-creators">
            <h2 data-lang-en="For Creators: Monetize Your AI Art & Build Your Brand" data-lang-ru="Для креаторов: Монетизируйте AI-искусство и развивайте бренд">For Creators: Monetize Your AI Art & Build Your Brand</h2>
            <p data-lang-en="Turn your AI generation skills into a thriving business. Upload your hyperrealistic AI models, set your own prices, and earn from every sale. Join creators already making $5,000-$25,000 per month selling virtual influencers and AI-generated content on our platform." data-lang-ru="Превратите свои навыки AI-генерации в процветающий бизнес. Загружайте гиперреалистичные AI-модели, устанавливайте свои цены и зарабатывайте с каждой продажи. Присоединяйтесь к креаторам, уже зарабатывающим $5,000-$25,000 в месяц, продавая виртуальных инфлюенсеров и AI-контент на нашей платформе.">Turn your AI generation skills into a thriving business. Upload your hyperrealistic AI models, set your own prices, and earn from every sale. Join creators already making $5,000-$25,000 per month selling virtual influencers and AI-generated content on our platform.</p>
            
            <h3 data-lang-en="What We Handle For You:" data-lang-ru="Что мы делаем за вас:">What We Handle For You:</h3>
            <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem'}}>
              <li data-lang-en="Secure payments (including cryptocurrency)" data-lang-ru="Безопасные платежи (включая криптовалюту)">Secure payments (including cryptocurrency)</li>
              <li data-lang-en="Marketing and promotion to thousands of buyers" data-lang-ru="Маркетинг и продвижение тысячам покупателей">Marketing and promotion to thousands of buyers</li>
              <li data-lang-en="Customer support and licensing management" data-lang-ru="Поддержка клиентов и управление лицензиями">Customer support and licensing management</li>
              <li data-lang-en="Portfolio showcase tools" data-lang-ru="Инструменты демонстрации портфолио">Portfolio showcase tools</li>
              <li data-lang-en="Analytics dashboard to track earnings" data-lang-ru="Панель аналитики для отслеживания заработка">Analytics dashboard to track earnings</li>
            </ul>
            <p style={{marginTop: '1rem'}}>
              <span data-lang-en="Ready to start earning? Check out our " data-lang-ru="Готовы начать зарабатывать? Изучите наш ">Ready to start earning? Check out our </span>
              <a href="/blog/2" className="visible-link" data-lang-en="$5K-$25K/Month Creator Success Guide" data-lang-ru="гайд успеха креатора на $5K-$25K/месяц">$5K-$25K/Month Creator Success Guide</a>
              <span data-lang-en="." data-lang-ru=".">.</span>
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