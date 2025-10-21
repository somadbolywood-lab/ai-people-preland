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
      type: 'css' as const,
      url: '/styles/critical.css',
      priority: 'critical' as const,
      inline: true
    },
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

/**
 * Извлекает критический CSS из стилей
 */
export function extractCriticalCSS(): string {
  const criticalCSS = `
    /* Critical CSS for AI-People */
    :root {
      --bg: #0b0b0c;
      --bg-primary: #0b0b0c;
      --bg-secondary: #111114;
      --bg-hover: #1a1a1f;
      --panel: #111114;
      --text: #f5f5f7;
      --text-primary: #f5f5f7;
      --text-secondary: #b5b7bd;
      --subtext: #b5b7bd;
      --muted: #1a1a1f;
      --accent: #8b5cf6;
      --accent-2: #ec4899;
      --danger: #f43f5e;
      --border: #232329;
      --shadow: 0 10px 30px rgba(0,0,0,0.35);
    }
    
    .light {
      --bg: #ffffff;
      --bg-primary: #ffffff;
      --bg-secondary: #f7f7f8;
      --bg-hover: #efeff1;
      --panel: #f7f7f8;
      --text: #0a0a0b;
      --text-primary: #0a0a0b;
      --text-secondary: #52525b;
      --subtext: #52525b;
      --muted: #efeff1;
      --accent: #7c3aed;
      --accent-2: #db2777;
      --danger: #e11d48;
      --border: #e5e7eb;
      --shadow: 0 10px 30px rgba(0,0,0,0.08);
    }
    
    * {
      box-sizing: border-box;
    }
    
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 12px;
      width: 100%;
      min-width: 320px;
    }
    
    .topbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 4px 12px;
      background: rgba(11,11,12,0.5);
      border-bottom: 1px solid var(--border);
      min-height: 80px;
      height: 80px;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    
    .light .topbar {
      background: rgba(255,255,255,0.5);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-right: auto;
    }
    
    .logo-img {
      height: 48px;
      width: auto;
      max-height: 58px;
      max-width: 150px;
      object-fit: contain;
    }
    
    .btn {
      border: none;
      padding: 8px 16px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--panel);
      color: var(--text);
      min-height: 42px;
    }
    
    .btn:hover {
      background: var(--bg-hover);
      transform: scale(1.02);
    }
    
    .btn.primary {
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: white;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 800;
    }
    
    .light .gradient-text {
      background: linear-gradient(135deg, #7c3aed 0%, #db2777 50%, #e11d48 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* Mobile optimizations */
    @media (max-width: 639px) {
      body {
        padding-top: 80px !important;
      }
      
      .topbar {
        gap: 6px;
        padding: 4px 72px;
        min-height: 72px !important;
        height: 72px !important;
        background: rgba(11,11,12,0.5);
      }
      
      .container {
        padding: 8px;
      }
      
      .logo-img {
        height: 84px;
        width: auto;
        max-width: 231px;
        object-fit: contain;
      }
      
      .btn {
        padding: 6px 10px;
        font-size: 12px;
        min-height: 36px;
      }
      
      .light .topbar {
        background: rgba(255,255,255,0.5);
      }
    }
  `;
  
  return criticalCSS;
}

/**
 * Инлайнит критический CSS в head
 */
export function inlineCriticalCSS(): void {
  const criticalCSS = extractCriticalCSS();
  
  // Проверяем размер
  if (criticalCSS.length > CONFIG.thresholds.maxInlineSize) {
    console.warn('[Critical Path] Critical CSS exceeds 14KB limit');
  }
  
  // Создаем style элемент
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  style.setAttribute('data-critical', 'true');
  
  // Вставляем в начало head
  document.head.insertBefore(style, document.head.firstChild);
  
  console.log('[Critical Path] Critical CSS inlined');
}

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
  inlineCriticalCSS();
  
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
  extractCriticalCSS,
  inlineCriticalCSS,
  findRenderBlockingResources,
  optimizeRenderBlockingResources,
  preloadCriticalResources,
  optimizeFontLoading,
  analyzeCriticalPath,
  monitorCriticalPath,
  initCriticalPathOptimization,
  CONFIG
};
