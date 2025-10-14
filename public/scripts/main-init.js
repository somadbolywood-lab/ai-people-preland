// ========================================
// MAIN INIT MODULE
// Точка входа и инициализация всех модулей
// ========================================

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('[Main] Initializing application...');
    
    try {
        // 1. Theme (highest priority - must run first)
        if (typeof initThemeToggle === 'function') {
            initThemeToggle();
            console.log('[Main] ✅ Theme initialized');
        }
        
        // 2. Language (disabled - now handled by React useLanguage hook)
        // if (typeof applySavedLanguage === 'function') {
        //     applySavedLanguage();
        //     console.log('[Main] ✅ Language initialized');
        // }
        
        // if (typeof initLanguageSelector === 'function') {
        //     initLanguageSelector();
        // }
        
        // 3. UI Components
        if (typeof initMobileMenu === 'function') {
            initMobileMenu();
            console.log('[Main] ✅ Mobile menu initialized');
        }
        
        if (typeof initSmoothScrolling === 'function') {
            initSmoothScrolling();
        }
        
        if (typeof initButtonLoadingStates === 'function') {
            initButtonLoadingStates();
        }
        
        if (typeof initLazyLoading === 'function') {
            initLazyLoading();
        }
        
        if (typeof initActiveMenuHighlighting === 'function') {
            initActiveMenuHighlighting();
        }
        
        if (typeof initCollapsibleSections === 'function') {
            initCollapsibleSections();
        }
        
        if (typeof initSidebarToggle === 'function') {
            initSidebarToggle();
        }
        
        // 4. Role selection (for auth pages)
        if (typeof initRoleSelection === 'function') {
            initRoleSelection();
        }
        
        // 5. Presentation button
        if (typeof initPresentationButton === 'function') {
            initPresentationButton();
        }
        
        // 6. Subscription buttons
        if (typeof initSubscriptionButtons === 'function') {
            initSubscriptionButtons();
        }
        
        console.log('[Main] ✅ All modules initialized successfully');
        
    } catch (error) {
        console.error('[Main] ❌ Error during initialization:', error);
    }
});

// Re-initialize on navigation (for SPA-like behavior)
if (typeof window !== 'undefined') {
    window.addEventListener('popstate', function() {
        console.log('[Main] Re-initializing after navigation...');
        // Re-apply theme only (language now handled by React)
        // if (typeof applySavedLanguage === 'function') {
        //     applySavedLanguage();
        // }
    });
}

console.log('[Main] Main init script loaded');


