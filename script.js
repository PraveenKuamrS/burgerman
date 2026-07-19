// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Open Google Maps
function openMaps() {
    const latitude = 13.028207;
    const longitude = 80.1703175;
    const mapsUrl = `https://www.google.com/maps/search/BurgerMan+Porur/@${latitude},${longitude},15z`;
    window.open(mapsUrl, '_blank');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .info-card, .service-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add scroll animation to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScrollTop && currentScroll > 500) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Active nav link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .action-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            // Add ripple styles if not already present
            if (!document.querySelector('style[data-ripple]')) {
                const style = document.createElement('style');
                style.setAttribute('data-ripple', 'true');
                style.textContent = `
                    .ripple {
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                        transform: scale(0);
                        animation: ripple-animation 0.6s ease-out;
                        pointer-events: none;
                    }
                    
                    @keyframes ripple-animation {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Counter animation for stats (if needed)
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const count = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = count / 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= count) {
                counter.textContent = count;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });

    // Add smooth navbar transition
    const navbar_style = document.createElement('style');
    navbar_style.textContent = `
        .navbar {
            transition: transform 0.3s ease, background 0.3s ease;
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(navbar_style);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger animations on page load
    const elements = document.querySelectorAll('[class*="animate"]');
    elements.forEach((el, index) => {
        el.style.animationPlayState = 'running';
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any modals or overlays if needed
    }
});

// Print friendly CSS
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar, .cta-buttons, .quick-actions {
            display: none;
        }
        
        body {
            background: white;
        }
    }
`;
document.head.appendChild(printStyle);

// Accessibility improvements
document.querySelectorAll('button, a[role="button"]').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            btn.click();
        }
    });
});

// Service worker registration (for PWA if needed)
if ('serviceWorker' in navigator) {
    // Uncomment if you add service worker
    // navigator.serviceWorker.register('/sw.js');
}

console.log('BurgerMan website loaded successfully! 🍔');
