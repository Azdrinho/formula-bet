import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { ArrowUpRight, Zap, MapPin, BarChart3 } from 'lucide-react';

interface TiltCardProps {
  item: {
    name: string;
    role: string;
    desc: string;
  };
  index: number;
}

// 3D Tilt Card Component
const TiltCard: React.FC<TiltCardProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const images = [
    'https://formula-bet.com/wp-content/uploads/2026/01/Card-01.png',
    'https://formula-bet.com/wp-content/uploads/2026/01/Card-02.png',
    'https://formula-bet.com/wp-content/uploads/2026/01/Card-03.png'
  ];

  const icons = [
    <Zap className="w-6 h-6 text-white" />,
    <MapPin className="w-6 h-6 text-white" />,
    <BarChart3 className="w-6 h-6 text-white" />
  ];

  // Safety check: Ensure we don't access undefined index if items > images
  const safeImage = images[index % images.length];
  const safeIcon = icons[index % icons.length];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[500px] w-full rounded-xl bg-neutral-900 group cursor-pointer"
    >
      {/* Card Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 rounded-xl overflow-hidden bg-neutral-900 border border-white/10"
      >
        {/* Background Image with Parallax Scale on Hover */}
        <div className="absolute inset-0 overflow-hidden">
            <motion.img 
                src={safeImage} 
                alt={item.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                animate={{ scale: hovered ? 1.1 : 1 }}
                transition={{ duration: 0.4 }}
            />
            {/* Dark Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
        </div>

        {/* Content Layout */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
            {/* Top Row: Icon and Index */}
            <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-colors duration-300">
                    {safeIcon}
                </div>
                <span className="text-6xl font-black text-white/5 font-mono select-none group-hover:text-white/20 transition-colors duration-300">
                    0{index + 1}
                </span>
            </div>

            {/* Bottom Row: Text Info */}
            <div>
                <div className="flex items-center gap-2 mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                     <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">{item.role}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-brand-cyan transition-colors duration-300">
                    {item.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                </p>

                {/* Interactive Line */}
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-brand-cyan origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="beneficios" className="py-24 relative overflow-hidden bg-brand-cyan">
      {/* Background Texture - Circuit Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" 
           style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}
      />
      
      {/* Speed Lines Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan via-transparent to-brand-cyan pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold tracking-[0.2em] text-xs uppercase mb-4 block text-neutral-900/60"
          >
            {t.team.tag}
          </motion.span>
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-black mb-6 text-neutral-950 uppercase tracking-tight"
          >
            {t.team.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-neutral-900 text-lg font-medium leading-relaxed"
          >
            {t.team.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
            {t.team.items.map((item, index) => (
                <TiltCard key={index} item={item} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;