import { useRef, type KeyboardEvent } from 'react';
import { LANGS } from './translations';
import { useLang } from './LanguageContext';
import './language-slider.css';

// Standalone horizontal slider fixed to the top-right corner. The highlight glides to the chosen language.
export function LanguageSlider() {
  const { lang, setLang, t } = useLang();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const index = Math.max(0, LANGS.findIndex((l) => l.code === lang));

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (index + (e.key === 'ArrowRight' ? 1 : LANGS.length - 1)) % LANGS.length;
    setLang(LANGS[next].code);
    refs.current[next]?.focus();
  };

  return (
    <div
      className="lang-slider"
      role="radiogroup"
      aria-label={t('lang.label')}
      style={{ ['--i' as string]: index, ['--n' as string]: LANGS.length }}
      onKeyDown={onKeyDown}
    >
      <span className="lang-slider-thumb" aria-hidden="true" />
      {LANGS.map((l, i) => (
        <button
          key={l.code}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="button"
          role="radio"
          aria-checked={l.code === lang}
          tabIndex={l.code === lang ? 0 : -1}
          title={l.label}
          className={`lang-slider-opt ${l.code === lang ? 'on' : ''}`}
          onClick={() => setLang(l.code)}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
