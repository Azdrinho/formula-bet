import React from 'react';
import { ArrowRight, Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';
import ViscousButton from './ViscousButton';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      
      {/* CTA Section */}
      <div className="relative h-[500px] overflow-hidden flex items-center justify-center bg-neutral-900">
        {/* Background Image */}
        <img 
            src="https://formula-bet.com/wp-content/uploads/2026/01/Footer-scaled.png" 
            alt="F1 Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{t.footer.cta_title}</h2>
            <p className="text-gray-100 mb-8 font-medium max-w-2xl mx-auto text-lg drop-shadow-md">
              {t.footer.cta_desc}
            </p>
            <a href="https://api.whatsapp.com/send/?phone=5511991461244" target="_blank" rel="noopener noreferrer" className="inline-block">
                <ViscousButton className="!bg-brand-cyan !text-neutral-950 !border-brand-cyan hover:!bg-brand-lightCyan !py-4 !px-8 font-bold">
                {t.footer.cta_button}
                <ArrowRight size={18} />
                </ViscousButton>
            </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-brand-cyan text-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-900/10 pb-16">
                <div className="md:col-span-2">
                    <div className="w-56 fill-neutral-950 mb-6">
                        <svg viewBox="0 0 390 50">
                           {language === 'en' ? (
                                <g id="Camada_1-2" data-name="Camada 1" transform="translate(0, 11)">
                                    <path className="cls-1" d="M0,33.56L7.75.53h26.03l-1.7,7.27H14.85l-1.42,6.08h17.22l-1.7,7.27H11.72l-2.91,12.42H0ZM67.85,19.33c-.52,2.2-1.32,4.21-2.4,6.01-1.08,1.81-2.44,3.35-4.06,4.62-1.62,1.28-3.53,2.27-5.72,2.97s-4.62,1.06-7.29,1.06h-2.91c-2.67,0-4.94-.35-6.8-1.06s-3.3-1.7-4.32-2.97c-1.02-1.28-1.65-2.82-1.89-4.62-.24-1.81-.1-3.81.42-6.01l1.07-4.58c.52-2.2,1.32-4.21,2.4-6.01s2.44-3.35,4.06-4.62c1.62-1.28,3.53-2.27,5.72-2.97S50.76.09,53.43.09h2.91c2.67,0,4.94.35,6.8,1.06s3.3,1.7,4.32,2.97c1.02,1.28,1.65,2.82,1.89,4.62.24,1.81.1,3.81-.42,6.01l-1.07,4.58ZM42.05,19.68c-.61,2.61-.56,4.46.17,5.55.73,1.09,2.28,1.63,4.66,1.63h3.44c2.38,0,4.18-.54,5.42-1.63,1.24-1.09,2.16-2.94,2.78-5.55l1.26-5.37c.61-2.61.55-4.45-.18-5.53s-2.29-1.61-4.67-1.61h-3.44c-2.38,0-4.18.54-5.42,1.61s-2.16,2.91-2.77,5.53l-1.26,5.37ZM100.84,33.56h-9.86l-6.4-10.08c-.53-.85-.85-1.69-.95-2.51-.1-.82-.08-1.56.08-2.2.34-1.44,1.03-2.53,2.09-3.28,1.05-.75,2.33-1.12,3.83-1.12h4.36c.97,0,1.75-.27,2.35-.81.6-.54.99-1.23,1.18-2.05l.34-1.45c.21-.88.14-1.56-.21-2.03-.35-.47-1.05-.7-2.1-.7h-11.45l-6.16,26.25h-8.81L76.88.53h19.38c4.26,0,7.23.7,8.93,2.11,1.7,1.41,2.17,3.68,1.44,6.83l-.44,1.89c-.32,1.38-.89,2.61-1.7,3.68-.81,1.07-1.76,1.97-2.86,2.71-1.1.73-2.32,1.3-3.66,1.7-1.34.4-2.7.59-4.08.59h-1.06l8.01,13.52ZM103.62,33.56l7.61-23.6c1.12-3.52,2.68-6.06,4.67-7.62,1.99-1.56,4.24-2.33,6.73-2.33,2.67,0,4.6.81,5.79,2.44,1.19,1.63,1.67,3.85,1.45,6.67l-1.25,16.43c-.02.35,0,.62.1.79.09.18.28.26.58.26s.54-.1.73-.31c.19-.21.35-.48.46-.84l6.35-16.38c1.07-2.79,2.57-5,4.53-6.63,1.95-1.63,4.25-2.44,6.89-2.44,2.79,0,4.68.79,5.68,2.36,1,1.57,1.23,4.1.71,7.6l-3.47,23.6h-8.5l4.07-24.88c.04-.29.05-.54.02-.75-.02-.21-.18-.31-.48-.31-.24,0-.45.1-.64.29-.19.19-.33.42-.42.68l-7.09,17.66c-.93,2.35-2.32,4.24-4.17,5.68-1.85,1.44-4.01,2.16-6.47,2.16s-4.42-.74-5.6-2.22c-1.18-1.48-1.69-3.37-1.54-5.66l1.04-17.57c.02-.32-.03-.57-.13-.75-.11-.18-.28-.26-.51-.26-.29,0-.52.1-.67.31-.15.21-.28.47-.38.79l-7.59,24.84h-8.5ZM169.19,34.13c-4.93,0-8.2-1.1-9.79-3.3-1.6-2.2-1.93-5.27-1.01-9.2l4.95-21.09h8.81l-5.14,21.93c-.37,1.59-.29,2.75.26,3.5.54.75,1.7,1.12,3.46,1.12h5.02c1.64,0,2.93-.37,3.85-1.12.92-.75,1.57-1.92,1.94-3.5l5.14-21.93h8.81l-4.95,21.09c-.46,1.97-1.1,3.73-1.92,5.28-.82,1.56-1.88,2.87-3.17,3.94-1.29,1.07-2.89,1.89-4.78,2.44-1.89.56-4.13.84-6.71.84h-4.76ZM193.23,33.56L200.98.53h8.81l-6.04,25.76h16.78l-1.7,7.27h-25.59ZM249.95,33.56l-.98-6.91h-15.46l-4.26,6.91h-8.9l17.21-26.64c1.34-2.08,2.78-3.76,4.33-5.02,1.54-1.26,3.42-1.89,5.62-1.89s3.94.62,4.96,1.87c1.01,1.25,1.69,2.9,2.03,4.95l4.61,26.73h-9.16ZM244.78,8.5l-7.01,11.32h10.22l-1.62-11.32c-.04-.21-.09-.39-.16-.55-.07-.16-.21-.24-.45-.24-.21,0-.38.07-.54.22-.15.15-.3.34-.44.57ZM262.84,24.22l1.79-7.62h10.83l-1.79,7.62h-10.83ZM300.81.53c2.29,0,4.29.13,5.99.37,1.7.25,3.06.68,4.08,1.3,1.01.62,1.7,1.45,2.05,2.51.35,1.06.34,2.41-.05,4.05l-.34,1.45c-.32,1.35-.99,2.61-2.03,3.77s-2.64,2.06-4.82,2.71c2.08.65,3.45,1.56,4.11,2.75.66,1.19.83,2.49.5,3.9l-.36,1.54c-.73,3.11-2.34,5.34-4.82,6.67-2.49,1.34-6.33,2-11.52,2h-16.6l7.75-33.03h16.07ZM297.68,20.08h-8.72l-1.69,7.22h8.5c1.94,0,3.24-.25,3.92-.75.67-.5,1.13-1.25,1.36-2.25l.25-1.06c.23-1,.14-1.78-.27-2.33-.41-.56-1.53-.84-3.35-.84ZM299.96,6.78h-7.88l-1.59,6.78h7.66c1.88,0,3.16-.22,3.85-.66.69-.44,1.15-1.16,1.39-2.16l.24-1.01c.23-1,.12-1.74-.34-2.22-.46-.48-1.57-.73-3.33-.73ZM312.09,33.56l7.75-33.03h27.57l-1.7,7.27h-18.98l-1.34,5.72h18.98l-1.65,7.05h-18.98l-1.34,5.72h18.98l-1.7,7.27h-27.57ZM355.82,33.56l6.04-25.76h-12.55l1.7-7.27h33.91l-1.7,7.27h-12.55l-6.04,25.76h-8.81Z"/>
                                </g>
                           ) : (
                                <path d="M0,44.48L7.75,11.45h26.03l-1.7,7.27H14.85l-1.43,6.08h17.22l-1.7,7.27H11.72l-2.91,12.42H0ZM67.85,30.25c-.52,2.2-1.32,4.21-2.4,6.01-1.08,1.81-2.44,3.35-4.06,4.62-1.62,1.28-3.53,2.27-5.72,2.97s-4.62,1.06-7.29,1.06h-2.91c-2.67,0-4.94-.35-6.8-1.06s-3.3-1.7-4.32-2.97c-1.02-1.28-1.65-2.82-1.89-4.62-.24-1.81-.1-3.81.42-6.01l1.07-4.58c.52-2.2,1.32-4.21,2.4-6.01,1.08-1.81,2.44-3.35,4.06-4.62-1.62-1.28,3.53-2.27,5.72-2.97s4.62-1.06,7.29-1.06h2.91c2.67,0,4.94.35,6.8,1.06s3.3,1.7,4.32,2.97c1.02,1.28,1.65,2.82,1.89,4.62.24,1.81.1,3.81-.42,6.01l-1.07,4.58ZM42.05,30.61c-.61,2.61-.56,4.46.17,5.55.73,1.09,2.28,1.63,4.66,1.63h3.44c2.38,0,4.19-.54,5.42-1.63,1.24-1.09,2.16-2.94,2.78-5.55l1.26-5.37c.61-2.61.55-4.45-.18-5.53-.73-1.07-2.29-1.61-4.67-1.61h-3.44c-2.38,0-4.18.54-5.42,1.61-1.24,1.07-2.16,2.91-2.77,5.53l-1.26,5.37ZM52.35,8.28L57.15,0h6.83l-5.02,8.28h-6.61ZM100.84,44.48h-9.86l-6.4-10.08c-.53-.85-.85-1.69-.95-2.51-.1-.82-.08-1.56.08-2.2.34-1.44,1.03-2.53,2.09-3.28,1.06-.75,2.33-1.12,3.83-1.12h4.36c.97,0,1.75-.27,2.35-.81.6-.54.99-1.23,1.18-2.05l.34-1.45c.21-.88.14-1.56-.21-2.03-.35-.47-1.05-.7-2.1-.7h-11.45l-6.16,26.25h-8.81l7.75-33.03h19.38c4.26,0,7.23.7,8.93,2.11,1.7,1.41,2.17,3.68,1.44,6.83l-.44,1.89c-.32,1.38-.89,2.61-1.7,3.68-.81,1.07-1.76,1.97-2.86,2.71-1.1.73-2.32,1.3-3.66,1.7-1.34.4-2.7.59-4.08.59h-1.06l8.01,13.52ZM103.62,44.48l7.61-23.6c1.12-3.52,2.68-6.06,4.67-7.62,1.99-1.56,4.24-2.33,6.73-2.33,2.67,0,4.6.81,5.79,2.44,1.19,1.63,1.67,3.85,1.45,6.67l-1.25,16.43c-.02.35,0,.62.1.79s.28.26.58.26.54-.1.73-.31c.19-.21.35-.48.46-.84l6.35-16.38c1.07-2.79,2.57-5,4.53-6.63,1.95-1.63,4.25-2.44,6.89-2.44,2.79,0,4.68.79,5.68,2.36,1,1.57,1.23,4.1.71,7.6l-3.47,23.6h-8.5l4.07-24.88c.04-.29.05-.54.02-.75-.02-.21-.18-.31-.48-.31-.24,0-.45.1-.64.29-.19.19-.33.42-.42.68l-7.09,17.66c-.93,2.35-2.32,4.24-4.17,5.68-1.85,1.44-4.01,2.16-6.47,2.16s-4.42-.74-5.6-2.22c-1.18-1.48-1.69-3.37-1.54-5.66l1.04-17.57c.02-.32-.03-.57-.13-.75-.11-.18-.28-.26-.51-.26-.29,0-.52.1-.67.31-.15.21-.28.47-.38.79l-7.59,24.84h-8.5ZM169.19,45.05c-4.93,0-8.2-1.1-9.79-3.3-1.6-2.2-1.93-5.27-1.01-9.2l4.95-21.09h8.81l-5.14,21.93c-.37,1.59-.29,2.75.26,3.5.54.75,1.7,1.12,3.46,1.12h5.02c1.64,0,2.93-.37,3.85-1.12.92-.75,1.57-1.92,1.94-3.5l5.14-21.93h8.81l-4.95,21.09c-.46,1.97-1.1,3.73-1.92,5.28-.82,1.56-1.88,2.87-3.17,3.94-1.29,1.07-2.89,1.89-4.78,2.44-1.89.56-4.13.84-6.71.84h-4.76ZM193.23,44.48l7.75-33.03h8.81l-6.04,25.76h16.78l-1.7,7.27h-25.59ZM249.95,44.48l-.98-6.91h-15.46l-4.26,6.91h-8.9l17.21-26.64c1.34-2.08,2.78-3.76,4.33-5.02,1.54-1.26,3.42-1.89,5.62-1.89s3.94.62,4.96,1.87c1.01,1.25,1.69,2.9,2.03,4.95l4.61,26.73h-9.16ZM244.78,19.42l-7.01,11.32h10.22l-1.62-11.32c-.04-.21-.09-.39-.16-.55-.07-.16-.21-.24-.45-.24-.21,0-.38.07-.54.22-.15.15-.3.34-.44.57ZM262.84,35.14l1.79-7.62h10.83l-1.79,7.62h-10.83ZM300.81,11.45c2.29,0,4.29.13,5.99.37,1.7.25,3.06.68,4.08,1.3,1.01.62,1.7,1.45,2.05,2.51.35,1.06.34,2.41-.05,4.05l-.34,1.45c-.32,1.35-.99,2.61-2.03,3.77s-2.64,2.06-4.82,2.71c2.08.65,3.45,1.56,4.11,2.75.66,1.19.83,2.49.5,3.9l-.36,1.54c-.73,3.11-2.34,5.34-4.82,6.67-2.49,1.34-6.33,2-11.52,2h-16.6l7.75-33.03h16.07ZM297.68,31h-8.72l-1.69,7.22h8.5c1.94,0,3.24-.25,3.92-.75.67-.5,1.13-1.25,1.36-2.25l.25-1.06c.23-1,.14-1.78-.27-2.33-.41-.56-1.53-.84-3.35-.84ZM299.96,17.7h-7.88l-1.59,6.78h7.66c1.88,0,3.16-.22,3.85-.66.69-.44,1.15-1.16,1.39-2.16l.24-1.01c.23-1,.12-1.74-.34-2.22-.46-.48-1.57-.73-3.33-.73ZM312.09,44.48l7.75-33.03h27.57l-1.7,7.27h-18.98l-1.34,5.72h18.98l-1.65,7.05h-18.98l-1.34,5.72h18.98l-1.7,7.27h-27.57ZM355.82,44.48l6.04-25.76h-12.55l1.7-7.27h33.91l-1.7,7.27h-12.55l-6.04,25.76h-8.81Z" />
                           )}
                        </svg>
                    </div>
                    <p className="text-sm text-neutral-800 max-w-sm font-medium">
                        {t.footer.desc}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-neutral-950">{t.footer.nav_title}</h4>
                    <ul className="space-y-3 text-sm text-neutral-800 font-medium">
                        <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors">{t.navbar.home}</a></li>
                        <li><a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-white transition-colors">{t.navbar.solutions}</a></li>
                        <li><a href="#conformidade" onClick={(e) => scrollToSection(e, 'conformidade')} className="hover:text-white transition-colors">{t.navbar.compliance}</a></li>
                        <li><a href="#beneficios" onClick={(e) => scrollToSection(e, 'beneficios')} className="hover:text-white transition-colors">{t.navbar.benefits}</a></li>
                        <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-white transition-colors">{t.navbar.faq}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-neutral-950">{t.footer.social_title}</h4>
                    <ul className="space-y-3 text-sm text-neutral-800 font-medium">
                        <li className="flex items-center gap-2"><Linkedin size={16}/> <a href="https://www.linkedin.com/company/salsa-technology/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li className="flex items-center gap-2"><Instagram size={16}/> <a href="https://www.instagram.com/salsatechnology/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                        <li className="flex items-center gap-2"><Facebook size={16}/> <a href="https://www.facebook.com/salsa.technology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                        <li className="flex items-center gap-2"><Youtube size={16}/> <a href="https://www.youtube.com/@SalsaTechnology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Youtube</a></li>
                        <li className="flex items-center gap-2"><Twitter size={16}/> <a href="https://twitter.com/salsatechnology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-neutral-800 font-medium">
                <p>{t.footer.rights}</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
                    <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;