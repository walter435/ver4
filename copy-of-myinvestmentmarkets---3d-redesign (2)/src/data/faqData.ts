
export type FAQCategory = 
  | "Account" 
  | "MT5" 
  | "Web Trade" 
  | "Deposit & Withdrawals" 
  | "Partners" 
  | "Terms"
  | "Others";

export interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqData: FAQItem[] = [
  // --- Account ---
  {
    category: "Account",
    question: "What steps and document submission procedures are required to open a new MIM account?",
    answer: "Opening an MIM account begins with the registration process on the official website. Customers need to provide basic information such as their name, email address, and mobile phone number, and set a secure password. The next step is the KYC (Know Your Customer) verification process. Customers must submit a copy of an identity document (e.g., passport, national ID card, or driver’s license) and a proof of residence issued within the last three months (e.g., utility bill, bank statement). All documents are thoroughly reviewed by our internal security system and compliance team. If necessary, additional documents such as proof of income or bank balance certificates may be requested. This entire process is designed to comply with AML (Anti-Money Laundering) regulations, ensuring that the account is operated in line with international regulatory standards. Once approved, the account is instantly connected to the client portal and trading platform, usually within 10 minutes. MIM safeguards all personal data in a securely encrypted environment and provides real-time support throughout the account opening process so customers can begin trading with confidence."
  },
  {
    category: "Account",
    question: "What are the mandatory documents required for account opening, and what additional documents may be requested?",
    answer: "To open an MIM account, two primary documents are required: A valid identity document (passport, national ID card, or driver’s license). A proof of residence issued within the last 3 months (e.g., utility bill, bank statement, or government-issued address certificate). These two documents serve as the minimum requirement to verify the customer’s identity and residential address. In addition, depending on the size of deposits or the customer’s country of residence, further documentation such as a Proof of Income or a Bank Balance Certificate may be required. For instance, customers planning large deposits or those residing in higher-risk jurisdictions may be subject to EDD (Enhanced Due Diligence) procedures. All these measures are taken in compliance with AML (Anti-Money Laundering) regulations, ensuring that illegal funds are prevented from entering the financial system. All submitted documents are stored securely in an encrypted independent server and are never shared externally unless formally requested by regulatory authorities. Therefore, customers can confidently provide their documents, and preparing the most up-to-date records will help expedite the approval process."
  },
  {
    category: "Account",
    question: "Can a customer open multiple accounts, and what conditions and restrictions apply?",
    answer: "MIM allows customers to operate multiple accounts depending on their needs. However, this is only permitted under strict conditions to ensure regulatory compliance and risk control. For example, customers may hold both an MT5 account and an Web Trade account simultaneously, and they may also open additional demo accounts for training purposes. However, opening multiple live accounts under the same name requires a reasonable and valid justification. These restrictions exist to comply with AML (Anti-Money Laundering) regulations and to prevent fraudulent or duplicate trading activities. Therefore, customers must submit a justification to the support team and obtain prior approval before opening new accounts. MIM respects customers’ legitimate purposes and supports multiple account operations where appropriate. Nevertheless, customers must always keep in mind that compliance and security take the highest priority in all processes."
  },
  {
    category: "Account",
    question: "What procedures and special documents are required to open an account under a corporate name rather than an individual?",
    answer: "To open a corporate account with MIM, customers must submit essential documents including a Certificate of Incorporation, Business Registration Certificate, and a Corporate Bank Account Certificate. Additionally, an identity verification process will be conducted for the company’s authorized representative or the person delegated to manage the account. This may require additional documents such as an ID, proof of address, and a power of attorney. Corporate accounts involve larger fund management and more complex trading strategies than individual accounts, so the review and approval process is more rigorous. These steps are essential to ensure the security and transparency of client funds, as well as compliance with international regulatory standards. Once approved, corporate accounts benefit from tailored services, a dedicated support structure, and if required, a personal account manager to assist with stable and efficient operations."
  },
  {
    category: "Account",
    question: "Are there nationality-based restrictions on account opening, and which countries are included?",
    answer: "Yes, certain nationalities are restricted from opening accounts due to international financial regulations and sanctions. Notable examples include the United States (USA), Canada, the United Kingdom (UK), certain EU member states, North Korea, and Iran. These restrictions are based on internationally recognized regulatory standards. While MIM provides global services, failure to comply with the directives of relevant financial regulators may result in sanctions against the company itself. Therefore, customers from restricted countries are not eligible to open accounts. This is not merely an internal policy but a legal requirement. These restrictions are designed to protect the stability and integrity of the international financial system and ensure that customers enjoy a safe trading environment in the long term. Customers wishing to open an account must check the Restricted Countries List before applying."
  },
  {
    category: "Account",
    question: "What documents are required for overseas residents to open an account, and does the process differ?",
    answer: "Overseas residents can also open an MIM account, but they must submit valid proof of address documents. Typical examples include a bank statement, utility bill, or tax notice, issued within the last 3 months. Depending on the regulatory requirements of each country, the review process may be more stringent, and in certain cases, Enhanced Due Diligence (EDD) may apply. However, in most cases, approval is completed within 30 minutes, with active support from our global customer service team to expedite the process. MIM also provides multilingual support to ensure overseas customers can complete the procedures smoothly without inconvenience. Guidance on any additional documents is provided promptly, allowing overseas clients to open accounts safely and efficiently, just like domestic clients."
  },
  {
    category: "Account",
    question: "Under what circumstances can account registration be denied, and how can customers resolve such issues?",
    answer: "Account registration may be denied under the following circumstances: Incomplete KYC (Know Your Customer) documents – If the submitted ID copy or proof of address is unclear, expired, or missing. Forgery or mismatched documents – If the documents are suspected to be falsified or do not match the information provided in the application. Residents of restricted countries – Customers from the USA, Canada, UK, certain EU states, North Korea, Iran, and other sanctioned jurisdictions. Unclear source of funds – For large deposits, if proof of income or bank balance certificates are not provided, the application may be rejected under AML regulations. Attempting multiple duplicate accounts – Opening several live accounts under the same name without valid justification. To resolve these issues, customers should resubmit valid and up-to-date documents or provide any additional documents requested, such as proof of income or a power of attorney. If registration is denied due to regulatory restrictions, customers will be provided with alternative guidance in compliance with international law and client protection. MIM offers multilingual support and professional assistance, ensuring that re-submission or re-review requests are processed swiftly so that customers can open their accounts smoothly."
  },
  {
    category: "Account",
    question: "Can minors open an account, and if so, under what special conditions?",
    answer: "Under international financial regulations and investor protection principles, individuals under the age of 18 (minors) are not permitted to open an account. This is a global regulatory standard designed to protect client assets and maintain the integrity of financial markets. In some jurisdictions, minors may be allowed to open accounts with parental or legal guardian consent and additional documentation. However, MIM does not support account opening for minors under any circumstances, as compliance and investor protection are our highest priorities. This policy serves as a safeguard to protect minors from excessive investment risks and ensures continued trust with financial regulators. Once clients reach adulthood, they may open an account through the same approval process, and all services will be provided under the same standards as for adult customers."
  },
  {
    category: "Account",
    question: "How long does it usually take for account approval after application, and what factors may cause delays?",
    answer: "In most cases, account applications are approved within 30 minutes, and in some instances, when documents are clear and requirements are fully met, approval may be completed within just a few minutes. To ensure customers can start trading quickly, MIM operates both an automated verification system and a professional review team in parallel. However, approval may be delayed due to the following factors: Incomplete or unclear documents – Missing or unclear ID or proof of address. Country-specific regulations – Certain jurisdictions may require additional review or Enhanced Due Diligence (EDD). Additional KYC checks – International bank information verification, proof of residence validation, or source of funds checks. Weekends and public holidays – Banking networks and administrative procedures may be unavailable, slowing the process. Once approval is granted, customers can immediately access the client portal and trading platform, where they can check account status, deposit readiness, and trading availability in real time. MIM is committed to maintaining both speed and strict compliance with security standards, minimizing unnecessary delays while prioritizing the safety of client accounts and funds."
  },
  {
    category: "Account",
    question: "Is an initial deposit required when opening an account, and if so, what is the minimum deposit amount?",
    answer: "No initial deposit is required to open an account, and accounts can be created free of charge. Customers may first register their account and then choose when to begin trading according to their own circumstances. However, to start actual trading, a deposit is required, and the minimum deposit amount depends on the account type: Standard Account: Can begin trading with a small deposit. Exclusive Account: Requires a higher initial deposit to provide a stable trading environment and additional benefits such as tailored services and extended support. This structure is a standard practice in the financial industry to align the risk management framework with the client’s asset size. MIM supports multiple deposit methods, including: Card payments, Bank wire transfers, Crypto wallet deposits. Card payments and crypto deposits are usually processed in real time, enabling immediate trading, whereas bank transfers may take several hours depending on interbank procedures. This allows customers to choose the account type and deposit method most suitable for them, while MIM guarantees speed, security, and regulatory compliance throughout the deposit process."
  },
  {
    category: "Account",
    question: "What happens if I don’t use my account for a long time?",
    answer: "If a client account is not used for a certain period, it will automatically be placed in dormant status for security reasons. Generally, if there is no login activity for more than 6 months, the system will treat the account as dormant. To regain access, clients must go through additional identity verification (such as 2FA or ID confirmation) before the account can be reactivated. This policy is an essential safeguard to prevent unauthorized logins, account hijacking, or attempts at fund theft through abandoned accounts. If clients wish to recover a dormant account, they can easily complete the identity verification process via the client portal or by contacting customer support, after which normal access will be restored. In conclusion, the dormant account policy is designed to protect accounts that have not been used for an extended time and is part of MIM’s proactive security management system."
  },
  {
    category: "Account",
    question: "What steps must be taken to reset the password if it is lost?",
    answer: "If a password is lost, clients can use the “Password Reset” menu in the Client Portal to initiate a simple recovery process. An email with a verification link will be sent immediately to the registered address, allowing clients to create a new password directly. For enhanced security, additional identity verification steps may be required during the reset process, such as: Confirming the registered mobile number, Answering security questions, Providing OTP (One-Time Password) authentication. If email access is not possible or issues occur during verification, support can be requested by completing identity verification with the customer service team. Once a new password is issued, it is essential to log in immediately to confirm it is functioning properly. Following financial security best practices, clients are advised to change their passwords regularly and avoid reusing the same password across multiple platforms. Through these procedures, MIM ensures clients can quickly regain account access while preventing unauthorized access with strengthened authentication measures."
  },
  {
    category: "Account",
    question: "What happens if multiple login attempts fail?",
    answer: "If login attempts fail consecutively, the MIM system automatically places the account under temporary lock. Generally, if more than 5 incorrect password entries are detected, the lock status is activated and login will be restricted for a certain period of time. This measure is designed to block brute force attacks where hackers attempt to guess client passwords through repeated trials. When an account is locked, clients can unlock it by clicking the verification link sent to their registered email or by entering a security code. If email verification is not possible or further issues occur, clients can contact customer support and go through an identity verification process to regain access. This policy is not merely about restricting access—it serves as an early warning system to detect and respond to account hijacking attempts. Ultimately, it enhances the protection of client assets and ensures account security is maintained at international financial standards."
  },
  {
    category: "Account",
    question: "Can I log in to my MIM account while traveling abroad, and what conditions are required?",
    answer: "Yes, MIM accounts can be accessed abroad without issues. As long as there is an internet connection, both PC and mobile apps function normally, allowing clients to log in to the client portal and trading platform anywhere in the world. However, in some countries, financial regulations or network restrictions may cause connection difficulties. In such cases, some clients use VPNs (Virtual Private Networks), but MIM does not recommend VPN usage as a standard practice. If VPN usage is unavoidable, clients must notify customer support in advance, and additional verification may be required. MIM’s security system may temporarily block account IDs if unauthorized VPN access is detected, triggering extra CRM verification to restore proper access. This measure protects client accounts and prevents illegal access. Therefore, while abroad, it is best to use a stable and legitimate network environment and exercise caution when connecting via public networks. Enabling Two-Factor Authentication (OTP) further strengthens account security, ensuring safe service usage from overseas."
  },
  {
    category: "Account",
    question: "Can I change the display language within my account, and what languages are supported?",
    answer: "The MIM platform provides multi-language support, allowing clients to freely change their display language in the settings menu. Currently supported languages are English, Japanese, Simplified Chinese, Traditional Chinese, Vietnamese, Indonesian, Thai, Arabic, and Hindi. Language changes are applied immediately, and all core features such as account menus, notifications, trading history, and dashboard layout will be displayed in the selected language. However, some legal notices and contractual documents may only be provided in English. As MIM expands its global services, additional language packs will be supported, gradually increasing the number of available languages. This feature is designed to improve convenience and accessibility, minimizing language barriers and ensuring that all global clients enjoy the same quality of service."
  },
  {
    category: "Account",
    question: "Is there a function for customers to directly download and store their account activity logs?",
    answer: "For security reasons, the client portal does not provide a function that allows customers to directly download account activity logs. Since financial account information includes sensitive personal data and transaction details, this measure is in place to fundamentally block the risk of unauthorized leaks through external storage devices or public environments. However, if customers require their activity logs, they may request them at any time through the Customer Support Center. After completing identity verification, the requested logs will be compiled according to the customer’s designated period and items, and provided in Excel (XLSX) format. During this process, unnecessary data will be excluded, and the information will be organized in an easy-to-read manner for practical use. This method not only serves as a security measure but also provides the following advantages: Enhanced safety: By restricting direct downloads, the risk of exposure through hacking, phishing, or public PC use is minimized. Customized delivery: Data is compiled only for the requested period and items, reducing unnecessary overload and improving efficiency. Official documentation: The provided logs are organized according to company standards and can be used as official evidence in tax, accounting, or dispute resolution. MIM ensures customers can safely access their data at any time, while maintaining the optimal balance between account protection and asset security."
  },
  {
    category: "Account",
    question: "Can customers select a specific period to search and review account activity history?",
    answer: "Yes, customers can search and review account activity history by selecting a specific period. The search range can be set freely from daily, monthly, or yearly units. For example, customers may choose to review only the most recent 7 days of activity, or focus on transactions in a specific month. This function goes beyond simply checking activity records and can be used for: Security check: Identifying whether suspicious logins or transactions occurred at certain times. Issue resolution: Tracking activity history during periods when specific issues arose. Transaction analysis: Reviewing data to evaluate investment strategies and performance. Thus, the period-based search function allows customers to manage their account activity in a customized way, while simultaneously strengthening security and improving investment efficiency."
  },
  {
    category: "Account",
    question: "How can a client request to terminate their account?",
    answer: "A client may request account termination at any time based on their own decision. The request can be submitted through the Client Portal or by contacting Customer Support, but identity verification must be completed first. However, if there are open positions or pending withdrawal requests in the account, these must be settled before the termination can proceed. Only after all trades and withdrawals are finalized will the account closure be officially completed. This is a mandatory step to protect client assets and comply with applicable laws and regulations. Account termination is not merely a function restriction but the official end of all usage rights for that account. Once terminated, the account cannot be reused, and a new account must be created if the client wishes to continue using the services. MIM ensures that through this procedure, clients can safely close their accounts, organize their assets, and avoid unnecessary legal or security risks."
  },
  {
    category: "Account",
    question: "Is there a way to temporarily suspend an account for a certain period without permanently closing it?",
    answer: "Yes, upon customer request, it is possible to temporarily suspend an account for a specified period. During the suspension, trading functions and deposits/withdrawals are restricted, but the account itself and customer assets remain safely maintained. This feature is particularly useful for situations such as long vacations, personal reasons, or when a temporary break from trading is needed. For example, if the customer does not wish to participate in the market for a certain period or wants to temporarily freeze the account for security reasons, this function can be used. If the customer wishes to use the account again, they can restore it immediately to normal status by going through identity verification via the customer support center. After restoration, the existing account information and assets remain intact, and trading can resume without opening a new account. This system provides a more flexible and secure option than permanent account closure, allowing customers to pause trading when necessary while keeping their assets protected."
  },
  {
    category: "Account",
    question: "Can a terminated account be reopened by the same client? If yes, what procedures are required?",
    answer: "Yes, if a client wishes to use a terminated account again, they must go through the new account application process. Since all data from the terminated account is permanently deleted, the client must start afresh with a new account. During this process, the client is required to resubmit KYC documents, such as ID and proof of residence. If the previous account was terminated due to regulatory violations, unresolved disputes, or other issues, the review process may be stricter, and in some cases, re-registration may be restricted. The reopened account is treated as a completely new account, meaning that past transaction history, points, or benefits will not be carried over. Therefore, clients considering account termination should be aware that such disadvantages may occur when reopening a new account later."
  },
  {
    category: "Account",
    question: "Can I share one account with family or acquaintances, and if not, what is the reason?",
    answer: "MIM strictly prohibits account sharing. Since all accounts are operated based on personal identification and financial regulations, using an account with another person constitutes a violation of AML (Anti-Money Laundering) and KYC (Know Your Customer) regulations. In addition, account sharing creates serious security vulnerabilities, and in the event of unauthorized transactions or disputes, the account holder may find it difficult to receive legal protection. In many financial regulatory environments, the use of an account by anyone other than the registered account holder is considered illegal. MIM assigns each customer a unique account and strictly manages it so that only the account holder can use it. Therefore, even family members, spouses, or acquaintances are not allowed to share accounts. If trading is necessary, each individual must open a separate account in their own name, which ensures compliance with regulations and the safety of customer assets."
  },
  {
    category: "Account",
    question: "What sanctions or restrictions are applied when multiple accounts of the same customer are detected?",
    answer: "MIM strictly applies the principle of one account per customer. The act of opening or operating multiple accounts under the same customer is strictly prohibited, as it can lead to risks such as unfair trading, abuse of bonus benefits, and money laundering. If multiple accounts are detected, the following sanctions may be applied depending on the situation: Immediate closure of duplicate accounts, Confiscation of unjustly obtained profits and bonuses, Withdrawal restrictions and account suspension, In severe cases, even the main account may face permanent suspension. These sanctions are not merely for regulatory compliance, but are unavoidable measures to ensure a fair trading environment among customers and to fully comply with AML (Anti-Money Laundering) regulations and international standards required by financial authorities. Therefore, customers must open and operate only a single account under their own name, and any attempt to operate multiple accounts may result in serious disadvantages."
  },
  {
    category: "Account",
    question: "Will my account be automatically deactivated if I don’t use it for a certain period of time? What are the criteria?",
    answer: "Yes, if there is no trading or login activity for a certain period, the account may be switched to an inactive (dormant) state. In general, accounts are automatically deactivated after 12 months of inactivity. This measure helps protect dormant accounts from being misused for illegal access or hacking attempts. When an account becomes dormant, trading functions and some services are restricted. To reactivate it, identity verification must be completed. This may include submitting an ID or verifying the registered mobile number. Once the verification process is complete, normal account usage will be restored. To minimize inconvenience, MIM sends a prior notice to the client’s registered email address before the account is switched to dormant status. Clients can prevent dormancy by logging in before the effective date. Therefore, clients are encouraged to log in regularly, check their account status, and read email notifications to stay informed. This procedure follows international security standards to protect client accounts and minimize risks associated with long-term inactive accounts."
  },
  {
    category: "Account",
    question: "How can I safely change the email address registered to my account?",
    answer: "For security reasons, MIM does not allow changes to a registered email address. The email address serves as the unique identifier for the account and is the foundation of all authentication processes, so it cannot be changed upon simple request. If a change is absolutely required, it means the existing account will be terminated. In such cases, any remaining balance will be withdrawn in full to the linked withdrawal account (bank account or e-wallet) after completing identity verification. The client must then re-register with a new email address to open a new account and continue using the services. Therefore, when registering an account, clients must provide a valid, personally-owned email address and maintain continuous access to it. This is a mandatory policy to ensure account stability and financial security."
  },
  {
    category: "Account",
    question: "What documents are required to update a residential address, and how is the review conducted?",
    answer: "To update a residential address, clients must submit official documents that verify their actual place of residence. Acceptable documents include bank statements, utility bills, or government-issued proof of address, issued within the last three months. All submitted documents will be thoroughly reviewed by the MIM Compliance Review Team to confirm accuracy. Once verified, the address change request will be approved, and the updated information will be reflected immediately across the client’s account records, communication details, and financial history. This process is not merely an administrative update but a critical measure to meet international financial regulations and AML (Anti-Money Laundering) obligations. Clients are therefore required to always provide up-to-date proof of their actual residence to ensure safe and compliant use of services."
  },
  {
    category: "Account",
    question: "What identity verification and security checks are required to change the registered bank account information?",
    answer: "Changing a bank account is directly linked to AML (Anti-Money Laundering) regulations, and therefore cannot be processed based on a simple request. Clients must provide a bank statement or passbook copy that proves the new account, along with an ID copy for cross-verification. Once approved, all deposits and withdrawals will be processed through the new account, and the previously registered account will be automatically deactivated. For security and regulatory compliance, the verification process may take at least 1–2 business days. MIM strictly manages all account change procedures to ensure the safety of client assets, and all modifications are recorded in the system log for future reference. This guarantees that account changes are handled in a safe and transparent manner."
  },
  {
    category: "Account",
    question: "Can the nationality information registered at the time of account opening be changed later?",
    answer: "Nationality information registered during account opening is directly tied to financial regulatory compliance and generally cannot be changed. The nationality determines which regulatory authority supervises and governs the account. However, if a client has legally changed their nationality (e.g., through naturalization or acquiring dual citizenship), official documents must be submitted, and a formal review process will be conducted. In some cases, this review may be equivalent to the process of opening a new account. This procedure ensures clarity of the client’s identity and source of funds while strictly adhering to international AML (Anti-Money Laundering) regulations. Therefore, any request related to nationality change must go through proper legal documentation and formal compliance review."
  },
  {
    category: "Account",
    question: "What documents and procedures are required if a client needs to change their name?",
    answer: "A name change is a sensitive matter directly tied to client identity and requires the submission of official documents. Clients must provide a name change certificate, passport, or national ID card as valid proof of identity. All documents will undergo an internal review process. During the approval stage, customer support staff will thoroughly verify the authenticity of the submitted documents. If necessary, additional verification steps such as video verification or supplementary document requests may be conducted. Once approved, the new name will be updated across all account records in the system. This procedure is not merely for client convenience but a mandatory process to fulfill international AML (Anti-Money Laundering) and KYC (Know Your Customer) requirements. It ensures the transparency and security of client accounts while maintaining strict regulatory compliance."
  },
  {
    category: "Account",
    question: "Does MIM have an auto logout feature, and if so, what criteria does it follow?",
    answer: "Yes, MIM supports the Auto Logout feature. This is a basic security measure to protect customer accounts from unauthorized access. Login sessions are automatically maintained while the customer is active, and the logout limit is extended up to 2 days each time activity is detected. In other words, as long as the customer continues using the platform, the session remains active, but if left unattended for a long period, the system will automatically log out to enhance security. If you wish to adjust the session auto-connection time individually, please contact Customer Support, and we will help with customized settings as needed. This measure is designed to balance convenience and account security. Through this mechanism, MIM ensures that accounts remain safe even if customers leave their devices unattended."
  },
  {
    category: "Account",
    question: "Where can I check my MIM account’s basic information and registered details?",
    answer: "Basic account information can be found in the ‘My Profile’ menu within the Client Portal. This section displays essential details such as client name, account number, registered email, phone number, and account status. Additionally, access-related history such as the account opening date and last login record is also provided, allowing clients to quickly review their account status. If necessary, clients may contact Customer Support to confirm the latest information or request updates. This function not only provides information but also helps clients transparently manage their account status and directly verify their security status. Regularly reviewing ‘My Profile’ ensures that personal details and account information remain accurate and up to date."
  },
  {
    category: "Account",
    question: "Can the base currency of my account be changed, and what impact would it have on existing trading records?",
    answer: "The base currency of an MIM account is fixed to USD (United States Dollar) and cannot be changed or selected differently at the time of account opening. This policy ensures that all trading records, account balances, and settlements are consistently managed in USD. Accordingly, all transaction records and reports will be displayed in USD. If conversion into another currency is required, clients should refer to an external exchange rate reference. This structure is designed to maintain data consistency, regulatory compliance, and adherence to international financial reporting standards, providing clients with a clear and stable trading environment."
  },
  {
    category: "Account",
    question: "Is it mandatory to enter a referral code during account registration, and what benefits or programs are linked if entered?",
    answer: "Entering a referral code is optional, not mandatory. Customers who do not enter a code can still open an account and fully use MIM’s services without any limitations. All clients receive the same core services, including trading, deposits/withdrawals, and security functions, regardless of referral code usage. However, when a referral code is entered, the account is automatically linked to MIM’s IB (Introducing Broker) partnership program. This allows customers to receive bonuses or additional rewards tied to specific events or campaigns, and in some cases, tiered benefits based on trading volume or activity. For example, exceeding certain trading thresholds may grant cashback or commission discounts. The referral program operates on a win-win structure, delivering real benefits to clients and performance-based rewards to partners. By entering a referral code, customers gain access to a broader range of rewards and opportunities. Regardless of referral code entry, MIM ensures that all clients experience a safe and fair trading environment."
  },
  {
    category: "Account",
    question: "What steps and information are required to log in to a MIM account?",
    answer: "To log in to a MIM account, clients must enter their Account ID, Password, and designated Server Address, which are issued upon account approval. These details are securely provided via email and the client portal, and can be verified by the customer during the first login. Login is supported on both PC and mobile apps, allowing clients to access the same account and trade from anywhere. For enhanced security, it is recommended to use password auto-save only on personal devices. Additionally, clients can enable Two-Factor Authentication (2FA) with OTP. When enabled, a one-time authentication code must be entered at each login, effectively preventing unauthorized access and account hijacking attempts. Once logged in, clients can instantly check their account balance, open positions, and trading history, ensuring account readiness before initiating trades. MIM’s login process is designed to balance convenience and security, enabling clients to access their accounts with confidence anytime, anywhere."
  },
  {
    category: "Account",
    question: "Where can clients check their login records, and what detailed information is provided?",
    answer: "Clients can review their login records in the MIM Client Portal, under the My Trading Accounts, Trading History, Security Center, and Operation Log menus. These sections provide detailed access logs, enabling clients to independently monitor the security of their accounts. Details provided include login/logout times, connected devices, IP addresses, trading activities, OTP registration/removal records, password change history, account information updates, and trading account creation or password changes. This allows clients to easily identify if their account has been accessed from unusual devices or locations. Upon request, login records can also be delivered to the client’s registered email via Email Notification, making them useful for long-term security monitoring and record management. If any suspicious or unrecognized access is detected, clients should immediately change their password and, if necessary, contact Customer Support. MIM provides these features to empower clients to actively monitor their accounts and take timely action to enhance account security."
  },
  {
    category: "Account",
    question: "How long are login records stored in the system, and can customers view them directly?",
    answer: "Login records are retained for an extended period for security reasons and are used as essential management data to protect customer accounts. In general, customers can directly view their login history starting from the very first record until account closure, with all related data stored securely on protected servers. The records that customers can directly access include: Customer name, account number, registered email, phone number, account status, and account management details. This information is highly useful for customers to quickly identify whether their account is being used normally or if there have been any suspicious login attempts. In other words, login records are not merely data storage; they are a core security function that helps customers monitor their account’s security status and prevent unauthorized use."
  },
  {
    category: "Account",
    question: "To what extent are personalization features such as notification settings, screen themes, and display units supported within an account?",
    answer: "MIM provides certain personalization features to allow clients to adjust their trading environment according to personal preferences. However, the scope of customization varies depending on the service area. On trading platforms (MT5, Web Trade), clients can adjust notification methods (email, push alerts), quote display units, and screen color themes, enabling them to increase trading efficiency and create the most convenient environment for themselves. Within the Client Portal, personalization features are limited to language changes and switching between dark/light mode. Other functions such as account management, trading history, and legal notices are provided in a uniform format to all clients. Therefore, for a more practical personalization experience, it is best to utilize features on the trading platforms, while the Client Portal primarily serves for basic settings and account management."
  },

  // --- MT5 ---
  {
    category: "MT5",
    question: "How do I log in to my MT5 account?",
    answer: "To log in to MT5, you need to enter the account ID, password, and server address provided by MIM. When the details are entered correctly, you can connect immediately, and since both PC and mobile versions follow the same process, you can conveniently use your account anywhere. At your first login, additional security verification may appear, but by following the instructions on the screen, you will be able to complete the process smoothly without much difficulty. Once the login is successful, you can review your account balance and open positions right away, and this gives you the chance to check the status of your account before starting any trades with confidence."
  },
  {
    category: "MT5",
    question: "What is the server time zone used on MT5?",
    answer: "The MT5 server of the MIM platform is fixed to GMT+0 (UTC+0) to avoid confusion with global financial market operations. By keeping the server time consistent, traders can analyze charts and trading records under the same standard at any time, regardless of regional differences. This configuration is not affected by daylight saving time, meaning it remains unchanged throughout the year and provides consistency for long-term strategies. Since server time may differ from your local time, it is strongly recommended to check important events and economic releases based on GMT+0. MIM ensures a stable and transparent environment so that clients can trade with confidence and peace of mind."
  },
  {
    category: "MT5",
    question: "Do I need to install MT5 separately?",
    answer: "Yes, for the desktop and mobile versions of MT5, you do need to install the program. However, MIM also provides WebTrader, which allows you to access your trading account directly from your web browser without any installation. This is very convenient because you can start trading instantly from the client portal without additional setup. The installed version lets you use more advanced features such as Expert Advisors (EAs) and professional chart tools, while the web version is ideal for quick access, making it useful when you are on the go or need to check your account without delay."
  },
  {
    category: "MT5",
    question: "Can I use the same functions on the MT5 mobile app as on PC?",
    answer: "Yes, the MT5 mobile app provides the same basic trading functions as the PC version. You can view charts, place orders, and check your account balance conveniently while on the move. However, some advanced charting features or the use of Expert Advisors (EAs) may be limited on mobile. For this reason, we recommend using the mobile app for quick access and account management, while doing more detailed analysis on the PC version."
  },
  {
    category: "MT5",
    question: "Where can I check the tradable symbols on MT5?",
    answer: "All symbols provided on the MIM platform can be viewed in the Market Watch window in MT5. By default, the main symbols are displayed, but if you cannot see the one you want, simply right-click and select Show All to reveal the full list. The list of available symbols may change as MIM occasionally adds or removes instruments depending on policies and market conditions, so the symbols you see may vary over time. This feature allows traders to quickly find and add instruments to their trading view, while also giving the flexibility to display only frequently used symbols for a cleaner workspace."
  },
  {
    category: "MT5",
    question: "Are all symbols tradable 24 hours a day?",
    answer: "The tradable hours of each symbol on MT5 vary depending on the MIM platform’s policies and the actual market session. Some forex pairs are available 24 hours a day, while indices or commodities may only be traded during the hours of their respective exchanges. In addition, some instruments may have further restrictions under MIM’s policies, so it is always best to check the trading hours in the Properties section of the symbol. By reviewing this information in advance, traders can avoid unnecessary rejections and plan their strategies more efficiently."
  },
  {
    category: "MT5",
    question: "How can I add a new symbol on MT5?",
    answer: "To add a new symbol, open the Market Watch window in MT5, right-click and select Symbols. From the list, choose the instrument you want and click Show. If it is not listed, it means the instrument is not currently offered on the MIM platform, in which case you may contact customer support for further details. This simple process helps traders customize their workspace, displaying only the symbols that are most relevant to their strategies."
  },
  {
    category: "MT5",
    question: "Why are my orders being rejected on MT5?",
    answer: "Orders may be rejected for several reasons, including insufficient account balance, attempting to trade outside the allowed hours, or restrictions on the chosen symbol. Excessive leverage use that does not meet margin requirements is also a common cause. Some instruments cannot be traded outside their designated hours, and temporary server overloads or unstable internet connections may also affect order processing. If your orders are repeatedly rejected, reviewing the system messages or contacting customer support can help identify and resolve the issue quickly."
  },
  {
    category: "MT5",
    question: "How do I set Stop Loss and Take Profit in MT5?",
    answer: "You can set Stop Loss and Take Profit levels directly in the order window when placing a trade. For open positions, you can right-click and select Modify Order to add or adjust these levels. Stop Loss helps limit potential losses when the market moves against you, while Take Profit automatically locks in profits once the target price is reached. These tools help maintain disciplined trading and reduce emotional decision-making, particularly in volatile markets."
  },
  {
    category: "MT5",
    question: "Is partial closing of a position possible on MT5?",
    answer: "Yes, partial close is possible. Select your open position, click Modify or Close, and enter the amount you want to close. This allows you to close part of the position while keeping the rest open. For example, if you have a 1-lot position, you can close 0.5 lots and leave the remaining 0.5 lots active. Partial closing is a valuable risk management strategy, as it allows you to secure some profit while keeping part of the trade running."
  },
  {
    category: "MT5",
    question: "How do I place a limit order in MT5?",
    answer: "In MT5, you can place a limit order by selecting the Pending Order option in the order window and then entering the desired price. For example, if you want to place a buy limit order, the price must be set below the current market price. A sell limit order must be set above the market price to be executed. You can also specify an expiration date, so the order remains valid only for a certain period of time. This way, your trade will be automatically executed when the price reaches your target level, allowing you to enter the market without watching it constantly."
  },
  {
    category: "MT5",
    question: "How can I set an OCO order in MT5?",
    answer: "An OCO (One Cancels the Other) order allows you to place two orders at once, and when one order is executed, the other is automatically canceled. MT5 does not provide a direct OCO function, but you can set it up using an Expert Advisor (EA) or custom scripts. For example, you can place a buy order if the price rises above a certain level and a sell order if it falls below another level, with one canceling the other once executed. This type of setup is particularly useful in volatile markets, as it allows you to prepare for both upward and downward scenarios."
  },
  {
    category: "MT5",
    question: "How do I set a trailing stop in MT5?",
    answer: "A trailing stop automatically adjusts the stop-loss level as the market moves in your favor. To set it in MT5, right-click on the open position, select Trailing Stop, and choose the distance in pips. Each time the market moves in your favor by that distance, the stop-loss will automatically move with it, while if the market turns against you, the stop level remains fixed. This feature allows you to lock in profits while still giving your trade room to grow."
  },
  {
    category: "MT5",
    question: "Where can I check my trading history in MT5?",
    answer: "You can review your trading history in the Terminal window at the bottom of MT5 by clicking the Account History tab. This section displays all closed trades, including profits and losses, and allows you to filter by date range or export reports. On the MIM platform, transparency is emphasized so traders can easily analyze their past trades. Keeping track of your history can help you identify patterns in your trading and refine your strategy over time."
  },
  {
    category: "MT5",
    question: "Can I set notifications on MT5?",
    answer: "Yes, notifications can be set in MT5. Go to the Tools menu, select Options, and then open the Notifications tab. You can configure alerts to notify you when prices reach specific levels or when there are changes in your account status. Notifications can be received via email or mobile push messages. This feature ensures you don’t miss important market events, even if you are away from your computer, and helps you stay responsive to changes in real time."
  },
  {
    category: "MT5",
    question: "What is a template in MT5?",
    answer: "A template saves your chart settings so you can quickly apply the same layout to other charts. For example, if you often use a specific set of indicators, colors, and timeframes, you can save them as a template. Right-click on the chart → Template → Save Template to store it, and use “Load Template” to apply it later. This helps reduce repetitive work and maintain a consistent trading environment."
  },
  {
    category: "MT5",
    question: "Can I export my trading history from MT5 to Excel?",
    answer: "Yes, you can. In the Account History tab, right-click and select Save as Report or Save as Detailed Report. The file will be saved as HTML, and you can later open it in Excel to view your trades in a table format. This feature is useful for performance analysis, tax reporting, or reviewing your personal trading strategies. MIM ensures transparency, giving you full access to your records for analysis."
  },
  {
    category: "MT5",
    question: "What is a profile in MT5?",
    answer: "A profile saves multiple charts and their settings together so that you can load them all at once. For example, you can save one profile for forex charts and another for index charts, switching between them easily. Profiles can be created and managed from the File → Profiles menu, and you can keep as many as you need. This feature is especially useful for traders managing multiple asset classes."
  },
  {
    category: "MT5",
    question: "Can I view multiple timeframes at the same time in MT5?",
    answer: "Yes, you can. MT5 allows you to open the same instrument in several different timeframes simultaneously. For example, you can analyze short-term market moves using the 1-minute chart while also reviewing long-term trends on the 1-hour or daily chart. To set this up, go to File → New Chart and select the symbol, then adjust the timeframe for each chart from the toolbar. You can arrange the charts side by side or stack them, and using Window → Tile will help organize the layout neatly. By comparing different timeframes at once, you gain a broader perspective and can make more balanced trading decisions."
  },
  {
    category: "MT5",
    question: "Can I view multiple charts at the same time in MT5?",
    answer: "Yes, you can. MT5 supports multi-chart layouts, allowing you to open and monitor several charts simultaneously. Each chart can display different instruments, timeframes, or indicators, and the layout can be arranged from the Window menu. This makes it easier to analyze the market from different perspectives and improve decision-making."
  },
  {
    category: "MT5",
    question: "How do I add indicators to MT5 charts?",
    answer: "From the MT5 top menu, select Insert → Indicators, then choose the technical indicator you want. Common examples include Moving Averages, RSI, and MACD. You can also add multiple indicators to the same chart or install custom indicators for more advanced analysis. Adding indicators helps visualize the market more clearly and refine your trading strategy."
  },
  {
    category: "MT5",
    question: "How fast are orders executed in MT5?",
    answer: "On the MIM platform, MT5 provides lightning-fast execution times, often within a fraction of a second. The actual execution speed depends on factors such as your internet connection, latency with the server, and market conditions during periods of high trading activity. Under normal conditions, orders are filled almost instantly, but during major events or news releases, the speed may slow slightly. MIM operates global servers and works with reliable liquidity providers to ensure minimal delays in order execution."
  },
  {
    category: "MT5",
    question: "Can I use automated trading programs (EAs) in MT5?",
    answer: "Yes, MT5 fully supports Expert Advisors (EAs). An EA is an algorithm that executes trades automatically once specific conditions are met. This helps maintain disciplined trading and reduces the emotional aspect of decision-making. To apply an EA, install the file and drag it from the Navigator → Expert Advisors panel onto the desired chart. Ensure that the Algo Trading button on the toolbar is turned on (green) for the EA to run. Although powerful, EAs are not flawless, so it’s best to test them thoroughly on a demo account before using them in live trading."
  },
  {
    category: "MT5",
    question: "How do I install an EA in MT5?",
    answer: "Installing an EA is straightforward. Copy the downloaded EA file (.ex5) into the MQL5 → Experts folder inside MT5’s Open Data Folder. After restarting MT5, you’ll see the EA listed under Navigator → Expert Advisors. To use it, drag the EA onto the chart, adjust the parameters if necessary, and confirm that the Algo Trading button is activated. Once enabled, the EA will start executing trades based on its logic. This simple process allows you to integrate any compatible EA quickly and effectively."
  },
  {
    category: "MT5",
    question: "What is the difference between Hedge and Netting modes in MT5?",
    answer: "In Hedge mode, you can hold both buy and sell positions for the same instrument at the same time. Netting mode, on the other hand, consolidates positions into a single entry. Any new order placed will automatically merge with the existing position. MIM’s platform supports Hedge mode by default, allowing traders to use a wider range of strategies. For traders who prefer simplicity, Netting mode is useful, while Hedge mode is more flexible for managing complex strategies."
  },
  {
    category: "MT5",
    question: "How do I know the minimum trade size?",
    answer: "The minimum trade size for each instrument is defined by MIM and can be checked in the symbol specifications. If you enter a trade volume smaller than the allowed minimum, the order will be rejected. Typically, forex allows trading from 0.01 lots, while cryptocurrencies often start from 0.1 or 0.01 lots. Additionally, there is a lot step, which specifies how trade sizes can increase. For example, if the minimum volume is 0.01 lots and the lot step is 0.01, you can trade 0.01, 0.02, 0.03, and so on. If the lot step is 0.1, then only 0.1, 0.2, 0.3 are valid. This flexibility allows traders to adapt their position sizes according to their strategy and account size, making it easier for beginners to start with smaller trades."
  },
  {
    category: "MT5",
    question: "Can I use the One Click Trading Panel in MT5?",
    answer: "The One Click Trading Panel displays buy and sell buttons directly on the chart, allowing you to place an order with a single click. Since there is no need to open a separate order window, execution is faster and more efficient. This feature is particularly advantageous in highly volatile markets where traders need to enter or exit positions quickly. The panel also allows you to adjust trade volume instantly, making it very effective in situations where speed is critical, such as scalping or reacting to news releases. Even beginners can use it intuitively. However, because the confirmation window is skipped, there is a risk of accidental orders. If stop-loss or take-profit levels are not set separately, the risk exposure may increase. Therefore, it is recommended to start with smaller trade sizes to practice and get familiar with the feature. Once accustomed, you can actively integrate it into your trading strategies. On the MIM platform, order execution is highly stable, allowing clients to trade with confidence under fast and transparent conditions."
  },
  {
    category: "MT5",
    question: "Can I place pending orders in MT5?",
    answer: "Yes, you can. MT5 supports not only basic market orders but also various types of pending orders such as Buy Limit, Sell Limit, Buy Stop, and Sell Stop. With these, you can set trades to be executed automatically when the market reaches a specified price. Pending orders are particularly useful for breakout or pullback strategies, as they allow trades to be executed automatically under desired conditions even when the trader is away from the platform."
  },
  {
    category: "MT5",
    question: "Can I display trading buttons directly on the MT5 chart?",
    answer: "By right-clicking on the chart and activating “One Click Trading,” buy and sell buttons will be displayed instantly, allowing you to place trades immediately and significantly reduce execution time. Trade volumes can also be adjusted directly from the chart panel, making this feature highly useful in situations requiring fast entry and exit. It is especially effective for clients engaged in scalping or short-term trading, as direct trading from the chart enhances responsiveness and provides a strategic advantage. However, when using the One Click Trading buttons, stop-loss and take-profit levels are not automatically set, so manual management is essential. With MIM’s transparent execution, clients can use this function safely and efficiently."
  },
  {
    category: "MT5",
    question: "Can I view trading history as a profit and loss graph in MT5?",
    answer: "Yes, MT5 allows you to visualize trading history in the form of profit and loss graphs and statistics, enabling analysis beyond simple profit and loss figures. By exporting a report from the Account History section, a profit curve is automatically generated, helping traders quickly assess whether their strategy is steadily growing or if volatility was concentrated at specific times. Beginners can use this feature to review their trading habits objectively, without relying on emotions, while experienced traders can evaluate long-term stability and consistency. With MIM’s transparent data reporting, clients can conduct performance analysis confidently and apply it to long-term strategy planning."
  },
  {
    category: "MT5",
    question: "Is hedging available in MT5?",
    answer: "Yes, it is. MIM’s MT5 supports a hedging mode that allows traders to hold both buy and sell positions for the same instrument simultaneously. This can be useful in highly volatile periods or around news events to reduce risk or implement two-way strategies. While hedging is valuable for managing positions, spreads and commissions are charged on each order. Margin rules may also differ depending on the instrument, so it is important to review symbol specifications before trading."
  },
  {
    category: "MT5",
    question: "Can I log into multiple accounts simultaneously in MT5?",
    answer: "Yes, you can. MT5 allows multiple accounts to be registered within a single program, making it easy to switch between them as needed. This is particularly useful for managing personal and corporate accounts, or separating demo and live accounts. Additional accounts can be added via File → Login to Trade Account, and switching is as simple as double-clicking in the Navigator window. However, simultaneous trading across multiple accounts is not possible; only the active account can execute orders."
  },
  {
    category: "MT5",
    question: "Does MT5 support partial pending orders?",
    answer: "Yes, it does. Partial pending orders occur when an order is not filled in full at once but is executed gradually according to market liquidity. For example, when placing a limit order, part of the order may be filled immediately while the remainder stays pending. This feature helps reduce market impact when placing large orders and allows gradual entry at the desired price levels."
  },
  {
    category: "MT5",
    question: "Can I view an economic calendar in MT5?",
    answer: "Yes, MT5 provides a real-time economic calendar that displays major market events. In the Terminal window’s Calendar tab, you can see schedules such as interest rate decisions, employment data, and GDP releases that may significantly impact the market. The calendar shows release times, forecasts, and past results, helping traders anticipate volatility and adjust strategies in advance. For example, if an interest rate hike is scheduled, traders can reposition accordingly to manage risk. Beginners can use the calendar to avoid unnecessary risks by adjusting trading times, while experienced traders can apply it in event-driven strategies. Since MIM provides reliable data, clients can confidently incorporate market schedules into their trading."
  },
  {
    category: "MT5",
    question: "Can I adjust the number of candlesticks displayed on the chart?",
    answer: "Yes, it is fully adjustable. In MT5, you can configure how many bars are displayed in a chart. Go to Tools → Options → Charts and set the maximum number of bars and history bars, which also affects stored historical data. Additionally, you can drag the chart axis or use zoom controls to expand or narrow the view. This flexibility allows traders to tailor the display for specific analytical purposes."
  },
  {
    category: "MT5",
    question: "Can I place orders using keyboard shortcuts in MT5?",
    answer: "Yes, MT5 supports various shortcuts to enhance trading speed. For example, pressing F9 opens the New Order window, and pressing Enter confirms the order instantly, enabling faster execution than mouse clicks. Other shortcuts include Ctrl+M for Market Watch and Ctrl+T for the Terminal window, making it easy to access frequently used features. These are particularly useful for scalpers and ultra-short-term traders. However, mistyping shortcuts may trigger unintended trades, so it is safer to practice with smaller volumes at first. With MIM’s stable environment, clients can use shortcuts confidently in their trading."
  },
  {
    category: "MT5",
    question: "Can I create my own indicators in MT5?",
    answer: "Yes, you can. MT5 has its own programming language called MQL5, which allows traders to code custom indicators and strategies. These can be built using the MetaEditor and will automatically appear in the Navigator window once created. In addition, traders can download free or paid indicators from the MQL5 community, enabling them to either build their own tools or apply others’ ideas easily."
  },
  {
    category: "MT5",
    question: "Can I change the chart timeframe in MT5?",
    answer: "Yes, you can. MT5 supports multiple timeframes, from 1-minute charts to monthly charts. Switching between them can be done quickly using shortcuts or toolbar buttons. For instance, you can select 1-minute (M1), 5-minute (M5), 1-hour (H1), daily (D1), or weekly (W1). MT5 also supports custom timeframes, allowing traders to create non-standard periods for deeper analysis. This flexibility enables traders to examine the market from multiple perspectives according to their strategies."
  },
  {
    category: "MT5",
    question: "Can I add notes or annotations on the chart?",
    answer: "Yes, you can. MT5 provides various drawing tools such as trendlines, arrows, and text labels that can be added directly onto charts. These can be accessed via the Insert → Objects menu, and after placing them, you can freely adjust size, position, and color. This feature is useful for visualizing analysis ideas or marking entry and exit points. Saved chart templates also retain these objects, making it easy to reload the same setup in the future."
  },
  {
    category: "MT5",
    question: "How can I use Auto Scroll and Chart Shift in MT5?",
    answer: "When Auto Scroll is enabled, the chart automatically follows price movements as new ticks appear. When Chart Shift is enabled, extra space is added on the right side of the chart, making it easier to anticipate future movements. Both functions can be activated via toolbar icons or the Ctrl+End shortcut, and are simple enough for beginners to use. Auto Scroll is advantageous for real-time tracking in scalping, while Chart Shift is useful in medium-to-long-term analysis for anticipating price action. Since MIM provides a user-friendly chart environment, clients can rely on these tools to improve efficiency and prepare trading strategies with confidence."
  },
  {
    category: "MT5",
    question: "Can I save charts as images in MT5?",
    answer: "Yes, you can. MT5 includes a built-in feature to save charts as image files. By selecting File → Save As Picture, you can export charts in PNG or BMP format, either as full-screen images or selected sections only. This is very useful for recording your analysis or sharing strategies with others, and is frequently used for training materials and reports."
  },
  {
    category: "MT5",
    question: "Can I view MT5 charts on multiple monitors?",
    answer: "Yes, you can. MT5 allows chart windows to be detached and moved freely. In a multi-monitor setup, charts can be dragged out as separate windows and arranged across different screens. This is especially beneficial for professional traders who need to monitor multiple instruments and timeframes simultaneously."
  },
  {
    category: "MT5",
    question: "How reliable is the chart data provided by MT5?",
    answer: "MIM’s MT5 sources data from reputable liquidity providers (LPs), ensuring high reliability and accuracy. However, slight differences may occur compared to other platforms or exchanges due to factors such as liquidity conditions, quotation methods, time zone settings, and tick data frequency. Overall, the data is highly reliable for both trading execution and market analysis."
  },
  {
    category: "MT5",
    question: "Can I disable the order confirmation window in MT5?",
    answer: "Yes, you can. If you find the confirmation window inconvenient every time you place an order, go to Tools → Options → Trade and enable the “One Click Trading” function. With this enabled, orders will be executed instantly with a single click, without the confirmation window. However, beginners are advised to keep the confirmation window at first to avoid accidental trades. Once you become familiar, activating One Click Trading allows you to benefit from faster execution."
  },
  {
    category: "MT5",
    question: "Can I add text labels to charts in MT5?",
    answer: "Yes, you can. To record specific notes or price information on a chart, go to the top menu and select Insert → Text Label. After entering your text, you can position it where you want and adjust font size and color. This feature is especially useful for marking analysis ideas or educational notes, and the same label can be applied across multiple charts to organize your analysis framework."
  },
  {
    category: "MT5",
    question: "Can I change the alert sounds in MT5?",
    answer: "Yes, you can. Alert sounds can be customized under Tools → Options → Events. You can assign different sound files for events such as order execution, disconnection, or news updates. By setting familiar sounds, you can improve focus and avoid missing important events. This is especially helpful when working with multiple windows open."
  },
  {
    category: "MT5",
    question: "Can I change the account currency in MT5?",
    answer: "Unfortunately, no. The base currency selected during account creation (e.g., USD, EUR, JPY) is fixed and cannot be changed later. If you want to trade in a different currency, you must open a new account. However, MT5 provides currency conversion features for calculating profits and losses in other currencies. If needed, you can open an additional account through the MIM Client Portal and use both accounts together."
  },
  {
    category: "MT5",
    question: "How can I check past trading history in MT5?",
    answer: "In MT5, you can view past trading history under Terminal → Account History. You can set custom date ranges or select predefined options such as “Last Month” or “Last 3 Months” to filter results. Details such as opening/closing times, execution prices, commissions, and swaps are clearly displayed. Trading history can also be exported to Excel or HTML, making it convenient for personal records or tax reporting purposes."
  },
  {
    category: "MT5",
    question: "How can I use the news function in MT5?",
    answer: "MT5 provides real-time financial news directly within the platform. Under Terminal → News, you can view the latest updates, and important events may also trigger pop-up notifications. This feature is useful for keeping track of economic data releases and major events. However, availability of news may depend on account and server settings, and delivery may be delayed depending on your internet connection."
  },
  {
    category: "MT5",
    question: "Can I use hotkeys (shortcuts) in MT5?",
    answer: "Yes, MT5 supports a wide range of shortcuts. For example, F9 opens a new order window, Ctrl+M shows the Market Watch, Ctrl+N opens the Navigator, and Ctrl+T opens the Terminal. Chart switching, zooming, and auto-scroll can also be quickly controlled using shortcuts. Using hotkeys reduces repetitive tasks and enables faster reactions to sudden market changes."
  },
  {
    category: "MT5",
    question: "Does logging out of MT5 delete account data?",
    answer: "No, it does not. Even if you log out, your account data remains securely stored on MIM’s servers. You can log in again later with the same details without losing any data. Logging out simply ends the session and does not affect your data. However, if using a shared computer, it is recommended to log out and remove saved passwords to protect account security."
  },
  {
    category: "MT5",
    question: "Can I change the display language in MT5?",
    answer: "Yes, you can. MT5 supports multiple languages, which can be changed under View → Languages. The program must be restarted for the changes to take effect. MIM provides a wide range of language packs, including Korean, English, Japanese, and Chinese, allowing global clients to use the platform conveniently."
  },
  {
    category: "MT5",
    question: "Does MT5 update automatically?",
    answer: "Yes, automatic updates are supported by default. When a new version is released from the MIM server, MT5 automatically downloads and installs the update upon launch. This usually takes only a few seconds to minutes and requires no user action. Keeping MT5 updated ensures bug fixes and new features, providing a stable trading environment."
  },
  {
    category: "MT5",
    question: "How do I set up auto-scroll and chart shift in MT5?",
    answer: "MT5 charts provide both auto-scroll and chart shift features. Auto-scroll makes the chart automatically follow new prices, while chart shift leaves extra space on the right to better view potential future movements. Both functions can be toggled via toolbar buttons or by using the Ctrl+End shortcut. Adjusting these functions depending on your analysis needs makes charting more convenient."
  },
  {
    category: "MT5",
    question: "Where can I find MT5 log files and how are they used?",
    answer: "MT5 records all activities, such as logins, order executions, and server connections, in log files, which are useful for diagnosing errors or connection issues. Logs can be viewed directly under Terminal → Experts or Journal, and in installed versions they are saved under the MQL5/Logs folder. If issues persist, submitting log files to customer support helps with analysis and resolution."
  },
  {
    category: "MT5",
    question: "How can I monitor margin level in MT5?",
    answer: "In the MT5 Terminal’s Trade tab, you can see Balance, Equity, Margin, Free Margin, and Margin Level. Margin Level, shown as a percentage, helps traders anticipate the risk of margin calls or stop-outs. If Margin Level falls below the broker’s threshold, positions may be liquidated automatically. The higher the leverage, the faster the margin level decreases, requiring conservative management. Beginners should practice with smaller trades to understand margin behavior, while experienced traders can use it as a key risk management metric. With MIM’s transparent data and robust margin controls, clients can trade confidently."
  },
  {
    category: "MT5",
    question: "How can I use a VPS server to run automated trading (EA) in MT5?",
    answer: "MT5 supports VPS hosting to run EAs and indicators 24/7 reliably. Using a VPS ensures trading continues without keeping your PC on, and connecting to a server in a closer region can reduce execution delays. To set this up, right-click your account in Navigator → Accounts and select “Register a Virtual Server.” After completing the setup, your EA will run automatically on the VPS."
  },
  {
    category: "MT5",
    question: "Can I apply the same indicators or tools across multiple charts in MT5?",
    answer: "Yes, you can. By using the “Template” and “Profile” features, MT5 allows you to quickly replicate the same chart setup. Templates save indicators and chart settings for use on other charts, while Profiles group multiple charts into a layout you can load at once. This ensures consistency in analysis across multiple instruments."
  },
  {
    category: "MT5",
    question: "What is the Data Window in MT5 and how is it used?",
    answer: "The Data Window displays detailed information for each candlestick, including open, high, low, and close values, as well as indicator values. It can be activated via View → Data Window or with the Ctrl+D shortcut. This is especially useful for precise analysis of specific points in time."
  },
  {
    category: "MT5",
    question: "How can I view tick charts in MT5?",
    answer: "Tick charts show the smallest market price movements and are valuable for ultra-short-term strategies. You can view them by selecting a symbol in the Market Watch window and clicking the Tick Chart tab. Tick charts are best used alongside order books for detailed analysis, but require an active connection for accurate data."
  },
  {
    category: "MT5",
    question: "How do I set up push notifications in MT5?",
    answer: "MT5 can send push notifications to its mobile app for events such as order executions, price alerts, or connection issues. To set this up, go to Tools → Options → Notifications and enter your MetaQuotes ID, which is available in the mobile app settings. Once configured, notifications are delivered instantly based on your chosen conditions."
  },
  {
    category: "MT5",
    question: "Can I view detailed order execution messages in MT5?",
    answer: "Yes. Execution messages provide not only confirmation but also details such as execution price, rejection reasons, and server response time. All of this information is also recorded in the Journal tab, helping you identify causes such as latency, insufficient margin, or trading time restrictions. If issues persist, logs can be submitted to customer support for further analysis. With MIM’s transparent support and records, clients can clearly understand execution results and trade with confidence."
  },
  {
    category: "MT5",
    question: "How can I set chart alerts for specific prices in MT5?",
    answer: "The chart alert function allows you to receive notifications when a specific price level is reached. To set this up, go to Terminal → Alerts, right-click, and select “Create.” You can specify symbol, price conditions (≥, ≤), and notification type (sound, popup, email, push). This helps you avoid missing entry or exit points, especially in volatile markets."
  },
  {
    category: "MT5",
    question: "Can I back up multiple charts or transfer them to another PC in MT5?",
    answer: "Yes, you can. MT5 saves chart settings and layouts in its Data Folder. Copying this folder to another PC allows you to restore the same setup. Go to File → Open Data Folder to locate templates, indicators, profiles, and trade history. Copy the entire folder to the same path on the new PC, and the previous setup will be restored. Login details are not saved for security reasons, so account ID and password must be re-entered. This allows you to maintain consistent chart environments across different devices."
  },
  {
    category: "MT5",
    question: "What data is used when backtesting EAs in MT5?",
    answer: "Backtesting in MT5 primarily uses historical tick data provided by the MIM server. Data granularity varies depending on the instrument’s liquidity and historical coverage, and accuracy depends on the selected modeling mode. “Every Tick” provides the most realistic results but is slower, while “Open Prices Only” is faster but less precise. It is important to evaluate not only profit but also drawdown, win rate, and trade frequency. Backtests should be considered as an initial validation step and always complemented with forward testing."
  },
  {
    category: "MT5",
    question: "What is the purpose of Visual Mode in the MT5 Strategy Tester?",
    answer: "Visual Mode replays backtests directly on the chart, showing how the strategy executed trades in real time instead of just displaying results. This allows traders to verify entry and exit timing, and assess performance in different market conditions. For beginners, it helps in understanding EA behavior, while for experienced traders, it is an important tool to identify overfitting or weaknesses in a strategy. It should be used not only to check profitability but also to evaluate how the EA operates."
  },
  {
    category: "MT5",
    question: "What is the difference between backtesting and forward testing in MT5?",
    answer: "Backtesting uses historical data to validate a strategy, while forward testing applies the strategy in a simulated account under real-time conditions. Backtesting is fast and useful for comparing scenarios, but it is limited to past data. Forward testing, while more realistic, requires more time and is subject to current market volatility. Both methods have advantages and should be used together to ensure strategy reliability, especially when running EAs long-term."
  },
  {
    category: "MT5",
    question: "What do Fill Policy options (Fill or Kill, Immediate or Cancel, etc.) mean in MT5?",
    answer: "MT5 provides Fill Policy options to determine how orders are executed. Fill or Kill requires full execution immediately, otherwise the order is canceled. This is used when traders do not want partial fills for large orders. Immediate or Cancel executes as much as possible immediately and cancels the rest, allowing partial fills without leaving unexecuted volume in the market. Return leaves any unfilled volume as a pending order, which may be executed later when liquidity improves. Understanding Fill Policies helps traders manage execution outcomes, particularly in volatile or low-liquidity markets."
  },
  {
    category: "MT5",
    question: "Can I monitor multiple accounts’ performance simultaneously in MT5?",
    answer: "By default, MT5 only allows one active account at a time, but multiple accounts can be registered in the Navigator window for easy switching. Switching accounts is simple with a double-click, allowing you to check balances and positions across accounts. Additionally, the MIM Client Portal provides consolidated monitoring of multiple accounts, making it easier to track overall performance. This is especially useful when separating strategies or managing both personal and corporate accounts."
  },
  {
    category: "MT5",
    question: "How can I use strategy optimization in MT5?",
    answer: "Strategy optimization automatically adjusts EA parameters to find the most effective combination. In the Strategy Tester, select Optimization mode, and MT5 will simulate different parameter sets and compare results such as profit, risk, and win rate. For example, moving average periods from 10 to 100 can be tested automatically to find the best setting. However, over-optimization can reduce real-world performance, so results should always be confirmed with forward testing and by keeping settings simple and consistent."
  },
  {
    category: "MT5",
    question: "Can I test strategies using tick data in MT5?",
    answer: "Yes, you can. By selecting “Every Tick” in the Strategy Tester, you can run detailed backtests using tick-level data. This is essential for scalping or ultra-short-term strategies, as it reflects the smallest market movements. However, long testing periods may take significant time and system resources, so it is more efficient to test shorter periods first and expand gradually. Using a VPS can also improve performance."
  },
  {
    category: "MT5",
    question: "How can I improve order execution speed in MT5?",
    answer: "Order execution speed depends on factors such as network quality, server distance, and account connectivity. To reduce delays, maintain a stable internet connection and consider using a VPS closer to the trading server. Enabling One Click Trading also eliminates confirmation windows, speeding up execution. Combining these methods helps ensure faster response times, even during volatile conditions like news releases. For professional traders, execution speed is a key competitive factor directly tied to performance."
  },
  {
    category: "MT5",
    question: "How can I view Depth of Market (DOM) in MT5?",
    answer: "Depth of Market (DOM) shows bid/ask prices and available volumes for an instrument, allowing traders to analyze liquidity and order flow. DOM can be enabled by right-clicking a symbol in Market Watch and selecting “Depth of Market.” Buy and sell orders are displayed in real time. This helps identify optimal entry and exit points, as well as assess market impact for large trades. It is an essential tool for scalpers and high-frequency traders."
  },
  {
    category: "MT5",
    question: "What are the advantages of using a VPS with MT5?",
    answer: "A VPS (Virtual Private Server) lets you run MT5 in a stable environment 24/7 without interruption. This is especially useful if you are using automated trading (EAs), as they continue running on the VPS even when your personal computer is turned off. MIM also provides access to global server infrastructure, and you can additionally use third-party VPS services depending on your needs. By using a VPS, you minimize risks from unstable internet connections or power outages, making it ideal for traders who value long-term stability."
  },
  {
    category: "MT5",
    question: "Can I use EAs on the MT5 mobile app?",
    answer: "Unfortunately, EAs cannot be run on the MT5 mobile app. EAs are only supported on the desktop version. The mobile app is designed mainly for manual monitoring, viewing charts, and placing orders. However, you can still set up push notifications to your phone so that you don’t miss important market events. The best approach is to run EAs on a PC or VPS, while using the mobile app as a convenient tool for tracking and managing positions on the go."
  },
  {
    category: "MT5",
    question: "Can I display trading volume on the chart?",
    answer: "Yes, trading volume can be displayed. In MT5, you can show trading volume at the bottom of the chart as bar graphs, which reveal how much activity occurred for each candle. Volume is more than just numbers — it is a key indicator of market participation and helps assess the strength of price movements. To enable it, right-click the chart and select Properties → Show Volumes, or use Insert → Indicators → Volumes. Watching volume alongside price helps confirm breakouts or identify possible reversals, making your analysis more reliable."
  },

  // --- Web Trade ---
  {
    category: "Web Trade",
    question: "What types of orders are supported on Web Trade?",
    answer: "Web Trade supports a full range of basic order types including Market Orders, Limit Orders, and Stop Orders. A Market Order is executed immediately at the current available price in the order book, while a Limit Order is triggered only when the market reaches the price level set by the trader. A Stop Order is commonly used for stop-loss protection or breakout entries, making it highly effective in volatile market conditions. These order types provide flexibility and allow traders to implement risk management as well as strategic entries and exits in line with their trading style."
  },
  {
    category: "Web Trade",
    question: "How do I use an OCO order on Web Trade?",
    answer: "An OCO (Order Cancels Other) order allows you to place two orders simultaneously, with one automatically canceled when the other is executed. For example, a trader can place a Take-Profit order at a higher level and a Stop-Loss order at a lower level. If the price moves upward, the Take-Profit order is triggered and the Stop-Loss order is canceled. If the price falls, the Stop-Loss is executed and the Take-Profit is canceled. This functionality allows effective risk management in both directions of the market and is particularly useful in fast-moving conditions."
  },
  {
    category: "Web Trade",
    question: "Can I partially close a position on Web Trade?",
    answer: "Yes, Web Trade supports Partial Close functionality. Traders may lock in profit or reduce exposure by closing only a portion of an open position while keeping the remainder active to capture further opportunities. For instance, you may close 30% of your position to secure gains, while leaving 70% open to continue participating in the market. This flexibility is particularly useful in volatile environments, enabling traders to manage positions dynamically without fully exiting a trade."
  },
  {
    category: "Web Trade",
    question: "Does Web Trade support hedging?",
    answer: "Yes, Web Trade supports Hedging, which allows traders to hold both Long and Short positions simultaneously on the same instrument. This feature is valuable in managing exposure when markets are volatile, as it provides the ability to balance long-term directional trades with short-term countertrend positions. For example, a trader with a long-term bullish view can open a short position during a temporary correction to reduce portfolio risk. Hedging enables more sophisticated strategy execution and enhances risk diversification across multiple timeframes."
  },
  {
    category: "Web Trade",
    question: "How does dynamic leverage work on Web Trade?",
    answer: "Web Trade applies Dynamic Leverage, meaning the available leverage automatically adjusts depending on the instrument and the position size. Smaller positions can utilize higher leverage to maximize capital efficiency, whereas larger positions are progressively assigned lower leverage to reduce systemic risk and prevent excessive exposure. This mechanism allows traders to optimize the use of their margin while ensuring responsible risk management aligned with global brokerage standards."
  },
  {
    category: "Web Trade",
    question: "Can I execute multiple orders at the same time on Web Trade?",
    answer: "Yes, Web Trade supports Multiple Order Execution, which allows traders to place several orders simultaneously. This includes submitting multiple pending orders at different price levels on the same instrument, or distributing orders across several instruments. Such functionality is especially useful for scaling into trades, implementing hedging strategies, or running parallel trading setups. The system is designed for fast and reliable execution, ensuring stable order processing even during high market activity."
  },
  {
    category: "Web Trade",
    question: "Does the Web Trade mobile app provide the same order functions as the desktop version?",
    answer: "Yes, the Web Trade mobile app offers the same order functionalities as the desktop platform. Traders can execute Market, Limit, Stop, and OCO orders directly from mobile devices. In addition, the mobile app provides real-time charting tools, price alerts, and position management features, enabling traders to analyze the market and manage trades on the go. This ensures a consistent trading environment across desktop and mobile, without sacrificing execution speed or stability."
  },
  {
    category: "Web Trade",
    question: "How can I check the minimum trade size on Web Trade?",
    answer: "The Minimum Trade Size on Web Trade depends on the instrument and can be confirmed directly within the order entry window. For example, most Forex pairs can be traded from as little as 0.01 lots, while cryptocurrencies are supported with fractional units down to precise decimal places. This ensures that traders can start trading with smaller sizes and manage their risk effectively without overexposure."
  },
  {
    category: "Web Trade",
    question: "How are maximum position limits applied on Web Trade?",
    answer: "Maximum Position Limits vary depending on the instrument type, margin requirements, and leverage settings. Major Forex pairs generally have higher allowable limits due to their deep liquidity, while more volatile products such as cryptocurrencies are subject to stricter limits. These restrictions are in place to ensure market stability, manage systemic risk, and prevent traders from exceeding safe levels of exposure."
  },
  {
    category: "Web Trade",
    question: "What does Fill Policy mean on Web Trade?",
    answer: "A Fill Policy defines how an order is executed when submitted to the market. Web Trade supports Fill or Kill (the entire order must be executed immediately or canceled), Immediate or Cancel (any portion available is executed instantly and the remainder canceled), and Return (any unfilled volume is left pending until liquidity becomes available). Understanding Fill Policies helps traders predict order outcomes more accurately, especially during volatile or illiquid market conditions."
  },
  {
    category: "Web Trade",
    question: "What are the main differences between the Web Trade Web version and the Desktop version?",
    answer: "The Web Trade Web version provides quick access and convenience, supporting essential order placement and basic chart analysis directly through a browser. In contrast, the Desktop version offers a wider set of advanced features including Expert Advisors (EA) for automated trading, a broader range of technical indicators, and the ability to manage multiple charts simultaneously. For traders seeking advanced tools, algorithmic trading, or extended customization, the Desktop version is more suitable, while the Web version is optimized for accessibility and simplicity."
  },
  {
    category: "Web Trade",
    question: "How can I install or access the Web Trade platform?",
    answer: "Web Trade is available in Desktop, Web, and Mobile App versions, allowing access across multiple environments. The Desktop version can be downloaded and installed from the official website. The Web version can be accessed directly through a browser without any installation, enabling quick login and trading. The Mobile App is available for both iOS and Android devices via their respective app stores. After installation or access, traders log in using their Account ID, Server address, and Password. Once logged in, they can immediately start trading with full access to platform functions."
  },
  {
    category: "Web Trade",
    question: "What types of charts are available on Web Trade?",
    answer: "Web Trade provides various chart types including Candlestick Charts, Bar Charts, and Line Charts as standard. Additionally, advanced options such as Tick Charts, Heikin-Ashi Charts, and Range Bar Charts are available, enabling traders to analyze markets in different ways according to their preferred methodology. The platform also supports flexible Timeframes, ranging from seconds to monthly intervals, making Web Trade suitable for scalpers, day traders, and long-term investors alike."
  },
  {
    category: "Web Trade",
    question: "What are the main features available in the Web Trade mobile app?",
    answer: "The Web Trade Mobile App supports complete trading functionality including Order Execution, Charting, and Notifications. Traders can place Market, Limit, Stop, and OCO orders directly through their mobile devices. The app also offers real-time price feeds, charting tools for technical analysis, and push notifications to instantly inform traders of order executions or market movements. This enables traders to monitor and manage their accounts seamlessly, ensuring professional trading conditions even while on the move."
  },
  {
    category: "Web Trade",
    question: "Can I add custom indicators to Web Trade?",
    answer: "Yes, Web Trade allows traders to add Custom Indicators. Users can upload their own indicator files into the platform to extend their analysis capabilities. This comes in addition to the wide range of built-in indicators such as Moving Averages (MA), Relative Strength Index (RSI), and Moving Average Convergence Divergence (MACD). By integrating custom tools, traders can tailor the platform to fit their strategies, enhancing flexibility in technical analysis."
  },
  {
    category: "Web Trade",
    question: "How can I save and load chart templates on Web Trade?",
    answer: "Web Trade allows traders to save Chart Templates, enabling consistent use of chart settings across different instruments. After customizing chart type, indicators, and layout, traders can use the “Save Template” function to store these settings. Later, they can apply the same setup on another instrument by selecting “Load Template.” This feature helps traders save time, maintain consistency, and manage multiple strategies more efficiently."
  },
  {
    category: "Web Trade",
    question: "Can I display multiple charts simultaneously on Web Trade?",
    answer: "Yes, Web Trade supports Multi-Chart functionality, allowing multiple charts to be displayed on the screen at the same time. Traders can monitor different timeframes of the same instrument, or compare price movements across multiple instruments in parallel. This feature is especially useful for identifying correlations, running different strategies concurrently, and improving overall market analysis efficiency."
  },
  {
    category: "Web Trade",
    question: "Can the Web Trade trading interface be customized?",
    answer: "Yes, the Web Trade trading interface is fully customizable. Traders can adjust menus, toolbars, and chart layouts to suit their individual trading styles. The platform also supports multiple monitor setups, enabling efficient analysis across several charts at once. Customized layouts can be saved and reloaded, ensuring consistency and convenience every time the trader logs in."
  },
  {
    category: "Web Trade",
    question: "How can I use chart timeframes and tick charts on Web Trade?",
    answer: "Web Trade provides a wide selection of Timeframes ranging from seconds to monthly intervals. Scalpers typically use short intervals such as 1-minute or 5-minute charts to implement fast entry and exit strategies, while long-term investors rely on daily or weekly charts for trend analysis. In addition, Tick Charts allow traders to monitor price movements based on the number of transactions rather than time, making them particularly useful for high-frequency trading and during major news events."
  },
  {
    category: "Web Trade",
    question: "Does Web Trade provide news feeds or economic indicators within the platform?",
    answer: "Yes, Web Trade integrates a real-time News Feed and an Economic Calendar directly into the platform. Traders can stay informed about key market-moving events such as central bank interest rate announcements, employment reports, and other macroeconomic indicators without leaving the trading interface. This feature is particularly useful for news-based strategies and helps traders react promptly to global financial developments."
  },
  {
    category: "Web Trade",
    question: "Does Web Trade support VPS connections?",
    answer: "Yes, Web Trade supports connections via Virtual Private Server (VPS). Using a VPS allows trading strategies, including Expert Advisors (EAs), to run continuously with minimal downtime, even when the trader’s own device is offline. A VPS also reduces latency by connecting from a server located close to the trading server, which is especially beneficial for high-frequency trading or news-driven strategies."
  },
  {
    category: "Web Trade",
    question: "Does Web Trade support Expert Advisors (automated trading)?",
    answer: "Yes, Web Trade fully supports Expert Advisors (EA) for Automated Trading. Traders can create or purchase strategies and run them automatically on the platform. This is particularly useful in 24-hour markets like Forex and Cryptocurrency, where constant monitoring is required. EA functionality ensures consistent execution of trading strategies without manual intervention, making Web Trade suitable for both discretionary and algorithmic traders."
  },
  {
    category: "Web Trade",
    question: "How is login security enhanced on Web Trade?",
    answer: "Web Trade strengthens login security through Two-Factor Authentication (2FA) and encrypted connections using SSL (Secure Socket Layer) protocols. In addition to entering a password, traders may be required to verify their identity through a mobile authenticator app, SMS code, or email confirmation. This additional layer of verification significantly reduces the risk of account compromise. These security procedures are designed in line with international financial industry standards, ensuring that client access to accounts remains secure."
  },
  {
    category: "Web Trade",
    question: "Can I check login history on Web Trade?",
    answer: "Yes, Web Trade provides a Login History feature that allows traders to review account access records. Information such as login time, IP address, and device used can be checked in detail. If any unusual or suspicious logins are detected, it is recommended to immediately change your password and, if necessary, request a temporary account lock. For further verification, traders may contact customer support to confirm security details and receive additional guidance."
  },
  {
    category: "Web Trade",
    question: "Where can I check trading history data on Web Trade?",
    answer: "Trading History can be accessed in Web Trade under the “Account History” menu. Here, traders can review detailed records of executed trades, open and closed positions, realized profits and losses (PnL), commissions, and swap charges. Data can also be exported to Excel for further analysis, reporting, or tax-related purposes, giving traders full transparency and control over their past trading activity."
  },
  {
    category: "Web Trade",
    question: "Does Web Trade support hotkey functionality?",
    answer: "Yes, Web Trade supports Hotkey functionality for faster navigation and order execution. Traders can assign custom shortcuts for actions such as changing chart timeframes, opening an order window, or closing positions instantly. This greatly enhances speed and efficiency, making it especially valuable for scalpers and active traders who require rapid responses to market movements."
  },
  {
    category: "Web Trade",
    question: "Under which regulatory license does Web Trade operate?",
    answer: "Web Trade operates under the Mauritius Financial Services license held by MIM and adheres strictly to international financial regulatory standards. This includes full compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations. Client funds are safeguarded through the Segregated Account principle, ensuring they are kept separate from company operational funds. These measures guarantee that clients trade in a regulated environment, benefiting from both platform reliability and fund protection."
  },
  {
    category: "Web Trade",
    question: "Where are the Web Trade servers located?",
    answer: "Web Trade servers are strategically located in major global financial hubs including London, New York, and Singapore. By connecting to the geographically closest server, traders can benefit from reduced latency and greater execution stability. For those using algorithmic trading or high-frequency strategies, Web Trade also supports integration with Virtual Private Servers (VPS), enabling ultra-fast order processing with minimal delay."
  },
  {
    category: "Web Trade",
    question: "What type of investors is Web Trade suitable for?",
    answer: "Web Trade is suitable for both beginner investors and professional traders. Beginners will find the intuitive interface and straightforward order functions easy to use, while professionals can leverage advanced features such as Multi-Chart layouts, Expert Advisors (EA), and Custom Indicators for more complex strategies. In addition, features such as Hedging and Partial Close support risk management, making Web Trade a versatile platform for traders with diverse goals."
  },
  {
    category: "Web Trade",
    question: "How can the Web Trade API be used?",
    answer: "The Web Trade API (Application Programming Interface) allows integration with external systems for algorithmic trading and order automation. Traders can use the API to connect real-time market data feeds and process trade executions programmatically. This makes it valuable for institutional investors and professional traders designing systematic strategies, including High-Frequency Trading (HFT). The Web Trade API ensures stable performance and is designed for demanding, precision-driven environments."
  },
  {
    category: "Web Trade",
    question: "How is client personal data protected on Web Trade?",
    answer: "Client personal information is protected in compliance with international regulations such as GDPR (General Data Protection Regulation). All data is stored in encrypted form, and access rights are strictly limited to authorized personnel only. Web Trade also undergoes regular external security audits to verify and enhance its information security framework. Personal data is never shared with third parties without client consent, except when required for AML (Anti-Money Laundering) and KYC (Know Your Customer) compliance purposes."
  },
  {
    category: "Web Trade",
    question: "How does Web Trade comply with Anti-Money Laundering (AML) regulations?",
    answer: "Web Trade strictly complies with international Anti-Money Laundering (AML) and Counter Financing of Terrorism (CFT) regulations. All clients must undergo identity verification (KYC, Know Your Customer) when opening an account. Transactions are continuously monitored through an automated Transaction Monitoring System designed to detect suspicious activity. Any transactions flagged as unusual may be subject to further review and, if necessary, reported to relevant regulatory authorities. These measures are implemented in accordance with global financial compliance standards."
  },
  {
    category: "Web Trade",
    question: "What security protocols are used for communication with Web Trade trading servers?",
    answer: "Web Trade uses SSL (Secure Socket Layer) and TLS (Transport Layer Security) protocols to encrypt all communications between the trading server and client terminals. This ensures that sensitive data such as order details, login credentials, and account information cannot be intercepted or altered by unauthorized third parties. By adhering to globally recognized security standards, Web Trade guarantees a safe and secure trading environment for its clients."
  },
  {
    category: "Web Trade",
    question: "What should I check if a login error occurs on Web Trade?",
    answer: "If a login error occurs, first verify that your Account ID and Password are entered correctly. It is also important to ensure that the Server Address is correct, as even minor mistakes in capitalization or spelling can result in login failure. In addition, check your internet connection status, and confirm that VPNs or firewalls are not blocking platform access. If the password has been forgotten, you can reset it directly from the Client Portal. If these basic checks do not resolve the issue, the next step is to contact customer support to have your account status examined. In urgent situations, live chat assistance is available for immediate support."
  },
  {
    category: "Web Trade",
    question: "How can I resolve server connection failures on Web Trade?",
    answer: "A server connection failure, also referred to as a Connection Error, can be caused by unstable internet, an incorrect server selection, or temporary server maintenance. First, check your internet connection and confirm that the server address provided is entered correctly. It is also advisable to try reconnecting from an alternative network such as Wi-Fi, mobile data, or another ISP. If the error is due to temporary maintenance, access will be restored shortly. However, if the issue persists, contacting customer support to confirm the server status is recommended. In cases of extended outages, real-time support is available."
  },
  {
    category: "Web Trade",
    question: "How should I respond if order execution is delayed on Web Trade?",
    answer: "Execution Delay is usually the result of slow internet connectivity, physical distance to the trading server, or exceptionally high trading volumes during certain market events. To reduce delays, ensure you are connected to a stable internet connection and, if possible, connect to the server geographically closest to you. Professional traders often use a Virtual Private Server (VPS) to minimize latency and ensure faster execution. If delays occur repeatedly, it is recommended to check with customer support to verify the status of the server."
  },
  {
    category: "Web Trade",
    question: "What should I check if Expert Advisors or indicators are not working on Web Trade?",
    answer: "If Expert Advisors (EAs) or indicators are not functioning, first ensure that the Automated Trading option (Algo Trading) is enabled within the platform. Verify that the installation path of the EA or indicator is correct and confirm that the file is not corrupted. Also, check whether the instrument and account type being used meet the requirements of the EA. Reviewing the EA Log File is essential for identifying errors. If the problem remains unresolved, the log can be submitted to customer support for further analysis and guidance."
  },
  {
    category: "Web Trade",
    question: "What should I do if chart data is not updating on Web Trade?",
    answer: "If chart data is not updating, the issue is often related to network latency or synchronization problems with the server. First, verify that your internet connection is stable, then restart the platform or update to the latest version. Switching to a different server from the server list may also help. If the issue occurs only on a specific instrument, it may indicate a temporary suspension of trading on that product. If data is not updating across all instruments, it is more likely related to the server connection. If the problem continues, contact customer support for detailed troubleshooting by the technical team."
  },
  {
    category: "Web Trade",
    question: "How can I submit an error log to Web Trade customer support?",
    answer: "Error Logs can be extracted from the platform’s support menu or through the Client Portal. Once generated, the log file can be submitted to customer support via email for review by the technical team. In urgent cases, logs may also be uploaded directly through the live chat support window for immediate examination. Providing detailed error logs significantly speeds up the troubleshooting process and ensures accurate resolution of technical issues."
  },
  {
    category: "Web Trade",
    question: "What should I do if the Web Trade platform does not launch?",
    answer: "If the platform does not launch, the most common causes include corrupted installation files or a computer that does not meet minimum system requirements. First, reinstall the platform using the latest installation package and verify that your operating system and drivers are up to date. Also, ensure that antivirus or firewall software is not blocking the program. If the issue persists after reinstallation, it is likely related to the local system environment. In such cases, providing the Error Log to customer support will help identify the root cause. For extended downtime, remote technical support may also be arranged."
  },
  {
    category: "Web Trade",
    question: "What should I do if the Web Trade mobile app crashes or closes unexpectedly?",
    answer: "Mobile app crashes may be caused by insufficient device storage, operating system incompatibility, or application errors. First, update the app to the latest version and, if necessary, uninstall and reinstall it. Ensure that your device operating system is updated to the most recent version. If the problem continues despite these steps, contact customer support to check compatibility with your specific device model. In cases where trading activity is disrupted, live support is available for immediate assistance."
  },
  {
    category: "Web Trade",
    question: "Where can I check for upcoming Web Trade updates or new features?",
    answer: "Information on Web Trade updates and new features is available through the official MIM website and the Client Portal. Important announcements are also displayed within the trading platform itself via pop-up notifications. Additionally, traders who subscribe to newsletters will receive update details by email, ensuring they remain informed about the latest improvements and newly introduced tools."
  },
  {
    category: "Web Trade",
    question: "What are the recommended practices for managing and changing passwords on Web Trade?",
    answer: "Strong passwords should include a combination of uppercase letters, lowercase letters, numbers, and special characters, with a minimum length of eight characters. It is recommended to change your password regularly and avoid using the same password across multiple platforms. On Web Trade, traders can easily update their password through the Client Portal. Once a password change is completed, an automated email confirmation is sent to the registered address for additional security."
  },
  {
    category: "Web Trade",
    question: "What should I do if I suspect my Web Trade account has been hacked?",
    answer: "If you suspect unauthorized access to your account, the first step is to immediately change your password. Traders should also check the Login History to confirm whether recent activities were performed by them. If suspicious activity is found, the account should be locked as a precaution. Clients can request an Account Lock by contacting customer support. Live chat support is available to guide you through the process in real time, ensuring rapid response to potential security breaches."
  },
  {
    category: "Web Trade",
    question: "What precautions should I take when logging in from a public computer?",
    answer: "When using a public computer, it is important never to enable the “remember me” or auto-login feature. Always log out completely once the session is finished. Since public computers are more vulnerable to keyloggers or spyware, traders are advised to use the secure keyboard function if available. To further enhance safety, Web Trade automatically logs users out after a period of inactivity (Timed Logout), ensuring that sessions are not left open unintentionally."
  },
  {
    category: "Web Trade",
    question: "Can I change the chart colors?",
    answer: "Yes, chart colors can be customized easily. Right-click on the chart and choose Properties. There, you can adjust background colors, candlestick colors for bullish and bearish moves, grid lines, and text. Applying colors that suit your preference or trading style makes the chart easier on the eyes and reduces fatigue during long sessions. You can also save the setup as a template, so you can quickly apply the same design to other charts."
  },

  // --- Deposit & Withdrawals ---
  {
    category: "Deposit & Withdrawals",
    question: "What deposit methods are supported on the MIM platform?",
    answer: "MIM supports three main deposit methods for client convenience: Card Payment, International Bank Wire Transfer, and Crypto Wallet Deposit (USDT). All deposit methods comply with international security standards and are processed under Anti-Money Laundering (AML) and Know Your Customer (KYC) procedures to ensure safety. Card Payment is the fastest deposit method, with funds reflected in the account immediately upon approval. No complicated procedures are required, making it particularly suitable for new clients or those wishing to start trading quickly. However, depending on the card issuer’s security policies, certain limits or additional authentication such as 3D Secure may be required. International Bank Wire Transfer allows funds to be transferred directly to MIM’s corporate accounts in Mauritius or St. Vincent & The Grenadines (SVG). As it goes through the international SWIFT network (Society for Worldwide Interbank Financial Telecommunication), it generally takes 1–3 business days or longer. This method is ideal for transferring large amounts securely, although intermediary bank fees may apply. Crypto Wallet Deposit (USDT) enables clients to send funds to a designated wallet address. Once confirmed on the blockchain network (e.g., TRC20, ERC20, BEP20), deposits are usually reflected in the account within minutes. Due to its low cost and fast processing speed, this is the most preferred method by clients worldwide. However, as cryptocurrency transfers cannot be reversed, clients must carefully check the wallet address before sending. MIM strictly adheres to international regulatory standards throughout the deposit process to safeguard client funds and ensure a secure and trustworthy trading environment."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What cryptocurrencies are supported for deposits?",
    answer: "MIM supports only USDT (Tether) for cryptocurrency deposits to ensure fund stability and regulatory compliance. USDT is the most widely used stablecoin by global exchanges and financial institutions. Its value is pegged to fiat currency, which minimizes price volatility and increases traceability. These features help manage client funds more safely and transparently. Clients may choose to deposit via ERC20 (Ethereum Network) or TRC20 (Tron Network). Since each network has different transfer speeds and fee structures, it is essential to confirm the designated wallet address and the correct network through the client portal before making a deposit. If the wrong network is selected or a different coin is transferred, irreversible asset loss may occur. Deposits from third-party wallets (not under the client’s name) are strictly prohibited. This rule complies with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations. Therefore, deposits must be made from a wallet under the client’s own name, and withdrawals will generally follow the same method as the initial deposit. MIM strictly adheres to international financial regulatory standards throughout all cryptocurrency transactions, continuously strengthening its security framework to ensure client funds remain safe."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Is it possible to deposit via bank wire transfer?",
    answer: "Yes, it is possible. Clients can deposit funds through International Bank Wire Transfer to the designated accounts of MIM’s entities in Mauritius or St. Vincent & The Grenadines (SVG). However, bank wire transfers are generally slower compared to Card Payments or Crypto Wallet Deposits (USDT). Due to differences between banks and intermediary banks, processing may typically take 1–3 business days or longer. This is because transactions pass through the international SWIFT (Society for Worldwide Interbank Financial Telecommunication) network. If the deposit amount exceeds a certain threshold, clients may be required to submit proof of source of funds (SOF) or proof of income documents. This is a mandatory procedure to comply with international Anti-Money Laundering (AML) regulations and to prevent illicit fund inflows. The sender’s name must match the registered MIM account holder’s name. Deposits under a third party’s name are strictly prohibited to comply with Know Your Customer (KYC) and regulatory requirements. Keeping and submitting transfer slips or transaction receipts can be very helpful in resolving delays. Please note that based on submitted KYC documents, source of funds evidence, international sanctions list checks, and AML monitoring, deposits or subsequent withdrawals may be put on hold. MIM prioritizes the safety of client funds and strict compliance with international financial regulatory standards."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can I deposit using credit cards or e-wallets?",
    answer: "MIM supports deposits via credit card payments (Card Payment). Once the payment is approved, the funds are usually reflected in the account within 1–5 minutes. This method is fast and simple, making it suitable for new clients or those who need to start trading urgently. For e-wallets, deposits may be available through certain integrated Payment Gateways (PG). However, depending on the policy of the e-wallet platform, additional procedures such as identity verification (KYC, Know Your Customer) or proof of income (Proof of Income) may be required for deposits exceeding certain thresholds. While these requirements vary by platform, MIM provides a simplified process to maximize client convenience. Deposited funds are, in principle, refunded or withdrawn via the original deposit method. This is a mandatory principle to comply with Anti-Money Laundering (AML) standards and international regulatory requirements. In cases where suspicious transactions, sanctions hits, or incomplete documentation are identified after a deposit, account usage may be temporarily suspended or additional documentation may be required. Depending on the circumstances, withdrawals may be denied, and reports may be filed with the Financial Intelligence Unit (FIU) and a Suspicious Transaction Report (STR) may be submitted. All deposits are subject to KYC, AML, and sanctions screening. Third-party payments are strictly prohibited, and clients must always use payment methods under their own name to ensure deposits are processed safely."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How long does it take for deposits to be processed?",
    answer: "Deposit processing times may vary depending on the selected payment method. MIM optimizes all deposit procedures to ensure the fastest possible processing, but actual times may differ depending on the characteristics of financial institutions and networks. Credit/Debit Cards and E-Wallets (e.g., Skrill, Neteller) are usually credited instantly or within a few minutes. However, in some cases, additional security reviews or verification procedures may extend processing up to 24 hours. Domestic Bank Transfers (ACH) are typically processed the same day, but depending on interbank network conditions, it may take 1–3 business days. International SWIFT Transfers may experience delays due to intermediary banks and country-specific regulations, generally taking 1–5 business days. SEPA Transfers (Eurozone) are usually completed within 1 business day. Crypto Deposits depend on blockchain network confirmations. For example, USDT (Tether) deposits are generally credited within 1–10 minutes, though network congestion may cause delays. Additionally, first deposits or transactions requiring proof of source of funds (SOF) and Know Your Customer (KYC) verification may take longer if additional documentation is requested. These are mandatory procedures to comply with international Anti-Money Laundering (AML) regulations."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Are deposit fees borne by the customer or by MIM?",
    answer: "MIM covers all deposit fees so that clients can fully focus on trading. Therefore, clients do not need to worry about any additional costs when making deposits. However, in the case of international bank wire transfers, intermediary bank fees or local bank fees may be incurred during the transfer process. These charges are beyond MIM’s control and may be applied separately according to the policies of the respective banks. For this reason, it is recommended that clients check the fee policies of their banks before initiating transfers. For card payments and crypto wallet deposits (USDT), MIM does not charge any additional fees. Our payment environment is optimized to ensure that clients can deposit funds quickly and efficiently without unnecessary costs."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What is the minimum deposit amount?",
    answer: "MIM sets a reasonable Minimum Deposit Requirement to allow clients to start trading without unnecessary burden. This ensures that a wide range of clients, from beginner investors to professional traders, can start trading flexibly. For card payments (Card Payment) and crypto wallet deposits (Crypto Wallet Deposit – USDT), relatively small deposits are also accepted. Generally, deposits of 10 USD or more are processed smoothly, which is the recommended minimum considering trading efficiency. On the other hand, for international bank wire transfers, higher minimum amounts may apply depending on each bank’s policy and the characteristics of international payment networks (such as SWIFT, ACH). The required minimum deposit may also vary depending on the involvement of intermediary banks or country-specific financial regulations. MIM operates its deposit process in compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations while ensuring accessibility of funds for clients. Therefore, clients are encouraged to review the conditions of each payment method and choose the one most suitable for them."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Is there a maximum deposit limit?",
    answer: "Yes, the Maximum Deposit Limit depends on national financial regulations and the characteristics of the chosen payment method. Therefore, the applicable limit may vary depending on the client’s country of residence and the selected payment option. Generally, deposits of 10,000 USD or more are subject to reporting obligations under international Anti-Money Laundering (AML) regulations. For deposits via E-Wallets, deposits starting from 2,000–5,000 USD may require Know Your Customer (KYC) verification and Proof of Income. MIM operates tiered verification procedures to ensure compliance: 2,000–5,000 USD: Basic KYC verification, 5,000–10,000 USD: Proof of Income required, 15,000 USD and above: Mandatory Source of Funds (SOF) or Source of Wealth (SOW) checks. Large deposits may trigger Enhanced Due Diligence (EDD), which requires prior notification and submission of supporting documents such as source of funds evidence. This process ensures compliance with international standards such as the Financial Intelligence and Anti-Money Laundering Act (FIAML). In addition, MIM may apply specific account-based deposit limits or impose restrictions/holds due to internal risk management, payment provider constraints, or regulatory requirements. Furthermore, as a principle, withdrawals are processed through the same method used for the initial deposit (First Funding Method)."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Is there a Source of Funds (SOF) / Source of Wealth (SOW) verification process when making deposits?",
    answer: "Yes, there is. In accordance with International Financial Regulations, verifying the Source of Funds (SOF) or Source of Wealth (SOW) is a critical requirement, and MIM strictly complies with these obligations. Criteria (Policy Basis): Under MIM’s Know Your Customer (KYC) and Anti-Money Laundering (AML) policies, SOF or SOW documentation is required for deposits exceeding certain thresholds or in high-risk situations. Individual: SOF – USD 10,000+ / SOW – USD 15,000+. Corporate/Entity: SOF/SOW – USD 25,000+. When Documentation is Required: During account onboarding, at the time of first or large deposits, when repeated or unusual transactions occur, involvement with high-risk jurisdictions, Politically Exposed Persons (PEPs), or international sanctions, or when suspicious activity is detected during AML monitoring. Examples of Supporting Documents: Bank statements, remittance slips (TXID), payroll slips, tax returns, sales or transfer agreements, financial statements, dividend proof, lawyer/CPA certificates. Procedure Flow: Compliance request → Client submits documents → Review by MLRO (Money Laundering Reporting Officer) → Upon approval, deposit is credited and withdrawals enabled. If flagged as suspicious, an STR (Suspicious Transaction Report) will be filed, and deposits/withdrawals may be delayed or rejected. Notes & Practical Tips: Third-party deposits are strictly prohibited. Failure to provide evidence may result in rejection or account freeze. Delayed submission may slow processing and withdrawal timelines. To ensure smooth processing, always use an account/card in your own name and retain remittance receipts. For large deposits, preparing documents in advance is recommended."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Are deposits restricted if the account is not under the registered account holder’s name?",
    answer: "Yes. All deposits must be made through a bank account, credit card, e-wallet, or crypto wallet registered under the customer’s own name (Account Holder’s Name). This is a mandatory procedure to ensure transparency and security of financial transactions and to comply with international regulatory standards. According to MIM’s policy, the depositor must be the account owner, and deposits made via third-party (Third Party) payment methods are strictly prohibited. If a deposit is made under another person’s name, the transaction may automatically be placed on hold or rejected, and in some cases, the account may be temporarily frozen. Particularly, third-party deposits may violate Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations, potentially leading to requests for additional documents, enhanced internal review, and in serious cases, reporting to the Financial Intelligence Unit (FIU). This measure is designed to protect not only client funds but also the overall integrity and stability of the MIM platform. Therefore, clients must always use accounts and payment methods under their own name. Only then can deposits and subsequent withdrawals be processed smoothly. The name verification procedure is the most reliable way to safeguard client funds and prevent unnecessary delays or disadvantages. MIM enforces strict compliance so that all clients can trade in a safe and transparent environment, and through these procedures, MIM is committed to protecting clients’ rights and interests."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How are withdrawals processed?",
    answer: "MIM withdrawals are handled in compliance with International Financial Regulations and Anti-Money Laundering (AML) standards. All withdrawals follow established procedures to ensure safety and transparency. Withdrawal Method Rule: Withdrawals must be made using the same method and account originally used for deposits. For example, if funds were deposited via Credit/Debit Card, withdrawals will be returned to the same card. If deposited via Bank Wire Transfer, withdrawals will only be made to the registered bank account under the client’s own name. Third-party (Third Party) accounts are not permitted. Verification & Approval: Before withdrawal, KYC (Know Your Customer), AML checks, sanctions screening, and Source of Funds (SOF) review are conducted. Account balance, margin requirements, open positions, and outstanding fees are also checked. Approval authority lies with the MLRO (Money Laundering Reporting Officer) and the Compliance Officer. Processing Time & Fees: If all requirements are met, withdrawals are typically processed within up to 5 business days. However, bank fees, payment provider fees, FX conversion fees, and intermediary bank charges are borne by the client. The company may also apply its own withdrawal fee. Hold or Reject Reasons: Withdrawals may be held or rejected under the following circumstances: Incomplete KYC, suspicious transactions or sanctions hits, insufficient account balance or active open positions, legal or regulatory orders, payment provider restrictions or technical issues. Rejection Procedure: If a withdrawal is rejected, clients may request an explanation from the Support or Compliance team. Additional documents such as ID, SOF, or SOW may be required for re-evaluation by the MLRO/Compliance Officer. If unresolved, clients will be guided to regulatory authorities or dispute resolution channels. Recommended Documents: To facilitate smooth withdrawals, clients should prepare: Transfer receipts / Blockchain TXID, Registered bank account details (Account Holder, IBAN, SWIFT), ID and proof of address, SOF/SOW documents for large withdrawals. These withdrawal rules are designed to comply with international regulations, protect client funds, and prevent money laundering."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How long does the withdrawal processing take?",
    answer: "The withdrawal processing time depends on the funding method selected and the characteristics of the corresponding payment network. MIM aims to process all withdrawal requests as quickly and securely as possible, while monitoring every stage of the process in real time from approval to settlement. Card Withdrawal & USDT Crypto Wallet Withdrawal: Withdrawals to cards or crypto wallets are the fastest methods. Typically, approval and transfer are completed within 15 minutes, and in most cases, results can be confirmed immediately in the account history. However, some transactions may require additional security checks or may be delayed due to network congestion. International Bank Wire Transfer: International transfers via SWIFT, ACH, or other global banking networks generally take longer. On average, they require 1–3 business days, but depending on regulatory procedures in each country and intermediary bank involvement, the process may be delayed further. In some cases, enhanced regulatory checks, bank maintenance schedules, or AML verification can extend processing time by several additional days. Security and Verification Procedures: All withdrawal requests undergo multi-layer verification procedures to safeguard client assets. If large transactions or unusual patterns are detected, additional ID verification or supporting documents may be requested. These measures are essential for protecting client funds. MIM’s Assurance: MIM operates an expedited approval process and provides real-time updates through customer support if delays occur. Additionally, all withdrawal records are available and traceable in the client portal, ensuring full transparency and convenience for fund management."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How are withdrawal fees applied?",
    answer: "MIM covers all deposit fees so that clients can fund their accounts without incurring additional costs. However, for withdrawals, fees charged by payment gateways (PG) or banks during the actual transfer process may be applied to the client. This is a structural characteristic of international financial networks, and MIM does not add any extra internal withdrawal fees. 1. Card Withdrawals: Card withdrawals generally do not incur additional fees. However, depending on the card issuer or payment provider’s policies, overseas currency conversion fees or small account maintenance fees may apply. As this varies by issuer and jurisdiction, clients are advised to check the relevant card policy in advance. 2. International Bank Wire Transfers: International transfers are processed through global banking networks such as SWIFT or ACH, where intermediary banks may be involved. Intermediary bank fees and FX conversion costs may occur, and the amount may vary depending on the country and bank policies. On average, fees typically range between 20–50 USD. Clients are strongly advised to confirm applicable charges with their bank prior to transfer. 3. Crypto Wallet Withdrawals: When withdrawing crypto assets, blockchain network fees (Network Fees or Gas Fees) are applied directly. For example, ERC20 withdrawals usually involve higher fees due to their stability and compatibility, while TRC20 withdrawals are faster and cheaper, making them more popular among clients. These costs vary in real-time depending on network congestion and are borne directly by the client. MIM’s Role: MIM ensures that all transactions are carried out transparently under a fair fee structure. Only actual costs imposed by payment processors, banks, or blockchain networks are applied. MIM does not impose any additional internal withdrawal charges, guaranteeing clients an optimized and cost-effective transaction environment."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Is there a minimum withdrawal amount?",
    answer: "Yes, MIM sets minimum withdrawal amounts depending on the withdrawal method to ensure transaction efficiency and minimize unnecessary costs. These thresholds are designed considering international payment networks, banking regulations, and blockchain fee structures, so that client funds are not unnecessarily depleted or delayed. 1. Card Withdrawal: Card withdrawals are processed via Authorization Reversal, allowing even small amounts to be withdrawn efficiently. Clients can therefore use this option to quickly retrieve small balances. However, some card issuers or payment providers may apply minimum withdrawal restrictions, and if linked to overseas issuers, additional FX conversion fees or requirements may apply. 2. Bank Wire Transfer: Bank wire transfers go through international networks such as SWIFT or ACH. In most cases, banks impose a minimum threshold due to cost efficiency. Small transfers can be inefficient as intermediary bank fees and handling charges often exceed the amount. Generally, transfers are processed smoothly from around 100 USD and above. 3. Crypto Wallet Withdrawal (USDT): Crypto withdrawals are subject to blockchain network fees (Network Fees, Gas Fees). Withdrawing very small amounts is inefficient as fees may consume a large portion of the funds. For this reason, MIM recommends a minimum of 50 USDT per withdrawal to ensure efficient transfers without unnecessary depletion of client funds. MIM’s Assurance: MIM sets minimum withdrawal thresholds to ensure withdrawals are processed within a reasonable fee structure. All standards comply with international financial regulations and payment network policies. Clients can review the applicable conditions for each method directly in the client portal prior to withdrawal."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What is the maximum withdrawal limit?",
    answer: "The withdrawal limit depends on the withdrawal method (bank wire, card, e-wallet, crypto), the currency used, the client’s jurisdiction, payment provider and banking policies, as well as MIM’s internal risk and AML (Anti-Money Laundering) review results. 1. Large-Scale Withdrawals: Large withdrawals require enhanced KYC (Know Your Customer) and AML verification. Clients may be required to provide proof of Source of Funds (SOF) and Source of Wealth (SOW). Individual SOF threshold: transactions totaling USD 10,000 or more. Individual SOW threshold: USD 15,000 or more. Corporate/Trust threshold: USD 25,000 or more. In such cases, additional documents and Enhanced Due Diligence (EDD) may be required. 2. By Payment Method: Card and E-Wallet withdrawals may have lower per-transaction or daily limits due to provider policies. Bank wire transfers (SWIFT) can handle larger amounts, but intermediary bank fees, regulatory delays, or compliance reviews may slow processing. Crypto withdrawals (USDT) are subject to blockchain network fees and exchange policies. For large withdrawals, SOF/SOW verification is required. 3. Risk & Compliance Review: Large withdrawals are subject to MIM’s internal risk management and compliance checks. Depending on the case, withdrawals may be placed on hold, partially settled, or reported as suspicious transactions (STR). Clients planning large withdrawals are strongly advised to consult with customer support in advance. MIM’s Commitment: MIM protects client funds while strictly adhering to international financial regulations. Specific withdrawal limits and procedures may vary depending on account type, jurisdiction, and payment method. Clients can receive tailored guidance from the support team when necessary."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can I cancel a withdrawal request after submission?",
    answer: "In principle, a withdrawal request can be canceled if it is still in the pending status, meaning before the company initiates the actual payout execution (such as bank transfer or card refund). However, once the company has already initiated the payment or the funds have been transferred to a third-party bank/payment provider, a recall or recovery process will be required. In this case, cancellation may depend on the cooperation of the receiving bank and the success of the recall request, which may not always be possible. Such procedures can take significant time, may incur additional fees, and in some cases, recovery may not be achievable. Additionally, if the withdrawal is under review due to AML (Anti-Money Laundering) or international sanctions, cancellation may be restricted or denied following the assessment of the MLRO (Money Laundering Reporting Officer) and the Compliance Department. If you wish to cancel, please contact Customer Support immediately and provide your Withdrawal Reference Number. Supplying supporting documents such as the transaction receipt or ID will help expedite the process. The company will inform you of the feasibility of cancellation, estimated processing time, and any applicable fees. If the payout has already been completed, you will receive further guidance on the recall or recovery process."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Is KYC verification required before making a withdrawal?",
    answer: "Yes, in principle, all withdrawals can only be processed once KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures are fully completed. This is a mandatory requirement under international financial regulations and AML standards, designed to protect clients’ funds and prevent illegal inflows of money. KYC Verification Process: KYC goes beyond simple identity checks, ensuring that the account is operated legitimately. Customer Identification: Verification of basic details such as name, address, date of birth, and nationality. ID Verification: Submission of official identification documents (passport, national ID card, driver’s license) to confirm authenticity. Address Verification: Utility bills or bank statements to confirm residential address. Source of Funds (SOF): For larger transactions, payroll slips, tax returns, or bank statements may be required to confirm the legality of funds. AML Monitoring: AML procedures involve monitoring whether transactions are linked to international sanctions, high-risk countries, or suspicious trading patterns. If necessary, Enhanced Due Diligence (EDD) may be applied, with review conducted by the MLRO (Money Laundering Reporting Officer) or Compliance Officer. Consequences of Incomplete KYC: If a withdrawal is requested before completing KYC, the request will be put on hold or rejected. In addition, if the account is flagged for AML risks, further documentation may be required, and in severe cases, reports may be filed with the FIU (Financial Intelligence Unit). Guidance for Clients: To ensure smooth withdrawals, clients are strongly advised to complete KYC verification immediately after opening an account. This minimizes delays and ensures funds are managed safely and transparently. MIM securely stores and manages all submitted information in line with international regulatory standards."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Must withdrawals be made only to the same account used for deposits?",
    answer: "Yes. Under MIM’s terms, withdrawals must, in principle, be processed via the same method and the same beneficiary account that was used for the initial deposit. This is a safeguard to ensure fraud prevention, block third-party fund inflows, and comply with Anti-Money Laundering (AML) regulations. However, in exceptional cases where it is impossible or impractical to process a withdrawal through the same method (e.g., expired card, refund not supported by the payment provider), withdrawals may be redirected to another account under the client’s own name, subject to prior compliance/MLRO review and approval. In such cases, the client must submit a written explanation along with supporting documents such as account proof (account holder name, IBAN, SWIFT code, bank name), valid ID, and the initial deposit receipt. Additional documents, such as proof of Source of Funds (SOF), may be requested. Depending on the review, withdrawals may be delayed or rejected. Withdrawals to third-party accounts are strictly prohibited under all circumstances. The company reserves the right to reject such requests or return funds to the original deposit source."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can I withdraw to an overseas bank account?",
    answer: "Yes, withdrawals to overseas bank accounts are possible. However, this is limited to cases where the customer has deposited into MIM’s Mauritius or SVG (St. Vincent & the Grenadines) accounts, and withdrawals must always be made to an account under the same beneficiary name. Principle: The withdrawal account holder must exactly match the customer’s own name (third-party accounts are not allowed). KYC (Know Your Customer) and AML (Anti-Money Laundering) verification procedures must also be completed. Required Information: Beneficiary Name (Account Holder), Bank Name, Account Number / IBAN, SWIFT / BIC Code, Bank Address & Beneficiary Address, Currency and Payment Purpose, Bank-issued statement (if required). Processing Time & Fees: Withdrawals are processed via SWIFT and generally take 1–5 business days after internal approval. Delays may occur due to intermediary banks or country-specific regulations. All remittance fees, intermediary bank fees, and FX conversion costs are borne by the customer. Withdrawals may be held or rejected in cases of sanctioned countries, high-risk jurisdictions, incomplete KYC, insufficient source of funds, or suspicious transactions. For large withdrawals, SOF (Source of Funds) and SOW (Source of Wealth) documentation is required, subject to MLRO approval. Recommended Action: Contact customer support before initiating an overseas withdrawal to confirm eligibility, required documents, estimated processing time, and applicable fees. Preparing transfer receipts and bank statements in advance will help ensure smooth processing."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can I withdraw fiat currency if I deposited cryptocurrency?",
    answer: "No. As a rule, if you deposited cryptocurrency, you can only withdraw the same type of cryptocurrency. For example, if you deposited USDT (Tether) into your MIM account, you must withdraw USDT to the same registered crypto wallet. Withdrawing cryptocurrency deposits directly as fiat currency (such as USD, EUR) is not permitted. This is not merely an internal policy, but an international standard procedure to ensure transparency and traceability of funds. It helps MIM comply with AML (Anti-Money Laundering) requirements and international financial regulations, while protecting clients’ assets from potential misuse. If you wish to withdraw in fiat, you must have funded your account with fiat from the beginning—for example, through bank wire transfer or credit/debit card payment. Only then can you withdraw in the same fiat method (USD, EUR). MIM applies the “Same Method Rule” for all deposits and withdrawals, ensuring transparency, international compliance, and client fund protection."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Where can I check my deposit and withdrawal history?",
    answer: "You can check your deposit and withdrawal history at any time through the “History” menu in the MIM Client Portal or Mobile App. The records include detailed information such as request date & time, transaction amount, processing status, and fees. These records are stored for at least one year, and in certain jurisdictions, in accordance with AML (Anti-Money Laundering) and compliance/accounting regulations, they may be retained for 5–7 years or longer. Additionally, you can download these records for personal bookkeeping or tax filing purposes, ensuring full transparency and compliance."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How can I resolve deposit/withdrawal errors?",
    answer: "Deposit/Withdrawal errors may occur due to reasons such as incorrect account details (Account Details Error), incorrect cryptocurrency wallet address (Wallet Address Error), or banking delays (Banking Delay). In such cases, please provide the time of error and detailed transaction information to Customer Support. The submitted information will be reviewed by the Technical Team and the Payment Team to trace the cause, and immediate corrective action will be taken whenever possible. For cryptocurrency deposits, if funds are sent to a wrong wallet address, recovery is almost impossible due to the nature of blockchain technology. Therefore, it is essential to carefully verify the recipient address before making any transfers. MIM responds promptly to protect your funds and provides updates through the customer support team whenever deposit or withdrawal errors occur."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What happens if I send cryptocurrency to the wrong address?",
    answer: "The most important point during a crypto deposit is to always use the official wallet address provided in the MIM Client Portal. If funds are sent to the wrong address, due to the nature of blockchain transactions, they cannot be canceled or reversed. Recovery is practically impossible, and assets may be permanently lost. In such cases, the responsibility rests entirely with the customer. Therefore, before sending, you must copy and paste the entire address and double-check that every character is correct. For safety, it is recommended to first send a small test amount, and once the deposit is confirmed, proceed with the full transfer. MIM helps customers avoid such mistakes by clearly displaying the wallet address and network type (e.g., ERC20, TRC20) in the portal. Customers must strictly follow the official information provided there."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can blockchain network delays cause deposit processing to be late?",
    answer: "Yes, it is possible. When global trading volume surges, congestion within the blockchain network itself may slow down confirmation speeds. This depends on the traffic of specific coins or networks (e.g., ERC20, TRC20, BEP20). The higher the volume of transactions, the longer the waiting time for confirmations. At MIM, at least one network confirmation must be completed before deposits are reflected in the customer’s account. This is an international standard procedure to protect customer funds and to prevent incorrect or tampered deposits. In most cases, deposits are reflected within a few minutes, but occasionally delays of 30 minutes or longer may occur depending on network conditions. In such cases, customers can check the transaction status via a blockchain explorer and, if necessary, submit the transaction ID (TXID) to customer support for assistance."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What should I do if a deposit is not reflected in my trading account?",
    answer: "If the deposit procedure has been completed successfully but the funds are not reflected in your account, please first check the deposit status in the Client Portal. The portal will display the status in real time as \"Pending,\" \"Processing,\" or \"Completed.\" Typically, deposits made via card payment or crypto wallet are reflected instantly or within a few minutes. However, network congestion or banking delays may cause a longer processing time. In particular, international bank transfers (SWIFT) may take 1–3 business days or more due to intermediary banks. If the deposit is not reflected after the expected time frame, please submit your deposit receipt or payment confirmation to Customer Support. MIM’s technical and payment teams will trace the transaction, identify the cause, and resolve the issue promptly. All deposit records are securely stored on MIM’s servers, and no client funds are ever lost. You can always verify your transactions, so please rest assured and follow the guidance of our support team."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What should I do if the funds are not credited to my account after a withdrawal request?",
    answer: "If a withdrawal request has been successfully submitted but the funds are not credited to your account, please first check the “Withdrawal History” menu in the Client Portal. It will show the status as “Pending,” “Processing,” or “Completed.” For bank transfers, it usually takes 1–3 business days due to differences in interbank processing speeds. International transfers involving intermediary banks may be further delayed depending on the country and bank. Additional time may also be required during weekends or public holidays. Crypto wallet withdrawals are generally processed quickly, but delays may occur during periods of blockchain network congestion. However, since all transactions are recorded on the blockchain ledger, the safety of funds is always ensured. If the withdrawal has not been credited even after the expected time, please contact Customer Support with your Withdrawal Request ID. The MIM support team will immediately verify the transaction, review payment provider/bank or blockchain records, and provide a prompt update."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How is the exchange rate applied when transferring funds between multinational bank accounts?",
    answer: "When using bank transfers, the exchange rate is applied based on the rate provided at the time of transfer by the corresponding bank or Payment Gateway. This reflects real-time rates processed through international financial networks, particularly the SWIFT system, ensuring that MIM does not arbitrarily alter rates or impose additional margins. During the transfer process, differences may arise depending on intermediary banks, receiving banks, and the regulatory environment of each country. Additional conversion fees or intermediary charges may also apply. Therefore, it is advisable for clients to confirm applicable exchange rate conditions and estimated fees prior to initiating the transfer. MIM guarantees full transparency of exchange rates and provides clear guidance on all transfer details and rate applications. This ensures that clients can manage their funds with reliable exchange rates and conditions, even in global transfer processes."
  },
  {
    category: "Deposit & Withdrawals",
    question: "If the deposit and withdrawal currencies are different, will the system automatically convert them?",
    answer: "For standard members, withdrawals are strictly limited to the same method and currency used for the deposit. For example, if you deposit USD via bank transfer, the withdrawal must also be processed in USD to the same bank account. Similarly, deposits made via card are refunded only to the same card. This policy is designed to comply with Anti-Money Laundering (AML) regulations and international financial standards, while preventing the use of third-party accounts or illegal fund inflows. However, High-Value Traders or Exclusive-tier members may request exceptions by consulting with the Customer Service team to adjust withdrawal methods or request withdrawals using different channels from those used for deposits. In such cases, strict KYC and AML verification procedures are required, and approval depends on the outcome of internal reviews. Furthermore, any currency conversion fees, intermediary charges, or network costs arising from such exceptional processing are fully borne by the client. MIM prioritizes both the safety of client transactions and compliance with international regulations while striving to provide differentiated convenience based on membership tiers. Therefore, standard members must adhere to the same-method rule, whereas High-Value Traders and Exclusive members may request individual reviews through the Customer Service team when needed."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can deposits and withdrawals be processed on weekends or public holidays?",
    answer: "In general, services such as International Bank Wire Transfer or certain Payment Service Providers (PSPs) are limited during weekends and public holidays. If the interbank network (Banking Network) is closed or undergoing scheduled maintenance, deposits or withdrawals may be delayed. In such cases, withdrawal approval and the actual transfer of funds are automatically carried over to the next Business Day. On the other hand, Card Payments and Crypto Wallet Deposits/Withdrawals are processed through automated approval systems. Therefore, in most cases, transactions are carried out normally even on weekends or public holidays. However, some card issuers or Payment Gateways (PGs) may conduct temporary maintenance during certain hours, which could result in slightly slower processing or approval compared to weekdays. At MIM, to minimize customer inconvenience, instantly executable transactions (e.g., USDT wallet deposits/withdrawals, card-based payments) are operated on a 24/7 automated reflection system. In addition, any restrictions or delays from banks or PSPs are monitored in real time, and customers are promptly informed to ensure a stable financial service environment."
  },
  {
    category: "Deposit & Withdrawals",
    question: "If a deposit or withdrawal is delayed, is there a tracking number that clients can check directly?",
    answer: "Yes. If a deposit or withdrawal takes longer than expected, clients can receive a tracking number depending on the payment method used. For bank transfers, once the transaction is processed, a SWIFT code or transaction reference number is issued. Clients can use this number to track the progress through the banking network and, if necessary, request confirmation from their bank together with the transaction receipt. For cryptocurrency withdrawals, once the transaction is recorded on the blockchain, a TXID (Transaction Hash) is generated. Clients can enter this TXID into a blockchain explorer to check which block the transfer has been recorded in and how many confirmations have been completed. These tracking numbers ensure transparency, allowing clients to monitor the movement of their funds at any time. MIM promptly provides them so clients can feel secure."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How will clients be notified if a withdrawal request is rejected or put on hold?",
    answer: "If a withdrawal request is not approved or placed on hold, the client portal will display the status as “Pending” or “Rejected.” The specific reasons, however, are communicated individually via the registered email address, in accordance with security and regulatory compliance procedures. The email will detail the reasons for the hold or rejection along with the required follow-up actions (e.g., submission of identity verification documents, proof of fund source, completion of AML/KYC procedures). Once the client provides the requested documents or completes the verification process, the withdrawal request will undergo review again and may then proceed. MIM manages all notification processes transparently, ensuring that clients are not subjected to unnecessary confusion, by providing prompt email updates and support from a dedicated service team."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What must clients know to comply with deposit and withdrawal regulations?",
    answer: "All deposits and withdrawals must be conducted strictly through accounts in the client’s own name. Transactions through third-party accounts are never permitted under any circumstances. This rule is based on international Anti-Money Laundering (AML) standards and is designed to enhance security. For transactions exceeding 5,000 USD, clients may be required to submit detailed income documentation or proof of fund source. In cases of repeated small split deposits, regulators may classify such activity as suspicious, which could trigger additional verification procedures or withdrawal restrictions. MIM strictly adheres to international AML regulations, ensuring that client funds are managed legally and transparently. These procedures are essential safeguards to protect client assets and to block any inflow of illicit funds."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can I deposit and withdraw multiple currencies (USD, USDT) simultaneously in the same account?",
    answer: "Yes. Clients can request deposits and withdrawals in multiple currencies such as USD and USDT within the same account. However, since the account’s base currency is the reference point, any transaction in a different currency will automatically trigger a conversion process. The conversion fees or rate differences may vary depending on banks, payment gateways (PGs), or network policies, and such costs are charged to the client. Additionally, the market exchange rate at the time of conversion is applied, so the final credited or withdrawn amount may differ from expectations. Therefore, before executing large transactions, it is advisable to carefully review the applicable exchange rate conditions and fee policies. MIM manages this process transparently, enabling clients to view all deposit, withdrawal, and conversion records by currency through the client portal at any time."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How are deposits and withdrawals managed when using third-party payment services (e.g., PayPal, Skrill)?",
    answer: "MIM supports third-party payment services such as PayPal and Skrill, but only accounts under the client’s own name may be used. If the depositor’s name (account, card, or wallet holder) does not match the client’s registered name, third-party payments will not be accepted. All deposits and withdrawals must comply with KYC/AML reviews as well as the policies of payment providers and banks. If suspicious activity is detected, withdrawals may be placed on hold, additional documentation may be requested, withdrawals may be declined, or a Suspicious Transaction Report (STR) may be filed. Withdrawals must be made through the same payment method and account used for the initial deposit. For example, if funds were deposited via PayPal, withdrawals will also be processed to the same PayPal account. Once all requirements are met, withdrawals are typically processed within 5 business days. Common reasons for withdrawal rejections include mismatched depositor names, suspected use of third-party funds, incomplete KYC or proof-of-funds documents, regulatory or legal restrictions, and country-specific policies of payment providers or banks. If a withdrawal is declined, clients can confirm the reason with customer support and submit any additional required documents. More complex cases will be reviewed directly by the Compliance/MLRO team."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Are network fees for cryptocurrency withdrawals borne by clients, or covered by the platform?",
    answer: "Network fees (Network Fee, Gas Fee) are mandatory costs incurred when blockchain networks verify and record transactions. These fees are paid to miners or validators to ensure that transactions are properly confirmed and permanently recorded on the blockchain ledger. As this structure applies universally across the globe, it is standard practice for clients to bear these costs directly. For example, the ERC20 network provides high levels of security and stability, but because of the greater resources required for transaction validation, fees are often relatively higher. By contrast, the TRC20 network offers faster transaction speeds and lower fees, making it a cost-effective option, particularly for clients engaging in small or frequent transfers. Thus, fee levels and processing speeds vary depending on the network. MIM does not impose any additional charges beyond the actual network fee incurred. Clients can review real-time network conditions (such as congestion or fee levels) at the time of withdrawal and select the most efficient network for their needs. This structure is built on the transparency and fairness of blockchain technology, ensuring that client assets are transferred securely while minimizing unnecessary cost burdens."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What are the most common reasons for withdrawal rejections?",
    answer: "The most common reasons for withdrawal rejections are incomplete KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures. If Customer Due Diligence (CDD) is insufficient—for example, missing ID documents, proof of residence, or proof of source of funds—withdrawal requests may be delayed or rejected. Additionally, being flagged on international sanctions lists or alerts from financial monitoring authorities can also result in rejection. Under MIM’s policy, the MLRO (Money Laundering Reporting Officer) and Compliance Officer (CO) are obligated to conduct Enhanced Due Diligence (EDD) and report suspicious transactions. Withdrawals cannot be approved until any irregular activity is cleared. Other frequent reasons include: Matches with international sanctions lists, Abnormal or repetitive transaction patterns, Insufficient balance due to open positions, Settlement delays from liquidity providers (LPs), Legal or regulatory restrictions. If a withdrawal is rejected, clients must immediately contact the Compliance Team or Customer Support to verify the reason and promptly provide any additional documents requested (e.g., ID, proof of funds). MIM applies strict standards to protect client assets while fully complying with international regulations, ensuring withdrawal procedures remain safe and transparent."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What are the reasons for deposit and withdrawal restrictions?",
    answer: "Deposit and withdrawal restrictions are primarily measures to protect client funds and ensure compliance with international financial regulations. These are essential procedures to safeguard accounts and prevent illegal inflows or outflows of funds. Common reasons include: Incomplete KYC: If account verification is not completed, deposits and withdrawals may be restricted. Suspicious transactions: Unusual patterns or flagged transactions may automatically be put on hold. Smurfing (structured small deposits): Activities that may violate Anti-Money Laundering (AML) regulations. Regulatory directives or policy changes: Strengthened financial regulations, court orders, or sanction requirements in certain jurisdictions. Network/technical issues: Banking system or blockchain congestion, system maintenance, or technical problems. Dormant accounts: Accounts with long periods of inactivity may be restricted for security reasons. In such cases, restrictions may be lifted once the client completes identity verification procedures or submits additional documents (e.g., ID, bank statements, proof of funds). MIM applies reasonable and transparent procedures to minimize inconvenience while ensuring strict compliance with global regulations."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can additional documents be required for withdrawal security verification?",
    answer: "Yes, it is possible. To protect clients’ assets securely and comply with international AML (Anti-Money Laundering) and financial regulations, MIM may request additional documents in certain situations. The main cases where additional documents may be required include: Large Withdrawal: When withdrawing above a certain threshold, proof of funds (SOF) or proof of wealth (SOW) may be required. Suspicious Transaction: When trading patterns appear abnormal or significantly different from previous activity. Regulatory Requirements: Depending on national or institutional regulations, documents such as income proof, bank statements, tax documents, or identification may be required. These procedures are part of international standard practices designed to prevent illegal outflows of client funds or misuse by third parties. MIM conducts all security verification processes promptly and transparently, ensuring maximum protection of client assets while minimizing inconvenience."
  },
  {
    category: "Deposit & Withdrawals",
    question: "If a withdrawal request is delayed, how much additional time is typically required?",
    answer: "For bank wire transfers, processing usually takes 1–3 business days, but depending on interbank procedures and country-specific regulations, delays may extend up to 5 business days. If weekends or public holidays are included, the processing time may be longer. Crypto wallet withdrawals are generally completed quickly, but in cases of network congestion, additional delays ranging from a few minutes up to 1 hour may occur. In most cases, once internal AML (Anti-Money Laundering), KYC (Know Your Customer), and sanctions-related checks and document verifications are successfully completed, withdrawals are processed within 5 business days as per policy. However, if further verification is required, or if there are delays from banks/payment providers, or issues related to conversion and fees, processing may take longer than expected. Estimated additional delays are as follows: Normal circumstances: 1–3 extra business days (total ~6–8 business days). Urgent cases or high-risk transactions (AML suspicion, sanctions, incomplete documents, etc.): 5–10 business days or longer depending on the situation. MIM minimizes client concerns by providing real-time updates upon request, and transparently communicates the reason for delays along with the estimated processing time."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Are there additional identity verification procedures for large withdrawal requests?",
    answer: "Yes, there are. For withdrawal requests exceeding 15,000 USD, the company may conduct enhanced identity and source-of-funds verification in accordance with international Anti-Money Laundering (AML) regulations and internal security policies. During this process, clients may be required to submit the following documents: Re-confirmation of ID or passport, Bank balance certificate, Proof of income and source of funds (e.g., salary slips, tax returns, investment income statements, etc.). These procedures are essential to prevent illicit fund outflows, comply with regulatory requirements, and ensure the safety of client assets. Depending on the situation, the company may request additional reviews and document checks, which could extend withdrawal approval timelines from several days to a few weeks. MIM strives to complete these procedures as swiftly as possible to minimize client inconvenience, and all processes are managed transparently."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can I request a withdrawal if my account has a negative balance?",
    answer: "In principle, withdrawals are not permitted if an account has a negative balance. The withdrawal amount is calculated based on the available balance, which is defined as the actual account balance minus any open positions and required margin. MIM’s system employs automatic liquidation and risk management procedures to prevent balances from falling into negative territory due to slippage or short-term volatility. However, in exceptional cases such as sharp market fluctuations, liquidity shortages, or major economic announcements, a temporary negative balance may occur. In such cases, settlement will be handled through the customer support team, and depending on the situation, adjustments or additional deposit requests may be required. If negative balances occur repeatedly or are exploited intentionally, the account may face restrictions such as withdrawal limitations or login suspensions, in accordance with company policy. These measures are necessary to maintain a fair and stable trading environment for both the company and its clients. Therefore, clients must always maintain an adequate margin level and carefully adjust leverage and position sizes, particularly during periods of high volatility caused by news releases or global events. Doing so helps prevent unnecessary negative balances and ensures a stable trading environment."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can withdrawals be restricted in certain countries?",
    answer: "Yes, depending on national financial regulations or international sanctions, withdrawal restrictions may apply in certain countries. The main reasons include designations by international organizations or local authorities as sanctioned or high-risk jurisdictions, incomplete KYC/AML checks or suspicious transactions, country-specific transfer restrictions imposed by payment providers or banks, and discrepancies between deposit and account information. In such cases, withdrawals may be temporarily placed on hold or subjected to additional verification procedures in line with MIM’s terms and AML/risk management policies. Clients may be required to provide proof of funds or identity documents, and ensuring that the withdrawal account matches the original deposit account is also an essential part of the verification process. MIM strictly complies with international regulations and provides advance notice to clients in affected countries to minimize inconvenience."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Can the customer service team contact me for additional verification after submitting a withdrawal request?",
    answer: "Yes, it is possible. In particular, if a High-Value Withdrawal occurs or an Abnormal Transaction Pattern different from your usual activity is detected, the MIM Customer Service team may directly contact you to conduct a Security Verification. This procedure is not a simple internal check but part of an international standard security process designed to prevent financial crimes such as Account Takeover, Anti-Money Laundering (AML), and Illegal Fund Transfers in advance. During the additional verification process, you may be asked to provide documents such as an ID Document, Account Ownership Proof, or Initial Deposit Receipt, depending on the situation. These materials confirm that the account belongs to you and ensure the legal origin of the withdrawal funds. MIM strives to carry out these security procedures in the fastest and most simplified way possible so as not to cause unnecessary inconvenience. Once verification is completed, the Withdrawal Approval is processed immediately, ensuring both the safety of your assets and minimizing any withdrawal delays."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How should I choose the wallet network (ERC20, TRC20, etc.) when withdrawing cryptocurrency?",
    answer: "When submitting a withdrawal request, clients can directly choose their preferred network. However, it is crucial to use the same network as the wallet address entered to ensure the transfer is completed safely. ERC20 Network: Based on Ethereum, it offers high stability and security, making it widely used for large-scale transactions. However, Gas Fees may increase during network congestion. TRC20 Network: Based on TRON, it provides fast transfer speeds and very low fees, making it particularly suitable for small and frequent withdrawals. BEP20 and other networks: Supported by some exchanges or wallets. Always confirm support before proceeding and withdraw only using the matching network. The choice of network is the client’s responsibility. Before submitting, always double-check that the withdrawal wallet address matches the selected network. If the wrong network is chosen, the transferred assets may not be recoverable. For safety, it is recommended to conduct a small test transfer first."
  },
  {
    category: "Deposit & Withdrawals",
    question: "If I enter the wrong wallet address during withdrawal, can the funds be recovered?",
    answer: "Unfortunately, due to the structural nature of blockchain, funds transferred to an incorrect wallet address cannot be recovered. Once a transaction is broadcast, it is permanently recorded on the blockchain ledger and cannot be arbitrarily canceled or reversed by any third party. This irreversibility is a fundamental security feature of blockchain but also represents an inherent risk. If the address entered by the user corresponds to another valid wallet, the system will recognize it as a legitimate transfer destination and proceed with the transaction. In such cases, the transferred funds cannot be retrieved without the consent of the receiving wallet owner. For safe transactions, we strongly recommend double-checking your withdrawal address before confirming. For large transfers, it is advisable to first conduct a small test transaction to verify the accuracy of the address. This is considered a Global Security Best Practice across the industry. By following these precautions, you can prevent unnecessary asset loss and ensure that your funds are managed more securely."
  },
  {
    category: "Deposit & Withdrawals",
    question: "How can I check if a deposit/withdrawal request is delayed?",
    answer: "If a deposit/withdrawal request is delayed, you can first check the status in the MIM Client Portal. The portal will display the real-time status such as “Pending,” “Processing,” or “Completed,” so you can easily see which stage your request is currently in. If the processing time exceeds the expected duration and the delay continues, we recommend contacting Customer Support immediately. Our support team will escalate the request to the relevant department to identify whether the delay is due to banking delays, payment network issues, or blockchain network congestion, and then provide you with an update. In particular, international bank wire transfers may experience various delays caused by national regulations, intermediary bank procedures, weekends, or public holidays, which can extend the processing time. As this is an unavoidable feature of the international banking system, we provide clear reasons so you can stay informed and assured. MIM continuously monitors banks, payment networks, and blockchain networks 24/7 to process all requests as quickly and securely as possible, and promptly informs clients of any delays."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What are the most common causes of withdrawal delays?",
    answer: "Withdrawal delays can occur due to various reasons, with the most common being: Bank Wire Processing Time: International Bank Transfers go through banking networks (SWIFT/ACH) and intermediary banks, so processing times may differ by country and bank. On average, this takes 1–5 business days, and additional delays may occur on weekends or public holidays. Blockchain Network Congestion: Crypto Withdrawals can be delayed depending on blockchain network traffic. For example, USDT (ERC20/TRC20) transactions may take longer to confirm when network traffic is high. Enhanced KYC/AML Checks: For large withdrawals or unusual activity, the Compliance Team or MLRO (Money Laundering Reporting Officer) may request additional identity verification (Enhanced Due Diligence), which can temporarily hold the withdrawal. Account & Balance Conditions: Withdrawals may be restricted or put on hold due to insufficient balance, open positions, or margin deficits. MIM ensures customers are updated in real time via the portal and customer support to avoid unnecessary concerns."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Is 2FA authentication mandatory for deposits and withdrawals?",
    answer: "2FA (Two-Factor Authentication) is not a strict legal requirement, but it is strongly recommended to protect your account. Even without 2FA enabled, deposits and withdrawals are possible, but the risk of account hacking or unauthorized access leading to asset leakage is relatively higher. When 2FA is enabled, a withdrawal request cannot be processed with just a password. An additional security step is always required. Typically, this involves entering a one-time password (OTP) generated by an authentication app such as Google Authenticator. This process plays a crucial role in blocking account theft, phishing, and unauthorized withdrawal attempts. Especially for large withdrawals or when abnormal transaction patterns are detected, 2FA acts as a safeguard to reconfirm the customer’s identity, drastically reducing the possibility of unauthorized third-party access. Therefore, MIM strongly recommends that all customers enable and use 2FA for withdrawals and other critical account activities. Setup only takes a few minutes, but it is one of the most effective security measures to protect your funds."
  },
  {
    category: "Deposit & Withdrawals",
    question: "What happens if the depositor’s name does not match the account holder’s registered name in a bank transfer deposit?",
    answer: "If the depositor’s name differs from the registered account holder’s name, the funds will, in principle, be automatically rejected. This is a mandatory procedure under Anti-Money Laundering (AML) and client asset protection regulations. Funds transferred from third-party accounts will not be credited to the client’s account. These rules follow international financial standards aimed at preventing illicit fund inflows and financial crimes. However, in cases involving e-wallets or international bank transfers, the system may sometimes fail to instantly match the depositor’s name with the registered account name. In such cases, the Client Management Team will manually review the deposit details and contact the client for verification. Once confirmed, the funds will be refunded rather than credited to the account. Repeated attempts to deposit funds from accounts under third-party names may result in the account being suspended or subject to additional KYC/identity verification procedures, in line with security regulations. These measures are in place to protect client accounts and ensure compliance with regulatory requirements. Therefore, clients must always use accounts, cards, or e-wallets registered in their own name. Failure to comply may lead to unnecessary deposit delays or account restrictions. To ensure secure and seamless transactions, clients are strongly encouraged to use only accounts under their own name."
  },
  {
    category: "Deposit & Withdrawals",
    question: "If I send cryptocurrency to the wrong deposit network, can it be refunded?",
    answer: "No, refunds are not possible. Due to the structural nature of blockchain networks, once a transaction is transmitted, it cannot be canceled or reversed. Therefore, if funds are sent through the wrong network, the assets will be lost and cannot be recovered. For example, if a transfer is made using the TRC20 network to an ERC20-only address, the transaction will still be recorded on the blockchain as completed, but the receiving account will not recognize it. In this case, the transferred assets are permanently lost and cannot be recovered by third parties or exchanges. To prevent such risks, it is essential to verify that the recipient wallet address and the selected network type match exactly before making a transfer. For large transactions, it is strongly recommended to first conduct a small test transfer to ensure proper reflection before sending the full amount. MIM continuously reminds clients to carefully verify wallet addresses and network selections before initiating transfers to protect their assets. While the system also includes basic safeguards to minimize common errors, the ultimate responsibility lies with the client. Therefore, clients must always double-check transfer details, which is also considered a globally recognized security best practice."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Withdrawing bonus credits",
    answer: "Yes, bonus credits are additional amounts provided when clients deposit real funds, and they cannot be unconditionally converted into cash. To maintain a fair trading environment and prevent abuse of bonuses, certain conditions must be met before withdrawals are allowed. Typically, profits generated from bonuses can only be withdrawn after meeting requirements such as a turnover requirement or a minimum holding period. These conditions vary depending on the nature and policy of each promotion and will be clearly communicated at the time of bonus issuance. Additionally, since bonuses are intended to support actual trading activities, using them solely for cash conversion is prohibited. Therefore, clients should always check the specific bonus conditions linked to their account and ensure compliance before submitting a withdrawal request. MIM transparently discloses all bonus-related terms and provides detailed guidance and customer support to help clients avoid confusion."
  },
  {
    category: "Deposit & Withdrawals",
    question: "Account balance deducted after a withdrawal request",
    answer: "Once a withdrawal request is successfully submitted, the client’s account balance is immediately deducted and switched to “Withdrawal Pending” status. This safety measure prevents double withdrawals or duplicate transactions for the same amount. The actual transfer is processed later by the payment gateway or bank, but the adjusted balance is instantly reflected in the Client Portal and transaction history. This allows clients to see their updated available balance immediately and manage new trades or additional deposits/withdrawals with accuracy. This immediate deduction method is not just an internal policy, but a global standard procedure under international financial regulations, AML rules, and client asset protection standards. It minimizes risks of unauthorized or duplicate use of client funds. MIM strictly follows this process to ensure transparency and safety, while providing real-time tracking of all withdrawal statuses."
  },

  // --- Partners ---
  {
    category: "Partners",
    question: "What is the MIM IB Partnership Program and what role does it play?",
    answer: "The IB (Introducing Broker) program is a core partnership model that connects MIM with clients, widely used in the global financial industry. IBs do not engage in direct trading; instead, they attract new clients or manage existing clients, thereby supporting MIM’s growth and market expansion. When clients execute trades, a portion of the spread (difference between bid and ask price) or commission is paid to the IB as commission income, which is the main source of revenue for IBs. In essence, IBs focus on marketing, education, consultation, and basic support, while MIM takes responsibility for trade execution, fund management, platform operations, and risk management. This division of roles provides clients with a trustworthy service experience and allows MIM to optimize operating costs. Notably, MIM’s IB program goes beyond simple client acquisition by offering partners a sustainable system for long-term income. The more clients an IB brings, the greater the trading volume and consistent commission income, enabling IBs to build a stable and lasting business model."
  },
  {
    category: "Partners",
    question: "What is the difference between an IB and a regular trader?",
    answer: "A regular trader invests their own funds directly, opening and closing buy/sell positions in the market, and personally bears the profits and losses depending on trading performance. In other words, a trader’s income depends heavily on market analysis skills, trade timing, and risk management. In highly volatile financial markets, the possibility of losses is always present. In contrast, an IB (Introducing Broker) focuses on attracting clients and connecting them with MIM, thereby generating stable income regardless of trading performance. The more clients an IB has, and the more actively those clients trade, the more commissions based on spreads and fees are earned. This income is generated as long as trades occur, even if clients incur losses, which marks a key distinction. Additionally, while a regular trader’s performance is directly tied to their income, an IB’s results depend on networking, client support, and marketing skills. Thus, traders rely on financial knowledge and investment expertise, whereas IBs rely on relationship-building and long-term client management. In conclusion, a trader is an individual investor who takes on direct market risks and opportunities, while an IB serves as a business partner who connects MIM with clients and builds a sustainable income model."
  },
  {
    category: "Partners",
    question: "What procedures are required to start an IB partnership?",
    answer: "To start an IB (Introducing Broker) partnership with MIM, applicants go through a relatively simple yet transparent review process. First, those who wish to become an IB must complete an online application form provided by MIM. During this process, they need to submit identification documents, proof of residence, contact information, and basic personal details. In certain regions, additional information such as tax details or bank account information may be required to comply with regulations. Once the application is received, MIM verifies the applicant’s identity and submitted documents through its internal review process. This review usually takes 1–2 business days, although it may take longer in countries with stricter regulatory environments. After approval, the IB immediately receives access to a dedicated portal account and a tracking link. The tracking link is essential for client acquisition, allowing IBs to monitor referred clients’ trading activities and generated commissions in real time. The portal also provides client management tools, revenue analysis, payout history, and downloadable marketing materials. In summary, the process follows: Application → Review → Approval → Access to Tools. Once completed, the IB can begin client acquisition activities and build a stable and transparent revenue model."
  },
  {
    category: "Partners",
    question: "Can individuals participate in the IB program, or is it only for corporations?",
    answer: "The IB (Introducing Broker) program is generally designed as an open structure, allowing both individuals and corporations to participate. For individuals, registration is relatively simple, requiring only an ID (KYC) and proof of residence (address document). This low entry barrier enables a wide range of participants, such as retail traders, online marketers, and educators, to become IBs. For corporations, additional documents such as a business license, incorporation certificate, and tax-related records may be required. Corporate IBs often have advantages in brand credibility, tax benefits, and large-scale client management capabilities. However, in regions with stricter regulations (e.g., the U.S., Japan, Korea, and some EU countries), individual participation may be restricted, with only corporations being allowed. This is due to financial regulators in these jurisdictions imposing strict rules on derivative marketing and referral activities. In summary, individuals benefit from quick entry and flexible activities, while corporations gain from credibility and scalability. Most brokers support both types, allowing participants to choose based on their goals and circumstances."
  },
  {
    category: "Partners",
    question: "Is the IB contract period fixed, or is it maintained indefinitely?",
    answer: "Like most brokers, MIM’s IB contracts are generally signed as indefinite agreements without a specific expiry date. This industry standard allows IBs to confidently build and manage clients over the long term. However, “indefinite” does not mean without conditions. If inactivity persists for a long period, or if violations of regulations or abnormal marketing activities are detected, MIM reserves the right to review or terminate the contract. For example, if no new clients or trading volume occur within a set timeframe, the contract terms may be adjusted, or the IB account may be deactivated. In addition, MIM may apply performance-based conditions, such as renegotiating the contract if minimum monthly trading volume or client acquisition targets are not met. Conversely, IBs with outstanding performance may be rewarded with long-term stability and higher rebate conditions. In summary, IB contracts are basically indefinite, but their continuation depends on activity and compliance. This flexibility benefits both the broker and IB, enabling a transparent and sustainable partnership."
  },
  {
    category: "Partners",
    question: "Does IB registration involve any costs?",
    answer: "For most global brokers, including MIM, there are no fees charged for IB registration itself. The reason is simple: from MIM’s perspective, IBs help bring in new clients and encourage trading activity, which directly contributes to MIM’s revenue growth. Therefore, IBs are seen as partners who expand the market, not as entities that pay to participate. The registration process only requires submitting basic documents and going through an internal approval procedure. No fees or registration charges apply. In fact, brokers often minimize entry barriers to help IBs start quickly, and in some cases provide free marketing materials, training programs, or client management tools. However, in certain regulated jurisdictions, additional licenses or tax registrations may be required for IB activities. In such cases, any administrative costs must be borne by the IB, but these are separate from broker registration fees. In conclusion, IB registration is free, requiring only documentation and MIM’s approval. IBs can begin client acquisition without additional costs, and build a stable income structure based on performance."
  },
  {
    category: "Partners",
    question: "Are IB programs restricted in certain countries?",
    answer: "Yes, IB programs may be restricted depending on the financial regulatory environment of each country. This is not simply a matter of MIM’s internal policy, but rather because each jurisdiction requires compliance with local legal regulations and licensing conditions. For example, the United States, Japan, South Korea, and certain EU countries impose very strict regulations on derivatives and high-risk investment products. In such regions, brokers cannot allow IB activities without proper authorization or licenses from local financial authorities. If an IB operates without permission, it may be considered illegal marketing or unlicensed financial activity. Therefore, most brokers specify a Restricted Countries List in advance, and IBs must check this list before determining where they can operate. Since regulatory environments can change, IBs should review this list regularly to remain compliant. Even in jurisdictions with relatively lighter regulations, minimum obligations such as AML (Anti-Money Laundering), KYC (Know Your Customer), and tax reporting still apply. Violations of these obligations may lead to termination of the contract or penalties, regardless of location. In conclusion, IBs can operate globally, but restrictions exist in highly regulated countries. It is essential for IBs to confirm permitted and restricted countries before engaging, as this is critical for long-term stability and legal risk management."
  },
  {
    category: "Partners",
    question: "Can MIM IBs operate globally?",
    answer: "The MIM IB program basically allows global activities. In other words, IBs can recruit clients from anywhere in the world and use online marketing and networks to connect with traders from various regions. This minimizes geographical limitations and provides opportunities to expand the potential client pool. However, as mentioned earlier, activities are not permitted in certain highly regulated countries. For example, the United States, Japan, South Korea, and some EU countries impose strict legal restrictions on derivatives and referral activities, meaning IBs cannot directly market or operate in these regions. This is necessary to comply with international financial regulations and AML (Anti-Money Laundering) principles. Therefore, before starting, IBs must check the list of permitted and restricted countries and regularly review the broker’s policy documents. Moreover, to succeed as a global IB, one must not only confirm regulatory restrictions but also establish strategies tailored to local languages, cultural characteristics, and marketing channels. In summary, MIM IBs have broad opportunities in the global market, but they must avoid regions where activities are legally prohibited. This is essential for stable operations and long-term profitability."
  },
  {
    category: "Partners",
    question: "What are the minimum requirements to start IB activities?",
    answer: "The conditions required to start IB activities are relatively simple compared to other financial licenses, but basic credibility and client acquisition capability are essential. First, the KYC (Know Your Customer) process is mandatory. Whether the IB is an individual or a corporation, they must submit basic documents such as an ID card, proof of residence, and contact information. This is necessary for the broker to comply with AML (Anti-Money Laundering) and international financial regulations. Second, there is no separate capital requirement. Since IBs do not directly operate trading funds, a large initial investment is not needed. Instead, having a business foundation such as networks, communities, or online marketing channels to recruit clients is important. For example, running a trading education platform or managing an online investment community can be a strong advantage as an IB. Third, MIM often provides simple training, guidelines, and marketing materials to prevent IBs from engaging in indiscriminate marketing or regulatory violations. This ensures IBs can operate professionally and legally while maintaining client trust in the long term. In summary, the minimum requirements for IB activities are ① KYC approval, ② client acquisition ability, and ③ compliance with MIM guidelines. Success depends more on networking and marketing capability than on capital."
  },
  {
    category: "Partners",
    question: "Is IB registration only possible online?",
    answer: "Yes, most global brokers today operate IB registration as a standard procedure through online portals. Applicants can complete registration by filling out a simple form on the dedicated website and uploading documents such as ID and proof of address. This method removes geographical barriers and allows anyone to join as an IB from anywhere in the world. The global industry standard is online registration. In particular, online procedures are fast and transparent, which is why most new IBs prefer this method. Once approved, IBs can immediately start operating via an online dashboard. This dashboard provides essential tools such as client traffic tracking, commission calculation based on trading volume, settlement details, and marketing materials. This allows IBs to monitor performance in real time and efficiently manage clients and optimize revenue. In conclusion, online registration is the global standard for IBs, and after approval, digital management systems enable IBs to continue their partnership quickly and transparently."
  },
  {
    category: "Partners",
    question: "How is IB income calculated?",
    answer: "IB income is generally based on the spread (difference between bid and ask prices) or trading fees generated when clients trade. MIM allocates a certain percentage of these fees to the IB, which is the most common structure in the industry. This method has become the industry standard, and as long as clients trade, commissions continue to accrue. A key feature of the IB income structure is that it is independent of the client’s profit or loss. Whether the client gains or loses, as long as a trade occurs, the IB receives commissions. Therefore, an IB’s core strategy focuses not on market analysis or trading performance, but on how many clients can be reliably recruited and how actively those clients trade. In conclusion, IB income grows proportionally with trading frequency and volume, meaning that the more clients an IB attracts and the more active their trading, the more stable and predictable the IB’s income becomes."
  },
  {
    category: "Partners",
    question: "What is the payout cycle for IB commissions?",
    answer: "The payout cycle for IB commissions is most commonly on a weekly or monthly basis. Generally, new IBs start with monthly payments. This allows the broker to monitor early activities while ensuring a stable settlement structure. Once a certain trading volume is achieved or the partnership tier is upgraded, the option to switch to weekly payments is often provided. Weekly payments offer the advantage of better cash flow management. IBs can recover their earnings faster, reinvesting into marketing or operational expenses, which positively supports business expansion. On the other hand, monthly payments provide a simpler settlement process and are more suitable for IBs with fluctuating trading volumes, as they allow revenue to be managed in a steady pattern. At MIM, payout cycles are adjusted based on the IB’s reliability and performance. Some major brokers even offer daily or instant settlement systems, though these are usually conditional. The standard industry practice, however, remains weekly or monthly payments. In conclusion, IB commission payout cycles are designed to guarantee regular and stable settlements, while also allowing IBs to transition to shorter payout frequencies as they build performance. This structure ensures that IBs can maintain long-term partnerships while quickly realizing the rewards of their growth."
  },
  {
    category: "Partners",
    question: "Are IB earnings based on client trading volume, or on spreads/commissions?",
    answer: "Most brokers, including MIM, calculate IB earnings based on spreads (the difference between bid and ask prices) or trading commissions. In other words, whenever a client executes a trade, part of the cost incurred is paid to the IB as commission. Therefore, the higher the client’s trading volume, the larger the commission will be proportionally. There are two main IB revenue models: Spread-based model – A certain percentage of the spread generated on each client trade is paid to the IB. The wider the spread of the instrument, the higher the commission can be. Commission-based model – In accounts such as ECN or Pro accounts where commissions are charged, the IB receives a portion of the commissions paid by the client. The greater the trading volume, the higher the earnings generated. In conclusion, IB income is not determined simply by the number of clients, but rather by the frequency and volume of their trades. This structure directly links client trading activity to IB revenue, making it transparent and establishing it as the standard model in the global brokerage industry."
  },
  {
    category: "Partners",
    question: "Are both CPA (Cost Per Acquisition) and Rebate (Volume-Based Rewards) supported?",
    answer: "Yes, most global brokers including MIM operate with both CPA and Rebate models. This allows IBs to choose the compensation method that best suits their network performance and client characteristics. CPA (Cost Per Acquisition) – A fixed payment is made for each new client referred. For example, once a client completes their first deposit, the IB may receive $100 per client. This structure provides immediate rewards even if the client does not trade for long, making it ideal for IBs who specialize in client acquisition. Rebate (Volume-Based Rewards) – A portion of the spread or commission generated from each client’s trades is paid continuously to the IB. The more a client trades, the more recurring commissions accumulate, making this model attractive to IBs seeking stable, long-term income. In conclusion, MIM supports both CPA and Rebate models, enabling IBs to design a flexible compensation structure aligned with their business strategies and client base. This approach reflects global industry standards by respecting diverse partnership models and supporting IBs in building sustainable revenue."
  },
  {
    category: "Partners",
    question: "Is IB commission paid even if the client incurs a loss?",
    answer: "Yes, IB commissions are paid solely based on trading activity, regardless of whether the client makes a profit or a loss. As long as a trade is executed, the IB receives an agreed share of the spread or transaction fee as commission. The core principle of this structure is that the IB’s role is client acquisition and support, not managing trading performance. IBs do not interfere with clients’ trading decisions or outcomes; they simply act as partners connecting clients to MIM. Therefore, commissions are volume-based rather than performance-based, ensuring predictable and stable income for the IB. This system is a global financial industry standard, designed to guarantee transparency and fairness. If IB income depended on client profits or losses, it would be difficult to maintain a stable business model and could lead to conflicts of interest. With a volume-based model, as long as clients trade actively, IBs consistently earn commissions. In conclusion, IBs enjoy continuous, predictable revenue that is not tied to client performance, which is one of the main reasons why IB programs are highly attractive worldwide."
  },
  {
    category: "Partners",
    question: "When are IB commissions settled and in which currencies are they paid?",
    answer: "IB commissions are settled on a weekly or monthly basis. For new IBs payments usually begin on a monthly cycle but once certain trading volume thresholds are reached or partnership tiers increase weekly payout options may also be offered. The shorter the payout cycle the faster the IB can secure cash flow. Payments are most commonly made in USD (US dollars) or USDT (Tether). These are global standard settlement currencies making cross border payments stable while crypto based settlements are preferred for their speed and low transaction fees. Some brokers may also offer options in regional currencies such as EUR GBP or JPY but USD and USDT remain the most widely used. Settlement details can be tracked in real time via the IB’s dedicated dashboard. Trading volumes per client generated commissions and pending payouts are automatically recorded and at the time of payment an automated report is generated to ensure transparency. Additionally Excel export functions are available for tax reporting or internal bookkeeping. In summary IB commissions are paid regularly and transparently most often in USD or USDT providing IBs with both reliable cash flow and a secure management environment."
  },
  {
    category: "Partners",
    question: "In what ways can IB commissions be paid — card, e-wallet, or bank transfer?",
    answer: "The method of IB commission payment may vary depending on MIM’s policy and local regulations, but the most common methods used are bank transfers, e-wallets, and cryptocurrency wallets. Bank Wire Transfer – The most traditional method, where the settlement amount is directly credited to the IB’s registered bank account. It uses international transfer networks (such as SWIFT), which makes it universal but may take 2–5 business days to process, and intermediary bank fees may apply. E-Wallets (Skrill, Neteller, Perfect Money, etc.) – This method is linked to online payment services, offering faster processing and relatively lower fees. It is one of the most preferred options by global IBs, and some wallets support local currency withdrawals. However, additional KYC checks may be required, and availability may be restricted in certain countries. Crypto Wallets (USDT, BTC, etc.) – The fastest-growing payment method, with USDT (on ERC20 or TRC20 networks) becoming an industry standard. Transactions are completed within minutes with low fees, making it very popular. However, incorrect network selection can result in irreversible asset loss, so caution is needed. Most IBs choose from these three methods when registering, and their chosen option is pre-set for automatic payments according to the settlement cycle (weekly/monthly). In conclusion, MIM and other global brokers broadly support bank transfers, e-wallets, and crypto wallets (especially USDT) to ensure IBs can receive commissions conveniently and securely, regardless of regional restrictions."
  },
  {
    category: "Partners",
    question: "Where can I check my earnings details?",
    answer: "After approval, IBs can transparently review their earnings details through a dedicated portal or dashboard provided by MIM. This system is the core tool for IB activities, designed to allow real-time monitoring of both earnings and client activity. The dashboard records details such as client-by-client trading volume, commissions generated, payment status, and pending earnings. This allows IBs to clearly see not only their total revenue, but also which clients have traded, the transaction size, and how commissions were generated. MIM also provides an Excel (XLSX) download function so that IBs can manage their own accounting records or use the data for tax reporting. This setup is not just a convenience feature but an industry standard aimed at ensuring transparency and trust between MIM and IBs. Since IBs can access and compare the data at any time, uncertainty about the commission calculation process is minimized. In conclusion, IBs can manage their earnings in a real-time, transparent, and systematic way through the dedicated dashboard, which serves as a foundation for building long-term partnership trust."
  },
  {
    category: "Partners",
    question: "Is there a bonus system for acquiring new clients?",
    answer: "Yes, at MIM we operate a special bonus system to encourage new client acquisition. This incentive promotion is designed to help IBs expand their client base quickly during the early stages of their activities. For example, an IB may receive a one-time bonus after introducing the first 10 clients, or benefit from an increased rebate rate if a certain trading volume is reached within a specific time period. Since these bonuses are promotional in nature, they are usually temporary and often apply only during certain campaign periods. However, for IBs who successfully attract new clients, they provide an additional revenue stream on top of regular rebates, significantly accelerating growth in the initial phase. MIM also applies a tiered bonus structure, such as progressively increasing bonus amounts when an IB reaches 10, 50, and 100 clients. This approach helps IBs expand their client pool effectively over the long term. In conclusion, new client acquisition bonuses provide IBs with short-term performance incentives, boosting motivation while complementing rebate earnings, making IB activities even more attractive."
  },
  {
    category: "Partners",
    question: "If a client does not deposit or withdraw, will IB earnings still occur?",
    answer: "No, IB earnings are based on the client’s actual trading activity. Even if an account is opened, if no deposit or trading takes place, no commission will be generated. This is a global industry standard designed to ensure that IBs focus not only on member recruitment but also on encouraging real trading activity. In other words, if the client only opens an account without making a deposit, the IB will not receive any earnings. At minimum, a deposit and actual executed orders are required for spreads or commissions to be generated, and a portion of these costs is distributed to the IB as commission. Therefore, the core role of an IB is not just to recruit clients, but to support and manage them so they can begin trading smoothly and continue trading consistently. MIM also offers CPA (Cost Per Acquisition) programs to encourage new client acquisition, but even this requires a deposit or meeting minimum trading requirements. Simply registering without funding does not qualify for rewards. In conclusion, the IB earning structure is based on spreads and commissions generated from real trading, which ensures that IBs focus on fostering trading activity and client retention rather than mere recruitment."
  },
  {
    category: "Partners",
    question: "Are there additional verification procedures for high-value settlements?",
    answer: "Yes, there are. Most global brokers, including MIM, must conduct additional verification when settlements exceed a certain amount, in accordance with AML (Anti-Money Laundering) and KYC (Know Your Customer) regulations. This is not merely an internal policy but an industry standard to comply with international financial regulations and legal requirements of each jurisdiction. Typically, when settlements exceed 10,000 USD, IBs may be required to provide identity re-verification, proof of residence, proof of income or source of funds, and bank statements. In some countries, Enhanced Due Diligence (EDD) procedures may apply for amounts above 5,000 USD. This process is based on FATF recommendations and local financial authorities’ requirements, aiming to prevent money laundering, tax evasion, and third-party misuse. For transparent IBs, these checks are usually straightforward and do not hinder payout. MIM also operates dedicated teams and automated systems to ensure that such verifications are processed quickly, minimizing payout delays. While IBs may find this somewhat inconvenient, it is ultimately a safeguard for both the broker and the partner. In conclusion, additional verification for high-value settlements is a mandatory and standardized procedure. It ensures the legality and transparency of IB income and strengthens trust in long-term partnerships."
  },
  {
    category: "Partners",
    question: "Who is responsible for handling disputes with clients?",
    answer: "All official disputes and complaints arising between clients and MIM are the sole responsibility of MIM. As the licensed financial service provider, MIM is legally and contractually accountable for account opening, trade execution, fund custody, and withdrawal processing. Therefore, if clients raise issues such as trading conditions, platform errors, or fund transfer delays, MIM’s customer service and dedicated departments must investigate and resolve them. On the other hand, IBs are only responsible for client acquisition and basic support, and they do not bear any legal liability for disputes with clients. Since IBs do not handle client funds and only serve as an intermediary between MIM and the client, dispute resolution authority lies entirely with MIM. However, IBs often act as the frontline contact for clients. While they lack formal authority to resolve disputes, they can play a bridging role by promptly relaying client complaints to MIM’s support teams. For instance, if a client raises concerns about withdrawal delays, the IB can explain the situation and connect the client with MIM’s relevant department. Additionally, when MIM holds a regulatory license, clients may escalate complaints to the relevant financial authority of that jurisdiction, in which case MIM—not the IB—remains the responsible party. In conclusion, MIM carries the full legal and operational responsibility for dispute resolution, while IBs act as intermediaries who listen to clients’ concerns and facilitate smooth communication. This division of roles is the industry standard for maintaining client protection and trust."
  },
  {
    category: "Partners",
    question: "Can IBs directly provide rebates to clients?",
    answer: "Yes, at MIM, IBs are permitted to offer clients a portion of their rebates (a partial refund of commissions). This allows IBs to provide added benefits to clients, which in turn strengthens loyalty and encourages consistent trading activity. However, any rebate scheme must receive prior approval from MIM and comply strictly with internal policies. Illegal or excessive incentives can distort market order or mislead clients, and are therefore strictly prohibited. For example, excessively high cash bonuses offered solely to attract new clients may be considered unfair competition or unlawful rebates. To manage this, MIM clearly defines rebate limits, payment methods, and distribution frequency within its policies. IBs may only offer client rewards within these approved boundaries. Strategically, IBs can provide rebates not only as direct cash refunds but also in the form of trading fee discounts, educational services, or promotional credits. These approaches enhance the client experience and promote long-term trading engagement. In conclusion, IBs may provide rebates to clients, but only under MIM’s approval and within legal, transparent frameworks. When used appropriately, rebates become a powerful tool for strengthening client loyalty and enhancing IB competitiveness."
  },
  {
    category: "Partners",
    question: "Can an IB handle deposits or withdrawals on behalf of clients?",
    answer: "No. Under no circumstances can an IB directly handle or intervene in a client’s deposits or withdrawals (fund transfers). This is strictly prohibited across the global financial industry, and any violation could fall under AML (Anti-Money Laundering) and anti-fraud regulations. All funds must be deposited or withdrawn strictly through the client’s own account under their verified name. Therefore, an IB managing a client’s bank account, e-wallet, or making withdrawal requests on their behalf is illegal and strictly blocked under MIM’s internal policies. The IB’s role is limited to client acquisition, basic consultation, and guidance on how to use the trading platform. For example, if a client is unsure about the deposit process, the IB may provide instructions or training, but cannot send money or access the client’s account directly. If an IB were to handle client funds, it would be considered money laundering, embezzlement, or unauthorized financial intermediation. This would result in regulatory penalties and immediate termination of the IB’s contract with MIM. In conclusion, IBs must never touch client funds. Their role is purely to provide guidance and support, while actual fund transfers must be performed directly by the client. This principle protects clients, preserves MIM’s credibility, and safeguards the IB’s own legal standing."
  },
  {
    category: "Partners",
    question: "Can an IB manage a client’s account?",
    answer: "No. Under no circumstances can an IB directly interfere with a client’s account for trade execution or fund management. The authority to manage accounts belongs solely to the client and MIM, and this is an industry-standard regulation established in the global financial sector. Trade execution (such as opening or closing positions, placing orders) and fund management (such as deposits, withdrawals, or leverage adjustments) can only be done by the client’s own decision and through MIM’s system. If an IB intervenes, it would be considered unauthorized asset management and a violation of regulations. Regulatory authorities such as ESMA in Europe, NFA in the United States, and supervisory bodies in Asia strictly prohibit IBs from handling client accounts. The proper role of an IB is limited to indirect and supportive functions. For example: Explaining how to use the MIM platform, providing market news and educational materials, sharing general trading guidelines, assisting clients with platform usage procedures. In contrast, logging into a client’s account to place trades or manage funds is strictly prohibited. This ensures the protection of client assets and clarifies accountability. If an IB were to manage accounts without authorization, they could face serious legal consequences and sanctions in case of client losses. In conclusion, IBs must focus on their role as advisors and supporters, while account and fund management remain strictly under the authority of the client and MIM."
  },
  {
    category: "Partners",
    question: "Can an IB directly view the trading history of their referred clients?",
    answer: "According to industry standards, IBs cannot directly access the detailed trading history of their referred clients (such as individual positions, order records, profit and loss details). This restriction is enforced strictly to comply with personal data protection regulations (such as GDPR) and financial regulatory requirements. The information provided to IBs by MIM is generally limited to client names, account activity status, total trading volume, accumulated commission records, and payment status. While this allows IBs to monitor their marketing performance and rebate calculations, they cannot view specific trading strategies or position details of clients. This structure prioritizes the protection of client investment privacy while ensuring IBs can transparently track the overall trading scale and compensation generated by their referrals. If IBs were allowed to access specific trading records, it could lead to privacy breaches, market manipulation, or unfair rebate inducements. Therefore, IBs focus on client acquisition, relationship management, and basic support rather than managing clients’ trading activities. Specialized trading-related support remains the responsibility of MIM. This clear division of roles between MIM, IBs, and clients is a global industry standard that ensures trust and compliance."
  },
  {
    category: "Partners",
    question: "Can an IB directly collect or store client information?",
    answer: "No. Under global privacy laws such as GDPR and CCPA, and in accordance with financial regulations of each country, an IB cannot directly collect or store sensitive client information. This rule exists to enhance client data security and to prevent unnecessary legal disputes. All client data is managed exclusively within MIM’s official CRM system. The information visible to IBs is very limited, usually restricted to client name, account activity status, trading volume, and commission records. On the other hand, sensitive information such as contact details, ID documents, deposit/withdrawal history, and individual trade records remain inaccessible to IBs. This structure serves two purposes: Preventing data leaks – Since IBs do not store client data, risks of hacking or internal leakage are minimized. Clarifying accountability – Responsibility for data protection lies entirely with MIM, while IBs act only as sales and marketing partners. If an IB collects client data without authorization or stores it in a separate database, it would be considered a violation of privacy and financial laws, leading to serious penalties. In conclusion, IBs must not directly collect or store client data. They can only access limited information provided by MIM, which ensures both client trust and legal safety. The IB’s essential role is to recruit and support clients, not to act as data managers."
  },
  {
    category: "Partners",
    question: "What kind of educational or support services can an IB provide?",
    answer: "An IB can offer a variety of educational and support services to help clients understand the platform and start trading smoothly. For example, they may organize seminars or webinars for new clients, explaining basic platform usage, order methods, and account management procedures. IBs can also provide trading guides and manuals, sharing beginner-friendly resources such as explanations of order types, MT5 installation guides, or FAQ collections. Additionally, they may distribute official marketing materials approved by MIM, such as brochures, banners, or videos, to strengthen brand credibility. Basic market information such as economic calendars or summaries of major news events may also be provided, as these are public resources. However, it is important to note that the role of an IB is limited to support. Official investment advice, recommendations on buy/sell timing, or asset management guidance can only be offered by licensed financial professionals. If an IB violates this rule, it may be considered unauthorized investment advisory activity and be subject to penalties. In conclusion, an IB may provide educational and support services to help clients adapt to the trading environment, thereby improving client experience and trust. However, they must refrain from offering investment advice and focus solely on the role of a guide and supporter."
  },
  {
    category: "Partners",
    question: "Do I need prior approval from MIM to conduct marketing activities?",
    answer: "Yes, similar to most brokers, MIM also requires prior approval for major marketing activities. This is not just a simple administrative process, but an essential measure to ensure IB (Introducing Broker) activities do not violate regulatory standards and to maintain brand credibility. Activities requiring prior approval: Website creation and management (content must be reviewed), SNS advertisements and online campaigns (must be approved in advance), Large offline events (require detailed plans and approval). Relatively free activities: Personal blogs or simple link sharing may be conducted without detailed broker approval, as long as they comply with brand guidelines and regulatory standards. Approval process: IBs must submit created promotional materials to MIM and receive approval from Compliance. Purpose of approval: Regulatory risk prevention, Brand image management, Encouraging transparency. Risks of violation: Conducting unapproved campaigns may result in IB contract termination, forfeiture of commissions, legal sanctions, or even reporting to regulatory authorities. In conclusion, MIM IBs must obtain prior approval for major marketing activities, and even small-scale actions should be carried out carefully to avoid regulatory risks. This system is an industry standard designed to balance IB freedom with regulatory compliance and market trust."
  },
  {
    category: "Partners",
    question: "Does MIM provide dedicated marketing materials for IBs?",
    answer: "Yes, MIM provides dedicated marketing materials to help IBs carry out client acquisition activities smoothly. This is not merely for convenience, but also an industry standard to ensure brand consistency and regulatory compliance. Digital Marketing Materials: Banner ads, landing pages, email templates, and tracking links are provided as standard. Offline Marketing Support: MIM also offers offline materials such as seminar presentation slides, brochures, posters, and banners. Brand Consistency & Compliance: All provided materials are pre-approved to meet MIM’s brand guidelines and regulatory standards. Customization Options: Depending on the IB’s needs, customized landing pages or reports can be produced. Purpose of Use: These materials are designed to help IBs conduct systematic and transparent client acquisition activities. Conclusion: By actively using MIM’s dedicated marketing materials, IBs can increase efficiency, minimize regulatory risks, and convey professionalism and trust to clients."
  },
  {
    category: "Partners",
    question: "Can IBs check performance and commissions in real time?",
    answer: "Yes, they can. MIM provides a dedicated portal where IBs can check their performance and commissions in real time. This is not just a convenience function, but a key element that ensures transparency and efficiency in IB activities. Real-time data provision: Client trading volume, generated rebates (commissions), and new account openings are immediately reflected in the portal. Marketing performance measurement: Real-time data allows IBs to quickly assess the effectiveness of ongoing campaigns. Rebate management: Client-specific rebate records are transparently stored. Transparency and reliability: All performance and commissions are automatically aggregated by MIM’s trading servers and CRM system, minimizing any possibility of manipulation or error. Long-term management value: Some portals also provide historical data analysis, enabling IBs to compare monthly or quarterly results. In conclusion, through the dedicated portal, IBs can monitor performance and commissions in real time, ensuring transparency, efficiency, and client trust—all of which actively support IB activities."
  },
  {
    category: "Partners",
    question: "Can an IB partner with multiple brokers at the same time?",
    answer: "Yes, in general, most brokers in the industry allow IBs to enter into multiple affiliations with different brokers simultaneously. This structure provides flexibility, enabling IBs to introduce a variety of products and conditions to clients. However, there are several important considerations. First, check for exclusivity agreements – Some brokers may require exclusive contracts for certain regions or brand marketing activities. Second, fulfill reporting obligations – Even if multiple affiliations are allowed, IBs must comply with each broker’s reporting, settlement, and KYC requirements. Third, manage conflicts of interest – Recommending multiple brokers to the same client or aggressively comparing competitors’ conditions can cause confusion and conflicts of interest. Fourth, consider brand credibility – While multi-affiliation can diversify income opportunities, it may also dilute the IB’s brand image. In conclusion, IBs can generally partner with multiple brokers, but they must carefully check contract terms, exclusivity clauses, regulatory compliance, and conflict-of-interest risks. When managed properly, multi-affiliation can be a powerful strategy for diversifying revenue and expanding market reach."
  },
  {
    category: "Partners",
    question: "Can a client change their IB if they want to?",
    answer: "Yes, at MIM, clients are allowed to apply for an IB change if they wish. This industry practice ensures that clients have the freedom to choose better services or support if needed. However, the change process involves several important restrictions and procedures. First, if bonuses or rebates have already been issued, a change may be restricted for a certain period. For example, if a client receives a welcome bonus and immediately tries to switch IBs, it could lead to unfair reward abuse. Second, MIM conducts a review process to prevent duplicate rebates. Third, some brokers enforce a policy where IB changes are not allowed for a fixed period after initial registration. Finally, an IB change is not processed based on a client’s simple request alone. It must go through MIM’s official approval process. In conclusion, IB changes are possible at MIM, but only under conditions such as rebate/bonus status, anti-duplication policies, and official approval. These procedures are global standards designed to maintain fairness and market order."
  },
  {
    category: "Partners",
    question: "How does MIM manage the relationship between IBs and clients?",
    answer: "MIM manages the relationship between IBs and clients systematically through its CRM (Customer Relationship Management) system. When a client first registers an account, the system automatically records which IB referred them, and this data becomes the core basis for calculating commissions and paying rebates. Through the CRM, IBs can access limited information such as their referred client list, account status, trading volume, and generated commissions. This enables IBs to measure their marketing performance objectively and transparently track revenue. However, individual trade details or sensitive client information are strictly restricted to ensure privacy and regulatory compliance. From the broker’s perspective, the CRM system is a key mechanism to secure transparency and trust. Since all IB-client relationships are recorded and stored, the system prevents double claims, duplicate rebates, or unfair compensation disputes. Additionally, MIM maintains IB-client relationship records for regulatory supervision and stores them long-term. In conclusion, MIM uses its CRM system to track and manage IB-client relationships transparently, ensuring fair commission settlements, preventing disputes, and building long-term trust between IBs and the broker."
  },
  {
    category: "Partners",
    question: "What are the termination conditions for an IB contract?",
    answer: "IB contracts are generally maintained on a perpetual basis, but under certain conditions, MIM may terminate the agreement. This is not merely for broker protection, but a necessary measure to maintain market order and ensure regulatory compliance. Key termination conditions include: Inactivity – If there is no record of new client acquisition or if the recruited clients generate little to no trading activity for an extended period, the contract may be terminated. Compliance Breach – Engaging in false or misleading advertising, conducting unauthorized marketing in restricted regions, violating AML regulations, or offering unapproved rebates will result in immediate termination. Underperformance – If the minimum client acquisition or trading volume requirements specified in the contract are not met over a long period, termination may occur. Breach of Trust – Unauthorized collection of client data, attempts to interfere with client funds, or forming partnerships with illegal entities may also lead to termination. Before terminating, MIM typically provides prior notice and an opportunity to correct issues. However, in cases of serious violations, termination is immediate. In conclusion, IBs must fully understand the termination conditions and focus on consistent performance, compliance, and transparency to maintain long-term partnerships."
  },
  {
    category: "Partners",
    question: "What are the reasons an IB may be disqualified?",
    answer: "IB qualifications are maintained based on a trust relationship with the broker, so if certain misconduct is identified, immediate disqualification can occur. This is not just a simple contract termination, but may also involve forfeiture of accrued earnings and prohibition of future re-contracting, so special caution is required. Typical disqualification reasons include: False or misleading advertising – making unrealistic promises such as “risk-free trading” or “guaranteed profits,” or using distorted materials to attract clients. Unauthorized involvement in client funds – acting on behalf of clients in deposits/withdrawals or directly accessing client accounts to trade, which constitutes AML violations and illegal asset management. Regulatory or legal violations – conducting unauthorized marketing in restricted jurisdictions or engaging in activities prohibited by regulators. Accumulated client complaints – repeated complaints found to be caused by improper guidance or false information provided by the IB. Violation of broker policies – offering unauthorized rebates, engaging in conflicting multi-affiliations, or attempting to manipulate internal CRM systems. In such cases, MIM may immediately terminate contracts, confiscate earnings, and report to regulatory authorities if necessary. In conclusion, IBs must strictly comply with accurate information disclosure, AML and regulatory obligations, prohibition of client fund involvement, and adherence to broker policies, as these are the core conditions for maintaining long-term partnerships and trust."
  },
  {
    category: "Partners",
    question: "Is there a dedicated portal for IBs?",
    answer: "Yes, MIM operates a dedicated IB Portal and provides it to all IBs. This portal is not just a simple management tool, but a core platform where IBs can transparently track, analyze, and manage their performance. Real-time data monitoring – IBs can monitor client inflows, account openings, trading volumes, generated commissions, and settlement progress in real time. Commission and revenue management – Commission calculations are automatically recorded, and scheduled payment timelines are clearly displayed. Report download function – Most IB Portals support report downloads in Excel format. Transparency and reliability – All data in the portal is directly linked to the broker’s CRM and trading servers, making manipulation impossible. Additional functions – Some advanced portals provide features such as customizable dashboards, client trading behavior analysis, and Tracking Link Analytics for marketing. In conclusion, the IB Portal is not just an administrative platform but a key tool for performance tracking, transparent settlements, and data-driven decision-making. IBs can fully leverage it to maximize their efficiency."
  },
  {
    category: "Partners",
    question: "Is there a training program for new IBs?",
    answer: "Yes, MIM provides a dedicated training program to help new IBs quickly adapt and operate effectively. This program goes beyond simple orientation and is designed to equip IBs with compliance knowledge, marketing strategies, and client management skills simultaneously. Training methods: Webinars and online lectures, Guides and manuals, 1:1 orientation. Key training content: Compliance rules (bans on misleading advertising and AML/KYC obligations), Client acquisition strategies (digital marketing, social media utilization), Portal usage. Practical value: New IBs can adapt quickly, minimize unnecessary trial-and-error, and achieve results faster. MIM’s support purpose: Training is an investment in the long-term success of both MIM and IBs. In conclusion, the training program for new IBs has become an industry standard, supporting rapid growth, compliance, and long-term partnership building."
  },
  {
    category: "Partners",
    question: "Are IB-exclusive seminars or webinars provided?",
    answer: "Yes, MIM regularly provides IB-exclusive seminars and webinars. These are not just training sessions, but essential partnership activities that equip IBs with up-to-date market knowledge and marketing know-how, enabling them to support clients more effectively. Purpose of seminars and webinars: Enhance market expertise, Regulatory & Compliance training, Improve marketing skills. Delivery methods: Online webinars (accessible globally), Offline seminars (held in specific regions). Key content: Latest financial market trends, Introduction of MIM’s new products, IB-exclusive reward programs, Sharing best practices. Value for IBs: Competitiveness, Networking, Trustworthiness. In conclusion, IB-exclusive seminars and webinars are mechanisms that simultaneously foster capability development, regulatory compliance, and stronger ties with MIM. Through these, IBs can grow into trusted partners with both expertise and credibility."
  },
  {
    category: "Partners",
    question: "What incentives are provided for long-term active IBs?",
    answer: "IBs who operate long-term and maintain consistent performance are regarded by MIM as both stable client acquisition sources and key partners. Therefore, global brokers run diverse incentive programs to retain highly loyal IBs. Financial incentives: Higher commission rates (Rebate percentages increase progressively), Extra bonuses (Cash rewards or performance-based payouts), Early settlements (Commissions on shorter payout cycles). Non-financial benefits: Dedicated Account Manager, Tailored marketing resources, Priority services. Special reward programs: Travel invitations, Luxury gifts, VIP events. In conclusion, long-term IBs receive a combination of financial rewards, dedicated support, and exclusive benefits, forming a strategic foundation for MIM to maintain a loyal IB network."
  },
  {
    category: "Partners",
    question: "How does MIM support and manage IBs?",
    answer: "MIM does not regard IBs as mere affiliates but as strategic partners driving MIM’s growth and market expansion. Therefore, MIM operates comprehensive support systems and structured management frameworks to ensure IBs can perform stably and sustainably. Dedicated support system: IB support team, Real-time communication channels. Performance management tools: Real-time performance dashboard, Transparent settlement system. Training & capability building: Onboarding program, Regular webinars & seminars. Marketing & sales support: Marketing resources, Co-branded campaigns. Transparent management: Contract management, Settlement oversight, Long-term partnership focus. In conclusion, MIM views IBs as strategic partners, supporting them through a dedicated team, real-time tools, training, marketing resources, and transparent settlement to ensure secure and long-term success."
  },
  {
    category: "Partners",
    question: "Is it mandatory for an IB to be a registered corporation?",
    answer: "No. MIM allows both Individual IBs and Corporate IBs. Therefore, corporate registration is not a mandatory requirement to start IB activities. Individual IB – Registration can be completed with only personal identification (KYC) and proof of residence. This option lowers the entry barrier and is suitable for small-scale activities or online referral-based marketing. Corporate IB – Requires submission of business registration, corporate documents, and tax-related certifications. This form is often necessary for large partnership contracts, operating offline branches, or conducting legitimate business in certain jurisdictions. Regulations and local requirements – Some jurisdictions with strict regulations may allow only corporate IBs to operate. General practice – Many IBs start as individuals and later transition into a corporate structure once their client base and revenue grow. In conclusion, corporate registration is not mandatory for IBs. However, depending on the scale of operations, country-specific regulations, and tax strategies, IBs should choose the form (individual or corporate) that best suits their needs."
  },
  {
    category: "Partners",
    question: "Is it legally problematic to operate as an Individual IB?",
    answer: "No, operating as an Individual IB is generally not legally problematic in most countries. In fact, many global brokers allow individual IB registration, where activities can begin with only ID verification (KYC) and proof of residence. However, there are important considerations: Tax reporting obligations – Income generated as an Individual IB is subject to personal income tax under local tax laws. Failure to declare and pay taxes can be considered tax evasion. Regulatory environment – In jurisdictions with strict regulations, IB activities may be classified as financial marketing and therefore restricted. Contractual limitations – Some brokers differentiate between Individual and Corporate IBs by applying different terms. Practical risk management – Individual IBs cannot provide the same legal protections as corporations. Conclusion – Operating as an Individual IB is legally allowed, but one must fully comply with tax obligations, regulatory requirements, contractual conditions, and risk management. For long-term growth, many IBs start as individuals and later incorporate to enhance credibility and legal stability."
  },
  {
    category: "Partners",
    question: "Are the contract terms between IB and MIM disclosed or kept confidential?",
    answer: "IB contracts are private agreements between MIM and the IB, and in principle, they are not disclosed to the public. This is an industry standard to protect both parties’ business interests and strategic conditions. Non-Disclosure Agreement (NDA) Clause – Most IB contracts include an NDA clause. Purpose of Confidentiality: Protecting MIM (strategic pricing policies), Protecting the IB (unique performance conditions), Maintaining Market Trust. Exceptions – In cases of regulatory requests, legal disputes, or audits, the contract terms may need to be submitted. Consequences of Breach – If an IB discloses contract terms externally or shares them with third parties without authorization, it is considered a contract violation. Conclusion – The contract between IB and MIM is strictly confidential by principle. This serves as a core mechanism to protect both parties’ interests and prevent unnecessary disputes. IBs must never share contract terms externally and must obtain MIM’s official approval if disclosure is required."
  },
  {
    category: "Partners",
    question: "Can an IB re-register after contract termination?",
    answer: "Yes, re-registration is in principle possible even after an IB contract has been terminated. However, the possibility of re-registration depends greatly on the reason for termination and MIM’s internal policies. Termination due to inactivity – If the contract was terminated because there was no new client acquisition or trading activity for a certain period, MIM allows re-registration. Minor breach – For example, late reporting or using unapproved marketing materials may lead to termination with a warning. Re-registration may still be possible after MIM’s review. Serious breach – Cases involving false advertising, client fund involvement, AML violations, or regulatory sanctions result in contract termination that makes re-registration practically impossible. MIM internal review – All re-registration requests undergo compliance review. In conclusion, while IB re-registration is possible after contract termination, it is not automatic. It depends on MIM’s compliance assessment and the IB’s ability to restore trust."
  },
  {
    category: "Partners",
    question: "What penalties will be imposed for false advertising?",
    answer: "False advertising is regarded as one of the most serious violations in the global brokerage industry, and when detected, severe sanctions follow. Immediate contract termination – At MIM, the contract with an IB that engages in false or misleading advertising can be terminated immediately. Forfeiture of earnings and blacklist registration – Once false advertising is confirmed, the IB may be registered on MIM’s internal blacklist. Regulatory reporting and legal sanctions – False advertising goes beyond a contractual breach and is considered investor deception. It can be reported to regulatory authorities, which may result in fines or business bans. MIM’s internal pre-approval system – To prevent such risks, MIM operates a pre-approval system for IB marketing activities. In conclusion, false advertising is not a simple mistake but a serious risk for both MIM and IBs. IBs must always provide accurate and transparent information, and strictly follow MIM’s official guidelines and regulatory standards as a fundamental requirement for long-term activities."
  },
  {
    category: "Partners",
    question: "Can IBs run their own advertising campaigns?",
    answer: "Yes, IBs can run their own advertising campaigns. However, this is only permitted within the scope of the broker’s official guidelines and the regulatory standards of each jurisdiction. IBs can expand client acquisition through independent marketing activities, but the following conditions must be met: MIM Guideline Compliance – All advertisements must comply with MIM’s brand policy and regulatory standards. Pre-approval Process – MIM requires IBs to submit self-produced advertisements in advance for review by MIM’s Compliance team. Balance Between Autonomy and Restrictions – IBs have the freedom to use various channels, but all activities must remain transparent and legal. Risks of Violation – Running unapproved ads or using non-compliant content may result in termination of the IB contract. Conclusion – IBs can conduct their own advertising campaigns, but only in a legal, transparent manner approved by MIM. This ensures that IBs have freedom while maintaining market trust and regulatory compliance."
  },
  {
    category: "Partners",
    question: "Can IB activities be restricted depending on regulatory authorities?",
    answer: "Yes, IB activities can be restricted or even prohibited depending on the policies of financial regulatory authorities in each country. Since IBs are considered not only marketing partners but also channels for financial product promotion, regulations are applied very strictly. Countries where IB activity is prohibited: United States (CFTC, NFA), Japan (FSA), South Korea (FSC, FSS), Certain EU countries (ESMA). Countries where IB activity is allowed but regulated: Australia (ASIC), Singapore (MAS), and Hong Kong (SFC) allow IB activity but require certain licenses or registration procedures. Regions with relatively flexible regulations: Jurisdictions such as Seychelles, St. Vincent and the Grenadines (SVG), and Mauritius apply relatively flexible rules regarding IB activities. IB’s obligations: Before starting activities, IBs must confirm the regulatory environment of the target region. Conclusion: IBs are considered financial marketing channels subject to regulation, not just customer acquisition agents. Therefore, they must always check regulatory standards and legal frameworks in their target regions and ensure they operate only within lawful boundaries."
  },

  // --- Terms ---
  {
    category: "Terms",
    question: "What is a spread?",
    answer: "A spread refers to the difference between the Bid (buy) price and the Ask (sell) price. This difference represents a type of trading cost, as it is essentially the fee that a trader pays the moment they enter a position. Spreads tend to be narrower when liquidity is high, while they widen during periods of high volatility or when trading volume is low. MIM offers competitive spreads on major instruments to enhance clients’ trading efficiency. Therefore, understanding spreads allows traders to clearly identify cost structures when designing their trading strategies."
  },
  {
    category: "Terms",
    question: "How does leverage work?",
    answer: "Leverage is a financial tool that allows traders to control larger positions with a smaller amount of capital. For example, with 100x leverage, $1,000 can be used to trade a position worth $100,000. This significantly amplifies potential profits but equally magnifies potential losses. Therefore, risk management is crucial when using leverage, and stop-loss settings should always be considered. MIM provides reasonable leverage levels depending on clients’ capital size, ensuring a stable trading environment."
  },
  {
    category: "Terms",
    question: "What is margin?",
    answer: "Margin refers to the amount of money that must be deposited as collateral to open a position. It represents a portion of the total trade size, and the required margin level varies depending on the leverage ratio. For instance, with 10x leverage, only 10% of the total trade value is required as margin to open a position. Margin is a core indicator for risk management, and positions cannot be maintained if there are insufficient funds in the account. Thus, traders must always monitor their available margin when trading."
  },
  {
    category: "Terms",
    question: "When does a margin call occur?",
    answer: "A margin call occurs when the maintenance margin in an account falls below the required threshold. This is a warning signal indicating insufficient funds to maintain open positions. If additional funds are not deposited or some positions are not closed, it may lead to forced liquidation. MIM issues margin calls immediately once a certain level is reached to help minimize client losses. Therefore, traders should always monitor their account balances and position risks."
  },
  {
    category: "Terms",
    question: "What is margin requirement?",
    answer: "Margin requirement refers to the minimum amount of capital needed to open a specific position. This amount varies depending on trade size and leverage ratio. If margin is insufficient, orders may not be executed, or open positions may not be maintained. MIM clearly provides margin requirements for each instrument so clients can plan their strategies accordingly. Proper margin management is an essential factor for stable trading."
  },
  {
    category: "Terms",
    question: "How is a pip calculated?",
    answer: "A pip is the smallest unit of price movement in forex and CFD trading. Most currency pairs are quoted to four decimal places, where 0.0001 equals 1 pip. For example, if EUR/USD moves from 1.1000 to 1.1005, that represents a rise of 5 pips. Pip values are directly used in profit/loss calculation and spread measurement. MIM provides tools to easily calculate pip values for each instrument."
  },
  {
    category: "Terms",
    question: "What is a position?",
    answer: "A position refers to the direction and size of a trader’s exposure in the market. A long position means betting on price increases, while a short position means profiting from price decreases. The size of a position depends on account balance and available margin. Traders can hold multiple positions simultaneously to diversify risk. Therefore, the concept of a position is fundamental in building trading strategies."
  },
  {
    category: "Terms",
    question: "What is the difference between a long position and a short position?",
    answer: "A long position is when a trader expects the price of an asset to rise and enters a buy position. Conversely, a short position is when a trader expects the price to fall and enters a sell position. For example, buying Bitcoin at $30,000 is a long position, while selling Bitcoin at $30,000 is a short position. Both positions can utilize leverage, and traders choose strategically based on market conditions. MIM provides a flexible system allowing clients to utilize both long and short trades."
  },
  {
    category: "Terms",
    question: "What is a stop-loss?",
    answer: "A stop-loss is an order placed to limit losses when the market moves against expectations. For example, if a buy order is placed at 1.2000 with a stop-loss at 1.1950, the position will be automatically closed if the price falls. This reduces emotional decision-making and protects the account from large losses. MIM’s platform allows stop-losses to be easily set, making it accessible even for beginners. Thus, stop-loss is a critical tool every trader must master."
  },
  {
    category: "Terms",
    question: "What is take-profit?",
    answer: "Take-profit is an order to automatically close a position when it reaches a target profit level. For example, if a buy position is entered at 1.2000 with take-profit at 1.2100, the position will automatically close once the target is reached. This allows traders to secure profits without continuously monitoring the market. Take-profit, along with stop-loss, is a fundamental tool for managing risk and reward. MIM offers user-friendly features for setting profit targets to support efficient trading."
  },
  {
    category: "Terms",
    question: "What is liquidity?",
    answer: "Liquidity refers to how easily an asset can be bought or sold in the market. High liquidity means trades can be executed quickly at desired prices, usually with narrow spreads. On the other hand, low liquidity can result in delayed executions or wider spreads. Major forex pairs or popular assets like Bitcoin generally have high liquidity. MIM provides stable liquidity through partnerships with global liquidity providers."
  },
  {
    category: "Terms",
    question: "What is execution?",
    answer: "Execution refers to the process of an order being carried out in the market. Execution speed significantly affects trading performance, particularly for scalping or short-term strategies. Market orders allow immediate execution, while limit orders only execute once conditions are met. Execution delays can lead to price differences and slippage, making execution quality a key factor. MIM supports ultra-low latency environments for fast and accurate execution."
  },
  {
    category: "Terms",
    question: "What is a market order?",
    answer: "A market order is an order type that executes immediately at the current available market price. It is useful for traders who prioritize speed, but during high volatility, the actual fill price may differ unfavorably. Market orders are most effective in liquid markets and are widely used for both entries and exits. While easy to use for beginners, traders should always be aware of potential slippage. MIM provides tools to ensure safe usage of market orders with effective risk management."
  },
  {
    category: "Terms",
    question: "What is the difference between a pending order and a market order?",
    answer: "A pending order is an instruction to execute a trade once the market reaches a price you specify in advance. In contrast, a market order is executed immediately at the best available price. Pending orders ensure you enter the market at your desired price, though there is no guarantee they will be filled. Market orders allow for instant execution but may experience slippage if the market is highly volatile. Choosing the right order type depends on your trading goals and current market conditions."
  },
  {
    category: "Terms",
    question: "How is a limit order used?",
    answer: "A limit order allows traders to set a specific price at which they want to buy or sell. For example, if the current price is 1.2000, a trader can place a buy limit order at 1.1950. The order executes automatically once the price reaches the set level, but if it does not, the order remains pending. The advantage is precise entry at the desired price, but execution is not guaranteed. MIM’s platform allows easy placement of limit orders and linking them with stop-loss or take-profit settings."
  },
  {
    category: "Terms",
    question: "What is the difference between entry price and liquidation price?",
    answer: "Entry price is the price at which a trader opens a position, serving as the reference point for profit and loss calculation. Liquidation price, on the other hand, is the price at which a position is forcibly closed due to insufficient account funds. The higher the leverage, the closer the liquidation price will be to the entry price, increasing the risk. Therefore, traders must always be mindful of liquidation levels and avoid excessive leverage. MIM clearly displays both entry and liquidation prices on the account screen to assist in risk management."
  },
  {
    category: "Terms",
    question: "What is margin ratio?",
    answer: "Margin ratio represents the proportion of margin used relative to available equity in the account. It is an indicator of account stability, and when the ratio rises above certain levels, the risk of a margin call increases. For example, if the margin ratio exceeds 80%, additional deposits or position reductions may be required. The ratio varies greatly depending on position size and leverage. MIM displays real-time margin ratios to help clients detect risks in advance."
  },
  {
    category: "Terms",
    question: "What does slippage mean?",
    answer: "Slippage refers to the difference between the expected price of an order and the actual price at which it is executed. It often occurs in volatile markets or when liquidity is low, and it is more common with market orders. Slippage can be positive, where you receive a better price, or negative, where the order is executed at a less favorable price. To minimize slippage, traders may use pending orders or avoid executing large trades during high-volatility periods."
  },
  {
    category: "Terms",
    question: "What does fill policy mean?",
    answer: "Fill policy defines the rules under which an order is executed. Typical options include FOK (Fill or Kill), IOC (Immediate or Cancel), and GTC (Good Till Cancelled). FOK requires the entire order to be filled immediately or else it is canceled. IOC allows partial fills, with unfilled portions canceled automatically. GTC keeps the order valid until the trader cancels it manually. MIM supports multiple fill policies to accommodate traders’ strategies."
  },
  {
    category: "Terms",
    question: "What is one-click trading?",
    answer: "One-click trading is a feature that allows traders to instantly execute buy or sell orders with a single click on the chart. Since there is no need to open a separate order window, entry and exit can be performed much faster. It is especially useful for scalping and news trading strategies where speed is crucial. The feature can be enabled in the settings, though it is usually disabled by default for security reasons. MIM’s platform provides one-click trading to enhance execution speed for clients."
  },
  {
    category: "Terms",
    question: "What does volatility mean?",
    answer: "Volatility is an indicator of how much an asset’s price fluctuates over a certain period. High volatility means large price changes within a short time, while low volatility indicates more stable movements. Traders use volatility to evaluate both opportunities and risks. For instance, scalpers or short-term traders often prefer volatile markets, while long-term investors may prefer stable assets. MIM provides volatility indicators and charts to help clients clearly understand market conditions."
  },
  {
    category: "Terms",
    question: "What does trading volume mean?",
    answer: "Trading volume refers to the total amount of an asset traded over a specific period. It reflects market interest and is an important indicator of the reliability of price movements. For example, if price increases while trading volume rises, it indicates strong buying momentum. Conversely, if trading volume is low, price fluctuations may be temporary. MIM provides real-time volume data to help clients analyze the market objectively."
  },
  {
    category: "Terms",
    question: "What is the break-even point?",
    answer: "The break-even point is the level at which an investment neither makes a profit nor a loss. In trading, this is calculated by considering both the entry price and all trading costs (such as spreads and commissions). Once the price moves beyond this point, traders begin to realize net profit. Break-even calculations also play a key role in risk-reward ratio management. MIM provides built-in tools on its platform to help traders easily calculate break-even points."
  },
  {
    category: "Terms",
    question: "How is dynamic leverage applied?",
    answer: "Dynamic leverage is a system where leverage decreases automatically as trade size increases. Smaller positions can benefit from higher leverage to maximize capital efficiency, while larger positions are gradually scaled down with lower leverage. This helps reduce market impact and liquidation risks that may arise from excessively large positions. In short, it is a flexible structure that adjusts risk according to the client’s capital size and position volume. MIM applies dynamic leverage aligned with global standards, ensuring both stability and flexibility."
  },
  {
    category: "Terms",
    question: "What is hedging?",
    answer: "Hedging is a strategy used to reduce or offset the risk of an existing position by taking an opposite trade at the same time. For example, in the stock market, an investor holding certain stocks may sell index futures to reduce overall potential losses. In CFDs or forex trading, if one position moves unfavorably, it can be defended by opening an opposite position on the same asset or a correlated product. Although it cannot completely eliminate losses, in volatile markets it serves as a key risk management tool. MIM provides diverse products and liquidity so that clients can reasonably implement hedging strategies."
  },
  {
    category: "Terms",
    question: "What are execution policies such as IOC, FOK, and GTC?",
    answer: "Execution policies define the conditions under which orders are processed in the market. IOC (Immediate or Cancel) executes the available portion immediately and cancels the rest. FOK (Fill or Kill) requires the entire order to be executed immediately, otherwise the entire order is canceled. GTC (Good Till Cancelled) remains valid until the trader cancels it manually. MIM provides multiple execution policies to support flexible trading strategies."
  },
  {
    category: "Terms",
    question: "How is a trailing stop used?",
    answer: "A trailing stop automatically adjusts the stop-loss level as the market price moves in a favorable direction. For example, if set at 50 pips, when the price rises 50 pips, the stop level automatically moves up by the same amount. This allows traders to protect profits while still capturing additional upside potential. It is especially effective when holding long-term positions in volatile markets. MIM provides an intuitive interface to make trailing stop settings easy for clients."
  },
  {
    category: "Terms",
    question: "What is arbitrage?",
    answer: "Arbitrage is a strategy that seeks risk-free profits by exploiting price differences of identical or similar assets across markets. For example, if Bitcoin trades at $30,000 on one exchange and $30,100 on another, a trader can buy at the lower price and sell at the higher one. Fast execution and low transaction costs are critical, which is why arbitrage is commonly used in high-frequency trading. Opportunities increase with differences in liquidity and execution speed, but competition is intense, making it difficult for ordinary investors. MIM supports legal arbitrage with transparent pricing and fast order execution."
  },
  {
    category: "Terms",
    question: "What is algorithmic trading?",
    answer: "Algorithmic trading is the execution of trades based on predefined rules and conditions. It removes emotional decision-making and ensures consistency in strategy execution. Algorithms can range from simple moving average systems to advanced machine-learning models. Institutions operate large-scale systems, while individuals can use Expert Advisors (EAs) or simple scripts. MIM provides platforms that support algorithmic trading, enabling clients to test and execute automated strategies."
  },
  {
    category: "Terms",
    question: "When should I use a market order?",
    answer: "A market order is executed immediately at the best available price in the market. It is most useful in situations where speed is important, such as when the market is moving quickly and you need to enter or exit immediately. However, in highly volatile conditions, the execution price may be less favorable than expected, which is known as slippage. If speed is your priority, a market order is the right choice, but if you want to secure a specific entry level, a limit order may be more appropriate."
  },
  {
    category: "Terms",
    question: "How is tick size determined?",
    answer: "Tick size refers to the minimum price movement of an asset and varies by instrument. For example, in EUR/USD, 0.0001 is one tick, while in gold (XAU/USD), 0.01 is one tick. Tick size is determined by the exchange or broker’s rules and is directly tied to profit and loss calculations. A smaller tick size allows more precise trading but may also spread out trading volume. MIM clearly defines the tick size for each product to prevent confusion and ensure smooth trading."
  },
  {
    category: "Terms",
    question: "What criteria should be used to choose leverage levels?",
    answer: "Leverage levels depend on the trader’s experience, capital size, and risk tolerance. High leverage can significantly increase profits but also raises the risk of liquidation. On the other hand, low leverage is more stable but less capital-efficient. Beginners are advised to start with lower leverage and adjust gradually as they gain experience. MIM recommends leverage ranges by account type to ensure safe trading conditions."
  },
  {
    category: "Terms",
    question: "What is partial close?",
    answer: "Partial close means closing only a portion of an open position to secure profits or reduce risk. For example, closing 0.5 lots of a 1-lot buy position while leaving the rest open. This method allows traders to lock in profits while keeping the opportunity for further gains. It is often used as a flexible risk management tool in volatile markets. MIM’s platform provides an easy partial close function to help traders adapt quickly to market conditions."
  },
  {
    category: "Terms",
    question: "What are unrealized profits and losses (Unrealized PnL)?",
    answer: "Unrealized PnL refers to temporary gains or losses from open positions that have not yet been closed. It fluctuates as prices move and becomes final only when positions are closed. Although included in equity calculations, unrealized PnL cannot be withdrawn until realized. Traders should avoid being swayed by unrealized PnL and instead focus on strategic exit timing. MIM provides real-time interfaces to help clients monitor their unrealized PnL effectively."
  },
  {
    category: "Terms",
    question: "What is swap or rollover?",
    answer: "Swap refers to the interest cost or income incurred when rolling over a position to the next day. It can be positive or negative depending on the interest rate differential between currencies. This is also known as rollover, and is typically calculated automatically at a set daily time. For long-term traders, swap charges can accumulate significantly and must be considered in strategy design. MIM transparently discloses swap rates so clients can check costs in advance."
  },
  {
    category: "Terms",
    question: "When are realized profits and losses (Realized PnL) confirmed?",
    answer: "Realized PnL is confirmed once a position is closed, representing the final profit or loss. It is directly reflected in the account balance and becomes available for withdrawal. Unlike unrealized PnL, realized PnL does not fluctuate and remains as a historical trading result. It is one of the most important indicators when analyzing trading performance and evaluating long-term success. MIM provides easy access to realized PnL in trading history, helping clients review their past results effectively."
  },
  {
    category: "Terms",
    question: "What is negative slippage?",
    answer: "Negative slippage occurs when an order is executed at a less favorable price than intended. For instance, if a buy order is placed at 1.2000 but is executed at 1.2005, the trader incurs a loss of 5 pips. This usually happens during periods of high volatility or low liquidity. To minimize the risk, traders may use limit orders or avoid trading immediately after major news releases. MIM reduces negative slippage through ultra-low latency servers and multiple liquidity providers."
  },
  {
    category: "Terms",
    question: "What is positive slippage?",
    answer: "Positive slippage refers to an order being executed at a more favorable price than intended. For example, if a buy order is placed at 1.2000 but is executed at 1.1995, the trader gains an extra 5 pips. This phenomenon can occur in highly liquid markets or when execution speed is very fast. Thus, slippage is not always negative—it can work in the trader’s favor. MIM reflects positive slippage directly back to clients, maintaining full transparency in order execution."
  },
  {
    category: "Terms",
    question: "What is market depth?",
    answer: "Market depth shows the amount of buy and sell orders stacked at different price levels. It allows traders to gauge market interest and liquidity. Thick buy orders may act as support, while heavy sell orders may act as resistance. Scalpers and short-term traders actively use market depth to design quick strategies. MIM provides intuitive depth-of-market displays to help clients easily understand market sentiment."
  },
  {
    category: "Terms",
    question: "What is high-frequency trading (HFT)?",
    answer: "HFT is a trading method that uses ultra-fast algorithms to execute a large number of orders in very short time frames. This strategy captures small price movements to accumulate tiny profits, requiring significant technology and infrastructure. HFT is mainly used by institutional investors and professional traders, not by retail investors. It helps increase market liquidity but can also contribute to greater volatility. MIM ensures that clients trade in a stable environment within legal boundaries."
  },
  {
    category: "Terms",
    question: "What is backtesting?",
    answer: "Backtesting evaluates how effective a strategy would have been by applying it to historical data. It provides insights into profitability, risk, and win rate before entering live trading. However, past performance does not guarantee future results. Still, backtesting is a critical first step in validating a strategy’s viability. MIM provides convenient backtesting tools within its platform so clients can verify strategies in advance."
  },
  {
    category: "Terms",
    question: "How is chart pattern analysis done?",
    answer: "Chart pattern analysis interprets recurring price shapes to predict future movements. Examples include head and shoulders, double bottoms, and triangle patterns. These patterns visually represent the balance of buying and selling forces, helping identify trend reversals or continuations. Accuracy improves when patterns are combined with indicators and volume analysis. MIM provides various charting tools so clients can intuitively apply pattern analysis."
  },
  {
    category: "Terms",
    question: "What role do technical indicators play?",
    answer: "Technical indicators process price and volume data mathematically to interpret market trends. Examples include moving averages, RSI, MACD, and Bollinger Bands, each highlighting trend, momentum, or overbought/oversold conditions. Indicators are most effective when combined, rather than used in isolation. Traders can choose those that best fit their style and strategy. MIM provides a wide selection of default indicators and allows customization."
  },
  {
    category: "Terms",
    question: "What is fundamental analysis?",
    answer: "Fundamental analysis evaluates the intrinsic value of an asset using economic indicators, interest rates, corporate earnings, and news. For example, the US dollar exchange rate is heavily influenced by Federal Reserve policies and employment reports. In crypto markets, factors such as project technology, regulations, and adoption levels are key. Unlike technical analysis, which is chart-focused, fundamental analysis explains the “why” behind market movements. MIM supports clients with economic calendars and news feeds for effective fundamental analysis."
  },
  {
    category: "Terms",
    question: "What are the pros and cons of news trading?",
    answer: "News trading is a strategy that seeks to profit from price volatility around economic announcements or major events. Its advantage is that it provides opportunities for quick profits from predictable events. The drawback is that volatility can spike, increasing risks of slippage and wider spreads. Thus, news trading requires fast execution and strict risk management. MIM ensures transparent market conditions during news releases so clients can trade fairly."
  },
  {
    category: "Terms",
    question: "How is position sizing done?",
    answer: "Position sizing determines the amount of capital allocated per trade based on account size and risk tolerance. A common rule is not to risk more than 2% of the account balance on a single trade. This helps minimize the impact of short-term losses on long-term performance. Position sizing is a vital skill for long-term survival, not just a money allocation method. MIM provides tools to help clients easily set and manage position sizes."
  },
  {
    category: "Terms",
    question: "How is the risk-reward ratio calculated?",
    answer: "The risk-reward ratio measures potential profit relative to potential loss. For example, risking $100 for a potential $300 profit equals a 1:3 ratio. Higher ratios tend to be more favorable long-term, but must be balanced with win rates. Even with a lower win rate, a high risk-reward ratio can still ensure profitability. MIM calculates risk-reward ratios automatically when stop-loss and take-profit levels are set."
  },
  {
    category: "Terms",
    question: "What causes order execution delays?",
    answer: "Execution delays can occur due to various factors such as network conditions, distance from the server, or insufficient market liquidity. For example, right after major news releases, price volatility may cause orders to execute slowly or only partially. In addition, unstable internet connections or overly strict slippage settings can also result in delays. To reduce these issues, it is advisable to use a stable network environment, consider using a VPS, and adjust order settings according to the characteristics of each instrument."
  },
  {
    category: "Terms",
    question: "What does diversification mean?",
    answer: "Diversification means spreading investments across different assets and markets to reduce risk. For example, allocating capital to forex, stocks, commodities, and cryptocurrencies minimizes exposure to any single market. The goal is not to maximize returns but to mitigate potential losses. It is a key principle for achieving stability, especially for long-term investors. MIM offers a wide variety of products so clients can naturally diversify their portfolios."
  },
  {
    category: "Terms",
    question: "What is market making?",
    answer: "Market making is the activity of continuously quoting buy and sell prices to provide liquidity. Market makers earn profits from the spread while also helping stabilize markets. Their constant presence ensures that traders can enter and exit positions at desired times. It is essential for exchange operations and helps ease liquidity shortages. MIM collaborates with global liquidity providers to ensure a stable market-making environment."
  },
  {
    category: "Terms",
    question: "Why is order execution speed important?",
    answer: "Order execution speed is the time between submitting an order and its actual fulfillment. Fast execution reduces slippage and is critical for scalping and short-term strategies. Slow execution makes it difficult to enter and exit at desired prices, potentially causing losses. Thus, trading infrastructure and server environments are crucial for traders. MIM provides ultra-low latency servers and optimized networks to ensure reliable execution for clients."
  },
  {
    category: "Terms",
    question: "What is KYC (Know Your Customer)?",
    answer: "KYC, short for “Know Your Customer,” refers to the process of verifying a client’s identity and information. It is a mandatory requirement in banks and brokerage services, where customers must submit details such as name, address, date of birth, and copies of identification documents. This process ensures that the customer is a legitimate individual and prevents illegal money laundering or potential fraud. KYC goes beyond a regulatory requirement—it is a core safeguard for protecting client assets. MIM provides a fast and secure KYC process, enabling clients to start trading with confidence."
  },
  {
    category: "Terms",
    question: "What is AML (Anti-Money Laundering)?",
    answer: "AML, short for “Anti-Money Laundering,” is a system designed to prevent illicit funds from being introduced into the legitimate financial system. Financial institutions and brokers are required to monitor client transaction patterns and report suspicious activity to regulatory authorities. It plays a critical role in preventing terrorist financing and concealing criminal proceeds. AML systems are integrated with KYC to manage not only identity but also the flow of funds transparently. MIM operates AML policies in line with international standards to ensure safe transactions for its clients."
  },
  {
    category: "Terms",
    question: "What is the difference between CDD (Customer Due Diligence) and EDD (Enhanced Due Diligence)?",
    answer: "CDD refers to the standard process of collecting basic customer information to verify identity. Examples include ID documents, proof of residence, and employment details. EDD is a more advanced procedure applied to higher-risk clients or large-value transactions. It may require documents such as income proof, source of funds, and detailed explanations of transaction purposes. MIM applies CDD and EDD appropriately according to the client’s risk profile, in compliance with international regulations."
  },
  {
    category: "Terms",
    question: "What is RBA (Risk-Based Approach)?",
    answer: "RBA, or “Risk-Based Approach,” is a method of tailoring monitoring intensity according to the risk level of the client or transaction. Low-risk clients undergo simpler checks, while high-risk clients are subject to more stringent reviews. This improves regulatory efficiency and allows financial institutions to allocate resources effectively. International regulatory bodies recommend RBA, and it is widely adopted in AML and KYC systems. MIM applies RBA by analyzing each client’s risk profile."
  },
  {
    category: "Terms",
    question: "What is segregation?",
    answer: "Segregation refers to the practice of keeping client funds completely separate from company operational funds. Without segregation, client funds could be at risk if the company faces financial difficulties. Through segregation, client assets are independently protected and subject to regulatory oversight. It is recognized internationally as a key investor protection measure. MIM strengthens stability and trust by strictly segregating client funds."
  },
  {
    category: "Terms",
    question: "What is the Investor Compensation Fund (ICF)?",
    answer: "The Investor Compensation Fund is a mechanism that partially reimburses clients if a broker becomes insolvent or faces operational issues. It ensures that clients receive minimum protection in unexpected circumstances. Coverage limits and scope depend on national regulatory policies. Not all brokers participate in ICF, but reputable firms are more likely to maintain such protections. MIM complies with global investor protection standards by adhering to relevant frameworks and regulations."
  },
  {
    category: "Terms",
    question: "How does OTP/2FA security work?",
    answer: "OTP refers to one-time passwords, and 2FA means two-factor authentication. In addition to a standard password, a client must enter a code delivered via a mobile app or email when logging in. This significantly reduces the risk of account theft or unauthorized access. 2FA has become a core measure for asset protection in financial services. MIM supports OTP/2FA security through apps such as Google Authenticator."
  },
  {
    category: "Terms",
    question: "What is data encryption?",
    answer: "Data encryption is a technology that encodes information using specific keys so that unauthorized individuals cannot read it. In online financial transactions, encryption is essential. It protects sensitive information such as account credentials, payment data, and trading records. Encryption is one of the strongest tools to prevent hacking and data leaks. MIM applies the latest encryption protocols to manage client data securely."
  },
  {
    category: "Terms",
    question: "What is GDPR (General Data Protection Regulation)?",
    answer: "GDPR is a data protection regulation enforced by the European Union, with global impact. It strictly regulates how companies collect, store, and use personal data, requiring transparency. Clients have the right to consent to or withdraw data sharing at any time. Financial firms that violate GDPR face heavy penalties. MIM prioritizes data protection by complying with GDPR principles."
  },
  {
    category: "Terms",
    question: "What is a financial regulatory license?",
    answer: "A financial regulatory license is an official authorization from a national supervisory body that allows a company to provide financial services legally. Issuance is based on criteria such as capital adequacy, internal controls, risk management, and client protection systems. Possession of a license is directly linked to a broker’s credibility and ensures a safe trading environment. Licenses from well-known regulators provide higher trustworthiness. MIM guarantees service legitimacy and stability under the oversight of the Mauritius FSC and SVG regulators."
  },
  {
    category: "Terms",
    question: "What is internal control?",
    answer: "Internal control refers to the framework within a company that ensures operations are conducted according to regulations and procedures. It prevents misconduct and ensures reliability in financial reporting and operations. Examples include approval workflows, division of duties, and risk review processes. It also plays a key role in investor protection and market stability. MIM operates internal controls aligned with international standards to ensure client funds and trades are managed safely."
  },
  {
    category: "Terms",
    question: "What is compliance?",
    answer: "Compliance is the system ensuring that a company adheres to relevant laws and regulations. It includes not only legal obligations but also ethical standards and market practices. The compliance department monitors suspicious transactions, manages client protection policies, and files regulatory reports. This reduces legal risks and strengthens client trust. MIM employs specialized teams to maintain a strict compliance framework."
  },
  {
    category: "Terms",
    question: "What is the role of financial regulators?",
    answer: "Financial regulators oversee and supervise financial institutions to ensure they operate safely and transparently. They handle license issuance, capital requirements, internal control inspections, and client protection measures. They also monitor suspicious transactions and enforce penalties for misconduct. Regulators are essential for maintaining fairness and stability in financial markets. MIM fully complies with the regulations of the Mauritius FSC and SVG supervisory authorities."
  },
  {
    category: "Terms",
    question: "What is risk assessment?",
    answer: "Risk assessment is the process of identifying and analyzing potential risks associated with transactions, clients, or systems. It helps firms determine risk levels and develop mitigation strategies. For example, transactions involving high-risk jurisdictions require enhanced monitoring. Risk assessment is closely linked with AML, KYC, and internal controls. MIM conducts regular risk assessments to maintain a safe trading environment."
  },
  {
    category: "Terms",
    question: "What is an STR (Suspicious Transaction Report)?",
    answer: "STR stands for Suspicious Transaction Report, the process of reporting suspicious financial activity to regulators. Examples include frequent small transfers from the same account or unclear sources of funds. It is a critical measure for preventing money laundering and terrorist financing. Financial firms must detect STRs through monitoring systems and report them promptly. MIM strictly follows international STR reporting standards."
  },
  {
    category: "Terms",
    question: "What is Source of Funds Verification?",
    answer: "Source of Funds Verification ensures that the money used in trading comes from legitimate channels. Clients may need to submit documents such as payslips, tax returns, or bank statements. It is a key safeguard against money laundering and illegal capital inflows. It is especially strict for large or frequent transactions. MIM thoroughly enforces source of funds verification to guarantee legality and safety of client assets."
  },
  {
    category: "Terms",
    question: "Why are log records important?",
    answer: "Log records are data entries that document all activities and transactions within a system. They allow companies to trace the root cause of issues and are essential for security audits. Logs also help detect abnormal access or hacking attempts quickly. They serve as evidence to meet transparency requirements of regulators. MIM stores logs securely so they can be verified at any time."
  },
  {
    category: "Terms",
    question: "What is access control?",
    answer: "Access control is a security function that limits system or data access by assigning user-specific permissions. For example, employees may have different levels of access to prevent unnecessary exposure of sensitive information. It reduces internal security risks and is essential for protecting client data. Strong access control helps prevent insider data leaks, which are more common than external hacking. MIM strengthens data protection through multi-tier access control systems."
  },
  {
    category: "Terms",
    question: "What are IDS and IPS?",
    answer: "IDS stands for Intrusion Detection System, and IPS stands for Intrusion Prevention System. IDS detects abnormal network activity and alerts administrators, while IPS blocks it in real time. Together, they provide maximum security protection. They are core tools for preventing hacking and data breaches in financial systems. MIM uses advanced IDS/IPS solutions to safeguard client assets."
  },
  {
    category: "Terms",
    question: "What is a firewall?",
    answer: "A firewall is a security system that separates internal and external networks, blocking unauthorized access. It can be implemented as hardware or software and is a basic element of network security. It prevents external attacks and ensures internal data safety. Its effectiveness is amplified when combined with other security systems. MIM uses firewalls as a core layer of its multi-level security infrastructure to protect client data."
  },
  {
    category: "Terms",
    question: "What is cybersecurity?",
    answer: "Cybersecurity refers to the technologies and processes that protect systems and data from external threats such as hacking, data leaks, and malware. In financial services, accounts, transaction records, and payment details are primary targets, requiring multiple security layers. Cybersecurity involves not only blocking threats but also detecting and responding to them. It is an essential foundation for enabling traders to operate with confidence. MIM adopts advanced security technologies and multi-layered defenses to keep the trading environment safe."
  },
  {
    category: "Terms",
    question: "What is cloud security?",
    answer: "Cloud security refers to managing threats that occur within online servers and data storage infrastructures. As many trading platforms use cloud environments, extra care is required for data access and storage. Cloud security involves encryption, access control, and backup systems to strengthen stability. It also uses a shared responsibility model, where both the provider and the financial firm ensure security. MIM follows global cloud standards to provide safe and secure services."
  },
  {
    category: "Terms",
    question: "What is smart contract security?",
    answer: "Smart contract security ensures that blockchain-based contract code runs without vulnerabilities. Bugs or hacks can lead to client fund losses, making audits and pre-deployment testing essential. Security checks are performed by specialized firms or automated tools, and should be repeated whenever the code is upgraded. In DeFi, smart contract security is a key factor in building investor trust. MIM works with external experts to strengthen audits and provide a stable trading environment."
  },
  {
    category: "Terms",
    question: "What is the difference between phishing and spoofing?",
    answer: "Phishing is a scam technique where emails or messages are disguised to steal client login details or financial data. Spoofing, on the other hand, forges the sender identity to appear as a trusted source. Both are common types of cyberattacks targeting financial accounts. Traders should avoid clicking suspicious links and always use official channels. MIM strengthens its security warning systems to prevent phishing and spoofing attacks."
  },
  {
    category: "Terms",
    question: "What is insider trading?",
    answer: "Insider trading is the act of using non-public corporate or institutional information for unfair gain. It undermines market fairness and is strictly prohibited in most countries. Insider information may include financial results, new product launches, or regulatory approvals that significantly affect markets. Such trades put retail investors at a disadvantage and are subject to strong penalties. MIM enforces strict controls on employees and partners to prevent insider trading."
  },
  {
    category: "Terms",
    question: "What is market manipulation?",
    answer: "Market manipulation refers to illegal practices that distort prices for unfair profit or to cause harm. Common methods include spoofing (fake orders), price rigging, and spreading false information. These actions damage market trust and can cause severe investor losses. Regulators impose strict penalties on such activities, including fines and criminal charges. MIM ensures transparent pricing and fair trading environments to prevent market manipulation."
  },
  {
    category: "Terms",
    question: "How can financial fraud be prevented?",
    answer: "Preventing financial fraud requires proactive security compliance by both clients and firms. First, enable multi-factor authentication such as OTP/2FA. Second, avoid clicking suspicious links in emails or text messages. Third, firms must monitor suspicious transactions in real time, and clients should clearly identify the source of funds. MIM minimizes financial fraud risks through modern AML/KYC procedures and security solutions."
  },
  {
    category: "Terms",
    question: "How can identity theft be prevented?",
    answer: "Identity theft involves criminals using someone else’s personal information to open accounts or conduct transactions. KYC processes verify ID documents and facial recognition to prevent such fraud. Clients should safeguard their personal data and update passwords regularly. Suspicious activity must be reported immediately to customer service or regulators. MIM prevents identity theft through multi-layered security systems and AI-based verification."
  },
  {
    category: "Terms",
    question: "Why is a password policy important?",
    answer: "A password policy is essential for protecting client accounts. Weak passwords are vulnerable to hacking, so a strong combination of upper/lowercase letters, numbers, and special characters is recommended. Regular password updates enhance security further. It is also important not to reuse the same password across multiple platforms. MIM enforces strong password policies to strengthen account protection."
  },
  {
    category: "Terms",
    question: "What is risk mitigation?",
    answer: "Risk mitigation refers to strategies aimed at minimizing risks in trading and operations. Examples include diversifying positions or using stop-loss orders to reduce potential losses. On a company level, it includes regulatory compliance, strengthening internal controls, and improving security infrastructure. While risks cannot be completely eliminated, proactive management reduces potential impact. MIM implements a wide range of risk management policies to ensure clients trade in a stable environment."
  },
  {
    category: "Terms",
    question: "Trading signals",
    answer: "Trading signals provide suggestions for entry or exit points based on indicators or algorithmic analysis. These signals can be generated from technical indicators, news events, or AI algorithms. Traders can either follow them directly or use them as references to strengthen their own strategies. However, relying solely on signals carries risks, so independent verification is necessary. MIM provides a variety of analysis tools and indicators so clients can design their own strategies."
  },

  // --- Others ---
  {
    category: "Others",
    question: "What should I do if I cannot access the MIM platform?",
    answer: "If you are unable to access the platform, the first step is to check your internet connection. An unstable Wi-Fi or mobile data environment may prevent your trade requests from being properly transmitted to the server. In some cases, VPNs or firewall settings may also block access. If the issue persists after these basic checks, we recommend contacting the MIM Customer Support team immediately. Our dedicated technical support staff will analyze the cause of the error and quickly verify whether it is due to an account authentication issue or scheduled server maintenance. In the case of temporary downtime caused by regular maintenance, we inform clients in advance through email or website announcements to avoid unnecessary concern. In the event of unexpected disruptions, MIM provides real-time updates and transparently communicates the estimated resolution time to minimize inconvenience."
  },
  {
    category: "Others",
    question: "When does server maintenance take place, and will I be notified in advance?",
    answer: "MIM conducts regular server maintenance to ensure a stable trading environment. Typically, maintenance is scheduled during weekends or late-night hours when trading activity is lower, in order to minimize inconvenience for clients. This is also a common practice across the industry. Once a maintenance schedule is confirmed, we notify clients at least one day in advance via website announcements, email notifications, and in-platform alerts. This allows clients to adjust their trading plans ahead of time and reduces any disruption during the maintenance window. If the maintenance takes longer than expected, we provide real-time updates and inform clients of the revised estimated completion time. Clients can check progress through our official communication channels at any time, and platform access will be restored immediately once maintenance is complete. Transparent operations and timely communication are core principles MIM upholds to maintain client trust."
  },
  {
    category: "Others",
    question: "What are the operating hours of the Customer Support Center?",
    answer: "The MIM Customer Support Center operates 24 hours on weekdays, reflecting the nature of global financial markets. This ensures that clients in Asia, Europe, and North America can receive real-time assistance at any time. During peak trading sessions in London, New York, and Tokyo, additional dedicated managers are deployed to further enhance response speed. Even on weekends and public holidays, an Emergency Response Team remains on standby. This allows MIM to quickly resolve urgent issues such as system errors, trade delays, or funding problems, minimizing client concerns with immediate guidance and support. To accommodate clients’ linguistic needs, MIM provides multilingual support. Dedicated time slots are available for major languages including English, Japanese, Chinese, and Indonesian. The specific schedules and language coverage are published on the website and within the client portal. In summary, MIM’s Customer Support Center operates under the principle of “immediate response, anytime, anywhere”, ensuring that global traders can trade with confidence regardless of time zone or language barriers."
  },
  {
    category: "Others",
    question: "Which languages are available for live chat support?",
    answer: "MIM provides live chat support primarily in English, ensuring that clients worldwide can receive instant assistance at any time. English support is available 24/7 without interruption. Recognizing the importance of Asian markets, MIM also supports key regional languages such as Japanese, Chinese (Simplified/Traditional), Vietnamese, Indonesian, and Thai. These sessions are handled by dedicated regional support teams with expertise in both financial terminology and local language nuances. Although specific operating hours may vary by language, clients are automatically connected to their regional support teams when needed. For example, Indonesian clients are connected with the Indonesian support team, while Japanese clients are directed to the Japanese team. This structure minimizes language barriers and ensures that clients can receive financial assistance in their native language with confidence. As MIM’s client base continues to grow, additional languages will be introduced. All chat transcripts are securely stored and analyzed internally to enhance service quality. In conclusion, MIM’s live chat service operates under the principle of “English anytime, native language when needed,” offering a multilingual support system so that clients can communicate seamlessly without language barriers."
  },
  {
    category: "Others",
    question: "Why doesn’t MIM provide phone support?",
    answer: "MIM serves a global client base, and given the diversity of regions, languages, and time zones, phone support is considered highly limited. Instead, MIM provides email and live chat as its primary support channels, for several important reasons: Overcoming language barriers – Phone calls make interpretation difficult and can lead to misunderstandings. In contrast, chat and email allow multilingual support teams or translation systems to provide more accurate communication. Record keeping – All chat and email conversations are automatically logged. This ensures objective evidence in case of disputes or misunderstandings, a crucial element in financial services that protects both clients and MIM. Efficiency – Phone calls can only handle one client at a time, while chat and email allow multiple inquiries to be processed simultaneously, significantly improving response times. Clients can also review past conversation records, reducing repeated inquiries. In conclusion, MIM does not provide phone support not for convenience, but as a strategic choice to guarantee accuracy, transparency, and efficiency in global client support. Through live chat and email, clients still receive fast, clear, and reliable assistance at any time."
  },
  {
    category: "Others",
    question: "How long does it take to receive a reply by email?",
    answer: "At MIM, our goal is to respond to all email inquiries within 24 hours. For simple account-related questions or routine requests, replies are often provided within just a few hours, as our dedicated support team reviews inquiries in sequence. However, more complex cases—such as those requiring technical review or additional compliance verification—may take longer than one day to resolve. For faster assistance, we recommend using our live chat support, where clients can connect directly with an agent and receive real-time guidance."
  },
  {
    category: "Others",
    question: "Are customer support interactions recorded?",
    answer: "Yes. MIM automatically records and stores all customer support interactions to ensure transparency and consistency. All conversations via live chat, email, and inquiry forms are stored in both the customer portal and the internal CRM (Customer Relationship Management) system. These records are not merely stored but are actively used to prevent recurring issues and improve service quality. For example, if multiple clients report the same problem, the records help quickly analyze the root cause and implement system improvements. In cases of disputes or misunderstandings, the records serve as objective evidence, reducing unnecessary confusion and protecting the rights of both clients and the broker. In summary, customers can always review their support history and verify how their requests were handled, while MIM adheres to the principle that “every conversation is responsibly recorded and leads to improvement.”"
  },
  {
    category: "Others",
    question: "How is the quality of customer support responses managed?",
    answer: "At MIM, customer support quality is not limited to “quick replies” but is managed based on comprehensive standards that include accuracy, courtesy, and professionalism. Regular internal quality assessments are conducted to check whether the agent’s response actually solved the problem, whether unnecessary waiting time occurred, and whether the support was delivered with a trustworthy attitude. To directly capture customer feedback, MIM operates satisfaction surveys and a CS feedback system. Feedback is not just noted but incorporated into training programs and support manuals, creating a virtuous cycle of continuous service improvement. For multilingual support, a global collaboration framework is in place to ensure consistency across all languages. Local support teams share the same manuals and guidelines, with regular quality review meetings to maintain uniform service levels worldwide. In conclusion, MIM ensures consistent and reliable support through a three-tier quality management system: internal evaluation + customer feedback + global standardization, so clients can always expect high-quality service anywhere, anytime."
  },
  {
    category: "Others",
    question: "Is there beginner support for new clients?",
    answer: "Yes. MIM provides a wide range of beginner support services to ensure new clients can start using the platform with ease. Step-by-step guides and video tutorials are available to explain the basic workflow, from opening an account to executing trades. This allows clients to quickly grasp the essentials without prior knowledge. Additionally, MIM offers demo accounts for safe practice before using real funds. Demo accounts simulate real market conditions with virtual capital, enabling new clients to practice both platform usage and trading strategies without risk. The MIM support center also provides a dedicated beginner FAQ and tutorial library, addressing frequently asked questions and common mistakes. Clients can also receive personalized assistance via live chat to ensure their first trades are completed without unnecessary confusion. In conclusion, MIM helps beginners adapt and grow steadily by offering a three-tier support system: guides + demo accounts + dedicated FAQ, providing a strong foundation for long-term trading success."
  },
  {
    category: "Others",
    question: "Can I contact customer support directly within the platform?",
    answer: "Yes. The MIM platform is equipped with an integrated support function that allows clients to request assistance without leaving their trading environment. There is no need to open a separate website or compose an email—clients can submit inquiries directly while logged in. Clients can simply click the support button located in the trading screen or menu to connect with live chat or an inquiry form. Submitted requests are automatically logged in the client portal, where clients can track their inquiries and view progress transparently. This system goes beyond convenience, ensuring that issues encountered during trading can be reported and resolved instantly. Since all interactions are recorded, they can be referenced later for dispute prevention and faster resolution. In short, MIM’s in-platform support guarantees “one-click access, real-time logging, and transparent tracking”, enabling clients to trade with confidence anytime, anywhere."
  },
  {
    category: "Others",
    question: "How are customer complaints regarding deposits and withdrawals handled?",
    answer: "MIM operates a systematic procedure to address customer complaints and feedback quickly and transparently. Reception Stage: Customers can submit complaints via email, customer service hotline, or live chat. To facilitate faster review, they should include details such as the time of the issue, transaction ID, and supporting evidence (e.g., remittance receipt, screenshots). Review and Response: A dedicated department reviews all submissions immediately and, in principle, provides an initial response within 24 hours. Simple issues that can be verified are resolved promptly, while complex cases may proceed to additional verification steps. Further Verification and Actions: If the issue involves technical errors or payment delays requiring specialist involvement, the technical or payment teams conduct an in-depth investigation. If necessary, the Compliance/MLRO team also reviews the case for regulatory adherence. Record and Improvement: All complaints are recorded in the internal system for tracking and management. Recurring issues are addressed as improvement tasks to enhance service quality. Through this process, MIM consistently improves the customer experience and provides a stable, reliable service. In short, customer complaints are not only resolved but also treated as opportunities for service improvement, reflecting MIM’s responsibility as a trustworthy global broker."
  },
  {
    category: "Others",
    question: "What is the procedure for resolving customer complaints or disputes?",
    answer: "At MIM, customer complaints and disputes are not treated as simple issues but as a core process to ensure transparency and fairness. All complaints are first received by the MIM Customer Support Level 1 team, where simple issues such as account errors or deposit/withdrawal delays are resolved immediately to minimize inconvenience. For more complex matters such as trade execution, price calculation, or order delays, the case is escalated to specialized departments (Risk Management, Compliance, etc.). These departments thoroughly analyze the issue and provide objective solutions in line with internal regulations and industry standards. All processes are recorded in the system, allowing customers to check the status of their case at any time. If delays are expected, the customer is transparently informed of the reasons and expected timeline, ensuring confidence in the resolution process. If the issue cannot be resolved internally or requires regulatory judgment, MIM may request mediation from the relevant regulatory authority. In such cases, MIM provides all required documentation and fully cooperates with the investigation to safeguard customer rights. In conclusion, MIM has established a structured process of “quick resolution at first-line support → in-depth review by expert departments → regulatory mediation if necessary → transparent record keeping throughout”, ensuring customers can rely on a fair and trustworthy dispute resolution framework."
  },
  {
    category: "Others",
    question: "Can customers file complaints directly with the regulatory authority?",
    answer: "Yes, customers can file complaints directly with the relevant regulatory authority at any time. This is an internationally guaranteed procedure designed to protect the rights of customers, and it serves as an important mechanism to ensure that when disputes arise between the broker and the customer, the matter is reviewed independently and fairly by a third party. Once a complaint is submitted, the regulatory authority will review the matter and, if necessary, request supporting documents from MIM. In this process, MIM transparently provides trading records, customer service logs, and internal handling details, fully cooperating with all investigation procedures. This ensures that when customers are not satisfied with the broker’s internal resolution, they can rely on the regulatory authority as an additional safeguard for a fair judgment. MIM prioritizes resolving customer complaints promptly and amicably through internal processes, but even when regulatory authorities intervene, MIM responds diligently to ensure that customers are not disadvantaged. This is more than just a legal obligation—it is also a core principle by which MIM maintains trust and transparency as a global broker. Ultimately, customers can be confident that “my issue can always be reviewed objectively by an independent authority,” which serves as an essential guarantee that further enhances the credibility of MIM’s services."
  }
];
