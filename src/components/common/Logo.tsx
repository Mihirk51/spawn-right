import React from 'react';
import { Gamepad2 } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded">
        <Gamepad2 className="h-6 w-6 text-white" />
      </div>
      <span className="text-white text-xl font-bold">Spawn Right</span>
    </div>
  );
};