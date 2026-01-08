import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import SplashScreen from './components/SplashScreen';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setSplashComplete(true);
  };

  return (
    <div className="App relative min-h-screen overflow-x-hidden">
      {/* Splash Screen */}
      {!splashComplete && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Single Abstract Shape Background - Only on Home Page */}
      {isHomePage && (
        <div 
          className="absolute top-0 left-0 right-0 w-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: 'url(/assets/abstract-shape.png)',
            zIndex: 0,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      <div className="relative z-10">
        {/* Space above navigation to show background */}
        <div className="h-4 bg-transparent"></div>
        <Navigation />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
