
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, MapPin, Clock, HelpCircle, AlertTriangle, Trash2, ExternalLink, ChevronRight, ShieldCheck, X, Globe } from 'lucide-react';
import { DetailedCategory } from '../data/content';

interface ContactPageProps {
  content: DetailedCategory;
  t: (key: string) => string;
  onNavigate?: (pageId: string) => void;
}

// --- 3D TILT CARD COMPONENT ---
const TiltCard: React.FC<{ children: React.ReactNode; className?: string; color?: string }> = ({ children, className = "", color = "#ef4444" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative group transition-transform duration-200 ease-out ${className}`}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl overflow-hidden"
      >
        {/* Specular Highlight / Shine */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([latestX, latestY]) =>
                `radial-gradient(circle at ${((latestX as number) + 0.5) * 100}% ${((latestY as number) + 0.5) * 100}%, ${color}20 0%, transparent 60%)`
            )
          }}
        />

        {/* Noise Texture Overaly */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

        {children}
      </div>

      {/* Shadow beneath the card */}
      <div className="absolute -inset-4 bg-black/40 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// --- CINEMATIC GRID BACKGROUND ---
const DigitalGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark core */}
      <div className="absolute inset-0 bg-black" />

      {/* The Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          perspective: '1000px',
          transform: 'rotateX(60deg) scale(2) translateY(-20%)',
          transformOrigin: 'top'
        }}
      />

      {/* Depth Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />

      {/* Moving Light Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          // SCALING UPDATE: Converted px to rem
          className="absolute w-[80rem] h-[80rem] bg-red-600/10 rounded-full blur-[150px]"
          animate={{
            x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export const ContactPage: React.FC<ContactPageProps> = ({ content, t, onNavigate }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">

      {/* BACKGROUND LAYER */}
      <DigitalGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">

        {/* HEADER - PERSPECTIVE FLOAT */}
        <motion.div
          className="text-center mb-32 perspective-1000"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-10 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
            <span className="text-[10px] md:text-xs font-black text-white/80 tracking-[0.4em] uppercase">Global Reach • Institutional Support</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-10 tracking-tighter leading-[0.9] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Contact Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#ef4444] to-red-800">Support Team</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed opacity-80 mt-6">
            Our dedicated professional support team is available to assist you with any inquiries regarding your trading account, technical issues, or partnership opportunities.
          </p>
        </motion.div>

        {/* 3D CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">

          <TiltCard color="#ef4444">
            <div className="p-12 md:p-16 h-full flex flex-col justify-between" style={{ transform: "translateZ(60px)" }}>
              <div>
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#ef4444] to-red-900 border border-white/20 flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
                  <Mail size={42} className="text-white" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[#ef4444] uppercase tracking-widest">Email Us</span>
                  <h3 className="text-4xl font-display font-bold text-white tracking-tight leading-none">Global Direct Support</h3>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/5">
                <a
                  href="mailto:support@myinvestmentmarkets.com"
                  className="text-2xl md:text-3xl font-display text-white hover:text-[#ef4444] transition-all duration-300 flex items-center justify-between group/email"
                >
                  <span>support@myinvestmentmarkets.com</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/email:bg-[#ef4444] group-hover/email:border-[#ef4444] transition-all">
                    <ChevronRight className="text-white" />
                  </div>
                </a>
                <div className="mt-6 flex items-center gap-4 text-gray-500 text-sm font-medium tracking-wide bg-white/5 w-fit px-4 py-2 rounded-lg border border-white/5">
                  <Clock size={16} className="text-[#ef4444]" />
                  MON - FRI / 24 HOURS
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard color="#3b82f6">
            <div className="p-12 md:p-16 h-full flex flex-col justify-between" style={{ transform: "translateZ(60px)" }}>
              <div>
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 border border-white/20 flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                  <MapPin size={42} className="text-white" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Registered Office</span>
                  <h3 className="text-4xl font-display font-bold text-white tracking-tight leading-none">Mauritius HQ</h3>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/5">
                <p className="text-2xl md:text-3xl font-display text-gray-300 leading-tight">
                  1st Floor River Court, <br />
                  6 St Denis Street, <br />
                  Port Louis 11328, Mauritius.
                </p>
                <div className="mt-6 flex items-center gap-4 text-gray-500 text-sm font-medium tracking-wide bg-white/5 w-fit px-4 py-2 rounded-lg border border-white/5">
                  <Globe size={16} className="text-blue-500" />
                  FSC LICENSED GB24203684
                </div>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* HELP & RESOURCES - PREMIUM BANNER */}
        <motion.div
          className="relative p-1 px-1 rounded-[3rem] bg-gradient-to-r from-emerald-500/20 via-white/10 to-transparent mb-40 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative z-10 p-12 md:p-16 rounded-[2.9rem] bg-black/80 backdrop-blur-3xl flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <HelpCircle size={48} className="text-emerald-500" />
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-4xl font-display font-bold text-white">Help & Resources</h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                For immediate answers to common questions, please refer to our Help Center or FAQ section. We strive to respond to all email inquiries within 24 business hours.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('customer-service')}
              className="flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-white/90 transition-colors shadow-2xl shadow-white/10"
            >
              FAQ
              <ArrowRightIcon />
            </motion.button>
          </div>
        </motion.div>

        {/* DIVIDER LINE - PREMIUM NEON */}
        <div className="relative w-full h-px mb-40 overflow-hidden">
          <div className="absolute inset-0 bg-white/5" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ef4444] to-transparent w-1/4"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ACCOUNT MANAGEMENT SECTION - SECURITY FOCUSED */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
              <ShieldCheck size={32} className="text-gray-400" />
            </div>
            <h2 className="text-5xl font-display font-bold text-white tracking-tight">Account Management</h2>
          </div>

          <div className="relative p-10 md:p-16 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-2xl">
            <p className="text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-4xl">
              We value your privacy and data security. If you wish to permanently close your trading account and erase your personal information, please utilize the request tool below.
            </p>

            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              <div className="shrink-0 w-full lg:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={() => setShowDeleteModal(true)}
                  className="w-full flex items-center justify-between gap-6 px-10 py-6 rounded-2xl bg-red-950/20 border border-red-900/40 text-red-500 font-bold text-xl hover:bg-red-900/30 transition-all duration-300 group shadow-2xl shadow-red-900/10"
                >
                  <div className="flex items-center gap-4">
                    <Trash2 size={24} />
                    Request Account Deletion
                  </div>
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>

              <div className="flex-1 flex gap-5 p-8 rounded-2xl bg-amber-950/10 border border-amber-900/20 relative overflow-hidden group">
                <AlertTriangle size={24} className="text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-3">Important Notice</h4>
                  <p className="text-base text-gray-400 leading-relaxed font-light">
                    Upon submitting an account deletion request, our administration team will review your account status (including remaining balance and open positions). Please note that once the process is complete, all personal data will be permanently erased in accordance with our Privacy Policy, and this action cannot be undone.
                  </p>
                </div>
                {/* Subtle blinker */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-amber-500/40 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* HIGH-END DELETION MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setShowDeleteModal(false)} />

            <motion.div
              className="relative bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 md:p-16 max-w-2xl w-full text-center shadow-[0_0_100px_rgba(0,0,0,1)]"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button
                onClick={() => setShowDeleteModal(false)}
                className="absolute top-8 right-8 text-gray-600 hover:text-white transition-colors p-2"
              >
                <X size={28} />
              </button>

              <div className="mb-10 inline-flex p-8 rounded-[2rem] bg-red-950/20 border border-red-900/40 text-red-500">
                <AlertTriangle size={56} strokeWidth={1.5} />
              </div>

              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Immediate Security Action
              </h3>

              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                You are about to request the permanent closure of your institutional trading account. This process is <span className="text-white font-bold underline decoration-[#ef4444]">irreversible</span>. All balances must be settled, and open positions closed prior to processing.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Dismiss Request
                </button>
                <button
                  onClick={() => {
                    alert('Institutional Deletion Request Logged. Security review in progress.');
                    setShowDeleteModal(false);
                  }}
                  className="flex-1 px-10 py-6 rounded-2xl bg-[#ef4444] text-white font-bold text-lg hover:bg-red-700 shadow-[0_10px_40px_rgba(239,68,68,0.3)] transition-all active:scale-95"
                >
                  Confirm Action
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper Icon
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
