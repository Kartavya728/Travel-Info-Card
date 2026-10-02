import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LUGGAGE, type LuggageItem } from '../../data/luggage';
import { LuggageModal } from '../LuggageModal';
import { useLang } from '../../i18n/LanguageContext';

// Luggage cards for the home page (same cards as the /luggage route).
const EuLuggage: React.FC = () => {
  const { t, tx } = useLang();
  const [open, setOpen] = useState<LuggageItem | null>(null);

  return (
    <>
    <section className="luggage-section section" id="luggage">
      <div className="container">
        <h2 className="section-title animate-fade-in text-center">
          <span className="title-kanji">{t('lug.kicker')}</span>
          {t('lug.title')}
        </h2>

        <div className="eu-bags">
          {LUGGAGE.map((item) => (
            <button key={item.id} type="button" className="eu-bag fade-in-section" onClick={() => setOpen(item)}>
              <div className="eu-bag-img">
                <img src={item.image} alt={tx(item.name)} loading="lazy" />
              </div>
              <div className="eu-bag-body">
                <h3>{tx(item.name)}</h3>
                <div className="eu-bag-meta">
                  <span className="eu-swatch" style={{ background: item.swatch }} />
                  {tx(item.color)} · {tx(item.size)}
                </div>
                <span className={`eu-status ${item.status}`}>{t(`status.${item.status}`)} · {tx(item.location)}</span>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center" style={{ marginTop: 28 }}>
          <Link to="/luggage" className="hero-social-btn" style={{ display: 'inline-flex' }}>{t('lug.openPage')}</Link>
        </p>
      </div>
    </section>

    {open && <LuggageModal item={open} onClose={() => setOpen(null)} />}
    </>
  );
};

export default EuLuggage;
