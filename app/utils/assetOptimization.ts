// AI-People Asset Optimization Utilities
// Утилиты для оптимизации статических ресурсов (изображения, шрифты, CSS)
// Версия: 1.0.0

// ========================================
// TYPES
// ========================================

interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  width?: number;
  height?: number;
  lazy?: boolean;
  placeholder?: 'blur' | 'empty';
}

interface FontOptimizationOptions {
  display?: 'swap' | 'block' | 'fallback' | 'optional';
  preload?: boolean;
  subset?: boolean;
}

interface CSSOptimizationOptions {
  critical?: boolean;
  inline?: boolean;
  minify?: boolean;
}

// ========================================
// IMAGE OPTIMIZATION
// ========================================

/**
 * Генерирует оптимизированный srcSet для изображений
 */
export function generateSrcSet(
  baseUrl: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1920],
  format: string = 'webp'
): string {
  return widths
    .map(width => `${baseUrl}?w=${width}&f=${format} ${width}w`)
    .join(', ');
}

/**
 * Создает оптимизированный тег изображения
 */
export function createOptimizedImage(
  src: string,
  alt: string,
  options: ImageOptimizationOptions = {}
): string {
  const {
    quality = 80,
    format = 'webp',
    width,
    height,
    lazy = true,
    placeholder = 'blur'
  } = options;

  const srcSet = generateSrcSet(src, undefined, format);
  const loading = lazy ? 'lazy' : 'eager';
  const decoding = lazy ? 'async' : 'sync';

  return `
    <img
      src="${src}?w=${width || 'auto'}&h=${height || 'auto'}&q=${quality}&f=${format}"
      srcset="${srcSet}"
      alt="${alt}"
      loading="${loading}"
      decoding="${decoding}"
      style="
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: opacity 0.3s ease;
      "
      onload="this.style.opacity='1'"
      onerror="this.style.opacity='0.5'"
    />
  `;
}

/**
 * Предзагрузка критических изображений
 */
export function preloadCriticalImages(images: string[]): void {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
}

/**
 * Lazy loading для изображений с Intersection Observer
 */
export function setupLazyImages(): void {
  if (!('IntersectionObserver' in window)) {
    // Fallback для старых браузеров
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      (img as HTMLImageElement).src = (img as HTMLImageElement).dataset.src || '';
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// FONT OPTIMIZATION
// ========================================

/**
 * Оптимизация загрузки шрифтов
 */
export function optimizeFonts(options: FontOptimizationOptions = {}): void {
  const {
    display = 'swap',
    preload = true,
    subset = true
  } = options;

  // Предзагрузка критических шрифтов
  if (preload) {
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontUrl;
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }

  // Оптимизация существующих шрифтов
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  fontLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('display=')) {
      link.setAttribute('href', `${href}&display=${display}`);
    }
  });
}

/**
 * Создает оптимизированный CSS для шрифтов
 */
export function generateFontCSS(
  fontFamily: string,
  weights: number[] = [400, 500, 600, 700],
  display: string = 'swap'
): string {
  const weightsStr = weights.join(';');
  return `
    @font-face {
      font-family: '${fontFamily}';
      font-display: ${display};
      src: url('https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${weightsStr}&display=${display}');
    }
  `;
}

// ========================================
// CSS OPTIMIZATION
// ========================================

/**
 * Инлайн критического CSS
 */
export function inlineCriticalCSS(css: string): void {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
}

/**
 * Загрузка некритического CSS асинхронно
 */
export function loadNonCriticalCSS(href: string): void {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  link.onload = () => {
    link.rel = 'stylesheet';
  };
  document.head.appendChild(link);
}

/**
 * Оптимизация CSS с минификацией
 */
export function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Удаляем комментарии
    .replace(/\s+/g, ' ') // Заменяем множественные пробелы на один
    .replace(/;\s*}/g, '}') // Удаляем точку с запятой перед закрывающей скобкой
    .replace(/,\s+/g, ',') // Удаляем пробелы после запятых
    .replace(/:\s+/g, ':') // Удаляем пробелы после двоеточий
    .replace(/;\s+/g, ';') // Удаляем пробелы после точек с запятой
    .trim();
}

// ========================================
// RESOURCE HINTS
// ========================================

/**
 * Добавляет Resource Hints для оптимизации загрузки
 */
export function addResourceHints(): void {
  const hints = [
    // DNS prefetch для внешних доменов
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: 'https://mc.yandex.ru' },
    { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
    
    // Preconnect для критических ресурсов
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    
    // Preload для критических ресурсов
    { rel: 'preload', href: '/styles/critical.css', as: 'style' },
    { rel: 'preload', href: '/scripts/theme.js', as: 'script' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.entries(hint).forEach(([key, value]) => {
      if (key === 'crossorigin') {
        link.setAttribute('crossorigin', value as string);
      } else {
        link.setAttribute(key, value as string);
      }
    });
    document.head.appendChild(link);
  });
}

// ========================================
// BUNDLE OPTIMIZATION
// ========================================

/**
 * Анализ размера ресурсов
 */
export function analyzeResourceSizes() {
  const resources = performance.getEntriesByType('resource');
  const analysis = {
    total: 0,
    images: 0,
    scripts: 0,
    stylesheets: 0,
    fonts: 0,
    other: 0
  };

  resources.forEach(resource => {
    const size = (resource as PerformanceResourceTiming).transferSize || 0;
    analysis.total += size;

    if (resource.name.includes('.js')) {
      analysis.scripts += size;
    } else if (resource.name.includes('.css')) {
      analysis.stylesheets += size;
    } else if (resource.name.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/)) {
      analysis.images += size;
    } else if (resource.name.match(/\.(woff|woff2|ttf|otf)$/)) {
      analysis.fonts += size;
    } else {
      analysis.other += size;
    }
  });

  console.log('[Resource Analysis]', {
    total: `${(analysis.total / 1024).toFixed(2)} KB`,
    images: `${(analysis.images / 1024).toFixed(2)} KB`,
    scripts: `${(analysis.scripts / 1024).toFixed(2)} KB`,
    stylesheets: `${(analysis.stylesheets / 1024).toFixed(2)} KB`,
    fonts: `${(analysis.fonts / 1024).toFixed(2)} KB`,
    other: `${(analysis.other / 1024).toFixed(2)} KB`
  });

  return analysis;
}

/**
 * Оптимизация загрузки ресурсов
 */
export function optimizeResourceLoading(): void {
  // Добавляем Resource Hints
  addResourceHints();
  
  // Оптимизируем шрифты
  optimizeFonts();
  
  // Настраиваем lazy loading для изображений
  setupLazyImages();
  
  // Анализируем размеры ресурсов
  setTimeout(analyzeResourceSizes, 2000);
}

// ========================================
// CACHE OPTIMIZATION
// ========================================

/**
 * Управление кэшем ресурсов
 */
export function setupResourceCache(): void {
  // Кэширование критических ресурсов
  const criticalResources = [
    '/styles/critical.css',
    '/scripts/theme.js',
    '/scripts/main-init.js',
    '/faq/AI-people Logo.png'
  ];

  if ('caches' in window) {
    caches.open('critical-resources-v1').then(cache => {
      criticalResources.forEach(resource => {
        cache.add(resource).catch(console.error);
      });
    });
  }
}

// ========================================
// EXPORTS
// ========================================

export default {
  generateSrcSet,
  createOptimizedImage,
  preloadCriticalImages,
  setupLazyImages,
  optimizeFonts,
  generateFontCSS,
  inlineCriticalCSS,
  loadNonCriticalCSS,
  minifyCSS,
  addResourceHints,
  analyzeResourceSizes,
  optimizeResourceLoading,
  setupResourceCache
};
