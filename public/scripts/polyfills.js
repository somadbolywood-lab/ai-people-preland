// ========================================
// POLYFILLS MODULE
// Совместимость для старых браузеров
// ========================================

// Polyfill for matches method
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || 
                                Element.prototype.mozMatchesSelector || 
                                Element.prototype.msMatchesSelector || 
                                Element.prototype.oMatchesSelector || 
                                Element.prototype.webkitMatchesSelector || 
                                function(s) {
                                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                                        i = matches.length;
                                    while (--i >= 0 && matches.item(i) !== this) {}
                                    return i > -1;            
                                };
}

// Polyfill for closest method
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
}


