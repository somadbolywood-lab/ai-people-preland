// AI-People Lazy Components
// Оптимизированные компоненты с lazy loading для улучшения производительности
// Версия: 1.0.0

import React, { lazy, Suspense, ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Fallback компонент для загрузки
function LoadingFallback({ componentName }: { componentName: string }) {
  return (
    <div className="loading-fallback" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '200px',
      background: 'var(--bg-secondary)',
      borderRadius: '12px',
      margin: '20px 0'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div className="spinner" style={{
          width: '32px',
          height: '32px',
          border: '3px solid var(--border)',
          borderTop: '3px solid var(--accent)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '14px',
          margin: 0
        }}>
          Загрузка {componentName}...
        </p>
      </div>
    </div>
  );
}

// Error fallback компонент
function ErrorFallback({ error, componentName }: { error: Error; componentName: string }) {
  return (
    <div className="error-fallback" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '200px',
      background: 'var(--bg-secondary)',
      borderRadius: '12px',
      margin: '20px 0',
      padding: '20px',
      border: '1px solid var(--danger)'
    }}>
      <h3 style={{
        color: 'var(--danger)',
        margin: '0 0 12px 0',
        fontSize: '16px'
      }}>
        Ошибка загрузки {componentName}
      </h3>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '14px',
        margin: '0 0 16px 0',
        textAlign: 'center'
      }}>
        Произошла ошибка при загрузке компонента. Попробуйте обновить страницу.
      </p>
      <button 
        onClick={() => window.location.reload()}
        style={{
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        Обновить страницу
      </button>
    </div>
  );
}

// HOC для lazy компонентов с обработкой ошибок
function withLazyLoading<T extends object>(
  Component: ComponentType<T>,
  componentName: string
) {
  return function LazyComponent(props: T) {
    return (
      <ErrorBoundary
        FallbackComponent={(errorProps) => (
          <ErrorFallback {...errorProps} componentName={componentName} />
        )}
        onError={(error, errorInfo) => {
          console.error(`Error in ${componentName}:`, error, errorInfo);
        }}
      >
        <Suspense fallback={<LoadingFallback componentName={componentName} />}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}

// ========================================
// LAZY COMPONENTS
// ========================================

// Blog компоненты - временно закомментированы до создания компонентов
// export const LazyBlogPost = withLazyLoading(
//   lazy(() => import('./BlogPost').then(module => ({ default: module.BlogPost }))),
//   'Blog Post'
// );

// export const LazyBlogList = withLazyLoading(
//   lazy(() => import('./BlogList').then(module => ({ default: module.BlogList }))),
//   'Blog List'
// );

// FAQ компоненты - временно закомментированы до создания компонентов
// export const LazyFAQSection = withLazyLoading(
//   lazy(() => import('./FAQSection').then(module => ({ default: module.FAQSection }))),
//   'FAQ Section'
// );

// export const LazyFAQItem = withLazyLoading(
//   lazy(() => import('./FAQItem').then(module => ({ default: module.FAQItem }))),
//   'FAQ Item'
// );

// Auth компоненты - временно закомментированы до создания компонентов
// export const LazyAuthForm = withLazyLoading(
//   lazy(() => import('./AuthForm').then(module => ({ default: module.AuthForm }))),
//   'Auth Form'
// );

// export const LazyRoleSelector = withLazyLoading(
//   lazy(() => import('./RoleSelector').then(module => ({ default: module.RoleSelector }))),
//   'Role Selector'
// );

// UI компоненты - временно закомментированы до создания компонентов
// export const LazyModal = withLazyLoading(
//   lazy(() => import('./Modal').then(module => ({ default: module.Modal }))),
//   'Modal'
// );

// UI компоненты - временно закомментированы до создания компонентов
// export const LazyTooltip = withLazyLoading(
//   lazy(() => import('./Tooltip').then(module => ({ default: module.Tooltip }))),
//   'Tooltip'
// );

// export const LazyCarousel = withLazyLoading(
//   lazy(() => import('./Carousel').then(module => ({ default: module.Carousel }))),
//   'Carousel'
// );

// Chart компоненты (если нужны) - временно закомментированы до создания компонентов
// export const LazyChart = withLazyLoading(
//   lazy(() => import('./Chart').then(module => ({ default: module.Chart }))),
//   'Chart'
// );

// Video компоненты - временно закомментированы до создания компонентов
// export const LazyVideoPlayer = withLazyLoading(
//   lazy(() => import('./VideoPlayer').then(module => ({ default: module.VideoPlayer }))),
//   'Video Player'
// );

// ========================================
// DYNAMIC IMPORTS UTILITIES
// ========================================

// Утилита для динамического импорта с кэшированием
const componentCache = new Map<string, Promise<any>>();

export function dynamicImport<T>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  componentName: string
): ComponentType<T> {
  return withLazyLoading(
    lazy(() => {
      if (!componentCache.has(componentName)) {
        componentCache.set(componentName, importFn());
      }
      return componentCache.get(componentName)!;
    }),
    componentName
  );
}

// Утилита для предзагрузки компонентов
export function preloadComponent(importFn: () => Promise<any>, componentName: string) {
  if (!componentCache.has(componentName)) {
    componentCache.set(componentName, importFn());
  }
  return componentCache.get(componentName);
}

// Утилита для предзагрузки по взаимодействию
export function preloadOnInteraction(
  importFn: () => Promise<any>,
  componentName: string,
  eventType: 'click' | 'hover' | 'focus' = 'hover'
) {
  const preload = () => preloadComponent(importFn, componentName);
  
  return {
    onMouseEnter: eventType === 'hover' ? preload : undefined,
    onClick: eventType === 'click' ? preload : undefined,
    onFocus: eventType === 'focus' ? preload : undefined,
  };
}

// ========================================
// INTERSECTION OBSERVER LAZY LOADING
// ========================================

// HOC для lazy loading по видимости
export function withIntersectionObserver<T extends object>(
  Component: ComponentType<T>,
  options: IntersectionObserverInit = {}
) {
  return function IntersectionComponent(props: T) {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
          ...options
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={ref}>
        {isVisible ? (
          <Component {...props} />
        ) : (
          <LoadingFallback componentName="Component" />
        )}
      </div>
    );
  };
}

// ========================================
// CSS ANIMATIONS
// ========================================

// Добавляем CSS для анимации загрузки
const loadingStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .loading-fallback {
    transition: opacity 0.3s ease-in-out;
  }
  
  .error-fallback {
    transition: all 0.3s ease-in-out;
  }
`;

// Вставляем стили в head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = loadingStyles;
  document.head.appendChild(style);
}

export default {
  // LazyBlogPost, // временно закомментирован
  // LazyBlogList, // временно закомментирован
  // LazyFAQSection, // временно закомментирован
  // LazyFAQItem, // временно закомментирован
  // LazyAuthForm, // временно закомментирован
  // LazyRoleSelector, // временно закомментирован
  // LazyModal, // временно закомментирован
  // LazyTooltip, // временно закомментирован
  // LazyCarousel, // временно закомментирован
  // LazyChart, // временно закомментирован
  // LazyVideoPlayer, // временно закомментирован
  dynamicImport,
  preloadComponent,
  preloadOnInteraction,
  withIntersectionObserver
};
