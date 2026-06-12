import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProfessionalLinks = () => {
  const { t } = useLanguage();

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kartavya-suryawanshi-918753320/",
      icon: <FaLinkedin size={40} className="text-[#0A66C2]" />,
      descriptionEn: "Connect with me professionally",
      descriptionJa: "プロフェッショナルなつながり"
    },
    {
      name: "GitHub",
      url: "https://github.com/Kaartavya728",
      icon: <FaGithub size={40} className="text-white" />,
      descriptionEn: "Check out my projects and code",
      descriptionJa: "私のプロジェクトとコードを見る"
    }
  ];

  return (
    <section className="section-padding container relative z-10" id="links">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--color-soft-ivory)]">
        {t("Professional Links", "プロフェッショナルリンク")}
        <span className="block w-24 h-1 bg-[var(--color-emerald-jade)] mx-auto mt-4 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {links.map((link, index) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" key={index} className="block group">
            <GlassCard delay={index * 0.2} className="h-full flex items-center justify-between group-hover:border-[var(--color-sakura-pink)] transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(249,168,212,0.1)] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 rounded-full bg-[var(--color-midnight-black)] group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{link.name}</h3>
                  <p className="text-gray-400 text-sm">{t(link.descriptionEn, link.descriptionJa)}</p>
                </div>
              </div>
              <ExternalLink className="text-gray-500 group-hover:text-[var(--color-sakura-pink)] transition-colors relative z-10" />
            </GlassCard>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalLinks;
