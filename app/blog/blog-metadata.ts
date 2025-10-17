import { Metadata } from 'next';

// Blog articles metadata - will be loaded dynamically from content files
export const blogArticles: Record<string, any> = {};

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

