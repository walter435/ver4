
import React from 'react';
import { motion } from 'framer-motion';

// --- BRAND LOGO SVGS ---
const Logos = {
  MPesa: () => (
    <svg viewBox="0 0 100 32" className="w-full h-full" fill="currentColor">
       <path d="M12,4 L12,28 M4,4 L4,28 M4,16 L12,16 M20,28 L20,18 C20,14 28,14 28,18 L28,28 M36,4 L36,28 M36,4 C48,4 48,16 36,16" stroke="currentColor" strokeWidth="4" fill="none" />
       <rect x="52" y="10" width="40" height="12" rx="2" fill="#ef4444" />
       <text x="56" y="20" fontSize="10" fill="white" fontWeight="bold">PESA</text>
    </svg>
  ),
  Vodafone: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="#E60000">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50,20 C60,20 70,30 70,50 C70,70 60,80 50,80 C40,80 30,70 30,50" fill="currentColor" />
      <circle cx="50" cy="50" r="10" fill="white" />
    </svg>
  ),
  Mastercard: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <circle cx="35" cy="30" r="25" fill="#EB001B" opacity="0.9" />
      <circle cx="65" cy="30" r="25" fill="#F79E1B" opacity="0.9" />
      <path d="M50,12 A25,25 0 0,1 50,48 A25,25 0 0,1 50,12" fill="#FF5F00" />
    </svg>
  ),
  Maestro: () => (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <circle cx="35" cy="30" r="25" fill="#EB001B" />
      <circle cx="65" cy="30" r="25" fill="#00A2E0" opacity="0.9" />
      <path d="M50,12 A25,25 0 0,1 50,48 A25,25 0 0,1 50,12" fill="#7D517B" />
    </svg>
  ),
  Visa: () => (
    <svg viewBox="0 0 100 32" className="w-full h-full" fill="currentColor">
      <path d="M12,4 L4,28 L10,28 L12,20 L24,20 L26,28 L32,28 L20,4 Z M14,16 L18,8 L22,16 Z M40,4 L46,4 L46,28 L40,28 Z M54,22 C56,22 58,21 58,20 C58,18 54,18 54,16 C54,12 64,12 64,16 L64,12 C60,12 56,12 52,14 C50,16 52,22 56,24 C60,26 62,28 58,28 C54,28 52,26 52,26 L50,30 C50,30 54,32 60,32 C66,32 70,26 66,20" />
      <path d="M80,4 L72,28 L78,28 L86,4 Z" />
    </svg>
  ),
  Airtm: () => (
    <svg viewBox="0 0 100 32" className="w-full h-full" fill="currentColor">
       <path d="M10,28 L20,4 L30,28 M14,20 L26,20" stroke="currentColor" strokeWidth="3" fill="none"/>
       <path d="M36,4 L36,28" stroke="currentColor" strokeWidth="3" />
       <path d="M46,4 L46,28 M46,16 L56,16 C60,16 60,4 54,4 L46,4 M56,16 L62,28" stroke="currentColor" strokeWidth="3" fill="none"/>
       <text x="70" y="22" fontWeight="bold" fontSize="18" fill="currentColor">tm</text>
    </svg>
  ),
  Pix: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="#32BCAD">
       <rect x="20" y="20" width="25" height="25" rx="5" transform="rotate(45 32.5 32.5)" />
       <rect x="55" y="20" width="25" height="25" rx="5" transform="rotate(45 67.5 32.5)" />
       <rect x="20" y="55" width="25" height="25" rx="5" transform="rotate(45 32.5 67.5)" />
       <rect x="55" y="55" width="25" height="25" rx="5" transform="rotate(45 67.5 67.5)" />
    </svg>
  ),
  Help2Pay: () => (
    <svg viewBox="0 0 100 32" className="w-full h-full" fill="currentColor">
       <text x="0" y="24" fontSize="24" fontWeight="bold" fill="currentColor">help</text>
       <text x="50" y="24" fontSize="24" fontWeight="bold" fill="#84cc16">2</text>
       <text x="65" y="24" fontSize="24" fontWeight="bold" fill="currentColor">pay</text>
    </svg>
  ),
  Zing: () => (
    <svg viewBox="0 0 100 32" className="w-full h-full" fill="currentColor">
       <circle cx="10" cy="16" r="4" fill="#2dd4bf" />
       <circle cx="25" cy="8" r="4" fill="#2dd4bf" />
       <circle cx="25" cy="24" r="4" fill="#2dd4bf" />
       <line x1="10" y1="16" x2="25" y2="8" stroke="#2dd4bf" strokeWidth="2" />
       <line x1="10" y1="16" x2="25" y2="24" stroke="#2dd4bf" strokeWidth="2" />
       <text x="35" y="24" fontSize="20" fontWeight="bold">Zing</text>
    </svg>
  )
};

const PAYMENTS = [
  { name: "M-Pesa", Logo: Logos.MPesa, color: "text-green-500", bg: "bg-white" },
  { name: "Vodafone", Logo: Logos.Vodafone, color: "text-red-600", bg: "bg-white" },
  { name: "Mastercard", Logo: Logos.Mastercard, color: "text-white", bg: "bg-gray-900" },
  { name: "Maestro", Logo: Logos.Maestro, color: "text-white", bg: "bg-gray-900" },
  { name: "VISA", Logo: Logos.Visa, color: "text-blue-900", bg: "bg-white" },
  { name: "Airtm", Logo: Logos.Airtm, color: "text-white", bg: "bg-black" },
  { name: "Help2Pay", Logo: Logos.Help2Pay, color: "text-blue-900", bg: "bg-white" },
  { name: "Pix", Logo: Logos.Pix, color: "text-[#32BCAD]", bg: "bg-white" },
  { name: "Zing", Logo: Logos.Zing, color: "text-white", bg: "bg-gray-800" },
];

export const PaymentTicker: React.FC = () => {
  return (
    <section className="bg-[#050505] py-16 border-t border-white/5 relative overflow-hidden perspective-1000">
        {/* Shadow overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        {/* Background Grid */}
        {/* SCALING UPDATE: Converted px to rem */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

        <div className="flex overflow-visible items-center justify-center">
             {/* Infinite Ticker Wrapper */}
             <motion.div 
               className="flex gap-12 px-12"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               // Pause smoothly on hover
               whileHover={{ animationPlayState: "paused" }}
             >
                 {/* Triplicate list for seamless loop */}
                 {[...PAYMENTS, ...PAYMENTS, ...PAYMENTS].map((pay, idx) => (
                     <PaymentCard key={idx} data={pay} />
                 ))}
             </motion.div>
        </div>
    </section>
  );
};

const PaymentCard: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div className="relative group cursor-pointer perspective-1000 h-24 flex items-center">
             <motion.div 
               initial={{ rotateX: 0, y: 0, scale: 1 }}
               whileHover={{ 
                   y: -30, 
                   rotateX: 25, 
                   scale: 1.4,
                   zIndex: 50,
                   transition: { type: "spring", stiffness: 300, damping: 15 }
               }}
               className={`
                   w-48 h-20 flex items-center justify-center
                   ${data.bg} rounded-xl 
                   shadow-lg border border-white/10
                   transform-style-3d relative
               `}
             >
                 {/* 3D Depth Sides (Simulated) */}
                 <div className="absolute inset-0 rounded-xl bg-gray-500/20 transform translate-z-[-10px]" />
                 
                 {/* Reflection */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-20 mix-blend-overlay" />

                 <div className={`p-4 w-full h-full flex items-center justify-center ${data.color} z-10`}>
                    <data.Logo />
                 </div>
                 
                 {/* Bottom Shadow on Pop */}
                 <motion.div 
                    className="absolute -bottom-10 left-0 right-0 h-4 bg-black/50 blur-xl rounded-[50%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                 />
             </motion.div>
        </div>
    )
}
