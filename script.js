// Smooth scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopLink = document.querySelector('.scroll-top');
    
    if (scrollTopLink) {
        // Show/hide scroll button based on scroll position
        function toggleScrollTop() {
            if (window.pageYOffset > 300) {
                scrollTopLink.classList.add('visible');
            } else {
                scrollTopLink.classList.remove('visible');
            }
        }
        
        // Check scroll position on load
        toggleScrollTop();
        
        // Check scroll position on scroll
        window.addEventListener('scroll', toggleScrollTop);
        
        // Smooth scroll to top on click
        scrollTopLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to your backend
            // For now, we'll just show an alert
            alert('Thank you for subscribing, ' + name + '! We\'ll send savings tips and deals to ' + email);
            this.reset();
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#main-content') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

