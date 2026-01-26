
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const riskData = [
  {
    title: "1. Introduction",
    content: [
      "MY INVESTMENT MARKETS (hereinafter “the Company”) holds an Investment Dealer (Full service Dealer, excluding underwriting) License, GB24203684, pursuant to Section 29 of the Securities Act 2005. Clients and Prospective Clients must read this notice prior to beginning their relationship and commencing any trading activity.",
      "This General Risk Disclosure is designed to explain the risks involved in dealing in Financial Instruments. Trading CFDs involves significant risks, and if the Client does not understand these risks, they should not trade at all. The Company does not provide any investment advice."
    ]
  },
  {
    title: "2. Risk on CFD & Market Volatility",
    content: [
      "CFDs are complex financial instruments with a high risk of losing money quickly due to leverage. Statistically, more than 80% of retail investors lose money. CFDs are not suitable for long-term investors. Volatility combined with leverage can result in rapid changes to your overall investment position. Prices are sourced from our aggregated liquidity pool and may differ from prices reported elsewhere.",
      "• Stop-out Risk: If account equity falls below the maintenance margin, the Company is entitled to close positions automatically without prior notice.",
      "• Gapping & Slippage: During extreme volatility, prices may \"gap,\" and the Company does not guarantee execution at the requested price."
    ]
  },
  {
    title: "3. Cost Disclosure & Swap Policy",
    content: [
      "Clients must be aware of Spreads, Commissions, and Swaps. Wednesday Triple Swap: Rates are tripled to account for the weekend settlement period.",
      "• Islamic Account Policy: Swap-free accounts are granted a grace period of five (5) consecutive days. If a position remains open at the close of the 5th trading day, the Company reserves the right to apply accumulated swaps or administrative fees from the 6th day onwards. The spread represents the primary cost of trading, which varies depending on market liquidity and volume."
    ]
  },
  {
    title: "4. Risk Statements with Leverage",
    content: [
      "Leverage can amplify both gains and losses. For instance, with 1:50 leverage (2% margin requirement), a USD 100,000 trade requires only USD 2,000 of equity. The lower the margin requirement, the greater the potential risk.",
      "However, the company provides negative balance protection, ensuring clients cannot lose more than their initial investment. You should carefully consider your investment objectives and risk tolerance before using leveraged products."
    ]
  },
  {
    title: "5. Technology and Technical Risks",
    content: [
      "The Company relies on technology for market access. Inherent risks include: System failures leading to delayed execution, technical glitches, mismatch in prices, cyber-attacks leading to data theft, and outdated software/hardware.",
      "• Mitigation: We invest in top-tier global cloud infrastructure, implement strict cybersecurity (Firewalls/MFA), and maintain contingency plans. You accept and recognize these technical risks, understanding that we cannot guarantee uninterrupted or error-free operation."
    ]
  },
  {
    title: "6. Trading Platform/Terminal Risk",
    content: [
      "Trading through our terminal involves market volatility and technical risks. Clients must understand the functionality before trading.",
      "• Human Error: Losses from incorrect lot sizes or accidental orders are the sole responsibility of the Client.",
      "• Definitive Evidence: In the event of a dispute, the Company’s internal server logs shall be the final and definitive evidence of the transaction event, price execution, and timing."
    ]
  },
  {
    title: "7. Exposure to Communication Risk",
    content: [
      "Communication via email or telephone may be subject to interception, loss, or delay. We take precautions but cannot guarantee absolute security or confidentiality.",
      "Electronic communications may be monitored and retained for regulatory compliance purposes. The Client is strictly responsible for maintaining the confidentiality of their login credentials. The Company is not liable for unauthorized access caused by the Client's negligence."
    ]
  },
  {
    title: "8. Liquidity Risk & Execution",
    content: [
      "Liquidity risk refers to the risk that the company may be unable to meet financial obligations due to a lack of available funds or market liquidity. To mitigate this, we: Maintain adequate liquidity buffers, diversify our counterparty base, and establish credit lines with reputable financial institutions.",
      "Under certain conditions, it may be impossible to liquidate a position at the quoted price due to sudden shifts in demand."
    ]
  },
  {
    title: "9. Tax, IB Disclosure & Governing Law",
    content: [
      "9.1 IB Disclosure: Introducing Brokers (IBs) are independent entities and are NOT agents or employees of the Company. We are not responsible for their advice or profit guarantees.",
      "9.2 Tax & Governing Law: Clients are solely responsible for their tax obligations. This Agreement and all legal relations shall be governed by the laws of the Republic of Mauritius, and any disputes shall be subject to the exclusive jurisdiction of the competent courts of Mauritius."
    ]
  }
];

export const RiskDisclosurePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-500/10 text-red-500 mb-6 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
            <AlertTriangle size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Risk Disclosure</h1>
        <p className="text-xl text-gray-400">Guideline for understanding trading risks on MIM.</p>
      </header>
      
      <div className="space-y-10">
        {riskData.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-lg hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6 border-l-4 border-red-500 pl-4">{section.title}</h2>
            <div className="space-y-4">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-gray-300 leading-relaxed text-base md:text-lg font-light whitespace-pre-line">
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
