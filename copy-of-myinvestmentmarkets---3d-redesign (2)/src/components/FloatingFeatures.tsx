
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ShieldCheck, Zap, Monitor, Scale, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FloatingFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  const features = [
    { 
        icon: Scale, 
        title: t('features.licensed.title'), 
        text: t('features.licensed.desc'), 
        color: 'from-blue-500 to-blue-700', 
        delay: 0 
    },
    { 
        icon: Monitor, 
        title: t('features.environment.title'), 
        text: t('features.environment.desc'), 
        color: 'from-gray-700 to-gray-900', 
        delay: 0.1 
    },
    { 
        icon: Target, 
        title: t('features.essentials.title'), 
        text: t('features.essentials.desc'), 
        color: 'from-red-500 to-red-700', 
        delay: 0.2 
    },
    { 
        icon: TrendingUp, 
        title: t('features.partnership.title'), 
        text: t('features.partnership.desc'), 
        color: 'from-green-600 to-emerald-800', 
        delay: 0.3 
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 50]);
  
  return (
    <section ref={containerRef} className="py-20 lg:py-40 bg-black relative overflow-visible perspective-1000">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-40 perspective-1000">
                <motion.div initial={{ opacity: 0, y: 50, rotateX: 90 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ type: "spring", bounce: 0.4, duration: 1.5 }} viewport={{ once: false, margin: "-50px" }} className="inline-block mb-6 transform-style-3d">
                   <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-[#ef4444] text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                     {t('features.badge')}
                   </span>
                </motion.div>
                <motion.h2 initial={{ opacity: 0, scale: 0.5, z: -100 }} whileInView={{ opacity: 1, scale: 1, z: 0 }} transition={{ type: "spring", bounce: 0.5, duration: 1.2, delay: 0.2 }} viewport={{ once: false, margin: "-50px" }} className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tight">
                    {t('features.heading')}
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-20 px-2 lg:px-20 perspective-1000">
                <motion.div style={{ y: y1 }} className="space-y-8 lg:space-y-16">
                   {features.slice(0, 2).map((feature, idx) => (
                       <FeatureCard key={idx} feature={feature} index={idx} />
                   ))}
                </motion.div>
                <motion.div style={{ y: y2 }} className="space-y-8 lg:space-y-16 md:pt-32">
                   {features.slice(2, 4).map((feature, idx) => (
                       <FeatureCard key={idx} feature={feature} index={idx + 2} />
                   ))}
                </motion.div>
            </div>
        </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: any, index: number }> = ({ feature, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0); const y = useMotionValue(0); const mouseX = useMotionValue(0); const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width; const height = rect.height; const mouseXPos = e.clientX - rect.left; const mouseYPos = e.clientY - rect.top;
            x.set(mouseXPos / width - 0.5); y.set(mouseYPos / height - 0.5); mouseX.set(mouseXPos); mouseY.set(mouseYPos);
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 150, rotateX: 45, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} viewport={{ once: false, margin: "-100px" }} transition={{ type: "spring", stiffness: 120, damping: 12, mass: 1, delay: index * 0.1 }} style={{ perspective: 1000 }} className="w-full">
            <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="group relative p-8 sm:p-12 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 overflow-visible transition-colors duration-300 shadow-2xl">
                <div className="absolute inset-0 bg-[#171717] rounded-[2.5rem] transform translate-z-[-20px] scale-[0.98] transition-all duration-300 group-hover:translate-z-[-30px] group-hover:bg-red-900/10" style={{ transform: "translateZ(-20px)" }} />
                {/* SCALING UPDATE: Converted px to rem */}
                <motion.div className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100 z-10" style={{ background: useMotionTemplate`radial-gradient(60rem circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)` }} />
                <div className="relative z-20 transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                        <feature.icon size={32} />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 group-hover:text-[#ef4444] transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg border-l-2 border-white/5 pl-6 group-hover:border-red-500/50 transition-colors whitespace-pre-line">{feature.text}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
