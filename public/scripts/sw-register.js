// Service Worker Registration
// Registers SW for performance optimization and offline support

(function() {
  'use strict';
  
  // Check if service workers are supported
  if (!('serviceWorker' in navigator)) {
    console.log('[SW] Service Workers not supported');
    return;
  }
  
  // Register service worker
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('[SW] Registration successful:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', function() {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', function() {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, refresh the page
              console.log('[SW] New content available, refreshing...');
              window.location.reload();
            }
          });
        });
        
        // Handle service worker messages
        navigator.serviceWorker.addEventListener('message', function(event) {
          if (event.data && event.data.type === 'CACHE_UPDATED') {
            console.log('[SW] Cache updated:', event.data.payload);
          }
        });
        
      })
      .catch(function(error) {
        console.error('[SW] Registration failed:', error);
      });
  });
  
  // Handle service worker updates
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
  
  // Preload critical resources when SW is ready
  navigator.serviceWorker.ready.then(function(registration) {
    console.log('[SW] Service Worker ready');
    
    // Preload additional resources
    const additionalResources = [
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
    
    // Cache additional resources in background
    additionalResources.forEach(function(resource) {
      fetch(resource).catch(function() {
        // Ignore errors for preloading
      });
    });
  });
  
})();
