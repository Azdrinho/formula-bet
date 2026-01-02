import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ViscousButton from './ViscousButton';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className="relative min-h-screen bg-neutral-950 flex items-center overflow-hidden">
        {/* Main Background Image - No Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://formula-bet.com/wp-content/uploads/2026/01/Banner-scaled.png" 
                alt="Background" 
                className="w-full h-full object-cover"
            />
        </div>
        
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-16 pt-24 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content - Takes more width now */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-brand-cyan"></div>
                <span className="text-gray-300 text-sm uppercase tracking-wider font-medium">{t.hero.present}</span>
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6">
                {t.hero.title_start} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-lightCyan">{t.hero.title_end}</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-white font-medium mb-4 max-w-2xl">
                {t.hero.subtitle}
              </h2>

              <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
                <strong className="text-white">{t.hero.description_bold}</strong>{t.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                <a href="https://api.whatsapp.com/send/?phone=5511991461244" target="_blank" rel="noopener noreferrer">
                    <ViscousButton className="!px-8 !py-4">
                    {t.hero.cta_primary}
                    <ArrowRight size={18} />
                    </ViscousButton>
                </a>
                
                <a 
                    href="https://api.whatsapp.com/send/?phone=5511991461244" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-cyan transition-colors underline underline-offset-4 text-sm font-medium mt-4 sm:mt-0"
                >
                    {t.hero.cta_secondary}
                </a>
              </div>

              <div className="border-l-2 border-gray-800 pl-6 bg-black/40 backdrop-blur-sm py-4 rounded-r-lg max-w-md">
                <div className="flex gap-2 text-white mb-1 items-center">
                    <ShieldCheck size={20} className="text-brand-cyan" />
                    <span className="font-bold">{t.hero.certification}</span>
                </div>
                <p className="text-gray-400 text-sm">{t.hero.certification_desc}</p>
              </div>
            </motion.div>

            {/* Second column left empty to reveal the background image on the right */}
            <div className="hidden lg:block lg:col-span-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;