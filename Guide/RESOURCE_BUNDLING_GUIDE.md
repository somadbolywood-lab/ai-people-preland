# 📦 ГАЙД: RESOURCE BUNDLING И ОПТИМИЗАЦИЯ

## 🎯 ЦЕЛЬ
Оптимизировать загрузку ресурсов через Resource Bundling, Code Splitting и динамические импорты для максимальной производительности.

---

## 📋 ЭТАП 1: ПОНИМАНИЕ RESOURCE BUNDLING

### 1.1 Что такое Resource Bundling?
**Resource Bundling** - это процесс объединения множества мелких файлов в один или несколько оптимизированных бандлов для уменьшения количества HTTP-запросов.

### 1.2 Преимущества:
- ⚡ **Меньше HTTP-запросов** - быстрее загрузка
- 🔄 **Лучшее кэширование** - один файл легче кэшировать
- 📱 **Экономия трафика** - особенно важно для мобильных
- 🚀 **HTTP/2 оптимизация** - лучше использует мультиплексирование

### 1.3 Стратегии Bundling:
```
1. Vendor Bundling - библиотеки (React, Next.js)
2. Common Bundling - общий код между страницами
3. Page Bundling - код конкретных страниц
4. Feature Bundling - функциональные модули
```

---

## 🔧 ЭТАП 2: НАСТРОЙКА WEBPACK

### 2.1 Конфигурация в next.config.js

Наша конфигурация уже настроена в `next.config.js`:

```javascript
// Split chunks optimization
splitChunks: {
  chunks: 'all',
  minSize: 20000,
  maxSize: 244000,
  cacheGroups: {
    // Vendor libraries
    vendor: {
      test: /[\\/]node_modules[\\/]/,
      name: 'vendors',
      chunks: 'all',
      priority: 10,
    },
    // Common chunks
    common: {
      name: 'common',
      minChunks: 2,
      chunks: 'all',
      priority: 5,
    },
    // Performance scripts
    performance: {
      test: /[\\/]scripts[\\/](web-vitals|performance|yandex-metrika)\.js/,
      name: 'performance',
      chunks: 'all',
      priority: 8,
    }
  }
}
```

### 2.2 Установка зависимостей

```bash
# Установка пакетов для оптимизации
npm install --save-dev css-minimizer-webpack-plugin webpack-bundle-analyzer

# Или если уже установлены
npm install
```

---

## 📊 ЭТАП 3: АНАЛИЗ БАНДЛА

### 3.1 Запуск анализа

```bash
# Анализ бандла с генерацией отчета
npm run build:analyze

# Или напрямую
ANALYZE=true npm run build
```

### 3.2 Просмотр результатов

После сборки будут созданы файлы:
- `bundle-analysis.html` - интерактивный отчет
- `bundle-stats.json` - статистика в JSON
- `bundle-analysis-report.md` - текстовый отчет

### 3.3 Анализ отчета

```bash
# Генерация отчета из существующих данных
node scripts/analyze-bundle.js report

# Анализ статистики
node scripts/analyze-bundle.js analyze
```

---

## 🚀 ЭТАП 4: CODE SPLITTING

### 4.1 Dynamic Imports

Используйте наши утилиты для динамических импортов:

```typescript
// Вместо обычного импорта
import BlogPost from './BlogPost';

// Используйте lazy компонент
import { LazyBlogPost } from '../components/LazyComponents';

// Или создайте свой
import { createLazyComponent } from '../utils/dynamicImports';

const LazyComponent = createLazyComponent(
  () => import('./HeavyComponent'),
  { chunkName: 'heavy-component' }
);
```

### 4.2 Route-based Code Splitting

```typescript
// Для страниц используйте createLazyRoute
import { createLazyRoute } from '../utils/dynamicImports';

const LazyBlogPage = createLazyRoute(
  () => import('./BlogPage'),
  'blog'
);
```

### 4.3 Preloading

```typescript
// Предзагрузка по взаимодействию
import { preloadOnInteraction } from '../utils/dynamicImports';

const preloadProps = preloadOnInteraction(
  () => import('./Modal'),
  'modal',
  'hover'
);

<button {...preloadProps}>
  Открыть модальное окно
</button>
```

---

## 🖼️ ЭТАП 5: ОПТИМИЗАЦИЯ РЕСУРСОВ

### 5.1 Оптимизация изображений

```typescript
import { createOptimizedImage, preloadCriticalImages } from '../utils/assetOptimization';

// Предзагрузка критических изображений
preloadCriticalImages([
  '/faq/AI-people Logo.png',
  '/assets/models/model-01.png'
]);

// Создание оптимизированного изображения
const optimizedImg = createOptimizedImage(
  '/assets/models/model-01.png',
  'AI Model 01',
  { quality: 80, format: 'webp', lazy: true }
);
```

### 5.2 Оптимизация шрифтов

```typescript
import { optimizeFonts } from '../utils/assetOptimization';

// В layout.tsx или _app.tsx
useEffect(() => {
  optimizeFonts({
    display: 'swap',
    preload: true,
    subset: true
  });
}, []);
```

### 5.3 CSS оптимизация

```typescript
import { inlineCriticalCSS, loadNonCriticalCSS } from '../utils/assetOptimization';

// Инлайн критического CSS
inlineCriticalCSS(`
  .critical-styles {
    /* Критические стили */
  }
`);

// Асинхронная загрузка некритического CSS
loadNonCriticalCSS('/styles/non-critical.css');
```

---

## 📈 ЭТАП 6: МОНИТОРИНГ ПРОИЗВОДИТЕЛЬНОСТИ

### 6.1 Анализ размера ресурсов

```typescript
import { analyzeResourceSizes } from '../utils/assetOptimization';

// Анализ через 2 секунды после загрузки
setTimeout(analyzeResourceSizes, 2000);
```

### 6.2 Мониторинг динамических импортов

```typescript
import { monitorDynamicImports } from '../utils/dynamicImports';

// Включение мониторинга
monitorDynamicImports();
```

### 6.3 Bundle анализ

```typescript
import { analyzeBundleSize } from '../utils/dynamicImports';

// Анализ размера бандла
const stats = analyzeBundleSize();
console.log('Bundle stats:', stats);
```

---

## 🎯 ЭТАП 7: ОПТИМИЗАЦИЯ ПО РЕЗУЛЬТАТАМ

### 7.1 Если бандл слишком большой (>1MB)

**Действия:**
1. Включить tree shaking
2. Использовать dynamic imports
3. Оптимизировать изображения
4. Минифицировать CSS

**Код:**
```javascript
// В next.config.js
optimization: {
  usedExports: true,
  sideEffects: false,
  concatenateModules: true
}
```

### 7.2 Если vendor бандл большой (>500KB)

**Действия:**
1. Разделить vendor бандл
2. Использовать CDN для библиотек
3. Удалить неиспользуемые зависимости

**Код:**
```javascript
// Разделение vendor бандла
vendor: {
  test: /[\\/]node_modules[\\/]/,
  name: 'vendors',
  chunks: 'all',
  priority: 10,
  maxSize: 200000 // 200KB максимум
}
```

### 7.3 Если много мелких чанков

**Действия:**
1. Увеличить minSize
2. Объединить мелкие чанки
3. Оптимизировать импорты

**Код:**
```javascript
splitChunks: {
  minSize: 30000, // Увеличить минимальный размер
  maxAsyncRequests: 5, // Ограничить количество асинхронных запросов
}
```

---

## 🧪 ЭТАП 8: ТЕСТИРОВАНИЕ

### 8.1 Проверка размера бандла

```bash
# Сборка и анализ
npm run build:analyze

# Проверка размера файлов
ls -la .next/static/chunks/
```

### 8.2 Проверка загрузки

1. Откройте DevTools → Network
2. Обновите страницу
3. Проверьте количество и размер чанков
4. Убедитесь, что lazy loading работает

### 8.3 Проверка производительности

```bash
# Lighthouse анализ
npx lighthouse http://localhost:3000 --view

# Web Vitals проверка
# Используйте наш web-vitals.js скрипт
```

---

## 📊 ЭТАП 9: МОНИТОРИНГ РЕЗУЛЬТАТОВ

### 9.1 Ключевые метрики

- **Общий размер бандла** - должен быть < 1MB
- **Количество чанков** - оптимально 5-10
- **Vendor размер** - должен быть < 500KB
- **Время загрузки** - LCP < 2.5s

### 9.2 Еженедельные проверки

```bash
# Анализ бандла
npm run build:analyze

# Проверка метрик
node scripts/analyze-bundle.js analyze

# Генерация отчета
node scripts/analyze-bundle.js report
```

---

## 🚨 РЕШЕНИЕ ПРОБЛЕМ

### Проблема: Бандл слишком большой
**Решение:**
1. Проверьте bundle-analysis.html
2. Найдите самые большие модули
3. Используйте dynamic imports
4. Оптимизируйте изображения

### Проблема: Много мелких чанков
**Решение:**
1. Увеличьте minSize в конфигурации
2. Объедините связанные модули
3. Используйте maxAsyncRequests

### Проблема: Медленная загрузка
**Решение:**
1. Включите preloading
2. Оптимизируйте критический путь
3. Используйте Service Worker кэширование

---

## 📞 ПОДДЕРЖКА

### Полезные ресурсы:
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [Next.js Code Splitting](https://nextjs.org/docs/advanced-features/dynamic-import)
- [Webpack Optimization](https://webpack.js.org/configuration/optimization/)

### Контакты:
- **Email**: feedback@ai-people.io
- **Документация**: [Webpack Guides](https://webpack.js.org/guides/)

---

## ✅ ЧЕКЛИСТ ЗАВЕРШЕНИЯ

- [ ] Настроен Webpack для Resource Bundling
- [ ] Установлены необходимые пакеты
- [ ] Настроен Bundle Analyzer
- [ ] Протестирована сборка с анализом
- [ ] Оптимизированы динамические импорты
- [ ] Настроена предзагрузка ресурсов
- [ ] Протестирована производительность
- [ ] Настроен мониторинг
- [ ] Документированы результаты
- [ ] Настроены автоматические проверки

---

**🎉 ПОЗДРАВЛЯЕМ! Resource Bundling успешно настроен для AI-People!**
