
import React from 'react';
import { FileText } from 'lucide-react';

const termsData = [
  {
    title: "1. Introduction and Scope of Agreement",
    content: [
      "1.1. This Client Agreement (\"Agreement\") constitutes a legally binding contract between MY INVESTMENT MARKETS and the Client. This Agreement governs all investment services and trading activities performed through MY INVESTMENT MARKETS’s platform.",
      "1.2. By registering an account, the Client acknowledges having read, understood, and consented to all terms herein. MY INVESTMENT MARKETS provides services on an \"Execution-Only\" basis, meaning no investment advice is provided. The Client is solely responsible for all trading decisions and risks.",
      "1.3. MY INVESTMENT MARKETS reserves the right to amend this Agreement to reflect changes in market conditions or regulations. Any such amendments become effective immediately upon being published on MY INVESTMENT MARKETS’s official website."
    ]
  },
  {
    title: "2. Account Registration and KYC Compliance",
    content: [
      "2.1. The Client must provide truthful and accurate information during registration. The Client warrants they are of legal age and possess the capacity to enter into binding financial contracts.",
      "2.2. Under international Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) laws, MY INVESTMENT MARKETS requires mandatory \"Know Your Customer\" (KYC) documentation, including Proof of Identity and Proof of Residence.",
      "2.3. MY INVESTMENT MARKETS maintains the absolute right to reject any application or suspend an existing account if the Client fails to provide satisfactory documentation, or if MY INVESTMENT MARKETS suspects fraudulent or suspicious financial activities. During a suspension, MY INVESTMENT MARKETS may restrict fund withdrawals and trading access."
    ]
  },
  {
    title: "3. Market Execution and Price Variance (Slippage)",
    content: [
      "3.1. MY INVESTMENT MARKETS acts as a counterparty or may transmit orders to third-party liquidity providers. All orders are executed at the best available market price at the time of execution.",
      "3.2. Price Variance (Slippage): The Client acknowledges that during periods of high market volatility, low liquidity, or rapid price movements, the final execution price may differ from the requested price. This \"Slippage\" is a standard market occurrence, and MY INVESTMENT MARKETS shall not be held liable for any financial loss resulting from such price differences.",
      "3.3. Execution Latency: MY INVESTMENT MARKETS is not responsible for losses caused by technical delays, internet connectivity issues, or system maintenance that may result in execution latency."
    ]
  },
  {
    title: "4. Trading Rules, Limits, and Order Management",
    content: [
      "4.1. Order Size Limitations: To ensure platform stability and effective risk management, MY INVESTMENT MARKETS reserves the right to impose maximum order size limits (e.g., 1 Lot per trade) or total exposure limits. Any order exceeding these predefined thresholds may be automatically rejected or adjusted by the system.",
      "4.2. Order Refusal and Modification: MY INVESTMENT MARKETS reserves the right, at its sole discretion, to refuse, cancel, or modify any order if it deems such action necessary for risk control, system integrity, or to prevent market abuse.",
      "4.3. System Errors: In the event of manifest errors or \"off-market\" price feeds caused by technical glitches, MY INVESTMENT MARKETS reserves the right to void or adjust the affected transactions to reflect the fair market price."
    ]
  },
  {
    title: "5. Prohibited Trading Practices and Market Abuse",
    content: [
      "5.1. Prohibited Strategies: MY INVESTMENT MARKETS strictly prohibits trading strategies designed to exploit technical latencies, system vulnerabilities, or price feed errors. This includes, but is not limited to, Latency Arbitrage, Reverse Arbitrage, Hitting abnormal price feeds, and High-Frequency Trading (HFT) intended to disrupt platform stability.",
      "5.2. EA & Algorithmic Trading: MY INVESTMENT MARKETS welcomes the use of Expert Advisors (EAs) and automated trading algorithms. However, the Client is prohibited from using EAs designed to exploit platform vulnerabilities, generate excessive server load (spamming orders), or engage in \"Quote Stuffing.\" MY INVESTMENT MARKETS reserves the right to monitor EA activities to ensure they comply with fair market practices and do not disrupt the trading environment for other Clients.",
      "5.3. Sanctions and Profit Forfeiture: If MY INVESTMENT MARKETS, at its sole discretion, determines that a Client has engaged in prohibited practices, MY INVESTMENT MARKETS reserves the right to: (a) Void all affected trades; (b) Forfeit any profits generated from such activities; (c) Retrospectively adjust account balances; and (d) Terminate the Client’s account immediately without prior notice."
    ]
  },
  {
    title: "6. Margin, Leverage, and Negative Balance Protection",
    content: [
      "6.1. Margin Requirements: The Client must maintain sufficient margin at all times to support their open positions. Margin requirements are subject to change based on market volatility and MY INVESTMENT MARKETS's risk management policies.",
      "6.2. Automatic Liquidation (Stop-out): If the account equity falls below the predefined Stop-out level, MY INVESTMENT MARKETS reserves the right to automatically close open positions without prior notification to prevent further losses. MY INVESTMENT MARKETS is not liable for losses incurred due to such automatic liquidations.",
      "6.3. Negative Balance Protection: While MY INVESTMENT MARKETS offers Negative Balance Protection to retail clients under certain conditions, this protection does not apply to instances of market abuse or where a Client intentionally circumvents risk management protocols."
    ]
  },
  {
    title: "7. Specialized Accounts (Swap-Free / Islamic Accounts)",
    content: [
      "7.1. Eligibility and Purpose: Swap-Free (Islamic) accounts are provided solely for Clients who cannot pay or receive interest due to religious beliefs. These accounts are not to be used for commercial advantage or to avoid standard carrying costs.",
      "7.2. Abuse of Swap-Free Status: If MY INVESTMENT MARKETS suspects that a Client is exploiting the Swap-Free status (e.g., through long-term carry trades or arbitrage between swap-paying and swap-free accounts), MY INVESTMENT MARKETS reserves the right to: (a) Revoke the Swap-Free status; (b) Retrospectively charge all accumulated swaps; and (c) Impose an Administrative Fee on open positions.",
      "7.3. Administrative Fees: MY INVESTMENT MARKETS may apply a daily administrative fee for positions held beyond a specified duration on Swap-Free accounts to cover the operational and hedging costs of maintaining interest-free positions."
    ]
  },
  {
    title: "8. Payments, Deposits, and Withdrawal Policy",
    content: [
      "8.1. Third-Party Payment Prohibition: MY INVESTMENT MARKETS strictly prohibits any payments from or to third-party accounts. All funds deposited into a trading account must originate from a source (bank account, card, or e-wallet) held in the same name as the Client's trading account.",
      "8.2. Withdrawal Processing: Withdrawal requests are processed within a reasonable timeframe, provided all KYC requirements and margin obligations are met. MY INVESTMENT MARKETS reserves the right to delay or reject a withdrawal if there is a suspicion of fraud, money laundering, or open disputes regarding trading activities.",
      "8.3. Fees and Charges: The Client is responsible for any intermediary bank fees, conversion rates, or transaction costs incurred during the transfer of funds. MY INVESTMENT MARKETS reserves the right to adjust its fee schedule with prior notice on its website."
    ]
  },
  {
    title: "9. Limitation of Liability and Force Majeure",
    content: [
      "9.1. Exclusion of Liability: MY INVESTMENT MARKETS shall not be liable for any financial loss, loss of opportunity, or indirect damages resulting from system errors, internet connectivity issues, or delays in price feed updates. The Client acknowledges that online trading involves inherent technical risks.",
      "9.2. Force Majeure: In the event of \"Force Majeure\" (including but not limited to war, strikes, natural disasters, extreme market volatility, or government intervention), MY INVESTMENT MARKETS may: (a) Increase margin requirements; (b) Close open positions at the best available price; (c) Suspend trading services; and (d) Modify execution rules to protect platform integrity.",
      "9.3. No Warranties: All services and platforms are provided on an \"As-Is\" and \"As-Available\" basis without any warranties of any kind, express or implied."
    ]
  },
  {
    title: "10. Termination, Default, and Governing Law",
    content: [
      "10.1. Termination of Agreement: Either party may terminate this Agreement by giving written notice to the other party. However, MY INVESTMENT MARKETS reserves the right to terminate the Agreement immediately and without prior notice in the event of a Client's breach of terms, market abuse, or default.",
      "10.2. Events of Default: If the Client fails to meet margin calls, provides false information, or engages in prohibited trading practices, MY INVESTMENT MARKETS may close all open positions and freeze the account balance to offset any liabilities.",
      "10.3. Governing Law and Jurisdiction: This Agreement and all business relations between MY INVESTMENT MARKETS and the Client shall be governed by and construed in accordance with the laws of the jurisdiction where MY INVESTMENT MARKETS is registered (e.g., Mauritius). Any legal disputes shall be subject to the exclusive jurisdiction of the competent courts of that region."
    ]
  },
  {
    title: "11. Technical Risks and System Availability",
    content: [
      "11.1. The Client acknowledges that trading via an electronic system involves inherent risks, including hardware/software failure and internet connectivity issues. MY INVESTMENT MARKETS does not guarantee continuous or uninterrupted access to the Platform.",
      "11.2. System Maintenance: MY INVESTMENT MARKETS reserves the right to suspend platform access for scheduled or emergency maintenance. During such times, order execution, modification, or cancellation may be unavailable.",
      "11.3. No Liability for Latency: MY INVESTMENT MARKETS is not responsible for any financial loss or missed opportunity caused by execution delays or communication failures beyond MY INVESTMENT MARKETS's direct control."
    ]
  },
  {
    title: "12. Client Representations and Warranties",
    content: [
      "12.1. The Client represents and warrants that they are of sound mind, legal age, and possess the necessary financial experience to understand the risks of leveraged trading.",
      "12.2. Source of Funds: The Client warrants that all funds deposited into MY INVESTMENT MARKETS are not the proceeds of any criminal or illegal activity.",
      "12.3. Restricted Jurisdictions: MY INVESTMENT MARKETS does not provide services to residents of certain jurisdictions, including but not limited to: the United States of America, Canada, North Korea, Iran, Cuba, Syria, Sudan, and Myanmar. Furthermore, MY INVESTMENT MARKETS does not provide services to any individuals or entities listed on the UN, EU, or OFAC sanctions lists. MY INVESTMENT MARKETS reserves the right to immediately terminate any account identified as originating from a restricted jurisdiction and may freeze or return the remaining funds at its sole discretion, subject to regulatory requirements."
    ]
  },
  {
    title: "13. Conflicts of Interest and Disclosure",
    content: [
      "13.1. The Client acknowledges that MY INVESTMENT MARKETS may have a material interest or a relationship that gives rise to a conflict of interest in transactions. MY INVESTMENT MARKETS maintains a Conflict of Interest Policy to mitigate such risks.",
      "13.2. Aggregation of Orders: MY INVESTMENT MARKETS may aggregate Client orders with its own or other clients' orders when it believes such aggregation is not to the Client's overall disadvantage, although it may occasionally result in a less favorable price for a particular trade."
    ]
  },
  {
    title: "14. Data Protection and Confidentiality",
    content: [
      "14.1. MY INVESTMENT MARKETS shall collect and process Client's personal data in accordance with international Data Protection regulations. This data is used for KYC/AML compliance, account management, and service improvement.",
      "14.2. Disclosure to Third Parties: MY INVESTMENT MARKETS may disclose Client information to regulatory bodies, law enforcement, or third-party service providers (e.g., payment processors, KYC vendors) as required for operational or legal purposes."
    ]
  },
  {
    title: "15. Miscellaneous and Entire Agreement",
    content: [
      "15.1. Severability: If any provision of this Agreement is found to be invalid by a court, the remaining provisions shall remain in full force and effect.",
      "15.2. No Waiver: Any delay or failure by MY INVESTMENT MARKETS to exercise its rights under this Agreement shall not be construed as a waiver of those rights.",
      "15.3. Entire Agreement: This Agreement, including all schedules and policies, constitutes the entire agreement between the parties and supersedes all prior communications or understandings."
    ]
  },
  {
    title: "16. Intellectual Property and Platform Security",
    content: [
      "16.1. All content on MY INVESTMENT MARKETS’s website and trading platform, including software, logos, and data feeds, is the exclusive Intellectual Property of MY INVESTMENT MARKETS or its licensors.",
      "16.2. The Client is prohibited from reverse-engineering, hacking, or attempting to bypass any security protocols of the platform. Any such attempt will result in immediate account termination and potential legal action.",
      "16.3. The Client is solely responsible for maintaining the confidentiality of their login credentials. MY INVESTMENT MARKETS is not liable for unauthorized access caused by the Client's negligence."
    ]
  },
  {
    title: "17. Inactive and Dormant Accounts",
    content: [
      "17.1. An account with no trading activity for a continuous period of six (6) months shall be classified as a Dormant Account.",
      "17.2. MY INVESTMENT MARKETS reserves the right to charge a monthly Inactivity Fee (e.g., $10 or equivalent) on Dormant Accounts until the balance reaches zero or the account becomes active again.",
      "17.3. If an account remains inactive with a zero balance for over 12 months, MY INVESTMENT MARKETS reserves the right to close the account without further notice."
    ]
  },
  {
    title: "18. Complaints and Dispute Resolution",
    content: [
      "18.1. In the event of a dispute, the Client must first submit a formal complaint via email to MY INVESTMENT MARKETS’s Compliance Department. MY INVESTMENT MARKETS will provide a response within a reasonable timeframe.",
      "18.2. No Class Action: The Client agrees to resolve disputes on an individual basis and waives any right to participate in a class-action lawsuit or representative proceeding.",
      "18.3. MY INVESTMENT MARKETS’s Final Decision: While MY INVESTMENT MARKETS strives for fairness, the Client acknowledges that in technical disputes, MY INVESTMENT MARKETS’s internal server logs shall serve as the final and definitive evidence of any transaction or event."
    ]
  },
  {
    title: "19. Indemnification",
    content: [
      "19.1. The Client agrees to indemnify and hold MY INVESTMENT MARKETS harmless from any and all liabilities, losses, damages, costs, and expenses (including legal fees) incurred by MY INVESTMENT MARKETS as a result of the Client’s breach of this Agreement.",
      "19.2. This includes, but is not limited to, any costs arising from the Client's failure to provide accurate information or any legal action taken by third parties due to the Client's trading activities."
    ]
  },
  {
    title: "20. Communication and Electronic Signature",
    content: [
      "20.1. Electronic Consent: The Client acknowledges that clicking \"I Agree\" or \"Accept\" during the registration process constitutes a valid electronic signature and has the same legal force and effect as a physical signature.",
      "20.2. Record Keeping: MY INVESTMENT MARKETS may record all telephone conversations, emails, and chat logs between the Client and MY INVESTMENT MARKETS. These records shall be the sole property of MY INVESTMENT MARKETS and will be used as conclusive evidence in the event of a dispute.",
      "20.3. Official Communication: All formal notices from MY INVESTMENT MARKETS will be sent via the email address provided by the Client. It is the Client's responsibility to monitor their email and ensure it is from a trusted source."
    ]
  }
];

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 text-blue-500 mb-6 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
            <FileText size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Terms & Conditions</h1>
        <p className="text-xl text-gray-400">Agreement terms for signing up and using MIM services.</p>
      </header>
      
      <div className="space-y-12">
        {termsData.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-lg hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">{section.title}</h2>
            <div className="space-y-4">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Client Declaration */}
        <div className="bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/30 rounded-[2rem] p-8 md:p-12 mt-16 text-center">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-blue-400">Client Declaration</h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                The Client hereby declares that they have read, understood, and accepted the entire 20 sections of this Agreement. The Client specifically acknowledges the risks mentioned in Section 3 (Slippage), the prohibitions in Section 5 (Market Abuse), and MY INVESTMENT MARKETS’s right to forfeit profits and terminate accounts as a result of any breach. By clicking "Accept," the Client enters into a legally binding contract.
            </p>
        </div>
      </div>
    </div>
  );
};
