import React from 'react';
import { useLang } from '../../i18n/LanguageContext';
import '../../components/AboutSection.css';

const EuAbout: React.FC = () => {
  const { t } = useLang();
  return (
  <section className="about-section section" id="about">
    <div className="container">
      <h2 className="section-title animate-fade-in text-center">
        <span className="title-kanji">{t('about.title')}</span>
        {t('about.title')}
      </h2>

      <div className="about-announcement-card animate-fade-in delay-100">
        <div className="about-pattern-bg"></div>
        <div className="about-content">
          <div className="about-vertical-title">{t('about.vertical')}</div>

          <div className="about-details-list">
            <div className="detail-item">
              <span className="detail-label">{t('about.name')}</span>
              <span className="detail-value">Kartavya Mahesh Suryawanshi</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">{t('about.nationality')}</span>
              <span className="detail-value">{t('about.nationalityValue')}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">{t('about.blood')}</span>
              <span className="detail-value blood-group text-crimson">O+</span>
            </div>

            <div className="detail-item full-width">
              <span className="detail-label">{t('about.languages')}</span>
              <span className="detail-value language-tags-inline">
                <span className="lang-tag">{t('about.english')}</span>
                <span className="lang-tag">{t('about.hindi')}</span>
                <span className="lang-tag">{t('about.marathi')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default EuAbout;
