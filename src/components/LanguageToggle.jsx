import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 glass-panel px-4 py-2 hover:bg-[var(--color-glass-border-hover)]"
      style={{ cursor: 'none' }}
    >
      <Globe size={18} className="text-[var(--color-sakura-pink)]" />
      <span className="font-medium text-sm">
        {language === 'en' ? '日本語' : 'English'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
