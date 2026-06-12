import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <h2 className="section-title animate-fade-in text-center">
          <span className="title-kanji">私について</span>
          私について (About Me)
        </h2>
        
        <div className="about-announcement-card animate-fade-in delay-100">
          <div className="about-pattern-bg"></div>
          <div className="about-content">
            <div className="about-vertical-title">
              プロフィール
            </div>
            
            <div className="about-details-list">
              <div className="detail-item">
                <span className="detail-label">氏名 (Full Name)</span>
                <span className="detail-value">
                  Kartavya Mahesh Suryawanshi<br />
                  <small className="japanese-text">カタビヤ マヘシュ スリヤワンシ</small>
                </span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">年齢 (Age)</span>
                <span className="detail-value">19歳 (19 Years Old)</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">国籍 (Nationality)</span>
                <span className="detail-value">インド人 (Indian)</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">血液型 (Blood Group)</span>
                <span className="detail-value blood-group text-crimson">O+</span>
              </div>

              <div className="detail-item full-width">
                <span className="detail-label">言語 (Languages Known)</span>
                <span className="detail-value language-tags-inline">
                  <span className="lang-tag">英語 (English)</span>
                  <span className="lang-tag">ヒンディー語 (Hindi)</span>
                  <span className="lang-tag">マラーティー語 (Marathi)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
