
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useTime } from 'framer-motion';
import { BookOpen, Lightbulb, Target, Box, Plus, Minus, ArrowRight } from 'lucide-react';
import { DetailedCategory, TableData } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

// --- HELPER: Render Formatted Text ---
// Updated to accept the `t` function to translate keys inside the text logic
const renderFormattedText = (textKeyOrString: string, t: (key: string) => string) => {
  if (!textKeyOrString) return null;
  // Translate the key first. If it's a raw string (no key found), t returns it as is.
  const text = t(textKeyOrString);
  
  const lines = text.split("\n");

  return lines.map((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      const content = trimmed.substring(2, trimmed.length - 2);
      return <h4 key={index} className="text-white font-display font-bold text-lg md:text-xl mt-6 mb-3 block border-l-4 border-[#ef4444] pl-3">{content}</h4>;
    }
    if (trimmed.includes(" : ")) {
      const [key, val] = trimmed.split(" : ");
      return (
        <div key={index} className="mb-2 pl-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
          <span className="text-white font-bold whitespace-nowrap min-w-[120px] relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#ef4444]">{key}</span>
          <span className="text-gray-400 text-sm leading-relaxed">{val}</span>
        </div>
      );
    }
    if (trimmed === "") return <div key={index} className="h-2" />;
    return <p key={index} className="mb-1 text-gray-400 leading-relaxed text-base font-light">{line}</p>;
  });
};

// --- SUB-COMPONENTS ---

const DetailCard: React.FC<{ content: string | TableData; index: number; Icon: any; t: any }> = ({ content, index, Icon, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let isTable = false;
  let header = null;
  let bodyText = "";
  let tableData: TableData | null = null;
  let isLong = false;

  if (typeof content === "string") {
    // If it's a string, it might be a translation key. Translate it first to check length/structure.
    const translatedContent = t(content);
    const splitIndex = translatedContent.indexOf("\n");
    if (splitIndex !== -1) {
      header = translatedContent.substring(0, splitIndex);
      if (header.startsWith("**") && header.endsWith("**")) {
        header = header.substring(2, header.length - 2);
      }
      bodyText = translatedContent.substring(splitIndex + 1);
    } else {
      bodyText = translatedContent;
    }
    isLong = bodyText.length > 350;
  } else {
    isTable = true;
    tableData = content;
    // Translate table title/intro
    header = t(tableData.title);
    isLong = tableData.rows.length > 5;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-[#ef4444]/50 transition-all duration-500">
      <div className="relative bg-[#0a0a0a] rounded-[23px] p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/5 rounded-bl-full blur-2xl pointer-events-none group-hover:bg-[#ef4444]/10 transition-colors" />
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ef4444] group-hover:scale-110 group-hover:bg-[#ef4444] group-hover:text-white transition-all duration-300">
              <Icon size={24} />
            </div>
          </div>
          <div className="space-y-3 flex-1 overflow-hidden">
            {header && (<h3 className="text-xl font-display font-bold text-white group-hover:text-[#ef4444] transition-colors">{header}</h3>)}
            <div className="relative">
              {!isTable ? (
                <div className={`text-gray-400 leading-relaxed text-base transition-all duration-500 ${!isExpanded && isLong ? "max-h-[150px] overflow-hidden mask-linear-fade" : ""}`} style={!isExpanded && isLong ? { WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" } : {}}>
                  {/* Pass the original key (content as string) to renderFormattedText */}
                  {renderFormattedText(content as string, t)}
                </div>
              ) : (
                <div className={`transition-all duration-500 ${!isExpanded && isLong ? "max-h-[300px] overflow-hidden" : ""}`} style={!isExpanded && isLong ? { WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" } : {}}>
                  {tableData?.intro && (<p className="text-gray-400 mb-4 text-sm leading-relaxed">{t(tableData.intro)}</p>)}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          {tableData?.headers.map((h, i) => (<th key={i} className="bg-white/5 p-3 text-xs font-bold text-gray-300 uppercase tracking-wider border-b border-white/10 whitespace-nowrap">{t(h)}</th>))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData?.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                            {row.map((cell, cIdx) => (<td key={cIdx} className={`p-3 text-sm font-mono ${cIdx === 1 ? "whitespace-nowrap font-bold text-white" : "whitespace-pre-line text-gray-400"}`}>{cell}</td>))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {isLong && (
                <div className={`flex justify-center mt-4 ${isExpanded ? "" : "absolute bottom-0 left-0 right-0 pt-10"}`}>
                  <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:text-[#ef4444] transition-all relative z-10">
                    {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                    {isExpanded ? t('market.show_less') : (isTable ? t('market.show_table') : t('market.show_full'))}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Intro3DCard = ({ text, Icon, t }: { text: string; Icon: any; t: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 }); const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]); const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  // Translate the text key first
  const translatedText = t(text);
  let header = ""; let bodyText = translatedText;
  
  const splitIndex = translatedText.indexOf("\n");
  if (splitIndex !== -1) {
    header = translatedText.substring(0, splitIndex);
    if (header.startsWith("**") && header.endsWith("**")) { header = header.substring(2, header.length - 2); }
    bodyText = translatedText.substring(splitIndex + 1);
  }
  const isLong = bodyText.length > 300;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5); y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div ref={ref} style={{ perspective: 1000 }} onMouseMove={handleMouseMove} onMouseLeave={() => {x.set(0); y.set(0);}} className="w-full cursor-default" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative group rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-black border border-white/10 p-[1px] shadow-2xl">
        <div className="absolute inset-0 bg-red-600 rounded-3xl blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ transform: "translateZ(-30px)" }} />
        <div className="relative rounded-[23px] bg-[#0a0a0a] overflow-hidden p-6 md:p-8 h-auto">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />
          <div className="absolute -right-10 -top-10 text-[#ef4444]/5 group-hover:text-[#ef4444]/10 transition-colors duration-700 pointer-events-none" style={{ transform: "translateZ(20px)" }}><Icon size={250} strokeWidth={0.5} /></div>
          <div className="relative z-10 flex flex-col gap-4" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ef4444] to-red-900 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-red-400/20"><Box size={20} className="text-white" /></div>
                <div><div className="text-[9px] font-bold text-red-500 uppercase tracking-[0.2em] mb-0.5">{t('market.introduction')}</div><h3 className="text-lg font-bold text-white tracking-wide">{header || "Market Overview"}</h3></div>
              </div>
              <div className="flex gap-1.5 opacity-50"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /><div className="w-1.5 h-1.5 rounded-full bg-white/20" /><div className="w-1.5 h-1.5 rounded-full bg-white/20" /></div>
            </div>
            <div className="relative">
              <div className={`text-gray-400 font-sans font-light leading-relaxed tracking-wide transition-all duration-500 ${!isExpanded && isLong ? "max-h-[180px] overflow-hidden mask-linear-fade" : ""}`} style={!isExpanded && isLong ? { WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" } : {}}>{renderFormattedText(text, t)}</div>
              {isLong && (
                <div className={`flex justify-center mt-4 ${isExpanded ? "" : "absolute bottom-0 left-0 right-0 pt-6"}`}>
                  <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all relative z-10">{isExpanded ? <Minus size={12} /> : <Plus size={12} />}{isExpanded ? t('market.show_less') : t('market.show_full')}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- VISUAL COMPONENTS ---
const VisualForex = () => {
  const time = useTime();
  const rotateY1 = useTransform(time, [0, 20000], [0, 360]); const rotateY2 = useTransform(time, [0, 25000], [0, -360]); const rotateX = useTransform(time, [0, 30000], [0, 360]);
  return (<div className="relative w-[320px] h-[320px] flex items-center justify-center transform-style-3d perspective-1000"><div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" /><div className="relative w-32 h-32 transform-style-3d animate-float"><div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900 via-indigo-900 to-black shadow-[0_0_60px_rgba(37,99,235,0.6)] opacity-90 border border-blue-500/30" /><div className="absolute inset-0 rounded-full border border-blue-400/20 opacity-60 animate-[spin_10s_linear_infinite]" style={{ borderStyle: "dotted" }} /><div className="absolute inset-0 rounded-full border border-indigo-400/20 opacity-60 animate-[spin_15s_linear_infinite_reverse]" style={{ transform: "rotateX(60deg)" }} /><div className="absolute inset-0 rounded-full border border-purple-400/20 opacity-60 animate-[spin_20s_linear_infinite]" style={{ transform: "rotateY(60deg)" }} /></div><motion.div style={{ rotateY: rotateY1, rotateX: 60, rotateZ: 15 }} className="absolute w-[140%] h-[140%] rounded-full border border-blue-400/40 transform-style-3d shadow-[0_0_20px_rgba(59,130,246,0.2)]"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black/80 border border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)] transform-style-3d backface-hidden"><span className="text-blue-400 font-bold text-2xl transform -rotate-x-60 -rotate-z-15">€</span></div></motion.div><motion.div style={{ rotateY: rotateY2, rotateX: -60, rotateZ: -15 }} className="absolute w-[180%] h-[180%] rounded-full border border-green-400/40 transform-style-3d border-dashed shadow-[0_0_20px_rgba(34,197,94,0.2)]"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-black/80 border border-green-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.6)] transform-style-3d backface-hidden"><span className="text-green-400 font-bold text-2xl transform rotate-x-60 rotate-z-15">$</span></div></motion.div><motion.div style={{ rotateX: rotateX, rotateY: 30 }} className="absolute w-[220%] h-[220%] rounded-full border border-purple-400/30 transform-style-3d border-dotted"><div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border border-purple-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.6)] transform-style-3d backface-hidden"><span className="text-purple-400 font-bold text-xl transform -rotate-y-30 -rotate-x-90">£</span></div><div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border border-red-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.6)] transform-style-3d backface-hidden"><span className="text-red-400 font-bold text-xl transform -rotate-y-30 -rotate-x-90">¥</span></div></motion.div></div>);
};
const VisualIndices = () => {
  const time = useTime();
  const rotateY1 = useTransform(time, [0, 20000], [0, 360]); const rotateY2 = useTransform(time, [0, 25000], [0, -360]); const rotateX = useTransform(time, [0, 30000], [0, 360]);
  return (<div className="relative w-[320px] h-[320px] flex items-center justify-center transform-style-3d perspective-1000"><div className="absolute inset-0 bg-cyan-600/10 blur-[80px] rounded-full pointer-events-none" /><div className="relative w-32 h-32 transform-style-3d animate-float"><div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-900 via-blue-900 to-black shadow-[0_0_60px_rgba(6,182,212,0.6)] opacity-90 border border-cyan-500/30" /><div className="absolute inset-0 rounded-full border border-cyan-400/20 opacity-60 animate-[spin_10s_linear_infinite]" style={{ borderStyle: "dotted" }} /><div className="absolute inset-0 rounded-full border border-blue-400/20 opacity-60 animate-[spin_15s_linear_infinite_reverse]" style={{ transform: "rotateX(60deg)" }} /><div className="absolute inset-0 rounded-full border border-indigo-400/20 opacity-60 animate-[spin_20s_linear_infinite]" style={{ transform: "rotateY(60deg)" }} /></div><motion.div style={{ rotateY: rotateY1, rotateX: 60, rotateZ: 15 }} className="absolute w-[140%] h-[140%] rounded-full border border-blue-400/40 transform-style-3d shadow-[0_0_20px_rgba(59,130,246,0.2)]"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-blue-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)] transform-style-3d backface-hidden"><span className="text-blue-400 font-bold text-xs transform -rotate-x-60 -rotate-z-15">US500</span></div></motion.div><motion.div style={{ rotateY: rotateY2, rotateX: -60, rotateZ: -15 }} className="absolute w-[180%] h-[180%] rounded-full border border-cyan-400/40 transform-style-3d border-dashed shadow-[0_0_20px_rgba(34,211,238,0.2)]"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-10 bg-black/80 border border-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.6)] transform-style-3d backface-hidden"><span className="text-cyan-400 font-bold text-xs transform rotate-x-60 rotate-z-15">NAS100</span></div></motion.div><motion.div style={{ rotateX: rotateX, rotateY: 30 }} className="absolute w-[220%] h-[220%] rounded-full border border-orange-400/30 transform-style-3d border-dotted"><div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-black/80 border border-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.6)] transform-style-3d backface-hidden"><span className="text-orange-400 font-bold text-xs transform -rotate-y-30 -rotate-x-90">US30</span></div><div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-black/80 border border-red-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.6)] transform-style-3d backface-hidden"><span className="text-red-400 font-bold text-xs transform -rotate-y-30 -rotate-x-90">DE40</span></div></motion.div></div>);
};
const VisualCommodities = () => {
  const time = useTime();
  const rotateY1 = useTransform(time, [0, 20000], [0, 360]); const rotateY2 = useTransform(time, [0, 25000], [0, -360]); const rotateX = useTransform(time, [0, 30000], [0, 360]);
  return (<div className="relative w-[320px] h-[320px] flex items-center justify-center transform-style-3d perspective-1000"><div className="absolute inset-0 bg-yellow-600/10 blur-[80px] rounded-full pointer-events-none" /><div className="relative w-32 h-32 transform-style-3d animate-float"><div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-900 via-orange-900 to-black shadow-[0_0_60px_rgba(234,179,8,0.6)] opacity-90 border border-yellow-500/30" /><div className="absolute inset-0 rounded-full border border-yellow-400/20 opacity-60 animate-[spin_10s_linear_infinite]" style={{ borderStyle: "dotted" }} /><div className="absolute inset-0 rounded-full border border-orange-400/20 opacity-60 animate-[spin_15s_linear_infinite_reverse]" style={{ transform: "rotateX(60deg)" }} /><div className="absolute inset-0 rounded-full border border-zinc-400/20 opacity-60 animate-[spin_20s_linear_infinite]" style={{ transform: "rotateY(60deg)" }} /></div><motion.div style={{ rotateY: rotateY1, rotateX: 60, rotateZ: 15 }} className="absolute w-[140%] h-[140%] rounded-full border border-yellow-400/40 transform-style-3d shadow-[0_0_20px_rgba(234,179,8,0.2)]"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-yellow-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.6)] transform-style-3d backface-hidden"><span className="text-yellow-400 font-bold text-xs transform -rotate-x-60 -rotate-z-15">GOLD</span></div></motion.div><motion.div style={{ rotateY: rotateY2, rotateX: -60, rotateZ: -15 }} className="absolute w-[180%] h-[180%] rounded-full border border-zinc-400/40 transform-style-3d border-dashed shadow-[0_0_20px_rgba(161,161,170,0.2)]"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-10 bg-black/80 border border-zinc-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(161,161,170,0.6)] transform-style-3d backface-hidden"><span className="text-zinc-400 font-bold text-xs transform rotate-x-60 rotate-z-15">OIL</span></div></motion.div><motion.div style={{ rotateX: rotateX, rotateY: 30 }} className="absolute w-[220%] h-[220%] rounded-full border border-slate-400/30 transform-style-3d border-dotted"><div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-black/80 border border-slate-400 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(148,163,184,0.6)] transform-style-3d backface-hidden"><span className="text-slate-300 font-bold text-xs transform -rotate-y-30 -rotate-x-90">SLVR</span></div><div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-black/80 border border-blue-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)] transform-style-3d backface-hidden"><span className="text-blue-400 font-bold text-xs transform -rotate-y-30 -rotate-x-90">GAS</span></div></motion.div></div>);
};
const VisualStocks = () => {
  const time = useTime();
  const rotateY1 = useTransform(time, [0, 20000], [0, 360]); const rotateY2 = useTransform(time, [0, 25000], [0, -360]); const rotateX = useTransform(time, [0, 30000], [0, 360]);
  return (<div className="relative w-[320px] h-[320px] flex items-center justify-center transform-style-3d perspective-1000"><div className="absolute inset-0 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none" /><div className="relative w-32 h-32 transform-style-3d animate-float"><div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-900 via-fuchsia-900 to-black shadow-[0_0_60px_rgba(167,139,250,0.6)] opacity-90 border border-violet-500/30" /><div className="absolute inset-0 rounded-full border border-violet-400/20 opacity-60 animate-[spin_10s_linear_infinite]" style={{ borderStyle: "dotted" }} /><div className="absolute inset-0 rounded-full border border-fuchsia-400/20 opacity-60 animate-[spin_15s_linear_infinite_reverse]" style={{ transform: "rotateX(60deg)" }} /><div className="absolute inset-0 rounded-full border border-blue-400/20 opacity-60 animate-[spin_20s_linear_infinite]" style={{ transform: "rotateY(60deg)" }} /></div><motion.div style={{ rotateY: rotateY1, rotateX: 60, rotateZ: 15 }} className="absolute w-[140%] h-[140%] rounded-full border border-gray-400/40 transform-style-3d shadow-[0_0_20px_rgba(156,163,175,0.2)]"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-gray-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(156,163,175,0.6)] transform-style-3d backface-hidden"><span className="text-gray-300 font-bold text-xs transform -rotate-x-60 -rotate-z-15">AAPL</span></div></motion.div><motion.div style={{ rotateY: rotateY2, rotateX: -60, rotateZ: -15 }} className="absolute w-[180%] h-[180%] rounded-full border border-red-400/40 transform-style-3d border-dashed shadow-[0_0_20px_rgba(248,113,113,0.2)]"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-10 bg-black/80 border border-red-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(248,113,113,0.6)] transform-style-3d backface-hidden"><span className="text-red-400 font-bold text-xs transform rotate-x-60 rotate-z-15">TSLA</span></div></motion.div><motion.div style={{ rotateX: rotateX, rotateY: 30 }} className="absolute w-[220%] h-[220%] rounded-full border border-green-400/30 transform-style-3d border-dotted"><div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-green-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(74,222,128,0.6)] transform-style-3d backface-hidden"><span className="text-green-400 font-bold text-xs transform -rotate-y-30 -rotate-x-90">NVDA</span></div><div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(251,146,60,0.6)] transform-style-3d backface-hidden"><span className="text-orange-400 font-bold text-xs transform -rotate-y-30 -rotate-x-90">AMZN</span></div></motion.div></div>);
};
const VisualCrypto = () => {
  const time = useTime();
  const rotateY1 = useTransform(time, [0, 20000], [0, 360]); const rotateY2 = useTransform(time, [0, 25000], [0, -360]); const rotateX = useTransform(time, [0, 30000], [0, 360]);
  return (<div className="relative w-[320px] h-[320px] flex items-center justify-center transform-style-3d perspective-1000"><div className="absolute inset-0 bg-orange-600/10 blur-[80px] rounded-full pointer-events-none" /><div className="relative w-32 h-32 transform-style-3d animate-float"><div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-900 via-amber-900 to-black shadow-[0_0_60px_rgba(245,158,11,0.6)] opacity-90 border border-orange-500/30" /><div className="absolute inset-0 rounded-full border border-orange-400/20 opacity-60 animate-[spin_10s_linear_infinite]" style={{ borderStyle: "dotted" }} /><div className="absolute inset-0 rounded-full border border-yellow-400/20 opacity-60 animate-[spin_15s_linear_infinite_reverse]" style={{ transform: "rotateX(60deg)" }} /><div className="absolute inset-0 rounded-full border border-slate-400/20 opacity-60 animate-[spin_20s_linear_infinite]" style={{ transform: "rotateY(60deg)" }} /></div><motion.div style={{ rotateY: rotateY1, rotateX: 60, rotateZ: 15 }} className="absolute w-[140%] h-[140%] rounded-full border border-orange-400/40 transform-style-3d shadow-[0_0_20px_rgba(251,146,60,0.2)]"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(251,146,60,0.6)] transform-style-3d backface-hidden"><span className="text-orange-400 font-bold text-xs transform -rotate-x-60 -rotate-z-15">BTC</span></div></motion.div><motion.div style={{ rotateY: rotateY2, rotateX: -60, rotateZ: -15 }} className="absolute w-[180%] h-[180%] rounded-full border border-indigo-400/40 transform-style-3d border-dashed shadow-[0_0_20px_rgba(129,140,248,0.2)]"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-10 bg-black/80 border border-indigo-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(129,140,248,0.6)] transform-style-3d backface-hidden"><span className="text-indigo-400 font-bold text-xs transform rotate-x-60 rotate-z-15">ETH</span></div></motion.div><motion.div style={{ rotateX: rotateX, rotateY: 30 }} className="absolute w-[220%] h-[220%] rounded-full border border-emerald-400/30 transform-style-3d border-dotted"><div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(52,211,153,0.6)] transform-style-3d backface-hidden"><span className="text-emerald-400 font-bold text-xs transform -rotate-y-30 -rotate-x-90">SOL</span></div><div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black/80 border border-blue-500 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)] transform-style-3d backface-hidden"><span className="text-blue-400 font-bold text-xs transform -rotate-y-30 -rotate-x-90">XRP</span></div></motion.div></div>);
};

const MarketVisualContainer = ({ marketId, t }: { marketId: string; t: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 }); const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5); y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  if (marketId === "forex") return <div className="sticky top-32 w-full flex items-center justify-center min-h-[500px]"><div className="relative w-full h-full flex items-center justify-center perspective-1000"><VisualForex /></div></div>;
  if (marketId === "indices") return <div className="sticky top-32 w-full flex items-center justify-center min-h-[500px]"><div className="relative w-full h-full flex items-center justify-center perspective-1000"><VisualIndices /></div></div>;
  if (marketId === "commodities") return <div className="sticky top-32 w-full flex items-center justify-center min-h-[500px]"><div className="relative w-full h-full flex items-center justify-center perspective-1000"><VisualCommodities /></div></div>;
  if (marketId === "stocks") return <div className="sticky top-32 w-full flex items-center justify-center min-h-[500px]"><div className="relative w-full h-full flex items-center justify-center perspective-1000"><VisualStocks /></div></div>;
  if (marketId === "crypto") return <div className="sticky top-32 w-full flex items-center justify-center min-h-[500px]"><div className="relative w-full h-full flex items-center justify-center perspective-1000"><VisualCrypto /></div></div>;

  return (
    <div className="sticky top-32 perspective-1000">
      <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={() => {x.set(0); y.set(0);}} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group min-h-[500px] flex flex-col items-center justify-between transition-colors hover:border-[#ef4444]/30">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black pointer-events-none rounded-3xl" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ef4444]/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="w-full relative z-10 mb-4 transform-style-3d" style={{ transform: "translateZ(20px)" }}><h3 className="text-xs font-bold text-[#ef4444] uppercase tracking-widest mb-2">{t('market.interactive')}</h3><h2 className="text-2xl font-display font-bold text-white">{t("page.access")}</h2></div>
        <div className="relative w-full flex-1 flex items-center justify-center perspective-1000 my-4 overflow-visible transform-style-3d" style={{ transform: "translateZ(40px)" }}></div>
        <button className="w-full py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center justify-center gap-2 group relative overflow-hidden z-20 mt-4 transform-style-3d" style={{ transform: "translateZ(20px)" }}>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center gap-2">{t("hero.btn_primary")}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
        </button>
      </motion.div>
    </div>
  );
};

interface MarketPageProps {
  content: DetailedCategory;
  t: (key: string) => string;
}

export const MarketPage: React.FC<MarketPageProps> = ({ content, t }) => {
  const Icon = content.icon;
  // Translate the intro text key here
  const [introText, ...detailItems] = content.description;

  return (
    <div className="space-y-20">
      <header className="max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ef4444] font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
            <Icon size={14} />
            <span>{t("nav.markets")} / {t(content.title)}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tight">{t(content.title)}</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">{t(content.subtitle)}</p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-8 space-y-12">
          {/* Cast introText to string for Typescript safety, though it comes as string key from content */}
          <Intro3DCard text={introText as string} Icon={Icon} t={t} />
          {detailItems.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              {detailItems.map((item, idx) => {
                const icons = [BookOpen, Lightbulb, Target];
                const CardIcon = icons[idx % icons.length];
                return <DetailCard key={idx} content={item} index={idx} Icon={CardIcon} t={t} />;
              })}
            </div>
          )}
          <div className="pt-8">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-display font-bold text-white">{t("page.features.title")}</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-[#ef4444] mb-4 group-hover:scale-110 transition-transform"><feature.icon size={20} /></div>
                  <h4 className="text-lg font-bold text-white mb-2">{t(feature.title)}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{t(feature.description)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-8">
          <MarketVisualContainer marketId={content.id} t={t} />
        </div>
      </div>
    </div>
  );
};
