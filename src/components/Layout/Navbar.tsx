import React from 'react';
import { Search } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="relative w-80 mx-4">
            <input
              type="text"
              className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-2 pl-10 rounded-full"
              placeholder="Search"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/tournaments" className="text-white hover:text-pink-500">Tournaments</Link>
            <Link to="/products" className="text-white hover:text-pink-500">Products</Link>
            <Link to="/games" className="text-white hover:text-pink-500">Games</Link>
            <Link to="/about" className="text-white hover:text-pink-500">About</Link>
            <Link to="/news" className="text-white hover:text-pink-500">News</Link>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium whitespace-nowrap">
              Log In / Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};