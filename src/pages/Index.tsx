import { useState } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import UpgradePage from './UpgradePage';

type AppState = 'landing' | 'dashboard' | 'upgrade';

const Index = () => {
  const [currentView, setCurrentView] = useState<AppState>('landing');

  const handleGetStarted = () => {
    // In real app, this would handle authentication
    setCurrentView('dashboard');
  };

  const handleUpgrade = () => {
    setCurrentView('upgrade');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('landing');
  };

  return (
    <>
      {currentView === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      {currentView === 'dashboard' && (
        <Dashboard 
          onUpgrade={handleUpgrade}
          onLogout={handleLogout}
        />
      )}
      {currentView === 'upgrade' && (
        <UpgradePage onBack={handleBackToDashboard} />
      )}
    </>
  );
};

export default Index;
