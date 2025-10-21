"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderWithMenu from "../components/HeaderWithMenu";
import MetaTags from "../components/MetaTags";
import { useLanguage } from "../hooks/useLanguage";

export interface BlogPost {
  id: number;
  category: string;
  categoryRu: string;
  title: string;
  titleRu: string;
  excerpt: string;
  excerptRu: string;
  date: string;
  readTime: string;
  readTimeRu: string;
  image: string;
  featured: boolean;
}

export default function BlogPage() {
  useLanguage({ forceLanguage: 'en' });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load blog posts from API
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/blog');
        const posts = await response.json();
        setBlogPosts(posts);
        setFeaturedPosts(posts.filter((post: BlogPost) => post.featured).slice(0, 3));
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setBlogPosts([]);
        setFeaturedPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="container blog-page">
        <HeaderWithMenu homeHref="/" />
        <div className="loading-container">
          <div className="gradient-spinner">
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
          </div>
          <p className="loading-text" data-lang-en="Loading blog..." data-lang-ru="Загрузка блога...">Loading blog...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <MetaTags
        title="AI-People Blog - Expert Insights on Virtual Influencers"
        description="Discover the latest trends in AI-generated content, virtual influencer marketing, and digital personas. Expert insights on monetization strategies and success stories."
        keywords="AI blog, virtual influencers, AI models, digital marketing, AI-generated content, virtual influencer trends"
        url="https://ai-people.com/blog"
        locale="en"
        alternateLocale="ru"
        alternateUrl="https://ai-people.com/ru/blog"
      />
      <div className="container blog-page">
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
            <h1 className="unified-h1">
              <span className="gradient-text" data-lang-en="Blog" data-lang-ru="Блог">Blog</span>
            </h1>
            <h2 className="hero-subtitle" data-lang-en="Virtual influencer trends, monetization strategies, success stories of creators" data-lang-ru="Тренды виртуальных инфлюэнсеров, стратегии монетизации, истории успеха креаторов">Virtual influencer trends, monetization strategies, success stories of creators</h2>
            <h3 className="hero-description" data-lang-en="Create, explore and monetize digital personas created by creators of the new generation. Today is the time when virtual people have real influence. AI-realism that works for you." data-lang-ru="Создавай, исследуй и монетизируй цифровые образы созданные креаторами нового поколения. Сегодня то время, когда виртуальные люди имеют реальное влияние. AI-реализм, который работает на тебя.">Create, explore and monetize digital personas created by creators of the new generation. Today is the time when virtual people have real influence. AI-realism that works for you.</h3>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="blog-featured">
          <div className="blog-container">
            <h2 className="section-title" data-lang-en="Featured Articles" data-lang-ru="Избранные статьи">Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <article key={post.id} className="featured-card">
                  <div className="featured-image">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={600} 
                      height={400}
                      className="post-image"
                    />
                  </div>
                  <div className="featured-content">
                    <span className="post-category" data-lang-en={post.category} data-lang-ru={post.categoryRu}>{post.category}</span>
                    <h3 className="post-title" data-lang-en={post.title} data-lang-ru={post.titleRu}>{post.title}</h3>
                    <p className="post-excerpt" data-lang-en={post.excerpt} data-lang-ru={post.excerptRu}>{post.excerpt}</p>
                    <div className="post-meta">
                      <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                      <span className="post-divider">•</span>
                      <span className="post-read-time" data-lang-en={post.readTime} data-lang-ru={post.readTimeRu}>{post.readTime}</span>
                    </div>
                    <a href={`/blog/${post.id}`} className="read-more-btn" data-lang-en="Read Article →" data-lang-ru="Читать статью →">Read Article →</a>
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
                <a href={`/blog/${post.id}`} key={`marquee-${index}`} className="marquee-card">
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


        {/* All Blogs Button */}
        <section className="all-blogs-section">
          <div className="blog-container">
            <div className="all-blogs-btn-container">
              <a href="/all-blogs" className="all-blogs-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="list-icon">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                </svg>
                <span data-lang-en="All Blogs" data-lang-ru="Все блоги">All Blogs</span>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action - Join the revolution block */}
        <section className="blog-newsletter">
          <div className="blog-container">
            <div className="call-to-action" style={{marginTop: '1rem', textAlign: 'center'}}>
              <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Join the AI-Content Revolution</h2>
              <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits.</p>
              <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Перейдите в ">Have questions? Visit our <a href="/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ" data-lang-ru="раздел FAQ">FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наши "> or explore our </span><a href="/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights about AI models and virtual influencers" data-lang-ru="инсайты о виртуальных инфлюенсерах и AI-моделях">expert insights about AI models and virtual influencers</a>.</p>
              <a href="/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Join the Waiting List</span></a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Schema.org Blog Structured Data */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AI-People Blog",
            "description": "Expert insights on AI models, virtual influencers, and the future of AI-generated content",
            "url": "https://ai-people.com/blog",
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
                "headline": "The Future of AI-Generated Content Marketing",
                "description": "Explore how AI-generated content is revolutionizing digital marketing and what it means for businesses in 2025.",
                "url": "https://ai-people.com/blog/1",
                "datePublished": "2025-10-01",
                "author": {
                  "@type": "Person",
                  "name": "AI-People Team"
                }
              },
              {
                "@type": "BlogPosting", 
                "headline": "How to Create Hyperrealistic Virtual Influencers",
                "description": "A comprehensive guide to creating hyperrealistic virtual influencers that engage audiences and drive conversions.",
                "url": "https://ai-people.com/blog/2",
                "datePublished": "2025-10-03",
                "author": {
                  "@type": "Person",
                  "name": "AI-People Team"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "AI Models Marketplace: What Creators Need to Know",
                "description": "Everything creators need to know about selling AI models and virtual influencer content in 2025.",
                "url": "https://ai-people.com/blog/3",
                "datePublished": "2025-10-06",
                "author": {
                  "@type": "Person",
                  "name": "AI-People Team"
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
