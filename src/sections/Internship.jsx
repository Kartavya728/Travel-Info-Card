import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Calendar, Target, MapPin } from 'lucide-react';

const Internship = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding container relative z-10" id="internship">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--color-soft-ivory)]">
        {t("Internship in Japan", "日本でのインターンシップ")}
        <span className="block w-24 h-1 bg-[var(--color-sakura-pink)] mx-auto mt-4 rounded-full" />
      </h2>

      <div className="max-w-4xl mx-auto">
        <GlassCard className="border-t-4 border-t-[var(--color-sakura-pink)] relative overflow-hidden group">
          {/* Futuristic Cyber Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI0OSwgMTY4LCAyMTIsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIi8+PC9nPjwvc3ZnPg==')] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-[var(--color-soft-ivory)] tracking-wide">
              {t("Nomura Real Estate Holdings, Inc.", "野村不動産ホールディングス株式会社")}
            </h3>
            <h4 className="text-xl text-[var(--color-sakura-pink)] mb-8 font-medium">
              {t("Group DX Strategy Department", "グループDX戦略部")}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-[var(--color-imperial-gold)] mb-2">
                    <Calendar size={20} />
                    <span className="font-semibold">{t("Internship Period", "インターンシップ期間")}</span>
                  </div>
                  <p className="pl-7 text-lg">{t("13 June 2026 - 12 July 2026", "2026年6月13日 ～ 2026年7月12日")}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-[var(--color-emerald-jade)] mb-2">
                    <MapPin size={20} />
                    <span className="font-semibold">{t("Office Address", "オフィス所在地")}</span>
                  </div>
                  <p className="pl-7 text-gray-300 leading-relaxed">
                    {t(
                      "BLUE FRONT SHIBAURA TOWER S, 1-1-1 Shibaura, Minato-ku, Tokyo 105-8340, Japan",
                      "〒105-8340 東京都港区芝浦1-1-1 BLUE FRONT SHIBAURA TOWER S"
                    )}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[var(--color-crimson-red)] mb-2">
                  <Target size={20} />
                  <span className="font-semibold">{t("Internship Project", "インターンシッププロジェクト")}</span>
                </div>
                <div className="p-4 rounded-lg bg-[rgba(220,38,38,0.1)] border border-[rgba(220,38,38,0.2)]">
                  <p className="text-lg font-medium leading-relaxed">
                    {t(
                      "\"Analysis of the Impact of Generative AI on Work Styles Using Viva Insights Data\"",
                      "「Viva Insightsデータを用いた生成AIが働き方に与える影響の分析」"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Internship;
