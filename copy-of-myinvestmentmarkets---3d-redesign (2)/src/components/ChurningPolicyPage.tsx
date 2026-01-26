
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const churningData = [
  {
    title: "1. Executive Execution Philosophy",
    content: [
      "MY INVESTMENT MARKETS (the “Company”) operates under a rigorous execution philosophy designed to provide superior market access and liquidity. The Company functions as a professional bridge to global financial markets, acting as both a primary dealer and a sophisticated intermediary.",
      "(a) Agency Brokerage: In its capacity as a broker, the Company utilizes advanced matching technology to connect Bid and Ask liquidity, ensuring transparent price discovery and efficient order routing.",
      "(b) Principal Liquidity Provision: To ensure immediate execution and market depth, the Company may act as a Principal/Dealer. In this mode, the Company utilizes its own capital and institutional liquidity pools to satisfy client demand instantaneously at competitive market terms, eliminating the latency often associated with external market searches.",
      "(c) Intermediary Order Management: As a dedicated intermediary, the Company processes Market and Limit orders with high precision. All orders are monitored in real-time to ensure they are filled at the most favorable prevailing rates, with immediate confirmation delivered to the client's terminal to maintain full transparency."
    ]
  },
  {
    title: "2. Defining Churning & Quantitative Excess",
    content: [
      "Churning is categorized by the Company as a serious violation of fiduciary trust and professional ethics. It involves the intentional execution of excessive trading volume within a client's discretionary or self-directed account for the sole purpose of maximizing commission revenue. The Company identifies churning as trading activity that is manifestly disproportionate to the client’s stated investment objectives, financial capacity, or risk profile. We recognize that such practices impair the long-term profitability of the client, and thus, MY INVESTMENT MARKETS maintains a zero-tolerance policy towards any internal or external behavior that encourages or facilitates churning."
    ]
  },
  {
    title: "3. Strategic Procedures to Prevent Churning",
    content: [
      "To ensure the highest standards of client protection, the following operational safeguards are strictly enforced:",
      "3.1. Client-Initiated Execution: The Dealing Team is strictly prohibited from initiating trades without an explicit request or algorithmic trigger authorized by the client. All transactions, whether handled via agency or principal models, must be client-driven.",
      "3.2. Market-Neutral Principal Basis: Transactions conducted on a principal-to-principal basis are executed to provide depth and stability, not to influence trade frequency. This ensures that the Company's role as a liquidity provider serves the client's need for speed and certainty of execution.",
      "3.3. Best Execution Surveillance: Our Compliance department conducts periodic reviews of trading frequency and rate competitiveness. We ensure that mark-ups and spreads remain within the industry’s most competitive ranges, directly benefiting the client’s net performance.",
      "3.4. Real-Time Transparency: Every executed trade is backed by a digital audit trail. Contract notes and transaction summaries are transmitted immediately, allowing clients to monitor their own account turnover and cost-to-equity ratios at all times.",
      "3.5. Regulatory Alignment: This policy is integrated with our \"Client Agreement\" and is subject to the rigorous oversight of the FSC Mauritius, ensuring that our incentive structures never override the best interests of our clientele."
    ]
  }
];

export const ChurningPolicyPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-500/10 text-gray-400 mb-6 border border-gray-500/20 shadow-[0_0_40px_rgba(156,163,175,0.1)]">
            <AlertTriangle size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Policies on Churning</h1>
        <p className="text-xl text-gray-400">My Investment Markets policy on excessive trading practices.</p>
      </header>
      
      <div className="space-y-10">
        {churningData.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-lg hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6 border-l-4 border-gray-500 pl-4">{section.title}</h2>
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
