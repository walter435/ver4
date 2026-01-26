
import React from 'react';
import { MessageCircle } from 'lucide-react';

const complaintData = [
  {
    title: "1. Introduction, Licensing & Regulatory Stewardship",
    content: [
      "1.1. MY INVESTMENT MARKETS (hereinafter referred to as the “Company”) holds an Investment Dealer License (GB24203684) and is regulated by the Financial Services Commission (FSC) of Mauritius. The Company takes its stewardship of client assets with the highest level of professional responsibility.",
      "1.2. This Policy is designed to identify, prevent, and manage actual or potential conflicts of interest that could arise during the rendering of financial services. Our objective is to ensure that the Company’s reputation for integrity remains above reproach and that the interests of our clients always take primacy over the interests of the Company or its staff."
    ]
  },
  {
    title: "2. Comprehensive Definition of Conflict of Interest",
    content: [
      "2.1. Definition: A conflict of interest manifests when the Company or a relevant person (staff/director) has a financial, personal, or professional interest that may impair their objectivity in serving a client.",
      "2.2. Gifts and Hospitality: The Company prohibits the acceptance or offering of any benefit that is intended to improperly influence the objectivity of financial services. However, this does not preclude legitimate business hospitality, VIP loyalty programs, or corporate marketing events (such as educational seminars, travel for corporate hospitality, or promotional gifts) that are designed to enhance the Company’s relationship with its Clients, provided they are conducted in accordance with the Company’s internal anti-corruption standards and do not compromise the integrity of the brokerage service."
    ]
  },
  {
    title: "3. Internal Governance & Staff Accountability",
    content: [
      "3.1. Personal Account Dealing (PAD): Staff members are strictly prohibited from trading in any financial instrument while client orders in the same instrument are being processed. All personal trades must be pre-approved by the Compliance Head to ensure alignment with client interests.",
      "3.2. Secondary Employment & Board Seats: Staff must obtain express written permission for any outside business interest (Second Jobs). This prevents direct competition or indirect conflicts that could impact work performance or the Company’s prudential reputation."
    ]
  },
  {
    title: "4. Market Maker Role & Systematic Conflict Mitigation",
    content: [
      "4.1. The Client acknowledges that the Company may act as a Market Maker (Principal). To mitigate the inherent conflict of interest, we utilize a fully automated No Human Intervention (NHI) execution model.",
      "4.2. Algorithmic Integrity: Order allocation is performed by an automated matching engine based on a strict First-In, First-Out (FIFO) logic. Our Dealing Desk staff are remunerated via fixed compensation structures, ensuring they have no financial incentive to manipulate trade outcomes or maximize client losses."
    ]
  },
  {
    title: "5. Introducing Broker (IB) & Affiliate Disclaimer",
    content: [
      "5.1. Independence of Third Parties: Introducing Brokers (IBs) and external consultants are independent third parties and are not agents, employees, or partners of MY INVESTMENT MARKETS.",
      "5.2. Indemnification from Advice: The Company does not endorse or guarantee any investment advice, signals, or \"guaranteed return\" schemes offered by IBs. The Client enters into transactions with such third parties at their own risk, and the Company’s role is strictly limited to the execution of orders on its platform."
    ]
  },
  {
    title: "6. Detailed Complaint Handling Procedure (Step-by-Step)",
    content: [
      "6.1. Step 1: Formal Submission: Any Client wishing to file a complaint must submit a written notice to support@myinvestmentmarkets.com. The notice must include the Account Number, Order ID, and a detailed description of the dispute.",
      "6.2. Step 2: Acknowledgment: The Company will acknowledge receipt of the complaint within 48 business hours.",
      "6.3. Step 3: Investigation: Our Compliance team will conduct a thorough investigation using server-side logs, price feed audits, and communication records.",
      "6.4. Step 4: Final Resolution: A formal written response will be issued within a reasonable timeframe (typically 15-30 business days). The Company’s internal technical records shall serve as the final authority in resolving execution disputes."
    ]
  },
  {
    title: "7. Fair Treatment & Best Execution Standards",
    content: [
      "7.1. Avoidance of Preferential Treatment: No client shall receive preferential price feeds or execution priority. We aggregate orders where appropriate to avoid unintended impacts on market price.",
      "7.2. Brokerage Neutrality: The Company is prohibited from directing client orders to specific liquidity venues based on commissions or incentives received by the Company. We prioritize \"Best Execution\" factors such as price, speed, and likelihood of settlement."
    ]
  },
  {
    title: "8. Anti-Bribery & Anti-Corruption (ABAC)",
    content: [
      "8.1. MY INVESTMENT MARKETS prohibits the offering, solicitation, or acceptance of any bribe, inducement, or unethical advantage to or from any public official, private company, or individual.",
      "8.2. Non-compliance with our ABAC policy results in immediate disciplinary action and potential reporting to the FSC Mauritius or law enforcement authorities."
    ]
  },
  {
    title: "9. Policy Oversight, Monitoring & Governing Law",
    content: [
      "9.1. This policy is subject to constant monitoring by the Compliance function and annual review by the Board of Directors.",
      "9.2. Governing Law: All disputes, complaints, and the interpretation of this Policy are governed exclusively by the Laws of the Republic of Mauritius. Any legal action must be initiated within the jurisdiction of the Mauritian courts."
    ]
  }
];

export const ComplaintHandlingPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-yellow-500/10 text-yellow-500 mb-6 border border-yellow-500/20 shadow-[0_0_40px_rgba(234,179,8,0.1)]">
            <MessageCircle size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Complaint Handling</h1>
        <p className="text-xl text-gray-400">Trading rules applicable on all MIM trading platforms.</p>
      </header>
      
      <div className="space-y-10">
        {complaintData.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-lg hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6 border-l-4 border-yellow-500 pl-4">{section.title}</h2>
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
