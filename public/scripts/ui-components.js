// ========================================
// UI COMPONENTS MODULE  
// Базовые UI компоненты (меню, кнопки, модалки)
// ========================================

// Initialize role selection
function initRoleSelection() {
    const roleButtons = document.querySelectorAll('.role-select-btn');
    const roleCards = document.querySelectorAll('.role-card');
    
    // Add click handlers to cards (optional - for better UX)
    roleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on buttons or other interactive elements
            if (e.target.closest && (e.target.closest('.role-select-btn') || e.target.closest('a'))) {
                return;
            }
            
            const button = this.querySelector('.role-select-btn');
            if (button && !button.disabled) {
                button.click();
            }
        });
    });
}

// Initialize mobile menu functionality - DISABLED (handled by React useHamburgerMenu hook)
let mobileMenuInitialized = false;

function initMobileMenu() {
    // DISABLED: Mobile menu is now handled by React useHamburgerMenu hook
    // This prevents conflicts between React and vanilla JS event handlers
    console.log('[UI Components] Mobile menu initialization disabled - handled by React hook');
    return;
}

// Initialize presentation button functionality
function initPresentationButton() {
    const presentationBtn = document.getElementById('presentationBtn');
    
    if (presentationBtn) {
        presentationBtn.addEventListener('click', function() {
            showToast('Presentation feature coming soon!', 'info');
        });
    }
}

// Initialize subscription buttons functionality
function initSubscriptionButtons() {
    const subscribeButtons = document.querySelectorAll('[data-plan]');
    
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            
            // Placeholder for subscription functionality
            switch(plan) {
                case 'trial':
                    showToast('Redirecting to trial subscription (5 USDT for 48 hours)...', 'info');
                    break;
                case 'monthly':
                    showToast('Redirecting to monthly subscription (20 USDT)...', 'info');
                    break;
                case 'adult':
                    showToast('Redirecting to 18+ subscription (35 USDT)...', 'info');
                    break;
                default:
                    showToast('Redirecting to subscription...', 'info');
            }
        });
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize button loading states
function initButtonLoadingStates() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('primary')) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.pointerEvents = 'auto';
                }, 1000);
            }
        });
    });
}

// Initialize lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        fontSize: 14px;
        animation: toastSlide 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastSlide 0.3s ease-out reverse';
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 2000);
}

// Initialize collapsible sections
function initCollapsibleSections() {
    const headers = document.querySelectorAll('.collapsible-header');
    
    headers.forEach(header => {
      header.addEventListener('click', function() {
        const targetId = this.getAttribute('data-collapsible');
        const content = document.getElementById(targetId);
        
        if (content) {
          // Toggle expanded class on header and content
          this.classList.toggle('expanded');
          content.classList.toggle('expanded');
        }
      });
    });
}

// Initialize sidebar toggle
function initSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed);
        });
        
        // Restore sidebar state
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'true') {
            sidebar.classList.add('collapsed');
        }
    }
}

// Initialize active menu highlighting
function initActiveMenuHighlighting() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.menu-panel a, .nav-link');
    
    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentPath.includes(linkPath) && linkPath !== '#') {
            link.classList.add('active');
        }
    });
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        initRoleSelection,
        initMobileMenu,
        initPresentationButton,
        initSubscriptionButtons,
        initSmoothScrolling,
        initButtonLoadingStates,
        initLazyLoading,
        showToast,
        initCollapsibleSections,
        initSidebarToggle,
        initActiveMenuHighlighting
    };
}


