
import React from 'react';
import { TrendingDown } from 'lucide-react';

const riskManagementData = [
  {
    title: "1. Risk Management Philosophy & Core Objectives",
    content: [
      "MY INVESTMENT MARKETS (the “Company”) operates under a sophisticated risk management philosophy that integrates risk oversight into every facet of our strategic planning and daily business activities. As a regulated Investment Dealer, we acknowledge that exposure to market volatility, operational disruptions, and global economic shifts is inherent. Our primary objective is to manage this exposure to protect prospective earnings and capital stability. We are fully committed to a strategy where risk management is not merely a form of control, but a source of value creation for our stakeholders. By maintaining a rigorous balance between return and risk, we ensure that our sustainability and financial strength are buttressed by effective mitigation actions for the long-term benefit of our global clientele."
    ]
  },
  {
    title: "2. The 'Three-Lines-of-Defence' Governance Model",
    content: [
      "To ensure clear accountability and objective oversight, the Company has adopted the globally recognized ‘Three-Lines-of-Defence’ model. This structural framework ensures that risk ownership is taken at all levels:",
      "• 1st Line (Management Control): Operational managers identify and manage risks within their daily processes according to the Board-approved risk appetite.",
      "• 2nd Line (Risk & Compliance): Our dedicated Compliance and Risk functions design and deploy the overall frameworks, providing objective oversight and monitoring adherence to policies.",
      "• 3rd Line (Independent Audit): Independent internal and external auditors provide final assurance that the risk management process is functioning as designed, ensuring continuous improvement."
    ]
  },
  {
    title: "3. Strategic Risk Mitigation: The 4-T Strategy",
    content: [
      "Our operational environment is managed through a structured qualitative and quantitative assessment, utilizing the \"4-T Strategy\" to address potential threats and vulnerabilities:",
      "• Treat: Implementing proactive controls to reduce the likelihood or impact of identified risks.",
      "• Transfer: Mitigating financial exposure by shifting risks to third-party liquidity providers or through comprehensive insurance.",
      "• Tolerate: Acknowledging risks where the impact is within an acceptable range and the cost of mitigation is disproportionate.",
      "• Terminate: Redesigning business processes to completely eliminate specific risk categories that exceed our appetite."
    ]
  },
  {
    title: "4. Enterprise Risk Framework & COSO Standards",
    content: [
      "Our Risk Management Framework is fully aligned with the COSO (Committee of Sponsoring Organizations of the Treadway Commission) Enterprise Risk Management (ERM) standard. This benchmark allows the Company to integrate insight, oversight, and governance into a seamless cycle. By analyzing past incident loss events and present risk profiles, we can predict future threats and implement systematic tools, training, and guidance to protect the Company's integrity. This holistic approach ensures that our required returns and capital allocation are always in sync with our business targets and profitability expectations."
    ]
  },
  {
    title: "5. Comprehensive Risk Profile & Mitigation Examples",
    content: [
      "We continuously identify and review exposures across multiple risk dimensions:",
      "• Strategic Risk: Monitoring management decisions and external market conditions to ensure business continuity.",
      "• Operational Risk: Safeguarding against failures in internal processes, systems, or human error through robust IT stability and cyber-security frameworks.",
      "• Financial Risk: Rigorous capital management and liquidity stress testing (using cashflow forecasts and asset scenario testing) to ensure we can meet all liabilities under extreme volatility.",
      "• Financial Crime Risk: Stringent AML/CFT procedures, including segregation of duties and specialized staff training, to detect and prevent fraud and money laundering."
    ]
  },
  {
    title: "6. Product, Geographical & Periodic Oversight",
    content: [
      "The Company adopts a Risk-Based Approach (RBA) tailored to the nature of CFD transactions. While our products are designed with traceable and non-anonymous features to mitigate misuse, we apply strict geographical screening via our AML Country Risk Matrix. This matrix ranks jurisdictions according to UN sanctions and FATF indices. Furthermore, we maintain a Periodic Review Schedule (Refresh/Re-screen) for all client files, ranging from semi-annual to biennial intervals, ensuring that every business relationship remains strictly within the Company's risk appetite and regulatory mandates."
    ]
  }
];

export const RiskManagementPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-500/10 text-gray-400 mb-6 border border-gray-500/20 shadow-[0_0_40px_rgba(156,163,175,0.1)]">
            <TrendingDown size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Risk Management</h1>
        <p className="text-xl text-gray-400">Our approach to managing operational and market risks.</p>
      </header>
      
      <div className="space-y-10">
        {riskManagementData.map((section, idx) => (
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
