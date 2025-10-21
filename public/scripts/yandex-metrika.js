// AI-People Яндекс.Метрика Integration
// Интеграция с Яндекс.Метрикой для российского рынка
// Версия: 1.0.0

(function() {
  'use strict';
  
  // Конфигурация Яндекс.Метрики
  const YANDEX_CONFIG = {
    // ID счетчика (будет установлен при подключении)
    counterId: null,
    
    // Настройки счетчика
    settings: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      trackHash: true,
      defer: true,
      ecommerce: true,
      userParams: true
    },
    
    // Дополнительные настройки
    advanced: {
      // Отслеживание Web Vitals
      trackWebVitals: true,
      
      // Отслеживание производительности
      trackPerformance: true,
      
      // Отслеживание ошибок
      trackErrors: true,
      
      // Отслеживание конверсий
      trackConversions: true,
      
      // Пользовательские цели
      customGoals: {
        'page_view': 'Просмотр страницы',
        'button_click': 'Клик по кнопке',
        'form_submit': 'Отправка формы',
        'video_play': 'Воспроизведение видео',
        'download': 'Скачивание файла',
        'scroll_depth': 'Глубина прокрутки',
        'time_on_page': 'Время на странице'
      }
    }
  };
  
  // Состояние инициализации
  let isInitialized = false;
  let isLoaded = false;
  
  // ========================================
  // YANDEX METRIKA INITIALIZATION
  // ========================================
  
  // Инициализация Яндекс.Метрики
  function initYandexMetrika(counterId) {
    if (isInitialized) {
      console.warn('[Yandex Metrika] Already initialized');
      return;
    }
    
    if (!counterId) {
      console.error('[Yandex Metrika] Counter ID is required');
      return;
    }
    
    YANDEX_CONFIG.counterId = counterId;
    
    try {
      // Создание функции ym
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
      // Инициализация счетчика
      window.ym(counterId, "init", YANDEX_CONFIG.settings);
      
      // Установка глобального ID для других скриптов
      window.YANDEX_COUNTER_ID = counterId;
      
      isInitialized = true;
      console.log('[Yandex Metrika] Initialized with counter ID:', counterId);
      
      // Запуск дополнительных трекеров
      if (YANDEX_CONFIG.advanced.trackWebVitals) {
        initWebVitalsTracking();
      }
      
      if (YANDEX_CONFIG.advanced.trackPerformance) {
        initPerformanceTracking();
      }
      
      if (YANDEX_CONFIG.advanced.trackErrors) {
        initErrorTracking();
      }
      
      if (YANDEX_CONFIG.advanced.trackConversions) {
        initConversionTracking();
      }
      
    } catch (error) {
      console.error('[Yandex Metrika] Initialization error:', error);
    }
  }
  
  // ========================================
  // WEB VITALS TRACKING
  // ========================================
  
  function initWebVitalsTracking() {
    if (!window.WebVitals) {
      console.warn('[Yandex Metrika] WebVitals not available');
      return;
    }
    
    // Отслеживание LCP
    if (window.WebVitals.getMetrics().lcp) {
      const lcp = window.WebVitals.getMetrics().lcp;
      window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'web_vitals_lcp', {
        value: lcp.value,
        rating: lcp.rating
      });
    }
    
    // Отслеживание FID
    if (window.WebVitals.getMetrics().fid) {
      const fid = window.WebVitals.getMetrics().fid;
      window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'web_vitals_fid', {
        value: fid.value,
        rating: fid.rating
      });
    }
    
    // Отслеживание CLS
    if (window.WebVitals.getMetrics().cls) {
      const cls = window.WebVitals.getMetrics().cls;
      window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'web_vitals_cls', {
        value: cls.value,
        rating: cls.rating
      });
    }
    
    console.log('[Yandex Metrika] Web Vitals tracking enabled');
  }
  
  // ========================================
  // PERFORMANCE TRACKING
  // ========================================
  
  function initPerformanceTracking() {
    if (!window.PerformanceAPI) {
      console.warn('[Yandex Metrika] PerformanceAPI not available');
      return;
    }
    
    // Отслеживание времени загрузки страницы
    window.addEventListener('load', () => {
      const perfData = window.PerformanceAPI.getData();
      
      if (perfData.navigation) {
        window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'page_load_time', {
          totalTime: perfData.navigation.totalTime,
          rating: perfData.navigation.rating
        });
      }
      
      if (perfData.memory) {
        window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'memory_usage', {
          usage: perfData.memory.usage,
          used: perfData.memory.used
        });
      }
    });
    
    console.log('[Yandex Metrika] Performance tracking enabled');
  }
  
  // ========================================
  // ERROR TRACKING
  // ========================================
  
  function initErrorTracking() {
    // Отслеживание JavaScript ошибок
    window.addEventListener('error', (event) => {
      window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });
    
    // Отслеживание необработанных Promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'promise_rejection', {
        reason: event.reason ? event.reason.toString() : 'Unknown error'
      });
    });
    
    console.log('[Yandex Metrika] Error tracking enabled');
  }
  
  // ========================================
  // CONVERSION TRACKING
  // ========================================
  
  function initConversionTracking() {
    // Отслеживание кликов по кнопкам
    document.addEventListener('click', (event) => {
      const target = event.target;
      
      // Кнопки с data-ym-goal
      if (target.hasAttribute('data-ym-goal')) {
        const goal = target.getAttribute('data-ym-goal');
        const params = target.getAttribute('data-ym-params') ? 
                      JSON.parse(target.getAttribute('data-ym-params')) : {};
        
        window.ym(YANDEX_CONFIG.counterId, 'reachGoal', goal, params);
      }
      
      // Кнопки регистрации
      if (target.matches('a[href*="/auth/"], button[class*="btn"]')) {
        window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'button_click', {
          element: target.tagName,
          text: target.textContent.trim(),
          href: target.href || 'button'
        });
      }
    });
    
    // Отслеживание отправки форм
    document.addEventListener('submit', (event) => {
      const form = event.target;
      
      window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'form_submit', {
        formId: form.id || 'unknown',
        formClass: form.className || 'unknown',
        action: form.action || 'unknown'
      });
    });
    
    // Отслеживание воспроизведения видео
    document.addEventListener('play', (event) => {
      if (event.target.tagName === 'VIDEO') {
        window.ym(YANDEX_CONFIG.counterId, 'reachGoal', 'video_play', {
          videoSrc: event.target.src || 'unknown'
        });
      }
    });
    
    console.log('[Yandex Metrika] Conversion tracking enabled');
  }
  
  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  
  // Отправка пользовательской цели
  function reachGoal(goalName, params = {}) {
    if (!isInitialized) {
      console.warn('[Yandex Metrika] Not initialized');
      return;
    }
    
    try {
      window.ym(YANDEX_CONFIG.counterId, 'reachGoal', goalName, params);
      console.log('[Yandex Metrika] Goal reached:', goalName, params);
    } catch (error) {
      console.error('[Yandex Metrika] Goal error:', error);
    }
  }
  
  // Отправка параметров визита
  function setUserParams(params) {
    if (!isInitialized) {
      console.warn('[Yandex Metrika] Not initialized');
      return;
    }
    
    try {
      window.ym(YANDEX_CONFIG.counterId, 'userParams', params);
      console.log('[Yandex Metrika] User params set:', params);
    } catch (error) {
      console.error('[Yandex Metrika] User params error:', error);
    }
  }
  
  // Отправка параметров страницы
  function setPageParams(params) {
    if (!isInitialized) {
      console.warn('[Yandex Metrika] Not initialized');
      return;
    }
    
    try {
      window.ym(YANDEX_CONFIG.counterId, 'params', params);
      console.log('[Yandex Metrika] Page params set:', params);
    } catch (error) {
      console.error('[Yandex Metrika] Page params error:', error);
    }
  }
  
  // ========================================
  // E-COMMERCE TRACKING
  // ========================================
  
  // Отслеживание просмотра товара
  function trackProductView(product) {
    if (!isInitialized) return;
    
    try {
      window.ym(YANDEX_CONFIG.counterId, 'ecommerce', 'detail', {
        currency: 'USD',
        products: [{
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          quantity: 1
        }]
      });
    } catch (error) {
      console.error('[Yandex Metrika] Product view error:', error);
    }
  }
  
  // Отслеживание добавления в корзину
  function trackAddToCart(product) {
    if (!isInitialized) return;
    
    try {
      window.ym(YANDEX_CONFIG.counterId, 'ecommerce', 'add', {
        currency: 'USD',
        products: [{
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          quantity: product.quantity || 1
        }]
      });
    } catch (error) {
      console.error('[Yandex Metrika] Add to cart error:', error);
    }
  }
  
  // Отслеживание покупки
  function trackPurchase(order) {
    if (!isInitialized) return;
    
    try {
      window.ym(YANDEX_CONFIG.counterId, 'ecommerce', 'purchase', {
        currency: 'USD',
        transaction_id: order.id,
        revenue: order.total,
        products: order.products
      });
    } catch (error) {
      console.error('[Yandex Metrika] Purchase error:', error);
    }
  }
  
  // ========================================
  // INITIALIZATION
  // ========================================
  
  // Автоматическая инициализация при загрузке
  function autoInit() {
    // Проверяем наличие счетчика в конфигурации
    const counterId = window.YANDEX_METRIKA_ID || null;
    
    if (counterId) {
      initYandexMetrika(counterId);
    } else {
      console.log('[Yandex Metrika] Counter ID not found. Use YandexMetrika.init(counterId) to initialize manually.');
    }
  }
  
  // Запуск при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
  
  // Экспорт для внешнего использования
  window.YandexMetrika = {
    init: initYandexMetrika,
    reachGoal: reachGoal,
    setUserParams: setUserParams,
    setPageParams: setPageParams,
    trackProductView: trackProductView,
    trackAddToCart: trackAddToCart,
    trackPurchase: trackPurchase,
    config: YANDEX_CONFIG,
    isInitialized: () => isInitialized
  };
  
  console.log('[Yandex Metrika] Script loaded successfully');
  
})();
