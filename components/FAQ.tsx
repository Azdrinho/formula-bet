import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-28 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
           style={{
             backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      />
      
      {/* Soft gradient overlay to fade grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-cyan font-bold tracking-widest text-xs uppercase mb-2 block">{t.faq.tag}</span>
          <h2 className="text-4xl font-bold text-neutral-900">{t.faq.title}</h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 bg-white/50 backdrop-blur-sm rounded-lg">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left group hover:bg-gray-50/80 px-4 rounded-lg transition-colors"
              >
                <span className="text-lg font-medium text-neutral-800">{faq.question}</span>
                <span className="bg-gray-100 p-2 rounded-full text-neutral-500 group-hover:bg-brand-cyan/10 group-hover:text-brand-cyan transition-colors">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 px-4 text-neutral-500 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
