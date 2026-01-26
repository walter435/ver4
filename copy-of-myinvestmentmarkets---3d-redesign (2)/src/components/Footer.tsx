
import React from 'react';
import { Youtube, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const aboutText = t('footer.about');
  const [emailFull, addressText] = aboutText.includes('\n') 
    ? aboutText.split('\n') 
    : [aboutText, ''];

  const emailValue = emailFull.replace(/EMAIL:/i, '').replace(/SUPPORT:/i, '').replace(/고객 지원:/i, '').trim();

  const handleNavigation = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
      window.scrollTo(0, 0);
    }
  };

  const legalLinks = [
    { label: t('footer.legal.terms'), target: 'terms-conditions' },
    { label: t('footer.legal.risk'), target: 'risk-disclosure' },
    { label: t('footer.legal.complaint'), target: 'complaint-handling' },
    { label: t('footer.legal.order'), target: 'order-execution' },
    { label: t('footer.legal.kyc'), target: 'kyc-aml' }
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Main Content Area: Split into Left (Contact) and Right (Info) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16 relative">
            
            {/* Vertical Divider (Desktop Only) - Positioned at 30% width */}
            <div className="hidden lg:block absolute left-[32%] top-0 bottom-0 w-px bg-white/20" />

            {/* LEFT COLUMN: Redesigned Contact Information Cards */}
            <div className="lg:w-[32%] flex flex-col justify-between gap-6 pr-0 lg:pr-10">
                
                {/* 1. Brand Identity Card */}
                <div className="flex-1 p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 relative overflow-hidden group hover:border-[#ef4444]/30 transition-all duration-500">
                     {/* Ambient Glow */}
                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ef4444]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#ef4444]/20 transition-colors duration-500" />
                     
                     <div className="relative z-10 flex flex-col items-start h-full justify-center">
                         <div className="h-12 mb-6 flex items-center">
                             <img 
                                src="logo_mail_w.png" 
                                alt="My Investment Markets" 
                                className="h-full w-auto object-contain" 
                                onError={(e) => { 
                                    e.currentTarget.style.display = 'none'; 
                                    const span = document.createElement('span');
                                    span.innerText = 'MIM LOGO';
                                    span.className = 'text-2xl font-bold text-white tracking-widest';
                                    e.currentTarget.parentElement?.appendChild(span);
                                }} 
                             />
                         </div>
                         <p className="text-white font-bold text-xl tracking-wide mb-1">My Investment Markets. Ltd.</p>
                         <p className="text-gray-500 text-sm font-medium">{t('footer.tagline')}</p>
                     </div>
                </div>

                {/* 2. Contact Details Stack */}
                <div className="space-y-4">
                    {/* Email Card */}
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-[#ef4444]/10 flex items-center justify-center text-[#ef4444] group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">{t('footer.contact_support')}</span>
                        </div>
                        <a href={`mailto:${emailValue}`} className="text-white font-bold text-lg break-all hover:text-[#ef4444] transition-colors block">
                            {emailValue}
                        </a>
                    </div>

                    {/* Address Card */}
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group">
                         <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <MapPin size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">{t('footer.headquarters')}</span>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed font-medium whitespace-pre-line">
                            {addressText.replace('ALAMAT:', '').replace('주소:', '').replace('Address:', '').trim()}
                        </p>
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN: Jurisdiction, Links, Social */}
            <div className="lg:w-[68%] flex flex-col justify-between pl-0 lg:pl-10">
                {/* Jurisdiction Box */}
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 mb-12 hover:bg-white/[0.07] transition-colors">
                    <p className="text-sm text-gray-400 leading-7 text-justify font-medium whitespace-pre-line">
                        {t('footer.jurisdiction')}
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Links Row - Styled as Buttons */}
                    <div className="flex flex-wrap gap-3">
                         {/* Legal & Compliance Links */}
                        {legalLinks.map((item, i) => (
                            <button 
                                key={`c-${i}`} 
                                onClick={() => handleNavigation(item.target)}
                                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-gray-300 hover:text-white hover:bg-[#ef4444] hover:border-[#ef4444] transition-all duration-300 shadow-sm whitespace-nowrap"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {[
                          { Icon: Youtube, href: '#' },
                          { Icon: Linkedin, href: '#' },
                          { Icon: Facebook, href: '#' },
                          { Icon: (props: any) => <span className="font-bold text-xl leading-none">𝕏</span>, href: '#' } 
                        ].map((item, i) => {
                             const IconCmp = item.Icon as React.ElementType;
                             return (
                                <a key={i} href={item.href} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#ef4444] hover:border-[#ef4444] hover:text-white hover:scale-110 hover:-rotate-6 transition-all duration-300 group shadow-lg">
                                    {typeof item.Icon === 'function' ? <item.Icon size={24} fill="currentColor" className="stroke-0 group-hover:animate-pulse" /> : <IconCmp />}
                                </a>
                             )
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

        {/* Risk Warning Section */}
        <div className="mb-12 text-center sm:text-left">
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider opacity-70">{t('footer.risk_title')}</h4>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify whitespace-pre-line">
                {t('footer.risk')}
            </p>
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-left pt-8 border-t border-white/5">
            <p className="text-sm text-gray-600 font-bold tracking-wide">
                {t('footer.rights')}
            </p>
        </div>

      </div>
    </footer>
  );
};
