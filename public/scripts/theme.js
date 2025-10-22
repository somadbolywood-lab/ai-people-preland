// ========================================
// THEME MODULE - SIMPLIFIED FALLBACK
// Управление темой для страниц без React
// ========================================

// Fallback theme initialization (only for non-React pages)
function forceThemeInit() {
    if (typeof window === 'undefined') return;
    
    try {
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

// Initialize system theme listener for fallback
function initSystemThemeListener() {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
        const currentTheme = localStorage.getItem('theme');
        
        // Only react if theme is 'system' or not set
        if (currentTheme === 'system' || !currentTheme) {
            const newTheme = e.matches ? 'dark' : 'light';
            const body = document.body;
            const html = document.documentElement;
            
            if (newTheme === 'light') {
                body.classList.add('light');
                html.classList.add('light');
            } else {
                body.classList.remove('light');
                html.classList.remove('light');
            }
            
            body.setAttribute('data-theme', newTheme);
            html.setAttribute('data-theme', newTheme);
            
            console.log('[Theme] System theme changed to:', newTheme);
        }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    console.log('[Theme] System theme listener initialized');
}

// Call only if React components are not available
if (typeof window !== 'undefined') {
    // Check if React is available
    const hasReact = document.querySelector('[data-react-root]') || 
                    document.querySelector('#__next') ||
                    window.React;
    
    if (!hasReact) {
        // Initialize fallback theme system
        forceThemeInit();
        initSystemThemeListener();
        console.log('[Theme] Fallback theme system initialized');
    } else {
        console.log('[Theme] React detected, skipping fallback initialization');
    }
}

// Export for manual use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { forceThemeInit, initSystemThemeListener };
}