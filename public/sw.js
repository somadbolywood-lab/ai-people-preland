// ========================================
// SERVICE WORKER - CACHE MANAGEMENT
// Автоочистка кэша и управление ресурсами
// ========================================

const CACHE_NAME = 'ai-people-v1.0.1';
const STATIC_CACHE = 'ai-people-static-v1.0.1';
const DYNAMIC_CACHE = 'ai-people-dynamic-v1.0.1';

// Ресурсы для кэширования
const STATIC_ASSETS = [
  '/',
  '/globals.css',
  '/scripts/main-init.js',
  '/scripts/polyfills.js',
  '/scripts/ui-components.js',
  '/scripts/language.js',
  '/faq/AI-people Logo.png',
  '/assets/models/model-01.png',
  '/assets/models/model-02.png',
  '/assets/models/model-03.png',
  '/assets/models/model-04.png',
  '/assets/models/model-05.png',
  '/assets/models/model-06.png',
  '/assets/models/model-07.png',
  '/assets/models/model-08.png',
  '/assets/models/model-09.png',
  '/assets/models/model-10.png',
  '/assets/models/model-11.png',
  '/assets/models/model-12.png',
  '/assets/models/model-13.png',
  '/assets/models/model-14.png',
  '/assets/models/model-15.png',
  '/assets/models/model-16.png',
  '/assets/models/model-17.png',
  '/assets/models/model-18.png',
  '/assets/models/model-19.png'
];

// Установка Service Worker
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Error caching static assets:', error);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Удаляем старые кэши
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Перехват запросов
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Пропускаем не-GET запросы
  if (request.method !== 'GET') {
    return;
  }
  
  // Пропускаем внешние запросы
  if (url.origin !== location.origin) {
    return;
  }
  
  // Стратегия кэширования для разных типов ресурсов
  if (request.url.includes('/scripts/') || request.url.includes('/assets/')) {
    // Статические ресурсы - Cache First
    event.respondWith(cacheFirst(request));
  } else if (request.url.includes('/blog/') || request.url.includes('/api/')) {
    // Динамический контент - Network First
    event.respondWith(networkFirst(request));
  } else {
    // HTML страницы - Stale While Revalidate
    event.respondWith(staleWhileRevalidate(request));
  }
});

// Cache First стратегия
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache First error:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network First стратегия
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate стратегия
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Если сеть недоступна, возвращаем кэшированную версию
    return cachedResponse || new Response('Offline', { status: 503 });
  });
  
  return cachedResponse || fetchPromise;
}

// Обработка сообщений от клиента
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    clearAllCaches();
  }
});

// Очистка всех кэшей
async function clearAllCaches() {
  console.log('[SW] Clearing all caches...');
  
  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('[SW] All caches cleared successfully');
  } catch (error) {
    console.error('[SW] Error clearing caches:', error);
  }
}

// Периодическая очистка старых кэшей
setInterval(() => {
  clearOldCaches();
}, 24 * 60 * 60 * 1000); // Каждые 24 часа

async function clearOldCaches() {
  const cacheNames = await caches.keys();
  const currentTime = Date.now();
  const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 дней
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const dateHeader = response.headers.get('date');
        if (dateHeader) {
          const responseTime = new Date(dateHeader).getTime();
          if (currentTime - responseTime > maxAge) {
            await cache.delete(request);
          }
        }
      }
    }
  }
}

console.log('[SW] Service Worker script loaded');


