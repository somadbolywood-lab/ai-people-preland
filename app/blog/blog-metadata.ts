import { Metadata } from 'next';

// Blog articles metadata
export const blogArticles: Record<string, {
  id: number;
  category: string;
  categoryRu: string;
  title: string;
  titleRu: string;
  excerpt: string;
  excerptRu: string;
  date: string;
  author: string;
  authorRu: string;
  image: string;
}> = {
  "1": {
    id: 1,
    category: "AI Technology",
    categoryRu: "AI Технологии",
    title: "AI-Generated Content Marketing 2025: Virtual Models Cut Costs 90%",
    titleRu: "AI-контент маркетинг 2025: Виртуальные модели снижают затраты на 90%",
    excerpt: "How hyperrealistic AI models are revolutionizing digital marketing—discover why Fortune 500 brands are switching to AI-generated content and reducing production costs by 90%.",
    excerptRu: "Как гиперреалистичные AI-модели революционизируют цифровой маркетинг—узнайте почему бренды Fortune 500 переходят на AI-контент и снижают затраты на производство на 90%.",
    date: "2025-09-01",
    author: "Sarah Chen",
    authorRu: "Сара Чен",
    image: "/assets/models/model-01.png",
  },
  "2": {
    id: 2,
    category: "Business Guide",
    categoryRu: "Бизнес-гайд",
    title: "How to Make Money with AI Art: $5K-$25K/Month Creator Guide 2025",
    titleRu: "Как зарабатывать на AI-искусстве: Гайд креатора $5K-$25K/месяц 2025",
    excerpt: "Proven strategies to make money selling AI-generated images—real creators earning $5,000-$25,000/month share their monetization methods, pricing strategies, and growth tactics.",
    excerptRu: "Проверенные стратегии заработка на продаже AI-изображений—реальные креаторы, зарабатывающие $5,000-$25,000/месяц, делятся методами монетизации, ценовыми стратегиями и тактиками роста.",
    date: "2025-09-15",
    author: "Marcus Rodriguez",
    authorRu: "Маркус Родригес",
    image: "/assets/models/model-02.png",
  },
  // ... add more articles
};

export function generateBlogMetadata(id: string): Metadata {
  const article = blogArticles[id];
  
  if (!article) {
    return {
      title: 'Article Not Found | AI-People Blog',
      description: 'The requested blog article could not be found.',
    };
  }

  return {
    title: `${article.title} | AI-People Blog 2025`,
    description: article.excerpt,
    keywords: `${article.category}, AI models, virtual influencers, AI-generated content, ${article.title.split(' ').slice(0, 8).join(' ')}, AI marketplace 2025`,
    authors: [{ name: article.author }],
    publisher: 'AI-People',
    creator: article.author,
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `https://ai-people.io/blog/${id}`,
      images: [{
        url: `https://ai-people.io${article.image}`,
        width: 1200,
        height: 630,
        alt: article.title,
        type: 'image/png',
      }],
      publishedTime: article.date,
      modifiedTime: new Date().toISOString(),
      authors: [article.author],
      section: article.category,
      tags: ['AI models', 'virtual influencers', 'AI-generated content', article.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`https://ai-people.io${article.image}`],
      creator: '@aipeople',
      site: '@aipeople',
    },
    alternates: {
      canonical: `https://ai-people.io/blog/${id}`,
      languages: {
        'en-US': `https://ai-people.io/blog/${id}`,
        'ru-RU': `https://ai-people.io/ru/blog/${id}`,
        'x-default': `https://ai-people.io/blog/${id}`,
      },
    },
    category: article.category,
  };
}

