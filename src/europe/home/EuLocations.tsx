import React, { useState } from 'react';
import { MapPin, Building, Home, GraduationCap } from 'lucide-react';
import { PLACES, TRIP, type Place } from '../../data/trip';
import { useLang } from '../../i18n/LanguageContext';
import '../../components/MapSection.css';

const ICONS: Record<Place['id'], React.ReactNode> = {
  munich: <Building size={24} />,
  tum: <GraduationCap size={24} />,
  india: <Home size={24} />,
};

const EuLocations: React.FC = () => {
  const { t, tx } = useLang();
  const [active, setActive] = useState<Place>(PLACES[0]);

  return (
    <section className="map-section section" id="locations">
      <div className="container">
        <h2 className="section-title animate-fade-in text-center">
          <span className="title-kanji">{t('loc.title')}</span>
          {t('loc.title')}
        </h2>

        <div className="location-buttons animate-fade-in delay-100">
          {PLACES.map((p) => (
            <button
              key={p.id}
              className={`location-card glass-panel ${active.id === p.id ? 'active' : ''}`}
              onClick={() => setActive(p)}
            >
              <div className="location-icon">{ICONS[p.id]}</div>
              <h3>{tx(p.title)}</h3>
              <p>{p.address}</p>
            </button>
          ))}
        </div>

        <div className="map-container glass-panel animate-fade-in delay-200">
          <div className="map-header">
            <MapPin size={20} className="text-crimson" />
            <span>{active.address}</span>
          </div>
          <iframe
            key={active.id}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(active.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0, borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={tx(active.title)}
          ></iframe>
        </div>

        <div className="travel-date-note glass-panel animate-fade-in delay-300">
          <p className="note-label">{t('loc.duration')}</p>
          <p className="note-value text-crimson">{tx(TRIP.durationLabel)}</p>
        </div>
      </div>
    </section>
  );
};

export default EuLocations;
