// AI-People Async Loader
// Асинхронная загрузка скриптов для оптимизации производительности
// Версия: 1.0.0

(function() {
  'use strict';
  
  // Конфигурация
  const CONFIG = {
    // Настройки загрузки
    loadTimeout: 10000, // 10 секунд
    retryAttempts: 3,
    retryDelay: 1000, // 1 секунда
    
    // Приоритеты загрузки
    priorities: {
      critical: 'high',
      important: 'medium',
      optional: 'low'
    },
    
    // Настройки кэширования
    cache: {
      enabled: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 часа
      maxSize: 50 // максимум 50 скриптов в кэше
    }
  };
  
  // Кэш загруженных скриптов
  const scriptCache = new Map();
  const loadingQueue = new Map();
  
  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  
  /**
   * Создает уникальный ID для скрипта
   */
  function createScriptId(src) {
    return btoa(src).replace(/[^a-zA-Z0-9]/g, '');
  }
  
  /**
   * Проверяет, загружен ли скрипт
   */
  function isScriptLoaded(src) {
    return document.querySelector(`script[src="${src}"]`) !== null;
  }
  
  /**
   * Проверяет, загружается ли скрипт
   */
  function isScriptLoading(src) {
    return loadingQueue.has(src);
  }
  
  /**
   * Получает кэшированный скрипт
   */
  function getCachedScript(src) {
    if (!CONFIG.cache.enabled) return null;
    
    const cached = scriptCache.get(src);
    if (cached && Date.now() - cached.timestamp < CONFIG.cache.maxAge) {
      return cached.script;
    }
    
    // Удаляем устаревший кэш
    scriptCache.delete(src);
    return null;
  }
  
  /**
   * Сохраняет скрипт в кэш
   */
  function cacheScript(src, script) {
    if (!CONFIG.cache.enabled) return;
    
    // Ограничиваем размер кэша
    if (scriptCache.size >= CONFIG.cache.maxSize) {
      const firstKey = scriptCache.keys().next().value;
      scriptCache.delete(firstKey);
    }
    
    scriptCache.set(src, {
      script: script,
      timestamp: Date.now()
    });
  }
  
  // ========================================
  // SCRIPT LOADING
  // ========================================
  
  /**
   * Загружает скрипт асинхронно
   */
  function loadScript(src, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        priority = 'medium',
        timeout = CONFIG.loadTimeout,
        retries = CONFIG.retryAttempts,
        defer = true,
        async = true,
        onLoad = null,
        onError = null
      } = options;
      
      // Проверяем, не загружен ли уже
      if (isScriptLoaded(src)) {
        resolve(document.querySelector(`script[src="${src}"]`));
        return;
      }
      
      // Проверяем кэш
      const cached = getCachedScript(src);
      if (cached) {
        resolve(cached);
        return;
      }
      
      // Проверяем, не загружается ли уже
      if (isScriptLoading(src)) {
        loadingQueue.get(src).then(resolve).catch(reject);
        return;
      }
      
      // Создаем Promise для очереди
      const loadPromise = new Promise((queueResolve, queueReject) => {
        let attempts = 0;
        
        const attemptLoad = () => {
          attempts++;
          
          const script = document.createElement('script');
          script.src = src;
          script.async = async;
          script.defer = defer;
          
          // Устанавливаем приоритет
          if (priority === 'high') {
            script.setAttribute('fetchpriority', 'high');
          } else if (priority === 'low') {
            script.setAttribute('fetchpriority', 'low');
          }
          
          // Обработчики событий
          script.onload = () => {
            cacheScript(src, script);
            loadingQueue.delete(src);
            
            if (onLoad) onLoad(script);
            queueResolve(script);
          };
          
          script.onerror = (error) => {
            loadingQueue.delete(src);
            
            if (attempts < retries) {
              console.warn(`[Async Loader] Retry ${attempts}/${retries} for ${src}`);
              setTimeout(attemptLoad, CONFIG.retryDelay * attempts);
            } else {
              console.error(`[Async Loader] Failed to load ${src} after ${retries} attempts`);
              
              if (onError) onError(error);
              queueReject(new Error(`Failed to load script: ${src}`));
            }
          };
          
          // Таймаут
          const timeoutId = setTimeout(() => {
            script.remove();
            loadingQueue.delete(src);
            
            if (attempts < retries) {
              console.warn(`[Async Loader] Timeout, retry ${attempts}/${retries} for ${src}`);
              setTimeout(attemptLoad, CONFIG.retryDelay * attempts);
            } else {
              console.error(`[Async Loader] Timeout loading ${src}`);
              queueReject(new Error(`Timeout loading script: ${src}`));
            }
          }, timeout);
          
          // Очищаем таймаут при успешной загрузке
          script.onload = () => {
            clearTimeout(timeoutId);
            cacheScript(src, script);
            loadingQueue.delete(src);
            
            if (onLoad) onLoad(script);
            queueResolve(script);
          };
          
          // Добавляем в DOM
          document.head.appendChild(script);
        };
        
        attemptLoad();
      });
      
      // Добавляем в очередь
      loadingQueue.set(src, loadPromise);
      
      loadPromise.then(resolve).catch(reject);
    });
  }
  
  /**
   * Загружает несколько скриптов параллельно
   */
  function loadScripts(scripts, options = {}) {
    const { parallel = true, priority = 'medium' } = options;
    
    if (parallel) {
      return Promise.allSettled(
        scripts.map(src => loadScript(src, { ...options, priority }))
      );
    } else {
      // Последовательная загрузка
      return scripts.reduce((promise, src) => {
        return promise.then(() => loadScript(src, { ...options, priority }));
      }, Promise.resolve());
    }
  }
  
  // ========================================
  // INTERACTION-BASED LOADING
  // ========================================
  
  /**
   * Загружает скрипт по взаимодействию пользователя
   */
  function loadOnInteraction(src, options = {}) {
    const {
      eventType = 'click',
      element = document,
      priority = 'medium',
      once = true
    } = options;
    
    const loadHandler = () => {
      loadScript(src, { priority });
      
      if (once) {
        element.removeEventListener(eventType, loadHandler);
      }
    };
    
    element.addEventListener(eventType, loadHandler, { passive: true });
    
    return {
      remove: () => element.removeEventListener(eventType, loadHandler)
    };
  }
  
  /**
   * Загружает скрипт при видимости элемента
   */
  function loadOnVisible(src, element, options = {}) {
    const {
      threshold = 0.1,
      rootMargin = '50px',
      priority = 'medium'
    } = options;
    
    if (!('IntersectionObserver' in window)) {
      // Fallback для старых браузеров
      return loadScript(src, { priority });
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadScript(src, { priority });
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return {
      disconnect: () => observer.disconnect()
    };
  }
  
  // ========================================
  // IDLE LOADING
  // ========================================
  
  /**
   * Загружает скрипт в свободное время браузера
   */
  function loadOnIdle(src, options = {}) {
    const { priority = 'low', timeout = 5000 } = options;
    
    if ('requestIdleCallback' in window) {
      return new Promise((resolve, reject) => {
        requestIdleCallback(
          () => {
            loadScript(src, { priority })
              .then(resolve)
              .catch(reject);
          },
          { timeout }
        );
      });
    } else {
      // Fallback для браузеров без requestIdleCallback
      return new Promise((resolve) => {
        setTimeout(() => {
          loadScript(src, { priority }).then(resolve);
        }, 100);
      });
    }
  }
  
  // ========================================
  // PRELOADING
  // ========================================
  
  /**
   * Предзагружает скрипт
   */
  function preloadScript(src, options = {}) {
    const { priority = 'low', as = 'script' } = options;
    
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = src;
      link.setAttribute('fetchpriority', priority);
      
      link.onload = () => resolve(link);
      link.onerror = () => reject(new Error(`Failed to preload: ${src}`));
      
      document.head.appendChild(link);
    });
  }
  
  /**
   * Предзагружает скрипты в фоне
   */
  function preloadScripts(scripts, options = {}) {
    const { priority = 'low', delay = 0 } = options;
    
    if (delay > 0) {
      setTimeout(() => {
        scripts.forEach(src => preloadScript(src, { priority }));
      }, delay);
    } else {
      scripts.forEach(src => preloadScript(src, { priority }));
    }
  }
  
  // ========================================
  // CONDITIONAL LOADING
  // ========================================
  
  /**
   * Загружает скрипт при выполнении условия
   */
  function loadConditionally(src, condition, options = {}) {
    if (typeof condition === 'function') {
      if (condition()) {
        return loadScript(src, options);
      }
    } else if (condition) {
      return loadScript(src, options);
    }
    
    return Promise.resolve(null);
  }
  
  /**
   * Загружает скрипт для определенного устройства
   */
  function loadForDevice(src, deviceType, options = {}) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android(?=.*\bMobile\b)/i.test(navigator.userAgent);
    
    let shouldLoad = false;
    
    switch (deviceType) {
      case 'mobile':
        shouldLoad = isMobile && !isTablet;
        break;
      case 'tablet':
        shouldLoad = isTablet;
        break;
      case 'desktop':
        shouldLoad = !isMobile && !isTablet;
        break;
      case 'touch':
        shouldLoad = isMobile || isTablet;
        break;
      default:
        shouldLoad = true;
    }
    
    return loadConditionally(src, shouldLoad, options);
  }
  
  // ========================================
  // PERFORMANCE MONITORING
  // ========================================
  
  /**
   * Мониторинг производительности загрузки
   */
  function monitorLoadingPerformance() {
    const metrics = {
      totalScripts: 0,
      loadedScripts: 0,
      failedScripts: 0,
      averageLoadTime: 0,
      cacheHitRate: 0
    };
    
    const originalLoadScript = loadScript;
    loadScript = function(src, options = {}) {
      const startTime = performance.now();
      metrics.totalScripts++;
      
      return originalLoadScript.call(this, src, options)
        .then(script => {
          const loadTime = performance.now() - startTime;
          metrics.loadedScripts++;
          metrics.averageLoadTime = (metrics.averageLoadTime + loadTime) / metrics.loadedScripts;
          
          console.log(`[Async Loader] ${src} loaded in ${loadTime.toFixed(2)}ms`);
          
          // Отправка метрики в аналитику
          if (window.gtag) {
            window.gtag('event', 'script_load', {
              event_category: 'Performance',
              event_label: src,
              value: Math.round(loadTime)
            });
          }
          
          return script;
        })
        .catch(error => {
          metrics.failedScripts++;
          console.error(`[Async Loader] Failed to load ${src}:`, error);
          throw error;
        });
    };
    
    // Возвращаем метрики
    return {
      getMetrics: () => ({ ...metrics }),
      getCacheHitRate: () => {
        const total = scriptCache.size + metrics.loadedScripts;
        return total > 0 ? (scriptCache.size / total) * 100 : 0;
      }
    };
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  /**
   * Инициализация Async Loader
   */
  function init() {
    console.log('[Async Loader] Initializing...');
    
    // Мониторинг производительности
    const performanceMonitor = monitorLoadingPerformance();
    
    // Предзагрузка критических скриптов
    const criticalScripts = [
      '/scripts/theme.js',
      '/scripts/main-init.js'
    ];
    
    preloadScripts(criticalScripts, { priority: 'high' });
    
    // Загрузка по взаимодействию
    const interactionScripts = [
      { src: '/scripts/ui-components.js', event: 'click' },
      { src: '/scripts/language.js', event: 'hover' }
    ];
    
    interactionScripts.forEach(({ src, event }) => {
      loadOnInteraction(src, { eventType: event });
    });
    
    console.log('[Async Loader] Initialized successfully');
    
    // Экспорт метрик
    window.AsyncLoaderMetrics = performanceMonitor;
  }
  
  // Запуск при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // ========================================
  // EXPORTS
  // ========================================
  
  window.AsyncLoader = {
    loadScript,
    loadScripts,
    loadOnInteraction,
    loadOnVisible,
    loadOnIdle,
    preloadScript,
    preloadScripts,
    loadConditionally,
    loadForDevice,
    config: CONFIG,
    cache: scriptCache
  };
  
})();
