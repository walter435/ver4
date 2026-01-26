import React, { useState } from 'react';
import { Navbar } from './src/components/Navbar';
import { ThreeDHero } from './src/components/ThreeDHero';
import { ThreeDCarousel } from './src/components/ThreeDCarousel';
import { AccountTypes } from './src/components/AccountTypes';
import { PlatformSection } from './src/components/PlatformSection';
import { FloatingFeatures } from './src/components/FloatingFeatures';
import { PaymentTicker } from './src/components/PaymentTicker';
import { Footer } from './src/components/Footer';
import { InnerPage } from './src/components/InnerPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-500/30 font-sans">
      <Navbar onNavigate={handleNavigate} />
      
      {currentView === 'home' ? (
        <main>
          <ThreeDHero />
          <PlatformSection />
          <ThreeDCarousel />
          <AccountTypes />
          <FloatingFeatures />
          <PaymentTicker />
          <Footer onNavigate={handleNavigate} />
        </main>
      ) : (
        <InnerPage pageId={currentView} onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;