import { useEffect, useRef } from 'react';
import { X, MapPin, Clock } from 'lucide-react';
import type { LuggageItem } from '../data/luggage';
import { useLang } from '../i18n/LanguageContext';

export function LuggageModal({ item, onClose }: { item: LuggageItem; onClose: () => void }) {
  const { t, tx } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="eu-modal-back" onClick={onClose}>
      <div
        className="eu-modal"
        role="dialog"
        aria-modal="true"
        aria-label={tx(item.name)}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="eu-modal-x" onClick={onClose} aria-label={t('lug.close')}>
          <X size={18} />
        </button>

        <div className="eu-modal-img">
          <img src={item.image} alt={tx(item.name)} />
        </div>

        <div className="eu-modal-body">
          <span className="eu-kicker">{tx(item.kind)}</span>
          <h2>{tx(item.name)}</h2>
          <p>{tx(item.summary)}</p>

          <dl className="eu-dl">
            <dt>{t('lug.size')}</dt>
            <dd>{tx(item.size)}</dd>
            <dt>{t('lug.colour')}</dt>
            <dd><span className="eu-swatch" style={{ background: item.swatch }} /> {tx(item.color)}</dd>
          </dl>

          <div className="eu-tags">
            {item.features.map((f) => (
              <span className="eu-tag" key={f}>{tx(f)}</span>
            ))}
          </div>

          <div className="eu-statusbox">
            <span className={`eu-status ${item.status}`}>{t(`status.${item.status}`)}</span>
            <small><MapPin size={12} style={{ verticalAlign: '-1px' }} /> {tx(item.location)}</small>
            <small><Clock size={12} style={{ verticalAlign: '-1px' }} /> {t('lug.updated')} {tx(item.updated)}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
