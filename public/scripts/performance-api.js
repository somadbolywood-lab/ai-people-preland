// AI-People Performance API Integration
// Расширенный мониторинг производительности через Performance API
// Версия: 1.0.0

(function() {
  'use strict';
  
  // Конфигурация
  const CONFIG = {
    // Настройки мониторинга
    trackNavigation: true,
    trackResource: true,
    trackUserTiming: true,
    trackLongTasks: true,
    
    // Пороги для предупреждений
    thresholds: {
      longTask: 50, // мс
      slowResource: 1000, // мс
      slowNavigation: 3000 // мс
    },
    
    // Настройки отправки
    sendToAnalytics: true,
    storeLocally: true,
    maxEntries: 100
  };
  
  // Хранилище данных
  let performanceData = {
    navigation: null,
    resources: [],
    userTiming: [],
    longTasks: [],
    memory: null,
    timestamp: Date.now()
  };
  
  // ========================================
  // NAVIGATION TIMING
  // ========================================
  
  function trackNavigationTiming() {
    if (!CONFIG.trackNavigation) return;
    
    try {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (!navigation) return;
      
      const navData = {
        // Основные метрики
        dns: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
        tcp: Math.round(navigation.connectEnd - navigation.connectStart),
        ssl: navigation.secureConnectionStart > 0 ? 
             Math.round(navigation.connectEnd - navigation.secureConnectionStart) : 0,
        ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        download: Math.round(navigation.responseEnd - navigation.responseStart),
        domProcessing: Math.round(navigation.domComplete - navigation.domLoading),
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
        
        // Общее время
        totalTime: Math.round(navigation.loadEventEnd - navigation.navigationStart),
        
        // Дополнительные метрики
        redirects: Math.round(navigation.redirectEnd - navigation.redirectStart),
        unload: Math.round(navigation.unloadEventEnd - navigation.unloadEventStart),
        
        // Рейтинг
        rating: getNavigationRating(navigation.loadEventEnd - navigation.navigationStart)
      };
      
      performanceData.navigation = navData;
      console.log('[Performance API] Navigation:', navData);
      
      // Предупреждение о медленной загрузке
      if (navData.totalTime > CONFIG.thresholds.slowNavigation) {
        console.warn('[Performance API] Slow navigation detected:', navData.totalTime + 'ms');
      }
      
    } catch (error) {
      console.error('[Performance API] Navigation tracking error:', error);
    }
  }
  
  // ========================================
  // RESOURCE TIMING
  // ========================================
  
  function trackResourceTiming() {
    if (!CONFIG.trackResource) return;
    
    try {
      const resources = performance.getEntriesByType('resource');
      
      resources.forEach(resource => {
        const resourceData = {
          name: resource.name,
          type: getResourceType(resource.name),
          size: resource.transferSize || 0,
          duration: Math.round(resource.duration),
          ttfb: Math.round(resource.responseStart - resource.requestStart),
          download: Math.round(resource.responseEnd - resource.responseStart),
          rating: getResourceRating(resource.duration)
        };
        
        performanceData.resources.push(resourceData);
        
        // Предупреждение о медленных ресурсах
        if (resource.duration > CONFIG.thresholds.slowResource) {
          console.warn('[Performance API] Slow resource:', resource.name, resource.duration + 'ms');
        }
      });
      
      // Ограничиваем количество записей
      if (performanceData.resources.length > CONFIG.maxEntries) {
        performanceData.resources = performanceData.resources.slice(-CONFIG.maxEntries);
      }
      
      console.log('[Performance API] Resources tracked:', performanceData.resources.length);
      
    } catch (error) {
      console.error('[Performance API] Resource tracking error:', error);
    }
  }
  
  // ========================================
  // USER TIMING
  // ========================================
  
  function trackUserTiming() {
    if (!CONFIG.trackUserTiming) return;
    
    try {
      const userTiming = performance.getEntriesByType('measure');
      
      userTiming.forEach(measure => {
        const timingData = {
          name: measure.name,
          duration: Math.round(measure.duration),
          startTime: Math.round(measure.startTime),
          timestamp: Date.now()
        };
        
        performanceData.userTiming.push(timingData);
      });
      
      // Ограничиваем количество записей
      if (performanceData.userTiming.length > CONFIG.maxEntries) {
        performanceData.userTiming = performanceData.userTiming.slice(-CONFIG.maxEntries);
      }
      
      console.log('[Performance API] User timing tracked:', performanceData.userTiming.length);
      
    } catch (error) {
      console.error('[Performance API] User timing tracking error:', error);
    }
  }
  
  // ========================================
  // LONG TASKS
  // ========================================
  
  function trackLongTasks() {
    if (!CONFIG.trackLongTasks || !('PerformanceObserver' in window)) return;
    
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        
        entries.forEach(entry => {
          const longTaskData = {
            duration: Math.round(entry.duration),
            startTime: Math.round(entry.startTime),
            timestamp: Date.now(),
            rating: entry.duration > CONFIG.thresholds.longTask ? 'poor' : 'good'
          };
          
          performanceData.longTasks.push(longTaskData);
          
          // Предупреждение о длительных задачах
          if (entry.duration > CONFIG.thresholds.longTask) {
            console.warn('[Performance API] Long task detected:', entry.duration + 'ms');
          }
        });
        
        // Ограничиваем количество записей
        if (performanceData.longTasks.length > CONFIG.maxEntries) {
          performanceData.longTasks = performanceData.longTasks.slice(-CONFIG.maxEntries);
        }
      });
      
      observer.observe({ entryTypes: ['longtask'] });
      console.log('[Performance API] Long tasks tracking enabled');
      
    } catch (error) {
      console.error('[Performance API] Long tasks tracking error:', error);
    }
  }
  
  // ========================================
  // MEMORY API
  // ========================================
  
  function trackMemoryUsage() {
    if (!('memory' in performance)) return;
    
    try {
      const memory = performance.memory;
      
      performanceData.memory = {
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024), // MB
        usage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100), // %
        timestamp: Date.now()
      };
      
      console.log('[Performance API] Memory usage:', performanceData.memory);
      
    } catch (error) {
      console.error('[Performance API] Memory tracking error:', error);
    }
  }
  
  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  
  // Определение типа ресурса
  function getResourceType(url) {
    if (url.includes('.css')) return 'stylesheet';
    if (url.includes('.js')) return 'script';
    if (url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg') || url.includes('.gif') || url.includes('.svg')) return 'image';
    if (url.includes('.woff') || url.includes('.ttf')) return 'font';
    if (url.includes('api/') || url.includes('/api')) return 'api';
    return 'other';
  }
  
  // Рейтинг навигации
  function getNavigationRating(totalTime) {
    if (totalTime < 2000) return 'good';
    if (totalTime < 4000) return 'needs-improvement';
    return 'poor';
  }
  
  // Рейтинг ресурса
  function getResourceRating(duration) {
    if (duration < 500) return 'good';
    if (duration < 1000) return 'needs-improvement';
    return 'poor';
  }
  
  // ========================================
  // ANALYTICS INTEGRATION
  // ========================================
  
  // Отправка в Google Analytics
  function sendToGoogleAnalytics(data) {
    if (!CONFIG.sendToAnalytics || !window.gtag) return;
    
    try {
      // Navigation timing
      if (data.navigation) {
        window.gtag('event', 'performance_navigation', {
          event_category: 'Performance',
          value: data.navigation.totalTime,
          custom_map: {
            dns_time: data.navigation.dns,
            tcp_time: data.navigation.tcp,
            ttfb: data.navigation.ttfb
          }
        });
      }
      
      // Memory usage
      if (data.memory) {
        window.gtag('event', 'performance_memory', {
          event_category: 'Performance',
          value: data.memory.usage,
          custom_map: {
            memory_used: data.memory.used,
            memory_total: data.memory.total
          }
        });
      }
      
    } catch (error) {
      console.error('[Performance API] Google Analytics error:', error);
    }
  }
  
  // Отправка в Яндекс.Метрику
  function sendToYandexMetrika(data) {
    if (!CONFIG.sendToAnalytics || !window.ym) return;
    
    try {
      // Navigation timing
      if (data.navigation) {
        window.ym(window.YANDEX_COUNTER_ID, 'reachGoal', 'performance_navigation', {
          totalTime: data.navigation.totalTime,
          rating: data.navigation.rating
        });
      }
      
      // Memory usage
      if (data.memory) {
        window.ym(window.YANDEX_COUNTER_ID, 'reachGoal', 'performance_memory', {
          usage: data.memory.usage,
          used: data.memory.used
        });
      }
      
    } catch (error) {
      console.error('[Performance API] Yandex Metrika error:', error);
    }
  }
  
  // Сохранение в localStorage
  function storeLocally() {
    if (!CONFIG.storeLocally) return;
    
    try {
      const stored = JSON.parse(localStorage.getItem('performance-data') || '[]');
      stored.push({
        ...performanceData,
        timestamp: Date.now()
      });
      
      // Храним только последние 20 записей
      if (stored.length > 20) {
        stored.splice(0, stored.length - 20);
      }
      
      localStorage.setItem('performance-data', JSON.stringify(stored));
    } catch (error) {
      console.error('[Performance API] Local storage error:', error);
    }
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  function init() {
    console.log('[Performance API] Initializing...');
    
    // Запуск трекинга
    trackNavigationTiming();
    trackResourceTiming();
    trackUserTiming();
    trackLongTasks();
    trackMemoryUsage();
    
    // Периодическое обновление данных
    setInterval(() => {
      trackResourceTiming();
      trackUserTiming();
      trackMemoryUsage();
    }, 10000); // каждые 10 секунд
    
    // Отправка данных при уходе со страницы
    window.addEventListener('beforeunload', () => {
      sendToGoogleAnalytics(performanceData);
      sendToYandexMetrika(performanceData);
      storeLocally();
    });
    
    console.log('[Performance API] Initialized successfully');
  }
  
  // Запуск при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Экспорт для внешнего использования
  window.PerformanceAPI = {
    getData: () => ({ ...performanceData }),
    trackCustomMeasure: (name, startMark, endMark) => {
      try {
        performance.measure(name, startMark, endMark);
      } catch (error) {
        console.error('[Performance API] Custom measure error:', error);
      }
    },
    mark: (name) => {
      try {
        performance.mark(name);
      } catch (error) {
        console.error('[Performance API] Mark error:', error);
      }
    },
    config: CONFIG
  };
  
})();
