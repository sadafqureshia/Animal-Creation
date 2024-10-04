// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Function to toggle scroll-to-top button visibility
const toggleScrollTopButton = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollTopBtn.style.display = scrollTop > 20 ? "block" : "none";
};

// Add scroll event listener
window.addEventListener('scroll', toggleScrollTopButton);

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});

// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Scroll Animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

// Intersection Observer for fade-in effect
const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

// Observe each fader element
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const drawer = document.getElementById('drawer');

// Function to toggle the mobile menu
const toggleMobileMenu = () => {
    const isOpen = drawer.style.right === '0px';
    drawer.style.right = isOpen ? '-250px' : '0px';
};

// Add click event listener for mobile menu
if (mobileMenu) {
    mobileMenu.addEventListener('click', toggleMobileMenu);
}
