
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate, AnimatePresence, useInView } from 'framer-motion';
import { Check, Star, Zap, Crown, Globe, BarChart3, Lock, Coins, Activity, CheckCircle2, TrendingUp, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const AccountTypes: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the specific carousel area
  // Trigger when 50% of the carousel container is visible (center of the container)
  const isInView = useInView(carouselRef, { once: true, amount: 0.5 }); 
  const [hasExploded, setHasExploded] = useState(false); // Track explosion state

  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle (Popular) card
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Trigger the explosion sequence when in view
  useEffect(() => {
    if (isInView && !hasExploded) {
        // Wait for the orb to flash (approx 600ms) before popping cards
        const timer = setTimeout(() => {
            setHasExploded(true);
        }, 600); 
        return () => clearTimeout(timer);
    }
  }, [isInView, hasExploded]);

  const accounts = [
    {
      id: 'standard',
      name: t('accounts.std.name'),
      subtitle: t('accounts.std.subtitle'),
      deposit: t('accounts.std.deposit'),
      spread: t('accounts.std.spread'),
      leverage: t('accounts.std.lev'),
      commission: t('accounts.std.comm'),
      commissionCheck: true,
      color: 'from-gray-500 to-gray-700',
      badge: '',
      stars: 1,
      popular: false,
    },
    {
      id: 'exclusive',
      name: t('accounts.exc.name'),
      subtitle: t('accounts.exc.subtitle'),
      deposit: t('accounts.exc.deposit'),
      spread: t('accounts.exc.spread'),
      leverage: t('accounts.exc.lev'),
      commission: t('accounts.exc.comm'),
      commissionCheck: true,
      color: 'from-red-500 to-red-700',
      badge: t('accounts.badge_popular'),
      stars: 2,
      popular: true, 
    },
    {
      id: 'swap_free',
      name: t('accounts.swap.name'),
      subtitle: t('accounts.swap.subtitle'),
      deposit: t('accounts.swap.deposit'),
      spread: t('accounts.swap.spread'),
      leverage: t('accounts.swap.lev'),
      commission: t('accounts.swap.comm'),
      commissionCheck: false,
      color: 'from-yellow-500 to-yellow-700',
      badge: t('accounts.badge_swap_free'),
      badgeColor: 'bg-yellow-500',
      stars: 2,
      popular: false,
    }
  ];
  
  // Navigation handlers
  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % accounts.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + accounts.length) % accounts.length);
  };

  // Allow clicking on side cards to navigate
  const handleCardClick = (index: number) => {
      setActiveIndex(index);
  };

  return (
    <section id="accounts" className="py-16 lg:py-24 bg-[#020617] relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      {/* SCALING UPDATE: Converted px to rem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 lg:mb-16">
          <span className="text-[#ef4444] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">{t('accounts.badge')}</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4">{t('accounts.heading')}</h2>
          <p className="text-brand-platinum text-lg sm:text-xl max-w-2xl mx-auto font-light">{t('accounts.subheading')}</p>
          
          {/* Navigation Buttons (Visible near header on mobile, spread on desktop) */}
          <div className="flex justify-center gap-4 mt-8 relative z-50">
                <button onClick={prevCard} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-md group">
                    <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button onClick={nextCard} className="w-10 h-10 rounded-full bg-[#ef4444] shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center justify-center text-white hover:bg-[#dc2626] hover:scale-110 transition-all group">
                    <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
          </div>
        </div>

        {/* 3D CAROUSEL CONTAINER */}
        {/* SCALING UPDATE: Converted px to rem */}
        <div ref={carouselRef} className="h-[52rem] sm:h-[58rem] relative flex items-center justify-center perspective-1000 transform-style-3d mb-16">
             
             {/* THE SINGULARITY ORB (Explosion Source) */}
             <AnimatePresence>
                {isInView && !hasExploded && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: [0, 1.5, 3], 
                            opacity: [0, 1, 0],
                            filter: ["blur(0px)", "blur(10px)", "blur(20px)"]
                        }}
                        exit={{ opacity: 0, scale: 5 }}
                        transition={{ 
                            duration: 0.8, 
                            times: [0, 0.5, 1],
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex items-center justify-center"
                    >
                        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_60px_30px_rgba(255,255,255,0.9)] animate-pulse" />
                        <div className="absolute inset-0 bg-[#ef4444] rounded-full blur-xl opacity-80" />
                        <div className="absolute inset-0 border-2 border-white/50 rounded-full animate-ping" />
                    </motion.div>
                )}
             </AnimatePresence>

             {accounts.map((acc, index) => {
                 // Calculate offset from active index
                 let offset = index - activeIndex;
                 const len = accounts.length;
                 
                 // Normalize offset to find shortest path (-1, 0, 1)
                 if (offset > len / 2) offset -= len;
                 if (offset < -len / 2) offset += len;

                 return (
                     <CarouselCard 
                        key={acc.id} 
                        acc={acc} 
                        offset={offset} 
                        isMobile={isMobile}
                        onClick={() => handleCardClick(index)}
                        t={t}
                        hasExploded={hasExploded} // Pass explosion state
                     />
                 );
             })}
        </div>

        {/* BOTTOM BANNER */}
        <div className="w-full rounded-3xl bg-gradient-to-r from-black via-[#0f0f0f] to-black border border-white/10 p-6 lg:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.15)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ef4444] to-transparent opacity-50" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className="flex-1">
                   <div className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center text-white mb-4 mx-auto md:mx-0 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                      <Check size={24} strokeWidth={3} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide">{t('accounts.banner.title')}</h3>
                   <p className="text-gray-400 max-w-xl text-sm md:text-base">{t('accounts.banner.desc')}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    <BannerStat text={t('accounts.banner.stat1')} />
                    <BannerStat text={t('accounts.banner.stat2')} />
                    <BannerStat text={t('accounts.banner.stat3')} />
                </div>
            </div>
             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#ef4444]/10 to-transparent pointer-events-none mix-blend-screen" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0', transform: 'scaleX(1.5) translateY(50%)' }} />
        </div>

      </div>
    </section>
  );
};

const BannerStat = ({ text }: { text: string }) => (
    <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <span className="text-white font-bold text-xs md:text-sm tracking-wider">{text}</span>
    </div>
)

interface CarouselCardProps {
    acc: any;
    offset: number;
    isMobile: boolean;
    onClick: () => void;
    t: any;
    hasExploded: boolean;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ acc, offset, isMobile, onClick, t, hasExploded }) => {
    const isCenter = offset === 0;
    const absOffset = Math.abs(offset);
    
    // Positioning Logic - SCALING UPDATE: Reduced spacing
    const spacing = isMobile ? 32 : 340; // Reduced from 40 : 420
    const xOffset = offset * spacing;
    
    return (
        <motion.div
            onClick={onClick}
            // SCALING UPDATE: Converted px to rem
            className={`absolute top-1/2 left-1/2 w-[30rem] sm:w-[38rem] h-auto cursor-pointer`}
            initial={false}
            animate={{
                // If exploded, go to calculated position. If not, stay hidden in exact center.
                x: hasExploded ? `calc(-50% + ${xOffset}px)` : "-50%",
                y: hasExploded ? "-50%" : "-50%",
                scale: hasExploded ? (isCenter ? 1 : 0.85) : 0,
                opacity: hasExploded ? (isCenter ? 1 : 0.4) : 0,
                rotateY: hasExploded ? offset * -15 : 0, // No rotation at start
                zIndex: 10 - absOffset,
                filter: isCenter ? 'blur(0px)' : 'blur(2px)',
            }}
            transition={{
                type: "spring",
                stiffness: 180,  // High stiffness for "Pop" effect
                damping: 18,     // Slight bounce
                mass: 1.2,
                // Stagger effect: Center card pops first, then sides
                delay: hasExploded ? (isCenter ? 0 : 0.15) : 0 
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: 1000
            }}
        >
            <InnerTiltCard acc={acc} isActive={isCenter} t={t} />
        </motion.div>
    );
};

const InnerTiltCard = ({ acc, isActive, t }: { acc: any, isActive: boolean, t: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    // Tilt State
    const x = useMotionValue(0); 
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 }); 
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
    const tiltX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); 
    const tiltY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    // Glow State
    const glowX = useMotionValue(0);
    const glowY = useMotionValue(0);

    const glowBackground = useMotionTemplate`
        radial-gradient(
            650px circle at ${glowX}px ${glowY}px,
            rgba(220, 38, 38, 0.1),
            transparent 80%
        )
    `;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isActive || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5); 
        y.set((e.clientY - rect.top) / rect.height - 0.5);
        glowX.set(e.clientX - rect.left);
        glowY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        x.set(0); 
        y.set(0);
    };

    const instruments = [
        { icon: TrendingUp, label: t('nav.forex') },
        { icon: Zap, label: t('nav.stocks') },
        { icon: Lock, label: t('nav.crypto') },
        { icon: Activity, label: t('nav.indices') },
        { icon: Coins, label: t('nav.commodities') }
    ];

    const glowBorderClass = acc.popular 
        ? "border-red-500/30 shadow-[0_0_30px_-5px_rgba(220,38,38,0.3),inset_0_0_20px_rgba(220,38,38,0.1)]"
        : "border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.02)]";

    return (
        <motion.div 
            ref={ref} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            style={{ 
                rotateX: isActive ? tiltX : 0, 
                rotateY: isActive ? tiltY : 0, 
                transformStyle: "preserve-3d" 
            }} 
            className={`w-full bg-gray-900/40 backdrop-blur-xl transition-all duration-300 border flex flex-col relative overflow-hidden rounded-[2rem] ${glowBorderClass} ${isActive ? 'hover:border-white/30' : ''}`}
        >
                
                {/* Mouse-following Glow (Only for active) */}
                {isActive && (
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                        style={{
                            background: glowBackground
                        }}
                    />
                )}
                
                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col h-full transform-style-3d relative z-20 min-h-[420px]" style={{ transform: "translateZ(20px)" }}>
                    
                    {/* Header */}
                    <div className="mb-3">
                        <div className="flex items-center gap-2 mb-1">
                             <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wider">{acc.name}</h3>
                             <div className="flex gap-0.5 text-[#ef4444]">
                                {[...Array(acc.stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                             </div>
                        </div>
                        <p className="text-gray-400 text-xs font-medium">{acc.subtitle}</p>
                        
                        {/* Badge moved here from absolute position */}
                        {acc.badge && (
                             <div className={`mt-2 inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider shadow-lg ${acc.badgeColor || 'bg-[#ef4444]'}`}>
                                {acc.badge}
                             </div>
                        )}
                    </div>

                    <div className="h-px w-full bg-white/5 my-2" />

                    {/* Min Deposit */}
                    <div className="mb-4">
                        <p className="text-[10px] text-[#ef4444] uppercase tracking-widest font-bold mb-1 border border-[#ef4444]/20 inline-block px-2 py-0.5 rounded-full bg-[#ef4444]/5">{t('accounts.label_deposit')}</p>
                        <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{acc.deposit}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-xs text-gray-400 uppercase font-bold">{t('accounts.label_spread')}</span>
                            <span className="text-sm text-white font-bold">{acc.spread}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-xs text-gray-400 uppercase font-bold">{t('accounts.label_lev')}</span>
                            <span className="text-sm text-white font-bold">{acc.leverage}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-xs text-gray-400 uppercase font-bold">{t('accounts.label_comm')}</span>
                            <div className="text-right">
                                {acc.commissionCheck ? (
                                    <div className="flex items-center justify-end gap-1.5 text-[#ef4444] font-bold text-sm">
                                        <CheckCircle2 size={14} /> <span>{acc.commission}</span>
                                    </div>
                                ) : (
                                    <span className="text-sm text-white font-bold">{acc.commission}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Available Instruments (Vertical Stack) */}
                    <div className="mb-4 flex-1">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-2 tracking-widest">{t('accounts.label_instruments')}</p>
                        <div className="flex flex-col gap-1.5">
                            {instruments.slice(0, 5).map((inst, i) => (
                                <div 
                                    key={i} 
                                    className={`flex items-center gap-3 bg-white/5 rounded-xl p-2 border border-white/10 relative overflow-hidden transition-all ${isActive ? 'hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]' : ''}`}
                                >
                                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 flex items-center justify-center shrink-0 text-gray-400`}>
                                        <inst.icon size={12} />
                                    </div>
                                    <span className="text-xs text-gray-300 font-bold tracking-wide">{inst.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Button */}
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-transform shadow-[0_4px_20px_rgba(220,38,38,0.4)] relative overflow-hidden group/btn border border-white/10">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                             {t('accounts.btn_open')} {isActive && <span>&rarr;</span>}
                        </span>
                        {isActive && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />}
                    </button>

                </div>

                {/* Ambient Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/10 to-transparent blur-3xl rounded-full pointer-events-none transition-opacity duration-500 ${acc.popular ? 'opacity-100' : 'opacity-0'}`} />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/5 to-transparent blur-3xl rounded-full pointer-events-none" />

        </motion.div>
    );
}
