import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { Home, School, Tent } from 'lucide-react';

const Addresses = () => {
  const { t } = useLanguage();

  const addressData = [
    {
      icon: <Home size={28} className="text-[var(--color-emerald-jade)]" />,
      titleEn: "Permanent Address (India)",
      titleJa: "本籍地（インド）",
      addressEn: "Flat No. 4, Radhey Niwas, Jadhavvasti, Kalas, Pune – 411015, Maharashtra, India\nBehind Shifa Restaurant",
      addressJa: "インド マハラシュトラ州 プネ 411015\nカラス ジャダヴヴァスティ ラデイ・ニワス 4号室\n（シファレストラン裏）",
      borderColor: "border-l-[var(--color-emerald-jade)]"
    },
    {
      icon: <School size={28} className="text-[var(--color-imperial-gold)]" />,
      titleEn: "IIT Mandi Address",
      titleJa: "IITマンディ住所",
      addressEn: "IIT Mandi, Kamand, Mandi District, Himachal Pradesh – 175075, India",
      addressJa: "インド ヒマーチャル・プラデーシュ州 マンディ県 カマンド IITマンディ 175075",
      borderColor: "border-l-[var(--color-imperial-gold)]"
    },
    {
      icon: <Tent size={28} className="text-[var(--color-sakura-pink)]" />,
      titleEn: "Japan Residence",
      titleJa: "日本での滞在先",
      addressEn: "Room No. 301, Floris Aurantium 3, 1-27-1 Tsukishima, Chuo-ku, Tokyo 104-0052, Japan",
      addressJa: "〒104-0052 東京都中央区月島1-27-1\nフローリス・アウランティウム3 301号室",
      borderColor: "border-l-[var(--color-sakura-pink)]"
    }
  ];

  return (
    <section className="section-padding container relative z-10" id="addresses">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--color-soft-ivory)]">
        {t("Addresses", "住所情報")}
        <span className="block w-24 h-1 bg-[var(--color-emerald-jade)] mx-auto mt-4 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {addressData.map((item, index) => (
          <GlassCard 
            key={index} 
            delay={index * 0.2} 
            className={`border-l-4 ${item.borderColor} h-full flex flex-col`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-[var(--color-midnight-black)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{t(item.titleEn, item.titleJa)}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line flex-grow">
              {t(item.addressEn, item.addressJa)}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Addresses;
