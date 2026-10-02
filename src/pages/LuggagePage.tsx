import { useState } from 'react';
import { EuShell } from '../europe/EuShell';
import { LuggageModal } from '../europe/LuggageModal';
import { LUGGAGE, type LuggageItem } from '../data/luggage';
import { useLang } from '../i18n/LanguageContext';

function LuggagePage() {
  const { t, tx } = useLang();
  const [open, setOpen] = useState<LuggageItem | null>(null);

  return (
    <EuShell>
      <section className="eu-section" style={{ paddingTop: 70 }}>
        <div className="eu-wrap">
          <div className="eu-section-head eu-reveal">
            <span className="eu-kicker">{t('lug.kicker')}</span>
            <h2>{t('lug.title')}</h2>
            <p>{t('lug.sub')}</p>
          </div>

          <div className="eu-bags">
            {LUGGAGE.map((item) => (
              <button key={item.id} type="button" className="eu-bag eu-reveal" onClick={() => setOpen(item)}>
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
        </div>
      </section>

      {open && <LuggageModal item={open} onClose={() => setOpen(null)} />}
    </EuShell>
  );
}

export default LuggagePage;
