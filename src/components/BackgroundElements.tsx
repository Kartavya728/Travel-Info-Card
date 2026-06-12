import React, { useEffect, useState } from 'react';
import './BackgroundElements.css';

const BackgroundElements: React.FC = () => {
  const [sakuraCount, setSakuraCount] = useState(0);

  useEffect(() => {
    // Determine number of sakura based on screen size, less on mobile for performance
    const count = window.innerWidth < 768 ? 15 : 30;
    setSakuraCount(count);
  }, []);

  return (
    <>
      <div className="bg-gradient-overlay"></div>
      
      {/* Torii Gate Silhouette (SVG) */}
      <div className="torii-container">
        <svg viewBox="0 0 100 100" className="torii-svg" preserveAspectRatio="xMidYMid meet">
          <path d="M10,25 L90,25 L92,20 L8,20 Z" fill="rgba(192, 0, 0, 0.05)" />
          <path d="M15,35 L85,35 L85,30 L15,30 Z" fill="rgba(192, 0, 0, 0.05)" />
          <path d="M25,100 L30,100 L30,35 L25,35 Z" fill="rgba(192, 0, 0, 0.05)" />
          <path d="M70,100 L75,100 L75,35 L70,35 Z" fill="rgba(192, 0, 0, 0.05)" />
          <path d="M45,45 L55,45 L55,35 L45,35 Z" fill="rgba(192, 0, 0, 0.05)" />
        </svg>
      </div>
      
      {/* Mountain Silhouette */}
      <div className="mountain-container">
        <svg viewBox="0 0 100 50" className="mountain-svg" preserveAspectRatio="none">
          <path d="M0,50 L30,20 L50,35 L80,10 L100,50 Z" fill="rgba(28, 28, 30, 0.3)" />
          <path d="M60,10 L80,10 L100,50 L60,50 Z" fill="rgba(234, 234, 234, 0.03)" />
        </svg>
      </div>

      <div className="sakura-container">
        {Array.from({ length: sakuraCount }).map((_, i) => {
          const size = Math.random() * 10 + 5;
          const left = Math.random() * 100;
          const animationDuration = Math.random() * 10 + 10;
          const animationDelay = Math.random() * -20;
          
          return (
            <div
              key={i}
              className="sakura"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}vw`,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${animationDelay}s`
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default BackgroundElements;
