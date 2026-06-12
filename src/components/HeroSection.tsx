import React from 'react';
import { LinkedinIcon, WhatsAppIcon } from './Icons';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section section">
      <div className="container hero-container">
        
        {/* Profile Image with Frame */}
        <div className="profile-wrapper animate-fade-in delay-100">
          <div className="samurai-frame">
            <div className="frame-ring outer"></div>
            <div className="frame-ring middle"></div>
            <div className="frame-ring inner"></div>
            <img src="/profile.jpeg" alt="Kartavya Mahesh Suryawanshi" className="profile-img" />
          </div>
        </div>
        
        {/* Intro Content */}
        <div className="hero-content text-center">
          <h2 className="greeting animate-fade-in delay-200">こんにちは</h2>
          <h1 className="name animate-fade-in delay-300">
            <span className="text-gradient">Kartavya Mahesh Suryawanshi</span>
          </h1>
          <p className="japanese-name animate-fade-in delay-400">カタビヤ マヘシュ スリヤワンシ</p>
          
          <div className="titles animate-fade-in delay-500">
            <div className="title-item">
              <span className="bullet"></span> B.Tech. Data Science & Engineering | IIT Mandi
            </div>
            <div className="title-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="bullet text-crimson"></span> 
                Currently in Summer Intern at Nomura Real Estate Holdings, Japan
              </div>
              <div className="japanese-text" style={{ paddingLeft: '16px' }}>
                現在、野村不動産ホールディングス（日本）でサマーインターン中
              </div>
            </div>
          </div>
          
          <div className="hero-social-links animate-fade-in delay-600">
            <a href="https://www.linkedin.com/in/kartavya-suryawanshi-918753320/" target="_blank" rel="noreferrer" className="hero-social-btn linkedin">
              <LinkedinIcon size={24} /> <span>LinkedIn</span>
            </a>
            <a href="https://wa.me/918668944955" target="_blank" rel="noreferrer" className="hero-social-btn whatsapp">
              <WhatsAppIcon size={24} /> <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
