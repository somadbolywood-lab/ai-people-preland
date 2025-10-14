"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import Footer from "../../components/Footer";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import { useLanguage } from "../../hooks/useLanguage";

export default function BlogPage() {
  // Use unified language hook with forced Russian language
  useLanguage({ forceLanguage: 'ru' });

  // SEO-optimized blog posts data
  const blogPosts = [
    {
      id: 1,
      category: "AI Technology",
      categoryRu: "AI Технологии",
      title: "AI-Generated Content Marketing 2025: Virtual Models Cut Costs 90%",
      titleRu: "AI-контент маркетинг 2025: Виртуальные модели снижают затраты на 90%",
      excerpt: "How hyperrealistic AI models are revolutionizing digital marketing—discover why Fortune 500 brands are switching to AI-generated content and reducing production costs by 90%.",
      excerptRu: "Как гиперреалистичные AI-модели революционизируют цифровой маркетинг—узнайте почему бренды Fortune 500 переходят на AI-контент и снижают затраты на производство на 90%.",
      date: "2025-09-01",
      readTime: "8 min read",
      readTimeRu: "8 мин чтения",
      image: "/assets/models/model-01.png",
      featured: true
    },
    {
      id: 2,
      category: "Business Guide",
      categoryRu: "Бизнес-гайд",
      title: "How to Make Money with AI Art: $5K-$25K/Month Creator Guide 2025",
      titleRu: "Как зарабатывать на AI-искусстве: Гайд креатора $5K-$25K/месяц 2025",
      excerpt: "Proven strategies to make money selling AI-generated images—real creators earning $5,000-$25,000/month share their monetization methods, pricing strategies, and growth tactics.",
      excerptRu: "Проверенные стратегии заработка на продаже AI-изображений—реальные креаторы, зарабатывающие $5,000-$25,000/месяц, делятся методами монетизации, ценовыми стратегиями и тактиками роста.",
      date: "2025-09-15",
      readTime: "12 min read",
      readTimeRu: "12 мин чтения",
      image: "/assets/models/model-02.png",
      featured: true
    },
    {
      id: 3,
      category: "Industry Trends",
      categoryRu: "Тренды индустрии",
      title: "Why Top Brands Are Switching to Virtual Influencers: Market Analysis 2025",
      titleRu: "Почему топовые бренды переходят на виртуальных инфлюенсеров: Анализ рынка 2025",
      excerpt: "Explore the explosive growth of virtual influencer marketing and why Fortune 500 companies are investing millions in AI-generated brand ambassadors.",
      excerptRu: "Исследуйте взрывной рост маркетинга виртуальных инфлюенсеров и почему компании Fortune 500 инвестируют миллионы в AI-сгенерированных амбассадоров.",
      date: "2025-09-28",
      readTime: "10 min read",
      readTimeRu: "10 мин чтения",
      image: "/assets/models/model-03.png",
      featured: true
    },
    {
      id: 4,
      category: "AI Models",
      categoryRu: "AI Модели",
      title: "AI Instagram Model Kion Signs Million-Dollar Brand Deals: Virtual Influencer Revolution",
      titleRu: "AI Instagram-модель Kion подписывает многомиллионные контракты: Революция виртуальных инфлюенсеров",
      excerpt: "How AI Instagram model Kion is signing luxury brand deals with Bugatti and Fendi—the virtual influencer phenomenon reshaping fashion marketing and brand partnerships in 2025.",
      excerptRu: "Как AI Instagram-модель Kion подписывает контракты с люксовыми брендами Bugatti и Fendi—феномен виртуальных инфлюенсеров меняет модный маркетинг и брендовые партнерства в 2025.",
      date: "2025-10-06",
      readTime: "7 min read",
      readTimeRu: "7 мин чтения",
      image: "/assets/models/model-04.png",
      featured: true
    },
    {
      id: 5,
      category: "Case Study",
      categoryRu: "Кейс-стади",
      title: "From Zero to $10K/Month: Real Creator Success Story on AI-People",
      titleRu: "От нуля до $10K/месяц: Реальная история успеха креатора на AI-People",
      excerpt: "How one digital artist built a thriving business selling AI-generated content packages in just 6 months.",
      excerptRu: "Как один цифровой художник построил процветающий бизнес, продавая пакеты AI-контента всего за 6 месяцев.",
      date: "2025-10-03",
      readTime: "7 min read",
      readTimeRu: "7 мин чтения",
      image: "/assets/models/model-05.png",
      featured: false
    },
    {
      id: 6,
      category: "Creator Guide",
      categoryRu: "Гайд для креаторов",
      title: "How to Monetize AI Models: What US Creators Need to Know in 2025",
      titleRu: "Как монетизировать AI-модели: что должны знать креаторы в США в 2025 году",
      excerpt: "Complete guide to building a profitable AI content business in the US—legal framework, tax considerations, revenue models, and real earning potential.",
      excerptRu: "Полный гайд по построению прибыльного AI-контент бизнеса в США—юридические рамки, налоговые соображения, модели дохода и реальный потенциал заработка.",
      date: "2025-10-05",
      readTime: "9 min read",
      readTimeRu: "9 мин чтения",
      image: "/assets/models/model-06.png",
      featured: false
    },
    {
      id: 7,
      category: "Future Trends",
      categoryRu: "Тренды будущего",
      title: "Top 5 Virtual Influencer Trends for 2026-2027: The Future of AI Social Media",
      titleRu: "Топ-5 трендов виртуальных инфлюенсеров на 2026–2027: Будущее AI в соцсетях",
      excerpt: "Exclusive predictions: metaverse integration, AI voice cloning, blockchain authenticity, and interactive virtual personalities—discover the 5 game-changing trends reshaping influencer marketing.",
      excerptRu: "Эксклюзивные прогнозы: интеграция с метавселенной, AI-клонирование голоса, блокчейн-аутентичность и интерактивные виртуальные личности—откройте 5 революционных трендов, меняющих инфлюенсер-маркетинг.",
      date: "2025-10-06",
      readTime: "10 min read",
      readTimeRu: "10 мин чтения",
      image: "/assets/models/model-07.png",
      featured: true
    }
  ];


  return (
    <>
      <div className="container blog-page ru-optimized">
      <HeaderWithMenu homeHref="/ru" />

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
            <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
        </div>
      </section>

      <main className="blog-main">

        {/* Blog Hero */}
        <section className="blog-hero">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">
              <span className="gradient-text" data-lang-en="Blog" data-lang-ru="Блог">Блог</span>
            </h1>
            <h2 className="blog-hero-subtitle" data-lang-en="Virtual influencer trends, monetization strategies, success stories of creators" data-lang-ru="Тренды виртуальных инфлюэнсеров, стратегии монетизации, истории успеха креаторов">Тренды виртуальных инфлюэнсеров, стратегии монетизации, истории успеха креаторов</h2>
            <h3 className="blog-hero-description" data-lang-en="Create, explore and monetize digital personas created by creators of the new generation. Today is the time when virtual people have real influence. AI-realism that works for you." data-lang-ru="Создавай, исследуй и монетизируй цифровые образы созданные креаторами нового поколения. Сегодня то время, когда виртуальные люди имеют реальное влияние. AI-реализм, который работает на тебя.">Создавай, исследуй и монетизируй цифровые образы созданные креаторами нового поколения. Сегодня то время, когда виртуальные люди имеют реальное влияние. AI-реализм, который работает на тебя.</h3>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="blog-featured">
          <div className="blog-container">
            <h2 className="section-title" data-lang-en="Featured Articles" data-lang-ru="Избранные статьи">Featured Articles</h2>
            <div className="featured-grid">
              {blogPosts.filter(post => post.featured).slice(0, 3).map((post) => (
                <article key={post.id} className="featured-card">
                  <div className="featured-image">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={600} 
                      height={400}
                      className="post-image"
                    />
                    <span className="post-category" data-lang-en={post.category} data-lang-ru={post.categoryRu}>{post.category}</span>
                  </div>
                  <div className="featured-content">
                    <h3 className="post-title" data-lang-en={post.title} data-lang-ru={post.titleRu}>{post.title}</h3>
                    <p className="post-excerpt" data-lang-en={post.excerpt} data-lang-ru={post.excerptRu}>{post.excerpt}</p>
                    <div className="post-meta">
                      <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                      <span className="post-divider">•</span>
                      <span className="post-read-time" data-lang-en={post.readTime} data-lang-ru={post.readTimeRu}>{post.readTime}</span>
                    </div>
                    <a href={`/ru/blog/${post.id}`} className="read-more-btn" data-lang-en="Read Article →" data-lang-ru="Читать статью →">Читать статью →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee with Latest Posts */}
        <section className="blog-marquee-section">
          <div className="blog-container">
            <h2 className="section-title" data-lang-en="Latest Articles" data-lang-ru="Последние статьи">Latest Articles</h2>
          </div>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...blogPosts, ...blogPosts].map((post, index) => (
                <a href={`/ru/blog/${post.id}`} key={`marquee-${index}`} className="marquee-card">
                  <div className="marquee-image">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={300} 
                      height={180}
                      className="marquee-img"
                    />
                  </div>
                  <div className="marquee-content">
                    <span className="marquee-category" data-lang-en={post.category} data-lang-ru={post.categoryRu}>{post.category}</span>
                    <h3 className="marquee-title" data-lang-en={post.title} data-lang-ru={post.titleRu}>{post.title}</h3>
                    <div className="marquee-meta">
                      <time className="marquee-date">{new Date(post.date).toLocaleDateString('ru-RU', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                      <span className="marquee-read-time" data-lang-en={post.readTime} data-lang-ru={post.readTimeRu}>{post.readTime}</span>
                    </div>
                    <div className="marquee-footer">
                      <span className="marquee-read-more" data-lang-en="Read more →" data-lang-ru="Читать далее →">Читать далее →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action - Join the revolution block */}
        <section className="blog-newsletter">
          <div className="blog-container">
            <div className="call-to-action" style={{marginTop: '1rem', textAlign: 'center'}}>
              <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Присоединяйтесь к революции AI-контента</h2>
              <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.</p>
              <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Перейдите в ">Есть вопросы? Перейдите в <a href="/ru/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ" data-lang-ru="раздел FAQ">раздел FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наши "> или изучите наши </span><a href="/ru/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights about AI models and virtual influencers" data-lang-ru="инсайты о виртуальных инфлюенсерах и AI-моделях">инсайты о виртуальных инфлюенсерах и AI-моделях</a>.</p>
              <a href="/ru/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List — Launching Nov 1, 2025" data-lang-ru="Присоединиться к списку ожидания — Запуск 01.12.2025">Присоединиться к списку ожидания — Запуск 01.12.2025</span></a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Schema.org Blog Structured Data - Russian */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Блог AI-People",
            "description": "Экспертные инсайты по AI-моделям, виртуальным инфлюенсерам и будущему AI-генерированного контента",
            "url": "https://ai-people.com/ru/blog",
            "inLanguage": "ru-RU",
            "publisher": {
              "@type": "Organization",
              "name": "AI-People",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ai-people.com/faq/AI-people%20Logo.png"
              }
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Будущее AI-генерированного контент-маркетинга",
                "description": "Исследуйте, как AI-генерированный контент революционизирует цифровой маркетинг и что это означает для бизнеса в 2025 году.",
                "url": "https://ai-people.com/ru/blog/1",
                "datePublished": "2025-10-08",
                "author": {
                  "@type": "Person",
                  "name": "Команда AI-People"
                }
              },
              {
                "@type": "BlogPosting", 
                "headline": "Как создавать гиперреалистичных виртуальных инфлюенсеров",
                "description": "Полное руководство по созданию гиперреалистичных виртуальных инфлюенсеров, которые вовлекают аудиторию и увеличивают конверсии.",
                "url": "https://ai-people.com/ru/blog/2",
                "datePublished": "2025-10-07",
                "author": {
                  "@type": "Person",
                  "name": "Команда AI-People"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "Маркетплейс AI-моделей: Что нужно знать креаторам",
                "description": "Всё, что креаторам нужно знать о продаже AI-моделей и контента виртуальных инфлюенсеров в 2025 году.",
                "url": "https://ai-people.com/ru/blog/3",
                "datePublished": "2025-10-06",
                "author": {
                  "@type": "Person",
                  "name": "Команда AI-People"
                }
              }
            ]
          })
        }}
      />
    </div>
    </>
  );
}
