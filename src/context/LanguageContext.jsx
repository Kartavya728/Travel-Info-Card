import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ja' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'ja') {
      document.body.classList.add('lang-ja');
    } else {
      document.body.classList.remove('lang-ja');
    }
  }, [language]);

  const t = (enText, jaText) => {
    return language === 'en' ? enText : jaText;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
