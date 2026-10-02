import { useEffect } from 'react';

// Same scroll fade-in behaviour as the Japan page.
export function useFadeInSections() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-section, .section-title, .about-card, .location-card, .map-container, .contact-card, .lost-found-card');
    elements.forEach((el) => {
      el.classList.add('fade-in-section');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
