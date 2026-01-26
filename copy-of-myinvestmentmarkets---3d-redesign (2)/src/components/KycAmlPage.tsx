
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const KycAmlPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-purple-500/10 text-purple-500 mb-8 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <ShieldCheck size={48} />
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">KYC / AML</h1>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Policies for the usage and protection of your information.</p>
      </header>
      
      <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-16 text-gray-300 font-light leading-relaxed text-base md:text-lg shadow-2xl">
        
        {/* Intro Section */}
        <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Application and Responsibility</h2>
            <p>
                The contents of this Manual apply to all employees, including but not limited to the directors, authorized individuals, managers, executives and interns of My Investment Markets (collectively EMPLOYEES), whether employed full-time or part-time.
            </p>
            <p>
                It is the responsibility of all EMPLOYEES to read, understand and observe all the rules and procedures applicable to them, both in letter and in spirit. Failure to comply with the rules and procedures contained herein, will constitute serious misconduct.
            </p>
            <p>
                The overall responsibility of information dissemination and ensuring compliance lies with the Compliance Officer. If you become aware of a violation of this manual, if you are instructed by your superior to act in contravention of this manual, or if you find yourself inadvertently in contravention of this manual, you must not hesitate to report such contravention to the Compliance Officer.
            </p>
            <p>
                This is the first edition of the AML/CFT Operations Manual (herein referred to as, the Manual).
            </p>
            <p>
                The Manual shall be reviewed annually and at the point of a material change in the AML/CFT legal requirements as prescribed under the Financial Intelligence and Anti-Money Laundering Act (FIAMLA), FIAML Regulations, the FSC AML/CFT Handbook, amongst others. The same shall be updated on a regular basis and the latest version control applies. Should the changes required be substantial, the Compliance Officer shall request the senior management to call a meeting with the Board and review the Manual in its entirety and make the necessary revisions.
            </p>
            <p>
                My Investment Markets shall be referred to as “the Company”, throughout the Manual.
            </p>
        </section>

        <hr className="border-white/10 my-16" />

        {/* PART I */}
        <section className="mb-16 space-y-10">
            <div className="mb-10">
                <h2 className="text-4xl font-display font-bold text-white mb-2 text-[#ef4444]">PART I</h2>
                <h3 className="text-2xl font-display font-bold text-white">GOVERNANCE, RISK AND COMPLIANCE (GRC)</h3>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">1. Introduction</h4>
                <p>
                    My Investment Markets’ (the Company) AML / CFT Operations Manual is designated to prevent and mitigate possible risks of the Company being involved in any kind of illegal activity. Both international and local regulations require My Investment Markets to implement effective internal procedures and mechanisms to prevent money laundering, terrorist financing, drug and human trafficking, proliferation of weapons of mass destruction, corruption, and bribery and to take action in case of any form of suspicious activity from its Users.
                </p>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">2. Regulatory Requirements</h4>
                <p>Under the regulations, the company has main responsibilities in the area of AML compliance:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>Appoint a Money Laundering Reporting Officer (MLRO);</li>
                    <li>Appoint a Compliance Officer (CO): The CO would be a senior employee with relevant experience at the company with authority to investigate all suspicions to the fullest. The CO would be ultimately responsible for stressing to employees the consequences of failing to adhere to any of the requirements listed in this document;</li>
                    <li>Thoroughly check the identities of all new clients;</li>
                    <li>Simplify as much as reasonably possible to employees the process of reporting suspicious transactions;</li>
                    <li>Take and maintain complete records of clients’ identities and transaction histories;</li>
                    <li>Educate and remind employees about the requirements in this booklet and how to raise suspicion;</li>
                    <li>Compliance with laws, rules and standards also covers matters such as observing proper standard of market conduct, ethical business practices, managing conflicts of interest, and fair treatment of clients and stakeholders. Compliance needs to be integrated into the culture of the Company and shall have to be reinforced by a close alignment of values, processes and rewards. A holistic approach to compliance ensures that the benefits of compliance far exceed the related costs.</li>
                    <li>At the Company, we place the highest priority on complying with rules and regulations required by the authorities.</li>
                    <li>The commitment for compliance starts at the highest levels of the firm. Our core principles of governance and compliance are to:
                        <ul className="list-[circle] pl-6 mt-2 space-y-2">
                            <li>a) Maintain a compliance function: The role of the compliance function is to identify, assess, advice on, monitor and report on the Company’s compliance with regulatory requirements and the appropriateness, effectiveness and integrity of its supervisory procedures;</li>
                            <li>b) Act in a professional and ethical manner for the benefit of clients and always put client’s interest first; communicate with clients and others in a clear and fair manner;</li>
                            <li>c) Act with independence and objectivity; avoid relationships that may impair or appear to impair our independence and objectivity;</li>
                            <li>d) Uphold the rules governing capital markets transparency and disclosure requirements and comply with letter and spirit of laws and regulations;</li>
                            <li>e) Develop a business culture that values and promotes not only compliance with the letter of the law, but also a high ethical and investor-protected standard.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">3.1. Why Governance, Risk and Compliance</h4>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>Compliance with regulatory requirements, prudential norms and industry best practices enhances the efficiency and reputation of My Investment Markets (the Company), boosts investor confidence and helps the management to fulfil stakeholder’s expectations of integrity.</li>
                    <li>Compliance with laws, rules and standards also covers matters such as observing proper standard of market conduct, ethical business practices, managing conflicts of interest, and fair treatment of clients and stakeholders. Compliance needs to be integrated into the culture of a company, and shall have to be reinforced by a close alignment of values, processes and rewards. A holistic approach to compliance ensures that the benefits of compliance far exceed the related costs.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">3.2. Risk of Non-Compliance</h4>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>The compliance risk is defined as the risk of impairment to the Company business model, reputation and financial condition (resulting) from a failure to meet laws, regulations, internal standards and policies, and expectations of key stakeholders such as clients, employees and society as a whole.</li>
                    <li>Failure to comply with the FIAML Regulations 2018 and the FIAMLA may result in a fine not exceeding one million rupees and to imprisonment for a term not exceeding 5 years, according to the FIAMLA Section 32A of 2002, and Regulation 33 of the FIAML Regulations 2018.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">4. Responsibilities of the Board of Directors for GRC</h4>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>To design, establish and maintain a compliance function and related policies and procedures, keeping in mind the prevalent regulatory practices of the region where the company operates and the strategic moral and ethical obligations of the firm to its stakeholders.</li>
                    <li>To designate a suitable person who has the appropriate competence, to have the day-to- day responsibilities for the firm’s compliance with regulatory requirements.</li>
                    <li>The Governing Board is responsible for overseeing the management of the Company’s governance and compliance. The Board should approve the Company’s GRC policy, including a formal document establishing a permanent and effective compliance function.</li>
                    <li>To identify and assess on an ongoing basis the new or changed compliance requirements applicable to the company by any regulatory authorities; and take steps to modify existing policies and procedures to comply with the new or changed requirements;</li>
                    <li>To provide compliance advice and support in relation to new business initiatives and ensure that a robust compliance infrastructure is implemented for any new initiatives that are undertaken.</li>
                    <li>At least once every year, the Board should assess the extent to which the Company is managing its compliance risk effectively.</li>
                    <li>The Board clearly understands that compliance policies will not be effective unless the Board promulgates the values of honesty and integrity throughout the Company. Accordingly, the Board has committed to ensure that appropriate policies are in place to manage the compliance, and employees are made aware of these policies and the modes of implementation.</li>
                    <li>The Board and Senior Management shall review and approve all policies, procedures, controls and manuals, prior to be put in use. The policies, procedures, controls and manuals shall have the Board approval date in it.</li>
                    <li>The Board will oversee the implementation of the policies and ensure that compliance issues are resolved effectively and expeditiously by Senior Management with the assistance of the compliance function.</li>
                    <li>The Company must ensure that the training provided to officers and employees is comprehensive and ongoing and that the officers and employees are aware of ML and TF, the associated risks and vulnerabilities of the Company, and their corresponding obligations.</li>
                    <li>As part of compliance arrangements, the Company is responsible for appointing a Compliance Officer (CO) who is responsible for the implementation and ongoing compliance of the Company with internal programmes, controls and accordance with the requirements of the FIAMLA and FIAML Regulations 2018.</li>
                    <li>In Addition to appointing a CO, an independent audit function to test the ML and TF policies, procedures and controls of the Company should be maintained.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">5. Money Laundering Reporting Officer (MLRO) and Compliance Officer (CO)</h4>
                <p>The MLRO and the CO are the individuals, duly authorized by the Company, whose duties are to ensure the effective implementation and enforcement of the AML / CFT Operations Manual. It is the MLRO and the CO’s responsibility to supervise all aspects of the Company’s anti- money laundering and counter-terrorist financing measures, including but not limited to their responsibilities, as listed / stated below.</p>
                
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">5.1. Responsibilities of the MLRO</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>The appointment of a Money Laundering Reporting Officer will be assigned in accordance with Regulations 26(1) of FIAML Regulations 2018.</li>
                        <li>It is imperative that every financial institution appoints an appropriate MLRO who must be of sufficiently Senior status and not below the rank of Manager.</li>
                        <li>The MLRO must ensure that the clients are running according to the business plan. Any change in business activity must be addressed to the clients.</li>
                        <li>Proper CDD must be done on each client. Relevant online sources enhanced due diligence and monitoring.</li>
                        <li>To enforce a strict enhanced due diligence procedure in relation to Countries with deficiencies in their AML regime.</li>
                        <li>Any suspicious transaction must be reported to the Board and the Financial Intelligence Unit using the appropriate forms found in the AML / KYC Policy.</li>
                        <li>It is important to note that the Board has given the MLRO the freedom to make his or her decision and without influence, pressure, or fear of repercussions in the event that the Senior colleagues disagree with his / her decision.</li>
                        <li>The MLRO shall exercise his reasonable judgement in deciding whether certain Client's DD documentation should be acceptable to the Company, subject to the laws and practices of the Client’s jurisdiction.</li>
                        <li>To undertake a review of all internal disclosures in the light of all available relevant information and determining whether or not such internal disclosures have substance and require an external disclosure to be made to the Financial Intelligence Unit (‘FIU’).</li>
                        <li>To maintain all related records.</li>
                        <li>To give guidance on how to avoid tipping off the customer if any disclosure is made.</li>
                        <li>To liaise with the FIU and if required the Financial Services Commission (‘FSC’) and participating in any other third-party enquiries in relation to money laundering or terrorist financing prevention, detection, investigation or compliance.</li>
                        <li>To provide reports and other information to the Board, if any cases encountered.</li>
                        <li>To produce in an annual basis (initially) a MLRO Report and submit the same to the Board.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">5.2. Responsibilities of Compliance Officer (CO)</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>To ensure effective management of the Company’s compliance function;</li>
                        <li>To advise management, during the inception of new business processes, of the underlying integrity and compliance implications of these processes;</li>
                        <li>To ensure corporate-wide communication of the compliance policy and its implementation and to report to the Directors on the management of the Company’s compliance risk;</li>
                        <li>To act as a central repository of all information on rules, codes and business practices and ensure its dissemination to all appropriate people in the organization;</li>
                        <li>To establish detailed written compliance procedures that should be followed by all staff members;</li>
                        <li>To ensure that the compliance policies and procedures are observed and breaches, if any, are remedied immediately and disciplinary actions, if required, are taken against the personnel responsible for the breach;</li>
                        <li>To regularly report to the Board on compliance issues (if any cases encountered) and to make an informed judgment on the effectiveness corporate-wide compliance policy;</li>
                        <li>To produce in an annual basis (initially) a Compliance Report and submit the same to the Board;</li>
                        <li>To report promptly to the Board, of any material compliance failures (e.g., failures that may attract a significant risk of legal or regulatory sanctions, material financial loss, or loss to reputation);</li>
                        <li>To liaise with the relevant Company’s officer to ensure accuracy of financial recording and compliance with established accounting standards (IFRS);</li>
                        <li>To ensure that all requests and instructions of regulators are complied with in a timely and accurate manner;</li>
                        <li>To ensure that day to day compliance monitoring and administration are carried out to specified standards;</li>
                        <li>To ensure that all registrations with the FSC and other regulatory authorities are current and up to date;</li>
                        <li>To work with the legal advisors and ensure that valid agreements with contracting parties or counterparties are put in place for new business initiatives;</li>
                        <li>Providing law enforcement with information as required under the applicable laws and regulations.</li>
                        <li>To update compliance manuals and procedures;</li>
                        <li>To collect User’s identification information;</li>
                        <li>Implementing a records management system for appropriate storage and retrieval of documents, files, forms, and logs.</li>
                        <li>To update risk assessment regularly;</li>
                        <li>To arrange training and development of staff on regulatory responsibilities.</li>
                    </ul>
                    <p className="mt-4 italic">Loita Management Services Limited (LMS) has a Compliance Due Diligence agreement with the Company. Therefore, the MLRO and Compliance Officer are LMS’s employees.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">5.3. Money Laundering, Terrorism Financing, and Proliferation Financing</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li><strong>Money laundering (ML)</strong> refers to the process by which the proceeds of illegal activities are transformed into apparently legitimate money or other assets. The aim is to obscure the illicit origins of these proceeds so they can be used without detection of the initial criminal activity. Money laundering is commonly associated with crimes such as drug trafficking, terrorism, corruption, tax evasion, and financial fraud.</li>
                        <li><strong>Terrorism Financing (TF)</strong> refers to the provision of funds or providing financial support to individual terrorists or non state actors, most often with the intention to carry out acts of terror. The funds may be used to purchase weapons, train operatives, pay operatives, and conduct operations, among other activities. It is a major concern for international security agencies because the financing mechanisms often exploit legitimate channels and can be difficult to detect.</li>
                        <li><strong>Proliferation Financing (PF)</strong> refers to the act of providing funds or financial services which are used, in whole or in part, for the manufacture, acquisition, possession, development, export, trans-shipment, brokering, transport, transfer, stockpiling, or use of nuclear, chemical or biological weapons and their means of delivery and related materials (including both technologies and dual-use goods used for non- legitimate purposes), in contravention of national laws or, where applicable, international obligations.</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">6. Independent Compliance audit</h4>
                <p>The FIAML Regulations 2018 requires the audit process to be carried out independently. The audit functions should be independent of, and separate to the executive team dealing with the Company’s Anti-Money Laundering (AML) and Combating Financing of Terrorism (CFT) processes.</p>
                <p>The auditor must not have been involved in the development of the risk assessment, or the establishment, implementation, or maintenance of the Company’s AML / CFT programme.</p>
                <p>An independent audit function shall be appointed by the Company, in order to test the ML and TF policies, procedures and controls that should be maintained.</p>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">6.1. Independent Compliance Audit Frequency</h5>
                    <p>Independent compliance audit shall be conducted Annually and/or when there has been a major change in the AML / CFT risk assessment, policies, or procedures.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">6.2. Independent Compliance Audit Depth</h5>
                    <p>The appointed Independent Audit Function shall:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Evaluate how the Company adheres to rules, regulations and laws;</li>
                        <li>Cover the adequacy and effectiveness of the Company’s policies, systems, controls, and procedures relating to AML/CFT. This is done by having a detailed plan covering access to information and relevant staff, testing of the effectiveness of existing procedures and controls and any automated systems in use by the Company, random selection of transactions/files for review and record-keeping;</li>
                        <li>Verify if the AML/CFT programme adopted by the Company is effective.</li>
                    </ul>
                    <p className="mt-4">The Independent Audit shall test compliance in the following areas:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>AML / CFT policies and procedures;</li>
                        <li>Internal risk assessment;</li>
                        <li>Risk assessment on the use of third-party service providers (Outsourcing);</li>
                        <li>Compliance Officer function and effectiveness;</li>
                        <li>MLRO function and effectiveness;</li>
                        <li>Implementation and effectiveness of mitigating controls, including customer due diligence and enhanced measures;</li>
                        <li>AML / CFT training;</li>
                        <li>Record keeping obligations;</li>
                        <li>Targeted Financial Sanctions (TFS);</li>
                        <li>Suspicious transaction monitoring and reporting; and</li>
                        <li>Technological reliance and effectiveness.</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">7. Internal Due Diligence and Training</h4>
                
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">7.1. Screening</h5>
                    <p>As part of the process of hiring staff members, the Company must ensure that the same are screened against the required numerous Sanctions, PEP, Criminal related lists as well as adverse media results, prior to finalising the hiring process. This is conducted to assist in the prevention and detection of financial crime, as well as to ensure that the Company is compliant with the existing regulations. Screening of existing Staff Members and the Company’s Stakeholders in general, shall also be conducted periodically as part of the Company’s Business Risk Assessment (BRA).</p>
                    
                    <ul className="list-disc pl-6 space-y-4 mt-4 marker:text-[#ef4444]">
                        <li><strong>Screening for PEPs & PEPs by Association</strong>
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Potential Employees are screened against the PEP list to verify if any positive hit is triggered;</li>
                                <li>b) It shall be determined whether the potential employee is a PEP or PEP by association; and</li>
                                <li>c) The Compliance shall conduct an EDD Assessment, including a recommendation, and submit it to the Board/Senior Management in such cases;</li>
                                <li>d) Board/Senior Management shall decide whether to proceed or not with the hiring process.</li>
                            </ul>
                        </li>
                        <li><strong>Screening against Sanctions Lists</strong>
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Potential Employees are screened against Sanctions lists, as required by the Commission;</li>
                                <li>b) In the event that a positive hit is triggered by the screening process, an EDD Assessment shall be conducted and submitted to the Board/Senior Management;</li>
                                <li>c) Potential Employee job application shall not be carried forward and further action shall be taken as per required by law / regulations / the Commission.</li>
                            </ul>
                        </li>
                        <li><strong>Screening against Crime Related Lists</strong>
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Potential Employees are screened against criminal related lists;</li>
                                <li>b) In the event that a positive hit is triggered by the screening process, an EDD Assessment shall be conducted and submitted to the Board/Senior Management;</li>
                                <li>c) Potential Employee job application shall not be carried forward and further action shall be taken as per required by law/regulations/ the commission.</li>
                            </ul>
                        </li>
                        <li><strong>Screening for Adverse Media Results</strong>
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Potential Employees are screened against several internet articles that have been made available to the public, in order to find any related adverse media results;</li>
                                <li>b) In the event that a positive hit is triggered by the screening process, the compliance shall verify the gravity of the results and give its feedback and recommendation to the Board/Senior Management on the EDD Assessment Report.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">7.2. Education and Training</h5>
                    <p>Training shall be carried out to meet the requirements of FIAML Regulations 2018, if new legislation or significant changes to this Handbook are introduced, or where there have been significant technological developments within the Company or with the introduction of new products, services, or practices.</p>
                    <p>The guiding principle of all AML and CFT training should be to encourage and ensure that directors, officers and employees, irrespective of their level of seniority, to understand and accept their responsibility to contribute to the protection of the financial institution against the risks of ML and TF.</p>
                    <p>The Company shall keep records containing information and data regarding the attended trainings.</p>
                    
                    <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-[#ef4444]">
                        <li><strong>Scope, Content and Methodology of training</strong>
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) In accordance with Regulation 22(1)(c) of FIAML Regulations 2018, the ongoing training provided by the Company shall cover:
                                    <ul className="list-[square] pl-6 mt-1 space-y-1">
                                        <li>- The FIAMLA, FIAML Regulations 2018, any AML / CFT Code, Guide and, or Handbook issued by the FSC;</li>
                                        <li>- The implications of non-compliance by employees to requirements of FIAMLA, FIAML Regulations 2018, any AML / CFT Code, Guide and, or Handbook issued by the FSC; and</li>
                                        <li>- The Company’s policies, procedures and controls for the purposes of foreseeing, preventing and detecting ML and TF.</li>
                                    </ul>
                                </li>
                                <li>b) New and existing employees, officers, Board members and Senior Management must have a good understanding of the Company’s business activities, functions and its AML / CFT policies and procedures;</li>
                                <li>c) Staff Members (including Senior Management) shall attend AML / CFT related training and acquire the equivalent of 10 hours (minimum) of CPDs per Year;</li>
                                <li>d) In-house training covering the Company’s AML / CFT Policies and procedures;</li>
                                <li>e) In-house training, on how to use the Company’s compliance due diligence tools and methodology, shall be provided to all relevant staff members;</li>
                                <li>f) New employees and existing employees shall be given graded tests pertaining to the in-house trainings. The grades will impact the employees’ Annual Reviews at the end of the Financial Year;</li>
                                <li>g) Staff members shall be required to provide a report / summary to Senior Management and CO, of the attended courses, webinars, seminars and trainings. The evaluation of the reports shall form part of the Annual Reviews and impact the result of the same;</li>
                                <li>h) The Company’s staff members shall receive a training programme and shall be requested to attend certain trainings, seminars, webinars or courses.</li>
                                <li>i) The Company shall ensure that the ongoing training provided to directors, officers and employees also covers, to a minimum:
                                    <ul className="list-[square] pl-6 mt-1 space-y-1">
                                        <li>- The requirements for the internal and external disclosing of suspicion;</li>
                                        <li>- The criminal and regulatory sanctions in place, both in respect of the liability of the Company and personal liability for individuals, for failing to report information in accordance with the policies, procedures and controls of the Company;</li>
                                        <li>- The identity and responsibilities of the MLRO, DMLRO and CO;</li>
                                        <li>- Dealing with business relationships or occasional transactions subject to an internal disclosure, including managing the risk of tipping off and handling questions from customers;</li>
                                        <li>- Those aspects of the Company’s business deemed to pose the greatest ML and TF risks, together with the principal vulnerabilities of the products and services offered by the Company, including any new products, services or delivery channels and any technological developments;</li>
                                        <li>- New developments in ML and TF, including information on current techniques, methods, trends and typologies;</li>
                                        <li>- The Company’s policies, procedures and controls surrounding risk and risk awareness, particularly in relation to the application of CDD measures and the management of high risk and existing business relationships;</li>
                                        <li>- The identification and examination of unusual transactions or activity outside of that expected for a client;</li>
                                        <li>- The nature of terrorism funding and terrorist activity in order that employees are alert to transactions or activity that might be terrorist-related;</li>
                                        <li>- The vulnerabilities of the Company to financial misuse by PEPs, including the effective identification of PEPs and the understanding, assessing and handling of the potential risks associated with PEPs;</li>
                                        <li>- UN, EU and other sanctions and the Company’s controls to identify and handle natural persons, legal persons and other entities subject to sanction; and</li>
                                        <li>- Interruption or stop of the performance of a CDD process and file a STR, in the event that the Company reasonably believes that the performing it will tip off the client or potential client.</li>
                                    </ul>
                                </li>
                                <li>j) The Board and senior management shall receive adequate training to ensure they have the knowledge to assess the adequacy and effectiveness of policies, procedures and controls to counter the risk of ML and TF. The additional training provided to the Board and Senior Management must include, at least, a clear explanation and understanding of:
                                    <ul className="list-[square] pl-6 mt-1 space-y-1">
                                        <li>- Offences and penalties arising for non-reporting or for assisting money launderers or those involved in terrorist financing;</li>
                                        <li>- Requirements for CDD including verification of identity and retention of records; and</li>
                                        <li>- In particular, the application of the Company’s risk-based strategy and procedures.</li>
                                    </ul>
                                </li>
                                <li>k) Ongoing professional development, including participating in professional associations and conferences, is vital for MLROs / DMLROs. In addition, MLROs and DMLROs should receive in depth training on all aspects of the prevention and detection of ML/TF, including, but not limited to:
                                    <ul className="list-[square] pl-6 mt-1 space-y-1">
                                        <li>- AML / CFT legislative and regulatory requirements;</li>
                                        <li>- The international standards and requirements on which the Mauritius’ strategy is based, namely the FATF 40 Recommendations and ML / TF typology reports that are relevant to their business;</li>
                                        <li>- The identification and management of ML / TF risk;</li>
                                        <li>- The design and implementation of internal systems of AML / CFT control;</li>
                                        <li>- The design and implementation of AML / CFT compliance testing and monitoring programs;</li>
                                        <li>- The identification and handling of suspicious activity and arrangements and suspicious attempted activity and arrangements;</li>
                                        <li>- The money laundering and terrorist financing vulnerabilities of relevant services and products;</li>
                                        <li>- The handling and validation of internal disclosures;</li>
                                        <li>- The process of submitting an external disclosure;</li>
                                        <li>- Liaising with law enforcement agencies;</li>
                                        <li>- ML / TF trends and typologies; and</li>
                                        <li>- Managing the risk of tipping off.</li>
                                    </ul>
                                </li>
                                <li>l) The CO is responsible for ensuring continued compliance with the requirements of FIAMLA and FIAML Regulations 2018 and having an overall oversight of the program for combatting ML / TF amongst others - Regulation 22(3) of FIAML Regulations 2018.</li>
                                <li>m) The CO should receive in depth training on all aspects of the prevention and detection of ML / TF, including, but not limited to, addressing the monitoring and testing of compliance systems and controls (including details of the Company’s policies and procedures) in place to prevent and detect ML / TF.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">8. Cost of Compliance</h4>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>There is a cost to compliance which needs to be factored into the operations of the Company;</li>
                    <li>Prior to the annual budget preparation, the Compliance Team should be consulted for their budget and expectations;</li>
                    <li>The budget allocated to the project will directly correlate to the Company’s risk exposure;</li>
                    <li>If there are budget cutbacks, these need to be clearly explained and documented.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">9. Conduct of Business Policies in Governance & Compliance</h4>
                
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">9.1. Responsible Conduct</h5>
                    <p>As a registered company providing Global Business Services, including “Investment Dealer Licence (excluding underwriting)”, it is our professional and ethical responsibility to conduct ourselves in the most responsible manner and with clients’ best interests in mind. The client’s interest is paramount to the firm. We are responsible to safeguard our client’s interest, to avoid conflict of interest situations, to communicate with the client in an honest and fair manner, deal fairly and objectively with the clients and treat all clients fairly and equally.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">9.2. Conflict of Interest</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>All clients shall be treated fairly. Any conflict of interest between the client and the firm shall be avoided.</li>
                        <li>Client interests are paramount. All employees of our company including Managers should ensure that client interests supersede employees’ interests in all aspects of client relationship, including (but not limited to) recommendations, advice or change in prior recommendations and actions.</li>
                        <li>Where the conflict of interest is unavoidable such conflicts shall be managed in such a way that the client’s interest has priority and is protected. If the conflict of interest is of significant nature, the firm shall decline to act for the client.</li>
                        <li>We must not act, or cause others to act, on material non-public information or knowledge that could affect the value of a publicly traded investment. Procedures shall be established to create effective barriers.</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">10. Confidentiality</h4>
                <p>We will treat all information collected from its clients and employees for the purpose of carrying out its business or administrative functions as confidential.</p>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">11. Maintenance of Records</h4>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>We will review the advanced information and documentation management policies, procedures and standards of ISO 9001, ISO 154489 and ISO 27001 and implement where necessary.</li>
                    <li>All records obtained through CDD measures, including account files, business correspondence and copies of all documents evidencing the identity of clients and beneficial owners, and records and the results of any analysis / assessment undertaken in accordance with the FIAMLA, all of which shall be maintained for a period of not less than 7 years.</li>
                    <li>Adequate records will be maintained by the Firm for all transactions it undertakes, including but not limited to the following summation:
                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-white/10">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="p-3 border border-white/10 text-white font-bold">Detail</th>
                                        <th className="p-3 border border-white/10 text-white font-bold">Retention Period</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-white/10">Client verification, due diligence, client agreements, complaints and any other client-related documentation.</td>
                                        <td className="p-3 border border-white/10">Minimum period of 7 years after the business relationship has ended.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-white/10">Financial statements and reports</td>
                                        <td className="p-3 border border-white/10">Minimum period of 7 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li>All records and documents not mentioned in the preceding table shall be maintained for a minimum period of 7 years.</li>
                    <li>Records on transactions, both domestic and international, that are sufficient to permit reconstruction of each individual transaction for both account holders and non-account holders, which shall be maintained for a period of 7 years after the completion of the transaction; and</li>
                    <li>Copies of all suspicious transaction reports or other reports made to the FIU in accordance with the FIAMLA, including any accompanying documentation, which shall be determined for a period of at least 7 years from the date the report was made.</li>
                    <li>All records shall be available for inspection by the FSC at all times during office hours.</li>
                    <li>The joint authorisation of the CO and one Director shall be required before destruction of any record.</li>
                    <li>The CO ensures that the compliance policies and procedures are observed properly and breaches if any are remedied immediately and disciplinary actions if required are taken against the personnel responsible for the breach.</li>
                    <li>The CO ensures that all regulators’ requests and instructions are complied with in a timely and accurate manner.</li>
                    <li>The CO will ensure that compliance monitoring and administration is carried out strictly according to the compliance program.</li>
                </ul>
                <p>The following information should be kept for every transaction carried out in the course of a business relationship or one-off transaction:</p>
                <ul className="list-disc pl-6 space-y-1 marker:text-[#ef4444]">
                    <li>The name and address of the client;</li>
                    <li>If a monetary transaction, the kind of currency and the amount;</li>
                    <li>If the transaction involves a client’s account, the number, name or other identifier for the account;</li>
                    <li>The date of the transaction;</li>
                    <li>The details of the counterparty, including account details;</li>
                    <li>The nature of the transaction; and</li>
                    <li>The details of the transaction.</li>
                </ul>
            </div>
        </section>

        <hr className="border-white/10 my-16" />

        {/* PART II */}
        <section className="mb-16 space-y-10">
            <div className="mb-10">
                <h2 className="text-4xl font-display font-bold text-white mb-2 text-[#ef4444]">PART II</h2>
                <h3 className="text-2xl font-display font-bold text-white">RISKS</h3>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">1. Risk</h4>
                <p>My Investment Markets will ensure that the approved party / parties carrying out its controlled function:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>Act with integrity;</li>
                    <li>Act with due skill, care and diligence;</li>
                    <li>Observe proper standards of market conduct;</li>
                    <li>Deal with the FSC and other regulators in an open and co-operative way; and</li>
                    <li>Disclose appropriately any information of which the FSC would reasonably expect notice;</li>
                    <li>Take reasonable steps to ensure that the regulated business of the company is organized so that it can be controlled effectively;</li>
                    <li>Is of financial soundness;</li>
                    <li>Reports to the Board;</li>
                    <li>Is aware of emerging regulatory issues.</li>
                </ul>
                <p>Compliance mode culture along with a values-led culture within the Company will together create a symbiotic relationship to a full Compliance Programme. Implementation of appropriate Risk Controls will also be more effective built on Trust and not if the GRC Officer/Responsible is seen as an enforcer, opportunist or snitch. Personal Integrity forms part of the fundamental aspects of a good compliance model. The objective is the same - a successful company that observes the relevant codes of practice.</p>
                <p>Reports regarding the Risk Classification, Expired or Missing KYC, PEPs, etc., are generated on a regular basis, in order to keep timely and updated information, which can be provided to the relevant stakeholders, and authorities at short notice.</p>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">2. Risk Based Approach</h4>
                <p>A risk-based approach requires us to assess the risks of how we might be involved in ML and TF, taking into account clients, countries or geographic areas, the products, services and transactions the clients offer or undertake, and the delivery channels by which those products, services and/or transactions are provided. The following are procedural steps to manage the ML and TF risks, according to the FSC AML CFT Handbook 2020, Updated on 21 September 2022 -</p>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.1. Identifying the Risk</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Identifying the specific threats posed to the Company by ML and TF and those areas of the Company’s business with the greatest vulnerability;</li>
                        <li>A periodic review of clients’ existing activities should be conducted using the necessary and available means;</li>
                        <li>The Company and client’s risk is reviewed whilst taking into account that the problem may also be considered as an opportunity.</li>
                    </ul>
                    <p className="mt-4">My Investment Markets’ MLRO and CO may have the further following queries:</p>
                    <ul className="list-[circle] pl-6 mt-2 space-y-1">
                        <li>a) Are we tracking changes on beneficial owners over time?</li>
                        <li>b) Are we completing our periodic screening using CDD tools?</li>
                        <li>c) Did we check the FSC recommended Sanctions and PEP lists and any other Public Records Data Sources?</li>
                        <li>d) Are the financial transactions in accordance with the business plan and the contracts in place?</li>
                        <li>e) Are transactions being thoroughly monitored?</li>
                        <li>f) Is the risk related to Market Abuse?</li>
                        <li>g) Is data destruction properly managed? Both physical and digital?</li>
                        <li>h) Is training in place for both initial and knowledge update, to all staff members, to ensure that policies and procedures regarding ML and TF are being strictly followed?</li>
                        <li>i) Are the policies read and understood by all staff members?</li>
                        <li>j) Are the authority limits clear?</li>
                        <li>k) Is the business plan verified against the business transactions / operations on a regular basis?</li>
                        <li>l) If the above conflicts with the actual operations, are the necessary procedures in place to ensure updating of the business plan with the relevant submission to the authorities?</li>
                    </ul>
                    <p className="mt-4">In the case of card-based products for Electronic Funds Transfer, the application of the ACI product – Proactive Risk Manager is in place.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.2. Assessing the Risk</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Assessing the likelihood of those threats occurring and the potential impact of them on the Company;</li>
                        <li>All changes to the activities from both the original activities and from the original business plan are to be reviewed and graded;</li>
                        <li>The assessment of risk should be completed independently from the Senior Management of the client companies;</li>
                        <li>The current legislation and the adherence to the same will form part of the compliance risk. Any mitigating factors will be considered when reviewing the risk profile;</li>
                        <li>The problem or opportunity may be able to generate alternative solutions – these should be considered when assessing the risk.</li>
                    </ul>
                    <p className="mt-4">The client product needs to be reviewed for changes over a period of time and how this impact (if at all) the risk profile of the client.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.3. Mitigating the Risk</h5>
                    <p>Mitigating the likelihood of occurrence of identified threats and the potential for damage to be caused, primarily through the application of appropriate and effective policies, procedures and controls.</p>
                    <p className="mt-2">Examples of mitigating measures:</p>
                    <ul className="list-[circle] pl-6 mt-2 space-y-1">
                        <li>a) The application of additional elements of enhanced due diligence;</li>
                        <li>b) The introduction of enhanced relevant reporting mechanisms or systematic reporting of financial transactions;</li>
                        <li>c) The limitation of business relationships or transactions with natural persons or legal entities from the countries identified as high-risk countries.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.4. Managing the Risk</h5>
                    <p>Managing the residual risks arising from the threats, and vulnerabilities that the Company has been unable to mitigate. The risk assessment of Clients shall initially be conducted manually by making use of the Risk Assessment Methodology, developed in-house. All risk factors shall be summed up (each one has an assigned risk rate/score) in order to provide us with the final Client’s risk rate / score and classification.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.5. Reviewing and Monitoring the Risk</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Reviewing and monitoring those risks to identify whether there have been any changes in the threats posed to the Company which necessitate changes to its policies, procedures and controls.</li>
                        <li>Once the risk has been assessed, the inherent risks reviewed, the mitigating factors considered, the residual risk is then at hand. An action plan is put in place for execution under a supervision of compliance. The follow-up and review should be at regular intervals depending on the nature of the transactions or business under review. The monitoring reviews should be documented.</li>
                        <li>The client along with the business manager need to closely manage the associated risks and should be encouraged to work within guidelines proposed.</li>
                    </ul>
                    <p className="mt-4">My Investment Markets’ Compliance and Risk Officer will ask the following questions:</p>
                    <ul className="list-[circle] pl-6 mt-2 space-y-1">
                        <li>a) Is pattern detection in place?</li>
                        <li>b) Are there periodic BRAs, clients risk assessments (CRAs), third-party reliance risk assessments, etc., reviews which may further implicate the risks of the Company? and</li>
                        <li>c) If so, are those periodic reviews being completed and properly documented?</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.6. Advising on the Risk</h5>
                    <p>Evaluating alternatives and selecting a solution may be done by ensuring the staff members put forward the problems:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 marker:text-[#ef4444]">
                        <li>Persistently and in pursuit of common goals;</li>
                        <li>With rational persuasion, a consultative approach, a positive exchange and in collaboration with the departments concerned;</li>
                        <li>The staff members should be encouraged to refrain from legitimization, pressure, ingratiation and personal or emotional appeals;</li>
                        <li>Market Efficiency need to be assessed against Social Justice - ➢ The DOCUMENTATION on the Risk advice needs to be comprehensive and more specifically documented WHY the risk profile has increased / decreased or requires reporting. Emails, operational and Board minutes as well as bank transfers and statements may all be used in the documentation trail. Formal Board minutes are not the only method of documentation. ➢ A business Conduct Committee may be established depending on the volume of high-risk clients identified and who should work within the Policy Documents provided.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.7. Reporting the Risk</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>If the risk needs to be reported to the Board, has this been done properly and documented after following the above steps?</li>
                        <li>Have the appropriate corrective measures been taken to monitor and contain the risk?</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">3. Business Risk Assessment (BRA)</h4>
                <p>The Business Risk Assessment considers the extent of the Company’s exposure to risk. Identifying areas where the Company’s services could be exposed to the risks of ML and TF, and taking appropriate steps to ensure that any identified risks are managed and mitigated, are crucial aspects of a risk-based approach.</p>
                <p>Section 17(2) of the FIAMLA requires businesses to assess 6 key areas when undertaking the BRA, amongst other risk factors:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>The nature, scale and complexity of the Company’s activities;</li>
                    <li>The products and services provided by the Company;</li>
                    <li>The persons to whom and the manner in which the products and services are provided;</li>
                    <li>The nature, scale, complexity and location of the client’s activities;</li>
                    <li>Reliance on third parties for elements of the customer due diligence process; and</li>
                    <li>Technological developments and reliance on the same.</li>
                </ul>
                <p>The Company shall record and document its risk assessment in order to be able to demonstrate its basis. The assessment shall be regularly reviewed and amended to keep it up to date.</p>
                <p>The BRA Policy and the BRA Report are set to be reviewed annually as part of the Company’s operations, or when changes within the Company, as well as changes in the respective Regulations and Acts take place. The same shall be included in the Board Report, so that evidences that an appropriate review has taken place.</p>
                <p>The BRA Policy and the BRA Report shall address and cover the following not only the inherent risks of the Company, but the residual risks after applying mitigating controls of the latter.</p>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">4. Customer Risk Assessment (CRA)</h4>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>The CRA must be conducted before establishing a business relationship or carrying out transaction, with or for, the client. This will allow us to verify the risk of ML / TF regarding our clients, transactions, etc., beforehand.</li>
                    <li>This Assessment needs to be documented in order to be able to demonstrate its basis.</li>
                </ul>
                <p>This risk assessment will let us determine the following:</p>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>a) The extent of identification information to be sought;</li>
                    <li>b) Any additional information that needs to be requested;</li>
                    <li>c) How that information will be verified;</li>
                    <li>d) The extent to which the relationship will be monitored on an ongoing basis.</li>
                </ul>
                <p>It should be noted that the FSC has no objection to a financial institution having higher risk clients, provided that they have been adequately risk assessed and any mitigating factors documented.</p>
                <p>When the client is assessed as presenting a higher risk, Enhanced Due Diligence must be obtained.</p>
                <p>A basic Risk Assessment will consist of the following processes:</p>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>a) Collecting information;</li>
                    <li>b) Assessing and evaluating;</li>
                    <li>c) Determining initial risk rating;</li>
                    <li>d) Collecting additional information and documentation;</li>
                    <li>e) Assessing and evaluating additional information and documentation;</li>
                    <li>f) Confirming risk rating;</li>
                    <li>g) Conducting on-going due diligence.</li>
                </ul>
                <p>The Customer Risk Assessments (including Third-party Service Providers) frequency shall be as follows:</p>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>a) At least once, annually for higher risk customers / entities (or those that make part of a group structure where any entity is rated high risk);</li>
                    <li>b) At least every 2 years, for medium-risk customers / entities (or those that make part of a group structure where any entity is rated medium risk);</li>
                    <li>c) At least every 3 years, for low-risk customers / entities (or those that make part of a group structure where any entity is rated low risk);</li>
                    <li>d) At the point of a material change in customer’s profiles or circumstances, for example, establishing connections with a higher risk jurisdiction or engaging in a higher risk business.</li>
                </ul>
                <p>Risk Assessment Factors Taken into Consideration:</p>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>a) The nature, scale, complexity and location of the client’s activity;</li>
                    <li>b) The services / products provided by the client, and to whom the same is provided to;</li>
                    <li>c) The involvement of third-parties in the client’s activity;</li>
                    <li>d) Location - Individuals, business entities or organizations that are located in any country or territory or doing business with a country or territory that is featured from time to time on any Sanctions Lists or the list of Business from Sensitive Sources will automatically be rated as high risk;</li>
                    <li>e) Political exposure of the Beneficial Owner or Beneficiary of the Corporate Client (Legal Arrangement / Legal Body / Entity);</li>
                    <li>f) Commercial rationale for the relationship;</li>
                    <li>g) The nature and value of assets concerned in the relationship;</li>
                    <li>h) The Client’s Source of Funds and where necessary the source of wealth;</li>
                    <li>i) Powers of Attorney;</li>
                    <li>j) Bearer Shares;</li>
                    <li>k) Status of Litigation - Although the Company anticipates that most client relationships will not be litigious, it recognises that where litigation is pending, threatened or current, additional management attention and focus is warranted. As such, higher risk scores are associated with these litigation categories;</li>
                    <li>l) Investments - Types and Asset Value.</li>
                </ul>
                <p>Risk Factors taken into consideration when identifying the level of TF risk associated with a country or territory included:</p>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>a) Is there information (for example, from law enforcement or credible and reliable open media sources) suggesting that a country or territory provides funding or support for terrorist activities or that groups committing terrorist offences are known to be operating in the country or territory?</li>
                    <li>b) Is the country or territory subject to financial sanctions, embargoes or measures that are related to terrorism, financing of terrorism or proliferation issued by, for example, the UN or the EU?</li>
                </ul>
                <p>Risk factors that the Company can consider when identifying the risk associated with the level of predicate offences to ML in a country or territory include:</p>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>a) Is there information from credible and reliable public sources about the level of predicate offences to ML in the country or territory, for example, corruption, organised crime, tax crime and serious fraud? Examples include corruption perceptions indices; OECD country reports on the implementation of the OECD’s anti-bribery convention; and the UN Office on Drugs and Crime World Drug Report.</li>
                    <li>b) Is there information from more than one credible and reliable source about the capacity of the countries or the territories’ investigative judicial system effectively to investigate and prosecute these offences?</li>
                </ul>
            </div>
        </section>

        <hr className="border-white/10 my-16" />

        {/* PART III */}
        <section className="mb-16 space-y-10">
            <div className="mb-10">
                <h2 className="text-4xl font-display font-bold text-white mb-2 text-[#ef4444]">PART III</h2>
                <h3 className="text-2xl font-display font-bold text-white">CUSTOMER DUE DILIGENCE (CDD)</h3>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">1. Identification and Verification</h4>
                <p>A key element of the prevention of money laundering and combating the financing of terrorism is the capability of the Company to identify its customers, and their beneficial owners, and then verify their identities.</p>
                <p>My Investment Markets undertakes the following CDD measures:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>Identifying and verifying the identity of each applicant for business;</li>
                    <li>Identifying and verifying the identity of individuals connected to the account or transaction, such as the customer’s beneficial owner(s);</li>
                    <li>Identify all natural persons who ultimately have a controlling ownership interest in the customer;</li>
                    <li>Where there is doubt as to whether the person with the controlling ownership interest is the beneficial owner or where no natural person exerts control through ownership interests, the identity of the natural person exercising control of the legal person through other means as may be specified by relevant regulatory body or supervisory authority; and</li>
                    <li>Where no natural person is identified, the identity of the natural person who holds the position of senior managing official;</li>
                    <li>Obtaining information on the purpose and intended nature of the business relationship (the inability for employees to understand the commercial rationale for business relationship may result in the failure to identity non commercial and therefore potential money laundering and financing of terrorism activity);</li>
                    <li>Conducting ongoing due diligence on the business relationship and scrutiny of transactions throughout the course of that relationship, to ensure that the transactions in which the client is engaged are consistent with the Company’s knowledge of the customer and its business and risk profile (including the source of funds);</li>
                    <li>Achieving each of the above measures by using reliable, independently sourced documents, data or information (this is intended through the use of commercial databases and public information); and</li>
                    <li>Ensuring that all material collected under the CDD process is kept relevant and up to date (for example undertaking reactive reviews in response to trigger events, and by undertaking regular planned reviews of existing records at intervals determined by risk rating, with higher risk customers warranting more frequent reviews);</li>
                    <li>Determining whether the applicant for the business is acting on behalf of a third-party. If that’s the case, the it must keep a record setting out the following:
                        <ul className="list-[circle] pl-6 mt-2 space-y-1">
                            <li>a) The identity of the third-party (and any beneficial owners or associated persons as required);</li>
                            <li>b) The proofs of identity required under Regulation 3 of the FIAML Regulations 2018; and</li>
                            <li>c) The relationship between the third-party and the applicant for business.</li>
                        </ul>
                    </li>
                    <li>Where the Company is unable to determine whether the applicant is acting for a third-party or not, make a Suspicious Transaction Report (STR), pursuant to Section 14 of the FIAMLA to the Financial Intelligence Unit (FIU).</li>
                </ul>
                <p>Any person, who knowingly provides any false or misleading information to a reporting person in connection with CDD requirements or any guidelines issued under the FIAMLA, shall commit an offence and shall, on conviction, be liable to a fine not exceeding 500,000 rupees and to imprisonment for a term not exceeding 5 years.</p>
                <p>In order to start a business relationship and conduct a thorough and successful due diligence check on clients, the appropriate KYC complete documentation needs to be filed and kept up to date.</p>
                
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <p><strong>• Necessary KYC documentation / data for Natural Persons</strong></p>
                    <p className="mt-2 italic">➢ Data</p>
                    <ul className="list-[circle] pl-6 mt-1 space-y-1">
                        <li>a) Legal Name (the full legal and any other names, including, marital name, former legal name or alias);</li>
                        <li>b) Sex;</li>
                        <li>c) Date of birth;</li>
                        <li>d) Place of birth;</li>
                        <li>e) Nationality;</li>
                        <li>f) Current residential address (PO Box addresses are not acceptable);</li>
                        <li>g) Permanent residential address (if different than above);</li>
                        <li>h) Any public position held and, where appropriate, nature of employment and name of employer;</li>
                        <li>i) Government issued personal identification number or other government issued unique identifier;</li>
                        <li>j) Tax Identification Number (if applicable/available).</li>
                    </ul>
                    <p className="mt-2 italic">➢ Documentation</p>
                    <ul className="list-[circle] pl-6 mt-1 space-y-1">
                        <li>a) Current valid Passport / National Identity Card (the document must incorporate photographic evidence of identity); or</li>
                        <li>b) Current valid Driving Licence (where the financial Institute is satisfied that the driving licensing authority carries out a check on the holder’s identity before issuing the licence – the document must incorporate photographic evidence of identity);</li>
                        <li>c) A recent (within the last 3 months) utility bill issued to the individual by name – as Proof of current or permanent residential address; or</li>
                        <li>d) A recent bank / credit card statement; or</li>
                        <li>e) A recent bank Reference.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <p><strong>• Necessary KYB documentation / data for Private companies, Partnerships, Sociétés, Foundations, Trusts and other legal persons</strong></p>
                    <p className="mt-2 italic">➢ Data</p>
                    <ul className="list-[circle] pl-6 mt-1 space-y-1">
                        <li>a) Legal status of body;</li>
                        <li>b) Legal name of body;</li>
                        <li>c) Any trading names;</li>
                        <li>d) Nature of business;</li>
                        <li>e) Date and country of incorporation / registration;</li>
                        <li>f) Official identification number (e.g. company number);</li>
                        <li>g) Registered office address;</li>
                        <li>h) Mailing address (if different);</li>
                        <li>i) Principal place of business / operations (if different);</li>
                        <li>j) Ownership and control structure;</li>
                        <li>k) The identity of all the natural persons who ultimately have an ownership interest;</li>
                        <li>l) For trusts, the identity of the settlor, the trustee, the beneficiaries or class of beneficiaries, and where applicable, the protector or the enforcer, and any other natural person exercising ultimate effective control over the trust, including through a chain of control or ownership;</li>
                        <li>m) Bank Account details;</li>
                        <li>n) Tax Identification Number (if applicable/available).</li>
                    </ul>
                    <p className="mt-2 italic">➢ Documentation</p>
                    <ul className="list-[circle] pl-6 mt-1 space-y-1">
                        <li>a) Certificate of Incorporation (or other appropriate certificate of registration or licensing);</li>
                        <li>b) Memorandum and Articles of Association (or equivalent);</li>
                        <li>c) UBO & Shareholder registry (or equivalent);</li>
                        <li>d) Director Registry (or equivalent);</li>
                        <li>e) Latest Audited Financial Statements (if available);</li>
                        <li>f) Annual report or equivalent (if available);</li>
                        <li>g) Partnership deed or equivalent;</li>
                        <li>h) Trust Deed or equivalent instrument;</li>
                        <li>i) Charter of Foundation;</li>
                        <li>j) Acte de Société.</li>
                    </ul>
                </div>

                <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-[#ef4444]">
                    <li><strong>Provision for actions to be taken in the event of incomplete CDD</strong>: After verifying the identity of the client and if there is no adverse information regarding the same, additional KYC is requested from the client so that the registering process may be finalised. The Registering process may not be completed before the full KYC is provided. In the event the client does not provide all the necessary KYC there will not be a business relationship with the client or the client account shall be disabled (for old / existing accounts) until the complete KYC set has been provided.</li>
                    <li><strong>Provisions for actions to be taken in the event the Beneficial Owner (BO) cannot be identified, where the client is a Private company, Partnership, Société, Foundation, Trust and other legal persons</strong>: In case the client is a legal person, the Company shall identify and take reasonable measures to verify the identity of the BOs by obtaining information on the following:
                        <ul className="list-[circle] pl-6 mt-2 space-y-1">
                            <li>a) The identity of all the natural persons who ultimately have a controlling ownership interest in the legal person;</li>
                            <li>b) Where there is doubt under the above paragraph (a), as to whether the person with the controlling ownership interest is a BO or where no natural person exerts control through ownership interests, the identity of the natural person exercising control of the legal person through other means as maybe specified by relevant regulatory body or supervisory authority; and</li>
                            <li>c) Where no natural person is identified under subparagraph (a) and (b), the identity of the natural person who holds the position of Senior Managing Official;</li>
                            <li>d) In case none of the above can be determined, the on-boarding process shall not take place.</li>
                        </ul>
                    </li>
                </ul>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">1.1. Procedures for Certification KYC Documentation</h5>
                    <p>Where the Company relies upon verification of identity documentation that is not in an original form, the documentation must be appropriately certified as true copies of the original documentation.</p>
                    <p>Where an employee of the Company meets an applicant for business or the principals thereof face-to-face and has access to original verification of identity documentation, he or she may take copies of the verification of identity documentation and certify them personally as true copies of the original documentation. In other cases, copies of the verification of identity documentation can be certified by a suitable person, such as an attorney, a lawyer, a notary, an actuary, an accountant or any other person holding a recognised professional qualification, director or secretary of a regulated financial institution in Mauritius or meets the FATF’s standards, a member of the judiciary or a senior civil servant.</p>
                    <p>The certifier should sign the copy document and clearly indicate the date of certification, his or her name, address and position or capacity on it together with contact details to facilitate tracing of the certifier and, where available, any registration number with any professional body.</p>
                    <p>The above list of suitable certifiers is not intended to be exhaustive and the Company should exercise due caution when considering certified copy documents, especially where such documents originate from a country perceived to represent a high risk or from unregulated entities in any jurisdiction.</p>
                    <p>Where certified copy documents are accepted, it is the Company’s responsibility to ensure that the certifier is appropriate. In all cases, the Company should also ensure that the clients’ signature on the identification document matches the signature on the application form, mandate or other document.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">1.2. Procedures for Electronic Identification and Verification Reliance</h5>
                    <p>Where the Company adopts a system providing for the electronic verification of natural person identity, the Company shall test the reliance and effectiveness of the results provided by the system in place and report its results to the Board as part of the Annual BRA Report. The system shall be tested periodically as per stated on the Company’s BRA Policy.</p>
                    <p>My Investment Markets shall take into consideration any additional risks posed by placing reliance on an electronic method or system.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">1.3. Procedures for the Acquisition of a Block of Clients or a Business</h5>
                    <p>In the event that the Company takes on a business which has established business relationships or a block of clients, the Company shall undertake sufficient enquiries to determine:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 marker:text-[#ef4444]">
                        <li>Whether the business’s CDD policies, procedures, controls and systems are in line with current AML / CFT legislative requirements; and</li>
                        <li>The level and the appropriateness (having regard to risk) of identification data held in relation to the clients and business relationships which are to be acquired.</li>
                    </ul>
                    <p>In deciding whether to acquire the business, My Investment Markets may rely on the identification data held where:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 marker:text-[#ef4444]">
                        <li>The business relationships were established in jurisdictions that have equivalent AML / CFT legislation or meets the FATF Standards;</li>
                        <li>The business’ CDD policies, procedures and controls are in line with the AML / CFT legislative framework; and</li>
                        <li>The Company has obtained identification data for each client acquired.</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">2. Simplified CDD</h4>
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.1. Situations on which Simplified CDD can be applied</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Where the risk of Money Laundering (ML) or Financing of Terrorism (TF) is lower;</li>
                        <li>Where information on the identity of the applicant for the business is publicly available; or</li>
                        <li>Where adequate checks and controls exist elsewhere in the national systems;</li>
                        <li>Where there is a low level of risk, it shall be ensured that the low risk identified is consistent with the findings of the national risk assessment or any risk assessment carried out, whichever is most recently issued.</li>
                    </ul>
                </div>
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">2.2. Situations on which Simplified CDD must not be applied</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Where the Company knows, suspects or has reasonable grounds for knowing or suspecting that a customer or applicant for a business is engaged in ML/TF; or</li>
                        <li>Where Transactions being conducted by the customer or applicant for business is being carried out on behalf of another person engaged in Money Laundering; or</li>
                        <li>Where there are other indicators of ML/TF risk.</li>
                    </ul>
                </div>
                <p><strong>Important Aspects</strong></p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>The Company must document the decision of adopting the Simplified measures in respect of a customer or applicant for a business. This must be done in a manner which explains the factors which it took into account and its reasons for adopting the measures in question; and</li>
                    <li>Keep the relationship with the customer or applicant under review, and operate appropriate policies, procedures and controls for doing so;</li>
                    <li>The Company must keep the client risk assessment up to date and review the appropriateness of CDD obtained even if Simplified CDD measures are adopted.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">3. Enhanced Due Diligence (EDD)</h4>
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">3.1. Where to perform EDD</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>A higher risk of ML/TF has been identified;</li>
                        <li>Where through supervisory guidance a high risk of ML/TF financing has been identified;</li>
                        <li>Where a client or an applicant is from a high-risk third country;</li>
                        <li>Where business relations, and transactions and persons established in jurisdictions that do not have adequate systems in place to combat ML/TF;</li>
                        <li>Where the client or the applicant is a PEP (Political Exposed Person);</li>
                        <li>Where the individual or entity is named on a Sanctions List;</li>
                        <li>Where it has been determined that the client has provided false or stolen identification documentation or information and the reporting person proposes to continue to deal with that customer;</li>
                        <li>In the event of unusual or suspicious activity.</li>
                    </ul>
                    <p className="mt-4">My Investment Markets implemented EDD procedures with respect to high-risk persons, business relations and transactions and persons established in jurisdictions that do not have adequate systems in place to combat ML and TF.</p>
                </div>
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">3.2. EDD measures that may apply for higher risk business relationships</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Requesting additional information on the client (e.g. occupation, volume of assets, information available through public databases, internet, etc.), and updating on a frequent basis the identification data of the customer and or the beneficial owner;</li>
                        <li>Obtaining additional information on the intended nature of the business relationship and the source of funds / wealth;</li>
                        <li>Obtaining information on the intended or performed transactions;</li>
                        <li>Obtaining the approval of senior management to commence or continue the business relationship where the client or applicant is classified as high risk;</li>
                        <li>Conducting enhanced monitoring of the business relationship, by increasing the number and timing of controls applied, and selecting patterns of transactions that need further examination;</li>
                        <li>Requiring the first payment to be carried out through an account in the client’s name with a bank subject to similar CDD standards;</li>
                        <li>Any other measures a financial institution may undertake with relation to a high-risk relationship.</li>
                    </ul>
                </div>
                <p><strong>Important Aspects</strong></p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>In case the reporting person is unable to perform EDD where required under Section 12 of the FIAML Regulations 2018, the business relationship shall be terminated and an STR shall be filed according to Section 14 of the FIAMLA;</li>
                    <li>The reporting person shall include the beneficiary of a life insurance policy as a relevant risk factor when determining whether EDD measures are required;</li>
                    <li>Where a reporting person determines that the beneficiary who is a legal person or a legal arrangement presents a higher risk, the reporting person shall take EDD measures which shall include reasonable measures to identify and verify the identity of the BO of the beneficiary at the time of payout;</li>
                    <li>The Company must keep and maintain customer relationship information with respect to all its clients as detailed in the CDD measures listed above. This includes scrutinizing the source of funds and the source of wealth, as described below:
                        <ul className="list-[circle] pl-6 mt-2 space-y-2">
                            <li><strong>a) Source of Funds (SOF)</strong><br/>
                            The source of funds refers to the origin of the particular funds or assets, which are the subject of the business relationship between the Company and its client and the transactions the Company is required to undertake on the client’s behalf. The Source of funds requirement refers to where the funds are coming from in order to fund the relationship or transaction. This does not refer to every payment going through the account; however, the Company must ensure it complies with the ongoing monitoring provisions.<br/>
                            The Source of Funds shall be required as follows:<br/>
                            ➢ When a Client (Natural Person) reaches / exceeds the total Transaction Amount of USD 10,000.00;<br/>
                            ➢ When a Client (Corporate / Entity / Trust / Legal Body) exceeds the total Transaction Amount of USD 25,000.00.
                            </li>
                            <li><strong>b) Source of Wealth</strong><br/>
                            The source of wealth on the other hand, describes the origins of a customer’s financial standing or total net worth, i.e. activities which have generated a customer’s funds and property. A financial institution is required to hold sufficient information to establish the source of wealth and this information must be obtained for all higher risk customers (including higher risk domestic PEPs) and all foreign PEPs and all other relationships where the type of product or service being offered makes it appropriate to do so because of its risk profile.<br/>
                            The Source of Wealth shall be required as follows:<br/>
                            ➢ When a Client (Natural Person) reaches / exceeds the total Transaction Amount of USD 15,000.00;<br/>
                            ➢ When a Client (Corporate / Entity / Trust / Legal Body) exceeds the total Transaction Amount of USD 25,000.00.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">4. Politically Exposed Persons (PEPs)</h4>
                <p>PEPs are individuals who are or who have been entrusted with prominent public functions (e.g. Heads of State or of Government, Senior Politicians, Senior Government, Judicial or Military Officials, Senior Executive of State-owned Corporations and important Political Party Officials) in foreign, domestic and international organisation PEP, as well as family members and close associates of such person.</p>
                <p>Business relationships with PEPs pose a greater than normal money laundering risk to financial institutions, by virtue of the possibility for them to have benefitted from proceeds of corruption, as well as the potential for PEPs (due to their offices and connections) to conceal the proceeds of corruption or other crimes.</p>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">4.1. Procedures Applicable to Foreign PEPs</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Put in place and maintain appropriate risk management systems to determine whether the client or beneficial owner is a PEP;</li>
                        <li>Obtain Senior Management / Board of Directors approval before establishing or continuing, for existing clients, such business relationships;</li>
                        <li>In the event of existing clients, Board of Directors / Senior Management shall decide whether the existing business relationship has to be terminated or not, according to the risk classification and all different aspects surrounding the risk classification of the PEP Client;</li>
                        <li>Obtain similar approval from senior management in cases of family members or close associates of PEPs;</li>
                        <li>Take reasonable measures to establish the source of wealth and the source of funds of clients and beneficial owners identified as PEPs; and</li>
                        <li>Conduct enhanced ongoing monitoring on that relationship.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">4.2. Procedures Applicable to Domestic PEPs or an International Organisation PEP</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Take reasonable measures to determine whether a client or the beneficial owner is such a person; and</li>
                        <li>In cases when there is higher risk business relationship with a domestic PEP, adopt the measures in paragraphs on Point “4.1.”.</li>
                    </ul>
                </div>

                <p><strong>Important Aspects</strong></p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>A reporting person shall apply the relevant requirements of paragraphs “4.1 and 4.2” to family members or close associates of all types of PEP, as may be specified by a supervisory authority or regulatory body after consultation with the National Committee.</li>
                    <li>A reporting Person shall, in relation to life insurance policies, at any time but before the time of payout, take reasonable measures to determine whether the beneficiaries or the beneficial owner of the beneficiary, are PEPs, provided that where higher risks are identified, the reporting person shall:
                        <ul className="list-[circle] pl-6 mt-2 space-y-1">
                            <li>a) Inform senior management before the payout processed;</li>
                            <li>b) Conduct enhanced scrutiny on the whole business relationship with the policyholder; and</li>
                            <li>c) Consider making a suspicious transaction report.</li>
                        </ul>
                    </li>
                </ul>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">4.3. Defining “Family Members”</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>It means an individual who is related to a PEP either directly through consanguinity, or through marriage or similar civil forms of partnership; and</li>
                        <li>It includes any other person as may be specified by a supervisory authority or regulatory body after consultation with the National Committee.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">4.4. Defining “Close Associates”</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>It means an individual who is closely connected to a PEP, either socially or professionally; and</li>
                        <li>It includes any other person as may be specified by a supervisory authority or regulatory body after consultation with the National Committee.</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">5. Third-Party Reliance</h4>
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">5.1. Risk Assessment on third-parties</h5>
                    <p>When reliance is placed on a third party to introduce business or to perform CDD measures, the following may be considered:</p>
                    <ul className="list-[circle] pl-6 mt-2 space-y-1">
                        <li>a) Consider how reliance on third parties is prompted and agreed on;</li>
                        <li>b) Consider who these third parties are, including any reputational issues, the quality of relationships with such third parties and previous experiences;</li>
                        <li>c) Consider the extent and type of any reliance placed or to be placed on third parties;</li>
                        <li>d) Consider the extent of the information being provided by the third party and who has actually met the same face-to face (chains of information);</li>
                        <li>e) Consider any jurisdictional issues in connection with reliance placed on third parties;</li>
                        <li>f) Consider the results of any testing undertaken on the third party’s procedures and the responses to any previous requests for documentation;</li>
                        <li>g) Consider the extent of any outsourcing undertaken;</li>
                        <li>h) Consider the quality of the provider for any outsourced functions including any reputational issues, previous experiences with the provider, the results of any audits, assessments or inspections where the material generated as a result of outsourcing has been reviewed.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">5.2. Procedures to be satisfied regarding reliance on third-parties</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>There must have a signed agreement between the fund or its administrator and the relevant third party, in which the third-party consents to being relied upon for these purposes and undertakes;</li>
                        <li>Where reliance is placed on a third party for elements of CDD, the Company must ensure that the identification information sought from the third party is adequate and accurate;</li>
                        <li>The CDD information has to be submitted immediately upon onboarding, although the documents can be provided upon request at a later date;</li>
                        <li>The third party will provide, immediately upon request, relevant copies of identification data in accordance with Regulation 21(2)(b) of the FIAML Regulations 2018; and</li>
                        <li>The quality of the third party’s CDD measures is such that it can be relied upon;</li>
                        <li>Where such reliance is permitted, the ultimate responsibility for CDD measures will remain with the financial institutions relying on the third party;</li>
                        <li>Reliance may only be placed on third parties to carry out CDD measures in relation to the identification and verification of a client's identity and the establishment of the purpose and intended nature of the business relationship;</li>
                        <li>Reliance may be placed on a third party that is part of the same financial group, where: a) The group applies CDD and record keeping requirements and programmes against ML/TF; b) The implementation of those CDD and record-keeping requirements and programmes against money laundering and terrorism financing is supervised at a group level by a competent authority; and c) Any higher country risk is adequately mitigated by the group’s policies to combat money laundering and terrorism financing.</li>
                        <li>Third parties may not be relied upon to carry out the ongoing monitoring of dealings with a client, including identifying the source of wealth or source of funds;</li>
                        <li>A financial institution may not rely on a third party based in a high-risk country.</li>
                    </ul>
                    <p>The FSC recommends that regular assurance testing is carried out in respect of the third-party arrangements, to ensure that the CDD documents can be retrieved without undue delay and that the documentation received is sufficient pursuant to section 17(2)(v) of the FIAMLA.</p>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">5.3. Third-Party Introducers</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Financial institution should subject third-party introducers to the full identification and verification CDD measures for identification and verification as provided under the FIAML Regulations 2018.</li>
                        <li>In line with the third-party reliance obligations, when individual applicants, or applicants which are body corporate, are introduced to a financial institution by an introducer, the Company should:
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Obtain and maintain documentary evidence that the introducer is regulated for the purposes of preventing money laundering and terrorist financing; and</li>
                                <li>b) Be satisfied that the procedures laid down by the introducer meet the requirements specified in the FIAMLA and FIAML Regulations 2018.</li>
                            </ul>
                        </li>
                    </ul>
                    <p>The Company’s Board of Directors or equivalent Senior Management will ensure that periodic testing of the above arrangements is conducted, in order to ensure compliance with the current legislative framework with respect to the above provision.</p>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">6. Targeted Financial Sanctions (TFS)</h4>
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">6.1. Screening</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Clients and transactions are screened against the required sanctions lists in 2 different ways:
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Using an automated screening tool;</li>
                                <li>b) Manually – this is done by accessing the publicly available lists, which can be downloaded from the UN, FIU or the NSSEC websites.</li>
                            </ul>
                        </li>
                        <li>Documentation to evidence that clients and transactions have been screened has to be kept;</li>
                        <li>The focus should not only be on the names of persons and entities listed on UN sanctions lists, but also identify the persons and entities linked to them;</li>
                        <li>Each incoming and outgoing transaction should similarly be screened for a potential match with sanctions lists. Screening should be focused at a point in the transaction where detection of sanctions risk is actionable – where a transaction can be stopped and funds frozen if required – and before a potential violation occurs.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">6.2. Matches and Escalation</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>An alert that is generated by a potential match might not, on its own, be an indication of sanctions risk. It should act as a trigger which can be confirmed or discounted with additional information gained through further investigation. Adequate records of these investigations have to be maintained.</li>
                        <li>Senior management should be alerted before action taken when identifying a true match and or freezing assets, where it is appropriate.</li>
                        <li>In the event that a true match is identified, the match and any associated asset freezing should be reported immediately to the NSSEC and the FSC. (The reporting template on Positive Match needs to be filed as an Appendix)</li>
                        <li>An STR should be also filed to the FIU.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">6.3. Freezing and Prohibition on dealing with funds and Assets</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>It is required to immediately and without delay freeze the assets of designated persons. In other words, this means ceasing any dealings and securing the funds and other assets, including financial assets and economic resources, that are owned or controlled, directly or indirectly, by the persons or entities designated by the UNSC or the NSSEC. This also encompasses the freezing of funds, other financial assets and economic resources of persons or entities acting on behalf of, or at the direction of, those designated by the UNSC or NSSEC.</li>
                        <li>New freezes are required to be implemented immediately, and without prior notice to the person.</li>
                        <li>The account of any designated person identified as an existing client must not be closed, as this could result in funds or economic resources being made available to the designated person.</li>
                        <li>The obligation to report and freeze extends to attempted as well as future transactions. Where a transaction is attempted and monies or other assets have been passed to a Licensee with a view to completing the transaction, these monies or assets must not be handed back to the entity if the transaction is aborted following a match; and</li>
                        <li>The obligation to freeze covers funds and other assets e.g. non-cash assets such as wills, real estate deeds, boats, jewellery, corporate licenses etc. However, where assets are frozen, there is a requirement to maintain the value of such an asset.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">6.4. Unfreezing</h5>
                    <p>My Investment Markets will be informed of a designation removal or unfreezing order in the same manner that they are informed of a new designation.</p>
                </div>

                <p><strong>Important Aspects</strong></p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>Financial sanctions apply to all clients and all transactions; there is no minimum financial limit.</li>
                    <li>Politically Exposed Persons (PEPs) can be, but are not necessarily designated persons under targeted financial sanction regimes. The requirement to identify clients that are PEPs and the requirement to identify clients that are designated persons for targeted financial sanctions are separate obligations.</li>
                    <li>The targeted financial sanctions regime is not the same as the FSC’s enforcement regime, which sanctions Licensee’s for non-compliance with their AML/CFT and targeted financial sanctions obligations.</li>
                    <li>Freezing and unfreezing assets of designated persons shall take place within 24 Hours of identifying and verifying the related Sanctions, in line with Section 3 & 4 of the United Nations (Financial Prohibition, Arms Embargo and Travel Ban).</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">7. Ongoing Monitoring</h4>
                <p>An existing business relationship is required to be monitored so that money laundering or terrorist financing may be identified and prevented, and to ensure that it is consistent with the nature of business stated at the establishment of the relationship.</p>
                <p>There are two types of ongoing monitoring:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>The first relates to the transactions and activity which occur on a day-to-day basis within a business relationship and which need to be monitored to ensure they remain consistent with the Company’s understanding of the client and the product or service it is providing to the client. a) Scrutiny of transactions undertaken throughout the course of the relationship, including, where necessary, the source of funds, to ensure that the transactions are consistent with his knowledge of the client, and the business and risk profile of the client.</li>
                    <li>The second relates to the clients themselves and the requirement for the Company to ensure that it continues to have a good understanding of its clients and their beneficial owners. This is achieved through maintaining relevant and appropriate CDD and applying appropriate ongoing screening.
                        <ul className="list-[circle] pl-6 mt-2 space-y-1">
                            <li>a) Ensuring that documents data or information collected under the Customer Due Diligence (CDD) process are kept up to date and relevant by undertaking reviews of existing records, in particular for higher risk categories of clients.</li>
                        </ul>
                    </li>
                </ul>
                <p>Examples of the additional monitoring arrangements for high-risk relationships could include:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>Undertaking more frequent reviews of high-risk relationships and updating CDD;</li>
                    <li>Information on a more regular basis;</li>
                    <li>Undertaking more regular reviews of transactions and activity against the profile and expected activity of the business relationship;</li>
                    <li>Applying lower monetary thresholds for the monitoring of transactions and activity;</li>
                    <li>Reviews being conducted by persons not directly involved in managing the relationship, for example, the CO;</li>
                    <li>Ensuring that the Company has adequate MI systems to provide the board and CO with the timely information needed to identify, analyse and effectively monitor high risk relationships and accounts;</li>
                    <li>Appropriate approval procedures for high value transactions in respect of high-risk relationships; and/or a greater understanding of the personal circumstances of high-risk relationships, including an awareness of sources of third-party information.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">8. Transactions</h4>
                <p>Transactions include opening of an account, issuing an account number, renting safe deposit boxes or entering into a fiduciary relationship electronically or otherwise and it also includes a Proposed Transaction.</p>
                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">8.1. Transaction Verification</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>In order to verify a Transaction, the following data is required:
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Name of the Client / Entity;</li>
                                <li>b) Address of Client / Entity;</li>
                                <li>c) Name of Invoicing party;</li>
                                <li>d) Company / Entity registration number;</li>
                                <li>e) Bank Name;</li>
                                <li>f) Bank Address;</li>
                                <li>g) Bank account details.</li>
                            </ul>
                        </li>
                        <li>The Principals of the Contracting parties
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Online searches using AML Manual specified websites, Consolidated United Nations Security Council Sanctions List (UN), European Union Consolidated List (EU), Higher Risk countries identified by FATF; Internet Explorer and Google website search.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">8.2. Suspicious Transactions</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>A suspicious transaction is a transaction where the laundering of money or the proceeds of any crime or funds linked to or related to or being used for terrorism or acts of terrorism by prescribed organizations, whether or not the funds represent the proceeds of a crime itself; and or</li>
                        <li>The transaction is made in circumstances which are unusual or unjustifiably complex; have no economic justification or lawful objective; and or</li>
                        <li>The Transactions are made by or on behalf of a person whose identify cannot be established to the satisfaction of the parties carrying out the instruction; and or gives rise to suspicion for any reason.</li>
                    </ul>
                    <p className="mt-4 font-bold">8.2.1. Suspicion</p>
                    <p>The transacting party may believe that a transaction is suspicious if the transaction involves:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Laundering of money or proceeds of any crime; funds linked or related to terrorism or terrorist activities; unjustifiable complexity; unjustifiable economic or lawful objective; identity cannot be established or any other valid and justifiable reason;</li>
                        <li>The Guidance Note 4 on Suspicious Transaction Report on 21 January 2014 (updated November 2020) to be read in conjunction with this document for relevance of specific examples of indicators of Suspicious Transactions;</li>
                        <li>Examples of Red Flag indicators of a Suspicious Transaction:
                            <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                <li>a) Same day abnormal number of deposits and withdrawals;</li>
                                <li>b) Transaction does not match usual activity patterns or lacks economic substance;</li>
                                <li>c) The Client is secretive or evasive about who they are, the reason for the Transaction or the source of funds.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">9. Suspicious Transactions Report (STR)</h4>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>All staff members are required to submit an STR to the MLRO, when coming across a transaction, client or activity that they consider suspicious and after further examination of the same;</li>
                    <li>The STR shall be passed from the CO to the MLRO, or from the staff member directly to the MLRO;</li>
                    <li>The MLRO shall assess the information contained within the report to determine whether there are reasonable grounds for knowing or suspecting that the activity is related to ML/TF or Proliferation Financing;</li>
                    <li>The MLRO shall forthwith make a report to the FIU where there is reason to believe that an internal disclosure may be suspicious;</li>
                    <li>An internal registry should be kept for STRs that have not been submitted to the FIU; and</li>
                    <li>The internal registry should be updated in a monthly basis, regardless of any suspicious transactions, clients or activities have been flagged or a STR being submitted;</li>
                    <li>An external registry should be kept for STRs that have been submitted to the FIU;</li>
                    <li>A maximum delay of 5 working days is required for the reporting of the STR to the FIU, after the MLRO becomes aware of a suspicious transaction or activity;</li>
                    <li>Where the reporting person becomes aware of a suspicious transaction, or ought reasonably to have become aware of a suspicious transaction, and he/she fails to make a report to FIU of such transaction not later than 5 working days after the suspicion arose, he shall commit an offence and shall, on conviction, be liable to fine not exceeding one million rupees and to imprisonment for a term not exceeding 5 years;</li>
                    <li>A STR can be submitted to the FIU electronically;</li>
                    <li>The STR Form is found under the Manual’s Annexures. It needs to be completed manually and submitted by hand delivery at the reception of the FIU building at 7th Floor, Ebène Heights, 34, Ebène Cybercity, Ebène, Republic of Mauritius, or by facsimile at fax number +230 466 2431;</li>
                    <li>The form proposed by the FIU is very complete and reporting parties are therefore required to complete the form as prescribed, both completely and with sufficient information so that the necessary follow-up and action can take place. The information should include WHO, WHAT, WHEN, WHERE, WHY. (Details thereto are found on the Guidance Notes from the FIU.) Late filings or incomplete filings negate the effectiveness of the law enforcement ability to determine what has transpired and what action is to be taken. To note the Entity Reference Number is key and will be referred to on all investigation and documentation relating to said STR. This ERN will be allocated by the FIU upon receipt and acceptance of the filed STR. The indicator prompting the filing of the STR; the Description of the STR and the Material impact are all part of this form which needs to be filled out prior to filing the STR. Transaction details for advice/guidance, please refer to the FIU Guidance Note 4.</li>
                </ul>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">9.1. Action to be taken</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>Inform a law enforcement agency, or your supervisory body/ regulatory authority;</li>
                        <li>Discontinue the business relationship with the client e.g. closed his/her account;</li>
                        <li>Continue to monitor the client’s account;</li>
                        <li>Commence an internal investigation on the client’s accounts/business;</li>
                        <li>Any other steps taken in addition to reporting the suspicion to the FIU.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-2 border-white/10 mt-4">
                    <h5 className="text-lg font-bold text-white mb-3">9.2. Further action to be taken or information to be supplied</h5>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                        <li>The Director of the FIU may ask for additional information and to note that no action can be taken against the party making the report. However, non-reporting incurs fines and criminal charges;</li>
                        <li>The FIU operates in compliance with the Data Protection Act of 2004 but this Act has been superseded by the DPA of 2018. The Guidance notes should be updated shortly by the FIU and as such the STR procedures will be updated.</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">10. Tipping Off</h4>
                <p>Section 16(1) of the FIAMLA states that no person directly or indirectly involved in the reporting of a suspicious transaction shall inform any person involved in the transaction or an unauthorized third party that the transaction has been reported or that information has been supplied to the FIU pursuant to a request made under section 13(2) or (3) of the FIAMLA. The MLRO should acknowledge receipt of the internal disclosure and at the same time, provide a reminder of the obligation to do nothing that might prejudice enquiries, such as tipping off the customer or any other third party.</p>
                <p>The MLRO should provide guidance on how to avoid tipping off the customer if any disclosure is made.</p>
                <p>If the Company reasonably believes that performing the CDD process will tip off the customer or potential customer, it should stop the CDD process and will need to file a STR with the FIU in such circumstances.</p>
                <p>In the event that the Company (Board of Directors/Senior Management) determine and decide that the Business Relationship with a Client whose STR has been filed should be terminated, the Company shall take into consideration the following points when interacting with the same client:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>It will become apparent to criminals that elements of their criminal activity are known to the Company, if it begins to ask probing questions regarding certain activities or if it seeks to terminate the relationship or decline entering into a business relationship without a meaningful pretext. The Company is therefore encouraged to carefully consider the wording of any statements made to customers explaining their decision; and</li>
                    <li>The more information is included in the STR, the more valuable it will be to the FIU.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">11. Loss of Contact with Client (PEP) or otherwise</h4>
                <p>There could be a situation when there are assets on a client’s account but the contact with such client has been lost. The loss of contact with the client may occur when the client has either deceased and not left any alternate contacts; has moved physical address for personal or business reasons and purposely does leave either forwarding contact details or any means of further contact or simply has been negligent in keeping up to date on his affairs.</p>
                <p>The Client should have already been classified one of low, medium or high risk. In the event the Client is of low or medium risk it is possible that there is no contact with the client within an 11-month period.</p>
                <p>In the event the Client is of High risk or a Politically Exposed Person, there should be regular contact throughout the year and review of the file because of the nature of the client. If the Client is not responding to regular contact methods, the following steps should be taken by the Compliance Officer:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ef4444]">
                    <li>The client shall be contacted via telephone and email. The documentation advising the client of the proceedings of the Company, including fees and other responsibilities may be delivered by the local office to the physical address of the client if known;</li>
                    <li>Although the client may persist in not responding to any of the contact made, a continued annual contact is to be made until such stage as the Company itself is wound up or the Board takes alternative action;</li>
                    <li>Should the client be unreachable within a period of one year, the FSC will be informed accordingly.</li>
                </ul>
                <p>The Board is to review on an annual basis all Client files where the client is no longer responding to any contact and may take further action on the Client as is deemed appropriate taking into account the Business Risk to the Company.</p>
            </div>

            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">12. Examples of Documentary Evidence to be collected to evidence Source of Wealth</h4>
                
                <div className="pl-4 border-l-2 border-white/10 mt-4 space-y-4">
                    <div>
                        <h5 className="text-lg font-bold text-white">12.1. Sales of Securities or other Investment</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Investment/savings certificates, contract notes or statements;</li>
                            <li>Written confirmation from the relevant investment company on letter headed paper</li>
                            <li>Bank statement showing receipt of funds from investment company name; or</li>
                            <li>Signed letter detailing funds from a warranted accountant on letter headed paper.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.2. Sale of Property</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Signed letter from a lawyer or a notary on a letter headed paper; or</li>
                            <li>Contract of Sale.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.3. Maturing Investment or Policy Claim</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Letter from previous investment company on letter headed paper notifying proceeds of claim;</li>
                            <li>Chargeable Event Certificate; or</li>
                            <li>Closing statement.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.4. Individual owns policy/company pays premium</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>A copy of trading details or an annual report from the company’s website (if applicable)</li>
                            <li>Hard copy of the latest annual report; or</li>
                            <li>Copy of the company’s certificate of incorporation (or equivalent); and</li>
                            <li>Policy statement; or</li>
                            <li>Bank statement showing credit.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.5. Dividends or profits from private company</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Dividend contract note;</li>
                            <li>Letter showing dividend details signed by a warranted accountant on letter headed paper</li>
                            <li>Set of company accounts showing the dividends details; or</li>
                            <li>Bank statement clearly showing receipt of funds and the name of the company paying dividend; and</li>
                            <li>A document providing proof of shareholding such as a copy of the Memo & Arts, Certificate of Incumbency or a dated print-out of a company registry search.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.6. Company Sale</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Signed letter from a lawyer on a letter headed paper;</li>
                            <li>Signed letter from a warranted accountant on a letter headed paper;</li>
                            <li>Copy of contract of sale and bank statement showing credit to account consequent to the sale; or</li>
                            <li>Copies of media coverage (where applicable) as supporting evidence.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.7. Inheritance</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>A copy of the will that must include the value of the estate; or</li>
                            <li>A lawyer or notary’s letter on letter headed paper or a letter from the trustees of an estate that includes the type of asset and respective value.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.8. Maturity or redemption or a shareholder’s loan</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Loan agreement;</li>
                            <li>Recent loan statements.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.9. Gift</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Document (e.g. letter from the donor) showing who gave the gift, when, the relationship between the donor and done and (if possible and applicable) why the donation was made, together with the verification of identity of the donor, and information about the source of the donor’s wealth.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.10. Lottery/betting/casino win</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Letter from relevant organisation (lottery, headquarters/betting shop/casino);</li>
                            <li>A certificate of winnings issued by the relevant company or casino;</li>
                            <li>In the case of lottery winnings, a bank statement showing funds deposited by company name; or</li>
                            <li>Copies of media coverage (if applicable) as supporting evidence.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.11. Compensation payment (this could be a decision or award by a court, Tribunal or arbiter or else and out of-court settlement)</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>A letter/court order from a compensating body clearly showing the amount of compensation; or</li>
                            <li>Lawyer’s letter on letter headed paper clearly establishing the amount.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.12. Savings and investment</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Bank Statement/s demonstrating deposit/gifted monies; or</li>
                            <li>Documentation evidencing an inward transfer from portfolio.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.13. Insurance claims</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>A letter from the insurance provider on a letter headed paper.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.14. Divorce or separation settlement</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>A copy of the court order or judicial separation agreement and verification that funds have originated from the account of the former spouse.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.15. Income from employment (including bonus)</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>An original or certified copy of a recent pay slip;</li>
                            <li>Written confirmation of annual salary/bonus amounts signed by employer; or</li>
                            <li>Bank statement clearly showing receipt for most recent regular salary payment from named employer.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.16. Retirement Income</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Pension Statement;</li>
                            <li>Letter from a warranted accountant on letter headed paper;</li>
                            <li>Letter from annuity provider; or</li>
                            <li>Bank statement showing receipt of latest pension income and name of provider.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-white">12.17. Other Monies:</h5>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-400">
                            <li>Appropriate supporting documentation; or</li>
                            <li>Signed letter detailing funds from warranted accountant/lawyer/entity licensed to provide investment services on letter headed paper.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <hr className="border-white/10 my-16" />

        <section className="text-center">
            <h4 className="text-xl font-bold text-white mb-2">My Investment Markets. Ltd.</h4>
            <p className="text-gray-400">EMAIL: support@myinvestmentmarkets.com</p>
            <p className="text-gray-400">1st Floor River Court, 6 St Denis Street, Port Louis 11328, Mauritius</p>
        </section>

      </div>
    </div>
  );
};
