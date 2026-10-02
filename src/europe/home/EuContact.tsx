import React from 'react';
import { Phone, Mail, AlertTriangle } from 'lucide-react';
import { LinkedinIcon } from '../../components/Icons';
import { CONTACT, EMERGENCY_EU } from '../../data/trip';
import { useLang } from '../../i18n/LanguageContext';
import '../../components/ContactSection.css';

const tel = (n: string) => `tel:${n.replace(/\s/g, '')}`;

const EuContact: React.FC = () => {
  const { t, tx } = useLang();
  const germanPhoneSet = CONTACT.germanPhone.replace(/[^\d]/g, '').length > 2;

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <h2 className="section-title animate-fade-in text-center">
          <span className="title-kanji">{t('contact.title')}</span>
          {t('contact.title')}
        </h2>

        <div className="single-contact-card glass-panel animate-fade-in delay-100">
          <div className="contact-row">
            <div className="contact-group">
              <div className="contact-icon bg-gold">
                <Phone size={20} />
              </div>
              <div className="contact-info">
                <h3>{t('contact.phone')}</h3>
                {germanPhoneSet ? (
                  <a href={tel(CONTACT.germanPhone)}>{CONTACT.germanPhone} ({t('contact.germany')})</a>
                ) : (
                  <p>{CONTACT.germanPhone} ({t('contact.germany')}, {t('contact.toBeAdded')})</p>
                )}
                {CONTACT.indianPhones.map((n, i) => (
                  <a key={n} href={tel(n)}>{n} ({i === 0 ? t('contact.indiaPrimary') : t('contact.indiaSecondary')})</a>
                ))}
              </div>
            </div>

            <div className="contact-group">
              <div className="contact-icon bg-gold">
                <Mail size={20} />
              </div>
              <div className="contact-info">
                <h3>{t('contact.email')}</h3>
                <a href={`mailto:${CONTACT.primaryEmail}`}>{CONTACT.primaryEmail}</a>
                <a href={`mailto:${CONTACT.secondaryEmail}`}>{CONTACT.secondaryEmail}</a>
              </div>
            </div>
          </div>

          <div className="contact-row divider">
            <div className="contact-group">
              <div className="contact-icon bg-indigo">
                <LinkedinIcon size={20} />
              </div>
              <div className="contact-info">
                <h3>{t('contact.professional')}</h3>
                <div className="social-links-inline">
                  <a href="https://www.linkedin.com/in/kartavya-suryawanshi-918753320/" target="_blank" rel="noreferrer" className="social-text-link">LinkedIn</a>
                  <span className="separator">•</span>
                  <a href="https://github.com/Kaartavya728" target="_blank" rel="noreferrer" className="social-text-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="contact-group">
              <div className="contact-icon bg-crimson">
                <AlertTriangle size={20} />
              </div>
              <div className="contact-info">
                <h3>{t('contact.emergency')}</h3>
                <p>{t('contact.euNumber')}: <strong>{EMERGENCY_EU}</strong></p>
                <p>{tx(CONTACT.emergencyName)}</p>
                <a href={tel(CONTACT.emergencyPhone)} className="text-crimson font-medium">{CONTACT.emergencyPhone}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Lost and Found Message */}
        <div className="lost-found-card glass-panel animate-fade-in delay-200">
          <div className="lost-found-icon">
            <AlertTriangle size={32} />
          </div>
          <div className="lost-found-content">
            <h3 className="lost-found-title">{t('lost.title')}</h3>
            <p className="lost-found-text english">
              “{t('lost.main')}”
            </p>
            <p className="lost-found-text japanese">
              {t('lost.alt')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EuContact;
