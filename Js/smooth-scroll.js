// Navegación suave mejorada
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateActiveNavItem();
    }
    
    bindEvents() {
        // Navegación suave para todos los enlaces internos
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                this.scrollToSection(link.getAttribute('href'));
            }
        });
        
        // Actualizar navegación activa al hacer scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNavItem();
        });
    }
    
    scrollToSection(targetId) {
        // Validar que el targetId no esté vacío y sea válido
        if (!targetId || targetId === '#' || targetId.length <= 1) {
            return;
        }
        
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;
        
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        // Scroll suave personalizado
        this.smoothScrollTo(targetPosition, 800);
    }
    
    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };
        
        requestAnimationFrame(animation);
    }
    
    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    updateActiveNavItem() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Actualizar clases activas
        navLinks.forEach(link => {
            link.classList.remove('text-orange-400', 'border-b-2', 'border-orange-400');
            link.classList.add('text-white', 'opacity-50');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.remove('text-white', 'opacity-50');
                link.classList.add('text-orange-400');
            }
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new SmoothScroll();
});