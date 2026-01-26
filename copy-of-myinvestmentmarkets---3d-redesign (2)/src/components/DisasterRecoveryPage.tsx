
import React from 'react';
import { Server } from 'lucide-react';

const disasterData = [
  {
    title: "1. Policy Statement",
    content: [
      "My Investment Markets (the \"Company\") has developed a Disaster Recovery Plan (DRP) to ensure that in case of a disaster or significant business disruption, business operations can continue and Company data can be protected. The Company recognizes the importance of being able to recover and resume operations, including technology support, in the event of a crisis or disaster, in order to meet its obligations to stakeholders. This DRP has been reviewed and approved by the Company's Board of Directors. Any changes, modifications, or alterations to the DRP must be reviewed and approved by the Board to ensure that it remains effective and up-to-date.",
      "The goal of the DRP is to provide a comprehensive strategy for ensuring business continuity, minimizing disruption to operations, and protecting the Company's data in the event of a disaster or significant business disruption. The DRP outlines specific procedures and protocols to be followed in the event of such an event and includes measures for recovery and restoration of critical systems and infrastructure. My Investment Markets is committed to maintaining an effective Disaster Recovery Plan and regularly reviewing and updating it to ensure that it meets the changing needs of the business and the evolving threat landscape.",
      "The DRP of the Company is designed to achieve the following objectives:",
      "1. Minimize the amount of time the business operations are disrupted due to a catastrophic event. The DRP aims to restore critical systems and applications promptly.",
      "2. Ensure that critical data and systems are protected and can be recovered quickly. This involves creating backups of essential data, storing them securely, and testing the ability to recover them.",
      "3. Prioritize the safety and security of employees and customers. This involves creating evacuation and communication plans and ensuring the physical security of critical systems.",
      "4. Help the organization maintain compliance with relevant laws, regulations, and industry standards.",
      "The DRP is an essential component of the Company's overall business strategy, as it ensures that the business can continue to operate in the event of a catastrophic event."
    ]
  },
  {
    title: "2. Our Goal in DRP",
    content: [
      "My Investment Markets (referred to as the \"Company\") has developed a Disaster Recovery Plan (DRP) with the primary goal of quickly resuming operations in the event of any significant disruptions while minimizing any interruptions to the business. The DRP includes all the critical systems and functions that are necessary for the Company to function efficiently. The plan's purpose is to ensure that the Company can recover from any material business disruptions in the most effective way possible.",
      "The Company's Board of Directors is responsible for reviewing and approving the Disaster Recovery Plan (DRP), as well as any updates or modifications made to the plan. The DRP is a comprehensive framework that covers all areas of the business, including technology support, data protection, employee and customer safety, and regulatory compliance.",
      "As part of the Disaster Recovery Plan (DRP) framework, the Company will ensure that the following information is maintained and accessible to all relevant employees:",
      "• A list of Board members and staff who should be contacted immediately in case of an emergency, along with their emergency contact details. This will ensure that the right people are informed promptly and can act quickly to mitigate any negative impact on the business.",
      "• Contact information for all critical business partners and liquidity providers of the Company. This will enable the Company to maintain communication with its critical partners and providers during an emergency, minimizing the impact on its operations.",
      "The Disaster Recovery Plan (DRP) is regularly reviewed and updated to ensure that it remains effective in the face of changing circumstances and emerging threats. The Company is committed to ensuring that its operations can quickly recover from any significant disruptions to maintain the continuity of its business operations."
    ]
  },
  {
    title: "3. Backup Option",
    content: [
      "In order to mitigate the potential risks of primary trading server failure or shutdown, My Investment Markets (hereafter referred to as \"the Company\") has established a contingency plan that involves the deployment of a backup trading server that can be activated swiftly to ensure business continuity. The Company has also implemented a comprehensive data backup system to ensure that all databases are backed up on a regular basis in their entirety.",
      "To ensure that all client transactions are processed and client account records are maintained in the event of any disruptions, the Company has put in place backup systems. These systems comprise:",
      "• Mobile System - This system allows clients to contact the Company by phone to obtain information about their trading accounts' status and place trades.",
      "• Terminal/trading platform System - This system enables the Company's staff to access each liquidity provider's trading platforms, allowing them to monitor trading exposure and execute trades with the provider.",
      "The Company is committed to staying current with technological advancements and will monitor them regularly to ensure that all systems remain relevant and up-to-date. This includes maintaining the backup systems' effectiveness and updating them as necessary to ensure they remain functional and available at all times."
    ]
  },
  {
    title: "4. Schedule Monitoring",
    content: [
      "To ensure the Disaster Recovery Plan (DRP) for an organization remains effective, it is important to continuously monitor and improve it. This involves several steps that include regular testing, reviewing and updating, tracking and evaluating, involving stakeholders, ensuring compliance, assessing and evaluating risks, and conducting regular audits.",
      "One of the key steps is regularly testing the DRP to identify any weaknesses and areas for improvement. This can include simulating disaster scenarios to evaluate the response of the DRP team and systems. Through this testing, organizations can identify any shortcomings and take the necessary steps to address them. Another important step is reviewing and updating the DRP on a regular basis. This includes updating processes, technology, and organizational structure to ensure that the DRP remains relevant and effective. It is important to track and evaluate the performance of the DRP to ensure it is achieving its goals. This includes tracking the response time of the team, the reliability of backup systems, and the accuracy of recovery procedures.",
      "The Company's Disaster Recovery Plan will include systematic monitoring of its operations to promptly detect emergency situations. The Risk Management department, along with other relevant departments such as IT, Backoffice, and Trade, oversees this monitoring process. The company utilizes both software monitoring and notification systems as well as manual inspection and reconciliation procedures.",
      "The Company's monitoring process also ensures:",
      "• Technological systems and equipment used in its operations are functioning correctly and are not experiencing any malfunctions or showing signs of declining performance;",
      "• The liquidity feed provided to its clients accurately reflects the aggregated liquidity pool available from its liquidity providers;",
      "• The market exposure on the client side is in full agreement with the market exposure on the side of the liquidity providers.",
      "Finally, conducting regular audits of the DRP can help verify its effectiveness and identify areas for improvement. This can include both internal and external audits to ensure the DRP is meeting the needs of the organization and its stakeholders."
    ]
  },
  {
    title: "5. Sign of Red-Flag: Server & Price Feed",
    content: [
      "A. Trading Server facing Problem:",
      "In case of server shutdown or malfunction during trading hours, the action of the company will be as follows:",
      "• The staff will notify the IT and operations departments.",
      "• Client orders will be accepted only via the telephone line, and clients will be informed through email and/or an online platform notification.",
      "• The back office will continue accepting and executing client orders through alternative means.",
      "• The IT department will ensure that the backup server is brought up securely and promptly.",
      "• The Backoffice will notify clients once trading has resumed on the backup server.",
      "• The IT department will work to restore the master trading server and ensure that the data is properly synced.",
      "• Once the master server is ready, the IT department and Backoffice will coordinate a return to processing client orders with minimal disruption, typically during market closure hours.",
      "• The management will report the situation to the relevant regulator for monitoring purposes, and the IT department will keep the management informed.",
      "",
      "B. Price feed Inconsistency:",
      "If the Back office identifies discrepancies or interruptions in the price feed from the liquidity providers, the following actions will be taken:",
      "• The Back office will promptly notify the IT department if there is a potential operational risk situation.",
      "• Clients will be informed of any errors in the price feed through email and platform notifications.",
      "• If the issue is traced back to a specific liquidity provider, the IT department will disable the stream from that provider.",
      "• The Back office will contact the corresponding liquidity provider to address and resolve the issue.",
      "• If the issue cannot be resolved quickly, trading in affected financial instruments will be temporarily disabled.",
      "• The Back office will fairly and impartially reverse any client trades made based on the inaccurate price feed in accordance with Market Integrity standards.",
      "• The Back office will take immediate measures to minimize market risk for the company, such as executing orders through other means if necessary.",
      "• Clear, concise, and frequent communication will be maintained with clients, providing regular updates on the situation and the progress of the resolution."
    ]
  },
  {
    title: "6. Exposure, Integrity & Record Storage",
    content: [
      "C. Trading Exposure:",
      "If there are discrepancies in the trading exposure, the Back office will promptly investigate and verify the problem.",
      "• The Back office will identify if the discrepancies are caused by a client open position that is not matched with liquidity providers, or if a liquidity provider is attributing trading positions that do not correspond to the clients' trading exposure.",
      "• The Back office will take corrective action to reverse any erroneous trading positions on the client's account(s).",
      "• If both conditions are met, the Back office will close the relevant trading positions with the liquidity provider as soon as possible.",
      "• If it is not possible to close the trading positions right away, the Back office will promptly establish a hedging market position with another liquidity provider.",
      "",
      "D. Integrity and Competence:",
      "Each department will carry out their tasks within their area of expertise and responsibility. Employees should not handle tasks or make decisions beyond their scope, and should instead direct the matter to the appropriate staff member with the necessary competence.",
      "",
      "E. Record Storage:",
      "The trading platform securely stores trade records on its internal servers, which are continuously monitored and protected by the Company. To ensure data security, the Company leverages top-tier global cloud infrastructure, with primary systems hosted on secure storage clouds. In addition, daily backups are conducted at the close of business and stored on a physically secure server located in Mauritius. Furthermore, an additional reserve copy of the data is stored on a separate cloud service, providing redundancy in the event of a system failure."
    ]
  },
  {
    title: "7. Disclosure to Client & Action Taken",
    content: [
      "F. Disclosure to Client:",
      "The Company is obligated to inform customers about the potential risks associated with trading. Customers must assume the following risks:",
      "• Market volatility: Trading in financial markets can be highly volatile, leading to sudden price fluctuations.",
      "• System failures: Technical issues with platforms, software, or internet can result in lost trades.",
      "• Economic events: Political instability or interest rate changes can impact market conditions.",
      "• Cybersecurity threats: Cyber attacks or security breaches can compromise data or trading systems.",
      "• Customer error: Mistakes made by customers, such as entering incorrect orders.",
      "",
      "G. Action Taken & Recovery Levels:",
      "When a disaster strikes, the disaster recovery plan team follows these key steps:",
      "• Activation: Formally declare the start of the recovery process and assign responsibilities.",
      "• Assessment: Assess the extent of damage, identify data loss, and determine RTO and RPO for each system.",
      "• Prioritisation: Prioritize recovery efforts based on the criticality of systems and data.",
      "• Notification: Notify stakeholders, including customers, partners, and employees, of the situation.",
      "• Implementation: Restore systems, data, and operations, including replacing hardware if necessary.",
      "• Testing: Test systems and processes to ensure they are functioning properly before ending the recovery process.",
      "• Documentation: Document the recovery process and identify areas for improvement.",
      "",
      "Classification of Recovery:",
      "Level-1: Estimated downtime – less than 1 day; Minor hardware/software damage; Processing can be restarted quickly.",
      "Level-2: Estimated downtime – from 2 to 6 days; Sufficient damage to hardware or facility; Selected teams called for action.",
      "Level-3: Estimated time for restoration – more than 1 week; Extensive damage or complete destruction of computer room; Contingency Plan activation."
    ]
  }
];

export const DisasterRecoveryPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-500/10 text-slate-400 mb-6 border border-slate-500/20 shadow-[0_0_40px_rgba(148,163,184,0.1)]">
            <Server size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Disaster Recovery Plan</h1>
        <p className="text-xl text-gray-400">Business continuity and system recovery protocols.</p>
      </header>
      
      <div className="space-y-10">
        {disasterData.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-lg hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6 border-l-4 border-slate-500 pl-4">{section.title}</h2>
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
