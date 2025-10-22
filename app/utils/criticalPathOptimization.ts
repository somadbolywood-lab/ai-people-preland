// AI-People Critical Path Optimization
// Оптимизация критического пути рендеринга для максимальной производительности
// Версия: 1.0.0

// ========================================
// TYPES
// ========================================

interface CriticalResource {
  type: 'css' | 'js' | 'font' | 'image';
  url: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  inline?: boolean;
  preload?: boolean;
}

interface RenderBlockingResource {
  element: HTMLElement;
  type: string;
  url: string;
  blocking: boolean;
}

// ========================================
// CONFIGURATION
// ========================================

const CONFIG = {
  // Критические ресурсы
  criticalResources: [
    {
      type: 'js' as const,
      url: '/scripts/theme.js',
      priority: 'critical' as const,
      inline: false
    },
    {
      type: 'font' as const,
      url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      priority: 'high' as const,
      preload: true
    }
  ],
  
  // Пороги для оптимизации
  thresholds: {
    maxRenderBlockingTime: 100, // мс
    maxCriticalPathLength: 3, // количество ресурсов
    maxInlineSize: 14000 // байт (14KB)
  },
  
  // Настройки preload
  preload: {
    enabled: true,
    maxConcurrent: 6,
    timeout: 3000
  }
};

// ========================================
// CRITICAL CSS OPTIMIZATION
// ========================================


// ========================================
// RENDER BLOCKING OPTIMIZATION
// ========================================

/**
 * Находит блокирующие рендеринг ресурсы
 */
export function findRenderBlockingResources(): RenderBlockingResource[] {
  const blockingResources: RenderBlockingResource[] = [];
  
  // CSS файлы
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  cssLinks.forEach(link => {
    blockingResources.push({
      element: link as HTMLElement,
      type: 'css',
      url: (link as HTMLLinkElement).href,
      blocking: true
    });
  });
  
  // JavaScript файлы без async/defer
  const jsScripts = document.querySelectorAll('script[src]:not([async]):not([defer])');
  jsScripts.forEach(script => {
    blockingResources.push({
      element: script as HTMLElement,
      type: 'js',
      url: (script as HTMLScriptElement).src,
      blocking: true
    });
  });
  
  return blockingResources;
}

/**
 * Оптимизирует блокирующие ресурсы
 */
export function optimizeRenderBlockingResources(): void {
  const blockingResources = findRenderBlockingResources();
  
  blockingResources.forEach(resource => {
    if (resource.type === 'css') {
      // Преобразуем CSS в асинхронную загрузку
      const link = resource.element as HTMLLinkElement;
      link.rel = 'preload';
      link.as = 'style';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
    } else if (resource.type === 'js') {
      // Добавляем defer к JavaScript
      const script = resource.element as HTMLScriptElement;
      script.defer = true;
    }
  });
  
  console.log(`[Critical Path] Optimized ${blockingResources.length} render-blocking resources`);
}

// ========================================
// RESOURCE PRELOADING
// ========================================

/**
 * Предзагружает критические ресурсы
 */
export function preloadCriticalResources(): void {
  CONFIG.criticalResources.forEach(resource => {
    if (resource.preload) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.url;
      
      switch (resource.type as 'css' | 'js' | 'font' | 'image') {
        case 'css':
          link.as = 'style';
          break;
        case 'js':
          link.as = 'script';
          break;
        case 'font':
          link.as = 'font';
          link.crossOrigin = 'anonymous';
          break;
        case 'image':
          link.as = 'image';
          break;
      }
      
      // Устанавливаем приоритет
      if ((resource.priority as 'critical' | 'high' | 'medium' | 'low') === 'critical') {
        link.setAttribute('fetchpriority', 'high');
      } else if ((resource.priority as 'critical' | 'high' | 'medium' | 'low') === 'low') {
        link.setAttribute('fetchpriority', 'low');
      }
      
      document.head.appendChild(link);
    }
  });
  
  console.log('[Critical Path] Critical resources preloaded');
}

// ========================================
// FONT OPTIMIZATION
// ========================================

/**
 * Оптимизирует загрузку шрифтов
 */
export function optimizeFontLoading(): void {
  // Предзагружаем критические шрифты
  const criticalFonts = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2'
  ];
  
  criticalFonts.forEach(fontUrl => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = fontUrl;
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.setAttribute('fetchpriority', 'high');
    
    document.head.appendChild(link);
  });
  
  // Оптимизируем существующие шрифты
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  fontLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('display=')) {
      link.setAttribute('href', `${href}&display=swap`);
    }
  });
  
  console.log('[Critical Path] Font loading optimized');
}

// ========================================
// CRITICAL PATH ANALYSIS
// ========================================

/**
 * Анализирует критический путь рендеринга
 */
export function analyzeCriticalPath(): {
  blockingResources: number;
  criticalPathLength: number;
  recommendations: string[];
} {
  const blockingResources = findRenderBlockingResources();
  const criticalPathLength = blockingResources.length;
  const recommendations: string[] = [];
  
  // Анализ блокирующих ресурсов
  if (blockingResources.length > CONFIG.thresholds.maxCriticalPathLength) {
    recommendations.push('Слишком много блокирующих ресурсов. Используйте асинхронную загрузку.');
  }
  
  // Анализ CSS
  const cssResources = blockingResources.filter(r => r.type === 'css');
  if (cssResources.length > 2) {
    recommendations.push('Много CSS файлов блокируют рендеринг. Объедините или используйте асинхронную загрузку.');
  }
  
  // Анализ JavaScript
  const jsResources = blockingResources.filter(r => r.type === 'js');
  if (jsResources.length > 1) {
    recommendations.push('JavaScript файлы блокируют рендеринг. Добавьте async/defer.');
  }
  
  return {
    blockingResources: blockingResources.length,
    criticalPathLength,
    recommendations
  };
}

// ========================================
// PERFORMANCE MONITORING
// ========================================

/**
 * Мониторинг производительности критического пути
 */
export function monitorCriticalPath(): void {
  // Измеряем время до First Contentful Paint
  const observer = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        console.log(`[Critical Path] FCP: ${entry.startTime.toFixed(2)}ms`);
        
        // Отправка метрики в аналитику
        if ((window as any).gtag) {
          (window as any).gtag('event', 'critical_path_fcp', {
            event_category: 'Performance',
            value: Math.round(entry.startTime)
          });
        }
      }
    });
  });
  
  observer.observe({ entryTypes: ['paint'] });
  
  // Измеряем время до DOM Content Loaded
  document.addEventListener('DOMContentLoaded', () => {
    const domContentLoadedTime = performance.now();
    console.log(`[Critical Path] DOM Content Loaded: ${domContentLoadedTime.toFixed(2)}ms`);
    
    if ((window as any).gtag) {
      (window as any).gtag('event', 'critical_path_dcl', {
        event_category: 'Performance',
        value: Math.round(domContentLoadedTime)
      });
    }
  });
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Инициализация оптимизации критического пути
 */
export function initCriticalPathOptimization(): void {
  console.log('[Critical Path] Initializing optimization...');
  
  // Инлайним критический CSS
  
  // Оптимизируем блокирующие ресурсы
  optimizeRenderBlockingResources();
  
  // Предзагружаем критические ресурсы
  preloadCriticalResources();
  
  // Оптимизируем шрифты
  optimizeFontLoading();
  
  // Анализируем критический путь
  const analysis = analyzeCriticalPath();
  console.log('[Critical Path] Analysis:', analysis);
  
  // Мониторим производительность
  monitorCriticalPath();
  
  console.log('[Critical Path] Optimization initialized');
}

// ========================================
// EXPORTS
// ========================================

export default {
  findRenderBlockingResources,
  optimizeRenderBlockingResources,
  preloadCriticalResources,
  optimizeFontLoading,
  analyzeCriticalPath,
  monitorCriticalPath,
  initCriticalPathOptimization,
  CONFIG
};
