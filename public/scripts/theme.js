// ========================================
// THEME MODULE - SIMPLIFIED FALLBACK
// Основная логика теперь в React useTheme hook
// ========================================

// Fallback theme initialization (only for non-React pages)
function forceThemeInit() {
    if (typeof window === 'undefined') return;
    
    try {
        // Check if React components are handling theme
        if (document.querySelector('[data-react-root]')) {
            return; // Let React handle it
        }
        
        const theme = localStorage.getItem('theme') || 'system';
        let effectiveTheme;
        
        if (theme === 'system') {
            effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        } else {
            effectiveTheme = theme;
        }
        
        const body = document.body;
        const html = document.documentElement;
        
        if (effectiveTheme === 'light') {
            body.classList.add('light');
            html.classList.add('light');
        } else {
            body.classList.remove('light');
            html.classList.remove('light');
        }
        
        body.setAttribute('data-theme', effectiveTheme);
        html.setAttribute('data-theme', effectiveTheme);
        
        console.log('[Theme] Fallback initialization applied:', effectiveTheme);
    } catch (e) {
        console.warn('[Theme] Fallback initialization failed:', e);
    }
}

// Call only if React components are not available
if (typeof document !== 'undefined') {
    // Check if we need fallback initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Small delay to let React components initialize
            setTimeout(forceThemeInit, 50);
        });
    } else {
        setTimeout(forceThemeInit, 50);
    }
}

// Export for manual use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { forceThemeInit };
}


