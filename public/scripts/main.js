// ========================================
// AI-PEOPLE MAIN SCRIPT (OPTIMIZED)
// Модульная структура для оптимизации загрузки
// ========================================

// Import note: В Next.js модули загружаются через <script> теги в layout.tsx
// Этот файл служит точкой входа и координатором

console.log('[Main] AI-People application loading...');

// Global flag to prevent double initialization
if (!window._aiPeopleInitialized) {
    window._aiPeopleInitialized = true;
    
    console.log('[Main] First initialization');
    } else {
    console.log('[Main] Already initialized, skipping...');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
}
