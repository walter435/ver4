
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { faqData, FAQCategory } from '../data/faqData';
import { useLanguage } from '../contexts/LanguageContext';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("Account");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;
  const listTopRef = useRef<HTMLDivElement>(null);

  const categories: FAQCategory[] = [
    "Account", "MT5", "Web Trade", 
    "Deposit & Withdrawals", "Partners", "Terms", "Others"
  ];

  const filteredData = useMemo(() => {
    // Translate data before filtering if keys are used, otherwise use the direct string
    const translatedData = faqData.map(item => ({
        ...item,
        question: t(item.question), // If item.question is English text, t() returns it as is
        answer: t(item.answer)
    }));

    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return translatedData.filter(
            (item) => 
                item.question.toLowerCase().includes(query) || 
                item.answer.toLowerCase().includes(query)
        );
    }
    return translatedData.filter((item) => item.category === activeCategory);
  }, [activeCategory, searchQuery, t]);

  useEffect(() => {
    setCurrentPage(1);
    setExpandedIndex(null);
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = useMemo(() => {
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const handlePageChange = (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
      setExpandedIndex(null);
      listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
      setSearchQuery("");
  };

  const setQuickSearch = (term: string) => {
      setSearchQuery(term);
  }

  const renderPaginationButtons = () => {
      const buttons = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
          for (let i = 1; i <= totalPages; i++) {
              buttons.push(i);
          }
      } else {
          if (currentPage <= 3) {
              buttons.push(1, 2, 3, 4, '...', totalPages);
          } else if (currentPage >= totalPages - 2) {
              buttons.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
          } else {
              buttons.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
          }
      }

      return buttons.map((btn, idx) => (
          typeof btn === 'number' ? (
              <button
                  key={idx}
                  onClick={() => handlePageChange(btn)}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-all border ${
                      currentPage === btn 
                          ? 'bg-[#ef4444] border-[#ef4444] text-white' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                  {btn}
              </button>
          ) : (
              <span key={idx} className="text-gray-500 px-1">...</span>
          )
      ));
  };

  return (
    <div className="w-full">
      <div className="relative max-w-3xl mx-auto mb-16">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative group z-20">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#ef4444] via-[#b91c1c] to-[#7f1d1d] rounded-2xl blur opacity-20 group-hover:opacity-40 group-focus-within:opacity-60 transition duration-500 ${searchQuery ? 'opacity-60' : ''}`} />
            <div className="relative flex items-center bg-[#0f172a]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="pl-6 pr-4 py-6 text-gray-400 group-focus-within:text-[#ef4444] transition-colors"><Search size={24} strokeWidth={2.5} /></div>
                <input type="text" placeholder={t('page.faq.search_placeholder')} value={searchQuery} onChange={handleSearchChange} className="w-full bg-transparent text-lg sm:text-xl text-white placeholder-gray-500 font-medium focus:outline-none h-16"/>
                <div className="pr-6 flex items-center gap-3">
                    <AnimatePresence>
                        {searchQuery && (
                            <motion.button initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={clearSearch} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all"><X size={18} /></motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
        <motion.div layout className="flex flex-wrap justify-center gap-2 mt-6 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <span className="text-gray-500 mr-1">{t('page.faq.popular')}</span>
            {['Account', 'Deposit', 'Leverage', 'Withdrawal'].map(tag => (
                <button key={tag} onClick={() => setQuickSearch(tag)} className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#ef4444]/20 border border-white/5 hover:border-[#ef4444]/30 text-gray-400 hover:text-[#ef4444] transition-all font-medium text-xs sm:text-sm">{tag}</button>
            ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {!searchQuery && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-10 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-2 min-w-max px-4 w-full sm:justify-center">
                {categories.map((category) => (
                    <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === category ? 'bg-[#ef4444] text-white border-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'}`}>{category}</button>
                ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {searchQuery && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-sm font-medium text-gray-400 text-center">
              {t('page.faq.found')} <span className="text-white font-bold">{filteredData.length}</span> {t('page.faq.results_for')} "<span className="text-white font-bold">{searchQuery}</span>"
          </motion.div>
      )}

      <div className="max-w-4xl mx-auto scroll-mt-32" ref={listTopRef}>
        <div className="space-y-4">
            <AnimatePresence mode="wait">
                <motion.div key={searchQuery ? 'search' : activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                    {filteredData.length > 0 ? (
                        <>
                            {paginatedData.map((item, index) => {
                                const uniqueKey = `${item.category}-${index}`;
                                const isOpen = expandedIndex === index;
                                return (
                                    <motion.div key={uniqueKey} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} className={`mb-4 rounded-2xl border transition-all duration-300 overflow-hidden relative ${isOpen ? 'bg-gradient-to-br from-white/10 to-transparent border-white/20 shadow-lg' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                                        <button onClick={() => toggleQuestion(index)} className="w-full flex items-start justify-between p-6 text-left relative z-10">
                                            <div className="flex flex-col gap-1 pr-4">
                                                {searchQuery && (<span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1 inline-block">{item.category}</span>)}
                                                <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-[#ef4444]' : 'text-white'}`}>{item.question}</span>
                                            </div>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 mt-1 ${isOpen ? 'bg-[#ef4444] border-[#ef4444] text-white rotate-180' : 'bg-transparent border-white/20 text-gray-400'}`}>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</div>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                                                    <div className="px-6 pb-8 pt-0 text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                                                        <div className="pt-4 text-sm sm:text-base whitespace-pre-wrap leading-7">{item.answer}</div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                            {totalPages > 1 && (
                                <div className="flex flex-wrap justify-center items-center gap-2 mt-8 py-4 border-t border-white/5">
                                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"><ChevronLeft size={20} /></button>
                                    {renderPaginationButtons()}
                                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"><ChevronRight size={20} /></button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 text-gray-500 bg-white/5 rounded-3xl border border-white/5 border-dashed">
                            <Search size={40} className="mx-auto mb-4 opacity-50" />
                            <p className="text-lg font-medium text-gray-400">{t('page.faq.no_results')}</p>
                            <p className="text-sm mt-2">{t('page.faq.try_adjusting')}</p>
                            <button onClick={clearSearch} className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-bold transition-colors">{t('page.faq.clear_search')}</button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
