import { useEffect } from 'react';
import './App.css';
import BackgroundElements from './components/BackgroundElements';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import FloatingActions from './components/FloatingActions';

function App() {
  // Intersection Observer for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-section, .section-title, .about-card, .location-card, .map-container, .contact-card, .lost-found-card');
    elements.forEach((el) => {
      el.classList.add('fade-in-section'); // Add base class for animation
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <BackgroundElements />
      
      <main>
        <HeroSection />
        <MapSection />
        <ContactSection />
        <AboutSection />
      </main>

      <FloatingActions />
      
      <footer className="text-center py-12 text-muted animate-fade-in" style={{ position: 'relative', zIndex: 10, padding: '60px 0' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-crimson)', marginBottom: '10px' }}>ありがとうございます！</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Thank you very much!</p>
        <p>&copy; {new Date().getFullYear()} Kartavya Mahesh Suryawanshi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
