// AI-People Web Vitals Tracker
// Отслеживание Core Web Vitals и дополнительных метрик производительности
// Версия: 1.0.0

(function() {
  'use strict';
  
  // Конфигурация
  const CONFIG = {
    // Пороги для Core Web Vitals
    thresholds: {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 800, poor: 1800 }
    },
    
    // Настройки отправки данных
    sendToAnalytics: true,
    sendToYandex: true,
    storeLocally: true,
    
    // Интервал отправки (мс)
    sendInterval: 30000
  };
  
  // Хранилище метрик
  let metrics = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    tti: null,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent
  };
  
  // Буфер для отправки данных
  let metricsBuffer = [];
  
  // ========================================
  // CORE WEB VITALS TRACKING
  // ========================================
  
  // Largest Contentful Paint (LCP)
  function trackLCP() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        metrics.lcp = {
          value: Math.round(lastEntry.startTime),
          rating: getRating(lastEntry.startTime, CONFIG.thresholds.lcp),
          element: lastEntry.element ? lastEntry.element.tagName : 'unknown',
          url: lastEntry.url || 'unknown'
        };
        
        console.log('[Web Vitals] LCP:', metrics.lcp);
        addToBuffer('lcp', metrics.lcp);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.error('[Web Vitals] LCP tracking error:', error);
    }
  }
  
  // First Input Delay (FID)
  function trackFID() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          
          metrics.fid = {
            value: Math.round(fid),
            rating: getRating(fid, CONFIG.thresholds.fid),
            eventType: entry.name,
            target: entry.target ? entry.target.tagName : 'unknown'
          };
          
          console.log('[Web Vitals] FID:', metrics.fid);
          addToBuffer('fid', metrics.fid);
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.error('[Web Vitals] FID tracking error:', error);
    }
  }
  
  // Cumulative Layout Shift (CLS)
  function trackCLS() {
    if (!('PerformanceObserver' in window)) return;
    
    let clsValue = 0;
    let clsEntries = [];
    
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            clsEntries.push({
              value: entry.value,
              sources: entry.sources ? entry.sources.map(s => s.node) : []
            });
          }
        });
        
        metrics.cls = {
          value: Math.round(clsValue * 1000) / 1000,
          rating: getRating(clsValue, CONFIG.thresholds.cls),
          entries: clsEntries.length
        };
        
        console.log('[Web Vitals] CLS:', metrics.cls);
        addToBuffer('cls', metrics.cls);
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.error('[Web Vitals] CLS tracking error:', error);
    }
  }
  
  // ========================================
  // ADDITIONAL METRICS
  // ========================================
  
  // First Contentful Paint (FCP)
  function trackFCP() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcpEntry = entries[0];
        
        metrics.fcp = {
          value: Math.round(fcpEntry.startTime),
          rating: getRating(fcpEntry.startTime, CONFIG.thresholds.fcp)
        };
        
        console.log('[Web Vitals] FCP:', metrics.fcp);
        addToBuffer('fcp', metrics.fcp);
      });
      
      observer.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.error('[Web Vitals] FCP tracking error:', error);
    }
  }
  
  // Time to First Byte (TTFB)
  function trackTTFB() {
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        
        metrics.ttfb = {
          value: Math.round(ttfb),
          rating: getRating(ttfb, CONFIG.thresholds.ttfb)
        };
        
        console.log('[Web Vitals] TTFB:', metrics.ttfb);
        addToBuffer('ttfb', metrics.ttfb);
      }
    } catch (error) {
      console.error('[Web Vitals] TTFB tracking error:', error);
    }
  }
  
  // Time to Interactive (TTI) - приблизительный расчет
  function trackTTI() {
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        // Приблизительный TTI = DOM Content Loaded + 5 секунд
        const tti = navigationEntry.domContentLoadedEventEnd + 5000;
        
        metrics.tti = {
          value: Math.round(tti),
          rating: getRating(tti, { good: 3800, poor: 7300 })
        };
        
        console.log('[Web Vitals] TTI:', metrics.tti);
        addToBuffer('tti', metrics.tti);
      }
    } catch (error) {
      console.error('[Web Vitals] TTI tracking error:', error);
    }
  }
  
  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  
  // Определение рейтинга метрики
  function getRating(value, thresholds) {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  }
  
  // Добавление в буфер для отправки
  function addToBuffer(metricName, data) {
    metricsBuffer.push({
      metric: metricName,
      data: data,
      timestamp: Date.now(),
      url: window.location.href
    });
    
    // Отправка через интервал
    if (metricsBuffer.length >= 5) {
      sendMetrics();
    }
  }
  
  // Сохранение в localStorage
  function storeLocally() {
    if (!CONFIG.storeLocally) return;
    
    try {
      const stored = JSON.parse(localStorage.getItem('web-vitals') || '[]');
      stored.push({
        ...metrics,
        timestamp: Date.now()
      });
      
      // Храним только последние 50 записей
      if (stored.length > 50) {
        stored.splice(0, stored.length - 50);
      }
      
      localStorage.setItem('web-vitals', JSON.stringify(stored));
    } catch (error) {
      console.error('[Web Vitals] Local storage error:', error);
    }
  }
  
  // ========================================
  // ANALYTICS INTEGRATION
  // ========================================
  
  // Отправка в Google Analytics 4
  function sendToGoogleAnalytics(metricName, data) {
    if (!CONFIG.sendToAnalytics || !window.gtag) return;
    
    try {
      window.gtag('event', 'web_vitals', {
        name: metricName,
        value: data.value,
        event_category: 'Web Vitals',
        event_label: data.rating,
        custom_map: {
          metric_rating: data.rating
        }
      });
    } catch (error) {
      console.error('[Web Vitals] Google Analytics error:', error);
    }
  }
  
  // Отправка в Яндекс.Метрику
  function sendToYandexMetrika(metricName, data) {
    if (!CONFIG.sendToYandex || !window.ym) return;
    
    try {
      window.ym(window.YANDEX_COUNTER_ID, 'reachGoal', 'web_vitals_' + metricName, {
        value: data.value,
        rating: data.rating
      });
    } catch (error) {
      console.error('[Web Vitals] Yandex Metrika error:', error);
    }
  }
  
  // Отправка метрик
  function sendMetrics() {
    if (metricsBuffer.length === 0) return;
    
    const dataToSend = [...metricsBuffer];
    metricsBuffer = [];
    
    // Отправка в аналитику
    dataToSend.forEach(item => {
      sendToGoogleAnalytics(item.metric, item.data);
      sendToYandexMetrika(item.metric, item.data);
    });
    
    // Сохранение локально
    storeLocally();
    
    console.log('[Web Vitals] Metrics sent:', dataToSend.length);
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  // Инициализация трекинга
  function init() {
    console.log('[Web Vitals] Initializing...');
    
    // Запуск трекинга метрик
    trackLCP();
    trackFID();
    trackCLS();
    trackFCP();
    trackTTFB();
    trackTTI();
    
    // Отправка метрик через интервал
    setInterval(sendMetrics, CONFIG.sendInterval);
    
    // Отправка при уходе со страницы
    window.addEventListener('beforeunload', sendMetrics);
    
    // Отправка при изменении видимости
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        sendMetrics();
      }
    });
    
    console.log('[Web Vitals] Initialized successfully');
  }
  
  // Запуск при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Экспорт для внешнего использования
  window.WebVitals = {
    getMetrics: () => ({ ...metrics }),
    getBuffer: () => [...metricsBuffer],
    sendMetrics: sendMetrics,
    config: CONFIG
  };
  
})();
