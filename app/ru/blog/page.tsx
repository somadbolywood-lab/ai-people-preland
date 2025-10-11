"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";

export default function BlogPage() {
  useHamburgerMenu();
  
  // Set Russian language by default on mount
  useEffect(() => {
    localStorage.setItem('selectedLanguage', 'ru');
    
    // Apply Russian language immediately
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru]');
    elements.forEach(element => {
      const ruText = element.getAttribute('data-lang-ru');
      if (!ruText) return;
      
      const spanElement = element.querySelector('span');
      if (spanElement) {
        spanElement.textContent = ruText;
      } else {
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        element.appendChild(document.createTextNode(ruText));
      }
    });
    
    // Update language selector button
    const langButton = document.querySelector('.language-text');
    if (langButton) {
      langButton.textContent = 'RU';
    }
    
    // Update active state in language menu
    const menuItems = document.querySelectorAll('.language-item');
    menuItems?.forEach(item => {
      item.classList.remove('active');
      if (item.textContent === 'RU') {
        item.classList.add('active');
      }
    });

    // Ensure hamburger menu works after language change
    setTimeout(() => {
      const hamburger = document.getElementById('hamburger');
      const menuPanel = document.getElementById('menuPanel');
      if (hamburger && menuPanel) {
        if (!hamburger.hasAttribute('data-menu-initialized')) {
          console.log('[RU Blog] Re-initializing hamburger menu');
        }
      }
    }, 200);
  }, []);

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
      <header className="topbar">
        <div className="brand">
          <a href="/ru" className="brand-link">
            <Image 
              src="/faq/AI-people Logo.png" 
              alt="AI-People" 
              className="logo-img" 
              width={75} 
              height={75} 
              priority 
              quality={100}
              unoptimized={true}
            />
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
          <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="menuPanel">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      <div className="menu-panel" id="menuPanel" role="menu" aria-hidden="true">
        <a href="/ru" role="menuitem" data-lang-en="Home" data-lang-ru="Главная">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>Home</span>
        </a>
        
        <a href="/ru/faq" role="menuitem" data-lang-en="FAQ" data-lang-ru="FAQ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <span>FAQ</span>
        </a>
        <a href="/ru/blog" role="menuitem" className="active" data-lang-en="Blog" data-lang-ru="Блог">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
          <span>Blog</span>
        </a>
        
      </div>

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
          {Array.from({length:8}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`AI Model 0${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
          {Array.from({length:8}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-0${i+1}.png`} alt={`AI Model 0${i+1}`} width={160} height={100} loading="lazy" /></div>
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
              <h2 data-lang-en="Join the AI Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Join the AI Content Revolution</h2>
              <p data-lang-en="Whether you're a business looking for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery, AI-People is your launchpad. Subscribe now for early access, exclusive features, and special perks reserved for our founding community." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически эффективные высококачественные визуалы, или креатором, готовым продемонстрировать мастерство в AI, AI-People — ваша стартовая площадка. Подпишитесь сейчас для раннего доступа, эксклюзивных функций и специальных привилегий нашего сообщества основателей.">Whether you're a business looking for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery, AI-People is your launchpad. Subscribe now for early access, exclusive features, and special perks reserved for our founding community.</p>
              <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Посетите наш ">Есть вопросы? Посетите наш <a href="/ru/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ page" data-lang-ru="раздел FAQ">раздел FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наш "> или изучите наш </span><a href="/ru/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights on AI models and virtual influencers" data-lang-ru="экспертные инсайты по AI-моделям и виртуальным инфлюенсерам">экспертные инсайты по AI-моделям и виртуальным инфлюенсерам</a>.</p>
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
