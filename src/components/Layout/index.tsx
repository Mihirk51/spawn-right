import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLogger } from '../../hooks/useLogger';
import backgroundImage from '../../assets/backgroud.png';

export const Layout: React.FC = () => {
  const location = useLocation();
  const { logNavigation } = useLogger();

  useEffect(() => {
    logNavigation(location.pathname);
  }, [location.pathname, logNavigation]);

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};