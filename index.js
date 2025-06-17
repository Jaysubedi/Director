 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            } else {
                navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            }
        });

        // Portfolio item hover effects
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Contact form submission
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Simulate form submission
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for scroll animations
        document.querySelectorAll('.section h2, .about-content, .skills-grid').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Dynamic background particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'var(--primary-color)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.opacity = '0.6';
            particle.style.zIndex = '1';
            
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            
            document.body.appendChild(particle);
            
            const animation = particle.animate([
                { transform: 'translateY(0px)', opacity: 0.6 },
                { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
            ], {
                duration: 10000 + Math.random() * 5000,
                easing: 'linear'
            });
            
            animation.onfinish = () => particle.remove();
        }

        // Create particles periodically
        setInterval(createParticle, 2000);

        // Add some initial particles
        for (let i = 0; i < 5; i++) {
            setTimeout(createParticle, i * 400);
        }
