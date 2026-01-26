
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue, Variants, useMotionValueEvent, MotionValue } from 'framer-motion';
import { Monitor, Smartphone, Globe, Zap, Activity, Lock, Battery, Signal, LayoutGrid, Settings, BarChart3, Wifi } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PlatformSectionProps {
    defaultSlide?: number;
}

export const PlatformSection: React.FC<PlatformSectionProps> = ({ defaultSlide = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(defaultSlide);
  const { t } = useLanguage();

  // 1. THE TRACK: 250vh for optimized scroll speed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. LOGIC: Trigger state changes based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest < 0.33) {
          if (activeSlide !== 0) setActiveSlide(0);
      } else if (latest < 0.66) {
          if (activeSlide !== 1) setActiveSlide(1);
      } else {
          if (activeSlide !== 2) setActiveSlide(2);
      }
  });

  const PLATFORM_SLIDES = [
    {
      id: 0,
      type: 'desktop',
      title: t('platform.mt5.title'),
      subtitle: t('platform.mt5.subtitle'),
      desc: t('platform.mt5.desc'),
      icon: Monitor
    },
    {
      id: 1,
      type: 'browser',
      title: t('platform.web.title'),
      subtitle: t('platform.web.subtitle'),
      desc: t('platform.web.desc'),
      icon: Globe
    },
    {
      id: 2,
      type: 'mobile',
      title: t('platform.mobile.title'),
      subtitle: t('platform.mobile.subtitle'),
      desc: t('platform.mobile.desc'),
      icon: Smartphone
    }
  ];

  // --- PREMIUM TEXT ANIMATION (Vertical Blur Reveal) ---
  const textContainerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: { 
          opacity: 1,
          transition: { staggerChildren: 0.1 } // Stagger title, sub, desc
      },
      exit: { 
          opacity: 0,
          transition: { duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 } 
      }
  };

  const textItemVariants: Variants = {
      hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
      visible: { 
          y: 0, 
          opacity: 1, 
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } // Apple-style ease
      },
      exit: { 
          y: -20, 
          opacity: 0, 
          filter: "blur(10px)",
          transition: { duration: 0.4, ease: "easeIn" } 
      }
  };

  // --- PREMIUM IMAGE ANIMATION (3D Depth Zoom) ---
  const imageVariants: Variants = {
      initial: { 
          scale: 0.85, 
          opacity: 0, 
          z: -100,
          rotateX: 10,
          filter: "blur(10px)"
      },
      animate: { 
          scale: 1, 
          opacity: 1, 
          z: 0,
          rotateX: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      },
      exit: { 
          scale: 1.1, 
          opacity: 0, 
          filter: "blur(20px)", // Camera lens blur effect
          transition: { duration: 0.5, ease: "easeIn" }
      }
  };

  // --- PARALLAX & INTERACTION EFFECTS ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  const tiltY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const tiltX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  
  const isHovered = useMotionValue(0);
  const hoverSpring = useSpring(isHovered, { stiffness: 200, damping: 20 });
  const zExplode = useTransform(hoverSpring, [0, 1], [0, 50]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  return (
    <div 
        id="platforms" 
        ref={containerRef} 
        className="relative h-[250vh] bg-[#050505]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000 z-10">
      
          {/* Ambient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#000000_100%)] opacity-80 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none z-0" />
          
          <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
                {/* LEFT: TEXT COLUMN */}
                <div className="lg:col-span-4 relative z-20 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center min-h-[30rem]">
                    <AnimatePresence mode="popLayout">
                        <motion.div 
                            key={activeSlide} 
                            variants={textContainerVariants}
                            initial="hidden" 
                            animate="visible" 
                            exit="exit" 
                            className="w-full"
                        >
                            {/* Icon Badge */}
                            <motion.div variants={textItemVariants} className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 text-[#ef4444] mb-6 shadow-[0_0_20px_rgba(239,68,68,0.15)] backdrop-blur-sm">
                                {React.createElement(PLATFORM_SLIDES[activeSlide].icon, { size: 24 })}
                            </motion.div>
                            
                            <motion.h2 variants={textItemVariants} className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-xl tracking-tight leading-[1.1]">
                                {PLATFORM_SLIDES[activeSlide].title}
                            </motion.h2>
                            
                            <motion.h3 variants={textItemVariants} className="text-lg sm:text-xl text-gray-400 font-medium mb-6 tracking-wide">
                                {PLATFORM_SLIDES[activeSlide].subtitle}
                            </motion.h3>
                            
                            <motion.div variants={textItemVariants} className="relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ef4444] to-transparent hidden lg:block rounded-full opacity-50" />
                                <p className="text-gray-500 leading-relaxed text-base sm:text-lg mb-8 lg:pl-6">
                                    {PLATFORM_SLIDES[activeSlide].desc}
                                </p>
                            </motion.div>
                            
                            <motion.button variants={textItemVariants} className="w-full sm:w-auto px-8 py-4 bg-[#dc2626] rounded-xl text-white font-bold shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:scale-105 transition-transform flex items-center justify-center gap-2 hover:bg-[#b91c1c] border border-white/10 group">
                                <Zap size={18} className="group-hover:fill-white transition-colors" /> {t('platform.btn_download')}
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Dots */}
                    <div className="flex gap-3 mt-12 justify-center lg:justify-start">
                        {PLATFORM_SLIDES.map((_, i) => (
                            <div key={i} className="relative h-1.5 cursor-pointer">
                                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${i === activeSlide ? 'bg-[#ef4444] w-12 opacity-100' : 'bg-gray-800 w-2 opacity-50'}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: DEVICE VISUAL COLUMN */}
                <div 
                    className="lg:col-span-8 h-[50rem] lg:h-[70rem] relative perspective-1000 flex items-center justify-center order-1 lg:order-2 cursor-pointer group" 
                    onMouseMove={handleMouseMove} 
                    onMouseEnter={() => isHovered.set(1)} 
                    onMouseLeave={() => { isHovered.set(0); mouseX.set(0); mouseY.set(0); }}
                >
                    <motion.div 
                        style={{ 
                            rotateX: tiltX, 
                            rotateY: tiltY, 
                            transformStyle: 'preserve-3d' 
                        }} 
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Dynamic Floor Shadow */}
                        <motion.div 
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[15%] bg-black/80 blur-[60px] rounded-[100%]" 
                            animate={{ 
                                scale: [1, 1.2, 1], 
                                opacity: [0.4, 0.6, 0.4] 
                            }} 
                            transition={{ duration: 4, repeat: Infinity }} 
                            style={{ transform: "rotateX(70deg) translateZ(-150px)" }} 
                        />
                        
                        {/* Slide Content Switcher with popLayout for overlaps */}
                        <AnimatePresence mode="popLayout">
                            <motion.div 
                                key={activeSlide} 
                                variants={imageVariants} 
                                initial="initial" 
                                animate="animate" 
                                exit="exit" 
                                className="absolute flex items-center justify-center w-full h-full transform-style-3d origin-center"
                            >
                                {activeSlide === 0 && <MT5DesktopView zExplode={zExplode} t={t} />}
                                {activeSlide === 1 && <WebTraderView zExplode={zExplode} t={t} />}
                                {activeSlide === 2 && <MobileAppView zExplode={zExplode} t={t} />}
                            </motion.div>
                        </AnimatePresence>

                        {/* Persistent Floating Widgets */}
                        <FloatingWidgets zExplode={zExplode} t={t} />
                    </motion.div>
                </div>
          </div>
      </div>
    </div>
  );
};

// --- VISUAL COMPONENTS ---

const MT5DesktopView = ({ zExplode, t }: { zExplode: MotionValue<number>, t: any }) => {
    const candles = React.useMemo(() => generateCandles(30), []);
    const zBase = useTransform(zExplode, z => z * 0);
    const zContent = useTransform(zExplode, z => 20 + z * 0.5);
    const zUI = useTransform(zExplode, z => 40 + z * 0.8);
    const zFloat = useTransform(zExplode, z => 60 + z * 1.2);
    
    return (
        <div className="w-full max-w-[95vw] lg:max-w-4xl aspect-video relative transform-style-3d group">
            {/* Monitor Bezel */}
            <motion.div style={{ z: zBase }} className="absolute inset-0 bg-[#121212] rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Screen Content */}
            <motion.div style={{ z: zContent }} className="absolute inset-[2px] bg-[#1e1e1e] rounded-[10px] overflow-hidden flex flex-col">
                <div className="h-8 bg-[#252525] border-b border-black flex items-center justify-between px-3">
                    <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/50" /></div>
                    <div className="text-[10px] text-gray-500 font-mono tracking-widest">{t('platform.ui.terminal')}</div>
                </div>
                <div className="flex-1 flex bg-[#121212]">
                    <div className="w-48 bg-[#1a1a1a] border-r border-black hidden sm:block p-2">
                        <div className="space-y-1">
                            {['EURUSD', 'GBPUSD', 'XAUUSD', 'BTCUSD'].map((s, i) => (
                                <div key={i} className="flex justify-between text-[10px] text-gray-400 bg-white/5 p-1.5 rounded hover:bg-white/10 cursor-pointer transition-colors">
                                    <span className="text-white font-bold">{s}</span>
                                    <span className={i%2===0 ? "text-green-500" : "text-red-500"}>1.083{i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20">
                            {[...Array(24)].map((_, i) => <div key={i} className="border-[0.5px] border-white/10" />)}
                        </div>
                        {/* Candles */}
                        <div className="absolute inset-x-0 bottom-8 top-8 flex items-end justify-between px-4 gap-1">
                            {candles.map((c, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ delay: i * 0.02, duration: 0.5 }}
                                    className="relative w-full h-full flex flex-col justify-end origin-bottom"
                                >
                                    <div className={`w-[1px] mx-auto ${c.isGreen ? 'bg-green-500' : 'bg-red-500'}`} style={{ height: `${c.wickHeight}%`, marginBottom: `${c.wickBottom}%` }} />
                                    <div className={`w-[70%] mx-auto absolute bottom-0 left-0 right-0 ${c.isGreen ? 'bg-green-500' : 'bg-red-500'}`} style={{ height: `${c.height}%`, bottom: `${c.bottom}%` }} />
                                </motion.div>
                            ))}
                        </div>
                        {/* Price Line */}
                        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-blue-500 border-b border-dashed border-blue-500 opacity-50 flex items-center">
                            <div className="ml-auto bg-blue-600 text-white text-[9px] px-1 font-mono">1.08450</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating UI Elements */}
            <motion.div style={{ z: zFloat }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-16 left-12 sm:left-60 bg-[#252525] border border-white/10 p-3 rounded-lg shadow-2xl flex gap-4 backdrop-blur-md">
                    <div className="text-center px-2 border-r border-white/10">
                        <div className="text-[8px] text-gray-400 mb-1">{t('common.sell').toUpperCase()}</div>
                        <div className="text-sm font-bold text-white">1.0844</div>
                    </div>
                    <div className="text-center px-2">
                        <div className="text-[8px] text-gray-400 mb-1">{t('common.buy').toUpperCase()}</div>
                        <div className="text-sm font-bold text-white">1.0845</div>
                    </div>
                </div>
                <div className="absolute bottom-12 right-12 bg-green-500/10 border border-green-500/50 p-2.5 rounded-lg backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <div className="text-[10px] text-green-400 font-bold flex items-center gap-2">
                        <Activity size={12} className="animate-pulse" /> {t('hero.widget.buy_order')}
                    </div>
                    <div className="text-sm text-white font-mono mt-1">+$145.00</div>
                </div>
            </motion.div>
        </div>
    )
}

const WebTraderView = ({ zExplode, t }: { zExplode: MotionValue<number>, t: any }) => {
    const zBase = useTransform(zExplode, z => z * 0);
    const zContent = useTransform(zExplode, z => 20 + z * 0.6);
    const zFloat = useTransform(zExplode, z => 50 + z * 1.0);
    
    return (
        <div className="w-full max-w-[95vw] lg:max-w-4xl aspect-video relative transform-style-3d group">
            <motion.div style={{ z: zBase }} className="absolute inset-0 bg-[#0f172a] rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                {/* Browser Header */}
                <div className="h-10 bg-[#1e293b] border-b border-white/5 flex items-center px-4 gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                        <div className="w-3 h-3 rounded-full bg-green-500"/>
                    </div>
                    <div className="flex-1 mx-4 bg-[#0f172a] h-6 rounded-md flex items-center px-3 text-[10px] text-gray-400 border border-white/5 shadow-inner">
                        <Lock size={8} className="mr-1.5 text-green-500"/> webtrader.mim.com
                    </div>
                </div>
            </motion.div>

            <motion.div style={{ z: zContent }} className="absolute inset-0 top-10 flex pointer-events-none">
                {/* Sidebar */}
                <div className="w-16 bg-[#0b1120] border-r border-white/5 flex flex-col items-center py-6 gap-8 text-gray-600">
                    <LayoutGrid size={20} className="text-blue-500" />
                    <BarChart3 size={20} />
                    <Settings size={20} />
                </div>
                {/* Watchlist */}
                <div className="w-56 bg-[#0f172a] border-r border-white/5 p-4 hidden sm:block">
                    <div className="text-[10px] text-gray-500 font-bold mb-4 uppercase tracking-wider">{t('platform.ui.watchlist')}</div>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-12 bg-white/5 rounded-lg mb-2 w-full animate-pulse opacity-50" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                </div>
                {/* Main Chart Area */}
                <div className="flex-1 bg-[#0b1120] relative overflow-hidden">
                    <svg className="w-full h-full text-blue-500/10 fill-current" preserveAspectRatio="none">
                        <path d="M0,300 C150,250 350,350 500,200 C650,50 800,150 1000,100 L1000,400 L0,400 Z" />
                    </svg>
                    <svg className="absolute inset-0 w-full h-full text-blue-500 fill-none stroke-current stroke-2" preserveAspectRatio="none">
                        <motion.path 
                            d="M0,300 C150,250 350,350 500,200 C650,50 800,150 1000,100"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
            </motion.div>

            <motion.div style={{ z: zFloat }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-24 right-10 w-64 bg-[#1e293b]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl hidden sm:block">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="text-xl font-bold text-white">Apple Inc.</div>
                            <div className="text-[10px] text-gray-400">NASDAQ: AAPL</div>
                        </div>
                        <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">+1.2%</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-4 font-mono">182.50</div>
                    <button className="w-full py-3 bg-[#dc2626] text-white font-bold rounded-xl text-sm hover:bg-[#b91c1c] transition-colors shadow-lg shadow-red-900/20">
                        {t('platform.ui.place_order')}
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

const MobileAppView = ({ zExplode, t }: { zExplode: MotionValue<number>, t: any }) => {
    const zBase = useTransform(zExplode, z => z * 0);
    const zScreen = useTransform(zExplode, z => 10 + z * 0.2);
    const zUI = useTransform(zExplode, z => 30 + z * 0.8);
    const zPop = useTransform(zExplode, z => 60 + z * 1.5);
    
    // Using rem instead of px for scaling
    // Scaled down to 70% using transform: scale(0.7)
    return (
        <div className="w-[28rem] sm:w-[32rem] h-[58rem] sm:h-[64rem] relative transform-style-3d group scale-[0.7] origin-center">
            {/* Phone Body */}
            <motion.div style={{ z: zBase }} className="absolute inset-0 bg-black rounded-[45px] border-[8px] border-[#1e1e1e] shadow-2xl overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Screen */}
            <motion.div style={{ z: zScreen }} className="absolute inset-[8px] bg-[#0b1120] rounded-[38px] overflow-hidden flex flex-col pointer-events-none">
                {/* Status Bar */}
                <div className="h-12 flex justify-between px-6 items-center text-white text-[10px]">
                    <span>9:41</span>
                    <div className="w-20 h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
                    <div className="flex gap-1.5"><Signal size={12}/><Wifi size={12}/><Battery size={12}/></div>
                </div>
                
                {/* App Content */}
                <div className="p-6 pt-4">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <div className="text-gray-400 text-xs font-medium mb-1">{t('platform.ui.balance')}</div>
                            <div className="text-3xl text-white font-bold tracking-tight">$14,250.00</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Settings size={20} className="text-gray-400" />
                        </div>
                    </div>
                    
                    {/* Mini Chart */}
                    <div className="h-40 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20 mb-6 relative overflow-hidden p-4">
                        <div className="text-xs text-red-400 font-bold mb-1">Bitcoin</div>
                        <div className="text-lg text-white font-bold">$42,300</div>
                        <svg className="absolute bottom-0 left-0 right-0 h-20 text-red-500/30 fill-current" preserveAspectRatio="none">
                            <path d="M0,50 Q50,10 100,60 T200,40 V100 H0 Z" />
                        </svg>
                    </div>
                    
                    {/* List Items */}
                    <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-16 bg-white/5 rounded-xl w-full flex items-center px-4 justify-between border border-white/5">
                                <div className="flex gap-3 items-center">
                                    <div className={`w-8 h-8 rounded-full ${i===1 ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500'} flex items-center justify-center`}>
                                        {i===1 ? <Activity size={16}/> : <Globe size={16}/>}
                                    </div>
                                    <div className="w-20 h-2 bg-white/10 rounded-full" />
                                </div>
                                <div className="w-12 h-2 bg-white/10 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div style={{ z: zUI }} className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-6 inset-x-6 h-16 bg-[#1e1e1e]/90 backdrop-blur-xl rounded-2xl flex justify-around items-center text-gray-400 shadow-xl border border-white/10">
                    <LayoutGrid size={20} className="text-[#ef4444]" />
                    <Activity size={20} />
                    <div className="w-10 h-10 bg-[#ef4444] rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30 -mt-6 border-4 border-[#0b1120]">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <Globe size={20} />
                    <Settings size={20} />
                </div>
            </motion.div>

            {/* Notification Pop */}
            <motion.div style={{ z: zPop }} className="absolute top-32 right-[-20px] bg-white text-black p-4 rounded-2xl shadow-2xl pointer-events-none w-48">
                <div className="flex justify-between items-center mb-2">
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">{t('platform.ui.alert')}</div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </div>
                <div className="text-sm font-bold">BTC +5.2% 🚀</div>
                <div className="text-xs text-gray-500 mt-1">Target Reached</div>
            </motion.div>
        </div>
    )
}

const FloatingWidgets = ({ zExplode, t }: { zExplode: MotionValue<number>, t: any }) => {
    const z1 = useTransform(zExplode, z => 100 + z * 2);
    const z2 = useTransform(zExplode, z => 120 + z * 2.5);
    
    return (
        <div className="absolute inset-0 pointer-events-none transform-style-3d">
            <motion.div style={{ z: z1 }} className="absolute left-4 top-0 sm:-left-12 sm:top-20 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 scale-90 sm:scale-100 origin-left">
                <div className="bg-green-500/20 p-2.5 rounded-xl text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <Wifi size={20} />
                </div>
                <div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{t('platform.ui.latency')}</div>
                    <div className="text-xl font-bold text-white font-mono">12ms</div>
                </div>
            </motion.div>
            
            <motion.div style={{ z: z2 }} className="absolute right-4 bottom-0 sm:-right-8 sm:bottom-32 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 scale-90 sm:scale-100 origin-right">
                <div className="bg-blue-500/20 p-2.5 rounded-xl text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <Activity size={20} />
                </div>
                <div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{t('platform.ui.filled')}</div>
                    <div className="text-sm font-bold text-white">Buy 0.5 BTC</div>
                </div>
            </motion.div>
        </div>
    )
}

const generateCandles = (count: number) => { 
    let current = 50; 
    return Array.from({ length: count }).map(() => { 
        const move = (Math.random() - 0.5) * 15; 
        const open = current; 
        let close = open + move; 
        if(close > 90) close = 85; 
        if(close < 10) close = 15; 
        const high = Math.max(open, close) + Math.random() * 5; 
        const low = Math.min(open, close) - Math.random() * 5; 
        current = close; 
        return { bottom: Math.min(open, close), height: Math.abs(open - close), wickBottom: low, wickHeight: high - low, isGreen: close >= open }; 
    }); 
};
