
import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { DetailedCategory } from '../data/content';
import { Globe, ShieldCheck, Zap, Lock, Sparkles, Building2 } from 'lucide-react';

interface AboutPageProps {
  content: DetailedCategory;
  t: (key: string) => string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ t }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    // 1. THE TRACK: 500vh height to create a long scrollable area
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 2. THE LOGIC: Map scroll progress to slides (0-4)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Adjust these thresholds to control when slides change
        if (latest < 0.15) setActiveSlide(0);
        else if (latest < 0.35) setActiveSlide(1);
        else if (latest < 0.55) setActiveSlide(2);
        else if (latest < 0.75) setActiveSlide(3);
        else setActiveSlide(4);
    });

    // 3. CONTENT DATA
    const SLIDES = [
        {
            id: 0,
            title: t('page.about.title.2'), // Corporate Profile / Our Mission
            subtitle: "Global Leadership",
            icon: Globe,
            text: t('page.about.intro') + "\n\n" + t('page.about.desc.1')
        },
        {
            id: 1,
            title: t('page.about.license.badge'), // Regulation
            subtitle: "Licensed & Regulated",
            icon: Building2,
            text: t('page.about.desc.4')
        },
        {
            id: 2,
            title: t('page.about.safety.title'), // Asset Segregation
            subtitle: "Tier-1 Security",
            icon: Lock,
            text: t('page.about.desc.3')
        },
        {
            id: 3,
            title: t('page.about.tech.title'), // Technological Excellence
            subtitle: "Zero Latency Execution",
            icon: Zap,
            text: t('page.about.desc.2')
        },
        {
            id: 4,
            title: "Future Vision", // Vision
            subtitle: "Growing Together",
            icon: Sparkles,
            text: t('page.about.vision') + "\n\n" + t('page.about.desc.5')
        }
    ];

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#020617]">
            
            {/* STICKY VIEWPORT: The window through which we see the content */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-1000">
                
                {/* 1. BACKGROUND LAYERS */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#000000_100%)] opacity-100 z-0" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none z-0" />
                
                {/* 2. CENTRAL GALAXY CORE (Visual Anchor) - Positioned slightly lower to allow top text */}
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none translate-y-20">
                    <GalaxyCore />
                </div>

                {/* 3. DYNAMIC CONTENT LAYER */}
                <div className="container mx-auto px-4 md:px-8 relative z-20 w-full h-full flex flex-col">
                    <AnimatePresence mode="wait">
                        {SLIDES.map((slide, i) => {
                            if (i !== activeSlide) return null;

                            const isFirst = i === 0;
                            const isEven = i % 2 === 0;

                            // LAYOUT LOGIC:
                            let containerClasses = "";
                            let cardClasses = "";
                            let initialAnim = {};
                            let animateAnim = {};
                            let exitAnim = {};

                            // SCALING LOGIC:
                            // We target scale: 0.8 to satisfy the "80% magnification" request.
                            const baseScale = 0.8;

                            if (isFirst) {
                                // INTRO SLIDE: Centered Top
                                containerClasses = "items-start justify-center pt-32 md:pt-40 h-full";
                                cardClasses = "w-full max-w-6xl text-center";
                                // Adjusted initial scale relative to baseScale (0.8 * 0.95 = 0.76)
                                initialAnim = { opacity: 0, y: -50, scale: baseScale * 0.95 };
                                animateAnim = { opacity: 1, y: 0, scale: baseScale };
                                exitAnim = { opacity: 0, y: -50, scale: baseScale * 0.95 };
                            } else {
                                // CONTENT SLIDES: Wide cards alternating Left/Right
                                containerClasses = `items-center h-full ${isEven ? 'justify-start' : 'justify-end'}`;
                                // Increased width to 85% - 90% for massive horizontal spread
                                cardClasses = `w-full lg:w-[85%] xl:w-[90%] text-left`;
                                initialAnim = { opacity: 0, x: isEven ? -100 : 100, scale: baseScale };
                                animateAnim = { opacity: 1, x: 0, scale: baseScale };
                                exitAnim = { opacity: 0, x: isEven ? -50 : 50, scale: baseScale };
                            }

                            return (
                                <motion.div 
                                    key={i}
                                    className={`flex w-full absolute inset-0 px-4 md:px-10 ${containerClasses}`}
                                    initial={initialAnim}
                                    animate={{ 
                                        ...animateAnim,
                                        transition: { type: "spring", stiffness: 40, damping: 20 } 
                                    }}
                                    exit={{ 
                                        ...exitAnim,
                                        transition: { duration: 0.4, ease: "easeInOut" } 
                                    }}
                                >
                                    <div className={`relative group ${cardClasses}`}>
                                        
                                        {/* Glow Effect behind text */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-[90%] h-[120%] bg-gradient-to-br from-[#ef4444]/10 to-transparent blur-[120px] rounded-full -z-10 ${isFirst ? 'left-1/2 -translate-x-1/2' : (isEven ? 'left-0' : 'right-0')}`} />

                                        {/* Content Wrapper */}
                                        <div className={`
                                            relative p-10 md:p-16 rounded-[3rem] 
                                            ${isFirst ? 'bg-transparent border-none' : 'bg-[#0a0a0a]/70 backdrop-blur-2xl border border-white/10 shadow-2xl'}
                                            overflow-hidden transition-all duration-500
                                        `}>
                                            {/* Header Section */}
                                            <div className={`flex items-center gap-8 mb-10 ${isFirst ? 'justify-center flex-col' : 'flex-row'}`}>
                                                <div className={`
                                                    rounded-3xl flex items-center justify-center text-[#ef4444] shadow-[0_0_50px_rgba(239,68,68,0.2)] backdrop-blur-md
                                                    ${isFirst ? 'w-28 h-28 bg-transparent border-2 border-[#ef4444]/30' : 'w-24 h-24 bg-gradient-to-br from-white/10 to-transparent border border-white/20'}
                                                `}>
                                                    {React.createElement(slide.icon, { size: isFirst ? 56 : 40 })}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className={`text-lg font-bold text-[#ef4444] uppercase tracking-[0.3em] mb-3 ${isFirst ? 'text-center' : ''}`}>
                                                        {slide.subtitle}
                                                    </span>
                                                    <h2 className={`font-display font-bold text-white leading-[0.9] drop-shadow-lg ${isFirst ? 'text-7xl md:text-9xl' : 'text-5xl md:text-7xl'}`}>
                                                        {slide.title}
                                                    </h2>
                                                </div>
                                            </div>

                                            {/* Body Text Structure - Enhanced for Readability */}
                                            <div className="relative z-10">
                                                {!isFirst && <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#ef4444] to-transparent rounded-full opacity-80" />}
                                                
                                                <div className={`
                                                    text-gray-300 font-light
                                                    ${isFirst ? 'text-2xl md:text-3xl max-w-5xl mx-auto leading-relaxed' : 'text-xl md:text-2xl pl-10 leading-loose'}
                                                `}>
                                                    {/* 
                                                      Splitting text by double newlines or single newlines to create paragraphs.
                                                      This ensures better spacing and visual hierarchy without changing the text content.
                                                    */}
                                                    {slide.text.split('\n').map((paragraph, idx) => (
                                                        paragraph.trim() !== "" && (
                                                            <p key={idx} className="mb-6 last:mb-0">
                                                                {paragraph}
                                                            </p>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* 4. PROGRESS INDICATOR (Bottom Center) */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-50">
                    {SLIDES.map((_, i) => (
                        <div key={i} className="relative h-2 cursor-pointer">
                            <motion.div 
                                className="absolute top-0 left-0 h-full rounded-full bg-[#ef4444] shadow-[0_0_10px_#ef4444]"
                                initial={{ width: "0%" }}
                                animate={{ 
                                    width: i === activeSlide ? "4rem" : "0.75rem",
                                    opacity: i === activeSlide ? 1 : 0.3,
                                    backgroundColor: i === activeSlide ? "#ef4444" : "#ffffff"
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

// --- GALAXY CORE ANIMATION ---
// Scaled down to 80% (Original 80rem -> 64rem, etc.)
const GalaxyCore = () => {
    return (
        <div className="relative w-[64rem] h-[64rem] flex items-center justify-center transform-style-3d perspective-1000 opacity-60">
            
            {/* 1. Core Light Source (Original 20rem -> 16rem) */}
            <motion.div 
                className="absolute w-[16rem] h-[16rem] bg-red-600 rounded-full blur-[100px] opacity-50"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 2. Rotating Orbital Rings (Wireframe Style) */}
            {/* 40rem -> 32rem */}
            <motion.div 
                className="absolute w-[32rem] h-[32rem] rounded-full border-[1px] border-white/10"
                style={{ rotateX: 60 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]" />
            </motion.div>

            {/* 60rem -> 48rem */}
            <motion.div 
                className="absolute w-[48rem] h-[48rem] rounded-full border-[1px] border-white/5 border-dashed"
                style={{ rotateX: 60, rotateY: 15 }}
                animate={{ rotateZ: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* 70rem -> 56rem */}
            <motion.div 
                className="absolute w-[56rem] h-[56rem] rounded-full border-[1px] border-[#ef4444]/10"
                style={{ rotateX: 70, rotateY: -15 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#ef4444] rounded-full shadow-[0_0_20px_#ef4444]" />
            </motion.div>

            {/* 3. Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    style={{
                        top: "50%",
                        left: "50%",
                        x: Math.random() * 480 - 240, // Scaled 600 -> 480
                        y: Math.random() * 480 - 240,
                        z: Math.random() * 160 - 80, // Scaled 200 -> 160
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};
