import React from 'react';
import logo from '../../assets/logo_title.png'; // Adjust the path as necessary

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Logo" style={{ width: '400px', height: 'auto' }} />
    </div>
  );
};