"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import FooterRU from "../../components/FooterRU";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import MetaTags from "../../components/MetaTags";
import { useLanguage } from "../../hooks/useLanguage";

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

export default function AllBlogsPage() {
  useLanguage();

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 4; // 2x2 grid for better pagination testing

  useEffect(() => {
    // Load blog posts from API
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/blog');
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setBlogPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="container all-blogs-page">
        <HeaderWithMenu homeHref="/ru" />
        <div className="loading-container">
          <div className="gradient-spinner">
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
          </div>
          <p className="loading-text" data-lang-en="Loading all blogs..." data-lang-ru="Загрузка всех блогов...">Загрузка всех блогов...</p>
        </div>
        <FooterRU />
      </div>
    );
  }

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;

    // Calculate start and end page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Add previous button
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination-btn pagination-prev"
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
      );
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-btn pagination-number ${i === currentPage ? 'active' : ''}`}
          aria-label={`Page ${i}`}
        >
          {i}
        </button>
      );
    }

    // Add next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="pagination-btn pagination-next"
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      );
    }

    return (
      <div className="pagination-container">
        <div className="pagination">
          {pages}
        </div>
        <div className="pagination-info">
          <span data-lang-en={`Page ${currentPage} of ${totalPages}`} data-lang-ru={`Страница ${currentPage} из ${totalPages}`}>
            Page {currentPage} of {totalPages}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <MetaTags
        title="Все статьи блога AI-People - Полная коллекция"
        description="Просмотрите нашу полную коллекцию статей об AI-моделях, виртуальных инфлюенсерах и цифровом маркетинге. Экспертные инсайты, тренды и истории успеха."
        keywords="AI статьи, блог виртуальных инфлюенсеров, коллекция AI моделей, инсайты цифрового маркетинга, AI-генерированный контент"
        url="https://ai-people.com/ru/all-blogs"
        locale="ru"
        alternateLocale="en"
        alternateUrl="https://ai-people.com/all-blogs"
      />
      <div className="container all-blogs-page ru-optimized">
        <HeaderWithMenu homeHref="/ru" />

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

      <main className="all-blogs-main">

        {/* All Blogs Hero */}
        <section className="all-blogs-hero">
          <div className="all-blogs-hero-content">
            <h1 className="unified-h1">
              <span className="gradient-text" data-lang-en="All Blogs" data-lang-ru="Все блоги">Все блоги</span>
            </h1>
            <h2 className="hero-subtitle" data-lang-en="Explore our complete collection of articles about AI models, virtual influencers, and digital marketing" data-lang-ru="Изучите нашу полную коллекцию статей об AI-моделях, виртуальных инфлюенсерах и цифровом маркетинге">Изучите нашу полную коллекцию статей об AI-моделях, виртуальных инфлюенсерах и цифровом маркетинге</h2>
            <h3 className="hero-description" data-lang-en="Create, explore and monetize digital personas created by creators of the new generation. Today is the time when virtual people have real influence. AI-realism that works for you." data-lang-ru="Создавай, исследуй и монетизируй цифровые образы созданные креаторами нового поколения. Сегодня то время, когда виртуальные люди имеют реальное влияние. AI-реализм, который работает на тебя.">Создавай, исследуй и монетизируй цифровые образы созданные креаторами нового поколения. Сегодня то время, когда виртуальные люди имеют реальное влияние. AI-реализм, который работает на тебя.</h3>
          </div>
        </section>

        {/* All Blogs Grid */}
        <section className="all-blogs-grid-section">
          <div className="all-blogs-container">
            <div className="all-blogs-grid">
              {currentPosts.map((post) => (
                <article key={post.id} className="all-blogs-card">
                  <div className="all-blogs-image">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={400} 
                      height={250}
                      className="post-image"
                    />
                  </div>
                  <div className="all-blogs-content">
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

            {/* Pagination */}
            {renderPagination()}
          </div>
        </section>

        {/* Call to Action - Join the revolution block */}
        <section className="all-blogs-newsletter">
          <div className="all-blogs-container">
            <div className="call-to-action" style={{marginTop: '1rem', textAlign: 'center'}}>
              <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Join the AI-Content Revolution</h2>
              <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits.</p>
              <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Перейдите в ">Have questions? Visit our <a href="/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ" data-lang-ru="раздел FAQ">FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наши "> or explore our </span><a href="/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights about AI models and virtual influencers" data-lang-ru="инсайты о виртуальных инфлюенсерах и AI-моделях">expert insights about AI models and virtual influencers</a>.</p>
              <a href="/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Join the Waiting List</span></a>
            </div>
          </div>
        </section>
      </main>

      <FooterRU />
      
      {/* Schema.org Blog Structured Data */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AI-People All Blogs",
            "description": "Complete collection of expert insights on AI models, virtual influencers, and the future of AI-generated content",
            "url": "https://ai-people.com/all-blogs",
            "publisher": {
              "@type": "Organization",
              "name": "AI-People",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ai-people.com/faq/AI-people%20Logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://ai-people.com/blog/${post.id}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": "AI-People Team"
              }
            }))
          })
        }}
      />
      </div>
    </>
  );
}