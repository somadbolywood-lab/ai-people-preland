// AI-People Global Type Definitions
// Глобальные типы для проекта AI-People
// Версия: 1.0.0

// ========================================
// GOOGLE ANALYTICS TYPES
// ========================================

interface GtagConfig {
  page_title?: string;
  page_location?: string;
  custom_map?: Record<string, string>;
}

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameter?: any;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: GtagConfig | GtagEventParams
    ) => void;
    
    // Theme initialization state
    __INITIAL_THEME__?: 'light' | 'dark';
    __THEME_APPLIED_BY_SCRIPT__?: boolean;
    
    // Async loader metrics
    AsyncLoaderMetrics?: any;
    AsyncLoader?: any;
  }
}

// ========================================
// PERFORMANCE API TYPES
// ========================================

interface PerformanceResourceTimingExtended extends PerformanceResourceTiming {
  transferSize?: number;
  encodedBodySize?: number;
  decodedBodySize?: number;
}

// ========================================
// YANDEX METRIKA TYPES
// ========================================

interface YmConfig {
  id: number;
  clickmap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
  webvisor?: boolean;
}

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: any[]) => void;
  }
}

// ========================================
// SERVICE WORKER TYPES
// ========================================

interface ServiceWorkerRegistrationExtended extends ServiceWorkerRegistration {
  update?: () => Promise<void>;
}

// ========================================
// CUSTOM EVENT TYPES
// ========================================

interface CustomEventMap {
  'theme-changed': CustomEvent<{ theme: 'light' | 'dark' }>;
  'language-changed': CustomEvent<{ language: 'en' | 'ru' }>;
  'component-loaded': CustomEvent<{ componentName: string; loadTime: number }>;
}

declare global {
  interface WindowEventMap extends CustomEventMap {}
}

// ========================================
// CSS CUSTOM PROPERTIES
// ========================================

interface CSSProperties {
  '--bg-primary'?: string;
  '--bg-secondary'?: string;
  '--text-primary'?: string;
  '--text-secondary'?: string;
  '--accent'?: string;
  '--border'?: string;
  '--danger'?: string;
  '--success'?: string;
  '--warning'?: string;
}

// ========================================
// MODULE DECLARATIONS
// ========================================

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.styl' {
  const content: { [className: string]: string };
  export default content;
}

// ========================================
// REACT COMPONENT TYPES
// ========================================

declare module 'react' {
  interface ComponentType<P = {}> {
    displayName?: string;
  }
}

// ========================================
// NEXT.JS TYPES
// ========================================

declare module 'next' {
  interface NextPageContext {
    req?: any;
    res?: any;
    pathname: string;
    query: any;
    asPath: string;
  }
}

// ========================================
// EXPORT TYPES
// ========================================

export {};

