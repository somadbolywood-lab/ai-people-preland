// AI-People Critical Path Optimization Script
// Оптимизация критического пути рендеринга
// Версия: 1.0.0

(function() {
  'use strict';
  
  // Импорт утилит (в реальном проекте это будет через модули)
  const CriticalPathOptimization = {
    initCriticalPathOptimization: function() {
      console.log('[Critical Path] Initializing optimization...');
      
      // Инлайним критический CSS
      this.inlineCriticalCSS();
      
      // Оптимизируем блокирующие ресурсы
      this.optimizeRenderBlockingResources();
      
      // Предзагружаем критические ресурсы
      this.preloadCriticalResources();
      
      // Оптимизируем шрифты
      this.optimizeFontLoading();
      
      // Анализируем критический путь
      const analysis = this.analyzeCriticalPath();
      console.log('[Critical Path] Analysis:', analysis);
      
      // Мониторим производительность
      this.monitorCriticalPath();
      
      console.log('[Critical Path] Optimization initialized');
    },
    
    inlineCriticalCSS: function() {
      // Критический CSS уже инлайнен в layout.tsx
      console.log('[Critical Path] Critical CSS already inlined');
    },
    
    optimizeRenderBlockingResources: function() {
      const blockingResources = this.findRenderBlockingResources();
      
      blockingResources.forEach(resource => {
        if (resource.type === 'css') {
          // Преобразуем CSS в асинхронную загрузку
          const link = resource.element;
          link.rel = 'preload';
          link.as = 'style';
          link.onload = () => {
            link.rel = 'stylesheet';
          };
        } else if (resource.type === 'js') {
          // Добавляем defer к JavaScript
          const script = resource.element;
          script.defer = true;
        }
      });
      
      console.log(`[Critical Path] Optimized ${blockingResources.length} render-blocking resources`);
    },
    
    findRenderBlockingResources: function() {
      const blockingResources = [];
      
      // CSS файлы
      const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
      cssLinks.forEach(link => {
        blockingResources.push({
          element: link,
          type: 'css',
          url: link.href,
          blocking: true
        });
      });
      
      // JavaScript файлы без async/defer
      const jsScripts = document.querySelectorAll('script[src]:not([async]):not([defer])');
      jsScripts.forEach(script => {
        blockingResources.push({
          element: script,
          type: 'js',
          url: script.src,
          blocking: true
        });
      });
      
      return blockingResources;
    },
    
    preloadCriticalResources: function() {
      const criticalResources = [
        {
          type: 'css',
          url: '/styles/critical.css',
          priority: 'critical'
        },
        {
          type: 'js',
          url: '/scripts/theme.js',
          priority: 'critical'
        },
        {
          type: 'font',
          url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          priority: 'high'
        }
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.url;
        
        switch (resource.type) {
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
        }
        
        // Устанавливаем приоритет
        if (resource.priority === 'critical') {
          link.setAttribute('fetchpriority', 'high');
        } else if (resource.priority === 'low') {
          link.setAttribute('fetchpriority', 'low');
        }
        
        document.head.appendChild(link);
      });
      
      console.log('[Critical Path] Critical resources preloaded');
    },
    
    optimizeFontLoading: function() {
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
    },
    
    analyzeCriticalPath: function() {
      const blockingResources = this.findRenderBlockingResources();
      const criticalPathLength = blockingResources.length;
      const recommendations = [];
      
      // Анализ блокирующих ресурсов
      if (blockingResources.length > 3) {
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
    },
    
    monitorCriticalPath: function() {
      // Измеряем время до First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              console.log(`[Critical Path] FCP: ${entry.startTime.toFixed(2)}ms`);
              
              // Отправка метрики в аналитику
              if (window.gtag) {
                window.gtag('event', 'critical_path_fcp', {
                  event_category: 'Performance',
                  value: Math.round(entry.startTime)
                });
              }
            }
          });
        });
        
        observer.observe({ entryTypes: ['paint'] });
      }
      
      // Измеряем время до DOM Content Loaded
      document.addEventListener('DOMContentLoaded', () => {
        const domContentLoadedTime = performance.now();
        console.log(`[Critical Path] DOM Content Loaded: ${domContentLoadedTime.toFixed(2)}ms`);
        
        if (window.gtag) {
          window.gtag('event', 'critical_path_dcl', {
            event_category: 'Performance',
            value: Math.round(domContentLoadedTime)
          });
        }
      });
    }
  };
  
  // Инициализация при готовности DOM
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        CriticalPathOptimization.initCriticalPathOptimization();
      });
    } else {
      CriticalPathOptimization.initCriticalPathOptimization();
    }
  }
  
  // Запуск
  init();
  
  // Экспорт для внешнего использования
  window.CriticalPathOptimization = CriticalPathOptimization;
  
})();
