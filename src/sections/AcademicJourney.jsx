import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, GraduationCap, MapPin, Building, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademicJourney = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding container relative z-10" id="academic">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[var(--color-soft-ivory)]">
        {t("Academic Journey", "学歴と道のり")}
        <span className="block w-24 h-1 bg-[var(--color-imperial-gold)] mx-auto mt-4 rounded-full" />
      </h2>

      <div className="max-w-4xl mx-auto">
        <GlassCard className="mb-16 border-t-4 border-t-[var(--color-emerald-jade)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <BookOpen size={150} />
          </div>
          <h3 className="text-2xl font-bold mb-6 text-gradient">
            {t("Indian Institute of Technology Mandi", "インド工科大学マンディ校")}
          </h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-4">
              <GraduationCap className="text-[var(--color-imperial-gold)]" />
              <p>{t("Bachelor of Technology in Data Science and Engineering", "データサイエンス・エンジニアリング学士")}</p>
            </div>
            <div className="flex items-center gap-4">
              <Building className="text-[var(--color-sakura-pink)]" />
              <p>{t("Expected Graduation Year: 2028", "卒業予定：2028年")}</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-[var(--color-crimson-red)]" />
              <p>{t("Ganga Hostel, Room No. 226", "ガンガホステル 226号室")}</p>
            </div>
          </div>
        </GlassCard>

        {/* Animated Journey Timeline */}
        <div className="relative py-10 mt-12">
          {/* Track */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--color-glass-border)] transform -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[var(--color-emerald-jade)] to-[var(--color-sakura-pink)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          
          <div className="flex justify-between relative z-10">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-midnight-black)] border-4 border-[var(--color-emerald-jade)] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <MapPin className="text-[var(--color-emerald-jade)]" />
              </div>
              <h4 className="font-bold text-xl">{t("India", "インド")}</h4>
              <p className="text-sm text-gray-400">IIT Mandi</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
            >
              <div className="glass-panel p-4 rounded-full text-[var(--color-imperial-gold)]">
                <Plane className="animate-pulse" />
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-midnight-black)] border-4 border-[var(--color-sakura-pink)] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(249,168,212,0.3)]">
                <MapPin className="text-[var(--color-sakura-pink)]" />
              </div>
              <h4 className="font-bold text-xl text-japanese">{t("Japan", "日本")}</h4>
              <p className="text-sm text-gray-400">Tokyo</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicJourney;
