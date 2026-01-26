
import React from 'react';
import { Handshake, Users, Globe, BarChart3, ShieldCheck, Zap, Layers, MousePointerClick } from 'lucide-react';
import { DetailedCategory } from '../data/content';

interface PartnersPageProps {
  content: DetailedCategory;
  t: (key: string) => string;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ content, t }) => {
    // Use the icon from content or default to Handshake
    const HeaderIcon = content.icon || Handshake;

    return (
        <div className="max-w-7xl mx-auto pb-20 px-4 sm:px-6">
            {/* Header Section */}
            <header className="mb-20 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#ef4444]/20 to-black text-[#ef4444] mb-8 border border-[#ef4444]/30 shadow-[0_0_50px_rgba(239,68,68,0.2)] backdrop-blur-sm">
                    <HeaderIcon size={48} strokeWidth={1.5} />
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
                    Empower Your Global Network with <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-red-400">MY INVESTMENT MARKETS</span>
                </h1>
                <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                    Leverage our institutional infrastructure to build your independent financial business. Transparent execution, professional tools, and a partnership built on integrity.
                </p>
            </header>

            {/* Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                
                {/* Card 1: Introducing Broker (Blue Theme) */}
                <div className="flex flex-col h-full group perspective-1000">
                    <div className="flex-1 bg-[#080808] border border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.1)] flex flex-col hover:-translate-y-2 transform-style-3d">
                        {/* Dynamic Backgrounds */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-500 pointer-events-none translate-x-1/3 -translate-y-1/3" />
                        
                        <div className="relative z-10 flex-1">
                            {/* Icon Badge */}
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:scale-105 transition-transform duration-500 backdrop-blur-md">
                                <Users size={36} strokeWidth={1.5} />
                            </div>
                            
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 leading-tight">
                                Introducing Broker:
                            </h2>
                            <p className="text-xl text-blue-400 font-medium mb-10 tracking-wide">The Strategic Partnership</p>

                            <div className="space-y-6">
                                <FeatureRow 
                                    icon={<BarChart3 size={20} />}
                                    title="Competitive Multi-Asset Rebates"
                                    desc="Optimized rebate structures tailored to your trading volume and performance."
                                    color="text-blue-400"
                                    bgColor="bg-blue-500/10"
                                    borderColor="border-blue-500/20"
                                />
                                <FeatureRow 
                                    icon={<Layers size={20} />}
                                    title="Tiered Reward Infrastructure"
                                    desc="Advanced multi-level commission systems to support the growth of your network."
                                    color="text-blue-400"
                                    bgColor="bg-blue-500/10"
                                    borderColor="border-blue-500/20"
                                />
                                <FeatureRow 
                                    icon={<ShieldCheck size={20} />}
                                    title="Institutional Execution (NHI)"
                                    desc="Protect your reputation with our No-Human-Intervention execution model."
                                    color="text-blue-400"
                                    bgColor="bg-blue-500/10"
                                    borderColor="border-blue-500/20"
                                />
                                <FeatureRow 
                                    icon={<Zap size={20} />}
                                    title="Dedicated IB Dashboard"
                                    desc="Access real-time statistics, volume analysis, and comprehensive reporting tools."
                                    color="text-blue-400"
                                    bgColor="bg-blue-500/10"
                                    borderColor="border-blue-500/20"
                                />
                            </div>
                        </div>
                        {/* Disclaimer inside IB Card for height balance */}
                        <div className="mt-10 pt-6 border-t border-white/5 relative z-10">
                            <p className="text-[11px] text-gray-500 italic leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                                All partnership terms are subject to the specific Partner Agreement. Past performance is not indicative of future results.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2: Affiliate Program (Red Theme) */}
                <div className="flex flex-col h-full group perspective-1000">
                    <div className="flex-1 bg-[#080808] border border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:border-[#ef4444]/40 hover:shadow-[0_0_60px_rgba(239,68,68,0.1)] flex flex-col hover:-translate-y-2 transform-style-3d">
                        {/* Dynamic Backgrounds */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ef4444]/10 rounded-full blur-[100px] group-hover:bg-[#ef4444]/20 transition-all duration-500 pointer-events-none translate-x-1/3 -translate-y-1/3" />
                        
                        <div className="relative z-10 flex-1">
                            {/* Icon Badge */}
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ef4444]/10 to-transparent border border-[#ef4444]/20 flex items-center justify-center text-[#ef4444] mb-8 shadow-[0_0_30px_rgba(239,68,68,0.1)] group-hover:scale-105 transition-transform duration-500 backdrop-blur-md">
                                <Globe size={36} strokeWidth={1.5} />
                            </div>
                            
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 leading-tight">
                                Affiliate Program:
                            </h2>
                            <p className="text-xl text-[#ef4444] font-medium mb-10 tracking-wide">Global Traffic Monetization</p>

                            <div className="space-y-6">
                                <FeatureRow 
                                    icon={<MousePointerClick size={20} />}
                                    title="Optimized CPA Models"
                                    desc="Flexible and highly rewarding CPA structures designed for maximum profitability."
                                    color="text-[#ef4444]"
                                    bgColor="bg-[#ef4444]/10"
                                    borderColor="border-[#ef4444]/20"
                                />
                                <FeatureRow 
                                    icon={<Zap size={20} />}
                                    title="Low Barrier to Entry"
                                    desc="Maximize conversion rates with our low $10 minimum deposit requirement for new clients."
                                    color="text-[#ef4444]"
                                    bgColor="bg-[#ef4444]/10"
                                    borderColor="border-[#ef4444]/20"
                                />
                                <FeatureRow 
                                    icon={<Layers size={20} />}
                                    title="Comprehensive Marketing Kit"
                                    desc="Instant access to high-performance banners, landing pages, and creative assets."
                                    color="text-[#ef4444]"
                                    bgColor="bg-[#ef4444]/10"
                                    borderColor="border-[#ef4444]/20"
                                />
                                <FeatureRow 
                                    icon={<BarChart3 size={20} />}
                                    title="Advanced Tracking"
                                    desc="Real-time monitoring of leads, conversions, and traffic sources via our advanced dashboard."
                                    color="text-[#ef4444]"
                                    bgColor="bg-[#ef4444]/10"
                                    borderColor="border-[#ef4444]/20"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

// Enhanced Helper Component for Features
const FeatureRow = ({ 
    icon, 
    title, 
    desc, 
    color, 
    bgColor, 
    borderColor 
}: { 
    icon: React.ReactNode, 
    title: string, 
    desc: string,
    color: string,
    bgColor: string,
    borderColor: string
}) => (
    <div className="flex gap-5 items-start p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5 group/row">
        <div className="shrink-0 mt-1">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${bgColor} ${borderColor} ${color} shadow-lg group-hover/row:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
        </div>
        <div>
            <h4 className="text-white font-display font-bold text-lg mb-1 tracking-tight group-hover/row:text-white transition-colors">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light group-hover/row:text-gray-300 transition-colors">{desc}</p>
        </div>
    </div>
);
