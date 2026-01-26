
import React from 'react';
import { MousePointerClick } from 'lucide-react';

const executionData = [
  {
    title: "1. Institutional Grade Execution Framework",
    content: [
      "1.1. MY INVESTMENT MARKETS operates a sophisticated proprietary trading infrastructure designed to ensure high-speed execution and deep liquidity access.",
      "1.2. All trading activities, from client onboarding via our secure CRM to real-time order matching, are governed by rigorous Compliance, MLRO, and Risk Management protocols within a fully regulated ecosystem."
    ]
  },
  {
    title: "2. Step 1: Digital Order Origination & Validation",
    content: [
      "2.1. The execution lifecycle begins when a Client submits an order through the trading terminal. Our system supports various order types, including Market Orders and Pending Orders (Limit/Stop).",
      "2.2. Upon submission, our automated bridge performs an instantaneous pre-trade validation, verifying account margin requirements and connectivity integrity to ensure seamless processing."
    ]
  },
  {
    title: "3. Step 2: Dynamic Execution Infrastructure",
    content: [
      "3.1. MY INVESTMENT MARKETS utilizes a sophisticated order-routing technology that selects the most efficient execution path for every trade. This allows the Company to provide deep liquidity as a Principal while maintaining direct access to institutional Tier-1 Liquidity Providers (LPs).",
      "3.2. This dynamic approach captures the best available Bid/Ask price in the global market, maintaining the lowest possible spreads and minimal slippage."
    ]
  },
  {
    title: "4. Step 3: 24/7 Systematic Monitoring & Liquidity",
    content: [
      "4.1. Perpetual Market Oversight: Our specialized Dealer Team performs 24/7 continuous oversight to monitor for abnormal market conditions, manifest errors, or extreme volatility gaps across all tradable asset classes, including weekend markets.",
      "4.2. Execution Certainty: By acting as the counterparty or sourcing liquidity in real-time, we provide high fill rates even for large-volume orders, ensuring precision and reliability at any time of day or night."
    ]
  },
  {
    title: "5. Step 4: Post-Trade Confirmation & Record Keeping",
    content: [
      "5.1. Instantaneous Confirmation: Once matching is finalized, the Client receives a digital execution receipt within the terminal, detailing the price and time-stamp (to the millisecond).",
      "5.2. Transparency: In accordance with FSC Mauritius regulations, automated Contract Notes are generated for every trade, providing a definitive and auditable record of all activities."
    ]
  },
  {
    title: "6. 24/7 Dealer Team Responsibilities & Quality Control",
    content: [
      "6.1. Our professional Dealer Team acts as the perpetual guardians of the trading environment, performing the following critical functions 24 hours a day, 7 days a week:",
      "• Price Feed Integrity: Continuous verification that price feeds represent true global market value.",
      "• Liquidity Management: Ensuring all trades are matched without disrupting market integrity.",
      "• Compliance Reporting: Guaranteeing every trade adheres to AML/KYC standards."
    ]
  }
];

export const OrderExecutionPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-500 mb-6 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <MousePointerClick size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Order Execution</h1>
        <p className="text-xl text-gray-400">Terms for managing and transferring funds within MIM.</p>
      </header>
      
      <div className="space-y-10">
        {executionData.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-lg hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6 border-l-4 border-emerald-500 pl-4">{section.title}</h2>
            <div className="space-y-4">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-gray-300 leading-relaxed text-base md:text-lg font-light whitespace-pre-line pl-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
