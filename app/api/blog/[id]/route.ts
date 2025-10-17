import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface BlogMetadata {
  id: number;
  slug: string;
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
  ogImage: string;
  publishedAt: string;
  updatedAt: string;
}

export interface BlogContent {
  en: string;
  ru: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogFAQ {
  en: FAQItem[];
  ru: FAQItem[];
}

export interface BlogCTA {
  en: string;
  ru: string;
}

export interface BlogArticle extends BlogMetadata {
  content: BlogContent;
  faq: BlogFAQ;
  cta: BlogCTA;
  image: string;
  gallery: string[];
}

// Parse article.txt file
function parseArticleFile(content: string): { metadata: Partial<BlogMetadata>, content: BlogContent, faq: BlogFAQ, cta: BlogCTA } {
  const lines = content.split('\n');
  let currentSection = 'metadata';
  const metadata: Partial<BlogMetadata> = {};
  const contentParts = { en: '', ru: '' };
  const faqParts: BlogFAQ = { en: [], ru: [] };
  const ctaParts: BlogCTA = { en: '', ru: '' };
  
  let currentLang = '';
  let enContent = '';
  let ruContent = '';
  let inFAQ = false;
  let inCTA = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'META:') {
      currentSection = 'metadata';
      inFAQ = false;
      inCTA = false;
      continue;
    }
    
    if (line === '---') {
      if (currentSection === 'metadata') {
        currentSection = 'content';
        continue;
      }
      // Continue to next section after content
      inFAQ = false;
      inCTA = false;
      continue;
    }
    
    // Check for content language markers
    if (line === 'CONTENT_EN:') {
      currentLang = 'en';
      currentSection = 'content';
      inFAQ = false;
      inCTA = false;
      continue;
    } else if (line === 'CONTENT_RU:') {
      currentLang = 'ru';
      currentSection = 'content';
      inFAQ = false;
      inCTA = false;
      continue;
    }
    
    // Check for FAQ section
    if (line === 'FAQ:') {
      inFAQ = true;
      inCTA = false;
      continue;
    }
    
    // Check for CTA section
    if (line === 'CTA:') {
      inCTA = true;
      inFAQ = false;
      continue;
    }
    
    if (currentSection === 'metadata') {
      if (line.includes(':')) {
        const colonIndex = line.indexOf(':');
        const cleanKey = line.substring(0, colonIndex).trim();
        const cleanValue = line.substring(colonIndex + 1).trim();
        
        // Parse metadata fields
        if (cleanKey.startsWith('TITLE_')) {
          if (!metadata.title) metadata.title = {} as any;
          const lang = cleanKey.replace('TITLE_', '').toLowerCase();
          (metadata.title as any)[lang] = cleanValue;
        } else if (cleanKey.startsWith('CATEGORY_')) {
          if (!metadata.category) metadata.category = {} as any;
          const lang = cleanKey.replace('CATEGORY_', '').toLowerCase();
          (metadata.category as any)[lang] = cleanValue;
        } else if (cleanKey.startsWith('AUTHOR_')) {
          if (!metadata.author) metadata.author = {} as any;
          const lang = cleanKey.replace('AUTHOR_', '').toLowerCase();
          (metadata.author as any)[lang] = cleanValue;
        } else if (cleanKey.startsWith('READ_TIME_')) {
          if (!metadata.readTime) metadata.readTime = {} as any;
          const lang = cleanKey.replace('READ_TIME_', '').toLowerCase();
          (metadata.readTime as any)[lang] = cleanValue;
        } else if (cleanKey.startsWith('EXCERPT_')) {
          if (!metadata.excerpt) metadata.excerpt = {} as any;
          const lang = cleanKey.replace('EXCERPT_', '').toLowerCase();
          (metadata.excerpt as any)[lang] = cleanValue;
        } else if (cleanKey.startsWith('META_DESCRIPTION_')) {
          if (!metadata.metaDescription) metadata.metaDescription = {} as any;
          const lang = cleanKey.replace('META_DESCRIPTION_', '').toLowerCase();
          (metadata.metaDescription as any)[lang] = cleanValue;
        } else if (cleanKey === 'FEATURED') {
          metadata.featured = cleanValue.toLowerCase() === 'true';
        } else if (cleanKey === 'TAGS') {
          metadata.tags = cleanValue.split(',').map(tag => tag.trim());
        } else if (cleanKey === 'OG_IMAGE') {
          metadata.ogImage = cleanValue;
        } else if (cleanKey === 'PUBLISHED_AT') {
          metadata.publishedAt = cleanValue;
        } else if (cleanKey === 'UPDATED_AT') {
          metadata.updatedAt = cleanValue;
        }
      }
    }
    
    if (currentSection === 'content' && currentLang) {
      if (inFAQ) {
        // Parse FAQ items
        if (line.startsWith('Q') && line.includes(':')) {
          const questionText = line.substring(line.indexOf(':') + 1).trim();
          // Look ahead for the answer
          if (i + 1 < lines.length) {
            i++;
            const answerLine = lines[i].trim();
            if (answerLine.startsWith('A') && answerLine.includes(':')) {
              const answerText = answerLine.substring(answerLine.indexOf(':') + 1).trim();
              if (currentLang === 'en') {
                faqParts.en.push({ question: questionText, answer: answerText });
              } else if (currentLang === 'ru') {
                faqParts.ru.push({ question: questionText, answer: answerText });
              }
            }
          }
        }
      } else if (inCTA) {
        // Parse CTA text
        if (line) {
          if (currentLang === 'en') {
            ctaParts.en += (ctaParts.en ? ' ' : '') + line;
          } else if (currentLang === 'ru') {
            ctaParts.ru += (ctaParts.ru ? ' ' : '') + line;
          }
        }
      } else {
        // Regular content
        if (line) {
          if (currentLang === 'en') {
            enContent += line + '\n';
          } else if (currentLang === 'ru') {
            ruContent += line + '\n';
          }
        } else {
          // Empty line = paragraph break
          if (currentLang === 'en' && enContent && !enContent.endsWith('\n\n')) {
            enContent += '\n';
          } else if (currentLang === 'ru' && ruContent && !ruContent.endsWith('\n\n')) {
            ruContent += '\n';
          }
        }
      }
    }
  }
  
  // Convert markdown-style content to HTML
  contentParts.en = convertToHTML(enContent.trim());
  contentParts.ru = convertToHTML(ruContent.trim());
  
  return { metadata: metadata as BlogMetadata, content: contentParts, faq: faqParts, cta: ctaParts };
}

// Simple markdown to HTML converter
function convertToHTML(text: string): string {
  let html = text;
  
  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  
  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Paragraphs - split by double newline
  const paragraphs = html.split('\n\n').filter(p => p.trim());
  html = paragraphs.map(p => {
    // Don't wrap if already a heading or list
    if (p.trim().startsWith('<h') || p.trim().startsWith('<ul') || p.trim().startsWith('<ol')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');
  
  return html;
}

// Load images from a directory
function loadImages(dirPath: string, articleId: string): string[] {
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);
  return files
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => `/blog/content/${articleId}/gallery/${file}`);
}

// Load single blog article
function loadBlogArticle(articleId: string): BlogArticle | null {
  const contentDir = path.join(process.cwd(), 'app/blog/content', articleId);
  
  if (!fs.existsSync(contentDir)) return null;
  
  const articleFile = path.join(contentDir, 'article.txt');
  if (!fs.existsSync(articleFile)) return null;
  
  const articleContent = fs.readFileSync(articleFile, 'utf-8');
  const { metadata, content, faq, cta } = parseArticleFile(articleContent);
  
  // Load hero image - support both PNG and JPG formats
  let heroImage = '/assets/models/model-01.png'; // fallback
  
  // Check for PNG first, then JPG, then use metadata OG_IMAGE
  if (metadata.ogImage && metadata.ogImage !== './hero.jpg' && metadata.ogImage !== './hero.png') {
    // Custom image path from metadata
    const customImagePath = metadata.ogImage.replace('./', '');
    heroImage = `/blog/content/${articleId}/${customImagePath}`;
  } else {
    // Auto-detect PNG or JPG in content directory
    if (fs.existsSync(path.join(contentDir, 'hero.png'))) {
      heroImage = `/blog/content/${articleId}/hero.png`;
    } else if (fs.existsSync(path.join(contentDir, 'hero.jpg'))) {
      heroImage = `/blog/content/${articleId}/hero.jpg`;
    } else if (fs.existsSync(path.join(contentDir, 'hero.jpeg'))) {
      heroImage = `/blog/content/${articleId}/hero.jpeg`;
    } else if (fs.existsSync(path.join(contentDir, 'hero.webp'))) {
      heroImage = `/blog/content/${articleId}/hero.webp`;
    }
  }
    
  const galleryDir = path.join(contentDir, 'gallery');
  const gallery = loadImages(galleryDir, articleId);
  
  return {
    id: parseInt(articleId),
    slug: metadata.slug || `article-${articleId}`,
    category: metadata.category || { en: 'Uncategorized', ru: 'Без категории' },
    title: metadata.title || { en: 'Untitled', ru: 'Без названия' },
    excerpt: metadata.excerpt || { en: 'No excerpt', ru: 'Нет описания' },
    metaDescription: metadata.metaDescription || { en: '', ru: '' },
    date: metadata.publishedAt || metadata.date || new Date().toISOString().split('T')[0],
    readTime: metadata.readTime || { en: '5 min read', ru: '5 мин чтения' },
    author: metadata.author || { en: 'AI-PEOPLE Editorial Team', ru: 'Редакция AI-PEOPLE' },
    featured: metadata.featured || false,
    tags: metadata.tags || [],
    ogImage: metadata.ogImage || './hero.jpg',
    publishedAt: metadata.publishedAt || new Date().toISOString().split('T')[0],
    updatedAt: metadata.updatedAt || metadata.publishedAt || new Date().toISOString().split('T')[0],
    content,
    faq,
    cta,
    image: heroImage,
    gallery
  };
}

// GET /api/blog/[id] - Get single blog article
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const article = loadBlogArticle(id);
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch (error) {
    console.error('Error loading blog article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
