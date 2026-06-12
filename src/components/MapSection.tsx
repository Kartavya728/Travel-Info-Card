import React, { useState } from 'react';
import { MapPin, Building, Home, GraduationCap } from 'lucide-react';
import './MapSection.css';

const LOCATIONS = {
  japan: {
    id: 'japan',
    title: '日本の滞在先 (Japan Residence)',
    address: 'Room No. 301, Floris Aurantium 3, 1-27-1 Tsukishima, Chuo-ku, Tokyo 104-0052, Japan',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9748680077864!2d139.7788481!3d35.6529323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897c8d9e6eb1%3A0x6b4fb712f277a0c!2s1-ch%C5%8Dme-27-1%20Tsukishima%2C%20Chuo%20City%2C%20Tokyo%20104-0052%2C%20Japan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    icon: <Building size={24} />
  },
  university: {
    id: 'university',
    title: '大学の住所 (University Address)',
    address: 'Indian Institute of Technology Mandi, Kamand, Mandi District, Himachal Pradesh – 175075, India',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.871587823908!2d76.98061481515904!3d31.77545198128591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e215b2253081%3A0xb35a39828d57d544!2sIndian%20Institute%20of%20Technology%20Mandi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    icon: <GraduationCap size={24} />
  },
  india: {
    id: 'india',
    title: 'インドの自宅 (India Residence)',
    address: 'Flat No. 4, Radhey Niwas, Jadhavvasti, Kalas, Pune – 411015, Maharashtra, India',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3320297079237!2d73.87413001538356!3d18.57077678737976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12f45511b01%3A0x8613fb2cf2f2ba8f!2sKalas%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    icon: <Home size={24} />
  }
};

const MapSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(LOCATIONS.japan);

  return (
    <section className="map-section section" id="locations">
      <div className="container">
        <h2 className="section-title animate-fade-in text-center">
          <span className="title-kanji">場所</span>
          場所 (Locations)
        </h2>

        <div className="location-buttons animate-fade-in delay-100">
          {Object.values(LOCATIONS).map((loc) => (
            <button
              key={loc.id}
              className={`location-card glass-panel ${activeLocation.id === loc.id ? 'active' : ''}`}
              onClick={() => setActiveLocation(loc)}
            >
              <div className="location-icon">
                {loc.icon}
              </div>
              <h3>{loc.title}</h3>
              <p>{loc.address}</p>
            </button>
          ))}
        </div>

        <div className="map-container glass-panel animate-fade-in delay-200">
          <div className="map-header">
            <MapPin size={20} className="text-crimson" />
            <span>{activeLocation.address}</span>
          </div>
          <iframe
            src={activeLocation.iframeSrc}
            width="100%"
            height="450"
            style={{ border: 0, borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={activeLocation.title}
          ></iframe>
        </div>

        {/* Travel Date Note */}
        <div className="travel-date-note glass-panel animate-fade-in delay-300">
          <p className="note-label">旅行期間 (Travel Duration):</p>
          <p className="note-value text-crimson">13 June 2026 – 12 July 2026</p>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
