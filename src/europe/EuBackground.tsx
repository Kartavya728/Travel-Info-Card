import { useEffect, useState } from 'react';
import { EuBackdrop } from './EuShell';

// Blue-and-white counterpart of the Japan page's BackgroundElements:
// landmark/greeting watermarks, an Alps + Frauenkirche skyline, and falling snow instead of sakura.
export function EuBackground() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(window.innerWidth < 768 ? 15 : 30);
  }, []);

  return (
    <>
      <EuBackdrop />

      <div className="eu-skyline" aria-hidden="true">
        <svg viewBox="0 0 200 60" preserveAspectRatio="none">
          <path d="M0,60 L0,40 L22,18 L36,32 L58,10 L80,34 L96,24 L120,40 L142,14 L166,36 L184,22 L200,38 L200,60 Z" fill="rgba(0,51,153,0.07)" />
          <path d="M58,10 L64,18 L52,18 Z M142,14 L148,22 L136,22 Z" fill="rgba(255,255,255,0.7)" />
          {/* Frauenkirche twin towers */}
          <g fill="rgba(0,51,153,0.12)">
            <rect x="84" y="34" width="32" height="26" />
            <rect x="85" y="24" width="9" height="14" />
            <rect x="106" y="24" width="9" height="14" />
            <path d="M85,24 Q89.5,10 94,24 Z" />
            <path d="M106,24 Q110.5,10 115,24 Z" />
            <rect x="89" y="6" width="1" height="6" />
            <rect x="110" y="6" width="1" height="6" />
          </g>
        </svg>
      </div>

      <div className="sakura-container" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => {
          const size = Math.random() * 8 + 4;
          return (
            <div
              key={i}
              className="snowflake"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}vw`,
                animationDuration: `${Math.random() * 12 + 12}s`,
                animationDelay: `${Math.random() * -24}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
