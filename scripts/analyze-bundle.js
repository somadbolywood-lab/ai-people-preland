#!/usr/bin/env node

// AI-People Bundle Analyzer
// Анализ размера бандла и оптимизация для производительности
// Версия: 1.0.0

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const fs = require('fs');
const path = require('path');

// ========================================
// CONFIGURATION
// ========================================

const CONFIG = {
  // Настройки анализатора
  analyzer: {
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: 'bundle-analysis.html',
    generateStatsFile: true,
    statsFilename: 'bundle-stats.json',
    logLevel: 'info'
  },
  
  // Пороги для предупреждений
  thresholds: {
    maxChunkSize: 244000, // 244KB
    maxTotalSize: 1000000, // 1MB
    maxVendorSize: 500000, // 500KB
    maxCommonSize: 200000, // 200KB
  },
  
  // Исключения из анализа
  exclude: [
    /node_modules\/@next/,
    /node_modules\/react/,
    /node_modules\/react-dom/
  ]
};

// ========================================
// BUNDLE ANALYSIS
// ========================================

/**
 * Анализ статистики бандла
 */
function analyzeBundleStats(statsPath) {
  if (!fs.existsSync(statsPath)) {
    console.error('❌ Stats file not found:', statsPath);
    return null;
  }

  const stats = JSON.parse(fs.readFileSync(statsPath, 'utf8'));
  const analysis = {
    totalSize: 0,
    chunks: [],
    warnings: [],
    recommendations: []
  };

  // Анализ чанков
  stats.chunks.forEach(chunk => {
    const chunkSize = chunk.size || 0;
    const chunkName = chunk.names?.[0] || `chunk-${chunk.id}`;
    
    analysis.totalSize += chunkSize;
    analysis.chunks.push({
      name: chunkName,
      size: chunkSize,
      sizeKB: Math.round(chunkSize / 1024),
      modules: chunk.modules?.length || 0
    });

    // Проверка порогов
    if (chunkSize > CONFIG.thresholds.maxChunkSize) {
      analysis.warnings.push({
        type: 'large-chunk',
        chunk: chunkName,
        size: chunkSize,
        threshold: CONFIG.thresholds.maxChunkSize
      });
    }
  });

  // Анализ модулей
  const modules = stats.modules || [];
  const vendorModules = modules.filter(m => 
    m.name && m.name.includes('node_modules')
  );
  const appModules = modules.filter(m => 
    m.name && !m.name.includes('node_modules')
  );

  analysis.vendorSize = vendorModules.reduce((sum, m) => sum + (m.size || 0), 0);
  analysis.appSize = appModules.reduce((sum, m) => sum + (m.size || 0), 0);

  // Генерация рекомендаций
  generateRecommendations(analysis);

  return analysis;
}

/**
 * Генерация рекомендаций по оптимизации
 */
function generateRecommendations(analysis) {
  const { totalSize, vendorSize, appSize, chunks } = analysis;

  // Рекомендации по общему размеру
  if (totalSize > CONFIG.thresholds.maxTotalSize) {
    analysis.recommendations.push({
      type: 'total-size',
      message: `Общий размер бандла ${Math.round(totalSize / 1024)}KB превышает рекомендуемый ${Math.round(CONFIG.thresholds.maxTotalSize / 1024)}KB`,
      priority: 'high',
      actions: [
        'Включить tree shaking',
        'Использовать dynamic imports',
        'Оптимизировать изображения',
        'Минифицировать CSS'
      ]
    });
  }

  // Рекомендации по vendor бандлу
  if (vendorSize > CONFIG.thresholds.maxVendorSize) {
    analysis.recommendations.push({
      type: 'vendor-size',
      message: `Размер vendor бандла ${Math.round(vendorSize / 1024)}KB превышает рекомендуемый ${Math.round(CONFIG.thresholds.maxVendorSize / 1024)}KB`,
      priority: 'medium',
      actions: [
        'Разделить vendor бандл на более мелкие чанки',
        'Использовать CDN для больших библиотек',
        'Удалить неиспользуемые зависимости'
      ]
    });
  }

  // Рекомендации по большим чанкам
  const largeChunks = chunks.filter(c => c.size > CONFIG.thresholds.maxChunkSize);
  if (largeChunks.length > 0) {
    analysis.recommendations.push({
      type: 'large-chunks',
      message: `Найдено ${largeChunks.length} чанков превышающих рекомендуемый размер`,
      priority: 'medium',
      actions: [
        'Разделить большие чанки на более мелкие',
        'Использовать code splitting',
        'Оптимизировать импорты'
      ],
      chunks: largeChunks.map(c => c.name)
    });
  }

  // Рекомендации по дублированию
  const duplicateModules = findDuplicateModules();
  if (duplicateModules.length > 0) {
    analysis.recommendations.push({
      type: 'duplicates',
      message: `Найдено ${duplicateModules.length} дублирующихся модулей`,
      priority: 'low',
      actions: [
        'Настроить webpack для дедупликации',
        'Проверить версии зависимостей',
        'Использовать webpack-bundle-analyzer для детального анализа'
      ]
    });
  }
}

/**
 * Поиск дублирующихся модулей
 */
function findDuplicateModules() {
  // Упрощенная реализация поиска дубликатов
  // В реальном проекте можно использовать более сложную логику
  return [];
}

// ========================================
// REPORT GENERATION
// ========================================

/**
 * Генерация отчета по анализу
 */
function generateReport(analysis) {
  const reportPath = path.join(process.cwd(), 'bundle-analysis-report.md');
  
  const report = `# 📊 AI-People Bundle Analysis Report

## 📈 Общая статистика

- **Общий размер бандла:** ${Math.round(analysis.totalSize / 1024)} KB
- **Размер vendor бандла:** ${Math.round(analysis.vendorSize / 1024)} KB
- **Размер app бандла:** ${Math.round(analysis.appSize / 1024)} KB
- **Количество чанков:** ${analysis.chunks.length}

## 📦 Анализ чанков

${analysis.chunks.map(chunk => 
  `- **${chunk.name}:** ${chunk.sizeKB} KB (${chunk.modules} модулей)`
).join('\n')}

## ⚠️ Предупреждения

${analysis.warnings.length > 0 ? 
  analysis.warnings.map(warning => 
    `- **${warning.type}:** ${warning.chunk} (${Math.round(warning.size / 1024)} KB)`
  ).join('\n') : 
  'Предупреждений не найдено ✅'
}

## 💡 Рекомендации

${analysis.recommendations.map(rec => 
  `### ${rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢'} ${rec.message}

**Действия:**
${rec.actions.map(action => `- ${action}`).join('\n')}
`
).join('\n')}

## 🎯 Следующие шаги

1. **Немедленно:** ${analysis.recommendations.filter(r => r.priority === 'high').length > 0 ? 'Исправить критические проблемы' : 'Критических проблем не найдено ✅'}
2. **В течение недели:** Оптимизировать средние проблемы
3. **Долгосрочно:** Реализовать рекомендации по улучшению

---
*Отчет сгенерирован: ${new Date().toLocaleString()}*
`;

  fs.writeFileSync(reportPath, report);
  console.log('📄 Отчет сохранен:', reportPath);
  
  return reportPath;
}

// ========================================
// WEBPACK PLUGIN
// ========================================

/**
 * Создание webpack плагина для анализа
 */
function createBundleAnalyzerPlugin() {
  return new BundleAnalyzerPlugin({
    ...CONFIG.analyzer,
    analyzerPort: process.env.ANALYZE_PORT || 8888,
    defaultSizes: 'gzip'
  });
}

// ========================================
// CLI INTERFACE
// ========================================

/**
 * Основная функция CLI
 */
function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'analyze':
      analyzeCommand();
      break;
    case 'report':
      reportCommand();
      break;
    case 'help':
      helpCommand();
      break;
    default:
      console.log('❌ Неизвестная команда. Используйте "help" для справки.');
      process.exit(1);
  }
}

/**
 * Команда анализа
 */
function analyzeCommand() {
  console.log('🔍 Запуск анализа бандла...');
  
  const statsPath = path.join(process.cwd(), 'bundle-stats.json');
  const analysis = analyzeBundleStats(statsPath);
  
  if (analysis) {
    console.log('✅ Анализ завершен');
    console.log(`📊 Общий размер: ${Math.round(analysis.totalSize / 1024)} KB`);
    console.log(`📦 Количество чанков: ${analysis.chunks.length}`);
    console.log(`⚠️ Предупреждений: ${analysis.warnings.length}`);
    console.log(`💡 Рекомендаций: ${analysis.recommendations.length}`);
    
    generateReport(analysis);
  }
}

/**
 * Команда генерации отчета
 */
function reportCommand() {
  console.log('📄 Генерация отчета...');
  
  const statsPath = path.join(process.cwd(), 'bundle-stats.json');
  const analysis = analyzeBundleStats(statsPath);
  
  if (analysis) {
    generateReport(analysis);
  }
}

/**
 * Команда помощи
 */
function helpCommand() {
  console.log(`
📊 AI-People Bundle Analyzer

Использование:
  node scripts/analyze-bundle.js <command>

Команды:
  analyze  - Анализ бандла и генерация отчета
  report   - Генерация отчета из существующих данных
  help     - Показать эту справку

Примеры:
  node scripts/analyze-bundle.js analyze
  node scripts/analyze-bundle.js report

Переменные окружения:
  ANALYZE_PORT - Порт для webpack-bundle-analyzer (по умолчанию: 8888)
`);
}

// ========================================
// EXPORTS
// ========================================

module.exports = {
  analyzeBundleStats,
  generateReport,
  createBundleAnalyzerPlugin,
  CONFIG
};

// Запуск CLI если файл выполняется напрямую
if (require.main === module) {
  main();
}
