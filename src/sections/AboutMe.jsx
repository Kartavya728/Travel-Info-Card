import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { User, Flag, Activity, Languages } from 'lucide-react';

const AboutMe = () => {
  const { t } = useLanguage();

  const details = [
    {
      icon: <User size={24} className="text-[var(--color-sakura-pink)]" />,
      labelEn: "Full Name",
      labelJa: "氏名",
      valueEn: "Kartavya Mahesh Suryawanshi",
      valueJa: "カルタヴィヤ・マヘシュ・スリヤワンシ"
    },
    {
      icon: <Activity size={24} className="text-[var(--color-emerald-jade)]" />,
      labelEn: "Age & Blood Group",
      labelJa: "年齢と血液型",
      valueEn: "19 Years | O+",
      valueJa: "19歳 | O+"
    },
    {
      icon: <Flag size={24} className="text-[var(--color-imperial-gold)]" />,
      labelEn: "Nationality",
      labelJa: "国籍",
      valueEn: "Indian",
      valueJa: "インド"
    },
    {
      icon: <Languages size={24} className="text-[var(--color-crimson-red)]" />,
      labelEn: "Languages Spoken",
      labelJa: "話せる言語",
      valueEn: "English, Hindi, Marathi",
      valueJa: "英語、ヒンディー語、マラーティー語"
    }
  ];

  return (
    <section className="section-padding container relative z-10" id="about">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--color-soft-ivory)]">
        {t("About Me", "私について")}
        <span className="block w-24 h-1 bg-[var(--color-imperial-gold)] mx-auto mt-4 rounded-full" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {details.map((item, index) => (
          <GlassCard key={index} delay={index * 0.1} className="flex items-center gap-6">
            <div className="p-4 rounded-full bg-[var(--color-midnight-black)] border border-[var(--color-glass-border)]">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">{t(item.labelEn, item.labelJa)}</p>
              <h3 className="text-xl font-semibold">{t(item.valueEn, item.valueJa)}</h3>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
