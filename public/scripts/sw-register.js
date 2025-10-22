// ========================================
// SERVICE WORKER REGISTRATION
// Регистрация и управление Service Worker
// ========================================

let swRegistration = null;

// Регистрация Service Worker
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      console.log('[SW] Registering Service Worker...');
      
      swRegistration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      console.log('[SW] Service Worker registered successfully:', swRegistration);
      
      // Обработка обновлений
      swRegistration.addEventListener('updatefound', () => {
        const newWorker = swRegistration.installing;
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // Новый Service Worker установлен
            console.log('[SW] New Service Worker installed, updating...');
            showUpdateNotification();
          }
        });
      });
      
      // Обработка контроллера
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[SW] Service Worker controller changed');
        // Перезагружаем страницу для применения обновлений
        window.location.reload();
      });
      
    } catch (error) {
      console.error('[SW] Service Worker registration failed:', error);
    }
  } else {
    console.log('[SW] Service Worker not supported');
  }
}

// Показать уведомление об обновлении
function showUpdateNotification() {
  // Создаем уведомление об обновлении
  const notification = document.createElement('div');
  notification.id = 'sw-update-notification';
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--bg-primary);
      color: var(--text-primary);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      max-width: 300px;
      font-family: Inter, system-ui, sans-serif;
    ">
      <div style="font-weight: 600; margin-bottom: 8px;">Обновление доступно</div>
      <div style="font-size: 14px; margin-bottom: 12px; opacity: 0.8;">
        Новая версия сайта готова к загрузке
      </div>
      <div style="display: flex; gap: 8px;">
        <button id="sw-update-btn" style="
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 14px;
          cursor: pointer;
          flex: 1;
        ">Обновить</button>
        <button id="sw-dismiss-btn" style="
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 14px;
          cursor: pointer;
        ">Позже</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Обработчики кнопок
  document.getElementById('sw-update-btn').addEventListener('click', () => {
    if (swRegistration && swRegistration.waiting) {
      swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    notification.remove();
  });
  
  document.getElementById('sw-dismiss-btn').addEventListener('click', () => {
    notification.remove();
  });
  
  // Автоматически скрыть через 10 секунд
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 10000);
}

// Очистка кэша
async function clearCache() {
  if (swRegistration) {
    try {
      // Отправляем сообщение Service Worker для очистки кэша
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'CLEAR_CACHE' });
      }
      
      // Очищаем кэш браузера
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }
      
      console.log('[SW] Cache cleared successfully');
      return true;
    } catch (error) {
      console.error('[SW] Error clearing cache:', error);
      return false;
    }
  }
  return false;
}

// Проверка обновлений
async function checkForUpdates() {
  if (swRegistration) {
    try {
      await swRegistration.update();
      console.log('[SW] Checking for updates...');
    } catch (error) {
      console.error('[SW] Error checking for updates:', error);
    }
  }
}

// Принудительное обновление
function forceUpdate() {
  if (swRegistration && swRegistration.waiting) {
    swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
  } else {
    window.location.reload(true);
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Принудительная очистка старого кэша для предотвращения FOUC
  if ('caches' in window) {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        if (cacheName.includes('v1.0.0')) {
          console.log('[SW] Clearing old cache:', cacheName);
          caches.delete(cacheName);
        }
      });
    });
  }
  
  registerServiceWorker();
  
  // Проверяем обновления каждые 30 минут
  setInterval(checkForUpdates, 30 * 60 * 1000);
  
  // Добавляем глобальные функции для отладки
  window.clearCache = clearCache;
  window.forceUpdate = forceUpdate;
  window.checkForUpdates = checkForUpdates;
});

// Экспорт функций для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    registerServiceWorker,
    clearCache,
    checkForUpdates,
    forceUpdate
  };
}

console.log('[SW] Service Worker registration script loaded');
