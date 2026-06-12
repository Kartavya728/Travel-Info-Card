import React, { useMemo } from 'react';
import '../animations.css';

const BackgroundElements = () => {
  // Generate random sakura petals
  const petals = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      width: `${Math.random() * 8 + 4}px`,
      height: `${Math.random() * 12 + 6}px`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `-${Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[var(--color-midnight-black)]">
      {/* Base Patterns */}
      <div className="seigaiha-pattern" />
      <div className="cyber-grid" />
      
      {/* Sakura Particles */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            width: petal.width,
            height: petal.height,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
          }}
        />
      ))}

      {/* Mount Fuji Silhouette (SVG representation) */}
      <div className="mountain-silhouette">
        <svg viewBox="0 0 1000 300" className="mountain-svg" preserveAspectRatio="none">
          <path 
            d="M 0 300 L 300 300 L 450 100 Q 500 50 550 100 L 700 300 L 1000 300 L 1000 0 L 0 0 Z" 
            fill="transparent" 
            stroke="rgba(249, 168, 212, 0.2)" 
            strokeWidth="2" 
          />
          <path 
            d="M 300 300 L 450 100 Q 500 50 550 100 L 700 300 L 1000 300 L 0 300 Z" 
            fill="var(--color-deep-navy)" 
          />
          {/* Snow cap */}
          <path 
            d="M 450 100 Q 500 50 550 100 L 520 150 Q 500 130 480 150 Z" 
            fill="var(--color-soft-ivory)" 
            opacity="0.8" 
          />
        </svg>
      </div>
      
      {/* Floating Neon Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-sakura-pink)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--color-emerald-jade)] rounded-full mix-blend-screen filter blur-[120px] opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-crimson-red)] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]" />
    </div>
  );
};

export default BackgroundElements;
