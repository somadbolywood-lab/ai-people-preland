// AI-People Service Worker - PWA & Performance
// Version: 2.0.0
// Cache Strategy: Cache First for static assets, Network First for API
// PWA Features: Offline support, Background sync, Push notifications

const CACHE_NAME = 'ai-people-pwa-v2.0.0';
const STATIC_CACHE = 'ai-people-static-v2.0.0';
const DYNAMIC_CACHE = 'ai-people-dynamic-v2.0.0';
const IMAGES_CACHE = 'ai-people-images-v2.0.0';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/manifest.json',
  '/styles/critical.css',
  '/scripts/theme.js',
  '/scripts/main-init.js',
  '/scripts/async-loader.js',
  '/scripts/critical-path-optimization.js',
  '/scripts/web-vitals.js',
  '/scripts/performance-api.js',
  '/scripts/yandex-metrika.js',
  '/scripts/performance.js',
  '/scripts/language.js',
  '/scripts/ui-components.js',
  '/scripts/sw-register.js',
  '/faq/AI-people Logo.png',
  '/faq/Favicon.png',
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
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Offline fallback pages
const OFFLINE_PAGES = [
  '/offline',
  '/blog/offline',
  '/faq/offline'
];

// API endpoints for dynamic caching
const API_ENDPOINTS = [
  '/api/blog',
  '/api/leads/buyer',
  '/api/leads/creator'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching critical resources...');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('[SW] Critical resources cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Failed to cache critical resources:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
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

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Strategy 1: Cache First for static assets
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request));
    return;
  }
  
  // Strategy 2: Network First for API calls
  if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request));
    return;
  }
  
  // Strategy 3: Stale While Revalidate for pages
  if (isPageRequest(request)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }
  
  // Default: Network First
  event.respondWith(networkFirst(request));
});

// Cache First Strategy - for static assets
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
    console.error('[SW] Cache First failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network First Strategy - for API calls
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

// Stale While Revalidate Strategy - for pages
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Helper functions
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|ico)$/);
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
}

function isPageRequest(request) {
  const url = new URL(request.url);
  return url.pathname === '/' || 
         url.pathname.startsWith('/blog') ||
         url.pathname.startsWith('/faq') ||
         url.pathname.startsWith('/about') ||
         url.pathname.startsWith('/auth') ||
         url.pathname.startsWith('/legal');
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('[SW] Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions
  console.log('[SW] Processing background sync...');
}

// Push notifications (for future use)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/faq/Favicon.png',
      badge: '/faq/Favicon.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Message handling
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker loaded successfully');
