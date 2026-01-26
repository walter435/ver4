
import React, { useState, useEffect, useRef } from 'react';

import { motion, useTransform, useScroll, MotionValue } from 'framer-motion';

import {
  Globe2,
  Wallet,
  BarChart3,
  Coins,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Zap,
} from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';

const TWELVE_API_KEY = '02cb3776f68b46789fd8b34df1d3cb99';
const REFRESH_INTERVAL = 15 * 60 * 1000;
const CACHE_KEY = 'mim_market_data_cache_v4';

const SYMBOLS_LIST = ['EUR/USD', 'GBP/USD', 'ETH/USD', 'NVDA', 'TSLA', 'AAPL', 'MSFT', 'BTC/USD'] as const;

type MarketPoint = { price: number; change: number };
type MarketMap = Record<string, MarketPoint>;

const ASSETS = [
  {
    id: 'eurusd',
    apiSymbol: 'EUR/USD',
    title: 'EUR/USD',
    pair: 'Forex',
    decimals: 4,
    displayMultiplier: 1,
    color: 'blue',
    icon: Globe2,
    chart: 'M0,50 L10,52 L20,48 L30,55 L40,50 L50,45 L60,48 L70,52 L80,55 L90,50 L100,48',
  },
  {
    id: 'gbpusd',
    apiSymbol: 'GBP/USD',
    title: 'GBP/USD',
    pair: 'Forex',
    decimals: 4,
    displayMultiplier: 1,
    color: 'blue',
    icon: Globe2,
    chart: 'M0,52 L10,50 L20,54 L30,49 L40,51 L50,47 L60,50 L70,53 L80,51 L90,52 L100,50',
  },

  {
    id: 'eth/usd',
    apiSymbol: 'ETH/USD',
    title: 'Ethereum',
    pair: 'ETH/USD',
    decimals: 2,
    displayMultiplier: 1,
    color: 'gray',
    icon: Coins,
    chart: 'M0,55 L10,52 L20,58 L30,50 L40,54 L50,46 L60,49 L70,44 L80,36 L90,22 L100,18',
  },

  {
    id: 'nvda',
    apiSymbol: 'NVDA',
    title: 'Nvidia',
    pair: 'NVDA',
    decimals: 2,
    displayMultiplier: 1,
    color: 'gray',
    icon: BarChart3,
    chart: 'M0,70 L10,65 L20,68 L30,60 L40,55 L50,50 L60,45 L70,40 L80,30 L90,20 L100,15',
  },
  {
    id: 'tsla',
    apiSymbol: 'TSLA',
    title: 'Tesla Inc.',
    pair: 'TSLA',
    decimals: 2,
    displayMultiplier: 1,
    color: 'red',
    icon: Zap,
    chart: 'M0,80 L10,70 L20,75 L30,60 L40,65 L50,50 L60,40 L70,45 L80,25 L90,15 L100,10',
  },
  {
    id: 'aapl',
    apiSymbol: 'AAPL',
    title: 'Apple Inc.',
    pair: 'AAPL',
    decimals: 2,
    displayMultiplier: 1,
    color: 'gray',
    icon: BarChart3,
    chart: 'M0,68 L10,66 L20,64 L30,61 L40,58 L50,54 L60,51 L70,47 L80,40 L90,28 L100,22',
  },
  {
    id: 'msft',
    apiSymbol: 'MSFT',
    title: 'Microsoft',
    pair: 'MSFT',
    decimals: 2,
    displayMultiplier: 1,
    color: 'gray',
    icon: BarChart3,
    chart: 'M0,66 L10,63 L20,65 L30,60 L40,57 L50,53 L60,50 L70,46 L80,38 L90,26 L100,20',
  },

  {
    id: 'btc/usd',
    apiSymbol: 'BTC/USD',
    title: 'Bitcoin',
    pair: 'BTC/USD',
    decimals: 2,
    displayMultiplier: 1,
    color: 'orange',
    icon: Wallet,
    chart: 'M0,60 L10,55 L20,65 L30,50 L40,55 L50,45 L60,50 L70,40 L80,30 L90,15 L100,10',
  },
];

const safeNumber = (v: unknown): number | null => {
  const n = typeof v === 'number' ? v : typeof v === 'string' ? Number(v) : NaN;
  return Number.isFinite(n) ? n : null;
};

const parsePercentMaybe = (v: unknown): number | null => {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  if (typeof v === 'string') {
    const cleaned = v.trim().replace(/%/g, '').replace(/[()]/g, '').replace(/\s+/g, '');
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }
  return null;
};

type CachePayload = {
  timestamp: number; // last attempt time (success or failure)
  data: MarketMap; // last successful data only
};

const loadCache = (): CachePayload | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!parsed || typeof parsed !== 'object') return null;
    if (typeof parsed.timestamp !== 'number') return null;
    if (!parsed.data || typeof parsed.data !== 'object') return { timestamp: parsed.timestamp, data: {} };
    return { timestamp: parsed.timestamp, data: parsed.data };
  } catch {
    return null;
  }
};

const saveCache = (payload: CachePayload) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    return;
  }
};

export const ThreeDCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const { t } = useLanguage();

  const [marketValues, setMarketValues] = useState<MarketMap>(() => {
    const cached = loadCache();
    return cached?.data && Object.keys(cached.data).length > 0 ? cached.data : {};
  });

  const [isLoading, setIsLoading] = useState(() => {
    const cached = loadCache();
    return !(cached?.data && Object.keys(cached.data).length > 0);
  });

  const marketValuesRef = useRef(marketValues);
  useEffect(() => {
    marketValuesRef.current = marketValues;
  }, [marketValues]);

  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleNextByTimestamp = (lastAttemptTs: number) => {
    clearTimer();
    const now = Date.now();
    const nextAt = lastAttemptTs + REFRESH_INTERVAL;
    const delay = Math.max(0, nextAt - now);

    timerRef.current = window.setTimeout(() => {
      fetchData(true);
    }, delay);
  };

  const fetchData = React.useCallback(
    async (forceFetch: boolean = false) => {
      const now = Date.now();
      const cached = loadCache();

      const lastAttemptTs = cached?.timestamp ?? 0;
      const withinWindow = lastAttemptTs > 0 && now - lastAttemptTs < REFRESH_INTERVAL;

      if (!forceFetch && withinWindow) {
        if (cached?.data && Object.keys(cached.data).length > 0) {
          setMarketValues(cached.data);
          setIsLoading(false);
        }
        scheduleNextByTimestamp(lastAttemptTs);
        return;
      }

      // Record attempt timestamp immediately to prevent reload/refresh from triggering extra calls
      // while still keeping last successful data untouched on failure.
      saveCache({ timestamp: now, data: cached?.data ?? marketValuesRef.current ?? {} });

      try {
        const symbolsQuery = SYMBOLS_LIST.map((s) => encodeURIComponent(s)).join(',');
        const url = `https://api.twelvedata.com/quote?symbol=${symbolsQuery}&apikey=${encodeURIComponent(TWELVE_API_KEY)}`;

        const response = await fetch(url, { cache: 'no-store' });

        if (!response.ok) {
          setIsLoading(false);
          scheduleNextByTimestamp(now);
          return;
        }

        const apiData = await response.json();

        if (apiData?.status === 'error' || (apiData?.code && apiData.code !== 200)) {
          setIsLoading(false);
          scheduleNextByTimestamp(now);
          return;
        }

        const nextData: MarketMap = { ...marketValuesRef.current };
        let didUpdate = false;

        SYMBOLS_LIST.forEach((sym) => {
          const item = apiData?.[sym];
          const price = safeNumber(item?.close ?? item?.price);
          const change = parsePercentMaybe(item?.percent_change);

          if (price != null && change != null) {
            nextData[sym] = { price, change };
            didUpdate = true;
          }
        });

        if (didUpdate) {
          setMarketValues(nextData);
          marketValuesRef.current = nextData;
          setIsLoading(false);
          saveCache({ timestamp: now, data: nextData });
        } else {
          setIsLoading(false);
        }

        scheduleNextByTimestamp(now);
      } catch (error) {
        console.warn('Fetch failed, preserving last successful values:', error);
        setIsLoading(false);
        scheduleNextByTimestamp(now);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const cached = loadCache();

    if (cached?.data && Object.keys(cached.data).length > 0) {
      setMarketValues(cached.data);
      setIsLoading(false);
    }

    fetchData(false);

    const onStorage = (e: StorageEvent) => {
      if (e.key !== CACHE_KEY) return;
      const updated = loadCache();
      if (updated?.data && Object.keys(updated.data).length > 0) {
        setMarketValues(updated.data);
        setIsLoading(false);
      }
      if (typeof updated?.timestamp === 'number') {
        scheduleNextByTimestamp(updated.timestamp);
      }
    };

    window.addEventListener('storage', onStorage);

    return () => {
      clearTimer();
      window.removeEventListener('storage', onStorage);
    };
  }, [fetchData]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  // SCALING UPDATE: Reduced animation values by approx 20% to match new smaller scale
  const entrySpread = useTransform(scrollYProgress, [0.1, 0.6], [960, 0]); // Reduced from 1200
  const entryY = useTransform(scrollYProgress, [0.1, 0.6], [320, 0]); // Reduced from 400
  const entryOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const centerSplit = useTransform(scrollYProgress, [0.2, 0.5], [480, 0]); // Reduced from 600
  const centerRotate = useTransform(scrollYProgress, [0.2, 0.5], [30, 0]);

  const exitScale = useTransform(scrollYProgress, [0.85, 1], [1, 0.8]);
  const exitOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const exitRotateX = useTransform(scrollYProgress, [0.85, 1], [0, 15]);
  const exitY = useTransform(scrollYProgress, [0.85, 1], [0, -50]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getWrappedIndex = (index: number) => {
    const len = ASSETS.length;
    return ((index % len) + len) % len;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => setCurrentIndex((prev) => prev + 1), 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <motion.section
      ref={containerRef}
      style={{ scale: exitScale, opacity: exitOpacity, rotateX: exitRotateX, y: exitY }}
      // SCALING UPDATE: Converted px to rem for responsiveness
      className="relative z-20 bg-[#050505] min-h-[70rem] sm:min-h-[90rem] flex flex-col items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-20 rounded-t-[3rem] shadow-[0_-50px_100px_rgba(0,0,0,1)] perspective-1000 overflow-hidden transform-style-3d origin-top"
      id="markets"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent shadow-[0_0_40px_rgba(239,68,68,0.8)] z-50 opacity-100" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent rounded-t-[3rem] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050505] to-[#050505] pointer-events-none rounded-t-[3rem]" />

      <div className="container mx-auto px-6 mb-8 lg:mb-20 relative z-10 flex flex-col md:flex-row items-end justify-between gap-8 text-center md:text-left">
        <div className="max-w-3xl w-full">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs sm:text-sm">{t('nav.markets')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold text-white leading-tight">
            {t('carousel.heading')}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 sm:mt-6 max-w-xl mx-auto md:mx-0 border-none md:border-l-2 md:border-[#dc2626]/50 pl-0 md:pl-6 whitespace-pre-line">
            {t('carousel.subheading')}
          </p>
        </div>

        <div className="flex gap-4 justify-center w-full md:w-auto mt-4 sm:mt-0">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 group backdrop-blur-md"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#ef4444] hover:bg-[#dc2626] flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all hover:scale-110 active:scale-95 group"
          >
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <div className="w-full h-[45rem] sm:h-[50rem] relative perspective-1000 flex items-center justify-center overflow-visible">
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center transform-style-3d">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const renderIndex = currentIndex + offset;
            const dataIndex = getWrappedIndex(renderIndex);

            const assetConfig = ASSETS[dataIndex];
            const liveData = marketValues[assetConfig.apiSymbol] || null;

            const finalPrice = liveData ? liveData.price * (assetConfig.displayMultiplier || 1) : 0;

            const cardData = {
              ...assetConfig,
              price: finalPrice,
              change: liveData ? liveData.change : 0,
              loading: isLoading && !liveData,
            };

            const isCenter = offset === 0;

            return (
              <CarouselCard
                key={`${renderIndex}-${isCenter ? 'center' : 'side'}`}
                data={cardData}
                offset={offset}
                isMobile={isMobile}
                entrySpread={entrySpread}
                entryY={entryY}
                entryOpacity={entryOpacity}
                centerSplit={centerSplit}
                centerRotate={centerRotate}
                t={t}
              />
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-4 sm:mt-8 text-center relative z-20 space-y-2">
        <p className="text-gray-400 text-sm sm:text-base font-medium">{t('carousel.footer.analyze')}</p>
        <p className="text-gray-400 text-sm sm:text-base font-medium">{t('carousel.footer.update')}</p>
        <p className="text-gray-500 text-xs pt-4 opacity-60" style={{ filter: 'blur(0.4px)' }}>
          {t('carousel.footer.note')}
        </p>
      </div>
    </motion.section>
  );
};

const CardUI = ({ data, isCenter, t }: { data: any; isCenter: boolean; t: any }) => {
  const priceStr = data.loading
    ? t('common.loading')
    : data.price.toLocaleString('en-US', {
      minimumFractionDigits: data.decimals,
      maximumFractionDigits: data.decimals,
    });

  const isUp = data.change >= 0;
  const sign = isUp ? '+' : '';
  const changeStr = data.loading ? '...' : `${sign}${data.change.toFixed(2)}%`;

  const Icon = data.icon;

  if (data.loading) {
    return (
      <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] p-[2px] border border-white/5 bg-white/5 relative overflow-hidden animate-pulse">
        <div className="w-full h-full rounded-[1.8rem] sm:rounded-[2.3rem] p-6 sm:p-8 flex flex-col justify-between bg-[#121212]">
          <div className="h-8 w-32 bg-white/10 rounded mb-4" />
          <div className="h-32 w-full bg-white/5 rounded-xl" />
          <div className="h-8 w-20 bg-white/10 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full rounded-[2rem] sm:rounded-[2.5rem] ${isCenter
          ? 'p-[2px] bg-gradient-to-b from-white/60 via-white/20 to-transparent shadow-[0_0_100px_rgba(255,255,255,0.05)]'
          : 'p-0 border border-white/5 bg-white/5'
        } relative overflow-hidden ${isCenter ? 'shadow-2xl' : ''}`}
    >
      {isCenter && (
        <div
          className={`absolute top-0 left-0 right-0 h-3/4 bg-${data.color === 'red' ? 'red' : 'gray'
            }-500/10 blur-[80px] pointer-events-none`}
        />
      )}

      <div
        className={`w-full h-full rounded-[1.8rem] sm:rounded-[2.3rem] p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden ${isCenter ? 'bg-[#121212]' : 'bg-[#0a0a0a]/90'
          }`}
      >
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex flex-col">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${isCenter ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'
                } border flex items-center justify-center text-white mb-4`}
            >
              <Icon size={24} />
            </div>

            <h3
              className={`text-xl sm:text-3xl font-display font-bold ${isCenter ? 'text-white drop-shadow-md' : 'text-gray-200'
                } whitespace-nowrap`}
            >
              {data.title}
            </h3>

            <p className={`text-xs sm:text-sm mt-1 ${isCenter ? 'text-gray-300' : 'text-gray-400'}`}>
              {data.pair}
            </p>
          </div>

          <button className="text-gray-500 hover:text-white">
            <MoreHorizontal />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center w-full relative">
          <div className={`absolute inset-0 border-t border-b ${isCenter ? 'border-white/15' : 'border-white/5'} h-20 sm:h-32 my-auto`} />
          <div className={`absolute inset-0 border-t border-b ${isCenter ? 'border-white/10' : 'border-white/5'} h-10 sm:h-16 my-auto opacity-30`} />

          <svg viewBox="0 0 100 100" className="w-full h-20 sm:h-32 overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`grad-${data.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isUp ? '#22c55e' : '#ef4444'} stopOpacity="0.5" />
                <stop offset="100%" stopColor={isUp ? '#22c55e' : '#ef4444'} stopOpacity="0" />
              </linearGradient>
            </defs>

            <path d={data.chart} fill={`url(#grad-${data.id})`} className={isCenter ? 'opacity-30' : 'opacity-20'} />

            <motion.path
              d={data.chart}
              fill="none"
              stroke={isUp ? '#22c55e' : '#ef4444'}
              strokeWidth={isCenter ? '3' : '2'}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isCenter ? 1 : 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className={isCenter ? 'drop-shadow-lg' : ''}
            />
          </svg>

          <div
            className={`absolute right-0 bottom-6 sm:bottom-10 bg-[#1e1e1e] px-2 py-1 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-mono font-bold ${isUp ? 'text-green-400' : 'text-red-400'
              } border border-white/10 shadow-lg`}
          >
            {priceStr}
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1">
                {t('carousel.change')}
              </div>
              <div className={`text-lg sm:text-2xl font-bold flex items-center gap-1 sm:gap-2 ${isUp ? 'text-green-400' : 'text-red-400'}`}>
                {isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {changeStr}
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-3 pt-4 border-t ${isCenter ? 'border-white/20' : 'border-white/10'}`}>
            <button className="py-2 sm:py-3 rounded-xl bg-red-500/10 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all text-xs sm:text-sm border border-red-500/20">
              {t('common.sell')}
            </button>
            <button className="py-2 sm:py-3 rounded-xl bg-green-500/10 text-green-500 font-bold hover:bg-green-500 hover:text-white transition-all text-xs sm:text-sm border border-green-500/20">
              {t('common.buy')}
            </button>
          </div>
        </div>

        {isCenter && <div className="absolute top-0 inset-x-0 h-px bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />}
      </div>
    </div>
  );
};

interface CarouselCardProps {
  data: any;
  offset: number;
  isMobile: boolean;
  entrySpread: MotionValue<number>;
  entryY: MotionValue<number>;
  entryOpacity: MotionValue<number>;
  centerSplit: MotionValue<number>;
  centerRotate: MotionValue<number>;
  t: any;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  data,
  offset,
  isMobile,
  entrySpread,
  entryY,
  entryOpacity,
  centerSplit,
  centerRotate,
  t,
}) => {
  const isCenter = offset === 0;

  const absOffset = Math.abs(offset);

  // SCALING UPDATE: Reduced spacing to match card size reduction
  const baseSpacing = isMobile ? 40 : 300; // Reduced from 380
  const standardX = offset * (isCenter ? 0 : baseSpacing);

  const x = useTransform(entrySpread, (val) => {
    let xOffset = standardX;
    if (offset < 0) xOffset = standardX - val;
    if (offset > 0) xOffset = standardX + val;
    return `calc(-50% + ${xOffset}px)`;
  });

  const y = useTransform(entryY, (val) => (isCenter ? `calc(-50% + ${val}px)` : '-50%'));

  // SCALING UPDATE: Reduced zOffset
  const zOffset = absOffset * (isMobile ? -70 : -240); // Reduced from -90 / -300
  const rotateY = offset * (isMobile ? -10 : -25);

  const scale = isCenter ? (isMobile ? 1 : 1.1) : isMobile ? 0.9 : 0.8;

  const standardOpacity = isCenter ? 1 : Math.max(0, 1 - absOffset * (isMobile ? 0.2 : 0.4));
  const finalOpacity = useTransform(entryOpacity, (val) => standardOpacity * val);

  const blur = isCenter ? 0 : absOffset * (isMobile ? 2 : 4);
  const zIndex = 10 - absOffset;

  // SCALING UPDATE: Converted px to rem
  const cardSizeClasses = 'w-[28rem] sm:w-[38rem] h-[40rem] sm:h-[52rem]';

  const leftX = useTransform(centerSplit, (v) => -v);
  const leftRotateY = useTransform(centerRotate, (v) => v);

  const rightX = centerSplit;
  const rightRotateY = useTransform(centerRotate, (v) => -v);

  if (isCenter) {
    return (
      <motion.div
        className={`absolute top-1/2 left-1/2 ${cardSizeClasses}`}
        style={{ x: '-50%', y: `calc(-50% + 0px)`, zIndex: 20, perspective: 1000 }}
      >
        <motion.div
          className="absolute inset-0 group"
          style={{ x: leftX, rotateY: leftRotateY, clipPath: 'inset(0 50% 0 0)', opacity: finalOpacity }}
        >
          <CardUI data={data} isCenter={true} t={t} />
        </motion.div>

        <motion.div
          className="absolute inset-0 group"
          style={{ x: rightX, rotateY: rightRotateY, clipPath: 'inset(0 0 0 50%)', opacity: finalOpacity }}
        >
          <CardUI data={data} isCenter={true} t={t} />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 ${cardSizeClasses}`}
      style={{
        x,
        y,
        z: zOffset,
        rotateY,
        scale,
        opacity: finalOpacity,
        filter: `blur(${blur}px)`,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full h-full group">
        <CardUI data={data} isCenter={false} t={t} />
      </div>
    </motion.div>
  );
};
