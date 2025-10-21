// Performance Monitoring & Optimization
// Tracks Core Web Vitals and optimizes user experience

(function() {
  'use strict';
  
  // Core Web Vitals tracking
  function trackWebVitals() {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('[Perf] LCP:', lastEntry.startTime);
      
      // Send to analytics if needed
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Web Vitals'
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('[Perf] FID:', entry.processingStart - entry.startTime);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
            event_category: 'Web Vitals'
          });
        }
      });
    }).observe({ entryTypes: ['first-input'] });
    
    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('[Perf] CLS:', clsValue);
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Web Vitals'
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }
  
  // Image lazy loading optimization
  function optimizeImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
  }
  
  // Preload critical resources on user interaction
  function preloadOnInteraction() {
    let hasInteracted = false;
    
    const preloadResources = [
      '/blog',
      '/faq',
      '/about',
      '/auth/role'
    ];
    
    function handleInteraction() {
      if (!hasInteracted) {
        hasInteracted = true;
        
        preloadResources.forEach(resource => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = resource;
          document.head.appendChild(link);
        });
        
        // Remove event listeners
        document.removeEventListener('mousedown', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
    }
    
    // Listen for first user interaction
    document.addEventListener('mousedown', handleInteraction, { passive: true });
    document.addEventListener('touchstart', handleInteraction, { passive: true });
    document.addEventListener('keydown', handleInteraction, { passive: true });
  }
  
  // Optimize font loading
  function optimizeFonts() {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
        console.log('[Perf] Fonts loaded');
      });
    }
  }
  
  // Initialize performance optimizations
  function init() {
    // Track Web Vitals
    trackWebVitals();
    
    // Optimize images
    optimizeImages();
    
    // Preload on interaction
    preloadOnInteraction();
    
    // Optimize fonts
    optimizeFonts();
    
    console.log('[Perf] Performance optimizations initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
