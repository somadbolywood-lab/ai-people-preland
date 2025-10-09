// ========================================
// LANGUAGE MODULE
// Управление мультиязычностью
// ========================================

function initLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const languageText = document.querySelector('.language-text');
    const languageItems = document.querySelectorAll('.language-item');
    
    if (!languageBtn || !languageMenu) {
        console.log('[Language] Selector elements not found');
        return;
    }
    
    // Remove existing event listeners to prevent duplicates
    const newLanguageBtn = languageBtn.cloneNode(true);
    languageBtn.parentNode.replaceChild(newLanguageBtn, languageBtn);
    
    const newLanguageMenu = languageMenu.cloneNode(true);
    languageMenu.parentNode.replaceChild(newLanguageMenu, languageMenu);
    
    // Toggle language menu
    newLanguageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        newLanguageMenu.classList.toggle('show');
    });
    
    // Handle language selection
    const newLanguageItems = newLanguageMenu.querySelectorAll('.language-item');
    newLanguageItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            const selectedText = this.textContent;
            
            // Update button text
            const newLanguageText = newLanguageBtn.querySelector('.language-text');
            if (newLanguageText) {
                newLanguageText.textContent = selectedText;
            }
            
            // Update active state
            newLanguageItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Close menu
            newLanguageMenu.classList.remove('show');
            
            // Store language preference
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Change page language
            changePageLanguage(selectedLang);
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('show');
        }
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const savedItem = document.querySelector(`[data-lang="${savedLang}"]`);
    if (savedItem) {
        languageItems.forEach(i => i.classList.remove('active'));
        savedItem.classList.add('active');
        if (languageText) {
        languageText.textContent = savedItem.textContent;
        }
        // Apply saved language on page load
        changePageLanguage(savedLang);
    }
}

// Function to change page language
function changePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru]');
    
    // Use requestAnimationFrame to prevent hydration issues
    requestAnimationFrame(() => {
        elements.forEach(element => {
            const enText = element.getAttribute('data-lang-en');
            const ruText = element.getAttribute('data-lang-ru');
            
            if (!enText || !ruText) return;
            
            // Check if element is a menu item with icons
            const isMenuItemWithIcon = element.closest('.menu-panel') && element.querySelector('svg');
            
            // Check if element has child elements (complex structure)
            const hasChildElements = element.children.length > 0;
            
            const textToSet = lang === 'ru' ? ruText : enText;
            
            if (isMenuItemWithIcon) {
                // For menu items with icons, only update the span text
                const textSpan = element.querySelector('span');
                if (textSpan) {
                    textSpan.textContent = textToSet;
                }
            } else if (hasChildElements && !window.location.pathname.includes('/admin/')) {
                // For elements with children (like FAQ headers), preserve structure
                // Clear all text nodes but keep child elements
                const childNodes = Array.from(element.childNodes);
                childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.remove();
                    }
                });
                // Add new text as first child
                element.insertBefore(document.createTextNode(textToSet), element.firstChild);
            } else {
                // For simple elements, just replace text content
                element.textContent = textToSet;
            }
        });
        
        // Add/remove Russian optimization class
        if (lang === 'ru') {
            document.body.classList.add('ru-optimized');
        } else {
            document.body.classList.remove('ru-optimized');
        }
    });
    
    // Update sidebar tooltips if sidebar exists
    if (typeof updateSidebarTooltips === 'function') {
        updateSidebarTooltips();
    }
    
    // Update page title and meta description
    updatePageMeta(lang);
}

// Function to update page meta information
function updatePageMeta(lang) {
    const titles = {
        'en': {
            'index': 'AI-People — AI Models Marketplace | Home',
            'pricing': 'AI-People — AI Models Marketplace | Pricing',
            'catalog': 'AI-People — AI Models Marketplace | Catalog',
            'about': 'AI-People — AI Models Marketplace | About Platform',
            'admin': 'AI-People — Admin Dashboard',
            'admin-users': 'AI-People — User Management',
            'admin-content': 'AI-People — Content Moderation',
            'admin-finance': 'AI-People — Finance Management'
        },
        'ru': {
            'index': 'AI-People — Маркетплейс AI Моделей | Главная',
            'pricing': 'AI-People — Маркетплейс AI Моделей | Цены',
            'catalog': 'AI-People — Маркетплейс AI Моделей | Каталог',
            'about': 'AI-People — Маркетплейс AI Моделей | О Платформе',
            'admin': 'AI-People — Панель администратора',
            'admin-users': 'AI-People — Управление пользователями',
            'admin-content': 'AI-People — Модерация контента',
            'admin-finance': 'AI-People — Управление финансами'
        }
    };
    
    const currentPage = getCurrentPageName();
    if (titles[lang] && titles[lang][currentPage]) {
        document.title = titles[lang][currentPage];
    }
}

// Function to get current page name
function getCurrentPageName() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/' || path === '') return 'index';
    if (path.includes('pricing.html')) return 'pricing';
    if (path.includes('catalog.html')) return 'catalog';
    if (path.includes('catalog-preview.html')) return 'catalog';
    if (path.includes('model-profile.html')) return 'catalog';
    if (path.includes('about.html')) return 'about';
    if (path.includes('auth-role.html')) return 'index';
    if (path.includes('auth-buyer.html')) return 'index';
    if (path.includes('auth-creator.html')) return 'index';
    // Admin pages
    if (path.includes('/admin/users')) return 'admin-users';
    if (path.includes('/admin/content')) return 'admin-content';
    if (path.includes('/admin/finance')) return 'admin-finance';
    if (path.includes('/admin')) return 'admin';
    return 'index';
}

// Function to apply saved language on any page (even without language selector)
function applySavedLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        // Apply language immediately
        changePageLanguage(savedLang);
        
        // Update language selector if present
        const languageText = document.querySelector('.language-text');
        const languageItems = document.querySelectorAll('.language-item');
        
        if (languageText && languageItems.length > 0) {
            const savedItem = document.querySelector(`[data-lang="${savedLang}"]`);
            if (savedItem) {
                languageItems.forEach(item => item.classList.remove('active'));
                savedItem.classList.add('active');
                if (languageText) {
                languageText.textContent = savedItem.textContent;
                }
            }
        }
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        initLanguageSelector, 
        changePageLanguage, 
        applySavedLanguage 
    };
}


