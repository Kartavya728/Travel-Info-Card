import { useEffect, type ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { History } from 'lucide-react';
import { WHATSAPP_URL } from '../data/trip';
import { WhatsAppIcon } from '../components/Icons';
import { useLang } from '../i18n/LanguageContext';
import { LanguageSlider } from '../i18n/LanguageSlider';
import './europe.css';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.eu-reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export function EuBackdrop() {
  return <div className="eu-backdrop" aria-hidden="true" />;
}

export function EuShell({ children }: { children: ReactNode }) {
  useReveal();
  const { t } = useLang();
  const cls = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');
  return (
    <div className="eu-root">
      <EuBackdrop />
      <LanguageSlider />
      <header className="eu-nav">
        <div className="eu-wrap eu-nav-inner">
          <Link to="/" className="eu-brand">
            <span className="eu-star">★</span>
            <span className="t">Kartavya · Europe</span>
          </Link>
          <nav className="eu-links">
            <NavLink to="/" end className={cls}>{t('nav.home')}</NavLink>
            <NavLink to="/cards" className={cls}>{t('nav.cards')}</NavLink>
            <NavLink to="/luggage" className={cls}>{t('nav.luggage')}</NavLink>
            <NavLink to="/japan" className="eu-old">
              <History size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
              {t('nav.old')}
            </NavLink>
          </nav>
        </div>
      </header>

      {children}

      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="eu-wa-fab" aria-label="Open WhatsApp chat">
        <WhatsAppIcon size={26} />
      </a>

      <footer className="eu-footer">
        <h2>{t('foot.h')}</h2>
        <p>{t('foot.sub')}</p>
        <p style={{ marginTop: 18 }}>&copy; {new Date().getFullYear()} Kartavya Mahesh Suryawanshi</p>
      </footer>
    </div>
  );
}
