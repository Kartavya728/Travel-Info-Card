/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { DICT, LANGS, translatePhrase, type Key, type Lang } from './translations';

const STORAGE_KEY = 'travel-card-lang';

interface LanguageValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** UI string */
  t: (key: Key) => string;
  /** translate a data string (luggage names, card titles...), falling back to the original */
  tx: (text: string) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function isLang(v: unknown): v is Lang {
  return LANGS.some((l) => l.code === v);
}

function readStored(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return isLang(v) ? v : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // English by default; the visitor's pick is remembered.
  const [lang, setLangState] = useState<Lang>(() => readStored() ?? 'en');

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang,
      t: (key) => DICT[lang][key],
      tx: (text) => translatePhrase(lang, text),
    }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
