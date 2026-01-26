
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Activity, Globe, Cpu, BarChart3, Lock, Zap, ShieldCheck, Users, FileText, Phone, Briefcase, Headphones, Handshake, GraduationCap, CreditCard, Check, Monitor, Smartphone, Globe2 } from 'lucide-react';
import { NavLink } from '../locales/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { languages, Language } from '../utils/translations';

interface NavbarProps {
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Hook for translations
  const { language, setLanguage, t } = useLanguage();

  // Reconstruct links array inside component to use 't'
  // ORDER: COMPANY -> MARKET -> PLATFORM -> SUPPORT
  const links: NavLink[] = [
    {
      label: t('nav.company'),
      href: '#company',
      children: [
        { label: t('nav.about'), href: 'about', description: 'My Investment Markets', icon: Users },
        { label: t('nav.accounts'), href: 'accounts', description: 'Standard, Exclusive & Swap-Free', icon: CreditCard },
      ]
    },
    {
      label: t('nav.markets'), // Now "Market"
      href: '#markets',
      children: [
        { label: t('nav.forex'), href: 'forex', description: 'Major, minor & exotic pairs', icon: Globe },
        { label: t('nav.indices'), href: 'indices', description: 'Trade global market movements', icon: Activity },
        { label: t('nav.commodities'), href: 'commodities', description: 'Gold, Silver & Oil', icon: BarChart3 },
        { label: t('nav.crypto'), href: 'crypto', description: '24/7 Digital Asset Trading', icon: Lock },
        { label: t('nav.stocks'), href: 'stocks', description: 'Top global companies', icon: Zap },
      ]
    },
    {
      label: t('nav.trading'), // Now "Platform"
      href: '#trading',
      children: [
        { label: t('nav.mim_mt5'), href: 'platform-mt5', description: t('nav.mim_mt5_desc'), icon: Monitor },
        { label: t('nav.mi_markets'), href: 'platform-web', description: t('nav.mi_markets_desc'), icon: Globe },
        { label: t('nav.mi_markets_app'), href: 'platform-app', description: t('nav.mi_markets_app_desc'), icon: Smartphone },
      ]
    },
    {
      label: t('nav.support'),
      href: '#support',
      children: [
        { label: t('nav.customerservice'), href: 'customer-service', description: 'FAQ & Help Center', icon: Headphones },
        { label: t('nav.legal'), href: 'legal-documents', description: 'Terms & Regulation', icon: FileText },
        { label: t('nav.partners'), href: 'ib-affiliates', description: 'Partnership programs', icon: Handshake },
        { label: t('nav.learning'), href: 'learning-hub', description: 'Education & Guides', icon: GraduationCap },
        { label: t('nav.payments'), href: 'payment-methods', description: 'Deposits & Withdrawals', icon: CreditCard },
        { label: t('nav.contact'), href: 'contact-us', description: 'Get in touch', icon: Phone },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    if (!href.startsWith('#')) {
      onNavigate(href);
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    setIsLangMenuOpen(false);
  }

  // Determine if the current dropdown should use the full-width strip layout (flex-nowrap)
  const isMegaStrip = activeDropdown === t('nav.support') || activeDropdown === t('nav.markets');

  return (
    <nav
      onMouseLeave={() => { setActiveDropdown(null); setIsLangMenuOpen(false); }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || activeDropdown
        ? 'bg-black/90 backdrop-blur-xl border-b border-brand-silver/10'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 relative z-50">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
          {/* Logo - Image Only */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center cursor-pointer relative z-50"
          >
            <img
              src="logo_mail_w.png"
              alt="My Investment Markets"
              className="h-10 sm:h-14 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'; // Hide broken image
                // Fallback text if image fails to load
                e.currentTarget.parentElement!.innerText = 'MIM LOGO';
              }}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => { setActiveDropdown(link.children ? link.label : null); setIsLangMenuOpen(false); }}
              >
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm font-bold transition-colors flex items-center gap-1 uppercase tracking-wide ${activeDropdown === link.label ? 'text-[#ef4444]' : 'text-brand-silver hover:text-white'
                    }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </button>

                {/* Underline Indicator */}
                {activeDropdown === link.label && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Redesigned Language Selector */}
          <div className="hidden md:flex items-center relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`
                    flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 group
                    ${isLangMenuOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}
                `}
            >
              <Globe2 size={18} className={`transition-colors ${isLangMenuOpen ? 'text-[#ef4444]' : 'text-brand-platinum group-hover:text-white'}`} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">{language.toUpperCase()}</span>
              <ChevronDown size={14} className={`text-gray-500 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180 text-[#ef4444]' : 'group-hover:text-white'}`} />
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  // SCALING UPDATE: Converted px to rem
                  className="absolute top-14 right-0 w-[30rem] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 py-3 backdrop-blur-xl"
                >
                  <div className="px-4 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t('nav.select_language') || 'Select Language'}</div>
                  <div className="max-h-[40rem] overflow-y-auto custom-scrollbar px-2">
                    <div className="grid grid-cols-2 gap-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left group ${language === lang.code ? 'bg-white/[0.08]' : ''}`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="text-lg filter drop-shadow-sm shrink-0">{lang.flag}</span>
                            <span className={`text-xs font-medium transition-colors truncate ${language === lang.code ? 'text-[#ef4444] font-bold' : 'text-gray-300 group-hover:text-white'}`}>
                              {lang.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Central Glowing Line Divider */}
        {/* Distinguishes navbar from hero section when transparent */}
        <div className={`absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none transition-opacity duration-500 ${isScrolled || activeDropdown ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent shadow-[0_0_20px_rgba(239,68,68,1)]" />
        </div>
      </div>

      {/* Redesigned Premium Mega Menu Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25, ease: "circOut" }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-3xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 overflow-hidden"
          >
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ef4444]/50 to-transparent" />

            <div className="container mx-auto px-6 py-10">
              {/* Centered Flex Layout for consistent balance across all categories */}
              <div className={`flex flex-wrap justify-center gap-4 ${isMegaStrip ? 'lg:flex-nowrap' : ''}`}>
                {links.find(l => l.label === activeDropdown)?.children?.map((child, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleLinkClick(child.href)}
                    // SCALING UPDATE: Converted fixed px widths to rem
                    className={`
                      group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-[#ef4444]/[0.03] hover:border-[#ef4444]/30 transition-all duration-300 cursor-pointer overflow-hidden
                      w-full sm:w-[calc(50%-1rem)]
                      ${isMegaStrip
                        ? 'lg:w-auto lg:flex-1 min-w-[14rem] max-w-[24rem]'
                        : 'lg:w-[24rem] xl:w-[28rem]'}
                    `}
                  >
                    {/* Subtle Hover Glow Effect Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex items-start gap-4 relative z-10">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/[0.08] to-transparent border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:text-[#ef4444] group-hover:border-[#ef4444]/30 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300 shrink-0">
                        {child.icon ? <child.icon size={22} strokeWidth={1.5} /> : <Activity size={22} />}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white font-display font-bold text-sm tracking-wide group-hover:text-[#ef4444] transition-colors">
                            {child.label}
                          </span>
                          {/* Arrow appears on hover */}
                          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ef4444] text-lg leading-none">
                            &rarr;
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                          {child.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        // SCALING UPDATE: Converted px to rem
        <div className="fixed inset-0 top-[8rem] bg-black z-40 p-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {/* Mobile Language Selector */}
            <div className="border-b border-white/10 pb-6">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Select Language</div>
              <div className="grid grid-cols-2 gap-3">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${language === lang.code ? 'border-[#ef4444] bg-[#ef4444]/10' : 'border-white/10 bg-white/5'}`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-xs font-bold text-white truncate">{lang.name.split('(')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {links.map((link) => (
              <div key={link.label}>
                <div className="text-xl font-bold text-white mb-4 text-[#ef4444] font-display">{link.label}</div>
                {link.children && (
                  <div className="grid gap-3 pl-2">
                    {link.children.map(child => (
                      <button
                        key={child.label}
                        onClick={() => handleLinkClick(child.href)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 active:bg-white/10"
                      >
                        {child.icon && <child.icon size={18} className="text-gray-400" />}
                        <div className="text-left">
                          <div className="text-sm font-bold text-white">{child.label}</div>
                          <div className="text-[10px] text-gray-500">{child.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full py-4 rounded-xl bg-[#dc2626] text-white font-bold text-lg mt-4 shadow-lg shadow-red-900/20">
              Login to Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
