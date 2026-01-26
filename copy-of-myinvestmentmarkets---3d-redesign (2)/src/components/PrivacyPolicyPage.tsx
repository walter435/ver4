
import React from 'react';
import { Lock } from 'lucide-react';

const privacyData = [
  {
    title: "1. Introduction & Global Regulatory Standards",
    content: [
      "MY INVESTMENT MARKETS (hereinafter referred to as the \"Company\", \"we\", \"us\", or \"our\") is committed to protecting the privacy and security of our clients' personal data. This Privacy Policy is formulated in strict accordance with the Mauritius Data Protection Act 2017 (DPA) and aligns with the standards of the EU General Data Protection Regulation (GDPR). As a regulated entity under the Financial Services Commission (FSC), we act as a Data Controller, ensuring that all processing activities are conducted with legal, fair, and transparent principles. This policy explains how we collect, process, and safeguard your data throughout our professional relationship, ensuring that your personal autonomy is prioritized in our global infrastructure."
    ]
  },
  {
    title: "2. Detailed Categories of Collected Information",
    content: [
      "We collect several types of information to provide a robust trading environment:",
      "• KYC & Identity Data: Full legal name, date of birth, gender, nationality, and high-resolution copies of government-issued identification (Passport, National ID).",
      "• Financial & Economic Profile: Employment status, estimated annual income, net worth, source of wealth, and investment experience to ensure suitability under regulatory requirements.",
      "• Digital Footprint & Technical Data: IP addresses, device identifiers (MAC address, IMEI), browser types, operating system details, and geographic location data derived from GPS or WiFi signals to prevent unauthorized access.",
      "• Blockchain & Transactional Data: Trading history, deposits, withdrawals, and in the case of digital assets, public wallet addresses and on-chain transaction hashes.",
      "• Communications: Audio and video recordings of support calls, transcripts of live chats, and email correspondence for quality assurance and compliance monitoring."
    ]
  },
  {
    title: "3. Purpose and Legal Basis for Processing",
    content: [
      "Our processing activities are grounded in the following legal bases:",
      "• Contractual Necessity: To establish and maintain your account, process trade orders, and facilitate seamless financial transactions.",
      "• Legal & Regulatory Compliance: To fulfill our obligations regarding Anti-Money Laundering (AML), Counter-Terrorism Financing (CFT), and tax reporting standards (CRS/FATCA).",
      "• Legitimate Interests: To optimize our platform’s performance, detect and prevent sophisticated fraud, and enhance our cybersecurity defenses through automated algorithmic monitoring.",
      "• Consent: For non-essential activities such as marketing communications and participation in corporate webinars or promotional surveys."
    ]
  },
  {
    title: "4. Strategic Data Disclosure & Global Transfers",
    content: [
      "We do not sell or monetize your personal information. Disclosure is restricted to the following strategic partners:",
      "• Tier-1 Liquidity Providers & Prime Brokers: To ensure the depth of liquidity and the integrity of trade execution on our platform.",
      "• Specialized Service Providers: Third-party firms specializing in KYC/AML screening, blockchain forensics, and cybersecurity analytics, all of whom are contractually bound to our high privacy standards.",
      "• Judicial & Regulatory Authorities: Disclosure to the FSC, FIU, or other law enforcement agencies when mandated by court orders or legal proceedings.",
      "• International Data Transfers: Data may be stored on secure, encrypted cloud clusters (e.g., Google Cloud) globally, protected by Standard Contractual Clauses (SCC) to ensure data sovereignty."
    ]
  },
  {
    title: "5. User Rights & Data Autonomy Under DPA/GDPR",
    content: [
      "In accordance with international data protection frameworks, you are entitled to:",
      "• Right of Access & Portability: Request a comprehensive copy of your personal data in a structured, commonly used, and machine-readable format.",
      "• Right to Rectification & Erasure: Correct any inaccuracies or request the deletion of your data when it is no longer necessary for its original purpose.",
      "• Right to Restrict Processing: Limit how we use your data during specific disputes or legal investigations.",
      "• Right to Object: Oppose the use of your data for direct marketing or automated profiling. Note: Deletion requests are subject to our statutory 7-year retention obligation under Mauritius Financial Law."
    ]
  },
  {
    title: "6. Cookie Policy & Advanced Tracking Technologies",
    content: [
      "Our digital interface utilizes cookies and web beacons to enhance functionality and security:",
      "• Strictly Necessary Cookies: Essential for secure login, session management, and protecting the integrity of the trading terminal.",
      "• Analytical & Performance Cookies: Used to aggregate anonymous traffic data, identifying user behavior patterns to optimize site navigation and latency.",
      "• Targeting & Marketing Cookies: Deployed to deliver personalized educational content and relevant market updates. You may manage or revoke your cookie consent through your browser’s \"Privacy\" settings at any time."
    ]
  },
  {
    title: "7. Enterprise-Grade Data Security & Safeguards",
    content: [
      "We employ a \"Security-by-Design\" approach to protect your information:",
      "• Encryption Standards: All sensitive data, including payment credentials, are encrypted using Advanced Encryption Standard (AES-256) and transmitted via Secure Socket Layer (SSL) protocols.",
      "• Access Control: Strict internal protocols ensure that only authorized compliance and security personnel have access to personally identifiable information, protected by Multi-Factor Authentication (MFA).",
      "• Physical & Logical Isolation: Our primary servers are located in highly secure, tier-4 data centers with 24/7 monitoring and redundant fail-safe mechanisms."
    ]
  },
  {
    title: "8. Retention Policy & Statutory Obligations",
    content: [
      "To remain compliant with the Financial Intelligence and Anti-Money Laundering Act (FIAMLA), the Company adheres to a strict data retention policy.",
      "• Active Period: Data is maintained as long as the account remains active.",
      "• Post-Termination Period: Following the closure of a client relationship, all personal data, transaction logs, and communication records are securely archived for a minimum period of seven (7) years. This is to ensure we can satisfy regulatory audits, legal inquiries, and historical record-keeping requirements."
    ]
  },
  {
    title: "9. Ongoing Updates & Final Legal Disclaimer",
    content: [
      "MY INVESTMENT MARKETS reserves the right to modify this Privacy Policy to reflect evolving legal landscapes and technological advancements.",
      "• Notification of Material Changes: Clients will be notified of significant updates via email or prominent site announcements.",
      "• Assumption of Responsibility: While we take exhaustive measures, the security of your account also depends on your vigilance. The Company shall not be held liable for breaches resulting from the user's negligence, such as the misplacement of login credentials or the use of insecure personal devices."
    ]
  }
];

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-500/10 text-gray-400 mb-6 border border-gray-500/20 shadow-[0_0_40px_rgba(156,163,175,0.1)]">
            <Lock size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-400">How we collect, use, and protect your data.</p>
      </header>
      
      <div className="space-y-10">
        {privacyData.map((section, idx) => (
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
