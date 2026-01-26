
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, MessageCircle, MousePointerClick, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
  onNavigate?: (id: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ onBack, onNavigate }) => {
    const cards = [
        { 
            title: "Terms & Conditions", 
            desc: "Agreement terms for signing up and using MIM services.", 
            icon: FileText, 
            target: 'terms-conditions',
            image: "https://images.unsplash.com/photo-1635776063043-902aa41f9d2a?q=80&w=1000&auto=format&fit=crop" // 3D Dark Shapes
        },
        { 
            title: "Risk Disclosure", 
            desc: "Guideline for understanding trading risks on MIM.", 
            icon: AlertTriangle, 
            target: 'risk-disclosure',
            image: "https://images.unsplash.com/photo-1614850523018-c314ccbbef04?q=80&w=1000&auto=format&fit=crop" // 3D Red Fluid Abstract
        },
        { 
            title: "Complaint Handling", 
            desc: "Trading rules applicable on all MIM trading platforms.", 
            icon: MessageCircle, 
            target: 'complaint-handling',
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" // 3D Dark Liquid Flow
        },
        { 
            title: "Order Execution", 
            desc: "Terms for managing and transferring funds within MIM", 
            icon: MousePointerClick, 
            target: 'order-execution',
            image: "https://images.unsplash.com/photo-1639322537228-ad71131b09b9?q=80&w=1000&auto=format&fit=crop" // 3D Abstract Cubes
        },
        { 
            title: "KYC/AML", 
            desc: "Policies for the usage and protection of your information.", 
            icon: ShieldCheck, 
            target: 'kyc-aml',
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop" // 3D Tech Nodes
        }
    ];

    const additionalLinks = [
        { label: "Disaster Recovery Plan", target: "disaster-recovery" },
        { label: "Privacy Policy", target: "privacy-policy" },
        { label: "Risk Management", target: "risk-management" },
        { label: "Client Agreement FINAL", target: "client-agreement" },
        { label: "Policies on Churning", target: "churning-policy" }
    ];

    return (
        <div className="max-w-7xl mx-auto pb-20">
            <header className="mb-20 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
                    <div className="w-20 h-20 mx-auto bg-[#ef4444]/10 text-[#ef4444] rounded-3xl flex items-center justify-center mb-8 border border-[#ef4444]/20 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
                        <FileText size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">Legal Documents</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">Transparency & Compliance</p>
                </motion.div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => onNavigate && onNavigate(card.target)}
                        // SCALING UPDATE: Converted min-h px to rem
                        className="group relative bg-[#080808] border border-white/5 hover:border-[#ef4444]/30 rounded-[2.5rem] p-8 md:p-10 cursor-pointer transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[42rem] shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Background Image with Blur and Overlay */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img 
                                src={card.image} 
                                alt={card.title} 
                                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110 blur-[2px] grayscale-[20%]" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/80 to-[#080808]/50" />
                        </div>

                        {/* Ambient Background Glow (Subtle) */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ef4444]/10 rounded-full blur-[80px] group-hover:bg-[#ef4444]/20 transition-colors duration-500 pointer-events-none z-0" />

                        {/* Top Section */}
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-[#ef4444] group-hover:border-[#ef4444] group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-md">
                                <card.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white mb-4 leading-tight group-hover:text-[#ef4444] transition-colors duration-300 drop-shadow-md">{card.title}</h3>
                            <p className="text-gray-300 text-lg font-light leading-relaxed group-hover:text-white transition-colors drop-shadow-sm">{card.desc}</p>
                        </div>

                        {/* Bottom Section */}
                        <div className="relative z-10 flex items-end justify-between mt-auto pt-8">
                             <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent mr-6 group-hover:from-[#ef4444]/50 transition-colors duration-500" />
                             <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 group-hover:border-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition-all duration-300 group-hover:scale-110 backdrop-blur-md">
                                <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                             </div>
                        </div>
                    </motion.div>
                ))}

                {/* Additional Terms Card - List Style */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.5 }} 
                    // SCALING UPDATE: Converted min-h px to rem
                    className="group relative bg-[#080808] border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[42rem] shadow-lg overflow-hidden"
                >
                    {/* Background Image for Additional Terms */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
                            alt="Background" 
                            className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 blur-[2px]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#080808]/95 to-[#080808]/70" />
                    </div>
                    
                    <div className="relative z-10 mb-8">
                        <h3 className="text-3xl font-display font-bold text-white mb-3 drop-shadow-md">Additional terms</h3>
                        <p className="text-gray-300 text-base font-light">Policies applicable to specific accounts.</p>
                    </div>

                    <div className="relative z-10 flex-1 overflow-y-auto pr-2 custom-scrollbar -mr-2">
                        <ul className="space-y-3">
                            {additionalLinks.map((link, i) => (
                                <li key={i}>
                                    <button 
                                        onClick={() => onNavigate && onNavigate(link.target)} 
                                        className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#ef4444]/30 transition-all duration-300 group/item backdrop-blur-sm"
                                    >
                                        <span className="text-sm text-gray-300 group-hover/item:text-white font-bold tracking-wide text-left">{link.label}</span>
                                        <ChevronDown size={16} className="-rotate-90 text-gray-500 group-hover/item:text-[#ef4444] group-hover/item:translate-x-1 transition-all duration-300" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
