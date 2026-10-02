import { Link } from 'react-router-dom';
import '../App.css';
import '../europe/europe.css';
import '../europe/eu-theme.css';
import FloatingActions from '../components/FloatingActions';
import { EuBackground } from '../europe/EuBackground';
import EuHero from '../europe/home/EuHero';
import EuLocations from '../europe/home/EuLocations';
import EuLuggage from '../europe/home/EuLuggage';
import EuContact from '../europe/home/EuContact';
import EuAbout from '../europe/home/EuAbout';
import { useFadeInSections } from '../hooks/useFadeInSections';
import { WHATSAPP_URL } from '../data/trip';
import { useLang } from '../i18n/LanguageContext';
import { LanguageSlider } from '../i18n/LanguageSlider';

// Same layout and components as the Japan page, restyled in blue and white for Europe.
function EuropePage() {
  useFadeInSections();
  const { t } = useLang();

  return (
    <div className="app-container eu-theme">
      <EuBackground />
      <LanguageSlider />

      <nav className="eu-topnav">
        <Link to="/cards" className="glass-panel">{t('nav.cards')}</Link>
        <Link to="/luggage" className="glass-panel">{t('nav.luggage')}</Link>
        <Link to="/japan" className="glass-panel">{t('nav.old')}</Link>
      </nav>

      <main>
        <EuHero />
        <EuLocations />
        <EuLuggage />
        <EuContact />
        <EuAbout />
      </main>

      <FloatingActions whatsapp={WHATSAPP_URL} labels={{ call: t('act.call'), email: t('act.email'), whatsapp: t('act.whatsapp') }} />

      <footer className="text-center py-12 text-muted animate-fade-in" style={{ position: 'relative', zIndex: 10, padding: '60px 0' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-crimson)', marginBottom: '10px' }}>{t('foot.h')}</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-primary)' }}>{t('foot.sub')}</p>
        <p>&copy; {new Date().getFullYear()} Kartavya Mahesh Suryawanshi. {t('foot.rights')}</p>
      </footer>
    </div>
  );
}

export default EuropePage;
