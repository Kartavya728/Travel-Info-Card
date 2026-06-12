import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import './FloatingActions.css';

const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`floating-actions ${isVisible ? 'visible' : ''}`}>
      <div className="action-buttons">
        <a href="tel:+918668944955" className="action-btn" aria-label="Call">
          <Phone size={20} />
          <span className="tooltip">Call</span>
        </a>
        <a href="mailto:kartavyasuryawanshi7@gmail.com" className="action-btn" aria-label="Email">
          <Mail size={20} />
          <span className="tooltip">Email</span>
        </a>
        <a href="https://www.linkedin.com/in/kartavya-suryawanshi-918753320/" target="_blank" rel="noreferrer" className="action-btn" aria-label="LinkedIn">
          <LinkedinIcon size={20} />
          <span className="tooltip">LinkedIn</span>
        </a>
        <a href="https://github.com/Kaartavya728" target="_blank" rel="noreferrer" className="action-btn" aria-label="GitHub">
          <GithubIcon size={20} />
          <span className="tooltip">GitHub</span>
        </a>
      </div>
      
      <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default FloatingActions;
