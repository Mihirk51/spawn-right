import React from 'react';
import { Search } from 'lucide-react';
import { Logo } from '../common/Logo';

export function Navbar() {
  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="relative w-80">
            <input
              type="text"
              className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-2 pl-10 rounded-full"
              placeholder="Search"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-white hover:text-pink-500">Tournaments</a>
            <a href="#" className="text-white hover:text-pink-500">Products</a>
            <a href="#" className="text-white hover:text-pink-500">Games</a>
            <a href="#" className="text-white hover:text-pink-500">About</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium">
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}