
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

        reveals.forEach(el => observer.observe(el));
    } else {
        // Fallback para navegadores antigos
        const onScroll = () => {
            const windowHeight = window.innerHeight;
            reveals.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', onScroll);
        onScroll();
    }

        // Typing effect for title inside .align_hero
        const text = "Desenvolvedor Web Front-end";
        const typingElement = document.getElementById('typing');
        let index = 0;

        function typeEffect() {
            if (!typingElement) return;
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        }

        if (typingElement) {
            typingElement.innerHTML = '';
            setTimeout(typeEffect, 500);
        }
});
