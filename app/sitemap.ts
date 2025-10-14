import { MetadataRoute } from 'next'

// Force static export compatibility
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-people.io'
  const currentDate = new Date()
  
  // English pages
  const enPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/about`,
        },
      },
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/faq`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/auth/role`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/role`,
        },
      },
    },
  ];
  
  // Russian pages
  const ruPages = [
    {
      url: `${baseUrl}/ru`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/ru/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/faq`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/auth/role`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/role`,
        },
      },
    },
  ];
  
  // Blog posts - English
  const enBlogPosts = [1, 2, 3, 4, 5, 6, 7].map(id => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: id === 1 ? 0.8 : 0.7,
    alternates: {
      languages: {
        ru: `${baseUrl}/ru/blog/${id}`,
      },
    },
  }));
  
  // Blog posts - Russian
  const ruBlogPosts = [1, 2, 3, 4, 5, 6, 7].map(id => ({
    url: `${baseUrl}/ru/blog/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: id === 1 ? 0.8 : 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}/blog/${id}`,
      },
    },
  }));
  
  // Registration pages - English
  const enRegistrationPages = [
    {
      url: `${baseUrl}/auth/buyer`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/buyer`,
        },
      },
    },
    {
      url: `${baseUrl}/auth/creator`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/creator`,
        },
      },
    },
  ];
  
  // Registration pages - Russian
  const ruRegistrationPages = [
    {
      url: `${baseUrl}/ru/auth/buyer`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/buyer`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/auth/creator`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/creator`,
        },
      },
    },
  ];
  
  // Legal pages (English only for now)
  const legalPages = [
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
  
  return [
    ...enPages,
    ...ruPages,
    ...enBlogPosts,
    ...ruBlogPosts,
    ...enRegistrationPages,
    ...ruRegistrationPages,
    ...legalPages,
  ];
}

