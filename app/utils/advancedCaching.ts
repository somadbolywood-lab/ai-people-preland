// AI-People Advanced Caching Utilities
// Продвинутые утилиты для кэширования и оптимизации загрузки
// Версия: 1.0.0

// ========================================
// TYPES
// ========================================

interface CacheConfig {
  name: string;
  maxAge: number;
  maxSize: number;
  strategy: 'cache-first' | 'network-first' | 'stale-while-revalidate';
}

interface CacheEntry {
  data: any;
  timestamp: number;
  expires: number;
  size: number;
}

interface PreloadConfig {
  resources: string[];
  priority: 'high' | 'medium' | 'low';
  timeout: number;
}

// ========================================
// CONFIGURATION
// ========================================

const CACHE_CONFIGS: Record<string, CacheConfig> = {
  critical: {
    name: 'critical-resources',
    maxAge: 24 * 60 * 60 * 1000, // 24 часа
    maxSize: 50,
    strategy: 'cache-first'
  },
  api: {
    name: 'api-cache',
    maxAge: 5 * 60 * 1000, // 5 минут
    maxSize: 100,
    strategy: 'network-first'
  },
  images: {
    name: 'image-cache',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    maxSize: 200,
    strategy: 'cache-first'
  },
  scripts: {
    name: 'script-cache',
    maxAge: 24 * 60 * 60 * 1000, // 24 часа
    maxSize: 50,
    strategy: 'cache-first'
  }
};

// ========================================
// ADVANCED CACHING
// ========================================

/**
 * Продвинутый кэш с TTL и размером
 */
export class AdvancedCache {
  private cache: Map<string, CacheEntry> = new Map();
  private config: CacheConfig;
  
  constructor(config: CacheConfig) {
    this.config = config;
    this.cleanup();
  }
  
  /**
   * Получает данные из кэша
   */
  get(key: string): any | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }
    
    // Проверяем срок действия
    if (Date.now() > entry.expires) {
      this.cache.delete(key);
      return null;
    }
    
    // Обновляем время доступа
    entry.timestamp = Date.now();
    return entry.data;
  }
  
  /**
   * Сохраняет данные в кэш
   */
  set(key: string, data: any): void {
    const size = this.calculateSize(data);
    
    // Проверяем размер кэша
    if (this.getCacheSize() + size > this.config.maxSize) {
      this.evictOldest();
    }
    
    const entry: CacheEntry = {
      data,
      timestamp: Date.now(),
      expires: Date.now() + this.config.maxAge,
      size
    };
    
    this.cache.set(key, entry);
  }
  
  /**
   * Удаляет данные из кэша
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }
  
  /**
   * Очищает весь кэш
   */
  clear(): void {
    this.cache.clear();
  }
  
  /**
   * Получает размер кэша
   */
  private getCacheSize(): number {
    let totalSize = 0;
    for (const entry of this.cache.values()) {
      totalSize += entry.size;
    }
    return totalSize;
  }
  
  /**
   * Вычисляет размер данных
   */
  private calculateSize(data: any): number {
    try {
      return JSON.stringify(data).length;
    } catch {
      return 1000; // Примерный размер
    }
  }
  
  /**
   * Удаляет самые старые записи
   */
  private evictOldest(): void {
    const entries = Array.from(this.cache.entries());
    entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
    
    // Удаляем 25% самых старых записей
    const toDelete = Math.ceil(entries.length * 0.25);
    for (let i = 0; i < toDelete; i++) {
      this.cache.delete(entries[i][0]);
    }
  }
  
  /**
   * Очистка устаревших записей
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expires) {
        this.cache.delete(key);
      }
    }
  }
  
  /**
   * Получает статистику кэша
   */
  getStats() {
    return {
      size: this.cache.size,
      totalSize: this.getCacheSize(),
      config: this.config
    };
  }
}

// ========================================
// CACHE MANAGER
// ========================================

/**
 * Менеджер кэшей
 */
export class CacheManager {
  private caches: Map<string, AdvancedCache> = new Map();
  
  constructor() {
    this.initializeCaches();
  }
  
  /**
   * Инициализирует кэши
   */
  private initializeCaches(): void {
    Object.entries(CACHE_CONFIGS).forEach(([name, config]) => {
      this.caches.set(name, new AdvancedCache(config));
    });
  }
  
  /**
   * Получает кэш по имени
   */
  getCache(name: string): AdvancedCache | null {
    return this.caches.get(name) || null;
  }
  
  /**
   * Получает данные из кэша
   */
  get(cacheName: string, key: string): any | null {
    const cache = this.getCache(cacheName);
    return cache ? cache.get(key) : null;
  }
  
  /**
   * Сохраняет данные в кэш
   */
  set(cacheName: string, key: string, data: any): void {
    const cache = this.getCache(cacheName);
    if (cache) {
      cache.set(key, data);
    }
  }
  
  /**
   * Очищает все кэши
   */
  clearAll(): void {
    this.caches.forEach(cache => cache.clear());
  }
  
  /**
   * Получает статистику всех кэшей
   */
  getAllStats() {
    const stats: Record<string, any> = {};
    this.caches.forEach((cache, name) => {
      stats[name] = cache.getStats();
    });
    return stats;
  }
}

// ========================================
// PRELOADING UTILITIES
// ========================================

/**
 * Предзагрузка ресурсов
 */
export class ResourcePreloader {
  private preloadQueue: Set<string> = new Set();
  private preloadedResources: Set<string> = new Set();
  
  /**
   * Предзагружает ресурсы
   */
  async preloadResources(config: PreloadConfig): Promise<void> {
    const { resources, priority = 'medium', timeout = 5000 } = config;
    
    const preloadPromises = resources.map(resource => 
      this.preloadResource(resource, priority, timeout)
    );
    
    await Promise.allSettled(preloadPromises);
  }
  
  /**
   * Предзагружает один ресурс
   */
  private async preloadResource(
    url: string, 
    priority: string, 
    timeout: number
  ): Promise<void> {
    if (this.preloadedResources.has(url)) {
      return;
    }
    
    if (this.preloadQueue.has(url)) {
      return;
    }
    
    this.preloadQueue.add(url);
    
    try {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.setAttribute('fetchpriority', priority);
      
      // Определяем тип ресурса
      if (url.endsWith('.css')) {
        link.as = 'style';
      } else if (url.endsWith('.js')) {
        link.as = 'script';
      } else if (url.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/)) {
        link.as = 'image';
      } else if (url.match(/\.(woff|woff2|ttf|otf)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      }
      
      // Таймаут
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Preload timeout')), timeout);
      });
      
      const loadPromise = new Promise<void>((resolve, reject) => {
        link.onload = () => resolve();
        link.onerror = () => reject(new Error('Preload failed'));
        document.head.appendChild(link);
      });
      
      await Promise.race([loadPromise, timeoutPromise]);
      
      this.preloadedResources.add(url);
      console.log(`[Preloader] Preloaded: ${url}`);
      
    } catch (error) {
      console.warn(`[Preloader] Failed to preload ${url}:`, error);
    } finally {
      this.preloadQueue.delete(url);
    }
  }
  
  /**
   * Предзагружает по взаимодействию
   */
  preloadOnInteraction(
    resources: string[], 
    element: HTMLElement = document.body,
    eventType: string = 'click'
  ): void {
    const preloadHandler = () => {
      this.preloadResources({
        resources,
        priority: 'medium',
        timeout: 3000
      });
    };
    
    element.addEventListener(eventType, preloadHandler, { 
      once: true, 
      passive: true 
    });
  }
  
  /**
   * Предзагружает при видимости
   */
  preloadOnVisible(
    resources: string[], 
    element: HTMLElement,
    options: IntersectionObserverInit = {}
  ): void {
    const { threshold = 0.1, rootMargin = '50px' } = options;
    
    if (!('IntersectionObserver' in window)) {
      // Fallback для старых браузеров
      this.preloadResources({ resources, priority: 'medium', timeout: 5000 });
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.preloadResources({ resources, priority: 'medium', timeout: 5000 });
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
  }
  
  /**
   * Получает статистику предзагрузки
   */
  getStats() {
    return {
      preloaded: this.preloadedResources.size,
      inQueue: this.preloadQueue.size,
      preloadedResources: Array.from(this.preloadedResources)
    };
  }
}

// ========================================
// CACHE STRATEGIES
// ========================================

/**
 * Стратегии кэширования
 */
export class CacheStrategies {
  private cacheManager: CacheManager;
  
  constructor(cacheManager: CacheManager) {
    this.cacheManager = cacheManager;
  }
  
  /**
   * Cache First стратегия
   */
  async cacheFirst(url: string, cacheName: string = 'critical'): Promise<Response> {
    const cache = this.cacheManager.getCache(cacheName);
    const cachedResponse = cache?.get(url);
    
    if (cachedResponse) {
      return new Response(cachedResponse);
    }
    
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.clone().text();
        cache?.set(url, data);
      }
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch ${url}: ${error}`);
    }
  }
  
  /**
   * Network First стратегия
   */
  async networkFirst(url: string, cacheName: string = 'api'): Promise<Response> {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.clone().text();
        this.cacheManager.set(cacheName, url, data);
      }
      return response;
    } catch (error) {
      const cache = this.cacheManager.getCache(cacheName);
      const cachedResponse = cache?.get(url);
      
      if (cachedResponse) {
        return new Response(cachedResponse);
      }
      
      throw new Error(`Failed to fetch ${url}: ${error}`);
    }
  }
  
  /**
   * Stale While Revalidate стратегия
   */
  async staleWhileRevalidate(url: string, cacheName: string = 'images'): Promise<Response> {
    const cache = this.cacheManager.getCache(cacheName);
    const cachedResponse = cache?.get(url);
    
    // Возвращаем кэшированный ответ немедленно
    if (cachedResponse) {
      // Обновляем в фоне
      fetch(url).then(response => {
        if (response.ok) {
          response.clone().text().then(data => {
            cache?.set(url, data);
          });
        }
      }).catch(() => {
        // Игнорируем ошибки фонового обновления
      });
      
      return new Response(cachedResponse);
    }
    
    // Если нет кэша, загружаем из сети
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.clone().text();
        cache?.set(url, data);
      }
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch ${url}: ${error}`);
    }
  }
}

// ========================================
// INITIALIZATION
// ========================================

// Глобальные экземпляры
let cacheManager: CacheManager;
let resourcePreloader: ResourcePreloader;
let cacheStrategies: CacheStrategies;

/**
 * Инициализация системы кэширования
 */
export function initAdvancedCaching(): void {
  console.log('[Advanced Caching] Initializing...');
  
  // Создаем экземпляры
  cacheManager = new CacheManager();
  resourcePreloader = new ResourcePreloader();
  cacheStrategies = new CacheStrategies(cacheManager);
  
  // Предзагружаем критические ресурсы
  resourcePreloader.preloadResources({
    resources: [
      '/scripts/async-loader.js',
      '/scripts/critical-path-optimization.js',
      '/scripts/web-vitals.js'
    ],
    priority: 'high',
    timeout: 5000
  });
  
  // Предзагружаем по взаимодействию
  resourcePreloader.preloadOnInteraction(
    ['/scripts/ui-components.js', '/scripts/language.js'],
    document.body,
    'click'
  );
  
  console.log('[Advanced Caching] Initialized successfully');
}

// ========================================
// EXPORTS
// ========================================

export {
  cacheManager,
  resourcePreloader,
  cacheStrategies,
  CACHE_CONFIGS
};

export default {
  initAdvancedCaching,
  AdvancedCache,
  CacheManager,
  ResourcePreloader,
  CacheStrategies
};
