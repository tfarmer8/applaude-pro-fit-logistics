import React from 'react';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <HeroSection />
    </div>
  );
};

export default App;
