"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeaderWithMenu from "../../../components/HeaderWithMenu";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FooterRU from "../../../components/FooterRU";

export interface BlogArticle {
  id: number;
  category: {
    en: string;
    ru: string;
  };
  title: {
    en: string;
    ru: string;
  };
  excerpt: {
    en: string;
    ru: string;
  };
  metaDescription: {
    en: string;
    ru: string;
  };
  date: string;
  readTime: {
    en: string;
    ru: string;
  };
  author: {
    en: string;
    ru: string;
  };
  featured: boolean;
  tags: string[];
  content: {
    en: string;
    ru: string;
  };
  faq: {
    en: Array<{ question: string; answer: string }>;
    ru: Array<{ question: string; answer: string }>;
  };
  cta: {
    en: string;
    ru: string;
  };
  image: string;
  ogImage: string;
  gallery: string[];
  publishedAt: string;
  updatedAt: string;
}

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

export default function BlogArticlePage() {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id;
  const [currentLang, setCurrentLang] = useState('ru');
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Get initial language from localStorage
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    setCurrentLang(savedLang);

    // Listen for language changes
    const handleLanguageChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'ru';
      setCurrentLang(newLang);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    
    // Load article data from API
    const loadArticle = async () => {
      try {
        const [articleResponse, postsResponse] = await Promise.all([
          fetch(`/api/blog/${articleId}`),
          fetch('/api/blog')
        ]);
        
        const loadedArticle = await articleResponse.json();
        const allPosts = await postsResponse.json();
        
        setArticle(loadedArticle);
        
        // Load related articles
        const related = allPosts
          .filter((post: BlogPost) => post.id !== loadedArticle?.id)
          .slice(0, 3);
        setRelatedArticles(related);
      } catch (error) {
        console.error('Error loading article:', error);
      }
    };
    
    loadArticle();
    
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, [articleId]);


  if (!article) {
    return (
      <div className="blog-article-page">
        <HeaderWithMenu homeHref="/ru" />
        <div className="article-container">
          <div className="loading-container">
            <div className="gradient-spinner">
              <div className="spinner-dot"></div>
              <div className="spinner-dot"></div>
              <div className="spinner-dot"></div>
              <div className="spinner-dot"></div>
            </div>
            <p className="loading-text">Загрузка статьи...</p>
          </div>
        </div>
        <FooterRU />
      </div>
    );
  }

  const breadcrumbItems = [
    { name: currentLang === 'ru' ? 'Главная' : 'Home', url: currentLang === 'ru' ? '/ru' : '/' },
    { name: currentLang === 'ru' ? 'Блог' : 'Blog', url: currentLang === 'ru' ? '/ru/blog' : '/blog' },
    { name: currentLang === 'ru' ? article.title.ru : article.title.en, url: '' }
  ];

  // FAQ fallbacks (used when article.txt has no FAQ)
  const defaultFaqEn: Array<{ question: string; answer: string }> = [
    {
      question: 'What is an AI model marketplace?',
      answer:
        "It's a platform where brands and creators find and license digital AI models for marketing and visual campaigns.",
    },
    {
      question: 'How is AI-PEOPLE different from regular stock sites?',
      answer:
        'It specializes in hyper-realistic AI models and offers flexible customization and licensing.',
    },
    {
      question: 'Can AI replace creators?',
      answer: 'No. AI augments creativity rather than replacing it.',
    },
  ];

  const defaultFaqRu: Array<{ question: string; answer: string }> = [
    {
      question: 'Что такое маркетплейс AI-моделей?',
      answer:
        'Это платформа, где бренды и креаторы находят и лицензируют цифровых AI-моделей для маркетинга и визуальных кампаний.',
    },
    {
      question: 'Чем AI-PEOPLE отличается от обычных фотостоков?',
      answer:
        'Он специализируется на гиперреалистичных AI-моделях и предлагает гибкую кастомизацию и лицензирование.',
    },
    {
      question: 'Может ли ИИ заменить креаторов?',
      answer: 'Нет. Искусственный интеллект усиливает творчество, а не заменяет его.',
    },
  ];

  const faqItems = currentLang === 'ru'
    ? (article.faq?.ru && article.faq.ru.length > 0 ? article.faq.ru : defaultFaqRu)
    : (article.faq?.en && article.faq.en.length > 0 ? article.faq.en : defaultFaqEn);

  return (
    <div className="blog-article-page">
      {/* Standard Header with Menu */}
      <HeaderWithMenu homeHref={currentLang === 'ru' ? '/ru' : '/'} />

      {/* Breadcrumbs */}
      <div className="article-container">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Article Title - Full Width */}
      <div className="article-title-section">
        <div className="article-container">
          <div className="article-meta-top">
            <span className="article-category">
              {currentLang === 'ru' ? article.category.ru : article.category.en}
            </span>
            <div className="article-meta-info">
              <time className="article-date">{new Date(article.date).toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US')}</time>
              <span className="meta-separator">•</span>
              <span className="article-read-time">
                {currentLang === 'ru' ? article.readTime.ru : article.readTime.en}
              </span>
            </div>
            <button 
              className="back-button"
              onClick={() => router.back()}
              aria-label={currentLang === 'ru' ? 'Назад' : 'Back'}
              title={currentLang === 'ru' ? 'Назад' : 'Back'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M19 12H5M12 19L5 12L12 5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <h1 className="article-title">
            {currentLang === 'ru' ? article.title.ru : article.title.en}
          </h1>
          
          {/* Excerpt/Description as H2 */}
          <h2 className="article-excerpt">
            {currentLang === 'ru' ? article.excerpt.ru : article.excerpt.en}
          </h2>
        </div>
      </div>

      {/* Article Hero Section with Floating Image */}
      <div className="article-hero-section">
        <div className="article-container">

          <div className="article-hero-layout">
            {/* Hero Image - Floating Left */}
            <div className="article-hero-image-float">
              <Image 
                src={article.image} 
                alt={currentLang === 'ru' ? article.title.ru : article.title.en} 
                width={400} 
                height={300}
                priority
                className="hero-img-float"
              />
            </div>

            <div className="article-hero-content">
              <p className="hero-intro-text">
                {currentLang === 'ru' ? 
                  article.content.ru.split('\n\n')[0] : 
                  article.content.en.split('\n\n')[0]
                }
              </p>
            </div>
          </div>
            </div>
          </div>

          {/* Article Content */}
      <main className="article-main">
        <div className="article-container">
          <article className="article-content">
            <div 
              className="article-body" 
              dangerouslySetInnerHTML={{ 
                __html: currentLang === 'ru' ? article.content.ru : article.content.en 
              }}
            />

        </article>
        </div>
      </main>

      {/* FAQ Section */}
      {faqItems && faqItems.length > 0 && (
        <section className="article-faq-section">
          <div className="article-container">
            <h2 className="faq-section-title">
              {currentLang === 'ru' ? 'Частые вопросы' : 'FAQ'}
            </h2>
            <div className="faq-grid">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-card">
                  <h3 className="faq-question gradient-text">{item.question}</h3>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Topics (Tags) and Social Sharing */}
      {article.tags && article.tags.length > 0 && (
        <section className="article-footer-section">
          <div className="article-container">
            <div className="article-footer">
              <div className="article-topics">
                <span className="topics-label">
                  {currentLang === 'ru' ? 'Темы:' : 'Topics:'}
                </span>
                <div className="topics-list">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="topic-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              {/* Social Sharing */}
              <div className="article-share">
                <span className="share-label">
                  {currentLang === 'ru' ? 'Поделиться статьей:' : 'Share this article:'}
                </span>
                <div className="share-buttons">
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(currentLang === 'ru' ? article.title.ru : article.title.en)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-twitter"
                    aria-label="Share on Twitter"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-linkedin"
                    aria-label="Share on LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-facebook"
                    aria-label="Share on Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://t.me/share/url?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(currentLang === 'ru' ? article.title.ru : article.title.en)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-telegram"
                    aria-label="Share on Telegram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Same as Homepage */}
      <section className="blog-cta-section">
        <div className="article-container">
          <div className="call-to-action">
            <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">
              {currentLang === 'ru' ? 'Присоединяйтесь к революции AI-контента' : 'Join the AI-Content Revolution'}
            </h2>
            <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">
              {currentLang === 'ru' 
                ? 'Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.'
                : 'Whether you\'re a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits.'}
            </p>
            <p>
              {currentLang === 'ru' ? 'Есть вопросы? Перейдите в ' : 'Have questions? Visit our '}
              <a href={currentLang === 'ru' ? '/ru/faq' : '/faq'} style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}}>
                {currentLang === 'ru' ? 'раздел FAQ' : 'FAQ'}
              </a>
              {currentLang === 'ru' ? ' или изучите наши ' : ' or explore our '}
              <a href={currentLang === 'ru' ? '/ru/blog' : '/blog'} style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}}>
                {currentLang === 'ru' ? 'инсайты о виртуальных инфлюенсерах и AI-моделях' : 'expert insights about AI models and virtual influencers'}
              </a>.
            </p>
            <a href="/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}>
              <span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">
                {currentLang === 'ru' ? 'Присоединиться к списку ожидания' : 'Join the Waiting List'}
              </span>
            </a>
          </div>
        </div>
      </section>

        {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="related-articles-section">
          <div className="article-container">
            <h2 className="section-title">
              {currentLang === 'ru' ? 'Похожие статьи' : 'Related Articles'}
            </h2>
            <div className="related-grid-3">
              {relatedArticles.map((relatedArticle) => (
                <a 
                  key={relatedArticle.id} 
                  href={`${currentLang === 'ru' ? '/ru' : ''}/blog/${relatedArticle.id}`}
                  className="related-card"
                >
                    <div className="related-image">
                      <Image 
                        src={relatedArticle.image} 
                      alt={currentLang === 'ru' ? relatedArticle.titleRu : relatedArticle.title} 
                        width={400} 
                        height={250}
                        className="related-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    <span className="related-category">
                      {currentLang === 'ru' ? relatedArticle.categoryRu : relatedArticle.category}
                    </span>
                    </div>
                    <div className="related-content">
                    <h3 className="related-title">
                      {currentLang === 'ru' ? relatedArticle.titleRu : relatedArticle.title}
                    </h3>
                    <p className="related-excerpt">
                      {currentLang === 'ru' ? relatedArticle.excerptRu : relatedArticle.excerpt}
                    </p>
                      <div className="related-meta">
                      <time className="related-date">
                        {new Date(relatedArticle.date).toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US')}
                      </time>
                      <span className="meta-separator">•</span>
                      <span className="related-read-time">
                        {currentLang === 'ru' ? relatedArticle.readTimeRu : relatedArticle.readTime}
                      </span>
                      </div>
                    </div>
                  </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterRU />
    </div>
  );
}
