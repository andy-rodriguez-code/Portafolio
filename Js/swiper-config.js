// Configuración de Swiper para carruseles
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que Swiper esté disponible
    if (typeof Swiper === 'undefined') {
        console.warn('Swiper no está disponible');
        return;
    }
    
    try {
        initTechCarousel();
        initProjectsCarousel();
        initTestimonialsCarousel();
    } catch (error) {
        console.error('Error inicializando carruseles:', error);
    }
});

// Carrusel de tecnologías
function initTechCarousel() {
    const techSwiperEl = document.querySelector('.tech-swiper');
    if (!techSwiperEl) return;
    
    const slides = techSwiperEl.querySelectorAll('.swiper-slide');
    const hasEnoughSlides = slides.length >= 5;
    
    const techSwiper = new Swiper('.tech-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: hasEnoughSlides,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
    });
}

// Carrusel de proyectos
function initProjectsCarousel() {
    const projectsSwiperEl = document.querySelector('.projects-swiper');
    if (!projectsSwiperEl) return;
    
    const slides = projectsSwiperEl.querySelectorAll('.swiper-slide');
    const hasEnoughSlides = slides.length >= 3;
    
    const projectsSwiper = new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: hasEnoughSlides,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}

// Carrusel de testimonios
function initTestimonialsCarousel() {
    const testimonialsSwiperEl = document.querySelector('.testimonials-swiper');
    if (!testimonialsSwiperEl) return;
    
    const slides = testimonialsSwiperEl.querySelectorAll('.swiper-slide');
    const hasEnoughSlides = slides.length >= 3;
    
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: hasEnoughSlides,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
    
    // Pausar autoplay al hacer hover
    const testimonialsContainer = document.querySelector('.testimonials-swiper');
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', () => {
            testimonialsSwiper.autoplay.stop();
        });
        
        testimonialsContainer.addEventListener('mouseleave', () => {
            testimonialsSwiper.autoplay.start();
        });
    }
}