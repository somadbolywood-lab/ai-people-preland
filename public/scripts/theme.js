// ========================================
// THEME MODULE
// Управление темной/светлой темой
// ========================================

// Force theme initialization (call immediately)
function forceThemeInit() {
    const body = document.body;
    
    // 1. Check localStorage first (user preference)
    let currentTheme = localStorage.getItem('theme');
    
    // 2. If no saved preference, detect system theme
    if (!currentTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentTheme = prefersDark ? 'dark' : 'light';
        // Don't save to localStorage yet - let user explicitly choose
    }
    
    // 3. Apply theme
    if (currentTheme === 'light') {
        body.classList.add('light');
    } else {
        body.classList.remove('light');
    }
}

// Initialize theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    if (!themeToggle) {
        console.log('[Theme] Toggle button not found');
        return;
    }
    
    // Remove existing event listeners to prevent duplicates
    const newThemeToggle = themeToggle.cloneNode(true);
    themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
    
    // Check for saved theme preference or detect system theme
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentTheme = prefersDark ? 'dark' : 'light';
    }
    
    // Apply theme immediately but safely
    if (currentTheme === 'light') {
        body.classList.add('light');
    } else {
        body.classList.remove('light');
    }
    
    // Update theme toggle icon
    updateThemeIcon(currentTheme, newThemeToggle);
    
    // Theme toggle event listener
    newThemeToggle.addEventListener('click', function() {
        const isLight = body.classList.contains('light');
        
        if (isLight) {
            body.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark', newThemeToggle);
        } else {
            body.classList.add('light');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light', newThemeToggle);
        }
    });
}

function updateThemeIcon(theme, toggleElement) {
    const element = toggleElement || document.getElementById('themeToggle');
    if (!element) return;
    
    const icon = element.querySelector('svg');
    if (!icon) return;
    
    if (theme === 'light') {
        // Sun icon for light theme
        icon.innerHTML = `
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `;
    } else {
        // Moon icon for dark theme
        icon.innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        `;
    }
}

// Call theme initialization immediately when script loads
if (typeof document !== 'undefined') {
    forceThemeInit();
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { forceThemeInit, initThemeToggle };
}


