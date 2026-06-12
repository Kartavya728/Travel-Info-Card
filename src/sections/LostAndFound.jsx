import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle } from 'lucide-react';

const LostAndFound = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding container relative z-10 mb-20" id="lost-and-found">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="border-2 border-[var(--color-imperial-gold)] bg-[rgba(212,175,55,0.05)] text-center shadow-[0_0_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMykiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-full bg-[rgba(212,175,55,0.2)] mb-6 animate-pulse-glow">
              <AlertCircle size={48} className="text-[var(--color-imperial-gold)]" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-imperial-gold)]">
              {t("Lost and Found", "お忘れ物・落とし物")}
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "If this luggage is found, please contact me using the information above or hand it over to the nearest airline staff. Thank you very much."
              </p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-glass-border)] to-transparent" />
              
              <p className="text-xl md:text-2xl font-japanese text-[var(--color-sakura-pink)] leading-relaxed">
                「この荷物を見つけた場合は、上記の連絡先までご連絡いただくか、最寄りの航空会社スタッフにお渡しください。ご協力ありがとうございます。」
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default LostAndFound;
