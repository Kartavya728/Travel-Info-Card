import { useState } from 'react';
import { RotateCw } from 'lucide-react';
import { EuShell } from '../europe/EuShell';
import { CARDS, type TravelCard } from '../data/cards';
import { useLang } from '../i18n/LanguageContext';

function Face({ card, side }: { card: TravelCard; side: 'front' | 'back' }) {
  const { tx } = useLang();
  const src = side === 'front' ? card.front : card.back;
  if (src) {
    return (
      <div className={`eu-face ${side}`}>
        <img src={src} alt={`${tx(card.title)}, ${side}`} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`eu-face placeholder ${side}`} style={{ ['--accent' as string]: card.accent }}>
      <div>
        <strong>{tx(card.title)}</strong>
        <span>{side === 'front' ? 'Coming soon' : 'Back side'}</span>
      </div>
    </div>
  );
}

function CardItem({ card }: { card: TravelCard }) {
  const { t, tx } = useLang();
  const [flipped, setFlipped] = useState(false);
  return (
    <article className="eu-card-item eu-reveal">
      <button
        type="button"
        className={`eu-flip ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-label={`${t('cards.flip')}: ${tx(card.title)}`}
      >
        <div className="eu-flip-inner" style={{ aspectRatio: card.aspect }}>
          <Face card={card} side="front" />
          <Face card={card} side="back" />
        </div>
      </button>
      <div className="eu-flip-hint"><RotateCw size={13} /> {t('cards.flip')}</div>
      <h3>{tx(card.title)}</h3>
      <div className="eu-card-meta">{tx(card.region)} · {tx(card.period)}</div>
      {card.note && <div className="eu-card-note">{card.note}</div>}
    </article>
  );
}

function CardsPage() {
  const { t } = useLang();
  return (
    <EuShell>
      <section className="eu-section" style={{ paddingTop: 70 }}>
        <div className="eu-wrap">
          <div className="eu-section-head eu-reveal">
            <span className="eu-kicker">{t('cards.kicker')}</span>
            <h2>{t('cards.title')}</h2>
            <p>{t('cards.sub')}</p>
          </div>
          <div className="eu-gallery">
            {CARDS.map((c) => (
              <CardItem key={c.id} card={c} />
            ))}
          </div>
        </div>
      </section>
    </EuShell>
  );
}

export default CardsPage;
