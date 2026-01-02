import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pr-8"
            >
                <h2 className="text-3xl md:text-4xl font-light leading-snug">
                    {t.stats.main_text_start} <span className="font-bold border-b-2 border-brand-cyan">{t.stats.main_text_bold}</span>{t.stats.main_text_end}
                </h2>
            </motion.div>
            <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl"
            >
                 <img 
                    src="https://formula-bet.com/wp-content/uploads/2026/01/Caller.png"
                    alt="F1 Car Engine Detail"
                    className="absolute inset-0 w-full h-full object-cover"
                 />
            </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center md:text-left border-t border-gray-200 pt-8"
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-lightCyan mb-2">{stat.value}</h3>
                    <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;