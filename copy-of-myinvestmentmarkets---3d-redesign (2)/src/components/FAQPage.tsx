
import React from 'react';
import { motion } from 'framer-motion';
import { DetailedCategory } from '../data/content';
import { FAQSection } from './FAQSection';

interface FAQPageProps {
  content: DetailedCategory;
  t: (key: string) => string;
}

export const FAQPage: React.FC<FAQPageProps> = ({ content, t }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-16 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
                    <div className="w-20 h-20 mx-auto bg-[#ef4444]/10 text-[#ef4444] rounded-3xl flex items-center justify-center mb-6 border border-[#ef4444]/20 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
                        <content.icon size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t(content.title)}</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t(content.subtitle)}</p>
                </motion.div>
            </header>
            <FAQSection />
        </div>
    )
}
