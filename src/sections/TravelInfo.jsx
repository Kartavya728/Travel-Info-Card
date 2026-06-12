import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { PlaneTakeoff, PlaneLanding, Map, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TravelInfo = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding container relative z-10" id="travel">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--color-soft-ivory)]">
        {t("Travel Information", "渡航情報")}
        <span className="block w-24 h-1 bg-[var(--color-crimson-red)] mx-auto mt-4 rounded-full" />
      </h2>

      <div className="max-w-4xl mx-auto">
        <GlassCard className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl text-gray-400 mb-2">{t("Purpose of Visit", "渡航目的")}</h3>
              <p className="text-2xl font-bold text-[var(--color-imperial-gold)]">
                {t("International Summer Internship", "国際サマーインターンシップ")}
              </p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl text-gray-400 mb-2">{t("Travel Period", "渡航期間")}</h3>
              <div className="flex items-center justify-center md:justify-end gap-2 text-2xl font-bold">
                <Clock className="text-[var(--color-emerald-jade)]" />
                <p>{t("13 June 2026 - 12 July 2026", "2026年6月13日 - 2026年7月12日")}</p>
              </div>
            </div>
          </div>

          {/* Animated Flight Route Visual */}
          <div className="relative py-16 px-4">
            <svg className="absolute top-1/2 left-0 w-full h-32 transform -translate-y-1/2" preserveAspectRatio="none">
              <path
                id="flight-path"
                d="M 10 64 Q 50% -50, 100% 64"
                fill="transparent"
                stroke="rgba(248, 250, 252, 0.2)"
                strokeWidth="2"
                strokeDasharray="10,10"
              />
              <motion.path
                d="M 10 64 Q 50% -50, 100% 64"
                fill="transparent"
                stroke="var(--color-crimson-red)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>

            <div className="flex justify-between relative z-10">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-[var(--color-deep-navy)] border-2 border-[var(--color-emerald-jade)] mb-3">
                  <PlaneTakeoff size={24} className="text-[var(--color-emerald-jade)]" />
                </div>
                <span className="font-bold text-xl">{t("India", "インド")}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-[var(--color-deep-navy)] border-2 border-[var(--color-sakura-pink)] mb-3">
                  <PlaneLanding size={24} className="text-[var(--color-sakura-pink)]" />
                </div>
                <span className="font-bold text-xl">{t("Japan", "日本")}</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default TravelInfo;
