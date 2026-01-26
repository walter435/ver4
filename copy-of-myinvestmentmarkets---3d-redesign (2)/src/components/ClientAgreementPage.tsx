
import React from 'react';
import { Handshake } from 'lucide-react';

const agreementData = [
  {
    title: "1. Introduction & Regulatory Status",
    content: [
      "1.1. This Client Agreement (“Agreement”) is entered by and between MY INVESTMENT MARKETS (the “Company”) and the Client.",
      "1.2. The Company is authorised and regulated by the Financial Services Commission (“FSC”) Mauritius as an Investment Firm (License GB24203684).",
      "1.3. This Agreement sets out the terms upon which the Company will deal with the Client in respect of CFDs.",
      "1.4. The Agreement shall govern all CFD trading activity and sets out matters required to be disclosed under Applicable Regulations."
    ]
  },
  {
    title: "2. Interpretation of Terms",
    content: [
      "2.1. Defines key operational terms: Access Data (Passwords/Codes), Affiliate, Applicable Regulations (FSC Rules and Mauritius Laws), Base Currency, Quotes Flow, and Slippage.",
      "2.2. Client Terminal shall mean MetaTrader 4, MetaTrader 5, and any subsequent versions, including web and mobile trading facilities used by the Client.",
      "2.3. Scalping is defined as opening/closing positions within a very short duration to exploit latency or price errors, which is strictly monitored for platform integrity."
    ]
  },
  {
    title: "3. Commencement & Account Activation",
    content: [
      "3.1. This Agreement is binding upon the Company and the Client’s heirs/successors.",
      "3.2. The Agreement takes effect when the Company sends an account opening notice and upon the first funding of the Client’s Account.",
      "3.3. Clients must deposit the minimum initial deposit applicable to their account type.",
      "3.4. The Company is not required to accept the Client until all KYC documentation is received and internal checks are satisfied."
    ]
  },
  {
    title: "4. Client Categorisation",
    content: [
      "4.1. Clients are categorized as Retail, Professional, or Eligible Counterparties.",
      "4.2. Retail Clients receive the highest level of regulatory protection.",
      "4.3. The Company relies on the accuracy of information provided in the Application Form.",
      "4.4. The Client must notify the Company immediately if their financial situation or experience changes."
    ]
  },
  {
    title: "5. Capacity",
    content: [
      "5.1. The Client acts as a Principal and not as an agent or representative for any third party.",
      "5.2. All obligations under this Agreement are owed directly to the Client.",
      "5.3. The Company may act as a Principal on its own account (Execution Venue) or as an Agent for third-party execution venues to ensure liquidity."
    ]
  },
  {
    title: "6. Data Privacy & Communications",
    content: [
      "6.1. Client data is a unique asset and belongs to the Client.",
      "6.2. Disclosure is limited to a \"need-to-know\" basis for service providers.",
      "6.3. Recording: All telephone conversations and electronic communications (Email/Chat) between the Client and the Company may be recorded and used as conclusive evidence of Orders or Instructions in legal proceedings.",
      "6.4. The Company may use printed media storage (optical discs) to maintain permanent records of account signatures."
    ]
  },
  {
    title: "7. Services & Investment Advice",
    content: [
      "7.1. Services include: Receiving/transmitting orders, foreign currency services, and safekeeping of instruments.",
      "7.2. No Investment Advice: The Company does not provide advice on the merits of any Transaction. The Client alone makes trading decisions based on their own judgment.",
      "7.3. Expert Advisors (EA): The use of EAs and Trailing Stops is allowed but executed under the Client's sole responsibility. The Company is not liable for software errors or third-party plug-in failures."
    ]
  },
  {
    title: "8. Trading Procedures & Order Execution",
    content: [
      "8.1. Quotes are obtained from major Tier-1 Liquidity Providers.",
      "8.2. Market Execution: Orders are executed at the best available market price, even if it differs from the requested price.",
      "8.3. Abusive Trading: Scalping and Pip-Hunting involving latency arbitrage are prohibited. The Company reserves the right to cancel such transactions or terminate the account.",
      "8.4. Slippage: During high volatility, slippage may occur, and orders will be filled at the next best available price."
    ]
  },
  {
    title: "9. Margin Requirements",
    content: [
      "9.1. Clients must maintain Initial and Hedged Margin as specified in Contract Specifications.",
      "9.2. Stop-out Policy: If Equity falls below the required percentage (e.g., 50% or as specified), the Company has the right to close Open Positions without consent.",
      "9.3. The Company has no obligation to make Margin Calls.",
      "9.4. Margin must be paid in cash; non-cash collateral is accepted only at the Company’s discretion."
    ]
  },
  {
    title: "10. Confirmations & Errors",
    content: [
      "10.1. Trade confirmations are sent via email or the Trading System's internal mail.",
      "10.2. Confirmations are deemed conclusive and binding unless the Client contests them in writing within two (2) Business Days.",
      "10.3. The Company reserves the right to correct manifest errors or omissions in account statements, whether resulting in profit or loss."
    ]
  },
  {
    title: "11. Decline of Client’s Orders",
    content: [
      "11.1. The Company may refuse to execute any Order if: (a) Free Margin is insufficient; (b) Abnormal market conditions exist; (c) Suspected money laundering or criminal acts; (d) The Order aims at market manipulation; or (e) Force Majeure events occur.",
      "11.2. The Client has no right to claim damages if an Order is declined under these conditions."
    ]
  },
  {
    title: "12. Dormant & Inactive Accounts",
    content: [
      "12.1. Accounts with no activity for six (6) months are considered Dormant.",
      "12.2. Dormant accounts are subject to an Inactivity Fee of 20 USD (or equivalent) per month.",
      "12.3. Accounts remaining dormant for twelve (12) months will be closed.",
      "12.4. Reactivation requires new KYC/CDD procedures and a fresh deposit."
    ]
  },
  {
    title: "13. Regulatory Provisions & Record Keeping",
    content: [
      "13.1. The Company may take any action necessary to ensure compliance with FSC Mauritius rules.",
      "13.2. Statutory Retention: In accordance with the Financial Intelligence and Anti-Money Laundering Act, the Company will maintain all Client records for at least SEVEN (7) years after the termination of the Agreement."
    ]
  },
  {
    title: "14. Governing Law & Jurisdiction",
    content: [
      "14.1. This Agreement and all transactional relations are governed by the Laws of the Republic of Mauritius.",
      "14.2. All disputes shall be finally settled in the competent courts of Mauritius.",
      "14.3. Any action by the Client must be brought within three months from the day the cause of action arose."
    ]
  },
  {
    title: "15. Severability",
    content: [
      "15.1. If any part of this Agreement is held to be unenforceable or illegal by a Court, that part will be deemed excluded.",
      "15.2. The legality or enforceability of the remaining provisions shall not be affected."
    ]
  },
  {
    title: "16. Non-Exercise of Rights",
    content: [
      "16.1. The Company’s failure to insist upon strict performance or to exercise any right/remedy shall not constitute a waiver of such rights.",
      "16.2. All remedies provided to the Company are cumulative and not exclusive of legal rights."
    ]
  },
  {
    title: "17. Assignment",
    content: [
      "17.1. The Company may at any time transfer, assign or novate any of its rights, benefits or obligations under this Agreement subject to providing notification to the Client.",
      "17.2. The Client may not transfer, assign, or otherwise move their rights or obligations without the prior written consent of the Company."
    ]
  },
  {
    title: "18. Corporate Events & Adjustments",
    content: [
      "18.1. If any Security becomes subject to a Corporate Event, the Company reserves the right to determine the appropriate adjustment to preserve the economic equivalent of the Transaction.",
      "18.2. The Company is authorized to transfer excess funds between any accounts of the Client to satisfy margin requirements or satisfy debit balances.",
      "18.3. All adjustments made by the Company shall be conclusive and binding upon the Client."
    ]
  },
  {
    title: "19. Netting and Set-Off",
    content: [
      "19.1. The Company has the right to combine all Client Accounts held in the Client's name and consolidate/set-off balances.",
      "19.2. All funds, securities, and property in the Client’s account are subject to a security interest and general lien in the Company’s favour to secure any indebtedness.",
      "19.3. The Client grants the Company the right to pledge or re-pledge collateral held in the account."
    ]
  },
  {
    title: "20. Currency Conversion",
    content: [
      "20.1. The Company is entitled to effect any currency conversions deemed necessary to comply with its rights or complete a Transaction at prevailing market rates.",
      "20.2. The Client will bear all Foreign Currency exchange risks arising from any Transaction or the exercise of the Company’s rights under this Agreement."
    ]
  },
  {
    title: "21. Commissions, Charges & Taxes",
    content: [
      "21.1. Provision of services is subject to Spreads, Commissions, and Swaps.",
      "21.2. The Company may pay or receive fees from third parties as permissible under Applicable Regulations.",
      "21.3. Tax Liability: The Client is solely responsible for all filings, tax returns, and payments (including VAT/Transfer taxes) arising from any Transaction. The Company does not provide tax or legal advice."
    ]
  },
  {
    title: "22. Deposits and Withdrawals",
    content: [
      "22.1. The Company does not accept third-party payments; the depositor’s name must match the Client Account holder’s name.",
      "22.2. Withdrawals: Processed within five (5) Business Days, provided free margin is sufficient.",
      "22.3. All withdrawals must return to the original source (Bank/Card/E-wallet) used for the initial deposit before alternative methods are permitted."
    ]
  },
  {
    title: "23. Deposit and Withdrawal Fees",
    content: [
      "23.1. The Company may, at its discretion, charge or waive transfer fees.",
      "23.2. Any abuse of the 0.00% fee benefit (e.g., frequent deposits without trading) will result in the Company deducting the corresponding transfer costs from the Client Account."
    ]
  },
  {
    title: "24. Client Money & Segregation",
    content: [
      "24.1. Client funds are kept in Segregated Client Accounts, separate from the Company’s operational capital.",
      "24.2. The Company shall not account to the Client for interest earned on segregated funds.",
      "24.3. Omnibus Accounts: Client money may be held in omnibus accounts with third-party banks or clearing houses located in Mauritius or globally."
    ]
  },
  {
    title: "25. Communications & Notices",
    content: [
      "25.1. Notices to the Company must be in writing via email or commercial courier.",
      "25.2. Communications to the Client via the Online Trading System internal mail are deemed received immediately after sending.",
      "25.3. The Client must notify the Company immediately of any changes to their contact details."
    ]
  },
  {
    title: "26. Complaints Handling",
    content: [
      "26.1. All complaints must follow the Complaint Handling Policy.",
      "26.2. Trading errors must be reported within 24 hours from the error time; otherwise, the Company will not be liable for investigations.",
      "26.3. All disputes shall be resolved in good faith and consistent with market practice."
    ]
  },
  {
    title: "27. Electronic Signature",
    content: [
      "27.1. Use of an electronic signature has the same legal effect as an original signature and is admissible as evidence.",
      "27.2. No third-party verification is necessary for the enforceability of signatures between the Client and the Company."
    ]
  },
  {
    title: "28. Force Majeure",
    content: [
      "28.1. Force Majeure includes war, terrorism, natural disasters, breakdown of communication lines, or regulatory bans.",
      "28.2. In such events, the Company may increase margin requirements, close positions at its discretion, or suspend trading without prior notice."
    ]
  },
  {
    title: "29. Time of Essence",
    content: [
      "29.1. Time shall be of the essence in this Agreement, meaning that all dates and timeframes specified herein for the performance of obligations (especially margin payments and notices) are critical and must be strictly adhered to by the Client."
    ]
  },
  {
    title: "30. Default",
    content: [
      "30.1. Each of the following constitutes an “Event of Default”:",
      "• Failure to provide Margin or any amount due;",
      "• Failure to perform any obligation due to the Company;",
      "• Application for bankruptcy, insolvency, or receivership;",
      "• Inability to pay debts as they fall due;",
      "• Abusive or threatening behavior towards staff;",
      "• Change of physical location without notification;",
      "• Death or mental incapacity of the Client;",
      "• Breach of any terms of this Agreement or Mauritius legislation;",
      "• Suspicion of money laundering, terrorist financing, or other criminal acts;",
      "• Engaging in prohibited Scalping or Pip-Hunting strategies.",
      "",
      "30.2. If an Event of Default occurs, the Company may, at its absolute discretion and without prior Written Notice, take one or more of the following actions:",
      "• Terminate the Agreement;",
      "• Close out all Open Positions at current Quotes;",
      "• Debit the Client Account for amounts due;",
      "• Combine/consolidate Client Accounts and set off balances;",
      "• Sell any Client property held by the Company;",
      "• Cancel any outstanding orders or commitments.",
      "",
      "30.3. The Company reserves the right to adjust leverage if it determines the Client is systematically attempting to exploit margin abilities to increase risk levels.",
      "30.4. The Company is not bound by contracts made at manifestly incorrect prices (Error Quotes)."
    ]
  },
  {
    title: "31. Termination",
    content: [
      "31.1. Each Party may terminate this Agreement with immediate effect by giving Written Notice to the other Party.",
      "31.2. Termination will not affect obligations already incurred in respect of Open Positions or any legal rights already arisen.",
      "31.3. Upon termination, all amounts payable to the Company (fees, charges, commissions, realized losses) become immediately due.",
      "31.4. The Company reserves the right to keep Client funds as necessary to close existing positions or satisfy pending obligations.",
      "31.5. Upon termination, access to the Online Trading System will be ceased, and the Company may freeze or close any open positions.",
      "31.6. Any remaining favorable Balance will be paid to the Client as soon as reasonably practicable, subject to the Company’s right to refuse third-party transfers."
    ]
  },
  {
    title: "32. Business Introducer (IB)",
    content: [
      "32.1. The Company is not responsible for the conduct or representations of Business Introducers (IBs).",
      "32.2. The Client waives any claims against the Company for actions or omissions of an IB.",
      "32.3. IBs are not authorized to provide guarantees or promises on behalf of the Company."
    ]
  },
  {
    title: "33. Limitation of Liability",
    content: [
      "33.1. The Company is not liable for losses arising from inaccuracies in news/research or technical delays unless due to gross negligence.",
      "33.2. No Consequential Loss: The Company shall not be liable for special, indirect, or consequential losses, including loss of profit or opportunity, regardless of market movements."
    ]
  },
  {
    title: "34. Representations & Warranties",
    content: [
      "34.1. Client warrants that all provided info is true, accurate, and they are of legal age.",
      "34.2. Legality of Funds: Client confirms funds are not proceeds of illegal activity or intended for terrorist financing.",
      "34.3. Client acknowledges they act as Principal and have assessed the financial risks."
    ]
  },
  {
    title: "35. Conflicts of Interest",
    content: [
      "35.1. Market Maker Role: The Company may act as a Principal (Market Maker) and be the counterparty to Client trades to ensure market liquidity.",
      "35.2. The Company may enter into offsetting instruments for its own account, and prices offered to the Client may differ from those quoted by other counterparties."
    ]
  },
  {
    title: "36. Risk Acknowledgments",
    content: [
      "36.1. Trading in CFDs carries a high degree of risk and gearing/leverage can lead to large losses.",
      "36.2. No Delivery: Client will not be entitled to physical delivery of the Underlying Asset.",
      "36.3. Trading occurs Over-The-Counter (OTC) and not on a regulated exchange."
    ]
  },
  {
    title: "37. Amendments",
    content: [
      "37.1. The Company has the right to amend the terms and conditions of this Agreement at any time.",
      "37.2. Such amendments will be notified to the Client by posting on the Website or by sending an internal mail via the Online Trading System/Email.",
      "37.3. Amendments shall take effect at least two (2) Business Days after notice is given, unless the change is required by Applicable Regulations or Law, in which case it may take effect immediately.",
      "37.4. The Client acknowledges that a variation which is made to reflect a change of law or regulation may take effect before notice is received."
    ]
  },
  {
    title: "38. Acceptance of Amendments",
    content: [
      "38.1. Any amendment will be deemed accepted by the Client if they continue to use the Company's services or the Online Trading System after the notice period has expired.",
      "38.2. If the Client does not agree with the amendments, they must notify the Company in writing and request the closure of their account before the changes take effect.",
      "38.3. No amendment provided by the Client shall be valid or binding unless specifically agreed upon in writing by an authorized representative of the Company."
    ]
  },
  {
    title: "39. Entire Agreement & Signatures",
    content: [
      "39.1. This Agreement, together with all related documents (Risk Disclosure, Privacy Policy, etc.), constitutes the entire agreement between the Parties and supersedes any prior oral or written representations or agreements.",
      "39.2. The Client confirms they have read, understood, and agreed to all terms of this Agreement by clicking \"I Accept\" or by signing the Application Form.",
      "39.3. Both Parties agree that this Agreement may be executed by electronic signature, and such signature shall be treated as an original and legally binding execution.",
      "39.4. This Agreement is executed in English; in case of any discrepancy between the English version and any translation, the English version shall prevail."
    ]
  }
];

export const ClientAgreementPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-500/10 text-gray-400 mb-6 border border-gray-500/20 shadow-[0_0_40px_rgba(156,163,175,0.1)]">
            <Handshake size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Client Agreement</h1>
        <p className="text-xl text-gray-400">Final binding agreement between the client and MIM.</p>
      </header>
      
      <div className="space-y-10">
        {agreementData.map((section, idx) => (
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
