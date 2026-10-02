import { LinkedinIcon, WhatsAppIcon } from '../../components/Icons';
import { WHATSAPP_URL } from '../../data/trip';
import { useLang } from '../../i18n/LanguageContext';
import '../../components/HeroSection.css';

const EuHero: React.FC = () => {
  const { t } = useLang();
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
        <h2 className="greeting animate-fade-in delay-200">{t('hero.greeting')}</h2>
        <h1 className="name animate-fade-in delay-300">
          <span className="text-gradient">Kartavya Mahesh Suryawanshi</span>
        </h1>
        <p className="japanese-name animate-fade-in delay-400">München · Deutschland · Europe</p>

        <div className="titles animate-fade-in delay-500">
          <div className="title-item">
            <span className="bullet"></span> B.Tech. Data Science & Engineering | IIT Mandi
          </div>
          <div className="title-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="bullet text-crimson"></span>
              {t('hero.current')}
            </div>
            <div className="japanese-text" style={{ paddingLeft: '16px' }}>
              {t('hero.currentSub')}
            </div>
          </div>
        </div>

        <div className="hero-social-links animate-fade-in delay-600">
          <a href="https://www.linkedin.com/in/kartavya-suryawanshi-918753320/" target="_blank" rel="noreferrer" className="hero-social-btn linkedin">
            <LinkedinIcon size={24} /> <span>{t('hero.linkedin')}</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hero-social-btn whatsapp">
            <WhatsAppIcon size={24} /> <span>{t('hero.whatsapp')}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default EuHero;
