import React from 'react';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Your ultimate destination for Indian esports coverage
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/matches" className="hover:text-pink-500">Matches</a></li>
              <li><a href="/teams" className="hover:text-pink-500">Teams</a></li>
              <li><a href="/players" className="hover:text-pink-500">Players</a></li>
              <li><a href="/rankings" className="hover:text-pink-500">Rankings</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Games</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/game/bgmi" className="hover:text-pink-500">BGMI</a></li>
              <li><a href="/game/valorant" className="hover:text-pink-500">Valorant</a></li>
              <li><a href="/game/codm" className="hover:text-pink-500">COD Mobile</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-500">Discord</a></li>
              <li><a href="#" className="hover:text-pink-500">Twitter</a></li>
              <li><a href="#" className="hover:text-pink-500">Instagram</a></li>
              <li><a href="#" className="hover:text-pink-500">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Spawn Right. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};