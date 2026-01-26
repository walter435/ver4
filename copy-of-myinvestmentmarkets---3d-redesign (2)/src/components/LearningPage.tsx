
import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight, ArrowLeft, BookOpen, List } from 'lucide-react';
import { learningModules, LearningModule } from '../data/learningData';
import { useLanguage } from '../contexts/LanguageContext';

// --- CONTENT PARSER ---
interface ParsedSection {
    type: 'intro' | 'section';
    title?: string;
    body: string;
}

const parseContent = (rawText: string): ParsedSection[] => {
    if (!rawText) return [];

    const sections: ParsedSection[] = [];
    const parts = rawText.split(/section_title:/g);

    if (parts[0] && parts[0].trim()) {
        sections.push({
            type: 'intro',
            body: parts[0].trim()
        });
    }

    for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        const [titleChunk, bodyChunk] = part.split(/section_body:/g);
        
        if (titleChunk) {
            sections.push({
                type: 'section',
                title: titleChunk.trim(),
                body: bodyChunk ? bodyChunk.trim() : ''
            });
        }
    }

    return sections;
};

// --- SUB-COMPONENTS ---

const ModuleCard: React.FC<{ module: LearningModule; index: number; t: any; currentLang: string; onSelect: () => void }> = ({ module, index, t, currentLang, onSelect }) => {
    // Fallback to English if translation missing
    const title = module.titles[currentLang] || module.titles['en'] || "Untitled Module";
    
    // 3D Tilt Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        x.set(mouseXPos / width - 0.5);
        y.set(mouseYPos / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={onSelect}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="group relative cursor-pointer h-full"
        >
            <motion.div
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d" 
                }}
                className="relative h-full bg-[#0a0a0a] border border-white/10 group-hover:border-[#ef4444]/30 rounded-[2rem] p-8 flex flex-col transition-all duration-300 shadow-xl group-hover:shadow-[0_0_50px_rgba(239,68,68,0.15)]"
            >
                {/* 3D Depth Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 pointer-events-none" style={{ transform: "translateZ(-20px)" }} />
                
                {/* Content lifted in 3D space */}
                <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ef4444] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(239,68,68,0.1)] group-hover:bg-[#ef4444] group-hover:text-white">
                        <module.icon size={28} />
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-4 line-clamp-2 group-hover:text-[#ef4444] transition-colors">
                        {title}
                    </h3>

                    {/* Spacer */}
                    <div className="flex-1" />

                    <div className="mt-6 flex items-center justify-end border-t border-white/5 pt-6">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#ef4444] group-hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.0)] group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                            <ChevronRight size={16} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ReaderView: React.FC<{ module: LearningModule; onBack: () => void; currentLang: string }> = ({ module, onBack, currentLang }) => {
    // Get content based on language or fallback
    const rawContent = module.content[currentLang] || module.content['en'];
    const title = module.titles[currentLang] || module.titles['en'];
    const parsedData = useMemo(() => parseContent(rawContent), [rawContent]);
    const [activeSection, setActiveSection] = useState(0);

    const scrollToSection = (index: number) => {
        const element = document.getElementById(`section-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(index);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Nav Bar */}
            <div className="flex items-center gap-4 mb-10 sticky top-24 z-30 bg-[#020617]/90 backdrop-blur-xl py-4 border-b border-white/5 rounded-b-2xl px-4 -mx-4">
                <button 
                    onClick={onBack}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-bold text-white truncate flex-1">{title}</h2>
                <div className="text-xs font-mono text-gray-500 bg-black/40 px-3 py-1 rounded-full border border-white/5 hidden sm:block">
                    READING MODE
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Content */}
                <div className="lg:col-span-8 order-2 lg:order-1">
                    <div className="prose prose-invert prose-lg max-w-none">
                        {parsedData.map((section, idx) => (
                            <div key={idx} id={`section-${idx}`} className="mb-16 scroll-mt-40">
                                {section.type === 'section' && section.title && (
                                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 flex items-start gap-3">
                                        <span className="text-[#ef4444] mt-1.5 w-2 h-8 rounded-full bg-[#ef4444] block shrink-0" />
                                        {section.title}
                                    </h2>
                                )}
                                
                                <div className="text-gray-300 leading-8 text-lg font-light space-y-6">
                                    {section.body.split('\n').map((line, lIdx) => {
                                        const trimmed = line.trim();
                                        if (!trimmed) return <br key={lIdx} />;
                                        
                                        // Handle bullet points (basic detection)
                                        if (trimmed.startsWith('-') || trimmed.startsWith('•') || /^[a-z]\./.test(trimmed)) {
                                            return (
                                                <div key={lIdx} className="flex gap-3 pl-4">
                                                    <span className="text-[#ef4444] font-bold">•</span>
                                                    <span>{trimmed.replace(/^[-•]\s*/, '')}</span>
                                                </div>
                                            );
                                        }
                                        
                                        return <p key={lIdx}>{trimmed}</p>;
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar Table of Contents */}
                <div className="lg:col-span-4 order-1 lg:order-2">
                    <div className="sticky top-40">
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6 text-[#ef4444]">
                                <List size={20} />
                                <span className="text-xs font-bold uppercase tracking-widest">Table of Contents</span>
                            </div>
                            
                            <nav className="space-y-1 relative">
                                {/* Track Line */}
                                <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10" />
                                
                                {parsedData.map((section, idx) => {
                                    if (section.type === 'intro') return null; // Skip intro in TOC usually
                                    
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => scrollToSection(idx)}
                                            className={`relative w-full text-left py-3 pl-8 pr-4 text-sm rounded-r-xl transition-all duration-300 group ${activeSection === idx ? 'bg-white/5 text-white font-bold' : 'text-gray-500 hover:text-gray-300'}`}
                                        >
                                            {/* Active Indicator Dot */}
                                            <span className={`absolute left-[5px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === idx ? 'bg-[#ef4444] scale-125' : 'bg-gray-700'}`} />
                                            
                                            <span className="line-clamp-2">{section.title}</span>
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                                    <span>READ TIME</span>
                                    <span>~{Math.ceil(rawContent.length / 500)} MIN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- MAIN PAGE ---

interface LearningPageProps {
  content: any; // Legacy props, ignored in favor of new data structure
  t: (key: string) => string;
}

export const LearningPage: React.FC<LearningPageProps> = ({ t }) => {
    const { language } = useLanguage();
    const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

    const activeModule = useMemo(() => 
        learningModules.find(m => m.id === selectedModuleId), 
    [selectedModuleId]);

    return (
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                {selectedModuleId && activeModule ? (
                    <ReaderView 
                        key="reader"
                        module={activeModule} 
                        currentLang={language} 
                        onBack={() => setSelectedModuleId(null)} 
                    />
                ) : (
                    <motion.div 
                        key="list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="max-w-7xl mx-auto"
                    >
                        <header className="mb-20 text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
                                <div className="w-20 h-20 mx-auto bg-[#ef4444]/10 text-[#ef4444] rounded-3xl flex items-center justify-center mb-8 border border-[#ef4444]/20 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
                                    <BookOpen size={40} />
                                </div>
                                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                                    Learning Hub
                                </h1>
                                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                                    {t('page.learning.desc') || "Master the markets with our comprehensive educational curriculum."}
                                </p>
                            </motion.div>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {learningModules.map((module, idx) => (
                                <ModuleCard 
                                    key={module.id} 
                                    module={module} 
                                    index={idx} 
                                    t={t} 
                                    currentLang={language}
                                    onSelect={() => {
                                        setSelectedModuleId(module.id);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
