import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Home/Hero';
import { LiveMatches } from './components/Home/LiveMatches';
import { TournamentsList } from './components/Home/TournamentsList';
import { Statistics } from './components/Home/Statistics';
import { TrustedPartners } from './components/Home/TrustedPartners';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <main className="py-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <Hero />
              <TournamentsList />
            </div>
            <div className="col-span-4">
              <LiveMatches />
              <Statistics />
            </div>
          </div>
          <TrustedPartners />
        </main>
      </div>
    </div>
  );
}

export default App;