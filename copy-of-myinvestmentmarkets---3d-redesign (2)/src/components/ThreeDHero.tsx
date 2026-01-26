
import React, { useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  useMotionTemplate,
  MotionValue,
  animate,
} from "framer-motion";
import { TrendingUp, TrendingDown, ChevronUp, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// --- DATA CONFIGURATION (Right Side) ---
const ROWS = 6;
const COLS = 6;

const SYMBOLS = [
  { s: "BTC", n: "Bitcoin", p: 94230.5, type: "crypto" },
  { s: "ETH", n: "Ethereum", p: 3450.2, type: "crypto" },
  { s: "EURUSD", n: "Euro", p: 1.0845, type: "forex" },
  { s: "XAUUSD", n: "Gold", p: 4340.1, type: "commodity" },
  { s: "TSLA", n: "Tesla Inc", p: 435.3, type: "stock" },
  { s: "NVDA", n: "Nvidia", p: 280.5, type: "stock" },
  { s: "AAPL", n: "Apple", p: 280.2, type: "stock" },
  { s: "SPX", n: "S&P 500", p: 6918.73, type: "indices" },
];

const generateSparkline = (isPositive: boolean) => {
  let points = "M0,30 ";
  let currentY = 30;
  for (let i = 1; i <= 10; i++) {
    const x = i * 10;
    const bias = isPositive ? -3 : 3;
    currentY += Math.random() * 20 - 10 + bias;
    currentY = Math.max(5, Math.min(55, currentY));
    points += `L${x},${currentY} `;
  }
  return points;
};

const generateGridItems = () => {
  const items = [];
  let id = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const sym = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      const isPositive = Math.random() > 0.4;
      const change = (Math.random() * 5).toFixed(2);

      const randomX = (Math.random() - 0.5) * 12;
      const randomY = (Math.random() - 0.5) * 12;

      items.push({
        id: id++,
        row: r,
        col: c,
        x: (c / (COLS - 1)) * 100 + randomX,
        y: (r / (ROWS - 1)) * 100 + randomY,
        symbol: sym.s,
        name: sym.n,
        price: sym.p.toLocaleString(undefined, {
          minimumFractionDigits: sym.type === "forex" ? 4 : 2,
        }),
        isPositive,
        change,
        chartPath: generateSparkline(isPositive),
      });
    }
  }
  return items;
};

const GRID_DATA = generateGridItems();

export const ThreeDHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.scrollY < window.innerHeight) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section ref={containerRef} className="relative w-full h-full flex items-start justify-center pt-24 pb-10 sm:pt-32 lg:pt-36 overflow-hidden">
      {isInView && <BackgroundElements />}

      <div className="container mx-auto px-6 relative z-30 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start h-auto w-full pointer-events-none">
        {/* LEFT COLUMN: 3D Typography & Vital Sign Chart */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10 relative pointer-events-auto perspective-1000 flex flex-col items-center lg:items-start text-center lg:text-left lg:mt-12">
          <StatusPill t={t} />

          <div className="perspective-1000">
            <motion.h1
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-bold leading-[1.0] lg:leading-[0.9] text-white tracking-tight transform-style-3d shadow-black drop-shadow-2xl"
            >
              <span className="lg:whitespace-nowrap drop-shadow-md">
                {t("hero.title_start")}
              </span>{" "}
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-white blur-3xl opacity-30"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-brand-silver to-white animate-gradient-x lg:whitespace-nowrap drop-shadow-sm">
                  {t("hero.title_highlight")}
                </span>
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg text-brand-platinum max-w-2xl leading-relaxed whitespace-pre-line lg:border-l-2 lg:border-red-600/50 lg:pl-6 border-none pl-0 bg-black/40 backdrop-blur-sm p-4 rounded-r-xl lg:bg-transparent lg:backdrop-blur-0 lg:p-0 lg:rounded-none"
          >
            {t("hero.subtitle")}
          </motion.p>

          <div className="w-full max-w-xl pt-4 perspective-1000">
            <VitalSignChart />
            <p className="text-base sm:text-lg text-gray-400 font-mono tracking-wider mt-6 whitespace-nowrap">{t('hero.tagline')}</p>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D INTERACTIVE MATRIX */}
        <div className="hidden lg:block lg:col-span-5 relative h-[60rem] w-full perspective-1000 z-20 pointer-events-auto">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute inset-0 w-full h-full transform-style-3d cursor-crosshair overflow-visible"
          >
            <motion.div
              className="absolute inset-0 w-full h-full transform-style-3d will-change-transform"
              style={{
                transform:
                  "rotateX(20deg) rotateY(-20deg) rotateZ(10deg) scale(0.9) translateX(10%)",
              }}
            >
              {GRID_DATA.map((item) => (
                <InteractiveItem
                  key={item.id}
                  item={item}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ... (Rest of the component remains the same, VitalSignChart etc.)

const VitalSignChart = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const progress = useMotionValue(0);

  const pathData =
    "M0,80 L20,75 L40,85 L60,70 L80,75 L100,50 L120,65 L140,55 L160,60 L180,40 L200,50 L220,30 L240,45 L260,35 L280,55 L300,40 L320,50 L340,25 L360,35 L380,15 L400,25 L420,10 L450,20 L480,30 L500,15 L520,25 L550,5 L580,15 L600,10";

  useEffect(() => {
    const animation = animate(progress, 1, {
      duration: 6, 
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1, 
      onUpdate: (latest) => {
        if (pathRef.current && dotRef.current && textRef.current) {
          const length = pathRef.current.getTotalLength();
          const point = pathRef.current.getPointAtLength(latest * length);

          dotRef.current.setAttribute("cx", point.x.toString());
          dotRef.current.setAttribute("cy", point.y.toString());

          let text = "";
          let opacity = 0;

          if (latest > 0.05 && latest < 0.28) {
             text = "STABLE";
             opacity = 1 - Math.abs((latest - 0.165) / 0.115);
          } else if (latest > 0.38 && latest < 0.61) {
             text = "FAST";
             opacity = 1 - Math.abs((latest - 0.495) / 0.115);
          } else if (latest > 0.71 && latest < 0.94) {
             text = "CORE ASSETS";
             opacity = 1 - Math.abs((latest - 0.825) / 0.115);
          }

          textRef.current.textContent = text;
          textRef.current.setAttribute("opacity", Math.max(0, opacity).toString());
          textRef.current.setAttribute("x", point.x.toString());
          textRef.current.setAttribute("y", (point.y - 15).toString());
        }
      },
    });

    return () => animation.stop();
  }, []);

  return (
    <div className="relative w-full h-24 overflow-visible flex items-center">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 600 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(251, 191, 36, 0)" />
            <stop offset="50%" stopColor="rgba(251, 191, 36, 0.2)" />
            <stop offset="100%" stopColor="rgba(251, 191, 36, 0.8)" />
          </linearGradient>
          <filter id="glow-dot">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path ref={pathRef} d={pathData} stroke="url(#chart-gradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ pathLength: progress }} />
        <circle ref={dotRef} r="4" fill="#fbbf24" filter="url(#glow-dot)" cx="0" cy="80" />
        <text ref={textRef} x="0" y="0" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" style={{ pointerEvents: 'none', letterSpacing: '0.1em' }} />
      </svg>
    </div>
  );
};

const StatusPill = ({ t }: { t: any }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="group relative inline-flex">
      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
      <div className="relative flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:border-brand-silver/30 transition-colors cursor-default">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#dc2626] shadow-[0_0_10px_#dc2626]"></span>
        </span>
        <span className="text-[10px] sm:text-xs font-bold text-brand-silver tracking-widest uppercase group-hover:text-white transition-colors">{t("hero.status_live")}</span>
        <div className="w-px h-3 bg-white/20 mx-1"></div>
        <span className="text-[8px] sm:text-[10px] font-mono text-gray-400">{t("hero.status_connected")}</span>
      </div>
    </motion.div>
  );
};

const InteractiveItem: React.FC<{ item: any; mouseX: MotionValue<number>; mouseY: MotionValue<number>; }> = ({ item, mouseX, mouseY }) => {
  const itemX = item.x / 100;
  const itemY = item.y / 100;
  const distance = useTransform([mouseX, mouseY], (latest: any[]) => {
    const x = latest[0] as number;
    const y = latest[1] as number;
    const a = x - itemX;
    const b = y - itemY;
    return Math.sqrt(a * a + b * b);
  });
  const springConfig = { damping: 20, stiffness: 300, mass: 1 };
  const scaleRaw = useTransform(distance, [0, 0.15, 0.5], [2.5, 0.8, 0.15]);
  const opacityRaw = useTransform(distance, [0, 0.2, 0.6], [1, 0.4, 0.1]);
  const zRaw = useTransform(distance, [0, 0.15, 1], [400, 50, 0]);
  const rotateXRaw = useTransform(distance, [0, 0.3], [-40, 0]);
  const scale = useSpring(scaleRaw, springConfig);
  const opacity = useSpring(opacityRaw, springConfig);
  const z = useSpring(zRaw, springConfig);
  const rotateX = useSpring(rotateXRaw, springConfig);

  return (
    <motion.div className="absolute will-change-transform" style={{ left: `${item.x}%`, top: `${item.y}%`, zIndex: z, transformStyle: "preserve-3d" }}>
      <motion.div style={{ scale, opacity, z, rotateX }} className="transform-style-3d origin-center">
        <div className={`w-28 sm:w-40 bg-[#0f172a] border border-white/20 rounded-xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,1)] flex flex-col relative transition-all duration-500 ${item.isPositive ? "shadow-[0_0_50px_rgba(34,197,94,0.3)]" : "shadow-[0_0_50px_rgba(239,68,68,0.3)]"} brightness-100 opacity-100`}>
          <div className="p-2 sm:p-3 bg-white/5 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold text-[8px] sm:text-[10px] text-black ${item.isPositive ? "bg-green-500" : "bg-red-500"}`}>{item.symbol[0]}</div>
              <div>
                <div className="text-white font-bold text-[8px] sm:text-[10px] leading-none">{item.symbol}</div>
                <div className="text-gray-400 text-[6px] sm:text-[8px] leading-none mt-0.5">{item.name}</div>
              </div>
            </div>
            {item.isPositive ? <TrendingUp size={12} className="text-green-500" /> : <TrendingDown size={12} className="text-red-500" />}
          </div>
          <div className="p-2 sm:p-3 relative">
            <div className="text-base sm:text-xl font-mono font-bold text-white tracking-tight mb-1">{item.price}</div>
            <div className={`flex items-center text-[8px] sm:text-[10px] font-bold mb-3 ${item.isPositive ? "text-green-400" : "text-red-400"}`}>
              {item.isPositive ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
              {item.change}%
            </div>
            <div className="h-8 sm:h-10 w-full relative opacity-80">
              <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <path d={item.chartPath} fill="none" stroke={item.isPositive ? "#22c55e" : "#ef4444"} strokeWidth="3" vectorEffect="non-scaling-stroke" />
                <path d={`${item.chartPath} L100,60 L0,60 Z`} fill={`url(#grad-${item.id})`} className="opacity-20" />
                <defs><linearGradient id={`grad-${item.id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={item.isPositive ? "#22c55e" : "#ef4444"} /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const BackgroundElements = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-[120%] h-auto fill-brand-silver/50">
          <path d="M150,150 C160,140 170,140 180,150 C190,160 180,180 170,180 C160,180 150,170 140,160 C130,150 140,160 150,150 Z M400,100 C450,80 500,80 550,100 C600,120 600,180 550,200 C500,220 450,220 400,200 C350,180 350,120 400,100 Z" />
          <circle cx="200" cy="150" r="50" className="fill-brand-silver/10 blur-3xl" />
          <circle cx="600" cy="200" r="80" className="fill-brand-silver/10 blur-3xl" />
        </svg>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 perspective-[1000px] z-0">
        <div className="absolute top-[20%] -left-[10%] w-[120%] h-32 bg-gradient-to-r from-transparent via-brand-gray/50 to-transparent rotate-[-15deg] blur-sm flex items-center whitespace-nowrap">
          <div className="animate-[scroll_40s_linear_infinite] flex gap-20 text-7xl font-bold text-brand-silver/10 font-display">
            <span>BTC</span> <span>ETH</span> <span>SOL</span> <span>XRP</span>{" "}
            <span>DOT</span> <span>ADA</span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[80rem] h-[80rem] bg-red-600/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60rem] h-[60rem] bg-brand-silver/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
    </>
  );
};
