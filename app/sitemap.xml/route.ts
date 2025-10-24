import { MetadataRoute } from 'next'

// Force static export compatibility
export const dynamic = 'force-static';
export const revalidate = false;

export async function GET(): Promise<Response> {
  const sitemap = generateSitemap();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString() : item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

function generateSitemap(): MetadataRoute.Sitemap {
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
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/role`,
        },
      },
    },
    {
      url: `${baseUrl}/all-blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/all-blogs`,
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
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/role`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/all-blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/all-blogs`,
        },
      },
    },
  ];
  
  // Blog posts - English (currently available: 1-6)
  const enBlogPosts = [1, 2, 3, 4, 5, 6].map(id => ({
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
  
  // Blog posts - Russian (currently available: 1-6)
  const ruBlogPosts = [1, 2, 3, 4, 5, 6].map(id => ({
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
      changeFrequency: 'weekly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/buyer`,
        },
      },
    },
    {
      url: `${baseUrl}/auth/creator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/creator`,
        },
      },
    },
    {
      url: `${baseUrl}/auth/buyer-info`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/buyer-info`,
        },
      },
    },
    {
      url: `${baseUrl}/auth/creator-info`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/auth/creator-info`,
        },
      },
    },
  ];
  
  // Registration pages - Russian
  const ruRegistrationPages = [
    {
      url: `${baseUrl}/ru/auth/buyer`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/buyer`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/auth/creator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/creator`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/auth/buyer-info`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/buyer-info`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/auth/creator-info`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/auth/creator-info`,
        },
      },
    },
  ];
  
  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
      alternates: { languages: { ru: `${baseUrl}/ru/legal/terms` } },
    },
    {
      url: `${baseUrl}/legal/content-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
      alternates: { languages: { ru: `${baseUrl}/ru/legal/content-policy` } },
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
      alternates: { languages: { ru: `${baseUrl}/ru/legal/privacy` } },
    },
    {
      url: `${baseUrl}/legal/cookies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
      alternates: { languages: { ru: `${baseUrl}/ru/legal/cookies` } },
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

