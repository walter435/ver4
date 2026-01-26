import type { VercelRequest, VercelResponse } from '@vercel/node';

// --- CONFIGURATION ---
const SYMBOLS_LIST = ['AAPL', 'TSLA', 'BTC/USD', 'XAU/USD', 'SPY', 'QQQ', 'NVDA', 'XAG/USD', 'EUR/USD'];
const SYMBOLS_QUERY = SYMBOLS_LIST.join(',');

// --- IN-MEMORY CACHE ---
let cachedData: {
  timestamp: number;
  payload: any;
} | null = null;

const CACHE_DURATION_MS = 10 * 60 * 1000; // 10 minutes

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const now = Date.now();

    // 1. Check if we have valid cached data
    if (cachedData && (now - cachedData.timestamp < CACHE_DURATION_MS)) {
      res.setHeader('X-Cache-Status', 'HIT');
      return res.status(200).json(cachedData.payload);
    }

    // 2. If no cache or expired, fetch from Twelve Data
    // Using the hardcoded key provided by the user
    const apiKey = '24065d87a8774e7b970e3b7129887e99'; 
    
    if (!apiKey) {
      throw new Error('Server configuration error: API Key is missing.');
    }

    console.log("Fetching fresh data from Twelve Data...");
    const response = await fetch(
      `https://api.twelvedata.com/quote?symbol=${SYMBOLS_QUERY}&apikey=${apiKey}`
    );

    if (!response.ok) {
      // If unauthorized or other non-200 error
      throw new Error(`Upstream API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Check for API-specific errors in the body (Twelve Data often returns 200 even for errors)
    if (data.code && data.code !== 200) {
       console.warn("Upstream API returned error code:", data);
       // If we have old cache, serve it to prevent breaking the frontend
       if (cachedData) {
         console.warn("Serving stale cache due to upstream error.");
         res.setHeader('X-Cache-Status', 'STALE');
         return res.status(200).json(cachedData.payload);
       }
       throw new Error(data.message || 'Unknown API Error from Twelve Data');
    }

    // 3. Update Cache
    cachedData = {
      timestamp: now,
      payload: data
    };

    res.setHeader('X-Cache-Status', 'MISS');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    
    return res.status(200).json(data);

  } catch (error: any) {
    console.error("API Proxy Error:", error);
    // Return 500 so frontend knows to keep its current state
    return res.status(500).json({ error: "Failed to fetch market data", details: error.message });
  }
}