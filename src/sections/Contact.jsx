import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, HeartPulse } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding container relative z-10" id="contact">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--color-soft-ivory)]">
        {t("Contact Details", "連絡先")}
        <span className="block w-24 h-1 bg-[var(--color-imperial-gold)] mx-auto mt-4 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <GlassCard className="border-t-4 border-t-[var(--color-imperial-gold)]">
          <div className="flex items-center gap-4 mb-8">
            <Phone className="text-[var(--color-imperial-gold)]" size={32} />
            <h3 className="text-2xl font-bold">{t("Phone Numbers", "電話番号")}</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">{t("Primary Contact", "主連絡先")}</p>
              <a href="tel:+918668944955" className="text-xl font-medium hover:text-[var(--color-sakura-pink)] transition-colors">+91 8668944955</a>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">{t("Secondary Contact", "副連絡先")}</p>
              <a href="tel:+918149900728" className="text-xl font-medium hover:text-[var(--color-sakura-pink)] transition-colors">+91 8149900728</a>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="border-t-4 border-t-[var(--color-sakura-pink)]">
          <div className="flex items-center gap-4 mb-8">
            <Mail className="text-[var(--color-sakura-pink)]" size={32} />
            <h3 className="text-2xl font-bold">{t("Email Addresses", "メールアドレス")}</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">{t("Academic Email", "大学メール")}</p>
              <a href="mailto:b24199@students.iitmandi.ac.in" className="text-lg font-medium hover:text-[var(--color-emerald-jade)] transition-colors break-all">
                b24199@students.iitmandi.ac.in
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">{t("Personal Email", "個人メール")}</p>
              <a href="mailto:kartavyasuryawanshi7@gmail.com" className="text-lg font-medium hover:text-[var(--color-emerald-jade)] transition-colors break-all">
                kartavyasuryawanshi7@gmail.com
              </a>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="md:col-span-2 border-2 border-[var(--color-crimson-red)] bg-[rgba(220,38,38,0.05)]">
          <div className="flex items-center justify-center gap-4 mb-6">
            <HeartPulse className="text-[var(--color-crimson-red)] animate-pulse" size={32} />
            <h3 className="text-2xl font-bold text-[var(--color-crimson-red)]">{t("Emergency Contact", "緊急連絡先")}</h3>
          </div>
          <div className="text-center">
            <p className="text-xl mb-2">{t("Mother", "母")}: <span className="font-bold text-white">Baysa Nanabhau Sakore</span></p>
            <a href="tel:+918149244074" className="text-2xl font-bold text-[var(--color-sakura-pink)] hover:text-white transition-colors">
              +91 8149244074
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;
