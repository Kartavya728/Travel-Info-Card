import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-12"
      >
        {/* Kamon-inspired glowing frame */}
        <div className="absolute inset-0 rounded-full bg-[var(--color-imperial-gold)] mix-blend-screen filter blur-[20px] opacity-30 animate-pulse-glow" />
        <div className="absolute -inset-4 rounded-full border border-[var(--color-imperial-gold)] opacity-20 animate-[kamon-spin_20s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
        <div className="absolute -inset-8 rounded-full border border-[var(--color-sakura-pink)] opacity-10 animate-[kamon-spin_30s_linear_infinite_reverse]" style={{ borderStyle: 'dotted' }} />
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[var(--color-soft-ivory)] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          <img 
            src="/profile.jpeg" 
            alt="Kartavya Mahesh Suryawanshi" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="text-[var(--color-soft-ivory)]">Kartavya Mahesh </span>
          <span className="text-gradient">Suryawanshi</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-[var(--color-imperial-gold)] mb-6 tracking-widest font-japanese opacity-80">
          カルタヴィヤ・マヘシュ・スリヤワンシ
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t(
            "B.Tech. Data Science & Engineering Student at IIT Mandi | International Summer Intern in Japan",
            "IITマンディB.Tech.データサイエンス＆エンジニアリング学生 | 日本での国際サマーインターン"
          )}
        </p>

        <motion.div 
          className="glass-panel py-4 px-8 inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-lg font-medium italic">
            {t(
              "\"Building bridges between cultures through technology, innovation, and lifelong learning.\"",
              "「技術、革新、そして生涯学習を通じて文化の架け橋を築く。」"
            )}
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[var(--color-imperial-gold)] to-transparent opacity-50 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
