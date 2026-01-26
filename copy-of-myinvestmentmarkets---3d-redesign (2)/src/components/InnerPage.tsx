
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { pageContent } from "../data/content";
import { useLanguage } from "../contexts/LanguageContext";

// Import isolated page components
import { AboutPage } from "./AboutPage";
import { LegalPage } from "./LegalPage";
import { MarketPage } from "./MarketPage";
import { FAQPage } from "./FAQPage";
import { PartnersPage } from "./PartnersPage";
import { LearningPage } from "./LearningPage";
import { PaymentsPage } from "./PaymentsPage";
import { ContactPage } from "./ContactPage";
import { PlatformSection } from "./PlatformSection"; // Imported PlatformSection

// Import new detailed legal pages
import { TermsConditionsPage } from "./TermsConditionsPage";
import { RiskDisclosurePage } from "./RiskDisclosurePage";
import { ComplaintHandlingPage } from "./ComplaintHandlingPage";
import { OrderExecutionPage } from "./OrderExecutionPage";
import { KycAmlPage } from "./KycAmlPage";
import { DisasterRecoveryPage } from "./DisasterRecoveryPage";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";
import { RiskManagementPage } from "./RiskManagementPage";
import { ClientAgreementPage } from "./ClientAgreementPage";
import { ChurningPolicyPage } from "./ChurningPolicyPage";
import { Footer } from "./Footer";

interface InnerPageProps {
  pageId: string;
  onBack: () => void;
  onNavigate?: (pageId: string) => void;
}

export const InnerPage: React.FC<InnerPageProps> = ({ pageId, onBack, onNavigate }) => {
  const content = pageContent[pageId];
  const { t } = useLanguage();

  // If pageId matches a known content ID, use that content.
  // Otherwise, if it's one of the new legal pages, content might be undefined, which is fine as we render specific components below.

  // Render the specific component for each pageId
  const renderContent = () => {
    switch (pageId) {
      case 'about':
        return <AboutPage content={content} t={t} />;

      case 'legal-documents':
        return <LegalPage onBack={onBack} onNavigate={onNavigate} />;

      // --- Platform Pages ---
      case 'platform-mt5':
        return <PlatformSection defaultSlide={0} />;
      case 'platform-web':
        return <PlatformSection defaultSlide={1} />;
      case 'platform-app':
        return <PlatformSection defaultSlide={2} />;

      // --- Detailed Legal Pages ---
      case 'terms-conditions':
        return <TermsConditionsPage />;
      case 'risk-disclosure':
        return <RiskDisclosurePage />;
      case 'complaint-handling':
        return <ComplaintHandlingPage />;
      case 'order-execution':
        return <OrderExecutionPage />;
      case 'kyc-aml':
        return <KycAmlPage />;
      case 'disaster-recovery':
        return <DisasterRecoveryPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'risk-management':
        return <RiskManagementPage />;
      case 'client-agreement':
        return <ClientAgreementPage />;
      case 'churning-policy':
        return <ChurningPolicyPage />;

      // Market Pages (Share same structure but data driven)
      case 'forex':
      case 'indices':
      case 'commodities':
      case 'stocks':
      case 'crypto':
        // Ensure content exists for markets
        return content ? <MarketPage content={content} t={t} /> : null;

      case 'customer-service':
        return content ? <FAQPage content={content} t={t} /> : null;

      // Independent Info Pages (Formerly shared InfoPage)
      case 'ib-affiliates':
        return content ? <PartnersPage content={content} t={t} /> : null;

      case 'learning-hub':
        return content ? <LearningPage content={content} t={t} /> : null;

      case 'payment-methods':
        return content ? <PaymentsPage content={content} t={t} /> : null;

      case 'contact-us':
        return content ? <ContactPage content={content} t={t} onNavigate={onNavigate} /> : null;

      default:
        // Fallback for any missed market/info types
        if (content?.type === 'market') return <MarketPage content={content} t={t} />;
        return content ? <ContactPage content={content} t={t} /> : null; // Safe fallback
    }
  };

  // Determine if the page requires a full-screen bleed layout (no container)
  const isFullScreenPage = ['about', 'contact-us', 'platform-mt5', 'platform-web', 'platform-app'].includes(pageId);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen bg-[#020617] relative selection:bg-red-500/30 flex flex-col"
    >
      {/* Background Ambience - Kept global for consistency (Visible only if page doesn't cover it) */}
      <div className="fixed inset-0 pointer-events-none">
        {/* SCALING UPDATE: Converted px to rem */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* CONDITIONAL LAYOUT */}
      {isFullScreenPage ? (
        <div className="relative z-10 flex-1">
          {/* Custom Back Button for Full Screen Pages */}
          <div className="absolute top-24 left-6 z-50">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-sm font-bold uppercase tracking-wide">
                {t("page.back")}
              </span>
            </button>
          </div>

          {renderContent()}
        </div>
      ) : (
        /* STANDARD LAYOUT: Contained with padding */
        <div className="container mx-auto px-6 pt-24 lg:pt-32 pb-20 relative z-10 flex-1">
          {/* Standard Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-bold uppercase tracking-wide">
              {t("page.back")}
            </span>
          </button>

          {/* Render Isolated Content */}
          {renderContent()}
        </div>
      )}

      {/* Footer displayed at the bottom of every inner page */}
      <div className="relative z-10">
        <Footer onNavigate={onNavigate} />
      </div>
    </motion.div>
  );
};
