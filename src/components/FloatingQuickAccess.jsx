import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Map } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FloatingQuickAccess = () => {
  const actions = [
    { icon: <Phone size={20} />, href: "tel:+918668944955", color: "hover:text-[var(--color-imperial-gold)]" },
    { icon: <Mail size={20} />, href: "mailto:b24199@students.iitmandi.ac.in", color: "hover:text-[var(--color-sakura-pink)]" },
    { icon: <Map size={20} />, href: "https://maps.google.com/?q=BLUE+FRONT+SHIBAURA+TOWER+S+Tokyo", color: "hover:text-[var(--color-emerald-jade)]", target: "_blank" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/kartavya-suryawanshi-918753320/", color: "hover:text-[#0A66C2]", target: "_blank" },
    { icon: <FaGithub size={20} />, href: "https://github.com/Kaartavya728", color: "hover:text-white", target: "_blank" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      {actions.map((action, index) => (
        <motion.a
          key={index}
          href={action.href}
          target={action.target}
          rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
          whileHover={{ scale: 1.2, x: 5 }}
          className={`glass-panel p-3 text-gray-400 transition-colors ${action.color} shadow-lg`}
          style={{ cursor: 'none' }}
        >
          {action.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingQuickAccess;
